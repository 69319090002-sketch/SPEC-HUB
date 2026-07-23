// mainbord-script.js
function displayMainboards(mainboardsToRender) {
    const container = document.getElementById('moboListContainer');
    if (!container) return;
    container.innerHTML = '';

    if (mainboardsToRender.length === 0) {
        container.innerHTML = '<p class="no-result">ไม่พบข้อมูลเมนบอร์ดที่คุณค้นหา</p>';
        return;
    }

    mainboardsToRender.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="card-body">
                <div class="mobo-name">${item.name}</div>
                <table class="spec-table">
                    <tr><td>Socket</td><td>${item.socket}</td></tr>
                    <tr><td>Form Factor</td><td>${item.formFactor}</td></tr>
                    <tr><td>Chipset</td><td>${item.chipset}</td></tr>
                    <tr><td>Memory Slots</td><td>${item.memorySlots}</td></tr>
                    <tr><td>M.2 Slots</td><td>${item.m2Slots}</td></tr>
                    <tr><td>USB Ports</td><td>${item.usbPorts}</td></tr>
                </table>
            </div>
        `;
        container.appendChild(card);
    });
}

const moboSearchInput = document.getElementById('searchInput');
const moboSearchBtn = document.getElementById('searchBtn');

function filterMainboards(searchText) {
    const text = searchText.toLowerCase();
    return mainboardDatabase.filter(item => {
        return item.name.toLowerCase().includes(text) ||
               item.socket.toLowerCase().includes(text) ||
               item.formFactor.toLowerCase().includes(text) ||
               item.chipset.toLowerCase().includes(text);
    });
}

if (moboSearchInput) {
    moboSearchInput.addEventListener('input', (e) => {
        displayMainboards(filterMainboards(e.target.value));
    });
}

if (moboSearchBtn) {
    moboSearchBtn.addEventListener('click', () => {
        displayMainboards(filterMainboards(moboSearchInput.value));
    });
}

function checkMoboSearchParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam && moboSearchInput) {
        moboSearchInput.value = searchParam;
        displayMainboards(filterMainboards(searchParam));
    } else {
        displayMainboards(mainboardDatabase);
    }
}

checkMoboSearchParam();
