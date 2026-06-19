import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/site";

// Default social-share / SERP card image for the whole site. Next.js wires this
// up as og:image (and twitter:image) automatically for every route that doesn't
// declare its own. Industrial/editorial look matching the design system, set in
// the brand display font (Bricolage Grotesque). Fonts are loaded via
// `fetch(new URL(...))` so Turbopack traces and bundles the TTFs (no network at
// render time, and no module-scope fs read that would break page prerendering).
export const alt = "Handwerk Niendorf – geprüfte Handwerksbetriebe in Hamburg finden";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#efe9dc";
const INK = "#17140d";
const INK_SOFT = "#46402f";
const ACCENT = "#d9430b";

export default async function OpengraphImage() {
  const extraBold = readFileSync(
    fileURLToPath(new URL("./_og/BricolageGrotesque-ExtraBold.ttf", import.meta.url)),
  );
  const medium = readFileSync(
    fileURLToPath(new URL("./_og/BricolageGrotesque-Medium.ttf", import.meta.url)),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          fontFamily: "Bricolage Grotesque",
          borderLeft: `16px solid ${ACCENT}`,
        }}
      >
        <div
          style={{
            display: "flex",
            color: ACCENT,
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Handwerk · Hamburg-Niendorf
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 110,
              fontWeight: 800,
              color: INK,
              lineHeight: 1.0,
              letterSpacing: -3,
            }}
          >
            {BUSINESS.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 40,
              fontWeight: 500,
              color: INK_SOFT,
              maxWidth: 880,
              lineHeight: 1.25,
            }}
          >
            Geprüfte Handwerksbetriebe finden – kostenlos &amp; unverbindlich.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${INK}`,
            paddingTop: 28,
            fontSize: 30,
            color: INK,
          }}
        >
          <div style={{ display: "flex", fontWeight: 800 }}>
            handwerker-niendorf.de
          </div>
          <div style={{ display: "flex", fontWeight: 500, color: INK_SOFT }}>
            Niendorf · Eimsbüttel · ganz Hamburg
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage Grotesque", data: extraBold, weight: 800, style: "normal" },
        { name: "Bricolage Grotesque", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
