/* ============ content (from Pravallika's resume) ============ */
const ME = {
  email: 'pravallikakundum18@gmail.com',
  phone: '+91 94928 30679',
  github: 'https://github.com/VALLI-0114',
  linkedin: 'https://linkedin.com/in/kundum-pravallika',
  leetcode: 'https://leetcode.com/u/pravalli01',
  resume: 'assets/Pravallika_Kundum_Resume.pdf',
};

const PROJECTS = [
  { t: 'Q-MoleGen', tl: 'Hybrid classical + quantum ML platform that generates molecules and discovers their properties.', c: '#2c3a44', stat: 'quantum + classical ML',
    stack: ['Generative AI', 'RDKit', 'Qiskit', 'Scikit-learn', 'Python'],
    b: ['Generates candidate molecules, validates them with RDKit and predicts performance with classical and quantum ML models on the Delaney ESOL dataset.', 'Ranks molecules by solubility, drug-likeness and synthetic accessibility.', 'Web dashboard for structures, model performance and side-by-side candidate comparisons.'] },
  { t: 'AI Hirex', tl: 'AI interview prep — LLMs generate role-specific questions, evaluate answers and run technical & HR rounds.', c: '#3c4636', stat: 'live ↗', link: 'https://aihirex-frontend.vercel.app/', when: 'Jun 2026',
    stack: ['Python', 'LLMs', 'Machine Learning', 'Speech-to-Text', 'React'],
    b: ['LLM-generated, role-specific interview questions with automatic evaluation of candidate responses.', 'Simulates technical and HR interviews end to end, with speech-to-text for spoken answers.'] },
  { t: 'CreoVio', tl: 'Text in, published video out — speech, visuals and the YouTube upload, all generated.', c: '#4a3326', stat: 'prompt → YouTube', when: 'May – Jun 2026',
    stack: ['Python', 'React', 'Generative AI', 'LLMs', 'Text-to-Speech', 'YouTube API'],
    b: ['End-to-end AI content platform: converts text to speech and generates videos with Generative AI.', 'Automated YouTube publishing straight from the app.'] },
  { t: 'Internship Portal', tl: 'Django internship management system for universities — students apply, recruiters manage postings.', c: '#2f3d4a', stat: 'Django + REST', when: 'Aug – Nov 2025',
    stack: ['Django', 'Python', 'REST API', 'SQL', 'JavaScript'],
    b: ['RESTful backend with authentication and full CRUD operations.', 'Admin panel for recruiters to manage postings and applicants.'] },
  { t: 'Anemia & PCOD Prediction', tl: 'ML clinical decision support that predicts Anemia and PCOD from lab reports.', c: '#33443f', stat: '91% accuracy',
    stack: ['Python', 'Scikit-learn', 'Flask', 'Pandas', 'SMOTE'],
    b: ['SMOTE-balanced Random Forest reaching 91% accuracy.', 'Predictions served over a Flask REST API.'] },
  { t: 'Eatopia', tl: 'Production-ready food ordering — JWT auth, real-time order tracking and an admin dashboard.', c: '#4d2b2b', stat: 'full-stack',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
    b: ['React frontend on a MySQL-backed Node/Express REST API.', 'JWT authentication, real-time order tracking and an admin dashboard.'] },
  { t: 'Quantum Climate Chain', tl: 'Quantum random numbers (Qiskit) driving climate-change simulations and environmental modelling.', c: '#2d2a44', stat: 'became a paper', when: 'Sep 2025',
    stack: ['Python', 'Qiskit', 'Quantum Computing'],
    b: ['Proof-of-concept using quantum random number generation for climate simulations.', 'Grew into the co-authored ClimateChain paper (IJSREM, Aug 2026) on quantum-secured environmental monitoring.'] },
];

const XP = [
  { r: 'AI Full Stack & Research Intern', co: 'Qubitedge Global Services (OPC) Pvt. Ltd.', d: 'May – Jun 2026 · hybrid',
    s: 'Machine learning models built into full-stack web apps — from data preprocessing to deployment.',
    b: ['Designed and implemented ML models integrated into full-stack web applications, end to end.', 'Built RESTful APIs connecting AI/ML backend services to front-end apps.', 'Managed relational databases and supported cloud deployment workflows.', 'Python · React · Flask/Django · REST APIs · SQL · Cloud Deployment'] },
  { r: 'AI & ML Intern — Captain', co: 'Uptoskills', d: 'Feb – Jun 2026 · remote',
    s: 'Led the intern cohort as Captain while building models for real-world use cases.',
    b: ['Coordinated task allocation, reviewed deliverables and kept milestones on track.', 'Built and evaluated supervised & unsupervised models on structured datasets.', 'Python · Scikit-learn · TensorFlow · Pandas · NumPy'] },
  { r: 'AI & Data Analytics Intern', co: 'Edunet Foundation · AICTE–IBM SkillsBuild', d: 'Jun – Jul 2025 · remote',
    s: 'Supervised & unsupervised models, data pipelines and an insights-dashboard capstone.',
    b: ['Random Forest, K-Means and SVM models reaching up to 89% accuracy.', 'Pipelines covering ingestion, preprocessing, feature engineering and cross-validated evaluation.', 'Capstone: AI-driven business insights in interactive Matplotlib & Seaborn dashboards.'] },
  { r: 'Python Developer Intern', co: 'CODEC Technologies (Google Partner)', d: 'Mar – Apr 2025 · remote',
    s: 'Backend APIs and data pipelines that got faster, cleaner and less buggy.',
    b: ['~20% lower API response latency.', '40% less manual effort through automated validation, cleaning & transformation.', '30% fewer production bug reports after refactoring legacy modules.', 'Python · Flask · REST APIs · JSON · Git'] },
  { r: 'Web Developer Intern', co: 'Youngbot Academy', d: 'Oct – Nov 2024 · Hyderabad (remote)',
    s: 'Responsive, mobile-first interfaces — and a lot of Lighthouse tuning.',
    b: ['35% faster page loads with HTML, CSS & JavaScript.', 'JWT authentication flows and client-side validation; Lighthouse 62 → 91.', 'HTML · CSS · JavaScript · Bootstrap · Git'] },
  { r: 'B.Tech, Information Technology', co: 'JNTU-GV, Vizianagaram', d: '2023 – 2027 · CGPA 8.0',
    s: 'Where it started — DSA, OOP, DBMS, OS, networks, AI & deep learning.',
    b: ['Vice President, Dev Squad Club · Deputy Secretary, ACM JNTU-GV · Class Representative.'] },
];

