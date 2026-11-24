import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: a quiet moment, a small person, a long effort
// finally landing. Written fresh for make.fun's "One Line of Earned Pride".

/**
 * Returns the entry line: one line, 1-240 characters, no trailing newline.
 * The text is fixed and deterministic; the helper exists so the line has a
 * single source of truth shared by the file write and the stdout print.
 */
function entryText(): string {
  return "In front of the whole class, Mara read the page aloud without stopping once, and her stutter stayed quiet for the first time all year.";
}

/**
 * Writes `text` to `<dir>/entry.txt` with exactly that content and no
 * trailing newline. Creates `dir` first. Any failure is swallowed: a
 * failed write must never break the run, the line still goes to stdout.
 */
function writeEntryFile(dir: string, text: string): void {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), text, "utf8");
  } catch {
    // Ignore: stdout below is the guaranteed delivery path.
  }
}

const LINE = entryText();
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

writeEntryFile(outDir, LINE);

process.stdout.write(LINE + "\n");
