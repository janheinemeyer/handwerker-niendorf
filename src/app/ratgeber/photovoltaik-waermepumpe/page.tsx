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
  title: "Photovoltaik & Wärmepumpe kombinieren: lohnt sich das? (2026)",
  description:
    "PV und Wärmepumpe zusammen: Wie viel des Wärmepumpenstroms die Photovoltaik wirklich deckt (mit dem ehrlichen Winter-Check), Komplettpaket-Kosten 2026, Dimensionierung von PV & Speicher, Energiemanagement und Förderung. Herstellerneutral, mit Fachbetrieb-Vermittlung für Hamburg.",
  alternates: { canonical: "/ratgeber/photovoltaik-waermepumpe" },
  openGraph: {
    title: "Photovoltaik & Wärmepumpe kombinieren: lohnt sich das?",
    description:
      "Deckungsgrad (inkl. Winter-Check), Komplettpaket-Kosten, Dimensionierung & Förderung.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Lohnt sich Photovoltaik mit Wärmepumpe?",
    a: "Meistens ja, vor allem in gut gedämmten Häusern. Die Wärmepumpe macht aus Strom ein Vielfaches an Wärme, die PV liefert einen Teil dieses Stroms günstig vom Dach. So sinken die Heizkosten deutlich; die Mehrinvestition in PV amortisiert sich über den eingesparten Netzstrom. Entscheidend ist eine realistische Erwartung – gerade beim Winteranteil.",
  },
  {
    q: "Wie viel des Wärmepumpenstroms deckt die PV?",
    a: "Ohne Batteriespeicher deckt die PV grob 25–35 % des Wärmepumpenstroms übers Jahr, mit Speicher und Energiemanagement bis etwa 50–70 %. Wichtig: Das ist ein Jahreswert. Im Winter, wenn die Wärmepumpe am meisten braucht, liefert die PV nur 20–30 % ihres Sommerertrags – echte Winter-Autarkie ist damit nicht erreichbar.",
  },
  {
    q: "Was kostet das Komplettpaket aus PV und Wärmepumpe?",
    a: "Je nach Konfiguration rund 25.000–52.000 €: Photovoltaik etwa 10.000–22.000 €, Wärmepumpe 15.000–28.000 €, ein Batteriespeicher optional 4.000–10.000 €. Auf die PV fällt 0 % MwSt; die Wärmepumpe ist über die KfW 458 mit bis zu 70 % förderfähig – beides sind getrennte Töpfe.",
  },
  {
    q: "Wie groß muss die PV-Anlage für eine Wärmepumpe sein?",
    a: "Planen Sie die Anlage größer als nur für den Haushaltsstrom. Eine Faustregel: elektrische Anschlussleistung der Wärmepumpe in kW × 3 ergibt die zusätzliche kWp PV-Leistung. Für ein Einfamilienhaus mit Wärmepumpe sind häufig 10–15 kWp sinnvoll, plus 1–1,5 kWh Speicher je kWp.",
  },
  {
    q: "Reicht der Solarstrom auch im Winter für die Wärmepumpe?",
    a: "Nein, nicht annähernd. Die PV erzeugt im Winter nur 20–30 % ihres Sommerertrags, während der Heizbedarf am höchsten ist. Den Löwenanteil des Winterstroms bezieht die Wärmepumpe aus dem Netz – hier hilft ein vergünstigter Wärmepumpentarif mehr als der Speicher. Die PV punktet vor allem in Übergangszeit und Sommer (Warmwasser).",
  },
  {
    q: "Gibt es eine Förderung für die Kombination?",
    a: "Nicht als ein gemeinsames Programm. Die Wärmepumpe wird über die KfW 458 gefördert (bis zu 70 %), die Photovoltaik profitiert vom Nullsteuersatz (0 % MwSt) und ggf. regionalen Programmen – einen Bundes-Zuschuss für PV gibt es nicht. Beide Förderwege laufen getrennt und lassen sich parallel nutzen.",
  },
];