const SKILLS = {
  languages: ['Python', 'Java', 'JavaScript', 'SQL', 'C'],
  frontend: ['React', 'Next.js', 'HTML', 'CSS', 'Bootstrap'],
  backend: ['Flask', 'Django', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'JWT Auth'],
  ai_ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'OpenCV', 'Deep Learning', 'Computer Vision', 'NLP'],
  data_tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Jupyter', 'Colab'],
  databases: ['PostgreSQL', 'MySQL'],
  devops_cloud: ['Git', 'GitHub', 'Docker', 'Postman', 'n8n'],
  others: ['OpenAI API', 'Gemini API', 'Qiskit', 'RDKit', 'Figma', 'System Design', 'DSA'],
};

const BLOG_MEDIA = [
  { src: 'assets/blog/1.jpg', cap: 'golden hour, quiet mind', sub: 'the reset button' },
  { src: 'assets/blog/2.jpg', cap: 'JNTU-GV — home base', sub: 'since 2023' },
  { src: 'assets/blog/3.jpg', cap: 'where the late-night builds happen', sub: 'one more commit…' },
  { src: 'assets/blog/4.jpg', cap: 'ITYukta 2K26', sub: 'fest nights' },
];

/* ============ icons ============ */
const I = {
  back: '<path d="M10 7l-5 5 5 5M5 12h14"/>',
  laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
  bag: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12h18"/>',
  code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12"/>',
  pencil: '<path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3"/>',
  person: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z"/>',
  gh: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 00-6 0C6.8 2.8 5.8 3.1 5.8 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004.4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  li: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/>',
  lc: '<path d="M14 4L7 11a2 2 0 000 3l5 5a2 2 0 003 0M9 12h10M15 4l2 2"/>',
  doc: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h6"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>',
  people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.5-3.5 3-5 6-5s5.5 1.5 6 5M15 15c3 0 5 1.5 6 4.5"/>',
  trophy: '<path d="M7 4h10v5a5 5 0 01-10 0zM7 6H4a3 3 0 003 4M17 6h3a3 3 0 01-3 4M12 14v4M8 21h8"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 015 .5c0 1.5-2.5 2-2.5 3.5M12 17v.01"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10.5h.01M12 10.5h.01M16 10.5h.01"/>',
  monitor: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
  server: '<rect x="4" y="4" width="16" height="7" rx="1.5"/><rect x="4" y="13" width="16" height="7" rx="1.5"/><path d="M8 7.5h.01M8 16.5h.01"/>',
  brain: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  db: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3 3 7 3s7-1.3 7-3"/>',
  cloud: '<path d="M7 18a4 4 0 01-.5-8A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  chev: '<path d="M15 6l-6 6 6 6"/>',
  undo: '<path d="M9 14L4 9l5-5M4 9h10a6 6 0 010 12h-2"/>',
  share: '<path d="M12 3v12M8 7l4-4 4 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>',
  dots: '<path d="M5 12h.01M12 12h.01M19 12h.01"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
  clip: '<path d="M21 11l-8.5 8.5a5 5 0 01-7-7L14 4a3.5 3.5 0 015 5l-8.5 8.5a2 2 0 01-3-3L15 7"/>',
  compose: '<path d="M4 20l1-4L16 5l3 3L8 19z"/>',
};
const ico = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true">${I[k]}</svg>`;
const arrowR = '<svg viewBox="0 0 46 24" aria-hidden="true"><path d="M3 13c10-3 24-2 39-1M34 5l8 7-9 6"/></svg>';
const arrowL = '<svg viewBox="0 0 46 24" aria-hidden="true"><path d="M43 12c-10-2-24-2-39 0M12 5l-8 7 9 6"/></svg>';
const squiggle = '<svg class="squiggle" viewBox="0 0 120 12" aria-hidden="true"><path d="M2 8c12-8 18 6 30-1s18 5 30-1 18 5 30-1 16 4 26-2"/></svg>';
const sparks = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 26l10-6M12 12l9 7M24 6l2 11"/></svg>';
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ============ desk items ============ */
// home: [x%, y%, rot] of the 16:9 stage (matches the mockup) · edge: [x%, y%, rot] of viewport (pushed to the sides on inner pages)
// m: [x%, y%, rot, width vw] for phones
const ITEMS = [
  { id: 'spf', w: 10.3, home: [13.2, 16.5, -6], edge: [1, 86, 24], m: [4, 13, -10, 18], go: 'contact', tag: 'say hi :)', d: 14 },
  { id: 'powerbank', w: 11.9, home: [73.5, 17.8, 4], edge: [92, 30, -16], m: [76, 14, 10, 18], go: 'projects', tag: 'projects', d: 10 },
  { id: 'idcard', w: 14.4, home: [12.2, 53.5, -3], edge: [-6, 52, 14], m: [3, 56, -5, 32], go: 'experience', tag: 'experience', d: 18 },
  { id: 'laptop', w: 23, home: [34.8, 53, 0], edge: [86, 66, -14], m: [30, 66, 2, 44], go: 'skills', tag: 'skills.json', d: 8 },
  { id: 'panda', w: 10.6, home: [63, 61, -3], edge: [87, 9, 10], m: [72, 55, -4, 22], go: 'blog', tag: 'blog', d: 22 },
  { id: 'phone', w: 10.4, home: [79, 52, 2], edge: [-5, 12, -12], m: [75, 71, 4, 18], go: 'about', tag: 'about me', d: 12 },
  { id: 'star', w: 4.4, home: [3.6, 43, 0], edge: [22, 3, 20], m: [8, 50, 0, 9], d: 30 },
  { id: 'sparkle', w: 3.8, home: [92.3, 44.8, 0], edge: [78, 92, 0], m: [86, 51, 0, 8], d: 26 },
  { id: 'loop', w: 7.2, home: [61.6, 44.3, 0], edge: [22, 90, 30], m: [58, 49, 0, 14], d: 20 },
];
const jit = (a, b) => Math.sin(a * 12.9898 + b * 78.233) * 43758.5453 % 1; // deterministic -1..1
const itemsEl = document.getElementById('items');
ITEMS.forEach((it) => {
  const el = document.createElement(it.go ? 'button' : 'div');
  el.className = 'item' + (it.go ? '' : ' doodle');
  if (it.go) {
    el.setAttribute('aria-label', it.tag);
    el.onclick = () => {
      // phone & laptop grow straight into the big device; everything else gets the yellow highlighter "pick" first
      if (it.id === 'phone' || it.id === 'laptop') return go(it.go);
      el.classList.add('picked');
      setTimeout(() => go(it.go), 360);
      setTimeout(() => el.classList.remove('picked'), 1200);
    };
  }
  else el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `<div class="lift"><img src="assets/${it.id}.png" alt=""></div>${it.go ? `<span class="tag">${it.tag}</span>` : ''}`;
  itemsEl.append(el);
  it.el = el; it.img = el.querySelector('img');
  el.style.setProperty('--fl', (5 + Math.abs(jit(ITEMS.indexOf(it), 4)) * 4).toFixed(2) + 's'); // each item floats at its own pace
  el.style.setProperty('--fd', (-Math.abs(jit(ITEMS.indexOf(it), 8)) * 6).toFixed(2) + 's');
});

