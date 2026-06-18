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
  title: "Warmwasser-Wärmepumpe: Kosten, Funktion & lohnt sich das? (2026)",
  description:
    "Die Warmwasser-(Brauchwasser-)Wärmepumpe macht nur Warmwasser – günstig aus der Kellerluft. Funktion, Kosten (2.500–6.000 €), Stromverbrauch, Förderung (ehrlich) und für wen sich die Brauchwasserwärmepumpe lohnt. Herstellerneutral, mit Fachbetrieb-Vermittlung für Hamburg.",
  alternates: { canonical: "/ratgeber/warmwasser-waermepumpe" },
  openGraph: {
    title: "Warmwasser-Wärmepumpe: Kosten, Funktion & lohnt sich das?",
    description:
      "Warmwasser aus der Kellerluft – Funktion, Kosten, Stromverbrauch, Förderung & wann es sich lohnt.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was ist der Unterschied zwischen Warmwasser- und Heizungs-Wärmepumpe?",
    a: "Eine Warmwasser-Wärmepumpe (auch Brauchwasserwärmepumpe) macht ausschließlich Trinkwarmwasser – sie sitzt auf einem Warmwasserspeicher und zieht Wärme aus der Raumluft, meist im Keller. Sie kostet 2.500–6.000 € und ersetzt nicht die Heizung. Eine Heizungs-Wärmepumpe (Luft-Wasser) beheizt das ganze Haus und macht Warmwasser mit, kostet aber 15.000–28.000 €.",
  },
  {
    q: "Was kostet eine Warmwasser-Wärmepumpe?",
    a: "Inklusive Einbau liegen die Kosten 2026 meist bei 2.500–6.000 € – deutlich günstiger als eine komplette Heizungsmodernisierung. Im Bestand ersetzt sie oft nur den alten Warmwasserspeicher oder Elektroboiler, was die Installation einfach hält.",
  },
  {
    q: "Wie viel Strom verbraucht eine Warmwasser-Wärmepumpe?",
    a: "In einem 4-Personen-Haushalt rund 700–1.200 kWh pro Jahr (bei einer Jahresarbeitszahl um 3–4). Das sind je nach Strompreis etwa 200–400 € jährlich – rund ein Drittel dessen, was ein elektrischer Boiler oder Durchlauferhitzer kostet.",
  },
  {
    q: "Wird eine Brauchwasserwärmepumpe gefördert?",
    a: "Allein in der Regel nicht: Eine reine Warmwasser-Wärmepumpe erhält keine direkte staatliche Heizungsförderung. Wird sie zusammen mit einer förderfähigen Heizung (z. B. einer Luft-Wasser-Wärmepumpe) eingebaut, kann sie als Umfeldmaßnahme mitgefördert werden. Den größten Spareffekt bringt ohnehin der niedrige Stromverbrauch, nicht die Förderung.",
  },
  {
    q: "Wo muss eine Warmwasser-Wärmepumpe aufgestellt werden?",
    a: "Ideal im Keller, Heizungs- oder Hauswirtschaftsraum – dort gibt es genug Luftvolumen und oft warme Abwärme (Heizleitungen, Gefriertruhe), was die Effizienz steigert. Wichtig: Das Gerät kühlt und entfeuchtet den Aufstellraum. Im feuchten Keller ist das ein Vorteil; aus einem beheizten Wohnraum sollte sie ihre Wärme nicht ziehen.",
  },
  {
    q: "Lohnt sich eine Warmwasser-Wärmepumpe mit Photovoltaik?",
    a: "Besonders dann. Sie läuft gut tagsüber und lässt sich mit Solarstrom-Überschuss betreiben – so wird das Warmwasser phasenweise nahezu kostenlos. Ein Warmwasserspeicher wirkt dabei wie ein Wärmespeicher für überschüssigen PV-Strom.",
  },
];

