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
  title: "Carport oder Garage? Kosten & Vergleich (2026)",
  description:
    "Carport oder Garage – was ist besser? Der Carport ist deutlich günstiger (ab ~1.800 €) und schneller gebaut, die Garage bietet mehr Schutz und Stauraum (Fertiggarage ab ~7.000 €, gemauert deutlich mehr). Kosten, Vor- und Nachteile und Genehmigung im Vergleich.",
  alternates: { canonical: "/ratgeber/carport-oder-garage" },
  openGraph: {
    title: "Carport oder Garage? Der Vergleich",
    description:
      "Kosten, Vor- und Nachteile und Genehmigung von Carport und Garage im direkten Vergleich.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was ist günstiger – Carport oder Garage?",
    a: "Der Carport, mit deutlichem Abstand. Ein Einzelcarport kostet bauen lassen rund 1.800–5.500 €, eine Fertig-Einzelgarage 7.000–12.000 € und eine gemauerte Einzelgarage ab ~18.000 €. Bei zwei Stellplätzen wird der Abstand noch größer. Hauptgrund: Der Carport ist offen, braucht weniger Material und oft kein massives Fundament.",
  },
  {
    q: "Carport oder Garage – was ist besser?",
    a: "Das hängt von Ihren Prioritäten ab. Der Carport punktet bei Preis, Bauzeit und Belüftung (das Auto trocknet schneller ab, weniger Rost). Die Garage bietet mehr Schutz vor Diebstahl, Vandalismus und Witterung sowie abschließbaren Stauraum. Wer vor allem günstig und schnell einen Wetterschutz will, nimmt den Carport; wer maximalen Schutz und Stauraum braucht, die Garage.",
  },
  {
    q: "Ist das Auto im Carport gut geschützt?",
    a: "Vor Regen, Schnee, Laub und Sonne ja. Die offene Bauweise sorgt zudem für Luftzirkulation, sodass Feuchtigkeit schnell abtrocknet – das reduziert Rostgefahr gegenüber einer schlecht belüfteten Garage. Vor Diebstahl, Hagel von der Seite oder Vandalismus schützt nur die geschlossene Garage.",
  },
  {
    q: "Braucht ein Carport oder eine Garage eher eine Baugenehmigung?",
    a: "In Hamburg gilt für beide dieselbe Schwelle: bis 50 m² Bruttogrundfläche und 3 m Wandhöhe je zugehörigem Hauptgebäude sind sowohl Carports als auch Garagen im Innenbereich verfahrensfrei (§ 61 HBauO) – vorhandene Garagen und Carports werden auf die 50 m² angerechnet. Darüber oder im Außenbereich wird es genehmigungspflichtig. Widerspricht das Vorhaben dem Bebauungsplan, bleibt es zwar verfahrensfrei, ist aber ohne Ausnahme oder Befreiung (§ 31 BauGB) nicht zulässig. Verbindlich ist die Auskunft des Bauamts.",
  },
  {
    q: "Steigert eine Garage den Wert der Immobilie mehr als ein Carport?",
    a: "Tendenziell ja – eine massive Garage gilt als wertstabiler und bietet abschließbaren Stauraum, was sich beim Verkauf positiv auswirken kann. Ein Carport ist dafür günstiger und schneller realisiert. Welche Variante sich rechnet, hängt von Grundstück, Budget und Nutzung ab.",
  },
];

