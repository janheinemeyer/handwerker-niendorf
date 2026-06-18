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
  title: "Wärmepumpe im Altbau: Lohnt sich das? (Voraussetzungen 2026)",
  description:
    "Funktioniert eine Wärmepumpe im Altbau – auch ohne Fußbodenheizung und ohne Dämmung? Voraussetzungen, Vorlauftemperatur, Heizkörper-Check, Hochtemperatur-Wärmepumpe, Kosten und ein ehrlicher Eignungs-Check – herstellerneutral, mit Fachbetrieb-Vermittlung für Hamburg.",
  alternates: { canonical: "/ratgeber/waermepumpe-altbau" },
  openGraph: {
    title: "Wärmepumpe im Altbau: Lohnt sich das?",
    description:
      "Voraussetzungen, Heizkörper ohne Fußbodenheizung, Hochtemperatur-Wärmepumpe & ehrlicher Eignungs-Check.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Funktioniert eine Wärmepumpe im Altbau?",
    a: "Ja, in der Mehrzahl der Altbauten technisch und wirtschaftlich – das bestätigen Feldstudien des Fraunhofer ISE. Entscheidend ist nicht das Baujahr, sondern die nötige Vorlauftemperatur: liegt sie unter etwa 55 °C, arbeitet die Wärmepumpe effizient. Wichtiger als pauschale Dämm-Regeln ist eine saubere Planung mit Heizlastberechnung.",
  },
  {
    q: "Brauche ich für eine Wärmepumpe eine Fußbodenheizung?",
    a: "Nein. Eine Wärmepumpe funktioniert auch mit klassischen Heizkörpern. Oft genügt es, einzelne kleine Radiatoren gegen größere Niedertemperatur-Heizkörper zu tauschen, um die Vorlauftemperatur zu senken. Plattenheizkörper harmonieren meist gut; alte Glieder- und Röhrenheizkörper sollte der Fachbetrieb prüfen.",
  },
  {
    q: "Muss ich meinen Altbau vorher komplett dämmen?",
    a: "Nicht zwingend. Pauschalsätze wie „Wärmepumpen brauchen Neubau-Dämmung“ sind fachlich nicht haltbar. Entscheidend ist der Heizwärmebedarf: liegt er unter ~150 kWh/m² im Jahr, arbeitet die Wärmepumpe meist auch im teilsanierten Altbau wirtschaftlich. Gezielte Maßnahmen (oberste Geschossdecke, Kellerdecke, hydraulischer Abgleich) bringen oft mehr als eine teure Komplettsanierung.",
  },
  {
    q: "Was ist eine Hochtemperatur-Wärmepumpe?",
    a: "Eine Wärmepumpe, die Vorlauftemperaturen bis etwa 70 °C erreicht und so vorhandene Heizkörper im ungedämmten Altbau ohne Austausch versorgen kann. Der Preis dafür ist eine niedrigere Effizienz: die Jahresarbeitszahl liegt meist nur bei 2,5–3,5, die Stromkosten entsprechend höher. Sie ist eine Lösung, kein Freifahrtschein – jedes Grad Vorlauftemperatur kostet Effizienz.",
  },
  {
    q: "Wie hoch darf die Vorlauftemperatur für eine Wärmepumpe sein?",
    a: "Am effizientesten arbeitet die Wärmepumpe bei 35–45 °C. Bis etwa 55 °C ist der Betrieb im Altbau noch gut wirtschaftlich. Darüber sinkt die Jahresarbeitszahl deutlich. Ein einfacher Test vor dem Kauf: an einem kalten Tag die Vorlauftemperatur der alten Heizung schrittweise senken und prüfen, ob die Räume warm bleiben.",
  },
  {
    q: "Was kostet eine Wärmepumpe im Altbau?",
    a: "Die Anlage selbst kostet wie im Bestand üblich 15.000–28.000 € (Luft-Wasser, mit Einbau). Im Altbau können altbau-spezifische Posten dazukommen: hydraulischer Abgleich (500–1.000 €), einzelne neue Heizkörper (300–800 € pro Stück) oder eine Hochtemperatur-Variante. Die KfW-Förderung (bis 70 %) gilt wie sonst auch – Details im Ratgeber Wärmepumpe-Kosten.",
  },
];

