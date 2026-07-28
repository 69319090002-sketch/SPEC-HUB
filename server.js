const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();

// อนุญาตให้หน้าเว็บจากทุกโดเมน (รวมถึง Netlify) เรียกใช้งาน API ได้
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// เชื่อมต่อ Neon Database ผ่าน DATABASE_URL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// ตรวจสอบการเชื่อมต่อ Neon
pool.connect((err, client, release) => {
    if (err) {
        console.error('❌ ไม่สามารถเชื่อมต่อกับ Neon Database ได้:', err.message);
    } else {
        console.log('✅ เชื่อมต่อกับ Neon Database บน Cloud เรียบร้อยแล้ว!');
        release();
    }
});

// ==========================================
// API ROUTES
// ==========================================

// หน้าแรกเช็กสถานะการทำงานของ Backend
app.get('/', (req, res) => {
    res.send('🚀 SPEC HUB Backend Server is Running Online!');
});

// 1. READ: ดึงข้อมูลผู้ใช้ทั้งหมดจาก Neon
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, username, email, password, created_at FROM users ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).json({ error: 'ไม่สามารถดึงข้อมูลผู้ใช้จาก Neon ได้: ' + err.message });
    }
});

// 2. UPDATE: แก้ไขรหัสผ่าน
app.put('/api/users/:id/password', async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;

    if (!newPassword || newPassword.trim() === '') {
        return res.status(400).json({ error: 'กรุณากรอกรหัสผ่านใหม่' });
    }

    try {
        const result = await pool.query(
            'UPDATE users SET password = $1 WHERE id = $2 RETURNING id, username',
            [newPassword.trim(), id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'ไม่พบบัญชีผู้ใช้นี้ในระบบ' });
        }

        res.json({ message: `แก้ไขรหัสผ่านของบัญชี "${result.rows[0].username}" เรียบร้อยแล้ว!` });
    } catch (err) {
        console.error('Error updating password:', err.message);
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในการอัปเดตรหัสผ่านลง Neon' });
    }
});

// 3. DELETE: ลบบัญชีผู้ใช้
app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING username', [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'ไม่พบบัญชีผู้ใช้นี้ในระบบ' });
        }

        res.json({ message: `ลบบัญชี "${result.rows[0].username}" ออกจาก Neon เรียบร้อยแล้ว!` });
    } catch (err) {
        console.error('Error deleting user:', err.message);
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในการลบบัญชีผู้ใช้' });
    }
});

// กำหนด Port รองรับการ Deploy บน Cloud
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 SPEC HUB Server พร้อมทำงานแล้วที่ Port ${PORT}`);
});