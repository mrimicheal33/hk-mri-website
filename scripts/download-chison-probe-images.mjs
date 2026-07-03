import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/products/sonoeye-probes");

/** Official CHISON SonoEye listing product shots (probe + cable). */
const probes = [
  {
    slug: "p1",
    card: "https://www.chison.com/data/watermark/20210805/610b9ee47e405.png",
    hero: "https://www.chison.com/data/watermark/20210805/610b9ef08c456.png",
  },
  {
    slug: "p2",
    card: "https://www.chison.com/data/watermark/20210805/610b9ebbbd6d3.png",
    hero: "https://www.chison.com/data/watermark/20210805/610b9ec7de0eb.png",
  },
  {
    slug: "p3",
    card: "https://www.chison.com/data/watermark/20210805/610b9e82d9cb7.png",
    hero: "https://www.chison.com/data/watermark/20210805/610b9e93b59a2.png",
  },
  {
    slug: "p5",
    card: "https://www.chison.com/data/watermark/20210805/610b9e0d0fd6b.png",
    hero: "https://www.chison.com/data/watermark/20210805/610b9e36ac938.png",
  },
  {
    slug: "p6",
    card: "https://www.chison.com/data/watermark/20210805/610b9d5495c27.png",
    hero: "https://www.chison.com/data/watermark/20210811/611369bd1bd31.png",
  },
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`Saved ${dest} (${(buf.length / 1024).toFixed(1)} KB)`);
}

await mkdir(outDir, { recursive: true });

for (const probe of probes) {
  await download(probe.card, path.join(outDir, `${probe.slug}.png`));
  await download(probe.hero, path.join(outDir, `${probe.slug}-hero.png`));
}

console.log("Done.");
