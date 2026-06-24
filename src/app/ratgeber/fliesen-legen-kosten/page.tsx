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
  title: "Fliesen legen lassen: Kosten pro m² & im Bad (2026)",
  description:
    "Was kostet Fliesen legen? Der Fliesenleger nimmt 30–60 €/m² für die reine Verlegung, im Bad mit Abdichtung 60–90 €/m². Ein komplettes Bad (8–12 m²) liegt bei 3.000–8.000 € inkl. Material. Preise pro m², Stundenlohn, Beispielrechnung & Spartipps für Hamburg.",
  alternates: { canonical: "/ratgeber/fliesen-legen-kosten" },
  openGraph: {
    title: "Fliesen legen lassen: Kosten pro m² & im Bad",
    description:
      "Fliesenleger-Preise pro m² für Boden, Wand & Bad, Stundenlohn, Beispielrechnung fürs Bad & Hamburg-Aufschlag.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet Fliesen legen pro m²?",
    a: "Die reine Verlegung kostet je nach Fliese und Untergrund 30–60 €/m². Standard-Bodenfliesen liegen am unteren Rand (30–55 €/m²), Wandfliesen bei 40–65 €/m². Im Bad mit Abdichtung sind es 60–90 €/m², bei großformatigen Feinsteinzeug-Fliesen 55–120 €/m². Das Material (die Fliesen selbst) kommt mit 10–60 €/m² obendrauf. In Hamburg liegen die Preise eher am oberen Rand der Spanne.",
  },
  {
    q: "Was kostet ein komplettes Bad zu fliesen?",
    a: "Für ein durchschnittliches Bad von 8–12 m² liegen die reinen Fliesenarbeiten inklusive Material meist bei 3.000–8.000 €. Den Unterschied machen Größe, die Abdichtung im Dusch- und Wannenbereich, das Fliesenformat und ob alte Fliesen erst entfernt werden müssen. Die reine Verlegearbeit macht dabei rund 60–70 % der Kosten aus.",
  },
  {
    q: "Was kostet der Fliesenleger pro Stunde?",
    a: "Der Stundensatz liegt 2026 meist bei 40–75 € netto, je nach Region und Qualifikation. Üblich – und für Auftraggeber besser kalkulierbar – ist aber die Abrechnung pro m². Nach Stunden wird eher bei kleinen Ausbesserungen oder schwer kalkulierbaren Altbau-Arbeiten gerechnet.",
  },
  {
    q: "Wie lange dauert es, 10 m² zu fliesen?",
    a: "Ein erfahrener Fliesenleger schafft etwa 15–20 m² pro Tag bei einfacher Verlegung. Für 10 m² ist das gut ein Arbeitstag – plus Zeit für Untergrundvorbereitung, Abdichtung im Bad und Trocknung von Kleber und Fugen. Mit Vorarbeiten kommt man im Bad schnell auf zwei bis drei Tage.",
  },
  {
    q: "Warum ist Fliesen im Bad teurer als im Wohnraum?",
    a: "Im Bad ist im Spritzwasserbereich – vor allem Dusche und Wanne – eine Abdichtung nach DIN 18534 zwingend. Diese Verbundabdichtung kostet zusätzlich 20–40 €/m². Dazu kommen viele Zuschnitte um Rohre, Armaturen und Ecken, was die Arbeit langsamer und teurer macht als eine glatte Wohnzimmerfläche.",
  },
  {
    q: "Kann man Fliese auf Fliese verlegen?",
    a: "Ja, wenn der alte Belag fest sitzt, eben und tragfähig ist, kann man mit einem Haftgrund Fliese auf Fliese verlegen und spart das Abschlagen. Das funktioniert aber nicht immer: Der Aufbau wird höher (kritisch an Türen und Übergängen), und lose oder hohle Altfliesen müssen raus. Im Zweifel ist das Entfernen sauberer – ein Fachbetrieb beurteilt das vor Ort.",
  },
  {
    q: "Was kostet es, alte Fliesen zu entfernen?",
    a: "Alte Fliesen abschlagen und entsorgen kostet etwa 15–35 €/m², je nachdem wie fest sie sitzen und ob ein Mörtelbett dahinterliegt. Hinzu kommt oft eine Untergrundvorbereitung (10–25 €/m²), bevor neu verlegt werden kann. Diese Posten machen einen Großteil des Mehraufwands bei Altbau-Sanierungen aus.",
  },
];

