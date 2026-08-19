// seed-cpus.js
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// ดึงข้อมูลจาก cpu-data.js
const { cpuDatabase } = require('./cpu-data.js');

async function seedData() {
  try {
    console.log('กำลังย้ายข้อมูล CPU ลง Neon...');
    for (const cpu of cpuDatabase) {
      const query = `
        INSERT INTO cpus (name, series, socket, cores_threads, graphics, tdp, cooler, image)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `;
      const values = [
        cpu.name,
        cpu.series,
        cpu.socket,
        cpu.coresThreads,
        cpu.graphics,
        cpu.tdp,
        cpu.cooler,
        cpu.image
      ];
      await pool.query(query, values);
    }
    console.log('ย้ายข้อมูล CPU ทั้งหมดเรียบร้อยแล้ว!');
  } catch (err) {
    console.error('เกิดข้อผิดพลาดในการย้ายข้อมูล:', err);
  } finally {
    await pool.end();
  }
}

seedData();