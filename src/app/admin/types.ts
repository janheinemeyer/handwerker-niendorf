export type LeadStatus = "new" | "in_progress" | "done";

export type Lead = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  plz: string | null;
  ort: string | null;
  zeitraum: string | null;
  service: string | null;
  source: string | null;
  estimate: string | null;
  details: Record<string, unknown> | null;
  message: string | null;
  status: string | null;
};

export type LoginState = { error?: string };

export const STATUS_LABEL: Record<LeadStatus, string> = {
  new: "Neu",
  in_progress: "In Bearbeitung",
  done: "Erledigt",
};