export default function FliesenLegenKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Fliesen legen
          <br />
          lassen: Kosten
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Fliesen legen: Kosten",
          href: "/ratgeber/fliesen-legen-kosten",
        },
      ]}
    >
      <TlDr>
        Fliesen legen zu lassen kostet beim Fliesenleger{" "}
        <strong>30–60 €/m² für die reine Verlegung</strong>; im Bad mit
        Abdichtung sind es <strong>60–90 €/m²</strong>. Das Material kommt mit
        10–60 €/m² obendrauf. Ein komplettes Bad (8–12 m²) liegt damit grob bei{" "}
        <strong>3.000–8.000 € inklusive Material</strong>. Die größten
        Preistreiber sind Abdichtung, Fliesenformat und das Entfernen alter
        Fliesen. In Hamburg kalkulieren Sie eher am oberen Rand.
      </TlDr>

      <H2 id="preise-pro-qm">Was kostet Fliesen legen pro m²?</H2>
      <P>
        Fliesenleger rechnen fast immer pro Quadratmeter ab. Die Spanne hängt
        davon ab, ob Boden oder Wand gefliest wird, welches Format verlegt wird
        und ob im Nassbereich abgedichtet werden muss. Die folgenden Werte gelten
        für die <strong>reine Arbeit</strong> – das Material der Fliesen kommt
        separat dazu:
      </P>
      <CostTable
        head={["Leistung", "Preis pro m²"]}
        rows={[
          ["Bodenfliesen verlegen (Standard)", "30 – 55 €"],
          ["Wandfliesen verlegen", "40 – 65 €"],
          ["Bad inkl. Abdichtung (DIN 18534)", "60 – 90 €"],
          ["Großformat / Feinsteinzeug", "55 – 120 €"],
          ["Untergrund vorbereiten / grundieren", "10 – 25 €"],
          ["Nassbereich-Abdichtung", "20 – 40 €"],
          ["Material (Fliesen)", "10 – 60 €"],
          ["Stundensatz Fliesenleger (netto)", "40 – 75 €/h"],
        ]}
      />
      <P>
        Faustregel: Bei einer kompletten Maßnahme macht die reine Verlegearbeit
        rund <strong>60–70 % der Kosten</strong> aus, das Material den Rest. Wer
        günstige Fliesen wählt, spart also nur einen kleineren Teil – der
        Löwenanteil steckt in der Arbeit.
      </P>

      <H2 id="stundenlohn">Was kostet der Fliesenleger pro Stunde?</H2>
      <P>
        Der Stundenlohn eines Fliesenlegers liegt 2026 meist bei{" "}
        <strong>40–75 € netto</strong>, in Ballungsräumen wie Hamburg eher am
        oberen Rand. Abgerechnet wird damit aber selten: Üblich und für Sie besser
        kalkulierbar ist der <strong>Quadratmeterpreis</strong>, weil er das
        Risiko der Arbeitsgeschwindigkeit beim Betrieb lässt. Nach Stunden wird
        eher bei kleinen Reparaturen, einzelnen Austauschfliesen oder schwer
        kalkulierbaren Altbau-Überraschungen gerechnet. Tempo zur Orientierung:
        Ein Profi verlegt etwa <strong>15–20 m² pro Tag</strong> bei einfacher
        Verlegung.
      </P>

      <H2 id="bad">Fliesen im Bad: warum es teurer ist</H2>
      <P>
        Im Bad kostet das Fliesen mehr als im Wohnraum – aus zwei Gründen. Erstens
        ist im Spritzwasserbereich rund um Dusche und Wanne eine{" "}
        <strong>Verbundabdichtung nach DIN 18534</strong> zwingend; diese
        Flüssigabdichtung schlägt mit zusätzlichen 20–40 €/m² zu Buche. Zweitens
        sind im Bad viele <strong>Zuschnitte</strong> um Rohre, Armaturen, Nischen
        und Ecken nötig, was die Arbeit langsamer macht. Beides zusammen hebt den
        Quadratmeterpreis auf typische <strong>60–90 €/m²</strong>.
      </P>
      <P>
        Steht ohnehin das ganze Bad an, lohnt der Blick auf die Gesamtkosten im
        Ratgeber{" "}
        <Link
          href="/ratgeber/bad-renovieren-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Bad renovieren: Kosten
        </Link>{" "}
        – die Fliesenarbeiten sind dort ein großer, aber nicht der einzige Posten.
      </P>

      <H2 id="beispiel">Beispielrechnung: 10-m²-Bad in Hamburg</H2>
      <P>
        Was bedeutet das konkret? Eine grobe Rechnung für ein durchschnittliches
        Bad mit rund 10 m² Bodenfläche und teilweise gefliesten Wänden (insgesamt
        ca. 30 m² zu verlegende Fläche), inklusive Abdichtung im Nassbereich und
        mittlerem Fliesenmaterial:
      </P>
      <CostTable
        head={["Posten", "Richtwert"]}
        rows={[
          ["Verlegung ~30 m² (Boden + Wand, inkl. Abdichtung)", "1.800 – 2.700 €"],
          ["Untergrund vorbereiten / grundieren", "300 – 750 €"],
          ["Material (Fliesen, Kleber, Fugenmasse)", "600 – 1.800 €"],
          ["Alte Fliesen entfernen & entsorgen (optional)", "450 – 1.050 €"],
          ["Summe (ohne Abriss)", "~2.700 – 5.250 €"],
          ["Summe (mit Abriss alter Fliesen)", "~3.150 – 6.300 €"],
        ]}
      />
      <P>
        Ohne Abriss und mit günstigem Material kann ein kleines Bad knapp unter
        dieser Summe bleiben; mit Abriss, Großformat oder aufwendigen Mustern
        klettert sie nach oben. Realistisch liegt ein durchschnittliches Bad – je
        nach Format, Aufwand und Hamburg-Aufschlag – damit bei{" "}
        <strong>3.000 bis 8.000 €</strong> für die reinen Fliesenarbeiten, nach
        oben offen bei großformatigem Feinsteinzeug oder Mosaik.
      </P>

      <H2 id="altbau">Alte Fliesen entfernen oder Fliese auf Fliese?</H2>
      <P>
        Bei einer Sanierung im Altbau ist die erste Frage: Müssen die alten
        Fliesen raus? <strong>Abschlagen und entsorgen</strong> kostet etwa
        15–35 €/m² – ein spürbarer Posten, der bei Neubau-Rechnungen oft fehlt.
        Sitzt der alte Belag dagegen fest, eben und tragfähig, kann man mit einem
        Haftgrund <strong>Fliese auf Fliese</strong> verlegen und sich den Abriss
        sparen.
      </P>
      <P>
        Die Grenzen: Der Aufbau wird höher – das kann an Türen, Übergängen und vor
        der Badewanne stören. Lose oder hohl klingende Altfliesen müssen ohnehin
        raus. Im Zweifel ist das saubere Entfernen die haltbarere Lösung; ein
        Fachbetrieb beurteilt den Untergrund vor Ort.
      </P>

      <H2 id="formate">Boden, Wand &amp; Großformat: was den Preis bewegt</H2>
      <P>
        Innerhalb der Spanne entscheidet vor allem das Format.{" "}
        <strong>Standard-Bodenfliesen</strong> in gerade geschnittenen Räumen sind
        am günstigsten. <strong>Wandfliesen</strong> liegen etwas höher, weil
        senkrecht und auf Höhe gearbeitet wird. Teurer wird es bei{" "}
        <strong>großformatigen Platten und Feinsteinzeug</strong> (ab 60×60 cm):
        Sie sind schwer, brauchen einen besonders ebenen Untergrund, spezielles
        Werkzeug und mehr Sorgfalt – dafür gibt es weniger Fugen. Aufwendige
        Verlegemuster (Diagonal, Fischgrät, Mosaik) kosten zusätzlich Zeit und
        damit Geld.
      </P>

      <CtaBand
        headline="Fliesen legen lassen?"
        text="Schildern Sie kurz Ihr Vorhaben – Raum, ungefähre Fläche und ob alte Fliesen raus müssen. Wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Fliesenleger aus Hamburg und Umgebung."
        ctaLabel="Fliesenleger-Angebote anfragen"
        service="Fliesen & Bad"
        source="fliesen-legen-page"
      />

      <H2 id="sparen">Kosten sparen – und woran Sie einen guten Betrieb erkennen</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Material selbst stellen:</strong> Wer Fliesen, Kleber und Fugen
          selbst kauft, zahlt nur die Arbeit – achten Sie aber auf die richtige
          Menge inklusive Verschnitt (ca. 10 %).
        </li>
        <li>
          <strong>Standardformate wählen:</strong> Gängige Formate ohne aufwendiges
          Muster sind am schnellsten verlegt und damit am günstigsten.
        </li>
        <li>
          <strong>Mehrere Räume bündeln:</strong> Bad, Flur und Küche in einem
          Rutsch senken den Quadratmeterpreis (eine Anfahrt, eine Einrichtung).
        </li>
        <li>
          <strong>Detailliertes Festangebot:</strong> Ein gutes Angebot trennt
          Verlegung, Abdichtung, Untergrund und Entsorgung sauber auf – so
          vergleichen Sie nicht Äpfel mit Birnen.
        </li>
        <li>
          <strong>Vorsicht bei Lockpreisen:</strong> Ein sehr niedriger m²-Preis
          ohne Abdichtung und Vorarbeiten wird über Nachträge teuer.
        </li>
      </ul>

      <H2 id="hamburg">Fliesenleger in Hamburg: Preise &amp; Aufschlag</H2>
      <P>
        In Hamburg liegen die Fliesenleger-Preise spürbar über dem ländlichen
        Durchschnitt – rechnen Sie mit einem Aufschlag von grob{" "}
        <strong>20–30 %</strong> auf die reinen Arbeitskosten, getrieben von
        höheren Lohn- und Anfahrtskosten und guter Auslastung der Betriebe. Wer
        einen Fliesenleger in <strong>Niendorf, Eimsbüttel oder Umgebung</strong>{" "}
        sucht, sollte früh anfragen: Gute Betriebe sind oft Wochen im Voraus
        ausgebucht. Mehrere Räume in einem Auftrag und etwas Flexibilität beim
        Termin senken den Preis.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu den Kosten fürs Fliesen legen" />

      <CtaBand
        headline="Geprüfte Fliesenleger aus Hamburg finden"
        text="Beschreiben Sie kurz Raum, Fläche, gewünschtes Fliesenformat und ob alte Fliesen entfernt werden müssen – wir bringen Sie kostenlos und unverbindlich mit passenden Fliesenleger-Betrieben aus Hamburg und Umgebung zusammen."
        ctaLabel="Fliesenleger-Angebote anfragen"
        service="Fliesen & Bad"
        source="fliesen-legen-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preise sind Richtwerte (Stand Juni 2026) und ersetzen kein
        individuelles Angebot. Die tatsächlichen Kosten hängen von Fliesenformat,
        Verlegemuster, Untergrund, Abdichtung, Entsorgung und Region ab.
      </p>
    </RatgeberArticle>
  );
}
