const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const app = express();

// อนุญาต CORS แบบครอบคลุมทุก Header/Method
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------------------------------------------
// 🤖 ตั้งค่า Google Gemini AI สำหรับตรวจกรองชื่อผู้ใช้
// -----------------------------------------------------------------
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

async function validateUsernameWithAI(username) {
    if (!process.env.GEMINI_API_KEY) {
        console.warn('⚠️ GEMINI_API_KEY ยังไม่ได้ตั้งค่าใน Environment');
        return { isSafe: true };
    }

    try {
        const prompt = `คุณคือระบบ Content Moderator ตรวจสอบชื่อผู้ใช้ (Username)
วิเคราะห์ว่าชื่อผู้ใช้ "${username}" มีลักษณะดังต่อไปนี้หรือไม่:
1. คำหยาบคาย คำด่าทอ สแลงหยาบ หรือคำผวน (ทั้งภาษาไทย ภาษาอังกฤษ หรือคาราโอเกะ)
2. การดูถูก เหยียดหยาม บูลลี่ เชื้อชาติ เพศ ชาติพันธุ์ หรือศาสนา
3. เนื้อหาส่อไปในทางเพศ ลามก หรืออนาจาร
4. การพิมพ์หลบคำ เช่น ใช้ตัวเลขหรือสัญลักษณ์แทนตัวอักษรเพื่อสื่อถึงคำหยาบ

ตอบเป็นคำเดียวเท่านั้น:
- หากพบความไม่เหมาะสม ให้ตอบว่า "UNSAFE"
- หากปลอดภัยและเหมาะสม ให้ตอบว่า "SAFE"`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.0 // ตั้งค่า 0 เพื่อความแม่นยำและไม่เดาสุ่ม
            }
        });

        const result = response.text ? response.text.trim().toUpperCase() : 'SAFE';
        return { isSafe: !result.includes('UNSAFE') };
    } catch (error) {
        console.error('AI Moderation Error:', error.message);
        // หาก API ขัดข้อง ให้ผ่านไปก่อนเพื่อป้องกันระบบสมัครสมาชิกล่ม
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

// ==========================================
// ROUTES
// ==========================================

// เช็กว่าเซิร์ฟเวอร์ตื่นอยู่ไหม
app.get('/', (req, res) => {
    res.send('🚀 SPEC HUB Backend is RUNNING!');
});

// 1. SIGNUP (พร้อมระบบตรวจจับชื่อผู้ใช้ด้วย AI)
const handleSignup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบทุกช่อง' });
    }

    try {
        // ให้ AI ตรวจสอบความเหมาะสมของชื่อผู้ใช้ก่อน
        const { isSafe } = await validateUsernameWithAI(username.trim());
        if (!isSafe) {
            return res.status(400).json({ 
                message: '❌ ชื่อผู้ใช้นี้ไม่ผ่านการตรวจสอบ (มีคำหยาบคาย ดูถูก หรือไม่เหมาะสม)' 
            });
        }

        const checkUser = await pool.query(
            'SELECT * FROM users WHERE username = $1 OR email = $2',
            [username.trim(), email.trim().toLowerCase()]
        );

        if (checkUser.rows.length > 0) {
            return res.status(400).json({ message: 'Username หรือ Email นี้มีผู้ใช้งานในระบบแล้ว' });
        }

        const newUser = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
            [username.trim(), email.trim().toLowerCase(), password]
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

// 3. GET USERS (สำหรับ Admin)
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, username, email, password, created_at FROM users ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. EDIT PASSWORD
app.put('/api/users/:id/password', async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;

    try {
        await pool.query(
            'UPDATE users SET password = $1 WHERE id = $2 RETURNING id, username',
            [newPassword.trim(), id]
        );
        res.json({ message: `แก้ไขรหัสผ่านสำเร็จ!` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 5. DELETE USER
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