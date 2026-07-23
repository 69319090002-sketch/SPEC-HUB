const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname)); // รับไฟล์ static (HTML, CSS, JS)

// 1. เชื่อมต่อฐานข้อมูล SQLite (สร้างไฟล์ database.db อัตโนมัติ)
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// 2. สร้างตาราง users หากยังไม่มี
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// --- API Endpoints ---

// API สมัครสมาชิก (/api/signup)
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    }

    try {
        // Hash รหัสผ่านก่อนบันทึกลง Database
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
        db.run(sql, [username, email, hashedPassword], function (err) {
            if (err) {
                // เช็คว่า Username หรือ Email ซ้ำหรือไม่
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ message: 'Username หรือ Email นี้ถูกใช้งานแล้ว' });
                }
                return res.status(500).json({ message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' });
            }

            return res.status(201).json({ message: 'สมัครสมาชิกสำเร็จ', userId: this.lastID });
        });
    } catch (error) {
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการเข้ารหัสพาสเวิร์ด' });
    }
});

// API เข้าสู่ระบบ (/api/login)
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'กรุณากรอก Username และ Password' });
    }

    // ค้นหาผู้ใช้จาก Username หรือ Email
    const sql = `SELECT * FROM users WHERE username = ? OR email = ?`;
    db.get(sql, [username, username], async (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' });
        }

        if (!user) {
            return res.status(400).json({ message: 'ไม่พบชื่อผู้ใช้นี้ในระบบ' });
        }

        // ตรวจสอบรหัสผ่านว่าตรงกับที่ Hash ไว้หรือไม่
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
        }

        // ส่งข้อมูลผู้ใช้งานกลับ (ไม่ส่ง password กลับไป)
        return res.status(200).json({
            message: 'เข้าสู่ระบบสำเร็จ',
            username: user.username,
            email: user.email
        });
    });
});

// เริ่มต้นเปิด Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});