/**
 * Single source of truth for the Bebauungsplan-Checkliste. Used both by the
 * inline checklist section on the article page and by the printable checklist
 * page (`./checkliste`), so the two can never drift apart.
 */
export type ChecklisteItem = { title: string; detail: string };

export const BEBAUUNGSPLAN_CHECKLISTE: ChecklisteItem[] = [
  {
    title: "Baugrenze/Baulinie",
    detail:
      "Wo liegt das Baufenster? Sind Garagen/Carports außerhalb ausdrücklich zugelassen oder ausgeschlossen?",
  },
  {
    title: "GRZ",
    detail: "Wie viel Grundfläche ist zulässig – und wie viel ist schon belegt?",
  },
  {
    title: "Dach & Gestaltung",
    detail: "Vorgaben zu Dachform, Neigung, Material oder Farbe?",
  },
  {
    title: "Vorgarten",
    detail: "Gibt es eine Vorgartensatzung oder ein Bauverbot zur Straße hin?",
  },
  {
    title: "Stellplätze & Nebenanlagen",
    detail: "Eigene Festsetzungen zu Zahl, Lage oder Größe?",
  },
  {
    title: "Baulasten",
    detail:
      "Liegen im Baulastenverzeichnis Eintragungen vor, die das Grundstück binden?",
  },
];
