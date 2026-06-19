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
  title: "Stromspeicher Kosten 2026: Preise pro kWh, Größe & ob er sich lohnt",
  description:
    "Was kostet ein PV-Stromspeicher 2026? Preise pro kWh für 5–15 kWh, die richtige Speichergröße berechnen, Lebensdauer & Garantie, Notstrom und wann sich der Speicher lohnt – und wann nicht. Herstellerneutral, mit Fachbetrieb-Vermittlung für Hamburg.",
  alternates: { canonical: "/ratgeber/stromspeicher-kosten" },
  openGraph: {
    title: "Stromspeicher Kosten 2026: Preise, Größe & Wirtschaftlichkeit",
    description:
      "Preise pro kWh, Speichergröße berechnen, Lebensdauer, Notstrom & wann sich der Speicher lohnt.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet ein Stromspeicher (5 oder 10 kWh)?",
    a: "Mit Einbau liegt ein 5-kWh-Heimspeicher 2026 bei etwa 2.500–5.000 €, ein 10-kWh-Speicher bei rund 4.000–8.000 €. Pro Kilowattstunde sind das grob 400–800 €; große Speicher über 15 kWh gibt es teils schon unter 400 €/kWh. Auf den Speicher fällt – als PV-Komponente bis 30 kWp – keine Mehrwertsteuer an.",
  },
  {
    q: "Wie groß sollte mein Stromspeicher sein?",
    a: "Eine bewährte Faustregel: etwa 1 kWh nutzbare Speicherkapazität je 1.000 kWh Jahresstromverbrauch – bei 5.000 kWh also rund 5 kWh. Alternativ 1–1,5 kWh pro kWp PV-Leistung. Wer Wärmepumpe, Wallbox und Notstrom einplant, braucht deutlich mehr (oft 14–18 kWh). Zu groß dimensioniert lohnt sich der Speicher selten.",
  },
  {
    q: "Lohnt sich ein Stromspeicher 2026?",
    a: "Meist ja – die Preise sind 2024–2026 deutlich gefallen. Ein Speicher hebt den Eigenverbrauch von rund 30 % auf 60–80 %; selbst genutzter Solarstrom (~10 ct) ersetzt teuren Netzstrom (30–35 ct). Wirtschaftlich ist er, wenn er etwa 600–800 €/kWh nicht überschreitet und zur Anlage passt. Bei sehr kleinem Verbrauch oder überdimensioniertem Speicher kann er sich aber nicht rechnen.",
  },
  {
    q: "Wie lange hält ein Stromspeicher?",
    a: "Moderne LiFePO4-Speicher (LFP) schaffen typisch 6.000–10.000 Ladezyklen, was bei täglichem Laden 15–25 Jahren entspricht. Die Hersteller-Garantie deckt meist 10 Jahre oder eine Restkapazität von 80 % ab. Ein Speicher überdauert damit in der Regel nicht ganz die 20-jährige Förderdauer der PV-Anlage.",
  },
  {
    q: "Habe ich mit Speicher bei Stromausfall noch Strom?",
    a: "Nur, wenn der Speicher ausdrücklich eine Notstrom- oder Ersatzstromfunktion hat – das ist nicht automatisch dabei. Eine einfache Notstromsteckdose ist günstiger, eine echte Ersatzstromversorgung (das ganze Haus läuft weiter) aufwändiger und teurer. Sagen Sie dem Fachbetrieb, ob Sie das brauchen, bevor Sie das Gerät wählen.",
  },
  {
    q: "Kann ich einen Stromspeicher nachrüsten?",
    a: "Ja. Ein Speicher lässt sich auch Jahre nach der PV-Anlage ergänzen – meist AC-gekoppelt, also unabhängig vom vorhandenen Wechselrichter. Das ist etwas weniger effizient als ein von Anfang an integrierter (DC-gekoppelter) Speicher, dafür flexibel. Die passende Größe sollten Sie aber auch beim Nachrüsten vorher berechnen.",
  },
];

