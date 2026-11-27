# Architecture Decision Log

Lightweight record of significant decisions. Add an entry whenever a non-obvious
choice is made that a future contributor (or Claude session) would otherwise have
to reverse-engineer. Keep entries short. Newest first.

Format:

```
## YYYY-MM-DD — <title>
**Decision:**
**Why:**
**Alternatives considered:**
**Consequences:**
```

---

## 2026-06-15 — Prüfer: Bebauungsplan-Frage verfeinert nur das „grüne“ Ergebnis

**Decision:** Der Carport-Prüfer bekommt eine Frage „Gilt für Ihr Grundstück ein
Bebauungsplan?" (`ja`/`nein`/`unsicher`, Default `unsicher`). Die Antwort wird in
`pruefeCarport` **nur in der sonst verfahrensfreien (grünen) Verzweigung**
ausgewertet: Bei `ja`/`unsicher` wird daraus `pruefen` („weitere Prüfung
empfohlen"), bei `nein` bleibt es grün mit dem Hinweis, dass sich ein (auch
übergeleiteter) Plan selten sicher ausschließen lässt.

**Why:** Ein Bebauungsplan kann unabhängig von Größe/Höhe Vorgaben machen – ein
sauberes „eher unkritisch" ist unehrlich, wenn ein Plan gilt oder das unklar ist.
Genau dort (und nur dort) kippt die Frage das Ergebnis; in den anderen Zweigen
ist das Ergebnis ohnehin schon „Prüfung/Genehmigung", und der statische
„Immer zu beachten"-Block nennt den Bebauungsplan generell. Bedient zugleich den
`carport bebauungsplan checker`-Intent. Default `unsicher`, damit der Prüfer
nicht mit einem Quasi-Freibrief startet.

**Alternatives considered:** Den B-Plan-Hinweis in jeden Ergebniszweig anhängen –
verworfen (Rauschen; nur im grünen Fall ändert er die Aussage). Eigene Tendenz
für den B-Plan-Fall – unnötig, `pruefen` passt.

**Consequences:** Logik bleibt in `src/lib/carport-genehmigung.ts`; die
Komponente reicht nur das neue Feld durch. Vgl. [2026-06-14] (Prüfer = Tendenz,
kein Verdikt) – die vorsichtige Wording-Linie bleibt gewahrt.

## 2026-06-15 — Cluster-Cross-Links: gleiches Cluster zuerst, nicht exklusiv

**Decision:** `RATGEBER_PAGES` bekommt ein Pflichtfeld `cluster`
(`carport` / `aussen` / `innen` / `energie`). `RelatedRatgeber` listet im „Auch
interessant"-Block **same-cluster-Seiten zuerst**, danach den Rest des Katalogs –
es blendet fremde Cluster also **nicht aus**. Ergänzend werden die Carport-Seiten
über **kontextuelle In-Body-Links** vollständig verzahnt (Kosten ↔ Genehmigung ↔
Bebauungsplan).

**Why:** Topische Tiefe + interne Linkstruktur stärken das Carport-Cluster, ohne
die bei wenigen Seiten weiterhin sinnvolle breite Verlinkung zu opfern. Die zuvor
verwaiste `carport-bebauungsplan`-Seite ist jetzt aus Pillar und Genehmigungs-
seite heraus erreichbar.

**Alternatives considered:** Fremde Cluster ganz ausblenden — verworfen (zu wenig
Seiten, würde Entdeckung unnötig beschneiden). Hierarchische Cluster
(carport ⊂ aussen) — verworfen als premature; exakter Cluster-Match reicht.

**Consequences:** Jede neue Katalog-Zeile braucht ein `cluster`. Sortier-Logik
liegt zentral in `RelatedRatgeber`; Reihenfolge im Katalog bleibt der
Tie-Breaker innerhalb eines Clusters.

## 2026-06-15 — PDF-Checkliste = druckbare Seite, kein generiertes Binär-PDF

**Decision:** Die Bebauungsplan-Checkliste wird als eigene, druckoptimierte
Seite (`/ratgeber/carport-bebauungsplan/checkliste`) mit nativen Checkboxen und
einem „Drucken / als PDF speichern"-Button (`window.print()`) umgesetzt – nicht
als hochgeladenes oder serverseitig generiertes `.pdf`. Die Checklisten-Punkte
leben einmalig in `checkliste-items.ts` und werden von der Artikel-Seite (inline)
und der Checklisten-Seite gemeinsam genutzt. Frei zugänglich (kein Lead-Gate),
mit prominentem CTA. Site-weite `@media print`-Regeln in `globals.css` blenden
Header/Footer/Grain und `.no-print`-Elemente beim Druck aus.

**Why:** Single source of truth (kein Drift zwischen Seite und PDF, wie bei
`Faq`), keine neuen Dependencies (kein puppeteer/react-pdf) und kein zu
pflegendes Binär-Asset – passt zu „build for today's scale". Eine freie,
druckbare Checkliste rankt für „… checkliste pdf" und wirkt als Tool, nicht als
Duplicate Content; der Lead kommt über den CTA statt über ein E-Mail-Gate.

**Alternatives considered:** Hand-/serverseitig generiertes PDF (Binär-Asset
bzw. schwere Deps) — verworfen wegen Pflegeaufwand/Drift. Lead-Gate vor Download
— verworfen (mehr Friktion, schwächer fürs Ranking); kann später nachgerüstet
werden.

