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
  title: "Solarcarport: Kosten, Förderung & ob es sich lohnt (2026)",
  description:
    "Was kostet ein Solarcarport? Carport mit Photovoltaik kostet je nach Größe ~9.000–30.000 € (mit Speicher & Wallbox 15.000–30.000 €). Förderung 2026 (0 % Steuer, Einspeisevergütung, KfW), Wirtschaftlichkeit und Genehmigung – mit Hamburg-Bezug.",
  alternates: { canonical: "/ratgeber/solarcarport-kosten" },
  openGraph: {
    title: "Solarcarport: Kosten, Förderung & Wirtschaftlichkeit",
    description:
      "Carport mit Photovoltaik – Kosten nach Größe, Förderung 2026, Amortisation und das Duo mit der Wallbox.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet ein Solarcarport?",
    a: "Je nach Größe und Ausstattung etwa 9.000–20.000 € für einen Einzel-Solarcarport inkl. Montage, mit Batteriespeicher und Wallbox eher 15.000–30.000 €. Große Doppelcarports mit größerer PV-Anlage können bis ~35.000 € kosten. Die reine PV-Anlage liegt bei rund 1.250–1.750 € pro kWp inkl. Montage.",
  },
  {
    q: "Lohnt sich ein Solarcarport?",
    a: "Vor allem bei hohem Eigenverbrauch – ideal in Kombination mit Wallbox und E-Auto. Jede selbst genutzte Kilowattstunde spart 25–35 Cent Netzstrom; eine 5-kWp-Anlage mit ~60 % Eigenverbrauch bringt grob 600–900 € pro Jahr. Üblich ist eine Amortisation in etwa 10–15 Jahren. Wer kaum selbst verbraucht und nur einspeist, amortisiert langsamer.",
  },
  {
    q: "Wie viel kWp passen auf ein Carport?",
    a: "Als Faustregel braucht 1 kWp moderner Module rund 5 m² Fläche. Ein Einzelcarport trägt damit grob 3–4 kWp, ein Doppelcarport etwa 6–10 kWp – abhängig von Dachfläche, Ausrichtung und Modultyp.",
  },
  {
    q: "Solarcarport mit Speicher – sinnvoll?",
    a: "Ein Batteriespeicher erhöht den Eigenverbrauch (Sonnenstrom abends/nachts nutzbar) und damit die Ersparnis, kostet aber extra. Sinnvoll vor allem bei hohem Abendverbrauch oder E-Auto, das tagsüber nicht geladen werden kann. Die Wirtschaftlichkeit hängt stark vom Strompreis und Verbrauchsprofil ab.",
  },
  {
    q: "Welche Förderung gibt es 2026 für einen Solarcarport?",
    a: "Wichtigster Hebel ist der Nullsteuersatz: Auf PV-Anlagen bis 30 kWp inkl. Speicher fällt 0 % Umsatzsteuer an (kein Antrag nötig). Dazu kommen die Einspeisevergütung (2026 rund 7,8 ct/kWh bei Teileinspeisung, 20 Jahre garantiert), zinsgünstige KfW-Kredite (Programm 270) und teils kommunale Zuschüsse. Angaben Stand Juni 2026 – Konditionen ändern sich, im Zweifel Steuerberatung/aktuelle Quellen prüfen.",
  },
  {
    q: "Braucht ein Solarcarport eine Baugenehmigung?",
    a: "Baurechtlich zählt der Carport selbst: In Hamburg ist er im Innenbereich bis 50 m² und 3 m Wandhöhe verfahrensfrei (§ 61 HBauO); die PV-Module auf dem Dach ändern daran in der Regel nichts. Unabhängig davon muss die PV-Anlage beim Netzbetreiber und im Marktstammdatenregister der Bundesnetzagentur angemeldet werden. Verbindlich ist die Auskunft des Bauamts.",
  },
];

