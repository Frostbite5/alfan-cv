// Reverse-Engineered didisuhardi.com Architecture for Imam Alfan Rahadyan

// 1. PROJECTS & CASE STUDIES DATA
const projectsData = [
  {
    id: "frost-one",
    title: "Frost.One: Scaling Faceless Media",
    category: "Digital Media Growth",
    metric: "26.4M+ Views / Month",
    subMetric: "68K+ Subs • 95%+ Retention",
    image: "assets/images/frost-analytics.png",
    gallery: [
      "assets/images/frost-analytics.png",
      "assets/images/frost-banner.png",
      "assets/images/frost-short.png"
    ],
    narrative: [
      "Frost.One is a faceless digital media channel focused on technology, history, and narrative storytelling. The channel was built and scaled from 0 to 43,000+ subscribers within 5 months through viral, retention-engineered short-form videos.",
      "Following a strategic hiatus, the channel surged by 58.14% to over 68,000 active subscribers, generating 26,438,606 views and 207,500 watch hours in a single 28-day window.",
      "The content pipeline integrates data-driven keyword research, custom narrative scriptwriting, fast-paced kinetic typography, and multi-track audio leveling ensuring an average watch retention rate of 95%+ on videos surpassing 1,000,000+ views."
    ],
    highlights: [
      "Scaled to 68,842+ subscribers and 26.4M+ monthly views organically",
      "Multiple short-form videos surpassing 1,000,000+ views each",
      "Consistent 95%+ average retention rate through hook-driven pacing",
      "Full production ownership: scripting, voiceover sync, editing, and thumbnail design"
    ],
    tags: ["Faceless Media", "Viral Retention", "Scriptwriting", "YouTube Analytics", "Video Editing"],
    ctaLink: "https://wa.me/6289675264517?text=Hi%20Alfan,%20I'm%20interested%20in%20your%20video%20growth%20services!",
    ctaText: "Discuss Video Growth"
  },
  {
    id: "teman-crypto",
    title: "Teman Crypto Indonesia",
    category: "Web3 & Community Operations",
    metric: "1,000+ Scaled Members",
    subMetric: "Top Exchange Partners",
    image: "assets/images/teman-crypto.png",
    gallery: [
      "assets/images/teman-crypto.png",
      "assets/images/teman-crypto-bybit.png",
      "assets/images/teman-crypto-bitget.png"
    ],
    narrative: [
      "Teman Crypto Indonesia is an active grassroots cryptocurrency community co-founded by Hanafi and Imam Alfan Rahadyan. The initiative was designed to educate, onboard, and protect Indonesian retail users navigating Web3 and decentralized finance.",
      "As Co-Founder and COO, Alfan spearheaded strategic partnerships with leading global exchanges including Tokocrypto, Bybit, and Bitget, hosting live Ask-Me-Anything (AMA) sessions and trading competitions.",
      "Beyond digital engagement, the community organized social impact initiatives, including real-world charitable donations (baksos) and educational airdrop research briefs for members."
    ],
    highlights: [
      "Co-founded and scaled community from 0 to 1,000+ active members across Telegram and socials",
      "Official Partner of Binance Community Summit 2021 (CeFi vs DeFi) alongside Tokocrypto",
      "Hosted high-engagement AMA sessions with Bybit Indonesia and Bitget Global leaders",
      "Coordinated bounties, token launch promotions, and social charity donation drives"
    ],
    tags: ["Community Operations", "Web3 Partnerships", "AMA Host", "Tokocrypto", "Bybit", "Bitget"],
    ctaLink: "https://wa.me/6289675264517?text=Hi%20Alfan,%20I'd%20like%20to%20discuss%20community%20operations!",
    ctaText: "Connect on Web3"
  },
  {
    id: "ipb-finance",
    title: "IPB Finance Fest Stock Trading",
    category: "Financial & Market Analysis",
    metric: "Rank 10 of 350+ Teams",
    subMetric: "National Finalist 2022",
    image: "assets/images/ipb-finalist.png",
    gallery: [
      "assets/images/ipb-finalist.png"
    ],
    narrative: [
      "The IPB University Finance Fest Stock Trading Competition is a high-intensity nationwide contest challenging students to execute live market transactions, manage portfolios, and maintain strict risk parameters.",
      "Alfan competed under team 'When Moon Sir?' through a 2-week active trading sprint, successfully ranking 10th out of more than 350 participants from universities across Indonesia.",
      "The strategy blended macroeconomic catalysts, technical chart analysis, and capital preservation discipline during volatile equity market cycles."
    ],
    highlights: [
      "Ranked Top 10 out of 350+ nationwide trading teams",
      "Maintained positive risk-reward ratios in high-frequency volatile markets",
      "Demonstrated analytical rigor in capital market strategy and portfolio theory"
    ],
    tags: ["Stock Trading", "Market Analysis", "Risk Management", "Capital Markets"],
    ctaLink: "https://wa.me/6289675264517?text=Hi%20Alfan,%20let's%20connect%20regarding%20financial%20analysis!",
    ctaText: "Inquire Track Record"
  },
  {
    id: "ugm-poster",
    title: "FK-KMK UGM Panateen Winner",
    category: "Visual Design & Illustration",
    metric: "1st Place Winner UGM",
    subMetric: "National Poster Contest 2019",
    image: "assets/images/ugm-poster.jpg",
    gallery: [
      "assets/images/ugm-poster.jpg",
      "assets/images/art-landscape.png"
    ],
    narrative: [
      "The Panateen Competition organized by Tim Bantuan Medis Mahasiswa Panacea FK-KMK Universitas Gadjah Mada is a prestigious national contest evaluating public health communication, visual hierarchy, and persuasive design.",
      "Alfan was awarded 1st Place (Juara 1 Lomba Poster) for an original poster layout effectively communicating complex health messages with compelling illustration and clear typography.",
      "This foundational victory established his passion for combining visual aesthetic excellence with high-retention audience communication."
    ],
    highlights: [
      "1st Place Winner (Juara 1) nationwide among hundreds of student submissions",
      "Certified by Dean of Faculty of Medicine, Public Health, and Nursing UGM",
      "Demonstrated mastery of visual hierarchy, vector graphics, and color theory"
    ],
    tags: ["Poster Design", "Visual Hierarchy", "Vector Art", "UGM Winner", "Graphic Design"],
    ctaLink: "https://wa.me/6289675264517?text=Hi%20Alfan,%20let's%20discuss%20visual%20design!",
    ctaText: "Discuss Design Project"
  },
  {
    id: "pmm-jambi",
    title: "PMM Kemendikbud: Suku Anak Dalam",
    category: "National Exchange & Outreach",
    metric: "Grade A • Flagship Program",
    subMetric: "Universitas Jambi 2021",
    image: "assets/images/pmm-jambi.jpg",
    gallery: [
      "assets/images/pmm-jambi.jpg",
      "assets/images/pmm-cert.png"
    ],
    narrative: [
      "Selected as a recipient of the fully funded Kemendikbud Merdeka Belajar Domestic Student Exchange program, Alfan completed a 6-month academic and cultural residency at Universitas Jambi.",
      "Alongside achieving straight 'A' grades across International Trade, Monetary Economics, and Agrarian Politics, he actively led social immersion visits into indigenous communities in Jambi.",
      "His team delivered interactive lessons, educational materials, and cultural exchange sessions with children of Suku Anak Dalam, documenting grassroots community empowerment."
    ],
    highlights: [
      "Awarded prestigious fully funded national scholarship by Kemendikbud-LPDP",
      "Conducted on-site visits and interactive lessons with indigenous Suku Anak Dalam",
      "Completed rigorous economics and business coursework with Grade 'A' distinctions"
    ],
    tags: ["Student Exchange", "Suku Anak Dalam", "Community Outreach", "Scholarship"],
    ctaLink: "https://wa.me/6289675264517?text=Hi%20Alfan,%20I'd%20love%20to%20know%20more%20about%20your%20exchange%20experience!",
    ctaText: "Ask About Experience"
  },
  {
    id: "art-illustrations",
    title: "Vector Art & Brand Illustrations",
    category: "Creative Publication & Layout",
    metric: "Lazada, LIPI & Sneztaz",
    subMetric: "Commercial Artwork Collection",
    image: "assets/images/art-landscape.png",
    gallery: [
      "assets/images/art-landscape.png",
      "assets/images/art-kintakun.png",
      "assets/images/art-lipi.png"
    ],
    narrative: [
      "A diverse portfolio of commercial visual assets spanning digital landscapes, mascot character concepts, merchandise bedding patterns, and editorial magazine typography.",
      "Includes licensed pattern illustrations for Kintakun x Lazada Kreasi #darikamar, scientific mascot character design for the Indonesian Institute of Sciences (LIPI), and editorial layouts for Sneztaz Magazine.",
      "Every piece emphasizes clean vector precision, vibrant palettes, and strong visual storytelling tailored to client brand identity."
    ],
    highlights: [
      "Designed commercial merchandise patterns for Kintakun x Lazada campaign",
      "Created character mascot concepts for LIPI research institution",
      "Editorial layout designer for Sneztaz Magazine media publications",
      "Original vector minimalist landscape series with scenic mountain sunsets"
    ],
    tags: ["Vector Illustration", "Brand Mascot", "Merchandise Design", "Editorial Layout"],
    ctaLink: "https://wa.me/6289675264517?text=Hi%20Alfan,%20I'm%20interested%20in%20your%20illustration%20work!",
    ctaText: "View More Art"
  },
  {
    id: "gpp-jember",
    title: "Gerakan Peduli Perempuan Jember",
    category: "Videography & Team Leadership",
    metric: "5-Member Team Led",
    subMetric: "Advocacy Media Internship",
    image: "assets/images/frost-short.png",
    gallery: [
      "assets/images/frost-short.png",
      "assets/images/pmm-jambi.jpg"
    ],
    narrative: [
      "Serving as Videographer, Editor, and Regional Team Leader for Gerakan Peduli Perempuan Jember, Alfan directed multimedia advocacy campaigns centered on women's rights and maternal health.",
      "He managed a 5-member regional team to execute community educational programs in Tegalgede, Jember, translating complex health and legal concepts into empathetic, engaging video formats.",
      "The resulting video content was distributed across grassroots social channels to raise local awareness and drive community participation."
    ],
    highlights: [
      "Led regional 5-member cross-functional team across program planning and field execution",
      "Produced and edited compelling advocacy video modules for maternal-infant health",
      "Direct engagement with community leaders and local families in Tegalgede, Jember"
    ],
    tags: ["Team Leadership", "Videography", "Advocacy Media", "Community Health"],
    ctaLink: "https://wa.me/6289675264517?text=Hi%20Alfan,%20let's%20talk%20about%20video%20production!",
    ctaText: "Discuss Media Production"
  },
  {
    id: "duolingo-b2",
    title: "Duolingo / EF English Proficiency",
    category: "Language Credential",
    metric: "CEFR B2 (Score 110/160)",
    subMetric: "Upper-Intermediate Level",
    image: "assets/images/duolingo-cert.png",
    gallery: [
      "assets/images/duolingo-cert.png"
    ],
    narrative: [
      "Imam Alfan scored 110/160 on the official Duolingo English Test, formally evaluated as equivalent to CEFR B2 (Upper-Intermediate Proficiency).",
      "Test breakdowns highlight strong literacy and comprehension (120 Comprehension score), enabling fluent professional collaboration with international partners, global crypto protocols, and multinational creator networks."
    ],
    highlights: [
      "Official CEFR B2 certification with verified certificate code",
      "High comprehension score (120) for rapid complex content synthesis",
      "Demonstrated ability to host bilingual community events and AMAs"
    ],
    tags: ["English Proficiency", "CEFR B2", "Duolingo English Test", "Bilingual"],
    ctaLink: "https://wa.me/6289675264517?text=Hi%20Alfan,%20pleased%20to%20connect%20in%20English!",
    ctaText: "Contact Directly"
  }
];