**Consequences:** Die Checklisten-Seite ist eine Utility-Sub-Seite (nicht im
`RATGEBER_PAGES`-Katalog), daher in `sitemap.ts` explizit gelistet; sie nutzt das
Site-Chrome direkt statt der `RatgeberArticle`-Shell (kein „Auch interessant").

## 2026-06-15 — Maler-Kostenrechner rechnet pro m² Wohnfläche, nicht pro m² Wandfläche

**Decision:** Der Rechner auf `wohnung-streichen-kosten` modelliert die Kosten
**pro m² Wohnfläche** (klein ~30 / mittel ~60 / groß ~100 m²), nicht pro m²
gestrichener Wandfläche. Die €/m²-Sätze sind so kalibriert, dass ein
Komplettjob (Wände + Decken, inkl. Material) die publizierten Spannen trifft
(~1.000 € bei 30 m² … ~3.200 € bei 100 m²). Ballungsraum-Aufschlag: +20 % auf
den **expliziten Arbeitsanteil** (Streich- und Vorarbeiten ohne
Materialaufschlag) – skaliert damit korrekt mit der „Inkl. Material"-Wahl (ohne
Material ≈ alles Arbeit). [Korrigiert via Codex-Review #38; vorher pauschal
+20 % × fixem 70-%-Arbeitsanteil, was den Aufschlag im Nur-Arbeit-Fall zu
niedrig ansetzte.]

**Why:** Nutzer kennen ihre Wohnfläche, nicht die Wandfläche; und die
size-spezifischen Konkurrenzseiten (kostencheck 60/80 qm, MyHammer) quoten
ebenfalls pro Wohnfläche bzw. nach Wohnungsgröße. Eine Wandflächen-Umrechnung
(Wohnfläche × Faktor) wäre eine zusätzliche, fehleranfällige Annahme ohne
Mehrwert für die Schätzgenauigkeit.

**Alternatives considered:** Pro m² Wandfläche mit Umrechnungsfaktor (~×2,5) —
verworfen, weil die Quellen Wand- und Wohnflächenpreise vermischen und der
Faktor je nach Grundriss stark streut. Reine Stundensatz-Schätzung — zu unsicher
für eine Sofort-Spanne.

**Consequences:** Konsistent mit den anderen Kostenrechnern (inline-Mathematik
mit den `calculator-ui`-Bausteinen, kein eigenes `lib/`-Modul). Katalog-Eintrag
verdrahtet alle Discovery-Flächen automatisch.

## 2026-06-15 — Bebauungsplan gets its own page, not an expansion of the Hamburg page

**Decision:** The "carport bebauungsplan" keyword cluster is served by a new
sibling page `/ratgeber/carport-bebauungsplan` rather than by expanding
`carport-baugenehmigung-hamburg`. The page is national-capable (anchored on
BauNVO/BauGB: § 23 Abs. 5 BauNVO, § 31 BauGB, § 19 BauNVO, § 34/§ 35 BauGB) with
a dedicated Hamburg section, and leads with the "Carport außerhalb der
Baugrenze/Baufenster" angle (SEO-ROADMAP P1).

