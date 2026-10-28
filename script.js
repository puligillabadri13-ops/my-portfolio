/**
 * ==============================================================================
 * Badri Puligilla - Personal Portfolio JavaScript
 * Interactive Features, Typing Animation, Particles, and Safe Link Handlers
 * ==============================================================================
 */

(function () {
  'use strict';

  // Check if reduced motion is preferred by user
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Configuration reference from projects.js (fallback if not loaded)
  const DATA = window.PORTFOLIO_DATA || {
    personal: {
      fullName: "Badri Puligilla",
      collegeEmail: "26HEU08R160@mrdu.edu.in",
      githubUrl: "https://github.com/puligillabadri13-ops",
      linkedinUrl: "https://www.linkedin.com/in/puligilla-badri-34a9a9416",
      typingPhrases: [
        "Python Learner",
        "Aspiring Developer",
        "B.Tech CSE (DS) Student",
        "Future Data Science Professional"
      ]
    },
    projects: [],
    certificates: []
  };

  /* ----------------------------------------------------------------------------
   * 1. Dynamic Year Update
   * ------------------------------------------------------------------------- */
  function initYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /* ----------------------------------------------------------------------------
   * 2. Typing Animation
   * ------------------------------------------------------------------------- */
  function initTypingAnimation() {
    const textEl = document.getElementById('typing-text');
    if (!textEl) return;

    const phrases = DATA.personal.typingPhrases || [
      "Python Learner",
      "Aspiring Developer",
      "B.Tech CSE (DS) Student",
      "Future Data Science Professional"
    ];

    if (prefersReducedMotion) {
      textEl.textContent = phrases[0];
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        textEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        textEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 110;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        // Finished typing full phrase, pause before deleting
        typingSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 450;
      }

      setTimeout(type, typingSpeed);
    }

    type();
  }

  /* ----------------------------------------------------------------------------
   * 3. Ambient Background Particle Canvas
   * ------------------------------------------------------------------------- */
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.8 + 0.8;
        this.color = Math.random() > 0.4 ? 'rgba(0, 240, 255,' : 'rgba(176, 38, 255,';
        this.alpha = Math.random() * 0.4 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ')';
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color + '0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Connect close particles with faint neon lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = (1 - dist / 130) * 0.15;
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Resize listener with debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 200);
    });
  }

  /* ----------------------------------------------------------------------------
   * 4. Desktop Mouse Following Glow Effect
   * ------------------------------------------------------------------------- */
  function initMouseFollower() {
    const follower = document.getElementById('mouse-follower');
    if (!follower || prefersReducedMotion || window.innerWidth <= 768) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isMoving = false;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        follower.style.opacity = '1';
        isMoving = true;
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      follower.style.opacity = '0';
    });

    function renderFollower() {
      // Smooth linear interpolation (lerp)
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      follower.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderFollower);
    }

    renderFollower();
  }

  /* ----------------------------------------------------------------------------
   * 5. Navbar Scrolled State & Mobile Menu
   * ------------------------------------------------------------------------- */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggleBtn = document.getElementById('mobile-toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky scrolled state
    function checkScroll() {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();

    // Mobile Hamburger Toggle
    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (toggleIcon) {
          toggleIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
      });

      // Close mobile menu when clicking any nav link
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            toggleBtn.setAttribute('aria-expanded', 'false');
            if (toggleIcon) toggleIcon.className = 'fa-solid fa-bars';
          }
        });
      });

      // Close mobile menu if clicked outside
      document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
          navMenu.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
          if (toggleIcon) toggleIcon.className = 'fa-solid fa-bars';
        }
      });
    }

    // ScrollSpy to highlight active nav link
    const sections = document.querySelectorAll('section[id]');
    function highlightNav() {
      const scrollPos = window.scrollY + 120;
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });
  }

  /* ----------------------------------------------------------------------------
   * 6. Scroll Entrance Animations (IntersectionObserver)
   * ------------------------------------------------------------------------- */
  function initScrollReveal() {
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  /* ----------------------------------------------------------------------------
   * 7. Modal & Toast Notification Helpers
   * ------------------------------------------------------------------------- */
  const modalOverlay = document.getElementById('info-modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalIcon = document.getElementById('modal-icon');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');

  function openModal(title, message, iconClass = 'fa-solid fa-laptop-code') {
    if (!modalOverlay) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.innerHTML = message;
    if (modalIcon) modalIcon.innerHTML = `<i class="${iconClass}"></i>`;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Toast Helper
  function showToast(message, iconClass = 'fa-solid fa-circle-check') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${iconClass}" style="color: var(--neon-cyan);"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 4000);
  }

  /* ----------------------------------------------------------------------------
   * 8. Safe Project Link & Repository Handlers
   * ------------------------------------------------------------------------- */
  function initProjectActions() {
    const liveButtons = document.querySelectorAll('.project-live-btn');
    const githubButtons = document.querySelectorAll('.project-github-btn');

    // Helper to find project config
    function getProject(id) {
      if (!DATA.projects || !DATA.projects.length) return null;
      return DATA.projects.find(p => p.id === id);
    }

    liveButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project-id');
        const project = getProject(projectId);

        if (!project) {
          openModal("Project Details", "Project information is loading. Please check back shortly.");
          return;
        }

        const url = (project.liveUrl || "").trim();
        const isPlaceholder = !url ||
          url === "YOUR_STUDY_PLANNER_PROJECT_URL" ||
          url === "YOUR_SIH_PROJECT_URL" ||
          url.startsWith("YOUR_");

        if (!isPlaceholder && (url.startsWith('http://') || url.startsWith('https://'))) {
          // Open verified external URL safely in new tab
          window.open(url, '_blank', 'noopener,noreferrer');
        } else {
          // Show friendly placeholder modal instead of broken link
          showToast("Live deployment link coming soon!", "fa-solid fa-clock");
          openModal(
            project.title,
            `<strong>Status:</strong> ${project.status}<br><br>` +
            `${project.description}<br><br>` +
            `<div style="padding: 0.85rem; background: rgba(0,240,255,0.06); border-radius: 8px; border: 1px dashed rgba(0,240,255,0.3); font-size: 0.88rem;">` +
            `<i class="fa-solid fa-circle-info" style="color: var(--neon-cyan);"></i> ` +
            `This project is in active development as part of my coursework. The live URL is currently configured as a placeholder in <code>projects.js</code> and will be updated once deployed.` +
            `</div>`,
            "fa-solid fa-laptop-code"
          );
        }
      });
    });

    githubButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project-id');
        const project = getProject(projectId);

        const url = project ? (project.githubUrl || "").trim() : "";

        if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
          window.open(url, '_blank', 'noopener,noreferrer');
        } else {
          showToast("Repository will be published soon!", "fa-brands fa-github");
          openModal(
            "Code Repository",
            `The public GitHub repository for <strong>${project ? project.title : 'this project'}</strong> will be linked here once the current learning iteration is committed to GitHub.<br><br>` +
            `You can visit my main GitHub profile at <a href="${DATA.personal.githubUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--neon-cyan); text-decoration: underline;">${DATA.personal.githubUrl}</a>.`,
            "fa-brands fa-github"
          );
        }
      });
    });
  }

  /* ----------------------------------------------------------------------------
   * 9. Certificates Details Handler
   * ------------------------------------------------------------------------- */
  function initCertificateActions() {
    const certButtons = document.querySelectorAll('.cert-action-btn');

    function getCert(id) {
      if (!DATA.certificates || !DATA.certificates.length) return null;
      return DATA.certificates.find(c => c.id === id);
    }

    certButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const certId = btn.getAttribute('data-cert-id');
        const cert = getCert(certId);

        if (!cert) return;

        const url = (cert.certificateUrl || "").trim();
        const hasUrl = url && (url.startsWith('http://') || url.startsWith('https://') || url.endsWith('.pdf'));

        let extraContent = "";
        if (hasUrl) {
          extraContent = `<br><br><a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Credential</a>`;
        } else {
          extraContent = `<br><br><div style="padding: 0.75rem 1rem; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px dashed var(--border-subtle); font-size: 0.85rem; color: var(--text-muted);"><i class="fa-solid fa-circle-check" style="color: var(--neon-cyan);"></i> Verified learning milestone. Certificate credential link can be added in <code>projects.js</code>.</div>`;
        }

        openModal(
          cert.title,
          `<strong>Category:</strong> ${cert.category}<br>` +
          `<strong>Status:</strong> ${cert.statusBadge}<br><br>` +
          `${cert.description}` +
          extraContent,
          "fa-solid fa-award"
        );
      });
    });
  }

  /* ----------------------------------------------------------------------------
   * 10. Copy Email & Contact Form Handling
   * ------------------------------------------------------------------------- */
  function initContactSection() {
    const copyBtn = document.getElementById('copy-email-btn');
    const form = document.getElementById('portfolio-contact-form');

    // Copy Email Button
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const email = DATA.personal.collegeEmail || "26HEU08R160@mrdu.edu.in";
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(() => {
            showToast("College email copied to clipboard!", "fa-regular fa-copy");
          }).catch(() => {
            fallbackCopy(email);
          });
        } else {
          fallbackCopy(email);
        }
      });
    }

    function fallbackCopy(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast("College email copied to clipboard!", "fa-regular fa-copy");
      } catch (err) {
        showToast("Email: " + text, "fa-solid fa-envelope");
      }
      document.body.removeChild(ta);
    }

    // Contact Form Submission (Safe mailto generation for static sites)
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const subjectInput = document.getElementById('contact-subject');
        const messageInput = document.getElementById('contact-message');

        const name = (nameInput ? nameInput.value : "").trim();
        const email = (emailInput ? emailInput.value : "").trim();
        const subject = (subjectInput ? subjectInput.value : "").trim();
        const message = (messageInput ? messageInput.value : "").trim();

        // Validation
        if (!name || !email || !subject || !message) {
          showToast("Please fill in all required fields.", "fa-solid fa-triangle-exclamation");
          return;
        }

        // Email basic format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          showToast("Please provide a valid email address.", "fa-solid fa-triangle-exclamation");
          return;
        }

        const recipient = DATA.personal.collegeEmail || "26HEU08R160@mrdu.edu.in";
        const emailSubject = `[Portfolio Contact] ${subject} - from ${name}`;
        const emailBody = `Hello Badri,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from your portfolio website.`;

        const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        // Open user's email client
        window.location.href = mailtoUrl;

        showToast("Opening email application...", "fa-regular fa-paper-plane");

        openModal(
          "Message Ready to Send",
          `Thank you, <strong>${name}</strong>!<br><br>` +
          `Your default email application is being opened to send this message to <strong>${recipient}</strong>.<br><br>` +
          `<small style="color: var(--text-dim);">Since this is hosted as a static site on GitHub Pages, messages are routed directly through your email client without intermediate servers or tracking.</small>`,
          "fa-regular fa-envelope"
        );

        form.reset();
      });
    }
  }

  /* ----------------------------------------------------------------------------
   * 11. Back to Top Button
   * ------------------------------------------------------------------------- */
  function initBackToTop() {
    const backBtn = document.getElementById('back-to-top-btn');
    if (!backBtn) return;

    backBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ----------------------------------------------------------------------------
   * Initialize Everything on DOM Content Loaded
   * ------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initYear();
    initTypingAnimation();
    initAmbientCanvas();
    initMouseFollower();
    initNavbar();
    initScrollReveal();
    initProjectActions();
    initCertificateActions();
    initContactSection();
    initBackToTop();
  });

})();
