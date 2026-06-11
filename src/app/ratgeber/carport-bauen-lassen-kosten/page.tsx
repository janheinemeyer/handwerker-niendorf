import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Carport bauen lassen: Kosten 2026 (Preise, Tabellen & Rechner)",
  description:
    "Was kostet es, ein Carport bauen zu lassen? Aktuelle Preise 2026 nach Größe, Material und Aufbau – mit Kostentabellen, Spartipps und kostenlosem Angebotsvergleich für Hamburg und Umgebung.",
  alternates: { canonical: "/ratgeber/carport-bauen-lassen-kosten" },
  openGraph: {
    title: "Carport bauen lassen: Kosten 2026 im Überblick",
    description:
      "Preise nach Typ, Material und Aufbau – mit Kostentabellen, Spartipps und Rechner.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs = [
  {
    q: "Was kostet es, ein Carport bauen zu lassen?",
    a: "Ein Carport bauen zu lassen kostet 2026 je nach Größe, Material und Aufbau typischerweise zwischen 1.800 € und 9.000 €. Ein einfaches Einzelcarport aus Holz inklusive Montage liegt bei etwa 2.500–5.500 €, ein Doppelcarport bei 3.500–9.000 €.",
  },
  {
    q: "Was kostet ein Carport aus Holz?",
    a: "Ein Carport aus Holz kostet als Einzelstellplatz inklusive Aufbau rund 1.500–6.000 €. Bausätze ohne Montage gibt es ab etwa 500–1.500 €. Holz ist das günstigste Material, benötigt aber regelmäßige Pflege.",
  },
  {
    q: "Was kostet ein Doppelcarport?",
    a: "Ein Doppelcarport kostet je nach Material und Ausstattung zwischen 3.500 € und 10.000 €. Holzmodelle beginnen bei etwa 3.500 €, Aluminium- und Sonderanfertigungen liegen bei 8.000–10.000 € und mehr.",
  },
  {
    q: "Wie viel kostet die Montage eines Carports?",
    a: "Der professionelle Aufbau eines Carports kostet zwischen 700 € und 2.000 €, abhängig von Größe und Untergrund. Wer in Eigenleistung aufbaut, spart diesen Betrag – verliert dabei aber in der Regel Gewährleistungsansprüche.",
  },
  {
    q: "Braucht man für ein Carport eine Baugenehmigung?",
    a: "Das hängt vom Bundesland ab. In vielen Ländern – auch in Hamburg – sind Carports bis zu einer bestimmten Größe (häufig rund 30 m² Grundfläche) verfahrensfrei. Maßgeblich ist die jeweilige Landesbauordnung; klären Sie die Genehmigungspflicht und Grenzabstände vor Baubeginn mit dem örtlichen Bauamt. Die Gebühren liegen meist zwischen 50 € und 500 €.",
  },
  {
    q: "Was ist günstiger: Carport oder Garage?",
    a: "Ein Carport ist deutlich günstiger als eine Garage. Carports kosten meist 1.800–9.000 €, während eine gemauerte oder Fertiggarage je nach Ausführung 6.000–25.000 € kostet. Eine Garage bietet dafür mehr Schutz und Stauraum.",
  },
  {
    q: "Wie viel spart man durch Eigenleistung?",
    a: "Durch den Selbstaufbau eines Bausatzes lassen sich rund 800–2.000 € Montagekosten sparen. Zu bedenken sind jedoch Fehlerrisiko, fehlende Gewährleistung und der Zeitaufwand.",
  },
  {
    q: "Was kostet ein Carport in Hamburg?",
    a: "In Ballungsräumen wie Hamburg liegen die Carport-Preise etwa 20–30 % über dem Bundesdurchschnitt. Für ein schlüsselfertiges Einzelcarport sollten Sie hier mit rund 3.500–7.000 € rechnen.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "/" },
        { "@type": "ListItem", position: 2, name: "Ratgeber", item: "/ratgeber" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Carport bauen lassen: Kosten",
          item: "/ratgeber/carport-bauen-lassen-kosten",
        },
      ],
    },
  ],
};

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-14 mb-4 scroll-mt-24 font-display text-2xl font-bold leading-tight sm:text-3xl"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-ink-soft">{children}</p>;
}

function CostTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto border border-line">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-paper-2/70">
            {head.map((h) => (
              <th
                key={h}
                className="label border-b border-line px-4 py-3 text-left text-ink-soft"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="even:bg-paper-2/30">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`border-t border-line px-4 py-3 align-top ${
                    j === 0 ? "font-medium" : "text-ink-soft"
                  }`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CtaBand({ headline, text }: { headline: string; text: string }) {
  return (
    <div className="mt-10 border border-line-strong bg-ink p-7 text-paper sm:p-9">
      <h3 className="font-display text-xl font-bold sm:text-2xl">{headline}</h3>
      <p className="mt-3 max-w-xl text-paper/70">{text}</p>
      <Link
        href="/#kontakt"
        className="group mt-6 inline-flex items-center gap-3 bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
      >
        Carport-Angebote anfragen
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
      <p className="mt-3 text-xs text-paper/50">
        Kostenlos &amp; unverbindlich · geprüfte Betriebe aus Hamburg &amp;
        Umgebung
      </p>
    </div>
  );
}

export default function CarportKostenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="relative z-10 flex-1 border-t border-line-strong">
        <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          {/* Breadcrumb */}
          <nav className="label flex flex-wrap items-center gap-2 text-ink-soft">
            <Link href="/" className="hover:text-accent">
              Start
            </Link>
            <span className="text-line-strong">/</span>
            <span>Ratgeber</span>
            <span className="text-line-strong">/</span>
            <span className="text-accent">Carport-Kosten</span>
          </nav>

          <h1 className="mt-6 font-display text-[clamp(2rem,5.5vw,3.4rem)] font-extrabold uppercase leading-[0.98]">
            Carport bauen lassen:
            <br />
            Kosten 2026
          </h1>
          <p className="mt-4 text-sm text-ink-soft">Aktualisiert: Juni 2026</p>

          {/* Direct-answer TL;DR — featured-snippet & AI-answer bait */}
          <div className="mt-8 border-l-4 border-accent bg-paper-2/50 p-6">
            <p className="label text-accent">Kurz &amp; knapp</p>
            <p className="mt-3 leading-relaxed">
              Ein Carport bauen zu lassen kostet 2026 je nach Größe, Material und
              Aufbau typischerweise{" "}
              <strong>zwischen 1.800 € und 9.000 €</strong>. Ein einfaches
              Einzelcarport aus Holz inklusive Montage liegt bei{" "}
              <strong>2.500–5.500 €</strong>, ein Doppelcarport bei{" "}
              <strong>3.500–9.000 €</strong>. Hinzu kommen je nach Vorhaben
              Fundament (500–2.500 €), Baugenehmigung (50–500 €) und Erdarbeiten.
            </p>
          </div>

          {/* Calculator placeholder */}
          <section
            id="rechner"
            aria-label="Carport-Kostenrechner"
            className="mt-10 border border-dashed border-line-strong bg-paper-2/30 p-8 text-center"
          >
            <p className="label text-accent">Carport-Kostenrechner</p>
            <h2 className="mt-3 font-display text-xl font-bold">
              Was kostet Ihr Carport? Jetzt berechnen.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
              Größe, Material und Ausstattung wählen und in wenigen Sekunden eine
              realistische Kostenschätzung erhalten.
            </p>
            <div className="mx-auto mt-6 grid max-w-md gap-2 text-left text-sm text-ink-soft/70">
              <div className="flex items-center gap-2 border border-line bg-paper px-4 py-3">
                <span className="h-2 w-2 bg-accent" /> Platzhalter – Rechner folgt
              </div>
            </div>
            {/* TODO: interactive cost calculator component goes here */}
          </section>

          <H2 id="preise">Was kostet ein Carport? Preise nach Typ &amp; Größe</H2>
          <P>
            Der Preis für ein Carport hängt vor allem von der Größe (Einzel-,
            Doppel- oder Sondercarport), dem Material und der Art des Aufbaus ab.
            Die folgende Tabelle zeigt typische Richtwerte inklusive Montage:
          </P>
          <CostTable
            head={["Carport-Typ", "Preis inkl. Aufbau", "Hinweis"]}
            rows={[
              ["Einzelcarport", "1.800 – 5.500 €", "1 Stellplatz, ca. 3 × 5 m"],
              ["Doppelcarport", "3.500 – 9.000 €", "2 Stellplätze nebeneinander"],
              ["Reihen-/Sondercarport", "ab 6.000 €", "mehrere Plätze, Maßbau"],
              ["Bausatz (ohne Montage)", "500 – 1.500 €", "Holz, Selbstaufbau"],
            ]}
          />
          <P>
            <strong>Hinweis 2026:</strong> Die Preise sind gegenüber den
            Vorjahren um durchschnittlich 15–20 % gestiegen. In Ballungsräumen
            wie Hamburg liegen sie zudem rund 20–30 % über dem
            Bundesdurchschnitt.
          </P>

          <H2 id="material">Kosten nach Material: Holz, Stahl oder Aluminium</H2>
          <P>
            Das Material ist der größte Preistreiber. Holz ist am günstigsten,
            Aluminium am wartungsärmsten, Stahl besonders stabil.
          </P>
          <CostTable
            head={["Material", "Preisspanne", "Eigenschaften"]}
            rows={[
              ["Holz", "1.500 – 6.000 €", "günstig, natürlich, regelmäßige Pflege nötig"],
              ["Stahl / Metall", "1.000 – 10.000 €", "sehr stabil, langlebig, verzinkt wartungsarm"],
              ["Aluminium", "3.000 – 10.000 €", "wartungsarm, modern, höherer Preis"],
            ]}
          />

          <H2 id="zusatzkosten">Zusätzliche Kosten beim Carport-Bau</H2>
          <P>
            Neben dem Carport selbst entstehen je nach Grundstück und Ausstattung
            weitere Posten. Diese werden in Online-Preisen oft nicht mitgerechnet:
          </P>
          <CostTable
            head={["Kostenposten", "Typische Kosten"]}
            rows={[
              ["Fundament (Punkt-, Streifen- oder Bodenplatte)", "500 – 2.500 €"],
              ["Baugenehmigung & Gebühren", "50 – 500 €"],
              ["Erdarbeiten / Aushub", "300 – 600 €"],
              ["Entwässerung & Dachrinne", "200 – 400 €"],
              ["Strom & Beleuchtung", "150 – 800 €"],
              ["Abriss / Entsorgung (alter Stellplatz)", "200 – 600 €"],
              ["Gartenwiederherstellung", "150 – 300 €"],
            ]}
          />

          <CtaBand
            headline="Lieber gleich konkrete Preise?"
            text="Statt mit Richtwerten zu rechnen, erhalten Sie von uns kostenlos und unverbindlich passende Angebote geprüfter Carport-Betriebe aus Ihrer Region."
          />

          <H2 id="genehmigung">Baugenehmigung: Wann ist ein Carport genehmigungspflichtig?</H2>
          <P>
            Ob ein Carport eine Baugenehmigung braucht, regelt die
            Landesbauordnung des jeweiligen Bundeslandes – die Vorgaben
            unterscheiden sich deutlich. In vielen Ländern, auch in Hamburg, sind
            Carports bis zu einer bestimmten Grundfläche (häufig rund 30 m²) und
            Höhe verfahrensfrei. Auch bei einem genehmigungsfreien Carport müssen
            Sie jedoch Grenzabstände zum Nachbarn und örtliche Bebauungspläne
            einhalten.
          </P>
          <P>
            <strong>Wichtig:</strong> „Verfahrensfrei“ bedeutet nicht „regelfrei“.
            Klären Sie vor Baubeginn die konkreten Anforderungen mit dem
            zuständigen Bauamt. Die Gebühren für eine Genehmigung liegen meist
            zwischen 50 € und 500 €.
          </P>

          <H2 id="fertig-vs-mass">Fertigbausatz oder Maßanfertigung?</H2>
          <P>
            Ein Fertigbausatz ist günstig und schnell verfügbar, aber in Maßen
            und Optik festgelegt. Eine Maßanfertigung kostet mehr, passt sich
            dafür exakt an Grundstück, Dachform und Bestand an.
          </P>
          <CostTable
            head={["Kriterium", "Fertigbausatz", "Maßanfertigung"]}
            rows={[
              ["Preis", "günstiger (ab ~500 €)", "höher (ab ~4.000 €)"],
              ["Planung", "Standardmaße", "individuell"],
              ["Lieferzeit", "kurz", "länger"],
              ["Optik & Passung", "begrenzt", "exakt angepasst"],
            ]}
          />

          <H2 id="eigenleistung">Selbst aufbauen oder bauen lassen?</H2>
          <P>
            Wer einen Bausatz selbst aufbaut, spart rund 800–2.000 €
            Montagekosten. Dem stehen Zeitaufwand, Werkzeugbedarf, Fehlerrisiko
            und der Verlust von Gewährleistungsansprüchen gegenüber. Bei Fundament,
            Statik und Genehmigung lohnt sich der Fachbetrieb fast immer.
          </P>

          <H2 id="preisbeispiele">Preisbeispiele: drei Carports im Vergleich</H2>
          <CostTable
            head={["Ausführung", "Beschreibung", "Gesamtkosten"]}
            rows={[
              ["Einfach", "Holz-Einzelcarport, Bausatz, Selbstaufbau, Punktfundament", "2.000 – 3.500 €"],
              ["Mittel", "Einzelcarport schlüsselfertig inkl. Fundament & Montage", "4.000 – 6.500 €"],
              ["Premium", "Doppelcarport aus Aluminium, Maßbau, mit Geräteraum & Strom", "9.000 – 15.000 €"],
            ]}
          />

          <H2 id="sparen">So sparen Sie beim Carport bauen lassen</H2>
          <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
            <li>Mehrere Angebote vergleichen – Preise variieren stark.</li>
            <li>Einfache Vorarbeiten (Aushub, alten Belag entfernen) selbst übernehmen.</li>
            <li>Standardmaße statt Sonderanfertigung wählen.</li>
            <li>Material an Nutzung anpassen – nicht jedes Carport braucht Aluminium.</li>
            <li>Außerhalb der Hauptsaison (Frühjahr/Sommer) anfragen.</li>
          </ul>

          <H2 id="hamburg">Carport in Hamburg &amp; Umgebung bauen lassen</H2>
          <P>
            In Hamburg liegen die Carport-Preise rund 20–30 % über dem
            Bundesdurchschnitt. Für ein schlüsselfertiges Einzelcarport sollten
            Sie hier mit etwa 3.500–7.000 € rechnen. Über unsere Vermittlung
            erhalten Sie Angebote geprüfter Betriebe aus Niendorf und Umgebung –
            so vergleichen Sie reale Preise statt Richtwerte.
          </P>

          <H2 id="faq">Häufige Fragen zu Carport-Kosten</H2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold">
                  {f.q}
                  <span className="text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>

          <CtaBand
            headline="Jetzt passende Carport-Betriebe finden"
            text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung, die Ihnen ein konkretes Angebot machen."
          />

          <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
            Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026)
            und ersetzen kein individuelles Angebot. Tatsächliche Kosten hängen
            von Größe, Material, Untergrund und Region ab.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
