# Vincability — Herpositioneringsplan voor repo-agent

Instructiedocument voor de coding agent die vincability.com bijhoudt.
Bevat: kernpropositie, de vier instappoorten, toonregels, wat behouden
blijft, wat gecorrigeerd moet, structuur, en harde guardrails.

---

## 1. Kernverschuiving

**Van:** AI-gecentreerde consultancy (huidige site leunt op "AI Agent
Strategy", agent workflows, swarm architectures als hoofdmoot).

**Naar:** holistische technische interventie. Overkoepelende propositie:

> *Je haalt me erbij op het moment dat je niet meer zeker weet of het
> klopt of hoe je verder moet.*

AI wordt één van vier instap-redenen, niet de lens. Motto blijft:
"See what others miss. Ship what actually matters."

Doelgroep ongewijzigd: CTO's, engineering managers, founder-led SaaS,
plus (nieuw) investeerders/PE voor technical due diligence.

---

## 2. De vier instappoorten (gelijkwaardig, klikbaar vanaf hero)

### Poort 1 — Acute crisis
*Klantvraag: "Er is iets stuk en niemand vindt het."*
Release-druk, schaalproblemen, vertrokken key-person, productie-incident.
Aanbod: triage & stabilisatie, regie centraliseren, root-cause binnen
48–72u, direct uitvoerbaar herstelplan.
Toon: kalmerend, klinisch, extreem zelfverzekerd. De klant is in paniek;
de copy is dat nooit.

### Poort 2 — Validatie & audit
*Klantvraag: "Klopt het wat hier gemaakt is?"*
Legacy-overdracht, overname/investering (TDD), vertrokken team,
AI-gegenereerde output — alle vier, niet alleen AI.
Aanbod: Deep Scan, geprioriteerde risicokaart, herstelroadmap
(kritiek vs. acceptabele ruis). Fixed-price waar mogelijk.
Toon: analytisch, onpartijdig, feitelijk.

### Poort 3 — AI-orkestratie
*Klantvraag: "AI heeft ons sneller maar rommeliger gemaakt."*
Aanbod: agent-workflows, review-grenzen, codebase-conventies die output
onderhoudbaar houden na de demo-glow. Bestaande AI-content grotendeels
herbruikbaar, maar teruggebracht tot één poort van vier.
Toon: pragmatisch, ontnuchterend. AI als integratievraagstuk, geen magie.

### Poort 4 — Extern team valideren én bijsturen
*Klantvraag: "Ons externe team levert, maar levert het het juiste?"*
**Frame is kritisch — lees dit precies:**
- WEL: onafhankelijk zicht op of outsourced werk klopt tegen
  business-value en domein-intentie, niet alleen technische correctheid.
  Plus actieve bijsturing: het externe team de goede richting in helpen,
  de vertaling tussen opdracht en bedoeling herstellen, domein-eigenaren
  benoemen. Doel: het team laten slagen tegen wat de business nodig heeft.
- NIET: waakhond, forensisch auditor, "ammunitie voor de directie",
  "door de excuses van het bureau heen prikken", project takeover als
  hoofdaanbod. Dat adversariële frame is expliciet verworpen — het maakt
  de dienst bedreigend voor het team en reduceert haar tot diagnose
  zonder uitweg.
Toon: beschermend richting klant, constructief richting het externe team.
Dit is de minst vervangbare poort (technische diepte + business-brug +
bijsturen zonder afbreken); behandel als onderscheidend, niet als
vierde-op-de-lijst.

---

## 3. Toon (besloten, niet heronderhandelen)

- Kalmerend, klinisch, senior. De urgentie zit bij de bezoeker; de site
  is het rustpunt. Geen "shit help"-register in de eigen copy — de
  emotie wordt herkend in de poort-titels/klantvragen, nooit geïmiteerd.
- Ingenieurstaal boven consultant-jargon: "dependency chains", "brittle
  seams", "coordination tax", "ownership boundaries". Geen buzzwords.
- Radicale eerlijkheid: "no consultant dependency" / geen
  consultancy-infuus blijft expliciet staan.
- Realisme zonder paniekzaaierij: pijn klinisch benoemen, niet
  aandikken.

---

## 4. Behouden (niet aanraken zonder opdracht)

- Proof-cijfers uit het 20-weken-project: 11x output, 1→4 parallelle
  tracks, 319k regels verwijderd, 6–8 weken → 8 dagen. Deze zijn echt en
  blijven het centrale bewijs.
- 3-stappen framework: Deep Scan → Strategic Map → Accelerate.
- "Every feature needs a named domain owner" als principe.
- Track record: Belastingdienst, Rabobank, enterprise/gov-ervaring,
  29+ jaar.
- CV-hub (vincent.vandenbraken.com/cvs.html) en de per-rol-structuur.
- Deep-dive pagina (/how).

---

## 5. Corrigeren / verwijderen

1. **AI-dominantie in taal.** "Swarm architectures" en "agent workflows"
   verhuizen naar poort 3; verdwijnen uit hero, meta-description en
   overkoepelende secties.
2. **Ongesourcede statistieken.** Geen marktcijfers (percentages
   technische schuld, integratie-faalpercentages, bus-factor-cijfers,
   testdekking-percentages) op de site tenzij met controleerbare bron.
   Bij twijfel: weglaten. De eigen proof-cijfers volstaan.
3. **Valuta-consistentie.** Alles in euro's. Geen dollar-referenties.
4. **Adversariële poort-4-taal** (zie §2, poort 4).
5. **Persoonlijke/interne laag.** Nooit op de site: energieprofiel,
   financiële buffer, WW/startersregeling, "floreert in chaos" als
   zelfbeschrijving, onderhandelingsmarges. Dit hoort in geen enkele
   publieke of repo-versie van het plan thuis.

---

## 6. Structuur website

1. **Hero:** soevereiniteit + radicale helderheid. Richting (herschrijven
   mag, strekking vast): rust brengen in haperende releases,
   onbeheersbare codebases en ontsporende AI-integraties;
   precisie-interventies voor leiders die regie terug willen.
2. **Vier poorten direct onder de hero**, elk klikbaar, elk geformuleerd
   als de klantvraag (herkenning vóór uitleg):
   - Systeem in crisis? → Triage & stabilisatie
   - Onzeker over architectuur of overname? → Audit & risicokaart
   - AI-hype loopt vast in operatie? → Agent-orkestratie
   - Grip kwijt op je externe bouwers? → Validatie & bijsturing
3. **Proces** (3 stappen), **proof** (20-weken-case), **track record**,
   **over Vincent** ("Architect first. Stabilizer by necessity." blijft).
4. **CTA's:** waardegedreven, lage frictie. "Vraag een Tech Clarity
   Sessie aan" / "Start een vertrouwelijke Deep Scan" i.p.v. generiek
   "neem contact op". "Send the messy version" blijft — die is goed.
5. **Light scheme (doelgroep-dekking, geen smaak):** poort 2/4 verkoopt
   deels aan PE/investeerders/directies — die lezen de site als proxy
   voor de rapportages en verwachten licht/corporate. Uitvoering: CSS
   custom properties + `prefers-color-scheme` als default, toggle als
   override (localStorage). Identiteit via constanten, niet
   kleur-inversie: accentkleuren, typografie, `// SECTIE`-markers,
   spacing en klinische layout identiek in beide schemes; alleen
   achtergrond/tekst/contrast wisselt. Light ≠ grijs-op-wit template —
   dezelfde site bij daglicht. Guardrail: WCAG AA (accenten die op
   donker werken falen vaak op wit — light-varianten verplicht
   contrast-checken). Bijvangst: site en leadership readouts
   (poort 2/4-deliverables) worden visueel familie.

---

## 7. Tarieven op de site

Richtprijzen per poort mógen zichtbaar (fixed-price audits vanaf-prijs,
dagtarief-indicatie), maar zijn optioneel en worden apart aangeleverd —
de agent verzint of extrapoleert geen bedragen. Fractional
CTO-retainer mag als dienst genoemd worden zodra Vincent de propositie
bevestigt; nog niet zelfstandig toevoegen.

---

## 8. Documentscheiding (repo-hygiëne)

- **In de repo:** website-broncode/copy + dit plandocument (intern,
  bijv. /docs/).
- **Niet in de repo:** het financiële luik (omzetprognose, tarieven-
  onderbouwing, begroting voor UWV/boekhouder) en alles uit §5 punt 5.
  Dat leeft buiten deze codebase.

---

## 9. Guardrails voor de agent

1. Geen cijfers, klantnamen, cases of claims verzinnen. Alleen materiaal
   dat Vincent aanlevert of dat al op de site staat.
2. SkinConsult staat nu met naam in het track record. **Beslispunt voor
   Vincent, niet voor de agent:** anonimiseren ("Healthcare SaaS") of
   laten staan. Tot die beslissing: ongewijzigd laten.
3. Wijzigingen in kleine, reviewbare stappen (per sectie/poort), niet
   één grote rewrite-commit.
4. Meta/SEO (title, description, og-tags) mee-updaten met de nieuwe
   positionering; AI-termen daar ook terugschalen.
5. Bestaande /how deep-dive blijft; alleen verwijzingen ernaar
   consistent houden met de nieuwe framing.
6. Nederlands/Engels: site is nu Engels; dat blijft zo tenzij Vincent
   anders beslist.

---

## 10. Status & tooling (2026-07-02)

- Implementatieplan staat klaar:
  `docs/superpowers/plans/2026-07-02-four-gates-repositioning.md`
  (8 taken, incl. light scheme als Task 6; Task 3b geblokkeerd op
  Vincents review van het poort-4-frame).
- **Nog niets uitgevoerd.** Geen enkele taak gestart; `index.htm` heeft
  ongecommitte wijzigingen van vóór dit plan; geen baseline commit,
  geen branch, ledger leeg.
- **Toolchain-switch:** uitvoering gebeurt NIET meer via superpowers
  (subagent-driven-development), maar via ECC
  (https://github.com/affaan-m/ECC). Het plandocument zelf blijft
  leidend; alleen het executie-framework wisselt. De verwijzingen naar
  superpowers-skills in de plan-header zijn daarmee achterhaald.
- Open beslispunten voor Vincent: poort-4-copy (Task 3b), SkinConsult
  anonimiseren of niet, tarieven/fractional-CTO aanleveren (§7).

---

## 11. Volgorde van uitvoering

1. Hero + meta (kernverschuiving zichtbaar maken).
2. Vier-poorten-sectie (vervangt huidige drie-diensten-sectie).
3. Poort-detailteksten (poort 4 als laatste pas na review van het frame
   door Vincent — hoogste risico op frame-drift).
4. CTA's.
5. Proof/track-record: alleen consistentie-edits, geen inhoudelijke
   wijziging.
