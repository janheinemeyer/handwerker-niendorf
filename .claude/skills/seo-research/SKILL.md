---
name: seo-research
description: Run a structured, free-tools-only SEO research pass BEFORE building or
  reworking a Ratgeber / SEO landing page (src/app/ratgeber/<slug>/). Use whenever the
  task is "build/plan a new Ratgeber page", "rework an existing one for SEO", or the
  user asks for keyword/SERP/competitor research for this site. Produces a research
  brief that maps directly onto the Ratgeber blocks (TlDr, H2 ids, CostTable, Faq) and
  a catalog entry for src/lib/ratgeber.ts.
---

# SEO Research (free tools only)

Goal: a repeatable, zero-cost research pass for a **local Hamburg trades business**
that ends in a concrete page brief. One page = one search intent. For local trades,
**intent precision beats search volume** — a 50/mo keyword with buying intent beats a
50.000/mo generic head term.

## Division of labour

Some steps need a logged-in account and **cannot** be done from here. Do the parts you
can, then explicitly ask the user for the rest and fold their answer back in. Never
fabricate search volumes or Search Console numbers.

**I do automatically** (via WebSearch / WebFetch):
- Phase 1 (seed & intent), Phase 2 discovery (autocomplete-style + question mining),
  Phase 3 (fetch ranking pages, extract structure & content gaps), Phase 4 (full
  on-page mapping), Phase 5a (schema check via the build).

**I ask the user for** (login-gated, don't guess):
- Real search volumes → **Bing Webmaster Tools → Keyword Research** or Google Keyword
  Planner (free Ads account).
- Local community demand (Phase 2) → login-walled Facebook groups / nebenan.de read by
  the user; they paste anonymised themes, I process them. (Competitor Google reviews I
  can fetch myself.)
- Localised Hamburg SERP / Local-Pack reality → quick incognito check with location set.
- Post-launch Search Console queries (the feedback loop in Phase 5c) → paste me the
  Leistungsbericht rows and I'll turn them into the next page's keywords.

State the split at the start of each run so expectations are clear.

## Phase 1 — Seed & intent

- Pin the single primary keyword (usually local-transactional or
  informational-with-buying-intent, e.g. `klimaanlage hamburg kosten`,
  `knx nachrüsten altbau`).
- Classify intent. If two intents fit, that's two pages — say so, don't blend them.
- Check `src/lib/ratgeber.ts`: does a sibling/cluster already cover this? Pick the
  `cluster` the new page belongs to; note which existing pages should cross-link.

## Phase 2 — Keyword & question discovery

- **WebSearch** the seed + variants; harvest autocomplete-style long-tails and
  "People also ask" / "Ähnliche Fragen" phrasings → these become H2 ids and FAQ items.
- **WebFetch** German Q&A sources (gutefrage.net, haustechnikdialog.de, relevant
  subreddits) for real user wording → feeds the TlDr tone and FAQ.
- **Local community demand mining** (highest-intent, hyperlocal signal): real residents
  asking "kennt jemand einen guten <Gewerk> in Niendorf?" reveal which services are most
  in demand, the exact phrasing, and which competitors get recommended / complained
  about → the strongest source for the keyword ranking and content gaps. Sources:
  local Facebook groups, **nebenan.de** (per Stadtteil), **Kleinanzeigen → Gesuche**
  (PLZ 22455/22459), and competitor Google reviews (the 1–3★ ones expose pain points).
  Caveats: Facebook/nebenan.de are login-walled — **WebFetch can't reach them and
  scraping breaks their ToS, so this is a manual read by the user** (see division of
  labour). Competitor Google reviews are public and I can fetch those. Treat it as a
  *demand* signal, not search volume — a small, vocal sample that complements, not
  replaces, the keyword data. **DSGVO: aggregate themes only — no names, no storing or
  reusing individual posts verbatim.**
- Seasonality: note the obvious pattern (Klima ↑ Sommer, Heizung ↑ Winter) — only flag
  if it affects launch timing.
- **Ask the user** to drop real volumes from Bing WMT / Keyword Planner for the top
  5–10 terms; rank the keyword list once they arrive.

## Phase 3 — SERP & competitor analysis (the core of the pre-build rule)

For the primary keyword:
- WebSearch the term; **WebFetch the top 3–5 ranking URLs**.
- For each: who ranks (local betrieb / portal like Aroundhome·Check24 / manufacturer)?
  heading structure? approx word count? do they show a price table? an FAQ? SERP
  features (featured snippet, PAA, images)?
- Synthesise the **content gap**: the minimum this page needs to compete, plus one
  angle the incumbents miss.
- **Ask the user** to confirm the Hamburg Local Pack situation (incognito + location).
  If a Local Pack dominates, flag that Google Business Profile matters more than the
  article for that query.

## Phase 4 — On-page mapping (output)

Translate findings into a brief that drops straight into the Ratgeber blocks:
- **TlDr**: direct answer = primary keyword + concrete number range.
- **H2 ids**: question-shaped, taken from PAA/discovery.
- **CostTable**: include if competitors show prices (snippet opportunity).
- **Faq** (`FaqItem[]`): from PAA + Q&A mining; this also generates the FAQPage JSON-LD.
- **Catalog entry** for `RATGEBER_PAGES`: `href / title / blurb / topic / cluster`.
- **Cross-links**: note same-cluster siblings (handled automatically by the catalog,
  but call it out).

Follow the page skeleton and SEO/GEO conventions in CLAUDE.md ("Authoring a Ratgeber /
SEO page"). Don't hand-roll chrome or JSON-LD — use `@/components/ratgeber`.

## Phase 5 — Verification (after the page is built)

- **5a Schema**: `npm run build`, then sanity-check the rendered FAQPage /
  BreadcrumbList JSON-LD. Optionally point the user to Google's Rich Results Test.
- **5b Performance**: PageSpeed Insights (open API or the web UI) for Core Web Vitals.
- **5c Feedback loop**: after 2–4 weeks the user pastes Search Console queries; turn
  real impressions/queries into the next page's seed (Phase 1) or into refinements of
  this one. This is the only source of *real* on-site keyword data — prioritise it.

## Output format

End every run with a short brief:

```
INTENT: <keyword> — <intent type> — cluster: <cluster>
KEYWORDS: <ranked list; mark which volumes are user-supplied vs. estimated>
SERP: <who ranks, features, content gap, one differentiator>
PAGE PLAN:
  TlDr: <answer + number>
  H2s: <list>
  CostTable: <yes/no + columns>
  FAQ: <questions>
CATALOG: { href, title, blurb, topic, cluster }
OPEN (need user): <volumes / community demand / local pack / GSC — whatever is still login-gated>
```