// Home "scenes": scrolling on the homepage reshuffles the desk into these arrangements.
// at: id → [x%, y%, rot, scale] on the 16:9 stage (missing ids fall back to the item's home spot); hero: top % of the intro line
const SCENES = [
  { hero: 37 },
  { hero: 15, at: { laptop: [36, 33, -12], idcard: [52, 21, 16], phone: [56, 34, -28], powerbank: [30, 50, 38], spf: [52, 52, -58], panda: [45, 40, 10], star: [12, 10, 0], sparkle: [86, 78, 0], loop: [63, 72, 20] } },
  { hero: 63, at: { laptop: [37.5, 12, 0, 1.1], phone: [24, 24, 18], idcard: [62, 22, -12], spf: [1, -8, 32], powerbank: [87, -10, -22], panda: [5, 80, 16], star: [30, 88, 0], sparkle: [70, 90, 0], loop: [48, 86, 25] } },
  { hero: 50, at: { idcard: [6, 4, -18], laptop: [64, 10, 9], spf: [5, 66, -34], powerbank: [82, 60, 28], panda: [42, 74, -10], phone: [19, 32, 24], star: [48, 12, 0], sparkle: [90, 40, 0], loop: [74, 58, 15] } },
];
let route = null, hoverNav = -1, scene = 0;
const isMobile = () => innerWidth < 760;

function pos(it, k, r) {
  const W = innerWidth, H = innerHeight, mob = isMobile();
  const sw = Math.min(W, (H * 16) / 9), sh = (sw * 9) / 16, ox = (W - sw) / 2, oy = (H - sh) / 2;
  let x, y, rot, w, o = 1;
  if (mob) {
    [x, y, rot, w] = it.m; w = (w * W) / 100; x = (x * W) / 100; y = (y * H) / 100;
    if (r) o = 0;
  } else if (!r) {
    const at = (SCENES[scene].at || {})[it.id] || it.home;
    [x, y, rot] = at; w = (it.w * sw) / 100 * (at[3] || 1); x = ox + (x * sw) / 100; y = oy + (y * sh) / 100;
    if (hoverNav >= 0) { // hovering a nav pill reshuffles the desk
      const cx = W / 2 - w / 2, cy = H * 0.55 - w * 0.45, n = hoverNav + 1;
      x += (cx - x) * 0.18 + jit(n, k) * 70;
      y += (cy - y) * 0.18 + jit(k, n) * 60;
      rot += jit(n * 3, k) * 32;
    }
  } else {
    [x, y, rot] = it.edge; w = (it.w * sw) / 100 * 0.9; x = (x * W) / 100; y = (y * H) / 100;
  }
  if ((r === 'about' && it.id === 'phone') || (r === 'skills' && it.id === 'laptop')) o = 0;
  return { x, y, w, rot, o };
}

function layout() {
  ITEMS.forEach((it, k) => {
    const { x, y, w, rot, o } = pos(it, k, route);
    it.el.style.setProperty('--d', ((k * 7) % ITEMS.length) * 45 + 'ms'); // gentle stagger, not in DOM order
    it.el.style.width = w + 'px';
    it.el.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
    it.el.style.opacity = o;
    it.el.style.pointerEvents = o ? '' : 'none';
    it.el.tabIndex = o && it.go ? 0 : -1;
  });
}

