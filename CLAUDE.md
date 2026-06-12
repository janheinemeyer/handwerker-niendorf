@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing one-pager for **Handwerk Niendorf**, a (fictional) tradesman/craftsman
business in Hamburg-Niendorf. Single German-language landing page plus a working
contact form that stores submissions in Supabase. Next.js App Router.

## Where this is heading

Current state is a static one-pager + contact form. Direction: a
**lead-generation platform** — the public site captures leads, an **admin
backend** triages them, and qualified leads are **dispatched to third-party
partners**. We build toward that in stages; the contact form is stage 0.

**Build for today's scale, design for tomorrow's shape.** Don't scaffold the
admin backend or dispatch engine before they're needed — but when you add data
access, put it where the platform will want it (see Engineering principles).
Size solutions for a local trades business (hundreds of leads, not millions);
reach for heavy machinery only when a real number demands it.

**What NOT to build yet** (unless explicitly asked): auth / admin UI,
partner-dispatch logic, CRM features, email/SMS automation, analytics
dashboards, payments. Keep each PR scoped to one shippable change.

## Commands

```bash
npm run dev      # dev server (Turbopack) on http://localhost:3000
npm run build    # production build — also runs tsc and prerenders the page
npm run lint     # eslint (flat config via eslint-config-next)
npm start        # serve the production build
```

No test suite. `npm run build` is the verification gate: it type-checks and
statically prerenders `/`, so any render-time error fails the build.

## Architecture

- **Next.js 16, App Router, React 19, Tailwind CSS v4, TypeScript.** Import alias
  `@/*` → `src/*`.
- `src/app/page.tsx` composes the page from section components in
  `src/components/*` (`hero`, `services`, `process`, `about`, `contact`,
  `site-header`, `site-footer`). The page is fully static; only the contact form
  is interactive.
- **Contact flow** (the one piece of real logic):
  - `src/components/contact-form.tsx` — Client Component. `useActionState` +
    `useFormStatus`, posts to the `submitContact` Server Action. Includes a
    visually-hidden honeypot field (`company`).
  - `src/app/actions.ts` — `"use server"`. Validates with **Zod v4** (note the v4
    API: `z.email()`, and `{ error }` not `errorMap`), then inserts via the admin
    client. Returns a `ContactState` used for inline field errors.
  - `src/lib/supabase.ts` — server-only Supabase client built from the
    **service-role key**. Never import from a Client Component; the key must not
    reach the browser.
  - `supabase/migrations/0001_contact_submissions.sql` — the
    `contact_submissions` table. **RLS is on with no policies on purpose**:
    inserts come from the service role (bypasses RLS), so anon/authenticated
    clients cannot touch the table. If you switch to client-side inserts you must
    add an INSERT policy.

## Design system

Industrial / editorial workshop aesthetic — do not introduce generic SaaS styling.

- Theme tokens live in `src/app/globals.css` under `@theme` (Tailwind v4 inline
  theme). Use the semantic color classes: `paper`/`paper-2` (backgrounds),
  `ink`/`ink-soft` (text), `accent` (signal orange), `line`/`line-strong`
  (hairline rules).
- Fonts via `next/font`: **Bricolage Grotesque** (display — `.font-display` /
  `--font-display`) and **Hanken Grotesk** (body — default `font-sans`). Note:
  "Archivo Expanded" is NOT in next/font's catalog; don't reach for it.
- Section pattern: an uppercase `.label` kicker (`NN — Titel`) above a large
  `font-display` headline; sections separated by `border-line-strong`; grids use
  a 1px-gap-on-`bg-line` trick for hairline cell dividers.
- A fixed SVG grain overlay (`body::before`) sits at `z-0`; page content runs at
  `z-10`. Keep new full-bleed sections aware of this stacking.

## Authoring a Ratgeber / SEO page

Keyword/SEO landing pages live at `src/app/ratgeber/<slug>/page.tsx` and are
assembled from reusable blocks in `src/components/ratgeber/` (barrel:
`@/components/ratgeber`). **Don't hand-roll the chrome or JSON-LD — use the
blocks**, so structure, styling and structured data stay consistent.

- `RatgeberArticle` — page shell: header, breadcrumb (+ `BreadcrumbList`
  JSON-LD), `<h1>`, "Aktualisiert" date, footer. Props: `title`, `breadcrumb`
  (`Crumb[]`), `updated`, `children`.
