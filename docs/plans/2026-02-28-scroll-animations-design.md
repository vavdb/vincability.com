# Scroll Animations Design — Vincability.com

## Goal

Add tech-forward, scroll-driven animations to the Vincability landing page. The site should feel like a Linear/Vercel-tier experience — the kind that makes developers inspect the source.

## Tech Stack

- **GSAP 3 + ScrollTrigger** — scroll-scrubbed and trigger-based animations
- **Lenis** — smooth scroll with inertia (replaces native scroll)
- **Plain HTML/CSS/JS** — no framework, loaded via CDN or bundled

## Animation Plan Per Section

### 1. Hero Section (`jSHUw`)

- **Parallax depth**: BG image (`zIaTG`) scrolls at 0.3x speed relative to viewport. Hero content (`hGshK`) scrolls at 1x (natural).
- **Badge entrance**: `heroBadge` fades in + slides down from -20px on page load with a slight delay.
- **Headline entrance**: `heroHeadline` fades in with a subtle upward slide (20px), 200ms after badge.
- **Scroll exit**: As user scrolls past hero, content fades out and scales down to 0.95. Scrubbed to scroll position.
- **Overlay shift**: The gradient overlay (`bXXyA`) opacity subtly increases as user scrolls, darkening the hero on exit.

### 2. Circuit Divider (`azxE2`)

- **Line draw**: The gradient line scales from `scaleX(0)` to `scaleX(1)` with `transform-origin: center`, triggered when entering viewport. Duration ~0.8s with `power2.out` easing.
- **Glow pulse**: A subtle box-shadow glow pulses once after the draw completes.

### 3. Service Cards (`GVWc5`)

- **Section header**: `servLabel`, `servTitle`, `servDesc` fade up sequentially with 100ms stagger.
- **Cards stagger**: Each card (`qGhhg`, `aBIZ2`, `r2Wif`) fades in + slides up from 60px below, with 150ms stagger between cards. Easing: `power3.out`.
- **Icon entrance**: Each card's icon container rotates from -90deg to 0deg as the card enters.
- **Trigger**: Start when section top hits 80% of viewport height.

### 4. Expertise Bento Grid (`46b5R`)

- **Grid assembly** (hero moment): Cards start from scattered/offset positions and assemble into their grid layout. Scrubbed to scroll position over a 400px scroll distance.
  - Left column cards offset from x:-100, right column from x:+100
  - All cards start at opacity 0.3, scale 0.9
  - As user scrolls, cards slide into position, scale to 1, opacity to 1
- **Section header**: Same fade-up pattern as Services section.
- **Years counter**: `techYearsNum` ("29+") counts from 0 with easing when entering view.
- **Pin (optional)**: Section could pin briefly during the assembly animation for dramatic effect.

### 5. Stats Row (`g2ldB`)

- **Counter animation** (hero moment): All stat numbers count up from 0 simultaneously when the row enters viewport.
  - `statNum1` ("29+"): counts 0 to 29 over 2s
  - `statNum2` ("12+"): counts 0 to 12 over 1.5s
  - `statNum3` ("Gov + Enterprise"): fades in with typewriter effect
  - `statNum4` ("Full Stack"): fades in with typewriter effect
- **Scale bounce**: Numbers do a subtle scale(1.05) bounce on completion.
- **Trigger**: When row center hits viewport center.

### 6. Role Highlights (`nXCNk`)

- **Staggered slide-in**: Cards slide in from the left (x: -80px, opacity: 0) with 200ms stagger.
- **Scan line**: A faint horizontal light sweep (CSS pseudo-element gradient) passes across each card after it enters, like a scanner reading the card.
- **Trigger**: Start at 80% viewport.

### 7. CTA Section (`Liacq`)

- **Parallax background**: Background shifts at 0.5x scroll speed.
- **Text reveal**: Heading text reveals word-by-word, scrubbed to scroll position.
- **Button glow**: CTA button gets a pulsing glow animation once fully in view.

## Performance Considerations

- Use `will-change: transform, opacity` on animated elements only during animation.
- Prefer `transform` and `opacity` exclusively (GPU-composited, no layout thrash).
- Lenis runs on `requestAnimationFrame` — no jank from scroll event listeners.
- Lazy-load GSAP ScrollTrigger plugin to avoid blocking initial paint.
- Use `gsap.matchMedia()` to disable heavy animations on mobile/reduced-motion.

## Accessibility

- Respect `prefers-reduced-motion: reduce` — disable all motion, show static layout.
- All content visible without JS (progressive enhancement).
- No auto-playing animations that could trigger vestibular issues.

## Dependencies

```
gsap: ^3.12 (CDN: https://cdn.jsdelivr.net/npm/gsap)
@gsap/ScrollTrigger (CDN: included with GSAP)
lenis: ^1.1 (CDN: https://cdn.jsdelivr.net/npm/lenis)
```

## Key Technical Notes

- Lenis and GSAP ScrollTrigger need to be synced via `lenis.on('scroll', ScrollTrigger.update)`.
- The two "wow moments" are the **bento grid assembly** (scrubbed) and the **stats counter** (triggered). Other sections keep animations restrained so these land harder.
- All animations use consistent easing (`power3.out` for entrances, `power2.inOut` for scrubbed).
