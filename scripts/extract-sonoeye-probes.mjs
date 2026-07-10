import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas, Image } from "canvas";

globalThis.Image = Image;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfPath =
  process.argv[2] ??
  "C:\\Users\\user\\Desktop\\SonoEye\\SonoEye Brochure.pdf";
const outDir = path.join(__dirname, "../public/images/products/sonoeye-probes");
const brochureOut = path.join(__dirname, "../public/brochures/sonoeye-brochure.pdf");

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.dirname(brochureOut), { recursive: true });
fs.copyFileSync(pdfPath, brochureOut);
console.log("Copied brochure to", brochureOut);

const data = new Uint8Array(fs.readFileSync(pdfPath));
const doc = await getDocument({ data, disableFontFace: true }).promise;
console.log("pages", doc.numPages);

for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const viewport = page.getViewport({ scale: 2 });
  const canvas = createCanvas(viewport.width, viewport.height);
  const ctx = canvas.getContext("2d");
  await page.render({ canvasContext: ctx, viewport }).promise;
  const outFile = path.join(outDir, `page-${i}.png`);
  fs.writeFileSync(outFile, canvas.toBuffer("image/png"));
  console.log("Rendered", outFile);
}
