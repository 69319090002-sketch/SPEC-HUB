const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------------------------------------------
// ⚡ ระบบ AI ตรวจกรองคำหยาบ (รองรับทั้ง AQ. และ AIza)
// -----------------------------------------------------------------
const usernameCache = new Map();

async function validateUsernameWithAI(username) {
    const rawApiKey = (process.env.GEMINI_API_KEY || '').trim();
    if (!rawApiKey) {
        console.warn('⚠️ ไม่พบ GEMINI_API_KEY ใน Environment Variables');
        return { isSafe: true };
    }

    const key = username.toLowerCase().trim();

    // 1. ตรวจใน Cache ก่อน
    if (usernameCache.has(key)) {
        const cachedSafe = usernameCache.get(key);
        console.log(`⚡ [Cache Hit] "${username}" -> ${cachedSafe ? 'SAFE' : 'UNSAFE'}`);
        return { isSafe: cachedSafe };
    }

    try {
        const prompt = `You are a strict username content moderator.
Review the username: "${username}"
Check for:
1. Profanity, slurs, swear words, insults, derogatory terms, vulgar slang in Thai, English, Isan, Northern, Southern, or Karaoke phonetics (e.g., isus, kwai, hee, yed, dick, asshole).
2. Hate speech, body shaming, offensive sexual content.
3. Leetspeak or symbol bypasses.

Reply ONLY "UNSAFE" if inappropriate, or "SAFE" if acceptable. No other text.`;

        // กำหนด Header ให้รองรับทั้งคีย์ AQ และ AIza
        const headers = {
            'Content-Type': 'application/json',
            'x-goog-api-key': rawApiKey
        };

        if (rawApiKey.startsWith('AQ.')) {
            headers['Authorization'] = `Bearer ${rawApiKey}`;
        }

        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${rawApiKey}`;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.0,
                    maxOutputTokens: 5
                }
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('❌ AI API Error Response:', JSON.stringify(data));
            return { isSafe: true };
        }

        const resultText = (data.candidates?.[0]?.content?.parts?.[0]?.text || '').trim().toUpperCase();
        const isSafe = !resultText.includes('UNSAFE');

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
        const [aiCheck, checkUser] = await Promise.all([
            validateUsernameWithAI(cleanUsername),
            pool.query(
                'SELECT username, email FROM users WHERE LOWER(username) = LOWER($1) OR LOWER(email) = LOWER($2)',
                [cleanUsername, cleanEmail]
            )
        ]);

        if (!aiCheck.isSafe) {
            return res.status(400).json({ 
                message: '❌ ชื่อบัญชีไม่เหมาะสม (มีคำหยาบคาย ดูถูก หรือคำไม่สุภาพ)' 
            });
        }

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