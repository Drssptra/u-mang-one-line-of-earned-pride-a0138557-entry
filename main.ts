import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: a quiet moment, a small person, a long effort
// finally landing. Written fresh for make.fun's "One Line of Earned Pride".
const LINE =
  "In front of the whole class, Mara read the page aloud without stopping once, and her stutter stayed quiet for the first time all year.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
} catch {
  // A failed write must never break the run; the line still goes to stdout.
}

process.stdout.write(LINE + "\n");
