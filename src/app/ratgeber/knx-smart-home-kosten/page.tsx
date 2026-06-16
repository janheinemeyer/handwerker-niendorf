import type { Metadata } from "next";
import Link from "next/link";
import {
  RatgeberArticle,
  TlDr,
  H2,
  H3,
  P,
  CostTable,
  CtaBand,
  Faq,
  type FaqItem,
} from "@/components/ratgeber";
import { KnxKostenRechner } from "@/components/knx-kosten-rechner";

export const metadata: Metadata = {
  title: "KNX Smart Home: Kosten 2026 (Pakete, Neubau & Nachrüsten)",
  description:
    "Was kostet ein KNX-Smart-Home? Einsteiger ab ~3.000–6.000 €, Standard-Einfamilienhaus 8.000–15.000 €, gehoben ab ~20.000 € – inkl. Hardware, Installation und Programmierung. Neubau vs. Nachrüsten, ETS-Kosten und Vergleich.",
  alternates: { canonical: "/ratgeber/knx-smart-home-kosten" },
  openGraph: {
    title: "KNX Smart Home: Kosten 2026 im Überblick",
    description:
      "Kosten eines KNX-Smart-Homes nach Ausbaustufe, Neubau vs. Nachrüsten und Programmierung – kompakt erklärt.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Was kostet ein KNX-Smart-Home?",
    a: "Je nach Ausbaustufe: Eine Einsteiger-Lösung (Licht und Beschattung in einer Wohnung) liegt bei rund 3.000–6.000 €, ein Standard-Einfamilienhaus mit Licht, Beschattung und Einzelraum-Heizungsregelung bei etwa 8.000–15.000 €, ein gehobenes System mit Sicherheit, Multimedia und Visualisierung bei 20.000 € und mehr. Diese Richtwerte verstehen sich inklusive Material, Installation und Programmierung. Maßgeblich sind Hausgröße, Anzahl der Gewerke und ob im Neubau oder Bestand gebaut wird.",
  },
  {
    q: "Kann man KNX im Altbau nachrüsten?",
    a: "Ja. Wo neue Bus-Leitungen ohne Stemmen nicht möglich sind, gibt es KNX RF (Funk), KNX über das vorhandene IP-/Netzwerk oder Powerline über das 230-V-Stromnetz; oft lassen sich auch vorhandene Leerrohre nutzen. Die Nachrüstung im Bestand ist dadurch grundsätzlich machbar, planerisch aber aufwändiger als die verdrahtete Variante (KNX TP) im Neubau oder bei einer Kernsanierung.",
  },
  {
    q: "KNX oder ein WLAN-Smart-Home wie Alexa oder Homematic?",
    a: "KNX ist ein verdrahteter, herstellerübergreifender Standard ohne Cloud-Zwang – robust, erweiterbar und langlebig, dafür teurer und Sache des Fachbetriebs. WLAN- und Funk-Insellösungen (z. B. Alexa, Homematic) sind günstiger und in Eigenregie einzurichten, aber weniger zuverlässig und oft an einen Hersteller gebunden. KNX lohnt sich vor allem im Neubau, bei einer Sanierung und bei langfristigem, hohem Anspruch.",
  },
  {
    q: "Was kostet die KNX-Programmierung (ETS)?",
    a: "Die Inbetriebnahme erfolgt mit der Software ETS und ist ein eigener Kostenposten neben der Hardware. Der Fachbetrieb arbeitet mit einer ETS-Lizenz (für größere Projekte ETS Professional) und rechnet die Programmierung meist nach Aufwand ab. Sie ist je nach Funktionsumfang ein spürbarer Anteil der Gesamtkosten – einfache Schaltfunktionen sind schnell parametriert, komplexe Logiken und Visualisierungen kosten mehr Zeit.",
  },
  {
    q: "Braucht man für KNX einen Fachbetrieb?",
    a: "Ja. Planung, Installation und Programmierung gehören in die Hand eines Elektrofachbetriebs mit KNX-Erfahrung – Arbeiten am 230-V-Netz sind ohnehin dem Elektriker vorbehalten. Eine saubere Planung der Bus-Topologie und der Gruppenadressen zu Beginn entscheidet darüber, wie gut sich die Anlage später erweitern lässt.",
  },
];

