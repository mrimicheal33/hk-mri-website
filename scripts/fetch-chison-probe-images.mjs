const pages = [
  { slug: "p1", url: "https://www.chison.com/sonoeye/sonoeye-p1.html" },
  { slug: "p2", url: "https://www.chison.com/sonoeye/sonoeye-p2.html" },
  { slug: "p3", url: "https://www.chison.com/sonoeye/sonoeye-p3.html" },
  { slug: "p5", url: "https://www.chison.com/sonoeye/sonoeye-p5.html" },
  { slug: "p6", url: "https://www.chison.com/sonoeye/sonoeye-p6.html" },
];

const mainUrl = "https://www.chison.com/sonoeye/";

async function extractImages(url) {
  const res = await fetch(url);
  const html = await res.text();
  const imgs = [...html.matchAll(/(?:src|data-src|data-original)=["']([^"']+\.(?:jpg|jpeg|png|webp)[^"']*)["']/gi)]
    .map((m) => m[1])
    .filter((src) => !src.includes("logo") && !src.includes("icon") && !src.includes("banner"));
  return [...new Set(imgs)];
}

const mainHtml = await fetch(mainUrl).then((r) => r.text());
console.log("=== MAIN PAGE IMAGES ===");
const mainImgs = [...mainHtml.matchAll(/(?:src|data-src|data-original)=["']([^"']+\.(?:jpg|jpeg|png|webp)[^"']*)["']/gi)]
  .map((m) => m[1]);
for (const img of [...new Set(mainImgs)]) {
  if (/p[0-9]|sonoeye|probe/i.test(img)) console.log(img);
}

for (const page of pages) {
  console.log(`\n=== ${page.slug.toUpperCase()} ===`);
  const imgs = await extractImages(page.url);
  for (const img of imgs.slice(0, 15)) console.log(img);
}
