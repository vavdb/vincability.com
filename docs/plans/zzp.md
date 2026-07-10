# Vincability: strategisch plan voor repo-agent

Instructiedocument voor de coding agent die vincability.com bijhoudt.
Bevat: kernpropositie, de vijf instappoorten, toonregels, wat behouden
blijft, wat gecorrigeerd moet, structuur, en harde guardrails.

Bron van waarheid voor de live site-taal:
`variants/variant-d-editorial-shader.html` (variant D). Dit plan volgt
die site, niet andersom. Wijkt de site af van dit plan, dan wint de
site totdat Vincent anders beslist.

---

## 1. Kernpropositie

**Van:** AI-gecentreerde consultancy (oude site leunde op "AI Agent
Strategy" en agent workflows als hoofdmoot).

**Naar:** één blik op code, data en team tegelijk. Overkoepelende
propositie, zoals op de site:

> *Je schakelt mij in als je niet meer zeker weet of het systeem klopt,
> of hoe je verder moet.*

Het onderscheid is dat code, data en team niet als losse problemen
worden behandeld. Integratieboodschap op de site: "Vijf ingangen, één
werkwijze: ik volg het spoor van code naar data naar team, tot het
klopt." AI is één van vijf instap-redenen, niet de lens. Motto blijft:
"See what others miss. Ship what actually matters."

Doelgroep: directies, managers en beslissers bij Nederlandse bedrijven
en instellingen. CTO's en engineering managers horen daarbij, maar de
taal wordt geschreven voor de niet-technische beslisser die moet
tekenen. Daarnaast investeerders/PE voor technical due diligence.

---

## 2. De vijf instappoorten (gelijkwaardig, in de ledger op de site)

Elke poort opent met de klantvraag, letterlijk zoals op de site.

### Poort 01: TRIAGE
*"Er is iets stuk en niemand vindt het."*
Release-druk, schaalproblemen, een productie-incident, of degene die
alles doorzag is net vertrokken. Aanbod: ik neem de coördinatie over,
vind binnen enkele dagen de oorzaak, en zet het herstelplan samen met
het team neer zodat het er direct mee verder kan.
Voor de beslisser betekent dit: het risico wordt weer beheersbaar en
je weet wat het gaat kosten voordat je verder bouwt.
Toon: kalmerend, feitelijk, zelfverzekerd. De klant is in paniek; de
copy is dat nooit.

### Poort 02: AUDIT
*"Klopt het wat hier gebouwd is?"*
Legacy-overdracht, overname onder due diligence, vertrokken team, of
AI-gegenereerde code waar je niet volledig voor kunt instaan. Aanbod:
Deep Scan, risicokaart met prioriteiten, herstelroadmap. Ik vertel wat
kritiek is en wat acceptabele ruis, zodat je geld en aandacht naar de
echte risico's gaan. Fixed-price waar mogelijk.
Toon: analytisch, onpartijdig, feitelijk. Het rapport is leesbaar voor
de directie, niet alleen voor het team.

### Poort 03: AI-FLOW
*"AI heeft ons sneller gemaakt. En rommeliger."*
AI is een integratievraagstuk, geen magie. Aanbod: samen met het team
agent-workflows, review-grenzen en codebase-conventies afstemmen, tot
de output onderhoudbaar blijft nadat de demo-glans is verdwenen.
Daarna ga ik weer weg. Voor de beslisser: de snelheidswinst blijft,
zonder dat de onderhoudskosten hem later opeten.
Toon: pragmatisch, ontnuchterend.

### Poort 04: VALIDATIE
*"Ons externe team levert. Maar is het het juiste?"*
**Frame is kritisch, lees dit precies:**
- WEL: een onafhankelijke blik op de vraag of uitbesteed werk doet wat
  de business nodig heeft, niet alleen of de code compileert. Vaak zit
  het probleem in de vertaling tussen opdracht en bedoeling; die maak
  ik weer kloppend. Actieve bijsturing: het externe team de goede
  richting in helpen en domein-eigenaren benoemen. Doel: het team
  laten slagen tegen wat de business nodig heeft.
- NIET: waakhond, forensisch auditor, "ammunitie voor de directie",
  "door de excuses van het bureau heen prikken", project takeover als
  hoofdaanbod. Dat vijandige frame is expliciet verworpen: het maakt
  de dienst bedreigend voor het team en levert diagnose zonder uitweg.
Toon: beschermend richting klant, constructief richting het externe
team. Dit blijft een onderscheidende poort: technische diepte plus de
brug naar wat de business bedoelde.

### Poort 05: DATA
*"We hebben data. Maar geen inzicht, en geen plan."*
Ergens ligt data: exports, een API, een oud systeem. Niemand kijkt
ernaar en beslissingen lopen op onderbuik. Aanbod: die data ontsluiten
en er iets van maken waar het team dagelijks op stuurt. Met dezelfde
grondigheid als een code-audit, want het datamodel is vaak waar het
echte risico zit. Van ruwe export naar dashboard, met aandacht voor
data-kwaliteit en een pipeline die herhaalbaar is, zodat het inzicht
niet stopt als ik vertrek.
Toon: nuchter. Beslissen op feiten in plaats van onderbuik is de
belofte; het dashboard is het middel, niet het doel.

### Integratie van de poorten

De site zegt het zo, en dat blijft de kern: "Data is code. Code is
data." Je belt voor een code-audit en het grootste risico blijkt het
datamodel. Of je belt voor een dashboard en eindigt met een vaste
pipeline. Dat onderscheid wordt niet gemaakt: het is hetzelfde werk.
Waar de klant binnenkomt maakt niet uit; het plan wordt samen met de
mensen gemaakt, zodat het team er zelf mee verder kan.

---

## 3. Toon (besloten, niet heronderhandelen)

- Kalmerend, feitelijk, senior. De urgentie zit bij de bezoeker; de
  site is het rustpunt. Geen paniekregister in de eigen copy; de
  emotie wordt herkend in de poort-titels en klantvragen, nooit
  geïmiteerd.
- **Taal voor managers, niet voor engineers.** Schrijf in termen van
  risico, kosten, voorspelbaarheid, continuïteit, beslissen op feiten,
  en wat het team zelf kan dragen. Techniek mag genoemd worden, maar
  elke zin moet leesbaar zijn voor een directeur zonder technische
  achtergrond. Vaste frameworknamen blijven staan (Deep Scan,
  Strategic Map, Accelerate); los engineerjargon in lopende tekst
  wordt vertaald of geschrapt.
- Geen consultant-fluff. Verboden woorden: "ontzorgen", "end-to-end",
  "synergie". Geen buzzwords, geen beloftes zonder mechanisme.
- Radicale eerlijkheid: "een consultancy-infuus heeft niemand nodig"
  blijft expliciet staan, net als "je krijgt een eerlijk antwoord, ook
  als dat is dat je mij niet nodig hebt".
- Realisme zonder paniekzaaierij: pijn benoemen, niet aandikken.
- Geen em-dashes in nieuwe copy.

---

## 4. Behouden (niet aanraken zonder opdracht)

- Proof-cijfers uit het 20-weken-project: 11x output, 1 naar 4
  parallelle tracks, 0 extra mensen, 6 tot 8 weken scope in 8 dagen.
  Deze zijn echt en blijven het centrale bewijs.
- 3-stappen framework: Deep Scan, Strategic Map, Accelerate. In de
  huidige site-uitwerking leest elke stap ook de data-laag mee en
  wordt het plan mét het team gemaakt, niet ervoor.
- GUARDRAIL naamgeving: op vincability noemen we het WERK, niet voor
  wie. Geen klant- of werkgeversnamen op de publieke site. Redenen
  verschillen per geval maar de regel is uniform:
  - KNVB: naam NIET noemen, data viel onder een NDA binnen Leydi's
    masteropdracht. Inhoud anoniem beschrijven: "ledenverloop
    voetbalclubs x sociale samenstelling (CBS)".
  - Zuyd Hogeschool en Meerkring: opdrachten stonden op Leydi's naam,
    Vincent deed het werk als meewerkend partner. Werk beschrijven
    mag ("studentdata naar dashboards, hogeschool" / "CBS pc6 naar
    buurt, onderwijsstichting"), naam alleen met akkoord.
  - In interne docs (zoals dit bestand) mogen namen wel staan.
- Echt data-werk als bewijs (alleen noemen zoals aangeleverd, niets
  bij verzinnen):
  - Zuyd Hogeschool: Osiris/Summit-data via een R-pipeline naar
    Power BI.
  - Meerkring: CBS pc6-naar-buurt-data per gemeente.
  - KNVB: ledendata naar dashboards (zie guardrail).
  - Deportes: .NET/Blazor/CosmosDB.
- "Every feature needs a named domain owner" als principe (op de site
  vertaald als domein-eigenaarschap).
- Track record: Belastingdienst, Rabobank, enterprise/gov-ervaring,
  29+ jaar.
- CV-hub (vincent.vandenbraken.com/cvs.html) en de per-rol-structuur.
- Deep-dive pagina (/how) en het citaat "De winst zit niet in
  snelheid, maar in iteratiedichtheid."
- "Stuur de rommelige versie" als contact-opening.

---

## 5. Corrigeren / verwijderen

1. **AI-dominantie in taal.** AI leeft in poort 03 en verder nergens
   als hoofdboodschap. Niet in hero, meta-description of
   overkoepelende secties.
2. **Ongesourcede statistieken.** Geen marktcijfers op de site tenzij
   met controleerbare bron. Bij twijfel: weglaten. De eigen
   proof-cijfers volstaan.
3. **Valuta-consistentie.** Alles in euro's. Geen dollar-referenties.
4. **Vijandige poort-04-taal** (zie §2, poort 04).
5. **Engineerjargon in klantgerichte copy.** Termen als "dependency
   chains" en "brittle seams" horen niet in site-copy voor beslissers;
   vertaal naar gevolg (risico, kosten, stilstand) of laat weg.
6. **Persoonlijke/interne laag.** Nooit op de site: energieprofiel,
   financiële buffer, WW/startersregeling, "floreert in chaos" als
   zelfbeschrijving, onderhandelingsmarges. Dit hoort in geen enkele
   publieke of repo-versie van het plan thuis.

---

## 6. Structuur website (zoals gerealiseerd in variant D)

1. **Hero:** licht thema, editorial layout, WebGL shader-achtergrond.
   Kop: "Zien wat anderen missen. Bouwen wat er echt toe doet."
   Subtekst: inschakelen als je niet meer zeker weet of het systeem
   klopt; uitzoeken wat er werkelijk aan de hand is; daarna weer
   beslissen op feiten in plaats van onderbuik.
2. **Vijf poorten in een genummerde ledger** direct na de hero, elk
   geopend met de klantvraag (herkenning vóór uitleg): 01 TRIAGE,
   02 AUDIT, 03 AI-FLOW, 04 VALIDATIE, 05 DATA. Met de
   integratieboodschap erboven (§2).
3. **Datapull-sectie "Data is code. Code is data."** met hex-kaart van
   Nederland (verwijzing CBS-buurtdata). Dit is de visuele drager van
   de data-poot.
4. **Scan-scrolly "De audit, in vier stappen":** kluwen, scan, risico,
   kaart. Eindbeeld: code én data op één kaart, waar je met team en
   management over kunt praten.
5. **Aanpak (3 stappen)** met concreet ritme: eind week één een
   risicokaart, week twee readout met management en start uitvoering,
   einddatum vanaf dag één vast.
6. **Proof strip** (20-weken-case) en **CTA met Netlify-formulier**.
   CTA-label overal: "Neem contact op". Geen jargon-labels zoals
   "Clarity Sessie". Meta bij het formulier: vertrouwelijk, reactie
   doorgaans binnen 2 werkdagen.
7. **Kleursysteem:** groen als hoofdkleur, paars als tweede accent
   (o.a. data), oranje voor risico. Geen rood.

---

## 7. Tarieven op de site

Richtprijzen per poort mógen zichtbaar (fixed-price audits met een
vanaf-prijs, dagtarief-indicatie), maar zijn optioneel en worden apart
aangeleverd. De agent verzint of extrapoleert geen bedragen.
Fractional CTO-retainer mag als dienst genoemd worden zodra Vincent de
propositie bevestigt; nog niet zelfstandig toevoegen.

---

## 8. Documentscheiding (repo-hygiëne)

- **In de repo:** website-broncode/copy plus dit plandocument
  (intern, /docs/).
- **Niet in de repo:** het financiële luik (omzetprognose,
  tarieven-onderbouwing, begroting voor UWV/boekhouder) en alles uit
  §5 punt 6. Dat leeft buiten deze codebase.

---

## 9. Guardrails voor de agent

1. Geen cijfers, klantnamen, cases of claims verzinnen. Alleen
   materiaal dat Vincent aanlevert of dat al op de site staat. Dat
   geldt ook voor het data-werk uit §4: namen en feiten exact zoals
   aangeleverd.
2. SkinConsult in het track record: **beslispunt voor Vincent, niet
   voor de agent.** Anonimiseren ("Healthcare SaaS") of laten staan.
   Tot die beslissing: ongewijzigd laten.
3. Wijzigingen in kleine, reviewbare stappen (per sectie/poort), niet
   één grote rewrite-commit.
4. Meta/SEO (title, description, og-tags) consistent houden met de
   vijf-poorten-positionering; AI-termen daar teruggeschaald houden.
5. Bestaande /how deep-dive blijft; alleen verwijzingen ernaar
   consistent houden met de framing.
6. Nederlands/Engels: **besloten door Vincent, 2026-07-02: de site is
   Nederlands.** Hoofdklandizie is Nederlandse bedrijven; kopers van
   poort 02/04 (directies, PE) verwachten NL. Motto en merkzinnen
   blijven Engels ("See what others miss. Ship what actually
   matters.", "Architect first. Stabilizer by necessity.").
   Frameworknamen blijven Engels binnen de NL-copy (Deep Scan,
   Strategic Map, Accelerate). Geen aparte EN-versie totdat er een
   reële internationale pipeline is.
7. Toonregel §3 is hard: taal voor managers, niet voor engineers.
   Twijfel je of een directeur de zin snapt, herschrijf de zin.

---

## 10. Status & tooling (2026-07-07)

- De herpositionering is gerealiseerd in **variant D**:
  `variants/variant-d-editorial-shader.html`. Vijf poorten, datapull-
  sectie, licht thema, shader-achtergrond, Netlify-formulier.
- Het oude implementatieplan
  `docs/superpowers/plans/2026-07-02-four-gates-repositioning.md`
  is ingehaald door variant D en dient nog alleen als archief; zie
  het statusblok bovenaan dat document.
- Uitvoering loopt via ECC (https://github.com/affaan-m/ECC), niet
  via superpowers.
- Open beslispunten voor Vincent: SkinConsult anonimiseren of niet,
  tarieven/fractional-CTO aanleveren (§7), variant D promoveren tot
  index.

---

## 11. Wat nog open staat

1. Variant D promoveren tot de hoofdsite (index) zodra Vincent
   akkoord is.
2. Meta/SEO van de hoofdsite gelijktrekken met de
   vijf-poorten-positionering.
3. Data-bewijs (§4) een plek geven in track record of proof, alleen
   met door Vincent aangeleverde formuleringen.
4. /how-verwijzingen nalopen op consistentie met vijf poorten en
   managertaal.
5. Tarieven pas toevoegen als Vincent ze aanlevert.
