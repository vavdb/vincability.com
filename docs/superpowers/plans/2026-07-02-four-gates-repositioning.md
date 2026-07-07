# Four-Gates Repositioning Implementation Plan

---

## STATUS (2026-07-07): ingehaald door variant D

**Ingehaald door variant D (`variants/variant-d-editorial-shader.html`). Vier poorten zijn vijf poorten geworden (05 DATA erbij). Onderstaande taken zijn in gewijzigde vorm uitgevoerd in variant D of vervallen.** De site is bovendien Nederlands geworden (besluit Vincent 2026-07-02); de "Language: site stays English"-constraint hieronder is daarmee achterhaald. Leidend strategisch document is `docs/plans/zzp.md`. Dit bestand blijft staan als archief.

Status per taak:

- **Task 0 (baseline commit):** UITGEVOERD IN VARIANT D. De repo heeft inmiddels een commit-historie via het variantenwerk.
- **Task 1 (hero + meta):** UITGEVOERD IN VARIANT D. Nieuwe Nederlandse hero zonder AI als hoofdboodschap; meta van index.htm volgt bij promotie van variant D.
- **Task 2 (vier-poorten-sectie):** UITGEVOERD IN VARIANT D, in gewijzigde vorm. Vijf poorten in een genummerde ledger (05 DATA erbij), geen 2x2 grid en geen blauw accent; kleursysteem is groen, paars en oranje.
- **Task 3 (copy poorten 1-3):** UITGEVOERD IN VARIANT D. Copy volledig herschreven in het Nederlands, toonregels toegepast.
- **Task 3b (poort 4, geblokkeerd op Vincent):** UITGEVOERD IN VARIANT D. Poort 04 VALIDATIE staat live in het afgesproken niet-vijandige frame; eindcheck door Vincent bij promotie naar index.
- **Task 4 (CTA's):** VERVALLEN. Het "Request a Clarity Session"-label is bewust geschrapt als jargon; variant D gebruikt overal "Neem contact op". "Stuur de rommelige versie" is gebleven.
- **Task 5 (consistency sweep index.htm/how.html):** NOG OPEN. index.htm en how.html dragen nog de oude Engelse copy; relevant zodra variant D tot index promoveert.
- **Task 6 (light scheme met toggle):** VERVALLEN. Variant D is al licht van zichzelf; er komt geen dark/light-toggle.
- **Task 7 (eindverificatie):** NOG OPEN. Uitvoeren bij promotie van variant D naar index, met greps aangepast op Nederlands en vijf poorten.

---

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

> **Execution mode (updated by Vincent, 2026-07-02): ECC toolchain.** Originally subagent-driven via superpowers; Vincent decided to switch to ECC (https://github.com/affaan-m/ECC) before any task ran. **Execution status: nothing executed** — no baseline commit, no branch, ledger empty, `index.htm` still carries pre-plan uncommitted changes. Whichever framework executes: the tasks, global constraints, and per-task commits below remain the contract. Task 3b stays blocked until Vincent approves the gate-4 frame.

**Goal:** Reposition vincability.com from AI-centered consultancy to holistic technical intervention with four equal entry gates, per `docs/plans/zzp.md`.

**Architecture:** Static HTML site (`index.htm` + `style.css`, no build step, deployed via Netlify). All changes are copy/markup edits plus one small CSS addition (fourth accent color + 2×2 gate grid). Each task is one reviewable commit per zzp.md guardrail 3.

**Tech Stack:** Plain HTML/CSS, Lucide icons, GSAP animations (untouched), Netlify forms (untouched).

## Global Constraints

Copied from `docs/plans/zzp.md` — every task implicitly includes these:

- **Tone:** calming, clinical, senior. The visitor carries the urgency; the site is the calm point. Panic register only in gate titles/customer questions, never in body copy. Engineer language ("dependency chains", "brittle seams", "coordination tax", "ownership boundaries"), no consultant buzzwords.
- **Motto stays:** "See what others miss. Ship what actually matters."
- **Never invent:** numbers, client names, cases, claims, prices. Only material already on the site or supplied by Vincent. No market statistics without a verifiable source — when in doubt, omit.
- **Currency:** euros only. No `$` anywhere. (No prices are added by this plan at all — §7 says prices are supplied separately.)
- **SkinConsult:** appears as `SkinConsult / Healthcare SaaS` in the track record. Decision is Vincent's — leave the string **unchanged** in every task.
- **Keep untouched:** proof numbers (11x, 1→4 tracks, 319k lines, 6–8 weeks → 8 days), Deep Scan → Strategic Map → Accelerate, "every feature needs a named domain owner", Dutch Tax Authority / Rabobank track record, `how.html` deep-dive content, "Architect first. Stabilizer by necessity.", "Send the messy version", "no consultant dependency".
- **Gate 4 frame (§2 poort 4):** independent view of whether outsourced work matches business value and domain intent, plus active steering so the external team succeeds. NEVER: watchdog, forensic auditor, "ammunition for the board", "cutting through the agency's excuses", takeover-as-offer. Protective toward client, constructive toward the external team.
- **Never on the site:** energy profile, financial buffer, WW/startersregeling, "thrives in chaos" self-description, negotiation margins.
- **Language:** site stays English.
- **File note:** the homepage is `index.htm` (not `.html`).

---

### Task 0: Baseline commit

`git status` shows `index.htm` already modified plus untracked docs/plan files. Repositioning commits must be clean diffs against a committed baseline.

**Files:**
- Modify: none (git only)

- [ ] **Step 1: Inspect what is uncommitted**

Run: `git -C /home/vavdb/dev/vincability.com status --short && git -C /home/vavdb/dev/vincability.com diff --stat index.htm`

- [ ] **Step 2: Commit the pre-existing WIP as its own baseline commit**

Commit only the already-modified site file and the plan documents. Do NOT commit anything from §5.5 (personal/financial layer) — check `docs/_drafts/` and `next.md` contents before staging; if they contain WW/financial/personal material, leave them unstaged and add them to `.gitignore` instead.

```bash
git add index.htm docs/plans/zzp.md docs/superpowers/plans/2026-07-02-four-gates-repositioning.md
git commit -m "chore: baseline before four-gates repositioning"
```

- [ ] **Step 3: Verify clean slate for site files**

Run: `git status --short index.htm style.css how.html`
Expected: no output.

---

### Task 1: Hero + meta

Make the core shift visible: AI leaves the hero and meta tags; "clarity when you're no longer sure" enters.

**Files:**
- Modify: `index.htm:7-14` (title/meta/og), `index.htm:71-73` (hero subtitle)

**Interfaces:**
- Produces: hero CTA block at `index.htm:75-78` stays structurally identical — Task 4 edits its labels.

- [ ] **Step 1: Replace title, meta description, and og tags**

In `index.htm` head, replace:

```html
  <title>Vincability — See what others miss. Ship what actually matters.</title>
  <meta name="description" content="Technical consulting that cuts through noise. Codebase investigation, team alignment, and AI strategy.">

  <!-- Open Graph -->
  <meta property="og:title" content="Vincability — See what others miss. Ship what actually matters.">
  <meta property="og:description" content="Technical consulting that cuts through noise. Codebase investigation, team alignment, and AI strategy.">
```

with:

```html
  <title>Vincability — See what others miss. Ship what actually matters.</title>
  <meta name="description" content="Precision technical interventions for leaders who want clarity back: crisis triage, codebase and due-diligence audits, AI orchestration, and independent validation of external teams.">

  <!-- Open Graph -->
  <meta property="og:title" content="Vincability — See what others miss. Ship what actually matters.">
  <meta property="og:description" content="Precision technical interventions for leaders who want clarity back: crisis triage, codebase and due-diligence audits, AI orchestration, and independent validation of external teams.">
```

- [ ] **Step 2: Replace the hero subtitle**

Replace:

```html
      <p class="hero__subtitle" data-animate="hero-sub">
        I bring disciplined focus, pattern recognition, and big-picture clarity to untangle codebases, align teams, and accelerate delivery. Technical consulting that cuts through noise.
      </p>
```

with:

```html
      <p class="hero__subtitle" data-animate="hero-sub">
        You call me in when you're no longer sure the system is right — or how to move it forward. I bring calm to faltering releases, codebases that stopped being trustworthy, and AI integrations drifting off course. Precision interventions for leaders who want clarity back.
      </p>
```

(Headline `See what others miss.<br>Ship what actually matters.` stays — it is the motto.)

- [ ] **Step 3: Verify AI is gone from hero + meta**

Run: `sed -n '1,80p' index.htm | grep -ci "AI strategy\|agent workflows\|swarm"`
Expected: `0`

- [ ] **Step 4: Visual check**

Open `index.htm` in a browser (or `python3 -m http.server 8080` and visit). Confirm hero renders, no layout break, subtitle fits on mobile width (~375px via devtools).

- [ ] **Step 5: Commit**

```bash
git add index.htm
git commit -m "feat: hero and meta reflect holistic-intervention positioning"
```

---

### Task 2: Four-gates section (replaces three-services cards)

Replace the three service cards inside `<section class="services" id="services">` with four clickable gate cards, each titled as the customer question. Section moves directly under the hero (before the offer section) per §6.2 "vier poorten direct onder de hero". Keep `id="services"` so nav and footer anchors keep working.

**Files:**
- Modify: `index.htm` — move section `services` (currently lines 159-218) to directly after the circuit divider (line 85), replace its three `service-card` articles with four gate cards
- Modify: `style.css` — add `--v-blue` accent vars, blue card variants, switch `.services__cards` to a 2×2 grid

**Interfaces:**
- Produces: four `<article>` cards with ids `gate-crisis`, `gate-audit`, `gate-ai`, `gate-external`. Task 3 rewrites the `<p class="service-card__desc">` inside `gate-crisis`/`gate-audit`/`gate-ai`; Task 3b (blocked) rewrites `gate-external`'s. Card structure and tag lines set here are final.

- [ ] **Step 1: Add the fourth accent color to `style.css`**

In `:root` (after line 19, `--v-purple-dim`):

```css
  --v-blue:          #40C4FF;
  --v-blue-dim:      #0091EA;
```

- [ ] **Step 2: Add blue card variants and switch the card row to a 2×2 grid**

Replace in `style.css`:

```css
.services__cards {
  display: flex;
  gap: 24px;
}
```

with:

```css
.services__cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
```

After `.service-card--purple:hover { border-color: var(--v-purple); }` add:

```css
.service-card--blue:hover   { border-color: var(--v-blue); }

a.service-card {
  text-decoration: none;
  cursor: pointer;
}
```

After `.service-card__icon--purple { background-color: #B388FF20; }` add:

```css
.service-card__icon--blue   { background-color: #40C4FF20; }
```

After the purple icon color rule add:

```css
.service-card__icon--blue   i,
.service-card__icon--blue   svg { color: var(--v-blue); stroke: var(--v-blue); }
```

Find the `.service-card__tag--purple` color rule (same file, nearby) and add alongside it:

```css
.service-card__tag--blue { color: var(--v-blue); border-color: var(--v-blue); }
```

(Check how `--green/--orange/--purple` tag variants are styled first and mirror exactly — if they only set `color`, only set `color`.)

In the responsive block at `style.css` ~line 1479 where `.services__cards` collapses for mobile, ensure it becomes one column:

```css
  .services__cards {
    grid-template-columns: 1fr;
  }
```

- [ ] **Step 3: Replace the services section content and move it under the hero**

Cut the entire `<section class="services" id="services">…</section>` block and paste it directly after the circuit divider `<div class="circuit-divider" …></div>` (before `<section class="offer">`). Replace its contents with:

```html
  <section class="services" id="services" aria-label="Services">
    <div class="services__inner">
      <header class="section-header">
        <span class="section-label" style="color: var(--v-green-primary);">// FOUR REASONS TO CALL</span>
        <h2 class="section-header__title">
          Which one sounds like<br>your Monday morning?
        </h2>
        <p class="section-header__desc">
          Four different situations, one common thread: you need an independent senior view of what is actually going on, and a way forward your own team can execute.
        </p>
      </header>

      <div class="services__cards">
        <!-- Gate 1: Acute crisis -->
        <a href="#contact" class="service-card service-card--green" id="gate-crisis" data-animate="stagger-card">
          <div class="service-card__icon service-card__icon--green" aria-hidden="true">
            <i data-lucide="siren"></i>
          </div>
          <h3 class="service-card__title">"Something is broken and nobody can find it."</h3>
          <p class="service-card__desc">
            Release pressure, scaling pain, a production incident, or the one person who understood it all just left. I centralize the response, isolate the root cause within days, and hand your team a recovery plan it can execute immediately.
          </p>
          <span class="service-card__tag service-card__tag--green">
            Triage &amp; Stabilization · Root Cause in 48–72h · Recovery Plan
          </span>
        </a>

        <!-- Gate 2: Validation & audit -->
        <a href="#contact" class="service-card service-card--orange" id="gate-audit" data-animate="stagger-card">
          <div class="service-card__icon service-card__icon--orange" aria-hidden="true">
            <i data-lucide="scan-search"></i>
          </div>
          <h3 class="service-card__title">"Is what was built here actually sound?"</h3>
          <p class="service-card__desc">
            A legacy handover, an acquisition under due diligence, a departed team, or AI-generated output you can't fully vouch for. You get a Deep Scan, a prioritized risk map, and a repair roadmap that separates critical from acceptable noise.
          </p>
          <span class="service-card__tag service-card__tag--orange">
            Deep Scan · Risk Map · Technical Due Diligence
          </span>
        </a>

        <!-- Gate 3: AI orchestration -->
        <a href="#contact" class="service-card service-card--purple" id="gate-ai" data-animate="stagger-card">
          <div class="service-card__icon service-card__icon--purple" aria-hidden="true">
            <i data-lucide="zap"></i>
          </div>
          <h3 class="service-card__title">"AI made us faster — and messier."</h3>
          <p class="service-card__desc">
            AI is an integration problem, not magic. I set up agent workflows, review boundaries, and codebase conventions that keep output maintainable after the demo glow wears off.
          </p>
          <span class="service-card__tag service-card__tag--purple">
            Agent Workflows · Review Boundaries · Maintainability
          </span>
        </a>

        <!-- Gate 4: External team validation & steering -->
        <a href="#contact" class="service-card service-card--blue" id="gate-external" data-animate="stagger-card">
          <div class="service-card__icon service-card__icon--blue" aria-hidden="true">
            <i data-lucide="compass"></i>
          </div>
          <h3 class="service-card__title">"Our external team delivers — but is it the right thing?"</h3>
          <p class="service-card__desc">
            An independent view of whether outsourced work matches your business intent, not just whether the code compiles. I help restore the translation between assignment and intention, so your external team succeeds at what the business actually needs.
          </p>
          <span class="service-card__tag service-card__tag--blue">
            Independent Validation · Active Steering · Domain Ownership
          </span>
        </a>
      </div>
    </div>
  </section>
```

Note: cards changed from `<article>` to `<a href="#contact">` — the whole card is the clickable entry point per §2 "klikbaar vanaf hero". Verify `data-animate="stagger-card"` still animates on `<a>` elements (animations.js selects by attribute, not tag — spot-check `animations.js` with `grep -n "stagger-card" animations.js`).

- [ ] **Step 4: Verify structure**

Run: `grep -c "gate-" index.htm` — Expected: `4`
Run: `grep -n "swarm architectures\|AI Agent Strategy" index.htm` — Expected: only the bento card at ~line 371-374 remains (fixed in Task 5), the services section hit is gone.

- [ ] **Step 5: Visual check**

Browser check: four cards in 2×2 under the hero, hover borders work (green/orange/purple/blue), one column on mobile, cards navigate to `#contact` on click, no text styled as underlined blue link inside cards.

- [ ] **Step 6: Commit**

```bash
git add index.htm style.css
git commit -m "feat: four-gates section replaces three-services cards"
```

---

### Task 3: Gate detail copy polish (gates 1–3 only)

The card copy from Task 2 is already the §2 offer text. This task is the review pass on gates 1–3 against the tone rules; gate 4 is explicitly excluded (Task 3b).

**Files:**
- Modify: `index.htm` (gate-crisis, gate-audit, gate-ai card copy only, if needed)

- [ ] **Step 1: Re-read §2 and §3 of `docs/plans/zzp.md`, then re-read the three gate cards**

Check each against: calming/clinical (no panic register outside the quoted customer question in the title), engineer language, no invented claims, no unsourced statistics. The only number allowed in gate copy is "48–72h" (root cause window, from §2 poort 1).

- [ ] **Step 2: Fix anything that fails the check; if nothing fails, skip to Step 3**

- [ ] **Step 3: Verify no forbidden content crept in**

Run: `grep -in "watchdog\|forensic\|ammunition\|takeover\|\\$" index.htm` — Expected: no output.
Run: `grep -in "% of\|percent of" index.htm` — Expected: no output (no market stats).

- [ ] **Step 4: Commit (only if Step 2 changed anything)**

```bash
git add index.htm
git commit -m "copy: tone pass on gates 1-3"
```

---

### Task 3b: Gate 4 detail copy — BLOCKED on Vincent

**Do not execute until Vincent has reviewed and approved the gate-4 frame.** zzp.md §10.3: highest frame-drift risk. Present him the gate-4 card copy from Task 2 (it was written frame-compliant on purpose) and ask: approve as-is, or supply corrections. Apply his corrections verbatim, then:

- [ ] **Step 1: Apply Vincent's approved gate-4 copy to `#gate-external`**
- [ ] **Step 2: Verify frame words absent:** `grep -in "watchdog\|forensic\|ammunition\|excuses\|takeover" index.htm` → no output
- [ ] **Step 3: Commit**

```bash
git add index.htm
git commit -m "copy: gate 4 copy per Vincent's frame review"
```

---

### Task 4: CTAs

Value-driven, low-friction CTAs per §6.4. "Send the messy version" stays.

**Files:**
- Modify: `index.htm:50` (nav button), `index.htm:75-78` (hero CTAs), `index.htm:604-608` (form submit button)

- [ ] **Step 1: Update the three CTA labels**

Nav button (line ~50): `Let's Talk` → `Request a Clarity Session`

```html
      <a href="#contact" class="btn btn--primary">Request a Clarity Session</a>
```

Hero primary CTA (line ~76): `Start a Conversation` → `Request a Tech Clarity Session` (secondary "How I Deliver" → how.html stays):

```html
        <a href="#contact" class="btn btn--primary">Request a Tech Clarity Session</a>
        <a href="how.html" class="btn btn--outline">How I Deliver</a>
```

Form submit button (line ~605-608): `Start a Conversation` → `Start a Confidential Deep Scan`:

```html
          <button type="submit" class="btn btn--primary">
            <i data-lucide="message-circle" aria-hidden="true"></i>
            Start a Confidential Deep Scan
          </button>
```

- [ ] **Step 2: Verify "Send the messy version" untouched**

Run: `grep -c "Send the messy version" index.htm` — Expected: `1`

- [ ] **Step 3: Visual check**

Nav button must not wrap on ~1024px width; if it does, use the shorter `Clarity Session` for the nav only.

- [ ] **Step 4: Commit**

```bash
git add index.htm
git commit -m "feat: value-driven CTAs (clarity session, confidential deep scan)"
```

---

### Task 5: Consistency sweep — remaining AI-dominance, footer, offer, target audience

Only consistency edits; proof numbers and track record content unchanged (§10.5).

**Files:**
- Modify: `index.htm` — bento card (~371-374), footer services links (~648-651), offer "For Who" card (~105-108), offer section desc (~97-99)
- Modify: `how.html` — footer services link labels only (~410-412)

- [ ] **Step 1: Bento "AI & Agent Systems" card — remove "swarm architectures"**

Replace:

```html
            <h3 class="bento-card__title">AI &amp; Agent Systems</h3>
            <p class="bento-card__desc">
              Building AI agent workflows, swarm architectures, and automated review cycles that deliver real value.
            </p>
```

with:

```html
            <h3 class="bento-card__title">AI &amp; Agent Systems</h3>
            <p class="bento-card__desc">
              Agent workflows, review boundaries, and automated review cycles that keep AI output maintainable in production.
            </p>
```

- [ ] **Step 2: Footer services column mirrors the four gates**

Replace:

```html
            <span class="footer__nav-heading">Services</span>
            <a href="#services" class="footer__nav-link">Codebase Investigation</a>
            <a href="#services" class="footer__nav-link">Team Alignment</a>
            <a href="#services" class="footer__nav-link">AI Strategy</a>
```

with:

```html
            <span class="footer__nav-heading">Services</span>
            <a href="#gate-crisis" class="footer__nav-link">Triage &amp; Stabilization</a>
            <a href="#gate-audit" class="footer__nav-link">Audit &amp; Risk Map</a>
            <a href="#gate-ai" class="footer__nav-link">Agent Orchestration</a>
            <a href="#gate-external" class="footer__nav-link">Validation &amp; Steering</a>
```

- [ ] **Step 3: Offer "For Who" card — add investors/PE (new audience, §1)**

Replace:

```html
          <p class="offer-card__desc">
            CTOs, engineering managers, and founder-led SaaS teams who need senior technical judgment without adding another layer of theatre.
          </p>
```

with:

```html
          <p class="offer-card__desc">
            CTOs, engineering managers, founder-led SaaS teams, and investors validating a technical acquisition — anyone who needs senior technical judgment without another layer of theatre.
          </p>
```

- [ ] **Step 4: Offer section intro — de-center AI**

Replace:

```html
        <p class="section-header__desc">
          The sweet spot is a team that is still capable, but is losing time to hidden technical risk, blurred ownership, or an AI push that has outpaced its operating model.
        </p>
```

with:

```html
        <p class="section-header__desc">
          The sweet spot is a team that is still capable, but is losing time to hidden technical risk, blurred ownership, an external partner drifting off-intent, or an AI push that outpaced its operating model.
        </p>
```

- [ ] **Step 5: `how.html` footer — same services links as Step 2** (how.html content itself stays untouched per §4/§9.5; only the footer nav labels change)

- [ ] **Step 6: Verify**

Run: `grep -in "swarm" index.htm how.html` — Expected: no output.
Run: `grep -c "SkinConsult / Healthcare SaaS" index.htm` — Expected: `1` (unchanged).

- [ ] **Step 7: Commit**

```bash
git add index.htm how.html
git commit -m "copy: consistency sweep — footer gates, de-centered AI, investor audience"
```

---

### Task 6: Light scheme (corporate daylight variant)

Per zzp.md §6.5: gates 2/4 sell partly to PE/investors/boards who read the site as a proxy for the reports they'd buy. Light scheme = audience coverage, not taste. Identity is kept via constants (accents, typography, `// SECTION` markers, spacing), not color inversion. Only background/text/contrast switches.

**Files:**
- Modify: `style.css` — token refactor + light palette + theme override selectors
- Modify: `index.htm` — theme toggle button in nav + 8-line inline script in `<head>` (pre-paint, avoids flash)
- Modify: `how.html` — same toggle + script
- Modify: `animations.js` — only if cursor-glow/grid colors are hardcoded there

**Interfaces:**
- Produces: `data-theme="light"|"dark"` attribute on `<html>`, localStorage key `theme`. All colors flow through `--v-*` custom properties in both schemes.

- [ ] **Step 1: Sweep hardcoded hex colors into tokens**

Run: `grep -n "#[0-9A-Fa-f]\{6\}" style.css index.htm animations.js | grep -v ":root"`

Every hit that is a themed color (icon backgrounds like `#00E67633`, `#FF910020`, `#B388FF20`, `#40C4FF20`, inline styles in index.htm, glow colors in animations.js) must move to a custom property. Add to `:root`:

```css
  --v-icon-bg-green:  #00E67633;
  --v-icon-bg-orange: #FF910020;
  --v-icon-bg-purple: #B388FF20;
  --v-icon-bg-blue:   #40C4FF20;
```

and replace the hardcoded values with `var(--v-icon-bg-*)`. Grid/glow colors in animations.js: if hardcoded, read them from CSS vars via `getComputedStyle(document.documentElement).getPropertyValue(...)` or move to CSS.

- [ ] **Step 2: Add the light palette**

The dark tokens stay in `:root` (dark remains default for no-preference/no-JS). Add after `:root`:

```css
/* Light scheme — same site by daylight. Accent hues keep identity but
   are darkened to pass WCAG AA on white. */
:root[data-theme="light"] {
  color-scheme: light;
  --v-bg-deep:       #F7F9F8;
  --v-bg-surface:    #FFFFFF;
  --v-bg-elevated:   #FFFFFF;
  --v-border:        #D8E0DB;
  --v-border-glow:   #00843D20;
  --v-green-primary: #00843D;
  --v-green-dim:     #006B31;
  --v-green-glow:    #00843D26;
  --v-orange:        #B45309;
  --v-orange-dim:    #92400E;
  --v-purple:        #6D28D9;
  --v-purple-dim:    #5B21B6;
  --v-blue:          #0369A1;
  --v-blue-dim:      #075985;
  --v-text-primary:  #14201A;
  --v-text-secondary:#46564D;
  --v-text-muted:    #6B7A70;
  --v-icon-bg-green:  #00843D1A;
  --v-icon-bg-orange: #B453091A;
  --v-icon-bg-purple: #6D28D91A;
  --v-icon-bg-blue:   #0369A11A;
}
```

Add `color-scheme: dark;` to the existing `:root` block.

- [ ] **Step 3: Pre-paint theme resolution script**

In `<head>` of both `index.htm` and `how.html`, before the stylesheet link:

```html
  <script>
    (function () {
      var t = localStorage.getItem('theme');
      if (t !== 'light' && t !== 'dark') {
        t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      }
      document.documentElement.setAttribute('data-theme', t);
    })();
  </script>
```

(Explicit attribute for both themes keeps the CSS single-source: dark tokens in `:root`, light overrides in `[data-theme="light"]` — no duplicated `@media` block needed.)

- [ ] **Step 4: Toggle button in nav**

In both files' nav, next to the primary CTA button:

```html
      <button class="theme-toggle" type="button" aria-label="Switch color scheme">
        <i data-lucide="sun-moon" aria-hidden="true"></i>
      </button>
```

CSS (style.css, near the nav rules):

```css
.theme-toggle {
  background: none;
  border: 1px solid var(--v-border);
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--v-text-secondary);
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.theme-toggle:hover { border-color: var(--v-green-primary); color: var(--v-text-primary); }
.theme-toggle i, .theme-toggle svg { width: 18px; height: 18px; }
```

JS (end of body, both files, or in animations.js):

```html
  <script>
    document.querySelector('.theme-toggle').addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  </script>
```

- [ ] **Step 5: Adapt the CRT layer for daylight**

The grid, cursor glow, sweep line, and hero/CTA background effects were designed for dark. In light mode they must survive as *subtle structure*, not neon. Check `.cursor-glow`, `.hero__bg`, `.cta-section__bg`, grid-line rules and any `mix-blend-mode`/opacity tricks; where they use white-ish glows on dark, give `[data-theme="light"]` overrides that lower opacity or switch to `--v-border`-toned lines. Acceptance: light mode shows a faint grid + accent glow, never a washed-out or glaring effect.

- [ ] **Step 6: WCAG AA contrast verification**

For each light-mode pair, verify ratio ≥ 4.5:1 (normal text) / 3:1 (large text, borders, icons):

```bash
# quick check with a node one-liner or use https://webaim.org/resources/contrastchecker/
# pairs to verify on #FFFFFF and #F7F9F8:
#   #14201A (text-primary), #46564D (text-secondary), #6B7A70 (muted — only used ≥18px or decorative),
#   #00843D, #B45309, #6D28D9, #0369A1 (accent text/tags)
```

Any failing value: darken until it passes, keep hue. Also verify dark scheme still untouched (`git diff style.css` shows dark `:root` values unchanged except added `color-scheme` and icon-bg tokens).

- [ ] **Step 7: Visual pass both schemes**

Browser: toggle in nav works, persists across reload (localStorage), respects OS preference on first visit (test via devtools emulation of `prefers-color-scheme`), no flash-of-wrong-theme on reload, all four gate cards + tags + icons legible in light, footer/nav/forms legible, how.html consistent.

- [ ] **Step 8: Commit**

```bash
git add style.css index.htm how.html animations.js
git commit -m "feat: light scheme — prefers-color-scheme default, toggle override, WCAG AA accents"
```

---

### Task 7: Final verification sweep

- [ ] **Step 1: Run the full guardrail grep battery**

```bash
grep -in "swarm" index.htm how.html                          # expect: nothing
grep -n '\$' index.htm how.html                              # expect: nothing (euros only / no prices)
grep -in "watchdog\|forensic\|ammunition\|takeover" index.htm # expect: nothing
grep -in "WW\|buffer\|startersregeling\|thrives in chaos" index.htm # expect: nothing
grep -c "SkinConsult / Healthcare SaaS" index.htm            # expect: 1
grep -c "11x\|319" index.htm                                 # expect: >0 (proof intact)
grep -c "named domain owner" index.htm                       # expect: 1
grep -c "consultant dependency" index.htm                    # expect: 1
```

- [ ] **Step 2: Full visual pass** — desktop + 375px mobile: hero, four gates (2×2 → 1 col), all anchors (`#services`, `#gate-*`, `#contact`, footer links), form renders, animations still fire.

- [ ] **Step 3: Report to Vincent** — done list + the two open decisions that are his, not the agent's: (a) gate-4 copy approval (unblocks Task 3b), (b) SkinConsult anonymization, (c) whether to supply prices/fractional-CTO retainer copy (§7).
