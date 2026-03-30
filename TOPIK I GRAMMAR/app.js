// ===== APP.JS - TOPIK I Grammar Website =====

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('grammarContainer');
  const searchInput = document.getElementById('searchInput');
  const searchDropdown = document.getElementById('searchDropdown');
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const backToTop = document.getElementById('backToTop');
  const noResults = document.getElementById('noResults');

  // Set total grammar count
  let total = 0;
  GRAMMAR_DATA.forEach(cat => total += cat.items.length);
  document.getElementById('totalGrammar').textContent = total;

  // Set sidebar counts
  const catIdMap = {
    'particles': 'count-particles', 'endings': 'count-endings', 'tense': 'count-tense',
    'connectors': 'count-connectors', 'expressions': 'count-expressions',
    'modifiers': 'count-modifiers', 'negation': 'count-negation',
    'irregular': 'count-irregular', 'honorific': 'count-honorific'
  };
  GRAMMAR_DATA.forEach(cat => {
    const el = document.getElementById(catIdMap[cat.id]);
    if (el) el.textContent = cat.items.length;
  });

  // ===== RENDER ALL GRAMMAR =====
  function renderAll() {
    container.innerHTML = '';
    noResults.style.display = 'none';
    GRAMMAR_DATA.forEach((cat, ci) => {
      container.innerHTML += renderCategory(cat, ci);
    });
    attachCardListeners();
  }

  function renderCategory(cat, ci) {
    let html = `<div class="category-section" id="cat-${cat.id}">`;
    html += `<div class="category-header">
      <div class="cat-icon">${cat.icon}</div>
      <div>
        <h2>${cat.title}</h2>
        <div class="cat-desc">${cat.description}</div>
      </div>
    </div>`;
    cat.items.forEach((item, i) => {
      html += renderCard(item, `card-${ci}-${i}`);
    });
    html += `</div>`;
    return html;
  }

  function renderCard(item, cardId) {
    const levelClass = item.level === 1 ? 'level-1' : 'level-2';
    const levelText = `Cấp ${item.level}`;

    let bodyHtml = '';

    // Theory
    if (item.theory) {
      bodyHtml += `<div class="gc-section">
        <div class="gc-section-title"><span class="icon">📖</span> Lý thuyết</div>
        <div class="gc-theory">${item.theory.map(p => `<p>${p}</p>`).join('')}</div>
      </div>`;
    }

    // Conjugation
    if (item.conjugation && item.conjugation.length > 0) {
      bodyHtml += `<div class="gc-section">
        <div class="gc-section-title"><span class="icon">🔧</span> Cách chia</div>
        <table class="conj-table"><thead><tr>`;
      const cols = item.conjugationCols || ['Điều kiện', 'Cách dùng', 'Ví dụ'];
      cols.forEach(c => bodyHtml += `<th>${c}</th>`);
      bodyHtml += `</tr></thead><tbody>`;
      item.conjugation.forEach(row => {
        bodyHtml += `<tr>`;
        row.forEach((cell, ci) => {
          const cls = ci >= 1 ? ' class="korean"' : '';
          bodyHtml += `<td${cls}>${cell}</td>`;
        });
        bodyHtml += `</tr>`;
      });
      bodyHtml += `</tbody></table></div>`;
    }

    // Examples
    if (item.examples && item.examples.length > 0) {
      bodyHtml += `<div class="gc-section">
        <div class="gc-section-title"><span class="icon">💡</span> Ví dụ</div>`;
      item.examples.forEach(ex => {
        bodyHtml += `<div class="example-box">
          <div class="example-kr">${ex.kr}</div>
          <div class="example-vi">${ex.vi}</div>
        </div>`;
      });
      bodyHtml += `</div>`;
    }

    // Notes
    if (item.notes && item.notes.length > 0) {
      bodyHtml += `<div class="gc-section">
        <div class="gc-section-title"><span class="icon">📌</span> Lưu ý</div>`;
      item.notes.forEach(n => {
        bodyHtml += `<div class="note-box">
          <div class="note-title">⚠️ Lưu ý</div>
          <p>${n}</p>
        </div>`;
      });
      bodyHtml += `</div>`;
    }

    // Special cases
    if (item.special && item.special.length > 0) {
      bodyHtml += `<div class="gc-section">
        <div class="gc-section-title"><span class="icon">🔥</span> Trường hợp đặc biệt</div>`;
      item.special.forEach(s => {
        bodyHtml += `<div class="special-box">
          <div class="special-title">⭐ Đặc biệt</div>
          <p>${s}</p>
        </div>`;
      });
      bodyHtml += `</div>`;
    }

    // Comparison
    if (item.comparison) {
      bodyHtml += `<div class="gc-section">
        <div class="gc-section-title"><span class="icon">⚖️</span> So sánh</div>
        <div class="compare-box">
          <div class="compare-title">📊 So sánh</div>
          <p>${item.comparison}</p>
        </div>
      </div>`;
    }

    return `<div class="grammar-card" id="${cardId}" data-name="${item.name}" data-meaning="${item.meaning}">
      <div class="grammar-card-header">
        <div class="grammar-title-group">
          <span class="grammar-name">${item.name}</span>
          <span class="grammar-meaning">${item.meaning}</span>
        </div>
        <span class="grammar-level-badge ${levelClass}">${levelText}</span>
        <span class="toggle-icon">▼</span>
      </div>
      <div class="grammar-card-body">
        <div class="grammar-card-content">${bodyHtml}</div>
      </div>
    </div>`;
  }

  // ===== CARD TOGGLE =====
  function attachCardListeners() {
    document.querySelectorAll('.grammar-card-header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.closest('.grammar-card');
        card.classList.toggle('open');
      });
    });
  }

  // ===== SEARCH =====
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (q.length === 0) {
      searchDropdown.classList.remove('active');
      showAllCards();
      return;
    }

    // Build search results
    const results = [];
    GRAMMAR_DATA.forEach((cat, ci) => {
      cat.items.forEach((item, i) => {
        const searchStr = `${item.name} ${item.meaning} ${(item.theory || []).join(' ')}`.toLowerCase();
        if (searchStr.includes(q)) {
          results.push({ item, catTitle: cat.title, cardId: `card-${ci}-${i}` });
        }
      });
    });

    // Show dropdown
    if (results.length > 0) {
      searchDropdown.innerHTML = results.slice(0, 10).map(r =>
        `<div class="search-result-item" data-card="${r.cardId}">
          <div class="sr-title">${r.item.name}</div>
          <div class="sr-desc">${r.item.meaning} · ${r.catTitle}</div>
        </div>`
      ).join('');
      searchDropdown.classList.add('active');
      noResults.style.display = 'none';

      // Click result
      searchDropdown.querySelectorAll('.search-result-item').forEach(el => {
        el.addEventListener('click', () => {
          const cardId = el.dataset.card;
          const card = document.getElementById(cardId);
          if (card) {
            card.classList.add('open');
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          searchDropdown.classList.remove('active');
          searchInput.value = '';
          showAllCards();
        });
      });
    } else {
      searchDropdown.innerHTML = `<div class="search-result-item"><div class="sr-desc">Không tìm thấy kết quả</div></div>`;
      searchDropdown.classList.add('active');
    }

    // Filter cards in main view
    filterCards(q);
  });

  function filterCards(q) {
    let hasVisible = false;
    document.querySelectorAll('.grammar-card').forEach(card => {
      const name = (card.dataset.name || '').toLowerCase();
      const meaning = (card.dataset.meaning || '').toLowerCase();
      if (name.includes(q) || meaning.includes(q)) {
        card.style.display = '';
        hasVisible = true;
      } else {
        card.style.display = 'none';
      }
    });

    document.querySelectorAll('.category-section').forEach(sec => {
      const visibleCards = sec.querySelectorAll('.grammar-card[style=""],.grammar-card:not([style])');
      const hiddenCards = sec.querySelectorAll('.grammar-card[style*="display: none"]');
      if (hiddenCards.length === sec.querySelectorAll('.grammar-card').length) {
        sec.style.display = 'none';
      } else {
        sec.style.display = '';
      }
    });

    noResults.style.display = hasVisible ? 'none' : 'block';
  }

  function showAllCards() {
    document.querySelectorAll('.grammar-card').forEach(card => card.style.display = '');
    document.querySelectorAll('.category-section').forEach(sec => sec.style.display = '');
    noResults.style.display = 'none';
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      searchDropdown.classList.remove('active');
    }
  });

  // ===== SIDEBAR NAVIGATION =====
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const target = item.dataset.target;

      document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Clear search
      searchInput.value = '';
      showAllCards();
      searchDropdown.classList.remove('active');

      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(target);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      // Close mobile sidebar
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('active');
    });
  });

  // ===== MOBILE SIDEBAR =====
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
  });

  sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
  });

  // ===== BACK TO TOP =====
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Update active sidebar based on scroll
    updateActiveSidebar();
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function updateActiveSidebar() {
    const sections = document.querySelectorAll('.category-section');
    let current = 'home';
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 150) {
        current = sec.id;
      }
    });
    document.querySelectorAll('.sidebar-item').forEach(item => {
      item.classList.toggle('active', item.dataset.target === current);
    });
  }

  // ===== INIT =====
  renderAll();

  // Add animation delay to cards
  document.querySelectorAll('.grammar-card').forEach((card, i) => {
    card.style.animationDelay = `${(i % 10) * 0.05}s`;
  });
});
