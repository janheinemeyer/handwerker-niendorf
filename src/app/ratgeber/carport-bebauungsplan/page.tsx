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
import { BaufensterDiagram } from "@/components/baufenster-diagram";
import { BEBAUUNGSPLAN_CHECKLISTE } from "./checkliste-items";

export const metadata: Metadata = {
  title: "Carport & Bebauungsplan: Baugrenze, Baufenster & GRZ (2026)",
  description:
    "Darf ein Carport außerhalb der Baugrenze bzw. des Baufensters stehen? Was regelt der Bebauungsplan (GRZ, Dachform, Vorgarten), was gilt ohne B-Plan (§ 34/§ 35 BauGB) und wie läuft eine Befreiung? Mit Checkliste – Schwerpunkt Hamburg.",
  alternates: { canonical: "/ratgeber/carport-bebauungsplan" },
  openGraph: {
    title: "Carport & Bebauungsplan: Was ist erlaubt?",
    description:
      "Baugrenze/Baufenster, GRZ, Vorgarten und Befreiung (§ 31 BauGB) – was der Bebauungsplan beim Carport vorgibt, mit Checkliste.",
    locale: "de_DE",
    type: "article",
  },
};

const faqs: FaqItem[] = [
  {
    q: "Darf ein Carport außerhalb der Baugrenze stehen?",
    a: "Oft ja, aber nicht automatisch. Die Baugrenze begrenzt die überbaubare Fläche (das „Baufenster“); Gebäude dürfen sie grundsätzlich nicht überschreiten (§ 23 Abs. 3 BauNVO). Für Garagen und Carports sieht § 23 Abs. 5 BauNVO vor, dass sie auf den nicht überbaubaren Flächen zugelassen werden können – soweit der Bebauungsplan nichts anderes festsetzt. Schweigt der Plan, ist das eine Ermessensentscheidung des Bauamts und kein Automatismus; manche Pläne schließen es ausdrücklich aus. Maßgeblich ist Ihr konkreter Bebauungsplan; verbindlich entscheidet das Bauamt.",
  },
  {
    q: "Was passiert, wenn der Carport dem Bebauungsplan widerspricht?",
    a: "Dann ist er nicht ohne Weiteres zulässig – auch wenn er nach Landesbauordnung verfahrensfrei wäre. In Betracht kommt eine Ausnahme (§ 31 Abs. 1 BauGB), wenn der Plan sie vorsieht, oder eine Befreiung (§ 31 Abs. 2 BauGB), wenn die Grundzüge der Planung nicht berührt werden, einer der gesetzlichen Gründe vorliegt (u. a. städtebauliche Vertretbarkeit oder eine offenbar nicht beabsichtigte Härte) und die Abweichung auch unter Würdigung nachbarlicher Interessen mit den öffentlichen Belangen vereinbar ist. Beides steht im Ermessen der Behörde und ist ein eigener Antrag. Eine pauschale Zusage lässt sich daraus nicht ableiten.",
  },
  {
    q: "Darf ein Carport im Vorgarten gebaut werden?",
    a: "Das hängt vom Bebauungsplan und von örtlichen Vorschriften ab. Viele Pläne oder Vorgartensatzungen halten die Fläche zwischen Straße und Gebäude von Bebauung frei oder lassen dort nur Zufahrten und Stellplätze zu. Ein Carport zwischen Haus und Straße sollte deshalb immer vorab geprüft werden.",
  },
  {
    q: "Zählt ein Carport in die Grundflächenzahl (GRZ)?",
    a: "In der Regel ja. Garagen, Carports und Stellplätze werden bei der GRZ mitgerechnet. Bei Bebauungsplänen nach der BauNVO 1990 darf die zulässige GRZ durch sie um bis zu 50 % überschritten werden (höchstens bis 0,8) – sofern der Plan nichts anderes bestimmt (§ 19 Abs. 4 Satz 3 BauNVO); auch ein neuerer Plan kann das einschränken. Bei älteren Plänen kann die Anrechnung ohnehin anders ausfallen – je nach Fassung der BauNVO, die dem Plan zugrunde liegt. Im Zweifel klärt das Bauamt, wie viel Fläche noch frei ist.",
  },
  {
    q: "Was gilt für einen Carport, wenn es keinen Bebauungsplan gibt?",
    a: "Dann richtet sich die Zulässigkeit nach der Lage. Im unbeplanten Innenbereich (§ 34 BauGB) muss sich der Carport in die Eigenart der näheren Umgebung einfügen. Im Außenbereich (§ 35 BauGB) ist er nur eingeschränkt zulässig und praktisch immer baugenehmigungspflichtig. „Kein Bebauungsplan“ heißt also nicht „keine Vorgaben“.",
  },
  {
    q: "Wo finde ich den Bebauungsplan für mein Grundstück in Hamburg?",
    a: "Über das Geoportal bzw. das Transparenzportal der Stadt Hamburg lassen sich Bebauungspläne online einsehen; Auskunft gibt außerdem das Bauamt des zuständigen Bezirksamts (für Niendorf das Bezirksamt Eimsbüttel). In Teilen Hamburgs gelten statt moderner Bebauungspläne noch übergeleitete Baustufenpläne – auch sie enthalten verbindliche Vorgaben.",
  },
];

