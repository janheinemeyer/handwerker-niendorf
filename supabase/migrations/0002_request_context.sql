-- Extend contact_submissions to carry request context: which page/CTA the lead
-- came from, the location (for routing to local providers), the desired
-- timeframe, the calculator's estimate, and its raw config as JSON.
-- The message is now optional (a calculator config already describes the job).

alter table public.contact_submissions
  alter column message drop not null;

alter table public.contact_submissions
  add column if not exists source   text,
  add column if not exists plz      text,
  add column if not exists ort      text,
  add column if not exists zeitraum text,
  add column if not exists estimate text,
  add column if not exists details  jsonb;

-- RLS unchanged: inserts still happen only via the service role (see
-- src/lib/supabase.ts); anon/authenticated remain denied by default.
