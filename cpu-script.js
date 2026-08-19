// ==========================================
// ส่วนที่ 1: ฟังก์ชันสำหรับวาดการ์ด CPU ออกมาบนหน้าจอ
// ==========================================
function displayCPUs(cpusToRender) {
    const container = document.getElementById('cpuListContainer');
    if (!container) return; // ป้องกัน Error ถ้าหา Container ไม่เจอ
    
    container.innerHTML = ''; 

    // ป้องกันกรณี cpusToRender เป็น undefined หรือไม่ใช่ Array
    if (!cpusToRender || cpusToRender.length === 0) {
        container.innerHTML = '<p class="no-result">ไม่พบข้อมูล CPU ที่คุณค้นหา</p>';
        return;
    }

    cpusToRender.forEach(cpu => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-image">
                <img class="product-box" src="${cpu.image}" alt="${cpu.name}" loading="lazy">
            </div>
            <div class="card-body">
                <div class="cpu-name">${cpu.name}</div>
                <table class="spec-table">
                    <tr><td>Series</td><td>${cpu.series || '-'}</td></tr>
                    <tr><td>Socket Type</td><td>${cpu.socket || '-'}</td></tr>
                    <tr><td>Cores/Threads</td><td>${cpu.coresThreads || '-'}</td></tr>
                    <tr><td>Graphics Models</td><td>${cpu.graphics || '-'}</td></tr>
                    <tr><td>Default TDP</td><td>${cpu.tdp || '-'}</td></tr>
                    <tr><td>CPU Cooler</td><td>${cpu.cooler || '-'}</td></tr>
                </table>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// ==========================================
// ส่วนที่ 2: ระบบตรวจจับการพิมพ์ค้นหา
// ==========================================
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        
        // ดึงข้อมูลจาก cpuDatabase
        const db = typeof cpuDatabase !== 'undefined' ? cpuDatabase : [];
        
        const filteredCPUs = db.filter(cpu => {
            const matchName = cpu.name ? cpu.name.toLowerCase().includes(searchText) : false;
            const matchSeries = cpu.series ? cpu.series.toLowerCase().includes(searchText) : false;
            return matchName || matchSeries;
        });
        
        displayCPUs(filteredCPUs);
    });
}

// ==========================================
// ส่วนที่ 3: ตรวจรับคำค้นหาที่ส่งมาจากหน้าอื่น (เช่นหน้า HOME)
// ==========================================
function checkIncomingSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    
    // ดึงข้อมูลจาก cpuDatabase
    const db = typeof cpuDatabase !== 'undefined' ? cpuDatabase : [];

    if (searchParam) {
        if (searchInput) {
            searchInput.value = searchParam;
        }
        
        const searchText = searchParam.toLowerCase();
        const filteredCPUs = db.filter(cpu => {
            const matchName = cpu.name ? cpu.name.toLowerCase().includes(searchText) : false;
            const matchSeries = cpu.series ? cpu.series.toLowerCase().includes(searchText) : false;
            return matchName || matchSeries;
        });
        
        displayCPUs(filteredCPUs);
    } else {
        displayCPUs(db);
    }
}

// สั่งทำงานเมื่อเปิด/โหลดหน้าเว็บครั้งแรก
checkIncomingSearch();