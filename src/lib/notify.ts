/**
 * Server-only lead notifier.
 *
 * Stage 0 of the platform has no email/CRM infrastructure, so a new lead is
 * pushed to a Telegram chat: it's a single HTTPS call (no SDK, no SMTP), it
 * notifies instantly, and the chat history is a durable record — unlike Vercel
 * runtime logs, which expire after ~1h on Hobby.
 *
 * Never import this from a Client Component — TELEGRAM_BOT_TOKEN is a secret.
 */

export type LeadRecord = {
  name: string;
  email: string;
  phone: string | null;
  plz: string;
  ort: string | null;
  zeitraum: string | null;
  service: string | null;
  source: string | null;
  estimate: string | null;
  details: unknown;
  message: string | null;
};

// Telegram caps a sendMessage at 4096 chars; message + details can exceed that.
const MAX_TEXT = 4000;

function formatLead(r: LeadRecord): string {
  const text = [
    "🔧 Neue Anfrage — Handwerk Niendorf",
    "",
    `Name: ${r.name}`,
    `E-Mail: ${r.email}`,
    r.phone && `Telefon: ${r.phone}`,
    `Ort: ${[r.plz, r.ort].filter(Boolean).join(" ")}`,
    r.service && `Leistung: ${r.service}`,
    r.zeitraum && `Zeitraum: ${r.zeitraum}`,
    r.estimate && `Schätzung: ${r.estimate}`,
    r.source && `Quelle: ${r.source}`,
    r.message && `\nNachricht:\n${r.message}`,
    r.details && `\nKonfiguration:\n${JSON.stringify(r.details, null, 2)}`,
  ]
    .filter(Boolean)
    .join("\n");

  return text.length > MAX_TEXT ? `${text.slice(0, MAX_TEXT - 1)}…` : text;
}

/**
 * Best-effort Telegram push. Returns true if Telegram accepted the message.
 * Never throws — the caller decides what to do on false. Plain text (no
 * parse_mode) so arbitrary user input can't break formatting or inject markup.
 */
export async function notifyTelegram(record: LeadRecord): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: formatLead(record),
          disable_web_page_preview: true,
        }),
        signal: controller.signal,
      },
    );
    if (!res.ok) {
      console.error(
        "[lead] Telegram send failed:",
        res.status,
        await res.text().catch(() => ""),
      );
      return false;
    }
    return true;
  } catch (err) {
    console.error(
      "[lead] Telegram error:",
      err instanceof Error ? err.message : err,
    );
    return false;
  } finally {
    clearTimeout(timeout);
  }
}
