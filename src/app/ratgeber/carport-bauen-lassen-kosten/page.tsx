import type { Metadata } from "next";
import {
  RatgeberArticle,
  TlDr,
  H2,
  P,
  CostTable,
  CtaBand,
  Faq,
  type FaqItem,
} from "@/components/ratgeber";
import { CarportCalculator } from "@/components/carport-calculator";

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

const faqs: FaqItem[] = [
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

export default function CarportKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Carport bauen lassen:
          <br />
          Kosten 2026
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        { name: "Carport-Kosten", href: "/ratgeber/carport-bauen-lassen-kosten" },
      ]}
    >
      <TlDr>
        Ein Carport bauen zu lassen kostet 2026 je nach Größe, Material und
        Aufbau typischerweise{" "}
        <strong>zwischen 1.800 € und 9.000 €</strong>. Ein einfaches
        Einzelcarport aus Holz inklusive Montage liegt bei{" "}
        <strong>2.500–5.500 €</strong>, ein Doppelcarport bei{" "}
        <strong>3.500–9.000 €</strong>. Hinzu kommen je nach Vorhaben Fundament
        (500–2.500 €), Baugenehmigung (50–500 €) und Erdarbeiten.
      </TlDr>

      {/* Interactive cost calculator */}
      <section id="rechner" aria-label="Carport-Kostenrechner" className="mt-10">
        <p className="label text-accent">Carport-Kostenrechner</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
          Was kostet Ihr Carport? Jetzt berechnen.
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Größe, Material und Ausstattung wählen und in wenigen Sekunden eine
          realistische Kostenschätzung erhalten.
        </p>
        <CarportCalculator />
      </section>

      <H2 id="preise">Was kostet ein Carport? Preise nach Typ &amp; Größe</H2>
      <P>
        Der Preis für ein Carport hängt vor allem von der Größe (Einzel-,
        Doppel- oder Sondercarport), dem Material und der Art des Aufbaus ab. Die
        folgende Tabelle zeigt typische Richtwerte inklusive Montage:
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
        <strong>Hinweis 2026:</strong> Die Preise sind gegenüber den Vorjahren um
        durchschnittlich 15–20 % gestiegen. In Ballungsräumen wie Hamburg liegen
        sie zudem rund 20–30 % über dem Bundesdurchschnitt.
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
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-page"
      />

      <H2 id="genehmigung">
        Baugenehmigung: Wann ist ein Carport genehmigungspflichtig?
      </H2>
      <P>
        Ob ein Carport eine Baugenehmigung braucht, regelt die Landesbauordnung
        des jeweiligen Bundeslandes – die Vorgaben unterscheiden sich deutlich.
        In vielen Ländern, auch in Hamburg, sind Carports bis zu einer bestimmten
        Grundfläche (häufig rund 30 m²) und Höhe verfahrensfrei. Auch bei einem
        genehmigungsfreien Carport müssen Sie jedoch Grenzabstände zum Nachbarn
        und örtliche Bebauungspläne einhalten.
      </P>
      <P>
        <strong>Wichtig:</strong> „Verfahrensfrei“ bedeutet nicht „regelfrei“.
        Klären Sie vor Baubeginn die konkreten Anforderungen mit dem zuständigen
        Bauamt. Die Gebühren für eine Genehmigung liegen meist zwischen 50 € und
        500 €.
      </P>

      <H2 id="fertig-vs-mass">Fertigbausatz oder Maßanfertigung?</H2>
      <P>
        Ein Fertigbausatz ist günstig und schnell verfügbar, aber in Maßen und
        Optik festgelegt. Eine Maßanfertigung kostet mehr, passt sich dafür exakt
        an Grundstück, Dachform und Bestand an.
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
        Wer einen Bausatz selbst aufbaut, spart rund 800–2.000 € Montagekosten.
        Dem stehen Zeitaufwand, Werkzeugbedarf, Fehlerrisiko und der Verlust von
        Gewährleistungsansprüchen gegenüber. Bei Fundament, Statik und
        Genehmigung lohnt sich der Fachbetrieb fast immer.
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
        Bundesdurchschnitt. Für ein schlüsselfertiges Einzelcarport sollten Sie
        hier mit etwa 3.500–7.000 € rechnen. Über unsere Vermittlung erhalten Sie
        Angebote geprüfter Betriebe aus Niendorf und Umgebung – so vergleichen
        Sie reale Preise statt Richtwerte.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Carport-Kosten" />

      <CtaBand
        headline="Jetzt passende Carport-Betriebe finden"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung, die Ihnen ein konkretes Angebot machen."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen kein individuelles Angebot. Tatsächliche Kosten hängen von Größe,
        Material, Untergrund und Region ab.
      </p>
    </RatgeberArticle>
  );
}