export default function SolarcarportKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Solarcarport:
          <br />
          Kosten &amp; Förderung
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Solarcarport: Kosten",
          href: "/ratgeber/solarcarport-kosten",
        },
      ]}
    >
      <TlDr>
        Ein <strong>Solarcarport</strong> ist ein Carport mit Photovoltaik-Dach.
        Er kostet je nach Größe rund <strong>9.000–20.000 €</strong> (Einzel,
        inkl. Montage), mit <strong>Speicher &amp; Wallbox 15.000–30.000 €</strong>,
        große Doppelanlagen bis ~35.000 €. Die PV-Anlage liegt bei{" "}
        <strong>1.250–1.750 €/kWp</strong>. Er lohnt sich vor allem bei hohem
        Eigenverbrauch – ideal mit{" "}
        <Link
          href="/ratgeber/wallbox-installieren-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Wallbox
        </Link>{" "}
        und E-Auto (Amortisation ~10–15 Jahre). 2026 gilt der{" "}
        <strong>Nullsteuersatz</strong> (0 % USt bis 30 kWp). Verbindlich ist
        immer der Einzelfall.
      </TlDr>

      <H2 id="kosten">Was kostet ein Solarcarport?</H2>
      <P>
        Die Kosten setzen sich aus zwei Teilen zusammen: dem Carport selbst und
        der Photovoltaik-Anlage (Module, Wechselrichter, optional Speicher und
        Wallbox). Richtwerte inkl. Montage:
      </P>
      <CostTable
        head={["Variante", "Richtwert (inkl. Montage)"]}
        rows={[
          ["Einzel-Solarcarport (~3–4 kWp)", "9.000 – 20.000 €"],
          ["Mit Batteriespeicher & Wallbox", "15.000 – 30.000 €"],
          ["Doppelcarport, größere PV (>7 kWp)", "bis ~35.000 €"],
          ["PV-Anlage je kWp", "1.250 – 1.750 €"],
        ]}
      />
      <P>
        Den reinen Carport-Anteil (ohne PV) und alle Aufbau-Nebenkosten finden Sie
        im{" "}
        <Link
          href="/ratgeber/carport-bauen-lassen-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Kostenratgeber
        </Link>
        ; welches Tragwerk-Material sinnvoll ist, im{" "}
        <Link
          href="/ratgeber/carport-material-vergleich"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Materialvergleich
        </Link>
        .
      </P>

      <H2 id="lohnt-sich">Lohnt sich ein Solarcarport?</H2>
      <P>
        Der wirtschaftliche Hebel ist der <strong>Eigenverbrauch</strong>: Jede
        selbst genutzte Kilowattstunde spart 25–35 Cent Netzstrom, während die
        Einspeisung nur wenige Cent bringt. Eine 5-kWp-Anlage mit etwa 60 %
        Eigenverbrauch spart grob <strong>600–900 € pro Jahr</strong>; typischerweise
        amortisiert sich ein Solarcarport in <strong>10–15 Jahren</strong>. Am
        besten rechnet er sich, wenn der Strom direkt vor Ort verbraucht wird –
        etwa zum Laden des E-Autos über eine Wallbox.
      </P>

      <H2 id="foerderung">Förderung &amp; Steuer 2026</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Nullsteuersatz (0 % USt):</strong> Auf PV-Anlagen bis 30 kWp
          inkl. Speicher – ohne Antrag, der größte Spareffekt.
        </li>
        <li>
          <strong>Einspeisevergütung:</strong> 2026 rund 7,8 ct/kWh
          (Teileinspeisung), für 20 Jahre garantiert.
        </li>
        <li>
          <strong>KfW-Kredit (Programm 270):</strong> zinsgünstige Finanzierung
          der Anlage.
        </li>
        <li>
          <strong>Kommunale Zuschüsse:</strong> je nach Stadt/Bezirk möglich –
          vor dem Kauf prüfen.
        </li>
      </ul>
      <P>
        Angaben Stand Juni 2026; Förder- und Steuerkonditionen ändern sich
        regelmäßig. Für die steuerliche Behandlung im Einzelfall ist eine
        Steuerberatung sinnvoll.
      </P>

      <CtaBand
        headline="Solarcarport planen lassen?"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung, die Carport, PV-Anlage und – falls gewünscht – Speicher und Wallbox aus einer Hand planen."
        ctaLabel="Solarcarport-Angebote anfragen"
        service="Carport"
        source="solarcarport-page"
      />

      <H2 id="wallbox">Solarcarport + Wallbox: das ideale Duo</H2>
      <P>
        Wer ein E-Auto fährt, holt aus einem Solarcarport am meisten heraus: Der
        Sonnenstrom vom eigenen Dach lädt das Auto direkt – das senkt den
        Eigenverbrauch-Strompreis auf nahezu null und verbessert die
        Wirtschaftlichkeit deutlich. Was die Ladeseite kostet und welche Technik
        passt, steht im Ratgeber{" "}
        <Link
          href="/ratgeber/wallbox-installieren-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Wallbox installieren: Kosten
        </Link>
        .
      </P>

      <H2 id="genehmigung">Genehmigung in Hamburg</H2>
      <P>
        Baurechtlich entscheidet der Carport, nicht das Modul: In Hamburg ist ein
        Carport im Innenbereich bis 50 m² und 3 m Wandhöhe verfahrensfrei
        (§ 61 HBauO) – die PV-Module auf dem Dach ändern daran in der Regel
        nichts. Details und Grenzfälle klärt der Ratgeber{" "}
        <Link
          href="/ratgeber/carport-baugenehmigung-hamburg"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Baugenehmigung Hamburg
        </Link>
        , Vorgaben zu Dachform/Material der{" "}
        <Link
          href="/ratgeber/carport-bebauungsplan"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Bebauungsplan-Ratgeber
        </Link>
        . Unabhängig vom Baurecht muss die PV-Anlage beim Netzbetreiber und im{" "}
        <strong>Marktstammdatenregister</strong> angemeldet werden.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zum Solarcarport" />

      <CtaBand
        headline="Solarcarport in Hamburg bauen lassen"
        text="Beschreiben Sie kurz Größe, gewünschte Leistung und ob Speicher/Wallbox dazukommen – wir bringen Sie kostenlos und unverbindlich mit passenden Betrieben aus Hamburg und Umgebung zusammen."
        ctaLabel="Solarcarport-Angebote anfragen"
        service="Carport"
        source="solarcarport-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preise und Förderangaben sind Richtwerte (Stand Juni 2026) und
        ersetzen kein individuelles Angebot und keine Steuer- oder Rechtsberatung.
        Tatsächliche Kosten, Erträge und Förderungen hängen von Anlage, Ausrichtung,
        Verbrauch und Region ab.
      </p>
    </RatgeberArticle>
  );
}