- `Faq` — accordion **and** `FAQPage` JSON-LD generated from the *same* `items`
  array, so schema can never drift from what's shown. Pass `FaqItem[]`.
- `Breadcrumb` — visible trail + `BreadcrumbList` JSON-LD (the shell renders it
  for you).
- `CostTable` (`head`, `rows`), `CtaBand` (`headline`, `text`, optional
  `ctaLabel`/`ctaHref`/`note`), and prose `H2`/`H3`/`P`/`TlDr`.

Minimal page skeleton:

```tsx
import { RatgeberArticle, TlDr, H2, P, CostTable, Faq, type FaqItem } from "@/components/ratgeber";

export const metadata = { title: "…", description: "…", alternates: { canonical: "/ratgeber/<slug>" } };
const faqs: FaqItem[] = [{ q: "…", a: "…" }];

export default function Page() {
  return (
    <RatgeberArticle title={<>…</>} updated="… 2026"
      breadcrumb={[{ name: "Start", href: "/" }, { name: "Ratgeber", href: "/ratgeber" }, { name: "…", href: "/ratgeber/<slug>" }]}>
      <TlDr>Direct answer with the keyword and a concrete number range.</TlDr>
      {/* body: H2/P/CostTable sections */}
      <Faq items={faqs} heading="Häufige Fragen zu …" />
    </RatgeberArticle>
  );
}
```

SEO/GEO conventions: open with a `TlDr` direct answer (keyword + number), use
question-shaped `H2` ids, include machine-readable `CostTable`s, and always a
`Faq`. A page-specific interactive widget (e.g. the carport
`CarportCalculator`) is a separate Client Component dropped into the body.

## Workflow

This repo takes outside contributions via **forks** (see `CONTRIBUTING.md`).
Whether you push branches here or open PRs from a fork, the rules are the same:

- **Never commit to `main`.** All changes land via pull request, reviewed before
  merge.
- **Branch from `main`**, one feature per branch / PR. Don't branch off another
  feature branch.
- **`npm run build` is the verification gate** — it type-checks and prerenders
  `/`, so any render-time error fails it. A task is not done while the build is
  red. The build needs **no secrets** (the Supabase client is constructed lazily
  at request time), so CI and fork PRs build cleanly without env vars.
- Match the existing style; keep the diff traceable to the stated task — no
  drive-by refactors. The PR template's checklist is the post-coding gate.
- Record non-obvious choices in `DECISIONS.md` in the same PR.

## Engineering principles

Ported, right-sized, from the eas-guardians playbook. The goal is safe long-term
iteration by both humans and AI agents as this grows into a platform.

1. **No business logic in components.** Components render and capture intent.
   Decisions (what a lead's status means, validation, dispatch rules) live in
   `src/lib/` functions and Server Actions. A conditional on a domain concept in
   a component belongs in `lib/`.
2. **Data access goes through `src/lib/`.** As the platform grows, queries live
   in `src/lib/` modules that return typed objects — components never touch a
   Supabase client. (`src/lib/supabase.ts` is the first such module.)
3. **The service-role key is server-only.** Never import `src/lib/supabase.ts`
   from a Client Component. RLS stays on with no policies; writes go through the
   server.
4. **Reuse the blocks; don't hand-roll.** Ratgeber pages compose
   `@/components/ratgeber`; new sections follow the design-system patterns. Don't
   duplicate chrome, JSON-LD, or styling.
5. **Avoid premature abstraction.** Don't generalize until 3+ real cases share a
   shape. Duplication is cheaper than the wrong abstraction.
6. **Optimize for maintainability.** Explicit names, predictable flow, low
   cognitive load, no clever indirection — a future contributor or AI agent
   should understand a file without tribal knowledge.

## Environment

Copy `.env.local.example` → `.env.local` and set `SUPABASE_URL` +
`SUPABASE_SERVICE_ROLE_KEY`. Without them the form renders and validates but the
Server Action returns a "Dienst nicht erreichbar" error instead of storing. Apply
the migration in `supabase/migrations/` to the target project before expecting
inserts to succeed.

## Content note

Phone, email, address, stats, and the "since 2009 / 15+ years" figures are
placeholders — replace before any real launch. Impressum/Datenschutz footer links
are stubs (`#`); German sites legally require both.
