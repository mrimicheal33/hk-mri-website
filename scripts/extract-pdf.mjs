import fs from "fs";
import { PDFParse } from "pdf-parse";

const path = process.argv[2];
if (!path) {
  console.error("Usage: node scripts/extract-pdf.mjs <pdf-path>");
  process.exit(1);
}

const data = fs.readFileSync(path);
const parser = new PDFParse({ data });
const result = await parser.getText();
console.log(result.text);
await parser.destroy();
