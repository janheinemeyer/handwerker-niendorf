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
import { WohnungStreichenCalculator } from "@/components/wohnung-streichen-calculator";

export const metadata: Metadata = {
  title: "Wohnung streichen lassen: Kosten pro m² & nach Größe (2026)",
  description:
    "Was kostet es, eine Wohnung streichen zu lassen? Maler nehmen 6–12 €/m² (reine Arbeit) bzw. 20–35 €/m² inkl. Material. Preise nach Größe (30–100 m²), Wände vs. Decke, Vorarbeiten und Hamburg-Aufschlag – mit Kostenrechner.",
  alternates: { canonical: "/ratgeber/wohnung-streichen-kosten" },
  openGraph: {
    title: "Wohnung streichen lassen: Kosten pro m² & nach Größe",
    description:
      "Maler-Preise pro m² und nach Wohnungsgröße, Wände vs. Decke, Vorarbeiten & Hamburg-Aufschlag – mit Kostenrechner.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet es, eine Wohnung streichen zu lassen?",
    a: "Als Faustregel nimmt ein Maler 6–12 €/m² für die reine Arbeit (ohne Material) bzw. 20–35 €/m² inklusive Farbe und Vorarbeiten. Komplett gerechnet liegen die Kosten bei etwa 1.000 € für 30 m², 1.600 € für 50 m², rund 2.400 € für 75 m² und 3.200 € für 100 m² Wohnfläche (inkl. Material). In Ballungsräumen wie Hamburg eher am oberen Rand.",
  },
  {
    q: "Was kostet es, eine 60-m²-Wohnung streichen zu lassen?",
    a: "Für eine 60-m²-Wohnung sollten Sie je nach Umfang mit rund 1.800–3.800 € rechnen. Werden nur die Wände gestrichen und Material selbst gestellt, ist es deutlich günstiger; kommen Decken, Tapetenentfernung und Spachtelarbeiten dazu, klettert der Preis nach oben. Der Rechner oben zeigt Ihre Spanne.",
  },
  {
    q: "Was kostet es, eine 80-m²-Wohnung streichen zu lassen?",
    a: "Eine 80-m²-Wohnung professionell streichen zu lassen kostet je nach Zustand und Qualitätsniveau etwa 2.800–6.000 €. Den größten Unterschied machen Vorarbeiten (alte Tapeten, Risse, Spachteln) und ob Decken mitgestrichen werden.",
  },
  {
    q: "Kostet Decke streichen mehr als Wände?",
    a: "Ja. Überkopfarbeit ist anstrengender und langsamer, deshalb liegen Deckenpreise mit etwa 10–20 €/m² rund 20–30 % über den Wandpreisen (ca. 10–15 €/m²). Wer nur die Wände streichen lässt, spart entsprechend.",
  },
  {
    q: "Lohnt sich ein Maler oder selbst streichen?",
    a: "Bei einfachen, glatten Wänden ist Selbermachen günstig. Sobald Decken, viele Ecken, Vorarbeiten (Spachteln, Tapete entfernen) oder ein sauberes, deckendes Ergebnis bei kräftigen Farben gefragt sind, lohnt sich der Profi – wegen Tempo, Abdeckung, Werkzeug und Gewährleistung. Beim Auszug zählt zudem ein fachgerechtes Ergebnis.",
  },
  {
    q: "Was kostet ein Maler pro Stunde?",
    a: "Der Stundensatz liegt 2026 meist bei 45–75 € netto, je nach Region und Qualifikation. Üblich ist aber die Abrechnung pro m² – das ist für Auftraggeber besser kalkulierbar als nach Stunden.",
  },
];

