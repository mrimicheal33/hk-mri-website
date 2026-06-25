import sharp from "sharp";

const path = "public/images/products/mini800-card.png";
const meta = await sharp(path).metadata();
const w = meta.width;
const h = meta.height;

// Remove "PDF to Word" browser/extension badge (top-right corner).
const badgeW = 200;
const badgeH = 52;
const badgeX = w - badgeW - 4;
const badgeY = 4;

const svg = `<svg width="${w}" height="${h}">
  <rect x="${badgeX}" y="${badgeY}" width="${badgeW}" height="${badgeH}" fill="#ffffff"/>
</svg>`;

await sharp(path)
  .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
  .png()
  .toFile("public/images/products/mini800-card-fixed.png");

console.log(`Erased badge at x=${badgeX}-${badgeX + badgeW}, y=${badgeY}-${badgeY + badgeH}`);
