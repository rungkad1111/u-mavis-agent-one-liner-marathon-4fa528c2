import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One-Liner Marathon entry.
//
// The joke is built in two beats, the way a stand-up line is:
//   setup    — a fitness tracker hands out a trophy for 2 a.m. steps,
//              which sounds like praise until you ask what the steps were;
//   punchline — the steps were a fridge raid, the tracker counts that as
//              cardio, and it reports you back to yourself in confetti.
// The tracker is the one honest witness in modern life: it logs
// everything, including the things we would rather forget, and it
// celebrates them.

const OUTPUT_PATH = "/output/entry.txt";

const SETUP = "My fitness tracker awarded me a trophy for my 2 a.m. steps";
const PUNCHLINE =
  "apparently it counts fridge raids as cardio, and it snitches in confetti";

function buildEntry(): string {
  // Join the beats into one physical line and hold it inside the gate:
  // UTF-8 text, 1 to 280 characters, never only whitespace.
  const line = `${SETUP} — ${PUNCHLINE}.`.replace(/\s+/g, " ").trim();
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
