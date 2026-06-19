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
import { EinfahrtPflasternCalculator } from "@/components/einfahrt-pflastern-calculator";

export const metadata: Metadata = {
  title: "Einfahrt pflastern: Kosten 2026 (Rechner, Preise & Hamburg)",
  description:
    "Was kostet es, eine Einfahrt pflastern zu lassen? Aktuelle Preise 2026 pro m², inklusive der versteckten Unterbau-Kosten – mit Kostenrechner, Materialvergleich und Angebotsvergleich für Hamburg und Umgebung.",
  alternates: { canonical: "/ratgeber/einfahrt-pflastern-kosten" },
  openGraph: {
    title: "Einfahrt pflastern: Kosten 2026 im Überblick",
    description:
      "Preise pro m², die versteckten Unterbau-Kosten, Materialvergleich und Rechner.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet es, eine Einfahrt pflastern zu lassen?",
    a: "Eine Einfahrt pflastern zu lassen kostet 2026 je nach Material und Untergrund typischerweise 90–150 € pro m² mit Betonpflaster und 170–270 € pro m² mit Naturstein – jeweils inklusive Unterbau. Eine 40 m² große Einfahrt liegt mit Betonpflaster bei etwa 4.000–6.500 €, mit Naturstein deutlich höher.",
  },
  {
    q: "Was kostet Pflastern pro m²?",
    a: "Inklusive Unterbau und Verlegung rechnen Sie mit 90–150 €/m² (Beton) bzw. 170–270 €/m² (Naturstein). Davon entfallen rund 35–55 €/m² auf die reine Verlegung und etwa 28–45 €/m² auf Aushub und Unterbau – diese Nebenkosten machen oft fast die Hälfte des Preises aus.",
  },
  {
    q: "Was kostet eine Einfahrt mit 40 qm?",
    a: "Eine 40 m² große, PKW-befahrbare Einfahrt kostet mit Betonpflaster meist 4.000–6.500 €, mit Premium-Beton oder Naturstein 7.000–11.000 € und mehr. Entscheidend sind Material, der Zustand des Untergrunds und ob alte Beläge entfernt werden müssen.",
  },
  {
    q: "Welche versteckten Kosten gibt es beim Pflastern?",
    a: "Rund 40–50 % der Kosten stecken nicht im Pflasterstein, sondern im Unterbau: Aushub und Entsorgung des Bodens, frostsichere Tragschicht aus Schotter, Pflasterbett, Randsteine/Einfassung und die Entsorgung alter Beläge. Diese Posten fehlen in vielen Online-Preisen – unser Rechner weist sie einzeln aus.",
  },
  {
    q: "Was kostet der Unterbau bzw. Aushub?",
    a: "Aushub und Unterbau kosten zusammen etwa 28–45 €/m²: Aushub rund 10–15 €/m², Material und Verdichtung der frostsicheren Tragschicht 18–30 €/m². Bei einer PKW-befahrbaren Einfahrt ist die Tragschicht dicker und frostsicher – das kostet mehr als bei einem reinen Gehweg.",
  },
  {
    q: "Beton- oder Natursteinpflaster – was ist günstiger?",
    a: "Betonpflaster ist deutlich günstiger (Material ab ~15–20 €/m²), Naturstein kostet 50–100 €/m² und mehr. Tipp: Modernes Premium-Betonpflaster sieht Naturstein zum Verwechseln ähnlich, kostet aber 40–60 % weniger.",
  },
  {
    q: "Spart wasserdurchlässiges Pflaster in Hamburg Gebühren?",
    a: "Ja, oft. In Hamburg fällt eine Niederschlagswassergebühr von 0,86 € pro m² versiegelter Fläche und Jahr an. Wie viel Sie sparen, hängt aber von der Ausführung ab: an die Kanalisation angeschlossene versickerungsfähige Flächen und Rasengittersteine werden meist mit dem halben Satz (50 %) berechnet; Flächen, deren Regenwasser vollständig vor Ort versickert, können mit 0 % angesetzt werden – normales versiegeltes Pflaster bleibt bei 100 %. Maßgeblich ist die Einstufung von Hamburg Wasser. Eine Versickerung auf dem Grundstück müssen Sie zudem wasserrechtlich anzeigen bzw. genehmigen lassen.",
  },
  {
    q: "Was kostet eine Einfahrt pflastern in Hamburg?",
    a: "In Hamburg liegen die Galabau-Preise etwas über dem Bundesdurchschnitt. Für eine 40 m² große, befahrbare Einfahrt aus Betonpflaster sollten Sie mit etwa 4.500–6.500 € rechnen. Über unsere Vermittlung erhalten Sie Angebote geprüfter Galabau-Betriebe aus Niendorf und Umgebung.",
  },
];

