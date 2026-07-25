// gpu-script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("gpuListContainer");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchBtn");
    const suggestionsBox = document.getElementById("gpuSuggestions");

    // 1. ฟังก์ชันสำหรับสร้างและแสดงผลการ์ดการ์ดจอ ทั้งหมดหรือตามที่ฟิลเตอร์
    function displayGPUs(gpus) {
        container.innerHTML = "";
        
        if (gpus.length === 0) {
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

    // 2. ฟังก์ชันสำหรับสร้างและควบคุมกล่องแนะนำคำค้นหา (Custom Suggestions)
    function showSuggestions(keyword) {
        if (keyword === '') {
            suggestionsBox.style.display = 'none';
            return;
        }

        const text = keyword.toLowerCase();
        // ทำการค้นหาคำแนะนำจากทั้ง ชื่อรุ่น, แบรนด์ หรือโมเดล
        const filtered = gpuDatabase.filter(gpu => 
            gpu.name.toLowerCase().includes(text) ||
            gpu.brand.toLowerCase().includes(text) ||
            gpu.model.toLowerCase().includes(text)
        );

        // ตัดการแสดงผลแนะนำสูงสุดแค่ 3 รุ่นแรกเหมือนหน้าแรก
        const topThree = filtered.slice(0, 3);

        if (topThree.length > 0) {
            suggestionsBox.innerHTML = '';
            topThree.forEach(gpu => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = gpu.name;
                
                // เมื่อคลิกคำแนะนำชิ้นไหน ให้คำนั้นใส่ไปใน Input ปิดกล่อง แล้วกดฟิลเตอร์ทันที
                div.addEventListener('click', () => {
                    searchInput.value = gpu.name;
                    suggestionsBox.style.display = 'none';
                    handleSearch();
                });
                suggestionsBox.appendChild(div);
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    }

    // 3. ฟังก์ชันจัดการระบบค้นหาแบบ Real-time
    function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const filteredGPUs = gpuDatabase.filter(gpu => 
            gpu.name.toLowerCase().includes(query) || 
            gpu.brand.toLowerCase().includes(query) ||
            gpu.model.toLowerCase().includes(query)
        );
        displayGPUs(filteredGPUs);
    }

    // 4. ผูกตัวเชื่อมโยงเหตุการณ์ (Event Listeners)
    if (searchInput) {
        // ดักเหตุการณ์การพิมพ์เพื่อทำช่องแนะนำคำค้นหา
        searchInput.addEventListener('input', (e) => {
            showSuggestions(e.target.value.trim());
        });

        // ดักปุ่ม Enter ในช่อง Input เพื่อค้นหา
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                suggestionsBox.style.display = 'none';
                handleSearch();
            }
        });
    }

    // ดักการกดปุ่มค้นหาหลัก
    if (searchButton) {
        searchButton.addEventListener("click", () => {
            suggestionsBox.style.display = 'none';
            handleSearch();
        });
    }

    // สั่งปิดกล่องคำแนะนำเมื่อผู้ใช้นำเมาส์ไปคลิกพื้นที่อื่นๆ ด้านนอกกรอบค้นหา
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            suggestionsBox.style.display = 'none';
        }
    });

    // 5. รันข้อมูลให้แสดงผลทั้งหมดในครั้งแรกที่เปิดหน้าเว็บขึ้นมา
    if (typeof gpuDatabase !== "undefined") {
        displayGPUs(gpuDatabase);
    } else {
        container.innerHTML = `<div class="no-result">เกิดข้อผิดพลาด: ไม่พบข้อมูลใน gpuDatabase</div>`;
    }
});