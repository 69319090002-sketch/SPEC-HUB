// ==========================================
// 1. ตัวแปรสำหรับเก็บข้อมูล CPU
// ==========================================
let cpusData = typeof cpuDatabase !== 'undefined' ? cpuDatabase : [];

// ==========================================
// 2. เติมตัวเลือกใน Datalist ค้นหาอัตโนมัติ
// ==========================================
function populateDataList() {
    const dataList = document.getElementById('cpuOptionsCPU');
    if (!dataList || !cpusData) return;

    dataList.innerHTML = cpusData.map(cpu => {
        const name = cpu.name || '';
        return name ? `<option value="${name}">` : '';
    }).join('');
}

// ==========================================
// 3. ฟังก์ชันสำหรับวาดการ์ด CPU บนหน้าจอ
// ==========================================
function displayCPUs(cpusToRender) {
    const container = document.getElementById('cpuListContainer');
    if (!container) return;
    
    container.innerHTML = ''; 

    if (!cpusToRender || cpusToRender.length === 0) {
        container.innerHTML = '<p class="no-result">ไม่พบข้อมูล CPU ที่คุณค้นหา</p>';
        return;
    }

    cpusToRender.forEach(cpu => {
        const card = document.createElement('div');
        card.className = 'card';
        
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
                <img class="product-box" src="${image}" alt="${name}" loading="lazy" onerror="this.src='assets/INTEL.png'">
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
// 4. ฟังก์ชันช่วยกรองข้อมูล CPU ตามคีย์เวิร์ด
// ==========================================
function filterCPUs(keyword) {
    const searchText = (keyword || '').toLowerCase().trim();
    if (!searchText) return cpusData;

    return cpusData.filter(cpu => {
        const matchName = cpu.name ? cpu.name.toLowerCase().includes(searchText) : false;
        const matchSeries = cpu.series ? cpu.series.toLowerCase().includes(searchText) : false;
        const matchSocket = (cpu.socket || cpu.socket_type) ? (cpu.socket || cpu.socket_type).toLowerCase().includes(searchText) : false;
        return matchName || matchSeries || matchSocket;
    });
}

// ==========================================
// 5. ระบบตรวจจับการพิมพ์ค้นหาในหน้าเว็บ
// ==========================================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const SEARCH_DRAFT_KEY = 'spechub_cpu_search_draft';

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        localStorage.setItem(SEARCH_DRAFT_KEY, query);
        const filteredCPUs = filterCPUs(query);
        displayCPUs(filteredCPUs);
    });
}

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        const filteredCPUs = filterCPUs(searchInput.value);
        displayCPUs(filteredCPUs);
    });
}

// ==========================================
// 6. ตรวจรับคำค้นหาที่ส่งมาจากหน้าอื่น (URL Parameter ?search=...)
// ==========================================
function checkIncomingSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const savedDraft = localStorage.getItem(SEARCH_DRAFT_KEY);

    const initialQuery = searchParam || savedDraft || '';

    if (initialQuery && searchInput) {
        searchInput.value = initialQuery;
        const filteredCPUs = filterCPUs(initialQuery);
        displayCPUs(filteredCPUs);
    } else {
        displayCPUs(cpusData);
    }
}

// ==========================================
// 7. เริ่มการทำงานทันทีเมื่อโหลดไฟล์
// ==========================================
displayCPUs(cpusData);
populateDataList();
checkIncomingSearch();