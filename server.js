const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// 1. เชื่อมต่อฐานข้อมูล SQLite
const dbPath = path.resolve(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database at:', dbPath);
    }
});

// 2. สร้างตารางและอัปเดตโครงสร้าง DB แบบปลอดภัย
db.serialize(() => {
    // สร้างตารางหากยังไม่มี
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT DEFAULT 'user',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // 💡 ป้องกัน Error: ตรวจสอบและเพิ่มคอลัมน์ role ลงในฐานข้อมูลเดิมหากยังไม่มี
    db.run(`ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'user'`, (err) => {
        if (err) {
            // ถ้ามีคอลัมน์ role อยู่แล้ว จะข้ามไปไม่แจ้ง Error
            console.log('Column "role" already exists or created.');
        } else {
            console.log('Column "role" added successfully.');
        }

        // อัปเดตสิทธิ์ให้ admin1234
        db.run(`UPDATE users SET role = 'admin' WHERE username = 'admin1234'`);
    });
});

// --- API Endpoints ---

// API สมัครสมาชิก (/api/signup)
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = `INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, 'user')`;
        
        db.run(sql, [username, email, hashedPassword], function (err) {
            if (err) {
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

    const sql = `SELECT * FROM users WHERE username = ? OR email = ?`;
    db.get(sql, [username, username], async (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' });
        }

        if (!user) {
            return res.status(400).json({ message: 'ไม่พบชื่อผู้ใช้นี้ในระบบ' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: 'รหัสผ่านไม่ถูกต้อง' });
        }

        return res.status(200).json({
            message: 'เข้าสู่ระบบสำเร็จ',
            username: user.username,
            email: user.email,
            role: user.role || 'user'
        });
    });
});

// API พิเศษสำหรับอัปเกรด admin1234 ให้เป็น admin
app.get('/api/make-me-admin', (req, res) => {
    db.run(`UPDATE users SET role = 'admin' WHERE username = 'admin1234'`, function(err) {
        if (err) return res.send('เกิดข้อผิดพลาด: ' + err.message);
        res.send('สำเร็จ! บัญชี admin1234 ได้รับสิทธิ์ Admin เรียบร้อยแล้วครับ ลองกด Login ใหม่ได้เลย');
    });
});

// API ดึงรายชื่อผู้ใช้ทั้งหมด (สำหรับ Admin Panel)
app.get('/api/admin/users', (req, res) => {
    const sql = `SELECT id, username, email, role, created_at FROM users ORDER BY id DESC`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้' });
        }
        res.status(200).json(rows);
    });
});

// API แก้ไขข้อมูลผู้ใช้ และ/หรือ ตั้งรหัสผ่านใหม่ (สำหรับ Admin)
app.put('/api/admin/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { username, email, newPassword } = req.body;

    if (!username || !email) {
        return res.status(400).json({ message: 'กรุณากรอก Username และ Email' });
    }

    try {
        if (newPassword && newPassword.trim() !== '') {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            const sql = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`;
            
            db.run(sql, [username, email, hashedPassword, userId], function (err) {
                if (err) {
                    return res.status(500).json({ message: 'ไม่สามารถอัปเดตข้อมูลผู้ใช้ได้' });
                }
                return res.status(200).json({ message: 'แก้ไขข้อมูลและเปลี่ยนรหัสผ่านเรียบร้อยแล้ว' });
            });
        } else {
            const sql = `UPDATE users SET username = ?, email = ? WHERE id = ?`;
            
            db.run(sql, [username, email, userId], function (err) {
                if (err) {
                    return res.status(500).json({ message: 'ไม่สามารถอัปเดตข้อมูลผู้ใช้ได้' });
                }
                return res.status(200).json({ message: 'แก้ไขข้อมูลเรียบร้อยแล้ว' });
            });
        }
    } catch (error) {
        return res.status(500).json({ message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' });
    }
});

// เริ่มต้นเปิด Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});