// 2. TYPEWRITER EFFECT (Matching didisuhardi.com Hero)
const typewriterRoles = [
  "Digital Creator & Operations Lead",
  "Faceless YouTube Creator (68K+ Subs)",
  "Web3 Community Co-Founder & COO",
  "Short-Form Retention Specialist (95%+)",
  "International Relations (GPA 3.82)"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 75;

function updateTypewriter() {
  const el = document.getElementById("typewriter-text");
  if (!el) return;

  const currentRole = typewriterRoles[roleIndex];

  if (isDeleting) {
    el.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 35;
  } else {
    el.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 75;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    typeSpeed = 1800; // Pause at end of word
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % typewriterRoles.length;
    typeSpeed = 400; // Pause before next word
  }

  setTimeout(updateTypewriter, typeSpeed);
}

// 3. CONSTELLATION PARTICLE CANVAS (Matching didisuhardi.com Particle Mesh)
function initParticleCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.floor(Math.min(width, 1400) / 22);
  const particles = [];
  const maxDistance = 135;

  let mouse = { x: null, y: null, radius: 150 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 1.2
    });
  }

  function getComputedColor(varName, fallback) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || fallback;
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains("dark");
    const dotColor = isDark ? "rgba(249, 115, 22, 0.45)" : "rgba(234, 88, 12, 0.35)";
    const lineColor = isDark ? "rgba(249, 115, 22, 0.14)" : "rgba(234, 88, 12, 0.09)";

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse gentle interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.02;
          p.x -= dx * force;
          p.y -= dy * force;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1 - dist / maxDistance;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// 4. MULTI-PANEL STATE CONTROLLER (Home, Steps, About)
