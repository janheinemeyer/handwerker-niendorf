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
