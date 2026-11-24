import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Resubmission for "One Line of Earned Pride": a fresh moment, not the
// first entry's — an older woman, a year of night classes, and a signature
// that finally belongs to her. One line, one read, no flourish.

const ENTRY =
  "At sixty-eight, after a year of night classes, Amira signed her own name on her grandson's birthday card, slowly, in ink, then underlined it twice.";

// Gate: one line, 1-240 characters, not only whitespace. Fail loudly here
// if an edit ever breaks it, instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-240 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

process.stdout.write(ENTRY + "\n");
