# Cleanup backlog

Known cleanups deferred to keep PRs scoped. Each item: what, where, why deferred.
Pick these up in their own focused PRs — not as drive-bys. Newest first.

---

## 2026-06-14 — Terrassenüberdachung page repeats the Hamburg "30 m²" claim

**What:** `terrassenueberdachung-kosten/page.tsx` (FAQ ~line 48 and Genehmigung
section ~line 176) says "auch in Hamburg … häufig rund 30 m²" — the same wrong
pattern just fixed on the carport cost page (now § 61 HBauO, 50 m² / 3 m je
Hauptgebäude). For an überdachte Terrasse the Hamburg verfahrensfrei rule is its
own case and is **not** automatically the carport/garage 50-m² figure.

**Fix:** Verify the correct current Hamburg rule for überdachte Terrassen/Freisitze,
then correct both spots — and link to a Terrassenüberdachung-Genehmigung page if
one gets built. Don't reuse the 50 m² carport number blindly.

**Why deferred:** Different structure with an uncertain figure; out of scope for
the carport 30 m² fix, and not worth guessing a number on a legal page.

## 2026-06-13 — Extract a shared `<Ul>` prose primitive for Ratgeber lists

**What:** The inline bullet-list className
`mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]` is
repeated ~10× across 7 ratgeber pages (`grep -rn 'list-style:disc' src/app/ratgeber`).
Now well past rule-of-3.

**Fix:** Add a `Ul`/`List` primitive to `@/components/ratgeber` (next to
`H2`/`P`/`TlDr`) and replace the inline lists.

**Why deferred:** Extraction touches 7 existing pages — a cross-cutting refactor
that doesn't belong in a single new-page PR. New pages should match the current
inline convention until this lands.

## 2026-06-13 — Missing `.claude/agents/lean-reviewer.md`

**What:** The Stop hook references `.claude/agents/lean-reviewer.md` for a
lean-code review, but the file (and `.claude/agents/`) doesn't exist. Reviews fall
back to `CLAUDE.md`'s lean principles.

**Fix:** Either add the agent file with the intended lean criteria, or update the
hook to point at the real source of those criteria.

**Why deferred:** Tooling/config, unrelated to page content.

## 2026-06-13 — CtaBand `source` tag naming (minor)

**What:** On `carport-baugenehmigung-hamburg`, `CtaBand source="carport-genehmigung-page"`
while the route slug is `carport-bau​genehmigung-hamburg` (genehmigung vs baugenehmigung).
Cosmetic inconsistency in the analytics tag.

**Fix:** Align to `carport-baugenehmigung-page` if/when lead-source tags get
normalised. Harmless free-text; lowest priority.
