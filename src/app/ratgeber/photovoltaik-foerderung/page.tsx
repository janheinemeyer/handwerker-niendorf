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
  title: "Photovoltaik Förderung 2026: 0 % MwSt, KfW 270 & was wirklich gefördert wird",
  description:
    "PV-Förderung 2026 ehrlich erklärt: Einen direkten Bundes-Zuschuss gibt es nicht. Die Förderung besteht aus 0 % Mehrwertsteuer, Einkommensteuer-Freiheit bis 30 kWp, der Einspeisevergütung, dem zinsgünstigen KfW-270-Kredit und regionalen Programmen. Herstellerneutral, mit Fachbetrieb-Vermittlung für Hamburg.",
  alternates: { canonical: "/ratgeber/photovoltaik-foerderung" },
  openGraph: {
    title: "Photovoltaik Förderung 2026: 0 % MwSt, KfW 270 & Co.",
    description:
      "Kein Bundes-Zuschuss – aber 0 % MwSt, Steuerfreiheit bis 30 kWp, Einspeisevergütung & KfW-270-Kredit.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Gibt es 2026 einen Zuschuss für Photovoltaik?",
    a: "Auf Bundesebene nein – einen direkten Zuschuss für eine Dach-PV-Anlage gibt es 2026 nicht (das Programm KfW 442 ist seit 2023 ausgeschöpft und wurde nicht neu aufgelegt). Die Förderung besteht stattdessen aus Steuervorteilen (0 % MwSt, Einkommensteuer-Freiheit), der Einspeisevergütung, dem zinsgünstigen KfW-270-Kredit und – je nach Region – einzelnen Länder- oder Kommunalprogrammen.",
  },
  {
    q: "Was bedeutet der 0-%-Mehrwertsteuersatz?",
    a: "Seit 2023 fällt auf Kauf und Installation einer PV-Anlage bis 30 kWp keine Mehrwertsteuer an (0 % statt 19 %). Der Nullsteuersatz gilt unbefristet und umfasst die wesentlichen Komponenten der Anlage: Module, Wechselrichter, Batteriespeicher, Montagegestell, Kabel und die komplette Montageleistung. Eine Wallbox zählt dagegen als Stromverbraucher und ist nur in bestimmten Paketkonstellationen mit erfasst. Der Nullsteuersatz senkt den Bruttopreis der Anlage direkt um knapp ein Fünftel.",
  },
  {
    q: "Ist meine PV-Anlage steuerfrei?",
    a: "Bei Anlagen bis 30 kWp auf einem Einfamilienhaus ja: Die Einnahmen (Einspeisevergütung und Eigenverbrauch) sind nach § 3 Nr. 72 EStG einkommensteuerfrei. Kehrseite: Verluste lassen sich dann auch nicht mehr steuerlich geltend machen. Zusammen mit dem 0-%-MwSt-Satz ist eine Anlage bis 30 kWp damit praktisch steuerfrei.",
  },
  {
    q: "Muss ich für eine PV-Anlage ein Gewerbe anmelden?",
    a: "Für eine steuerfreie Anlage bis 30 kWp auf dem Wohngebäude in der Regel nicht – Gewerbesteuer fällt nicht an, und den Fragebogen zur steuerlichen Erfassung beim Finanzamt brauchen Sie meist nicht mehr. Pflicht ist allein die Anmeldung im Marktstammdatenregister der Bundesnetzagentur und beim Netzbetreiber.",
  },
  {
    q: "Was ist die KfW 270 – und ist das ein Zuschuss?",
    a: "Nein, ein zinsgünstiger Kredit, kein Zuschuss. Über die KfW 270 („Erneuerbare Energien – Standard“) lassen sich PV-Anlage und Batteriespeicher bis zu 100 % finanzieren (eine Wallbox gehört nicht zu den förderfähigen Posten dieses Programms). Der effektive Jahreszins hängt von der Bonität ab und liegt grob zwischen rund 3 % und über 11 %. Sinnvoll, wenn Sie die Anschaffung finanzieren wollen – Geld geschenkt gibt es damit aber nicht.",
  },
  {
    q: "Gibt es regionale Förderung in Hamburg?",
    a: "Länder- und Kommunalprogramme wechseln häufig; einige Bundesländer haben ihre PV-/Speicherförderung 2026 eingestellt, andere fördern weiter. Für Hamburg lohnt der aktuelle Blick auf die Programme der IFB Hamburg. Regionale Zuschüsse lassen sich oft mit dem KfW-270-Kredit kombinieren, solange nicht dieselben Kosten doppelt gefördert werden.",
  },
];

export default function PhotovoltaikFoerderungPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Photovoltaik-Förderung
          <br />
          2026: was es wirklich gibt
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Photovoltaik-Förderung",
          href: "/ratgeber/photovoltaik-foerderung",
        },
      ]}
    >
      <TlDr>
        Einen <strong>direkten Bundes-Zuschuss</strong> für eine Dach-PV-Anlage
        gibt es 2026 <strong>nicht</strong>. Die Förderung besteht aus{" "}
        <strong>0 % Mehrwertsteuer</strong> (spart ~19 %),{" "}
        <strong>Einkommensteuer-Freiheit</strong> bis 30 kWp, der{" "}
        <Link
          href="/ratgeber/einspeiseverguetung-2026"
          className="text-accent underline-offset-2 hover:underline"
        >
          Einspeisevergütung
        </Link>{" "}
        und dem zinsgünstigen <strong>KfW-270-Kredit</strong> (kein Zuschuss). Dazu
        kommen je nach Region einzelne Länder- oder Kommunalprogramme.
      </TlDr>

      <H2 id="gibt-es-zuschuss">Gibt es einen Zuschuss für Photovoltaik?</H2>
      <P>
        Die ehrliche Antwort vorweg: <strong>Vom Bund gibt es 2026 keinen direkten
        Zuschuss</strong> für eine Photovoltaikanlage auf dem Einfamilienhaus. Das
        frühere KfW-Programm 442 (Solarstrom fürs E-Auto) ist seit 2023
        ausgeschöpft und wurde nicht neu aufgelegt. Wer „Photovoltaik-Förderung“
        sucht, erwartet oft einen Scheck vom Staat – den gibt es so nicht. Die
        tatsächliche Förderung ist trotzdem erheblich, sie steckt nur in vier
        anderen Bausteinen:
      </P>
      <CostTable
        head={["Baustein", "Was es bringt", "Art"]}
        rows={[
          ["0 % Mehrwertsteuer", "spart ~19 % auf Kauf + Montage (≤ 30 kWp)", "Steuervorteil"],
          ["Einkommensteuer-Freiheit", "Einnahmen steuerfrei (§ 3 Nr. 72 EStG)", "Steuervorteil"],
          ["Einspeisevergütung", "~7,78 ct/kWh, 20 Jahre garantiert", "laufende Vergütung"],
          ["KfW 270", "Finanzierung bis 100 %", "Kredit (kein Zuschuss)"],
          ["Länder / Kommunen", "je nach Region, teils Speicher", "Zuschuss (regional)"],
        ]}
      />

      <H2 id="steuer">0 % MwSt &amp; Steuerfreiheit bis 30 kWp</H2>
      <P>
        Der größte Hebel sind die Steuervorteile. Seit 2023 gilt der{" "}
        <strong>Nullsteuersatz</strong>: Auf Kauf und Installation einer Anlage bis
        30 kWp fällt <strong>keine Mehrwertsteuer</strong> an (0 % statt 19 %) –
        unbefristet, und für die wesentlichen Komponenten der Anlage samt Speicher
        und Montage (eine Wallbox als reiner Stromverbraucher fällt in der Regel
        nicht darunter). Zusätzlich sind die <strong>Einnahmen</strong> aus Anlagen bis
        30 kWp am Einfamilienhaus nach <strong>§ 3 Nr. 72 EStG einkommensteuerfrei</strong>.
        Praktisch heißt das: <strong>keine MwSt, keine Einkommensteuer, keine
        Gewerbeanmeldung</strong> – eine Anlage bis 30 kWp ist quasi steuerfrei. Die
        Kehrseite der Steuerfreiheit: Verluste lassen sich auch nicht mehr absetzen.
      </P>

      <H2 id="kfw-270">KfW 270: zinsgünstiger Kredit – kein Zuschuss</H2>
      <P>
        Die <strong>KfW 270</strong> („Erneuerbare Energien – Standard“) ist der
        wichtigste bundesweite Finanzierungsbaustein – aber ein{" "}
        <strong>Kredit, kein Zuschuss</strong>. Sie finanziert die PV-Anlage und den
        Batteriespeicher zu bis zu 100 % der Kosten (eine Wallbox gehört nicht zu
        den förderfähigen Posten dieses Programms). Der effektive Jahreszins hängt von
        der Bonität ab und reicht grob von rund 3 % bis über 11 %. Den Antrag
        stellen Sie <strong>vor Vertragsabschluss</strong> über Ihre Hausbank, nicht
        direkt bei der KfW. Sinnvoll, wenn Sie die Anschaffung strecken wollen –
        geschenkt wird damit aber nichts.
      </P>

      <CtaBand
        headline="Welche Förderung passt zu Ihrer Anlage?"
        text="Wir verkaufen keine Anlagen – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar-Fachbetriebe, die Anlagengröße, Steuerfreiheit und passende Finanzierung sauber für Ihr Haus aufsetzen."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik"
        source="photovoltaik-foerderung-page"
      />

      <H2 id="regional">Regionale Förderung &amp; Hamburg</H2>
      <P>
        Auf Landes- und Kommunalebene gibt es weiterhin einzelne Programme – häufig
        für den <strong>Batteriespeicher</strong> –, aber das Bild ist
        unübersichtlich und ändert sich oft: Mehrere Bundesländer haben ihre
        PV-/Speicherförderung inzwischen eingestellt, andere fördern weiter. Für{" "}
        <strong>Hamburg</strong> lohnt der aktuelle Blick auf die Programme der{" "}
        <strong>IFB Hamburg</strong> (Hamburgische Investitions- und Förderbank).
        Regionale Zuschüsse lassen sich meist mit dem KfW-270-Kredit kombinieren,
        solange nicht dieselben Kosten doppelt gefördert werden. Weil sich die
        Konditionen laufend ändern, prüfen wir bzw. der Fachbetrieb den jeweils
        aktuellen Stand für Sie.
      </P>

      <H2 id="anmeldung">Anmeldung: Marktstammdatenregister &amp; Finanzamt</H2>
      <P>
        Pflicht ist die Anmeldung der Anlage im{" "}
        <strong>Marktstammdatenregister</strong> der Bundesnetzagentur (binnen eines
        Monats nach Inbetriebnahme) und beim <strong>Netzbetreiber</strong> für den
        Netzanschluss. Beim <strong>Finanzamt</strong> müssen Sie für eine
        steuerfreie Anlage bis 30 kWp in der Regel nichts mehr tun – der frühere
        Fragebogen zur steuerlichen Erfassung entfällt meist. Den Papierkram für
        Register und Netzanschluss übernimmt üblicherweise der Fachbetrieb.
      </P>

      <H2 id="lohnt">Förderung als Bonus, nicht als Grundlage</H2>
      <P>
        Anders als bei der{" "}
        <Link
          href="/ratgeber/waermepumpe-foerderung"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe
        </Link>{" "}
        entscheidet bei PV nicht ein großer Zuschuss über die Wirtschaftlichkeit,
        sondern der <strong>Eigenverbrauch</strong>: selbst genutzter Solarstrom
        ersetzt teuren Netzstrom. Die Steuervorteile senken den Preis spürbar, die
        eigentliche Rendite kommt aber aus der Anlage selbst. Was sie kostet, steht
        im Ratgeber{" "}
        <Link
          href="/ratgeber/photovoltaik-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Photovoltaik: Kosten
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zur Photovoltaik-Förderung" />

      <CtaBand
        headline="Förderung & Finanzierung sauber aufsetzen"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar-Fachbetriebe aus Hamburg und Umgebung, die Steuerfreiheit, KfW-Kredit und regionale Programme konkret für Sie klären."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik"
        source="photovoltaik-foerderung-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Angaben sind unverbindliche Richtwerte (Stand: Juni 2026) und ersetzen
        keine Steuer- oder Förderberatung. Maßgeblich sind die jeweils aktuellen
        Regelungen (EStG, UStG, KfW, Länderprogramme) und Ihre individuelle
        Situation. Zinssätze und Programme können sich ändern.
      </p>
    </RatgeberArticle>
  );
}
