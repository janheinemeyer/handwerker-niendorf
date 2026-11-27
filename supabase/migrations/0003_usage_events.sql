-- Anonymous usage events for the calculators/tools and request CTAs, so we can
-- see the funnel (seen → used → CTA clicked → lead) per `source`. `source` uses
-- the same values as contact_submissions.source (e.g. "carport-calculator",
-- "bad-page"), so funnel counts and lead counts line up.
--
-- No personal data: no IP, no user/session id, no cookies. `config` holds the
-- tool settings a visitor chose (e.g. material, size), never form input. The
-- date is stored per day only (no time of day), so an event can't be matched
-- to a contact submission by its timestamp.

create table if not exists public.usage_events (
  id         bigint generated always as identity primary key,
  created_on date not null default current_date,
  source     text not null,
  event      text not null check (event in ('view', 'start', 'result', 'cta')),
  page       text,
  estimate   text,
  config     jsonb
);

create index if not exists usage_events_created_on_idx
  on public.usage_events (created_on desc);

-- Same lock-down as contact_submissions: RLS on, no policies. Writes and reads
-- go through the server with the service role only.
alter table public.usage_events enable row level security;

-- Aggregated counts for the admin funnel (last 30 days). security_invoker
-- keeps the views from bypassing RLS for anon/authenticated callers. Counting
-- in SQL avoids PostgREST's row cap on raw selects.
create or replace view public.usage_event_counts_30d
  with (security_invoker = true) as
select source, event, count(*)::int as n
from public.usage_events
where created_on > current_date - 30
group by source, event;

create or replace view public.lead_counts_30d
  with (security_invoker = true) as
select source, count(*)::int as n
from public.contact_submissions
where created_at > now() - interval '30 days' and source is not null
group by source;
