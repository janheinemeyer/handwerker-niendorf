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
  title: "Wärmepumpe Förderung 2026: bis zu 70 % (KfW 458) – so geht es",
  description:
    "Wärmepumpen-Förderung 2026: bis zu 70 % Zuschuss über die KfW 458 (max. 21.000 €). Alle Boni und Voraussetzungen, der Antrag Schritt für Schritt, der häufigste Fehler (Reihenfolge!) und die Steuer-Alternative § 35c – herstellerneutral erklärt.",
  alternates: { canonical: "/ratgeber/waermepumpe-foerderung" },
  openGraph: {
    title: "Wärmepumpe Förderung 2026: bis zu 70 % (KfW 458)",
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
    a: "Über die KfW (Programm 458) bis zu 70 % Zuschuss, gedeckelt auf 30.000 € förderfähige Kosten – also maximal 21.000 € für die erste Wohneinheit. Der Satz setzt sich aus 30 % Grundförderung plus kombinierbaren Boni zusammen.",
  },
  {
    q: "Aus welchen Boni setzt sich die Förderung zusammen?",
    a: "Grundförderung 30 % (für alle im Bestandsgebäude), Klimageschwindigkeitsbonus 20 % (Selbstnutzer beim Heizungstausch – bei Gas- und Biomasseheizungen nur, wenn sie bei Antragstellung mindestens 20 Jahre alt sind), Einkommensbonus 30 % (zu versteuerndes Haushaltseinkommen ≤ 40.000 €, Durchschnitt aus dem 2. und 3. Jahr vor dem Antrag) und Effizienzbonus 5 % (Erdwärme/Wasser oder natürliches Kältemittel). Rechnerisch ergibt das 85 %, die KfW kappt aber bei 70 %.",
  },
  {
    q: "Wer bekommt die Wärmepumpen-Förderung?",
    a: "Privatpersonen als Eigentümer von Bestandsgebäuden (Bauantrag mindestens fünf Jahre alt), ob selbst genutzt oder vermietet, über das Programm 458. Unternehmen und juristische Personen laufen über Programm 459 (max. 35 %). Die Grundförderung gilt für alle; die Boni hängen an Selbstnutzung, Einkommen und Technik. Neubauten sind nicht förderfähig.",
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
    a: "Beides geht nicht für dieselbe Maßnahme. Die KfW 458 bringt bis zu 70 % als direkten Zuschuss und ist meist deutlich attraktiver. Der Steuerbonus nach § 35c EStG (20 % der Kosten über drei Jahre) gilt nur für selbstgenutztes Wohneigentum und ist die Alternative, wenn der KfW-Weg z. B. aus zeitlichen Gründen nicht mehr möglich ist.",
  },
];

export default function WaermepumpeFoerderungPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Wärmepumpe-Förderung
          <br />
          2026: bis zu 70 %
        </>
      }
      updated="Juni 2026"
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
        <strong>KfW (Programm 458)</strong> bis zu <strong>70 % Zuschuss</strong>{" "}
        – gedeckelt auf 30.000 € Kosten, also maximal <strong>21.000 €</strong>.
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
        Unternehmen und juristische Personen laufen dagegen über Programm 459,
        das auf <strong>35 %</strong> gedeckelt ist. Für Privatpersonen beträgt
        der maximale Zuschuss <strong>70 %</strong>, begrenzt auf{" "}
        <strong>30.000 € förderfähige Kosten</strong> für die erste Wohneinheit.
        Damit sind bis zu <strong>21.000 €</strong> drin. Der Satz setzt sich aus
        der Grundförderung und drei kombinierbaren Boni zusammen:
      </P>
      <CostTable
        head={["Förderbaustein", "Zuschuss", "Bedingung"]}
        rows={[
          ["Grundförderung", "30 %", "Bestandsgebäude (Bauantrag ≥ 5 Jahre), für alle"],
          ["Klimageschwindigkeits-Bonus", "20 %", "Selbstnutzer, Heizungstausch (Gas/Biomasse: ≥ 20 Jahre alt); voll bis 2028"],
          ["Einkommens-Bonus", "30 %", "Selbstnutzer, zvE ≤ 40.000 € (Ø 2. + 3. Jahr vor Antrag)"],
          ["Effizienz-Bonus", "5 %", "Erdwärme / Wasser / Abwasser oder natürliches Kältemittel"],
          ["Maximal kombiniert", "70 %", "Deckel: 30.000 € Kosten → max. 21.000 €"],
        ]}
      />
      <P>
        Rechnerisch ergäben die Bausteine 85 %, die KfW kappt aber bei 70 %. Was
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
        Der <strong>Klimageschwindigkeitsbonus (20 %)</strong> ist der
        wichtigste Hebel: Er gilt für Selbstnutzer, die ihre alte Heizung
        ersetzen. Bei <strong>Gas- und Biomasseheizungen</strong> greift er
        allerdings nur, wenn die Heizung bei Antragstellung{" "}
        <strong>mindestens 20 Jahre</strong> in Betrieb war – Öl-, Kohle-,
        Nachtspeicher- und Gas-Etagenheizungen sind von dieser Altersgrenze
        ausgenommen. Voll verfügbar ist er bis Ende 2028, ab 2029 schmilzt er
        alle zwei Jahre. Den <strong>Einkommensbonus (30 %)</strong> gibt es, wenn
        das zu versteuernde Haushaltseinkommen 40.000 € nicht übersteigt –
        maßgeblich ist der Durchschnitt aus dem <strong>zweiten und dritten Jahr
        vor dem Antrag</strong> (für einen Antrag 2026 also 2023/2024,
        nachgewiesen per Steuerbescheid). Den{" "}
        <strong>Effizienzbonus (5 %)</strong> gibt es für Erdwärme-, Wasser- oder
        Abwasser-Wärmepumpen sowie für Geräte mit natürlichem Kältemittel.
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
        <li>Umsetzung und Nachweise <strong>spätestens 36 Monate nach der Zusage</strong>: die <strong>Bestätigung nach Durchführung (BnD)</strong>, die Fachunternehmererklärung und die Rechnungen müssen bis dahin – und zugleich innerhalb von 6 Monaten nach der letzten Rechnung – eingereicht werden.</li>
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
        (bis 70 %) deutlich attraktiver als der Steuerbonus.
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
        Alle Angaben sind unverbindliche Richtwerte (Stand: Juni 2026) und
        ersetzen keine Förderberatung. Maßgeblich sind die jeweils aktuellen
        Bedingungen der KfW (Programm 458) und die individuelle Situation. Boni,
        Fristen und Sätze können sich ändern.
      </p>
    </RatgeberArticle>
  );
}
