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

export const metadata: Metadata = {
  title: "Doppelcarport: Kosten, Maße & Preise (2026)",
  description:
    "Was kostet ein Doppelcarport? Bauen lassen je nach Material und Größe rund 3.500–15.000 € (Bausatz ab ~2.000 €). Empfohlene Maße (ab ~6,5 × 5,5 m), Kostenfaktoren und Genehmigung in Hamburg – mit Preisübersicht.",
  alternates: { canonical: "/ratgeber/doppelcarport-kosten" },
  openGraph: {
    title: "Doppelcarport: Kosten, Maße & Preise",
    description:
      "Preise nach Material, empfohlene Maße und Kostenfaktoren für einen Carport für zwei Autos.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet ein Doppelcarport?",
    a: "Bauen lassen kostet ein Doppelcarport je nach Material, Größe und Ausstattung rund 3.500–15.000 €: Holz ab etwa 3.500–9.000 €, Aluminium ca. 6.000–12.000 €, Stahl-Maßanfertigungen am oberen Ende. Als Bausatz zum Selbstaufbau gibt es Doppelcarports ab etwa 2.000–9.000 € – ohne Fundament und Montage.",
  },
  {
    q: "Wie groß muss ein Doppelcarport sein?",
    a: "Für zwei Autos nebeneinander werden mindestens etwa 6,0–6,5 m Breite, 5,5 m Länge und 2,1 m Durchfahrtshöhe empfohlen; gängige Standardmaße liegen bei rund 6 × 6 m (~36 m²). Faustregel: zwei Fahrzeugbreiten plus rund 70–80 cm Bewegungsraum an den Außenseiten und in der gemeinsam genutzten Mitte – die empfohlene Mindestbreite berücksichtigt das bereits; zur Länge des längsten Autos rund 1 m einplanen.",
  },
  {
    q: "Doppelcarport oder zwei Einzelcarports?",
    a: "Ein Doppelcarport ist meist günstiger und materialsparender als zwei Einzelcarports, weil sich Stützen, Dach und Fundament teilen. Zwei getrennte Carports sind nur sinnvoll, wenn die Stellplätze räumlich auseinanderliegen müssen.",
  },
  {
    q: "Welches Material ist für einen Doppelcarport am besten?",
    a: "Holz ist am günstigsten und wirkt natürlich (braucht aber Pflege), Aluminium ist wartungsarm und modern, Stahl besonders stabil bei großer Spannweite. Bei der breiten Dachfläche eines Doppelcarports spielt die Statik eine größere Rolle – dazu berät der Fachbetrieb. Details im Materialvergleich.",
  },
  {
    q: "Braucht ein Doppelcarport in Hamburg eine Baugenehmigung?",
    a: "Oft nicht: Mit rund 36 m² bleibt ein typischer Doppelcarport im Innenbereich meist unter der 50-m²-Grenze, bis zu der ein Carport je zugehörigem Hauptgebäude verfahrensfrei ist (§ 61 HBauO). Wichtig: vorhandene Stellplatzflächen werden angerechnet, und ohne zugehöriges Hauptgebäude greift die Verfahrensfreiheit nicht. Verbindlich ist die Auskunft des Bauamts.",
  },
];

