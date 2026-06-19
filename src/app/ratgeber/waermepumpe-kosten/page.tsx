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
  title: "Wärmepumpe: Kosten & Förderung 2026 (Luft-Wasser, Hamburg)",
  description:
    "Was kostet eine Wärmepumpe mit Einbau? Preise 2026 für Luft-Wasser, Erdwärme & Co., die KfW-Förderung (bis 70 %), Strom- und Betriebskosten und ein ehrlicher Altbau-Check – herstellerneutral, mit Fachbetrieb-Vermittlung für Hamburg.",
  alternates: { canonical: "/ratgeber/waermepumpe-kosten" },
  openGraph: {
    title: "Wärmepumpe: Kosten & Förderung 2026",
    description:
      "Preise mit Einbau nach Typ, KfW-Förderung bis 70 %, Betriebskosten & ehrlicher Altbau-Check – herstellerneutral.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet eine Wärmepumpe mit Einbau?",
    a: "Eine Luft-Wasser-Wärmepumpe kostet im Einfamilienhaus 2026 mit Einbau typischerweise 15.000–28.000 €. Erdwärmepumpen (Sole-Wasser) liegen wegen der Bohrung höher bei 24.000–45.000 €. Nach KfW-Förderung (bis 70 %, max. 21.000 € Zuschuss) bleibt oft ein Eigenanteil von rund 9.000–15.000 €.",
  },
  {
    q: "Wie viel Förderung gibt es 2026 für eine Wärmepumpe?",
    a: "Über die KfW (Programm 458) sind bis zu 70 % Zuschuss möglich, gedeckelt auf 30.000 € förderfähige Kosten (also max. 21.000 €). Sie setzt sich zusammen aus 30 % Grundförderung, 20 % Klimageschwindigkeitsbonus (für Selbstnutzer beim Austausch einer alten fossilen Heizung), 30 % Einkommensbonus (bis 40.000 € zu versteuerndes Haushaltseinkommen) und 5 % Effizienzbonus. Seit 2026 muss das Außengerät zudem mindestens 10 dB leiser als der Grenzwert sein.",
  },
  {
    q: "Lohnt sich eine Wärmepumpe im unsanierten Altbau?",
    a: "Oft ja, aber nicht immer. Entscheidend ist die nötige Vorlauftemperatur: Liegt sie unter etwa 55 °C, arbeitet die Wärmepumpe effizient. In unsanierten Altbauten mit hohem Wärmebedarf erreichen Luft-Wasser-Wärmepumpen laut Feldstudien teils nur Jahresarbeitszahlen von 2,5–3,0, was die Stromkosten steigen lässt. Sinnvoll ist die Reihenfolge: erst Dämmung und Heizkörper-Check, dann Wärmepumpe. Eine Heizlastberechnung vor dem Kauf ist Pflicht.",
  },
  {
    q: "Wie viel Strom verbraucht eine Wärmepumpe?",
    a: "Das hängt von Wärmebedarf und Effizienz (Jahresarbeitszahl, JAZ) ab. Beispiel: 20.000 kWh Heizbedarf bei JAZ 4 ergeben rund 5.000 kWh Strom im Jahr. In gut gedämmten Häusern liegt der Verbrauch unter 20 kWh/m², in ungedämmten Altbauten oft über 60 kWh/m². Ein dynamischer Wärmepumpentarif senkt die Stromkosten zusätzlich.",
  },
  {
    q: "Muss ich für eine Wärmepumpe neue Heizkörper einbauen?",
    a: "Nicht zwingend. Viele moderne Wärmepumpen erreichen Vorlauftemperaturen bis 70 °C, sodass vorhandene Heizkörper oft weitergenutzt werden können. Effizienter ist die Anlage bei niedriger Vorlauftemperatur – große Flächenheizkörper oder eine Fußbodenheizung helfen, müssen aber nicht überall ersetzt werden. Der Fachbetrieb prüft das im Rahmen der Heizlastberechnung.",
  },
  {
    q: "Wärmepumpe oder Klimaanlage zum Heizen?",
    a: "Eine Luft-Wasser-Wärmepumpe ist die vollwertige Heizung, die Heizkörper und Warmwasser versorgt und förderfähig ist. Eine Split-Klimaanlage (Luft-Luft) heizt über die Raumluft, bereitet kein Warmwasser und eignet sich eher als Zusatz- oder Übergangsheizung. Welche Variante passt, hängt davon ab, ob Sie das fossile Heizsystem ersetzen oder nur ergänzen wollen.",
  },
];

