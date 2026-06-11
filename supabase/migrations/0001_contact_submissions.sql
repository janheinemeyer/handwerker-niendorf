-- Contact form submissions for the Handwerk Niendorf marketing site.
-- Inserts happen server-side via the service-role key (see src/lib/supabase.ts),
-- so RLS is enabled with NO public policies: the table is invisible to anon/auth
-- clients and only reachable from trusted server code.

create table if not exists public.contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  phone       text,
  service     text,
  message     text not null,
  status      text not null default 'new'
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

alter table public.contact_submissions enable row level security;

-- No policies are defined on purpose. The service role bypasses RLS; everyone
-- else (anon, authenticated) is denied by default.