export default function EinfahrtPflasternKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Einfahrt pflastern:
          <br />
          Kosten 2026
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        { name: "Einfahrt-Kosten", href: "/ratgeber/einfahrt-pflastern-kosten" },
      ]}
    >
      <TlDr>
        Eine Einfahrt pflastern zu lassen kostet 2026 typischerweise{" "}
        <strong>90–150 €/m² mit Beton</strong> und{" "}
        <strong>170–270 €/m² mit Naturstein</strong> – jeweils inklusive Unterbau.
        Eine 40 m² große Einfahrt liegt mit Betonpflaster bei etwa{" "}
        <strong>4.000–6.500 €</strong>.{" "}
        <strong>Achtung:</strong> Rund 40–50 % der Kosten stecken im Unterbau
        (Aushub, Tragschicht, Randsteine) – nicht im Pflasterstein. In Hamburg
        kommt die Niederschlagswassergebühr hinzu, die sich mit durchlässigem
        Pflaster halbieren lässt.
      </TlDr>

      {/* Interactive cost calculator */}
      <section id="rechner" aria-label="Einfahrt-Pflastern-Kostenrechner" className="mt-10">
        <p className="label text-accent">Einfahrt-Kostenrechner</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
          Was kostet Ihre Einfahrt? Mit Unterbau berechnen.
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Fläche, Material und Nutzung wählen – der Rechner weist die oft
          übersehenen Unterbau- und Nebenkosten einzeln aus.
        </p>
        <EinfahrtPflasternCalculator />
      </section>

      <H2 id="versteckte-kosten">Die versteckten Kosten: Unterbau statt nur Stein</H2>
      <P>
        Der größte Irrtum beim Pflastern: Viele rechnen nur mit dem Preis der
        Pflastersteine. Tatsächlich stecken <strong>40–50 % der Kosten im
        Unterbau und den Nebenarbeiten</strong> – also genau dort, wo
        Online-Preise oft schweigen. Diese Aufschlüsselung sollten Sie kennen,
        bevor Sie Angebote vergleichen:
      </P>
      <CostTable
        head={["Posten", "Typische Kosten", "Anteil"]}
        rows={[
          ["Aushub & Entsorgung Boden", "15 – 20 €/m²", "Nebenkosten"],
          ["Unterbau / frostsichere Tragschicht", "18 – 30 €/m²", "Nebenkosten"],
          ["Pflasterbett (Splitt/Sand)", "ca. 8 €/m²", "Nebenkosten"],
          ["Pflastermaterial", "20 – 90 €/m²", "Stein"],
          ["Verlegung (Arbeit)", "35 – 55 €/m²", "Arbeit"],
          ["Randsteine / Einfassung", "ca. 10 €/m²", "Nebenkosten"],
        ]}
      />
      <P>
        <strong>Faustregel:</strong> Rechnen Sie den Steinpreis, addieren Sie rund
        40 % Arbeitskosten und nochmals etwa 30 % für Unterbau, Aushub und
        Randsteine.
      </P>

      <H2 id="pro-qm">Einfahrt pflastern: Preise pro m² nach Material</H2>
      <P>
        Das Material bestimmt den Preis am stärksten. Betonpflaster ist am
        günstigsten, Naturstein am hochwertigsten und teuersten.
      </P>
      <CostTable
        head={["Material", "Komplettpreis pro m²", "Eigenschaften"]}
        rows={[
          ["Betonpflaster (Standard)", "90 – 150 €/m²", "günstig, robust, große Auswahl"],
          ["Premium-Betonpflaster", "130 – 195 €/m²", "Naturstein-Optik, 40–60 % günstiger als echter Naturstein"],
          ["Naturstein (Granit, Basalt)", "170 – 270 €/m²", "hochwertig, langlebig, teuer"],
          ["Versickerungspflaster", "110 – 180 €/m²", "wasserdurchlässig, kann die Niederschlagsgebühr senken"],
        ]}
      />

      <H2 id="nach-groesse">Kosten nach Größe der Einfahrt</H2>
      <CostTable
        head={["Fläche", "Beton (befahrbar)", "Naturstein"]}
        rows={[
          ["~20 m² (Stellplatz)", "2.000 – 3.500 €", "4.000 – 6.000 €"],
          ["~40 m² (Einfahrt)", "4.000 – 6.500 €", "7.500 – 11.000 €"],
          ["~60 m² (groß)", "6.000 – 10.000 €", "11.000 – 16.000 €"],
        ]}
      />

      <CtaBand
        headline="Lieber gleich konkrete Preise?"
        text="Statt mit Richtwerten zu rechnen, erhalten Sie von uns kostenlos und unverbindlich passende Angebote geprüfter Galabau-Betriebe aus Ihrer Region."
        ctaLabel="Pflaster-Angebote anfragen"
        service="Pflasterarbeiten"
        source="einfahrt-page"
      />

      <H2 id="befahrbar">Begehbar oder befahrbar? Der Unterbau entscheidet</H2>
      <P>
        Eine Einfahrt, die ein Auto trägt, braucht einen <strong>dickeren,
        frostsicheren Unterbau</strong> als ein reiner Gehweg – mehr Aushub, mehr
        Schotter, sorgfältigere Verdichtung. Das ist ein echter Kostentreiber, den
        pauschale „Pflaster pro qm“-Preise gern übergehen. Für PKW-Lasten sind je
        nach Boden 30–50 cm Tragschicht üblich; bei schwerem Verkehr (Wohnmobil,
        Lieferfahrzeuge) entsprechend mehr.
      </P>

      <H2 id="hamburg-gebuehr">
        Hamburg: Niederschlagswassergebühr mit durchlässigem Pflaster senken
      </H2>
      <P>
        Ein lokaler Spar-Faktor, den kaum jemand auf dem Schirm hat: In Hamburg
        erhebt Hamburg Wasser eine <strong>Niederschlagswassergebühr von 0,86 €
        pro m² versiegelter Fläche und Jahr</strong>. Eine komplett versiegelte
        40 m²-Einfahrt kostet so rund 34 €/Jahr laufend.
      </P>
      <P>
        Wie stark Sie sparen, hängt von der Ausführung ab – pauschal gilt die
        Halbierung <em>nicht</em>:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>An die Kanalisation angeschlossene</strong> versickerungsfähige
          Flächen, Sicker- oder Rasengittersteine: meist <strong>halber
          Flächensatz (50 %)</strong>.
        </li>
        <li>
          Flächen, deren Regenwasser <strong>vollständig vor Ort versickert</strong>{" "}
          (keine Einleitung in die Kanalisation): können mit <strong>0 %</strong>{" "}
          angesetzt werden.
        </li>
        <li>
          Normales, versiegeltes Pflaster mit Anschluss: bleibt bei{" "}
          <strong>100 %</strong>.
        </li>
      </ul>
      <P>
        Maßgeblich ist die Einstufung von Hamburg Wasser nach Belag und
        Entwässerung; die Anrechnung müssen Sie melden.{" "}
        <strong>Wichtig:</strong> Wer Regenwasser auf dem Grundstück versickern
        lässt, muss auch das <strong>Wasserrecht</strong> beachten. Häusliche
        Versickerung auf Wohngrundstücken (in der Regel bis ~250 m²) ist unter
        Bedingungen – etwa außerhalb von Wasserschutz- und Altlastengebieten –
        oft genehmigungsfrei, aber bei der zuständigen Behörde{" "}
        <strong>anzuzeigen</strong>; sonst ist eine wasserrechtliche Erlaubnis
        nötig. Klären Sie das vor Baubeginn (Angaben ohne Gewähr).
      </P>

      <H2 id="sparen">So sparen Sie beim Einfahrt pflastern</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>Mehrere Angebote vergleichen – die Preise streuen stark.</li>
        <li>Premium-Betonpflaster statt Naturstein – fast gleiche Optik, 40–60 % günstiger.</li>
        <li>Aushub und Entsorgung in Eigenleistung übernehmen, wenn möglich.</li>
        <li>Versickerungspflaster prüfen – senkt in Hamburg die laufende Gebühr.</li>
        <li>Einfaches Verlegemuster wählen – Sondermuster kosten mehr Arbeitszeit.</li>
        <li>Außerhalb der Galabau-Hauptsaison (Frühjahr/Sommer) anfragen.</li>
      </ul>

      <H2 id="hamburg">Einfahrt pflastern in Hamburg &amp; Umgebung</H2>
      <P>
        In Hamburg liegen die Galabau-Preise etwas über dem Bundesdurchschnitt.
        Für eine 40 m² große, befahrbare Einfahrt aus Betonpflaster sollten Sie
        mit etwa <strong>4.500–6.500 €</strong> rechnen – inklusive Unterbau und
        Randsteinen. Über unsere Vermittlung erhalten Sie Angebote geprüfter
        Galabau-Betriebe aus Niendorf und Umgebung – so vergleichen Sie reale
        Preise statt Richtwerte.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Einfahrt-Pflastern-Kosten" />

      <CtaBand
        headline="Jetzt passende Galabau-Betriebe finden"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung, die Ihnen ein konkretes Angebot machen."
        ctaLabel="Pflaster-Angebote anfragen"
        service="Pflasterarbeiten"
        source="einfahrt-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen kein individuelles Angebot. Tatsächliche Kosten hängen von
        Untergrund, Material, Verlegemuster und Region ab. Angaben zur
        Niederschlagswassergebühr ohne Gewähr – maßgeblich sind die Tarife von
        Hamburg Wasser.
      </p>
    </RatgeberArticle>
  );
}