export default function KnxSmartHomeKostenPage() {
  return (
    <RatgeberArticle
      title={
        <>
          KNX Smart Home:
          <br />
          Kosten
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "KNX Smart Home: Kosten",
          href: "/ratgeber/knx-smart-home-kosten",
        },
      ]}
    >
      <TlDr>
        Ein <strong>KNX-Smart-Home</strong> kostet je nach Ausbaustufe rund{" "}
        <strong>3.000–6.000 €</strong> (Einsteiger), <strong>8.000–15.000 €</strong>{" "}
        (Standard-Einfamilienhaus) oder <strong>ab ~20.000 €</strong> (gehoben) –
        jeweils inklusive Material, Installation und Programmierung. KNX ist ein
        offener, verdrahteter Standard: am günstigsten im Neubau, im Bestand per
        Funk (KNX RF) nachrüstbar. Die Kosten hängen vor allem von Hausgröße,
        Anzahl der Funktionen und Programmieraufwand ab.
      </TlDr>

      <H2 id="kosten">Was kostet ein KNX-Smart-Home?</H2>
      <P>
        KNX wird individuell geplant – einen Stückpreis „pro m²“ gibt es nicht.
        Sinnvoll ist die Betrachtung nach Ausbaustufe. Die folgenden Richtwerte
        sind <strong>Komplettpreise inklusive Hardware, Installation und
        Programmierung</strong>:
      </P>
      <CostTable
        head={["Ausbaustufe", "Richtwert (komplett)"]}
        rows={[
          ["Einsteiger – Wohnung/Etage (Licht + Beschattung)", "3.000 – 6.000 €"],
          [
            "Standard-Einfamilienhaus (Licht, Beschattung, Heizung)",
            "8.000 – 15.000 €",
          ],
          [
            "Gehoben (zusätzl. Sicherheit, Multimedia, Visualisierung)",
            "ab ~20.000 €",
          ],
        ]}
      />
      <P>
        Grob teilen sich die Kosten in drei Blöcke: die <strong>KNX-Hardware</strong>{" "}
        (Sensoren, Taster, Aktoren, Stromversorgung – im Standardhaus ab ~4.000 €,
        gehoben 10.000 € und mehr), die <strong>Elektroinstallation</strong> durch
        den Fachbetrieb (im Neubau meist 7.000–10.000 €) und die{" "}
        <strong>Programmierung</strong> als eigener Posten. Kostentreiber sind die
        Zahl der Räume und Gewerke, die Menge der Aktoren sowie der Unterschied
        zwischen Neubau und Bestand.
      </P>

      <H3>Kostenrechner: Umfang zusammenstellen</H3>
      <P>
        Stellen Sie Bauart, Hausgröße und gewünschte Gewerke zusammen – der
        Rechner schätzt daraus einen Richtwert inklusive Material, Installation
        und Programmierung.
      </P>
      <KnxKostenRechner />

      <H2 id="was-ist-knx">Was ist KNX – kurz erklärt</H2>
      <P>
        KNX (von „Konnex“) ist ein <strong>offener, weltweiter Standard für die
        Gebäudeautomation</strong>, getragen von über 500 Herstellern, deren
        Geräte untereinander kompatibel sind. Alle Komponenten hängen an einer
        gemeinsamen Bus-Leitung: <strong>Sensoren</strong> (Taster, Bewegungs- und
        Temperaturfühler) melden Ereignisse, <strong>Aktoren</strong> schalten und
        steuern daraufhin Licht, Beschattung, Heizung oder Sicherheitstechnik. Weil
        KNX herstellerübergreifend und ohne Cloud-Zwang funktioniert, gilt das
        System als besonders zukunftssicher und erweiterbar.
      </P>

      <H2 id="neubau-nachruesten">Neubau oder Nachrüsten?</H2>
      <H3>Neubau und Kernsanierung: KNX TP (verdrahtet)</H3>
      <P>
        Im Neubau oder bei einer Kernsanierung wird die verdrahtete Variante{" "}
        <strong>KNX TP</strong> (Twisted Pair) verlegt – das ist die robusteste und,
        bezogen auf den Funktionsumfang, günstigste Lösung. Hier lohnt es sich, die
        Bus-Leitung großzügig in alle Räume zu führen, auch wenn zunächst nicht jede
        Funktion genutzt wird.
      </P>
      <H3>Bestand und Altbau: Funk, IP oder Powerline</H3>
      <P>
        Im bewohnten Bestand lässt sich KNX nachrüsten, ohne flächendeckend Wände zu
        öffnen: <strong>KNX RF</strong> (Funk) kommt ohne neue Kabel aus,{" "}
        <strong>KNX IP</strong> nutzt das vorhandene Netzwerk und{" "}
        <strong>Powerline</strong> das 230-V-Stromnetz; häufig lassen sich auch
        vorhandene Leerrohre für die Bus-Leitung verwenden. Die Nachrüstung ist
        dadurch machbar, planerisch aber aufwändiger und pro Gerät teils teurer als
        im Neubau.
      </P>

      <H2 id="programmierung">Programmierung und Inbetriebnahme (ETS)</H2>
      <P>
        KNX-Geräte werden mit der Software <strong>ETS</strong> (Engineering Tool
        Software) parametriert und in Betrieb genommen – jedes Gerät erhält darin
        seine Adresse und Funktion. Diese Programmierung übernimmt der Fachbetrieb
        mit einer entsprechenden Lizenz (für größere Anlagen ETS Professional) und
        rechnet sie meist nach Aufwand ab. Sie ist ein <strong>eigener
        Kostenposten</strong>: einfache Schaltlogik ist schnell erledigt, komplexe
        Automationen und Visualisierungen schlagen stärker zu Buche.
      </P>

      <CtaBand
        headline="KNX-Fachbetrieb in Hamburg gesucht?"
        text="Wir vermitteln Ihnen kostenlos und unverbindlich erfahrene Elektro- und Smart-Home-Betriebe aus Hamburg und Umgebung – von der ersten KNX-Planung bis zur Inbetriebnahme."
        ctaLabel="Smart-Home-Angebote anfragen"
        service="Smart Home / KNX"
        source="knx-smart-home-kosten-page"
      />

      <H2 id="lohnt-sich">Lohnt sich KNX?</H2>
      <P>
        KNX spielt seine Stärken dort aus, wo ohnehin gebaut oder saniert wird und
        ein langfristig erweiterbares, herstellerunabhängiges System gewünscht ist.
        Besonders sinnvoll wird es im Zusammenspiel mit Energietechnik: Eine
        KNX-Anlage kann das Lastmanagement einer{" "}
        <Link
          href="/ratgeber/wallbox-installieren-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Wallbox
        </Link>{" "}
        und den Eigenverbrauch einer{" "}
        <Link
          href="/ratgeber/solarcarport-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Photovoltaik-Anlage
        </Link>{" "}
        steuern. Für ein günstiges Nachrüsten einzelner Funktionen in einer
        Mietwohnung sind dagegen einfache Funklösungen oft die passendere Wahl.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu KNX-Kosten" />

      <CtaBand
        headline="Smart Home mit KNX in Hamburg umsetzen"
        text="Schildern Sie kurz Ihr Vorhaben – wir bringen Sie kostenlos und unverbindlich mit passenden KNX-Fachbetrieben aus Hamburg und Umgebung zusammen."
        ctaLabel="Smart-Home-Angebote anfragen"
        service="Smart Home / KNX"
        source="knx-smart-home-kosten-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preise sind Richtwerte (Stand Juni 2026) und ersetzen kein
        individuelles Angebot. Die tatsächlichen Kosten hängen von Hausgröße,
        Funktionsumfang, Neubau oder Bestand und Programmieraufwand ab.
      </p>
    </RatgeberArticle>
  );
}
