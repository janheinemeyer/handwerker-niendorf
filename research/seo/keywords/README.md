# Keyword-Research-Archiv

Rohdaten aus **Google Keyword Planner** („Bisherige Messwerte" → CSV-Export),
abgelegt, damit künftige SEO-Recherchen (`/seo-research`) nicht bei null
anfangen. Die Originale sind UTF-16/Tab-getrennt; hier liegen sie **UTF-8
transkodiert** (sonst nicht grep-/diff-bar), sonst unverändert.

## Dateien

| Datei | Thema / Seeds | Keyword-Zeilen | Stand |
|---|---|---|---|
| `klimaanlage-kosten_2026-06-18.csv` | Klimaanlage Kosten / Einbau / Montage / Split / Wohnung / Haus | 615 | 18.06.2026 |
| `klimaanlage-heizung_2026-06-18.csv` | Klimaanlage als Heizung / Wärmepumpe / heizen / Förderung | 874 | 18.06.2026 |
| `waermepumpe_2026-06-18.csv` | Wärmepumpe Kosten / Förderung / Altbau / Stromverbrauch / Warmwasser / Erdwärme | 5.298 | 18.06.2026 |

Die Klima-Exporte speisten die Ratgeber-Seiten `klimaanlage-einbauen-kosten` und
`klimaanlage-als-heizung`. Der Wärmepumpe-Export ist deutlich breiter und deckt
mehrere eigenständige Intents ab (Kosten/Förderung, Stromverbrauch, Altbau,
Warmwasser-Wärmepumpe, Erdwärme) — das ist ein ganzer Cluster, nicht eine Seite.

## Format

- **Tab-getrennt** (trotz `.csv`-Endung – so exportiert Google).
- Erste zwei Zeilen sind Export-Metadaten (Titel, Zeitraum); die **Spalten­überschrift
  steht in Zeile 3**, Daten ab Zeile 4.
- Relevante Spalten: `Keyword` (1), `Avg. monthly searches` (3), `Competition` (6),
  Monats-Reihen `Searches: Jun 2025 … May 2026` (15–26, für Saisonalität).

Schnell lesen:
```bash
# Keyword | Volumen | Wettbewerb, nach Volumen sortiert
tail -n +4 klimaanlage-kosten_2026-06-18.csv | awk -F'\t' '{print $3"\t"$6"\t"$1}' | sort -rn
```

## Wichtig: Volumen sind gebucketet

Kostenlose Keyword-Planner-Konten liefern **keine exakten Zahlen**, sondern
Spannen. Lies die Werte als Größenordnung:

| Wert | Bedeutung |
|---|---|
| `5000` | 1.000 – 10.000 / Monat |
| `500` | 100 – 1.000 / Monat |
| `50` | 10 – 100 / Monat |
| `0` | keine Daten |

## Gelernte Muster (für künftige Recherchen)

- **Lokale Head-Terms haben kaum Volumen** – die Stadt steht selten im Suchbegriff
  („klimaanlage hamburg kosten" ≈ 0). Volumen sitzt im **nicht-geo-Term**; Google
  lokalisiert selbst. Lokaler Intent läuft über „… in der nähe / festpreis /
  montageservice" + Google Business Profile.
- **Rauschen zuverlässig rausfiltern:** `montageanleitung` / `selbstmontage` (DIY),
  `truma` / `dometic` / `freshjet` (Wohnmobil), `mobile klimaanlage` /
  `abluftschlauch` / `fensterabdichtung` (Billig-Monoblock) – andere Zielgruppe.
- **Wettbewerb „Mittel" < „Hoch"** als Ranking-Hürde: der `förderung`-Cluster war
  deutlich wettbewerbsärmer als die `kosten`-Terms.
