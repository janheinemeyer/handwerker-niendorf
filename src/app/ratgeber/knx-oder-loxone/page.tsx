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
import { KnxLoxoneEntscheidung } from "@/components/knx-loxone-entscheidung";

export const metadata: Metadata = {
  title: "KNX oder Loxone? Vergleich & Kosten (2026)",
  description:
    "KNX oder Loxone – welches Smart-Home-System ist besser? KNX ist der offene, herstellerunabhängige Standard (zukunftssicher, tendenziell teurer), Loxone ein proprietäres Komplettsystem (günstiger, schneller, an einen Hersteller gebunden). Kosten, Vor- und Nachteile und eine klare Entscheidungshilfe.",
  alternates: { canonical: "/ratgeber/knx-oder-loxone" },
  openGraph: {
    title: "KNX oder Loxone? Der Vergleich",
    description:
      "Offener Standard gegen Komplettsystem: Kosten, Vor- und Nachteile und wann sich welches System lohnt.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "KNX oder Loxone – was ist besser?",
    a: "Pauschal ist keines „besser“ – sie verfolgen unterschiedliche Philosophien. KNX ist ein offener, herstellerunabhängiger Standard (über 500 Hersteller): maximal erweiterbar und zukunftssicher, dafür aufwändiger in Planung und Programmierung und tendenziell teurer. Loxone ist ein proprietäres Komplettsystem eines Herstellers: schneller umgesetzt, viele Funktionen vordefiniert und im Einfamilienhaus oft günstiger, dafür an Loxone gebunden. Wer Unabhängigkeit und langfristige Erweiterbarkeit will, nimmt KNX; wer schnell und günstig ein Komplettsystem aus einer Hand möchte, Loxone.",
  },
  {
    q: "Was ist günstiger – KNX oder Loxone?",
    a: "Im Einfamilienhaus ist Loxone meist die günstigere Lösung: ein komplettes Loxone-System liegt oft bei rund 8.000–17.000 €, weil viele Funktionen im Miniserver vordefiniert sind und keine kostenpflichtige Programmiersoftware nötig ist. Vergleichbare KNX-Projekte liegen tendenziell darüber, vor allem bei hohem Funktionsumfang und individueller Programmierung. Der Abstand ist aber kein Faktor zwei – maßgeblich sind Umfang, Hausgröße und Programmieraufwand.",
  },
  {
    q: "Ist KNX zukunftssicherer als Loxone?",
    a: "In puncto Herstellerunabhängigkeit ja. KNX ist ein international genormter, offener Standard – Geräte vieler Hersteller sind untereinander kompatibel, und Sie sind nicht von einem einzigen Anbieter abhängig. Bei Loxone hängen Hardware, Software und Support an einem Unternehmen; fällt eine Komponente aus der Produktion, ist man auf dessen Nachfolger angewiesen. Dafür kommt bei Loxone alles abgestimmt aus einer Hand.",
  },
  {
    q: "Kann man KNX und Loxone kombinieren?",
    a: "Ja. Der Loxone Miniserver kann über eine KNX-Schnittstelle mit KNX-Geräten kommunizieren – eine im Neubau durchaus übliche Kombination, bei der KNX die robuste Geräteebene bildet und Loxone Logik und Visualisierung übernimmt. Das erhöht aber die Komplexität und sollte von einem Fachbetrieb geplant werden, der beide Welten beherrscht.",
  },
  {
    q: "Welches System passt für ein Einfamilienhaus?",
    a: "Beide eignen sich. Für ein Einfamilienhaus mit Fokus auf schnelle Umsetzung, fertige Konzepte und ein günstiges Komplettpaket ist Loxone oft die naheliegende Wahl. Geht es um maximale Flexibilität, freie Gerätewahl und langfristige Erweiterbarkeit – etwa im hochwertigen Neubau, der über Jahrzehnte wachsen soll – spielt KNX seine Stärken aus. Verbindlich ist die Planung mit einem Fachbetrieb.",
  },
];

