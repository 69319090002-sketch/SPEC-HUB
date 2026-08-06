// ==========================================
// กำหนด URL ของ API ให้สลับอัตโนมัติ (Local vs Online)
// ==========================================
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000'
    : 'https://spec-hub.onrender.com';

// ==========================================
// ตัวแปรสำหรับเก็บข้อมูล CPU
// ==========================================
let cpusData = [];

// ==========================================
// ดึงข้อมูล CPU จาก Backend API
// ==========================================
async function fetchCPUs() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cpus`);
        if (!response.ok) throw new Error('ไม่สามารถดึงข้อมูลจาก Server ได้');
        cpusData = await response.json();
    } catch (error) {
        console.warn('⚠️ เกิดข้อผิดพลาดในการดึงข้อมูลจาก API กำลังใช้ cpuDatabase สำรอง:', error);
        // Fallback: ใช้ข้อมูล local cpuDatabase หากเซิร์ฟเวอร์ยังไม่พร้อมใช้งาน
        cpusData = typeof cpuDatabase !== 'undefined' ? cpuDatabase : [];
    }

    // เมื่อดึงข้อมูลเสร็จแล้ว ให้ทำการตรวจสอบคำค้นหาและแสดงผล
    checkIncomingSearch();
}

// ==========================================
// ฟังก์ชันสำหรับวาดการ์ด CPU บนหน้าจอ
// ==========================================
function displayCPUs(cpusToRender) {
    const container = document.getElementById('cpuListContainer');
    if (!container) return; // ป้องกัน Error ถ้าหา Container ไม่เจอ
    
    container.innerHTML = ''; 

    // ป้องกันกรณี cpusToRender เป็น undefined หรือไม่มีข้อมูล
    if (!cpusToRender || cpusToRender.length === 0) {
        container.innerHTML = '<p class="no-result">ไม่พบข้อมูล CPU ที่คุณค้นหา</p>';
        return;
    }

    cpusToRender.forEach(cpu => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // รองรับทั้งรูปแบบ camelCase (JS) และ snake_case (PostgreSQL/Neon DB)
        const name = cpu.name || 'N/A';
        const series = cpu.series || '-';
        const socket = cpu.socket || cpu.socket_type || '-';
        const coresThreads = cpu.coresThreads || cpu.cores_threads || '-';
        const graphics = cpu.graphics || cpu.graphics_models || '-';
        const tdp = cpu.tdp || cpu.default_tdp || '-';
        const cooler = cpu.cooler || cpu.cpu_cooler || '-';
        const image = cpu.image || cpu.image_url || 'assets/INTEL.png';

        card.innerHTML = `
            <div class="card-image">
                <img class="product-box" src="${image}" alt="${name}" loading="lazy">
            </div>
            <div class="card-body">
                <div class="cpu-name">${name}</div>
                <table class="spec-table">
                    <tr><td>Series</td><td>${series}</td></tr>
                    <tr><td>Socket Type</td><td>${socket}</td></tr>
                    <tr><td>Cores/Threads</td><td>${coresThreads}</td></tr>
                    <tr><td>Graphics Models</td><td>${graphics}</td></tr>
                    <tr><td>Default TDP</td><td>${tdp}</td></tr>
                    <tr><td>CPU Cooler</td><td>${cooler}</td></tr>
                </table>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// ==========================================
// ฟังก์ชันช่วยกรองข้อมูล CPU ตามคีย์เวิร์ด
// ==========================================
function filterCPUs(keyword) {
    const searchText = keyword.toLowerCase().trim();
    if (!searchText) return cpusData;

    return cpusData.filter(cpu => {
        const matchName = cpu.name ? cpu.name.toLowerCase().includes(searchText) : false;
        const matchSeries = cpu.series ? cpu.series.toLowerCase().includes(searchText) : false;
        return matchName || matchSeries;
    });
}

// ==========================================
// ระบบตรวจจับการพิมพ์ค้นหาในหน้าเว็บ
// ==========================================
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const filteredCPUs = filterCPUs(e.target.value);
        displayCPUs(filteredCPUs);
    });
}

// ==========================================
// ตรวจรับคำค้นหาที่ส่งมาจากหน้าอื่น (URL Parameter ?search=...)
// ==========================================
function checkIncomingSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');

    if (searchParam) {
        if (searchInput) {
            searchInput.value = searchParam;
        }
        const filteredCPUs = filterCPUs(searchParam);
        displayCPUs(filteredCPUs);
    } else {
        displayCPUs(cpusData);
    }
}

// ==========================================
// เริ่มการทำงานโดยการดึงข้อมูลจาก API
// ==========================================
fetchCPUs();