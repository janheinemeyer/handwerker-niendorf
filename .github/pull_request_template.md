## What & why

<!-- One or two sentences. What does this PR change, and why? -->

## Checklist

- [ ] `npm run build` passes locally (type-check + prerender — the verification gate)
- [ ] `npm run lint` is clean
- [ ] Scope is focused: the diff only contains changes traceable to this PR's stated task (no drive-by refactors)
- [ ] Follows the design system and reuses existing components/blocks (no hand-rolled chrome or JSON-LD) — see `CLAUDE.md`
- [ ] Service-role key stays server-only; no secrets or `src/lib/supabase.ts` imports reached a Client Component
- [ ] Branched from `main`, one feature in this PR

## Docs

<!-- Pick one: -->
<!-- - `DECISIONS.md` updated for the non-obvious choice in this PR -->
<!-- - `CLAUDE.md` updated (architecture / convention changed) -->
<!-- - Docs: none — <one-line reason> -->

## Notes for the reviewer

<!-- Anything to look at closely, open questions, or follow-ups. -->