export default function WaermepumpeAltbauPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Wärmepumpe im Altbau:
          <br />
          lohnt sich das?
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Wärmepumpe im Altbau",
          href: "/ratgeber/waermepumpe-altbau",
        },
      ]}
    >
      <TlDr>
        Ja – eine Wärmepumpe funktioniert in der <strong>Mehrzahl der Altbauten</strong>,
        auch mit Heizkörpern und ohne Komplettsanierung. Entscheidend ist nicht das
        Baujahr, sondern die nötige <strong>Vorlauftemperatur</strong>: unter ~55 °C
        arbeitet sie effizient. Im ungedämmten Altbau sinkt die Jahresarbeitszahl auf{" "}
        <strong>2,5–3,0</strong> – dann helfen ein hydraulischer Abgleich, einzelne
        größere Heizkörper oder eine Hochtemperatur-Wärmepumpe. Pflicht ist eine
        Heizlastberechnung vor dem Kauf.
      </TlDr>

      <H2 id="funktioniert">Funktioniert eine Wärmepumpe im Altbau?</H2>
      <P>
        Kurz: meistens ja. Das Fraunhofer ISE kommt nach Auswertung tausender
        Feldmessungen zu einer klaren Einschätzung – in der Mehrzahl der Altbauten
        ist die Wärmepumpe technisch und wirtschaftlich sinnvoll. Pauschalsätze wie
        „Wärmepumpen funktionieren nur im Neubau“ oder „der Altbau muss erst komplett
        saniert werden“ sind fachlich nicht haltbar. Es gibt erfolgreiche Anlagen in
        unsanierten Altbauten und gescheiterte in teilsanierten Häusern – der
        Unterschied liegt fast immer in der <strong>Planung</strong>, nicht im
        Baujahr.
      </P>

      <H2 id="voraussetzungen">Welche Voraussetzungen muss Ihr Altbau erfüllen?</H2>
      <P>
        Statt auf das Baujahr zu schauen, prüft der Fachbetrieb zwei Kennzahlen –
        und ein paar bauliche Punkte:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Vorlauftemperatur unter ~55 °C:</strong> der wichtigste Hebel.
          Optimal sind 35–45 °C. Je niedriger, desto effizienter die Wärmepumpe.
        </li>
        <li>
          <strong>Heizwärmebedarf unter ~150 kWh/m² pro Jahr:</strong> dann läuft
          die Wärmepumpe meist auch im teilsanierten Altbau wirtschaftlich.
        </li>
        <li>
          <strong>Hydraulischer Abgleich:</strong> verteilt die Wärme gleichmäßig,
          senkt die nötige Vorlauftemperatur und steigert die Effizienz um bis zu
          15 %. Für die geförderte Wärmepumpe ohnehin vorgeschrieben.
        </li>
        <li>
          <strong>Platz fürs Außengerät</strong> mit Abstand zum Nachbarn
          (Lärmschutz) – in dichter Bebauung der heikelste Punkt.
        </li>
      </ul>

      <H2 id="heizkoerper">Wärmepumpe mit Heizkörpern – auch ohne Fußbodenheizung?</H2>
      <P>
        Ja. Eine Fußbodenheizung ist ideal, aber keine Bedingung. Klassische
        Heizkörper schließen die Wärmepumpe nicht aus – häufig genügt es, einzelne
        unterdimensionierte Radiatoren gegen größere{" "}
        <strong>Niedertemperatur-Heizkörper</strong> zu tauschen, damit die
        Vorlauftemperatur sinkt. Plattenheizkörper harmonieren meist gut mit der
        Wärmepumpe; alte Glieder- und Röhrenheizkörper sollte der Fachbetrieb
        einzeln bewerten. Oft müssen nur wenige Heizkörper in den kritischen Räumen
        getauscht werden, nicht alle.
      </P>

      <H2 id="hochtemperatur">Hochtemperatur-Wärmepumpe für den ungedämmten Altbau?</H2>
      <P>
        Wenn sich die Vorlauftemperatur nicht ausreichend senken lässt, ist eine{" "}
        <strong>Hochtemperatur-Wärmepumpe</strong> die Lösung: Sie erreicht bis zu
        etwa 70 °C und versorgt vorhandene Heizkörper ohne Austausch. Der Preis
        dafür ist eine niedrigere Effizienz – die Jahresarbeitszahl liegt dann
        meist nur bei 2,5–3,5, die Stromkosten steigen entsprechend. Sie ist eine
        ehrliche Option für den ungedämmten Bestand, aber kein Freifahrtschein:
        jedes zusätzliche Grad Vorlauftemperatur kostet Effizienz und damit Geld.
      </P>

      <H2 id="kosten">Was kostet eine Wärmepumpe im Altbau?</H2>
      <P>
        Die Anlage kostet wie im Bestand üblich <strong>15.000–28.000 €</strong>{" "}
        (Luft-Wasser, mit Einbau). Im Altbau kommen oft gezielte Begleitmaßnahmen
        hinzu – meist deutlich günstiger als eine Komplettsanierung:
      </P>
      <CostTable
        head={["Altbau-Maßnahme", "Typische Kosten", "Wirkung"]}
        rows={[
          ["Hydraulischer Abgleich", "500 – 1.000 €", "Pflicht für Förderung, bis +15 % Effizienz"],
          ["Einzelne Niedertemperatur-Heizkörper", "300 – 800 € / Stück", "senkt nötige Vorlauftemperatur"],
          ["Hochtemperatur-Wärmepumpe (statt Standard)", "höherer Gerätepreis", "Heizkörper bleiben, aber niedrigere JAZ"],
          ["Dämmung gezielt (oberste Geschoss-/Kellerdecke)", "variabel", "senkt Heizwärmebedarf spürbar"],
        ]}
      />
      <P>
        Die KfW-Förderung (bis 70 %, max. 21.000 €) gilt im Altbau wie überall – die
        vollständige Aufschlüsselung der Preise und Förderbausteine steht im
        Ratgeber{" "}
        <Link
          href="/ratgeber/waermepumpe-kosten"
          className="text-accent underline-offset-2 hover:underline"
        >
          Wärmepumpe: Kosten &amp; Förderung
        </Link>
        .
      </P>

      <H2 id="nicht-lohnt">Wann lohnt es sich (noch) nicht?</H2>
      <P>
        Ehrlich bleiben: Nicht jeder Altbau ist sofort bereit. <strong>Kritisch</strong>{" "}
        wird es bei sehr hohem Heizwärmebedarf (deutlich über 150 kWh/m²),
        gleichzeitig kleinen Heizkörpern und fehlendem Budget für Begleitmaßnahmen –
        dann erreicht selbst eine Hochtemperatur-Wärmepumpe nur niedrige
        Jahresarbeitszahlen, und die Stromkosten fressen den Effizienzvorteil auf.
        In diesem Fall ist die richtige Reihenfolge: <strong>erst die größten
        Wärmelecks schließen</strong> (Dach, oberste Geschossdecke, Fenster), dann
        die Wärmepumpe. Eine Heizlastberechnung sagt vor dem Kauf, wo Ihr Haus
        steht – darum führt kein Weg herum.
      </P>

      <CtaBand
        headline="Passt eine Wärmepumpe zu Ihrem Altbau?"
        text="Wir verkaufen keine Anlagen – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Heizungs-Fachbetriebe, die per Heizlastberechnung ehrlich beurteilen, ob und wie die Wärmepumpe in Ihrem Bestand funktioniert."
        ctaLabel="Fachbetrieb anfragen"
        service="Wärmepumpe"
        source="waermepumpe-altbau-page"
      />

      <H2 id="vorgehen">Schritt für Schritt zum richtigen System</H2>
      <ol className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent marker:font-bold [list-style:decimal]">
        <li><strong>Heizlast & Vorlauftemperatur prüfen</strong> – Test: an einem kalten Tag die alte Heizung absenken.</li>
        <li><strong>Hydraulischen Abgleich</strong> durchführen (Pflicht für Förderung, sofort wirksam).</li>
        <li><strong>Kritische Heizkörper</strong> identifizieren und ggf. gegen größere tauschen.</li>
        <li><strong>Günstige Dämm-Maßnahmen</strong> mit dem größten Hebel zuerst (oberste Geschossdecke).</li>
        <li><strong>Wärmepumpe passend dimensionieren</strong> – Standard- oder Hochtemperatur-Gerät je nach Ergebnis.</li>
      </ol>

      <H2 id="hamburg">Wärmepumpe im Hamburger Altbau</H2>
      <P>
        Hamburg ist eine Altbau-Stadt: Gründerzeit-Etagenhäuser, 50er-Jahre-Zeilen
        und Reihenhäuser in Niendorf, Eimsbüttel und Umgebung. Genau hier zählen die
        Punkte, die bundesweite Ratgeber übergehen – die <strong>Platzierung des
        Außengeräts</strong> und der <strong>Lärmschutz zum Nachbarn</strong> in
        dichter Bebauung, <strong>Denkmalschutz</strong>-Auflagen an der Fassade und
        die Frage, ob in Ihrem Quartier <strong>Fernwärme</strong> die Alternative
        ist. Wir sind kein Hersteller: Über unsere Vermittlung erhalten Sie
        herstellerneutral Angebote geprüfter Heizungs-Fachbetriebe aus der Region,
        die Ihren Altbau realistisch einschätzen. Sie überlegen stattdessen, nur
        einzelne Räume zu temperieren? Dann lohnt der Blick auf die{" "}
        <Link
          href="/ratgeber/klimaanlage-als-heizung"
          className="text-accent underline-offset-2 hover:underline"
        >
          Klimaanlage als Heizung
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zur Wärmepumpe im Altbau" />

      <CtaBand
        headline="Ehrliche Einschätzung für Ihren Altbau"
        text="Schildern Sie kurz Ihr Haus – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Heizungs-Fachbetriebe aus Hamburg und Umgebung, die per Heizlastberechnung Eignung, Maßnahmen und Förderung beurteilen."
        ctaLabel="Fachbetrieb anfragen"
        service="Wärmepumpe"
        source="waermepumpe-altbau-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Angaben sind unverbindliche Richtwerte (Stand: Juni 2026) und ersetzen
        keine Fachberatung. Eignung, Effizienz (Jahresarbeitszahl) und Kosten hängen
        von Gebäudezustand, Heizlast, Heizflächen und individueller Auslegung ab.
        Maßgeblich ist eine Heizlastberechnung durch den Fachbetrieb.
      </p>
    </RatgeberArticle>
  );
}
