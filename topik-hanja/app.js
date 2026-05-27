// ===== RENDER CARDS =====
const main = document.getElementById('mainContent');
const searchInput = document.getElementById('searchInput');
const searchCount = document.getElementById('searchCount');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const backToTop = document.getElementById('backToTop');
let currentFilter = 'all';

function renderCards(data, query = '') {
    const q = query.toLowerCase().trim();
    let visibleCount = 0;
    let html = '';

    data.forEach((item, idx) => {
        const matchCard = !q || item.char.includes(q) || item.hanja.includes(q) ||
            item.vn.toLowerCase().includes(q) || item.meaning.toLowerCase().includes(q) ||
            item.words.some(w => w.w.includes(q) || w.m.toLowerCase().includes(q));

        if (!matchCard) return;
        if (currentFilter !== 'all' && item.tier !== currentFilter) return;

        visibleCount++;
        const delay = Math.min(visibleCount * 0.04, 0.8);

        html += `<div class="hanja-card theme-${item.theme}" style="animation-delay:${delay}s" data-idx="${idx}">
            <div class="card-header" onclick="toggleCard(this)">
                <div class="hanja-char">${item.char}</div>
                <div class="card-info">
                    <h2>${item.char} <span class="hantu">${item.hanja}</span>
                        <span class="tag tag-${item.tier}">${item.tier === 'essential' ? '⭐' : item.tier === 'common' ? '🔥' : '💎'}</span>
                    </h2>
                    <div class="meaning">${item.vn} — ${item.meaning}</div>
                </div>
                <span class="word-count">${item.words.length} từ</span>
            </div>
            <div class="word-list">
                ${item.words.map(w => {
                    const hl = q && (w.w.includes(q) || w.m.toLowerCase().includes(q)) ? ' highlight' : '';
                    return `<span class="word-chip${hl}" onclick="showWord(${idx},'${w.w}')">
                        <span class="kor">${w.w}</span><span class="vi">${w.m}</span>
                    </span>`;
                }).join('')}
            </div>
        </div>`;
    });

    if (visibleCount === 0) {
        html = `<div class="no-results"><div class="emoji">🔍</div><p>Không tìm thấy kết quả cho "${query}"</p></div>`;
    }

    main.innerHTML = html;
    searchCount.textContent = q || currentFilter !== 'all' ? `${visibleCount}/${data.length}` : `${data.length} gốc 한자`;
}

// ===== SEARCH =====
let searchTimer;
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => renderCards(HANJA_DATA, searchInput.value), 200);
});

// ===== FILTER =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderCards(HANJA_DATA, searchInput.value);
    });
});

// ===== MODAL =====
function showWord(cardIdx, word) {
    const item = HANJA_DATA[cardIdx];
    const w = item.words.find(x => x.w === word);
    if (!w) return;

    // Find which roots this word belongs to
    const roots = HANJA_DATA.filter(h => h.words.some(x => x.w === word) && h.char !== item.char);

    let exHtml = '';
    if (w.ex) {
        const parts = w.ex.split('|');
        exHtml = `<div class="modal-example"><div class="ex-kr">${parts[0]}</div><div class="ex-vi">${parts[1] || ''}</div></div>`;
    }

    let rootsHtml = '';
    if (roots.length > 0) {
        rootsHtml = `<div class="related-roots"><h4>Cũng chứa gốc 한자</h4><div class="related-chips">
            ${roots.map(r => `<span class="related-chip" onclick="scrollToCard('${r.char}')">${r.char} (${r.vn})</span>`).join('')}
        </div></div>`;
    }

    // Find breakdown of hanja in the word
    const breakdown = HANJA_DATA.filter(h => word.includes(h.char)).map(h => `${h.char}(${h.vn})`).join(' + ');

    modalBody.innerHTML = `
        <h3>${w.w}</h3>
        <div class="modal-hanja">Gốc: ${item.char} (${item.hanja}) ${breakdown ? `→ ${breakdown}` : ''}</div>
        <div class="modal-meaning">🇻🇳 ${w.m}</div>
        ${exHtml}
        ${rootsHtml}
    `;
    modalOverlay.classList.add('active');
}

function scrollToCard(char) {
    modalOverlay.classList.remove('active');
    const idx = HANJA_DATA.findIndex(h => h.char === char);
    if (idx === -1) return;
    searchInput.value = char;
    renderCards(HANJA_DATA, char);
    setTimeout(() => {
        const card = document.querySelector('.hanja-card');
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

document.getElementById('modalClose').addEventListener('click', () => modalOverlay.classList.remove('active'));
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) modalOverlay.classList.remove('active'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') modalOverlay.classList.remove('active'); });

// ===== BACK TO TOP =====
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== INIT =====
renderCards(HANJA_DATA);