export default function DoppelcarportKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Doppelcarport:
          <br />
          Kosten &amp; Maße
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Doppelcarport: Kosten",
          href: "/ratgeber/doppelcarport-kosten",
        },
      ]}
    >
      <TlDr>
        Ein <strong>Doppelcarport</strong> (zwei Autos nebeneinander, ~6 × 6 m,
        rund 36 m²) kostet beim Bauen-lassen je nach Material und Ausstattung
        etwa <strong>3.500–15.000 €</strong> – Holz am unteren, Aluminium und
        Stahl am oberen Ende; Bausätze zum Selbstaufbau ab ~2.000 €. Pro
        Stellplatz ist er
        günstiger als zwei Einzelcarports. In Hamburg bleibt er mit ~36 m² meist
        unter der 50-m²-Grenze und damit oft verfahrensfrei (je zugehörigem
        Hauptgebäude, Stellplätze werden angerechnet). Die volle Kostenaufstellung
        steht im{" "}
        <Link
          href="/ratgeber/carport-bauen-lassen-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Kostenratgeber
        </Link>
        .
      </TlDr>

      <H2 id="kosten">Was kostet ein Doppelcarport?</H2>
      <P>
        Wie beim Einzelcarport ist das Material der größte Preistreiber, dazu
        kommen Dachform, Ausstattung und Fundament. Richtwerte fürs Bauen-lassen
        (inkl. Montage):
      </P>
      <CostTable
        head={["Variante", "Richtwert (bauen lassen)"]}
        rows={[
          ["Holz", "3.500 – 9.000 €"],
          ["Aluminium", "6.000 – 12.000 €"],
          ["Stahl (Maßbau)", "8.000 – 15.000 € und mehr"],
          ["Bausatz (ohne Montage/Fundament)", "2.000 – 9.000 €"],
        ]}
      />
      <P>
        Welches Material zu Ihnen passt, zeigt der{" "}
        <Link
          href="/ratgeber/carport-material-vergleich"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Materialvergleich
        </Link>
        . Soll das große Dach gleich Strom erzeugen, lohnt ein Blick auf den{" "}
        <Link
          href="/ratgeber/solarcarport-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Solarcarport
        </Link>
        .
      </P>

      <H2 id="masse">Welche Größe braucht ein Doppelcarport?</H2>
      <P>
        Zwei Autos nebeneinander brauchen spürbar mehr als die doppelte
        Einzelbreite – wegen der Türen in der Mitte. Empfohlene Mindestmaße:
      </P>
      <CostTable
        head={["Maß", "Empfehlung"]}
        rows={[
          ["Breite", "ab ~6,0 – 6,5 m"],
          ["Länge / Tiefe", "ab ~5,5 m"],
          ["Durchfahrtshöhe", "ab ~2,1 m (SUV/Van: mehr)"],
          ["Standardgröße (häufig)", "~6 × 6 m (≈ 36 m²)"],
        ]}
      />
      <P>
        Faustregel: zur Breite jedes Fahrzeugs je Seite rund 80 cm zum Ein- und
        Aussteigen einplanen, zur Länge des längsten Autos etwa 1 m. Wer einen
        Anhänger, Dachboxen oder Fahrräder unterstellt, plant großzügiger.
      </P>

      <H2 id="faktoren">Was treibt den Preis?</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Material &amp; Statik:</strong> Die breite Dachfläche braucht
          ein tragfähiges Gerüst – bei großer Spannweite oder Schneelast oft Stahl.
        </li>
        <li>
          <strong>Dachform:</strong> Flachdach ist am günstigsten; Sattel- oder
          Walmdach kosten mehr.
        </li>
        <li>
          <strong>Seitenwände &amp; Abstellraum:</strong> Geschlossene Wandfelder
          oder ein integrierter Geräteraum erhöhen den Preis deutlich.
        </li>
        <li>
          <strong>Fundament:</strong> Punktfundamente ab ~200–600 €,
          Streifenfundament ~500–1.500 €, Bodenplatte ~1.500–3.500 €.
        </li>
      </ul>

      <CtaBand
        headline="Doppelcarport bauen lassen?"
        text="Schildern Sie kurz Größe, Wunschmaterial und Standort – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Carport-Betriebe aus Hamburg und Umgebung, die Statik, Aufbau und Genehmigung mitdenken."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="doppelcarport-page"
      />

      <H2 id="genehmigung">Doppelcarport &amp; Genehmigung in Hamburg</H2>
      <P>
        Mit rund 36 m² bleibt ein typischer Doppelcarport im Innenbereich meist
        unter der 50-m²-Grenze, bis zu der ein Carport <strong>je zugehörigem
        Hauptgebäude</strong> verfahrensfrei ist (§ 61 HBauO) – vorhandene
        Stellplatzflächen werden allerdings angerechnet, und ohne zugehöriges
        Hauptgebäude greift die Verfahrensfreiheit nicht. Wann genau eine
        Genehmigung nötig ist, klärt der Ratgeber{" "}
        <Link
          href="/ratgeber/carport-baugenehmigung-hamburg"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Baugenehmigung Hamburg
        </Link>
        ; örtliche Vorgaben zu Standort und Größe stehen ggf. im{" "}
        <Link
          href="/ratgeber/carport-bebauungsplan"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Bebauungsplan
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zum Doppelcarport" />

      <CtaBand
        headline="Doppelcarport in Hamburg bauen lassen"
        text="Beschreiben Sie kurz Maße, Material und Ausstattung – wir bringen Sie kostenlos und unverbindlich mit passenden Carport-Betrieben aus Hamburg und Umgebung zusammen."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="doppelcarport-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preise sind Richtwerte (Stand Juni 2026) und ersetzen kein
        individuelles Angebot. Die tatsächlichen Kosten hängen von Material,
        Größe, Dachform, Fundament und Region ab.
      </p>
    </RatgeberArticle>
  );
}