function dropIn() { // items fall onto the desk on first load
  ITEMS.forEach((it, k) => {
    it.el.style.transition = 'none';
    it.el.style.transform = `translate(${innerWidth * (0.2 + 0.6 * Math.abs(jit(k, 2)))}px, -${innerHeight * 0.6}px) rotate(${jit(k, 9) * 90}deg)`;
  });
  itemsEl.offsetHeight;
  ITEMS.forEach((it, k) => { it.el.style.transition = ''; it.el.style.transitionDelay = `${k * 70}ms`; });
  layout();
  setTimeout(() => ITEMS.forEach((it) => (it.el.style.transitionDelay = '')), 1800);
}

// mouse parallax
addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse') return;
  const mx = e.clientX / innerWidth - 0.5, my = e.clientY / innerHeight - 0.5;
  ITEMS.forEach((it) => (it.img.style.transform = `translate(${-mx * it.d}px, ${-my * it.d}px)`));
});
let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(layout, 120); });

/* ============ nav ============ */
const NAV = [['projects', 'Projects', 'laptop'], ['experience', 'Experience', 'bag'], ['skills', 'Skills', 'code'], ['blog', 'Blog', 'pencil'], ['about', 'About', 'person'], ['contact', 'Contact', 'mail']];
const nav = document.getElementById('nav');
function renderNav() {
  nav.innerHTML = (route ? `<a class="pill" href="#/" style="--i:0">${ico('back')}Back</a>` : '') +
    NAV.map(([k, label, ic], i) => `<a class="pill${k === route ? ' on' : ''}" href="#/${k}" data-n="${i}" style="--i:${i + 1}"${k === route ? ' aria-current="page"' : ''}>${ico(ic)}${label}</a>`).join('');
  nav.querySelectorAll('[data-n]').forEach((a) => {
    a.onmouseenter = () => { if (!route) { hoverNav = +a.dataset.n; layout(); } };
    a.onmouseleave = () => { if (hoverNav >= 0) { hoverNav = -1; layout(); } };
  });
}

