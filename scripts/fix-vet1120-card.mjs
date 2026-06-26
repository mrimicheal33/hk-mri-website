import sharp from "sharp";

const oldSrc =
  "C:/Users/user/.cursor/projects/c-Users-user-Documents-sonar/assets/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_bbf498e84528e420d743fa713e1d8685_images_image-cd21727b-8ed9-44b5-b67b-1d6a068ec8bf.png";
const newSrc =
  "C:/Users/user/.cursor/projects/c-Users-user-Documents-sonar/assets/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_bbf498e84528e420d743fa713e1d8685_images_Picture-40a942a4-e3e1-405b-90a1-bb97bf9fab05.png";
const output = "public/images/products/vet1120-card.png";

const CANVAS_W = 1024;
const CANVAS_H = 725;

// Original tagline placement from the marketing artwork.
const TEXT_BOX = { left: 106, top: 310, width: 300, height: 72 };

function isBackground(r, g, b) {
  if (r > 245 && g > 245 && b > 245) return true;
  if (r > 195 && g > 215 && b > 225 && b - r > 10 && b - g > 4) return true;
  if (r > 170 && g > 195 && b > 210 && b - r > 15) return true;
  return false;
}

function isTaglinePixel(r, g, b) {
  return (
    r < 120 &&
    g >= 58 &&
    g <= 165 &&
    b >= 120 &&
    b <= 205 &&
    b > g + 15 &&
    g > r + 20
  );
}

const { data: textData, info: textInfo } = await sharp(oldSrc)
  .extract(TEXT_BOX)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < textData.length; i += 4) {
  const r = textData[i];
  const g = textData[i + 1];
  const b = textData[i + 2];

  if (!isTaglinePixel(r, g, b)) {
    textData[i + 3] = 0;
  } else {
    textData[i + 3] = 255;
  }
}

const textLayer = await sharp(textData, {
  raw: { width: textInfo.width, height: textInfo.height, channels: 4 },
})
  .png()
  .toBuffer();

const productHeight = 670;
const product = await sharp(newSrc)
  .resize({ height: productHeight, fit: "inside" })
  .png()
  .toBuffer();
const productMeta = await sharp(product).metadata();
const productLeft = CANVAS_W - productMeta.width + 16;
const productTop = Math.round((CANVAS_H - productMeta.height) / 2) - 8;

const whiteCanvas = await sharp({
  create: {
    width: CANVAS_W,
    height: CANVAS_H,
    channels: 3,
    background: { r: 255, g: 255, b: 255 },
  },
})
  .png()
  .toBuffer();

await sharp(whiteCanvas)
  .composite([
    { input: product, left: Math.max(productLeft, 268), top: Math.max(productTop, 18) },
    { input: textLayer, left: TEXT_BOX.left, top: TEXT_BOX.top },
  ])
  .png({ compressionLevel: 0, adaptiveFiltering: false })
  .toFile(output);

console.log(`Saved ${output} (${CANVAS_W}x${CANVAS_H})`);
