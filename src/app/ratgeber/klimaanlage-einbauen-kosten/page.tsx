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
  title: "Klimaanlage einbauen lassen: Kosten 2026 (Split & Hamburg)",
  description:
    "Was kostet eine Klimaanlage mit Einbau? Preise 2026 für Single-Split, Multisplit und Monoblock – inkl. Montage durch den Fachbetrieb, Zusatzkosten, Genehmigung (Miete/WEG), Strom & Wartung. Mit Festpreis-Vermittlung für Hamburg.",
  alternates: { canonical: "/ratgeber/klimaanlage-einbauen-kosten" },
  openGraph: {
    title: "Klimaanlage einbauen lassen: Kosten 2026",
    description:
      "Split & Multisplit – Preise mit Montage, Zusatzkosten, Genehmigung, Strom & Wartung.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet eine Klimaanlage mit Einbau?",
    a: "Eine fest installierte Split-Klimaanlage kostet mit Montage 2026 typischerweise 1.800–5.500 € für einen Raum (Single-Split) und 5.000–12.000 € für mehrere Räume (Multisplit). Das Gerät allein liegt bei 350–1.800 €, die Montage durch den Fachbetrieb bei 1.200–2.500 €. In Hamburg liegen die Preise durch höhere Handwerker-Stundensätze rund 15–25 % über dem Bundesschnitt.",
  },
  {
    q: "Darf ich eine Split-Klimaanlage selbst einbauen?",
    a: "Nein. Split-Klimaanlagen enthalten fluorierte Kältemittel (F-Gase). Arbeiten am Kältekreislauf dürfen in Deutschland nur Betriebe mit Sachkundenachweis nach F-Gase-Verordnung (Kategorie I) ausführen. Ein eigenmächtiger Einbau ist unzulässig, gefährdet Gewährleistung und Versicherungsschutz und ist in der Praxis auch technisch (Vakuumieren, Dichtheitsprüfung) nicht ohne Fachgerät machbar. Nur mobile Monoblock-Geräte dürfen Sie selbst aufstellen.",
  },
  {
    q: "Brauche ich als Mieter oder in der WEG eine Genehmigung?",
    a: "Für eine fest installierte Klimaanlage mit Außengerät ja. Als Mieter benötigen Sie die Zustimmung des Vermieters, da Fassade und Bausubstanz betroffen sind (Kernbohrung, Außeneinheit). In einer Eigentumswohnung ist die Außeneinheit eine bauliche Veränderung am Gemeinschaftseigentum und braucht einen Beschluss der Eigentümergemeinschaft (WEG). Mobile Monoblock-Geräte sind genehmigungsfrei.",
  },
  {
    q: "Wie viel Strom verbraucht eine Klimaanlage im Jahr?",
    a: "Eine effiziente Split-Klimaanlage verbraucht im Kühlbetrieb meist 135–300 kWh pro Jahr und Innengerät – bei rund 35 ct/kWh also etwa 50–100 € jährlich. Mobile Monoblock-Geräte verbrauchen deutlich mehr (210–700 kWh). Der genaue Wert hängt von Raumgröße, Nutzungsdauer und der Energieeffizienzklasse ab.",
  },
  {
    q: "Was kostet die Wartung einer Klimaanlage?",
    a: "Für eine Split-Anlage sollten Sie 80–200 € pro Jahr einplanen. Die Filterreinigung übernehmen Sie selbst; eine vollständige Wartung durch den Fachbetrieb (Kältemittel- und Dichtheitsprüfung) ist alle 2–3 Jahre sinnvoll. Eine verschmutzte Anlage verbraucht bis zu 30 % mehr Strom.",
  },
  {
    q: "Kann eine Klimaanlage auch heizen?",
    a: "Ja. Die meisten Split-Klimaanlagen arbeiten als Wärmepumpe und können auch heizen – im Übergang oft günstiger als Gas oder Strom-Direktheizung. Ob sich die Anlage als Heizung lohnt, hängt von Gebäude und Nutzung ab; nur als Wärmepumpe kann sie zudem förderfähig sein. Geht es Ihnen primär ums Heizen, sprechen Sie das im Angebot direkt an.",
  },
  {
    q: "Was kostet eine Klimaanlage in Hamburg?",
    a: "In Hamburg liegen die Montagekosten durch den höheren Handwerker-Stundensatz meist 15–25 % über dem Bundesschnitt. Für eine schlüsselfertige Single-Split-Anlage rechnen Sie mit rund 2.200–5.500 €, für Multisplit mit 5.500–12.000 €. Über unsere Vermittlung erhalten Sie Festpreis-Angebote geprüfter Klimatechnik-Betriebe aus Niendorf und Umgebung.",
  },
];