let currentPanel = "home";

function showPanel(panelName) {
  currentPanel = panelName;

  const panels = {
    home: document.getElementById("panel-home"),
    steps: document.getElementById("panel-steps"),
    about: document.getElementById("panel-about")
  };

  const backBtn = document.getElementById("header-back-btn");
  const sectionTitle = document.getElementById("header-section-title");

  Object.keys(panels).forEach(key => {
    if (panels[key]) {
      if (key === panelName) {
        panels[key].classList.add("active");
      } else {
        panels[key].classList.remove("active");
      }
    }
  });

  if (panelName === "home") {
    if (backBtn) backBtn.classList.remove("visible");
    if (sectionTitle) sectionTitle.textContent = "";
  } else if (panelName === "steps") {
    if (backBtn) backBtn.classList.add("visible");
    if (sectionTitle) sectionTitle.textContent = "EACH OF MY STEPS";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (panelName === "about") {
    if (backBtn) backBtn.classList.add("visible");
    if (sectionTitle) sectionTitle.textContent = "MORE ABOUT ME AND MY JOURNEY";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// 5. RENDER POLAROID GALLERY ("EACH OF MY STEPS")
function renderPolaroidGallery() {
  const container = document.getElementById("polaroid-gallery");
  if (!container) return;

  const tilts = ["tilt-1", "tilt-2", "tilt-3", "tilt-4", "tilt-5", "tilt-6", "tilt-7", "tilt-8"];

  container.innerHTML = projectsData.map((item, index) => {
    const tiltClass = tilts[index % tilts.length];
    return `
      <div class="polaroid-card ${tiltClass}" onclick="openDetailModal('${item.id}')">
        <div class="polaroid-metric-badge">${item.metric}</div>
        <div class="polaroid-img-wrapper">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
        </div>
        <div class="polaroid-title">${item.title}</div>
      </div>
    `;
  }).join("");
}

// 6. DETAIL MODAL CONTROLLER (Two-Column Layout)
function openDetailModal(caseId) {
  const item = projectsData.find(p => p.id === caseId);
  if (!item) return;

  const modal = document.getElementById("case-modal");
  if (!modal) return;

  // Populate left column
  document.getElementById("modal-category").textContent = item.category;
  document.getElementById("modal-title").textContent = item.title;

  const narrativeContainer = document.getElementById("modal-narrative");
  narrativeContainer.innerHTML = item.narrative.map(p => `
    <p class="modal-narrative-text">${escapeHtml(p)}</p>
  `).join("");

  const highlightsContainer = document.getElementById("modal-highlights-list");
  highlightsContainer.innerHTML = item.highlights.map(h => `
    <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
      <span style="color: var(--accent-orange); font-weight: 800;">✓</span>
      <span>${escapeHtml(h)}</span>
    </div>
  `).join("");

  const tagsContainer = document.getElementById("modal-tags");
  tagsContainer.innerHTML = item.tags.map(t => `
    <span class="modal-tag-pill">#${escapeHtml(t)}</span>
  `).join("");

  const ctaBtn = document.getElementById("modal-cta-btn");
  if (ctaBtn) {
    ctaBtn.href = item.ctaLink;
    ctaBtn.textContent = item.ctaText;
  }

  // Populate right column (Polaroid stack)
  const galleryContainer = document.getElementById("modal-polaroid-stack");
  galleryContainer.innerHTML = item.gallery.map(imgSrc => `
    <div class="modal-polaroid-item">
      <img src="${imgSrc}" alt="${escapeHtml(item.title)}" />
    </div>
  `).join("");

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  const modal = document.getElementById("case-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

// 7. JOURNEY TABS CONTROLLER (Experience, Organization, Education, Achievement)
function setupJourneyTabs() {
  const tabs = document.querySelectorAll(".journey-tab-btn");
  const panels = document.querySelectorAll(".journey-tab-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      panels.forEach(p => {
        if (p.getAttribute("data-panel") === target) {
          p.classList.add("active");
        } else {
          p.classList.remove("active");
        }
      });
    });
  });
}

