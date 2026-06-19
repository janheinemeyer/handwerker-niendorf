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
  title: "Einspeisevergütung 2026: Aktuelle PV-Sätze (Tabelle & Regeln)",
  description:
    "Wie hoch ist die Einspeisevergütung 2026? Aktuelle Sätze in ct/kWh nach Anlagengröße, Teil- vs. Volleinspeisung, 20-Jahre-Garantie, die Negativpreis-Regel (Solarspitzengesetz) und warum Eigenverbrauch meist mehr bringt. Herstellerneutral, mit Fachbetrieb-Vermittlung für Hamburg.",
  alternates: { canonical: "/ratgeber/einspeiseverguetung-2026" },
  openGraph: {
    title: "Einspeisevergütung 2026: Aktuelle PV-Sätze",
    description:
      "Sätze nach Anlagengröße, Teil- vs. Volleinspeisung, 20-Jahre-Garantie & Negativpreis-Regel.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Wie hoch ist die Einspeisevergütung 2026?",
    a: "Für neue Anlagen bis 10 kWp gilt seit Februar 2026 ein Satz von 7,78 ct/kWh bei Teileinspeisung (Überschuss) und 12,34 ct/kWh bei Volleinspeisung. Bei 10–40 kWp sind es 6,73 ct bzw. 10,35 ct/kWh. Zum 1. August 2026 sinken die Sätze leicht (Degression), für Anlagen bis 10 kWp auf etwa 7,71 bzw. 12,23 ct/kWh.",
  },
  {
    q: "Teileinspeisung oder Volleinspeisung – was ist besser?",
    a: "Für die meisten Einfamilienhäuser die Teileinspeisung (Überschusseinspeisung): Sie verbrauchen den Solarstrom zuerst selbst und speisen nur den Rest ein. Selbst genutzter Strom spart 30–35 ct/kWh, die Einspeisung bringt nur knapp 8 ct – Eigenverbrauch ist also deutlich mehr wert. Volleinspeisung lohnt nur ohne nennenswerten Eigenverbrauch, dafür gibt es den höheren Satz.",
  },
  {
    q: "Wie lange bekomme ich die Einspeisevergütung?",
    a: "20 Jahre lang – plus das Jahr der Inbetriebnahme. Der bei Inbetriebnahme geltende Satz bleibt für diese gesamte Zeit fest. Die halbjährliche Degression senkt nur die Sätze für später in Betrieb gehende Anlagen, nicht Ihren einmal festgeschriebenen Satz.",
  },
  {
    q: "Bekomme ich bei negativen Strompreisen noch Geld?",
    a: "Nein. Nach dem Solarspitzengesetz (gilt für neue Anlagen seit Februar 2025) entfällt die Vergütung in Stunden, in denen der Börsenstrompreis negativ ist. Diese Zeiten werden aber kompensiert: Sie werden ans Ende der 20-jährigen Förderperiode angehängt, sodass der Förderzeitraum sich entsprechend verlängert.",
  },
  {
    q: "Lohnt sich Einspeisen oder Eigenverbrauch mehr?",
    a: "Eigenverbrauch – mit Abstand. Jede selbst genutzte Kilowattstunde ersetzt teuren Netzstrom (30–35 ct), die Einspeisung bringt nur rund 8 ct. Deshalb steigern ein Speicher, eine Wärmepumpe oder eine Wallbox die Wirtschaftlichkeit der PV-Anlage stärker als die Einspeisevergütung.",
  },
  {
    q: "Was passiert nach 20 Jahren?",
    a: "Nach Ablauf der 20-jährigen Förderung ist die Anlage „ausgefördert“ und läuft technisch weiter. Der eingespeiste Strom wird dann nur noch zum Marktwert vergütet, der unter der bisherigen Förderung liegt. Der Eigenverbrauch bleibt davon unberührt und wird dann umso wichtiger; für kleine Anlagen sind ab 2027 neue Vermarktungswege geplant.",
  },
];

