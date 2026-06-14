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
import { TerrassenCalculator } from "@/components/terrassen-calculator";
import { Breakout } from "@/components/breakout";

export const metadata: Metadata = {
  title: "Terrassenüberdachung: Kosten 2026 (Preise, Rechner & Tabellen)",
  description:
    "Was kostet eine Terrassenüberdachung? Aktuelle Preise 2026 nach Größe, Material (Alu, Holz, Glas) und Montage – mit Kostenrechner, Tabellen, Baugenehmigung, Steuertipp und Angebotsvergleich für Hamburg.",
  alternates: { canonical: "/ratgeber/terrassenueberdachung-kosten" },
  openGraph: {
    title: "Terrassenüberdachung: Kosten 2026 im Überblick",
    description:
      "Preise nach Größe, Material und Montage – mit Kostenrechner, Tabellen und FAQ.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet eine Terrassenüberdachung?",
    a: "Eine Terrassenüberdachung kostet 2026 mit Montage typischerweise zwischen 3.000 € und 20.000 €. Ein gängiges Aluminium-Dach mit Glas (ca. 12 m²) liegt bei rund 5.000–11.000 €, eine einfache Holz-Variante mit Polycarbonat schon ab etwa 2.000 €. Premium-Lamellendächer beginnen bei rund 9.000 €.",
  },
  {
    q: "Was kostet eine Terrassenüberdachung pro Quadratmeter?",
    a: "Als grober Richtwert gelten 150 bis 600 € pro m² inklusive Montage für einfache bis mittlere Ausführungen. Hochwertige Glas- oder Lamellendächer kosten 800 bis 1.600 € pro m². Die reine Dacheindeckung kostet bei Polycarbonat ca. 30–50 €/m², bei Verbundsicherheitsglas (VSG) ca. 60–130 €/m².",
  },
  {
    q: "Was kostet eine Terrassenüberdachung aus Aluminium?",
    a: "Aluminium ist das beliebteste Material. Mit Polycarbonat-Eindeckung beginnt ein Alu-Terrassendach bei etwa 3.000 €, mit echtem Glas (VSG) bei rund 4.500–5.000 €. Aluminium ist wartungsarm und langlebig, aber teurer als Holz.",
  },
  {
    q: "Glas oder Polycarbonat – was ist günstiger?",
    a: "Polycarbonat (Doppelstegplatten) ist mit 30–50 € pro m² die günstigste Eindeckung. Verbundsicherheitsglas (VSG) kostet 60–130 € pro m², ist dafür kratzfester, optisch hochwertiger und langlebiger. Für ein dauerhaftes, repräsentatives Dach lohnt sich meist Glas.",
  },
  {
    q: "Braucht eine Terrassenüberdachung eine Baugenehmigung?",
    a: "Das hängt vom Bundesland ab. In vielen Ländern – auch in Hamburg – sind Terrassenüberdachungen bis zu einer bestimmten Größe (häufig rund 30 m² Grundfläche und begrenzter Tiefe) verfahrensfrei. Maßgeblich ist die jeweilige Landesbauordnung; klären Sie Genehmigungspflicht und Grenzabstände vor Baubeginn mit dem örtlichen Bauamt. Die Gebühren liegen meist zwischen 30 € und 600 €.",
  },
  {
    q: "Was kostet die Montage einer Terrassenüberdachung?",
    a: "Die Montage durch einen Fachbetrieb kostet je nach Größe und Untergrund zwischen 500 € und 3.000 € und dauert in der Regel ein bis zwei Tage. Wer einen Bausatz selbst aufbaut, spart diesen Betrag, trägt aber das Risiko für Statik und Dichtigkeit selbst.",
  },
  {
    q: "Kann ich eine Terrassenüberdachung von der Steuer absetzen?",
    a: "Teilweise: Nach § 35a EStG können Sie 20 % der Arbeits-, Fahrt- und Maschinenkosten (nicht des Materials) als Handwerkerleistung absetzen, maximal 1.200 € pro Jahr. Voraussetzung sind eine ordentliche Rechnung und die Zahlung per Überweisung – nicht in bar.",
  },
  {
    q: "Was kostet eine Terrassenüberdachung in Hamburg?",
    a: "In Ballungsräumen wie Hamburg liegen die Preise rund 20–30 % über dem Bundesdurchschnitt. Für ein schlüsselfertiges Aluminium-Glas-Dach mit etwa 12 m² sollten Sie hier mit rund 6.000–13.000 € rechnen.",
  },
];

