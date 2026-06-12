# Contributing

Thanks for working on Handwerk Niendorf. This project is moving from a marketing
one-pager toward a lead-generation platform, and takes contributions via **GitHub
forks**. This guide is the workflow; the rules behind it live in `CLAUDE.md`
(Workflow + Engineering principles) and `DECISIONS.md`.

## The model in one line

**Fork → branch → build → PR into `janheinemeyer/handwerker-niendorf:main` → review → squash-merge.**

Nobody — human or AI — commits to `main` directly.

## First-time setup (fork workflow)

```bash
# 1. Fork the repo on GitHub (button, top-right), then clone YOUR fork:
git clone git@github.com:<your-username>/handwerker-niendorf.git
cd handwerker-niendorf

# 2. Add the upstream repo so you can stay in sync:
git remote add upstream git@github.com:janheinemeyer/handwerker-niendorf.git

# 3. Install and run:
npm install
cp .env.local.example .env.local   # optional — only needed to STORE contact submissions
npm run dev                         # http://localhost:3000
```

You do **not** need Supabase keys to develop the site or to build. The page is
fully static; the contact form only stores submissions once `SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY` are set. Without them the form still renders and
validates.

## Working on a change

```bash
# Always start from up-to-date upstream main:
git fetch upstream
git checkout -b feat/short-description upstream/main

# ... make your change ...

npm run lint
npm run build      # the verification gate — must pass before you open a PR
```

- **One feature per branch and PR.** Don't branch off another feature branch.
- **Keep the diff focused** — only changes traceable to the task. No drive-by
  refactors or reformatting.
- **Follow the design system and component conventions** in `CLAUDE.md` — reuse
  the Ratgeber blocks, don't hand-roll chrome or JSON-LD.
- **Record non-obvious choices** in `DECISIONS.md` in the same PR.

## Opening the PR

```bash
git push origin feat/short-description
```

Then open a pull request from your fork's branch into
`janheinemeyer/handwerker-niendorf:main`. The PR template's checklist is the
post-coding gate — fill it in honestly.

### What happens in CI

- **`CI` workflow** (`npm run lint` + `npm run build`) runs on every PR, including
  fork PRs. It needs no secrets, so it works from a fork.
- The build prerenders `/`; a render-time or type error fails it. Run
  `npm run lint && npm run build` green locally first.
- **Note on `@claude`:** the Claude Code action is triggered by comment and
  review events, which run in **this** repository — where
  `CLAUDE_CODE_OAUTH_TOKEN` lives — so it works on fork PRs too. It only runs
  when the commenter has write access here: an external contributor's own
  `@claude` mention is ignored, but a **maintainer** can comment `@claude` on a
  fork PR to invoke it.

## Keeping your fork in sync

```bash
git fetch upstream
git checkout main
git merge --ff-only upstream/main
git push origin main
```

Rebase your feature branch onto fresh `upstream/main` if it falls behind:

```bash
git fetch upstream
git rebase upstream/main
git push --force-with-lease
```

## Review & merge

- A maintainer reviews and squash-merges (keeps `main` linear).
- Address review comments by pushing more commits to the same branch.
- When in doubt about product intent, domain meaning, or a tradeoff, ask in the
  PR before guessing.