export default function WaermepumpeKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Wärmepumpe: Kosten
          <br />
          &amp; Förderung 2026
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Wärmepumpe-Kosten",
          href: "/ratgeber/waermepumpe-kosten",
        },
      ]}
    >
      <TlDr>
        Eine <strong>Luft-Wasser-Wärmepumpe</strong> kostet im Einfamilienhaus
        2026 mit Einbau typischerweise <strong>15.000–28.000 €</strong>,
        Erdwärme wegen der Bohrung <strong>24.000–45.000 €</strong>. Über die{" "}
        <strong>KfW-Förderung (bis 70 %, max. 21.000 €)</strong> sinkt der
        Eigenanteil oft auf <strong>9.000–15.000 €</strong>. Im Betrieb ist die
        Wärmepumpe meist günstiger als Gas – im unsanierten Altbau aber nur bei
        passender Vorlauftemperatur.
      </TlDr>

      <H2 id="was-kostet">Was kostet eine Wärmepumpe?</H2>
      <P>
        Der Preis hängt stark vom Typ ab – genauer gesagt davon, woher die
        Wärmepumpe ihre Umweltwärme holt. Die Luft-Wasser-Wärmepumpe ist am
        günstigsten und am verbreitetsten, weil sie keine Bohrung oder Grabung
        braucht. Erd- und Grundwasser-Wärmepumpen sind effizienter, aber durch
        die Erschließung deutlich teurer. Alle Preise verstehen sich inklusive
        Einbau:
      </P>
      <CostTable
        head={["Wärmepumpen-Typ", "Gesamtkosten (mit Einbau)", "Erschließung"]}
        rows={[
          ["Luft-Wasser", "15.000 – 28.000 €", "gering"],
          ["Sole-Wasser (Erdkollektor)", "20.000 – 35.000 €", "Grabung"],
          ["Sole-Wasser (Erdsonde)", "24.000 – 45.000 €", "Tiefenbohrung"],
          ["Wasser-Wasser (Grundwasser)", "22.000 – 40.000 €", "2 Brunnen + Genehmigung"],
          ["Luft-Luft (Split)", "ab 1.800 € / Raum", "siehe Klima-Ratgeber"],
        ]}
      />
      <P>
        Die <strong>Luft-Luft-Variante</strong> ist keine vollwertige Heizung mit
        Heizkörpern und Warmwasser, sondern heizt über die Raumluft – dazu mehr
        im Ratgeber{" "}
        <Link
          href="/ratgeber/klimaanlage-als-heizung"
          className="text-accent underline-offset-2 hover:underline"
        >
          Klimaanlage als Heizung
        </Link>
        . Für den klassischen Heizungstausch ist die{" "}
        <strong>Luft-Wasser-Wärmepumpe</strong> der Regelfall.
      </P>

      <H2 id="preis-zusammensetzung">Wie setzt sich der Preis zusammen?</H2>
      <P>
        Drei Blöcke bestimmen die Kosten: das Gerät selbst, der Einbau und – bei
        Erd- und Grundwasser-Wärmepumpen – die Erschließung der Wärmequelle. Bei
        der Luft-Wasser-Wärmepumpe entfällt der teure dritte Block fast komplett.
      </P>
      <CostTable
        head={["Kostenblock", "Luft-Wasser", "Erdwärme (Sonde)"]}
        rows={[
          ["Gerät", "9.000 – 16.000 €", "12.000 – 20.000 €"],
          ["Einbau & Hydraulik", "5.000 – 10.000 €", "5.000 – 10.000 €"],
          ["Erschließung (Bohrung/Grabung)", "gering", "8.000 – 16.000 €"],
          ["Pufferspeicher (optional)", "1.000 – 2.500 €", "1.000 – 2.500 €"],
        ]}
      />

      <H2 id="foerderung">Was kostet die Wärmepumpe nach Förderung 2026?</H2>
      <P>
        Die Wärmepumpe ist die am stärksten geförderte Heizung. Zuständig ist die{" "}
        <strong>KfW</strong> (Programm 458, Heizungsförderung für Wohngebäude).
        Die Bausteine sind kombinierbar – maximal <strong>70 %</strong> auf
        gedeckelte <strong>30.000 € förderfähige Kosten</strong>, also bis zu{" "}
        <strong>21.000 € Zuschuss</strong> für die erste Wohneinheit:
      </P>
      <CostTable
        head={["Förderbaustein", "Zuschuss", "Bedingung"]}
        rows={[
          ["Grundförderung", "30 %", "für alle"],
          ["Klimageschwindigkeits-Bonus", "20 %", "Selbstnutzer, Austausch alter fossiler Heizung (bis 2028)"],
          ["Einkommens-Bonus", "30 %", "bis 40.000 € zu versteuerndes Haushaltseinkommen"],
          ["Effizienz-Bonus", "5 %", "natürliches Kältemittel / Erdwärme"],
          ["Maximal kombiniert", "70 %", "Deckel: 30.000 € Kosten → max. 21.000 €"],
        ]}
      />
      <P>
        Ein Rechenbeispiel: Eine Luft-Wasser-Wärmepumpe für 25.000 € mit
        durchschnittlich 55 % Förderung kostet nach Abzug noch rund{" "}
        <strong>11.000–14.000 € Eigenanteil</strong>. Neu seit 2026: Gefördert
        wird nur, wenn das Außengerät mindestens <strong>10 dB unter dem
        gesetzlichen Lärm-Grenzwert</strong> liegt – ein Punkt, der gerade in
        dichter Bebauung ohnehin wichtig ist. Wie Sie die Förderung Schritt für
        Schritt beantragen (und den häufigsten Fehler vermeiden), steht im
        Ratgeber{" "}
        <Link
          href="/ratgeber/waermepumpe-foerderung"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe-Förderung 2026
        </Link>
        .
      </P>

      <CtaBand
        headline="Was kostet die Wärmepumpe für Ihr Haus konkret?"
        text="Wir verkaufen keine Anlagen – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Heizungs-Fachbetriebe, die Heizlast, passenden Typ und Ihre konkrete Förderung berechnen."
        ctaLabel="Fachbetrieb anfragen"
        service="Wärmepumpe"
        source="waermepumpe-page"
      />

      <H2 id="betrieb">Was kostet der Betrieb? Strom &amp; Wartung</H2>
      <P>
        Die laufenden Kosten bestimmt die <strong>Jahresarbeitszahl (JAZ)</strong>
        : Sie sagt, wie viel Wärme aus einer Kilowattstunde Strom wird. Eine
        Luft-Wasser-Wärmepumpe erreicht im Schnitt eine JAZ von rund{" "}
        <strong>3,4</strong>, Erdwärme etwa 4,3. Beispiel: 20.000 kWh Heizbedarf
        bei JAZ 4 ergeben ~5.000 kWh Strom, bei 36 ct/kWh also etwa{" "}
        <strong>1.800 € pro Jahr</strong>. Hinzu kommen rund{" "}
        <strong>250–400 € Wartung</strong> jährlich. Ein dynamischer
        Wärmepumpentarif und eigener{" "}
        <Link
          href="/ratgeber/solarcarport-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Solarstrom
        </Link>{" "}
        senken die Betriebskosten weiter.
      </P>

      <H2 id="vs-gas">Wärmepumpe oder Gasheizung – was ist günstiger?</H2>
      <P>
        In der Anschaffung ist die Gasheizung günstiger, im Betrieb meist die
        Wärmepumpe – weil sie aus einer Kilowattstunde Strom ein Vielfaches an
        Wärme macht. Ein typischer Vergleich bei 20.000 kWh Heizbedarf:
      </P>
      <CostTable
        head={["", "Wärmepumpe", "Gasheizung"]}
        rows={[
          ["Wirkungsgrad / JAZ", "4", "0,9"],
          ["Energieverbrauch pro Jahr", "5.000 kWh Strom", "22.250 kWh Gas"],
          ["Energiepreis (Beispiel)", "36 ct/kWh", "12 ct/kWh"],
          ["Heizkosten pro Jahr", "~1.800 €", "~2.670 €"],
        ]}
      />
      <P>
        Dazu kommt: Die Wärmepumpe ist hoch gefördert, eine neue Gasheizung nicht –
        und der CO₂-Preis verteuert Gas über die Jahre weiter. Die genaue Rechnung
        hängt aber von Ihrem Strom-zu-Gas-Verhältnis und der Effizienz im Gebäude
        ab.
      </P>

      <H2 id="altbau">Lohnt sich eine Wärmepumpe im Altbau?</H2>
      <P>
        Hier die ehrliche Antwort: <strong>oft ja, aber nicht automatisch.</strong>{" "}
        Das Fraunhofer ISE kommt nach vielen Feldmessungen zu dem Schluss, dass
        Wärmepumpen in der Mehrzahl der Altbauten technisch und ökologisch sinnvoll
        sind. Entscheidend ist die nötige <strong>Vorlauftemperatur</strong>:
        liegt sie unter ~55 °C, läuft die Wärmepumpe effizient. In{" "}
        <strong>unsanierten</strong> Altbauten mit hohem Wärmebedarf sinkt die JAZ
        dagegen oft auf 2,5–3,0 – dann steigen die Stromkosten spürbar. Die
        wirtschaftliche Reihenfolge lautet daher: erst Dämmung und
        Heizkörper-Check, dann Wärmepumpe. <strong>Wann es sich (noch) nicht
        lohnt:</strong> im schlecht gedämmten Haus mit kleinen Heizkörpern und
        ohne Sanierungsbudget – hier erst die Hülle verbessern. Eine
        Heizlastberechnung vor dem Kauf ist in jedem Fall Pflicht. Alle Details –
        Voraussetzungen, Heizkörper ohne Fußbodenheizung und die
        Hochtemperatur-Wärmepumpe – im Ratgeber{" "}
        <Link
          href="/ratgeber/waermepumpe-altbau"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe im Altbau
        </Link>
        .
      </P>

      <H2 id="hamburg">Wärmepumpe in Hamburg: das ist hier zu beachten</H2>
      <P>
        Hamburg bringt eigene Themen mit, die in den bundesweiten Ratgebern fehlen.
        In <strong>dichter Reihenhaus- und Stadtteilbebauung</strong> ist die
        Platzierung des Außengeräts und der <strong>Lärmschutz zum Nachbarn</strong>{" "}
        der heikelste Punkt – seit 2026 ohnehin Förderbedingung. In Teilen der
        Stadt kann <strong>Fernwärme</strong> die sinnvollere (teils
        vorgeschriebene) Alternative sein, und bei Gebäuden unter{" "}
        <strong>Denkmalschutz</strong> gelten Auflagen für Außeneinheiten. Wir sind
        kein Hersteller und verkaufen keine Anlage: Über unsere Vermittlung
        erhalten Sie herstellerneutral Angebote geprüfter Heizungs-Fachbetriebe aus
        Niendorf und Umgebung, die genau diese örtlichen Punkte mit Ihnen klären.
        Wer ohnehin auf Effizienz setzt, kombiniert die Wärmepumpe gern mit{" "}
        <Link
          href="/ratgeber/wallbox-installieren-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wallbox &amp; Ladetechnik
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Wärmepumpen-Kosten" />

      <CtaBand
        headline="Jetzt herstellerneutral Wärmepumpen-Angebote vergleichen"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Heizungs-Fachbetriebe aus Hamburg und Umgebung, die Auslegung, Kosten und Förderung konkret für Ihr Haus berechnen."
        ctaLabel="Fachbetrieb anfragen"
        service="Wärmepumpe"
        source="waermepumpe-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen keine Fachberatung. Tatsächliche Kosten und Wirtschaftlichkeit
        hängen von Wärmepumpen-Typ, Gebäude, Dämmung, Heizlast und individueller
        Auslegung ab. Für die Förderung gelten die jeweils aktuellen
        KfW-Bedingungen.
      </p>
    </RatgeberArticle>
  );
}
