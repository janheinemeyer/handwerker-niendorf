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
import { WallboxCalculator } from "@/components/wallbox-calculator";

export const metadata: Metadata = {
  title: "Wallbox installieren lassen: Kosten 2026 (Rechner & Hamburg)",
  description:
    "Was kostet eine Wallbox mit Installation? Preise 2026 für Gerät, Elektriker, Kabelweg und Zählerschrank – mit Kostenrechner, Förderung, Anmeldung (Hamburger Energienetze) und Angebotsvergleich für Hamburg.",
  alternates: { canonical: "/ratgeber/wallbox-installieren-kosten" },
  openGraph: {
    title: "Wallbox installieren lassen: Kosten 2026",
    description:
      "Preise für Gerät und Installation – mit Kostenrechner, Förderung und Anmeldung.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet eine Wallbox mit Installation?",
    a: "Eine Wallbox kostet mit Installation 2026 typischerweise zwischen 1.000 € und 3.000 €. Das Gerät allein liegt bei 400–1.300 €, die Installation durch den Elektriker bei 500–1.500 €. Im einfachsten Fall (Einfamilienhaus, kurzer Kabelweg) sind es rund 1.000–1.500 €.",
  },
  {
    q: "Was kostet die Installation einer Wallbox?",
    a: "Die reine Installation durch einen Elektriker kostet je nach Aufwand 500–1.500 €. Der größte Faktor ist der Kabelweg vom Sicherungskasten zum Stellplatz: pro Meter fallen etwa 15–40 € an. Wanddurchbrüche, Außenverlegung oder Erdarbeiten erhöhen den Preis.",
  },
  {
    q: "11 kW oder 22 kW – was ist besser?",
    a: "Für ein Einfamilienhaus reicht eine 11-kW-Wallbox in der Regel aus: Sie lädt ein E-Auto über Nacht voll und ist nur meldepflichtig. Eine 22-kW-Wallbox lädt schneller, ist aber genehmigungspflichtig und teurer – sinnvoll vor allem bei mehreren Fahrzeugen oder kurzen Standzeiten.",
  },
  {
    q: "Muss ich die Wallbox anmelden?",
    a: "Ja. Jede Wallbox muss beim Netzbetreiber gemeldet werden; bis 11 kW ist sie meldepflichtig (genehmigungsfrei), ab 22 kW genehmigungspflichtig. In Hamburg erfolgt die Anmeldung über die Hamburger Energienetze. Der Elektriker übernimmt das in der Regel mit.",
  },
  {
    q: "Gibt es 2026 noch eine Förderung für Wallboxen?",
    a: "Eine bundesweite KfW-Förderung für private Wallboxen gibt es seit dem Auslaufen des Programms 442 nicht mehr. Einige Bundesländer, Kommunen, Stadtwerke und Energieversorger fördern jedoch individuell. Zusätzlich lassen sich die Montagekosten steuerlich absetzen.",
  },
  {
    q: "Kann ich die Wallbox-Installation von der Steuer absetzen?",
    a: "Ja. Nach § 35a EStG können Sie 20 % der Arbeits-, Fahrt- und Maschinenkosten (nicht des Geräts) als Handwerkerleistung absetzen, maximal 1.200 € pro Jahr. Voraussetzung: eine Rechnung mit ausgewiesenem Lohnanteil und Zahlung per Überweisung.",
  },
  {
    q: "Was kostet ein neuer Zählerschrank für die Wallbox?",
    a: "In älteren Häusern muss der Zählerschrank oft modernisiert werden, damit die Wallbox sicher betrieben werden kann. Das ist ein häufig unterschätzter Posten von 500 bis über 2.000 €. Ob es nötig ist, prüft der Elektriker vor Ort.",
  },
  {
    q: "Was kostet eine Wallbox in Hamburg?",
    a: "In Hamburg liegen die Installationskosten durch den höheren Handwerker-Stundensatz meist etwas über dem Bundesschnitt. Für eine schlüsselfertige 11-kW-Wallbox sollten Sie mit rund 1.500–3.000 € rechnen; die Anmeldung erfolgt über die Hamburger Energienetze.",
  },
];

