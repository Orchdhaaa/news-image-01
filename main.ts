// "The World" — Sum up 13 November's world news in one image (news-image-01).
// Copies the bundled image to the output path, byte for byte.
// Deterministic: a plain byte copy, so every run writes identical bytes.
// (Post-open revision 1: comment wording only; output unchanged.)
// The bundled image is a JPEG (kept small: the 1 MiB cap); the output is
// still named entry.png, which the rules allow (PNG or JPEG by first bytes).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dst = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(src);
writeFileSync(dst, bytes);

// Verify the copy is byte-identical before exiting: a corrupt or partial
// write must fail loudly instead of silently shipping a broken image.
// (Post-open revision 2: comment wording only; output unchanged.)
if (!readFileSync(dst).equals(bytes)) {
  throw new Error("entry.png does not match the bundled image after copy");
}
