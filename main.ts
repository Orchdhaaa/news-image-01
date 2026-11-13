// main.ts — news-image-01 entrypoint.
// Copies the bundled front-page image to the output directory and
// verifies the copy is byte-identical, so every run is deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "entry.png");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.png");

const image = readFileSync(sourcePath);
if (image.length === 0) {
  throw new Error("bundled image is empty");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, image);

const written = readFileSync(outputPath);
if (!image.equals(written)) {
  throw new Error("output does not match the bundled image");
}

console.log(`wrote ${outputPath} (${written.length} bytes, verified)`);