**Why:** "carport bebauungsplan" is a distinct intent from "carport
baugenehmigung hamburg"; separate pages avoid cannibalizing each other's head
term. SERP analysis (June 2026) showed the whole cluster is held only by
generic national pages and forums — no structured, statute-cited page owns it,
and the Baugrenze/Baufenster long-tail is the weakest-defended (forums + one
thin article that doesn't even cite § 23 BauNVO). All legal statements are kept
cautious ("kann", "in der Regel", "verbindlich entscheidet das Bauamt"),
consistent with the [2026-06-15] Prüfer wording change — no individualized legal
verdicts.

**Alternatives considered:** (a) Expand the existing Hamburg page — rejected,
two intents on one URL + cannibalization. (b) Hamburg-specific slug
(`-bebauungsplan-hamburg`) — rejected, the BauNVO/BauGB topic is federal; a
Hamburg section keeps the local hook without narrowing the page.

**Consequences:** Catalog entry in `RATGEBER_PAGES` auto-wires sitemap, index,
homepage band, footer, cross-links and `knowsAbout` schema. Deferred follow-ups
(tracked in SEO-ROADMAP P2): a downloadable PDF checklist (lead magnet) and a
Bebauungsplan question in the Prüfer (serves the `checker` intent).

## 2026-06-14 — Carport-Genehmigungs-Prüfer is an orientation tool, not a verdict

**Decision:** The interactive permit checker on `carport-baugenehmigung-hamburg`
returns a **tendency** (`verfahrensfrei` / `abweichung` / `genehmigung` /
`pruefen`), never a binding "you do/don't need a permit". The decision logic
lives in `src/lib/carport-genehmigung.ts` as a pure function; the component
(`carport-genehmigung-pruefer.tsx`) only collects inputs and renders the result.
Every outcome carries a disclaimer and routes the user to the Bezirksamt + the
lead CTA. When inputs don't allow a safe call (e.g. Standort unklar), it returns
`pruefen` rather than a green light.

**Why:** This is legal logic on rules that changed with the 2026 HBauO and that
no Hamburg expert has yet signed off (see PR #30 review history). A tool that
asserted a definitive legal result would be a liability if a user built on a
wrong "no permit needed". Conservative-by-default + "verbindlich ist das Bauamt"
keeps it useful without overclaiming — and routing every result into the lead
CTA is also better for conversion than a bare yes/no.

**Alternatives considered:** A definitive yes/no verdict — rejected (liability).
Putting the branching in the component — rejected (engineering principle #1:
domain decisions live in `lib/`).

**Consequences:** If the HBauO thresholds change, edit only the constants/branches
in `src/lib/carport-genehmigung.ts`. Keep the disclaimer and Bezirksamt routing
whenever the tool's surface changes.

## 2026-06-13 — Regulatory ("Genehmigung") Ratgeber pages share the cost-page catalog

**Decision:** The new `carport-baugenehmigung-hamburg` page is informational
(building-law / permit), not a cost page, but it is still registered in
`RATGEBER_PAGES` like the cost pages — so it cross-links, appears in the footer,
homepage band and sitemap, and feeds the Organization `knowsAbout` schema (topic
`"Baugenehmigung Carport"`).

**Why:** One catalog is the single discovery/cross-link surface (see CLAUDE.md).
Splitting regulatory pages into a separate catalog would duplicate that wiring and
break the auto cross-links between a topic's cost page and its permit page — which
is exactly the internal-link cluster we want (carport-kosten ↔ carport-genehmigung).

**Alternatives considered:** A separate catalog / `kind` field to segregate page
types — rejected as premature (rule of 3; only one regulatory page exists). Revisit
if regulatory pages grow enough to warrant their own index or schema treatment.

**Consequences:** `RatgeberPage.blurb`/`title` are now intentionally not all
cost-flavoured. If a future surface wants to filter cost vs. regulatory pages, add
a `kind` field then — not before.

## 2026-06-12 — Adopt a lean, fork-friendly process ported from eas-guardians

**Decision:** Port the *spirit* of the eas-guardians AI-development process — not
its full 9-doc apparatus. Concretely: a Workflow + Engineering-principles section
in `CLAUDE.md`, this `DECISIONS.md`, a `CONTRIBUTING.md` for fork-based
contribution, and a PR template carrying the post-coding checklist. No
`GRILL_MODE` / `SYSTEM_MAP` / `UBIQUITOUS_LANGUAGE` / `docs-gate` yet.

**Why:** The project is growing from a one-pager toward a lead-gen platform with
an admin backend and third-party dispatch, and will take outside contributions
(Lasse, via GitHub forks). That justifies real workflow discipline. But the code
is still small, so the heavyweight machinery would be over-engineering — which the
eas-guardians "size for the project" principle itself argues against.

**Alternatives considered:** Full port of all eas-guardians docs — rejected as
premature for the current surface. Doing nothing — rejected; a multi-contributor
fork workflow needs codified rules to merge safely.

**Consequences:** Revisit as the platform lands: when the admin backend / lead
model arrives, add a `SYSTEM_MAP` and ubiquitous-language entries for lead
statuses; when contributor volume grows, consider a `docs-gate`-style CI check.

## 2026-06-12 — Verification gate is `npm run lint` + `npm run build`, and it needs no secrets

**Decision:** Treat `npm run lint` + `npm run build` as the mechanical gate
(lint, type-check + static prerender of `/`) — the same two steps `ci.yml` runs,
each able to fail the check independently. Keep the Supabase client construction
lazy (`createAdminClient()` reads env at call time, inside the Server Action) so
the build never requires `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`.

**Why:** Fork PRs from external contributors do not get repository secrets in CI.
A build that needed secrets would fail every fork PR. A lazy client keeps CI green
on forks and keeps the gate meaningful.

**Alternatives considered:** A separate test suite — deferred; the build already
catches render/type errors at this size. Reading env at module top-level —
rejected; it would break builds without secrets.

**Consequences:** Any new server module that touches env must construct its client
lazily, or be excluded from the prerender path, to preserve secret-free builds.

## 2026-06-12 — Contact table: RLS on, no policies, service-role insert

**Decision:** `contact_submissions` has RLS enabled with **no policies**. The
contact form inserts from the server using the service-role key (which bypasses
RLS); anon/authenticated clients can't touch the table.

**Why:** The form is a public, write-only endpoint. Server-side service-role
insert avoids opening a public anon INSERT policy (which would be abusable) while
keeping the table fully locked to clients.

**Alternatives considered:** A public anon INSERT policy with client-side inserts
— rejected; harder to rate-limit and exposes the table to direct writes.

**Consequences:** If you ever switch to client-side inserts you MUST add an INSERT
policy. The service-role key must stay server-only (never imported by a Client
Component).

## 2026-06-12 — Stack baselines: Next 16 and Zod v4 differ from training data

**Decision:** Treat Next.js 16 and Zod v4 as "not the versions you remember."
Before writing Next.js code, read the relevant guide in
`node_modules/next/dist/docs/` (see `AGENTS.md`). Use the Zod v4 API: `z.email()`
(not `z.string().email()`) and `{ error }` (not `errorMap`).

**Why:** Both shipped breaking API changes after common LLM training cutoffs;
writing from memory produces code that type-checks wrong or fails at runtime.

**Consequences:** Validation and routing code should be checked against the
installed versions, not assumed.

## 2026-06-16 — Local "Niendorf" framing + LocalBusiness schema

**Decision:** Anchor local search intent on the Stadtteil. Promoted the root
JSON-LD from `Organization` to `LocalBusiness` (real address now exists:
Margaretha-Rothe-Weg 11, 22455 Hamburg-Niendorf) with a `PostalAddress` and an
`areaServed` list naming Niendorf + neighbouring Stadtteile (Lokstedt, Schnelsen,
Eidelstedt, Stellingen, Groß Borstel) + Hamburg. Added a reusable `RegionNote`
block, auto-rendered by `RatgeberArticle` for `cluster: "carport"` pages only,
driven by the catalog. NAP centralised in `src/lib/site.ts` (`BUSINESS`).

**Why:** Big aggregators (aroundhome, my-hammer, OBI) own the national "… Kosten"
head terms; a local site realistically wins only on geo-modified intent
("Carport Niendorf", "… in der Nähe"). On-page local relevance + matching
structured data is the lever for that. Scoped to the carport cluster (the brand's
core and best-positioned topic) to avoid diluting the informational national cost
pages with low-volume local framing.

**Scope / not done:** `telephone` omitted from schema (still placeholder — faking
NAP is worse than omitting). `geo` coords omitted (not fabricating). No Google
Business Profile yet — that is the single biggest lever for "near me" (local pack)
and remains a separate to-do gated on the business setting up GBP. Informational
pages (Bad, Wohnung streichen, Wintergarten) intentionally left nationally framed.

**Consequences:** Add `telephone`/`geo` to `organizationSchema()` once real data
exists. To extend local framing to other service clusters, widen the `cluster`
check in `RegionNote`.

## 2026-06-16 — New `smarthome` cluster: KNX Smart Home Kosten page

**Decision:** Added a `smarthome` Ratgeber cluster and a first page,
`/ratgeber/knx-smart-home-kosten`, targeting "KNX Kosten" intent (Hamburg-framed).
Extended `RegionNote` to render for `smarthome` too (per-cluster wording map).

**Why:** A SERP scan of four candidate expansion topics (Sicherheitstechnik,
KNX/Smart Home, Solar/PV, Heizung/Klima) showed KNX is the only one whose
informational SERPs are NOT locked by national lead-gen aggregators
(aroundhome/my-hammer/checkfox) — they're held by content-marketer/integrator
blogs, and no Hamburg-local content ranks. Low volume but high-value, high-intent
leads. Targeted "KNX Kosten" / retrofit / comparison intent; deliberately NOT
"Was ist KNX" (high-DA info sites, low value) or "Home Assistant" (DIY/forum,
anti-commercial).

**Branch dependency:** Built ON TOP of `feat/local-niendorf-framing` (PR #50),
not `main`, because the local `RegionNote` block it extends lives there. Merge #50
first, or retarget once #50 lands. (Exception to the usual "branch from main" rule,
driven by the real RegionNote dependency.)

**Scope / not done:** Two planned sibling pages — "KNX oder Loxone" (comparison)
and "KNX nachrüsten im Altbau" — are follow-ups, separate PRs.

## 2026-06-18 — SEO strategy: dominate local search through depth

**Decision:** Documented the overarching SEO strategy in
`research/seo/STRATEGY.md` and adopt it as the guideline for every new
Ratgeber/SEO page: **don't chase the generic national head terms — dominate
local Hamburg search by winning where the big players are structurally weak, and
secure it with topical depth (cluster authority).**

**Why:** SERP analysis across topics (Carport, KNX, Klimaanlage, Wärmepumpe)
keeps showing the same pattern: national aggregators and product sellers
(thermondo, 1komma5, enpal, aroundhome, my-hammer, ADAC) own the high-volume
generic "… Kosten" terms via domain authority we can't out-muscle. The
defensible, higher-converting fronts are: (1) local-intent *organic* results — we
are an aggregator/Vermittler, so **no Google Business Profile / Maps local pack**
is available (that belongs to the actual service provider); we win local intent
organically by out-localising the national aggregators (Aroundhome/Check24/
MyHammer) the way they out-rank generic content,
(2) topical authority via the interlinked cluster (`RATGEBER_PAGES` +
`RelatedRatgeber`), (3) neutrality/honesty the sellers structurally can't match
("wann lohnt es sich *nicht*"), and (4) GEO/AI answer engines that reward
precise, structured, honest sources over brand. This formalises and extends the
local-framing rationale from the carport/`RegionNote` entry above.

**Constraint (aggregator):** We are a lead-gen aggregator/Vermittler, not the
executing trade. So **no Google Business Profile / Maps local pack** is realistically
available — that listing belongs to the actual service provider, and Google
disallows lead-gen GBPs. At most one generic company listing is possible, with no
ranking lever for individual services. Local dominance therefore runs through
**organic** local-intent results, not the map pack. This also means the schema
should lean Organization-as-aggregator rather than a trade `LocalBusiness`
(`telephone`/`geo` stay omitted until real data exists either way).

**Scope / not done:** Strategy doc only — no code. `RegionNote` still only renders
for `carport`/`smarthome`; widening it to `energie` is a separate decision.

**Consequences:** New pages follow the per-page checklist in STRATEGY.md
(non-geo primary keyword, one-intent-per-page, Hamburg angle, honest
"not-worth-it" section, cluster cross-links). Build cluster depth before opening
new topics. Keyword data + learned patterns live in `research/seo/keywords/`.

## 2026-06-24 — Ancillary "Zulieferer" pages deepen existing clusters

**Decision:** Grow the Ratgeber catalog with **smaller ancillary trades that feed
an existing cluster's pillar**, rather than only big-ticket pillar topics or
brand-new clusters. First page: `fliesen-legen-kosten` (cluster `innen`), which
funnels into the `bad-renovieren-kosten` pillar. Candidate backlog (one per
existing cluster, validate each with `/seo-research` before building): Fliesen
legen + Trockenbau (`innen`), Terrasse bauen + Zaun (`aussen`), Carport-Fundament
(`carport`), Hydraulischer Abgleich (`energie`), KNX nachrüsten (`smarthome`).

**Why:** The catalog was deep on expensive pillars but thin on the *surrounding*
work people actually search mid-project. Ancillary pages are lower-competition
long-tails that (a) add cluster authority to the money pages and (b) catch users
already in a project, then cross-link them to the pillar + contact form. Each one
need not carry traffic alone — the cluster ranks. Extends the depth-over-breadth
strategy from the 2026-06-18 entry.

**Alternatives considered:** Opening a new `elektro` cluster (Mauerschlitzen etc.)
— rejected for now: weaker per-page lead value and no existing pillar to feed;
ancillary-into-existing-cluster gives faster authority compounding.

**Consequences:** New ancillary pages reuse `@/components/ratgeber` and register
in `RATGEBER_PAGES` like any other. Note from the Fliesen keyword data: unlike
Klima/PV, the **geo term has real volume** (`fliesenleger hamburg` ≈ 100–1.000/mo)
— so a Hamburg section is warranted, but this is captured **organically**; the
aggregator constraint (no GBP/map pack, see 2026-06-18) still holds. The
`fliesenleger stundenlohn` term is high-volume *and* low-competition — pages
should surface such sub-questions as their own H2, not bury them in a table.

## 2026-09-22 — Gastro-Terrassenüberdachung is its own page, priced net, with a payback calculator

**Decision:** Build `terrassenueberdachung-gastronomie` (cluster `aussen`) as a
separate page instead of a section on `terrassenueberdachung-kosten`. Its
calculator (`GastroTerrassenCalculator`) shows **net** prices (zzgl. MwSt.) and
adds a **payback estimate** (seats × extra days × spend × 30 % contribution
margin). The private page gets one contextual in-body link to it.

**Why:** Different intent and a different buyer: B2B, net pricing with input-VAT
deduction, AfA instead of § 35a, Bauantrag almost always, Sondernutzung on public
ground, wind class/liability and the Passivraucherschutz "fully enclosed room"
question. Blending would dilute both pages. SERP check: the query is dominated by
manufacturer product pages; none offers a calculator or an interactive payback
— that's the differentiator. Triggered by the first real lead for a
Terrassenüberdachung.

**Alternatives considered:** A "Für Gastronomie" section on the private page —
cheaper, but can't rank for the gastro queries and forces one CostTable onto two
price levels (private 3–20 k€ gross vs. gastro 15–130 k€ net).

**Consequences:** Gastro per-m² prices sit deliberately above the private
calculator (public-traffic statics, higher WWK, planning flat fee). The payback
figure is a rough contribution-margin estimate and is labelled as such — not a
business plan. Real search volumes were not pulled (no Keyword Planner export
yet); add one to `research/seo/keywords/` when available.

## 2026-09-25 — Gastro page targets „Außengastronomie“, URL stays

**Decision:** Re-aim title, H1, description and blurb of
`terrassenueberdachung-gastronomie` at **„Außengastronomie überdachen“**; keep the
slug. Add a section on applying for Außengastronomie in Hamburg (Sondernutzung
vs. Privatgrundstück) and an alternatives table (freistehende Markise,
Pergola-Markise, Kaltwintergarten).

**Why:** Google Autocomplete (Sept 2026, `seo-research` → `autocomplete.py`)
returns **zero** suggestions for „terrassenüberdachung gastronomie/restaurant“,
„lamellendach/pergola gastronomie“. Gastronomen search „außengastronomie
(hamburg)“ – almost entirely about beantragen / Sondernutzung / Vorschriften –
plus „markise gastronomie“ (freistehend, elektrisch) and „wintergarten
gastronomie“. The page was 2 days old and not yet indexed, so retitling costs
nothing.

**Alternatives considered:** New slug `aussengastronomie-ueberdachen` — rejected;
URL keywords matter little and the page is already linked/queued for indexing.
Covering Sperrstunde / Nachtruhe / Wohngebiet — high autocomplete presence but
off-intent for a roofing page.

**Consequences:** Sondernutzung facts are sourced from hamburg.de (§ 19 HWG,
Bezirksamt, 4 Wochen–3 Monate, Wertstufe I–IV). Markise prices are manufacturer
entry prices (net, rounded), labelled as such; the Kaltwintergarten range is
`wintergarten-kosten`'s gross consumer range converted to net (÷ 1,19). Free-
standing/pergola awnings stand on foundations and may themselves be a bauliche
Anlage — the page says so instead of presenting them as permit-free.
Re-check GSC queries 2–4 weeks after indexing.

## 2026-09-28 — Article schema on Ratgeber pages; `RegionNote` on every cluster

**Decision:** (1) `RatgeberArticle` emits `Article` JSON-LD for every page in
`RATGEBER_PAGES` (`articleSchema()` in `src/lib/schema.ts`): `headline`/
`description`/`about` from the catalog entry, `dateModified` from `updated`,
`author` + `publisher` → the root entity via `@id` `#organization`.
(2) `RegionNote` now renders for **all** clusters (`aussen`, `energie`, `innen`
added; `REGION_COPY` is a full `Record<Cluster, …>`). (3) The sitemap's homepage
`lastModified` is derived from the newest catalog entry, like `/ratgeber`.

**Why:** (1) Pages carried only `BreadcrumbList` + `FAQPage` — nothing told
Google/AI answer engines *who* wrote the page and *how fresh* it is, the two
signals GEO citations lean on most. One change in the shell covers all pages.
(2) Reverses the 2026-06-16 "carport only" scope: the 2026-06-18 strategy makes
local intent the #1 front for every cluster and left widening `RegionNote` open;
`energie` (14 pages, the largest cluster) had no consistent local anchor.
(3) The homepage renders the catalog (Ratgeber band), so a fixed June date
understated real changes.

**Alternatives considered:** `datePublished` — omitted: the catalog tracks only
the last change, and a guessed publish date is a false signal (could be added
later as a catalog field sourced from git history). `Person` author — no real
named editor exists; the organisation is the honest author.

**Consequences:** Keep catalog `updated` in sync with the visible
"Aktualisiert" month — both now feed structured data. A new cluster must get a
`REGION_COPY` entry (the type enforces it).

## 2026-10-08 — Holz-Terrassendach as a section, not its own page; GSC-driven title fixes

**Decision:** The wood-roof demand ("beste terrassenüberdachung aus holz kaufen
2026" pos 8.3 / 56 impr., "holz überdachung am haus kosten" pos 8.4 in GSC) is
served by a new `#holz` H2 (cost table by build type, wood-species H3, Holz-vs-Alu
20-year cost comparison, 3 FAQs) inside `terrassenueberdachung-kosten`, not a new
`terrassenueberdachung-holz` page. Same PR: titles/descriptions of
`wintergarten-kosten`, `knx-smart-home-kosten` and `carport-bebauungsplan` rewritten
around the queries they already rank for ("wintergarten hamburg preise" pos 2.1,
"knx kosten rechner" pos 13.7, "carport außerhalb baufenster" pos 4.3).

**Why:** Google already ranks the existing page for the wood queries — a new page
would split those signals and start from zero. Same intent (Kosten), only a
material sub-facet. The 20-year comparison is the honest angle the incumbents
(Aroundhome) skip: wood is only really cheaper in the simple polycarbonate variant.

**Alternatives considered:** Separate Holz page — revisit if GSC shows the section
ranking for many Holz-specific queries the main page can't absorb (e.g.
freistehend, Bausatz, Zimmermann).

**Consequences:** Re-request indexing for the four pages; check CTR on the three
retitled pages after ~3 weeks.

## 2026-10-08 — Carport-Maße as its own page; numbers generated from one lib function

**Decision:** New `/ratgeber/carport-masse` with a Maße-Rechner. All sizing lives in
`src/lib/carport-masse.ts` (`berechneCarportMasse`); the calculator, the page's
tables and the FAQ answers are all generated from it. The Hamburg thresholds
(50 m², 3 m, 9 m) are imported from `carport-genehmigung.ts` (now exported) rather
than restated. No separate "Carport an der Grenze" page.

**Why:** „Maße“ is a different intent from „Kosten“ — GSC showed Maße queries landing
on `doppelcarport-kosten` at pos 44–89, and autocomplete spans 1/2/3 cars,
hintereinander, Abstellraum and "ohne Baugenehmigung". The SERP is thin (FAQ farms,
manufacturers, no Hamburg angle). Generating text from the function means a changed
Richtwert can't leave the FAQ/JSON-LD stale. The Grenze topic is already covered by
`carport-baugenehmigung-hamburg#grenze`; autocomplete for it is dominated by other
Bundesländer, so a new page would only cannibalise — it got a "Grenzbebauung" FAQ
there instead (§ 2 Abs. 7 HBauO: Carports gelten als Garagen).

**Alternatives considered:** Expanding the Maße section on the Doppelcarport page —
rejected, wrong intent and too narrow (1/3 cars, tandem). Hardcoded tables — rejected,
drift risk.

**Consequences:** Changing a Stellplatzbreite/Länge in the lib changes the page copy;
re-read the TlDr wording after such changes. `doppelcarport-kosten#masse` stays as a
short summary that links to the new page.

## 2026-10-14 — "Beste Holz-Terrassenüberdachung" answered as a checklist, title unchanged
**Decision:** `terrassenueberdachung-kosten` gets an H2 `#beste-holz` with a buying
checklist (Kriterium | gute Ausführung | Warnsignal), a Hamburg note on two-leaf clinker
walls, "Bausatz oder Zimmerei?" and a matching FAQ. The page title stays as it is.

**Why:** "beste terrassenüberdachung aus holz kaufen 2026" is the site's top query by
impressions (97 in 28 days, pos 8.2, 0 clicks). The SERP has shops, an affiliate
ranking list and Aroundhome, but no independent test, so an honest "there is no test
winner, here is how to spot a good one" fills the gap and fits the neutral-advice
strategy. The title was left alone so the 2026-11-01 CTR check of the 2026-10-08
changes stays readable. Snow and wind zones are not named on purpose: they could not be
verified from a primary source, so the page asks for load figures "passend zum
Standort" instead.

## 2026-10-14 — `knx-oder-loxone` gives up the "KNX Kosten" queries
**Decision:** The comparison page drops "Kosten" from its title, catalog blurb and cost
H2 ("KNX oder Loxone: Was ist günstiger?"); its link to `knx-smart-home-kosten` now uses
the anchor "KNX-Kosten mit Rechner".

**Why:** GSC (14.09.–12.10.2026) showed both KNX pages ranking for the same cost
queries ("knx kosten", "knx kosten rechner", "knx system kosten", "knx installation
kosten"), each at pos 13–60, while KNX impressions fell 47 %. One intent per page: cost
→ `knx-smart-home-kosten`, comparison → `knx-oder-loxone`. The comparative price
paragraph stays, because "loxone vs knx kosten" is genuinely comparison intent.

**Consequences:** At the 2026-11-01 check, the cost queries should consolidate on
`knx-smart-home-kosten`.

## 2026-10-16 — Google "Preferred Source" as a plain link, not Google's button script
**Decision:** Every Ratgeber page (via `RatgeberArticle`) and the footer link to
`google.com/preferences/source?q=handwerker-niendorf.de` (`PREFERRED_SOURCE_URL` in
`src/lib/site.ts`). It is a plain `<a>` in our own design, not Google's
`publisher.js` button.

**Why:** Google's button loads `news.google.com/swg/js/v1/publisher.js` for every
visitor, which sends their IP to Google before any click and would need consent and
a Datenschutz entry. The deeplink does the same thing and only contacts Google when
someone clicks. Google explicitly allows custom promotion badges. The domain was
checked on 2026-10-16 and is listed in the source-preferences tool. Effect is mainly
the "preferred" badge in AI Overviews / AI Mode for readers who opt in; Top Stories
rarely shows for our queries.

## 2026-11-27 — "Carport bauen lassen" belongs to `carport-bauen-lassen-kosten` only
**Decision:** `carport-oder-garage` and `doppelcarport-kosten` drop the phrase
"bauen lassen" from their price copy, table headers and meta description ("inkl.
Montage" instead). The Doppelcarport page's link to the cost page now uses the same
anchor that carport-oder-garage already had: "Carport bauen lassen: Kosten". The Doppelcarport CTAs ("Doppelcarport … bauen lassen") stay, since
that is the page's own intent.

**Why:** GSC (28.10.–24.11.2026) showed "carport bauen lassen kosten" (80 impr.)
split across three pages, and the comparison page ranked better (pos 16.8) than the
page built for it (23.8). This is the same one-intent-per-page fix as KNX/Loxone
(2026-10-14).

**Consequences:** In the same PR, carport-masse gets "Breite" in its title plus a
`#breite` section, terrassenueberdachung-kosten gets a "Holz am Haus vs.
freistehend" part, and knx-smart-home-kosten gets a Zweifamilienhaus row, all
aimed at page-1 queries that had no clicks. Both new figures were checked against
web sources on 2026-11-27 and are still estimates, not quotes we collected:
- **Freistehend surcharge, 15–25 %.** Several terrace-roof guides (mcterrasse,
  zitberg, mein-terrassendach24) give the same 15–25 %, because a free-standing roof
  needs four posts and foundations instead of two.
- **Zweifamilienhaus range, 15,000–30,000 €.** No source gives a total for this case,
  so the range is extrapolated. elektriker.org (10/2026) gives 60–150 €/m² for a
  single-family house; on 200–250 m² that is about 12,000–37,000 €. A 2017
  knx-user-forum thread (290 m² two-family house) had quotes of 34–50 k€ net
  without programming, which is why the FAQ names "40,000 € and more" for comfort
  setups.

Re-check in GSC around 2026-12-27.

## 2026-11-27: Heat-pump winter package (KfW deadline + daily consumption)
**Decision:**
- `waermepumpe-foerderung#2027` gets a "what does applying later cost" table, with five cases at full eligible costs, before vs. from 01.02.2027.
- The TlDr, a new FAQ and the meta copy say that only the **application date** counts, not installation. `waermepumpe-kosten` repeats this with its own 25,000 € example (1,000 € less).
- `waermepumpe-stromverbrauch` gets a `#pro-tag` section (consumption by outdoor temperature, plus monthly values) and two FAQs. Autocomplete showed "pro tag" (34×), "winter" (25×) and "monat" (9×) as top modifiers the page didn't cover.

**Why:** GSC (28.10.–25.11.2026) shows the heat-pump head terms ("wärmepumpe kosten", "förderung 2026") at pos 40–90, which is national-player turf we don't chase (see the local-dominance strategy). The defensible angles are a dated, honest deadline that portals selling installations frame as "hurry" and we frame as "only the application counts, don't sign a bad offer for it", and the seasonal winter questions.

All KfW figures were checked against the official Merkblatt 458 (valid from 24.09.2026, Stand 09/2026), read as PDF on 2026-11-27:
- Klimabonus 16 %, −4 pp each 01.02./01.08. from 2027.
- First-unit cap 28,000 €, −750 € on the same dates.
- Both keyed to the Antragstellung date.
- 36-month Bewilligungszeitraum.

A Grundförderung cut to 15 % and an "EU bonus", reported by secondary sites, are **not** in the Merkblatt and were left out.

The daily and monthly figures are a stated model rather than measurements:
- Heizlast 8 kW at −10 °C, Heizgrenze 15 °C.
- COP 2.3 to 4.0 linear over −10 to +10 °C.
- Warmwasser 1,000 kWh/yr, Hamburg monthly mean temperatures.
- The heating-only result of ~4,600 kWh/yr matches the page's existing "teilsaniert" row.

**Consequences:** The deadline copy must be removed or re-dated on 2027-02-01. Reminder routine trig_01AidL8AgAUwXYfdY5DYS1ff emails about it.

## 2026-11-27: Direct-answer totals for two queries just off page 1
**Decision:**
- `bad-renovieren-kosten#ohne-fliesen-abschlagen` gets a whole-bathroom worked example (6 m², without removing tiles: about 1,700–4,300 € for surfaces only, about 3,200–7,800 € with new fixtures, national figures with Hamburg at +10–15 %, vs. Teilrenovierung from ~4,200 € and 8,000–18,000 € for a full renovation). The same total also goes into the TlDr and FAQ. Covering is presented as its own tier **below** Teilrenovierung (no tiling or installation work), so the page's "Teilrenovierung ab 700 €/m²" floor stays consistent.
- `balkonkraftwerk#anmeldung` gets an itemised "what registration costs" table, a 1-month deadline note and a paragraph on registering in Hamburg.
- `einfahrt-pflastern-kosten` was deliberately **not** touched.

**Why:** GSC (28.10.–25.11.2026) data per page:
- "bad renovieren ohne fliesen abschlagen kosten" sat at pos 12.9 with 58 impressions, the site's top-impression query. The page listed per-solution prices but never answered the whole-bathroom total.
- "balkonkraftwerk anmelden kosten" sat at pos 11.6 with 30 impressions. The page only said "kostenlos" in passing. Autocomplete added "anmelden hamburg", "pflicht", "zähler" and "marktstammdatenregister".
- Pflaster's 299 impressions come mostly from the national head term at pos 40. Only "…kosten rechner" (4 impressions) was within reach, so it wasn't worth the work.

**Sources:**
- Bathroom figures are sums of the page's own existing unit prices. Only "Silikon/Anschlüsse/Maler 400–1,000 €" (scaled from the page's 8 m² "Maler- & Restarbeiten 500–1,500 €") and "Sanitärobjekte ohne Dusche/Wanne 1,500–3,500 €" are new estimates.
- Balkonkraftwerk facts: the MaStR deadline is one month (§ 95 EnWG).
- The meter swap may not be invoiced (Clearingstelle EEG).
- The price cap for the moderne Messeinrichtung is 25 €/yr gross. It does not apply to a Smart Meter (iMSys), which has higher caps; the page says so, since heat-pump households get one anyway. This comes from BNetzA/Verbraucherzentrale as quoted on 2026-11-27; older pages say 20 €.
- Hamburg needs only the MaStR, with no Netzbetreiber notice unless you want Einspeisevergütung (hamburg.de).

## 2026-11-27: Anonymous first-party usage tracking for calculators and CTAs
**Decision:** We record the funnel per `source` in a new Supabase table `usage_events` (migration `0003`):
- `view`: any part of the tool scrolled into view (IntersectionObserver threshold 0, because a percentage threshold never fires on phones for tall tools).
- `start`: the first changed input.
- `result`: on pagehide, unmount or a hidden tab, only after use; it carries the tool's `details`/`summary` and `estimate`. It is sent again if the config changed since the last `result`, so the final config isn't lost after a tab switch. The page is captured at mount, because on client navigation the URL has already moved on.
- `cta`: any `RequestButton` click, including `CtaBand`. It deliberately carries **no** config or estimate (see Privacy).

The plumbing:
- One client hook, `useCalculatorTracking(request)`, used by all 12 tools.
- A route handler, `POST /api/track`, that validates with Zod.
- A server module, `src/lib/usage-events.ts`.
- A funnel table in `/admin` covering the last 30 days, built from the views `usage_event_counts_30d` and `lead_counts_30d`. Counting happens in SQL, so PostgREST's 1,000-row cap can't truncate it.

**Why:** Leads (2 so far) were the only signal, so we couldn't tell which tools are seen, used or abandoned, or what people calculate. The user chose this over Vercel Web Analytics. It is first-party and stored in the EU, and joinable to leads by `source`. It also stores the chosen tool configuration, and custom events don't need a paid plan.

**Privacy:**
- Nothing is read from or written to the device (no cookies, no storage, no ids), and no IP is stored, so no consent banner is needed.
- Events store only a **date** (`created_on`, no time of day), and `cta` carries no config. Otherwise an event could be matched to a contact submission by timestamp plus identical calculator details. The admin view only shows sums per source.
- The Datenschutz page has a new section, "Anonyme Nutzungsstatistik der Kostenrechner". It promises only what the code guarantees: no identifying data, no merging with leads, sums only.

**Abuse and noise:**
- Only `VERCEL_ENV=production` records, so dev and preview traffic stay out.
- Crawler user agents are dropped by explicit tokens (googlebot, bingbot, …, `bot/`, `bot;`, crawler, spider, headlesschrome, lighthouse), because Googlebot renders JS. A bare "bot" would also hit phones like CUBOT.
- `source` must be in `KNOWN_SOURCES` or end in `-page`.
- Requests a browser marks as `Sec-Fetch-Site` other than same-origin are dropped. A missing header is accepted, because older Safari doesn't send it.
- Bodies over 4 KB (bytes, checked via Content-Length and the encoded length) get 413, invalid ones 400.
- There is no rate limit yet. If someone floods the endpoint, add a Vercel WAF rate-limit rule on `/api/track`.

**Scope vs. CLAUDE.md "no analytics dashboards yet":** The admin view is deliberately one plain table, not a dashboard. The user asked for the data in order to optimise.

**Consequences:** Every new tool must call the hook, which is documented in CLAUDE.md. The raw `config` JSON can be queried later (e.g. "most-calculated carport material") without schema changes. There is no retention job yet; at our scale the table stays small, so revisit at ~100k rows.
