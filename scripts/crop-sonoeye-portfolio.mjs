import sharp from "sharp";

const src = "public/images/products/sonoeye-hero.png";
const meta = await sharp(src).metadata();
const w = meta.width;
const h = meta.height;

// Tagline band only — left of probe/cable (doctor area begins ~x520+)
const overlayY = 330;
const overlayW = 500;

const svg = `<svg width="${w}" height="${h}">
  <rect x="0" y="${overlayY}" width="${overlayW}" height="${h - overlayY}" fill="#ffffff"/>
</svg>`;

await sharp(src)
  .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
  .png()
  .toFile("public/images/products/sonoeye-portfolio.png");

console.log(`Created sonoeye-portfolio.png (mask: x=0-${overlayW}, y=${overlayY}-${h})`);