export default function KlimaanlageKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Klimaanlage einbauen
          <br />
          lassen: Kosten 2026
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Klimaanlage-Kosten",
          href: "/ratgeber/klimaanlage-einbauen-kosten",
        },
      ]}
    >
      <TlDr>
        Eine Klimaanlage einbauen zu lassen kostet 2026 typischerweise{" "}
        <strong>1.800–5.500 €</strong> für einen Raum (Single-Split) und{" "}
        <strong>5.000–12.000 €</strong> für mehrere Räume (Multisplit) – jeweils
        inklusive Montage durch einen Fachbetrieb. Das Gerät allein liegt bei{" "}
        <strong>350–1.800 €</strong>, die Montage bei <strong>1.200–2.500 €</strong>.
        Split-Anlagen dürfen wegen des Kältemittels nur Fachbetriebe einbauen; in
        Hamburg liegen die Preise rund 15–25 % über dem Bundesschnitt.
      </TlDr>

      <H2 id="was-kostet">Was kostet eine Klimaanlage mit Einbau?</H2>
      <P>
        Der Preis hängt vor allem vom Anlagentyp und der Zahl der zu kühlenden
        Räume ab. Mobile Monoblock-Geräte sind am günstigsten, leisten aber
        wenig; fest installierte Split-Anlagen kühlen effizient und leise. Die
        folgenden Gesamtpreise verstehen sich inklusive Montage durch den
        Fachbetrieb:
      </P>
      <CostTable
        head={["Anlagentyp", "Geräte", "Montage", "Gesamt (mit Einbau)"]}
        rows={[
          ["Single-Split (1 Raum)", "350 – 1.800 €", "1.200 – 2.500 €", "1.800 – 5.500 €"],
          ["Multisplit (2 – 3 Räume)", "1.800 – 4.500 €", "2.500 – 5.000 €", "5.000 – 9.000 €"],
          ["Multisplit (4 Räume)", "3.500 – 6.500 €", "3.500 – 6.000 €", "8.000 – 12.000 €"],
          ["Monoblock / ohne Außengerät", "700 – 2.100 €", "300 – 800 €", "1.000 – 2.900 €"],
          ["Mobiles Gerät (kein Einbau)", "200 – 900 €", "–", "200 – 900 €"],
        ]}
      />
      <P>
        Eine <strong>Single-Split-Anlage</strong> (ein Außen-, ein Innengerät)
        ist die häufigste Lösung für Schlaf- oder Wohnzimmer. Eine{" "}
        <strong>Multisplit-Anlage</strong> versorgt mehrere Räume über ein
        gemeinsames Außengerät – günstiger als mehrere Einzelanlagen, aber
        teurer in Gerät und Montage. <strong>Monoblock-Geräte ohne Außeneinheit</strong>{" "}
        brauchen nur zwei Wanddurchbrüche, kühlen aber schwächer und lauter.
      </P>

      <H2 id="zusatzkosten">Welche Zusatzkosten kommen zur Anlage dazu?</H2>
      <P>
        Über Gerät und Standardmontage hinaus entstehen je nach baulicher
        Situation weitere Posten. Vor allem ein langer Weg zwischen Innen- und
        Außengerät oder ein schwer erreichbarer Montageort treiben den Preis:
      </P>
      <CostTable
        head={["Kostenposten", "Typische Kosten"]}
        rows={[
          ["Kernbohrung (Wanddurchführung)", "200 – 400 €"],
          ["Kältemittel- & Kondensatleitungen (pro Meter)", "30 – 80 €/m"],
          ["Elektroanschluss / eigener Stromkreis", "300 – 800 €"],
          ["Halterung / Konsole Außengerät", "150 – 400 €"],
          ["Gerüst oder Hebebühne (höhere Lagen)", "200 – 800 €"],
          ["Wartung (pro Jahr)", "80 – 200 €"],
        ]}
      />

      <H2 id="selbst-einbauen">Darf ich eine Split-Klimaanlage selbst einbauen?</H2>
      <P>
        Nein. Split-Klimaanlagen enthalten fluorierte Kältemittel (F-Gase).
        Arbeiten am Kältekreislauf – Befüllen, Vakuumieren, Dichtheitsprüfung –
        dürfen nach der <strong>F-Gase-Verordnung</strong> nur Betriebe mit
        entsprechendem Sachkundenachweis ausführen. Ein eigenmächtiger Einbau ist
        unzulässig, kostet Sie Gewährleistung und Versicherungsschutz und ist
        ohne Fachgerät auch technisch nicht sauber machbar. Selbst aufstellen
        dürfen Sie nur <strong>mobile Monoblock-Geräte</strong>. Das ist kein
        Nachteil, sondern der Grund, warum die Montage immer im Preis steckt.
      </P>

      <H2 id="genehmigung">Brauche ich eine Genehmigung? (Miete, WEG)</H2>
      <P>
        Für eine fest installierte Anlage mit Außengerät in der Regel ja –
        weniger baurechtlich als gegenüber Vermieter oder Eigentümergemeinschaft:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Mietwohnung:</strong> Die Zustimmung des Vermieters ist nötig,
          da Kernbohrung und Außeneinheit in die Bausubstanz und die Fassade
          eingreifen.
        </li>
        <li>
          <strong>Eigentumswohnung (WEG):</strong> Die Außeneinheit ist eine
          bauliche Veränderung am Gemeinschaftseigentum und braucht einen
          Beschluss der Eigentümergemeinschaft.
        </li>
        <li>
          <strong>Eigenes Haus:</strong> meist genehmigungsfrei; auf
          Lärmschutz-Grenzwerte gegenüber dem Nachbargrundstück und – im
          Einzelfall – Denkmalschutz achten.
        </li>
        <li>
          <strong>Mobile Geräte:</strong> immer genehmigungsfrei, da nicht fest
          montiert.
        </li>
      </ul>

      <CtaBand
        headline="Lieber gleich konkrete Preise?"
        text="Statt mit Richtwerten zu rechnen, erhalten Sie von uns kostenlos und unverbindlich passende Festpreis-Angebote geprüfter Klimatechnik-Betriebe aus Ihrer Region."
        ctaLabel="Klimatechnik-Betrieb anfragen"
        service="Klimaanlage"
        source="klimaanlage-page"
      />

      <H2 id="betrieb">Was kostet der Betrieb? Strom &amp; Wartung</H2>
      <P>
        Eine effiziente Split-Klimaanlage verbraucht im Kühlbetrieb etwa{" "}
        <strong>135–300 kWh pro Jahr und Innengerät</strong> – bei rund 35 ct/kWh
        also ungefähr <strong>50–100 € jährlich</strong>. Mobile Monoblock-Geräte
        liegen mit 210–700 kWh deutlich höher. Hinzu kommen{" "}
        <strong>80–200 € Wartung pro Jahr</strong>: die Filter reinigen Sie
        selbst, die vollständige Wartung mit Dichtheitsprüfung übernimmt alle
        2–3 Jahre der Fachbetrieb. Eine verschmutzte Anlage verbraucht bis zu
        30 % mehr Strom – Wartung zahlt sich also aus.
      </P>

      <H2 id="heizen">Kann eine Klimaanlage auch heizen?</H2>
      <P>
        Die meisten Split-Klimaanlagen arbeiten als{" "}
        <strong>Luft-Luft-Wärmepumpe</strong> und können den Raum auch heizen –
        im Übergang oft günstiger als eine Strom-Direktheizung. Ob sich das als
        vollwertige Heizung lohnt und ob eine Förderung infrage kommt, hängt
        stark von Gebäude und Nutzung ab. Geht es Ihnen primär ums Heizen,
        sagen Sie das bei der Anfrage – dann wird die Anlage entsprechend
        ausgelegt. Wer ohnehin in Effizienz investiert, kombiniert die Anlage
        gern mit{" "}
        <Link
          href="/ratgeber/solarcarport-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Solarstrom vom eigenen Dach
        </Link>
        .
      </P>

      <H2 id="preisbeispiele">Preisbeispiele: drei Einbauten im Vergleich</H2>
      <CostTable
        head={["Fall", "Beschreibung", "Gesamtkosten"]}
        rows={[
          ["Einfach", "Single-Split, Schlafzimmer, Außengerät direkt an der Wand", "1.800 – 3.000 €"],
          ["Mittel", "Multisplit, 2 Räume, mittlerer Leitungsweg, Konsole", "5.500 – 8.000 €"],
          ["Aufwändig", "Multisplit, 4 Räume, langer Leitungsweg + Gerüst", "9.000 – 12.000 €"],
        ]}
      />

      <H2 id="sparen">So sparen Sie beim Klimaanlagen-Einbau</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>Mehrere Festpreis-Angebote vergleichen – die Montagepreise variieren stark.</li>
        <li>Innengerät nah an der Außenwand platzieren – kurze Leitungswege sparen am meisten.</li>
        <li>Multisplit statt mehrerer Einzelanlagen, wenn Sie mehrere Räume kühlen.</li>
        <li>Auf eine hohe Energieeffizienzklasse achten – senkt die Stromkosten dauerhaft.</li>
        <li>Außerhalb der Sommer-Hochsaison (Frühjahr/Herbst) beauftragen – oft günstiger und schneller.</li>
      </ul>

      <H2 id="hamburg">Klimaanlage in Hamburg einbauen lassen</H2>
      <P>
        In Hamburg liegen die Montagekosten durch den höheren
        Handwerker-Stundensatz meist 15–25 % über dem Bundesschnitt. Über unsere
        Vermittlung erhalten Sie <strong>Festpreis-Angebote</strong> geprüfter
        Klimatechnik-Betriebe aus Niendorf und Umgebung – so vergleichen Sie
        reale Preise statt Richtwerte und finden einen Fachbetrieb in Ihrer Nähe.
        Denken Sie ohnehin über E-Mobilität nach? Dann passt auch unser Ratgeber{" "}
        <Link
          href="/ratgeber/wallbox-installieren-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wallbox installieren lassen: Kosten
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Klimaanlagen-Kosten" />

      <CtaBand
        headline="Jetzt passenden Klimatechnik-Betrieb finden"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Fachbetriebe aus Hamburg und Umgebung, die Ihnen ein konkretes Festpreis-Angebot machen."
        ctaLabel="Klimatechnik-Betrieb anfragen"
        service="Klimaanlage"
        source="klimaanlage-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen kein individuelles Angebot. Tatsächliche Kosten hängen von
        Anlagentyp, Zahl der Räume, Leitungsweg, baulicher Situation und Region
        ab.
      </p>
    </RatgeberArticle>
  );
}
