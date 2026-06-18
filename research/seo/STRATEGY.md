# SEO-Strategie: lokal dominieren durch Tiefe

Leitlinie für jede neue Ratgeber-/SEO-Seite. Ergänzt die Authoring-Konventionen
in `CLAUDE.md` um das *Warum* und das strategische Ziel.

## These

**Wir dominieren nicht die generischen nationalen Head-Terms — wir dominieren die
lokale Suche in Hamburg, indem wir dort gewinnen, wo die Großen strukturell schwach
sind, und das mit thematischer Tiefe absichern.**

## Realitäts-Check (was wir NICHT tun)

Generische Head-Terms wie „wärmepumpe kosten" oder „klimaanlage kosten"
(10k–100k/Monat) gehören nationalen Aggregatoren und Verkäufern (thermondo,
1komma5, enpal, aroundhome, my-hammer, ADAC). Die haben Domain-Autorität, tausende
Seiten, Backlinks, Marke und Budget. **Auf deren Spielfeld — generischer Ratgeber,
Wortzahl, Autorität — gewinnen wir nicht.** Diese Terms anzupeilen heißt Monate für
Platz 8 zu verbrennen. Wir framen informational, ranken aber realistisch über die
unten genannten Hebel, nicht über den nackten Head-Term.

## Wo wir gewinnen (die vier verteidigbaren Fronten)

1. **Lokaler Intent — organisch (das Aggregator-Modell).** Wir sind ein
   **Vermittler/Aggregator**, kein ausführender Betrieb. Deshalb **kein
   Google-Business-Profile und kein Google-Maps-Local-Pack** — der gehört dem
   tatsächlichen Dienstleister, Google lässt Lead-Gen-Seiten dort nicht zu
   (höchstens *ein* generischer Unternehmenseintrag ist möglich, ohne SEO-Hebel
   für einzelne Leistungen). Unser Feld sind die **organischen** Treffer für
   „[Leistung] hamburg / [Stadtteil]"-Intent — genau das Modell von
   Aroundhome/Check24/MyHammer. Dort schlagen wir die *nationalen* Aggregatoren
   durch **hyperlokale Spezifität** (echte Niendorf-/Stadtteil-Bezüge), wo deren
   Templates generisch-bundesweit bleiben. Mechanik: `areaServed`-Schema plus eine
   Hamburg-Sektion auf der Seite — über den `RegionNote`-Block (rendert derzeit nur
   für `carport`/`smarthome`) oder, für andere Cluster wie `energie`, als
   handgeschriebene Hamburg-Sektion, bis `RegionNote` darauf ausgeweitet ist. Ein
   #1 für ein lokales 200-Suchen-Keyword schlägt #8 für ein 50k-Keyword.
2. **Topical Authority durch Cluster-Tiefe.** Eine Einzelseite verliert; 8–10 eng
   verlinkte Seiten zu einem Thema signalisieren Google regionale Themen-Autorität.
   Die Cluster-Mechanik (`RATGEBER_PAGES` + `RelatedRatgeber`) ist die Waffe — je
   dichter das interne Netz, desto besser ranken **alle** Seiten des Clusters.
3. **Neutralität + Ehrlichkeit.** Die Verkäufer (enpal/thermondo/1komma5) können
   strukturell nicht schreiben „im unsanierten Altbau lohnt es sich oft nicht" oder
   „in Teilen Hamburgs ist Fernwärme besser". Als neutraler **Vermittler** können
   wir das — der herstellerfreie Ton erzeugt Vertrauen, Links und Erwähnungen. Jede
   Seite bekommt einen ehrlichen „wann lohnt es sich *nicht*"-Teil.
4. **GEO (AI-Antwortmaschinen).** ChatGPT/Perplexity/Google AI Overviews zitieren
   präzise, strukturierte, ehrliche Quellen — nicht die größte Marke. TlDr+Zahl,
   FAQ-Schema, maschinenlesbare `CostTable`s und konkrete Hamburg-Aussagen lassen
   eine kleine, scharfe Seite hier überproportional punkten.

## Playbook (Priorität)

1. **Hyperlokale organische Seiten** — „[Leistung] Hamburg/[Stadtteil]"-Framing
   via `areaServed`-Schema + Hamburg-Sektion (`RegionNote` für `carport`/`smarthome`,
   sonst handgeschrieben — siehe Front 1), spezifischer als die national-generischen
   Aggregatoren. (Kein GBP/Local-Pack — wir sind Aggregator. Ein einzelner
   generischer Unternehmenseintrag ist optional, aber kein Ranking-Hebel für
   einzelne Leistungen.)
2. **Cluster fertig bauen**, bevor neue Themen geöffnet werden (Tiefe vor Breite).
3. **Pro Seite den Hamburg-Winkel schärfen**, den keiner hat (dichte Bebauung,
   Außengerät/Lärm, Denkmalschutz, Fernwärme-Pflichtgebiete, Reihenhaus).
4. **Ehrlichkeit als Markenzeichen** — „wann lohnt es sich *nicht*" auf jeder Seite.
5. **Long-Tail-Entscheidungsfragen** abgreifen, die die Großen zu generisch lassen.

## Anwendung pro Seite

- Primär-Keyword = der nicht-geo-Term (Google lokalisiert selbst); „Hamburg" lebt
  in H1/Content + lokalem „Festpreis/in der Nähe"-Winkel, nicht im Slug.
- Intents sauber trennen — ein Intent = eine Seite, sonst Kannibalisierung.
- Immer: TlDr+Zahl, frageförmige H2s, `CostTable`, `Faq`, Cluster-Cross-Links.
- Quelle der Keyword-Daten + gelernte Muster: `research/seo/keywords/`.
