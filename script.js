// Imam Alfan Rahadyan - Portfolio Case Studies with Real PPT Assets
const caseStudies = [
  {
    id: "frost-one",
    title: "Frost.One: Scaling Faceless Media to 68K+ Subscribers",
    category: "content",
    categoryLabel: "Faceless YouTube Media",
    badgeColor: "orange",
    stats: "26.4M+ Views / Month",
    subStats: "68K+ Subs • 95%+ Retention",
    client: "YouTube Creator Channel",
    summary: "Built and scaled a faceless digital media channel from 0 to 43k+ subscribers in 5 months, and expanded to 68k+ subscribers with 26.4M+ monthly views.",
    description: "Crafted viral short-form and high-retention video content consistently hitting multi-million views. Engineered narrative hooks, researched script concepts, and handled full-stack video editing and audience retention optimization.",
    tags: ["Viral Retention", "Scriptwriting", "Video Editing", "YouTube Analytics", "Faceless Media"],
    image: "assets/images/frost-analytics.png",
    keyHighlights: [
      "Grew channel from 0 to 43k+ subscribers in just 5 months (Aug 2023 - Jan 2024)",
      "Surged 58.14% to 68,000+ current subscribers with 26,438,606 views in 28 days",
      "Achieved consistent 95%+ watch retention rate on short-form videos with >1M views",
      "Managed end-to-end production: storytelling, scriptwriting, audio mastering, and pacing"
    ]
  },
  {
    id: "teman-crypto",
    title: "Teman Crypto Indonesia: Web3 Community & Partnerships",
    category: "web3",
    categoryLabel: "Web3 & Community Operations",
    badgeColor: "purple",
    stats: "1,000+ Members Scaled",
    subStats: "Top Exchange Partners",
    client: "Co-Founder & COO",
    summary: "Co-founded an Indonesian crypto community, scaling from 0 to 1k+ members and securing strategic partnerships with major global crypto exchanges.",
    description: "Spearheaded community growth, hosted high-impact live AMAs, designed educational crypto campaigns, and executed collaborations with Tokocrypto, Bybit, and Bitget.",
    tags: ["Community Operations", "Exchange Partnerships", "AMA Host", "DeFi / Web3", "Social Impact"],
    image: "assets/images/teman-crypto.png",
    keyHighlights: [
      "Co-founded community and grew to 1,000+ active members across Telegram & social channels",
      "Official Partner of Binance Community Summit 2021 (CeFi vs DeFi) with Tokocrypto",
      "Hosted official AMAs and trading events with Bybit Indonesia and Bitget Global",
      "Organized community bounties, quizzes, and real-world social donations (baksos)"
    ]
  },
  {
    id: "creative-design",
    title: "Visual Design, Illustrations & Award-Winning Posters",
    category: "design",
    categoryLabel: "Visual Design & Illustration",
    badgeColor: "amber",
    stats: "1st Place Winner UGM",
    subStats: "Sneztaz Magazine & LIPI",
    client: "Creative & Publication Work",
    summary: "Winner of Gadjah Mada University Panateen Poster Competition (FK-KMK UGM), illustrator for Kintakun x Lazada, and magazine layout designer.",
    description: "Developed innovative visual layouts and vector illustrations elevating brand aesthetics. Designed merchandise patterns, mascot concepts, and scientific posters.",
    tags: ["Visual Design", "Poster Art", "Illustrator", "Brand Layouts", "Editorial"],
    image: "assets/images/art-landscape.png",
    keyHighlights: [
      "1st Place Winner of Poster Design Competition held by FK-KMK Universitas Gadjah Mada (2019)",
      "Designed layout and creative graphics for Sneztaz Magazine media publications",
      "Created licensed illustration patterns for Kintakun x Lazada Kreasi #darikamar",
      "Developed mascot and visual identity concepts for government/science bodies (LIPI)"
    ]
  },
  {
    id: "pmm-jambi",
    title: "Pertukaran Mahasiswa Merdeka: Suku Anak Dalam Program",
    category: "impact",
    categoryLabel: "National Exchange Program",
    badgeColor: "purple",
    stats: "Kemendikbud Scholarship",
    subStats: "Grade A • Suku Anak Dalam",
    client: "Universitas Jambi & Kemendikbud",
    summary: "Selected for a fully funded 6-month flagship national exchange scholarship, conducting cultural immersion and interactive teaching for Suku Anak Dalam.",
    description: "Completed advanced courses in International Trade, Monetary Economics, and Capital Market with Grade A, while leading community outreach in Jambi province.",
    tags: ["Student Exchange", "International Relations", "Education Outreach", "Economics"],
    image: "assets/images/pmm-jambi.jpg",
    keyHighlights: [
      "Awarded fully funded Kemendikbud Merdeka Belajar exchange scholarship to Universitas Jambi",
      "Conducted on-site social visits and interactive lessons with Suku Anak Dalam communities",
      "Completed rigorous business and economic coursework with straight 'A' distinctions"
    ]
  },
  {
    id: "ipb-finance",
    title: "Stock Trading Competition Finalist (IPB Finance Fest)",
    category: "web3",
    categoryLabel: "Financial & Market Analysis",
    badgeColor: "orange",
    stats: "Top 10 of 350+ Participants",
    subStats: "2-Week Trading Sprint",
    client: "IPB University Finance Fest",
    summary: "Recognized as a Top 10 Finalist among 350+ nationwide competitors in a high-intensity 2-week active stock trading championship.",
    description: "Executed data-driven technical analysis, risk management, and market liquidity strategies to outperform 97% of participants.",
    tags: ["Financial Markets", "Technical Analysis", "Risk Management", "Data Analytics"],
    image: "assets/images/ipb-finalist.png",
    keyHighlights: [
      "Ranked Top 10 out of 350+ trading teams and individual participants across Indonesia",
      "Maintained disciplined risk-to-reward ratios during volatile market conditions",
      "Demonstrated analytical rigor in capital market strategy and portfolio management"
    ]
  },
  {
    id: "gpp-jember",
    title: "Gerakan Peduli Perempuan: Social Impact & Videography",
    category: "impact",
    categoryLabel: "Videography & Team Leadership",
    badgeColor: "emerald",
    stats: "5-Member Team Led",
    subStats: "Social Empowerment",
    client: "GPP Jember (Internship)",
    summary: "Served as Videographer, Editor & Regional Team Leader directing educational campaigns on women's rights and community development.",
    description: "Managed a 5-member team executing community programs on maternal-infant health and women empowerment in Tegalgede, Jember, producing compelling advocacy video stories.",
    tags: ["Team Leadership", "Videography", "Documentary Editing", "Social Advocacy"],
    image: "assets/images/frost-short.png",
    keyHighlights: [
      "Led regional 5-member team on grassroots educational and empowerment programs",
      "Captured, directed, and edited multimedia stories focused on maternal-child health",
      "Synthesized community feedback into accessible visual and educational modules"
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderCaseStudies("all");
  setupFilters();
  setupModal();
  setupCopyEmail();
  setupMobileMenu();
  setupDynamicYear();
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Render Case Studies to Grid
function renderCaseStudies(filter = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered = filter === "all" ? caseStudies : caseStudies.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(item => `
    <div class="glass-card bg-white rounded-2xl overflow-hidden group flex flex-col justify-between border border-zinc-200/90 hover:border-orange-300 transition-all duration-300">
      
      <!-- Card Image Header (Real PPT asset) -->
      <div class="relative w-full aspect-[16/9] overflow-hidden bg-zinc-100 cursor-pointer" onclick="openDetailModal('${item.id}')">
        <img src="${item.image}" 
             alt="${escapeHtml(item.title)}" 
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
             loading="lazy" />
        
        <!-- Category Pill -->
        <div class="absolute top-3 left-3 flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-zinc-900 border border-zinc-200/90 shadow-sm uppercase tracking-wider font-mono">
            ${item.categoryLabel}
          </span>
        </div>

        <!-- Metric Highlight Badge -->
        <div class="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white shadow-md shadow-orange-500/25">
          <i data-lucide="trending-up" class="w-3.5 h-3.5 inline"></i>
          <span>${item.stats}</span>
        </div>

        <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <span class="font-mono bg-zinc-900/80 px-2.5 py-0.5 rounded backdrop-blur-sm font-semibold">
            ${item.subStats}
          </span>
        </div>
      </div>

      <!-- Card Content -->
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div class="text-xs font-bold text-orange-600 mb-1 tracking-wider uppercase font-mono">${item.client}</div>
          <h3 class="text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition-colors leading-snug cursor-pointer" onclick="openDetailModal('${item.id}')">
            ${item.title}
          </h3>
          <p class="text-sm text-zinc-600 mt-2 line-clamp-3 leading-relaxed">
            ${item.summary}
          </p>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${item.tags.slice(0, 3).map(tag => `
            <span class="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[11px] font-medium border border-zinc-200/60">
              #${tag}
            </span>
          `).join("")}
        </div>

        <!-- Detail Action Button -->
        <div class="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
          <span class="text-zinc-500 font-medium flex items-center gap-1">
            <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600"></i> Verified Track Record
          </span>
          <button onclick="openDetailModal('${item.id}')" class="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            View Case Study <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>

      </div>
    </div>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Filter Tabs Handling
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderCaseStudies(category);
    });
  });
}

// Detail Modal Management
function setupModal() {
  const modal = document.getElementById("detail-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const backdrop = document.getElementById("modal-backdrop");

  if (!modal) return;

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function openDetailModal(caseId) {
  const item = caseStudies.find(c => c.id === caseId);
  if (!item) return;

  const modal = document.getElementById("detail-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalClient = document.getElementById("modal-client");
  const modalDesc = document.getElementById("modal-description");
  const modalHighlights = document.getElementById("modal-highlights");
  const modalStats = document.getElementById("modal-stats");
  const modalTags = document.getElementById("modal-tags");
  const modalImage = document.getElementById("modal-image");

  if (!modal) return;

  if (modalTitle) modalTitle.textContent = item.title;
  if (modalClient) modalClient.textContent = item.client + " • " + item.categoryLabel;
  if (modalDesc) modalDesc.textContent = item.description;
  if (modalStats) modalStats.textContent = item.stats + " (" + item.subStats + ")";
  if (modalImage) {
    modalImage.src = item.image;
    modalImage.alt = item.title;
  }

  if (modalHighlights) {
    modalHighlights.innerHTML = item.keyHighlights.map(h => `
      <li class="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
        <i data-lucide="check" class="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5"></i>
        <span>${escapeHtml(h)}</span>
      </li>
    `).join("");
  }

  if (modalTags) {
    modalTags.innerHTML = item.tags.map(t => `
      <span class="px-2.5 py-1 rounded-lg bg-orange-50 text-orange-700 text-xs font-semibold border border-orange-200">
        ${escapeHtml(t)}
      </span>
    `).join("");
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Copy Email with Toast Notification
function setupCopyEmail() {
  const copyBtn = document.getElementById("copy-email-btn");
  const emailVal = "alfan.rahadyan10@gmail.com";
  
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(emailVal).then(() => {
        showToast("Email address copied: " + emailVal);
      }).catch(() => {
        showToast("Email: " + emailVal);
      });
    });
  }
}

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) return;
  
  toast.querySelector("#toast-message").textContent = message;
  toast.classList.add("show");
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Mobile Hamburger Menu
function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// Dynamic Current Year
function setupDynamicYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Utility to escape HTML
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