export default function WarmwasserWaermepumpePage() {
  return (
    <RatgeberArticle
      title={
        <>
          Warmwasser-Wärmepumpe:
          <br />
          lohnt sich das?
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Warmwasser-Wärmepumpe",
          href: "/ratgeber/warmwasser-waermepumpe",
        },
      ]}
    >
      <TlDr>
        Eine Warmwasser-Wärmepumpe (Brauchwasserwärmepumpe) macht{" "}
        <strong>nur Warmwasser</strong> – günstig aus der Kellerluft. Sie kostet
        mit Einbau <strong>2.500–6.000 €</strong> und verbraucht im
        4-Personen-Haushalt nur <strong>700–1.200 kWh Strom pro Jahr</strong>{" "}
        (~200–400 €) – etwa ein Drittel eines Elektroboilers. Eine direkte
        Förderung gibt es nicht; mit Photovoltaik und einem feuchten Keller
        spielt sie ihre Stärken aber voll aus.
      </TlDr>

      <H2 id="was-ist">Was ist eine Warmwasser-Wärmepumpe?</H2>
      <P>
        Sie ist eine kompakte Wärmepumpe, die <strong>ausschließlich
        Trinkwarmwasser</strong> bereitet – nicht zu verwechseln mit der
        Heizungs-Wärmepumpe, die das ganze Haus beheizt. Das Gerät sitzt direkt
        auf einem Warmwasserspeicher (meist 200–300 Liter) und entzieht der
        umgebenden Luft Wärme. Sie ist damit eine günstige, einfach
        nachrüstbare Lösung – ideal, wenn die Heizung (noch) bleibt, das
        Warmwasser aber effizienter werden soll.
      </P>
      <CostTable
        head={["", "Warmwasser-Wärmepumpe", "Heizungs-Wärmepumpe (Luft-Wasser)"]}
        rows={[
          ["Aufgabe", "nur Warmwasser", "Heizung + Warmwasser"],
          ["Kosten (mit Einbau)", "2.500 – 6.000 €", "15.000 – 28.000 €"],
          ["Wärmequelle", "Raum-/Kellerluft", "Außenluft"],
          ["Direkt förderfähig", "nein", "ja (KfW, bis 70 %)"],
        ]}
      />
      <P>
        Wer das fossile Heizsystem komplett ersetzen will, ist bei der{" "}
        <Link
          href="/ratgeber/waermepumpe-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Heizungs-Wärmepumpe
        </Link>{" "}
        richtig. Geht es nur ums Warmwasser, ist die Brauchwasserwärmepumpe die
        viel günstigere Antwort.
      </P>

      <H2 id="funktion">Wie funktioniert sie?</H2>
      <P>
        Das Prinzip ist dasselbe wie bei jeder Wärmepumpe, nur kleiner: Ein
        Ventilator saugt Luft aus dem Aufstellraum an, ein Verdampfer entzieht
        ihr Wärme, ein Verdichter hebt die Temperatur an, und ein Wärmetauscher
        gibt die Wärme an das Wasser im Speicher ab. Die Energiequelle ist also
        die <strong>vorhandene Raum-, Keller- oder Abluft</strong>. Wo warme
        Abwärme anfällt – etwa von Heizleitungen oder Geräten im Keller –,
        arbeitet sie besonders effizient.
      </P>

      <H2 id="kosten">Was kostet eine Warmwasser-Wärmepumpe?</H2>
      <P>
        Mit Einbau liegen die Kosten 2026 meist bei <strong>2.500–6.000 €</strong>.
        Damit ist sie die günstigste Wärmepumpen-Variante überhaupt. Der größere
        Spareffekt liegt aber im Betrieb – verglichen mit elektrischer
        Warmwasserbereitung:
      </P>
      <CostTable
        head={["Warmwasser-Lösung", "Anschaffung", "Stromkosten / Jahr (4 Pers.)"]}
        rows={[
          ["Warmwasser-Wärmepumpe", "2.500 – 6.000 €", "~200 – 400 € (JAZ 3–4)"],
          ["Elektroboiler / Durchlauferhitzer", "500 – 1.500 €", "~800 – 1.200 € (Faktor 1)"],
        ]}
      />
      <P>
        Aus 1 kWh Strom macht die Wärmepumpe 3–4 kWh Wärme, der Elektroboiler nur
        eine. Die Mehrkosten in der Anschaffung holt sie über die Stromrechnung
        meist in wenigen Jahren wieder herein.
      </P>

      <H2 id="stromverbrauch">Stromverbrauch &amp; Effizienz</H2>
      <P>
        Im 4-Personen-Haushalt verbraucht eine Warmwasser-Wärmepumpe rund{" "}
        <strong>700–1.200 kWh pro Jahr</strong>. Die Effizienz (Jahresarbeitszahl,
        also wie viel Wärme aus einer Kilowattstunde Strom wird) liegt bei{" "}
        <strong>2,5–3,5 mit Kellerluft</strong> und bis zu <strong>4,5 mit warmer
        Abluft</strong>. Je wärmer und luftreicher der Aufstellraum, desto besser.
        Mit eigenem{" "}
        <Link
          href="/ratgeber/solarcarport-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Solarstrom
        </Link>{" "}
        läuft sie tagsüber günstig bis nahezu kostenlos.
      </P>

      <H2 id="foerderung">Gibt es eine Förderung?</H2>
      <P>
        Ehrlich: <strong>allein in der Regel nicht.</strong> Eine reine
        Warmwasser-Wärmepumpe erhält keine direkte staatliche Heizungsförderung –
        die gilt für Systeme, die heizen. Wird die Brauchwasserwärmepumpe{" "}
        <strong>zusammen mit einer förderfähigen Heizung</strong> (z. B. einer
        Luft-Wasser-Wärmepumpe) eingebaut, kann sie als Umfeldmaßnahme
        mitgefördert werden. Das ist aber kein Beinbruch: Der eigentliche Vorteil
        liegt im niedrigen Stromverbrauch, nicht im Zuschuss – anders als bei der
        teuren Heizungs-Wärmepumpe entscheidet die Förderung hier nicht über die
        Wirtschaftlichkeit.
      </P>

      <CtaBand
        headline="Passt eine Warmwasser-Wärmepumpe zu Ihrem Haus?"
        text="Wir verkaufen keine Geräte – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Fachbetriebe, die Aufstellort, Speichergröße und Wirtschaftlichkeit ehrlich für Ihr Zuhause beurteilen."
        ctaLabel="Fachbetrieb anfragen"
        service="Warmwasser-Wärmepumpe"
        source="warmwasser-waermepumpe-page"
      />

      <H2 id="lohnt">Für wen lohnt sie sich – und für wen nicht?</H2>
      <P>
        Die Warmwasser-Wärmepumpe ist eine der wirtschaftlichsten kleinen
        Energiemaßnahmen – wenn die Rahmenbedingungen passen.
      </P>
      <P>
        <strong>Gut geeignet</strong>, wenn:
      </P>
      <ul className="mt-2 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>Sie einen alten Elektroboiler oder Durchlauferhitzer ersetzen (größter Spareffekt).</li>
        <li>ein <strong>unbeheizter, eher feuchter Keller</strong> als Aufstellort da ist – die Entfeuchtung ist ein willkommener Nebeneffekt.</li>
        <li>eine <strong>Photovoltaik-Anlage</strong> vorhanden oder geplant ist.</li>
        <li>die Heizung vorerst bleibt, das Warmwasser aber effizienter werden soll.</li>
      </ul>
      <P>
        <strong>Weniger geeignet</strong>, wenn:
      </P>
      <ul className="mt-2 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>nur ein kleiner, <strong>beheizter</strong> Raum als Standort bleibt – dann kühlt die Pumpe Wohnwärme weg (die „Keller-Kühl-Falle“).</li>
        <li>der Warmwasserbedarf sehr hoch und gleichmäßig ist – die Aufheizzeit von 8–10 Stunden kann dann knapp werden.</li>
        <li>ohnehin eine Heizungs-Wärmepumpe geplant ist, die das Warmwasser gleich miterledigt.</li>
      </ul>

      <H2 id="hamburg">Warmwasser-Wärmepumpe in Hamburg</H2>
      <P>
        Für viele Hamburger Bestandshäuser mit Gas- oder Ölheizung und einem
        Kellerraum ist die Brauchwasserwärmepumpe ein günstiger erster Schritt
        Richtung Effizienz – gerade in Kombination mit einer PV-Anlage. Wir sind
        kein Hersteller: Über unsere Vermittlung erhalten Sie herstellerneutral
        Angebote geprüfter Fachbetriebe aus Niendorf und Umgebung, die Aufstellort,
        Speichergröße und Wirtschaftlichkeit ehrlich einschätzen. Sie überlegen
        ohnehin, die ganze Heizung zu tauschen? Dann lohnt der Blick auf die{" "}
        <Link
          href="/ratgeber/waermepumpe-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Heizungs-Wärmepumpe und ihre Förderung
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zur Warmwasser-Wärmepumpe" />

      <CtaBand
        headline="Lohnt sich die Brauchwasserwärmepumpe für Sie?"
        text="Schildern Sie kurz Ihre Situation – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Fachbetriebe aus Hamburg und Umgebung, die Aufstellort, Kosten und Ersparnis konkret beurteilen."
        ctaLabel="Fachbetrieb anfragen"
        service="Warmwasser-Wärmepumpe"
        source="warmwasser-waermepumpe-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Angaben sind unverbindliche Richtwerte (Stand: Juni 2026) und ersetzen
        keine Fachberatung. Verbrauch, Effizienz und Ersparnis hängen von
        Aufstellort, Luftangebot, Speichergröße, Warmwasserbedarf und Strompreis
        ab. Strompreise sind beispielhaft angenommen.
      </p>
    </RatgeberArticle>
  );
}
