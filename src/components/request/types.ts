/** Context carried from a CTA/calculator into the request form. */
export type RequestPrefill = {
  service?: string;
  source?: string;
  summary?: string;
  estimate?: string;
  details?: Record<string, unknown>;
};
