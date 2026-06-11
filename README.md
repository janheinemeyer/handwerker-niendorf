# Handwerk Niendorf

Marketing one-pager for a tradesman/craftsman business in Hamburg-Niendorf —
German-language landing page with a working contact form that stores submissions
in Supabase.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in your Supabase values
npm run dev                         # http://localhost:3000
```

The page renders without any configuration. The contact form only **stores**
submissions once Supabase is configured (see below); until then it validates
input and returns a friendly "service unavailable" message on submit.

## Supabase setup

The contact form writes to a `contact_submissions` table from the server using
the service-role key.

1. Create (or pick) a Supabase project.
2. Apply the migration in `supabase/migrations/0001_contact_submissions.sql`
   — e.g. paste it into the Supabase SQL editor, or run `supabase db push` if
   you use the CLI.
3. Set the env vars in `.env.local`:
   - `SUPABASE_URL` — `https://<project-ref>.supabase.co`
   - `SUPABASE_SERVICE_ROLE_KEY` — from Project Settings → API
4. Restart `npm run dev`. Submissions now land in `contact_submissions`.

> The table has Row Level Security enabled with **no policies**: only the
> service role (server-side) can write to it. Don't expose the service-role key
> to the browser.

## Scripts

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Dev server with Turbopack                            |
| `npm run build` | Production build (type-checks + prerenders the page) |
| `npm run lint`  | ESLint                                               |
| `npm start`     | Serve the production build                           |

## Before launch

Phone, email, address, statistics and date figures are placeholders. The
Impressum and Datenschutz footer links are stubs — German sites legally require
both before going live.

## Deploy

Deploys cleanly to Vercel. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` as
Environment Variables in the Vercel project before deploying.
