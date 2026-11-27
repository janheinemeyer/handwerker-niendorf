import { recordUsageEvent, usageEventSchema } from "@/lib/usage-events";

// Crawlers that render JS (e.g. Googlebot) must not count as usage.
const BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse/i;
const MAX_BODY = 4000;

const noContent = () => new Response(null, { status: 204 });

/**
 * Receives anonymous usage events (sent via navigator.sendBeacon). Only
 * production deployments record, so local dev and previews don't pollute the
 * data. Always answers fast; storage is best-effort.
 */
export async function POST(request: Request) {
  if (process.env.VERCEL_ENV !== "production") return noContent();
  if (BOT_UA.test(request.headers.get("user-agent") ?? "")) return noContent();

  const body = await request.text();
  if (body.length > MAX_BODY) return new Response(null, { status: 413 });

  let json: unknown;
  try {
    json = JSON.parse(body);
  } catch {
    return new Response(null, { status: 400 });
  }

  const parsed = usageEventSchema.safeParse(json);
  if (!parsed.success) return new Response(null, { status: 400 });

  await recordUsageEvent(parsed.data);
  return noContent();
}
