import type { Metadata } from "next";
import Link from "next/link";
import { RatgeberArticle, P } from "@/components/ratgeber";

export const metadata: Metadata = {
  title: "Ratgeber · Kosten & Tipps rund ums Handwerk",
  description:
    "Ehrliche Kostenüberblicke und Tipps rund um Ihr Handwerksprojekt – mit Rechnern und konkreten Preisen für Hamburg und Umgebung.",
  alternates: { canonical: "/ratgeber" },
};

const articles = [
  {
    href: "/ratgeber/carport-bauen-lassen-kosten",
    title: "Carport bauen lassen: Kosten 2026",
    desc: "Preise nach Typ, Material und Aufbau – mit Kostenrechner, Tabellen und FAQ.",
  },
  {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Terrassenüberdachung: Kosten 2026",
    desc: "Preise nach Größe, Material und Montage – mit Kostenrechner, Tabellen und FAQ.",
  },
  {
    href: "/ratgeber/wallbox-installieren-kosten",
    title: "Wallbox installieren lassen: Kosten 2026",
    desc: "Preise für Gerät, Elektriker und Kabelweg – mit Kostenrechner, Förderung und Anmeldung.",
  },
];

export default function RatgeberIndex() {
  return (
    <RatgeberArticle
      title="Ratgeber"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
      ]}
    >
      <P>
        Ehrliche Kostenüberblicke und Tipps rund um Ihr Handwerksprojekt – mit
        Rechnern und konkreten Preisen für Hamburg und Umgebung.
      </P>

      <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
        {articles.map((a) => (
          <li key={a.href} className="flex">
            <Link
              href={a.href}
              className="group flex flex-col bg-paper p-7 transition-colors hover:bg-paper-2"
            >
              <h2 className="font-display text-xl font-bold leading-tight">
                {a.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {a.desc}
              </p>
              <span className="label mt-6 inline-flex items-center gap-2 text-accent">
                Mehr erfahren
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </RatgeberArticle>
  );
}
