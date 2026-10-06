/* =============================================
   KANVAZ GALERI — main.js
   Premium Creative Art Supply Landing Page
   All interactions, animations, GSAP logic
   ============================================= */

/* ---- Image Configuration (Replace with real photos) ---- */
const IMAGES = {
  // Hero
  heroMain: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
  heroFloat: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80',

  // Bento / Category
  bentoCanvas: 'assets/images/kanvas-5.jpg',
  bentoPaint: 'assets/images/alatlukis-1.jpeg',
  bentoSchool: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
  bentoTote: 'assets/images/totebag-3.jpeg',
  bentoApparel: 'assets/images/kaos-1.jpeg',

  // Products
  prodCanvas: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
  prodPaint: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
  prodTote: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
  prodUmbrella: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=600&q=80',
  prodSandal: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
  prodKaos: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',

  // About
  about1: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=700&q=80',

  // Story steps
  story1: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=80',
  story2: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=700&q=80',
  story3: 'https://images.unsplash.com/photo-1576672843344-f01907a9d40c?w=700&q=80',
  story4: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=700&q=80',
  story5: 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=700&q=80',

  // School
  school: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80',

  // Custom / Apparel
  custom1: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
  custom2: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',

  // Gallery
  gallery: [
    'assets/images/kipas-5.jpeg',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=75',
    'assets/images/kanvas-3.jpeg',
    'assets/images/lukisan-4.jpeg',
    'assets/images/payung-7.jpeg',
    'assets/images/payung-1.jpeg',
    'assets/images/payung-10.jpeg',
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&q=75',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=75',
    'assets/images/kipas-4.jpeg',
    'assets/images/topeng-2.jpeg',
    'assets/images/payung-6.jpeg',
    'assets/images/totebag-2.jpeg',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=75',
    'assets/images/kaos-1.jpeg',
  ],

  // Gallery captions (parallel array)
  galleryCaptions: [
    'Seni Melukis',
    'Proses Berkarya',
    'Kanvas & Media',
    'Eksplorasi Warna',
    'Tote Bag Kreatif',
    'Apparel Lokal',
    'Workshop Seni',
    'Palet & Kuas',
    'Karya Final',
  ]
};

const WA_URL = 'https://wa.me/6281378676055';

/* =========================================
   UTILITY FUNCTIONS
   ========================================= */

function isMobile() {
  return window.innerWidth <= 768;
}

function isReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function gsapLoaded() {
  return typeof gsap !== 'undefined';
}

/* =========================================
   1. PRELOADER
   ========================================= */

function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const percentEl = preloader.querySelector('.pre-percent');
  const barFill = preloader.querySelector('.pre-bar-fill');
  const logoInner = preloader.querySelector('.pre-logo-inner');
  const preSub = preloader.querySelector('.pre-sub');
  const preProgressWrapper = preloader.querySelector('.pre-progress-wrapper');
  const preSpinner = preloader.querySelector('.pre-spinner');

  let progress = 0;
  const duration = 1800;
  const start = performance.now();

  // Reveal logo & sub
  if (gsapLoaded()) {
    gsap.to(logoInner, { y: '0%', duration: 0.75, ease: 'power3.out', delay: 0.1 });
    gsap.to([preSub, preProgressWrapper, preSpinner], {
      opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.4, stagger: 0.1
    });
  } else {
    if (logoInner) logoInner.style.transform = 'translateY(0)';
    if (preSub) preSub.style.opacity = '1';
    if (preProgressWrapper) preProgressWrapper.style.opacity = '1';
  }

  function updateProgress(timestamp) {
    const elapsed = timestamp - start;
    progress = Math.min((elapsed / duration) * 100, 100);

    if (percentEl) percentEl.textContent = Math.round(progress) + '%';
    if (barFill) barFill.style.width = progress + '%';

    if (progress < 100) {
      requestAnimationFrame(updateProgress);
    } else {
      finishPreloader();
    }
  }

  requestAnimationFrame(updateProgress);

  function finishPreloader() {
    setTimeout(() => {
      if (gsapLoaded()) {
        gsap.to(preloader, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power3.inOut',
          onComplete: () => {
            preloader.style.display = 'none';
            document.body.style.overflow = '';
            initHeroAnimation();
          }
        });
      } else {
        preloader.style.display = 'none';
        document.body.style.overflow = '';
        initHeroAnimation();
      }
    }, 250);
  }

  // Prevent scroll during preloader
  document.body.style.overflow = 'hidden';
}

