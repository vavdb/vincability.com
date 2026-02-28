/**
 * animations.js
 * Vincability.com — Scroll Animations
 *
 * Dependencies (loaded before this script):
 *   - Lenis v1  (smooth scroll)
 *   - GSAP v3   (animation engine)
 *   - ScrollTrigger (GSAP plugin)
 */

/* ============================================================
   LENIS SMOOTH SCROLL
   Initialised outside matchMedia — smooth scrolling is a
   navigation aid, not a motion/animation concern. Users who
   prefer reduced motion still benefit from smooth scrolling.
   ============================================================ */

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/* ============================================================
   GSAP PLUGIN REGISTRATION
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   ALL MOTION ANIMATIONS
   Wrapped in matchMedia so users who set
   prefers-reduced-motion: reduce never receive entrance,
   parallax, or scroll-scrubbed animation effects.
   ============================================================ */

gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {

  /* ----------------------------------------------------------
     1. HERO — ENTRANCE TIMELINE (fires on page load)
     ---------------------------------------------------------- */

  const heroEntrance = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroEntrance
    .from('[data-animate="hero-badge"]', {
      y: -20,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
    })
    .from('[data-animate="hero-headline"]', {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')
    .from('[data-animate="hero-sub"]', {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')
    .from('[data-animate="hero-ctas"]', {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5');

  /* ----------------------------------------------------------
     2. HERO — PARALLAX BACKGROUND (scroll-scrubbed)
     No once:true — scrubbed animations must remain live.
     ---------------------------------------------------------- */

  gsap.to('[data-animate="hero-bg"]', {
    yPercent: 30,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  /* ----------------------------------------------------------
     3. HERO — CONTENT SCROLL EXIT (scroll-scrubbed)
     Fades and slightly shrinks the hero content as the
     section scrolls away. No once:true on scrubbed triggers.
     ---------------------------------------------------------- */

  gsap.to('.hero__content', {
    opacity: 0,
    scale: 0.95,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.hero',
      start: '30% top',
      end: 'bottom top',
      scrub: true,
    },
  });

  /* ----------------------------------------------------------
     4. CIRCUIT DIVIDER — SCALE-IN ON SCROLL
     ---------------------------------------------------------- */

  gsap.from('.circuit-divider', {
    scaleX: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.circuit-divider',
      start: 'top 85%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     5. SERVICES — SECTION HEADER FADE-UP
     Reusable: targets children of any [data-animate="fade-up"]
     container found anywhere on the page.
     ---------------------------------------------------------- */

  document.querySelectorAll('[data-animate="fade-up"]').forEach((container) => {
    gsap.from(container.children, {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        once: true,
      },
    });
  });

  /* Services section header (no fade-up attribute on it —
     animate its direct children individually). */
  gsap.from('.services__inner .section-header > *', {
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.services__inner .section-header',
      start: 'top 80%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     6. SERVICES — STAGGERED CARDS
     ---------------------------------------------------------- */

  gsap.from('.service-card', {
    y: 60,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.services__cards',
      start: 'top 80%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     7. SERVICES — ICON ROTATION ENTRANCE
     ---------------------------------------------------------- */

  gsap.from('.service-card__icon', {
    rotation: -90,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.services__cards',
      start: 'top 80%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     8. APPROACH — SECTION HEADER FADE-UP
     ---------------------------------------------------------- */

  gsap.from('.approach__header > *', {
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.approach__header',
      start: 'top 80%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     9. APPROACH — STEPS STAGGER
     HTML uses .step-card (not .approach-step).
     ---------------------------------------------------------- */

  gsap.from('.step-card', {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.approach__steps',
      start: 'top 80%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     10. APPROACH — STEP GRADIENT LINES DRAW
     HTML uses .step-card__line (not .approach-step__line).
     ---------------------------------------------------------- */

  gsap.from('.step-card__line', {
    scaleX: 0,
    transformOrigin: 'left center',
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.approach__steps',
      start: 'top 70%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     11. EXPERTISE — SECTION HEADER FADE-UP
     ---------------------------------------------------------- */

  gsap.from('.expertise__header > *', {
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.expertise__header',
      start: 'top 80%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     12. EXPERTISE — PER-CARD ENTRANCE + SCAN LINE
     Each bento card slides in from its column side when it
     scrolls into view, then gets a scan line sweep.
     ---------------------------------------------------------- */

  document.querySelectorAll('.bento-card').forEach((card) => {
    const isLeft = card.closest('.bento-col:first-child') !== null;

    gsap.from(card, {
      x: isLeft ? -60 : 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true,
      },
      onComplete: () => {
        setTimeout(() => card.classList.add('bento-card--scanned'), 200);
      },
    });
  });

  /* ----------------------------------------------------------
     13. EXPERIENCE — SECTION HEADER FADE-UP
     ---------------------------------------------------------- */

  gsap.from('.experience__header > *', {
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.experience__header',
      start: 'top 80%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     14. EXPERIENCE — STATS ROW CELLS
     ---------------------------------------------------------- */

  gsap.from('.stat-cell', {
    y: 30,
    opacity: 0,
    stagger: 0.12,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.stats-row',
      start: 'top 85%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     15. EXPERIENCE — ANIMATED COUNTERS
     Elements with [data-counter] count up from 0 to their
     target value on first scroll into view.
     ---------------------------------------------------------- */

  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = parseInt(el.dataset.counter, 10);
    const suffix = el.dataset.suffix ?? '';
    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate() {
        el.textContent = Math.round(obj.value) + suffix;
      },
      onComplete() {
        gsap.fromTo(el, { scale: 1 }, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 });
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  /* ----------------------------------------------------------
     16. EXPERIENCE — TYPEWRITER EFFECT
     Elements with [data-typewriter] type out their text
     character-by-character on first scroll into view.
     ---------------------------------------------------------- */

  document.querySelectorAll('[data-typewriter]').forEach((el) => {
    const fullText = el.dataset.typewriter;
    el.textContent = '';

    const chars = fullText.split('');
    const obj = { index: 0 };

    gsap.to(obj, {
      index: chars.length,
      duration: chars.length * 0.05,
      ease: 'none',
      onUpdate() {
        el.textContent = chars.slice(0, Math.round(obj.index)).join('');
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  /* ----------------------------------------------------------
     17. EXPERIENCE — ROLE CARDS SLIDE-IN + SCAN LINE
     Cards slide from left with stagger. After entrance,
     a scan line sweeps across each card.
     ---------------------------------------------------------- */

  gsap.from('.role-card', {
    x: -80,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.role-cards',
      start: 'top 80%',
      once: true,
    },
  });

  ScrollTrigger.create({
    trigger: '.role-cards',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      document.querySelectorAll('.role-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('role-card--scanned'), 800 + i * 200);
      });
    },
  });

  /* ----------------------------------------------------------
     18. CTA SECTION — PARALLAX BACKGROUND (scroll-scrubbed)
     ---------------------------------------------------------- */

  gsap.to('[data-animate="cta-bg"]', {
    yPercent: 20,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  /* ----------------------------------------------------------
     19. CTA SECTION — CONTENT ENTRANCE
     ---------------------------------------------------------- */

  gsap.from('[data-animate="cta-content"] > *', {
    y: 40,
    opacity: 0,
    stagger: 0.12,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '[data-animate="cta-content"]',
      start: 'top 80%',
      once: true,
    },
  });

  /* ----------------------------------------------------------
     19b. CTA — PRIMARY BUTTON GLOW PULSE
     ---------------------------------------------------------- */

  ScrollTrigger.create({
    trigger: '.cta-section',
    start: 'top 50%',
    once: true,
    onEnter: () => {
      gsap.to('.cta-section .btn--primary', {
        boxShadow: '0 0 40px rgba(0, 230, 118, 0.4)',
        duration: 0.8,
        yoyo: true,
        repeat: 2,
        ease: 'sine.inOut',
      });
    },
  });

  /* ----------------------------------------------------------
     20. NAVIGATION — SCROLLED STATE
     Adds .nav--scrolled once the hero bottom passes the
     nav bar height, giving CSS a hook to tint the backdrop.
     Kept here so all scroll-state logic lives in one file.
     ---------------------------------------------------------- */

  ScrollTrigger.create({
    trigger: '.hero',
    start: 'bottom 80px',
    onEnter: () => document.querySelector('.nav')?.classList.add('nav--scrolled'),
    onLeaveBack: () => document.querySelector('.nav')?.classList.remove('nav--scrolled'),
  });

}); // end matchMedia — (prefers-reduced-motion: no-preference)

/* ============================================================
   CURSOR GLOW — SITE-WIDE
   Tracks cursor across the entire page. Glow color follows the
   nav gradient: green (left) → orange (center) → purple (right).
   ============================================================ */

(() => {
  const glow = document.querySelector('.cursor-glow');
  if (!glow) return;

  function lerpColor(a, b, t) {
    return a.map((v, i) => Math.round(v + (b[i] - v) * t));
  }

  const green  = [0, 230, 118];
  const orange = [255, 145, 0];
  const purple = [179, 136, 255];

  function rgbAtX(xPct) {
    if (xPct < 50) {
      return lerpColor(green, orange, xPct / 50);
    }
    return lerpColor(orange, purple, (xPct - 50) / 50);
  }

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    const rgb = rgbAtX(x);
    glow.style.setProperty('--glow-x', x + '%');
    glow.style.setProperty('--glow-y', y + '%');
    glow.style.setProperty('--glow-rgb', `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`);
  });
})();

