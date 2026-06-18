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
  title: "Klimaanlage als Heizung: Lohnt sich das? (Wärmepumpe & Förderung 2026)",
  description:
    "Kann eine Klimaanlage heizen? Split-Klimaanlagen sind Luft-Luft-Wärmepumpen und heizen effizient (SCOP 4–5). Unterschied zur Wärmepumpe, Heizkosten, Förderung 2026 (KfW) und für wen sich Heizen mit der Klimaanlage wirklich lohnt.",
  alternates: { canonical: "/ratgeber/klimaanlage-als-heizung" },
  openGraph: {
    title: "Klimaanlage als Heizung: Lohnt sich das?",
    description:
      "Heizen mit der Split-Klimaanlage – Effizienz, Unterschied zur Wärmepumpe, Kosten & Förderung 2026.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Kann eine Klimaanlage heizen?",
    a: "Ja. Die meisten modernen Split-Klimaanlagen sind reversible Luft-Luft-Wärmepumpen: Sie drehen den Kältekreislauf um und geben Wärme an den Raum ab. Sie heizen effizient (SCOP meist 4–5) und sind im Übergang oft günstiger als eine Gas- oder Strom-Direktheizung. An sehr kalten Tagen sinkt die Effizienz, und Warmwasser können sie nicht bereiten.",
  },
  {
    q: "Klimaanlage oder Wärmepumpe – was ist der Unterschied?",
    a: "Technisch ist eine Split-Klimaanlage bereits eine Luft-Luft-Wärmepumpe. Der Unterschied liegt in der Auslegung und im Zweck: Eine als „Klimaanlage“ verkaufte Anlage ist auf Kühlen optimiert und gibt die Wärme über die Raumluft ab; eine „Luft-Wasser-Wärmepumpe“ ist auf Heizen ausgelegt und speist Heizkörper oder Fußbodenheizung. Reversible Geräte können beides – die Frage ist, was die Hauptaufgabe ist.",
  },
  {
    q: "Wird eine Klimaanlage gefördert?",
    a: "Nur, wenn sie als vollwertige Heizung dient. Eine reine Kühl-Klimaanlage wird nicht gefördert. Eine reversible Luft-Luft-Wärmepumpe, die ein fossiles Heizsystem ersetzt und die Effizienz- und Auslegungsvorgaben (u. a. DIN EN 12831, Mindest-ETAs) erfüllt, kann seit 2024 über die KfW gefördert werden – mit bis zu 70 % Zuschuss auf maximal 30.000 € förderfähige Kosten. In der Praxis erfüllt eine typische Split-Klimaanlage zum Kühlen diese Bedingungen nicht.",
  },
  {
    q: "Wie viel Strom braucht eine Klimaanlage zum Heizen?",
    a: "Bei einem SCOP von 4–5 erzeugt die Anlage aus 1 kWh Strom etwa 4–5 kWh Wärme. Eine Gasheizung macht aus derselben Energie nur rund 1 kWh Wärme. Heizen mit der Klimaanlage ist damit deutlich effizienter als eine elektrische Direktheizung; ob es günstiger als Gas ist, hängt vom Verhältnis Strom- zu Gaspreis ab.",
  },
  {
    q: "Heizt eine Klimaanlage auch bei Minusgraden?",
    a: "Ja, moderne Geräte heizen bis etwa −15 bis −20 °C. Allerdings sinkt die Effizienz (der SCOP), je kälter die Außenluft ist – an den kältesten Tagen steigt der Stromverbrauch spürbar. Für gut gedämmte Häuser oder als Zusatzheizung ist das meist unkritisch; als alleinige Heizung im ungedämmten Altbau stößt das Prinzip an Grenzen.",
  },
  {
    q: "Lohnt sich Heizen mit Klimaanlage im Altbau?",
    a: "Als Zusatz- oder Übergangsheizung oft ja: Sie deckt einen großen Teil der Heizsaison günstig ab und kühlt im Sommer. Als alleinige Heizung im schlecht gedämmten Altbau ist sie selten ideal – dort sinkt die Effizienz an kalten Tagen, und der Wärmekomfort einer Luftheizung unterscheidet sich von dem einer Flächenheizung. Eine Fachberatung mit Heizlastberechnung klärt das im Einzelfall.",
  },
];