export default function TerrassenueberdachungKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Terrassen&shy;überdachung:
          <br />
          Kosten 2026
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Terrassenüberdachung-Kosten",
          href: "/ratgeber/terrassenueberdachung-kosten",
        },
      ]}
    >
      <TlDr>
        Eine Terrassenüberdachung kostet 2026 mit Montage typischerweise{" "}
        <strong>zwischen 3.000 € und 20.000 €</strong>. Ein gängiges
        Aluminium-Dach mit Glas (ca. 12 m²) liegt bei{" "}
        <strong>5.000–11.000 €</strong>, eine einfache Holz-Variante mit
        Polycarbonat schon <strong>ab ca. 2.000 €</strong>. Hinzu kommen je nach
        Vorhaben Fundament (100–150 €/m²), Statik und Baugenehmigung (30–600 €).
      </TlDr>

      {/* Interactive cost calculator */}
      <Breakout>
      <section
        id="rechner"
        aria-label="Terrassenüberdachung-Kostenrechner"
        className="mt-10"
      >
        <p className="label text-accent">Terrassenüberdachung-Kostenrechner</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
          Was kostet Ihre Terrassenüberdachung? Jetzt berechnen.
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Maße, Material und Ausstattung wählen und in wenigen Sekunden eine
          realistische Kostenschätzung erhalten.
        </p>
        <TerrassenCalculator />
      </section>
      </Breakout>

      <H2 id="preise">Was kostet eine Terrassenüberdachung? Preise nach Material</H2>
      <P>
        Der Preis hängt vor allem vom Material des Gestells (Holz, Aluminium,
        Stahl), von der Dacheindeckung (Polycarbonat oder Glas) und von der Größe
        ab. Die folgende Tabelle zeigt Richtwerte für ein mittleres Dach (ca. 12
        m²) inklusive Montage:
      </P>
      <CostTable
        head={["Ausführung", "Preis inkl. Montage", "Eigenschaften"]}
        rows={[
          ["Holz + Polycarbonat", "2.000 – 4.500 €", "günstig, natürlich, pflegeintensiv"],
          ["Aluminium + Polycarbonat", "3.000 – 7.000 €", "wartungsarm, gutes Preis-Leistungs-Verhältnis"],
          ["Aluminium + Glas (VSG)", "5.000 – 11.000 €", "hochwertig, langlebig, repräsentativ"],
          ["Lamellendach (Alu)", "9.000 – 16.000 €", "verstellbare Lamellen, bioklimatisch, Premium"],
        ]}
      />

      <H2 id="pro-m2">Kosten pro Quadratmeter & nach Eindeckung</H2>
      <P>
        Pro Quadratmeter sollten Sie inklusive Montage mit 150 bis 600 € rechnen
        – für Glas- oder Lamellendächer eher 800 bis 1.600 €/m². Die reine
        Dacheindeckung schlägt so zu Buche:
      </P>
      <CostTable
        head={["Eindeckung", "Preis pro m²", "Hinweis"]}
        rows={[
          ["Polycarbonat (Doppelstegplatte)", "30 – 50 €/m²", "günstig, leicht, lichtdurchlässig"],
          ["Verbundsicherheitsglas (VSG)", "60 – 130 €/m²", "kratzfest, hochwertig, langlebig"],
          ["Komplett inkl. Montage (einfach)", "150 – 400 €/m²", "Alu/Holz mit Polycarbonat"],
          ["Komplett inkl. Montage (Premium)", "800 – 1.600 €/m²", "Glas- oder Lamellendach"],
        ]}
      />

      <H2 id="zusatzkosten">Zusätzliche Kosten beim Terrassendach</H2>
      <P>
        Neben der Überdachung selbst entstehen je nach Grundstück und Ausstattung
        weitere Posten, die in Online-Preisen oft fehlen:
      </P>
      <CostTable
        head={["Kostenposten", "Typische Kosten"]}
        rows={[
          ["Fundament (Punkt-, Streifen- oder Bodenplatte)", "400 – 2.500 €"],
          ["Baugenehmigung & Gebühren", "30 – 600 €"],
          ["Statiknachweis (bei Genehmigung)", "300 – 800 €"],
          ["Markise / Beschattung", "1.500 – 3.500 €"],
          ["Seitenwände / Schiebeelemente", "ab 1.800 €"],
          ["LED-Beleuchtung & Strom", "150 – 800 €"],
          ["Heizstrahler", "100 – 800 €"],
        ]}
      />

      <CtaBand
        headline="Lieber gleich konkrete Preise?"
        text="Statt mit Richtwerten zu rechnen, erhalten Sie von uns kostenlos und unverbindlich passende Angebote geprüfter Betriebe aus Ihrer Region."
        ctaLabel="Angebote anfragen"
        service="Terrassenüberdachung"
        source="terrassen-page"
      />

      <H2 id="genehmigung">
        Baugenehmigung: Wann ist eine Terrassenüberdachung genehmigungspflichtig?
      </H2>
      <P>
        Ob eine Terrassenüberdachung eine Baugenehmigung braucht, regelt die
        Landesbauordnung des jeweiligen Bundeslandes – die Vorgaben unterscheiden
        sich deutlich. In vielen Ländern, auch in Hamburg, sind Überdachungen bis
        zu einer bestimmten Grundfläche (häufig rund 30 m²) und Tiefe
        verfahrensfrei. Sobald das Dach fest mit dem Haus verbunden ist, größer
        ausfällt oder nah an der Grundstücksgrenze steht, kann eine Genehmigung
        nötig werden.
      </P>
      <P>
        <strong>Wichtig:</strong> „Verfahrensfrei“ heißt nicht „regelfrei“ –
        Grenzabstände und Bebauungsplan gelten trotzdem. Klären Sie die
        Anforderungen vor Baubeginn mit dem zuständigen Bauamt. Für eine
        Genehmigung wird häufig ein Statiknachweis verlangt.
      </P>

      <H2 id="montage">Montage & Dauer</H2>
      <P>
        Die Montage durch einen Fachbetrieb dauert in der Regel ein bis zwei Tage
        und kostet zwischen 500 und 3.000 €. Der Fachbetrieb übernimmt Aufmaß,
        Fundament, sichere Verankerung an der Hauswand und die fachgerechte
        Abdichtung – entscheidend für Dichtigkeit und Statik.
      </P>

      <H2 id="eigenleistung">Selbst aufbauen oder bauen lassen?</H2>
      <P>
        Einen Bausatz selbst aufzubauen spart rund 700–2.500 € Montagekosten. Dem
        stehen Zeitaufwand, das richtige Werkzeug sowie das Risiko bei Statik,
        Verankerung und Abdichtung gegenüber – Fehler führen schnell zu
        Undichtigkeiten. Bei Glasdächern und genehmigungspflichtigen Vorhaben ist
        der Fachbetrieb klar zu empfehlen.
      </P>

      <H2 id="laufende-kosten">Laufende Kosten & Pflege</H2>
      <P>
        Aluminium und Glas sind weitgehend wartungsarm; die Reinigung kostet
        überschlägig 4–15 € pro m². Ein Holzgestell muss alle 3–5 Jahre gestrichen
        oder lasiert werden, was 300–600 € kostet. Eine jährliche Sichtprüfung von
        Dichtungen und Entwässerung verlängert die Lebensdauer.
      </P>

      <H2 id="steuer">Terrassenüberdachung von der Steuer absetzen</H2>
      <P>
        Lassen Sie die Überdachung von einem Fachbetrieb errichten, können Sie
        nach § 35a EStG <strong>20 % der Arbeits-, Fahrt- und Maschinenkosten</strong>{" "}
        (nicht des Materials) als Handwerkerleistung von der Steuer absetzen –
        maximal 1.200 € pro Jahr. Voraussetzung: eine ordentliche Rechnung mit
        ausgewiesenem Lohnanteil und die Zahlung per Überweisung, nicht in bar.
      </P>

      <H2 id="preisbeispiele">Preisbeispiele: drei Terrassendächer im Vergleich</H2>
      <CostTable
        head={["Ausführung", "Beschreibung", "Gesamtkosten"]}
        rows={[
          ["Einfach", "Holz + Polycarbonat, 3×3 m, Selbstaufbau, Punktfundament", "2.000 – 3.500 €"],
          ["Mittel", "Alu + Polycarbonat, 3×4 m, schlüsselfertig inkl. Fundament & Montage", "4.500 – 8.000 €"],
          ["Premium", "Alu-Lamellendach, 4×5 m, mit Glas-Seitenwänden, LED & Beschattung", "14.000 – 22.000 €"],
        ]}
      />

      <H2 id="sparen">So sparen Sie bei der Terrassenüberdachung</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>Mehrere Angebote vergleichen – die Preise variieren stark.</li>
        <li>Polycarbonat statt Glas wählen, wenn keine Premium-Optik nötig ist.</li>
        <li>Standardmaße statt Sonderanfertigung – das senkt Material- und Planungskosten.</li>
        <li>Einfache Vorarbeiten (Aushub, alten Belag entfernen) selbst übernehmen.</li>
        <li>20 % der Montagekosten über § 35a von der Steuer zurückholen.</li>
      </ul>

      <H2 id="hamburg">Terrassenüberdachung in Hamburg &amp; Umgebung</H2>
      <P>
        In Hamburg liegen die Preise rund 20–30 % über dem Bundesdurchschnitt.
        Für ein schlüsselfertiges Aluminium-Glas-Dach mit etwa 12 m² sollten Sie
        hier mit rund 6.000–13.000 € rechnen. Über unsere Vermittlung erhalten Sie
        Angebote geprüfter Betriebe aus Niendorf und Umgebung – so vergleichen Sie
        reale Preise statt Richtwerte. Planen Sie zugleich einen überdachten
        Stellplatz? Dann lohnt auch unser Ratgeber{" "}
        <Link
          href="/ratgeber/carport-bauen-lassen-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Carport bauen lassen: Kosten
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Terrassenüberdachung-Kosten" />

      <CtaBand
        headline="Jetzt passende Betriebe für Ihr Terrassendach finden"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung, die Ihnen ein konkretes Angebot machen."
        ctaLabel="Angebote anfragen"
        service="Terrassenüberdachung"
        source="terrassen-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen kein individuelles Angebot. Tatsächliche Kosten hängen von Größe,
        Material, Statik, Untergrund und Region ab.
      </p>
    </RatgeberArticle>
  );
}
