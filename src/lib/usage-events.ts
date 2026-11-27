import { z } from "zod";
import { createAdminClient } from "@/lib/supabase";

/**
 * Anonymous usage events for calculators/tools and request CTAs (server side).
 *
 * Funnel per `source` (same values as contact_submissions.source):
 * - view:   the tool scrolled into view
 * - start:  the visitor changed a first input
 * - result: on leaving the page after using the tool, with the chosen config
 * - cta:    a request button was clicked (tools and CtaBand)
 *
 * No IP, no ids, no cookies. Never import from a Client Component.
 */

export const USAGE_EVENTS = ["view", "start", "result", "cta"] as const;
export type UsageEventName = (typeof USAGE_EVENTS)[number];

/**
 * Accepted sources: the interactive tools (their `request.source`) plus CTA
 * sources that don't follow the "-page" pattern. Add new tools here.
 */
const KNOWN_SOURCES = [
  "carport-bebauungsplan-checkliste",
  "bad-calculator",
  "carport-calculator",
  "carport-genehmigung-pruefer",
  "carport-masse-rechner",
  "einfahrt-calculator",
  "gastro-terrassen-calculator",
  "knx-kosten-rechner",
  "knx-loxone-entscheidungshilfe",
  "terrassen-calculator",
  "wallbox-calculator",
  "wintergarten-calculator",
  "wohnung-streichen-calculator",
] as const;

/** A known source, or a page CTA (CtaBand sources end in "-page"). */
const isKnownSource = (s: string) =>
  (KNOWN_SOURCES as readonly string[]).includes(s) || /^[a-z0-9-]{2,60}-page$/.test(s);

export const usageEventSchema = z.object({
  source: z.string().refine(isKnownSource),
  event: z.enum(USAGE_EVENTS),
  page: z.string().regex(/^\/[a-z0-9\-/]{0,200}$/),
  estimate: z.string().max(80).optional(),
  config: z.record(z.string(), z.unknown()).optional(),
});

export type UsageEvent = z.infer<typeof usageEventSchema>;

/** Best-effort insert, bounded at 3s. Never throws. */
export async function recordUsageEvent(event: UsageEvent): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);
  try {
    const supabase = createAdminClient();
    const { error } = await supabase
      .from("usage_events")
      .insert(event)
      .abortSignal(controller.signal);
    if (error) console.error("[usage] Supabase insert failed:", error.message);
  } catch (err) {
    console.warn(
      "[usage] Event nicht gespeichert:",
      err instanceof Error ? err.message : err,
    );
  } finally {
    clearTimeout(timeout);
  }
}

export type FunnelRow = Record<UsageEventName, number> & {
  source: string;
  leads: number;
};

/** Last 30 days per source: event counts plus leads from contact_submissions. */
export async function getUsageFunnel(): Promise<FunnelRow[]> {
  const supabase = createAdminClient();

  const [counts, leads] = await Promise.all([
    supabase.from("usage_event_counts_30d").select("source, event, n"),
    supabase.from("lead_counts_30d").select("source, n"),
  ]);
  if (counts.error) throw new Error(counts.error.message);
  if (leads.error) throw new Error(leads.error.message);

  const rows = new Map<string, FunnelRow>();
  const row = (source: string) => {
    let r = rows.get(source);
    if (!r) {
      r = { source, view: 0, start: 0, result: 0, cta: 0, leads: 0 };
      rows.set(source, r);
    }
    return r;
  };

  for (const c of counts.data as { source: string; event: UsageEventName; n: number }[]) {
    row(c.source)[c.event] = c.n;
  }
  for (const l of leads.data as { source: string; n: number }[]) {
    row(l.source).leads = l.n;
  }

  return [...rows.values()].sort(
    (a, b) => b.view - a.view || b.cta - a.cta || b.leads - a.leads,
  );
}
