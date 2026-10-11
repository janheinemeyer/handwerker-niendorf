import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Carport bauen lassen: Kosten 2026 mit Montage (Preise & Rechner)",
  description:
    "Was kostet es, ein Carport bauen oder einen Bausatz aufbauen zu lassen? Aktuelle Preise 2026 nach Größe, Material und Montage – mit Kostentabellen, Spartipps und kostenlosem Angebotsvergleich für Hamburg und Umgebung.",
  alternates: { canonical: "/ratgeber/carport-bauen-lassen-kosten" },
  openGraph: {
    title: "Carport bauen lassen: Kosten 2026 im Überblick",
    description:
      "Preise nach Typ, Material und Aufbau – mit Kostentabellen, Spartipps und Rechner.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet es, ein Carport bauen zu lassen?",
    a: "Ein Carport bauen zu lassen kostet 2026 je nach Größe, Material und Aufbau typischerweise zwischen 1.800 € und 9.000 €. Ein einfaches Einzelcarport aus Holz inklusive Montage liegt bei etwa 2.500–5.500 €, ein Doppelcarport je nach Material bei 3.500–15.000 €.",
  },
  {
    q: "Was kostet ein Carport aus Holz?",
    a: "Ein Carport aus Holz kostet als Einzelstellplatz inklusive Aufbau rund 1.500–6.000 €. Bausätze ohne Montage gibt es ab etwa 500–1.500 €. Holz ist das günstigste Material, benötigt aber regelmäßige Pflege.",
  },
  {
    q: "Was kostet ein Doppelcarport?",
    a: "Ein Doppelcarport kostet je nach Material und Ausstattung zwischen 3.500 € und 15.000 €. Holzmodelle beginnen bei etwa 3.500 €, Aluminium- und Stahl-/Maßanfertigungen (z. B. mit Geräteraum) liegen am oberen Ende bis ~15.000 €.",
  },
  {
    q: "Was kostet es, einen Carport aufbauen zu lassen?",
    a: "Für den Aufbau eines bereits gekauften Carport-Bausatzes berechnet ein Fachbetrieb meist 700–2.000 €: rund 700–1.200 € für ein Einzelcarport aus Holz, 1.000–2.000 € für ein Doppelcarport. Muss noch ein Fundament gesetzt werden (Punktfundamente aus Beton mit einbetonierten H-Ankern), kommen etwa 250–700 € hinzu. Wer in Eigenleistung aufbaut, spart die 700–2.000 € Montagekosten – das Fundament braucht es trotzdem –, verliert dabei aber in der Regel Gewährleistungsansprüche.",
  },
  {
    q: "Baut ein Handwerker auch einen selbst gekauften Carport-Bausatz auf?",
    a: "Ja, viele Zimmerer und Montagebetriebe übernehmen das – nicht alle, also am besten gleich bei der Anfrage klären. Der Betrieb haftet dann für seine Montage; für Mängel am Bausatz selbst ist in erster Linie Verkäufer bzw. Hersteller zuständig. Erkennbare Mängel am gelieferten Material muss der Betrieb Ihnen allerdings vor dem Aufbau melden – sonst kann er für die Folgen mithaften. Alternativ bieten viele Hersteller einen eigenen Montageservice an; das ist sinnvoll, weil die Herstellergarantie oft an einen fachgerechten Aufbau geknüpft ist.",
  },
  {
    q: "Braucht man für ein Carport eine Baugenehmigung?",
    a: "Das hängt vom Bundesland ab. In Hamburg ist ein Carport nach § 61 HBauO (neue Fassung seit 2026) im Innenbereich verfahrensfrei bis 50 m² Grundfläche und 3 m Wandhöhe je zugehörigem Hauptgebäude – wobei bereits vorhandene Stellplatzflächen auf die 50 m² angerechnet werden. Im Außenbereich oder oberhalb dieser Grenzen ist eine Genehmigung nötig. Maßgeblich ist die jeweilige Landesbauordnung; klären Sie Genehmigungspflicht und Grenzabstände vor Baubeginn mit dem örtlichen Bauamt.",
  },
  {
    q: "Was ist günstiger: Carport oder Garage?",
    a: "Ein Carport ist deutlich günstiger als eine Garage. Carports kosten meist 1.800–9.000 €, während eine gemauerte oder Fertiggarage je nach Ausführung 6.000–25.000 € kostet. Eine Garage bietet dafür mehr Schutz und Stauraum.",
  },
  {
    q: "Wie viel spart man durch Eigenleistung?",
    a: "Durch den Selbstaufbau eines Bausatzes lassen sich rund 700–2.000 € Montagekosten sparen. Zu bedenken sind jedoch Fehlerrisiko, fehlende Gewährleistung und der Zeitaufwand.",
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
      updated="Oktober 2026"
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
        <strong>2.500–5.500 €</strong>, ein Doppelcarport je nach Material bei{" "}
        <strong>3.500–15.000 €</strong>. Hinzu kommen je nach Vorhaben Fundament
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
          ["Doppelcarport", "3.500 – 15.000 €", "2 Stellplätze, je nach Material"],
          ["Reihen-/Sondercarport", "ab 6.000 €", "mehrere Plätze, Maßbau"],
          ["Bausatz (ohne Montage)", "500 – 1.500 €", "Holz, Selbstaufbau"],
        ]}
      />
      <P>
        <strong>Hinweis 2026:</strong> Die Preise sind gegenüber den Vorjahren um
        durchschnittlich 15–20 % gestiegen. In Ballungsräumen wie Hamburg liegen
        sie zudem rund 20–30 % über dem Bundesdurchschnitt.
      </P>
      <P>
        Konkret für zwei Stellplätze – inkl. empfohlener Maße und
        Kostenfaktoren – siehe den Ratgeber{" "}
        <Link
          href="/ratgeber/doppelcarport-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Doppelcarport: Kosten &amp; Maße
        </Link>
        . Noch unentschlossen? Der Vergleich{" "}
        <Link
          href="/ratgeber/carport-oder-garage"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport oder Garage
        </Link>{" "}
        ordnet Kosten und Nutzen ein.
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
      <P>
        Welches Material zu Ihnen passt – nach Optik, Pflegeaufwand und
        Haltbarkeit – zeigt der{" "}
        <Link
          href="/ratgeber/carport-material-vergleich"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Materialvergleich (Holz, Stahl, Alu)
        </Link>
        .
      </P>

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
      <P>
        Ein Dach lässt sich auch zur Stromerzeugung nutzen: Was ein{" "}
        <Link
          href="/ratgeber/solarcarport-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Solarcarport mit Photovoltaik
        </Link>{" "}
        kostet und ab wann er sich lohnt, lesen Sie im eigenen Ratgeber.
      </P>

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
        In vielen Ländern sind Carports bis zu einer bestimmten Grundfläche und
        Höhe verfahrensfrei. In Hamburg etwa im Innenbereich bis{" "}
        <strong>50 m²</strong> Bruttogrundfläche und <strong>3 m</strong>{" "}
        Wandhöhe je zugehörigem Hauptgebäude (§ 61 HBauO) – vorhandene
        Stellplätze werden angerechnet. Auch bei einem genehmigungsfreien Carport
        müssen Sie jedoch Grenzabstände zum Nachbarn und{" "}
        <Link
          href="/ratgeber/carport-bebauungsplan"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          örtliche Bebauungspläne
        </Link>{" "}
        einhalten – die Details für Hamburg stehen im{" "}
        <Link
          href="/ratgeber/carport-baugenehmigung-hamburg"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Ratgeber zur Carport-Baugenehmigung in Hamburg
        </Link>
        .
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

      <H2 id="aufbauen-lassen">
        Was kostet es, einen Carport aufbauen zu lassen?
      </H2>
      <P>
        Sie haben den Bausatz schon gekauft – im Baumarkt, online oder direkt
        beim Hersteller – und suchen nur noch jemanden für den Aufbau? Dann
        zahlen Sie allein die Montage. Ein Fachbetrieb braucht dafür meist ein
        bis zwei Tage zu zweit; der Preis hängt von Größe und Material ab und
        davon, ob das Fundament schon steht.
      </P>
      <CostTable
        head={["Leistung", "Typische Kosten", "Hinweis"]}
        rows={[
          ["Aufbau Einzelcarport-Bausatz (Holz, ca. 3 × 5 m)", "700 – 1.200 €", "Fundament vorhanden, ca. 1 Tag"],
          ["Aufbau Doppelcarport-Bausatz (Holz, ca. 6 × 5 m)", "1.000 – 2.000 €", "ca. 1–2 Tage"],
          ["Aufbau Alu- oder Stahl-Bausatz", "700 – 1.500 €", "vorgefertigte Teile, oft schneller montiert"],
          ["Punktfundamente inkl. einbetonierter H-Anker", "250 – 700 €", "4–6 Betonpunkte inkl. Aushub, je nach Carport-Größe"],
        ]}
      />
      <P>
        Im Montagepreis sind in der Regel Aufbau nach Herstelleranleitung,
        Ausrichten, Verschrauben und Dacheindeckung enthalten. Oft{" "}
        <strong>nicht</strong> enthalten: Fundament (wenn nicht ausdrücklich
        vereinbart), Anschluss von Dachrinne und Fallrohr an die Entwässerung,
        Elektrik und die Entsorgung der Verpackung. Lassen Sie sich die Posten
        im Angebot einzeln auflisten.
      </P>
      <P>
        <strong>Hersteller-Service oder Handwerker vor Ort?</strong> Viele
        Carport-Hersteller bieten selbst einen Montageservice an. Das ist oft die
        sicherste Wahl, denn die Herstellergarantie ist bei vielen Anbietern an
        einen fachgerechten Aufbau geknüpft. Ein lokaler Zimmerer baut einen
        fremd gekauften Bausatz ebenfalls auf und haftet für seine Montage; für
        Mängel am Bausatz selbst ist in erster Linie Verkäufer bzw. Hersteller
        zuständig. Erkennbare Mängel am gelieferten Material muss der Betrieb
        Ihnen allerdings vor dem Aufbau melden. Nicht jeder Betrieb übernimmt
        solche Aufträge; klären Sie das gleich bei der Anfrage.
      </P>

      <H2 id="eigenleistung">Selbst aufbauen oder bauen lassen?</H2>
      <P>
        Wer einen Bausatz selbst aufbaut, spart rund 700–2.000 € Montagekosten.
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
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026,
        Montagekosten: Oktober 2026) und
        ersetzen kein individuelles Angebot. Tatsächliche Kosten hängen von Größe,
        Material, Untergrund und Region ab.
      </p>
    </RatgeberArticle>
  );
}
