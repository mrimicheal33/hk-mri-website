import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pptx =
  "C:/Users/user/Desktop/Perlove/Veterinary_C-arm_Market_Strategy_VET1120_Entry_Plan.pptx";
const tmp = path.join(__dirname, "_pptx-tmp");

fs.rmSync(tmp, { recursive: true, force: true });
fs.mkdirSync(tmp, { recursive: true });
execSync(`tar -xf "${pptx}" -C "${tmp}"`, { stdio: "inherit" });

const slidesDir = path.join(tmp, "ppt/slides");
const files = fs
  .readdirSync(slidesDir)
  .filter((f) => f.endsWith(".xml"))
  .sort(
    (a, b) =>
      parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10)
  );

for (const file of files) {
  const xml = fs.readFileSync(path.join(slidesDir, file), "utf8");
  const texts = [...xml.matchAll(/<a:t>([^<]*)<\/a:t>/g)]
    .map((m) => m[1])
    .filter(Boolean);
  if (texts.length) {
    console.log(`--- ${file} ---`);
    console.log(texts.join("\n"));
    console.log();
  }
}
