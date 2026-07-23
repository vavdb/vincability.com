# vincability.com/vindicator — stijl & plan

Landing voor Vindicator, rechtstreeks uit de visuele identiteit van de game:
het "cognitive overlay" — donkere navy glaspanelen, chamfered hoeken,
scanlines, groen-neon accenten, mono-typografie. De site moet voelen als een
scherm ván het schip, niet als een website over een game.

## 1. Visuele taal (uit de game overgenomen)

> Bron van waarheid: de game-code (`P:\Vindicator\common\UiThemeTokens.cs` +
> `ChamferStyleBox.cs`), 1:1 gespiegeld in `vindicator/vindicator.css`.
> Uitleg met live demo's: `/vindicator/design-language.html`.

### Kleuren (UiThemeTokens van de game)
| Token | Hex | Gebruik |
|---|---|---|
| `--bg-deep` | `#060B12` | body-achtergrond (ruimte) |
| `--panel-base` | `#0E1826` | glaspanelen (verticale gradient, licht boven) |
| `--signal` | `#83C3FF` | structuur: rails, links, hover, koppen, grid |
| `--cassius` | `#F59A56` | uitsluitend CASSIUS external comms |
| `--fold` | `#91A6FF` | exotische tech (fold drive) |
| `--online` | `#00E676` | online/succes/pressed, primaire CTA |
| `--nav-ink` | `#D0D0D0` | body/data-tekst, rustende knop-labels |
| `--steel-rail` | `#B5CBE0` | rustende knop-rail (mix nav-ink→signal 35%) |
| afgeleiden | signal @55/11/5% | `--rail` / `--grid-major` / `--grid-minor` |

### Vormtaal
- **Chamfered hoeken**, geen border-radius: `clip-path: polygon(...)` met
  45°-cut (14px panelen, 8px knoppen) + 1px buitenrail in rail-staal die op
  hover naar cyaan schuift, actief naar groen-neon.
- **Glas**: panelen op `rgba(16,30,46,.95)` verticale gradient + 1px
  highlight-lijn net onder de bovenrand (`rgba(214,228,238,.10)`).
- **Scanlines**: `repeating-linear-gradient(0deg, rgba(131,195,255,.04) 0 1px,
  transparent 1px 3px)` als overlay op panelen; optioneel één traag bewegende
  lichtere band (CSS-animatie, 12s, subtiel — de shimmer uit de game).
- **Header-chips**: systeemnaam-stijl — klein chamfered chip met letterspacing
  2px, caps, cyaan.

### Typografie
- **Kop/display**: Asimovian (game-titelfont) — alleen H1/logo.
- **UI/body**: Geist (sans van de overlay).
- **Data/labels**: JetBrains Mono — nav-labels, stats, versienummers, caps
  met letterspacing.
- **Cijfers met karakter**: Doto (damage-nummer font) voor grote statistieken
  op de feature-secties.
- Alle vier zijn OFL/vrij — zelf hosten, geen CDN.

## 2. Pagina-opbouw (`/vindicator`)

1. **Hero** — fullscreen capture (Gargantua black hole met nebula-instroom is
   dé shot), daaroverheen het logo in Asimovian + één regel pitch
   ("Wake up. The gates are dark. Fold anyway.") + twee knoppen:
   groen-neon `PLAY / WISHLIST` en glas-chip `DEVLOG`. Scanline-overlay op de
   hele hero.
2. **Wat is het** — drie glaspanelen naast elkaar (chamfered):
   verkennen/folden • vechten/modules (tetris-grid capture) • economie
   (economy tracker capture). Elk paneel: klein mono-label, één zin, één crop.
3. **Media-band** — horizontale strip van captures (weapon-demo, fold-suction,
   map-chips, arena). `capture-out/` van de repo is de bron; curate ~6.
4. **Devlog/changelog** — mono-lijst, nieuwste boven, datum + één regel per
   entry (voeden vanuit PLAN.md Done-kolom, handmatig gecureerd).
5. **Footer** — versienummer (zelfde bron als in-game menu), credits-link
   (naar de in-game credits verwijzen), contact, © Vincability.

## 3. Techniek

- Statisch: één HTML + CSS (geen framework nodig voor deze scope); alles
  zelf-gehost, fonts als woff2, captures als geoptimaliseerde webp.
- Eén `vindicator.css` die de bovenstaande tokens als CSS-variabelen
  definieert (`--nav-cyan`, `--green-neon`, …) zodat latere pagina's
  (devlog-archief) hetzelfde systeem hergebruiken.
- Responsief: panelen stapelen onder 900px; chamfers verkleinen naar 8px;
  scanlines blijven (goedkoop).
- Geen tracking; hooguit een simpele hit-counter server-side.

## 4. Volgorde van maken

1. Tokens + basis-CSS (chamfer-mixin, glaspaneel, chip, knop — 1 avond).
2. Hero met de black-hole capture + logo + CTA's.
3. Drie-panelen sectie met bestaande captures.
4. Footer met versie + link terug uit de game (in-game link verwijst hierheen
   — die landt vandaag in het hoofdmenu).
5. Devlog-lijst zodra er publiek te melden valt.

## 5. Assets nu al bruikbaar (uit P:\Vindicator\capture-out\)

- `bh-wispy4-wide.png` / nieuwere black-hole shots → hero
- `wv-chromeless.png` → weapon-sectie
- `economy-tracker.png` (v2 volgt met compare-view) → economie-sectie
- `skin-arena.png`, `map-hint-chip.png` → UI/module-secties
- `fold-consume-*.png` (in de maak) → fold-sectie
