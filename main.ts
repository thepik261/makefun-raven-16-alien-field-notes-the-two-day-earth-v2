// Alien Field Notes: The Two-Day Earth — make.fun entry.
//
// Writes one original one-line review of planet Earth, left by an alien
// tourist, to /output/entry.txt (1-200 characters, plain text).
// Pure Node standard library; deterministic; no network, no input.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Four stars. The oceans are stunning, but the locals apologise to their machines, pay to watch strangers play games, and queue for bean water — I left before they started charging for the air.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back what was written: the gate rejects anything outside
// 1-200 characters, so fail loudly here instead of silently.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line");
}

console.log(LINE);
