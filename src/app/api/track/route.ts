import { recordUsageEvent, usageEventSchema } from "@/lib/usage-events";

// Crawlers that render JS (e.g. Googlebot) must not count as usage. Match
// crawler tokens, not a bare "bot" (real phones like "CUBOT X50" contain it).
const BOT_UA =
  /googlebot|bingbot|yandexbot|duckduckbot|applebot|petalbot|ahrefsbot|semrushbot|gptbot|claudebot|bot\/|bot;|crawler|spider|slurp|headlesschrome|lighthouse/i;
const MAX_BYTES = 4096;

const status = (code: number) => new Response(null, { status: code });

/**
 * Receives anonymous usage events (sent via navigator.sendBeacon). Only
 * production deployments record, so local dev and previews don't pollute the
 * data. Only same-origin browser requests count. Always answers fast; storage
 * is best-effort.
 */
export async function POST(request: Request) {
  if (process.env.VERCEL_ENV !== "production") return status(204);
  if (BOT_UA.test(request.headers.get("user-agent") ?? "")) return status(204);

  // Drop requests a browser marks as coming from another site. (Older Safari
  // sends no Sec-Fetch-Site at all, so a missing header is still accepted;
  // the source whitelist is the main guard.)
  const site = request.headers.get("sec-fetch-site");
  if (site && site !== "same-origin") return status(204);

  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > MAX_BYTES) return status(413);

  const body = await request.text();
  if (new TextEncoder().encode(body).length > MAX_BYTES) return status(413);

  let json: unknown;
  try {
    json = JSON.parse(body);
  } catch {
    return status(400);
  }

  const parsed = usageEventSchema.safeParse(json);
  if (!parsed.success) return status(400);

  await recordUsageEvent(parsed.data);
  return status(204);
}
