# Vincability.com Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the complete Vincability landing page from the .pen design with tech-forward scroll animations using GSAP + ScrollTrigger + Lenis, hosted on Netlify with a contact form.

**Architecture:** Single-page static site — one `index.htm`, one `style.css`, one `animations.js`. All content from the .pen design file. CDN-loaded dependencies (GSAP, Lenis, fonts). Netlify Forms for the contact form (zero backend). Progressive enhancement: content visible without JS, animations layer on top.

**Tech Stack:** HTML5, CSS3 (custom properties), vanilla JS, GSAP 3.12+ with ScrollTrigger, Lenis 1.1+, Netlify (hosting + forms), Google Fonts (JetBrains Mono, Geist).

**Reference:** Design doc at `docs/plans/2026-02-28-scroll-animations-design.md`, pen file at `vincability_2026_02.pen`.

---

## Design Tokens (from .pen variables)

These CSS custom properties must be used throughout. Never hardcode colors.

```css
:root {
  /* Backgrounds */
  --v-bg-deep: #080B0A;
  --v-bg-surface: #0D1210;
  --v-bg-elevated: #141C18;

  /* Borders */
  --v-border: #1E2D25;
  --v-border-glow: #00E67620;

  /* Greens */
  --v-green-primary: #00E676;
  --v-green-dim: #00C853;
  --v-green-glow: #00E67633;

  /* Orange */
  --v-orange: #FF9100;
  --v-orange-dim: #FF6D00;

  /* Purple */
  --v-purple: #B388FF;
  --v-purple-dim: #7C4DFF;

  /* Text */
  --v-text-primary: #F0FFF4;
  --v-text-secondary: #A8B5AD;
  --v-text-muted: #5A6B60;

  /* Fonts */
  --font-primary: 'JetBrains Mono', monospace;
  --font-secondary: 'Geist', sans-serif;
}
```

## Page Structure (from .pen)

```
Navigation       (nav)       — sticky, bg-deep, 80px
Hero Section     (section)   — bg-deep, 720px, parallax BG image + overlay
Circuit Divider  (div)       — gradient line, 2px
Services Section (section)   — bg-surface, 3 cards horizontal
Approach Section (section)   — bg-deep, 3 steps horizontal
Expertise Section(section)   — bg-surface, bento grid 2x3
Experience Section(section)  — bg-deep, stats row + 3 role cards
CTA Section      (section)   — bg-surface, parallax BG + contact form
Footer           (footer)    — bg-deep, 3-column
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `p:/vincability.com/index.htm`
- Create: `p:/vincability.com/style.css`
- Create: `p:/vincability.com/animations.js`
- Create: `p:/vincability.com/netlify.toml`

**Step 1: Create index.htm boilerplate**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vincability — See what others miss. Ship what actually matters.</title>
  <meta name="description" content="Technical consulting that cuts through noise. Codebase investigation, team alignment, and AI strategy.">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <!-- Styles -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- All section HTML goes here (Task 2) -->

  <!-- Lenis -->
  <script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>
  <!-- GSAP + ScrollTrigger -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
  <!-- Animations -->
  <script src="animations.js"></script>
</body>
</html>
```

**Step 2: Create empty style.css with token variables**

Paste the design tokens from above into `style.css`, plus a basic CSS reset:

```css
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: auto; /* Lenis handles smooth scroll */ }
body { background: var(--v-bg-deep); color: var(--v-text-primary); font-family: var(--font-secondary); -webkit-font-smoothing: antialiased; }
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
```

**Step 3: Create empty animations.js**

```js
// Vincability scroll animations
// GSAP + ScrollTrigger + Lenis
```

**Step 4: Create netlify.toml**

```toml
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**Step 5: Verify** — Open `index.htm` in browser, confirm blank dark page with no console errors.

**Step 6: Commit**

```bash
git add index.htm style.css animations.js netlify.toml
git commit -m "feat: project scaffolding with CDN deps and design tokens"
```

---

### Task 2: HTML Structure — All Sections

**Files:**
- Modify: `p:/vincability.com/index.htm`

Build the complete HTML inside `<body>`. Use semantic elements. Add `data-animate` attributes on elements that will be animated (GSAP will target these). Use Lucide icon names in `<i data-lucide="icon-name">` tags.

**Content source:** All text content comes directly from the .pen file nodes. Reference the .pen section data below.

**Step 1: Navigation**

```html
<nav class="nav">
  <div class="nav__inner">
    <a href="#" class="nav__logo">
      <span class="nav__logo-dot"></span>
      <span class="nav__logo-text">VINCABILITY</span>
    </a>
    <div class="nav__links">
      <a href="#services">Services</a>
      <a href="#approach">Approach</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="#contact" class="nav__cta">Let's Talk</a>
  </div>
</nav>
```

**Step 2: Hero Section**

- BG image: `images/generated-1772287412319.png`
- Badge with green dot + "Available for new engagements"
- Headline: "See what others miss.\nShip what actually matters." (fontSize 56, JetBrains Mono 700)
- Subtitle: "I bring hyperfocus, pattern recognition..." (fontSize 20, Geist)
- Two CTAs: "Start a Conversation" (green filled) + "See My Approach" (outlined)
- Include `data-speed="0.3"` on BG for parallax

```html
<section class="hero" id="hero">
  <div class="hero__bg" data-animate="hero-bg">
    <img src="images/generated-1772287412319.png" alt="" aria-hidden="true">
  </div>
  <div class="hero__overlay"></div>
  <div class="hero__content" data-animate="hero-content">
    <div class="hero__badge" data-animate="hero-badge">
      <span class="hero__badge-dot"></span>
      <span>Available for new engagements</span>
    </div>
    <h1 class="hero__headline" data-animate="hero-headline">See what others miss.<br>Ship what actually matters.</h1>
    <p class="hero__sub" data-animate="hero-sub">I bring hyperfocus, pattern recognition, and big-picture thinking to untangle codebases, align teams, and accelerate delivery. Technical consulting that cuts through noise.</p>
    <div class="hero__ctas" data-animate="hero-ctas">
      <a href="#contact" class="btn btn--primary">Start a Conversation</a>
      <a href="#approach" class="btn btn--outline">See My Approach</a>
    </div>
  </div>
