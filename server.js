const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
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
// ROUTES (รองรับทั้ง /signup และ /api/signup กันพลาด)
// ==========================================

// เช็กว่าเซิร์ฟเวอร์ตื่นอยู่ไหม
app.get('/', (req, res) => {
    res.send('🚀 SPEC HUB Backend is RUNNING!');
});

// ฟังก์ชันสำหรับ Signup
const handleSignup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบทุกช่อง' });
    }

    try {
        const checkUser = await pool.query(
            'SELECT * FROM users WHERE username = $1 OR email = $2',
            [username, email]
        );

        if (checkUser.rows.length > 0) {
            return res.status(400).json({ message: 'Username หรือ Email นี้มีผู้ใช้งานในระบบแล้ว' });
        }

        const newUser = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
            [username, email, password]
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

// ดักจับทั้ง 2 URL ป้องกัน 404
app.post('/api/signup', handleSignup);
app.post('/signup', handleSignup);

// 2. GET USERS (สำหรับ Admin)
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, username, email, password, created_at FROM users ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. EDIT PASSWORD
app.put('/api/users/:id/password', async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;

    try {
        const result = await pool.query(
            'UPDATE users SET password = $1 WHERE id = $2 RETURNING id, username',
            [newPassword.trim(), id]
        );
        res.json({ message: `แก้ไขรหัสผ่านสำเร็จ!` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. DELETE USER
app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.json({ message: `ลบบัญชีเรียบร้อยแล้ว!` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});