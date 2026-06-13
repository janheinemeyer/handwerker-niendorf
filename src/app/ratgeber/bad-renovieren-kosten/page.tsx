import type { Metadata } from "next";
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
import { BadCalculator } from "@/components/bad-calculator";

export const metadata: Metadata = {
  title: "Bad renovieren: Kosten 2026 (Rechner, Preise & Hamburg)",
  description:
    "Was kostet es, ein Bad renovieren zu lassen? Aktuelle Preise 2026 pro m², nach Größe und Gewerk – mit Kostenrechner, Förderung (KfW & Pflegekasse) und Angebotsvergleich für Hamburg und Umgebung.",
  alternates: { canonical: "/ratgeber/bad-renovieren-kosten" },
  openGraph: {
    title: "Bad renovieren: Kosten 2026 im Überblick",
    description:
      "Preise pro m², nach Größe und Gewerk – mit Kostenrechner, Förderung und Spartipps.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet es, ein Bad renovieren zu lassen?",
    a: "Eine Badsanierung kostet 2026 je nach Größe, Umfang und Ausstattung typischerweise zwischen 7.000 € und 30.000 €. Ein mittelgroßes Bad (~8 m²) komplett saniert liegt bei etwa 12.000–24.000 €. Pro Quadratmeter sollten Sie für eine Komplettsanierung mit rund 1.500–3.500 € rechnen.",
  },
  {
    q: "Was kostet ein neues Bad pro m²?",
    a: "Eine Komplettsanierung kostet etwa 1.500–3.500 € pro m²: rund 1.500–2.000 €/m² mit Standardausstattung, 2.000–2.800 €/m² gehoben und 2.800–3.500 €/m² und mehr im Premiumbereich. Eine reine Teilrenovierung (Oberflächen auffrischen, ohne Leitungen zu verlegen) liegt bei etwa 700–1.700 €/m².",
  },
  {
    q: "Was kostet eine Badsanierung für 8 qm?",
    a: "Ein 8 m² großes Bad komplett sanieren zu lassen kostet je nach Ausstattung rund 12.000–24.000 €. Mit Standardausstattung sind etwa 12.000–16.000 € realistisch, gehoben 16.000–22.000 €, im Premiumbereich 24.000 € und mehr. In Hamburg liegen die Preise etwa 20 % höher.",
  },
  {
    q: "Wie lange dauert eine Badsanierung?",
    a: "Eine komplette Badsanierung dauert in der Regel 2 bis 4 Wochen, abhängig von Größe, Umfang und der Koordination der Gewerke. Eine reine Teilrenovierung ist oft in wenigen Tagen bis zu einer Woche erledigt.",
  },
  {
    q: "Was kostet ein barrierefreies Bad – und gibt es Förderung?",
    a: "Ein barrierefreier bzw. altersgerechter Umbau (schwellenlose Dusche, Haltegriffe, unterfahrbarer Waschtisch) kostet meist 2.000–6.000 € Aufpreis. Förderung gibt es über die KfW (Programm 455-B Zuschuss bzw. 159 Kredit „Altersgerecht Umbauen“, sofern Mittel verfügbar) und – bei anerkanntem Pflegegrad – über die Pflegekasse mit einem Zuschuss von bis zu 4.180 € pro Maßnahme (§ 40 SGB XI).",
  },
  {
    q: "In welcher Reihenfolge läuft eine Badsanierung ab?",
    a: "Typischer Ablauf: 1. Planung & Aufmaß, 2. Demontage und Entsorgung, 3. Rohinstallation Sanitär und Elektro (Leitungen verlegen), 4. Trockenbau/Wandarbeiten und Estrich, 5. Abdichtung, 6. Fliesen legen, 7. Montage der Sanitärobjekte und Armaturen, 8. Maler- und Restarbeiten.",
  },
  {
    q: "Lohnt sich eine Teil- oder Komplettsanierung?",
    a: "Eine Teilrenovierung (neue Fliesen, Sanitärobjekte, Anstrich – ohne Leitungen zu verändern) ist deutlich günstiger und reicht, wenn die Installation intakt ist. Sind Leitungen alt, der Grundriss unpraktisch oder Feuchteschäden vorhanden, lohnt sich die Komplettsanierung – sie ist teurer, aber langfristig wirtschaftlicher.",
  },
  {
    q: "Was kostet eine Badsanierung in Hamburg?",
    a: "In Hamburg liegen die Handwerkerpreise rund 20 % über dem Bundesdurchschnitt. Für ein mittelgroßes Bad (~8 m²) sollten Sie hier mit etwa 15.000–22.000 € für eine Komplettsanierung rechnen. Über unsere Vermittlung erhalten Sie Angebote geprüfter Betriebe aus Niendorf und Umgebung.",
  },
];

