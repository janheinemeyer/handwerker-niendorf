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
  title: "Wärmepumpe Förderung 2026: bis zu 80 % – neue KfW-458-Regeln",
  description:
    "Wärmepumpen-Förderung nach den neuen KfW-458-Regeln (seit 21.07.2026): bis zu 70 %, bei niedrigem Einkommen bis zu 80 % Zuschuss auf max. 28.000 € Kosten. Klimabonus 16 %, gestaffelter Einkommensbonus, Familienzuschlag, Antrag Schritt für Schritt und was sich 2027 ändert.",
  alternates: { canonical: "/ratgeber/waermepumpe-foerderung" },
  openGraph: {
    title: "Wärmepumpe Förderung 2026: bis zu 80 % (KfW 458)",
    description:
      "Boni, Voraussetzungen, Antrag Schritt für Schritt & der häufigste Fehler – herstellerneutral.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Wie viel Förderung gibt es 2026 für eine Wärmepumpe?",
    a: "Über die KfW (Programm 458) bis zu 70 % Zuschuss – für Selbstnutzer mit einem zu versteuernden Haushaltseinkommen bis 30.000 € (mit Kind bis 40.000 €) sogar bis zu 80 %. Gefördert werden höchstens 28.000 € Kosten für die erste Wohneinheit, also maximal 19.600 € bzw. 22.400 € Zuschuss. Das gilt für Anträge seit dem 21.07.2026.",
  },
  {
    q: "Aus welchen Boni setzt sich die Förderung zusammen?",
    a: "Grundförderung 30 % für alle im Bestandsgebäude. Dazu für Selbstnutzer der Klimageschwindigkeitsbonus von 16 % beim Austausch einer alten Heizung (Gas und Biomasse nur, wenn sie mindestens 20 Jahre alt sind) und der Einkommensbonus: 40 % bis 30.000 €, 30 % bis 40.000 € und 10 % bis 50.000 € zu versteuerndem Haushaltseinkommen. Mit mindestens einem Kind im Haushalt steigen diese Grenzen um 10.000 € (Familienzuschlag). Der frühere Effizienzbonus ist entfallen.",
  },
  {
    q: "Wie lange gibt es die Wärmepumpen-Förderung noch?",
    a: "Die Grundförderung von 30 % hat kein angekündigtes Enddatum. Der Klimageschwindigkeitsbonus sinkt aber ab dem 01.02.2027 jedes halbe Jahr um 4 Prozentpunkte und entfällt für Anträge ab dem 01.08.2028. Auch der Höchstbetrag der förderfähigen Kosten sinkt ab 01.02.2027 halbjährlich um 750 €. Maßgeblich ist jeweils das Datum der Antragstellung – früh beantragen lohnt sich.",
  },
  {
    q: "Wer bekommt die Wärmepumpen-Förderung?",
    a: "Privatpersonen als Eigentümer von Bestandsgebäuden (Bauantrag mindestens fünf Jahre alt), ob selbst genutzt oder vermietet, über das Programm 458. Unternehmen und juristische Personen laufen über Programm 459. Die Grundförderung gilt für alle; Klimageschwindigkeits- und Einkommensbonus gibt es nur für selbstnutzende Eigentümer. Neubauten sind nicht förderfähig.",
  },
  {
    q: "Wann muss ich den Antrag stellen – vor oder nach dem Auftrag?",
    a: "Sie schließen zuerst einen Liefer- bzw. Leistungsvertrag mit dem Fachbetrieb ab, der aber eine aufschiebende oder auflösende Bedingung enthalten muss: Er wird erst mit der KfW-Förderzusage wirksam. Mit der vom Fachbetrieb erstellten Bestätigung zum Antrag (BzA) stellen Sie den Antrag über das Portal „Meine KfW“. Mit dem Einbau dürfen Sie erst nach der schriftlichen Zusage beginnen.",
  },
  {
    q: "Was ist der häufigste Fehler bei der Förderung?",
    a: "Die Reihenfolge. Wer den Auftrag ohne aufschiebende Bedingung unterschreibt oder mit dem Einbau beginnt, bevor die schriftliche Förderzusage vorliegt, verliert den kompletten Anspruch – auch wenn alles fachgerecht ausgeführt wurde. Zweithäufigster Fehler: die fehlende Fachunternehmererklärung, ohne die nicht ausgezahlt wird.",
  },
  {
    q: "KfW-Zuschuss oder Steuerbonus § 35c – was ist besser?",
    a: "Beides geht nicht für dieselbe Maßnahme. Die KfW 458 bringt bis zu 70 % (bei niedrigem Einkommen 80 %) als direkten Zuschuss und ist meist deutlich attraktiver. Der Steuerbonus nach § 35c EStG (20 % der Kosten über drei Jahre) gilt nur für selbstgenutztes Wohneigentum und ist die Alternative, wenn der KfW-Weg z. B. aus zeitlichen Gründen nicht mehr möglich ist.",
  },
];

export default function WaermepumpeFoerderungPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Wärmepumpe-Förderung
          <br />
          2026: bis zu 80 %
        </>
      }
      updated="September 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Wärmepumpe Förderung",
          href: "/ratgeber/waermepumpe-foerderung",
        },
      ]}
    >
      <TlDr>
        Für den Wärmepumpen-Einbau im Bestand gibt es 2026 über die{" "}
        <strong>KfW (Programm 458)</strong> bis zu <strong>70 % Zuschuss</strong>,
        bei niedrigem Einkommen bis zu <strong>80 %</strong> – auf höchstens
        28.000 € Kosten, also maximal <strong>19.600 € bzw. 22.400 €</strong>.
        Seit dem 21.07.2026 gelten neue Regeln: Klimabonus 16 %, gestaffelter
        Einkommensbonus mit Familienzuschlag, kein Effizienzbonus mehr.
        Entscheidend ist die <strong>Reihenfolge</strong>: erst Vertrag mit
        aufschiebender Bedingung, dann Antrag, dann Förderzusage abwarten – und{" "}
        <strong>erst danach</strong> bauen. Wer vorher startet, verliert die
        komplette Förderung.
      </TlDr>

      <H2 id="wie-viel">Wie viel Förderung gibt es 2026?</H2>
      <P>
        Zuständig ist die <strong>KfW</strong> (nicht mehr die BAFA) – für{" "}
        <strong>Privatpersonen</strong> als Eigentümer (auch WEG), ob selbst
        genutzt oder vermietet, über das <strong>Programm 458</strong>.
        Unternehmen und juristische Personen laufen dagegen über Programm 459.
        Für Privatpersonen beträgt der maximale Zuschuss <strong>70 %</strong>,
        für Selbstnutzer mit geringem Einkommen <strong>80 %</strong> – bezogen
        auf höchstens <strong>28.000 € förderfähige Kosten</strong> für die
        erste Wohneinheit. Damit sind bis zu <strong>19.600 €</strong> bzw.{" "}
        <strong>22.400 €</strong> drin. Stand: Anträge ab dem 21.07.2026 –
        bereits zugesagte Anträge sind von den Änderungen nicht betroffen. Der
        Satz setzt sich aus der Grundförderung und zwei kombinierbaren Boni
        zusammen:
      </P>
      <CostTable
        head={["Förderbaustein", "Zuschuss", "Bedingung"]}
        rows={[
          ["Grundförderung", "30 %", "Bestandsgebäude (Bauantrag ≥ 5 Jahre), für alle"],
          ["Klimageschwindigkeits-Bonus", "16 %", "Selbstnutzer, Heizungstausch (Gas/Biomasse: ≥ 20 Jahre alt); sinkt ab 02/2027"],
          ["Einkommens-Bonus", "40 % / 30 % / 10 %", "Selbstnutzer, zvE ≤ 30.000 € / 40.000 € / 50.000 € (mit Kind je +10.000 €)"],
          ["Maximal kombiniert", "70 %", "Deckel: 28.000 € Kosten → max. 19.600 €"],
          ["Maximal bei niedrigem Einkommen", "80 %", "zvE ≤ 30.000 € (mit Kind ≤ 40.000 €) → max. 22.400 €"],
        ]}
      />
      <P>
        Rechnerisch können die Bausteine mehr ergeben, die KfW kappt aber bei 70
        bzw. 80 %. Ein typischer Fall: Selbstnutzer tauschen eine 25 Jahre alte
        Gasheizung, ohne Einkommensbonus – das sind 30 % + 16 % ={" "}
        <strong>46 %</strong>, bei 25.000 € Kosten also 11.500 € Zuschuss. Was
        die Wärmepumpe vor Abzug der Förderung kostet, rechnen wir im Ratgeber{" "}
        <Link
          href="/ratgeber/waermepumpe-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe: Kosten
        </Link>{" "}
        durch.
      </P>

      <H2 id="boni">Die Boni im Detail</H2>
      <P>
        Der <strong>Klimageschwindigkeitsbonus (16 %)</strong> gilt für
        Selbstnutzer, die ihre alte, funktionstüchtige Heizung ersetzen. Bei{" "}
        <strong>Gas- und Biomasseheizungen</strong> greift er allerdings nur,
        wenn die Heizung bei Antragstellung <strong>mindestens 20 Jahre</strong>{" "}
        in Betrieb war – Öl-, Kohle-, Nachtspeicher- und Gas-Etagenheizungen
        sind von dieser Altersgrenze ausgenommen.
      </P>
      <P>
        Der <strong>Einkommensbonus</strong> ist seit Juli 2026 gestaffelt:{" "}
        <strong>40 %</strong> bis 30.000 €, <strong>30 %</strong> bis 40.000 €
        und <strong>10 %</strong> bis 50.000 € zu versteuerndem
        Haushaltseinkommen. Maßgeblich ist der Durchschnitt aus dem{" "}
        <strong>zweiten und dritten Jahr vor dem Antrag</strong> (für einen
        Antrag 2026 also 2023/2024, nachgewiesen per Steuerbescheid). Lebt
        mindestens ein minderjähriges Kind mit Kindergeldanspruch im Haushalt,
        steigen alle Grenzen einmalig um 10.000 € (<strong>Familienzuschlag</strong>).
        Den früheren Effizienzbonus für Erdwärme oder natürliches Kältemittel
        gibt es nicht mehr.
      </P>

      <H2 id="2027">Was ändert sich 2027 bei der Förderung?</H2>
      <P>
        Zwei Werte sinken ab dem <strong>01.02.2027</strong> jedes halbe Jahr
        (zum 01.02. und 01.08.): Der Klimageschwindigkeitsbonus verliert jeweils{" "}
        <strong>4 Prozentpunkte</strong> – 12 % ab Februar 2027, 8 % ab August
        2027, 4 % ab Februar 2028 – und entfällt für Anträge ab dem{" "}
        <strong>01.08.2028</strong>. Der Höchstbetrag der förderfähigen Kosten
        für die erste Wohneinheit sinkt jeweils um <strong>750 €</strong>.
        Maßgeblich ist immer das Datum der Antragstellung, nicht der Einbau.
        Wer ohnehin tauschen will, sollte den Antrag also nicht auf die lange
        Bank schieben.
      </P>

      <H2 id="ablauf">So beantragen Sie die Förderung – Schritt für Schritt</H2>
      <P>
        Die Reihenfolge ist seit der Neuregelung strikt. So läuft es richtig:
      </P>
      <ol className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent marker:font-bold [list-style:decimal]">
        <li>Fachbetrieb auswählen und ein Angebot einholen.</li>
        <li><strong>Liefer-/Leistungsvertrag mit aufschiebender (oder auflösender) Bedingung</strong> schließen – er wird erst mit der KfW-Zusage wirksam.</li>
        <li>Vom Fachbetrieb die <strong>Bestätigung zum Antrag (BzA)</strong> erstellen lassen – eine 15-stellige ID, die Sie für den Antrag brauchen.</li>
        <li>Antrag über das Portal <strong>„Meine KfW“</strong> stellen (mit BzA-ID und Identifizierung).</li>
        <li>Auf die <strong>schriftliche Förderzusage warten</strong> – und erst dann mit dem Einbau beginnen.</li>
        <li>Das Vorhaben <strong>innerhalb von 36 Monaten nach der Zusage</strong> abschließen. Die Nachweise – <strong>Bestätigung nach Durchführung (BnD)</strong>, Fachunternehmererklärung und Rechnungen – innerhalb von 6 Monaten nach der letzten Rechnung einreichen, spätestens 6 Monate nach Ablauf der 36 Monate.</li>
        <li>KfW prüft und zahlt den Zuschuss aus.</li>
      </ol>

      <H2 id="fehler">Der häufigste Fehler: die Reihenfolge</H2>
      <P>
        Ehrlich und wichtig: Wer den Auftrag <strong>ohne</strong> aufschiebende
        Bedingung unterschreibt oder mit dem Einbau beginnt, <strong>bevor</strong>{" "}
        die Förderzusage schriftlich vorliegt, verliert den{" "}
        <strong>kompletten Anspruch</strong> – selbst wenn die Anlage einwandfrei
        eingebaut wurde. Der zweithäufigste Fehler ist die fehlende{" "}
        <strong>Fachunternehmererklärung</strong>: Ohne dieses Dokument zahlt die
        KfW nicht aus. Klären Sie beides vor der Auftragsvergabe mit dem
        Fachbetrieb und nehmen Sie es in den Vertrag auf.
      </P>

      <CtaBand
        headline="Förderung sicher mitnehmen – ohne Reihenfolge-Falle"
        text="Wir verkaufen keine Anlagen – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Fachbetriebe, die Förderfähigkeit, Vertrag mit aufschiebender Bedingung und Fachunternehmererklärung von Anfang an richtig aufsetzen."
        ctaLabel="Fachbetrieb anfragen"
        service="Wärmepumpe"
        source="waermepumpe-foerderung-page"
      />

      <H2 id="steuer">Alternative: Steuerbonus nach § 35c</H2>
      <P>
        Wer die KfW-Förderung nicht nutzt – etwa weil der Zeitpunkt verpasst
        wurde –, kann die Maßnahme stattdessen steuerlich absetzen: Nach{" "}
        <strong>§ 35c EStG</strong> sind 20 % der Kosten über drei Jahre
        abziehbar. Das gilt allerdings <strong>nur für selbstgenutztes
        Wohneigentum</strong> – bei vermieteten Objekten greift § 35c nicht.
        Wichtig: <strong>entweder KfW oder § 35c</strong> für dieselbe Maßnahme,
        nicht beides. In den allermeisten Fällen ist der direkte KfW-Zuschuss
        (bis 70 bzw. 80 %) deutlich attraktiver als der Steuerbonus.
      </P>

      <H2 id="hamburg">Wärmepumpen-Förderung in Hamburg</H2>
      <P>
        Die KfW 458 ist eine Bundesförderung und gilt in Hamburg wie überall –
        zusätzliche Landes- oder Bezirksprogramme ändern sich gelegentlich, ein
        kurzer Blick darauf lohnt sich. Wir sind kein Hersteller und keine
        Energieberatung mit Verkaufsinteresse: Über unsere Vermittlung erhalten
        Sie herstellerneutral Angebote geprüfter Fachbetriebe aus Niendorf und
        Umgebung, die den Förderantrag von Anfang an in der richtigen Reihenfolge
        aufsetzen. Was unterm Strich übrig bleibt, zeigt der Ratgeber{" "}
        <Link
          href="/ratgeber/waermepumpe-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe: Kosten &amp; Förderung
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zur Wärmepumpen-Förderung" />

      <CtaBand
        headline="Förderfähigkeit für Ihr Haus prüfen lassen"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Fachbetriebe aus Hamburg und Umgebung, die Förderhöhe, Boni und den Antrag konkret für Ihre Situation klären."
        ctaLabel="Fachbetrieb anfragen"
        service="Wärmepumpe"
        source="waermepumpe-foerderung-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Angaben sind unverbindliche Richtwerte (Stand: September 2026,
        KfW-Merkblatt 458 gültig ab 24.09.2026) und ersetzen keine
        Förderberatung. Maßgeblich sind die jeweils aktuellen Bedingungen der
        KfW (Programm 458) und die individuelle Situation. Boni,
        Fristen und Sätze können sich ändern.
      </p>
    </RatgeberArticle>
  );
}