export default function CarportOderGaragePage() {
  return (
    <RatgeberArticle
      title={
        <>
          Carport oder
          <br />
          Garage?
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Carport oder Garage",
          href: "/ratgeber/carport-oder-garage",
        },
      ]}
    >
      <TlDr>
        Der <strong>Carport</strong> ist deutlich günstiger (ab ~1.800 €),
        schneller gebaut und durch die offene Bauweise gut belüftet – ideal als
        preiswerter Wetterschutz. Die <strong>Garage</strong> kostet mehr
        (Fertiggarage ab ~7.000 €, gemauert deutlich mehr), bietet dafür{" "}
        <strong>Schutz vor Diebstahl, Witterung und Vandalismus</strong> sowie
        abschließbaren Stauraum. In Hamburg sind beide bis 50 m² und 3 m je
        Hauptgebäude verfahrensfrei (§ 61 HBauO). Die Wahl hängt von Budget,
        Schutzbedarf und Platz ab.
      </TlDr>

      <H2 id="kosten">Kostenvergleich: Carport vs. Garage</H2>
      <P>
        Der größte Unterschied ist der Preis. Richtwerte fürs Bauen-lassen
        (inkl. Montage), Fundament je nach Variante teils zusätzlich:
      </P>
      <CostTable
        head={["Variante", "Richtwert (bauen lassen)"]}
        rows={[
          ["Einzelcarport", "1.800 – 5.500 €"],
          ["Doppelcarport", "3.500 – 15.000 €"],
          ["Fertiggarage, einzeln (Holz/Stahl/Beton)", "7.000 – 12.000 €"],
          ["Fertig-Doppelgarage (Beton)", "ab ~15.000 €"],
          ["Gemauerte Garage, einzeln", "18.000 – 25.000 €"],
          ["Gemauerte Garage, doppelt", "30.000 – 45.000 €"],
        ]}
      />
      <P>
        Die volle Carport-Kostenaufstellung mit Rechner steht im{" "}
        <Link
          href="/ratgeber/carport-bauen-lassen-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Kostenratgeber
        </Link>
        ; für zwei Autos lohnt der{" "}
        <Link
          href="/ratgeber/doppelcarport-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Doppelcarport-Vergleich
        </Link>
        .
      </P>

      <H2 id="vorteile">Vor- und Nachteile im Vergleich</H2>
      <P>
        <strong>Carport</strong> – offen, leicht, schnell:
      </P>
      <ul className="mt-2 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>+</strong> günstig, schnell aufgebaut, oft ohne massives
          Fundament; gute Belüftung (Auto trocknet ab, weniger Rost).
        </li>
        <li>
          <strong>–</strong> kein Schutz vor Diebstahl/Vandalismus, kein
          abschließbarer Stauraum, weniger Witterungsschutz von der Seite.
        </li>
      </ul>
      <P>
        <strong>Garage</strong> – geschlossen, massiv, sicher:
      </P>
      <ul className="mt-2 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>+</strong> Schutz vor Diebstahl, Vandalismus und Witterung;
          abschließbarer Stauraum; gilt als wertstabil.
        </li>
        <li>
          <strong>–</strong> deutlich teurer, mehr Bauaufwand und Fundament; bei
          schlechter Belüftung kann Kondenswasser die Rostgefahr erhöhen.
        </li>
      </ul>

      <CtaBand
        headline="Carport statt Garage? Jetzt vergleichen lassen"
        text="Wenn ein Carport für Sie infrage kommt, vermitteln wir Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung – inklusive Beratung zu Material, Größe und Genehmigung."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-oder-garage-page"
      />

      <H2 id="genehmigung">Genehmigung: Carport und Garage gleich behandelt</H2>
      <P>
        Baurechtlich macht Hamburg zwischen Carport und Garage meist keinen
        Unterschied: Beide sind im Innenbereich bis <strong>50 m²</strong>{" "}
        Bruttogrundfläche und <strong>3 m</strong> Wandhöhe <strong>je zugehörigem
        Hauptgebäude</strong> verfahrensfrei (§ 61 HBauO) – vorhandene Garagen und
        Carports werden auf die 50 m² angerechnet. Größer oder im Außenbereich
        wird es genehmigungspflichtig. Widerspricht das Vorhaben dem
        Bebauungsplan, bleibt es zwar verfahrensfrei, ist aber ohne Ausnahme oder
        Befreiung (§ 31 BauGB) nicht zulässig. Die Details stehen im Ratgeber{" "}
        <Link
          href="/ratgeber/carport-baugenehmigung-hamburg"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Baugenehmigung Hamburg
        </Link>
        , örtliche Vorgaben im{" "}
        <Link
          href="/ratgeber/carport-bebauungsplan"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Bebauungsplan-Ratgeber
        </Link>
        .
      </P>

      <H2 id="welches">Welche Lösung passt zu Ihnen?</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Knappes Budget, schneller Wetterschutz:</strong> Carport.
        </li>
        <li>
          <strong>Maximaler Schutz &amp; abschließbarer Stauraum:</strong> Garage.
        </li>
        <li>
          <strong>Optik &amp; Material flexibel:</strong> Carport (siehe{" "}
          <Link
            href="/ratgeber/carport-material-vergleich"
            className="font-medium text-accent underline underline-offset-4 hover:text-ink"
          >
            Materialvergleich
          </Link>
          ).
        </li>
        <li>
          <strong>Eigener Solarstrom fürs E-Auto:</strong> Solarcarport (PV-Dach)
          – siehe{" "}
          <Link
            href="/ratgeber/solarcarport-kosten"
            className="font-medium text-accent underline underline-offset-4 hover:text-ink"
          >
            Solarcarport
          </Link>
          .
        </li>
      </ul>

      <Faq items={faqs} heading="Häufige Fragen zu Carport oder Garage" />

      <CtaBand
        headline="Carport in Hamburg bauen lassen"
        text="Schildern Sie kurz Ihr Vorhaben – wir bringen Sie kostenlos und unverbindlich mit passenden Carport-Betrieben aus Hamburg und Umgebung zusammen."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-oder-garage-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preise sind Richtwerte (Stand Juni 2026) und ersetzen kein
        individuelles Angebot. Die tatsächlichen Kosten hängen von Material,
        Größe, Fundament und Region ab.
      </p>
    </RatgeberArticle>
  );
}
