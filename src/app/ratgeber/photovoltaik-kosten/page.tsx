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
  title: "Photovoltaik Kosten 2026: Was eine PV-Anlage mit Speicher kostet",
  description:
    "Was kostet eine Photovoltaikanlage 2026? Preise pro kWp, mit und ohne Speicher, fürs Einfamilienhaus – plus 0 % MwSt, Steuerfreiheit bis 30 kWp, Einspeisevergütung 2026 und wann sich Solar wirklich lohnt. Herstellerneutral, mit Fachbetrieb-Vermittlung für Hamburg.",
  alternates: { canonical: "/ratgeber/photovoltaik-kosten" },
  openGraph: {
    title: "Photovoltaik Kosten 2026: PV-Anlage mit & ohne Speicher",
    description:
      "Preise pro kWp, mit/ohne Speicher, Steuer & Einspeisevergütung 2026 – herstellerneutral.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet eine Photovoltaikanlage mit Speicher?",
    a: "Für ein typisches Einfamilienhaus (etwa 10 kWp) kostet eine PV-Anlage mit Batteriespeicher 2026 rund 15.000–24.000 €. Ohne Speicher sind es etwa 10.000–18.000 €. Als Faustwert gilt: ungefähr 1.000–1.800 € pro kWp Solarleistung plus 400–800 € pro kWh Speicherkapazität.",
  },
  {
    q: "Lohnt sich ein Stromspeicher zur PV-Anlage?",
    a: "Ein Speicher hebt den Eigenverbrauch von rund 30 % auf 60–80 % – Sie nutzen also mehr Ihres günstigen Solarstroms selbst, statt ihn für wenige Cent einzuspeisen. Wirtschaftlich ist er, wenn er nicht mehr als etwa 600–800 € pro kWh kostet und zum Verbrauch passt. Faustregel zur Größe: ungefähr 1 kWh Speicher je 1.000 kWh Jahresstromverbrauch.",
  },
  {
    q: "Ist eine Photovoltaikanlage steuerfrei?",
    a: "Weitgehend ja. Seit 2023 gilt für Kauf und Installation der 0-%-Mehrwertsteuersatz (auch 2026), und Einnahmen aus Anlagen bis 30 kWp auf Wohngebäuden sind einkommensteuerfrei. Anmelden müssen Sie die Anlage im Marktstammdatenregister der Bundesnetzagentur und beim Netzbetreiber (Netzanschluss); einen Fragebogen zur steuerlichen Erfassung brauchen Sie dagegen in der Regel nicht mehr.",
  },
  {
    q: "Wie groß sollte die PV-Anlage für ein Einfamilienhaus sein?",
    a: "Für ein EFH sind 8–12 kWp üblich. Planen Sie größer, wenn eine Wärmepumpe oder Wallbox dazukommt: Als Faustregel gilt rund elektrische Anschlussleistung in kW × 3 = kWp für die Wärmepumpe, und etwa 2 kWp zusätzlich je 10.000 km Jahresfahrleistung beim E-Auto.",
  },
  {
    q: "Was bekomme ich 2026 für eingespeisten Strom?",
    a: "Für neue Anlagen bis 10 kWp etwa 7,78 ct/kWh (Teileinspeisung) bzw. 12,35 ct/kWh (Volleinspeisung). Wichtig: In Stunden mit negativen Börsenstrompreisen wird nach dem Solarspitzengesetz keine Vergütung gezahlt – diese Zeiten werden durch eine Verlängerung des Förderzeitraums ausgeglichen. Die Sätze sinken durch die EEG-Degression langsam, bleiben aber für Anlagen bis 100 kWp erhalten. Wirtschaftlich zählt ohnehin vor allem der Eigenverbrauch – selbst genutzter Strom ist deutlich mehr wert als die Einspeisung.",
  },
  {
    q: "Muss meine Anlage steuerbar sein?",
    a: "Neue Anlagen über 7 kWp müssen nach dem Solarspitzengesetz steuerbar sein – per Smart Meter und Steuereinrichtung, damit der Netzbetreiber die Einspeisung bei Netzengpässen begrenzen kann. Solange diese Technik fehlt, wird die Einspeisung auf 60 % der Anlagenleistung gedeckelt. Kleine Anlagen bis 7 kWp sind ausgenommen. Der Fachbetrieb plant das mit ein.",
  },
];

