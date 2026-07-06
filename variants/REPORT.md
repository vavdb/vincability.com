# Variantenvergelijk — vincability.com

Vier varianten, één nacht bouwen, review + fixronde afgerond. Screenshots zijn de eindstand (na fixes), desktop 1440x900 en mobiel 375x812. Dit is de eerlijke stand van zaken.

---

## Variant A — Premium 3D

**Bestand:** `variant-a-premium-3d.html`
**Screenshots:** [desktop](shots/variant-a-premium-3d-desktop.png) · [mobiel](shots/variant-a-premium-3d-mobile.png)

**Wat het is.** Donkere hero met een atmosferische 3D "server-tower stad" (WebGL): geloofwaardige belichting, scan-sweep, rode risico-torens. Daarna een dark-to-light overgang naar een redactionele diensten-ledger met genummerde rijen en rechts uitgelijnde mono-deliverables.

**Sterke punten**
- De 3D-hero is de echte deal: leest als maatwerk, niet als template. Tekst blijft goed leesbaar over het beeld.
- Na de fix volledig Nederlands — "Zien wat anderen missen. Bouwen wat er echt toe doet." De taalbreuk is weg.
- Aanpak-sectie is verdicht (twee-koloms kop) en de timeline-lijn stopt nu netjes bij node 03.
- Technisch netjes: geen console errors, reduced-motion én WebGL-fallback aanwezig.

**Zwakke punten**
- Mobiel verliest de hero het grootste deel van de 3D-payoff: vooral tekst op zwart met wat blokjes eronder. Werkt, maar de signatuur zit op desktop.
- Aanpak-sectie blijft, ook na de fix, visueel de zwakste sectie van de pagina.

**Score:** 7,5/10 (hoogste van de vier)
**Mobiel:** stapelt schoon, geen overflow — maar visueel het minst spannend van de pagina zelf.

---

## Variant C — Four Gates

**Bestand:** `variant-c-four-gates.html`
**Screenshots:** [desktop](shots/variant-c-four-gates-desktop.png) · [mobiel](shots/variant-c-four-gates-mobile.png)

**Wat het is.** Isometrische lopende band waar commits door vier kwaliteitspoorten gaan, met scroll-gescrubde camera-zooms per poort en afwisselende uitlegpanelen met gekleurde halo's. De metafoor sluit één-op-één aan op de propositie: "Elke commit langs vier poorten."

**Sterke punten**
- Het meest onderscheidende concept van de vier — de conveyor-met-poorten bestaat nergens anders, en het vertelt letterlijk wat je doet.
- Fixes hebben echt geleverd: copy-bug weg ("het het"), poortnummers nu in JetBrains Mono (leesbaar), volledig Nederlands, en de mobiele hero is nu één grote leesbare poort met AUDIT-label in plaats van een 200px-decoratiestrook. De mobiele screenshot is misschien wel de mooiste mobiele hero van alle vier.
- Zero console errors, zero mobile overflow, beide thema's geverifieerd.

**Zwakke punten**
- De handoff van de gepinde stage naar de volgende sectie blijft de spannendste zone; scroll-gescrubde pinning is het meest fragiele stuk techniek van de vier bij toekomstig onderhoud.
- Reviewscore (7/10) was pre-fix; de fixlijst raakt vrijwel elk genoemd punt, dus feitelijk staat dit nu dichter bij A dan de cijfers suggereren.

**Score:** 7/10 (pre-fix; post-fix aantoonbaar sterker)
**Mobiel:** na de fix sterk — de signatuurvisual overleeft de kleine viewport, wat bij A niet lukt.

---

## Variant B — X-ray Scrolly

**Bestand:** `variant-b-xray-scrolly.html`
**Screenshots:** [desktop](shots/variant-b-xray-scrolly-desktop.png) · [mobiel](shots/variant-b-xray-scrolly-mobile.png)

**Wat het is.** Scrollytelling: een spaghetti-dependency-graph die zich tijdens het scrollen ontwart tot een 4-laags kaart, met rode findings, sweep-fases en een donkere contactsectie. Licht, papierachtig kleurenschema met Asimovian/mono-typografie.

