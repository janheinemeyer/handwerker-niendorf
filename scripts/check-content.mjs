// Content lint for Ratgeber/SEO pages — catches two recurring authoring mistakes
// that otherwise only surface as a late, cryptic `next build` failure:
//
//   1. A German opening quote „ closed with a STRAIGHT " instead of a curly “.
//      Inside a double-quoted JS string (e.g. an `a:` in a FaqItem) the straight
//      quote terminates the string and breaks the build.
//   2. `className` passed to a prose component (<P>/<H2>/<H3>/<TlDr>) — these only
//      accept `children` (and H2 `id`, TlDr `label`), so this is a type error.
//
// Run via `npm run lint` (chained) or standalone `node scripts/check-content.mjs`.

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = "src";

/** Recursively collect .tsx files under a directory. */
function tsxFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...tsxFiles(path));
    else if (entry.name.endsWith(".tsx")) out.push(path);
  }
  return out;
}

const CHECKS = [
  {
    // „ … "  — German opening quote whose closer is a straight double quote
    // (no curly “ before it). The negated class also excludes „ so a second
    // opening quote starts a fresh match instead of spanning.
    re: /„[^“„]*"/,
    msg: 'Straight " closing a German „…" — use a curly “ (breaks the build inside JS strings).',
  },
  {
    // className on a prose component that doesn't accept it.
    re: /<(?:P|H2|H3|TlDr)\b[^>]*\bclassName=/,
    msg: "className on a prose component (<P>/<H2>/<H3>/<TlDr>) — they only accept children (H2: id, TlDr: label).",
  },
];

const violations = [];
for (const file of tsxFiles(ROOT)) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const { re, msg } of CHECKS) {
      if (re.test(line)) violations.push(`${file}:${i + 1}  ${msg}\n    ${line.trim()}`);
    }
  });
}

if (violations.length) {
  console.error(`\n✖ content check failed (${violations.length}):\n`);
  console.error(violations.join("\n\n"));
  console.error("");
  process.exit(1);
}
console.log("✓ content check passed");
