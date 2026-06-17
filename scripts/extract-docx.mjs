import fs from "fs";
import path from "path";
import os from "os";
import { execSync } from "child_process";

const docx = process.argv[2];
const temp = path.join(os.tmpdir(), "lhdoc-extract");
const zip = path.join(os.tmpdir(), "lhdoc.zip");

if (fs.existsSync(temp)) fs.rmSync(temp, { recursive: true });
fs.copyFileSync(docx, zip);
execSync(
  `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zip}' -DestinationPath '${temp}' -Force"`,
);

const xml = fs.readFileSync(path.join(temp, "word", "document.xml"), "utf8");
const texts = [...xml.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((m) => m[1]);
console.log(texts.join("\n"));

const mediaDir = path.join(temp, "word", "media");
if (fs.existsSync(mediaDir)) {
  console.log("\n--- MEDIA ---");
  for (const file of fs.readdirSync(mediaDir)) console.log(file);
}
