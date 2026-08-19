const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------------------------------------------
// ⚡ ระบบ AI ตรวจกรองชื่อผู้ใช้ + In-Memory Cache (ความเร็วสูงสุด)
// -----------------------------------------------------------------
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
const usernameCache = new Map(); // แคชผลการตรวจในหน่วยความจำ RAM

async function validateUsernameWithAI(username) {
    if (!process.env.GEMINI_API_KEY) {
        console.warn('⚠️ ไม่พบ GEMINI_API_KEY ในไฟล์ .env');
        return { isSafe: true };
    }

    const key = username.toLowerCase().trim();

    // 1. ตรวจสอบใน Cache ก่อน (ตอบกลับทันทีใน 0 ms)
    if (usernameCache.has(key)) {
        const cachedSafe = usernameCache.get(key);
        console.log(`⚡ [Cache Hit] "${username}" -> ${cachedSafe ? 'SAFE' : 'UNSAFE'}`);
        return { isSafe: cachedSafe };
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3.6-flash',
            contents: `Username to check: "${username}"`,
            config: {
                temperature: 0.0,
                maxOutputTokens: 2,
                systemInstruction: `You are a strict username content moderator.
Review the username for:
1. Profanity, slurs, swear words, insults, derogatory terms, slang, spoonerisms/euphemisms (Thai/English/Isan/Northern/Southern/Karaoke).
2. Bullying, hate speech, body shaming, offensive or vulgar language.
3. Sexual content, anatomy, explicit words.
4. Leetspeak or symbol bypasses.

Reply ONLY "UNSAFE" if inappropriate, or "SAFE" if acceptable. No extra words.`
            }
        });

        const rawResult = (response.text || '').trim().toUpperCase();
        const isSafe = !rawResult.includes('UNSAFE');

        // บันทึกลง Cache
        usernameCache.set(key, isSafe);

        console.log(`⚡ [Fast-AI] "${username}" -> ${isSafe ? '✅ ผ่าน (SAFE)' : '⛔ บล็อก (UNSAFE)'}`);
        return { isSafe };
    } catch (error) {
        console.error('❌ AI Moderation Error:', error.message);
        return { isSafe: true };
    }
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
// 1. SIGNUP API (ทำงานคู่ขนาน AI + DB เร็วขึ้น 2 เท่า)
// -----------------------------------------------------------------
const handleSignup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบทุกช่อง' });
    }

    const cleanUsername = username.trim();
    const cleanEmail = email.trim().toLowerCase();

    try {
        // ⚡ รันตรวจ AI และตรวจฐานข้อมูลพร้อมกันทันที
        const [aiCheck, checkUser] = await Promise.all([
            validateUsernameWithAI(cleanUsername),
            pool.query(
                'SELECT username, email FROM users WHERE LOWER(username) = LOWER($1) OR LOWER(email) = LOWER($2)',
                [cleanUsername, cleanEmail]
            )
        ]);

        // ขั้นตอนที่ 1: เช็กผลการตรวจของ AI
        if (!aiCheck.isSafe) {
            return res.status(400).json({ 
                message: '❌ ชื่อบัญชีไม่เหมาะสม (มีคำหยาบคาย ดูถูก หรือคำไม่สุภาพ)' 
            });
        }

        // ขั้นตอนที่ 2: เช็กข้อมูลซ้ำในฐานข้อมูล
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

        // ขั้นตอนที่ 3: บันทึกผู้ใช้ใหม่
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