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
import { WintergartenCalculator } from "@/components/wintergarten-calculator";
import { Breakout } from "@/components/breakout";

export const metadata: Metadata = {
  title: "Wintergarten: Kosten 2026 (Rechner, Preise & Hamburg)",
  description:
    "Was kostet ein Wintergarten? Aktuelle Preise 2026 für Kalt- und Warmwintergarten pro m², nach Größe und Material – mit Kostenrechner, Baugenehmigung Hamburg und Angebotsvergleich für Hamburg und Umgebung.",
  alternates: { canonical: "/ratgeber/wintergarten-kosten" },
  openGraph: {
    title: "Wintergarten: Kosten 2026 im Überblick",
    description:
      "Kalt- vs. Warmwintergarten, Preise pro m², Material und Baugenehmigung – mit Kostenrechner.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet ein Wintergarten?",
    a: "Ein Wintergarten kostet 2026 je nach Typ, Größe und Ausstattung typischerweise zwischen 10.000 € und 60.000 €; hochwertige Wohnwintergärten erreichen bis zu 100.000 €. Entscheidend ist der Typ: ein unbeheizter Kaltwintergarten ist deutlich günstiger als ein beheizter, ganzjährig nutzbarer Warmwintergarten.",
  },
  {
    q: "Was kostet ein Kaltwintergarten?",
    a: "Ein Kaltwintergarten (unbeheizt, für die Übergangszeit) kostet rund 500–1.000 € pro m². Für etwa 20 m² liegen die Gesamtkosten meist zwischen 10.000 € und 25.000 €, je nach Material und Verglasung.",
  },
  {
    q: "Was kostet ein Warmwintergarten?",
    a: "Ein Warmwintergarten (Wohnwintergarten, beheizt und ganzjährig nutzbar) kostet rund 2.000–5.500 € pro m². Für etwa 20 m² Wohnfläche sind das meist 50.000–90.000 €, im Premiumbereich bis über 100.000 €. Der Aufpreis entsteht durch Dämmung, hochwertige Verglasung, Heizung und Statik.",
  },
  {
    q: "Was kostet ein Wintergarten pro m²?",
    a: "Kaltwintergarten: etwa 500–1.000 €/m². Warmwintergarten: etwa 2.000–5.500 €/m². Kunststoff ist am günstigsten, Holz liegt in der Mitte, Aluminium bzw. Holz-Aluminium ist teurer, dafür besonders wartungsarm und langlebig.",
  },
  {
    q: "Was kostet ein Wintergarten mit 20 qm?",
    a: "Für 20 m² liegt ein Kaltwintergarten bei etwa 10.000–25.000 €, ein Warmwintergarten bei etwa 50.000–90.000 €. Hinzu kommen je nach Vorhaben Fundament, Beschattung und – in Hamburg immer – die Baugenehmigung.",
  },
  {
    q: "Braucht ein Wintergarten in Hamburg eine Baugenehmigung?",
    a: "Ja. In Hamburg ist ein Wintergarten unabhängig von der Größe immer genehmigungspflichtig – Ausnahmen gibt es nicht. Den Bauantrag muss ein bauvorlageberechtigter Entwurfsverfasser (z. B. Architekt oder Bauingenieur) erstellen. Die Genehmigung kostet meist 1.000–2.000 € (rund 20,50 € je 1.000 € Baukosten, mindestens 129,40 €), zuzüglich der Planungskosten.",
  },
  {
    q: "Lohnt sich ein Wintergarten?",
    a: "Ein Warmwintergarten schafft vollwertigen, ganzjährig nutzbaren Wohnraum und kann den Immobilienwert steigern – kostet aber so viel wie ein kleiner Anbau. Ein Kaltwintergarten ist die günstige Variante für Frühjahr bis Herbst. Welche Lösung sich lohnt, hängt von Nutzung, Budget und Ausrichtung (Sonne/Beschattung) ab.",
  },
  {
    q: "Was kostet ein Wintergarten in Hamburg?",
    a: "In Hamburg liegen die Handwerkerpreise etwas über dem Bundesdurchschnitt und es ist immer eine Baugenehmigung nötig. Für einen Kaltwintergarten mit ~20 m² sollten Sie mit etwa 13.000–28.000 € rechnen, für einen Warmwintergarten deutlich mehr. Über unsere Vermittlung erhalten Sie Angebote geprüfter Betriebe aus Niendorf und Umgebung.",
  },
];

