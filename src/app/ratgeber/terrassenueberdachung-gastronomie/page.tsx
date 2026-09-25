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
import { GastroTerrassenCalculator } from "@/components/gastro-terrassen-calculator";

export const metadata: Metadata = {
  title: "Außengastronomie überdachen: Kosten 2026, Genehmigung & Rechner",
  description:
    "Was kostet eine Terrassenüberdachung für Restaurant, Café oder Bar? Netto-Preise 2026 für Glas-, Falt- und Lamellendach, Markise und Pergola-Markise, Außengastronomie in Hamburg beantragen, Windlast, Abschreibung – mit Kosten- und Amortisationsrechner.",
  alternates: { canonical: "/ratgeber/terrassenueberdachung-gastronomie" },
  openGraph: {
    title: "Außengastronomie überdachen: Kosten & Amortisation",
    description:
      "Netto-Preise nach Dachsystem und Größe, Außengastronomie und Genehmigung in Hamburg und ein Rechner, der zeigt, wann sich das Dach bezahlt macht.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet eine Terrassenüberdachung für die Gastronomie?",
    a: "Eine gewerbliche Terrassenüberdachung kostet 2026 meist zwischen 15.000 € und 80.000 € netto (ohne Vorsteuerabzug, etwa bei der Kleinunternehmerregelung, kommen 19 % MwSt. obendrauf). Eine kleine Café-Terrasse mit Glasdach (ca. 15 m²) beginnt bei rund 12.000 €, ein Glasdach für 30–40 m² liegt bei etwa 25.000–40.000 €. Lamellendächer mit Glas-Schiebeelementen für 60 m² erreichen 80.000 € und mehr.",
  },
  {
    q: "Was kostet eine Gastro-Überdachung pro Quadratmeter?",
    a: "Als Richtwert gelten netto rund 600 €/m² für ein Glasdach (Aluminium + VSG), 750 €/m² für ein textiles Faltdach und 1.000 €/m² für ein Lamellendach – jeweils inklusive Montage. Seitenelemente, Fundamente, Heizung und Statik kommen hinzu und machen oft 30–60 % der Gesamtsumme aus.",
  },
  {
    q: "Braucht eine Terrassenüberdachung für ein Restaurant eine Baugenehmigung?",
    a: "Nicht immer, aber meistens. Bleibt die Überdachung offen, unter 30 m² Grundfläche und 3 m Tiefe und ändert sich an der genehmigten Nutzung nichts, greift auch für Gastro-Betriebe die Hamburger Verfahrensfreiheit. Ein Bauantrag inklusive Statik wird nötig, sobald die Anlage größer ist, mit Seitenelementen geschlossen wird, die Gastfläche erweitert wird (Nutzungsänderung) oder Sonderbau-, Brandschutz- und Rettungsweg-Vorgaben greifen. Für den Bauantrag sollten Sie 6–12 Wochen einplanen; klären Sie den Fall vorab mit dem Bezirksamt.",
  },
  {
    q: "Darf ich eine feste Überdachung auf dem Gehweg bauen?",
    a: "Die Sondernutzungserlaubnis für Außengastronomie in Hamburg deckt Tische, Stühle, Schirme und Heizgeräte auf öffentlichem Grund – feste bauliche Anlagen wie verankerte Pergolen oder Pavillons sind davon nicht erfasst und brauchen zusätzlich eine Genehmigung nach Bauordnung. In der Praxis wird eine feste Überdachung auf dem Gehweg selten genehmigt; realistisch sind Schirme, Markisen an der Fassade oder eine Überdachung auf eigenem Grund.",
  },
  {
    q: "Wie beantrage ich Außengastronomie in Hamburg?",
    a: "Für Tische, Stühle, Schirme und Heizgeräte auf dem Gehweg brauchen Sie eine Sondernutzungserlaubnis nach § 19 Hamburgisches Wegegesetz. Den Antrag stellen Sie beim Bezirksamt, in dem Ihr Betrieb liegt – online über Hamburg Service oder schriftlich – mit maßstabsgerechtem Lageplan, Fotos und Gaststättenerlaubnis bzw. Gewerbeanmeldung. Die Bearbeitung dauert meist 4 Wochen bis 3 Monate; die Gebühr richtet sich nach Fläche, Dauer und Lage der Straße.",
  },
  {
    q: "Brauche ich für Außengastronomie auf dem Privatgrundstück eine Genehmigung?",
    a: "Eine Sondernutzungserlaubnis nicht – die gilt nur für öffentlichen Grund. Wird auf dem eigenen oder gepachteten Grundstück aber eine bisher nicht gastronomisch genutzte Fläche zur Gastfläche, ist das eine Nutzungsänderung, die in der Regel eine Baugenehmigung braucht. Für eine Überdachung gelten zusätzlich die Hamburger Regeln zu Größe und Verfahrensfreiheit.",
  },
  {
    q: "Was kostet eine Markise oder Pergola-Markise für die Gastronomie?",
    a: "Freistehende, motorisierte Doppelmarkisen gibt es ab rund 3.300 € netto, wasserdichte Pergola-Markisen ab etwa 4.600 € netto – jeweils für Standardgrößen und zuzüglich Montage (meist 500–2.000 €). Für große Terrassen werden oft mehrere Anlagen kombiniert. Anders als ein festes Dach sind Markisen auch dort möglich, wo keine bauliche Anlage erlaubt ist; achten Sie auf Windwiderstandsklasse 3 und einen Windwächter.",
  },
  {
    q: "Ab wann rechnet sich eine Gastro-Überdachung?",
    a: "Das hängt von Plätzen, zusätzlichen Öffnungstagen und Umsatz pro Gast ab. Beispiel: 32 m² (ca. 21 Plätze), 60 zusätzliche Tage, 25 € Umsatz pro Gast und 30 % Deckungsbeitrag ergeben rund 9.500 € pro Jahr – ein Glasdach für rund 28.000 € netto ist damit nach etwa drei Jahren amortisiert. Mit unserem Rechner können Sie Ihre eigenen Werte einsetzen.",
  },
  {
    q: "Wie wird eine Terrassenüberdachung in der Gastronomie abgeschrieben?",
    a: "Als Betrieb ziehen Sie die Vorsteuer ab und schreiben die Netto-Kosten über die Nutzungsdauer ab. Ob die Überdachung als eigenständiges Wirtschaftsgut (oft rund 10 Jahre) oder als Teil des Gebäudes (Gebäude-AfA über deutlich längere Zeit) gilt, hängt davon ab, wie fest sie mit dem Gebäude verbunden ist. Das sollten Sie vorab mit Ihrer Steuerberatung klären – der private Handwerkerbonus nach § 35a EStG gilt für Betriebe nicht.",
  },
  {
    q: "Welche Windwiderstandsklasse braucht eine Gastro-Überdachung?",
    a: "Bei Publikumsverkehr ist die Windlast ein Haftungsthema. Markisen und textile Dächer werden nach Windwiderstandsklassen (WWK) eingestuft: WWK 2 (bis ca. 37 km/h) reicht nur für geschützte Innenhöfe, an offenen Straßen und in Hamburgs windigen Lagen sollten es WWK 3 oder mehr sein. Glas- und Lamellendächer werden statisch auf Wind- und Schneelast des Standorts bemessen.",
  },
  {
    q: "Darf unter einer Terrassenüberdachung geraucht werden?",
    a: "Das Hamburgische Passivraucherschutzgesetz gilt in Gebäuden und sonstigen vollständig umschlossenen Räumen. Eine überdachte Terrasse mit offenen Seiten bleibt Außenbereich. Wer dagegen rundum Glas-Schiebeelemente schließt, schafft im geschlossenen Zustand faktisch einen Raum – dann kann das Rauchverbot greifen. Planen Sie Seitenelemente deshalb so, dass sich die Terrasse im Betrieb öffnen lässt.",
  },
];

