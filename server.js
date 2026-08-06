const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();

// อนุญาต CORS แบบครอบคลุมทุก Header/Method
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// เชื่อมต่อ Neon Database
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

pool.connect((err, client, release) => {
    if (err) {
        console.error('❌ Connection error to Neon:', err.message);
    } else {
        console.log('✅ Connected to Neon Database successfully!');
        release();
    }
});

// ==========================================
// ROUTES
// ==========================================

// เช็กว่าเซิร์ฟเวอร์ตื่นอยู่ไหม
app.get('/', (req, res) => {
    res.send('🚀 SPEC HUB Backend is RUNNING!');
});

// 1. SIGNUP
const handleSignup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบทุกช่อง' });
    }

    try {
        const cleanUsername = username.trim();
        const cleanEmail = email.trim().toLowerCase();

        const checkUser = await pool.query(
            'SELECT * FROM users WHERE username = $1 OR email = $2',
            [cleanUsername, cleanEmail]
        );

        if (checkUser.rows.length > 0) {
            return res.status(400).json({ message: 'Username หรือ Email นี้มีผู้ใช้งานในระบบแล้ว' });
        }

        // เข้ารหัส Password ด้วย bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
            [cleanUsername, cleanEmail, hashedPassword]
        );

        res.status(201).json({
            message: 'สมัครสมาชิกสำเร็จ!',
            user: newUser.rows[0]
        });
    } catch (err) {
        console.error('Signup Error:', err.message);
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล: ' + err.message });
    }
};

app.post('/api/signup', handleSignup);
app.post('/signup', handleSignup);

// 2. LOGIN
const handleLogin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'กรุณากรอก Username และ Password' });
    }

    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username.trim()]);

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'ไม่พบชื่อผู้ใช้นี้ในระบบ' });
        }

        const user = result.rows[0];

        // เช็กว่า Password ใน DB เป็นแบบ Hash (ขึ้นต้นด้วย $2a$ หรือ $2b$) หรือ Plaintext เดิม
        let isMatch = false;
        if (user.password.startsWith('$2a$') || user.password.startsWith('$2b$')) {
            isMatch = await bcrypt.compare(password, user.password);
        } else {
            isMatch = (user.password === password);
        }

        if (!isMatch) {
            return res.status(401).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
        }

        return res.status(200).json({
            message: 'เข้าสู่ระบบสำเร็จ',
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        });

    } catch (err) {
        console.error('Login Error:', err.message);
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการตรวจสอบข้อมูล: ' + err.message });
    }
};

app.post('/api/login', handleLogin);
app.post('/login', handleLogin);

// 3. GET USERS (สำหรับ Admin - ปลดล็อกไม่ส่ง password)
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, username, email, created_at FROM users ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. EDIT PASSWORD
app.put('/api/users/:id/password', async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;

    if (!newPassword || newPassword.trim() === '') {
        return res.status(400).json({ message: 'กรุณาระบุรหัสผ่านใหม่' });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword.trim(), salt);

        const result = await pool.query(
            'UPDATE users SET password = $1 WHERE id = $2 RETURNING id, username',
            [hashedPassword, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'ไม่พบข้อมูลผู้ใช้' });
        }

        res.json({ message: 'แก้ไขรหัสผ่านสำเร็จ!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 5. DELETE USER
app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'ไม่พบข้อมูลผู้ใช้' });
        }
        res.json({ message: 'ลบบัญชีเรียบร้อยแล้ว!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 6. GET ALL CPUS (สำหรับดึงข้อมูล CPU ไปแสดงหน้าเว็บ)
app.get('/api/cpus', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM cpus ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});