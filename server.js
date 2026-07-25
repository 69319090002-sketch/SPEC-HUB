const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // เพิ่ม CORS เพื่อให้ข้ามโดเมนจาก Netlify ได้
const { Pool } = require('pg');

const app = express();

// รองรับ PORT จาก Render (ถ้าไม่มีให้ใช้ 3000 สำหรับ local)
const PORT = process.env.PORT || 3000;

// อนุญาตให้หน้าเว็บจากโดเมนอื่น (เช่น Netlify) ส่ง Request เข้ามาได้
app.use(cors());

// ตั้งค่าเชื่อมต่อไปยัง Neon PostgreSQL
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_ndLt5ms7japS@ep-lively-art-azybrbkd-pooler.c-3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
});

// ฟังก์ชันสร้างตาราง users อัตโนมัติใน Neon (กรณีที่ยังไม่มีตาราง)
async function initDb() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Database initialized successfully.');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
}
initDb();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// API ดึงรายชื่อผู้ใช้ทั้งหมด
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT username, email FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});

// API สมัครสมาชิก (Signup)
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // เช็กว่า username หรือ email ซ้ำหรือไม่
    const userCheck = await pool.query(
      'SELECT * FROM users WHERE username = $1 OR email = $2',
      [username, email]
    );

    if (userCheck.rows.length > 0) {
      const existingUser = userCheck.rows[0];
      if (existingUser.username === username) {
        return res.status(409).json({ message: 'Username already exists' });
      }
      if (existingUser.email === email) {
        return res.status(409).json({ message: 'Email already exists' });
      }
    }

    // บันทึกข้อมูลลงตาราง users ใน Neon
    await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, password]
    );

    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});

// API เข้าสู่ระบบ (Login)
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // ค้นหาผู้ใช้ตาม username และ password
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', username: result.rows[0].username });
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});