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
  title: "Balkonkraftwerk 2026: Kosten, Anmeldung & was erlaubt ist",
  description:
    "Balkonkraftwerk 2026: Was ein Steckersolar-Set kostet (ab ~300 €, 0 % MwSt), die vereinfachte Anmeldung (nur Marktstammdatenregister), die 800-Watt-Regel, das neue Mieterrecht (§ 554 BGB) und was die Mini-PV-Anlage im Jahr bringt. Herstellerneutral, mit Hamburg-Bezug.",
  alternates: { canonical: "/ratgeber/balkonkraftwerk" },
  openGraph: {
    title: "Balkonkraftwerk 2026: Kosten, Anmeldung & was erlaubt ist",
    description:
      "Kosten ab ~300 €, Anmeldung nur im Marktstammdatenregister, 800-Watt-Regel & Mieterrecht.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet ein Balkonkraftwerk?",
    a: "Ein einsatzfertiges Set mit zwei Modulen und 800-Watt-Wechselrichter kostet 2026 etwa 300–700 €. Mit Speicher werden es rund 800–1.500 €. Auf den Kauf fällt der Nullsteuersatz an (0 % Mehrwertsteuer). Halterung für Geländer, Flachdach oder Fassade ist je nach Set schon dabei oder kostet 30–150 € extra.",
  },
  {
    q: "Muss ich ein Balkonkraftwerk anmelden?",
    a: "Ja, aber nur an einer Stelle: im Marktstammdatenregister der Bundesnetzagentur (kostenlos, online, ca. 5–10 Minuten). Seit dem Solarpaket I (16. Mai 2024) entfällt die früher zusätzlich nötige Anmeldung beim Netzbetreiber komplett. Einen alten, rückwärtslaufenden Zähler tauscht der Netzbetreiber bei Gelegenheit gegen einen Zweirichtungszähler – bis dahin wird der Betrieb geduldet.",
  },
  {
    q: "Wie viel Watt sind erlaubt – 600 oder 800?",
    a: "Seit dem Solarpaket I (2024) sind 800 Watt Wechselrichterleistung erlaubt (vorher 600 W). Die installierte Modulleistung darf bis zu 2.000 Wp betragen. Beim Anschluss über eine normale Schuko-Steckdose gilt eine Obergrenze von 960 Wp Modulleistung – für die üblichen 2-Modul-Sets (rund 800–860 Wp) passt das problemlos.",
  },
  {
    q: "Darf mein Vermieter ein Balkonkraftwerk verbieten?",
    a: "In der Regel nicht pauschal. Seit 2024 ist das Balkonkraftwerk als privilegierte Maßnahme in § 554 BGB (Miete) und § 20 WEG (Eigentum) verankert: Mieter und Eigentümer haben grundsätzlich einen Anspruch auf Zustimmung. Vermieter bzw. die Eigentümergemeinschaft dürfen aber Vorgaben zur Ausführung machen (z. B. zur Befestigung). Best Practice: vorab schriftlich informieren.",
  },
  {
    q: "Was bringt ein Balkonkraftwerk im Jahr?",
    a: "Ein gut ausgerichtetes 800-Watt-Set liefert grob 600–800 kWh pro Jahr. Wenn Sie den Strom überwiegend selbst verbrauchen, spart das rund 150–250 € jährlich – das Set hat sich oft in 3–6 Jahren bezahlt. Entscheidend ist, dass tagsüber Grundlast läuft (Kühlschrank, Router, Standby), die den Strom direkt nutzt.",
  },
  {
    q: "Bekomme ich Geld für eingespeisten Strom?",
    a: "Theoretisch ja, praktisch lohnt es sich beim Balkonkraftwerk fast nie: Der eingespeiste Überschuss ist gering, und der bürokratische Aufwand übersteigt die paar Cent Vergütung. Die meisten speisen den Überschuss unentgeltlich ein. Der Gewinn kommt aus dem Eigenverbrauch, nicht aus der Einspeisung.",
  },
];