export default function KnxOderLoxonePage() {
  return (
    <RatgeberArticle
      title={
        <>
          KNX oder
          <br />
          Loxone?
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        { name: "KNX oder Loxone", href: "/ratgeber/knx-oder-loxone" },
      ]}
    >
      <TlDr>
        <strong>KNX</strong> ist der offene, herstellerunabhängige Standard –
        maximal erweiterbar und zukunftssicher, dafür aufwändiger und tendenziell
        teurer. <strong>Loxone</strong> ist ein proprietäres Komplettsystem eines
        Herstellers – schneller umgesetzt und im Einfamilienhaus oft günstiger
        (ein komplettes System ~8.000–17.000 €), dafür an einen Anbieter gebunden.
        Beide sind exzellent; die Wahl hängt von Budget, Anspruch und Wunsch nach
        Unabhängigkeit ab.
      </TlDr>

      <H2 id="ueberblick">KNX vs. Loxone: der Überblick</H2>
      <P>
        Wir vermitteln Fachbetriebe und verkaufen <strong>kein</strong> eigenes
        System – der folgende Vergleich ist daher bewusst neutral. Die wichtigsten
        Unterschiede auf einen Blick:
      </P>
      <CostTable
        head={["Kriterium", "KNX", "Loxone"]}
        rows={[
          ["Architektur", "Offener Standard (ISO/IEC)", "Proprietär, ein Hersteller"],
          ["Hersteller", "über 500, frei kombinierbar", "nur Loxone"],
          ["Programmierung", "ETS (Lizenz, Fachbetrieb)", "Loxone Config (kostenlos)"],
          ["Inbetriebnahme", "aufwändiger, sehr flexibel", "schneller, viele Funktionen vordefiniert"],
          ["Kosten EFH", "tendenziell höher", "meist günstiger"],
          ["Erweiterbarkeit", "sehr hoch, herstellerunabhängig", "gut, an Loxone gebunden"],
          ["Ideal für", "Neubau/Sanierung, langfristig, Unabhängigkeit", "schnelles Komplettsystem aus einer Hand"],
        ]}
      />

      <H2 id="kosten">Was kostet KNX, was Loxone?</H2>
      <P>
        Im Einfamilienhaus ist Loxone meist günstiger: Ein komplettes System liegt
        oft bei rund <strong>8.000–17.000 €</strong> (Hardware ~3.000–15.000 € plus
        Planung und Programmierung). Das liegt vor allem daran, dass viele
        Funktionen im Miniserver vordefiniert sind und keine kostenpflichtige
        Programmiersoftware nötig ist. Vergleichbare <strong>KNX</strong>-Projekte
        liegen tendenziell darüber – kein Faktor zwei, aber spürbar, vor allem bei
        hohem Funktionsumfang. Die volle Kostenaufstellung mit Rechner steht im{" "}
        <Link
          href="/ratgeber/knx-smart-home-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          KNX-Kostenratgeber
        </Link>
        .
      </P>

      <H2 id="vorteile">Vor- und Nachteile im Vergleich</H2>
      <P>
        <strong>KNX</strong> – offener Standard, maximale Freiheit:
      </P>
      <ul className="mt-2 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>+</strong> herstellerunabhängig, riesige Geräteauswahl, sehr gut
          erweiterbar und langfristig zukunftssicher.
        </li>
        <li>
          <strong>–</strong> höhere Kosten, aufwändigere Planung und Programmierung
          (ETS-Lizenz), stärker vom Können des Fachbetriebs abhängig.
        </li>
      </ul>
      <P>
        <strong>Loxone</strong> – Komplettsystem aus einer Hand:
      </P>
      <ul className="mt-2 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>+</strong> günstiger im Einfamilienhaus, schnelle Inbetriebnahme,
          viele Funktionen vordefiniert, durchgängiges Bedien- und App-Konzept.
        </li>
        <li>
          <strong>–</strong> an einen Hersteller gebunden, eingeschränkte
          Gerätewahl, abhängig von Loxones Software-Updates und Produktpolitik.
        </li>
      </ul>

      <CtaBand
        headline="KNX oder Loxone – neutral beraten lassen"
        text="Unsicher, welches System zu Ihrem Vorhaben passt? Wir vermitteln Ihnen kostenlos und unverbindlich erfahrene Smart-Home-Fachbetriebe aus Hamburg und Umgebung – herstellerneutral, von der Planung bis zur Inbetriebnahme."
        ctaLabel="Smart-Home-Angebote anfragen"
        service="Smart Home / KNX"
        source="knx-oder-loxone-page"
      />

      <H2 id="wann-welches">Wann KNX, wann Loxone?</H2>
      <P>
        Beantworten Sie ein paar kurze Fragen – die Entscheidungshilfe zeigt
        Ihnen eine neutrale Tendenz für Ihr Vorhaben.
      </P>
      <KnxLoxoneEntscheidung />
      <P>Kurz zusammengefasst:</P>
      <ul className="mt-2 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Unabhängigkeit &amp; lange Lebensdauer:</strong> KNX (Neubau oder
          Kernsanierung, hochwertig, soll über Jahrzehnte wachsen).
        </li>
        <li>
          <strong>Schnell, günstig, alles aus einer Hand:</strong> Loxone.
        </li>
        <li>
          <strong>Maximale Gerätefreiheit &amp; großes Projekt:</strong> KNX.
        </li>
        <li>
          <strong>Standard-Einfamilienhaus mit Komfortfunktionen:</strong> beide –
          Loxone meist günstiger, KNX flexibler.
        </li>
      </ul>

      <H2 id="kombinieren">Kann man KNX und Loxone kombinieren?</H2>
      <P>
        Ja. Der Loxone Miniserver kann über eine KNX-Schnittstelle mit
        KNX-Geräten kommunizieren – im Neubau eine durchaus übliche Kombination:
        KNX bildet die robuste Geräteebene, Loxone übernimmt Logik und
        Visualisierung. Das erhöht die Komplexität und gehört in die Hand eines
        Fachbetriebs, der beide Welten beherrscht.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu KNX und Loxone" />

      <CtaBand
        headline="Smart Home in Hamburg umsetzen"
        text="Schildern Sie kurz Ihr Vorhaben – wir bringen Sie kostenlos und unverbindlich mit passenden Smart-Home-Fachbetrieben aus Hamburg und Umgebung zusammen, egal ob KNX, Loxone oder beides."
        ctaLabel="Smart-Home-Angebote anfragen"
        service="Smart Home / KNX"
        source="knx-oder-loxone-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preise sind Richtwerte (Stand Juni 2026) und ersetzen kein
        individuelles Angebot. Die tatsächlichen Kosten hängen von Funktionsumfang,
        Hausgröße und Programmieraufwand ab.
      </p>
    </RatgeberArticle>
  );
}
