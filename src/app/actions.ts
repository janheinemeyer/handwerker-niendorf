"use server";

import { z } from "zod";
import { createAdminClient } from "@/lib/supabase";

const schema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an."),
  email: z.email("Bitte geben Sie eine gültige E-Mail an."),
  phone: z.string().trim().max(40).optional(),
  plz: z
    .string()
    .trim()
    .regex(/^\d{5}$/, "Bitte geben Sie eine gültige PLZ an (5 Ziffern)."),
  ort: z.string().trim().max(80).optional(),
  zeitraum: z.string().trim().max(80).optional(),
  service: z.string().trim().max(80).optional(),
  source: z.string().trim().max(80).optional(),
  estimate: z.string().trim().max(80).optional(),
  details: z.string().max(4000).optional(),
  message: z.string().trim().max(4000).optional(),
  consent: z.literal("on", {
    error: "Bitte stimmen Sie der Datenverarbeitung zu.",
  }),
}).superRefine((data, ctx) => {
  // Calculator requests carry structured `details`; for those the message may
  // be empty. Generic/homepage requests have no details, so require a short
  // description — otherwise the lead is just contact data + a broad service.
  if (!data.details && (data.message?.length ?? 0) < 10) {
    ctx.addIssue({
      code: "custom",
      path: ["message"],
      message: "Bitte beschreiben Sie kurz Ihr Vorhaben (min. 10 Zeichen).",
    });
  }
});

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: silently accept bot submissions without storing them.
  if (formData.get("company")) {
    return { ok: true, message: "Danke! Ihre Anfrage ist eingegangen." };
  }

  const parsed = schema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      errors[key] ??= issue.message;
    }
    return { ok: false, message: "Bitte prüfen Sie Ihre Eingaben.", errors };
  }

  const { name, email, phone, plz, ort, zeitraum, service, source, estimate, details, message } =
    parsed.data;

  // `details` is a JSON string from the calculator; parse it defensively.
  let detailsJson: unknown = null;
  if (details) {
    try {
      detailsJson = JSON.parse(details);
    } catch {
      detailsJson = null;
    }
  }

  const record = {
    name,
    email,
    phone: phone || null,
    plz,
    ort: ort || null,
    zeitraum: zeitraum || null,
    service: service || null,
    source: source || null,
    estimate: estimate || null,
    details: detailsJson,
    message: message || null,
  };

  // Source of truth for now: log the lead so it lands in the server (Vercel)
  // function logs — no email or database infrastructure required. Search the
  // logs for "[lead]".
  console.log(
    "[lead] Neue Anfrage:",
    JSON.stringify({ receivedAt: new Date().toISOString(), ...record }),
  );

  // Best-effort persistence: also store in Supabase if it's configured, but
  // never fail the submission because of it — the log above already captured
  // the lead. Bound the request so a stalled Supabase (outage/network) can't
  // keep the Server Action pending until the platform kills it.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);
  try {
    const supabase = createAdminClient();
    const { error } = await supabase
      .from("contact_submissions")
      .insert(record)
      .abortSignal(controller.signal);
    if (error) console.error("[lead] Supabase insert failed:", error.message);
  } catch (err) {
    console.warn(
      "[lead] Nicht in Supabase gespeichert (nur Log):",
      err instanceof Error ? err.message : err,
    );
  } finally {
    clearTimeout(timeout);
  }

  return {
    ok: true,
    message:
      "Danke! Ihre Anfrage ist eingegangen — wir melden uns binnen 24 Stunden.",
  };
}