export default function PhotovoltaikKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Photovoltaik: Kosten
          <br />
          einer PV-Anlage 2026
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Photovoltaik-Kosten",
          href: "/ratgeber/photovoltaik-kosten",
        },
      ]}
    >
      <TlDr>
        Eine Photovoltaikanlage fürs Einfamilienhaus kostet 2026{" "}
        <strong>~10.000–18.000 €</strong> ohne und <strong>~15.000–24.000 €</strong>{" "}
        mit Speicher – grob <strong>1.000–1.800 € pro kWp</strong> plus{" "}
        <strong>400–800 € pro kWh</strong> Speicher. Es fällt <strong>0 % MwSt</strong>{" "}
        an, Anlagen bis 30 kWp sind steuerfrei. Wirtschaftlich wird Solar vor
        allem über den <strong>Eigenverbrauch</strong> – ab etwa 3.000 kWh
        Jahresverbrauch und einem Dach nach Süd, Ost oder West.
      </TlDr>

      <H2 id="was-kostet">Was kostet eine Photovoltaikanlage?</H2>
      <P>
        Der Preis richtet sich vor allem nach der <strong>Anlagengröße</strong>{" "}
        (in kWp) und danach, ob ein <strong>Batteriespeicher</strong> dazukommt.
        Die folgenden Werte verstehen sich schlüsselfertig inklusive Montage – und
        ohne Mehrwertsteuer, denn die liegt bei PV bei 0 %:
      </P>
      <CostTable
        head={["Anlagengröße", "ohne Speicher", "mit Speicher (~1 kWh/kWp)"]}
        rows={[
          ["4 kWp (kleines EFH)", "6.000 – 9.000 €", "9.000 – 13.000 €"],
          ["7 kWp", "8.000 – 13.000 €", "12.000 – 18.000 €"],
          ["10 kWp (typisches EFH)", "10.000 – 18.000 €", "15.000 – 24.000 €"],
          ["15 kWp (großes EFH / mit WP)", "15.000 – 25.000 €", "21.000 – 32.000 €"],
        ]}
      />
      <P>
        Als grobe Faustwerte: rund <strong>1.000–1.800 € pro kWp</strong>{" "}
        Solarleistung und <strong>400–800 € pro kWh</strong> Speicherkapazität. Je
        größer die Anlage, desto günstiger der Preis pro kWp. Wirtschaftlich
        sinnvoll ist sie, solange sie etwa 1.600–2.200 € pro kWp nicht
        überschreitet.
      </P>

      <H2 id="preis-faktoren">Wovon hängt der Preis ab?</H2>
      <P>
        Neben Größe und Speicher beeinflussen mehrere Faktoren den Endpreis:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li><strong>Speicher:</strong> der größte einzelne Posten – ob, und wie groß, entscheidet stark über die Gesamtkosten.</li>
        <li><strong>Dach:</strong> Ausrichtung, Neigung, Ziegelart und Zugänglichkeit; Indach-Lösungen und ein gleichzeitig neues Dach kosten mehr.</li>
        <li><strong>Modulqualität & Wechselrichter:</strong> Wirkungsgrad und Marke.</li>
        <li><strong>Montageaufwand:</strong> Gerüst, Kabelwege, Zählerschrank, ggf. Netzanschluss-Ertüchtigung.</li>
      </ul>

      <H2 id="speicher">Lohnt sich ein Speicher?</H2>
      <P>
        Ein Batteriespeicher hebt den <strong>Eigenverbrauch von rund 30 % auf
        60–80 %</strong>. Das ist der Kern der Wirtschaftlichkeit: Selbst genutzter
        Solarstrom kostet Sie nur rund 10 ct/kWh, während Netzstrom 30–35 ct kostet
        – jede selbst verbrauchte Kilowattstunde spart also viel mehr, als die
        Einspeisung (~8 ct) einbringt. Faustregel zur Größe:{" "}
        <strong>etwa 1 kWh Speicher je 1.000 kWh Jahresverbrauch</strong> bzw.
        1–1,5 kWh pro kWp. Zu groß dimensioniert lohnt der Speicher selten.
      </P>

      <H2 id="steuer">0 % MwSt, Steuerfreiheit &amp; Einspeisevergütung 2026</H2>
      <P>
        Drei Regelungen machen PV 2026 attraktiv: Auf Kauf und Installation fällt{" "}
        <strong>0 % Mehrwertsteuer</strong> an, Anlagen bis <strong>30 kWp</strong>{" "}
        sind <strong>einkommensteuerfrei</strong>, und für eingespeisten Strom gibt
        es die <strong>Einspeisevergütung</strong> (bis 10 kWp rund 7,78 ct/kWh bei
        Teileinspeisung). In Stunden mit <strong>negativen Börsenstrompreisen</strong>{" "}
        wird diese Vergütung allerdings nicht gezahlt – der Förderzeitraum verlängert
        sich stattdessen. Anmelden müssen Sie die Anlage sowohl im{" "}
        <strong>Marktstammdatenregister</strong> als auch beim{" "}
        <strong>Netzbetreiber</strong> (Netzanschluss) – das übernimmt der
        Fachbetrieb. Und: Neue Anlagen über 7 kWp müssen nach dem{" "}
        <strong>Solarspitzengesetz</strong> steuerbar sein (Smart Meter /
        Steuereinrichtung); ohne diese wird die Einspeisung auf 60 % der
        Anlagenleistung begrenzt. Die aktuellen Sätze, Teil- vs. Volleinspeisung
        und die 20-Jahre-Garantie stehen im Ratgeber{" "}
        <Link
          href="/ratgeber/einspeiseverguetung-2026"
          className="text-accent underline-offset-2 hover:underline"
        >
          Einspeisevergütung 2026
        </Link>
        .
      </P>

      <H2 id="groesse">PV mit Wärmepumpe oder Wallbox? Dann größer planen</H2>
      <P>
        Photovoltaik ist der günstige Stromlieferant für die übrigen
        Energie-Bausteine im Haus – und genau dann lohnt eine größere Anlage. Für
        eine{" "}
        <Link
          href="/ratgeber/waermepumpe-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe
        </Link>{" "}
        rechnen Sie grob die elektrische Anschlussleistung in kW × 3 als kWp dazu;
        für eine{" "}
        <Link
          href="/ratgeber/wallbox-installieren-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wallbox
        </Link>{" "}
        etwa 2 kWp je 10.000 km Jahresfahrleistung. Wer Dachfläche am Stellplatz
        sucht, findet sie oft auf dem{" "}
        <Link
          href="/ratgeber/solarcarport-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Solarcarport
        </Link>
        .
      </P>

      <CtaBand
        headline="Was kostet Solar auf Ihrem Dach konkret?"
        text="Wir verkaufen keine Anlagen und vermieten nichts – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar-Fachbetriebe, die Dach, Anlagengröße und Speicher ehrlich für Ihr Haus auslegen."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik"
        source="photovoltaik-page"
      />

      <H2 id="lohnt-nicht">Wann lohnt sich Photovoltaik (noch) nicht?</H2>
      <P>
        Ehrlich bleiben: Nicht jedes Dach ist ideal. <strong>Kritisch</strong> wird
        es bei reiner <strong>Nordausrichtung</strong>, starker{" "}
        <strong>Verschattung</strong> (Bäume, Nachbargebäude) oder sehr niedrigem
        Stromverbrauch unter etwa <strong>3.000 kWh im Jahr</strong> – dann fehlt
        der Eigenverbrauch, der die Anlage trägt. Auch ein sanierungsbedürftiges
        Dach gehört zuerst gemacht. In all diesen Fällen lohnt der nüchterne Blick
        auf die Zahlen mehr als jedes Verkaufsversprechen.
      </P>

      <H2 id="hamburg">Photovoltaik in Hamburg</H2>
      <P>
        Hamburg liegt sonnentechnisch im soliden Mittelfeld – PV rechnet sich hier
        wie im Bundesschnitt. Lokal zählen andere Punkte: in dichter Reihenhaus-
        und Stadtteilbebauung die <strong>Dachausrichtung und Verschattung</strong>{" "}
        durch Nachbargebäude, bei Altbauten der <strong>Denkmalschutz</strong>, und
        die Anmeldung über das Marktstammdatenregister und die{" "}
        <strong>Hamburger Energienetze</strong> (Netzanschluss, Steuerbarkeit ab
        7 kW) – das übernimmt in der Regel der Fachbetrieb. Wir sind kein Hersteller
        und kein Anlagenvermieter: Über unsere Vermittlung erhalten Sie
        herstellerneutral Angebote geprüfter Solarbetriebe aus Niendorf und
        Umgebung, die Ihr Dach realistisch einschätzen.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Photovoltaik-Kosten" />

      <CtaBand
        headline="Jetzt herstellerneutral PV-Angebote vergleichen"
        text="Schildern Sie kurz Ihr Dach und Ihren Stromverbrauch – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar-Fachbetriebe aus Hamburg und Umgebung, die Anlagengröße, Speicher und Wirtschaftlichkeit konkret berechnen."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik"
        source="photovoltaik-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen kein individuelles Angebot. Tatsächliche Kosten und
        Wirtschaftlichkeit hängen von Anlagengröße, Speicher, Dach, Stromverbrauch
        und Eigenverbrauch ab. Steuer- und Vergütungsregeln können sich ändern.
      </p>
    </RatgeberArticle>
  );
}
