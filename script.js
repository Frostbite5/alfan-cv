// Reverse-Engineered didisuhardi.com Architecture for Imam Alfan Rahadyan

// 1. DEFAULT PROJECTS & CASE STUDIES DATA
const defaultProjectsData = [
  {
    id: "frost-one",
    title: "Frost One: Scaling Faceless Media",
    category: "Digital Media Growth",
    metric: "123.2M+ Total Views",
    subMetric: "94.1K+ Subs • 1.1M Watch Hrs",
    image: "assets/images/frost-analytics.png",
    gallery: [
      "assets/images/frost-analytics.png",
      "assets/images/frost-channel.png"
    ],
    videoEmbed: "https://www.youtube-nocookie.com/embed/9h4s7HUuSck",
    videoUrl: "https://www.youtube.com/shorts/9h4s7HUuSck",
    narrative: [
      "Frost One (@FrostOne01) is a digital storytelling media channel focused on technology, military history, and captivating curiosities ('Bikin Kalian Ga Nyangka!'). The channel was built and scaled organically from 0 to over 94,100+ active subscribers across 336 published video releases.",
      "The channel has achieved landmark lifetime engagement with 123,163,133+ (123.2M+) total views, 1,100,000+ (1.1M) watch hours, and an active community maintaining over 127,000+ views every 48 hours.",
      "The content pipeline integrates data-driven keyword research, custom narrative scriptwriting, fast-paced kinetic typography, and multi-track audio leveling, producing top-performing viral releases reaching 3.9M views ('Saat Serbia Menjatuhkan F-117'), 1.6M views, and 1.2M views."
    ],
    highlights: [
      "Scaled to 94,189+ subscribers and 123,163,133+ (123.2M+) total views organically",
      "Over 1,100,000+ (1.1M) watch hours across 336 published video releases",
      "Top viral short narratives reaching 3.9M, 1.6M, and 1.2M views",
      "Featured Showcase: Master-level pacing & kinetic typography in short-form storytelling",
      "Active 48-hour velocity exceeding 127,000+ real-time views",
      "Full production ownership: scripting, voiceover sync, editing, and packaging"
    ],
    tags: ["Faceless Media", "Viral Retention", "Scriptwriting", "YouTube Analytics", "@FrostOne01"],
    ctaLink: "https://www.youtube.com/@FrostOne01",
    ctaText: "Visit YouTube Channel"
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
      "Alfan was awarded 1st Place Winner (National Poster Competition) for an original poster layout effectively communicating complex health messages with compelling illustration and clear typography.",
      "This foundational victory established his passion for combining visual aesthetic excellence with high-retention audience communication."
    ],
    highlights: [
      "1st Place Winner nationwide among hundreds of student submissions",
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
    image: "assets/images/gpp-thumbnail.jpg",
    gallery: [
      "assets/images/gpp-thumbnail.jpg",
      "assets/images/gpp-thumbnail2.jpg"
    ],
    videoEmbed: "https://www.youtube-nocookie.com/embed/NLUFax_CqGk",
    videoUrl: "https://www.youtube.com/@IR20withGPP/videos",
    videoAspect: "16/9",
    videoBadge: "🎬 Community Documentary Video",
    videoTitle: "IR20 with GPP Jember Documentary",
    videoSubtitle: "Official documentary of IR20 UNEJ internship with GPP Jember",
    narrative: [
      "Serving as Videographer, Editor, and Regional Team Leader for Gerakan Peduli Perempuan Jember, Alfan directed multimedia advocacy campaigns centered on women's rights and maternal health.",
      "He managed a 5-member regional team to execute community educational programs in Tegalgede, Jember, translating complex health and legal concepts into empathetic, engaging video formats.",
      "The resulting video documentation was produced, edited, and published to showcase grassroots initiatives and community engagement across Jember."
    ],
    highlights: [
      "Led regional 5-member cross-functional team across program planning and field execution",
      "Produced and edited compelling advocacy video modules for maternal-infant health",
      "Direct engagement with community leaders and local families in Tegalgede, Jember",
      "Official video repository published on YouTube: @IR20withGPP"
    ],
    tags: ["Team Leadership", "Videography", "Advocacy Media", "Community Health", "@IR20withGPP"],
    ctaLink: "https://www.youtube.com/@IR20withGPP/videos",
    ctaText: "Watch GPP YouTube Videos"
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

// Load persisted user-customized projects or fallback to defaults
function loadProjectsData() {
  const DATA_VERSION = "5.0"; // Bump version when default projects data is updated
  if (localStorage.getItem("alfan_projects_version") !== DATA_VERSION) {
    localStorage.removeItem("alfan_portfolio_projects");
    localStorage.setItem("alfan_projects_version", DATA_VERSION);
    return JSON.parse(JSON.stringify(defaultProjectsData));
  }
  const saved = localStorage.getItem("alfan_portfolio_projects");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.warn("Could not parse saved projectsData:", e);
    }
  }
  return JSON.parse(JSON.stringify(defaultProjectsData));
}

