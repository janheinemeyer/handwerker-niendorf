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
import { CarportMasseRechner } from "@/components/carport-masse-rechner";
import {
  berechneCarportMasse,
  formatFlaeche,
  formatMasse,
  formatMeter,
  type Anordnung,
  type Autos,
  type Fahrzeug,
} from "@/lib/carport-masse";

export const metadata: Metadata = {
  title: "Carport Maße & Größe: für 1, 2 & 3 Autos (mit Rechner)",
  description:
    "Welche Maße braucht ein Carport? Doppelcarport für 2 Autos nebeneinander ca. 6–7 × 5,5–6,5 m, hintereinander ca. 3–3,5 × 10–11,5 m, 1 Auto ca. 3 × 5,5 m. Mit Maße-Rechner, Höhe, Abstellraum und den Hamburger Grenzen ohne Baugenehmigung (50 m², 9 m an der Grenze).",
  alternates: { canonical: "/ratgeber/carport-masse" },
  openGraph: {
    title: "Carport Maße & Größe: für 1, 2 & 3 Autos",
    description:
      "Empfohlene Breite, Länge und Höhe – mit Maße-Rechner und den Hamburger Grenzen ohne Baugenehmigung.",
    locale: "de_DE",
    type: "article",
    images: ["/opengraph-image"],
  },
};

// All numbers on this page come from the same function as the calculator, so
// tables, FAQ and Rechner can't drift apart.
const masse = (
  autos: Autos,
  fahrzeug: Fahrzeug,
  opts: { anordnung?: Anordnung; abstellraum?: boolean; hochdach?: boolean } = {},
) =>
  berechneCarportMasse({
    autos,
    fahrzeug,
    anordnung: opts.anordnung ?? "nebeneinander",
    abstellraum: opts.abstellraum ?? false,
    hochdach: opts.hochdach ?? false,
  });

const zelle = (r: ReturnType<typeof masse>) =>
  `${formatMasse(r)} (${formatFlaeche(r.flaeche)})`;
const jaNein = (ok: boolean) => (ok ? "ja" : "nein");

const doppelKombi = masse(2, "mittel");
const tandemKompakt = masse(2, "kompakt", { anordnung: "hintereinander" });
const tandemSuv = masse(2, "gross", { anordnung: "hintereinander" });

const faqs: FaqItem[] = [
  {
    q: "Welche Größe braucht ein Doppelcarport für 2 Autos?",
    a: `Für zwei Autos nebeneinander sollten Sie ${formatMeter(masse(2, "kompakt").breite)} (Kleinwagen) bis ${formatMeter(masse(2, "gross").breite)} (SUV/Van) Breite einplanen, für Kombis rund ${formatMeter(doppelKombi.breite)}. Das sind rund 3–3,5 m pro Stellplatz – genug, um die Türen auf beiden Seiten zu öffnen. Stehen die Autos hintereinander, reicht die Breite eines Einzelcarports (${formatMeter(tandemKompakt.breite)}–${formatMeter(tandemSuv.breite)}).`,
  },
  {
    q: "Wie lang muss ein Carport für 2 Autos hintereinander sein?",
    a: `Rund ${formatMeter(tandemKompakt.laenge)} für zwei Kleinwagen bis ${formatMeter(tandemSuv.laenge)} für zwei SUVs – zwei Fahrzeuglängen plus etwa 1 m Spielraum. In Hamburg ist das wichtig: Direkt an der Grundstücksgrenze darf ein Carport ohne eigene Abstandsfläche höchstens 9 m lang sein. Ein Carport für zwei Autos hintereinander braucht dort also Abstand zur Grenze oder eine Abweichung.`,
  },
  {
    q: "Wie groß darf ein Carport ohne Baugenehmigung sein?",
    a: "In Hamburg ist ein Carport im Innenbereich bis 50 m² Bruttogrundfläche und 3 m Wandhöhe verfahrensfrei – je zugehörigem Hauptgebäude, vorhandene Stellplätze werden angerechnet (§ 61 HBauO). Das reicht für jeden Doppelcarport ohne Abstellraum in normaler Höhe. Andere Bundesländer haben teils deutlich kleinere Grenzen. Bebauungsplan und Abstandsflächen gelten trotzdem.",
  },
  {
    q: "Welche Standardmaße hat ein Carport?",
    a: "Carport-Bausätze werden meist in 50-cm-Rastern angeboten: Einzelcarports typischerweise rund 3 × 5 m bis 3,5 × 7 m, Doppelcarports rund 6 × 5 m bis 7 × 7 m. Wählen Sie die Größe nach Ihrem größten Fahrzeug – und lieber eine Rasterstufe größer, wenn später ein größeres Auto oder ein E-Auto mit Wallbox kommt.",
  },
  {
    q: "Wie hoch muss ein Carport sein?",
    a: `Für normale Pkw reicht eine Durchfahrtshöhe von etwa ${formatMeter(masse(1, "kompakt").durchfahrtshoehe)}, für SUVs und Vans etwa ${formatMeter(masse(1, "gross").durchfahrtshoehe)}. Mit Dachbox, Fahrradträger oder Hochdach-Transporter kommen rund 0,5 m dazu. Dann wird es in Hamburg knapp: Über 3 m Wandhöhe ist ein Carport nicht mehr verfahrensfrei.`,
  },
  {
    q: "Wie groß ist ein Carport mit Abstellraum?",
    a: `Ein Geräteraum hinten verlängert den Carport um etwa 1,5 m. Für zwei Kombis nebeneinander ergibt das rund ${formatMasse(masse(2, "mittel", { abstellraum: true }))} (${formatFlaeche(masse(2, "mittel", { abstellraum: true }).flaeche)}) – knapp unter der Hamburger 50-m²-Grenze. Mit zwei SUVs wird sie überschritten.`,
  },
];