export default function WallboxKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Wallbox installieren
          <br />
          lassen: Kosten 2026
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Wallbox-Kosten",
          href: "/ratgeber/wallbox-installieren-kosten",
        },
      ]}
    >
      <TlDr>
        Eine Wallbox installieren zu lassen kostet 2026 typischerweise{" "}
        <strong>zwischen 1.000 € und 3.000 €</strong>. Das Gerät selbst liegt bei{" "}
        <strong>400–1.300 €</strong>, die Installation durch den Elektriker bei{" "}
        <strong>500–1.500 €</strong>. Größter Kostenfaktor ist der Kabelweg vom
        Sicherungskasten zum Stellplatz; ein veralteter Zählerschrank kann
        weitere 500–2.000 € verursachen.
      </TlDr>

      {/* Interactive cost calculator */}
      <section id="rechner" aria-label="Wallbox-Kostenrechner" className="mt-10">
        <p className="label text-accent">Wallbox-Kostenrechner</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
          Was kostet Ihre Wallbox? Jetzt berechnen.
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Leistung, Ausstattung und Kabelweg wählen und in wenigen Sekunden eine
          realistische Kostenschätzung erhalten.
        </p>
        <WallboxCalculator />
      </section>

      <H2 id="geraet">Was kostet eine Wallbox? Geräte-Preise</H2>
      <P>
        Der Gerätepreis hängt von Ladeleistung und Ausstattung ab. Einfache
        11-kW-Wallboxen sind günstig, smarte Modelle mit App-Steuerung,
        Lastmanagement oder PV-Überschussladen kosten mehr.
      </P>
      <CostTable
        head={["Kategorie", "Preis (Gerät)", "Eigenschaften"]}
        rows={[
          ["Einfach (11 kW, Basis)", "400 – 700 €", "laden ohne App, genehmigungsfrei"],
          ["Mittelklasse (11 kW, Smart)", "700 – 1.200 €", "App, Lastmanagement, Zugangsschutz"],
          ["Premium (22 kW / PV)", "1.000 – 2.000 €", "schnelles Laden, PV-Überschuss, genehmigungspflichtig"],
        ]}
      />

      <H2 id="installation">Installationskosten & Kostenfaktoren</H2>
      <P>
        Die Installation übernimmt ein zugelassener Elektriker. Der wichtigste
        Preistreiber ist der Kabelweg; hinzu kommen je nach Haus weitere Posten:
      </P>
      <CostTable
        head={["Kostenposten", "Typische Kosten"]}
        rows={[
          ["Installation durch Elektriker (Standard)", "500 – 1.500 €"],
          ["Kabelweg (pro Meter)", "15 – 40 €/m"],
          ["Wanddurchbruch / Außenverlegung", "200 – 600 €"],
          ["Standfuß (freistehende Montage)", "200 – 500 €"],
          ["Zählerschrank modernisieren", "500 – 2.000 €"],
          ["FI-/LS-Schutzschalter", "100 – 250 € (oft inkl.)"],
        ]}
      />

      <H2 id="11-oder-22">11 kW oder 22 kW – welche Ladeleistung?</H2>
      <P>
        Für das Einfamilienhaus ist eine <strong>11-kW-Wallbox</strong> meist die
        richtige Wahl: Sie lädt ein E-Auto über Nacht voll, ist genehmigungsfrei
        und günstiger. Eine <strong>22-kW-Wallbox</strong> lädt doppelt so schnell,
        ist aber genehmigungspflichtig, braucht einen stärkeren Hausanschluss und
        kostet mehr – sinnvoll bei mehreren Fahrzeugen oder sehr kurzen
        Ladezeiten.
      </P>

      <H2 id="anmeldung">Anmeldung & Genehmigung (in Hamburg)</H2>
      <P>
        Jede Wallbox muss beim Netzbetreiber angemeldet werden. Bis 11 kW ist sie{" "}
        <strong>meldepflichtig</strong> (genehmigungsfrei), ab 22 kW{" "}
        <strong>genehmigungspflichtig</strong>. In Hamburg läuft die Anmeldung über
        die <strong>Hamburger Energienetze</strong>; den Antrag stellt in der Regel
        der ausführende Elektriker für Sie. Ohne ordnungsgemäße Anmeldung drohen
        Probleme mit dem Netzbetreiber und dem Versicherungsschutz.
      </P>

      <H2 id="foerderung">Förderung & Steuer 2026</H2>
      <P>
        Eine bundesweite KfW-Förderung für private Wallboxen gibt es seit dem
        Auslaufen des Programms 442 nicht mehr. Einige Bundesländer, Kommunen und
        Stadtwerke fördern jedoch weiterhin – ein Blick auf die aktuellen Programme
        Ihres Energieversorgers lohnt sich. Unabhängig davon können Sie über{" "}
        <strong>§ 35a EStG</strong> 20 % der Arbeitskosten (max. 1.200 € pro Jahr)
        als Handwerkerleistung von der Steuer absetzen.
      </P>

      <CtaBand
        headline="Lieber gleich konkrete Preise?"
        text="Statt mit Richtwerten zu rechnen, erhalten Sie von uns kostenlos und unverbindlich passende Angebote geprüfter Elektriker aus Ihrer Region."
        ctaLabel="Elektriker anfragen"
      />

      <H2 id="pv">Wallbox mit Photovoltaik kombinieren</H2>
      <P>
        Mit einer smarten Wallbox und einer PV-Anlage laden Sie Ihr E-Auto mit
        eigenem Solarstrom (Überschussladen). Das senkt die laufenden Kosten
        deutlich, erfordert aber eine Wallbox mit entsprechender Funktion und ein
        passendes Energiemanagement. Mehr dazu, wenn Sie ohnehin über Solar
        nachdenken – fragen Sie es einfach mit an.
      </P>

      <H2 id="ablauf">Ablauf & Dauer der Installation</H2>
      <P>
        Nach Anfrage prüft der Elektriker vor Ort Sicherungskasten, Kabelweg und
        Montageort und erstellt ein Angebot. Die eigentliche Montage dauert meist{" "}
        <strong>einen halben bis ganzen Tag</strong>. Inklusive Anmeldung beim
        Netzbetreiber ist die Wallbox in der Regel innerhalb weniger Wochen
        betriebsbereit.
      </P>

      <H2 id="preisbeispiele">Preisbeispiele: drei Installationen im Vergleich</H2>
      <CostTable
        head={["Fall", "Beschreibung", "Gesamtkosten"]}
        rows={[
          ["Einfach", "11 kW Basis, Garage, kurzer Kabelweg, Wandmontage", "1.000 – 1.500 €"],
          ["Mittel", "11 kW Smart, mittlerer Kabelweg, Wanddurchbruch", "1.800 – 2.800 €"],
          ["Aufwändig", "22 kW Smart, langer Kabelweg + neuer Zählerschrank", "3.500 – 5.500 €"],
        ]}
      />

      <H2 id="sparen">So sparen Sie bei der Wallbox</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>Mehrere Angebote vergleichen – die Installationspreise variieren stark.</li>
        <li>Wallbox nah am Sicherungskasten platzieren – kurzer Kabelweg spart am meisten.</li>
        <li>11 kW statt 22 kW wählen, wenn Sie über Nacht laden.</li>
        <li>Landes- oder Stadtwerke-Förderung prüfen, bevor Sie beauftragen.</li>
        <li>20 % der Montagekosten über § 35a von der Steuer zurückholen.</li>
      </ul>

      <H2 id="hamburg">Wallbox in Hamburg &amp; Umgebung installieren lassen</H2>
      <P>
        In Hamburg liegen die Installationskosten durch den höheren
        Handwerker-Stundensatz meist etwas über dem Bundesschnitt; die Anmeldung
        erfolgt über die Hamburger Energienetze. Über unsere Vermittlung erhalten
        Sie Angebote geprüfter Elektriker aus Niendorf und Umgebung – so
        vergleichen Sie reale Preise statt Richtwerte. Planen Sie die Wallbox am
        Stellplatz? Dann passt auch unser Ratgeber{" "}
        <Link
          href="/ratgeber/carport-bauen-lassen-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Carport bauen lassen: Kosten
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Wallbox-Kosten" />

      <CtaBand
        headline="Jetzt passende Elektriker für Ihre Wallbox finden"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Elektriker aus Hamburg und Umgebung, die Ihnen ein konkretes Angebot machen."
        ctaLabel="Elektriker anfragen"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen kein individuelles Angebot. Tatsächliche Kosten hängen von
        Kabelweg, Zustand der Hausinstallation, Ladeleistung und Region ab.
      </p>
    </RatgeberArticle>
  );
}