</section>
```

**Step 3: Circuit Divider**

```html
<div class="circuit-divider" data-animate="divider"></div>
```

**Step 4: Services Section**

- Section label: "// WHAT I DO" (green, JetBrains Mono 12px 600, letterSpacing 2)
- Title: "Precision consulting for teams\nthat build software" (40px 700)
- Desc: "I embed with your team..." (18px Geist)
- 3 cards: Codebase Investigation (search icon, green), Team Setup & Alignment (users icon, orange), AI Agent Strategy (zap icon, purple)
- Each card: icon, title (20px 600), description (16px Geist), tag line (11px JetBrains Mono)

```html
<section class="services" id="services">
  <div class="services__inner">
    <div class="section-header" data-animate="fade-up">
      <span class="section-label section-label--green">// WHAT I DO</span>
      <h2 class="section-title">Precision consulting for teams<br>that build software</h2>
      <p class="section-desc">I embed with your team to find the real blockers — in code, process, and communication. Then I fix them.</p>
    </div>
    <div class="services__cards">
      <div class="service-card" data-animate="stagger-card">
        <div class="service-card__icon service-card__icon--green">
          <i data-lucide="search"></i>
        </div>
        <h3 class="service-card__title">Codebase Investigation</h3>
        <p class="service-card__desc">I dig into your codebase and reveal what's actually slowing you down — architectural debt, hidden coupling, misaligned patterns. Then I map a clear path forward.</p>
        <span class="service-card__tag service-card__tag--green">Pattern Recognition · Architecture · Code Quality</span>
      </div>
      <div class="service-card" data-animate="stagger-card">
        <div class="service-card__icon service-card__icon--orange">
          <i data-lucide="users"></i>
        </div>
        <h3 class="service-card__title">Team Setup &amp; Alignment</h3>
        <p class="service-card__desc">I spot the friction in how your team communicates, reviews, and ships. I restructure workflows so the right people focus on the right things.</p>
        <span class="service-card__tag service-card__tag--orange">DevOps · Process Design · Team Dynamics</span>
      </div>
      <div class="service-card" data-animate="stagger-card">
        <div class="service-card__icon service-card__icon--purple">
          <i data-lucide="zap"></i>
        </div>
        <h3 class="service-card__title">AI Agent Strategy</h3>
        <p class="service-card__desc">I help you build practical AI workflows — agent swarms, review cycles, and automation that actually ships value instead of demos.</p>
        <span class="service-card__tag service-card__tag--purple">AI Agents · Automation · Review Cycles</span>
      </div>
    </div>
  </div>
</section>
```

**Step 5: Approach Section**

- Label: "// HOW I WORK" (orange)
- Title: "The Vincability Process" (40px, center)
- Subtitle: "A structured approach that turns chaos into clarity — fast."
- 3 steps in horizontal row, each with: step number (48px 700, 0.3 opacity), title (20px 600), description (16px Geist), colored gradient line at bottom
- Step 1: "01" green, "Deep Scan"
- Step 2: "02" orange, "Strategic Map"
- Step 3: "03" purple, "Accelerate"

```html
<section class="approach" id="approach">
  <div class="approach__inner">
    <div class="section-header section-header--center" data-animate="fade-up">
      <span class="section-label section-label--orange">// HOW I WORK</span>
      <h2 class="section-title">The Vincability Process</h2>
      <p class="section-desc">A structured approach that turns chaos into clarity — fast.</p>
    </div>
    <div class="approach__steps">
      <div class="approach-step" data-animate="stagger-step">
        <span class="approach-step__num approach-step__num--green">01</span>
        <h3 class="approach-step__title">Deep Scan</h3>
        <p class="approach-step__desc">I immerse in your codebase, CI/CD, team rituals, and architecture. I see the patterns — and the anti-patterns — that everyone else has gone blind to.</p>
        <div class="approach-step__line approach-step__line--green"></div>
      </div>
      <div class="approach-step" data-animate="stagger-step">
        <span class="approach-step__num approach-step__num--orange">02</span>
        <h3 class="approach-step__title">Strategic Map</h3>
        <p class="approach-step__desc">I synthesize findings into a clear, actionable roadmap. No 80-page reports — just priorities, trade-offs, and next steps your team can execute on Monday.</p>
        <div class="approach-step__line approach-step__line--orange"></div>
      </div>
      <div class="approach-step" data-animate="stagger-step">
        <span class="approach-step__num approach-step__num--purple">03</span>
        <h3 class="approach-step__title">Accelerate</h3>
        <p class="approach-step__desc">I can stay embedded to drive execution, coach your team leads, or hand off cleanly. The goal is always the same: your team ships better without me.</p>
        <div class="approach-step__line approach-step__line--purple"></div>
      </div>
    </div>
  </div>