/* ============ pages ============ */
const PAGES = {
  '': () => `
    <div class="stage"><div class="hero">
      <h1 data-a>Hey my name is Pravi and I <span class="swap"><span id="swap">build</span></span> cool things for the web :)</h1>
    </div></div>`,

  projects: () => `
    <section class="proj" style="--n:${PROJECTS.length}">
      <div class="proj-stick">
        <div class="proj-box" id="pbox">
          <div class="ptag" id="ptag"><span>${esc(PROJECTS[0].t)}</span></div>
          <div class="frame" id="frame">
            <div class="slides">
              <div class="track" id="track">
                ${PROJECTS.map((p, i) => `
                  <button class="slide" style="--c:${p.c};--i:${i}" data-i="${i}" aria-label="Open ${esc(p.t)}">
                    <span class="big">${String(i + 1).padStart(2, '0')}</span>
                    <span class="meta"><span class="idx">${String(i + 1).padStart(2, '0')} / ${String(PROJECTS.length).padStart(2, '0')}${p.when ? ` · ${p.when}` : ''}</span><span class="stat">${p.stat}</span></span>
                    <h3>${esc(p.t)}</h3>
                    <p class="tl">${esc(p.tl)}</p>
                    <span class="chips">${p.stack.map((s) => `<span class="chip">${s}</span>`).join('')}</span>
                  </button>`).join('')}
              </div>
              <div class="details" id="details" aria-live="polite"></div>
            </div>
          </div>
          <div class="proj-foot">
            <div class="dots">${PROJECTS.map((p, i) => `<button aria-label="${esc(p.t)}" data-i="${i}"${i ? '' : ' class="on"'}></button>`).join('')}</div>
            <span class="shint">scroll to explore ↓ · click to open</span>
          </div>
        </div>
      </div>
    </section>`,

  experience: () => `
    <section class="xp">
      <h1 class="h-script" data-a>Experience</h1><span data-a>${squiggle}</span>
      <div class="rows">
        ${XP.map((x, i) => `
          <article class="row${i ? '' : ' on'}" data-a>
            <div class="n">${i + 1}</div>
            <div class="t">${esc(x.r)}<small>${esc(x.co)} · ${esc(x.d)}</small></div>
            <div class="d"><p>${esc(x.s)}</p><div class="more"><div><ul>${x.b.map((b) => `<li>${esc(b)}</li>`).join('')}</ul></div></div></div>
          </article>`).join('')}
      </div>
    </section>`,

  skills: () => `
    <section class="skills"><div class="flip" id="flip"><div class="laptop">
      <img class="dev" src="assets/biglaptop.png" alt="" draggable="false">
      <div class="lscreen">
        <div class="side"><p>Categories</p>
          ${[['all', 'All Skills', 'code'], ['languages', 'Languages', 'pencil'], ['frontend', 'Frontend', 'monitor'], ['backend', 'Backend', 'server'], ['ai_ml', 'AI / ML', 'brain'], ['data_tools', 'Data & Tools', 'chart'], ['databases', 'Databases', 'db'], ['devops_cloud', 'DevOps & Cloud', 'cloud'], ['others', 'Others', 'gear']]
            .map(([k, l, ic]) => `<button class="cat${k === 'all' ? ' on' : ''}" data-k="${k}">${ico(ic)}${l}</button>`).join('')}
        </div>
        <div class="code" id="code"></div>
      </div>
    </div></div><p class="backhint">click anywhere outside the laptop to go back</p></section>`,

  blog: () => `
    <section class="blog">
      <div class="viewer" data-a>
        <div class="vmain">
          <div class="pad-l"></div>
          <div class="strip" id="strip">${BLOG_MEDIA.map((m, i) => `<img src="${m.src}" alt="${esc(m.cap)}" data-i="${i}"${i ? '' : ' class="on"'}>`).join('')}</div>
          <div class="cap">${arrowL.replace('<svg', '<svg style="transform:none"')}<div class="note" id="note"></div></div>
        </div>
        <div class="thumbs">
          <div><div class="lbl">Blog Media (${BLOG_MEDIA.length})</div>
            <div class="tbar">${BLOG_MEDIA.map((m, i) => `<button data-i="${i}" aria-label="${esc(m.cap)}"${i ? '' : ' class="on"'}><img src="${m.src}" alt=""></button>`).join('')}</div></div>
          <div class="lbl" id="count">1/${BLOG_MEDIA.length}</div>
        </div>
      </div>
      <div>
        <div class="btitle" data-a><h1>Blog</h1>${sparks}</div>
        <p data-a>A space where I share my journey, learnings, research, projects and experiences in tech.</p>
        <svg class="rule" viewBox="0 0 400 10" preserveAspectRatio="none" data-a><path d="M2 6c80-4 160 1 240-2s110 2 156 0"/></svg>
        ${ACC.map((a, i) => `
          <div class="acc" data-a>
            <button aria-expanded="false" aria-controls="acc${i}">${ico(a.ic)}${a.t}<span class="plus">+</span></button>
            <div class="body" id="acc${i}"><div>${a.html}</div></div>
          </div>`).join('')}
        <svg class="rule" viewBox="0 0 400 10" preserveAspectRatio="none" data-a><path d="M2 4c90 3 170-2 250 1s100-1 146 1"/></svg>
      </div>
    </section>`,

  about: () => {
    const now = new Date();
    const hm = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const L = [
      ['Name', 'Pravallika Kundum — Pravi to friends'],
      ['Job', 'AI/ML & Full-Stack Engineer'],
      ['Studying', 'B.Tech IT @ JNTU-GV · CGPA 8.0 · class of 2027'],
      ['Good at', 'building end-to-end AI products — from raw data to a deployed app'],
      ['Favorite stack', 'Python + React, glued with REST'],
      ['Currently', 'VP @ Dev Squad Club · Deputy Secretary @ ACM JNTU-GV'],
      ['Proud of', '5th place, Amaravathi Quantum Valley Hackathon (500+ people)'],
      ['Published', 'ClimateChain — IJSREM, Aug 2026'],
      ['Internships', '5 — from web dev to AI research'],
      ['Mentored', '20+ junior developers'],
      ['Exploring', 'quantum ML & generative AI for molecules'],
    ];
    return `
    <section class="about"><div class="flip" id="flip"><div class="bigphone">
      <img class="dev" src="assets/bigphone.png" alt="" draggable="false">
      <div class="nscreen">
        <div class="sbar"><span>${hm}</span><span>▂▄▆ 5G <span class="bat">15</span></span></div>
        <div class="ntool">${ico('chev')}${ico('undo')}${ico('share')}${ico('dots')}</div>
        <div class="nbody">
          <p class="ndate">${date} at ${hm}</p>
          ${L.map(([k, v], i) => `<p class="nl" data-a style="--i:${i}"><b style="--i:${i}">${k}:</b>${esc(v)}</p>`).join('')}
          <div class="nphoto" data-a><img src="assets/sunset.jpg" alt="Pravi watching the sunset"><svg viewBox="0 0 34 34"><path d="M17 29C6 21 3 15 6 9c2.5-4.5 8-4 11 1 3-5 8.5-5.5 11-1 3 6 0 12-11 20z"/></svg></div>
          <p class="nl" data-a><b style="--i:${L.length}">Find me:</b><a href="${ME.github}" target="_blank" rel="noopener">GitHub</a> · <a href="${ME.linkedin}" target="_blank" rel="noopener">LinkedIn</a> · <a href="${ME.leetcode}" target="_blank" rel="noopener">LeetCode</a></p>
        </div>
        <div class="nfoot">${ico('list')}${ico('clip')}${ico('compose')}</div>
      </div>
      <img class="cracks" src="assets/bigphone.png" alt="" draggable="false">
    </div></div><p class="backhint">click anywhere outside the phone to go back</p></section>`;
  },

  contact: () => `
    <section class="contact">
      <div class="letter" data-a>
        <h1>Say hi :)</h1>
        <p>Always up for talking about AI, side projects, or a role you think I'd fit.</p>
        <ul class="lines">
          <li>${ico('mail')}<a href="mailto:${ME.email}">${ME.email}</a><button class="copy" id="copy">copy</button></li>
          <li>${ico('phone')}<a href="tel:${ME.phone.replace(/\s/g, '')}">${ME.phone}</a></li>
          <li>${ico('gh')}<a href="${ME.github}" target="_blank" rel="noopener">github.com/VALLI-0114</a></li>
          <li>${ico('li')}<a href="${ME.linkedin}" target="_blank" rel="noopener">linkedin.com/in/kundum-pravallika</a></li>
          <li>${ico('code')}<a href="${ME.leetcode}" target="_blank" rel="noopener">leetcode.com/u/pravalli01</a></li>
          <li>${ico('doc')}<a href="${ME.resume}" download>download my resume</a></li>
        </ul>
        <p class="sig">— Pravi</p>
      </div>
    </section>`,
};