/* =========================================
   2. CUSTOM CURSOR
   ========================================= */

function initCustomCursor() {
  if (isMobile()) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const label = document.getElementById('cursor-label');

  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;
  let ringX = 0, ringY = 0;
  let dotAlpha = 0, ringAlpha = 0;

  const DOT_SPEED = 0.9;
  const RING_SPEED = 0.14;

  function updateCursor() {
    dotAlpha += (1 - dotAlpha) * 0.12;
    ringAlpha += (1 - ringAlpha) * 0.08;

    dotX += (mouseX - dotX) * DOT_SPEED;
    dotY += (mouseY - dotY) * DOT_SPEED;
    ringX += (mouseX - ringX) * RING_SPEED;
    ringY += (mouseY - ringY) * RING_SPEED;

    dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

    if (label) {
      label.style.transform = `translate(${mouseX + 16}px, ${mouseY + 16}px)`;
    }

    requestAnimationFrame(updateCursor);
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  // Cursor hover states
  const hoverEls = document.querySelectorAll('[data-cursor]');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      const cursorText = el.getAttribute('data-cursor') || '';
      if (label) label.textContent = cursorText;
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  requestAnimationFrame(updateCursor);
}

/* =========================================
   3. SCROLL PROGRESS
   ========================================= */

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  function updateBar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = Math.min(pct, 100) + '%';
  }

  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();
}

/* =========================================
   4. NAVBAR
   ========================================= */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* =========================================
   5. MOBILE MENU
   ========================================= */

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* =========================================
   6. MARQUEE
   ========================================= */

function initMarquee() {
  if (!gsapLoaded()) return;

  const track = document.querySelector('.marquee-track');
  if (!track) return;

  const content = track.querySelector('.marquee-content');
  if (!content) return;

  // Clone for seamless loop
  const clone = content.cloneNode(true);
  track.appendChild(clone);

  const contentWidth = content.scrollWidth;

  gsap.to(track, {
    x: `-=${contentWidth}`,
    duration: contentWidth / 45,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % contentWidth)
    }
  });
}

/* =========================================
   7. HERO ANIMATION
   ========================================= */

function initHeroAnimation() {
  if (!gsapLoaded() || isReducedMotion()) {
    // Fallback: just show everything
    document.querySelectorAll('.word-inner').forEach(el => {
      el.style.transform = 'translateY(0)';
    });
    document.querySelectorAll('.hero-sub, .hero-meta, .hero-cta, .hero-visual, .hero-label').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Reveal word-by-word headline
  tl.to('.word-inner', {
    y: '0%',
    duration: 0.85,
    stagger: 0.07,
    ease: 'power3.out'
  }, 0)
  .from('.hero-label', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out'
  }, 0.15)
  .from('.hero-sub', {
    opacity: 0,
    y: 25,
    duration: 0.75,
    ease: 'power2.out'
  }, 0.4)
  .from('.hero-cta', {
    opacity: 0,
    y: 20,
    duration: 0.65,
    ease: 'power2.out',
    stagger: 0.1
  }, 0.6)
  .from('.hero-meta', {
    opacity: 0,
    y: 15,
    duration: 0.55,
    ease: 'power2.out'
  }, 0.75)
  .from('.hero-visual', {
    opacity: 0,
    x: 40,
    duration: 1,
    ease: 'power3.out'
  }, 0.2)
  .from('.hero-badge', {
    opacity: 0,
    y: 20,
    scale: 0.9,
    duration: 0.65,
    ease: 'back.out(1.5)',
    stagger: 0.15
  }, 0.8);
}

/* =========================================
   8. SCROLL ANIMATIONS
   ========================================= */

function initScrollAnimations() {
  if (!gsapLoaded() || isReducedMotion()) {
    document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-left, .reveal-right').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const { ScrollTrigger } = gsap.plugins || {};

  gsap.utils.toArray('.reveal-up').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      }
    });
  });

  gsap.utils.toArray('.reveal-fade').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      duration: 0.75,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        once: true
      }
    });
  });

  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      }
    });
  });

  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      }
    });
  });

  // Stagger reveals for grouped items
  gsap.utils.toArray('.stagger-group').forEach(group => {
    const items = group.querySelectorAll('.stagger-item');
    gsap.from(items, {
      opacity: 0,
      y: 35,
      duration: 0.75,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
        once: true
      }
    });
  });

  // Section headings char-by-word
  gsap.utils.toArray('.animate-heading .word-inner').forEach(el => {
    gsap.to(el, {
      y: '0%',
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el.closest('.animate-heading'),
        start: 'top 85%',
        once: true
      }
    });
  });
}