export default function KlimaanlageHeizungPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Klimaanlage als Heizung:
          <br />
          lohnt sich das?
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Klimaanlage als Heizung",
          href: "/ratgeber/klimaanlage-als-heizung",
        },
      ]}
    >
      <TlDr>
        Ja – eine moderne Split-Klimaanlage ist technisch eine{" "}
        <strong>Luft-Luft-Wärmepumpe</strong> und kann heizen. Mit einem{" "}
        <strong>SCOP von 4–5</strong> macht sie aus 1 kWh Strom 4–5 kWh Wärme und
        ist im Übergang günstiger als Gas oder eine Strom-Direktheizung. Eine{" "}
        <strong>Förderung</strong> gibt es nur, wenn die Anlage als vollwertige
        Heizung ein fossiles System ersetzt – reines Kühlen wird nicht gefördert.
      </TlDr>

      <H2 id="funktioniert">Kann eine Klimaanlage wirklich heizen?</H2>
      <P>
        Ja. Eine Split-Klimaanlage transportiert Wärme – im Sommer aus dem Raum
        nach draußen (Kühlen), im Winter umgekehrt von draußen in den Raum
        (Heizen). Geräte, die beides können, heißen <strong>reversibel</strong>;
        das sind heute die meisten. Technisch ist eine solche Anlage nichts
        anderes als eine <strong>Luft-Luft-Wärmepumpe</strong>: Sie entzieht der
        Außenluft Wärme und gibt sie über das Innengerät an die Raumluft ab –
        auch bei Minusgraden noch.
      </P>

      <H2 id="unterschied">Klimaanlage oder Wärmepumpe – wo ist der Unterschied?</H2>
      <P>
        Der Begriff trennt weniger die Technik als den Zweck. Eine
        Split-Klimaanlage ist auf Kühlen optimiert und gibt Wärme über die
        Raumluft ab. Eine klassische <strong>Luft-Wasser-Wärmepumpe</strong> ist
        auf Heizen ausgelegt und speist Heizkörper oder Fußbodenheizung. Beide
        nutzen dasselbe Wärmepumpen-Prinzip – entscheidend ist, was die
        Hauptaufgabe sein soll:
      </P>
      <CostTable
        head={["", "Split-Klimaanlage", "Luft-Wasser-Wärmepumpe"]}
        rows={[
          ["Primär für", "Kühlen (+ Zusatzheizen)", "Heizen (+ optional Kühlen)"],
          ["Wärmeabgabe", "Raumluft (Innengerät)", "Heizkörper / Fußbodenheizung"],
          ["Warmwasser", "nein", "ja"],
          ["Anschaffung", "ab ~1.800 € pro Raum", "~15.000–30.000 € (ganzes Haus)"],
          ["Förderfähig", "nur als Vollheizung", "ja"],
        ]}
      />
      <P>
        Wer vor allem im Sommer kühlen und im Übergang etwas zuheizen will, ist
        mit der Split-Anlage gut bedient. Wer das fossile Heizsystem ganz
        ersetzen will, sollte die Luft-Wasser-Wärmepumpe prüfen. Die reinen{" "}
        <Link
          href="/ratgeber/klimaanlage-einbauen-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Anschaffungs- und Einbaukosten der Klimaanlage
        </Link>{" "}
        haben wir separat aufgeschlüsselt.
      </P>

      <H2 id="effizienz">Wie effizient heizt eine Klimaanlage?</H2>
      <P>
        Das Maß ist der <strong>SCOP</strong> (jahreszeitbedingte Heizzahl).
        Gute Split-Geräte erreichen 4–5,1, einfache Monoblock-Geräte nur bis
        etwa 3. Ein SCOP von 4 bedeutet: aus <strong>1 kWh Strom</strong>{" "}
        entstehen <strong>4 kWh Wärme</strong>. Zum Vergleich macht eine
        Gasheizung aus 1 kWh Energie nur rund 1 kWh Wärme. Der Haken: Je kälter
        die Außenluft, desto niedriger der SCOP – an den kältesten Wintertagen
        steigt der Stromverbrauch, weil dann am meisten Heizleistung gebraucht
        wird und die Quelle am wenigsten hergibt.
      </P>

      <H2 id="kosten">Was kostet Heizen mit der Klimaanlage?</H2>
      <P>
        Bei der Anschaffung gibt es zwei Wege. Als <strong>Zusatzheizung</strong>{" "}
        nutzen Sie eine normale Split-Anlage (ab ~1.800 € pro Raum mit Montage).
        Als <strong>vollwertige Heizung</strong> fürs Einfamilienhaus gibt es
        Luft-Luft-Wärmepumpen-Anlagen ab etwa 6.000–8.000 € inklusive Montage –
        je nach Zahl der Innengeräte und Auslegung.
      </P>
      <CostTable
        head={["Lösung", "Anschaffung (mit Montage)", "Rolle"]}
        rows={[
          ["Einzelnes Split-Gerät", "1.800 – 5.500 €", "Zusatz-/Übergangsheizung für einen Raum"],
          ["Multisplit (mehrere Räume)", "5.000 – 12.000 €", "Teilbeheizung mehrerer Räume + Kühlen"],
          ["Luft-Luft-WP-Anlage (EFH)", "6.000 – 8.000 €+", "Hauptheizung, ggf. förderfähig"],
        ]}
      />
      <P>
        Bei den <strong>laufenden Kosten</strong> punktet das Prinzip: Mit SCOP 4
        liegt der Stromverbrauch fürs Heizen bei rund einem Viertel einer
        Strom-Direktheizung. Ob es günstiger als Gas ist, hängt vom Verhältnis
        Strom- zu Gaspreis ab – je günstiger Ihr Strom (oder je mehr eigener{" "}
        <Link
          href="/ratgeber/solarcarport-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Solarstrom
        </Link>
        ), desto klarer der Vorteil.
      </P>

      <H2 id="foerderung">Gibt es eine Förderung? (KfW 2026)</H2>
      <P>
        Das ist der wichtigste Punkt – und der am häufigsten missverstandene:
        Eine <strong>reine Kühl-Klimaanlage wird nicht gefördert</strong>.
        Gefördert wird seit 2024 nur eine reversible Luft-Luft-Wärmepumpe, die
        als <strong>vollwertige Heizung ein fossiles System ersetzt</strong> und
        die technischen Vorgaben erfüllt (Heizlastberechnung nach DIN EN 12831,
        Mindest-Effizienz/ETAs). Zuständig ist für Wohngebäude die{" "}
        <strong>KfW</strong> (nicht mehr die BAFA). Die Zuschüsse sind
        kombinierbar:
      </P>
      <CostTable
        head={["Förderbaustein", "Zuschuss"]}
        rows={[
          ["Grundförderung", "30 %"],
          ["Klimageschwindigkeits-Bonus (Heizungstausch)", "20 %"],
          ["Einkommens-Bonus (bis 40.000 € zu verst. Einkommen)", "30 %"],
          ["Effizienz-Bonus", "5 %"],
          ["Maximal kombiniert", "bis 70 %"],
        ]}
      />
      <P>
        Die förderfähigen Kosten sind auf <strong>30.000 €</strong> (erste
        Wohneinheit) gedeckelt; maximal also bis zu 70 % davon. In der Praxis
        erfüllt eine Anlage, die primär zum Kühlen gedacht ist, die Bedingungen
        meist nicht. Behandeln Sie eine mögliche Förderung deshalb als Bonus,
        nicht als Grundlage der Entscheidung – und lassen Sie die
        Förderfähigkeit vom Fachbetrieb vor dem Kauf prüfen.
      </P>

      <CtaBand
        headline="Heizen, kühlen – oder beides? Lassen Sie es prüfen."
        text="Ob Split-Anlage als Zusatzheizung oder vollwertige Luft-Luft-Wärmepumpe: Wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Fachbetriebe, die Auslegung, Kosten und Förderfähigkeit für Ihr Zuhause beurteilen."
        ctaLabel="Fachbetrieb anfragen"
        service="Klimaanlage / Wärmepumpe"
        source="klimaanlage-heizung-page"
      />

      <H2 id="wann-sinnvoll">Für wen lohnt sich Heizen mit der Klimaanlage?</H2>
      <P>
        Eine Pauschalantwort gibt es nicht – aber klare Tendenzen:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Gut geeignet</strong> als Zusatz- und Übergangsheizung, in gut
          gedämmten Häusern, bei vorhandenem (oder geplantem) PV-Strom und wenn
          Sie ohnehin im Sommer kühlen möchten.
        </li>
        <li>
          <strong>Bedingt geeignet</strong> als alleinige Heizung im Altbau:
          möglich, aber an kalten Tagen weniger effizient – eine Heizlast­berechnung
          ist Pflicht.
        </li>
        <li>
          <strong>Weniger geeignet</strong>, wenn Sie zentrale Warmwasser­bereitung
          oder den Komfort einer Flächenheizung erwarten – dann ist die
          Luft-Wasser-Wärmepumpe die bessere Wahl.
        </li>
      </ul>

      <H2 id="grenzen">Die Grenzen ehrlich benannt</H2>
      <P>
        Eine Klimaanlage heizt über die <strong>Raumluft</strong>, nicht über
        warme Flächen – das fühlt sich anders an als eine Fußbodenheizung. Sie
        bereitet <strong>kein Warmwasser</strong>, das Außengerät verursacht ein
        leises Betriebsgeräusch (Lärmschutz zum Nachbarn beachten), und an den
        kältesten Tagen steigt der Stromverbrauch. Für die meisten Haushalte ist
        sie deshalb eine exzellente <em>Ergänzung</em> – die Entscheidung
        „alleinige Heizung“ gehört in fachkundige Hände.
      </P>

      <H2 id="hamburg">Klimaanlage zum Heizen in Hamburg</H2>
      <P>
        Für Hamburger Reihen- und Einfamilienhäuser ist die Split-Anlage als
        effiziente Zusatzheizung mit Sommer-Kühlung oft eine clevere Lösung.
        Über unsere Vermittlung erhalten Sie Festpreis-Angebote geprüfter
        Klimatechnik- und Wärmepumpen-Betriebe aus Niendorf und Umgebung – inkl.
        Beurteilung der Förderfähigkeit. Wer ohnehin in Effizienz investiert,
        kombiniert die Anlage gern mit einer eigenen{" "}
        <Link
          href="/ratgeber/wallbox-installieren-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wallbox &amp; Ladetechnik
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zum Heizen mit der Klimaanlage" />

      <CtaBand
        headline="Klimaanlage als Heizung sinnvoll für Sie?"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Fachbetriebe aus Hamburg und Umgebung, die Auslegung, Kosten und Förderung konkret für Ihr Zuhause beurteilen."
        ctaLabel="Fachbetrieb anfragen"
        service="Klimaanlage / Wärmepumpe"
        source="klimaanlage-heizung-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Angaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen keine Fachberatung. Effizienz, Heizkosten und Förderfähigkeit
        hängen von Gerät, Gebäude, Dämmung und individueller Auslegung ab. Für
        die Förderung gelten die jeweils aktuellen KfW-Bedingungen.
      </p>
    </RatgeberArticle>
  );
}
