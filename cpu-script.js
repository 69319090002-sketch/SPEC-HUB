// ==========================================
// ส่วนที่ 1: ฟังก์ชันสำหรับวาดการ์ด CPU ออกมาบนหน้าจอ
// ==========================================
function displayCPUs(cpusToRender) {
    // ไปหาพื้นที่ที่ชื่อว่า cpuListContainer ในหน้า CPU.html
    const container = document.getElementById('cpuListContainer');
    
    // ล้างข้อมูลเก่าบนหน้าจอออกก่อน (เผื่อมีการพิมพ์ค้นหาใหม่)
    container.innerHTML = ''; 

    // ถ้าพิมพ์ค้นหาแล้ว ไม่เจอรุ่นไหนเลยในฐานข้อมูล
    if (cpusToRender.length === 0) {
        container.innerHTML = '<p class="no-result">ไม่พบข้อมูล CPU ที่คุณค้นหา</p>';
        return;
    }

    // วนลูปเอา CPU แต่ละตัวจากฐานข้อมูลมาสร้างเป็นหน้าจอ
    cpusToRender.forEach(cpu => {
        // สร้างกล่องการ์ดขึ้นมา 1 ใบ
        const card = document.createElement('div');
        card.className = 'card'; // ใช้คลาสเดี่ยวกับ CSS ของคุณ
        
        // ใส่โครงสร้าง HTML (ใช้ตาราง <table> ตามดีไซน์เดิมของคุณเป๊ะ ๆ)
        card.innerHTML = `
            <div class="card-image">
                <img class="product-box" src="${cpu.image}" alt="${cpu.name}" loading="lazy">
            </div>
            <div class="card-body">
                <div class="cpu-name">${cpu.name}</div>
                <table class="spec-table">
                    <tr><td>Series</td><td>${cpu.series}</td></tr>
                    <tr><td>Socket Type</td><td>${cpu.socket}</td></tr>
                    <tr><td>Cores/Threads</td><td>${cpu.coresThreads}</td></tr>
                    <tr><td>Graphics Models</td><td>${cpu.graphics}</td></tr>
                    <tr><td>Default TDP</td><td>${cpu.tdp}</td></tr>
                    <tr><td>CPU Cooler</td><td>${cpu.cooler}</td></tr>
                </table>
            </div>
        `;
        
        // เอาการ์ดที่สร้างเสร็จแล้วไปหย่อนใส่ในหน้าเว็บ
        container.appendChild(card);
    });
}

// ==========================================
// ส่วนที่ 2: ระบบตรวจจับการพิมพ์ค้นหา (พิมพ์ปุ๊บ ทำงานปั๊บ)
// ==========================================
const searchInput = document.getElementById('searchInput');

// สั่งให้ระบบทำงานทุกครั้งที่มีการกดพิมพ์ตัวอักษรลงในช่องค้นหา
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        // ดึงคำที่ผู้ใช้พิมพ์ แล้วแปลงเป็นตัวพิมพ์เล็กทั้งหมดเพื่อให้ค้นหาง่ายขึ้น
        const searchText = e.target.value.toLowerCase();
        
        // ทำการกรองข้อมูล โดยเช็กว่าชื่อ CPU หรือชื่อ Series มีคำที่พิมพ์อยู่ไหม
        const filteredCPUs = cpuDatabase.filter(cpu => {
            const matchName = cpu.name.toLowerCase().includes(searchText);
            const matchSeries = cpu.series.toLowerCase().includes(searchText);
            return matchName || matchSeries;
        });
        
        // ส่งข้อมูลที่กรองเสร็จแล้วไปแสดงผลบนหน้าจอ
        displayCPUs(filteredCPUs);
    });
}

// ==========================================
// ส่วนที่ 3: ตรวจรับคำค้นหาที่ส่งมาจากหน้าอื่น (เช่นหน้า HOME)
// ==========================================
function checkIncomingSearch() {
    // แกะคำค้นหาที่แนบมากับ URL (เช่น ?search=Ryzen)
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');

    if (searchParam) {
        // 1. เอาคำนั้นไปแปะในช่อง Search ของหน้า CPU
        if (searchInput) {
            searchInput.value = searchParam;
        }
        
        // 2. กรองข้อมูล CPU ให้เหลือเฉพาะตัวที่ตรงกับคำค้นหา
        const searchText = searchParam.toLowerCase();
        const filteredCPUs = cpuDatabase.filter(cpu => {
            const matchName = cpu.name.toLowerCase().includes(searchText);
            const matchSeries = cpu.series.toLowerCase().includes(searchText);
            return matchName || matchSeries;
        });
        
        // 3. สั่งแสดงผลเฉพาะตัวที่กรองเสร็จแล้ว
        displayCPUs(filteredCPUs);
    } else {
        // ถ้าไม่มีคำค้นหาส่งมา (เช่นเปิดหน้า CPU ตรงๆ) ให้โชว์ทั้งหมดตามปกติ
        displayCPUs(cpuDatabase);
    }
}

// สั่งให้ระบบเช็กคำค้นหาทันทีเมื่อเปิดหน้าเว็บ CPU.html ครั้งแรก
checkIncomingSearch();