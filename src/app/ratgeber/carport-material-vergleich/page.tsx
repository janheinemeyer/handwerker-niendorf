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
  title: "Carport-Material: Holz, Stahl oder Aluminium? (2026)",
  description:
    "Holz, Aluminium, Stahl oder WPC? Carport-Materialien im Vergleich – Preis-Niveau, Wartung, Haltbarkeit und Optik. Welches Material passt zu Ihnen, und was kostet der Aufbau in Hamburg?",
  alternates: { canonical: "/ratgeber/carport-material-vergleich" },
  openGraph: {
    title: "Carport-Material im Vergleich: Holz, Stahl, Aluminium",
    description:
      "Preis-Niveau, Wartung, Haltbarkeit und Optik der Carport-Materialien – plus was der Aufbau kostet.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Welches Carport-Material ist das beste?",
    a: "Es gibt kein „bestes“ Material – es kommt auf Ihre Prioritäten an. Holz ist am günstigsten und wirkt warm, braucht aber regelmäßige Pflege. Aluminium ist nahezu wartungsfrei, langlebig und modern, aber teurer. Stahl ist am robustesten (z. B. für große Spannweiten), wird individuell gefertigt und liegt preislich oben. WPC bietet Holzoptik ohne den Pflegeaufwand.",
  },
  {
    q: "Was ist das günstigste Carport-Material?",
    a: "Holz. Ein Holz-Carport ist in der Anschaffung am günstigsten; über die Jahre kommen aber Pflegekosten (Lasur/Anstrich) hinzu. Wer die gesamte Nutzungsdauer rechnet, holt den Preisvorteil teils wieder ein – Metall hält länger und braucht kaum Wartung.",
  },
  {
    q: "Holz oder Aluminium – was ist besser?",
    a: "Holz, wenn Budget und natürliche Optik zählen und Sie zur Pflege bereit sind. Aluminium, wenn Wartungsarmut, Langlebigkeit und moderne Optik wichtiger sind. Aluminium kostet mehr, hält aber 25–30 Jahre nahezu pflegefrei, während ein Holz-Carport mit 15–20 Jahren und regelmäßiger Lasur kalkuliert wird.",
  },
  {
    q: "Wie lange hält ein Holz-Carport?",
    a: "Bei guter Pflege etwa 15–20 Jahre. Entscheidend sind eine trockene Konstruktion (kein Erdkontakt der Stützen), regelmäßige Lasur bzw. Anstrich und eine gute Holzqualität (z. B. Leimholz oder Lärche). Metall-Carports halten mit 25–30 Jahren länger.",
  },
  {
    q: "Stahl oder Aluminium für den Carport?",
    a: "Stahl ist stabiler und damit bei großen Spannweiten oder hoher Schneelast im Vorteil – muss aber verzinkt/beschichtet sein, um Rost zu vermeiden, und wird individuell gefertigt. Aluminium ist leichter, rostfrei und wartungsärmer, bei dünnen Profilen aber auf die Schneelast zu prüfen.",
  },
  {
    q: "Welches Material braucht am wenigsten Pflege?",
    a: "Aluminium – es ist rostfrei, witterungsbeständig und praktisch wartungsfrei. Verzinkter/beschichteter Stahl ist ebenfalls pflegearm. Holz braucht den meisten Aufwand (regelmäßige Lasur, Kontrolle auf Feuchteschäden).",
  },
];