/* =========================================
   9. PARALLAX
   ========================================= */

function initParallax() {
  if (!gsapLoaded() || isMobile() || isReducedMotion()) return;

  gsap.utils.toArray('.parallax-img').forEach(img => {
    const wrapper = img.closest('.parallax-img-wrapper');
    if (!wrapper) return;

    gsap.to(img, {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2
      }
    });
  });
}

/* =========================================
   10. MAGNETIC BUTTONS
   ========================================= */

function initMagneticButtons() {
  if (isMobile()) return;

  document.querySelectorAll('.magnetic-wrapper').forEach(wrapper => {
    const inner = wrapper.querySelector('.magnetic-inner') || wrapper;
    const STRENGTH = 0.25;

    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * STRENGTH;
      const dy = (e.clientY - cy) * STRENGTH;

      if (gsapLoaded()) {
        gsap.to(inner, {
          x: dx,
          y: dy,
          duration: 0.4,
          ease: 'power2.out'
        });
      } else {
        inner.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    });

    wrapper.addEventListener('mouseleave', () => {
      if (gsapLoaded()) {
        gsap.to(inner, {
          x: 0,
          y: 0,
          duration: 0.65,
          ease: 'elastic.out(1.1, 0.5)'
        });
      } else {
        inner.style.transform = '';
      }
    });
  });
}

/* =========================================
   11. TILT CARDS
   ========================================= */

function initTiltCards() {
  if (isMobile()) return;

  document.querySelectorAll('.tilt-card').forEach(card => {
    const MAX_TILT = 3;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = ((e.clientY - cy) / (rect.height / 2)) * -MAX_TILT;
      const ry = ((e.clientX - cx) / (rect.width / 2)) * MAX_TILT;

      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      if (gsapLoaded()) {
        gsap.to(card, {
          rotateX: 0, rotateY: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)',
          clearProps: 'transform'
        });
      } else {
        card.style.transform = '';
      }
    });
  });
}

/* =========================================
   12. FAQ ACCORDION
   ========================================= */

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const body = item.querySelector('.faq-body');
    const icon = item.querySelector('.faq-icon');

    if (!trigger || !body) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(i => {
        if (i !== item && i.classList.contains('open')) {
          closeFAQItem(i);
        }
      });

      if (isOpen) {
        closeFAQItem(item);
      } else {
        openFAQItem(item);
      }
    });

    // Keyboard
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });

  function openFAQItem(item) {
    const body = item.querySelector('.faq-body');
    const inner = item.querySelector('.faq-body-inner');
    item.classList.add('open');
    item.querySelector('.faq-trigger').setAttribute('aria-expanded', 'true');

    if (gsapLoaded()) {
      gsap.to(body, {
        height: inner.offsetHeight,
        duration: 0.45,
        ease: 'power3.out'
      });
    } else {
      body.style.height = inner.offsetHeight + 'px';
    }
  }

  function closeFAQItem(item) {
    const body = item.querySelector('.faq-body');
    item.classList.remove('open');
    item.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');

    if (gsapLoaded()) {
      gsap.to(body, {
        height: 0,
        duration: 0.4,
        ease: 'power3.inOut'
      });
    } else {
      body.style.height = '0';
    }
  }
}

/* =========================================
   13. LIGHTBOX
   ========================================= */

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (!lightbox || !lightboxImg) return;

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Kanvaz Galeri';
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Attach to gallery items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src') || item.querySelector('img')?.src;
      const caption = item.getAttribute('data-caption') || '';
      if (src) openLightbox(src, caption);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        item.click();
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}

/* =========================================
   14. CREATIVE STORY SECTION (Sticky Scroll)
   ========================================= */

