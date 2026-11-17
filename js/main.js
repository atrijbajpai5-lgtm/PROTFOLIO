/**
 * =========================================================================
 * ATRIJ BAJPAI - PORTFOLIO INTERACTIVE ENGINE
 * =========================================================================
 * Dynamically binds configuration from js/config.js to DOM elements,
 * manages dark/light themes, project filters, animations, and toast alerts.
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Check if configuration exists
  if (typeof portfolioConfig === "undefined") {
    console.warn("portfolioConfig is not defined. Ensure js/config.js is loaded before main.js.");
    return;
  }

  initTheme();
  renderAllData(portfolioConfig);
  initTypingEffect(portfolioConfig.personal.titles);
  initProjectFilters(portfolioConfig.projects);
  initScrollSpy();
  initMobileNav();
  initContactForm(portfolioConfig.personal.email, portfolioConfig.contact.formspreeUrl);
  initHelperModal();
  initTiltEffect();
});

/* ==========================================================================
   THEME TOGGLER (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  
  // Check saved theme or system preference
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const currentTheme = savedTheme ? savedTheme : (prefersDark ? "dark" : "dark"); // Default to dark aesthetic
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme, themeIcon);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", activeTheme);
      localStorage.setItem("portfolio-theme", activeTheme);
      updateThemeIcon(activeTheme, themeIcon);
      showToast(`Switched to ${activeTheme === "light" ? "Light" : "Dark"} Mode`);
    });
  }
}

function updateThemeIcon(theme, iconElement) {
  if (!iconElement) return;
  if (theme === "light") {
    // Show Moon icon when in light mode so user can click to switch to dark
    iconElement.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    iconElement.setAttribute("title", "Switch to Dark Mode");
  } else {
    // Show Sun icon when in dark mode
    iconElement.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    iconElement.setAttribute("title", "Switch to Light Mode");
  }
}

/* ==========================================================================
   RENDER CONFIGURATION DATA TO DOM
   ========================================================================== */
function renderAllData(data) {
  const { personal, socials, stats, about, skills, projects, achievements, experience, contact } = data;

  // 1. Personal & Brand
  document.title = `${personal.name} | Professional Software Engineer Portfolio`;
  const nameDisplays = document.querySelectorAll(".data-user-name");
  nameDisplays.forEach(el => el.textContent = personal.name);

  const heroTagline = document.getElementById("heroTagline");
  if (heroTagline) heroTagline.textContent = personal.tagline;

  const heroLocation = document.getElementById("heroLocation");
  if (heroLocation) heroLocation.textContent = personal.location;

  const statusBadge = document.getElementById("statusBadgeText");
  if (statusBadge) statusBadge.textContent = personal.statusBadge;

  const resumeLinks = document.querySelectorAll(".data-resume-link");
  resumeLinks.forEach(link => {
    link.href = personal.resumeUrl || "#";
    if (personal.resumeUrl && personal.resumeUrl.endsWith(".pdf")) {
      link.setAttribute("download", `${personal.name.replace(/\s+/g, "_")}_Resume.pdf`);
    }
  });

  const avatarImg = document.getElementById("heroAvatar");
  if (avatarImg && personal.avatar) {
    avatarImg.src = personal.avatar;
    avatarImg.alt = personal.name;
  }

  // 2. Social Links (Hero & Contact)
  renderSocials(socials);

  // 3. Stats (Visual card & highlights)
  renderStats(stats);

  // 4. About Narrative & Highlights
  renderAbout(about);

  // 5. Skills Grid
  renderSkills(skills);

  // 6. Featured Projects
  renderProjects(projects);

  // 7. Achievements & Awards
  renderAchievements(achievements);

  // 8. Experience Timeline
  renderExperience(experience);

  // 9. Contact Info
  renderContact(personal, contact);
}

/* ==========================================================================
   RENDER SOCIALS
   ========================================================================== */