export default function CarportBebauungsplanPage() {
  return (
    <RatgeberArticle
      title={
        <>
          Carport &amp;
          <br />
          Bebauungsplan
        </>
      }
      updated="Juni 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        {
          name: "Carport & Bebauungsplan",
          href: "/ratgeber/carport-bebauungsplan",
        },
      ]}
    >
      <TlDr>
        Der Bebauungsplan ist verbindliches Ortsrecht – er kann einen Carport
        auch dann einschränken, wenn dieser nach Landesbauordnung{" "}
        <strong>verfahrensfrei</strong> wäre. Wichtigster Punkt: Direkt an die{" "}
        <strong>Baugrenze</strong> bzw. außerhalb des <strong>Baufensters</strong>{" "}
        darf ein Carport oft, aber nicht immer – nach{" "}
        <strong>§ 23 Abs. 5 BauNVO</strong> können Garagen und Carports dort{" "}
        zugelassen werden, soweit der Plan nichts anderes festsetzt. Daneben
        regelt der Plan u. a. <strong>GRZ</strong>, Dachform und Vorgarten. Gibt
        es keinen Bebauungsplan, gelten <strong>§ 34/§ 35 BauGB</strong>.
        Verbindlich ist erst eine Entscheidung des Bauamts (z. B. Vorbescheid oder
        Baugenehmigung) – diese Seite gibt nur eine allgemeine Orientierung.
      </TlDr>

      <H2 id="was-regelt">Was regelt der Bebauungsplan für einen Carport?</H2>
      <P>
        Ein Bebauungsplan (§§ 8–10 BauGB) legt für ein Gebiet verbindlich fest,{" "}
        <em>was</em> und <em>wo</em> gebaut werden darf. Für ein Carport sind vor
        allem diese Festsetzungen relevant:
      </P>
      <CostTable
        head={["Festsetzung", "Was sie für den Carport bedeutet", "Grundlage"]}
        rows={[
          [
            "Baugrenze / Baulinie (Baufenster)",
            "legt fest, wo gebaut werden darf – Carport ggf. nur innerhalb",
            "§ 23 BauNVO",
          ],
          [
            "Grundflächenzahl (GRZ)",
            "begrenzt die überbaute Fläche; Carport zählt i. d. R. mit",
            "§ 19 BauNVO",
          ],
          [
            "Dach-/Gestaltungsvorgaben",
            "Dachform, Neigung, Material oder Farbe können vorgeschrieben sein",
            "örtliche Bauvorschriften",
          ],
          [
            "Vorgarten- / Stellplatzregeln",
            "Fläche zwischen Haus und Straße ist oft von Bebauung freizuhalten",
            "B-Plan / Satzung",
          ],
        ]}
      />
      <P>
        Diese Vorgaben gelten <strong>zusätzlich</strong> zur Landesbauordnung und{" "}
        <strong>unabhängig</strong> von Größe und Höhe des Carports – auch ein
        kleiner, verfahrensfreier Carport muss sie einhalten.
      </P>

      <H2 id="baugrenze">
        Darf ein Carport außerhalb der Baugrenze (Baufenster) stehen?
      </H2>
      <P>
        Das ist die häufigste Streitfrage – und sie lässt sich nicht pauschal mit
        Ja oder Nein beantworten. Zunächst die Begriffe:
      </P>
      <CostTable
        head={["Begriff", "Bedeutung"]}
        rows={[
          [
            "Baugrenze (§ 23 Abs. 3 BauNVO)",
            "darf von Gebäuden grundsätzlich nicht überschritten werden",
          ],
          [
            "Baulinie (§ 23 Abs. 2 BauNVO)",
            "wird gebaut, muss das Gebäude auf dieser Linie stehen",
          ],
          [
            "Baufenster",
            "die von Baugrenzen/Baulinien umschlossene überbaubare Fläche",
          ],
        ]}
      />
      <BaufensterDiagram />
      <P>
        Für Garagen und Carports gibt es eine wichtige Sonderregel:{" "}
        <strong>§ 23 Abs. 5 BauNVO</strong> erlaubt es, auf den{" "}
        <em>nicht</em> überbaubaren Grundstücksflächen – also außerhalb des
        Baufensters – Nebenanlagen und bauliche Anlagen, die nach Landesrecht in
        den Abstandsflächen zulässig sind (dazu zählen grenzständige Carports),{" "}
        <strong>zuzulassen – „soweit im Bebauungsplan nichts anderes festgesetzt
        ist“</strong>. Praktisch heißt das:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          Schweigt der Plan, <strong>können</strong> Carports außerhalb des
          Baufensters zugelassen werden – die Zulassung ist aber eine{" "}
          <strong>Ermessensentscheidung des Bauamts</strong>, kein Automatismus.
        </li>
        <li>
          Manche Pläne <strong>schließen</strong> das ausdrücklich aus oder
          begrenzen es (z. B. nur seitlich, nicht zur Straße).
        </li>
        <li>
          Auch ein nach Landesbauordnung <strong>verfahrensfreier</strong>{" "}
          Carport braucht diese Zulassung, wenn er außerhalb des Baufensters
          liegt.
        </li>
      </ul>
      <P>
        Maßgeblich ist also der Wortlaut <em>Ihres</em> Bebauungsplans. Was die
        Baugrenze konkret zulässt, sollte vor der Planung mit dem Bauamt geklärt
        werden.
      </P>

      <H2 id="befreiung">
        Wenn der Carport dem Plan widerspricht: Ausnahme oder Befreiung
      </H2>
      <P>
        Widerspricht das Vorhaben den Festsetzungen, ist nicht alles verloren –
        aber es braucht einen eigenen Antrag, über den die Behörde nach Ermessen
        entscheidet:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        <li>
          <strong>Ausnahme (§ 31 Abs. 1 BauGB):</strong> möglich, wenn der
          Bebauungsplan sie ausdrücklich vorsieht.
        </li>
        <li>
          <strong>Befreiung (§ 31 Abs. 2 BauGB):</strong> möglich, wenn die{" "}
          <em>Grundzüge der Planung nicht berührt</em> werden, einer der
          gesetzlichen Gründe vorliegt (Wohl der Allgemeinheit, städtebauliche
          Vertretbarkeit oder eine{" "}
          <em>offenbar nicht beabsichtigte Härte</em>) <strong>und</strong> die
          Abweichung auch unter Würdigung nachbarlicher Interessen mit den
          öffentlichen Belangen vereinbar ist.
        </li>
      </ul>
      <P>
        Eine Befreiung ist eine Einzelfallentscheidung; die Zustimmung des
        Nachbarn allein genügt nicht. Wie aussichtsreich ein Antrag ist, lässt
        sich nur am konkreten Plan und Standort einschätzen.
      </P>

      <H2 id="vorgarten">Carport im Vorgarten / zwischen Haus und Straße</H2>
      <P>
        Soll der Carport zwischen Wohnhaus und Straße stehen, ist besondere
        Vorsicht geboten. Bebauungspläne und kommunale{" "}
        <strong>Vorgartensatzungen</strong> halten diese Zone häufig von Bebauung
        frei oder lassen dort nur die Zufahrt und offene Stellplätze zu – teils
        auch aus Gründen des Straßenbilds. Ob ein Carport hier möglich ist, hängt
        vom konkreten Plan ab und sollte vorab geprüft werden.
      </P>

      <H2 id="grz">Zählt der Carport in die Grundflächenzahl (GRZ)?</H2>
      <P>
        Die <strong>GRZ</strong> (§ 19 BauNVO) gibt an, welcher Anteil des
        Grundstücks überbaut werden darf. Garagen, Carports und Stellplätze
        zählen dabei grundsätzlich mit. Bei Plänen nach der{" "}
        <strong>BauNVO 1990</strong> darf die zulässige GRZ durch diese Anlagen um{" "}
        <strong>bis zu 50 %</strong> überschritten werden (höchstens bis 0,8) –{" "}
        <strong>sofern der Bebauungsplan nichts anderes bestimmt</strong>{" "}
        (§ 19 Abs. 4 Satz 3 BauNVO). Auch ein neuerer Plan kann diese
        Überschreitung also einschränken oder ausschließen; bei älteren Plänen
        kann die Anrechnung ohnehin abweichen – maßgeblich ist die Fassung der
        BauNVO, die dem Plan zugrunde liegt. Ob auf Ihrem Grundstück noch{" "}
        „Fläche frei“ ist, prüft im Zweifel das Bauamt.
      </P>

      <H2 id="kein-bplan">Was gilt, wenn es keinen Bebauungsplan gibt?</H2>
      <P>
        Existiert für Ihr Grundstück kein <em>qualifizierter</em> Bebauungsplan,
        gilt nicht etwa „alles erlaubt“, sondern das allgemeine Bauplanungsrecht:
      </P>
      <CostTable
        head={["Lage", "Maßstab", "Grundlage"]}
        rows={[
          [
            "Unbeplanter Innenbereich",
            "Carport muss sich in die nähere Umgebung einfügen",
            "§ 34 BauGB",
          ],
          [
            "Außenbereich",
            "nur eingeschränkt zulässig, praktisch immer genehmigungspflichtig",
            "§ 35 BauGB",
          ],
        ]}
      />
      <P>
        Ob ein Grundstück zum Innen- oder Außenbereich gehört, hängt davon ab, ob
        es am <strong>Bebauungszusammenhang</strong> teilnimmt – nicht allein
        davon, ob es bereits bebaut ist; auch eine bebaute Fläche kann im
        Außenbereich liegen. Das lässt sich nur am konkreten Fall beurteilen.
      </P>
      <P>
        Gibt es einen <strong>einfachen Bebauungsplan</strong> (§ 30 Abs. 3
        BauGB) – in Hamburg häufig ein übergeleiteter Baustufenplan –, bleiben
        dessen Festsetzungen verbindlich; § 34 bzw. § 35 BauGB füllen dann nur die
        Lücken, die der Plan offenlässt.
      </P>

      <H2 id="verfahrensfrei">„Verfahrensfrei“ heißt nicht „regelfrei“</H2>
      <P>
        Ein nach Landesbauordnung verfahrensfreier Carport braucht keinen
        Bauantrag – aber er muss das materielle Baurecht trotzdem einhalten, also
        auch den Bebauungsplan. Verstößt er gegen eine Festsetzung, ist er{" "}
        <strong>materiell rechtswidrig</strong> – ein nachträglicher Antrag heilt
        das nicht automatisch; nötig sind dann ggf. eine Zulassung, eine
        Befreiung oder eine Umplanung. Das Bauamt kann selbst Jahre später
        eingreifen. Wann ein
        Carport in Hamburg überhaupt verfahrensfrei ist, lesen Sie im Ratgeber{" "}
        <Link
          href="/ratgeber/carport-baugenehmigung-hamburg"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Baugenehmigung Hamburg
        </Link>{" "}
        – dort gibt es auch einen interaktiven Selbstcheck. Was der Bau selbst
        kostet, zeigt der Ratgeber{" "}
        <Link
          href="/ratgeber/carport-bauen-lassen-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport bauen lassen: Kosten
        </Link>
        .
      </P>

      <H2 id="checkliste">Checkliste: Was steht in meinem Bebauungsplan?</H2>
      <P>
        Bevor Sie planen oder Material bestellen, prüfen Sie Ihren Bebauungsplan
        (bzw. Baustufenplan) gezielt auf diese Punkte:
      </P>
      <ul className="mt-4 space-y-2 pl-5 text-ink-soft marker:text-accent [list-style:disc]">
        {BEBAUUNGSPLAN_CHECKLISTE.map((item) => (
          <li key={item.title}>
            <strong>{item.title}:</strong> {item.detail}
          </li>
        ))}
      </ul>
      <p className="mt-5">
        <Link
          href="/ratgeber/carport-bebauungsplan/checkliste"
          className="inline-flex items-center gap-2 font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Druckbare Checkliste öffnen (zum Abhaken &amp; als PDF speichern)
          <span aria-hidden>→</span>
        </Link>
      </p>

      <CtaBand
        headline="Bebauungsplan beim Carport mitprüfen lassen?"
        text="Wir bringen Sie mit geprüften Carport-Betrieben aus Hamburg und Umgebung zusammen, die Baugrenzen, Bebauungsplan und – falls nötig – einen Befreiungsantrag gleich mitdenken."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-bebauungsplan-page"
      />

      <H2 id="hamburg">Bebauungsplan in Hamburg finden</H2>
      <P>
        In Hamburg lassen sich Bebauungspläne über das Geoportal bzw. das
        Transparenzportal der Stadt online einsehen; Auskunft gibt zudem das
        Bauamt des zuständigen Bezirksamts – für Niendorf, Lokstedt und Schnelsen
        das <strong>Bezirksamt Eimsbüttel</strong>. Wichtig für Hamburg: In vielen
        Gebieten gelten statt moderner Bebauungspläne noch übergeleitete{" "}
        <strong>Baustufenpläne</strong>. Auch diese enthalten verbindliche
        Vorgaben – ein fehlender „moderner“ B-Plan bedeutet also nicht, dass keine
        Festsetzungen existieren.
      </P>

      <Faq items={faqs} heading="Häufige Fragen zu Carport & Bebauungsplan" />

      <CtaBand
        headline="Carport rechtssicher planen lassen"
        text="Schildern Sie kurz Ihr Vorhaben – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Betriebe aus Hamburg und Umgebung, die Bebauungsplan, Grenzabstände und Aufbau aus einer Hand klären."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-bebauungsplan-page"
      />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Dieser Beitrag gibt den Stand Juni 2026 wieder und dient ausschließlich
        der allgemeinen Orientierung – er ersetzt keine baurechtliche Prüfung,
        keine Rechtsberatung und keine Auskunft des zuständigen Bauamts. Was Ihr
        Bebauungsplan konkret zulässt, hängt vom Einzelfall ab; verbindlich ist
        erst eine förmliche Entscheidung des Bezirksamts (etwa ein Vorbescheid
        oder die Baugenehmigung).
      </p>
    </RatgeberArticle>
  );
}
