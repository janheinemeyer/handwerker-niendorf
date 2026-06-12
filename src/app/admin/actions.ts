"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  createSession,
  SESSION_COOKIE,
  SESSION_MAX_AGE,
} from "@/lib/admin-auth";
import { createAdminClient } from "@/lib/supabase";
import type { LeadStatus, LoginState } from "./types";

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    return { error: "Admin-Zugang ist nicht konfiguriert (ADMIN_PASSWORD fehlt)." };
  }
  if (password !== expected) {
    return { error: "Falsches Passwort." };
  }

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

export async function updateLeadStatus(id: string, status: string) {
  if (!STATUSES.includes(status as LeadStatus)) return;
  const supabase = createAdminClient();
  await supabase.from("contact_submissions").update({ status }).eq("id", id);
  revalidatePath("/admin");
}
