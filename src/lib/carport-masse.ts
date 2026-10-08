/**
 * Empfohlene Carport-Maße nach Anzahl und Größe der Fahrzeuge, plus Einordnung
 * gegen die Hamburger Schwellen (50 m² / 3 m Verfahrensfreiheit nach § 61 HBauO,
 * 9 m Grenzbebauung nach § 6 HBauO).
 *
 * Richtwerte für die Planung, keine Norm: Stellplatzbreite inkl. Platz zum
 * Türöffnen, Länge = Fahrzeug + ~1 m. Die Grenzwerte kommen aus
 * `carport-genehmigung.ts`, damit Maße-Rechner und Genehmigungs-Prüfer nie
 * auseinanderlaufen. Die Seite /ratgeber/carport-masse baut ihre Tabellen aus
 * derselben Funktion.
 */

import {
  MAX_FLAECHE,
  MAX_GRENZE_LAENGE,
  MAX_WANDHOEHE,
} from "@/lib/carport-genehmigung";

export type Autos = 1 | 2 | 3;
/** Nur bei 2 Autos wählbar; 1 und 3 Autos stehen immer nebeneinander. */
export type Anordnung = "nebeneinander" | "hintereinander";
export type Fahrzeug = "kompakt" | "mittel" | "gross";

export type MasseEingabe = {
  autos: Autos;
  anordnung: Anordnung;
  fahrzeug: Fahrzeug;
  /** Geräte-/Abstellraum hinten über die volle Breite. */
  abstellraum: boolean;
  /** Dachbox, Fahrradträger auf dem Dach oder Transporter mit Hochdach. */
  hochdach: boolean;
};

export type MasseErgebnis = {
  breite: number;
  laenge: number;
  flaeche: number;
  durchfahrtshoehe: number;
  /** Grob: Durchfahrtshöhe + Dachkonstruktion. */
  wandhoehe: number;
  /** Bis 50 m² und 3 m Wandhöhe (§ 61 HBauO, Innenbereich, je Hauptgebäude). */
  verfahrensfreiMoeglich: boolean;
  /** Längste Seite ≤ 9 m und Wandhöhe ≤ 3 m → an der Grenze ohne eigene Abstandsfläche möglich. */
  grenzeMoeglich: boolean;
};

/** Stellplatzbreite je Auto inkl. Platz zum Ein- und Aussteigen, in m. */
const STELLPLATZ_BREITE: Record<Fahrzeug, number> = {
  kompakt: 3.0, // z. B. Golf, Polo
  mittel: 3.25, // Kombi, Mittelklasse
  gross: 3.5, // SUV, Van, Transporter
};

/** Typische Fahrzeuglänge in m. */
const FAHRZEUG_LAENGE: Record<Fahrzeug, number> = {
  kompakt: 4.3,
  mittel: 4.8,
  gross: 5.2,
};

const DURCHFAHRT: Record<Fahrzeug, number> = { kompakt: 2.2, mittel: 2.2, gross: 2.4 };
const HOCHDACH_ZUSCHLAG = 0.5; // m für Dachbox / Fahrradträger / Hochdach
const DACHKONSTRUKTION = 0.25; // m Pfette + Sparren über der Durchfahrt

// Spielraum in der Länge: vor/hinter dem Fahrzeug; hintereinander teilen sich
// beide Autos den Meter (~0,5 m dazwischen, ~0,5 m vorn/hinten).
const LAENGE_ZUSCHLAG = 1.0; // m
const ABSTELLRAUM_TIEFE = 1.5; // m Geräteraum hinten

/** Auf halbe Meter aufrunden – Carports werden in solchen Rastern angeboten. */
const aufHalbeMeter = (n: number) => Math.ceil(n * 2 - 1e-9) / 2;

export function berechneCarportMasse(e: MasseEingabe): MasseErgebnis {
  const stellplatz = STELLPLATZ_BREITE[e.fahrzeug];
  const auto = FAHRZEUG_LAENGE[e.fahrzeug];
  const hintereinander = e.autos === 2 && e.anordnung === "hintereinander";

  const breite = hintereinander ? stellplatz : stellplatz * e.autos;
  const laengeAutos = hintereinander
    ? 2 * auto + LAENGE_ZUSCHLAG
    : auto + LAENGE_ZUSCHLAG;
  const laenge = aufHalbeMeter(laengeAutos) + (e.abstellraum ? ABSTELLRAUM_TIEFE : 0);

  const durchfahrtshoehe =
    DURCHFAHRT[e.fahrzeug] + (e.hochdach ? HOCHDACH_ZUSCHLAG : 0);
  const wandhoehe = durchfahrtshoehe + DACHKONSTRUKTION;
  const flaeche = breite * laenge;

  return {
    breite,
    laenge,
    flaeche,
    durchfahrtshoehe,
    wandhoehe,
    verfahrensfreiMoeglich: flaeche <= MAX_FLAECHE && wandhoehe <= MAX_WANDHOEHE,
    grenzeMoeglich:
      Math.max(breite, laenge) <= MAX_GRENZE_LAENGE && wandhoehe <= MAX_WANDHOEHE,
  };
}

const nf = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 });
/** „6,5 × 6 m“ */
export const formatMasse = (r: MasseErgebnis) =>
  `${nf.format(r.breite)} × ${nf.format(r.laenge)} m`;
export const formatMeter = (n: number) => `${nf.format(n)} m`;
export const formatFlaeche = (n: number) =>
  `${new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 }).format(n)} m²`;
