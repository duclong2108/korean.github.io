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
    'connectors': 'count-connectors', 'endings': 'count-endings',
    'expressions': 'count-expressions', 'indirect': 'count-indirect',
    'passive': 'count-passive', 'advanced': 'count-advanced',
    'nominalization': 'count-nominalization',
    'particles': 'count-particles', 'tense': 'count-tense',
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

    // Action Buttons
    bodyHtml += `<div class="action-buttons">
      <button class="mark-learned-btn" data-card-id="${cardId}" onclick="toggleLearned('${cardId}', '${item.name}')">
        <span class="qicon"></span> <span class="btn-text"></span>
      </button>`;

    if (item.examples && item.examples.length > 0) {
      bodyHtml += `<button class="quiz-btn" data-card-id="${cardId}" onclick="startQuiz(this, '${cardId}')">
        <span class="qicon">✏️</span> Luyện tập
      </button>`;
    }

    bodyHtml += `<div class="quiz-area" id="quiz-${cardId}"></div></div>`;

    const isLearned = hasLearned(item.name) ? ' learned' : '';

    return `<div class="grammar-card${isLearned}" id="${cardId}" data-name="${item.name}" data-meaning="${item.meaning}">
      <div class="grammar-card-header">
        <div class="grammar-title-group">
          <span class="grammar-name">${item.name} <span class="learned-check">✓</span></span>
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

// ===== LEARNING PROGRESS SYSTEM =====
const STORAGE_KEY = 'topik2_learned_items';

function getLearnedItems() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) { return []; }
}

function hasLearned(itemName) {
  return getLearnedItems().includes(itemName);
}

function toggleLearned(cardId, itemName) {
  const card = document.getElementById(cardId);
  const items = getLearnedItems();
  const idx = items.indexOf(itemName);

  if (idx > -1) {
    items.splice(idx, 1);
    card.classList.remove('learned');
  } else {
    items.push(itemName);
    card.classList.add('learned');
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// ===== QUIZ SYSTEM =====
function getAllItems() {
  const all = [];
  GRAMMAR_DATA.forEach(cat => cat.items.forEach(item => all.push(item)));
  return all;
}

function stripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function findItemByCardId(cardId) {
  const parts = cardId.replace('card-', '').split('-');
  const ci = parseInt(parts[0]), ii = parseInt(parts[1]);
  return GRAMMAR_DATA[ci]?.items[ii];
}

function generateQuestions(item) {
  const questions = [];
  const allItems = getAllItems();

  item.examples.forEach(ex => {
    const krText = stripHtml(ex.kr);
    const boldMatch = ex.kr.match(/<b>(.*?)<\/b>/g);
    if (!boldMatch) return;
    const answer = boldMatch.map(b => b.replace(/<\/?b>/g, '')).join('');
    const blankText = krText.replace(answer, '______');
    if (blankText === krText) return;

    const wrongPool = allItems
      .filter(it => it.name !== item.name)
      .map(it => {
        const n = it.name.replace(/^-/, '').replace(/[()]/g, '');
        return n.length > 0 ? n : null;
      })
      .filter(Boolean);

    const wrongs = shuffle(wrongPool).slice(0, 3);
    if (wrongs.length < 3) return;

    const options = shuffle([answer, ...wrongs]);
    const correctIdx = options.indexOf(answer);

    questions.push({
      sentence: blankText,
      translation: ex.vi,
      options,
      correctIdx,
      answer
    });
  });

  return shuffle(questions).slice(0, 5);
}

function startQuiz(btn, cardId) {
  const item = findItemByCardId(cardId);
  if (!item) return;

  const questions = generateQuestions(item);
  if (questions.length === 0) {
    const area = document.getElementById(`quiz-${cardId}`);
    area.innerHTML = `<div class="quiz-container"><p style="color:var(--text-muted)">Không đủ dữ liệu để tạo bài tập.</p></div>`;
    return;
  }

  btn.style.display = 'none';
  renderQuestion(cardId, questions, 0, 0);
}

function renderQuestion(cardId, questions, idx, score) {
  const area = document.getElementById(`quiz-${cardId}`);
  if (idx >= questions.length) {
    const pct = Math.round((score / questions.length) * 100);
    const icon = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';
    area.innerHTML = `<div class="quiz-container">
      <div class="quiz-score">
        <div class="score-icon">${icon}</div>
        <div class="score-text">${score}/${questions.length}</div>
        <div class="score-detail">Đúng ${pct}% — ${pct >= 80 ? 'Xuất sắc!' : pct >= 50 ? 'Khá tốt!' : 'Cần ôn thêm!'}</div>
        <button class="quiz-restart-btn" onclick="restartQuiz('${cardId}')">🔄 Làm lại</button>
      </div>
    </div>`;
    return;
  }

  const q = questions[idx];
  const labels = ['A', 'B', 'C', 'D'];
  area.innerHTML = `<div class="quiz-container">
    <div class="quiz-header">
      <div class="quiz-title">✏️ LUYỆN TẬP</div>
      <div class="quiz-progress">Câu ${idx + 1}/${questions.length} · Đúng: ${score}</div>
    </div>
    <div class="quiz-question">Điền vào chỗ trống:<br>${q.sentence.replace('______', '<span class="blank">?</span>')}</div>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `<div class="quiz-option" data-idx="${i}" onclick="checkAnswer('${cardId}', ${idx}, ${i}, ${q.correctIdx}, ${score}, ${questions.length})">
        <span class="opt-label">${labels[i]}</span>
        <span>${opt}</span>
      </div>`).join('')}
    </div>
    <div id="feedback-${cardId}"></div>
  </div>`;

  area._questions = questions;
}

function checkAnswer(cardId, qIdx, selectedIdx, correctIdx, score, total) {
  const area = document.getElementById(`quiz-${cardId}`);
  const questions = area._questions;
  const options = area.querySelectorAll('.quiz-option');
  const isCorrect = selectedIdx === correctIdx;

  options.forEach((opt, i) => {
    opt.classList.add('disabled');
    if (i === correctIdx) opt.classList.add('correct');
    if (i === selectedIdx && !isCorrect) opt.classList.add('wrong');
  });

  const newScore = isCorrect ? score + 1 : score;
  const fb = document.getElementById(`feedback-${cardId}`);
  const q = questions[qIdx];
  fb.innerHTML = `<div class="quiz-feedback ${isCorrect ? 'correct-fb' : 'wrong-fb'}">
    ${isCorrect ? '✅ Chính xác!' : `❌ Sai rồi! Đáp án đúng: <b>${q.answer}</b>`}
    <div class="fb-translation">${q.translation}</div>
  </div>
  <button class="quiz-next-btn" onclick="renderQuestion('${cardId}', document.getElementById('quiz-${cardId}')._questions, ${qIdx + 1}, ${newScore})">
    ${qIdx + 1 < total ? '➡️ Câu tiếp' : '📊 Xem kết quả'}
  </button>`;
}

function restartQuiz(cardId) {
  const item = findItemByCardId(cardId);
  if (!item) return;
  const questions = generateQuestions(item);
  const area = document.getElementById(`quiz-${cardId}`);
  area._questions = questions;
  renderQuestion(cardId, questions, 0, 0);
}