export default function WintergartenKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Wintergarten:
          <br />
          Kosten 2026
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        { name: "Wintergarten-Kosten", href: "/ratgeber/wintergarten-kosten" },
      ]}
    >
      <TlDr>
        Ein Wintergarten kostet 2026 je nach Typ, Größe und Ausstattung
        typischerweise <strong>zwischen 10.000 € und 60.000 €</strong>
        (Premium-Wohnwintergärten bis 100.000 €). Ein{" "}
        <strong>Kaltwintergarten</strong> liegt bei <strong>500–1.000 €/m²</strong>,
        ein <strong>Warmwintergarten</strong> (Wohnwintergarten) bei{" "}
        <strong>2.000–5.500 €/m²</strong>. In Hamburg ist ein Wintergarten{" "}
        <strong>immer genehmigungspflichtig</strong> (1.000–2.000 €).
      </TlDr>

      {/* Interactive cost calculator */}
      <Breakout>
      <section id="rechner" aria-label="Wintergarten-Kostenrechner" className="mt-10">
        <p className="label text-accent">Wintergarten-Kostenrechner</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
          Was kostet Ihr Wintergarten? Jetzt berechnen.
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Typ, Größe und Material wählen und in wenigen Sekunden eine
          realistische Kostenschätzung mit Aufschlüsselung erhalten.
        </p>
        <WintergartenCalculator />
      </section>
      </Breakout>

      <H2 id="kalt-vs-warm">Kalt- oder Warmwintergarten? Der größte Preisfaktor</H2>
      <P>
        Die wichtigste Entscheidung ist der Typ – sie bestimmt den Preis stärker
        als alles andere. Ein <strong>Kaltwintergarten</strong> ist unbeheizt und
        für die Übergangszeit gedacht; ein <strong>Warmwintergarten</strong>{" "}
        (Wohnwintergarten) ist gedämmt, beheizt und ganzjährig als Wohnraum
        nutzbar.
      </P>
      <CostTable
        head={["Typ", "Preis pro m²", "20 m² gesamt", "Nutzung"]}
        rows={[
          ["Kaltwintergarten", "500 – 1.000 €/m²", "10.000 – 25.000 €", "Frühjahr–Herbst, unbeheizt"],
          ["Warmwintergarten", "2.000 – 5.500 €/m²", "50.000 – 90.000 €", "ganzjährig, voller Wohnraum"],
        ]}
      />
      <P>
        <strong>Hinweis 2026:</strong> Ein Warmwintergarten ist baulich ein
        vollwertiger Anbau (Dämmung, Statik, Heizung) und entsprechend teuer. Ein
        Kaltwintergarten ist die günstige Einstiegsvariante.
      </P>

      <H2 id="material">Kosten nach Material: Kunststoff, Holz oder Aluminium</H2>
      <P>
        Das Rahmenmaterial beeinflusst Preis, Optik und Wartung. Kunststoff ist am
        günstigsten, Aluminium (oft als Holz-Aluminium kombiniert) am
        wartungsärmsten und langlebigsten.
      </P>
      <CostTable
        head={["Material", "Tendenz", "Eigenschaften"]}
        rows={[
          ["Kunststoff", "günstig", "preiswert, pflegeleicht, begrenzte Spannweiten"],
          ["Holz", "mittel", "natürliche Optik, gute Dämmung, regelmäßige Pflege"],
          ["Aluminium / Holz-Alu", "höher", "sehr stabil, schlank, wartungsarm, langlebig"],
        ]}
      />

      <H2 id="nach-gewerk">Kosten nach Posten: Wohin das Geld fließt</H2>
      <P>
        Ein Wintergarten ist mehr als Glas und Rahmen. Diese Aufschlüsselung fehlt
        in den meisten Online-Preisen – Richtwerte für einen Warmwintergarten
        (~20 m²):
      </P>
      <CostTable
        head={["Posten", "Typische Kosten"]}
        rows={[
          ["Fundament / Bodenplatte", "3.000 – 8.000 €"],
          ["Konstruktion (Profile, Rahmen, Dach)", "15.000 – 35.000 €"],
          ["Verglasung (2-/3-fach, Sonnenschutz)", "6.000 – 18.000 €"],
          ["Heizung, Lüftung & Elektro", "3.000 – 10.000 €"],
          ["Beschattung (Markise/Rollo)", "2.000 – 8.000 €"],
          ["Montage & Abdichtung", "5.000 – 12.000 €"],
          ["Baugenehmigung & Planung", "1.000 – 3.000 €"],
        ]}
      />

      <CtaBand
        headline="Lieber gleich konkrete Preise?"
        text="Statt mit Richtwerten zu rechnen, erhalten Sie von uns kostenlos und unverbindlich passende Angebote geprüfter Wintergarten-Betriebe aus Ihrer Region."
        ctaLabel="Wintergarten-Angebote anfragen"
        service="Wintergarten"
        source="wintergarten-page"
      />

      <H2 id="genehmigung">
        Baugenehmigung Wintergarten: in Hamburg immer Pflicht
      </H2>
      <P>
        Anders als bei Carport oder Terrassenüberdachung ist ein Wintergarten in{" "}
        <strong>Hamburg unabhängig von der Größe immer genehmigungspflichtig</strong>{" "}
        – Ausnahmen gibt es nicht. Den Bauantrag muss ein{" "}
        <strong>bauvorlageberechtigter Entwurfsverfasser</strong> (Architekt oder
        Bauingenieur) erstellen.
      </P>
      <P>
        Die Genehmigungsgebühr richtet sich nach den Baukosten – rund{" "}
        <strong>20,50 € je 1.000 € Baukosten</strong> (mindestens 129,40 €), in der
        Praxis meist <strong>1.000–2.000 €</strong>. Hinzu kommen die Planungskosten
        des Entwurfsverfassers. Planen Sie diese Posten und die Bearbeitungszeit des
        Bauamts von Anfang an ein.
      </P>

      <H2 id="nach-groesse">Wintergarten-Kosten nach Größe</H2>
      <CostTable
        head={["Größe", "Kaltwintergarten", "Warmwintergarten"]}
        rows={[
          ["~12 m²", "6.000 – 12.000 €", "26.000 – 50.000 €"],
          ["~20 m²", "10.000 – 25.000 €", "50.000 – 90.000 €"],
          ["~30 m²", "15.000 – 35.000 €", "70.000 – 110.000 €"],
        ]}
      />

      <H2 id="preisbeispiele">Preisbeispiele: drei Wintergärten im Vergleich</H2>
      <CostTable
        head={["Ausführung", "Beschreibung", "Gesamtkosten"]}
        rows={[
          ["Einfach", "Kaltwintergarten ~15 m², Kunststoff, 2-fach", "9.000 – 16.000 €"],
          ["Mittel", "Warmwintergarten ~20 m², Holz-Alu, 3-fach, Beschattung", "55.000 – 80.000 €"],
          ["Premium", "Wohnwintergarten ~30 m², Aluminium, Heizung & Klima", "90.000 – 120.000 €"],
        ]}
      />

      <H2 id="sparen">So sparen Sie beim Wintergarten</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>Mehrere Angebote vergleichen – die Preise streuen stark.</li>
        <li>Kalt- statt Warmwintergarten, wenn keine ganzjährige Nutzung nötig ist.</li>
        <li>Standardmaße statt Sonderanfertigung wählen.</li>
        <li>Bestehende Bodenplatte/Terrasse nutzen, wenn die Statik passt.</li>
        <li>Beschattung gleich mitplanen – Nachrüsten ist teurer.</li>
        <li>Genehmigung früh angehen, um Verzögerungen zu vermeiden.</li>
      </ul>

      <H2 id="hamburg">Wintergarten in Hamburg &amp; Umgebung bauen lassen</H2>
      <P>
        In Hamburg liegen die Handwerkerpreise etwas über dem Bundesdurchschnitt,
        und die Baugenehmigung ist immer Pflicht. Für einen Kaltwintergarten mit
        ~20 m² sollten Sie mit etwa <strong>13.000–28.000 €</strong> rechnen, für
        einen Warmwintergarten deutlich mehr. Über unsere Vermittlung erhalten Sie
        Angebote geprüfter Betriebe aus Niendorf und Umgebung – so vergleichen Sie
        reale Preise statt Richtwerte.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Wintergarten-Kosten" />

      <CtaBand
        headline="Jetzt passende Wintergarten-Betriebe finden"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung, die Ihnen ein konkretes Angebot machen."
        ctaLabel="Wintergarten-Angebote anfragen"
        service="Wintergarten"
        source="wintergarten-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen kein individuelles Angebot. Tatsächliche Kosten hängen von Typ,
        Größe, Material, Verglasung, Statik und Region ab. Angaben zur
        Baugenehmigung ohne Gewähr – maßgeblich ist die zuständige Bauaufsicht.
      </p>
    </RatgeberArticle>
  );
}