</section>
```

**Step 6: Expertise Section (Bento Grid)**

- Label: "// EXPERTISE" (purple)
- Title: "Battle-tested across\nthe full stack" (40px)
- Years badge: "29+" (64px green) + "years in software" (14px muted)
- 2-column bento grid, 3 rows each:
  - Col 1: Cloud & Azure (cloud icon, green), .NET / C# / Blazor (code icon, orange), DevOps & CI/CD (git-branch icon, purple)
  - Col 2: AI & Agent Systems (bot icon, green), Solution Architecture (layout-dashboard icon, orange), Data Science (chart-line icon, purple)
- Each bento card: icon (28px), title (18px 600), description (14px Geist, 1.6 line-height)

```html
<section class="expertise" id="expertise">
  <div class="expertise__inner">
    <div class="expertise__header" data-animate="fade-up">
      <div class="expertise__header-left">
        <span class="section-label section-label--purple">// EXPERTISE</span>
        <h2 class="section-title">Battle-tested across<br>the full stack</h2>
      </div>
      <div class="expertise__years" data-animate="counter" data-target="29" data-suffix="+">
        <span class="expertise__years-num">29+</span>
        <span class="expertise__years-label">years in software</span>
      </div>
    </div>
    <div class="bento-grid" data-animate="bento-assembly">
      <div class="bento-grid__col">
        <div class="bento-card" data-animate="bento-card">
          <i data-lucide="cloud" class="bento-card__icon bento-card__icon--green"></i>
          <h3 class="bento-card__title">Cloud &amp; Azure</h3>
          <p class="bento-card__desc">Azure Integration Services, Functions, Service Bus, DevOps pipelines. Cloud-native architecture that scales.</p>
        </div>
        <div class="bento-card" data-animate="bento-card">
          <i data-lucide="code" class="bento-card__icon bento-card__icon--orange"></i>
          <h3 class="bento-card__title">.NET / C# / Blazor</h3>
          <p class="bento-card__desc">Two decades of .NET ecosystem depth. From legacy rescue to modern Blazor SaaS applications.</p>
        </div>
        <div class="bento-card" data-animate="bento-card">
          <i data-lucide="git-branch" class="bento-card__icon bento-card__icon--purple"></i>
          <h3 class="bento-card__title">DevOps &amp; CI/CD</h3>
          <p class="bento-card__desc">Pipeline design, deployment strategy, infrastructure as code. Making delivery boring and reliable.</p>
        </div>
      </div>
      <div class="bento-grid__col">
        <div class="bento-card" data-animate="bento-card">
          <i data-lucide="bot" class="bento-card__icon bento-card__icon--green"></i>
          <h3 class="bento-card__title">AI &amp; Agent Systems</h3>
          <p class="bento-card__desc">Building AI agent workflows, swarm architectures, and automated review cycles that deliver real value.</p>
        </div>
        <div class="bento-card" data-animate="bento-card">
          <i data-lucide="layout-dashboard" class="bento-card__icon bento-card__icon--orange"></i>
          <h3 class="bento-card__title">Solution Architecture</h3>
          <p class="bento-card__desc">System design that balances pragmatism with vision. SaaS platforms, integration layers, data pipelines.</p>
        </div>
        <div class="bento-card" data-animate="bento-card">
          <i data-lucide="chart-line" class="bento-card__icon bento-card__icon--purple"></i>
          <h3 class="bento-card__title">Data Science</h3>
          <p class="bento-card__desc">Turning messy data into actionable insights. Analytics, visualization, and ML pipelines that inform decisions.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Step 7: Experience Section (Stats + Role Cards)**

- Label: "// TRACK RECORD" (green, center)
- Title: "Trusted by teams that ship" (40px, center)
- Stats row — 4 cells with right border separators:
  - "29+" green 48px / "Years in Software"
  - "12+" orange 48px / "Companies Served"
  - "Gov + Enterprise" purple 26px / "Dutch Tax Authority, Rabobank"
  - "Full Stack" white 32px / "Cloud to Code to Team"
- 3 role cards horizontal (equal height 220px):
  - Technical Lead / SkinConsult (green badge)
  - Technical Team Lead / Dutch Tax Authority (orange badge)
  - Cloud Consultant / Azure Integration Services (purple badge)

```html
<section class="experience" id="experience">
  <div class="experience__inner">
    <div class="section-header section-header--center" data-animate="fade-up">
      <span class="section-label section-label--green">// TRACK RECORD</span>
      <h2 class="section-title">Trusted by teams that ship</h2>
    </div>
    <div class="stats-row" data-animate="stats-counter">
      <div class="stat stat--border">
        <span class="stat__num stat__num--green" data-counter="29" data-suffix="+">29+</span>
        <span class="stat__label">Years in Software</span>
      </div>
      <div class="stat stat--border">
        <span class="stat__num stat__num--orange" data-counter="12" data-suffix="+">12+</span>
        <span class="stat__label">Companies Served</span>
      </div>
      <div class="stat stat--border">
        <span class="stat__num stat__num--purple stat__num--sm" data-typewriter="Gov + Enterprise">Gov + Enterprise</span>
        <span class="stat__label">Dutch Tax Authority, Rabobank</span>
      </div>
      <div class="stat">
        <span class="stat__num stat__num--white stat__num--sm" data-typewriter="Full Stack">Full Stack</span>
        <span class="stat__label">Cloud to Code to Team</span>
      </div>
    </div>
    <div class="roles" data-animate="roles">
      <div class="role-card" data-animate="role-card">
        <span class="role-card__badge role-card__badge--green">Technical Lead</span>
        <h3 class="role-card__company">SkinConsult / Healthcare SaaS</h3>
        <p class="role-card__desc">Modernizing legacy software into cloud-based SaaS while managing the development team. Customer-facing solutions and internal process optimization.</p>
      </div>
      <div class="role-card" data-animate="role-card">
        <span class="role-card__badge role-card__badge--orange">Technical Team Lead</span>
        <h3 class="role-card__company">Dutch Tax Authority</h3>
        <p class="role-card__desc">Leading technical teams in one of the Netherlands' largest government organizations. Enterprise-scale systems and cross-team coordination.</p>
      </div>
      <div class="role-card" data-animate="role-card">
        <span class="role-card__badge role-card__badge--purple">Cloud Consultant</span>
        <h3 class="role-card__company">Azure Integration Services</h3>
        <p class="role-card__desc">Integrating in-house and external systems through Azure Functions, Service Bus, and DevOps. Connecting the dots across complex enterprise landscapes.</p>
      </div>
    </div>
  </div>
</section>
```

**Step 8: CTA Section (with Netlify contact form)**

