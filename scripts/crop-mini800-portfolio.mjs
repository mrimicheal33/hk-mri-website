import sharp from "sharp";

const src = "public/images/products/mini800-hero.png";
const meta = await sharp(src).metadata();
const w = meta.width;
const h = meta.height;

// Keep through "Battery Operated"; strip product-name block at the bottom.
const cropHeight = Math.round(h * 0.526);

const cropped = await sharp(src)
  .extract({ left: 0, top: 0, width: w, height: cropHeight })
  .png()
  .toBuffer();

// Erase leftover "Mini800 / Shear Wave..." on the lower-left (HTML caption replaces it).
const overlayY = Math.round(cropHeight * 0.94);
const overlayW = Math.round(w * 0.72);

const svg = `<svg width="${w}" height="${cropHeight}">
  <rect x="0" y="${overlayY}" width="${overlayW}" height="${cropHeight - overlayY}" fill="#ffffff"/>
</svg>`;

await sharp(cropped)
  .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
  .png()
  .toFile("public/images/products/mini800-portfolio.png");

console.log(
  `Created mini800-portfolio.png (${w}x${cropHeight}, mask y=${overlayY}-${cropHeight})`
);