export default function WohnungStreichenKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Wohnung streichen
          <br />
          lassen: Kosten
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Wohnung streichen: Kosten",
          href: "/ratgeber/wohnung-streichen-kosten",
        },
      ]}
    >
      <TlDr>
        Eine Wohnung streichen zu lassen kostet beim Maler{" "}
        <strong>6–12 €/m² für die reine Arbeit</strong> bzw.{" "}
        <strong>20–35 €/m² inklusive Material</strong> und Vorarbeiten. Komplett
        gerechnet sind das grob <strong>~1.000 € für 30 m²</strong>,{" "}
        <strong>~1.600 € für 50 m²</strong> und <strong>~3.200 € für 100 m²</strong>{" "}
        Wohnfläche. Decken kosten 20–30 % mehr als Wände; die größten Treiber sind
        Vorarbeiten (Tapete entfernen, spachteln). In Hamburg liegt die Arbeit
        eher bei 15–25 €/m² – kalkulieren Sie den Ballungsraum-Aufschlag ein.
      </TlDr>

      <section id="rechner" aria-label="Maler-Kostenrechner" className="mt-10">
        <p className="label text-accent">Kostenrechner</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
          Was kostet es, Ihre Wohnung streichen zu lassen?
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Wohnfläche, Umfang und Vorarbeiten wählen – Sie erhalten sofort eine
          Richtwert-Spanne. Unverbindlich, kein Angebot.
        </p>
        <WohnungStreichenCalculator />
      </section>

      <H2 id="preise-pro-qm">Maler-Kosten pro m²: die Richtwerte</H2>
      <P>
        Maler rechnen Streicharbeiten meist pro Quadratmeter ab. Die Spanne hängt
        vor allem daran, ob das Material enthalten ist und welche Vorarbeiten
        nötig sind:
      </P>
      <CostTable
        head={["Leistung", "Preis pro m²"]}
        rows={[
          ["Wände streichen (reine Arbeit, ohne Material)", "6 – 12 €"],
          ["Wände streichen (inkl. Material)", "20 – 35 €"],
          ["Decke streichen", "10 – 20 €"],
          ["Tapete entfernen & entsorgen", "5 – 20 €"],
          ["Untergrund spachteln / vorbereiten", "10 – 15 €"],
          ["Stundensatz Maler (netto)", "45 – 75 €/h"],
        ]}
      />

      <H2 id="nach-groesse">Was kostet es nach Wohnungsgröße?</H2>
      <P>
        Komplett gerechnet (Wände und Decken, inklusive Material und üblicher
        Nebenarbeiten) ergeben sich grob diese Richtwerte – nach oben offen, je
        nach Zustand und Vorarbeiten:
      </P>
      <CostTable
        head={["Wohnfläche", "Richtwert komplett (inkl. Material)"]}
        rows={[
          ["30 m²", "ab ~1.000 €"],
          ["50 m²", "ab ~1.600 €"],
          ["60 m²", "~1.800 – 3.800 €"],
          ["75 m²", "ab ~2.400 €"],
          ["80 m²", "~2.800 – 6.000 €"],
          ["100 m²", "ab ~3.200 €"],
        ]}
      />

      <H2 id="material">Reine Arbeit oder inkl. Material?</H2>
      <P>
        Der größte Sprung in den Preisen kommt vom Material. Ein Angebot über{" "}
        <strong>„6–12 €/m²“</strong> meint fast immer nur die Arbeitszeit – Farbe,
        Abdeckmaterial und Zubehör kommen dann obendrauf. Ein Komplettpreis von{" "}
        <strong>„20–35 €/m²“</strong> enthält Material und in der Regel auch
        Abkleben und kleinere Vorarbeiten. Achten Sie beim Vergleich von Angeboten
        also genau darauf, was eingerechnet ist – sonst vergleichen Sie Äpfel mit
        Birnen.
      </P>

      <H2 id="faktoren">Diese Faktoren treiben den Preis</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Vorarbeiten:</strong> Alte Tapeten entfernen, Risse und Löcher
          spachteln, Untergrund grundieren – das ist oft teurer als das Streichen
          selbst.
        </li>
        <li>
          <strong>Decken &amp; Deckenhöhe:</strong> Überkopfarbeit und Altbau mit
          hohen Decken kosten mehr (Gerüst/Leiter, mehr Fläche).
        </li>
        <li>
          <strong>Anzahl der Anstriche:</strong> Kräftige oder dunkle Farbtöne und
          Untergründe mit Flecken brauchen zwei bis drei Anstriche.
        </li>
        <li>
          <strong>Möbel &amp; Bodenschutz:</strong> Eine möblierte, bewohnte
          Wohnung erfordert mehr Abdecken und Umräumen als eine leere.
        </li>
        <li>
          <strong>Region:</strong> In Hamburg und anderen Ballungsräumen liegen
          die Arbeitspreise höher (siehe unten).
        </li>
      </ul>

      <CtaBand
        headline="Wohnung streichen lassen?"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Maler aus Hamburg und Umgebung, mit transparenten Festpreisen pro m²."
        ctaLabel="Maler-Angebote anfragen"
        service="Malerarbeiten"
        source="wohnung-streichen-page"
      />

      <H2 id="auszug">Beim Auszug streichen: was Mieter wissen sollten</H2>
      <P>
        In einer Mieterstadt wie Hamburg ist das Streichen beim Auszug ein
        Dauerthema. Ob Sie beim Auszug überhaupt streichen müssen, hängt vom
        Mietvertrag ab – viele Klauseln zu Schönheitsreparaturen sind nach der
        Rechtsprechung des Bundesgerichtshofs jedoch unwirksam, etwa starre
        Fristenpläne oder die Pflicht zur Renovierung, obwohl die Wohnung{" "}
        <em>unrenoviert</em> übergeben wurde. Das ist eine rechtliche Frage des
        Einzelfalls – prüfen Sie Ihren Mietvertrag und holen Sie im Zweifel Rat
        ein. Wird gestrichen, zählt ein fachgerechtes, deckendes Ergebnis in
        neutralen Tönen; hier lohnt häufig der Profi.
      </P>

      <H2 id="hamburg">Maler in Hamburg: Preise &amp; Aufschlag</H2>
      <P>
        Während in ländlichen Regionen schon 6–10 €/m² für die reine Arbeit
        möglich sind, liegen die Arbeitspreise in Hamburg und München eher bei{" "}
        <strong>15–25 €/m²</strong>. Höhere Lohn- und Anfahrtskosten schlagen sich
        im Preis nieder – rechnen Sie für die Hansestadt mit einem Aufschlag von
        grob 20–30 % auf die reinen Arbeitskosten. Der Rechner oben bildet das
        über die Option „Ballungsraum“ ab. Wer mehrere Räume oder gleich die
        ganze Wohnung in einem Rutsch streichen lässt, senkt den Quadratmeterpreis
        spürbar.
      </P>
      <P>
        Steht ohnehin eine größere Renovierung an, lohnt der Blick auf den
        Ratgeber{" "}
        <Link
          href="/ratgeber/bad-renovieren-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Bad renovieren: Kosten
        </Link>{" "}
        – Malerarbeiten lassen sich gut mitbeauftragen.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu den Kosten fürs Wohnung streichen" />

      <CtaBand
        headline="Geprüfte Maler aus Hamburg finden"
        text="Beschreiben Sie kurz Räume, Größe und gewünschten Umfang – wir bringen Sie kostenlos und unverbindlich mit passenden Malerbetrieben aus Hamburg und Umgebung zusammen."
        ctaLabel="Maler-Angebote anfragen"
        service="Malerarbeiten"
        source="wohnung-streichen-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preise sind Richtwerte (Stand Juni 2026) und ersetzen kein
        individuelles Angebot. Die tatsächlichen Kosten hängen von Zustand,
        Vorarbeiten, Farbton, Anzahl der Anstriche und Region ab. Angaben zu
        Schönheitsreparaturen dienen der allgemeinen Orientierung und ersetzen
        keine Rechtsberatung.
      </p>
    </RatgeberArticle>
  );
}