- BG image: `images/generated-1772287600639.png` with radial overlay
- Headline: "Ready to see what's\nreally going on?" (48px, center)
- Subtitle: "Let's have an honest conversation..."
- Two buttons: "Start a Conversation" (green filled, message-circle icon) + "Connect on LinkedIn" (outlined, linkedin icon)
- IMPORTANT: Replace the "Start a Conversation" button with a Netlify-powered contact form

```html
<section class="cta" id="contact">
  <div class="cta__bg" data-animate="cta-bg">
    <img src="images/generated-1772287600639.png" alt="" aria-hidden="true">
  </div>
  <div class="cta__overlay"></div>
  <div class="cta__content" data-animate="cta-content">
    <h2 class="cta__headline" data-animate="cta-headline">Ready to see what's<br>really going on?</h2>
    <p class="cta__sub">Let's have an honest conversation about your codebase, your team, or your next move.</p>
    <form class="cta__form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact">
      <p class="hidden" aria-hidden="true"><input name="bot-field"></p>
      <div class="cta__form-row">
        <input type="text" name="name" placeholder="Your name" required class="cta__input">
        <input type="email" name="email" placeholder="Your email" required class="cta__input">
      </div>
      <textarea name="message" placeholder="What's on your mind?" rows="3" required class="cta__textarea"></textarea>
      <div class="cta__btns">
        <button type="submit" class="btn btn--primary btn--icon">
          <i data-lucide="message-circle"></i>
          <span>Start a Conversation</span>
        </button>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" class="btn btn--outline btn--icon">
          <i data-lucide="linkedin"></i>
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </form>
  </div>
</section>
```

**Step 9: Footer**

```html
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__main">
      <div class="footer__left">
        <div class="footer__logo">
          <span class="nav__logo-dot"></span>
          <span class="footer__logo-text">VINCABILITY</span>
        </div>
        <p class="footer__tagline">Vincent + Ability.<br>See what others miss. Ship what matters.</p>
      </div>
      <div class="footer__right">
        <div class="footer__col">
          <h4 class="footer__col-title">Services</h4>
          <a href="#services">Codebase Investigation</a>
          <a href="#services">Team Alignment</a>
          <a href="#services">AI Strategy</a>
        </div>
        <div class="footer__col">
          <h4 class="footer__col-title">Connect</h4>
          <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
          <a href="mailto:hello@vincability.com">Email</a>
          <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </div>
    <div class="footer__bar">
      <span>&copy; 2026 Vincability. All rights reserved.</span>
      <span>Netherlands</span>
    </div>
  </div>
</footer>
```

**Step 10: Add Lucide init call** at end of body (before animations.js):

```html
<script>lucide.createIcons();</script>
```

**Step 11: Verify** — Open in browser, confirm all text content renders (unstyled). Check all Lucide icons appear. No console errors.

**Step 12: Commit**

```bash
git add index.htm
git commit -m "feat: complete HTML structure from .pen design"
```

---

### Task 3: CSS — Layout, Typography, Components

**Files:**
- Modify: `p:/vincability.com/style.css`

Write all CSS. Key specifications from the .pen design:

**Step 1: Typography**

```css
/* Section labels */
.section-label { font-family: var(--font-primary); font-size: 12px; font-weight: 600; letter-spacing: 2px; }
.section-label--green { color: var(--v-green-primary); }
.section-label--orange { color: var(--v-orange); }
.section-label--purple { color: var(--v-purple); }

/* Section titles */
.section-title { font-family: var(--font-primary); font-size: 40px; font-weight: 700; letter-spacing: -0.5px; line-height: 1.2; color: var(--v-text-primary); }

/* Section descriptions */
.section-desc { font-family: var(--font-secondary); font-size: 18px; color: var(--v-text-secondary); line-height: 1.6; }
```

**Step 2: Button components**

```css
.btn { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-primary); font-size: 16px; font-weight: 600; padding: 16px 32px; border-radius: 999px; border: none; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
.btn--primary { background: var(--v-green-primary); color: var(--v-bg-deep); }
.btn--outline { background: transparent; color: var(--v-text-primary); border: 1px solid var(--v-border); }
.btn--icon i, .btn--icon svg { width: 20px; height: 20px; }
.btn:hover { transform: translateY(-2px); }
.btn--primary:hover { box-shadow: 0 8px 32px rgba(0, 230, 118, 0.3); }
```

**Step 3: Navigation** — sticky, h:80px, padding 0 64px, flex space-between, bg-deep, bottom border

```css
.nav { position: sticky; top: 0; z-index: 100; background: var(--v-bg-deep); border-bottom: 1px solid var(--v-border); }
.nav__inner { max-width: 1440px; margin: 0 auto; height: 80px; display: flex; align-items: center; justify-content: space-between; padding: 0 64px; }
.nav__logo { display: flex; align-items: center; gap: 12px; }
.nav__logo-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--v-green-primary); }
.nav__logo-text { font-family: var(--font-primary); font-size: 20px; font-weight: 700; letter-spacing: 4px; color: var(--v-green-primary); }
.nav__links { display: flex; gap: 40px; }
.nav__links a { font-family: var(--font-primary); font-size: 14px; font-weight: 500; color: var(--v-text-secondary); transition: color 0.2s; }
.nav__links a:hover { color: var(--v-text-primary); }
.nav__cta { font-family: var(--font-primary); font-size: 14px; font-weight: 600; color: var(--v-bg-deep); background: var(--v-green-primary); padding: 10px 24px; border-radius: 999px; transition: box-shadow 0.2s; }
```

**Step 4: Hero section** — 720px height, relative positioned for layers, bg-deep

