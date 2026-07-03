import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ref = path.join(__dirname, "../public/images/products/sonoeye-probes/probe-sheet-reference.png");
const outDir = path.join(__dirname, "../public/images/products/sonoeye-probes");

const col = 341;

// Probe hardware + cable only (no MHz / application labels).
const probes = [
  { id: "p1", left: 10, top: 4, width: 128, height: 292 },
  { id: "p2", left: col + 10, top: 4, width: 122, height: 292 },
  { id: "p3", left: col * 2 + 8, top: 4, width: 118, height: 292 },
  { id: "p5", left: 145, top: 296, width: 128, height: 280 },
  { id: "p6", left: col + 145, top: 296, width: 128, height: 280 },
];

for (const probe of probes) {
  await sharp(ref)
    .extract(probe)
    .resize({ width: 900, height: 1200, fit: "contain", background: "#ffffff" })
    .sharpen({ sigma: 0.6 })
    .png({ compressionLevel: 6 })
    .toFile(path.join(outDir, `${probe.id}.png`));
  console.log(`Created ${probe.id}.png`);
}
