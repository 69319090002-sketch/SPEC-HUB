// gpu-script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("gpuListContainer");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchBtn");

    // 1. ฟังก์ชันสำหรับสร้างและแสดงผลการ์ดการ์ดจอ ทั้งหมดหรือตามที่ฟิลเตอร์
    function displayGPUs(gpus) {
        container.innerHTML = "";
        
        if (!gpus || gpus.length === 0) {
            container.innerHTML = `<div class="no-result">ไม่พบข้อมูล GPU ที่คุณค้นหา</div>`;
            return;
        }

        gpus.forEach(gpu => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <div class="card-image">
                    <img src="${gpu.image}" alt="${gpu.name}" onerror="this.src='https://placehold.co/220x150?text=SPEC+HUB'">
                </div>
                <div class="card-body">
                    <div class="gpu-name">${gpu.name}</div>
                    <table class="spec-table">
                        <tr><td>Brands</td><td>${gpu.brand}</td></tr>
                        <tr><td>GPU Model</td><td>${gpu.model}</td></tr>
                        <tr><td>Memory Size</td><td>${gpu.memorySize}</td></tr>
                        <tr><td>Max Digital Resolution</td><td>${gpu.maxResolution}</td></tr>
                        <tr><td>HDMI Port</td><td>${gpu.hdmiPort}</td></tr>
                        <tr><td>Power Requirement</td><td>${gpu.powerRequirement}</td></tr>
                        <tr><td>Dimension</td><td>${gpu.dimension}</td></tr>
                        <tr><td>Warranty</td><td>${gpu.warranty}</td></tr>
                    </table>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // 2. ฟังก์ชันจัดการระบบค้นหาแบบ Real-time
    function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const filteredGPUs = (typeof gpuDatabase !== "undefined" ? gpuDatabase : []).filter(gpu => 
            gpu.name.toLowerCase().includes(query) || 
            gpu.brand.toLowerCase().includes(query) ||
            gpu.model.toLowerCase().includes(query)
        );
        displayGPUs(filteredGPUs);
    }

    // 3. ผูกตัวเชื่อมโยงเหตุการณ์ (Event Listeners)
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            handleSearch();
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    if (searchButton) {
        searchButton.addEventListener("click", () => {
            handleSearch();
        });
    }

    function checkIncomingSearch() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('search');
        if (searchParam && searchInput) {
            searchInput.value = searchParam;
            handleSearch();
            return true;
        }
        return false;
    }

    // 5. รันข้อมูลให้แสดงผลทั้งหมดในครั้งแรกที่เปิดเว็บขึ้นมา
    if (typeof gpuDatabase !== "undefined") {
        if (!checkIncomingSearch()) {
            displayGPUs(gpuDatabase);
        }
    } else {
        container.innerHTML = `<div class="no-result">เกิดข้อผิดพลาด: ไม่พบข้อมูลใน gpuDatabase</div>`;
    }
});