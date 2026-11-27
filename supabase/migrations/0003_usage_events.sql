-- Anonymous usage events for the calculators/tools and request CTAs, so we can
-- see the funnel (seen → used → CTA clicked → lead) per `source`. `source` uses
-- the same values as contact_submissions.source (e.g. "carport-calculator",
-- "bad-page"), so events and leads can be joined.
--
-- No personal data: no IP, no user/session id, no cookies. `config` holds the
-- tool settings a visitor chose (e.g. material, size), never form input.

create table if not exists public.usage_events (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  source     text not null,
  event      text not null check (event in ('view', 'start', 'result', 'cta')),
  page       text,
  estimate   text,
  config     jsonb
);

create index if not exists usage_events_created_at_idx
  on public.usage_events (created_at desc);

-- Same lock-down as contact_submissions: RLS on, no policies. Writes and reads
-- go through the server with the service role only.
alter table public.usage_events enable row level security;

-- Aggregated counts for the admin funnel. security_invoker keeps the view from
-- bypassing RLS for anon/authenticated callers.
create or replace view public.usage_event_counts_30d
  with (security_invoker = true) as
select source, event, count(*)::int as n
from public.usage_events
where created_at > now() - interval '30 days'
group by source, event;
