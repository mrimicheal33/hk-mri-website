import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const page = path.join(__dirname, "../public/images/products/sonoeye-probes/page-6.png");
const outDir = path.join(__dirname, "../public/images/products/sonoeye-probes");

const resize = { width: 400, height: 560, fit: "contain", background: "#ffffff" };

const row1 = [
  { id: "p1", left: 22, top: 122, width: 130, height: 292 },
  { id: "p2", left: 419, top: 122, width: 125, height: 292 },
  { id: "p3", left: 816, top: 122, width: 130, height: 292 },
];

for (const probe of row1) {
  await sharp(page)
    .extract(probe)
    .resize(resize)
    .png()
    .toFile(path.join(outDir, `${probe.id}.png`));
  console.log(`Created ${probe.id}.png`);
}

const row2LeftPanel = await sharp(page)
  .extract({ left: 0, top: 400, width: 400, height: 350 })
  .toBuffer();

await sharp(row2LeftPanel)
  .extract({ left: 118, top: 128, width: 135, height: 220 })
  .resize(resize)
  .png()
  .toFile(path.join(outDir, "p5.png"));
console.log("Created p5.png");

await sharp(page)
  .extract({ left: 538, top: 480, width: 138, height: 270 })
  .resize(resize)
  .png()
  .toFile(path.join(outDir, "p6.png"));
console.log("Created p6.png");
