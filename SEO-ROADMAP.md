# SEO-Roadmap — Handwerk Niendorf

Priorisierte Themen-Pipeline für die Ratgeber-/Kostenseiten, **Hamburg/Niendorf
zuerst**. Diese Datei hält die Keyword-Recherche fest, damit sie nicht nur im
Chat lebt — ergänze sie, wenn neue Seiten dazukommen oder sich Zahlen ändern.

> **Methodik-Hinweis:** Die Priorisierung ist eine *qualitative* SERP-Analyse
> (Wettbewerb, PAA-/„Ähnliche Fragen"-Muster, Preis-Anker), **kein** exaktes
> Suchvolumen. Für harte Zahlen → Google Search Console (sobald Daten da sind)
> oder ein Keyword-Tool. Recherche-Stand: Juni 2026.

## Aktueller Stand (live)

| Seite | Keyword-Fokus | Cluster |
|---|---|---|
| `/ratgeber/carport-bauen-lassen-kosten` | „Carport bauen lassen Kosten" | Außen / Anbau |
| `/ratgeber/terrassenueberdachung-kosten` | „Terrassenüberdachung Kosten" | Außen / Anbau |
| `/ratgeber/wallbox-installieren-kosten` | „Wallbox installieren Kosten" | Energie / Elektro |

Alle drei folgen demselben Muster: **TL;DR mit Zahl → Kostentabellen →
FAQ (aus PAA-Fragen) → interaktiver Kostenrechner**. Template
(`RatgeberArticle`) + zentraler Katalog (`src/lib/ratgeber.ts`) stehen.

**Komplett aus dem Katalog (`RATGEBER_PAGES`) abgeleitet:** Crosslinks („Auch
interessant"), das `knowsAbout`-Schema, die Sitemap (`src/app/sitemap.ts`), die
`/ratgeber`-Übersicht (`src/app/ratgeber/page.tsx`), das Homepage-Ratgeber-Band
(`src/components/services.tsx`) und die Footer-Spalte
(`src/components/site-footer.tsx`). → Eine neue Seite = **eine Katalog-Zeile +
`page.tsx`**; alle Discovery-Flächen verdrahten sich selbst (siehe CLAUDE.md →
„Authoring a Ratgeber / SEO page").

## Warum Hamburg/Niendorf zuerst

Die lokale Nachfrage gewichtet die Reihenfolge stärker als nacktes
Bundes-Volumen:

- **Hamburg = Miet- und Altbaustadt** → riesige, *ganzjährige* Nachfrage nach
  **Innen-Renovierung**: Bad, Maler/Streichen, Boden, Trockenbau. Mieterwechsel
  und Altbau-Sanierung sind Dauerbrenner.
- **Niendorf & Umland = Einfamilien-/Reihenhäuser mit Garten** → **Außen-/
  Anbau-Projekte**: Carport (✓), Terrasse (✓), Wintergarten, Pool, Pflaster.
- **Ballungsraum-Aufschlag ~20–30 %** auf Handwerkerpreise — gehört in jede
  Seite (eigener „… in Hamburg"-Abschnitt + Aufschlag-Option im Rechner, wie
  bei Carport/Wallbox schon umgesetzt).

→ Zwei Cluster gezielt ausbauen: **Innen-Renovierung** (Hamburg-Stadt) und
**Außen/Anbau** (Niendorf/Umland). Die Crosslinks sind aktuell **nicht
cluster-getrennt** — `RelatedRatgeber` verlinkt jede Seite auf *alle* anderen
Katalog-Einträge. Sobald beide Cluster gefüllt sind und eine saubere Trennung
gewünscht ist, braucht es ein `cluster`-Feld im Katalog + Filterung. Bei
wenigen Seiten ist „alle verlinken" aber ohnehin sinnvoll.

## Priorisierter Backlog

Preis-Anker = grobe Bundes-Richtwerte aus der Juni-2026-Recherche; in der Seite
jeweils mit Hamburg-Aufschlag.

### Tier 1 — als Nächstes bauen

**1. Badsanierung / Bad renovieren** — `bad renovieren kosten`, `badsanierung kosten`
- **Preis-Anker:** Komplettsanierung ~1.200–3.500 €/m² (Teilrenovierung ab
  ~700 €/m²); Komplettbad ~12 m² ≈ 14.400–42.000 € (12 × 1.200–3.500).
- **Fit:** ⭐ perfekt — „Fliesen & Bad" ist bereits Leistung. Innen-Cluster,
  ganzjährig, sehr hoher Lead-Wert.
- **Hamburg-Winkel:** Altbau-Bäder + Mietobjekte → Dauernachfrage. Stadtweit.
- **Konkurrenz:** daibau, MyHammer, Aroundhome, vistarooms — dieselben
  Aggregatoren, die wir bei Carport/Wallbox schon schlagen.
- **PAA-Seeds:** „neues Bad 5/8/10 qm Kosten", „wie lange dauert eine
  Badsanierung", „barrierefrei/altersgerecht – KfW-Förderung", „Reihenfolge
  einer Badsanierung", „Komplettbad Kosten", „lohnt sich Badsanierung".
- **Rechner-Achsen:** Größe (m²), Umfang (Teil-/Komplettsanierung), Ausstattung
  (Standard/gehoben), Fliesenfläche, Barrierefrei ja/nein, Hamburg-Aufschlag.

**2. Wohnung streichen lassen / Maler** — `wohnung streichen lassen kosten`, `maler kosten pro qm` ✅ **gebaut** (`/ratgeber/wohnung-streichen-kosten`, Juni 2026)
- **Preis-Anker:** 6–12 €/m² (nur Arbeit), 20–35 €/m² inkl. Material;
  30 m² ab ~1.000 €, 50 m² ab ~1.600 €, 75 m² ab ~2.400 €, 100 m² ab ~3.200 €.
- **Fit:** gut — „Maler & Lackierer" ist Leistung. Innen-Cluster. Niedrigerer
  Ticket, aber **sehr hohe Frequenz**.
- **Hamburg-Winkel:** Miet-/Auszugsrenovierung („beim Auszug streichen") ist in
  einer Mieterstadt ein Dauerbrenner → viele kleine Leads, ganzjährig.
- **Konkurrenz:** MyHammer, Trustlocal, meister-job — beatbar.
- **PAA-Seeds:** „Wohnung streichen 60/80 qm Kosten", „lohnt sich Maler oder
  selbst streichen", „Kosten Decke streichen", „Maler Stundensatz", „Wände
  spachteln Kosten".
- **Rechner-Achsen:** Wohnfläche/Wandfläche, Räume, Decken ja/nein,
  Vorarbeiten (Spachteln/Tapete entfernen), inkl./ohne Material, Hamburg.

### Tier 2 — bald danach

**3. Wintergarten** — `wintergarten kosten`
- **Preis-Anker:** 15.000–60.000 €; Kaltwintergarten 1.500–3.000 €/m²,
  Warmwintergarten 2.500–5.000 €/m².
- **Fit:** ⭐ sehr gut — Außen-/Anbau-Cluster (direkt neben Terrasse & Carport),
  hoher Warenkorb.
- **Hamburg-Winkel:** EFH in Niendorf/Umland; Anbau-Genehmigung Hamburg.
- **Konkurrenz:** PERGOLUX, handwerk.cloud, MyHammer, Brack — beatbar.
- **PAA-Seeds:** „Kalt- vs. Warmwintergarten", „Wintergarten 20 qm Kosten",
  „Baugenehmigung Wintergarten Hamburg", „Förderung Wintergarten", „lohnt sich
  ein Wintergarten".
- **Rechner-Achsen:** Typ (kalt/warm), Fläche, Verglasung, Fundament,
  Beschattung, Hamburg-Aufschlag.

**4. Boden verlegen** — `boden verlegen lassen kosten`, `parkett/laminat/vinyl kosten`
- **Preis-Anker:** grob 20–80 €/m² je nach Belag + Verlegung (Recherche bei
  Bau offen — vor dem Schreiben verifizieren).
- **Fit:** gut — Innen-Cluster, oft Teil von Renovierung/Bad. Hohe Frequenz.
- **Hamburg-Winkel:** Altbau-Dielen/Renovierung, Mieterwechsel.
- **PAA-Seeds:** „Parkett vs. Laminat vs. Vinyl Kosten", „Boden verlegen pro
  qm", „alten Boden entfernen Kosten", „Trittschalldämmung".

### Tier 3 — opportunistisch / saisonal

**5. Einfahrt pflastern / Pflasterarbeiten** — `einfahrt pflastern kosten`
- **Preis-Anker:** 50–175 €/m² (Beton 60–110, Naturstein 90–150);
  Unterbau 25–35 €/m². ~40–50 % der Kosten sind „versteckt" (Aushub, Unterbau,
  Randsteine) → guter Aufklärungs-/GEO-Winkel.
- **Fit:** ok — Außen/Galabau, EFH Niendorf. Eigenes Gewerk (nicht Kernliste).
- **Saison:** Frühjahr–Herbst.
- **PAA-Seeds:** „Einfahrt pflastern 50 qm Kosten", „Pflaster vs. Beton",
  „Untergrund Pflaster Aufbau", „Pflastern lassen pro qm".

**6. Poolbau** — `pool bauen lassen kosten`
- **Preis-Anker:** 10.000–50.000 €; 300–500 €/m²; Stahlwand 5–15k / GFK 15–30k /
  Beton 40–80k; Betriebskosten 400–1.600 €/Jahr.
- **Fit:** mittel — hoher Warenkorb, aber **Spezialgewerk** (Poolbauer/Galabau)
  und **stark saisonal** (Frühjahr/Sommer). Schwächerer Kern-Fit.
- **PAA-Seeds:** „Pool pro m² Kosten", „GFK vs. Beton vs. Stahlwand", „Pool im
  Garten Kosten", „Baugenehmigung Pool", „laufende Kosten Pool pro Jahr".

### Tier 4 — später / komplex (höhere E-E-A-T-Anforderung)

Hoher Warenkorb, aber stark reguliert/erklärungsbedürftig und anderes
Wettbewerbsfeld (Energieberater, Fachportale). Nur mit gründlicher Recherche:

- **Wärmepumpe Kosten** (Förderung BEG, sehr volatil)
- **Dämmung / Fassade / Dachsanierung**
- **Photovoltaik / Solar** (überschneidet sich mit Wallbox-Cluster)
- **Treppenlift**, **Pergola/Markise**, **Gartenhaus**, **Zaun bauen**,
  **Trockenbau Kosten** (eigene Leistung — kleineres Volumen).

## Empfohlene Reihenfolge (Hamburg-first)

1. **Badsanierung** — stärkster Dreiklang Volumen × Lead-Wert × Modell-Fit,
   ganzjährig, Hamburg-Altbau/Miete.
2. **Wohnung streichen / Maler** — Mieterstadt-Dauerbrenner, hohe Frequenz.
3. **Wintergarten** — Außen-Cluster, hoher Warenkorb, Niendorf/Umland.
4. **Boden verlegen** — Innen, Renovierung/Miete.
5. **Einfahrt pflastern** — Außen, EFH (saisonal starten: Frühjahr).
6. **Poolbau** — opportunistisch, vor der Saison (Frühjahr).

## Cluster: Carport-Recht / Bebauungsplan (Genehmigung, nicht Kosten)

Eigener Themen-Cluster **neben** den Kostenseiten – informationale/rechtliche
Suchintentionen rund um Carport-Genehmigung. Bestehende Seite:
`/ratgeber/carport-baugenehmigung-hamburg` (§ 61 HBauO + Selbstcheck-Prüfer).

**Befund der SERP-Analyse (Juni 2026, aus Google-Autocomplete + Top-Treffern):**
Der ganze „carport bebauungsplan"-Cluster wird entweder von **generischen
Bundes-Seiten** („Carport Baugenehmigung – alle Bundesländer": steda,
hansagarten24, profizelt24, greenox, OBI) bedient, die den Bebauungsplan nur als
Absatz streifen, **oder von Foren** (bau.de, bau.net, juraforum,
frag-einen-anwalt). **Niemand besetzt „Carport + Bebauungsplan" mit einer
strukturierten, zitierfähigen Seite.** Differenzierungs-Winkel: *verfahrensfrei
≠ regelfrei* – die Brücke von der bestehenden § 61-Seite.

### P1 — Carport außerhalb Baugrenze / Baufenster ⭐ (gebaut)
- **Keywords:** `baugrenze bebauungsplan carport`, `carport außerhalb
  baufenster`, `carport außerhalb bebauungsplan`.
- **Warum P1:** schwächster Wettbewerb des Clusters – nur Foren + ein dünner
  hausjournal-Artikel (zitiert **§ 23 BauNVO nicht**, nicht ortsspezifisch, keine
  Checkliste). Konkrete, zitierfähige Rechtsgrundlage liegt ungenutzt:
  **§ 23 Abs. 5 BauNVO** (Garagen/Carports außerhalb des Baufensters „soweit der
  B-Plan nichts anderes festsetzt") + **§ 31 BauGB** (Ausnahme/Befreiung).
- **Umsetzung:** neue Seite `/ratgeber/carport-bebauungsplan` (national-fähig
  über BauNVO/BauGB, mit Hamburg-Abschnitt). Deckt P3 gleich mit ab.

### P2 — Bebauungsplan-Checkliste (+ Hamburg / + PDF)
- **Keywords:** `carport bebauungsplan checkliste`, `... checkliste hamburg`,
  `... checkliste pdf`, `... checker`.
- **Warum:** reine Content-Lücke – niemand liefert tatsächlich eine Checkliste.
  Das `pdf`-Modifier = Download-Intent → **Lead-Magnet-Potenzial**.
- **Umsetzung:** Inline-Checkliste ist bereits Teil der P1-Seite. **Offen:**
  herunterladbares PDF (Lead-Gate) + den **Selbstcheck-Prüfer um eine
  Bebauungsplan-Frage erweitern** (bedient `checker`-Intent, konsistent mit der
  vorsichtigen Wording-Logik).

### P3 — Carport ohne Bebauungsplan (§ 34 / § 35 BauGB)
- **Keywords:** `carport ohne bebauungsplan`, `carport bauen ohne bebauungsplan`.
- **Warum:** generische Seiten ranken, aber keine erklärt den „kein-B-Plan"-Fall
  sauber (Innenbereich § 34 „Einfügen" vs. Außenbereich § 35). Mittel.
- **Umsetzung:** als Abschnitt in der P1-Seite enthalten.

### P4 — Head-Term `carport bebauungsplan`
- Am stärksten umkämpft (Bundes-Autoritätsseiten). Nicht frontal angreifen –
  über die Long-Tails P1–P3 + Hamburg-Anker mitnehmen, der Head folgt.

**Offene Folge-Items aus diesem Cluster:** PDF-Checkliste (Lead-Magnet) ·
Prüfer-Erweiterung um Bebauungsplan-Frage · ggf. eigene Seite für GRZ/Befreiung,
falls die Long-Tails Volumen zeigen.

**Quellen (Juni 2026):**
[hausjournal – außerhalb Baufenster](https://www.hausjournal.net/carport-ausserhalb-baufenster),
[ra-kotz – Carport Baugrenze](https://www.ra-kotz.de/carport_baugrenze.htm),
[bau.de Forum](https://bau.de/forum/planung/15019.php),
[steda](https://magazin.steda.de/carport-baugenehmigung/),
[OBI](https://www.obi.de/magazin/bauen/garage/carport-ohne-baugenehmigung).

## Über Kostenseiten hinaus (lokales SEO)

- **Google Business Profile (GBP):** ⚠️ **wahrscheinlich nicht nutzbar.** Googles
  Richtlinien schließen reine **Lead-Generierungs-/Vermittlungs-Unternehmen**
  ausdrücklich aus; ein Eintrag setzt **direkten persönlichen Kundenkontakt**
  voraus ([Eligibility](https://support.google.com/business/answer/13763036)).
  Als Vermittler ohne eigene Ausführung droht hier Sperrung. Erst relevant, wenn
  sich das Geschäftsmodell zu einem persönlichen Vor-Ort-Dienst ändert.
- **Stattdessen lokale Hebel, die für eine Plattform zulässig sind:**
  - lokale Landingpage(s) „Handwerker in Hamburg-Niendorf" / Umkreis, falls die
    Stadtteil-Suche Volumen zeigt (erst per Search Console prüfen);
  - lokale Backlinks/Erwähnungen (Stadtteil-Portale, Partnerbetriebe, regionale
    Verzeichnisse) statt eines GBP-Eintrags;
  - echte Reviews/Referenzen einsammeln (E-E-A-T).
- **`LocalBusiness`-Schema:** für eine Vermittlungsplattform **nicht** passend
  (`LocalBusiness` impliziert einen eigenen Vor-Ort-Dienst). `Organization`
  (bereits umgesetzt, siehe `src/lib/schema.ts`) ist hier korrekt. Ein Upgrade
  käme nur in Frage, wenn das Modell zu einem ausführenden Betrieb mit echter
  Adresse/Telefon wechselt.

## Wie eine neue Seite entsteht

1. In `src/lib/ratgeber.ts` (`RATGEBER_PAGES`) eintragen
   (`href/title/blurb/topic`) → Crosslinks + `knowsAbout`-Schema kommen
   automatisch.
2. **Die noch hartcodierten Listen ergänzen** (bis sie aus dem Katalog
   abgeleitet werden): `src/app/sitemap.ts`, `src/app/ratgeber/page.tsx`
   (Übersicht), `src/components/services.tsx` (Homepage-Band),
   `src/components/site-footer.tsx` (Footer-Spalte).
3. `src/app/ratgeber/<slug>/page.tsx` nach dem Muster in CLAUDE.md bauen
   (TL;DR → Kostentabellen → FAQ aus PAA → Rechner als eigener Client-Component).
4. FAQ-Fragen **direkt aus den PAA-Seeds** oben formulieren (Featured-Snippet-/
   GEO-Chance).
5. „… in Hamburg"-Abschnitt + Ballungsraum-Aufschlag nicht vergessen.
6. `npm run build` (Gate) → Branch + PR.

## Quellen (Recherche Juni 2026)

- Bad: [daibau](https://www.daibau.de/baukostenrechner/renovierung_von_badezimmern),
  [MyHammer](https://www.my-hammer.de/badezimmer/preisradar/was-kostet-badezimmer-renovieren),
  [Aroundhome](https://www.aroundhome.de/badezimmer/preise-kosten/)
- Wintergarten: [handwerk.cloud](https://www.handwerk.cloud/wissen/allgemein/wintergarten-kosten),
  [MyHammer](https://www.my-hammer.de/bauen-renovieren/preisradar/was-kostet-wintergarten-bauen),
  [PERGOLUX](https://pergolux.de/blogs/blogeintrag/wintergarten-kosten)
- Maler/Streichen: [MyHammer](https://www.my-hammer.de/malerarbeiten-tapezieren/preisradar/was-kostet-wohnung-streichen),
  [Trustlocal](https://trustlocal.de/kosten/maler-kosten/wohnung-streichen-lassen-kosten/)
- Pflaster: [MyHammer](https://www.my-hammer.de/garten-aussenbereich/preisradar/was-kostet-einfahrt-pflastern),
  [Aroundhome](https://www.aroundhome.de/gartenbau-landschaftsbau/einfahrt-pflastern-kosten/)
- Pool: [swimmingpool-rechner.de](https://www.swimmingpool-rechner.de/pool-bauen-kosten/),
  [MyHammer](https://www.my-hammer.de/garten-aussenbereich/preisradar/was-kostet-pool-bauen),
  [handwerk.cloud](https://www.handwerk.cloud/wissen/gewerke/pool-bauen-kosten)