const ACC = [
  { t: 'Certifications & continuous learning', ic: 'award', html: `<ul>
      <li><b>ISAC dual certified</b> — Cyber Crime Intervention Officer (CCIO) & Professional Ethics at Workplace (CPEW).</li>
      <li><b>Infosys Springboard</b> — Front-End Web Developer (HTML5, CSS3, JavaScript ES6+, responsive design).</li>
      <li><b>AICTE – IBM SkillsBuild</b> — government-certified AI & ML internship.</li>
      <li>Currently exploring: quantum machine learning and generative AI for molecules (Q-MoleGen).</li></ul>` },
  { t: 'Research & technical work', ic: 'layers', html: `<ul>
      <li><b>Published — ClimateChain: A Quantum-Secured Blockchain Architecture for Immutable Environmental Monitoring</b><br>Co-author · IJSREM (ISSN 2582-3930, Impact Factor 8.659), Vol. 10, Issue 8 · Aug 2026 · peer-reviewed.
        Simulated BB84 quantum key distribution + AES-256 + blockchain ledgering to protect real-time environmental data against classical and quantum threats —
        0.9989 Shannon entropy for the quantum keys and 100% eavesdropping detection across 1,000 test runs, validated with IBM Qiskit.</li>
      <li><b>Q-MoleGen</b> — hybrid classical + quantum ML for molecular generation and property discovery (RDKit, Qiskit, Delaney ESOL).</li>
      <li><b>Quantum Climate Chain</b> — QRNG with Qiskit for climate simulations; the seed of the ClimateChain paper.</li>
      <li><b>Anemia & PCOD prediction</b> — SMOTE-balanced Random Forest, 91% accuracy, served over a REST API.</li></ul>` },
  { t: 'Leadership & community', ic: 'people', html: `<ul>
      <li><b>Vice President, Dev Squad Club</b> — workshops, peer coding sessions, project showcases; 20+ developers mentored.</li>
      <li><b>Deputy Secretary, ACM JNTU-GV</b> — 10+ seminars & hackathons, +35% membership in a year, featured on the ACM India website.</li>
      <li><b>Internship Captain, Uptoskills</b> — led the AI/ML cohort, code reviews and milestones.</li>
      <li><b>Class Representative</b> — the link between students and faculty.</li></ul>` },
  { t: 'Hackathons & competitions', ic: 'trophy', html: `<ul>
      <li><b>5th place — Amaravathi Quantum Valley Hackathon 2k25</b>, out of 500+ participants across Andhra Pradesh.</li>
      <li>Organiser behind multiple ACM JNTU-GV hackathons.</li></ul>` },
  { t: 'FAQ', ic: 'help', html: `
      <p class="q">What do you work on?</p><p class="a">AI-powered full-stack products — the model, the API around it and the UI people actually touch.</p>
      <p class="q">Are you open to opportunities?</p><p class="a">Yes! Internships and full-time roles (graduating June 2027).</p>
      <p class="q">Favourite part of the stack?</p><p class="a">The moment a model's output shows up in a real interface.</p>` },
  { t: 'Questions?', ic: 'chat', html: `<p>Write to <a href="mailto:${ME.email}">${ME.email}</a> or <a href="#/contact">say hi here</a> — I reply fast.</p>` },
];

