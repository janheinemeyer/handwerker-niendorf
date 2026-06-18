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

1. **Lokaler Intent + Local Pack.** thermondo hat keine Niendorf-Präsenz.
   „… hamburg", „… in der nähe", „… eimsbüttel" + der Google-Maps-Pack sind
   Heimspiel — höchste Kaufabsicht, beste Conversion. Ein #1 für ein lokales
   200-Suchen-Keyword schlägt #8 für ein 50k-Keyword. Hängt mehr am **Google
   Business Profile + echten Bewertungen** als am Artikel.
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

1. **Google Business Profile + Bewertungen** — größter Hebel für lokale Dominanz,
   liegt *außerhalb* der Website. Gated auf echte NAP-Daten (aktuell Platzhalter;
   `telephone`/`geo` fehlen bewusst im Schema — siehe DECISIONS 2026-06-anchor).
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