export default function StromspeicherKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Stromspeicher: Kosten,
          <br />
          Größe &amp; Nutzen 2026
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Stromspeicher-Kosten",
          href: "/ratgeber/stromspeicher-kosten",
        },
      ]}
    >
      <TlDr>
        Ein PV-Stromspeicher kostet 2026 mit Einbau grob{" "}
        <strong>400–800 € pro kWh</strong> – ein 5-kWh-Speicher also{" "}
        <strong>~2.500–5.000 €</strong>, ein 10-kWh-Speicher{" "}
        <strong>~4.000–8.000 €</strong> (0 % MwSt). Faustregel zur Größe:{" "}
        <strong>~1 kWh je 1.000 kWh Jahresverbrauch</strong>. Er hebt den
        Eigenverbrauch von ~30 % auf <strong>60–80 %</strong> und lohnt sich meist –
        außer er ist zu groß dimensioniert oder zu teuer pro kWh.
      </TlDr>

      <H2 id="was-kostet">Was kostet ein Stromspeicher?</H2>
      <P>
        Der Preis skaliert grob mit der Kapazität, aber nicht linear: Wegen der
        festen Kosten für Wechselrichter und Installation sind{" "}
        <strong>große Speicher pro kWh günstiger</strong> als kleine. Die folgenden
        Werte verstehen sich inklusive Einbau und ohne Mehrwertsteuer (0 % als
        PV-Komponente):
      </P>
      <CostTable
        head={["Speichergröße", "Preis (mit Einbau)", "≈ pro kWh"]}
        rows={[
          ["5 kWh", "2.500 – 5.000 €", "500 – 1.000 €"],
          ["10 kWh", "4.000 – 8.000 €", "400 – 800 €"],
          ["15 kWh", "5.500 – 9.500 €", "370 – 650 €"],
        ]}
      />
      <P>
        Die Preise sind seit Ende 2024 deutlich gefallen (zuletzt rund 15–18 % pro
        Jahr). Was die PV-Anlage selbst kostet, steht im Ratgeber{" "}
        <Link
          href="/ratgeber/photovoltaik-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Photovoltaik: Kosten
        </Link>
        .
      </P>

      <H2 id="groesse">Wie groß sollte der Speicher sein?</H2>
      <P>
        Die wichtigste Frage – und der häufigste Fehler ist Überdimensionierung.
        Zwei bewährte Faustregeln:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li><strong>~1 kWh je 1.000 kWh Jahresverbrauch</strong> – bei 5.000 kWh also etwa 5 kWh.</li>
        <li><strong>1–1,5 kWh pro kWp</strong> PV-Leistung.</li>
        <li><strong>Deutlich mehr</strong> (oft 14–18 kWh), wenn Wärmepumpe, Wallbox und Notstrom dazukommen.</li>
      </ul>
      <P>
        Ein Speicher kann immer nur so viel speichern, wie tagsüber an Überschuss
        anfällt und abends gebraucht wird. Wird er zu groß gewählt, bleiben teure
        Kilowattstunden ungenutzt – das verlängert die Amortisation, statt sie zu
        verkürzen. Wer ohnehin eine{" "}
        <Link
          href="/ratgeber/waermepumpe-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe
        </Link>{" "}
        oder{" "}
        <Link
          href="/ratgeber/wallbox-installieren-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wallbox
        </Link>{" "}
        plant, sollte das von Anfang an mit einrechnen.
      </P>

      <H2 id="lohnt">Lohnt sich ein Stromspeicher?</H2>
      <P>
        Meistens ja. Der Speicher hebt den <strong>Eigenverbrauch von rund 30 % auf
        60–80 %</strong> – und genau da liegt der Gewinn: Selbst genutzter
        Solarstrom kostet Sie nur etwa 10 ct/kWh, vermeidet aber Netzstrom für{" "}
        <strong>30–35 ct</strong>. Die{" "}
        <Link
          href="/ratgeber/einspeiseverguetung-2026"
          className="text-accent underline-offset-2 hover:underline"
        >
          Einspeisevergütung
        </Link>{" "}
        (~8 ct) ist dagegen Nebensache. <strong>Wann es sich nicht lohnt:</strong>{" "}
        bei sehr niedrigem Stromverbrauch, einem zu teuer eingekauften Speicher
        (über ~800 €/kWh) oder klarer Überdimensionierung. Eine ehrliche Rechnung
        vor dem Kauf ist mehr wert als jedes Pauschalversprechen.
      </P>

      <CtaBand
        headline="Speicher richtig dimensionieren statt überkaufen"
        text="Wir verkaufen keine Speicher – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar-Fachbetriebe, die Größe, Notstrom-Bedarf und Wirtschaftlichkeit ehrlich für Ihren Verbrauch auslegen."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik / Stromspeicher"
        source="stromspeicher-page"
      />

      <H2 id="lebensdauer">Lebensdauer, Zyklen &amp; Garantie</H2>
      <P>
        Heutige Heimspeicher nutzen <strong>LiFePO4-Zellen (LFP)</strong> – robust
        und sicher. Sie schaffen typisch <strong>6.000–10.000 Ladezyklen</strong>,
        was bei täglichem Laden etwa <strong>15–25 Jahren</strong> entspricht. Die
        Hersteller-Garantie deckt meist <strong>10 Jahre oder 80 % Restkapazität</strong>{" "}
        ab – der Speicher hält also in der Regel nicht ganz die 20-jährige
        Förderdauer der Anlage durch, überdauert aber locker seine
        Amortisationszeit. Achten Sie auf die garantierte Restkapazität, nicht nur
        auf die Jahreszahl.
      </P>

      <H2 id="notstrom">Notstrom oder Ersatzstrom bei Stromausfall</H2>
      <P>
        Ein verbreitetes Missverständnis: Ein normaler Speicher liefert bei
        Stromausfall <em>nicht</em> automatisch Strom. Dafür braucht es eine{" "}
        <strong>Notstrom-</strong> oder <strong>Ersatzstromfunktion</strong>. Die
        einfache Notstromsteckdose versorgt nur einzelne Geräte und ist günstig; die
        echte Ersatzstromversorgung schaltet bei Ausfall automatisch das Haus weiter,
        ist aber aufwändiger und teurer. Wenn Ihnen Versorgungssicherheit wichtig
        ist, legen Sie das vor der Gerätewahl fest.
      </P>

      <H2 id="hamburg">Stromspeicher in Hamburg</H2>
      <P>
        Für Hamburger Einfamilien- und Reihenhäuser ist der Speicher der Hebel, der
        aus einer PV-Anlage echte Unabhängigkeit macht – gerade mit Wärmepumpe oder
        E-Auto im Haushalt. Wir sind kein Hersteller und kein Anlagenvermieter: Über
        unsere Vermittlung erhalten Sie herstellerneutral Angebote geprüfter
        Solarbetriebe aus Niendorf und Umgebung, die den Speicher auf Ihren echten
        Verbrauch auslegen – statt Ihnen das größte Gerät zu verkaufen. Regionale
        Speicher-Programme wechseln häufig; den aktuellen Stand prüfen wir bzw. der
        Fachbetrieb mit.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Stromspeicher-Kosten" />

      <CtaBand
        headline="Passenden Stromspeicher herstellerneutral finden"
        text="Schildern Sie kurz Ihren Verbrauch und Ihre Anlage – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar-Fachbetriebe aus Hamburg und Umgebung, die Größe, Notstrom und Wirtschaftlichkeit konkret berechnen."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik / Stromspeicher"
        source="stromspeicher-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen kein individuelles Angebot. Tatsächliche Kosten und
        Wirtschaftlichkeit hängen von Kapazität, Technik, Stromverbrauch,
        Eigenverbrauchsquote und Strompreis ab.
      </p>
    </RatgeberArticle>
  );
}