/* ============ page behaviour ============ */
const INIT = {
  '': () => {
    placeHero();
    keyHandler = (e) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); shuffle(1); }
      if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); shuffle(-1); }
    };
    const words = ['build', 'train', 'ship', 'design', 'debug'];
    let i = 0; const el = document.getElementById('swap');
    timer = setInterval(() => { i = (i + 1) % words.length; el.textContent = words[i]; }, 2400);
  },

  projects: () => {
    // scroll-driven: the frame swells into an oval and the projects scroll past inside it
    const N = PROJECTS.length, box = document.getElementById('pbox'), frame = document.getElementById('frame'), track = document.getElementById('track');
    const tag = document.querySelector('#ptag span'), det = document.getElementById('details'), dots = [...document.querySelectorAll('.dots button')];
    const seg = () => innerHeight * 0.9; // matches 90vh per project in CSS
    const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    // where the track should be for the current scroll position (projects slide over the middle of each segment)
    const trackY = () => {
      const s = Math.max(0, scrollY) / seg(), i = Math.min(N - 1, Math.floor(s));
      return i === N - 1 ? N - 1 : i + ss(0.35, 0.85, s - i);
    };
    // the oval "bump" only shows while the page is actually scrolling; at rest the frame is the normal rounded box
    let lastY = scrollY, lastMove = -1e9;
    const goal = () => {
      const now = performance.now();
      if (scrollY !== lastY) { lastY = scrollY; lastMove = now; }
      const moving = now - lastMove < 160;
      const y = trackY();
      return { e: moving ? 1 : 0, y: moving ? y : Math.round(y) }; // at rest, settle on a whole project
    };
    let cur = { e: 0, y: Math.round(trackY()) }, idx = -1, raf;
    const setIdx = (i) => {
      if (i === idx) return; idx = i; frame.classList.remove('open');
      dots.forEach((d, j) => d.classList.toggle('on', j === i));
      tag.textContent = PROJECTS[i].t; tag.classList.remove('swap-in'); void tag.offsetWidth; tag.classList.add('swap-in');
    };
    const tick = () => {
      const g = goal();
      cur.e += (g.e - cur.e) * (g.e > cur.e ? 0.08 : 0.06); cur.y += (g.y - cur.y) * 0.09;
      box.style.setProperty('--e', cur.e.toFixed(4));
      track.style.transform = `translateY(${(-cur.y * 100).toFixed(3)}%)`;
      setIdx(Math.min(N - 1, Math.round(cur.y)));
      raf = requestAnimationFrame(tick);
    };
    tick();
    stopFx = () => cancelAnimationFrame(raf);
    const jump = (i) => scrollTo({ top: Math.max(0, Math.min(N - 1, i)) * seg(), behavior: 'smooth' });
    dots.forEach((d) => (d.onclick = () => jump(+d.dataset.i)));
    keyHandler = (e) => {
      if (e.key === 'ArrowRight') jump(idx + 1);
      if (e.key === 'ArrowLeft') jump(idx - 1);
      if (e.key === 'Escape') frame.classList.remove('open');
    };
    track.querySelectorAll('.slide').forEach((sl) => (sl.onclick = () => {
      if (+sl.dataset.i !== idx) return jump(+sl.dataset.i);
      const p = PROJECTS[idx];
      det.innerHTML = `<button class="x" aria-label="Close">×</button><h4>${esc(p.t)}</h4><p class="muted">${esc(p.tl)}</p>
        <ul>${p.b.map((b) => `<li>${esc(b)}</li>`).join('')}</ul><div class="chips">${p.stack.map((s) => `<span class="chip">${s}</span>`).join('')}</div>
        ${p.link ? `<p><a class="live" href="${p.link}" target="_blank" rel="noopener">visit live site ↗</a></p>` : ''}`;
      det.querySelector('.x').onclick = (e) => { e.stopPropagation(); frame.classList.remove('open'); };
      frame.classList.add('open');
    }));
  },

  experience: () => {
    const rows = [...document.querySelectorAll('.row')];
    const set = (r) => rows.forEach((x) => x.classList.toggle('on', x === r));
    rows.forEach((r) => {
      r.tabIndex = 0;
      r.onmouseenter = r.onclick = r.onfocus = () => set(r);
    });
    scrollHandler = () => {
      // the "reading line" slides from the first row (top of page) to the last row (bottom of page),
      // so every row — including the last one — gets its turn while scrolling
      const max = document.documentElement.scrollHeight - innerHeight;
      if (max <= 0) return;
      const p = Math.min(1, Math.max(0, scrollY / max));
      const tops = rows.map((r) => r.getBoundingClientRect().top + scrollY);
      const line = tops[0] + p * (tops[tops.length - 1] - tops[0]);
      let best = rows[0], bd = 1e9;
      rows.forEach((r, i) => { const d = Math.abs(tops[i] - line); if (d < bd) { bd = d; best = r; } });
      set(best);
    };
  },

  skills: () => {
    const code = document.getElementById('code');
    const q = (s) => `<span class="s">"${s}"</span>`;
    const draw = (k) => {
      const keys = k === 'all' ? Object.keys(SKILLS) : [k];
      const lines = [[0, '<span class="p">{</span>'], [1, `<span class="k">"skills"</span><span class="p">: {</span>`],
        ...keys.map((key, i) => [2, `<span class="k">"${key}"</span><span class="p">: [</span>${SKILLS[key].map(q).join('<span class="p">, </span>')}<span class="p">]${i < keys.length - 1 ? ',' : ''}</span>`]),
        [1, '<span class="p">}</span>'], [0, '<span class="p">}</span>']];
      code.innerHTML = lines.map(([ind, h], i) => `<div class="ln" style="--i:${i};--ind:${ind}"><span class="no">${i + 1}</span><span class="cd">${h}</span></div>`).join('');
    };
    draw('all');
    document.querySelectorAll('.cat').forEach((b) => (b.onclick = () => {
      document.querySelectorAll('.cat').forEach((x) => x.classList.toggle('on', x === b));
      draw(b.dataset.k);
    }));
  },

  blog: () => {
    const strip = document.getElementById('strip'), imgs = [...strip.querySelectorAll('img')], tb = [...document.querySelectorAll('.tbar button')];
    const note = document.getElementById('note'), count = document.getElementById('count');
    let cur = -1;
    const set = (i) => {
      if (i === cur) return; cur = i;
      imgs.forEach((x, j) => x.classList.toggle('on', j === i));
      tb.forEach((x, j) => x.classList.toggle('on', j === i));
      note.innerHTML = `${esc(BLOG_MEDIA[i].cap)}<small>${esc(BLOG_MEDIA[i].sub)}</small>`;
      note.classList.remove('swap-in'); void note.offsetWidth; note.classList.add('swap-in');
      count.textContent = `${i + 1}/${imgs.length}`;
    };
    set(0);
    tb.forEach((b) => (b.onclick = () => { set(+b.dataset.i); strip.scrollTo({ top: imgs[+b.dataset.i].offsetTop - strip.clientHeight / 2 + imgs[0].clientHeight / 2, behavior: 'smooth' }); }));
    imgs.forEach((im) => (im.onclick = () => tb[+im.dataset.i].click()));
    strip.addEventListener('scroll', () => {
      const mid = strip.scrollTop + strip.clientHeight / 2;
      let best = 0, bd = 1e9;
      imgs.forEach((im, i) => { const d = Math.abs(im.offsetTop + im.clientHeight / 2 - mid); if (d < bd) { bd = d; best = i; } });
      set(best);
    }, { passive: true });
    document.querySelectorAll('.acc > button').forEach((b) => (b.onclick = () => {
      const acc = b.parentElement, on = !acc.classList.contains('on');
      acc.classList.toggle('on', on); b.setAttribute('aria-expanded', on);
    }));
  },

  contact: () => {
    const b = document.getElementById('copy');
    b.onclick = async () => {
      try { await navigator.clipboard.writeText(ME.email); b.textContent = 'copied!'; } catch { b.textContent = 'select & copy'; }
      setTimeout(() => (b.textContent = 'copy'), 1600);
    };
  },
};

/* ============ router ============ */
const page = document.getElementById('page');
let timer, keyHandler, scrollHandler, stopFx;
addEventListener('keydown', (e) => keyHandler && keyHandler(e));
addEventListener('scroll', () => scrollHandler && scrollHandler(), { passive: true });

function go(r) { location.hash = r ? '#/' + r : '#/'; }