export default function PhotovoltaikWaermepumpePage() {
  return (
    <RatgeberArticle
      title={
        <>
          Photovoltaik &amp; Wärme&shy;pumpe:
          <br />
          lohnt sich die Kombi?
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Photovoltaik & Wärmepumpe",
          href: "/ratgeber/photovoltaik-waermepumpe",
        },
      ]}
    >
      <TlDr>
        Photovoltaik und Wärmepumpe ergänzen sich gut – die PV liefert günstigen
        Strom, die Wärmepumpe macht daraus Wärme. Übers Jahr deckt die PV{" "}
        <strong>~25–35 % des Wärmepumpenstroms</strong> (mit Speicher bis ~70 %).
        Aber ehrlich: <strong>im Winter</strong>, wenn am meisten geheizt wird,
        liefert die PV kaum etwas – Winter-Autarkie geht nicht. Das Komplettpaket
        kostet <strong>~25.000–52.000 €</strong>; PV (0 % MwSt) und Wärmepumpe
        (KfW 458) werden getrennt gefördert.
      </TlDr>

      <H2 id="lohnt">Lohnt sich die Kombination?</H2>
      <P>
        In den meisten Fällen ja – besonders in gut gedämmten Häusern. Die{" "}
        <Link
          href="/ratgeber/waermepumpe-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe
        </Link>{" "}
        macht aus 1 kWh Strom drei bis vier kWh Wärme; die{" "}
        <Link
          href="/ratgeber/photovoltaik-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Photovoltaik
        </Link>{" "}
        liefert einen Teil dieses Stroms für rund 10 ct statt 35 ct aus dem Netz.
        Jede selbst genutzte Kilowattstunde zählt also doppelt: Sie ersetzt teuren
        Netzstrom <em>und</em> fossiles Heizen. Die Mehrinvestition in eine etwas
        größere PV-Anlage rechnet sich über die eingesparten Heizstromkosten.
      </P>

      <H2 id="deckungsgrad">Wie viel der Wärmepumpe deckt die PV wirklich?</H2>
      <P>
        Hier die ehrliche Zahl, die viele Anbieter beschönigen. Übers Jahr deckt
        die PV grob:
      </P>
      <CostTable
        head={["Konfiguration", "PV-Anteil am Wärmepumpenstrom"]}
        rows={[
          ["PV ohne Speicher", "~25 – 35 %"],
          ["PV mit Batteriespeicher", "~50 – 70 %"],
          ["Winter (Dez–Feb)", "nur gering – Netzbezug nötig"],
        ]}
      />
      <P>
        Der Haken ist saisonal: Im <strong>Winter</strong> erzeugt die PV nur{" "}
        <strong>20–30 % ihres Sommerertrags</strong> – genau dann, wenn die
        Wärmepumpe am meisten Strom zieht. Den Großteil des Winterstroms bezieht sie
        deshalb aus dem Netz; <strong>echte Winter-Autarkie ist nicht erreichbar</strong>.
        Die PV punktet in der Übergangszeit und im Sommer (Warmwasser). Wer den
        Winter-Netzbezug günstiger machen will, kombiniert mit einem{" "}
        <Link
          href="/ratgeber/waermepumpe-stromverbrauch"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpentarif
        </Link>{" "}
        – das bringt im Winter mehr als ein größerer Speicher.
      </P>

      <H2 id="kosten">Was kostet das Komplettpaket?</H2>
      <P>
        Die Gesamtkosten setzen sich aus den Einzelbausteinen zusammen – ein
        gemeinsamer „Kombi-Rabatt“ entsteht vor allem über geteilte Planung und
        Montage:
      </P>
      <CostTable
        head={["Komponente", "Kosten (mit Einbau)"]}
        rows={[
          ["Photovoltaik (8 – 12 kWp)", "10.000 – 22.000 €"],
          ["Batteriespeicher (optional)", "4.000 – 10.000 €"],
          ["Wärmepumpe (Luft-Wasser)", "15.000 – 28.000 €"],
          ["Komplettpaket gesamt", "~25.000 – 52.000 €"],
        ]}
      />
      <P>
        Nach Abzug der KfW-Förderung für die Wärmepumpe (bis zu 70 %) und dank
        0 % MwSt auf die PV sinkt der Eigenanteil deutlich. Amortisation und
        Heizkostenersparnis hängen stark von Dämmung und Verbrauch ab.
      </P>

      <H2 id="dimensionierung">Wie groß PV &amp; Speicher für die Wärmepumpe?</H2>
      <P>
        Planen Sie die PV-Anlage <strong>größer</strong> als nur für den
        Haushaltsstrom. Bewährte Faustregeln:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li><strong>kWp = elektrische Anschlussleistung der Wärmepumpe (kW) × 3</strong> als Zusatzleistung.</li>
        <li>Für ein EFH mit Wärmepumpe sind oft <strong>10–15 kWp</strong> sinnvoll.</li>
        <li><strong>1–1,5 kWh Speicher je kWp</strong> – der{" "}
          <Link href="/ratgeber/stromspeicher-kosten" className="text-accent underline-offset-2 hover:underline">Speicher</Link>{" "}
          verschiebt Mittagsstrom in den Abend, nicht aber Sommer in den Winter.
        </li>
        <li>Kommt eine <Link href="/ratgeber/wallbox-installieren-kosten" className="text-accent underline-offset-2 hover:underline">Wallbox</Link> dazu, entsprechend größer planen.</li>
      </ul>

      <CtaBand
        headline="PV und Wärmepumpe sauber aufeinander abstimmen"
        text="Wir verkaufen keine Anlagen – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar- und Heizungs-Fachbetriebe, die PV-Größe, Speicher und Wärmepumpe realistisch auf Ihr Haus abstimmen (statt Ihnen 100 % Autarkie zu versprechen)."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik / Wärmepumpe"
        source="photovoltaik-waermepumpe-page"
      />

      <H2 id="ems">Clever steuern: Energiemanagement (EMS)</H2>
      <P>
        Das meiste holt aus der Kombi ein <strong>Energiemanagementsystem (EMS/HEMS)</strong>
        heraus: Es schaltet die Wärmepumpe bevorzugt dann ein, wenn die PV viel
        liefert, und heizt mit Solarüberschuss gezielt den <strong>Pufferspeicher</strong>{" "}
        vor – so wird Sonnenstrom als Wärme „gespeichert“, ganz ohne Batterie. Moderne
        Systeme beziehen auch den Batteriespeicher, die Wallbox und dynamische
        Stromtarife mit ein. Achten Sie darauf, dass Wärmepumpe und Wechselrichter
        über eine gemeinsame Schnittstelle steuerbar sind – das plant der Fachbetrieb
        mit ein.
      </P>

      <H2 id="foerderung">Förderung: zwei getrennte Töpfe</H2>
      <P>
        Es gibt <strong>kein gemeinsames Förderprogramm</strong> für die Kombination.
        Die <strong>Wärmepumpe</strong> wird über die{" "}
        <Link
          href="/ratgeber/waermepumpe-foerderung"
          className="text-accent underline-offset-2 hover:underline"
        >
          KfW 458 mit bis zu 70 %
        </Link>{" "}
        gefördert; die <strong>Photovoltaik</strong> profitiert vom{" "}
        <Link
          href="/ratgeber/photovoltaik-foerderung"
          className="text-accent underline-offset-2 hover:underline"
        >
          Nullsteuersatz (0 % MwSt)
        </Link>{" "}
        und ggf. regionalen Programmen – einen Bundes-Zuschuss für PV gibt es nicht.
        Beide Wege lassen sich parallel nutzen.
      </P>

      <H2 id="hamburg">PV &amp; Wärmepumpe in Hamburg</H2>
      <P>
        Für gut gedämmte Hamburger Ein- und Reihenhäuser ist die Kombi aus
        Wärmepumpe und Photovoltaik der Kern der Energiewende im eigenen Haus – mit
        realistischem Blick auf den Winter. Wir sind kein Hersteller und kein
        Anlagenvermieter: Über unsere Vermittlung erhalten Sie herstellerneutral
        Angebote geprüfter Solar- und Heizungs-Fachbetriebe aus Niendorf und
        Umgebung, die beide Gewerke aufeinander abstimmen und ehrlich rechnen, statt
        Ihnen Voll-Autarkie zu versprechen.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Photovoltaik & Wärmepumpe" />

      <CtaBand
        headline="Kombi aus PV und Wärmepumpe planen lassen"
        text="Schildern Sie kurz Ihr Haus – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar- und Heizungs-Fachbetriebe aus Hamburg und Umgebung, die PV, Speicher und Wärmepumpe gemeinsam auslegen."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik / Wärmepumpe"
        source="photovoltaik-waermepumpe-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Angaben sind unverbindliche Richtwerte (Stand: Juni 2026) und ersetzen
        keine Fachberatung. Deckungsgrad, Kosten und Wirtschaftlichkeit hängen von
        Gebäude, Dämmung, Verbrauch, Anlagengröße und Auslegung ab. Förderbedingungen
        können sich ändern.
      </p>
    </RatgeberArticle>
  );
}
