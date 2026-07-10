const mainHtml = await fetch("https://www.chison.com/sonoeye/").then((r) => r.text());

// Find probe card sections
const probeLinks = [...mainHtml.matchAll(/sonoeye-p(\d)\.html/gi)];
console.log("probe links:", probeLinks.map((m) => m[0]));

// All img tags near sonoeye
const imgTags = [...mainHtml.matchAll(/<img[^>]+>/gi)];
for (const tag of imgTags) {
  if (/watermark|upload.*202108|upload.*202104|sonoeye|p[1-6]/i.test(tag[0])) {
    console.log(tag[0].slice(0, 200));
  }
}

// Look for background-image or data-src in probe sections
const bgImgs = [...mainHtml.matchAll(/url\(['"]?([^'")]+)['"]?\)/gi)];
for (const m of bgImgs) {
  if (/watermark|upload/i.test(m[1])) console.log("bg:", m[1]);
}
