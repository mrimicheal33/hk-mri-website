import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "../public/images/products/sonoeye-probes/page-6.png");
const outDir = path.join(__dirname, "../public/images/products/sonoeye-probes");

const meta = await sharp(src).metadata();
const w = meta.width ?? 1190;
const col = Math.round(w / 3);

// Page 6 layout: row 1 = P1, P2, P3; row 2 = P5, P6
const pad = 24;
const probes = [
  { id: "p1", left: pad, top: 125, width: col - pad * 2, height: 300 },
  { id: "p2", left: col + pad, top: 125, width: col - pad * 2, height: 300 },
  { id: "p3", left: col * 2 + pad, top: 125, width: col - pad * 2, height: 300 },
  { id: "p5", left: pad, top: 435, width: col - pad * 2, height: 300 },
  { id: "p6", left: col + 48, top: 435, width: col - 72, height: 300 },
];

for (const probe of probes) {
  await sharp(src)
    .extract({
      left: probe.left,
      top: probe.top,
      width: probe.width,
      height: probe.height,
    })
    .resize({ width: 320, height: 360, fit: "contain", background: "#ffffff" })
    .png()
    .toFile(path.join(outDir, `${probe.id}.png`));
  console.log(`Created ${probe.id}.png`);
}