```css
.hero { position: relative; height: 720px; overflow: hidden; background: var(--v-bg-deep); }
.hero__bg { position: absolute; inset: 0; }
.hero__bg img { width: 100%; height: 100%; object-fit: cover; }
.hero__overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, #080B0ADD 0%, #080B0A77 30%, #080B0A99 70%, #080B0AFF 100%); }
.hero__content { position: relative; z-index: 1; max-width: 1440px; margin: 0 auto; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 32px; padding: 120px 120px 80px; }
.hero__badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border-radius: 999px; border: 1px solid var(--v-green-glow); width: fit-content; }
.hero__badge-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--v-green-primary); }
.hero__badge span { font-family: var(--font-primary); font-size: 12px; font-weight: 500; color: var(--v-green-primary); }
.hero__headline { font-family: var(--font-primary); font-size: 56px; font-weight: 700; letter-spacing: -1px; line-height: 1.15; color: var(--v-text-primary); max-width: 900px; }
.hero__sub { font-family: var(--font-secondary); font-size: 20px; color: var(--v-text-secondary); line-height: 1.6; max-width: 780px; }
.hero__ctas { display: flex; gap: 16px; }
```

**Step 5: Circuit divider** — 2px height, full-width gradient

```css
.circuit-divider { height: 2px; background: linear-gradient(90deg, #00E67600, var(--v-green-primary) 30%, var(--v-orange) 50%, var(--v-purple) 70%, #B388FF00); transform: scaleX(0); /* animated to 1 */ }
```

**Step 6: Services section** — bg-surface, padding 100px 120px, gap 64px

```css
.services { background: var(--v-bg-surface); }
.services__inner { max-width: 1440px; margin: 0 auto; padding: 100px 120px; display: flex; flex-direction: column; gap: 64px; }
.section-header { display: flex; flex-direction: column; gap: 16px; }
.section-header--center { align-items: center; text-align: center; }
.services__cards { display: flex; gap: 24px; }
.service-card { flex: 1; background: var(--v-bg-elevated); border: 1px solid var(--v-border); border-radius: 12px; padding: 32px; display: flex; flex-direction: column; gap: 24px; }
.service-card__icon { width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
.service-card__icon--green { background: var(--v-green-glow); color: var(--v-green-primary); }
.service-card__icon--orange { background: #FF910020; color: var(--v-orange); }
.service-card__icon--purple { background: #B388FF20; color: var(--v-purple); }
.service-card__icon i, .service-card__icon svg { width: 24px; height: 24px; }
.service-card__title { font-family: var(--font-primary); font-size: 20px; font-weight: 600; line-height: 1.3; }
.service-card__desc { font-family: var(--font-secondary); font-size: 16px; color: var(--v-text-secondary); line-height: 1.6; flex: 1; }
.service-card__tag { font-family: var(--font-primary); font-size: 11px; font-weight: 500; }
.service-card__tag--green { color: var(--v-green-dim); }
.service-card__tag--orange { color: var(--v-orange-dim); }
.service-card__tag--purple { color: var(--v-purple); }
```

**Step 7: Approach section** — bg-deep, same inner padding pattern

```css
.approach { background: var(--v-bg-deep); }
.approach__inner { max-width: 1440px; margin: 0 auto; padding: 100px 120px; display: flex; flex-direction: column; gap: 64px; }
.approach__steps { display: flex; gap: 32px; }
.approach-step { flex: 1; display: flex; flex-direction: column; gap: 20px; padding: 32px 28px; }
.approach-step__num { font-family: var(--font-primary); font-size: 48px; font-weight: 700; opacity: 0.3; }
.approach-step__num--green { color: var(--v-green-primary); }
.approach-step__num--orange { color: var(--v-orange); }
.approach-step__num--purple { color: var(--v-purple); }
.approach-step__title { font-family: var(--font-primary); font-size: 20px; font-weight: 600; }
.approach-step__desc { font-family: var(--font-secondary); font-size: 16px; color: var(--v-text-secondary); line-height: 1.6; }
.approach-step__line { height: 2px; width: 100%; }
.approach-step__line--green { background: linear-gradient(to bottom, var(--v-green-primary), transparent); }
.approach-step__line--orange { background: linear-gradient(to bottom, var(--v-orange), transparent); }
.approach-step__line--purple { background: linear-gradient(to bottom, var(--v-purple), transparent); }
```

**Step 8: Expertise section (bento grid)**

```css
.expertise { background: var(--v-bg-surface); }
.expertise__inner { max-width: 1440px; margin: 0 auto; padding: 100px 120px; display: flex; flex-direction: column; gap: 64px; }
.expertise__header { display: flex; justify-content: space-between; align-items: flex-end; }
.expertise__header-left { display: flex; flex-direction: column; gap: 16px; }
.expertise__years { display: flex; flex-direction: column; gap: 4px; align-items: flex-end; }
.expertise__years-num { font-family: var(--font-primary); font-size: 64px; font-weight: 700; letter-spacing: -2px; color: var(--v-green-primary); }
.expertise__years-label { font-family: var(--font-primary); font-size: 14px; font-weight: 500; color: var(--v-text-muted); }
.bento-grid { display: flex; gap: 16px; }
.bento-grid__col { flex: 1; display: flex; flex-direction: column; gap: 16px; }
.bento-card { background: var(--v-bg-elevated); border: 1px solid var(--v-border); border-radius: 12px; padding: 28px; display: flex; flex-direction: column; gap: 16px; }
.bento-card__icon { width: 28px; height: 28px; }
.bento-card__icon--green { color: var(--v-green-primary); }
.bento-card__icon--orange { color: var(--v-orange); }
.bento-card__icon--purple { color: var(--v-purple); }
.bento-card__title { font-family: var(--font-primary); font-size: 18px; font-weight: 600; }
.bento-card__desc { font-family: var(--font-secondary); font-size: 14px; color: var(--v-text-secondary); line-height: 1.6; }
```

**Step 9: Experience section (stats + roles)**

