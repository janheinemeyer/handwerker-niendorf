/** Topical cluster — drives same-cluster-first ordering of the cross-links. */
export type Cluster =
  | "carport"
  | "aussen"
  | "innen"
  | "energie"
  | "smarthome";

export type RatgeberPage = {
  href: string;
  title: string;
  blurb: string;
  /** Short topic name — feeds the Organization `knowsAbout` schema. */
  topic: string;
  /** Topical cluster — `RelatedRatgeber` surfaces same-cluster siblings first. */
  cluster: Cluster;
};

/**
 * Central catalog of Ratgeber cost pages — the single source of truth for
 * cross-linking AND the Organization `knowsAbout` schema. `RatgeberArticle`
 * auto-renders an "Auch interessant" block from this on every page listed here,
 * and `organizationSchema()` derives the company's areas of expertise from the
 * `topic`s — so both update automatically when a page is added here.
 *
 * The `cluster` groups topically related pages: `RelatedRatgeber` lists
 * same-cluster siblings first (so e.g. the Carport pages link tightly to each
 * other), then the rest of the catalog.
 *
 * To add a new Ratgeber page: add it here so siblings link to it, it links back,
 * and its topic appears in the Organization schema. A page not listed renders no
 * cross-links.
 */
export const RATGEBER_PAGES: RatgeberPage[] = [
  {
    href: "/ratgeber/carport-bauen-lassen-kosten",
    title: "Carport bauen lassen: Kosten",
    blurb: "Preise nach Größe, Material & Aufbau – inkl. Kostenrechner.",
    topic: "Carport-Bau",
    cluster: "carport",
  },
  {
    href: "/ratgeber/terrassenueberdachung-kosten",
    title: "Terrassenüberdachung: Kosten",
    blurb: "Was eine Überdachung kostet – Material, Größe und Montage.",
    topic: "Terrassenüberdachung",
    cluster: "aussen",
  },
  {
    href: "/ratgeber/wallbox-installieren-kosten",
    title: "Wallbox installieren: Kosten",
    blurb: "Installationskosten, Förderung und Technik im Überblick.",
    topic: "Wallbox-Installation",
    cluster: "energie",
  },
  {
    href: "/ratgeber/photovoltaik-kosten",
    title: "Photovoltaik: Kosten",
    blurb: "PV-Anlage mit & ohne Speicher – Preise pro kWp, Steuer, Einspeisevergütung & wann sich Solar lohnt.",
    topic: "Photovoltaik",
    cluster: "energie",
  },
  {
    href: "/ratgeber/einspeiseverguetung-2026",
    title: "Einspeisevergütung 2026",
    blurb: "Aktuelle PV-Sätze (ct/kWh), Teil- vs. Volleinspeisung, 20-Jahre-Garantie & die Negativpreis-Regel.",
    topic: "Einspeisevergütung",
    cluster: "energie",
  },
  {
    href: "/ratgeber/photovoltaik-foerderung",
    title: "Photovoltaik: Förderung & Steuer",
    blurb: "0 % MwSt, Steuerfreiheit bis 30 kWp, KfW 270 & regionale Programme – und warum es keinen Bundes-Zuschuss gibt.",
    topic: "Photovoltaik-Förderung",
    cluster: "energie",
  },
  {
    href: "/ratgeber/klimaanlage-einbauen-kosten",
    title: "Klimaanlage einbauen: Kosten",
    blurb: "Split & Multisplit – Preise mit Montage, Genehmigung, Strom & Wartung.",
    topic: "Klimaanlage",
    cluster: "energie",
  },
  {
    href: "/ratgeber/klimaanlage-als-heizung",
    title: "Klimaanlage als Heizung & Wärmepumpe",
    blurb: "Heizen mit der Split-Klimaanlage – Effizienz, Kosten, Förderung 2026 & wann es sich lohnt.",
    topic: "Klimaanlage als Heizung",
    cluster: "energie",
  },
  {
    href: "/ratgeber/waermepumpe-kosten",
    title: "Wärmepumpe: Kosten & Förderung",
    blurb: "Luft-Wasser, Erdwärme & Co. – Preise mit Einbau, KfW-Förderung 2026 & ehrlicher Altbau-Check.",
    topic: "Wärmepumpe",
    cluster: "energie",
  },
  {
    href: "/ratgeber/waermepumpe-altbau",
    title: "Wärmepumpe im Altbau",
    blurb: "Funktioniert das? Voraussetzungen, Heizkörper ohne Fußbodenheizung, Hochtemperatur & ehrlicher Check.",
    topic: "Wärmepumpe im Altbau",
    cluster: "energie",
  },
  {
    href: "/ratgeber/waermepumpe-stromverbrauch",
    title: "Wärmepumpe: Stromverbrauch",
    blurb: "Wie viel Strom braucht sie? Verbrauch berechnen, Stromkosten pro Jahr & mit Tarif/PV senken.",
    topic: "Wärmepumpen-Stromverbrauch",
    cluster: "energie",
  },
  {
    href: "/ratgeber/warmwasser-waermepumpe",
    title: "Warmwasser-Wärmepumpe",
    blurb: "Effizientes Warmwasser aus der Kellerluft – Funktion, Kosten, Stromverbrauch & wann sie sich lohnt.",
    topic: "Warmwasser-Wärmepumpe",
    cluster: "energie",
  },
  {
    href: "/ratgeber/waermepumpe-foerderung",
    title: "Wärmepumpe: Förderung 2026",
    blurb: "Bis zu 70 % über die KfW 458 – Boni, Voraussetzungen, Antrag Schritt für Schritt & der häufigste Fehler.",
    topic: "Wärmepumpen-Förderung",
    cluster: "energie",
  },
  {
    href: "/ratgeber/bad-renovieren-kosten",
    title: "Bad renovieren: Kosten",
    blurb: "Kosten nach Größe, Umfang & Ausstattung – inkl. Rechner & Förderung.",
    topic: "Badsanierung",
    cluster: "innen",
  },
  {
    href: "/ratgeber/wohnung-streichen-kosten",
    title: "Wohnung streichen lassen: Kosten",
    blurb: "Maler-Preise pro m² & nach Größe – Wände, Decken, Vorarbeiten & Rechner.",
    topic: "Malerarbeiten",
    cluster: "innen",
  },
  {
    href: "/ratgeber/wintergarten-kosten",
    title: "Wintergarten: Kosten",
    blurb: "Kalt- oder Warmwintergarten – Preise pro m², Genehmigung & Rechner.",
    topic: "Wintergarten",
    cluster: "aussen",
  },
  {
    href: "/ratgeber/einfahrt-pflastern-kosten",
    title: "Einfahrt pflastern: Kosten",
    blurb: "Preise pro m², die versteckten Unterbau-Kosten & Rechner.",
    topic: "Pflasterarbeiten",
    cluster: "aussen",
  },
  {
    href: "/ratgeber/carport-baugenehmigung-hamburg",
    title: "Carport-Baugenehmigung Hamburg",
    blurb: "Wann ist ein Carport genehmigungsfrei? § 61 HBauO, Grenzabstände & Ablauf.",
    topic: "Baugenehmigung Carport",
    cluster: "carport",
  },
  {
    href: "/ratgeber/carport-bebauungsplan",
    title: "Carport & Bebauungsplan",
    blurb: "Baugrenze, Baufenster, GRZ & Vorgarten – was der B-Plan beim Carport vorgibt.",
    topic: "Carport im Bebauungsplan",
    cluster: "carport",
  },
  {
    href: "/ratgeber/carport-material-vergleich",
    title: "Carport-Material: Holz, Stahl, Alu",
    blurb: "Holz, Aluminium, Stahl & WPC im Vergleich – Preis, Wartung, Haltbarkeit.",
    topic: "Carport-Material",
    cluster: "carport",
  },
  {
    href: "/ratgeber/solarcarport-kosten",
    title: "Solarcarport: Kosten & Förderung",
    blurb: "Carport mit Photovoltaik – Kosten, Förderung 2026 & das Duo mit der Wallbox.",
    topic: "Solarcarport",
    cluster: "carport",
  },
  {
    href: "/ratgeber/doppelcarport-kosten",
    title: "Doppelcarport: Kosten & Maße",
    blurb: "Carport für zwei Autos – Preise nach Material, empfohlene Maße & Kostenfaktoren.",
    topic: "Doppelcarport",
    cluster: "carport",
  },
  {
    href: "/ratgeber/carport-oder-garage",
    title: "Carport oder Garage?",
    blurb: "Kosten, Vor- & Nachteile und Genehmigung im direkten Vergleich.",
    topic: "Carport oder Garage",
    cluster: "carport",
  },
  {
    href: "/ratgeber/knx-smart-home-kosten",
    title: "KNX Smart Home: Kosten",
    blurb: "Was ein KNX-Smart-Home kostet – Pakete, Neubau vs. Nachrüsten & Programmierung.",
    topic: "KNX Smart Home",
    cluster: "smarthome",
  },
  {
    href: "/ratgeber/knx-oder-loxone",
    title: "KNX oder Loxone?",
    blurb: "Offener Standard vs. Komplettsystem – Kosten, Vor- & Nachteile im Vergleich.",
    topic: "KNX oder Loxone",
    cluster: "smarthome",
  },
];