let projectsData = loadProjectsData();

// 2. TYPEWRITER EFFECT (Matching didisuhardi.com Hero)
const typewriterRoles = [
  "Digital Creator & Operations Lead",
  "Faceless YouTube Creator (94K+ Subs & 123M+ Views)",
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
let isBoxOpening = false;

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
    document.body.classList.add("on-home");
    if (backBtn) backBtn.classList.remove("visible");
    if (sectionTitle) sectionTitle.textContent = "";
    // Cleanly reset surprise gift box animation
    const giftWrapper = document.getElementById("gift-box-wrapper");
    if (giftWrapper) {
      giftWrapper.classList.remove("is-opening");
    }
    isBoxOpening = false;
  } else if (panelName === "steps") {
    document.body.classList.remove("on-home");
    if (backBtn) backBtn.classList.add("visible");
    if (sectionTitle) sectionTitle.textContent = "PORTFOLIO & ACHIEVEMENT";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (panelName === "about") {
    document.body.classList.remove("on-home");
    if (backBtn) backBtn.classList.add("visible");
    if (sectionTitle) sectionTitle.textContent = "INTERACTIVE CV & RESUME";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Flat 2D Surprise Gift Box opening trigger (Smoke puffs + Easter eggs burst)
function triggerGiftBoxOpening() {
  const giftWrapper = document.getElementById("gift-box-wrapper");
  if (!giftWrapper || isBoxOpening) return;

  isBoxOpening = true;
  giftWrapper.classList.add("is-opening");

  // Allow popping lid, billowing smoke puffs, and flying easter eggs to play before panel transition
  setTimeout(() => {
    showPanel("steps");
    isBoxOpening = false;
  }, 750);
}

// Interactive CV Mode Switcher ('document' vs 'timeline')
function switchCvMode(mode) {
  const docView = document.getElementById("cv-view-document");
  const timelineView = document.getElementById("cv-view-timeline");
  const docBtn = document.getElementById("cv-mode-doc-btn");
  const timelineBtn = document.getElementById("cv-mode-timeline-btn");

  if (mode === "timeline") {
    if (docView) docView.classList.remove("active");
    if (timelineView) timelineView.classList.add("active");
    if (docBtn) docBtn.classList.remove("active");
    if (timelineBtn) timelineBtn.classList.add("active");
  } else {
    // Default to document mode
    if (docView) docView.classList.add("active");
    if (timelineView) timelineView.classList.remove("active");
    if (docBtn) docBtn.classList.add("active");
    if (timelineBtn) timelineBtn.classList.remove("active");
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.showPanel = showPanel;
window.switchCvMode = switchCvMode;
window.triggerGiftBoxOpening = triggerGiftBoxOpening;

// 5. RENDER POLAROID GALLERY ("EACH OF MY STEPS")
function renderPolaroidGallery() {
  const container = document.getElementById("polaroid-gallery");
  if (!container) return;

  const tilts = ["tilt-1", "tilt-2", "tilt-3", "tilt-4", "tilt-5", "tilt-6", "tilt-7", "tilt-8"];

  container.innerHTML = projectsData.map((item, index) => {
    const tiltClass = tilts[index % tilts.length];
    return `
      <div class="polaroid-card ${tiltClass}" onclick="openDetailModal('${item.id}')">
        <button class="polaroid-edit-badge" onclick="event.stopPropagation(); openStudioModal('${item.id}');" title="Edit this card in Studio">
          <i data-lucide="edit-3" style="width: 0.85rem; height: 0.85rem;"></i>
        </button>
        <div class="polaroid-metric-badge">${escapeHtml(item.metric)}</div>
        <div class="polaroid-img-wrapper">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
        </div>
        <div class="polaroid-title">${escapeHtml(item.title)}</div>
      </div>
    `;
  }).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 6. DETAIL MODAL CONTROLLER (Two-Column Layout)
let currentDetailModalProjectId = null;

function openDetailModal(caseId) {
  const item = projectsData.find(p => p.id === caseId);
  if (!item) return;

  currentDetailModalProjectId = caseId;
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
  let galleryHtml = item.gallery.map(imgSrc => `
    <div class="modal-polaroid-item">
      <img src="${imgSrc}" alt="${escapeHtml(item.title)}" />
    </div>
  `).join("");

  if (item.videoEmbed) {
    const isLandscape = item.videoAspect === "16/9";
    const badgeText = item.videoBadge || "Featured Video";
    const titleText = item.videoTitle || "🔥 Best Edited Narrative Showcase";
    const subText = item.videoSubtitle || "Pacing, kinetic typography & sound design by Alfan";
    galleryHtml += `
      <div class="modal-polaroid-item modal-video-item">
        <div class="modal-video-header">
          <div class="modal-video-badge">
            <span class="video-pulse-dot"></span>
            <span>${escapeHtml(badgeText)}</span>
          </div>
          <a href="${item.videoUrl || item.videoEmbed}" target="_blank" rel="noopener noreferrer" class="modal-video-ext-btn" title="Open on YouTube">
            Watch on YouTube ↗
          </a>
        </div>
        <div class="modal-video-wrapper ${isLandscape ? 'aspect-16-9' : 'aspect-9-16'}">
          <iframe 
            src="${item.videoEmbed}" 
            title="${escapeHtml(item.title)} - Video Showcase"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
        <div class="modal-video-caption">
          <span class="video-caption-title">${escapeHtml(titleText)}</span>
          <span class="video-caption-sub">${escapeHtml(subText)}</span>
        </div>
      </div>
    `;
  }
  galleryContainer.innerHTML = galleryHtml;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
}

function closeDetailModal() {
  const modal = document.getElementById("case-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
  const galleryContainer = document.getElementById("modal-polaroid-stack");
  if (galleryContainer) {
    // Reset iframe to stop audio/video playing in background
    galleryContainer.innerHTML = "";
  }
}

// Scroll directly to Honors & Awards / Achievements section
function scrollToAwardsSection() {
  if (currentPanel !== "about") {
    showPanel("about");
  }

  // Ensure document mode is active to see full Honors & Awards details
  switchCvMode("document");

  setTimeout(() => {
    const awardsEl = document.getElementById("cv-section-awards");
    if (awardsEl) {
      awardsEl.scrollIntoView({ behavior: "smooth", block: "start" });
      awardsEl.classList.remove("awards-highlight-pulse");
      // Trigger reflow for animation restart
      void awardsEl.offsetWidth;
      awardsEl.classList.add("awards-highlight-pulse");
    }
  }, 120);
}
window.scrollToAwardsSection = scrollToAwardsSection;

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

// ============================================================
// 9. VISUAL CONTENT & IMAGE STUDIO CONTROLLER (Canva-like Editor)
// ============================================================
const availableAssets = [
  { name: "image1.png", path: "assets/images/ppt/image1.png", label: "Media Intro Deck" },
  { name: "image2.png", path: "assets/images/ppt/image2.png", label: "Teman Crypto Intro" },
  { name: "image3.png", path: "assets/images/ppt/image3.png", label: "Web3 Ecosystem" },
  { name: "image4.png", path: "assets/images/ppt/image4.png", label: "Bitget AMA Session" },
  { name: "image5.png", path: "assets/images/ppt/image5.png", label: "Crypto Social Hub" },
  { name: "image6.png", path: "assets/images/ppt/image6.png", label: "Bybit AMA Session" },
  { name: "image7.png", path: "assets/images/ppt/image7.png", label: "Community Brief" },
  { name: "image8.png", path: "assets/images/ppt/image8.png", label: "Operations Slide" },
  { name: "image9.jpg", path: "assets/images/ppt/image9.jpg", label: "PMM Jambi Classroom" },
  { name: "image10.jpg", path: "assets/images/ppt/image10.jpg", label: "Suku Anak Dalam Field" },
  { name: "image11.png", path: "assets/images/ppt/image11.png", label: "Kemendikbud Certificate" },
  { name: "frost-analytics.png", path: "assets/images/frost-analytics.png", label: "YouTube Studio 123.2M Views" },
  { name: "frost-channel.png", path: "assets/images/frost-channel.png", label: "Frost One Channel @FrostOne01" },
  { name: "gpp-thumbnail.jpg", path: "assets/images/gpp-thumbnail.jpg", label: "GPP Jember OMS Festival" },
  { name: "gpp-thumbnail2.jpg", path: "assets/images/gpp-thumbnail2.jpg", label: "GPP Jember Community Event" },
  { name: "image12.png", path: "assets/images/ppt/image12.png", label: "Frost.One Banner" },
  { name: "image13.png", path: "assets/images/ppt/image13.png", label: "Frost Analytics 26.4M" },
  { name: "image14.png", path: "assets/images/ppt/image14.png", label: "YouTube Studio Stats" },
  { name: "image15.png", path: "assets/images/ppt/image15.png", label: "Shorts Retention" },
  { name: "image16.png", path: "assets/images/ppt/image16.png", label: "Audience Pacing" },
  { name: "image17.png", path: "assets/images/ppt/image17.png", label: "IPB Finance Certificate" },
  { name: "image18.jpg", path: "assets/images/ppt/image18.jpg", label: "UGM Winner Poster" },
  { name: "image19.png", path: "assets/images/ppt/image19.png", label: "Duolingo English B2" },
  { name: "image20.png", path: "assets/images/ppt/image20.png", label: "Landscape Vector Art" },
  { name: "image21.png", path: "assets/images/ppt/image21.png", label: "Kintakun x Lazada" },
  { name: "image22.png", path: "assets/images/ppt/image22.png", label: "LIPI Mascot Illustration" },
  { name: "image23.png", path: "assets/images/ppt/image23.png", label: "Editorial Typography" },
  { name: "image24.png", path: "assets/images/ppt/image24.png", label: "Brand Showcase" },
  { name: "image25.png", path: "assets/images/ppt/image25.png", label: "Closing / Profile Slide" },
  { name: "profile.jpg", path: "assets/images/profile.jpg", label: "Alfan Formal Photo" }
];

// ============================================================
// OWNER ADMIN ACCESS CONTROLLER (Only Alfan Can Edit)
// ============================================================
const OWNER_SECRET_KEY = "alfan";

function checkStudioAdminAuth() {
  const urlParams = new URLSearchParams(window.location.search);
  const adminParam = urlParams.get("admin") || urlParams.get("edit") || urlParams.get("studio") || urlParams.get("key");

  // Check URL query parameter: e.g. ?admin=alfan
  if (adminParam && adminParam.toLowerCase() === OWNER_SECRET_KEY) {
    localStorage.setItem("alfan_studio_auth", "true");
    const cleanUrl = window.location.pathname + window.location.hash;
    window.history.replaceState({}, document.title, cleanUrl);
    enableAdminMode(true);
    return;
  }

  // Check persisted authorization in localStorage
  if (localStorage.getItem("alfan_studio_auth") === "true") {
    enableAdminMode(false);
  }
}

function enableAdminMode(showWelcomeToast = false) {
  document.body.classList.add("admin-mode");
  if (showWelcomeToast) {
    showToast("✨ Welcome Alfan! Studio Mode unlocked.");
  }
}

function disableAdminMode() {
  localStorage.removeItem("alfan_studio_auth");
  document.body.classList.remove("admin-mode");
  closeStudioModal();
  showToast("🔒 Studio Mode locked and hidden.");
}

function promptForAdminPasscode() {
  if (document.body.classList.contains("admin-mode")) {
    openStudioModal();
    return;
  }

  const input = prompt("🔐 Enter Owner Passcode to unlock Studio Mode:");
  if (input && input.trim().toLowerCase() === OWNER_SECRET_KEY) {
    localStorage.setItem("alfan_studio_auth", "true");
    enableAdminMode(true);
    openStudioModal();
  } else if (input !== null) {
    alert("Incorrect passcode. Studio mode remains locked.");
  }
}

let currentStudioProjectId = null;

function openStudioModal(projectId) {
  // If not authenticated, prompt for passcode first
  if (!document.body.classList.contains("admin-mode")) {
    promptForAdminPasscode();
    return;
  }

  const modal = document.getElementById("studio-modal");
  if (!modal) return;

  // Cleanly close detail modal if open
  closeDetailModal();

  if (!projectId || !projectsData.some(p => p.id === projectId)) {
    projectId = currentDetailModalProjectId || projectsData[0].id;
  }
  currentStudioProjectId = projectId;

  // Populate Select dropdown
  const select = document.getElementById("studio-project-select");
  if (select) {
    select.innerHTML = projectsData.map(p => `
      <option value="${p.id}" ${p.id === currentStudioProjectId ? 'selected' : ''}>
        ${escapeHtml(p.title)}
      </option>
    `).join("");
  }

  loadProjectIntoStudio(currentStudioProjectId);
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
}

function closeStudioModal() {
  const modal = document.getElementById("studio-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

function loadProjectIntoStudio(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;
  currentStudioProjectId = projectId;

  // Form Fields
  document.getElementById("studio-title").value = project.title || "";
  document.getElementById("studio-category").value = project.category || "";
  document.getElementById("studio-metric").value = project.metric || "";
  document.getElementById("studio-submetric").value = project.subMetric || "";
  document.getElementById("studio-narrative").value = (project.narrative || []).join("\n\n");
  document.getElementById("studio-highlights").value = (project.highlights || []).join("\n");
  document.getElementById("studio-tags").value = (project.tags || []).join(", ");
  document.getElementById("studio-cta-text").value = project.ctaText || "";
  document.getElementById("studio-cta-link").value = project.ctaLink || "";

  // Preview Cover & Filename
  const coverImg = document.getElementById("studio-cover-preview-img");
  const coverFilename = document.getElementById("studio-cover-filename");
  if (coverImg) coverImg.src = project.image;
  if (coverFilename) coverFilename.textContent = project.image.split("/").pop();

  // Render Current Gallery Thumbs
  renderStudioGalleryThumbs(project);

  // Render Asset Library Grid
  renderStudioAssetGrid(project);

  setStudioSaveStatus("Ready");
}

function renderStudioGalleryThumbs(project) {
  const container = document.getElementById("studio-gallery-thumbs");
  if (!container) return;

  if (!project.gallery || project.gallery.length === 0) {
    container.innerHTML = `<span style="font-size: 0.7rem; color: var(--text-subtle);">No gallery photos added</span>`;
    return;
  }

  container.innerHTML = project.gallery.map((imgSrc, idx) => `
    <div class="gallery-thumb-chip">
      <img src="${imgSrc}" alt="Gallery item" />
      <button type="button" class="remove-gallery-btn" onclick="removeGalleryImageFromStudio(${idx})" title="Remove from stack">×</button>
    </div>
  `).join("");
}

function removeGalleryImageFromStudio(index) {
  const project = projectsData.find(p => p.id === currentStudioProjectId);
  if (!project || !project.gallery) return;
  project.gallery.splice(index, 1);
  saveStudioData(true);
  renderStudioGalleryThumbs(project);
  renderStudioAssetGrid(project);
}

function renderStudioAssetGrid(project) {
  const container = document.getElementById("studio-asset-grid");
  if (!container) return;

  container.innerHTML = availableAssets.map(asset => {
    const isCover = project.image === asset.path;
    const isGallery = (project.gallery || []).includes(asset.path);

    let badgeHtml = "";
    if (isCover) {
      badgeHtml = `<span class="asset-badge-tag badge-cover">★ Cover</span>`;
    } else if (isGallery) {
      badgeHtml = `<span class="asset-badge-tag badge-gallery">✓ Gallery</span>`;
    }

    return `
      <div class="asset-thumb-choice ${isCover ? 'is-cover' : ''} ${isGallery ? 'is-gallery' : ''}" title="${asset.label} (${asset.name})">
        ${badgeHtml}
        <img src="${asset.path}" alt="${asset.label}" loading="lazy" />
        <span class="asset-name-tag">${asset.label}</span>
        
        <div class="asset-hover-overlay">
          <button type="button" class="asset-btn-action btn-set-cover" onclick="setStudioCoverImage('${asset.path}')">
            ★ Set Cover
          </button>
          <button type="button" class="asset-btn-action btn-toggle-gallery" onclick="toggleStudioGalleryImage('${asset.path}')">
            ${isGallery ? '− Remove Gal' : '＋ Add Gal'}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function setStudioCoverImage(imgPath) {
  const project = projectsData.find(p => p.id === currentStudioProjectId);
  if (!project) return;

  project.image = imgPath;
  const coverImg = document.getElementById("studio-cover-preview-img");
  const coverFilename = document.getElementById("studio-cover-filename");
  if (coverImg) coverImg.src = imgPath;
  if (coverFilename) coverFilename.textContent = imgPath.split("/").pop();

  saveStudioData(true);
  renderStudioAssetGrid(project);
  showToast("Cover set to " + imgPath.split("/").pop());
}

function toggleStudioGalleryImage(imgPath) {
  const project = projectsData.find(p => p.id === currentStudioProjectId);
  if (!project) return;
  if (!project.gallery) project.gallery = [];

  const idx = project.gallery.indexOf(imgPath);
  if (idx > -1) {
    project.gallery.splice(idx, 1);
    showToast("Removed from gallery stack");
  } else {
    project.gallery.push(imgPath);
    showToast("Added to gallery stack");
  }

  saveStudioData(true);
  renderStudioGalleryThumbs(project);
  renderStudioAssetGrid(project);
}

function applyCustomCoverImage() {
  const input = document.getElementById("studio-custom-img");
  if (!input || !input.value.trim()) return;
  const customPath = input.value.trim();
  setStudioCoverImage(customPath);
  input.value = "";
}

function saveStudioData(silent = false) {
  const project = projectsData.find(p => p.id === currentStudioProjectId);
  if (project) {
    // Read from inputs
    project.title = document.getElementById("studio-title").value.trim();
    project.category = document.getElementById("studio-category").value.trim();
    project.metric = document.getElementById("studio-metric").value.trim();
    project.subMetric = document.getElementById("studio-submetric").value.trim();
    
    // Narrative
    const rawNarrative = document.getElementById("studio-narrative").value.trim();
    project.narrative = rawNarrative ? rawNarrative.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean) : [];

    // Highlights
    const rawHighlights = document.getElementById("studio-highlights").value.trim();
    project.highlights = rawHighlights ? rawHighlights.split("\n").map(s => s.trim().replace(/^[•\-\*✓]\s*/, '')).filter(Boolean) : [];

    // Tags
    const rawTags = document.getElementById("studio-tags").value.trim();
    project.tags = rawTags ? rawTags.split(",").map(s => s.trim().replace(/^#/, '')).filter(Boolean) : [];

    // CTA
    project.ctaText = document.getElementById("studio-cta-text").value.trim();
    project.ctaLink = document.getElementById("studio-cta-link").value.trim();
  }

  // Persist to localStorage
  try {
    localStorage.setItem("alfan_portfolio_projects", JSON.stringify(projectsData));
    setStudioSaveStatus("Saved ✓");
  } catch (e) {
    console.error("Storage error:", e);
  }

  // Re-render gallery cards
  renderPolaroidGallery();

  // If case study modal is open, re-render it
  const caseModal = document.getElementById("case-modal");
  if (caseModal && caseModal.classList.contains("open") && currentDetailModalProjectId === currentStudioProjectId) {
    openDetailModal(currentStudioProjectId);
  }

  if (!silent) {
    showToast("✨ Card changes saved & applied live!");
  }
}

function resetStudioDefaults() {
  if (confirm("Reset all customized portfolio cards back to original defaults?")) {
    localStorage.removeItem("alfan_portfolio_projects");
    projectsData = JSON.parse(JSON.stringify(defaultProjectsData));
    loadProjectIntoStudio(currentStudioProjectId);
    renderPolaroidGallery();
    showToast("Portfolio data reset to defaults");
  }
}

function openExportModal() {
  const modal = document.getElementById("export-modal");
  const textarea = document.getElementById("export-code-textarea");
  if (!modal || !textarea) return;

  const exportCode = `// Exported Projects Data for Imam Alfan Rahadyan\nconst defaultProjectsData = ${JSON.stringify(projectsData, null, 2)};`;
  textarea.value = exportCode;
  modal.classList.add("open");
  if (window.lucide) window.lucide.createIcons();
}

function closeExportModal() {
  const modal = document.getElementById("export-modal");
  if (modal) modal.classList.remove("open");
}

function copyExportCode() {
  const textarea = document.getElementById("export-code-textarea");
  if (!textarea) return;
  textarea.select();
  navigator.clipboard.writeText(textarea.value).then(() => {
    showToast("📋 Code copied to clipboard!");
  }).catch(() => {
    document.execCommand("copy");
    showToast("📋 Code copied!");
  });
}

function setStudioSaveStatus(text) {
  const badge = document.getElementById("studio-save-status");
  if (badge) badge.textContent = text;
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("studio-toast");
  const msgEl = document.getElementById("studio-toast-msg");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// 10. ESCAPE KEY & GLOBAL KEYBOARD SHORTCUTS
function setupKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    // Secret Owner Shortcut: Ctrl + Shift + E (or Cmd + Shift + E)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "E" || e.key === "e")) {
      e.preventDefault();
      promptForAdminPasscode();
      return;
    }

    if (e.key === "Escape") {
      const studioModal = document.getElementById("studio-modal");
      const exportModal = document.getElementById("export-modal");
      const caseModal = document.getElementById("case-modal");

      if (exportModal && exportModal.classList.contains("open")) {
        closeExportModal();
      } else if (studioModal && studioModal.classList.contains("open")) {
        closeStudioModal();
      } else if (caseModal && caseModal.classList.contains("open")) {
        closeDetailModal();
      } else if (currentPanel !== "home") {
        showPanel("home");
      }
    }
  });
}

// 11. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  checkStudioAdminAuth();
  initParticleCanvas();
  updateTypewriter();
  renderPolaroidGallery();
  setupJourneyTabs();
  setupThemeToggle();
  setupKeyboardNavigation();

  // Navigation Event Listeners (Gift Box Surprise & CV Stack)
  const openBoxBtn = document.getElementById("open-box-btn");
  if (openBoxBtn) {
    openBoxBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      triggerGiftBoxOpening();
    });
  }

  const giftBoxWrapper = document.getElementById("gift-box-wrapper");
  if (giftBoxWrapper) {
    giftBoxWrapper.addEventListener("click", () => {
      triggerGiftBoxOpening();
    });
    giftBoxWrapper.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        triggerGiftBoxOpening();
      }
    });
  }

  const polaroidStackBtn = document.getElementById("polaroid-stack-btn");
  if (polaroidStackBtn) {
    polaroidStackBtn.addEventListener("click", () => showPanel("about"));
  }

  const backBtn = document.getElementById("header-back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => showPanel("home"));
  }

  // Case Modal Listeners
  const modalCloseBtn = document.getElementById("modal-close-x");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeDetailModal);
  }

  const modalBackdrop = document.getElementById("modal-backdrop-el");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeDetailModal);
  }

  const modalEditThisBtn = document.getElementById("modal-edit-this-btn");
  if (modalEditThisBtn) {
    modalEditThisBtn.addEventListener("click", () => {
      openStudioModal(currentDetailModalProjectId);
    });
  }

  // Studio Modal Listeners
  const openStudioBtn = document.getElementById("open-studio-btn");
  if (openStudioBtn) {
    openStudioBtn.addEventListener("click", () => openStudioModal());
  }

  const studioCloseBtn = document.getElementById("studio-close-x");
  if (studioCloseBtn) {
    studioCloseBtn.addEventListener("click", closeStudioModal);
  }

  const studioBackdrop = document.getElementById("studio-backdrop-el");
  if (studioBackdrop) {
    studioBackdrop.addEventListener("click", closeStudioModal);
  }

  const studioSelect = document.getElementById("studio-project-select");
  if (studioSelect) {
    studioSelect.addEventListener("change", (e) => {
      loadProjectIntoStudio(e.target.value);
    });
  }

  // Live Sync on Form Input
  const formInputIds = [
    "studio-title", "studio-category", "studio-metric", "studio-submetric",
    "studio-narrative", "studio-highlights", "studio-tags", "studio-cta-text", "studio-cta-link"
  ];
  formInputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => saveStudioData(true));
      el.addEventListener("change", () => saveStudioData(true));
    }
  });

  const studioDoneBtn = document.getElementById("studio-done-btn");
  if (studioDoneBtn) {
    studioDoneBtn.addEventListener("click", () => {
      saveStudioData(false);
      closeStudioModal();
    });
  }

  const studioResetBtn = document.getElementById("studio-reset-btn");
  if (studioResetBtn) {
    studioResetBtn.addEventListener("click", resetStudioDefaults);
  }

  const studioExportBtn = document.getElementById("studio-export-btn");
  if (studioExportBtn) {
    studioExportBtn.addEventListener("click", openExportModal);
  }

  const exportCloseBtn = document.getElementById("export-close-x");
  if (exportCloseBtn) {
    exportCloseBtn.addEventListener("click", closeExportModal);
  }

  const exportBackdrop = document.getElementById("export-backdrop-el");
  if (exportBackdrop) {
    exportBackdrop.addEventListener("click", closeExportModal);
  }

  const exportCopyBtn = document.getElementById("export-copy-btn");
  if (exportCopyBtn) {
    exportCopyBtn.addEventListener("click", copyExportCode);
  }

  const applyCustomImgBtn = document.getElementById("studio-apply-custom-img-btn");
  if (applyCustomImgBtn) {
    applyCustomImgBtn.addEventListener("click", applyCustomCoverImage);
  }

  // Lock Studio button
  const studioLockBtn = document.getElementById("studio-lock-btn");
  if (studioLockBtn) {
    studioLockBtn.addEventListener("click", disableAdminMode);
  }

  // Secret triple-click on brand logo [ ALFAN ] to unlock Studio
  const brandLogo = document.getElementById("brand-box-btn");
  if (brandLogo) {
    let logoClicks = 0;
    let logoTimer = null;
    brandLogo.addEventListener("click", () => {
      logoClicks++;
      clearTimeout(logoTimer);
      if (logoClicks >= 3) {
        logoClicks = 0;
        promptForAdminPasscode();
      } else {
        logoTimer = setTimeout(() => { logoClicks = 0; }, 800);
      }
    });
  }

  showPanel("home");

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
