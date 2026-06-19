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
  title: "Wärmepumpe Stromverbrauch: So viel Strom braucht sie (2026)",
  description:
    "Wie viel Strom verbraucht eine Wärmepumpe? Verbrauch pro Jahr berechnen (Heizbedarf ÷ JAZ), realistische kWh- und Kostenbeispiele für das Einfamilienhaus, und wie Sie mit Wärmepumpentarif (§14a), eigenem Strom und PV die Kosten senken.",
  alternates: { canonical: "/ratgeber/waermepumpe-stromverbrauch" },
  openGraph: {
    title: "Wärmepumpe Stromverbrauch: So viel Strom braucht sie",
    description:
      "Verbrauch berechnen, kWh- & Kostenbeispiele und wie Sie mit Wärmepumpentarif und PV sparen.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Wie viel Strom braucht eine Wärmepumpe im Jahr?",
    a: "Für ein durchschnittliches Einfamilienhaus (rund 150 m²) sind 3.000–6.000 kWh pro Jahr typisch. In gut gedämmten Häusern können es 2.500–3.000 kWh sein, im unsanierten Altbau 8.000–10.000 kWh. Der genaue Wert ergibt sich aus dem Heizwärmebedarf geteilt durch die Jahresarbeitszahl (JAZ).",
  },
  {
    q: "Wie berechne ich den Stromverbrauch einer Wärmepumpe?",
    a: "Mit der Formel: Stromverbrauch pro Jahr = Heizwärmebedarf pro Jahr ÷ Jahresarbeitszahl (JAZ). Beispiel: 15.000 kWh Heizbedarf ÷ JAZ 3,5 = rund 4.300 kWh Strom. Die JAZ sagt, wie viel Wärme aus einer Kilowattstunde Strom entsteht – je höher, desto weniger Strom.",
  },
  {
    q: "Was kostet der Strom für eine Wärmepumpe pro Jahr?",
    a: "Bei 4.300 kWh und rund 30 ct/kWh sind das etwa 1.300 € im Jahr. Mit einem vergünstigten Wärmepumpentarif (oft 10–30 % günstiger als Haushaltsstrom) und eigenem Solarstrom lässt sich dieser Betrag deutlich senken.",
  },
  {
    q: "Was ist ein Wärmepumpentarif – und lohnt er sich?",
    a: "Ein spezieller Stromtarif für steuerbare Wärmepumpen mit reduzierten Netzentgelten nach § 14a EnWG, im Schnitt 10–30 % günstiger als normaler Haushaltsstrom. Er lohnt sich vor allem ohne große PV-Anlage – dann sind einige hundert Euro Ersparnis pro Jahr möglich. Wer viel eigenen Solarstrom nutzt, profitiert weniger.",
  },
  {
    q: "Brauche ich einen separaten Stromzähler für die Wärmepumpe?",
    a: "Nicht mehr zwingend. Früher war ein zweiter Zähler für den vergünstigten Tarif Pflicht; seit der Neuregelung des § 14a EnWG gibt es flexiblere Module, die teils ohne separaten Zähler auskommen. Welches Modul günstiger ist, hängt von Verbrauch und Technik ab – der Netzbetreiber und Ihr Fachbetrieb klären das.",
  },
  {
    q: "Verbraucht eine Wärmepumpe im Altbau mehr Strom?",
    a: "Ja, in der Regel deutlich. Im unsanierten Altbau liegt der Stromverbrauch oft über 60 kWh/m², in einem sanierten Gebäude unter 20 kWh/m². Grund ist die höhere nötige Vorlauftemperatur, die die JAZ senkt. Mehr dazu im Ratgeber Wärmepumpe im Altbau.",
  },
];

export default function WaermepumpeStromverbrauchPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Wärmepumpe: wie viel
          <br />
          Strom braucht sie?
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Wärmepumpe Stromverbrauch",
          href: "/ratgeber/waermepumpe-stromverbrauch",
        },
      ]}
    >
      <TlDr>
        Eine Wärmepumpe verbraucht im Einfamilienhaus typischerweise{" "}
        <strong>3.000–6.000 kWh Strom pro Jahr</strong> – bei rund 30 ct/kWh also
        etwa <strong>900–1.800 €</strong>. Die Faustformel:{" "}
        <strong>Heizwärmebedarf ÷ Jahresarbeitszahl</strong>. Gut gedämmte Häuser
        liegen darunter, unsanierte Altbauten deutlich darüber. Mit einem
        Wärmepumpentarif (10–30 % günstiger) und eigenem Solarstrom sinken die
        Kosten weiter.
      </TlDr>

      <H2 id="wie-viel">Wie viel Strom braucht eine Wärmepumpe?</H2>
      <P>
        Der Stromverbrauch hängt vor allem vom <strong>Dämmzustand</strong> des
        Hauses ab – er entscheidet, wie viel Wärme die Pumpe überhaupt liefern
        muss. Grobe Orientierung für ein Haus mit rund 150 m² (Werte pro Jahr):
      </P>
      <CostTable
        head={["Gebäude (≈150 m²)", "Stromverbrauch / Jahr", "Stromkosten (~30 ct/kWh)"]}
        rows={[
          ["Neubau / gut saniert (<20 kWh/m²)", "2.500 – 3.000 kWh", "~750 – 900 €"],
          ["Teilsaniert (Durchschnitt)", "4.500 – 6.000 kWh", "~1.350 – 1.800 €"],
          ["Unsanierter Altbau (>60 kWh/m²)", "8.000 – 10.000 kWh", "~2.400 – 3.000 €"],
        ]}
      />
      <P>
        Hinzu kommt die Warmwasserbereitung: Sie arbeitet mit einer niedrigeren
        Effizienz (JAZ ~2,8) und schlägt bei einem 4-Personen-Haushalt mit rund{" "}
        <strong>1.000 kWh pro Jahr</strong> extra zu Buche.
      </P>

      <H2 id="berechnen">Stromverbrauch berechnen: die Formel</H2>
      <P>
        Sie brauchen nur zwei Werte – den jährlichen Heizwärmebedarf und die
        Jahresarbeitszahl Ihrer Wärmepumpe:
      </P>
      <p className="mt-4 border-l-2 border-accent bg-paper-2 px-5 py-4 font-display text-base font-bold sm:text-lg">
        Stromverbrauch / Jahr = Heizwärmebedarf / Jahr ÷ Jahresarbeitszahl (JAZ)
      </p>
      <P>
        Die <strong>Jahresarbeitszahl (JAZ)</strong> sagt, wie viel Wärme aus einer
        Kilowattstunde Strom entsteht – je höher, desto weniger Strom. Ein Beispiel:
        Ein Haus mit <strong>15.000 kWh</strong> Heizwärmebedarf und einer{" "}
        <strong>JAZ von 3,5</strong> verbraucht 15.000 ÷ 3,5 ={" "}
        <strong>rund 4.300 kWh Strom</strong> im Jahr – bei 30 ct/kWh etwa{" "}
        <strong>1.300 €</strong>.
      </P>

      <H2 id="faktoren">Wovon hängt der Verbrauch ab?</H2>
      <P>
        Der größte Hebel ist die JAZ, und die hängt stark vom Wärmepumpen-Typ und
        der nötigen Vorlauftemperatur ab. Erd- und Grundwasser-Wärmepumpen sind
        effizienter als Luft-Wärmepumpen, brauchen aber eine teurere Erschließung:
      </P>
      <CostTable
        head={["Wärmepumpen-Typ", "Typische JAZ", "Aus 1 kWh Strom werden"]}
        rows={[
          ["Luft-Wasser", "3,0 – 4,0", "3 – 4 kWh Wärme"],
          ["Sole-Wasser (Erdwärme)", "3,5 – 4,5", "3,5 – 4,5 kWh Wärme"],
          ["Wasser-Wasser (Grundwasser)", "4,0 – 5,0", "4 – 5 kWh Wärme"],
        ]}
      />
      <P>
        Daneben zählen <strong>Dämmung</strong> (bestimmt den Heizbedarf),{" "}
        <strong>Vorlauftemperatur</strong> (je niedriger, desto effizienter),
        Heizflächen und das Nutzerverhalten. Im{" "}
        <Link
          href="/ratgeber/waermepumpe-altbau"
          className="text-accent underline-offset-2 hover:underline"
        >
          unsanierten Altbau
        </Link>{" "}
        steigt der Verbrauch deutlich, weil die nötige Vorlauftemperatur die JAZ
        drückt.
      </P>

      <H2 id="senken">Stromkosten senken: Wärmepumpentarif, § 14a &amp; PV</H2>
      <P>
        Beim Verbrauch hilft Effizienz – beim <em>Preis</em> pro Kilowattstunde
        helfen drei Hebel:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Wärmepumpentarif:</strong> spezieller Stromtarif für steuerbare
          Wärmepumpen, im Schnitt 10–30 % günstiger als Haushaltsstrom – ohne
          große PV-Anlage einige hundert Euro Ersparnis pro Jahr.
        </li>
        <li>
          <strong>Reduzierte Netzentgelte nach § 14a EnWG:</strong> für steuerbare
          Wärmepumpen seit 2024; ein separater Zähler ist dank flexiblerer Module
          nicht mehr zwingend. Welches Modul günstiger ist, hängt vom Verbrauch ab.
        </li>
        <li>
          <strong>Eigener Solarstrom:</strong> Jede selbst erzeugte Kilowattstunde
          ersetzt teuren Netzstrom. Mit{" "}
          <Link
            href="/ratgeber/solarcarport-kosten"
            className="text-accent underline-offset-2 hover:underline"
          >
            Photovoltaik
          </Link>{" "}
          sinken die Heizstromkosten dauerhaft – dann lohnt ein separater
          Wärmepumpentarif allerdings oft weniger.
        </li>
      </ul>

      <CtaBand
        headline="Wie hoch wäre der Verbrauch in Ihrem Haus?"
        text="Wir verkaufen keine Anlagen – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Heizungs-Fachbetriebe, die Verbrauch, Jahresarbeitszahl und passenden Stromtarif realistisch für Ihr Gebäude einschätzen."
        ctaLabel="Fachbetrieb anfragen"
        service="Wärmepumpe"
        source="waermepumpe-stromverbrauch-page"
      />

      <H2 id="vergleich">Ist das viel? Einordnung der Stromkosten</H2>
      <P>
        Der höhere Stromverbrauch klingt zunächst nach viel – ersetzt aber Gas oder
        Öl komplett. Aus einer Kilowattstunde Strom macht die Wärmepumpe drei bis
        fünf Kilowattstunden Wärme; eine Gasheizung kommt nur auf etwa eine. Unterm
        Strich liegen die jährlichen Heizkosten meist unter denen einer Gasheizung –
        die Anschaffungs- und Förderseite rechnen wir im Ratgeber{" "}
        <Link
          href="/ratgeber/waermepumpe-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe: Kosten &amp; Förderung
        </Link>{" "}
        durch.
      </P>

      <H2 id="hamburg">Wärmepumpenstrom in Hamburg</H2>
      <P>
        In Hamburg läuft die Anmeldung der steuerbaren Wärmepumpe und der
        reduzierten Netzentgelte über die <strong>Hamburger Energienetze</strong> –
        das übernimmt in der Regel der ausführende Fachbetrieb mit. Bei den
        Stromtarifen lohnt der Vergleich: Wärmepumpentarife mehrerer Anbieter sind
        auch in Hamburg verfügbar. Wir sind kein Hersteller und kein
        Stromanbieter – über unsere Vermittlung erhalten Sie herstellerneutral
        Angebote geprüfter Fachbetriebe aus Niendorf und Umgebung, die Verbrauch und
        Tarifoptionen ehrlich für Ihr Haus einordnen.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zum Stromverbrauch der Wärmepumpe" />

      <CtaBand
        headline="Realistische Verbrauchsschätzung für Ihr Haus"
        text="Schildern Sie kurz Ihr Gebäude – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Heizungs-Fachbetriebe aus Hamburg und Umgebung, die Verbrauch, Effizienz und Stromkosten konkret berechnen."
        ctaLabel="Fachbetrieb anfragen"
        service="Wärmepumpe"
        source="waermepumpe-stromverbrauch-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Angaben sind unverbindliche Richtwerte (Stand: Juni 2026) und ersetzen
        keine Fachberatung. Der tatsächliche Stromverbrauch hängt von Gebäude,
        Dämmung, Heizlast, Jahresarbeitszahl, Warmwasserbedarf und Nutzerverhalten
        ab. Strompreise sind beispielhaft angenommen.
      </p>
    </RatgeberArticle>
  );
}
