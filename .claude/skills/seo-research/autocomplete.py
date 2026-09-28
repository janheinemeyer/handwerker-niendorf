#!/usr/bin/env python3
"""Google-Autocomplete-Mining für die SEO-Recherche (Phase 2).

Fragt den öffentlichen Suggest-Endpoint (hl=de, gl=de) für jeden Seed ab:
Seed allein, Seed + a–z, Seed + Frage-/Lokal-Präfixe. Gibt aus:
Top-Vorschläge (Reihenfolge = relativer Popularitäts-Proxy, KEIN Volumen),
häufigste Modifikatoren, Fragen, Hamburg-Varianten.

Mit --page wird zusätzlich geprüft, welche Top-Modifikatoren in der Seite
nicht vorkommen (grober Lücken-Check, kein Beweis).

Beispiel:
  python3 .claude/skills/seo-research/autocomplete.py "wohnung streichen" "maler kosten" \
      --page src/app/ratgeber/wohnung-streichen-kosten/page.tsx --raw /tmp/ac.json
"""
import argparse, collections, json, re, string, sys, time, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor

PREFIXES = ["wie viel kostet {s}", "was kostet {s}", "{s} lohnt sich", "{s} hamburg",
            "{s} erfahrungen", "{s} selber", "{s} vs", "{s} oder", "{s} pro",
            "{s} förderung", "{s} genehmigung", "{s} ohne"]
STOP = set("der die das und in im für mit von zu auf ein eine einen was wie viel kostet "
           "kosten oder pro sich lohnt".split())
QUESTION = re.compile(r"^(wie|was|wann|welche|wo|warum|lohnt|braucht|darf|kann|muss|ist)\b|lohnt sich")


def suggest(term):
    url = ("https://suggestqueries.google.com/complete/search?client=firefox&hl=de&gl=de&q="
           + urllib.parse.quote(term))
    for _ in range(3):
        try:
            with urllib.request.urlopen(url, timeout=10) as r:
                return json.loads(r.read().decode("utf-8", "replace"))[1]
        except Exception:
            time.sleep(2)
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("seeds", nargs="+")
    ap.add_argument("--page", help="page.tsx für den Lücken-Check")
    ap.add_argument("--raw", help="Rohdaten als JSON speichern")
    args = ap.parse_args()

    jobs = [(s, t) for s in args.seeds
            for t in [s, s + " "] + [f"{s} {c}" for c in string.ascii_lowercase]
            + [p.format(s=s) for p in PREFIXES]]
    with ThreadPoolExecutor(4) as ex:
        results = list(ex.map(lambda j: suggest(j[1]), jobs))
    rows = [{"seed": s, "query": t, "suggestions": r} for (s, t), r in zip(jobs, results)]
    failed = sum(r["suggestions"] is None for r in rows)
    if failed == len(rows):
        sys.exit("Keine Antworten von Google (blockiert oder offline) – keine Auswertung möglich.")
    if args.raw:
        with open(args.raw, "w", encoding="utf-8") as f:
            json.dump(rows, f, ensure_ascii=False, indent=0)

    score, words = collections.Counter(), collections.Counter()
    for r in rows:
        # Words we typed into the query (seed, prefix) aren't modifiers Google suggested.
        typed = set(re.findall(r"[a-zäöüß0-9]+", r["query"].lower()))
        for i, x in enumerate(r["suggestions"] or []):
            score[x] += 10 - i
            for w in set(re.findall(r"[a-zäöüß0-9]+", x.lower())):
                if w not in typed and w not in STOP and len(w) > 2:
                    words[w] += 1

    print(f"# Autocomplete: {', '.join(args.seeds)}  ({len(rows)} Abfragen, {failed} fehlgeschlagen)\n")
    for s in args.seeds:
        base = next(r["suggestions"] for r in rows if r["query"] == s) or []
        print(f"**{s}** → " + " | ".join(base[:10]))
    print("\n**Modifikatoren:** " + ", ".join(f"{w}({c})" for w, c in words.most_common(30)))
    qs = sorted((x for x in score if QUESTION.search(x)), key=lambda x: -score[x])[:20]
    print("\n**Fragen (→ H2 / FAQ):**\n" + "\n".join(f"- {q}" for q in qs))
    hh = sorted((x for x in score if "hamburg" in x), key=lambda x: -score[x])[:10]
    print("\n**Hamburg:** " + " | ".join(hh))

    if args.page:
        text = open(args.page, encoding="utf-8").read().lower()
        missing = [w for w, _ in words.most_common(40) if w not in text]
        print(f"\n**Nicht in {args.page}:** " + ", ".join(missing))


if __name__ == "__main__":
    main()