// 8. THEME TOGGLE (Dark / Light Mode)
function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    
    // Toggle sun / moon icons
    const icon = toggleBtn.querySelector("i");
    if (icon && window.lucide) {
      icon.setAttribute("data-lucide", isDark ? "sun" : "moon");
      window.lucide.createIcons();
    }
  });
}

// 9. ESCAPE KEY & GLOBAL KEYBOARD SHORTCUTS
function setupKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.getElementById("case-modal");
      if (modal && modal.classList.contains("open")) {
        closeDetailModal();
      } else if (currentPanel !== "home") {
        showPanel("home");
      }
    }
  });
}

// 10. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();
  updateTypewriter();
  renderPolaroidGallery();
  setupJourneyTabs();
  setupThemeToggle();
  setupKeyboardNavigation();

  // Navigation Event Listeners
  const openBoxBtn = document.getElementById("open-box-btn");
  if (openBoxBtn) {
    openBoxBtn.addEventListener("click", () => showPanel("steps"));
  }

  const polaroidStackBtn = document.getElementById("polaroid-stack-btn");
  if (polaroidStackBtn) {
    polaroidStackBtn.addEventListener("click", () => showPanel("about"));
  }

  const backBtn = document.getElementById("header-back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => showPanel("home"));
  }

  const modalCloseBtn = document.getElementById("modal-close-x");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeDetailModal);
  }

  const modalBackdrop = document.getElementById("modal-backdrop-el");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeDetailModal);
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
