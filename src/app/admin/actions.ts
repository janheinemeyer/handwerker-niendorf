"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  createSession,
  isValidSession,
  SESSION_COOKIE,
  SESSION_MAX_AGE,
} from "@/lib/admin-auth";
import { createAdminClient } from "@/lib/supabase";
import type { LeadStatus, LoginState } from "./types";

// Best-effort, in-memory login throttle. Per server instance (serverless
// instances are ephemeral), so it's a speed bump against brute force, not a
// hard guarantee — pair it with a strong ADMIN_PASSWORD.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

function isLocked(ip: string): boolean {
  const entry = attempts.get(ip);
  if (!entry || Date.now() > entry.resetAt) return false;
  return entry.count >= MAX_ATTEMPTS;
}

function recordFailure(ip: string) {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else {
    entry.count += 1;
  }
}

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || !process.env.ADMIN_SESSION_SECRET) {
    return {
      error:
        "Admin-Zugang ist nicht vollständig konfiguriert (ADMIN_PASSWORD / ADMIN_SESSION_SECRET).",
    };
  }

  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (isLocked(ip)) {
    return { error: "Zu viele Versuche. Bitte später erneut versuchen." };
  }
  if (password !== expected) {
    recordFailure(ip);
    return { error: "Falsches Passwort." };
  }

  attempts.delete(ip);
  const token = await createSession();
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/admin/login");
}

const STATUSES: LeadStatus[] = ["new", "in_progress", "done"];

export type UpdateResult = { ok: boolean };

export async function updateLeadStatus(
  id: string,
  status: string,
): Promise<UpdateResult> {
  // Server Actions are independently callable endpoints — authenticate here,
  // not only via the page middleware.
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!(await isValidSession(token))) return { ok: false };
  if (!STATUSES.includes(status as LeadStatus)) return { ok: false };

  try {
    const supabase = createAdminClient();
    const { error } = await supabase
      .from("contact_submissions")
      .update({ status })
      .eq("id", id);
    if (error) {
      console.error("[admin] status update failed:", error.message);
      return { ok: false };
    }
  } catch (err) {
    console.error(
      "[admin] status update error:",
      err instanceof Error ? err.message : err,
    );
    return { ok: false };
  }

  revalidatePath("/admin");
  return { ok: true };
}