**Sterke punten**
- Het scroll-verhaal (kluwen → kaart → plan) is het beste narratief van de vier; het legt de dienst uit zonder één woord extra.
- Fixes voor de mobiele cards-collision en de half-lege first paint zijn geverifieerd.
- Typografie heeft echt karakter; de contactsectie is handsome.

**Zwakke punten**
- De hero-kop staat nog in het Engels ("See what others miss. Ship what actually matters.") boven een Nederlandse bodytekst — exact de registerbreuk die bij A wél gefixt is. Zichtbaar op desktop én mobiel in de eindscreenshots.
- De PLAN-fase regresseerde visueel naar "roze spaghetti" na de schonere KAART-beat; onduidelijk of dat volledig is opgelost.
- Scrollytelling van dit kaliber is het duurst in onderhoud.

**Score:** 7/10
**Mobiel:** cards-collision gefixt, layout schoon — maar de Engelse kop staat er nog.

---

## Variant D — Editorial Shader

**Bestand:** `variant-d-editorial-shader.html`
**Screenshots:** [desktop](shots/variant-d-editorial-shader-desktop.png) · [mobiel](shots/variant-d-editorial-shader-mobile.png)

**Wat het is.** Opiniërende redactionele pagina gestyled als gedrukt auditrapport: Asimovian display-kapitalen, mono-marginalia, rode handgetekende onderstrepingen, outlined sectienummers, ledger-rijen — met een "levende" WebGL-shader-atmosfeer in groentinten erachter.

**Sterke punten**
- Meest karaktervolle typografie van de vier; niets hieraan oogt als template.
- Eerlijkste engineering: SRI op CDN-scripts, correcte no-JS fallback, echte reduced-motion-path met statisch shaderframe.
- Na de fix is de shader zichtbaar aanwezig (groene aquarelwas over de hero, ook mobiel) en is de 30px mobiele overflow opgelost (scrollWidth exact 375).

**Zwakke punten**
- Kop nog in het Engels; zelfde registerbreuk als B.
- Het kernprobleem — ~80% van de (7352px lange mobiele) pagina voelt als vlak wit, "Word-document met mooie fonts" — is met een hero-shader-fix niet structureel verholpen.
- Laagste startpunt van de vier; concept sterk, executie het minst af.

**Score:** 6,5/10
**Mobiel:** overflow gefixt, numeral-collision sectie 03 aangepakt, maar de lange witte middenmoot blijft het risico.

---

## Ranking en aanbeveling

| # | Variant | Score | Mobiel | Kern |
|---|---------|-------|--------|------|
| 1 | **C — Four Gates** | 7/10 (post-fix sterker) | Sterk na fix | Meest onderscheidend concept, metafoor = propositie, mobiel overleeft |
| 2 | **A — Premium 3D** | 7,5/10 | Schoon maar vlak | Beste desktop-hero, volledig NL, maar mobiel verliest de signatuur |
| 3 | **B — X-ray Scrolly** | 7/10 | Gefixt, kop nog EN | Beste narratief, duurste onderhoud, taalbreuk niet opgelost |
| 4 | **D — Editorial Shader** | 6,5/10 | Gefixt, lang en wit | Beste typografie, zwakste totaalpagina |

**Aanbeveling: ga voor C (Four Gates), met A als runner-up.**

Ja, A heeft de hoogste reviewscore — maar die score is op desktop verdiend en verdampt op mobiel, waar het merendeel van je bezoekers zit. C is de enige variant waarvan de signatuurvisual op 375px overeind blijft, de metafoor verkoopt letterlijk je dienst, en de fixronde heeft vrijwel elk reviewpunt geraakt. Is desktop-wow je hoofddoel (bijv. klantpresentaties), dan is A de veilige keuze.

**Wat ik uit de verliezers in C zou stelen:**
- **Uit A:** de genummerde diensten-ledger met rechts uitgelijnde mono-deliverables — de beste diensten-sectie van de vier — plus de dark-to-light sectieovergang als ritmewissel.
- **Uit B:** de spaghetti-naar-kaart micro-animatie als klein inzetstuk in de "audit"-poortuitleg (niet als volledige scrolly), en de donkere contactsectie.
- **Uit D:** de rode handgetekende onderstrepingen en mono-marginalia als redactionele accenten in de uitlegpanelen, en de SRI + no-JS-fallback-discipline als technische standaard.