async function render() {
  const next = location.hash.replace(/^#\/?/, '');
  const r = next in PAGES ? next : '';
  const first = route === null, prev = route;
  // remember where the phone / laptop sits so the big version can grow out of it
  const src = { about: 'phone', skills: 'laptop' }[r];
  const fromRect = src && !first ? ITEMS.find((it) => it.id === src).el.getBoundingClientRect() : null;

  const oldFlip = document.getElementById('flip'), back = { about: 'phone', skills: 'laptop' }[prev];
  if (oldFlip && back && r !== prev) {
    oldFlip.classList.add('off'); // screen powers off first…
    await new Promise((ok) => setTimeout(ok, 280));
    const k = ITEMS.findIndex((it) => it.id === back), it = ITEMS[k], t = pos(it, k, r), f = oldFlip.getBoundingClientRect();
    const h = t.w * (it.img.naturalHeight / it.img.naturalWidth || 1);
    const shrink = oldFlip.animate([
      { transformOrigin: '0 0', transform: 'none', opacity: 1 },
      { transformOrigin: '0 0', transform: `translate(${t.x - f.left}px, ${t.y - f.top}px) scale(${t.w / f.width}, ${h / f.height})`, opacity: t.o ? 0.5 : 0 },
    ], { duration: 560, easing: 'cubic-bezier(.5,0,.2,1)', fill: 'forwards' }).finished;
    // never let navigation hang on an animation (e.g. background tab)
    await Promise.race([shrink, new Promise((ok) => setTimeout(ok, 620))]);
    // park the desk item exactly where the big device landed, so it only fades in
    it.el.style.transition = 'opacity .35s';
    it.el.style.width = t.w + 'px';
    it.el.style.transform = `translate(${t.x}px, ${t.y}px) rotate(${t.rot}deg)`;
    setTimeout(() => (it.el.style.transition = ''), 400);
    page.classList.add('out');
  } else if (!first) { page.classList.add('out'); await new Promise((ok) => setTimeout(ok, 220)); }
  clearInterval(timer); stopFx && stopFx(); keyHandler = scrollHandler = stopFx = null;
  route = r; hoverNav = -1;
  document.title = r ? `${r[0].toUpperCase() + r.slice(1)} — Pravi` : 'Pravi — Pravallika Kundum';
  renderNav();
  document.body.classList.toggle('device', r === 'about' || r === 'skills');
  page.className = 'page page-' + (r || 'home');
  page.innerHTML = PAGES[r]();
  page.querySelectorAll('[data-a]').forEach((el, i) => el.style.getPropertyValue('--i') || el.style.setProperty('--i', i));
  scrollTo(0, 0);
  void page.offsetWidth; page.classList.add('in');
  first ? dropIn() : layout();
  INIT[r] && INIT[r]();

  const flip = document.getElementById('flip');
  if (flip && fromRect && prev !== null && fromRect.width) {
    const to = flip.getBoundingClientRect();
    flip.animate([
      { transformOrigin: '0 0', transform: `translate(${fromRect.left - to.left}px, ${fromRect.top - to.top}px) scale(${fromRect.width / to.width}, ${fromRect.height / to.height}) rotate(${src === 'phone' ? 2 : 0}deg)`, opacity: 0.4 },
      { transformOrigin: '0 0', transform: 'none', opacity: 1 },
    ], { duration: 850, easing: 'cubic-bezier(.2,.85,.25,1)' });
  } else if (flip) {
    flip.animate([{ opacity: 0, transform: 'translateY(40px) scale(.94) rotate(-2deg)' }, { opacity: 1, transform: 'none' }], { duration: 750, easing: 'cubic-bezier(.2,.8,.2,1)' });
  }
}
addEventListener('hashchange', render);

/* ---- homepage: scroll / swipe / arrow keys shuffle the desk into the next scene ---- */
function placeHero() {
  const h = document.querySelector('.hero');
  if (h) h.style.top = isMobile() ? '' : SCENES[scene].hero + '%';
}
let lastShuffle = 0, wheelAcc = 0;
function shuffle(dir) {
  if (route !== '' || isMobile()) return;
  const now = performance.now();
  if (now - lastShuffle < 700) return; // one scene per scroll gesture
  lastShuffle = now;
  scene = (scene + dir + SCENES.length) % SCENES.length;
  layout(); placeHero();
}
addEventListener('wheel', (e) => {
  if (route !== '') return;
  wheelAcc += e.deltaY;
  if (Math.abs(wheelAcc) > 40) { shuffle(Math.sign(wheelAcc)); wheelAcc = 0; }
}, { passive: true });
let touchY = null;
addEventListener('touchstart', (e) => (touchY = e.touches[0].clientY), { passive: true });
addEventListener('touchend', (e) => {
  if (touchY !== null && Math.abs(e.changedTouches[0].clientY - touchY) > 50) shuffle(touchY > e.changedTouches[0].clientY ? 1 : -1);
  touchY = null;
}, { passive: true });
// little hand-drawn spark wherever you click
addEventListener('pointerdown', (e) => {
  if (e.button) return;
  const s = document.createElement('div');
  s.className = 'spark';
  s.style.left = e.clientX + 'px'; s.style.top = e.clientY + 'px';
  s.innerHTML = `<svg viewBox="-24 -24 48 48">${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<path d="M0 -11V-19" transform="rotate(${a + (a % 90 ? 8 : -6)})"/>`).join('')}</svg>`;
  document.body.append(s);
  setTimeout(() => s.remove(), 600);
});
// on About / Skills, clicking anywhere off the phone or laptop goes back to the desk
addEventListener('click', (e) => {
  if (document.body.classList.contains('device') && !e.target.closest('.flip, .nav, .logo, .item, a, button')) go('');
});
render();
