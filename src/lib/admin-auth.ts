/*
  Admin session: a signed, expiring token stored in an httpOnly cookie.
  Uses Web Crypto (HMAC-SHA256, hex output) so the same code runs in middleware
  (edge) and in server actions. Server-only — never import from a Client
  Component (it reads ADMIN_SESSION_SECRET).
*/

export const SESSION_COOKIE = "hn_admin";
const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
export const SESSION_MAX_AGE = MAX_AGE_MS / 1000;

const encoder = new TextEncoder();

async function hmacHex(data: string): Promise<string> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET ist nicht gesetzt.");
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

/** A token of the form `<expiryMs>.<hmac>`. */
export async function createSession(): Promise<string> {
  const exp = String(Date.now() + MAX_AGE_MS);
  return `${exp}.${await hmacHex(exp)}`;
}

export async function isValidSession(token?: string | null): Promise<boolean> {
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot < 0) return false;
  const exp = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expMs = Number(exp);
  if (!Number.isFinite(expMs) || Date.now() > expMs) return false;
  try {
    return timingSafeEqual(sig, await hmacHex(exp));
  } catch {
    return false;
  }
}