function initCreativeStory() {
  if (!gsapLoaded() || isReducedMotion()) return;

  const storyWrapper = document.getElementById('story-scroll');
  if (!storyWrapper) return;

  const panels = storyWrapper.querySelectorAll('.story-panel');
  if (!panels.length) return;

  const totalPanels = panels.length;

  gsap.timeline({
    scrollTrigger: {
      trigger: storyWrapper,
      start: 'top top',
      end: `+=${totalPanels * 80}%`,
      scrub: 1,
      pin: true,
      anticipatePin: 1
    }
  });

  panels.forEach((panel, i) => {
    if (i === 0) {
      panel.style.opacity = '1';
    }

    ScrollTrigger.create({
      trigger: storyWrapper,
      start: `top+=${(i / totalPanels) * 100}% top`,
      end: `top+=${((i + 1) / totalPanels) * 100}% top`,
      onEnter: () => showPanel(i),
      onEnterBack: () => showPanel(i),
    });
  });

  function showPanel(index) {
    panels.forEach((p, i) => {
      if (i === index) {
        gsap.to(p, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
      } else {
        gsap.to(p, { opacity: 0, y: -20, duration: 0.4, ease: 'power2.in' });
      }
    });
  }
}

/* =========================================
   15. POPULATE GALLERY
   ========================================= */

function initGallery() {
  const galleryContainer = document.getElementById('gallery-grid');
  if (!galleryContainer) return;

  IMAGES.gallery.forEach((src, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('data-src', src);
    item.setAttribute('data-caption', IMAGES.galleryCaptions[i] || '');
    item.setAttribute('data-cursor', 'VIEW');

    item.innerHTML = `
      <img src="${src}" alt="${IMAGES.galleryCaptions[i] || 'Kanvaz Galeri'}" loading="lazy" decoding="async">
      <div class="gallery-item-overlay">
        <span class="gallery-view-label">VIEW</span>
      </div>
    `;

    galleryContainer.appendChild(item);
  });
}

/* =========================================
   16. POPULATE PRODUCT CARDS
   ========================================= */

function initProducts() {
  const container = document.getElementById('product-grid');
  if (!container) return;

  const products = [
    {
      img: IMAGES.prodCanvas,
      cat: 'Media Melukis',
      name: 'Kanvas Lukis',
      desc: 'Berbagai ukuran kanvas berkualitas untuk melukis akrilik, oil, maupun cat air.',
    },
    {
      img: IMAGES.prodPaint,
      cat: 'Cat & Pigmen',
      name: 'Cat Lukis',
      desc: 'Cat akrilik, cat air, dan cat minyak dengan pilihan warna lengkap dan pigmen pekat.',
    },
    {
      img: IMAGES.prodTote,
      cat: 'Produk Kreatif',
      name: 'Tote Bag',
      desc: 'Tote bag polos dan custom design untuk ekspresi kreativitas yang bisa dibawa ke mana saja.',
    },
    {
      img: IMAGES.prodUmbrella,
      cat: 'Produk Kreatif',
      name: 'Payung Lukis',
      desc: 'Payung kanvas siap lukis — media seni yang unik dan fungsional.',
    },
    {
      img: IMAGES.prodSandal,
      cat: 'Custom Art',
      name: 'Sandal Lukis',
      desc: 'Sandal polos siap dilukis sebagai media ekspresi seni yang personal dan wearable.',
    },
    {
      img: IMAGES.prodKaos,
      cat: 'Distro Lokal',
      name: 'Kaos Custom',
      desc: 'Kaos distro lokal Pekanbaru dengan desain artistik, serta tersedia opsi custom sesuai keinginan.',
    },
  ];

  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card tilt-card';
    card.setAttribute('data-cursor', 'EXPLORE');
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">
      </div>
      <div style="padding: 1.25rem;">
        <p class="product-cat" style="margin-bottom: 0.35rem;">${p.cat}</p>
        <h3 class="product-name" style="margin-bottom: 0.5rem;">${p.name}</h3>
        <p class="product-desc" style="margin-bottom: 1rem;">${p.desc}</p>
        <a href="${WA_URL}?text=Halo%20Kanvaz%20Galeri!%20Saya%20ingin%20tanya%20tentang%20${encodeURIComponent(p.name)}" 
           target="_blank" rel="noopener noreferrer" class="product-cta" aria-label="Tanya tentang ${p.name}">
          Tanya Produk <iconify-icon icon="ph:arrow-right-bold" style="font-size: 0.85rem;"></iconify-icon>
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

/* =========================================
   17. POPULATE IMAGES ON PAGE LOAD
   ========================================= */

function initImages() {
  // Hero
  const heroMain = document.getElementById('hero-img-main');
  if (heroMain) heroMain.src = IMAGES.heroMain;

  const heroFloat = document.getElementById('hero-img-float');
  if (heroFloat) heroFloat.src = IMAGES.heroFloat;

  // Bento
  const bentoIds = {
    'bento-canvas': IMAGES.bentoCanvas,
    'bento-paint': IMAGES.bentoPaint,
    'bento-school': IMAGES.bentoSchool,
    'bento-tote': IMAGES.bentoTote,
    'bento-apparel': IMAGES.bentoApparel,
  };

  Object.entries(bentoIds).forEach(([id, src]) => {
    const el = document.getElementById(id);
    if (el) el.src = src;
  });

  // About
  const aboutImg = document.getElementById('about-img');
  if (aboutImg) aboutImg.src = IMAGES.about1;

  // School
  const schoolImg = document.getElementById('school-img');
  if (schoolImg) schoolImg.src = IMAGES.school;

  // Custom product
  const custom1 = document.getElementById('custom-img-1');
  if (custom1) custom1.src = IMAGES.custom1;
  const custom2 = document.getElementById('custom-img-2');
  if (custom2) custom2.src = IMAGES.custom2;

  // Story steps
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById(`story-img-${i}`);
    const key = `story${i}`;
    if (el && IMAGES[key]) el.src = IMAGES[key];
  }
}

/* =========================================
   18. STORY STEPS (Simple Scroll-based)
   ========================================= */

function initStoryScroll() {
  if (!gsapLoaded()) return;

  const steps = document.querySelectorAll('.story-step');
  if (!steps.length) return;

  steps.forEach((step, i) => {
    gsap.from(step, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: step,
        start: 'top 78%',
        once: true
      }
    });
  });
}