export default function BalkonkraftwerkPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Balkonkraftwerk 2026:
          <br />
          Kosten &amp; Regeln
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Balkonkraftwerk",
          href: "/ratgeber/balkonkraftwerk",
        },
      ]}
    >
      <TlDr>
        Ein Balkonkraftwerk (Steckersolar) kostet 2026 etwa{" "}
        <strong>300–700 €</strong> (0 % MwSt), mit Speicher{" "}
        <strong>800–1.500 €</strong>. Erlaubt sind seit dem Solarpaket I{" "}
        <strong>800 Watt</strong> Wechselrichterleistung; angemeldet wird{" "}
        <strong>nur noch im Marktstammdatenregister</strong> (nicht mehr beim
        Netzbetreiber). Ein 800-W-Set bringt ~600–800 kWh und spart ~150–250 € im
        Jahr. Mieter haben seit 2024 einen <strong>Anspruch</strong> auf Zustimmung.
      </TlDr>

      <H2 id="was-kostet">Was kostet ein Balkonkraftwerk?</H2>
      <P>
        Ein Balkonkraftwerk ist die günstigste Art, eigenen Solarstrom zu
        erzeugen – ein steckerfertiges Set, das Sie selbst anbringen und
        einstecken. Auf den Kauf fällt der <strong>Nullsteuersatz</strong> an
        (0 % Mehrwertsteuer):
      </P>
      <CostTable
        head={["Variante", "Kosten (0 % MwSt)", "Ertrag / Jahr"]}
        rows={[
          ["800-W-Set (2 Module)", "300 – 700 €", "~600 – 800 kWh"],
          ["Set mit Speicher", "800 – 1.500 €", "höherer Eigenverbrauch"],
          ["Halterung (Geländer/Flachdach)", "0 – 150 €", "je nach Set inkl."],
        ]}
      />

      <H2 id="anmeldung">Anmeldung: nur noch das Marktstammdatenregister</H2>
      <P>
        Das hat sich stark vereinfacht. Seit dem <strong>Solarpaket I</strong>{" "}
        (16. Mai 2024) müssen Sie das Balkonkraftwerk nur noch an einer Stelle
        anmelden: im <strong>Marktstammdatenregister</strong> der Bundesnetzagentur –
        kostenlos, online, in etwa 5–10 Minuten. Die früher zusätzlich nötige{" "}
        <strong>Anmeldung beim Netzbetreiber entfällt</strong> komplett. Haben Sie
        noch einen alten, rückwärtslaufenden Stromzähler, tauscht ihn der
        Netzbetreiber bei Gelegenheit gegen einen Zweirichtungszähler; bis dahin
        wird der Betrieb geduldet.
      </P>

      <H2 id="regeln">800 Watt, Schuko &amp; Co.: die Regeln 2026</H2>
      <CostTable
        head={["Regel 2026", "Wert"]}
        rows={[
          ["Wechselrichter-Leistung (max.)", "800 Watt"],
          ["Modulleistung (max.)", "2.000 Wp"],
          ["Anschluss", "Schuko-Steckdose erlaubt (mit NA-Schutz)"],
          ["Schuko: max. Modulleistung", "960 Wp"],
          ["Anmeldung", "nur Marktstammdatenregister"],
          ["Netzbetreiber-Anmeldung", "entfällt"],
        ]}
      />
      <P>
        Der Anschluss über eine normale <strong>Schuko-Steckdose</strong> ist
        zulässig, sofern eine Abschaltautomatik (NA-Schutz) integriert ist – bei
        modernen Geräten Standard. Eine fest installierte Einspeisesteckdose
        (Wieland) ist sicherer, aber kein Muss; dafür – oder für einen eigenen
        Stromkreis – lohnt ein kurzer Elektriker-Check.
      </P>

      <H2 id="mietrecht">Dürfen Mieter ein Balkonkraftwerk installieren?</H2>
      <P>
        Ja – und das ist seit 2024 deutlich gestärkt. Das Balkonkraftwerk ist als{" "}
        <strong>privilegierte Maßnahme</strong> in <strong>§ 554 BGB</strong>{" "}
        (Mietrecht) und <strong>§ 20 WEG</strong> (Eigentum) verankert: Mieter und
        Wohnungseigentümer haben grundsätzlich einen <strong>Anspruch auf
        Zustimmung</strong>. Vermieter oder die Eigentümergemeinschaft können nicht
        mehr pauschal ablehnen, dürfen aber <strong>Vorgaben zur Ausführung</strong>{" "}
        machen – etwa zur Befestigung oder zum optischen Erscheinungsbild. Als Best
        Practice gilt: den Vermieter vorab schriftlich informieren und eine
        fachgerechte, rückbaubare Montage zusagen.
      </P>

      <H2 id="ertrag">Was bringt ein Balkonkraftwerk – und lohnt es sich?</H2>
      <P>
        Ein gut nach Süden, Osten oder Westen ausgerichtetes 800-Watt-Set liefert
        grob <strong>600–800 kWh pro Jahr</strong>. Wer den Strom überwiegend selbst
        verbraucht, spart rund <strong>150–250 € jährlich</strong> – damit ist das
        Set oft in <strong>3–6 Jahren</strong> bezahlt. Der Schlüssel ist der{" "}
        <strong>Eigenverbrauch</strong>: Es zählt der Strom, der tagsüber direkt
        genutzt wird (Kühlschrank, Router, Homeoffice). Für eingespeisten Überschuss
        gibt es theoretisch eine Vergütung, praktisch lohnt der Aufwand beim
        Balkonkraftwerk fast nie – die meisten speisen ihn unentgeltlich ein.
      </P>

      <CtaBand
        headline="Mehr als Balkon? Wir vermitteln den Fachbetrieb."
        text="Ein Steckersolar-Set bringen Sie selbst an. Für eine feste Einspeisesteckdose, einen eigenen Stromkreis oder gleich eine richtige Dachanlage vermitteln wir Ihnen kostenlos und unverbindlich geprüfte Elektro- und Solarbetriebe aus Ihrer Region."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik / Balkonkraftwerk"
        source="balkonkraftwerk-page"
      />

      <H2 id="foerderung">Förderung: Nullsteuersatz &amp; lokale Programme</H2>
      <P>
        Die wichtigste „Förderung“ sind die <strong>0 % Mehrwertsteuer</strong> –
        einen bundesweiten Zuschuss gibt es nicht. Auf Landes- und Kommunalebene
        fördern jedoch einzelne Programme das Balkonkraftwerk direkt (in Berlin etwa{" "}
        <em>SolarPLUS</em> mit bis zu 500 €). Diese Programme wechseln häufig und
        sind oft schnell ausgeschöpft – für Hamburg lohnt der aktuelle Blick auf die
        Angebote der Stadt und der IFB Hamburg. Mehr zu den Steuerregeln im Ratgeber{" "}
        <Link
          href="/ratgeber/photovoltaik-foerderung"
          className="text-accent underline-offset-2 hover:underline"
        >
          Photovoltaik-Förderung
        </Link>
        .
      </P>

      <H2 id="speicher">Balkonkraftwerk mit Speicher?</H2>
      <P>
        Ein kleiner Speicher kann den Eigenverbrauch erhöhen, indem er
        Mittagsstrom in den Abend verschiebt – sinnvoll vor allem, wenn tagsüber
        wenig Grundlast läuft. Technisch sind Steckersolar-Speicher 2026 verfügbar,
        normativ ist aber noch nicht alles abschließend geregelt. Rechnen Sie die
        Mehrkosten ehrlich gegen: Oft amortisiert sich der Speicher beim
        Balkonkraftwerk langsamer als das Set selbst. Wer mehr will, fährt mit einer{" "}
        <Link
          href="/ratgeber/photovoltaik-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          richtigen PV-Anlage plus Speicher
        </Link>{" "}
        meist besser.
      </P>

      <H2 id="hamburg">Balkonkraftwerk in Hamburg</H2>
      <P>
        Gerade in Hamburgs Mietwohnungen ist das Balkonkraftwerk der einfachste
        Einstieg in die eigene Stromerzeugung – kein Dach nötig, kein großer
        Eingriff, dank § 554 BGB mit Anspruch gegenüber dem Vermieter. Den
        Stecker-Teil erledigen Sie selbst; falls Sie eine feste Einspeisesteckdose,
        einen Elektriker-Check oder den Schritt zur Dachanlage möchten, vermitteln
        wir herstellerneutral geprüfte Betriebe aus Niendorf und Umgebung – wir
        verkaufen selbst nichts.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zum Balkonkraftwerk" />

      <CtaBand
        headline="Vom Balkonkraftwerk zur eigenen Solaranlage"
        text="Sie wollen mehr als ein Stecker-Set? Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Solar- und Elektrobetriebe aus Hamburg und Umgebung."
        ctaLabel="Fachbetrieb anfragen"
        service="Photovoltaik / Balkonkraftwerk"
        source="balkonkraftwerk-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Angaben sind unverbindliche Richtwerte (Stand: Juni 2026) und ersetzen
        keine individuelle Beratung. Erträge hängen von Ausrichtung, Verschattung
        und Eigenverbrauch ab; Regeln (Leistungsgrenzen, Normen, Förderprogramme)
        können sich ändern.
      </p>
    </RatgeberArticle>
  );
}