export default function EinspeiseverguetungPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Einspeisevergütung 2026:
          <br />
          die aktuellen Sätze
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Einspeisevergütung 2026",
          href: "/ratgeber/einspeiseverguetung-2026",
        },
      ]}
    >
      <TlDr>
        Für neue PV-Anlagen <strong>bis 10 kWp</strong> gibt es seit Februar 2026{" "}
        <strong>7,78 ct/kWh</strong> bei Teileinspeisung und{" "}
        <strong>12,34 ct/kWh</strong> bei Volleinspeisung – fest für{" "}
        <strong>20 Jahre</strong>. Bei negativen Börsenpreisen entfällt die
        Vergütung (Solarspitzengesetz), wird aber durch eine Verlängerung der
        Förderdauer ausgeglichen. Wirtschaftlich zählt ohnehin der{" "}
        <strong>Eigenverbrauch</strong> mehr als die Einspeisung.
      </TlDr>

      <H2 id="wie-hoch">Wie hoch ist die Einspeisevergütung 2026?</H2>
      <P>
        Die Höhe hängt von der <strong>Anlagengröße</strong> und der{" "}
        <strong>Einspeiseart</strong> ab. Diese Sätze gelten für Anlagen, die
        zwischen <strong>Februar und Juli 2026</strong> in Betrieb gehen:
      </P>
      <CostTable
        head={["Anlagengröße", "Teileinspeisung", "Volleinspeisung"]}
        rows={[
          ["bis 10 kWp", "7,78 ct/kWh", "12,34 ct/kWh"],
          ["10 – 40 kWp", "6,73 ct/kWh", "10,35 ct/kWh"],
        ]}
      />
      <P>
        Zum <strong>1. August 2026</strong> sinken die Sätze durch die
        halbjährliche Degression leicht (für Anlagen bis 10 kWp auf etwa 7,71 bzw.
        12,23 ct/kWh). Die genauen Werte gelten immer für den Zeitpunkt der
        Inbetriebnahme. Was die Anlage selbst kostet, steht im Ratgeber{" "}
        <Link
          href="/ratgeber/photovoltaik-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Photovoltaik: Kosten
        </Link>
        .
      </P>

      <H2 id="teil-voll">Teileinspeisung oder Volleinspeisung?</H2>
      <P>
        <strong>Teileinspeisung (Überschusseinspeisung)</strong> heißt: Sie nutzen
        den Solarstrom zuerst selbst und speisen nur den Überschuss ein – der
        Normalfall fürs Einfamilienhaus. <strong>Volleinspeisung</strong> heißt:
        Sie speisen den gesamten Strom ein und verbrauchen nichts selbst; dafür
        gibt es den höheren Satz. Für die allermeisten Haushalte ist die
        Teileinspeisung klar wirtschaftlicher, weil selbst genutzter Strom{" "}
        <strong>30–35 ct/kWh</strong> spart, die Einspeisung aber nur knapp{" "}
        <strong>8 ct</strong> bringt. Volleinspeisung lohnt nur, wenn Sie ohnehin
        kaum Strom selbst verbrauchen.
      </P>

      <H2 id="20-jahre">Wie lange gilt die Vergütung? 20 Jahre</H2>
      <P>
        Der bei Inbetriebnahme geltende Satz ist Ihnen <strong>20 Jahre lang plus
        das Inbetriebnahmejahr</strong> garantiert – er ändert sich danach nicht
        mehr. Die <strong>Degression</strong> (seit 2024 alle sechs Monate rund
        1 %) senkt nur die Sätze für Anlagen, die <em>später</em> ans Netz gehen.
        Wer früher in Betrieb nimmt, sichert sich also den höheren Satz für die
        gesamte Laufzeit – ein Grund, den Anschluss nicht unnötig aufzuschieben.
      </P>

      <H2 id="negativ">Negative Strompreise: das Solarspitzengesetz</H2>
      <P>
        Seit Februar 2025 gilt für neue Anlagen: In Stunden, in denen der{" "}
        <strong>Börsenstrompreis negativ</strong> ist, wird für eingespeisten
        Strom <strong>keine Vergütung</strong> gezahlt. Das klingt schlechter, als
        es ist – die ausgefallenen Zeiträume werden <strong>ans Ende der
        20-jährigen Förderperiode angehängt</strong> und so nachgeholt (auf Basis
        des durchschnittlichen Ertragspotenzials der betroffenen Monate). Wer den
        Strom in diesen Stunden ohnehin selbst verbraucht oder speichert, ist von
        der Regel praktisch nicht betroffen. Zur Erinnerung: Anlagen über 7 kWp
        müssen dafür steuerbar sein – Details im{" "}
        <Link
          href="/ratgeber/photovoltaik-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Kosten-Ratgeber
        </Link>
        .
      </P>

      <H2 id="eigenverbrauch">Warum Eigenverbrauch mehr bringt als Einspeisung</H2>
      <P>
        Die Einspeisevergütung ist ein netter Zusatz, aber nicht der Kern der
        Wirtschaftlichkeit. Mit rund 8 ct/kWh liegt sie weit unter dem, was eine
        selbst genutzte Kilowattstunde wert ist (30–35 ct gesparter Netzstrom).
        Deshalb steigern ein <strong>Batteriespeicher</strong>, eine{" "}
        <Link
          href="/ratgeber/waermepumpe-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe
        </Link>{" "}
        oder eine{" "}
        <Link
          href="/ratgeber/wallbox-installieren-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wallbox
        </Link>{" "}
        den Ertrag Ihrer Anlage stärker als jeder Einspeisesatz – sie verwandeln
        günstigen Solarstrom in vermiedenen Netzbezug.
      </P>

      <CtaBand
        headline="Anlage richtig auf Eigenverbrauch auslegen"
        text="Wir verkaufen keine Anlagen – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar-Fachbetriebe, die Anlagengröße, Speicher und Einspeiseart auf Ihren Verbrauch abstimmen."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik"
        source="einspeiseverguetung-page"
      />

      <H2 id="nach-20">Was passiert nach 20 Jahren?</H2>
      <P>
        Nach Ablauf der Förderung ist die Anlage <strong>ausgefördert</strong> –
        sie läuft technisch problemlos weiter, der eingespeiste Strom wird dann
        aber nur noch zum <strong>Marktwert</strong> vergütet, der unter der
        bisherigen Förderung liegt. Der <strong>Eigenverbrauch</strong> bleibt
        davon unberührt und wird dann umso wertvoller. Für kleine Anlagen sind ab
        2027 neue Vermarktungswege in Planung; die genauen Regeln stehen noch
        nicht endgültig fest.
      </P>

      <H2 id="anmeldung">Wie bekomme ich die Vergütung ausgezahlt?</H2>
      <P>
        Die Vergütung zahlt Ihr Netzbetreiber. Voraussetzung ist die Anmeldung der
        Anlage im <strong>Marktstammdatenregister</strong> der Bundesnetzagentur{" "}
        <em>und</em> beim <strong>Netzbetreiber</strong> (Netzanschluss). Beides
        übernimmt in der Regel der ausführende Fachbetrieb. Ohne die Registrierung
        wird nicht ausgezahlt – und es drohen Kürzungen.
      </P>

      <H2 id="hamburg">Einspeisevergütung in Hamburg</H2>
      <P>
        Die Einspeisevergütung ist bundesweit im EEG geregelt und in Hamburg
        identisch – sie hängt nicht vom Standort ab. Lokal läuft die Anmeldung über
        die <strong>Hamburger Energienetze</strong> als Netzbetreiber; das erledigt
        der Fachbetrieb mit. Wir sind kein Hersteller und kein Anlagenvermieter:
        Über unsere Vermittlung erhalten Sie herstellerneutral Angebote geprüfter
        Solarbetriebe aus Niendorf und Umgebung, die Ihre Anlage auf maximalen
        Eigenverbrauch statt auf die Einspeisung auslegen.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zur Einspeisevergütung 2026" />

      <CtaBand
        headline="PV-Angebote herstellerneutral vergleichen"
        text="Schildern Sie kurz Ihr Dach und Ihren Stromverbrauch – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar-Fachbetriebe aus Hamburg und Umgebung, die Anlagengröße, Speicher und Einspeiseart wirtschaftlich auslegen."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik"
        source="einspeiseverguetung-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Angaben sind unverbindliche Richtwerte (Stand: Juni 2026) und ersetzen
        keine individuelle Beratung. Vergütungssätze gelten für den jeweiligen
        Inbetriebnahme-Zeitraum, unterliegen der halbjährlichen Degression und
        können sich durch Gesetzesänderungen (EEG, Solarspitzengesetz) ändern.
      </p>
    </RatgeberArticle>
  );
}
