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
import { CarportGenehmigungPruefer } from "@/components/carport-genehmigung-pruefer";

export const metadata: Metadata = {
  title: "Carport-Baugenehmigung Hamburg: Wann genehmigungsfrei? (2026)",
  description:
    "Braucht ein Carport in Hamburg eine Baugenehmigung? Nach § 61 HBauO (seit 2026) ist er bis 50 m² und 3 m je Hauptgebäude verfahrensfrei. Grenzabstände, Bezirksamt, Ablauf und Kosten – kompakt für Hamburg & Niendorf erklärt.",
  alternates: { canonical: "/ratgeber/carport-baugenehmigung-hamburg" },
  openGraph: {
    title: "Carport-Baugenehmigung in Hamburg: Wann genehmigungsfrei?",
    description:
      "§ 61 HBauO: Carport bis 50 m² und 3 m je Hauptgebäude verfahrensfrei. Grenzabstände, Ablauf und Kosten für Hamburg.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Braucht ein Carport in Hamburg eine Baugenehmigung?",
    a: "Meist nicht. Nach § 61 der Hamburgischen Bauordnung (HBauO, neue Fassung seit 01.01.2026) ist ein Carport im Innenbereich verfahrensfrei – also ohne Baugenehmigung zulässig –, solange er je zugehörigem Hauptgebäude 50 m² Bruttogrundfläche und 3 m Wandhöhe nicht überschreitet. Flächen vorhandener Stellplätze werden dabei angerechnet. Erst darüber, oder im Außenbereich, wird in der Regel eine Genehmigung nötig.",
  },
  {
    q: "Wie groß darf ein Carport in Hamburg ohne Genehmigung sein?",
    a: "Bis 50 m² Bruttogrundfläche und 3 m Wandhöhe – je zugehörigem Hauptgebäude. Das reicht in der Regel auch für ein Doppelcarport. Maßgeblich ist die überdachte Fläche; eine seitliche Abstellecke oder ein Geräteanbau zählt mit, und bereits vorhandene Stellplatzflächen werden auf die 50 m² angerechnet. Für ein Carport ohne zugehöriges Hauptgebäude (etwa auf einem unbebauten Grundstück) gilt die Verfahrensfreiheit nicht.",
  },
  {
    q: "Darf ein Carport in Hamburg direkt an die Grundstücksgrenze?",
    a: "Ja. Nach § 6 HBauO darf ein Carport ohne eigene Abstandsfläche direkt an die Grenze gebaut werden, wenn die mittlere Wandhöhe 3 m und die Länge entlang einer Grenze 9 m nicht überschreitet. Die Gesamtlänge solcher grenzständigen Bauten darf pro Grundstück 15 m nicht übersteigen.",
  },
  {
    q: "Brauche ich für ein grenznahes Carport die Zustimmung des Nachbarn?",
    a: "Wenn Sie die 3-m- und 9-m-Regel des § 6 HBauO einhalten, ist keine Nachbarzustimmung nötig. Unterschreiten Sie dagegen die vorgeschriebenen Abstandsflächen, reicht die Zustimmung des Nachbarn allein nicht aus: Dann muss zusätzlich eine Abweichung beantragt und vom Bauamt genehmigt werden – auch bei sonst verfahrensfreien Vorhaben.",
  },
  {
    q: "Wo beantrage ich eine Carport-Baugenehmigung in Hamburg?",
    a: "Zuständig ist das Bauamt des jeweiligen Bezirksamts. Für Hamburg-Niendorf ist das Bezirksamt Eimsbüttel zuständig. Bauanträge werden in Hamburg seit 2024 ausschließlich digital eingereicht; Papieranträge werden nicht mehr angenommen.",
  },
  {
    q: "Was kostet eine Carport-Baugenehmigung in Hamburg?",
    a: "Ist der Carport verfahrensfrei, fallen keine Genehmigungsgebühren an. Ist eine Baugenehmigung nötig, richten sich die Amtsgebühren nach der Baugebührenordnung (BauGebO) und der Bausumme; es gilt eine Mindestgebühr. Kalkulieren Sie für ein Carport in der Regel mehrere Hundert Euro, hinzu kommen ggf. Kosten für prüffähige Bauvorlagen.",
  },
  {
    q: "Was passiert, wenn ich ohne Genehmigung baue?",
    a: "Ein genehmigungspflichtiger Carport ohne Genehmigung ist ein Schwarzbau. Es drohen empfindliche Bußgelder und im schlimmsten Fall eine Rückbau-Anordnung auf eigene Kosten. Ein Schwarzbau genießt keinen Bestandsschutz – das Bauamt kann auch Jahre später eingreifen, etwa bei Nachbarbeschwerde oder Verkauf.",
  },
];

export default function CarportGenehmigungHamburgPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Carport-Baugenehmigung
          <br />
          in Hamburg
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Carport-Baugenehmigung Hamburg",
          href: "/ratgeber/carport-baugenehmigung-hamburg",
        },
      ]}
    >
      <TlDr>
        In Hamburg ist ein Carport nach <strong>§ 61 HBauO verfahrensfrei</strong>{" "}
        (neue Bauordnung seit 01.01.2026) – also ohne Baugenehmigung zulässig – bis{" "}
        <strong>50 m² Bruttogrundfläche</strong> und <strong>3 m Wandhöhe</strong>{" "}
        je zugehörigem Hauptgebäude im Innenbereich. Wichtig: Flächen vorhandener
        Stellplätze werden auf die 50 m² angerechnet. Direkt an die
        Grundstücksgrenze darf er bis <strong>9 m Länge</strong> und 3 m mittlerer
        Wandhöhe (§ 6 HBauO). Größer, höher oder im Außenbereich? Dann ist in der
        Regel eine Baugenehmigung beim Bezirksamt nötig (für Niendorf:{" "}
        <strong>Bezirksamt Eimsbüttel</strong>) – seit 2024 ausschließlich digital.
      </TlDr>

      {/* Interactive permit-situation checker */}
      <section id="pruefer" aria-label="Carport-Genehmigungs-Prüfer" className="mt-10">
        <p className="label text-accent">Genehmigungs-Prüfer</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
          Braucht Ihr Carport eine Genehmigung? Erste Einordnung.
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Ein paar Angaben zu Standort, Größe und Lage genügen für eine erste
          Einschätzung nach Hamburger Bauordnung – verbindlich ist am Ende immer
          das Bauamt.
        </p>
        <CarportGenehmigungPruefer />
      </section>

      <H2 id="genehmigungspflicht">
        Braucht ein Carport in Hamburg eine Baugenehmigung?
      </H2>
      <P>
        In den meisten Fällen nicht. Hamburg behandelt Carports nach § 61 der
        Hamburgischen Bauordnung (HBauO) als <strong>verfahrensfreie</strong>{" "}
        Bauvorhaben – die Vorschrift stand bis zur Neufassung der HBauO zum{" "}
        <strong>1. Januar 2026</strong> in § 60. Verfahrensfrei heißt: Sie
        brauchen weder eine Baugenehmigung zu beantragen noch das Vorhaben
        anzuzeigen – vorausgesetzt, der Carport bleibt innerhalb der gesetzlichen
        Grenzen.
      </P>
      <P>
        Maßgeblich sind zwei Werte: die <strong>Bruttogrundfläche</strong>{" "}
        (überdachte Fläche) und die <strong>Wandhöhe</strong>. Beide gelten{" "}
        <strong>je zugehörigem Hauptgebäude</strong>, und{" "}
        <strong>vorhandene Stellplatzflächen werden angerechnet</strong> – auf
        einem Grundstück mit bereits offenen Stellplätzen kann die
        Verfahrensfreiheit also schon vor 50 m² enden. Zusätzlich muss der Carport
        im Innenbereich – innerhalb eines im Zusammenhang bebauten Ortsteils –
        stehen.
      </P>
      <CostTable
        head={["Situation", "Genehmigung in Hamburg", "Grundlage"]}
        rows={[
          [
            "Innenbereich, bis 50 m² & 3 m, je Hauptgebäude",
            "verfahrensfrei – keine Genehmigung",
            "§ 61 HBauO",
          ],
          [
            "An der Grenze, bis 9 m lang & 3 m hoch",
            "ohne eigene Abstandsfläche zulässig",
            "§ 6 HBauO",
          ],
          [
            "Größer als 50 m² oder höher als 3 m",
            "i. d. R. Genehmigung – im B-Plan-Gebiet ggf. Freistellung",
            "§§ 61 f. HBauO",
          ],
          [
            "Im Außenbereich (unbebaut)",
            "immer Baugenehmigung",
            "§ 35 BauGB",
          ],
        ]}
      />

      <H2 id="regelfrei">
        „Verfahrensfrei“ heißt nicht „regelfrei“
      </H2>
      <P>
        Auch ein genehmigungsfreier Carport muss das geltende Baurecht einhalten.
        Die Verfahrensfreiheit nimmt Ihnen nur den Antrag ab – nicht die
        Verantwortung, die Regeln zu kennen. Prüfen Sie vor Baubeginn
        insbesondere:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>
            <Link
              href="/ratgeber/carport-bebauungsplan"
              className="text-accent underline underline-offset-4 hover:text-ink"
            >
              Bebauungsplan
            </Link>
            :
          </strong>{" "}
          Er kann Standort, Größe, Dachform oder Materialien einschränken – auch
          unterhalb der 50-m²-Grenze.
        </li>
        <li>
          <strong>Abstandsflächen &amp; Grenzbebauung</strong> (§ 6 HBauO, siehe
          unten).
        </li>
        <li>
          <strong>Entwässerung:</strong> Niederschlagswasser muss auf dem eigenen
          Grundstück versickern oder ordnungsgemäß abgeleitet werden.
        </li>
        <li>
          <strong>Stellplatzauflagen</strong> und vorhandene Baulasten.
        </li>
      </ul>
      <P>
        Wird eine dieser Vorgaben verletzt, hilft auch die Verfahrensfreiheit
        nicht – der Carport ist dann formal rechtswidrig.
      </P>

      <H2 id="grenze">
        Carport an der Grundstücksgrenze: die 3-m- und 9-m-Regel (§ 6 HBauO)
      </H2>
      <P>
        Ein Carport darf in Hamburg <strong>ohne eigene Abstandsfläche</strong>{" "}
        direkt an die Grundstücksgrenze gebaut werden – das ist die häufigste
        Frage beim Carport-Bau. Die Bedingungen aus § 6 HBauO:
      </P>
      <CostTable
        head={["Vorgabe", "Grenzwert"]}
        rows={[
          ["Mittlere Wandhöhe an der Grenze", "max. 3,0 m"],
          ["Länge entlang einer Grenze", "max. 9,0 m"],
          ["Gesamtlänge je Grundstück (alle Bauten ohne eigene Abstandsfläche)", "max. 15,0 m"],
        ]}
      />
      <P>
        Die 15-m-Grenze zählt dabei alle baulichen Anlagen mit, die die
        vorgeschriebene Abstandsfläche nicht einhalten – nicht nur die direkt auf
        der Grenze stehenden. Bestehende Garagen oder Nebengebäude im
        Abstandsbereich rechnen also mit.
      </P>
      <P>
        Halten Sie diese Maße ein, ist <strong>keine Nachbarzustimmung</strong>{" "}
        nötig. Unterschreiten Sie dagegen die regulären Abstandsflächen, genügt
        die Zustimmung des Nachbarn allein nicht: Es muss zusätzlich eine{" "}
        <strong>Abweichung</strong> beantragt und vom Bauamt genehmigt werden –
        und zwar auch dann, wenn der Carport ansonsten verfahrensfrei wäre.
      </P>

      <CtaBand
        headline="Carport rechtssicher planen lassen?"
        text="Wir bringen Sie mit geprüften Carport-Betrieben aus Hamburg und Umgebung zusammen, die Grenzabstände, Statik und – falls nötig – den digitalen Bauantrag gleich mitdenken."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-genehmigung-page"
      />

      <H2 id="baugenehmigung">
        Wann ist eine Baugenehmigung nötig – und wie läuft sie ab?
      </H2>
      <P>
        Überschreitet der Carport <strong>50 m²</strong> oder{" "}
        <strong>3 m Wandhöhe</strong>, liegt im <strong>Außenbereich</strong> oder
        verlangt es ein Bebauungsplan, ist die Verfahrensfreiheit weg. Das heißt
        aber nicht automatisch volles Genehmigungsverfahren: Gehört der Carport zu
        einem Wohngebäude im Geltungsbereich eines qualifizierten Bebauungsplans,
        kann das <strong>Genehmigungsfreistellungsverfahren (§ 62 HBauO)</strong>{" "}
        greifen. Ist eine Baugenehmigung nötig, gilt:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Zuständig</strong> ist das Bauamt Ihres Bezirksamts. Für
          Hamburg-Niendorf ist das das <strong>Bezirksamt Eimsbüttel</strong>.
        </li>
        <li>
          <strong>Digital seit 2024:</strong> Bauanträge werden in Hamburg
          ausschließlich online eingereicht; Papieranträge werden nicht mehr
          angenommen.
        </li>
        <li>
          <strong>Dauer:</strong> Je nach Bezirksamt und Vollständigkeit der
          Unterlagen meist 1–3 Monate.
        </li>
        <li>
          <strong>Unterlagen:</strong> Lageplan, Bauzeichnungen und ggf. ein
          Standsicherheitsnachweis – häufig durch einen bauvorlageberechtigten
          Planer.
        </li>
      </ul>

      <H2 id="kosten">Was kostet die Genehmigung?</H2>
      <P>
        Ist der Carport verfahrensfrei, entstehen <strong>keine</strong>{" "}
        Genehmigungsgebühren. Ist eine Baugenehmigung nötig, richten sich die
        Amtsgebühren nach der Bausumme:
      </P>
      <CostTable
        head={["Posten", "Typische Kosten"]}
        rows={[
          ["Verfahrensfreier Carport (Innenbereich)", "keine Genehmigungsgebühr"],
          ["Amtsgebühr Baugenehmigung (BauGebO)", "nach Bausumme, Mindestgebühr"],
          ["Prüffähige Bauvorlagen / Statik (falls nötig)", "300 – 1.500 €"],
        ]}
      />
      <P>
        Die reinen Baukosten – Material, Fundament und Montage – sind davon
        unabhängig. Eine vollständige Übersicht finden Sie im Ratgeber{" "}
        <Link
          href="/ratgeber/carport-bauen-lassen-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport bauen lassen: Kosten
        </Link>
        .
      </P>

      <H2 id="schwarzbau">Was passiert ohne Genehmigung?</H2>
      <P>
        Wer einen genehmigungspflichtigen Carport ohne Genehmigung baut, errichtet
        einen <strong>Schwarzbau</strong>. Das Bauamt kann den Bau stilllegen, ein
        Bußgeld verhängen und im Ernstfall den <strong>Rückbau</strong> auf eigene
        Kosten anordnen. Ein Schwarzbau genießt keinen Bestandsschutz: Die Behörde
        kann auch Jahre später eingreifen – etwa nach einer Nachbarbeschwerde oder
        beim Verkauf des Grundstücks. Die Klärung vorab ist also fast immer
        günstiger als das Risiko.
      </P>

      <H2 id="niendorf">Carport in Niendorf &amp; Hamburg planen</H2>
      <P>
        Für die meisten Einfamilienhaus-Grundstücke in Niendorf, Lokstedt oder
        Schnelsen bleibt ein Einzel- oder Doppelcarport innerhalb der
        verfahrensfreien 50 m² je Hauptgebäude – die Genehmigungsfrage entschärft
        sich damit meist von selbst. Knifflig wird es bei bereits vorhandenen
        Stellplätzen (die angerechnet werden), bei Grenzbebauung, Eckgrundstücken
        oder einem einschränkenden Bebauungsplan. Im Zweifel lohnt der kurze Anruf
        beim{" "}
        <strong>Bezirksamt Eimsbüttel</strong> oder ein Blick in den
        Bebauungsplan, bevor das Material bestellt wird.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zur Carport-Baugenehmigung in Hamburg" />

      <CtaBand
        headline="Carport in Hamburg bauen lassen"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung, die Genehmigungsfragen, Grenzabstände und Aufbau aus einer Hand klären."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-genehmigung-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Dieser Beitrag gibt den Stand Juni 2026 wieder (neue HBauO seit 01.01.2026)
        und dient der allgemeinen Orientierung – er ersetzt keine Rechtsberatung
        und keine Auskunft des zuständigen Bauamts. Im Einzelfall können
        Bebauungsplan, Abstandsflächen, angerechnete Stellplätze oder örtliche
        Satzungen abweichende Anforderungen stellen. Verbindlich ist immer die
        Auskunft des Bezirksamts.
      </p>
    </RatgeberArticle>
  );
}