/* =========================================
   19. BENTO HOVER (additional interaction)
   ========================================= */

function initBentoInteraction() {
  if (isMobile()) return;

  document.querySelectorAll('.bento-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      if (gsapLoaded()) {
        gsap.to(item, { scale: 1.015, duration: 0.4, ease: 'power2.out' });
      }
    });
    item.addEventListener('mouseleave', () => {
      if (gsapLoaded()) {
        gsap.to(item, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
      }
    });
  });
}

/* =========================================
   20. SMOOTH ANCHOR SCROLLING
   ========================================= */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* =========================================
   21. HERO FLOATING BADGES ANIMATION
   ========================================= */

function initFloatingBadges() {
  if (!gsapLoaded() || isReducedMotion()) return;

  gsap.to('.hero-badge-1', {
    y: -10,
    duration: 2.5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  });

  gsap.to('.hero-badge-2', {
    y: 8,
    duration: 3,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.8
  });
}

/* =========================================
   22. FALLBACK: Handle broken images
   ========================================= */

function initImageFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.background = '#F3F4F6';
      this.style.minHeight = '200px';
      this.removeAttribute('src');
    });
  });
}

/* =========================================
   23. TRUST STATS COUNTER ANIMATION
   ========================================= */

function initCounters() {
  if (!gsapLoaded()) return;

  document.querySelectorAll('.count-up').forEach(el => {
    const target = parseInt(el.getAttribute('data-target') || '0');
    const suffix = el.getAttribute('data-suffix') || '';

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: function() {
            el.textContent = Math.round(this.targets()[0].val) + suffix;
          }
        });
      }
    });
  });
}

/* =========================================
   MAIN INIT — Wait for DOM + Libraries
   ========================================= */

function waitForGSAP(callback, retries = 20) {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    callback();
  } else if (retries > 0) {
    setTimeout(() => waitForGSAP(callback, retries - 1), 100);
  } else {
    // GSAP not available, run without animations
    callback();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Immediate (no GSAP needed)
  initImages();
  initGallery();
  initProducts();
  initNavbar();
  initMobileMenu();
  initScrollProgress();
  initFAQ();
  initLightbox();
  initSmoothScroll();
  initImageFallbacks();

  // Wait for GSAP
  waitForGSAP(() => {
    initPreloader();
    initCustomCursor();
    initMarquee();
    initScrollAnimations();
    initParallax();
    initMagneticButtons();
    initTiltCards();
    initBentoInteraction();
    initFloatingBadges();
    initStoryScroll();
    initCounters();
  });
});

// Handle resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (gsapLoaded() && typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }, 250);
});
