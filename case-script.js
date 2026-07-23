// case-script.js
function displayCases(casesToRender) {
    const container = document.getElementById('caseListContainer');
    if (!container) return;
    container.innerHTML = '';

    if (casesToRender.length === 0) {
        container.innerHTML = '<p class="no-result">ไม่พบข้อมูลเคสที่คุณค้นหา</p>';
        return;
    }

    casesToRender.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="card-body">
                <div class="case-name">${item.name}</div>
                <table class="spec-table">
                    <tr><td>Motherboard</td><td>${item.motherboard}</td></tr>
                    <tr><td>Max GPU Length</td><td>${item.maxGpuLength}</td></tr>
                    <tr><td>Max CPU Cooler</td><td>${item.maxCpuCooler}</td></tr>
                    <tr><td>Fan Support</td><td>${item.fanSupport}</td></tr>
                    <tr><td>Color</td><td>${item.color}</td></tr>
                </table>
            </div>
        `;
        container.appendChild(card);
    });
}

const caseSearchInput = document.getElementById('searchInput');
const caseSearchBtn = document.getElementById('searchBtn');

function filterCases(searchText) {
    const text = searchText.toLowerCase();
    return caseDatabase.filter(item => {
        return item.name.toLowerCase().includes(text) ||
               item.type.toLowerCase().includes(text) ||
               item.motherboard.toLowerCase().includes(text) ||
               item.color.toLowerCase().includes(text);
    });
}

if (caseSearchInput) {
    caseSearchInput.addEventListener('input', (e) => {
        displayCases(filterCases(e.target.value));
    });
}

if (caseSearchBtn) {
    caseSearchBtn.addEventListener('click', () => {
        displayCases(filterCases(caseSearchInput.value));
    });
}

function checkCaseSearchParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam && caseSearchInput) {
        caseSearchInput.value = searchParam;
        displayCases(filterCases(searchParam));
    } else {
        displayCases(caseDatabase);
    }
}

checkCaseSearchParam();
