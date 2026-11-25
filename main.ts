import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One-Liner Marathon entry.
//
// The joke: a fitness tracker is the one honest witness in modern life —
// it logs everything, including the things we would rather forget. The
// turn is that the tracker did not just record the 2 a.m. fridge trip,
// it judged it, in writing, with a trophy emoji's worth of sarcasm.

const OUTPUT_PATH = "/output/entry.txt";

const LINE =
  "My fitness tracker congratulated me on my 2 a.m. steps, which is how I learned it counts fridge raids as cardio and snitches with a trophy.";

function buildEntry(): string {
  // Keep the line to a single physical line and inside the 280-char gate.
  const line = LINE.replace(/\s+/g, " ").trim();
  if (line.length === 0 || line.length > 280) {
    throw new Error(`entry line out of bounds: ${line.length} chars`);
  }
  return line;
}

function main(): void {
  const text = buildEntry();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
}

main();