function renderSocials(socials) {
  const heroSocialsContainer = document.getElementById("heroSocials");
  const contactSocialsContainer = document.getElementById("contactSocials");

  const icons = {
    github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    twitter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`,
    leetcode: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    emailDirect: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
  };

  const socialKeys = ["github", "linkedin", "twitter", "leetcode", "emailDirect"];
  let html = "";

  socialKeys.forEach(key => {
    const url = socials[key];
    if (url && url.trim() !== "") {
      const nameCapital = key === "emailDirect" ? "Email" : key.charAt(0).toUpperCase() + key.slice(1);
      html += `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-pill" title="${nameCapital}" aria-label="${nameCapital}">
          ${icons[key] || icons.github}
        </a>
      `;
    }
  });

  if (heroSocialsContainer) heroSocialsContainer.innerHTML = html;
  if (contactSocialsContainer) contactSocialsContainer.innerHTML = html;
}

/* ==========================================================================
   RENDER STATS
   ========================================================================== */
function renderStats(stats) {
  const container = document.getElementById("quickStatsContainer");
  if (!container || !stats) return;

  container.innerHTML = stats.map(s => `
    <div class="quick-stat-item">
      <div class="quick-stat-num">${s.number}</div>
      <div class="quick-stat-label">${s.label}</div>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER ABOUT & HIGHLIGHTS
   ========================================================================== */
function renderAbout(about) {
  const headlineEl = document.getElementById("aboutHeadline");
  if (headlineEl) headlineEl.textContent = about.headline;

  const narrativeEl = document.getElementById("aboutNarrative");
  if (narrativeEl && about.paragraphs) {
    narrativeEl.innerHTML = about.paragraphs.map(p => `<p class="about-p">${p}</p>`).join("");
  }

  // Highlights
  const highlightsEl = document.getElementById("aboutHighlights");
  if (highlightsEl && about.highlights) {
    const iconSVGs = {
      code: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      zap: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
      cpu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
      shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    };

    highlightsEl.innerHTML = about.highlights.map(h => `
      <div class="highlight-card">
        <div class="highlight-icon-box">
          ${iconSVGs[h.icon] || iconSVGs.code}
        </div>
        <h4 class="highlight-title">${h.title}</h4>
        <p class="highlight-desc">${h.desc}</p>
      </div>
    `).join("");
  }

  // Education Details
  const eduContainer = document.getElementById("educationList");
  if (eduContainer && about.education) {
    eduContainer.innerHTML = about.education.map(e => `
      <div class="edu-item">
        <h4 class="edu-degree">${e.degree}</h4>
        <div class="edu-institution">${e.institution}</div>
        <div class="edu-meta">
          <span>📅 ${e.period}</span>
          ${e.score ? `<span class="edu-badge">${e.score}</span>` : ""}
        </div>
        <p class="edu-details">${e.details}</p>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   RENDER SKILLS
   ========================================================================== */
function renderSkills(skills) {
  const container = document.getElementById("skillsGridContainer");
  if (!container || !skills) return;

  container.innerHTML = skills.map(cat => `
    <div class="skill-category-card">
      <h3 class="category-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
        ${cat.category}
      </h3>
      <div class="skills-list">
        ${cat.items.map(item => `
          <div class="skill-chip">
            <span>${item.name}</span>
            ${item.level ? `<span class="skill-level-tag">${item.level}</span>` : ""}
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER PROJECTS
   ========================================================================== */
let allProjectsData = [];

function renderProjects(projects) {
  allProjectsData = projects;
  filterAndDisplayProjects("all");
}

function filterAndDisplayProjects(category) {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  const filtered = category === "all" 
    ? allProjectsData 
    : allProjectsData.filter(p => p.category.toLowerCase() === category.toLowerCase());

  container.innerHTML = filtered.map(p => `
    <div class="project-card" data-category="${p.category}">
      <div class="project-preview">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        ${p.featured ? `<span class="project-featured-badge">Featured</span>` : ""}
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        
        ${p.metrics ? `
          <div class="project-metric">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            ${p.metrics}
          </div>
        ` : ""}

        <div class="project-tech-tags">
          ${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>

        <div class="project-links">
          ${p.liveUrl ? `
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              Live Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          ` : ""}
          ${p.githubUrl ? `
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
          ` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      filterAndDisplayProjects(category);
    });
  });
}

/* ==========================================================================
   RENDER ACHIEVEMENTS & AWARDS
   ========================================================================== */
function renderAchievements(achievements) {
  const container = document.getElementById("achievementsContainer");
  if (!container || !achievements) return;

  container.innerHTML = achievements.map(ach => `
    <div class="achievement-card">
      <div class="achievement-top">
        <div class="achievement-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>
        ${ach.badge ? `<span class="achievement-badge">${ach.badge}</span>` : ""}
      </div>
      <h3 class="achievement-title">${ach.title}</h3>
      <div class="achievement-org">${ach.organization} · ${ach.date}</div>
      <p class="achievement-desc">${ach.description}</p>
      ${ach.link ? `
        <a href="${ach.link}" target="_blank" rel="noopener noreferrer" class="achievement-link">
          View Credential / Certificate →
        </a>
      ` : ""}
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER EXPERIENCE TIMELINE
   ========================================================================== */
function renderExperience(experience) {
  const container = document.getElementById("experienceTimeline");
  if (!container || !experience) return;

  container.innerHTML = experience.map(item => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-role">${item.role}</h3>
          <span class="timeline-period">${item.period}</span>
        </div>
        <div class="timeline-company">${item.company} · ${item.location} (${item.type})</div>
        <ul class="timeline-bullets">
          ${item.responsibilities.map(r => `<li>${r}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER CONTACT DETAILS
   ========================================================================== */
function renderContact(personal, contact) {
  const emailVal = document.getElementById("contactEmailVal");
  if (emailVal) emailVal.textContent = personal.email;

  const phoneCard = document.getElementById("contactPhoneCard");
  const phoneVal = document.getElementById("contactPhoneVal");
  if (personal.phone && personal.phone.trim() !== "") {
    if (phoneVal) phoneVal.textContent = personal.phone;
  } else if (phoneCard) {
    phoneCard.style.display = "none";
  }

  const locationVal = document.getElementById("contactLocationVal");
  if (locationVal) locationVal.textContent = personal.location;

  // Copy email button
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(personal.email).then(() => {
        showToast("✓ Email copied to clipboard!");
      }).catch(() => {
        showToast(`Email: ${personal.email}`);
      });
    });
  }
}

/* ==========================================================================
   DYNAMIC ROTATING TYPING EFFECT
   ========================================================================== */
function initTypingEffect(words) {
  const typingElement = document.getElementById("typingText");
  if (!typingElement || !words || words.length === 0) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const pauseTime = 1600;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let nextSpeed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      nextSpeed = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      nextSpeed = 300;
    }

    setTimeout(type, nextSpeed);
  }

  type();
}

/* ==========================================================================
   SCROLL SPY & STICKY NAV ACTIVE LINKS
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!mobileToggle || !mobileDrawer) return;

  mobileToggle.addEventListener("click", () => {
    mobileDrawer.classList.toggle("open");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
    });
  });
}

/* ==========================================================================
   CONTACT FORM SUBMISSION
   ========================================================================== */
function initContactForm(userEmail, formspreeUrl) {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("formName").value;
    const email = document.getElementById("formEmail").value;
    const subject = document.getElementById("formSubject").value;
    const message = document.getElementById("formMessage").value;

    if (!name || !email || !message) {
      showToast("⚠️ Please fill out all required fields.");
      return;
    }

    // If a Formspree URL is configured, send via POST fetch
    if (formspreeUrl && formspreeUrl.trim() !== "") {
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = "Sending...";
      submitBtn.disabled = true;

      fetch(formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name, email, subject, message })
      })
      .then(res => {
        if (res.ok) {
          showToast("✓ Message sent successfully! I will get back to you soon.");
          form.reset();
        } else {
          fallbackMailto(userEmail, subject, name, email, message);
        }
      })
      .catch(() => {
        fallbackMailto(userEmail, subject, name, email, message);
      })
      .finally(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      });
    } else {
      // Default: Clean mailto trigger
      fallbackMailto(userEmail, subject, name, email, message);
      showToast("Opening your email client to send message...");
      form.reset();
    }
  });
}

function fallbackMailto(toEmail, subject, name, email, message) {
  const mailSubject = encodeURIComponent(subject || `Portfolio Contact from ${name}`);
  const mailBody = encodeURIComponent(`Hi Atrij,\n\n${message}\n\nFrom: ${name} (${email})`);
  window.location.href = `mailto:${toEmail}?subject=${mailSubject}&body=${mailBody}`;
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById("toastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotification";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/* ==========================================================================
   HELPER CUSTOMIZATION MODAL (Instructions for Atrij Bajpai)
   ========================================================================== */
function initHelperModal() {
  const openBtn = document.getElementById("openHelperBtn");
  const modal = document.getElementById("helperModal");
  const closeBtn = document.getElementById("closeHelperBtn");

  if (!openBtn || !modal) return;

  openBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
}

/* ==========================================================================
   3D CARD TILT MICRO-INTERACTION
   ========================================================================== */
function initTiltEffect() {
  const card = document.querySelector(".hero-interactive-card");
  if (!card) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  });
}
