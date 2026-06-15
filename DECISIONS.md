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
den Arbeitsanteil (~70 %) → ~14 % aufs Total.

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
