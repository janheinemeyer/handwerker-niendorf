/**
 * Decision logic for the Carport-Genehmigungs-Prüfer (Hamburg).
 *
 * Orientation only — NOT a legal determination. The rules encode § 61 HBauO
 * (verfahrensfreie Vorhaben, new Hamburgische Bauordnung since 01.01.2026), the
 * § 6 boundary privilege and the § 62 Genehmigungsfreistellung. Every result is
 * phrased as a tendency and routes the user to the Bezirksamt for the binding
 * answer; when the inputs don't allow a safe call, the function is deliberately
 * conservative and returns "pruefen" rather than a green light.
 *
 * All legal branching lives here, not in the component, per the project's
 * engineering principles: components capture intent, lib decides.
 */

export type Standort = "innenbereich" | "aussenbereich" | "unsicher";

/** Gilt für das Grundstück ein Bebauungsplan? */
export type Bebauungsplan = "ja" | "nein" | "unsicher";

export type CarportEingabe = {
  standort: Standort;
  /** Zugehöriges Wohn-/Hauptgebäude auf dem Grundstück vorhanden? */
  hauptgebaeude: boolean;
  /** Bruttogrundfläche (überdachte Fläche) des Carports in m². */
  flaecheCarport: number;
  /** Bereits vorhandene offene Stellplatzflächen in m² (werden angerechnet). */
  flaecheStellplaetze: number;
  /** Wandhöhe in m. */
  wandhoehe: number;
  /** Soll der Carport direkt an die Grundstücksgrenze? */
  anGrenze: boolean;
  /** Länge des Carports entlang der Grenze in m (nur relevant, wenn anGrenze). */
  laengeAnGrenze: number;
  /**
   * Länge bereits vorhandener grenznaher Bauten (Garage, Nebengebäude) ohne
   * eigene Abstandsfläche in m – zählt zur 15-m-Gesamtgrenze des § 6 HBauO.
   */
  bestandGrenzeLaenge: number;
  /**
   * Gilt für das Grundstück ein Bebauungsplan? Verfeinert das sonst „grüne“
   * Ergebnis – ein Plan kann unabhängig von Größe/Höhe Vorgaben machen.
   */
  bebauungsplan: Bebauungsplan;
};

/** Tendenz des Ergebnisses — steuert auch Symbol/Label in der UI. */
export type Tendenz = "verfahrensfrei" | "abweichung" | "genehmigung" | "pruefen";

export type CarportErgebnis = {
  tendenz: Tendenz;
  titel: string;
  /** Warum dieses Ergebnis – auf die Eingabe bezogen. */
  begruendung: string[];
};

/** Grenzwerte der Verfahrensfreiheit (§ 61 HBauO) bzw. Grenzbebauung (§ 6 HBauO). */
const MAX_FLAECHE = 50; // m² je zugehörigem Hauptgebäude, inkl. angerechneter Stellplätze
const MAX_WANDHOEHE = 3; // m
const MAX_GRENZE_LAENGE = 9; // m entlang einer Grenze
const MAX_GRENZE_GESAMT = 15; // m Summe aller Bauten ohne eigene Abstandsfläche

const nf = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 });
const fmt = (n: number) => nf.format(n);

/** Optionales Maß: nur ein positiver, endlicher Wert zählt, sonst 0. */
const optional = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