```css
.experience { background: var(--v-bg-deep); }
.experience__inner { max-width: 1440px; margin: 0 auto; padding: 100px 120px; display: flex; flex-direction: column; gap: 64px; }
.stats-row { display: flex; }
.stat { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 32px 24px; }
.stat--border { border-right: 1px solid var(--v-border); }
.stat__num { font-family: var(--font-primary); font-weight: 700; letter-spacing: -1px; }
.stat__num--green { color: var(--v-green-primary); font-size: 48px; }
.stat__num--orange { color: var(--v-orange); font-size: 48px; }
.stat__num--purple { color: var(--v-purple); }
.stat__num--white { color: var(--v-text-primary); }
.stat__num--sm { font-size: 26px; }
.stat__label { font-family: var(--font-primary); font-size: 13px; font-weight: 500; letter-spacing: 0.5px; color: var(--v-text-muted); }
.roles { display: flex; gap: 24px; }
.role-card { flex: 1; min-height: 220px; background: var(--v-bg-surface); border: 1px solid var(--v-border); border-radius: 12px; padding: 28px; display: flex; flex-direction: column; gap: 16px; overflow: hidden; position: relative; }
.role-card__badge { display: inline-block; font-family: var(--font-primary); font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 999px; width: fit-content; }
.role-card__badge--green { color: var(--v-green-primary); background: var(--v-green-glow); }
.role-card__badge--orange { color: var(--v-orange); background: #FF910020; }
.role-card__badge--purple { color: var(--v-purple); background: #B388FF20; }
.role-card__company { font-family: var(--font-primary); font-size: 16px; font-weight: 600; }
.role-card__desc { font-family: var(--font-secondary); font-size: 14px; color: var(--v-text-secondary); line-height: 1.6; }
/* Scan line pseudo-element for animation */
.role-card::after { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(0,230,118,0.05), transparent); pointer-events: none; }
```

**Step 10: CTA section**

```css
.cta { position: relative; height: 500px; overflow: hidden; background: var(--v-bg-surface); }
.cta__bg { position: absolute; inset: 0; }
.cta__bg img { width: 100%; height: 100%; object-fit: cover; }
.cta__overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at center, #080B0AEE 0%, #080B0AFF 85%); }
.cta__content { position: relative; z-index: 1; max-width: 1440px; margin: 0 auto; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px; padding: 0 120px; }
.cta__headline { font-family: var(--font-primary); font-size: 48px; font-weight: 700; letter-spacing: -1px; line-height: 1.2; text-align: center; max-width: 700px; }
.cta__sub { font-family: var(--font-secondary); font-size: 20px; color: var(--v-text-secondary); line-height: 1.6; text-align: center; max-width: 600px; }
.cta__form { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 560px; }
.cta__form-row { display: flex; gap: 12px; }
.cta__input, .cta__textarea { flex: 1; background: var(--v-bg-elevated); border: 1px solid var(--v-border); border-radius: 8px; padding: 14px 18px; color: var(--v-text-primary); font-family: var(--font-secondary); font-size: 15px; outline: none; transition: border-color 0.2s; }
.cta__input:focus, .cta__textarea:focus { border-color: var(--v-green-primary); }
.cta__input::placeholder, .cta__textarea::placeholder { color: var(--v-text-muted); }
.cta__textarea { resize: vertical; min-height: 80px; }
.cta__btns { display: flex; gap: 16px; justify-content: center; }
.hidden { display: none; }
```

**Step 11: Footer**

```css
.footer { background: var(--v-bg-deep); border-top: 1px solid var(--v-border); }
.footer__inner { max-width: 1440px; margin: 0 auto; padding: 48px 120px 32px; display: flex; flex-direction: column; gap: 48px; }
.footer__main { display: flex; justify-content: space-between; }
.footer__left { display: flex; flex-direction: column; gap: 16px; }
.footer__logo { display: flex; align-items: center; gap: 12px; }
.footer__logo-text { font-family: var(--font-primary); font-size: 18px; font-weight: 700; letter-spacing: 4px; color: var(--v-green-primary); }
.footer__tagline { font-family: var(--font-secondary); font-size: 14px; color: var(--v-text-muted); line-height: 1.6; max-width: 350px; }
.footer__right { display: flex; gap: 64px; }
.footer__col { display: flex; flex-direction: column; gap: 16px; }
.footer__col-title { font-family: var(--font-primary); font-size: 13px; font-weight: 600; color: var(--v-text-primary); }
.footer__col a { font-family: var(--font-secondary); font-size: 14px; color: var(--v-text-muted); transition: color 0.2s; }
.footer__col a:hover { color: var(--v-text-primary); }
.footer__bar { display: flex; justify-content: space-between; padding-top: 24px; border-top: 1px solid var(--v-border); font-family: var(--font-secondary); font-size: 12px; color: var(--v-text-muted); }
```

**Step 12: Verify** — Open in browser. Every section should now be fully styled matching the .pen design. Compare screenshots against .pen file. Check font rendering, spacing, colors.

**Step 13: Commit**

```bash
git add style.css
git commit -m "feat: complete CSS matching .pen design"
```

---

### Task 4: Lenis Smooth Scroll + GSAP Initialization

**Files:**
- Modify: `p:/vincability.com/animations.js`

**Step 1: Initialize Lenis and sync with GSAP**

```js
// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
```