export default function BadKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Bad renovieren:
          <br />
          Kosten 2026
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        { name: "Bad-Kosten", href: "/ratgeber/bad-renovieren-kosten" },
      ]}
    >
      <TlDr>
        Ein Bad renovieren zu lassen kostet 2026 je nach Größe, Umfang und
        Ausstattung typischerweise{" "}
        <strong>zwischen 7.000 € und 30.000 €</strong>. Für eine
        Komplettsanierung rechnen Sie mit{" "}
        <strong>1.500–3.500 € pro m²</strong>; ein mittelgroßes Bad (~8 m²) liegt
        bei <strong>12.000–24.000 €</strong>. Eine reine Teilrenovierung ist ab
        etwa <strong>700 €/m²</strong> möglich. In Hamburg kommen rund 20 %
        Ballungsraum-Aufschlag hinzu.
      </TlDr>

      {/* Interactive cost calculator */}
      <section id="rechner" aria-label="Bad-Kostenrechner" className="mt-10">
        <p className="label text-accent">Bad-Kostenrechner</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
          Was kostet Ihre Badsanierung? Jetzt berechnen.
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Größe, Umfang und Ausstattung wählen und in wenigen Sekunden eine
          realistische Kostenschätzung mit Aufschlüsselung erhalten.
        </p>
        <BadCalculator />
      </section>

      <H2 id="pro-qm">Was kostet eine Badsanierung? Preise pro m²</H2>
      <P>
        Der größte Preistreiber ist der Umfang: Bei einer{" "}
        <strong>Teilrenovierung</strong> werden nur Oberflächen erneuert (Fliesen,
        Sanitärobjekte, Anstrich), die Leitungen bleiben. Bei einer{" "}
        <strong>Komplettsanierung</strong> wird das Bad entkernt und Sanitär,
        Elektro und Grundriss neu gemacht. Richtwerte pro Quadratmeter:
      </P>
      <CostTable
        head={["Ausstattung", "Komplettsanierung", "Teilrenovierung"]}
        rows={[
          ["Standard", "1.500 – 2.000 €/m²", "700 – 1.000 €/m²"],
          ["Gehoben", "2.000 – 2.800 €/m²", "1.000 – 1.400 €/m²"],
          ["Premium", "2.800 – 3.500 €/m² und mehr", "1.400 – 1.800 €/m²"],
        ]}
      />
      <P>
        <strong>Hinweis 2026:</strong> Handwerker- und Materialkosten liegen
        deutlich über dem Niveau der Vorjahre. Rund 60 % der Gesamtkosten
        entfallen auf die Arbeitsleistung (Stundensätze meist 45–70 €), der Rest
        auf Material und Sanitärobjekte.
      </P>

      <H2 id="nach-groesse">Bad renovieren: Kosten nach Größe</H2>
      <P>
        Kleinere Bäder kosten pro Quadratmeter tendenziell mehr, weil Fixkosten
        (An- und Abfahrt, Rohinstallation, Mindestaufwand pro Gewerk) auf weniger
        Fläche verteilt werden. Richtwerte für eine Komplettsanierung:
      </P>
      <CostTable
        head={["Badgröße", "Komplettsanierung", "Beispiel"]}
        rows={[
          ["4 m² (Gäste-/Kleinbad)", "6.000 – 14.000 €", "Dusche, WC, Waschtisch"],
          ["6 m²", "8.000 – 18.000 €", "kompaktes Familienbad"],
          ["8 m² (Durchschnitt)", "12.000 – 24.000 €", "Dusche + Wanne möglich"],
          ["10 – 12 m²", "15.000 – 42.000 €", "großes Bad, hochwertig"],
        ]}
      />

      <H2 id="nach-gewerk">Kosten nach Gewerk: Wohin das Geld fließt</H2>
      <P>
        Eine Badsanierung ist die Summe vieler Gewerke. Diese Aufschlüsselung
        fehlt in den meisten Online-Preisen – sie hilft, Angebote zu prüfen.
        Richtwerte für ein mittleres Bad (~8 m², Komplettsanierung):
      </P>
      <CostTable
        head={["Gewerk / Posten", "Typische Kosten"]}
        rows={[
          ["Demontage & Entsorgung", "800 – 1.500 €"],
          ["Rohinstallation Sanitär (Leitungen, Abfluss)", "1.500 – 4.000 €"],
          ["Elektroinstallation", "800 – 2.000 €"],
          ["Trockenbau / Wand- & Estricharbeiten", "1.000 – 3.000 €"],
          ["Abdichtung & Fliesen (Material + Verlegung)", "2.000 – 6.000 €"],
          ["Sanitärobjekte (WC, Waschtisch, Dusche/Wanne, Armaturen)", "2.000 – 6.000 €"],
          ["Heizung / Fußbodenheizung / Lüftung", "500 – 2.500 €"],
          ["Maler- & Restarbeiten", "500 – 1.500 €"],
        ]}
      />

      <CtaBand
        headline="Lieber gleich konkrete Preise?"
        text="Statt mit Richtwerten zu rechnen, erhalten Sie von uns kostenlos und unverbindlich passende Angebote geprüfter Bad- und Fliesenbetriebe aus Ihrer Region."
        ctaLabel="Bad-Angebote anfragen"
        service="Fliesen & Bad"
        source="bad-page"
      />

      <H2 id="teil-vs-komplett">Teilrenovierung oder Komplettsanierung?</H2>
      <P>
        Solange die Installation intakt ist, reicht oft eine Teilrenovierung. Bei
        alten Leitungen, Feuchteschäden oder einem unpraktischen Grundriss lohnt
        die Komplettsanierung – teurer, aber langlebiger.
      </P>
      <CostTable
        head={["Kriterium", "Teilrenovierung", "Komplettsanierung"]}
        rows={[
          ["Umfang", "Oberflächen, Objekte", "Entkernung, Sanitär & Elektro neu"],
          ["Preis (8 m²)", "ab ~6.000 €", "12.000 – 24.000 €"],
          ["Dauer", "wenige Tage – 1 Woche", "2 – 4 Wochen"],
          ["Leitungen / Grundriss", "bleiben", "frei änderbar"],
          ["Sinnvoll bei", "intakter Installation", "Altbau, Schäden, Umbau"],
        ]}
      />

      <H2 id="barrierefrei">Barrierefreies Bad: Kosten &amp; Förderung</H2>
      <P>
        Ein altersgerechter, barrierefreier Umbau – schwellenlose Dusche,
        Haltegriffe, unterfahrbarer Waschtisch, breitere Tür – kostet meist{" "}
        <strong>2.000–6.000 € Aufpreis</strong>. Dafür gibt es zwei
        Förderwege, die sich teils kombinieren lassen:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>KfW „Altersgerecht Umbauen“</strong> – Zuschuss (Programm
          455-B) bzw. zinsgünstiger Kredit (159). Der Zuschusstopf ist beliebt
          und oft schnell ausgeschöpft – Antrag <em>vor</em> Beauftragung stellen
          und die aktuelle Verfügbarkeit prüfen.
        </li>
        <li>
          <strong>Pflegekasse (§ 40 SGB XI)</strong> – bei anerkanntem Pflegegrad
          ein Zuschuss von <strong>bis zu 4.180 €</strong> pro „wohnumfeld­-
          verbessernder Maßnahme“.
        </li>
      </ul>

      <H2 id="dauer">Wie lange dauert eine Badsanierung?</H2>
      <P>
        Eine Komplettsanierung dauert in der Regel <strong>2–4 Wochen</strong>,
        eine Teilrenovierung oft nur wenige Tage. Der Ablauf in Schritten:
        Planung &amp; Aufmaß → Demontage &amp; Entsorgung → Rohinstallation
        Sanitär/Elektro → Trockenbau &amp; Estrich → Abdichtung → Fliesen →
        Montage der Sanitärobjekte → Maler- und Restarbeiten. Verzögerungen
        entstehen meist durch Liefer­zeiten von Fliesen und Sanitärobjekten –
        früh auswählen.
      </P>

      <H2 id="preisbeispiele">Preisbeispiele: drei Bäder im Vergleich</H2>
      <CostTable
        head={["Ausführung", "Beschreibung", "Gesamtkosten"]}
        rows={[
          ["Einfach", "4 m² Gästebad, Teilrenovierung, Standardobjekte", "6.000 – 9.000 €"],
          ["Mittel", "8 m² Komplettsanierung, bodengleiche Dusche, gehoben", "16.000 – 22.000 €"],
          ["Premium", "12 m² Komplettumbau, Wanne + Dusche, Fußbodenheizung, Premium", "30.000 – 45.000 €"],
        ]}
      />

      <H2 id="sparen">So sparen Sie bei der Badsanierung</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>Mehrere Angebote vergleichen – die Preise streuen stark.</li>
        <li>Grundriss und Leitungen möglichst beibehalten – das spart am meisten.</li>
        <li>Standardformate bei Fliesen wählen; Großformate und Mosaik kosten mehr in der Verlegung.</li>
        <li>Sanitärobjekte aus der Mittelklasse statt Designermarken.</li>
        <li>Förderung früh prüfen (KfW, Pflegekasse) – Antrag vor Auftragsvergabe.</li>
        <li>Demontage/Entsorgung ggf. selbst übernehmen.</li>
      </ul>

      <H2 id="hamburg">Bad renovieren in Hamburg &amp; Umgebung</H2>
      <P>
        In Hamburg liegen die Handwerkerpreise rund 20 % über dem
        Bundesdurchschnitt – bei der hohen Zahl an Altbau- und Mietwohnungen ist
        die Badsanierung hier ein Dauerthema. Für ein mittelgroßes Bad (~8 m²)
        sollten Sie mit etwa <strong>15.000–22.000 €</strong> für eine
        Komplettsanierung rechnen. Über unsere Vermittlung erhalten Sie Angebote
        geprüfter Bad- und Fliesenbetriebe aus Niendorf und Umgebung – so
        vergleichen Sie reale Preise statt Richtwerte.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Bad-Kosten" />

      <CtaBand
        headline="Jetzt passende Bad-Betriebe finden"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung, die Ihnen ein konkretes Angebot machen."
        ctaLabel="Bad-Angebote anfragen"
        service="Fliesen & Bad"
        source="bad-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen kein individuelles Angebot. Tatsächliche Kosten hängen von
        Zustand, Größe, Ausstattung, Leitungsführung und Region ab. Angaben zu
        Förderprogrammen ohne Gewähr – maßgeblich sind die aktuellen Bedingungen
        von KfW und Pflegekasse.
      </p>
    </RatgeberArticle>
  );
}