export function pruefeCarport(e: CarportEingabe): CarportErgebnis {
  // Außenbereich: praktisch immer genehmigungspflichtig (§ 35 BauGB).
  if (e.standort === "aussenbereich") {
    return {
      tendenz: "genehmigung",
      titel: "Nach Ihren Angaben: erhöhtes Prüfungsrisiko",
      begruendung: [
        "Im Außenbereich ist ein Carport in aller Regel baugenehmigungspflichtig (§ 35 BauGB) – die Verfahrensfreiheit nach § 61 HBauO gilt nur im Innenbereich. Nach Ihren Angaben sollten Sie das Vorhaben deshalb vor der Planung mit dem Bauamt klären.",
      ],
    };
  }

  // Standort unklar: ohne diese Einordnung ist keine seriöse Aussage möglich.
  if (e.standort === "unsicher") {
    return {
      tendenz: "pruefen",
      titel: "Bitte beim Bauamt klären",
      begruendung: [
        "Ob Ihr Grundstück im Innen- oder Außenbereich liegt, entscheidet maßgeblich über die Genehmigungspflicht – das lässt sich nur am konkreten Fall klären.",
      ],
    };
  }

  // Innenbereich, aber kein zugehöriges Hauptgebäude: § 61 greift nicht.
  if (!e.hauptgebaeude) {
    return {
      tendenz: "genehmigung",
      titel: "Nach Ihren Angaben: erhöhtes Prüfungsrisiko",
      begruendung: [
        "Die Verfahrensfreiheit nach § 61 HBauO gilt nur „je zugehörigem Hauptgebäude“. Ohne ein zugehöriges Wohn- bzw. Hauptgebäude auf dem Grundstück greift sie nach Ihren Angaben voraussichtlich nicht – klären Sie das Verfahren mit dem Bauamt.",
      ],
    };
  }

  // Pflichtmaße müssen vorliegen, sonst ist keine seriöse (und erst recht keine
  // grüne) Aussage möglich. `!(x > 0)` fängt leer/0/ungültig (NaN) zugleich ab.
  const fehlt: string[] = [];
  if (!(e.flaecheCarport > 0)) fehlt.push("die überdachte Fläche");
  if (!(e.wandhoehe > 0)) fehlt.push("die Wandhöhe");
  if (e.anGrenze && !(e.laengeAnGrenze > 0)) fehlt.push("die Länge entlang der Grenze");
  if (fehlt.length > 0) {
    return {
      tendenz: "pruefen",
      titel: "Bitte Angaben vervollständigen",
      begruendung: [
        `Für eine Einordnung fehlt noch ${fehlt.join(" und ")} – bitte ergänzen.`,
      ],
    };
  }

  const gesamtFlaeche = e.flaecheCarport + optional(e.flaecheStellplaetze);
  const flaecheUeber = gesamtFlaeche > MAX_FLAECHE;
  const hoeheUeber = e.wandhoehe > MAX_WANDHOEHE;

  if (flaecheUeber || hoeheUeber) {
    const begruendung: string[] = [];
    if (flaecheUeber) {
      begruendung.push(
        `Mit ${fmt(gesamtFlaeche)} m² (Carport ${fmt(e.flaecheCarport)} m² + angerechnete Stellplätze ${fmt(e.flaecheStellplaetze)} m²) liegt das Vorhaben über der 50-m²-Grenze der Verfahrensfreiheit.`,
      );
    }
    if (hoeheUeber) {
      begruendung.push(
        `Mit ${fmt(e.wandhoehe)} m Wandhöhe wird die 3-m-Grenze der Verfahrensfreiheit überschritten.`,
      );
    }
    begruendung.push(
      "Das spricht dafür, dass ein Baugenehmigungsverfahren nötig ist; verbindlich entscheidet das Bauamt.",
    );
    // § 62 (Genehmigungsfreistellung) setzt einen qualifizierten Bebauungsplan
    // voraus – nur erwähnen, wenn ein Plan gilt (oder das unklar ist). Bei
    // ausdrücklich „kein Plan" wäre dieser Weg nicht verfügbar.
    if (e.bebauungsplan === "ja") {
      begruendung.push(
        "Da für Ihr Grundstück ein Bebauungsplan gilt, kann bei einem Wohngebäude im Geltungsbereich eines qualifizierten Plans stattdessen das Genehmigungsfreistellungsverfahren (§ 62 HBauO) greifen.",
      );
    } else if (e.bebauungsplan === "unsicher") {
      begruendung.push(
        "Gilt für Ihr Grundstück ein qualifizierter Bebauungsplan (bitte prüfen), kann bei einem Wohngebäude stattdessen das Genehmigungsfreistellungsverfahren (§ 62 HBauO) greifen.",
      );
    }
    return {
      tendenz: "genehmigung",
      titel: "Nach Ihren Angaben: erhöhtes Prüfungsrisiko",
      begruendung,
    };
  }

  // Innerhalb 50 m² und 3 m → grundsätzlich verfahrensfrei. Jetzt die Grenze prüfen:
  // sowohl die 9-m-Einzelgrenze als auch die 15-m-Summe aller Bauten ohne eigene
  // Abstandsfläche (§ 6 HBauO).
  if (e.anGrenze) {
    const gesamtGrenze = e.laengeAnGrenze + optional(e.bestandGrenzeLaenge);
    const einzelnUeber = e.laengeAnGrenze > MAX_GRENZE_LAENGE;
    const gesamtUeber = gesamtGrenze > MAX_GRENZE_GESAMT;
    if (einzelnUeber || gesamtUeber) {
      const begruendung: string[] = [];
      if (einzelnUeber) {
        begruendung.push(
          `Direkt an der Grenze ist ein Carport nur bis 9 m Länge privilegiert (§ 6 HBauO). Mit ${fmt(e.laengeAnGrenze)} m überschreiten Sie das.`,
        );
      }
      if (gesamtUeber) {
        begruendung.push(
          `Zusammen mit bestehenden grenznahen Bauten (${fmt(optional(e.bestandGrenzeLaenge))} m) ergeben sich ${fmt(gesamtGrenze)} m – über der 15-m-Gesamtgrenze des § 6 HBauO für Bauten ohne eigene Abstandsfläche.`,
        );
      }
      begruendung.push(
        "Dann müssen voraussichtlich entweder die regulären Abstandsflächen eingehalten oder eine Abweichung beantragt und vom Bauamt genehmigt werden – die Zustimmung des Nachbarn allein genügt nicht.",
      );
      return {
        tendenz: "abweichung",
        titel: "Nach Ihren Angaben: weitere Prüfung nötig",
        begruendung,
      };
    }
  }

  // Strukturell innerhalb aller Schwellen → grundsätzlich verfahrensfrei. Die
  // strukturelle Begründung (inkl. Abstandsflächen-Hinweis im Nicht-Grenz-Fall)
  // gilt in jedem Fall – darauf setzt die Bebauungsplan-Bewertung auf.
  const begruendung = e.anGrenze
    ? [
        "Nach Ihren Angaben liegt der Carport innerhalb der Schwellen, die § 61 HBauO für verfahrensfreie Vorhaben im Innenbereich vorsieht (bis 50 m², bis 3 m Wandhöhe), und bis 9 m Länge ohne eigene Abstandsfläche an der Grenze (§ 6 HBauO) – das spricht dafür, dass kein Baugenehmigungsverfahren nötig ist.",
        "Beachten Sie: Die Gesamtlänge aller Bauten ohne eigene Abstandsfläche darf je Grundstück 15 m nicht überschreiten. Eine abschließende Beurteilung ist mit dieser Einordnung nicht verbunden.",
      ]
    : [
        "Nach Ihren Angaben liegt der Carport innerhalb der Schwellen, die § 61 HBauO für verfahrensfreie Vorhaben im Innenbereich vorsieht (bis 50 m², bis 3 m Wandhöhe) – das spricht dafür, dass kein Baugenehmigungsverfahren nötig ist, sofern die regulären Abstandsflächen zu den Nachbargrenzen eingehalten werden.",
        "Werden die Abstandsflächen unterschritten, ist zusätzlich eine Abweichung erforderlich. Eine abschließende Beurteilung ist mit dieser Einordnung nicht verbunden.",
      ];

  // Der Bebauungsplan kann unabhängig von Größe/Höhe Vorgaben machen: Gilt ein
  // Plan (oder ist das unklar), geben wir keine saubere grüne Einordnung, sondern
  // empfehlen die Prüfung – ehrlicher und für die Lead-Qualität besser. Die
  // strukturellen Hinweise (oben) bleiben dabei erhalten.
  if (e.bebauungsplan === "ja" || e.bebauungsplan === "unsicher") {
    begruendung.push(
      e.bebauungsplan === "ja"
        ? "Für Ihr Grundstück gilt zudem ein Bebauungsplan, der Standort, Größe, Dachform oder Material unabhängig von diesen Grenzen einschränken kann – das sollte vor der Planung geprüft werden."
        : "Ob ein Bebauungsplan gilt, ist nach Ihren Angaben unklar – ein Plan kann unabhängig von diesen Grenzen Vorgaben machen und sollte geklärt werden.",
    );
    return {
      tendenz: "pruefen",
      titel: "Nach Ihren Angaben: weitere Prüfung empfohlen",
      begruendung,
    };
  }

  // „Kein Bebauungsplan": Im unbeplanten Innenbereich gilt § 34 BauGB (Einfügen
  // in die nähere Umgebung) – das kann der Selbstcheck nicht beurteilen.
  begruendung.push(
    "Auch ohne Bebauungsplan gilt im Innenbereich § 34 BauGB: Der Carport muss sich in die Eigenart der näheren Umgebung einfügen – das lässt sich hier nicht beurteilen. Ob wirklich kein (auch übergeleiteter) Plan gilt, klärt zudem das Bauamt.",
  );

  return {
    tendenz: "verfahrensfrei",
    titel: "Nach Ihren Angaben: eher unkritisch",
    begruendung,
  };
}