**Step 2: Verify** — Open in browser, scroll should feel buttery smooth with inertia. ScrollTrigger should be registered (check `console.log(ScrollTrigger)` isn't undefined).

**Step 3: Commit**

```bash
git add animations.js
git commit -m "feat: init Lenis smooth scroll + GSAP ScrollTrigger"
```

---

### Task 5: GSAP — Hero Animations

**Files:**
- Modify: `p:/vincability.com/animations.js`

**Step 1: Hero entrance animations (on page load)**

```js
// Hero entrance timeline
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTl
  .from('[data-animate="hero-badge"]', { y: -20, opacity: 0, duration: 0.8, delay: 0.3 })
  .from('[data-animate="hero-headline"]', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
  .from('.hero__sub', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
  .from('.hero__ctas', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5');
```

**Step 2: Hero parallax + scroll exit**

```js
// Hero BG parallax
gsap.to('[data-animate="hero-bg"]', {
  yPercent: 30,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});

// Hero content fade on scroll
gsap.to('[data-animate="hero-content"]', {
  opacity: 0,
  scale: 0.95,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: '30% top',
    end: 'bottom top',
    scrub: true,
  },
});
```

**Step 3: Circuit divider line draw**

```js
gsap.to('.circuit-divider', {
  scaleX: 1,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.circuit-divider',
    start: 'top 85%',
  },
});
```

**Step 4: Verify** — Reload page, hero should animate in. Scroll down, hero BG should parallax, content fades. Circuit divider should draw when it enters view.

**Step 5: Commit**

```bash
git add animations.js
git commit -m "feat: hero entrance, parallax, and circuit divider animations"
```

---

### Task 6: GSAP — Services + Approach Animations

**Files:**
- Modify: `p:/vincability.com/animations.js`

**Step 1: Reusable fade-up for section headers**

```js
// Shared fade-up for all section headers
document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
  gsap.from(el.children, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
    },
  });
});
```

**Step 2: Service cards stagger**

```js
// Service cards stagger entrance
gsap.from('.service-card', {
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.services__cards',
    start: 'top 80%',
  },
});

// Icon rotation
gsap.from('.service-card__icon', {
  rotation: -90,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: 'back.out(1.7)',
  scrollTrigger: {
    trigger: '.services__cards',
    start: 'top 80%',
  },
});
```

**Step 3: Approach steps stagger**

```js
gsap.from('.approach-step', {
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.approach__steps',
    start: 'top 80%',
  },
});

// Approach step lines draw
gsap.from('.approach-step__line', {
  scaleX: 0,
  transformOrigin: 'left center',
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.approach__steps',
    start: 'top 70%',
  },
});
```

**Step 4: Verify** — Scroll to Services, cards should stagger in with icon rotation. Scroll to Approach, steps stagger in with gradient lines drawing.

**Step 5: Commit**

```bash
git add animations.js
git commit -m "feat: services and approach scroll animations"
```

---

### Task 7: GSAP — Bento Grid Assembly (Wow Moment)

**Files:**
- Modify: `p:/vincability.com/animations.js`

**Step 1: Bento grid scroll-scrubbed assembly**

```js
// Bento grid assembly — scrubbed to scroll position
const bentoCards = gsap.utils.toArray('.bento-card');
const leftColCards = gsap.utils.toArray('.bento-grid__col:first-child .bento-card');
const rightColCards = gsap.utils.toArray('.bento-grid__col:last-child .bento-card');

const bentoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.bento-grid',
    start: 'top 85%',
    end: 'top 20%',
    scrub: 1,
  },
});

bentoTl
  .from(leftColCards, {
    x: -100,
    opacity: 0.3,
    scale: 0.9,
    stagger: 0.1,
    ease: 'power2.inOut',
  }, 0)
  .from(rightColCards, {
    x: 100,
    opacity: 0.3,
    scale: 0.9,
    stagger: 0.1,
    ease: 'power2.inOut',
  }, 0);
```

**Step 2: Expertise years counter**

```js
// Years counter animation
const yearsNum = document.querySelector('.expertise__years-num');
if (yearsNum) {
  const target = 29;
  const obj = { val: 0 };

  ScrollTrigger.create({
    trigger: '.expertise__years',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          yearsNum.textContent = Math.round(obj.val) + '+';
        },
        onComplete: () => {
          gsap.fromTo(yearsNum, { scale: 1 }, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 });
        },
      });
    },
  });
}
```

**Step 3: Verify** — Scroll to Expertise section. Bento cards should assemble from left/right as you scroll (scrubbed, not triggered). Years counter should count up when entering view.

**Step 4: Commit**

```bash
git add animations.js
git commit -m "feat: bento grid assembly + years counter animations"
```

---

### Task 8: GSAP — Stats Counter + Role Cards + CTA (Wow Moment)

**Files:**
- Modify: `p:/vincability.com/animations.js`

**Step 1: Stats counter animation**

```js
// Stats counter — numeric counters + typewriter
ScrollTrigger.create({
  trigger: '.stats-row',
  start: 'top 75%',
  once: true,
  onEnter: () => {
    // Numeric counters
    document.querySelectorAll('[data-counter]').forEach((el) => {
      const target = parseInt(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
        onComplete: () => {
          gsap.fromTo(el, { scale: 1 }, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 });
        },
      });
    });

    // Typewriter effect
    document.querySelectorAll('[data-typewriter]').forEach((el) => {
      const text = el.dataset.typewriter;
      el.textContent = '';
      el.style.opacity = 1;
      let i = 0;
      const interval = setInterval(() => {
        el.textContent = text.slice(0, ++i);
        if (i >= text.length) {
          clearInterval(interval);
          gsap.fromTo(el, { scale: 1 }, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 });
        }
      }, 60);
    });
  },
});
```

**Step 2: Role cards stagger + scan line**

```js
// Role cards slide in from left
gsap.from('.role-card', {
  x: -80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.roles',
    start: 'top 80%',
  },
  onComplete: function() {
    // Trigger scan line sweep on each card
    gsap.to('.role-card::after', { left: '100%', duration: 0.6, stagger: 0.2 });
  },
});

// Scan line animation (using class toggle since pseudo-elements can't be directly animated)
ScrollTrigger.create({
  trigger: '.roles',
  start: 'top 70%',
  once: true,
  onEnter: () => {
    document.querySelectorAll('.role-card').forEach((card, i) => {
      setTimeout(() => card.classList.add('role-card--scanned'), 800 + i * 200);
    });
  },
});
```

Add to CSS (style.css) — the scan line animation class:

```css
.role-card--scanned::after {
  animation: scanLine 0.6s ease-out forwards;
}

@keyframes scanLine {
  from { left: -100%; }
  to { left: 100%; }
}
```

**Step 3: CTA parallax + text reveal**

```js
// CTA BG parallax
gsap.to('[data-animate="cta-bg"]', {
  yPercent: 20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.cta',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  },
});

// CTA content fade up
gsap.from('[data-animate="cta-content"]', {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.cta',
    start: 'top 60%',
  },
});

// CTA button glow pulse
ScrollTrigger.create({
  trigger: '.cta',
  start: 'top 50%',
  once: true,
  onEnter: () => {
    gsap.to('.cta .btn--primary', {
      boxShadow: '0 0 40px rgba(0, 230, 118, 0.4)',
      duration: 0.8,
      yoyo: true,
      repeat: 2,
      ease: 'sine.inOut',
    });
  },
});
```

**Step 4: Verify** — Scroll to Experience section. Stats should count up, typewriter text should type out. Role cards should slide in with scan line. CTA should parallax with button glow.

**Step 5: Commit**

```bash
git add animations.js style.css
git commit -m "feat: stats counter, role cards, and CTA animations"
```

---

### Task 9: Accessibility + Reduced Motion

**Files:**
- Modify: `p:/vincability.com/animations.js`
- Modify: `p:/vincability.com/style.css`

**Step 1: Wrap all GSAP code in matchMedia for reduced motion**

Wrap the entire animation initialization in a `gsap.matchMedia()` block:

```js
// At the very top of animations.js, wrap everything after Lenis init:
gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
  // ALL animation code goes inside this block
  // ... hero, services, bento, stats, CTA animations ...
});
```

**Step 2: CSS fallback for reduced motion — show all content statically**

```css
@media (prefers-reduced-motion: reduce) {
  .circuit-divider { transform: scaleX(1); }
  /* Ensure no CSS animations fire */
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

**Step 3: Ensure progressive enhancement** — All HTML content is visible without JS. The animations are layered on with `opacity: 0` only via GSAP's `from()` method (which sets initial state via JS). If JS fails, content is visible at full opacity by default.

**Step 4: Verify** — In browser DevTools, toggle `prefers-reduced-motion: reduce` in rendering settings. All content should be visible, no animations should play. Smooth scroll should still work (Lenis).

**Step 5: Commit**

```bash
git add animations.js style.css
git commit -m "feat: accessibility — respect prefers-reduced-motion"
```

---

### Task 10: Responsive Design (Mobile)

**Files:**
- Modify: `p:/vincability.com/style.css`

**Step 1: Add responsive breakpoints**

The .pen design is 1440px wide. Add media queries for tablet (<=1024px) and mobile (<=768px):

Key responsive changes:
- Nav: hamburger menu or simplified layout below 768px
- Hero: reduce headline to 36px, sub to 16px, padding to 24px
- Cards/bento/roles: stack vertically below 768px
- Stats row: 2x2 grid below 768px
- Approach steps: stack vertically
- CTA form: full width, stack inputs vertically
- All horizontal paddings: reduce from 120px to 24px

```css
@media (max-width: 1024px) {
  .nav__inner { padding: 0 32px; }
  .services__inner, .approach__inner, .expertise__inner, .experience__inner, .cta__content, .footer__inner {
    padding-left: 32px; padding-right: 32px;
  }
  .hero__content { padding: 80px 32px 60px; }
  .hero__headline { font-size: 44px; }
  .section-title { font-size: 32px; }
}

@media (max-width: 768px) {
  .nav__links { display: none; }
  .hero__headline { font-size: 32px; max-width: 100%; }
  .hero__sub { font-size: 16px; }
  .services__cards, .approach__steps, .roles { flex-direction: column; }
  .bento-grid { flex-direction: column; }
  .stats-row { flex-wrap: wrap; }
  .stat { flex: 1 1 50%; }
  .stat--border { border-right: none; }
  .stat:nth-child(1), .stat:nth-child(2) { border-bottom: 1px solid var(--v-border); }
  .cta__form-row { flex-direction: column; }
  .cta__btns { flex-direction: column; align-items: center; }
  .footer__main { flex-direction: column; gap: 48px; }
  .expertise__header { flex-direction: column; align-items: flex-start; gap: 24px; }
}
```

**Step 2: Disable heavy scroll-scrubbed animations on mobile** (already handled by gsap.matchMedia — add a mobile override that simplifies to basic fade-ins):

```js
gsap.matchMedia().add('(max-width: 768px)', () => {
  // On mobile, replace scrubbed bento assembly with simple fade-in
  gsap.from('.bento-card', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.bento-grid', start: 'top 85%' },
  });
});
```

**Step 3: Verify** — Use browser responsive mode at 768px and 375px. All sections should stack, no horizontal overflow, text readable, form usable.

**Step 4: Commit**

```bash
git add style.css animations.js
git commit -m "feat: responsive design for tablet and mobile"
```

---

### Task 11: Final Polish + Deploy to Netlify

**Files:**
- Modify: `p:/vincability.com/index.htm` (meta tags, Open Graph)
- Verify: `p:/vincability.com/netlify.toml`

**Step 1: Add meta/OG tags to head**

```html
<meta property="og:title" content="Vincability — Technical Consulting">
<meta property="og:description" content="See what others miss. Ship what actually matters. Technical consulting for teams that build software.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://vincability.com">
<link rel="canonical" href="https://vincability.com">
```

**Step 2: Update LinkedIn URL** in CTA section and footer to actual profile URL.

**Step 3: Verify Netlify form** — The `data-netlify="true"` attribute and `name="contact"` on the form element is all that's needed. Netlify auto-detects forms during deploy. The `netlify-honeypot="bot-field"` provides spam protection.

**Step 4: Full visual verification** — Open in browser, scroll through entire page, check:
- [ ] All animations fire at correct scroll positions
- [ ] Stats counter works
- [ ] Bento grid assembles smoothly
- [ ] Contact form submits (will only work on Netlify, locally it'll just refresh)
- [ ] No console errors
- [ ] Reduced motion respected
- [ ] Mobile layout works

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: meta tags, OG, final polish for deploy"
```

**Step 6: Deploy** — Connect GitHub repo to Netlify, or use Netlify CLI:

```bash
npx netlify-cli deploy --prod --dir=.
```