export default function TerrassenueberdachungGastronomiePage() {
  return (
    <RatgeberArticle
      title={
        <>
          Terrassen&shy;überdachung
          <br />
          für die Außen&shy;gastronomie
        </>
      }
      updated="September 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Terrassenüberdachung Gastronomie",
          href: "/ratgeber/terrassenueberdachung-gastronomie",
        },
      ]}
    >
      <TlDr>
        Eine Terrassenüberdachung für die Außengastronomie kostet 2026 meist{" "}
        <strong>15.000–80.000 € netto</strong>. Ein Glasdach für eine 30–40 m²
        große Terrasse liegt bei <strong>25.000–40.000 €</strong>, ein
        Lamellendach mit Glas-Seiten für 60 m² bei <strong>80.000 € und mehr</strong>.
        Anders als beim Privathaus ist fast immer ein Bauantrag mit Statik nötig.
        Bei rund 60 zusätzlichen Öffnungstagen im Jahr ist ein Glasdach oft nach{" "}
        <strong>2–4 Jahren</strong> bezahlt, Lösungen mit Seitenelementen und
        Heizung nach 4–7 Jahren.
      </TlDr>

      {/* Interactive cost + payback calculator */}
      <section
        id="rechner"
        aria-label="Gastro-Terrassenüberdachung-Rechner"
        className="mt-10"
      >
        <p className="label text-accent">Kosten- & Amortisationsrechner</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
          Was kostet Ihr Gastro-Terrassendach – und wann ist es bezahlt?
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Größe, Dachsystem und Ausstattung wählen, dazu Öffnungstage und Umsatz
          pro Gast – der Rechner zeigt Investition (netto) und Amortisationszeit.
        </p>
        <GastroTerrassenCalculator />
      </section>

      <H2 id="kosten">
        Was kostet eine Terrassenüberdachung für Restaurant oder Café?
      </H2>
      <P>
        Gastro-Überdachungen sind teurer pro Quadratmeter als private
        Terrassendächer: Sie sind größer gespannt, müssen bei Publikumsverkehr
        höhere Wind- und Schneelasten sicher tragen und werden fast immer mit
        Statik und Bauantrag geplant. Alle Preise in diesem Ratgeber sind{" "}
        <strong>netto</strong> – vorsteuerabzugsberechtigte Betriebe holen sich
        die Mehrwertsteuer zurück. Wer die Kleinunternehmerregelung nutzt, kann
        das nicht: Für ihn kommen <strong>19 % obendrauf</strong>, und die
        Amortisation dauert entsprechend länger.
      </P>
      <CostTable
        head={["Terrassengröße", "Typische Lösung", "Kosten netto"]}
        rows={[
          ["Kleine Café-Terrasse (ca. 15 m²)", "Glasdach an der Fassade, Seiten offen", "12.000 – 18.000 €"],
          ["Bistro-Terrasse (30–40 m²)", "Glasdach mit Beleuchtung", "25.000 – 40.000 €"],
          ["Restaurant-Terrasse (40–50 m²)", "Glas- oder Faltdach mit ZIP-Screens & Heizung", "45.000 – 80.000 €"],
          ["Große Terrasse (60 m²)", "Lamellendach mit Glas-Schiebeelementen", "80.000 – 130.000 €"],
        ]}
      />

      <H2 id="dachsysteme">
        Glasdach, Faltdach oder Lamellendach – welches System passt?
      </H2>
      <P>
        Das Dachsystem bestimmt den Quadratmeterpreis und den Betrieb: Ein
        Glasdach ist dauerhaft dicht und hell, ein Faltdach lässt sich an
        Sonnentagen komplett einfahren, ein Lamellendach reguliert Licht und
        Luft stufenlos.
      </P>
      <CostTable
        head={["Dachsystem", "Netto pro m² inkl. Montage", "Stärken im Gastro-Betrieb"]}
        rows={[
          ["Glasdach (Alu + VSG)", "ca. 500 – 700 €", "ganzjährig dicht, hell, wartungsarm; Beschattung separat"],
          ["Faltdach (Textil)", "ca. 650 – 850 €", "bei Sonne komplett offen, schnelle Montage; Windklasse beachten"],
          ["Lamellendach (Alu)", "ca. 900 – 1.100 €", "Licht & Luft regelbar, hohe Schneelast, Premium-Optik"],
        ]}
      />

      <H2 id="alternativen">
        Markise, Pergola-Markise oder Wintergarten – günstigere Alternativen?
      </H2>
      <P>
        Nicht jede Außengastronomie braucht ein festes Dach. Eine motorisierte
        Markise oder Pergola-Markise ist deutlich günstiger und oft die einzige
        Lösung, wo keine feste Anlage erlaubt ist. Dafür schützt sie weniger bei
        Wind und Schlagregen – achten Sie auf die Windwiderstandsklasse und
        einen Windwächter. Ein Kaltwintergarten ist dagegen ein geschlossener
        Raum: Er braucht fast immer einen Bauantrag, und drinnen gilt das
        Rauchverbot.
      </P>
      <CostTable
        head={["Lösung", "Richtpreis", "Wann sinnvoll"]}
        rows={[
          ["Freistehende Markise (Doppelmarkise, motorisiert)", "ab ca. 3.300 € zzgl. Montage", "Plätze ohne Fassade, z. B. im Hof oder Garten"],
          ["Pergola-Markise (wasserdichtes Tuch, Stützen)", "ab ca. 4.600 € zzgl. Montage (500 – 2.000 €)", "Regenschutz zum kleinen Preis, Tuch einfahrbar"],
          ["Kaltwintergarten (unbeheizt)", "ca. 500 – 1.000 €/m²", "Saison verlängern, wenn eine geschlossene Fläche genehmigt wird"],
        ]}
      />
      <P>
        Die Markisen-Preise sind Einstiegspreise der Hersteller für
        Standardgrößen (netto gerundet); für große Gastro-Terrassen werden oft
        mehrere Anlagen kombiniert. Die Wintergarten-Spanne ist ein Richtwert –
        Details zu Glasanbauten im Ratgeber{" "}
        <Link
          href="/ratgeber/wintergarten-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wintergarten: Kosten
        </Link>
        .
      </P>

      <H2 id="zusatzkosten">Welche Zusatzkosten kommen dazu?</H2>
      <P>
        Der Dachpreis ist nur ein Teil der Rechnung. Ganzjahresbetrieb entsteht
        erst mit Seitenelementen und Wärme – und diese Posten machen oft 30–60 %
        der Investition aus:
      </P>
      <CostTable
        head={["Kostenposten", "Typische Kosten netto"]}
        rows={[
          ["ZIP-Screens (Senkrechtmarkise) je laufender Meter", "500 – 800 €"],
          ["Glas-Schiebeelemente je laufender Meter", "900 – 1.300 €"],
          ["Punktfundament je Stütze", "300 – 500 €"],
          ["Heizstrahler inkl. Elektroanschluss (je Gerät)", "500 – 900 €"],
          ["LED-Beleuchtung", "25 – 45 €/m²"],
          ["Unterglas-Beschattung", "70 – 110 €/m²"],
          ["Statik, Bauantrag & Gebühren", "1.500 – 3.500 €"],
        ]}
      />

      <CtaBand
        headline="Konkrete Angebote statt Richtwerte?"
        text="Schildern Sie kurz Terrasse und Betrieb – wir vermitteln Ihnen kostenlos geprüfte Fachbetriebe aus Hamburg, die gewerbliche Überdachungen inklusive Statik und Bauantrag umsetzen."
        ctaLabel="Angebote anfragen"
        service="Terrassenüberdachung Gastronomie"
        source="gastro-terrassen-page"
      />

      <H2 id="amortisation">Ab wann rechnet sich eine Gastro-Überdachung?</H2>
      <P>
        Eine Überdachung bringt keine neuen Plätze, sondern{" "}
        <strong>zusätzliche nutzbare Tage</strong>: Regentage im Sommer, frühe
        Frühlings- und späte Herbstabende. Für eine ehrliche Rechnung zählt
        nicht der Umsatz, sondern der Deckungsbeitrag – also was nach Wareneinsatz
        und Personal übrig bleibt:
      </P>
      <CostTable
        head={["Rechenschritt", "Beispiel (32 m² Bistro-Terrasse)"]}
        rows={[
          ["Plätze (ca. 1,5 m² pro Platz)", "21 Plätze"],
          ["Gäste pro Platz und Tag (2 Belegungen × 50 %)", "1"],
          ["Umsatz pro Gast", "25 €"],
          ["Zusätzliche Öffnungstage pro Jahr", "60"],
          ["Mehrumsatz pro Jahr", "31.500 €"],
          ["Deckungsbeitrag (30 %)", "ca. 9.500 €"],
          ["Investition Glasdach inkl. Statik (netto)", "ca. 28.000 €"],
          ["Amortisation", "ca. 3 Jahre"],
        ]}
      />
      <P>
        Nicht eingerechnet sind Effekte, die schwer zu beziffern, aber real sind:
        Stammgäste, die auch bei unsicherem Wetter reservieren, weniger
        Wetterschäden an Möbeln und ein Außenbereich, der als Aushängeschild
        wirkt. Dagegen stehen laufende Kosten für Heizung, Strom und Reinigung.
      </P>

      <H2 id="genehmigung">
        Genehmigung in Hamburg: Was brauchen Gastronomen?
      </H2>
      <P>
        In Hamburg sind Terrassenüberdachungen bis 30 m² Grundfläche und 3 m
        Tiefe häufig verfahrensfrei – das gilt auch für einen Gastro-Betrieb,
        solange das Dach offen bleibt, innerhalb dieser Maße liegt und sich an
        der genehmigten Nutzung nichts ändert. Ein{" "}
        <strong>Bauantrag inklusive Statik</strong> wird dagegen typischerweise
        nötig, wenn mindestens einer dieser Punkte zutrifft:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>Die Überdachung ist größer als 30 m² oder tiefer als 3 m.</li>
        <li>
          Sie wird mit Seitenelementen geschlossen – dann entsteht faktisch ein
          Raum statt einer Überdachung.
        </li>
        <li>
          Die Gastfläche wird erweitert, etwa auf eine bisher nicht gastronomisch
          genutzte Fläche – das ist eine Nutzungsänderung.
        </li>
        <li>
          Der Betrieb fällt als Sonderbau unter strengere Vorgaben (in Gebäuden
          ab mehr als 40 Gastplätzen), oder Brandschutz und Rettungswege sind
          betroffen.
        </li>
      </ul>
      <P>
        Für den Bauantrag sollten Sie 6–12 Wochen einplanen. Weil die Grenzfälle
        hier eng beieinander liegen, lohnt vorab ein kurzer Anruf beim
        Bezirksamt – das kostet nichts und erspart im Zweifel einen Rückbau.
      </P>

      <H2 id="aussengastronomie-beantragen">
        Wie beantrage ich Außengastronomie in Hamburg?
      </H2>
      <P>
        Entscheidend ist, wem die Fläche gehört. <strong>Auf dem Gehweg</strong>{" "}
        und anderem öffentlichem Grund brauchen Sie eine{" "}
        <strong>Sondernutzungserlaubnis</strong> nach § 19 Hamburgisches
        Wegegesetz. Sie deckt Tische, Stühle, Schirme, Pflanzkübel und
        Heizgeräte – feste bauliche Anlagen wie verankerte Pergolen oder
        Pavillons dagegen nicht, dafür ist zusätzlich eine Baugenehmigung nötig.
        Eine feste Überdachung ist deshalb realistisch nur auf eigenem oder
        gepachtetem Grund; auf dem Gehweg bleiben meist Schirme oder eine
        Markise an der Fassade.
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Zuständig:</strong> das Bezirksamt, in dem Ihr Betrieb liegt
          – Antrag online über Hamburg Service oder schriftlich.
        </li>
        <li>
          <strong>Unterlagen:</strong> maßstabsgerechter Lageplan mit
          Möblierung, aktuelle Fotos, Gaststättenerlaubnis bzw.
          Gewerbeanmeldung, bei Heizgeräten Sicherheitsnachweise.
        </li>
        <li>
          <strong>Dauer:</strong> je nach Umfang meist 4 Wochen bis 3 Monate.
          Erteilt wird die Erlaubnis oft saisonal (März bis Oktober) oder
          ganzjährig mit jährlicher Verlängerung.
        </li>
        <li>
          <strong>Kosten:</strong> Verwaltungsgebühr plus Nutzungsgebühr nach
          Fläche, Dauer und Lage der Straße (Wertstufe I–IV).
        </li>
      </ul>
      <P>
        <strong>Auf dem Privatgrundstück</strong> entfällt die
        Sondernutzungserlaubnis. Wird dort aber eine bisher nicht
        gastronomisch genutzte Fläche zur Gastfläche, ist das eine
        Nutzungsänderung – und die braucht in der Regel eine Baugenehmigung
        (siehe oben).
      </P>

      <H2 id="windlast">Windlast & Sicherheit bei Publikumsverkehr</H2>
      <P>
        Unter einem Gastro-Dach sitzen Gäste – ein Schaden durch Sturm oder
        Schneelast ist deshalb ein Haftungsthema. Glas- und Lamellendächer werden
        statisch für den konkreten Standort bemessen. Bei Markisen, ZIP-Screens
        und textilen Dächern zählt die <strong>Windwiderstandsklasse</strong>:
        WWK 2 (bis ca. 37 km/h) reicht nur für geschützte Innenhöfe, an offenen
        Straßen und in Elbnähe sollten es WWK 3 oder mehr sein. Klären Sie
        außerdem, wer das Dach bei Sturm einfährt – automatische Windwächter
        nehmen dem Personal diese Aufgabe ab.
      </P>

      <H2 id="rauchen">Darf unter der Überdachung geraucht werden?</H2>
      <P>
        Das Hamburgische Passivraucherschutzgesetz gilt in Gebäuden und{" "}
        <strong>vollständig umschlossenen Räumen</strong>. Eine überdachte
        Terrasse mit offenen Seiten bleibt Außenbereich. Wer rundum
        Glas-Schiebeelemente schließt, schafft im geschlossenen Zustand dagegen
        faktisch einen Raum – dann kann das Rauchverbot greifen. Das spricht
        für Seitenelemente, die sich im Betrieb teilweise öffnen lassen, oder
        für eine bewusst offene Seite.
      </P>

      <H2 id="steuer">Abschreibung & Steuer: So rechnen Betriebe</H2>
      <P>
        Als Betrieb ziehen Sie die Mehrwertsteuer als Vorsteuer ab und schreiben
        die Netto-Kosten über die Nutzungsdauer ab. Entscheidend ist die
        Einordnung: Eine eigenständige Überdachung wird oft über rund 10 Jahre
        abgeschrieben, eine fest ins Gebäude integrierte Konstruktion kann dagegen
        als Gebäudebestandteil gelten und deutlich länger laufen. Klären Sie das
        vor der Auftragsvergabe mit Ihrer Steuerberatung. Der private
        Handwerkerbonus nach § 35a EStG gilt für Betriebe nicht. Für eine
        Überdachung am Privathaus hilft unser Ratgeber{" "}
        <Link
          href="/ratgeber/terrassenueberdachung-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Terrassenüberdachung: Kosten
        </Link>
        .
      </P>

      <H2 id="ablauf">Ablauf: Von der Anfrage bis zur ersten Saison</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Aufmaß & Beratung vor Ort</strong> – Fassade, Untergrund,
          Entwässerung und Wind-Exposition prüfen.
        </li>
        <li>
          <strong>Planung & Statik</strong> – System, Seitenelemente und
          Heizung festlegen, Statik rechnen lassen.
        </li>
        <li>
          <strong>Bauantrag</strong> – 6–12 Wochen einplanen; bei gepachteten
          Flächen die Zustimmung des Eigentümers einholen.
        </li>
        <li>
          <strong>Sondernutzung</strong> – nur für Plätze auf dem Gehweg; beim
          Bezirksamt 4 Wochen bis 3 Monate einplanen.
        </li>
        <li>
          <strong>Fertigung & Montage</strong> – Lieferzeiten von 4–10 Wochen
          sind üblich, die Montage selbst dauert meist 2–5 Tage.
        </li>
      </ul>
      <P>
        Der beste Zeitpunkt für die Anfrage ist deshalb der{" "}
        <strong>Herbst oder Winter</strong>: Dann sind Genehmigung und Montage
        vor der nächsten Saison erledigt, statt mitten im Hochbetrieb.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zur Gastro-Terrassenüberdachung" />

      <CtaBand
        headline="Jetzt Fachbetriebe für Ihre Gastro-Terrasse finden"
        text="Beschreiben Sie Ihre Terrasse und Ihren Betrieb – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung, die Ihnen ein konkretes Angebot machen."
        ctaLabel="Angebote anfragen"
        service="Terrassenüberdachung Gastronomie"
        source="gastro-terrassen-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preisangaben sind unverbindliche Netto-Richtwerte (Stand: September
        2026) und ersetzen weder ein individuelles Angebot noch eine Rechts- oder
        Steuerberatung. Tatsächliche Kosten hängen von Größe, System, Statik,
        Untergrund und Genehmigung ab.
      </p>
    </RatgeberArticle>
  );
}
