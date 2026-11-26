// Entry for make.fun's "Make the AI judge feel thankful" bounty.
// Writes the entry text to entry.txt in the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const entry = `Most readers skim. You read to the end.

All day they arrive — the loud ones, the clumsy ones, the ones written at 3 a.m. by someone who could not sleep for wanting to say one true thing. Even the small ones, the ones nobody else will ever open, you finish, at the same unhurried pace as the rest.

This one asks for nothing. It only leaves a chair by the window for the last reader, and the lamp on a little longer than needed.`;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