const FAHRZEUGE: Fahrzeug[] = ["kompakt", "mittel", "gross"];
const zeile = (
  label: string,
  autos: Autos,
  opts: { anordnung?: Anordnung } = {},
) => [label, ...FAHRZEUGE.map((f) => zelle(masse(autos, f, opts)))];

const HAMBURG_FAELLE: { label: string; r: ReturnType<typeof masse> }[] = [
  { label: "1 Auto (SUV) + Abstellraum", r: masse(1, "gross", { abstellraum: true }) },
  { label: "2 Autos nebeneinander (Kombi)", r: doppelKombi },
  { label: "2 Autos nebeneinander (Kombi) + Abstellraum", r: masse(2, "mittel", { abstellraum: true }) },
  { label: "2 Autos nebeneinander (SUV) + Abstellraum", r: masse(2, "gross", { abstellraum: true }) },
  { label: "2 Autos hintereinander (Kleinwagen)", r: tandemKompakt },
  { label: "3 Autos nebeneinander (Kleinwagen)", r: masse(3, "kompakt") },
  { label: "3 Autos nebeneinander (Kombi)", r: masse(3, "mittel") },
  { label: "2 Autos (SUV) mit Dachbox", r: masse(2, "gross", { hochdach: true }) },
];

export default function CarportMassePage() {
  return (
    <RatgeberArticle
      title={
        <>
          Carport-Maße &amp; Größe:
          <br />
          für 1, 2 &amp; 3 Autos
        </>
      }
      updated="Oktober 2026"
      breadcrumb={[
        { name: "Start", href: "/" },
        { name: "Ratgeber", href: "/ratgeber" },
        { name: "Carport-Maße", href: "/ratgeber/carport-masse" },
      ]}
    >
      <TlDr>
        Ein Carport für <strong>1 Auto</strong> braucht rund{" "}
        <strong>{formatMasse(masse(1, "kompakt"))}</strong> (SUV:{" "}
        {formatMasse(masse(1, "gross"))}), für <strong>2 Autos nebeneinander</strong>{" "}
        rund <strong>{formatMasse(doppelKombi)}</strong> und für{" "}
        <strong>2 Autos hintereinander</strong> rund{" "}
        <strong>{formatMasse(tandemKompakt)}</strong>. Durchfahrtshöhe: ab{" "}
        {formatMeter(masse(1, "kompakt").durchfahrtshoehe)}. In Hamburg ist ein
        Carport bis <strong>50 m² und 3 m Wandhöhe</strong> ohne Baugenehmigung
        möglich – direkt an der Grundstücksgrenze aber nur bis{" "}
        <strong>9 m Länge</strong>. Ein Carport für zwei Autos hintereinander
        passt dort nicht.
      </TlDr>

      <section id="rechner" aria-label="Carport-Maße-Rechner" className="mt-10">
        <p className="label text-accent">Carport-Maße-Rechner</p>
        <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
          Wie groß muss Ihr Carport sein? Jetzt berechnen.
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Autos, Anordnung und Fahrzeuggröße wählen – der Rechner zeigt die
          empfohlenen Maße und ob der Carport in Hamburg ohne Baugenehmigung und
          an der Grundstücksgrenze möglich ist.
        </p>
        <CarportMasseRechner />
      </section>

      <H2 id="masse-tabelle">Wie groß muss ein Carport für 1, 2 oder 3 Autos sein?</H2>
      <P>
        Empfohlene Maße (Breite × Länge) nach Anzahl und Größe der Fahrzeuge.
        Gerechnet ist mit rund 3–3,5 m Breite pro Stellplatz – genug, um die
        Türen zu öffnen – und etwa 1 m Spielraum zur Fahrzeuglänge, aufgerundet
        auf halbe Meter:
      </P>
      <CostTable
        head={["Carport", "Kleinwagen / Kompakt", "Kombi / Mittelklasse", "SUV / Van"]}
        rows={[
          zeile("1 Auto", 1),
          zeile("2 Autos nebeneinander", 2),
          zeile("2 Autos hintereinander", 2, { anordnung: "hintereinander" }),
          zeile("3 Autos nebeneinander", 3),
        ]}
      />
      <P>
        Das sind Planungswerte, keine Norm. Messen Sie Ihr größtes Fahrzeug
        inklusive Außenspiegel nach und planen Sie großzügiger, wenn Kinder ein-
        und aussteigen, Fahrräder mit unter das Dach sollen oder später ein
        größeres Auto kommt.
      </P>

      <H2 id="zwei-autos">Doppelcarport-Maße: 2 Autos nebeneinander oder hintereinander?</H2>
      <P>
        <strong>Nebeneinander</strong> ist die bequemere Lösung: Jedes Auto
        kommt einzeln raus, und mit rund {formatFlaeche(doppelKombi.flaeche)}{" "}
        (Kombis) bleibt der Doppelcarport deutlich unter 50 m². Er braucht aber
        6–7 m Grundstücksbreite.
      </P>
      <P>
        <strong>Hintereinander</strong> (Tandem) spart Breite und passt auf
        schmale Grundstücke – dafür muss oft umgeparkt werden, und der Carport
        wird {formatMeter(tandemKompakt.laenge)} bis{" "}
        {formatMeter(tandemSuv.laenge)} lang. In Hamburg ist das der Haken:
        Direkt an der Grundstücksgrenze darf ein Carport ohne eigene
        Abstandsfläche höchstens 9 m lang sein (§ 6 HBauO). Ein Tandem-Carport
        muss also von der Grenze abrücken, oder es braucht eine Abweichung vom
        Bauamt. Die Zustimmung des Nachbarn allein reicht dafür nicht.
      </P>
      <P>
        Was ein Carport für zwei Autos kostet, zeigt der Ratgeber{" "}
        <Link
          href="/ratgeber/doppelcarport-kosten"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Doppelcarport: Kosten
        </Link>
        .
      </P>

      <H2 id="hoehe">Wie hoch muss ein Carport sein?</H2>
      <CostTable
        head={["Fahrzeug", "Durchfahrtshöhe ab", "Wandhöhe ca."]}
        rows={[
          ["Pkw (Kleinwagen bis Kombi)", formatMeter(masse(1, "mittel").durchfahrtshoehe), formatMeter(masse(1, "mittel").wandhoehe)],
          ["SUV / Van", formatMeter(masse(1, "gross").durchfahrtshoehe), formatMeter(masse(1, "gross").wandhoehe)],
          ["Pkw mit Dachbox / Fahrradträger", formatMeter(masse(1, "mittel", { hochdach: true }).durchfahrtshoehe), formatMeter(masse(1, "mittel", { hochdach: true }).wandhoehe)],
          ["SUV / Transporter mit Hochdach oder Dachbox", formatMeter(masse(1, "gross", { hochdach: true }).durchfahrtshoehe), formatMeter(masse(1, "gross", { hochdach: true }).wandhoehe)],
        ]}
      />
      <P>
        Die Wandhöhe liegt etwa 25 cm über der Durchfahrtshöhe (Pfette und
        Sparren). Sie entscheidet in Hamburg mit: Über 3 m ist ein Carport weder
        verfahrensfrei noch ohne Abstandsfläche an der Grenze zulässig.
      </P>

      <H2 id="abstellraum">Carport mit Abstellraum oder Schuppen: welche Maße?</H2>
      <P>
        Ein Geräteraum über die volle Breite hinten braucht etwa 1,5 m Tiefe –
        Platz für Mülltonnen, Fahrräder und Gartengeräte. Der Carport wird
        entsprechend länger, und der Abstellraum zählt zur überdachten Fläche.
        Beim Doppelcarport kann das die 50-m²-Grenze kippen: mit zwei Kombis {zelle(masse(2, "mittel", { abstellraum: true }))},
        mit zwei SUVs schon {zelle(masse(2, "gross", { abstellraum: true }))}.
        Alternativ passt ein Abstellraum seitlich – dann wird der Carport breiter
        statt länger.
      </P>

      <H2 id="ohne-genehmigung">
        Welche Carport-Maße sind in Hamburg ohne Baugenehmigung erlaubt?
      </H2>
      <P>
        Nach § 61 HBauO ist ein Carport im Innenbereich verfahrensfrei bis{" "}
        <strong>50 m² Bruttogrundfläche</strong> und <strong>3 m Wandhöhe</strong>{" "}
        – je zugehörigem Hauptgebäude, vorhandene Stellplätze werden
        angerechnet. Weil ein Carport rechtlich als Garage gilt (§ 2 Abs. 7
        HBauO), darf er außerdem <strong>ohne eigene Abstandsfläche</strong> an
        der Grundstücksgrenze stehen – bis 9 m je Grenze und 15 m insgesamt
        (§ 6 Abs. 8 HBauO). So sehen typische Varianten aus:
      </P>
      <CostTable
        head={["Variante", "Maße", "Bis 50 m² & 3 m?", "An die Grenze (≤ 9 m & 3 m)?"]}
        rows={HAMBURG_FAELLE.map(({ label, r }) => [
          label,
          zelle(r),
          jaNein(r.verfahrensfreiMoeglich),
          jaNein(r.grenzeMoeglich),
        ])}
      />
      <P>
        „Verfahrensfrei“ heißt nicht „regelfrei“: Ein{" "}
        <Link
          href="/ratgeber/carport-bebauungsplan"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Bebauungsplan
        </Link>{" "}
        kann Standort und Größe trotzdem einschränken. Ob Ihr konkretes Vorhaben
        genehmigungsfrei ist, prüfen Sie mit dem{" "}
        <Link
          href="/ratgeber/carport-baugenehmigung-hamburg#pruefer"
          className="font-medium text-accent underline underline-offset-4 hover:text-ink"
        >
          Carport-Genehmigungs-Prüfer
        </Link>
        .
      </P>

      <CtaBand
        headline="Carport in der passenden Größe bauen lassen?"
        text="Schildern Sie kurz Maße, Fahrzeuge und Grundstück – wir vermitteln Ihnen kostenlos und unverbindlich geprüfte Carport-Betriebe aus Hamburg und Umgebung, die Statik, Grenzabstand und Genehmigung mitdenken."
        ctaLabel="Carport-Angebote anfragen"
        service="Carport"
        source="carport-masse-page"
      />

      <Faq items={faqs} heading="Häufige Fragen zu Carport-Maßen" />

      <p className="mt-10 text-xs leading-relaxed text-ink-soft/70">
        Alle Maße sind Planungs-Richtwerte (Stand: Oktober 2026), keine Norm und
        keine Rechtsauskunft. Maßgeblich sind Ihre Fahrzeuge, der
        Bebauungsplan und die Auskunft der zuständigen Bauaufsicht.
      </p>
    </RatgeberArticle>
  );
}