export default function CarportMaterialVergleichPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Carport-Material:
          <br />
          Holz, Stahl oder Alu?
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Carport-Material im Vergleich",
          href: "/ratgeber/carport-material-vergleich",
        },
      ]}
    >
      <TlDr>
        <strong>Holz</strong> ist am günstigsten und wirkt warm, braucht aber
        Pflege (Lebensdauer ~15–20 Jahre). <strong>Aluminium</strong> ist
        nahezu wartungsfrei, langlebig (~25–30 Jahre) und modern, aber teurer.{" "}
        <strong>Stahl</strong> ist am robustesten, wird individuell gefertigt und
        liegt preislich oben. <strong>WPC</strong> bietet Holzoptik ohne den
        Pflegeaufwand. Beim Bauen-lassen landen die meisten Carports zwischen{" "}
        <strong>3.500 und 10.000 €</strong> (inkl. Montage) – Holz eher unten,
        Alu/Stahl eher oben. Die volle Kostenaufstellung steht im{" "}
        <Link
          href="/ratgeber/carport-bauen-lassen-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Kostenratgeber
        </Link>
        .
      </TlDr>

      <H2 id="vergleich">Holz, Aluminium, Stahl & WPC im Vergleich</H2>
      <P>
        Das Material bestimmt Preis, Pflegeaufwand, Lebensdauer und Optik stärker
        als jeder andere Faktor. Die Kurzübersicht:
      </P>
      <CostTable
        head={["Material", "Preis-Niveau", "Wartung", "Haltbarkeit"]}
        rows={[
          ["Holz", "€ (günstigste)", "Lasur alle 2–5 Jahre", "~15–20 Jahre"],
          ["Aluminium", "€€€ (oberes Ende)", "nahezu keine", "~25–30 Jahre"],
          ["Stahl (verzinkt)", "€€–€€€ (individuell)", "gering", "sehr lang"],
          ["WPC / Holzoptik", "€€", "gering", "lang"],
        ]}
      />
      <P>
        „Preis-Niveau“ meint die relative Einordnung – die tatsächlichen Kosten
        hängen zusätzlich von Größe, Dachform und Aufbau ab (siehe unten).
      </P>

      <H2 id="holz">Holz-Carport</H2>
      <P>
        Der Klassiker und die günstigste Variante. Holz fügt sich natürlich in
        Garten und Altbau ein, lässt sich in jeder Farbe lasieren und ist auch in
        Eigenleistung gut zu ergänzen. Der Preis dafür: Holz arbeitet, vergraut
        und braucht regelmäßige Pflege (Lasur/Anstrich alle 2–5 Jahre) sowie eine
        trockene Konstruktion ohne Erdkontakt der Stützen. Mit guter Holzqualität
        (Leimholz, Lärche, Douglasie) und Pflege sind 15–20 Jahre realistisch.
      </P>

      <H2 id="aluminium">Aluminium-Carport</H2>
      <P>
        Die wartungsärmste Variante: Aluminium ist rostfrei, witterungsbeständig
        und praktisch pflegefrei, dabei leicht und in allen RAL-Farben
        beschichtbar. Optisch modern und klar – passt gut zu Neubau und
        zeitgenössischer Architektur. Aluminium zählt zu den teureren Materialien;
        bei sehr schlanken Profilen sollten Sie die <strong>Schneelast</strong>{" "}
        für Ihre Region prüfen lassen. Lebensdauer 25–30 Jahre und mehr.
      </P>

      <H2 id="stahl">Stahl-Carport</H2>
      <P>
        Die robusteste Lösung – ideal bei großen Spannweiten, Doppelcarports oder
        hoher Schneelast. Stahl wird in der Regel individuell gefertigt (kein
        Standard-Bausatz) und liegt deshalb preislich oben. Wichtig ist der
        Korrosionsschutz: feuerverzinkt und/oder pulverbeschichtet hält ein
        Stahl-Carport sehr lange und bleibt weitgehend wartungsarm.
      </P>

      <H2 id="wpc">WPC & Aluminium in Holzoptik</H2>
      <P>
        Wer die warme Holzoptik mag, aber den Pflegeaufwand scheut, findet in WPC
        (Holz-Kunststoff-Verbund) oder folierten/beschichteten Alu-Profilen einen
        Mittelweg: holzähnliches Aussehen bei deutlich geringerer Wartung.
        Preislich liegt das meist zwischen Holz und Aluminium.
      </P>

      <H2 id="welches">Welches Material passt zu Ihnen?</H2>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Kleines Budget, natürliche Optik, Pflege ok:</strong> Holz.
        </li>
        <li>
          <strong>Wartungsarm, langlebig, modern:</strong> Aluminium.
        </li>
        <li>
          <strong>Große Spannweite / Doppelcarport / viel Schnee:</strong> Stahl.
        </li>
        <li>
          <strong>Holzoptik ohne Pflege:</strong> WPC oder Alu in Holzoptik.
        </li>
      </ul>

      <H2 id="kosten">Was kostet der Aufbau nach Material?</H2>
      <P>
        Beim schlüsselfertigen Bauen-lassen liegen die meisten Carports zwischen{" "}
        <strong>3.500 und 10.000 €</strong> inkl. Montage – Holz eher im unteren,
        Aluminium und Stahl eher im oberen Bereich; Premium- und Doppelcarports
        darüber. Hinzu kommt das Fundament:
      </P>
      <CostTable
        head={["Posten", "Typische Kosten"]}
        rows={[
          ["Punktfundamente (Streifen/Punkt)", "200 – 1.500 €"],
          ["Bodenplatte (komplett)", "1.500 – 3.500 €"],
          ["Pflege Holz (pro Jahr, über die Nutzung)", "ca. 50 – 150 €"],
        ]}
      />
      <P>
        Eine vollständige Aufstellung nach Größe, Dachform und Aufbau – mit
        interaktivem Rechner – finden Sie im Ratgeber{" "}
        <Link
          href="/ratgeber/carport-bauen-lassen-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport bauen lassen: Kosten
        </Link>
        .
      </P>

      <CtaBand
        headline="Welches Material für Ihren Carport?"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Carport-Betriebe aus Hamburg und Umgebung, die Material, Statik und Aufbau passend zu Ihrem Grundstück beraten."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-material-page"
      />

      <H2 id="hamburg">Material &amp; Genehmigung in Hamburg</H2>
      <P>
        Das Material ändert nichts an der baurechtlichen Lage: In Hamburg ist ein
        Carport im Innenbereich bis 50 m² und 3 m Wandhöhe verfahrensfrei
        (§ 61 HBauO) – unabhängig davon, ob er aus Holz, Alu oder Stahl ist. Was
        zählt, sind Größe, Höhe, Grenzabstände und der{" "}
        <Link
          href="/ratgeber/carport-bebauungsplan"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Bebauungsplan
        </Link>{" "}
        (der allerdings Vorgaben zu Material, Dachform oder Farbe machen kann).
        Wann eine Genehmigung nötig ist, klärt der Ratgeber{" "}
        <Link
          href="/ratgeber/carport-baugenehmigung-hamburg"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Baugenehmigung Hamburg
        </Link>
        .
      </P>

      <Faq items={faqs} heading="Häufige Fragen zum Carport-Material" />

      <CtaBand
        headline="Carport in Hamburg bauen lassen"
        text="Beschreiben Sie kurz Größe, Wunschmaterial und Standort – wir bringen Sie kostenlos und unverbindlich mit passenden Carport-Betrieben aus Hamburg und Umgebung zusammen."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-material-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Preise sind Richtwerte (Stand Juni 2026) und ersetzen kein
        individuelles Angebot. Die tatsächlichen Kosten hängen von Material,
        Größe, Dachform, Fundament und Region ab.
      </p>
    </RatgeberArticle>
  );
}
