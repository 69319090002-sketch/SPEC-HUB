const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------------------------------------------
// ⚡ ระบบตรวจกรองคำหยาบความเร็วสูง (Native Fast Moderator)
// -----------------------------------------------------------------
const BLOCKED_WORDS = [
    // คำหยาบภาษาไทย / คำด่า / คำผวน
    'ควย', 'เหี้ย', 'เย็ด', 'ห่า', 'สัส', 'เหด', 'สถุล', 'ระยำ', 'จัญไร', 'ชาติหมา',
    'หน้าตัวเมีย', 'ดักดาน', 'สันดาน', 'หน้าด้าน', 'กวนตีน', 'กระดอ', 'กระจู๋', 'กระป๋อย',
    'หี', 'แตด', 'หมอย', 'หำ', 'เงี่ยน', 'เยด', 'เย็', 'ดอ', 'แรด', 'ดอกทอง', 'กะหรี่',
    'โสเภณี', 'อีเหี้ย', 'อีสัส', 'อีควาย', 'อีดอก', 'ไอ้เหี้ย', 'ไอ้สัส', 'ไอ้ควาย',
    'ไอ้บ้า', 'กวนส้นตีน', 'สถุน', 'ชั่วช้า', 'สถุล', 'แม่ง', 'พ่องตาย', 'แม่มึง',
    'เหี้ยม', 'เปรต', 'อีดอกทอง', 'อีกะหรี่', 'สัสเอ๊ย', 'เย็ดแม่', 'เย็ดเข้',
    
    // คำคาราโอเกะ / แสลงทับศัพท์
    'kuay', 'kuy', 'kway', 'dick', 'cock', 'pussy', 'vagina', 'penis', 'bitch', 'slut',
    'whore', 'fuck', 'fucker', 'fucking', 'shit', 'asshole', 'bastard', 'cunt', 'porn',
    'sex', 'yed', 'yhed', 'isus', 'sus', 'sat', 'e-dok', 'edok', 'hee', 'tad', 'mor-y',
    'kwai', 'kwaii', 'e-kwai', 'piss', 'nigger', 'nigga', 'moron', 'idiot'
];

function validateUsernameWithAI(username) {
    if (!username) return { isSafe: true };

    const raw = username.toLowerCase().trim();
    // ทำความสะอาดอักขระพิเศษและตัวเลขที่ใช้เลี่ยงคำ (เช่น k.u.a.y หรือ k_u_a_y)
    const normalized = raw.replace(/[\s\-_.\d@$!#%^&*()+=/\\|<>?,~`]/g, '');

    for (const badWord of BLOCKED_WORDS) {
        if (raw.includes(badWord) || normalized.includes(badWord)) {
            console.log(`⛔ [Moderation Blocked] "${username}" -> พบคำไม่เหมาะสม: "${badWord}"`);
            return { isSafe: false };
        }
    }

    console.log(`✅ [Moderation Passed] "${username}" -> SAFE`);
    return { isSafe: true };
}

// -----------------------------------------------------------------
// เชื่อมต่อ Neon Database
// -----------------------------------------------------------------
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

// -----------------------------------------------------------------
// 1. SIGNUP API
// -----------------------------------------------------------------
const handleSignup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบทุกช่อง' });
    }

    const cleanUsername = username.trim();
    const cleanEmail = email.trim().toLowerCase();

    try {
        // ตรวจคำหยาบทันที
        const checkSafe = validateUsernameWithAI(cleanUsername);
        if (!checkSafe.isSafe) {
            return res.status(400).json({ 
                message: '❌ ชื่อบัญชีไม่เหมาะสม (มีคำหยาบคาย ดูถูก หรือคำไม่สุภาพ)' 
            });
        }

        // ตรวจสอบข้อมูลซ้ำในฐานข้อมูล Neon
        const checkUser = await pool.query(
            'SELECT username, email FROM users WHERE LOWER(username) = LOWER($1) OR LOWER(email) = LOWER($2)',
            [cleanUsername, cleanEmail]
        );

        if (checkUser.rows.length > 0) {
            const isUsernameTaken = checkUser.rows.some(u => u.username.toLowerCase() === cleanUsername.toLowerCase());
            const isEmailTaken = checkUser.rows.some(u => u.email.toLowerCase() === cleanEmail.toLowerCase());

            if (isUsernameTaken && isEmailTaken) {
                return res.status(400).json({ message: '❌ ทั้งชื่อผู้ใช้และอีเมลนี้มีผู้ใช้งานในระบบแล้ว' });
            }
            if (isUsernameTaken) {
                return res.status(400).json({ message: '❌ ชื่อผู้ใช้นี้มีผู้ใช้งานในระบบแล้ว' });
            }
            if (isEmailTaken) {
                return res.status(400).json({ message: '❌ อีเมลนี้มีผู้ใช้งานในระบบแล้ว' });
            }
        }

        const newUser = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
            [cleanUsername, cleanEmail, password]
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

// -----------------------------------------------------------------
// 2. LOGIN API
// -----------------------------------------------------------------
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

        if (user.password !== password) {
            return res.status(401).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
        }

        return res.status(200).json({
            message: 'เข้าสู่ระบบสำเร็จ',
            username: user.username,
            email: user.email
        });

    } catch (err) {
        console.error('Login Error:', err.message);
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการตรวจสอบข้อมูล: ' + err.message });
    }
};

app.post('/api/login', handleLogin);
app.post('/login', handleLogin);

// -----------------------------------------------------------------
// 3. ADMIN APIs
// -----------------------------------------------------------------
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, username, email, password, created_at FROM users ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/users/:id/password', async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;

    try {
        await pool.query('UPDATE users SET password = $1 WHERE id = $2', [newPassword.trim(), id]);
        res.json({ message: 'แก้ไขรหัสผ่านสำเร็จ!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.json({ message: 'ลบบัญชีเรียบร้อยแล้ว!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});