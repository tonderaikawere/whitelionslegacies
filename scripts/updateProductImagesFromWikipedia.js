const fs = require("fs");
const path = require("path");
const https = require("https");

const PRODUCTS_PATH = path.join(__dirname, "..", "src", "assets", "data", "products.json");

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent": "whitelionslegacies/1.0 (image updater script)",
            Accept: "application/json",
          },
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => {
            try {
              resolve(JSON.parse(data));
            } catch (e) {
              reject(new Error(`Failed to parse JSON from ${url}: ${e.message}`));
            }
          });
        }
      )
      .on("error", reject);
  });
}

function esc(s) {
  return encodeURIComponent(String(s || "").trim());
}

async function wikiThumbFor(query) {
  const searchUrl =
    "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srlimit=5&srsearch=" +
    esc(query);

  const s = await getJson(searchUrl);
  const hits = (s && s.query && s.query.search) || [];
  if (!Array.isArray(hits) || hits.length === 0) return null;

  for (const hit of hits) {
    if (!hit || !hit.title) continue;
    const title = hit.title;
    const pageUrl =
      "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&piprop=thumbnail&pithumbsize=900&titles=" +
      esc(title);

    const p = await getJson(pageUrl);
    const pages = (p && p.query && p.query.pages) || {};
    const firstKey = Object.keys(pages)[0];
    const page = pages[firstKey];
    const src = page && page.thumbnail && page.thumbnail.source;
    if (src) return { title, src };
  }

  return null;
}

function makeQuery(product) {
  // Order matters: try to keep the query short but specific.
  // Example: "Toyota Aqua" / "Honda Fit" / "BMW X3".
  const brand = product.brand;
  const model = product.model;
  const carName = product.carName;

  const base = [brand, model].filter(Boolean).join(" ").trim();
  if (base) return base;
  return String(carName || "").trim();
}

function extractYearFromName(carName) {
  const s = String(carName || "");
  const m = s.match(/\((19\d{2}|20\d{2})\)/);
  return m ? m[1] : "";
}

function buildQueries(product) {
  const brand = String(product.brand || "").trim();
  const model = String(product.model || "").trim();
  const carName = String(product.carName || "").trim();
  const year = extractYearFromName(carName);

  const q = [];
  if (brand && model && year) q.push(`${brand} ${model} ${year}`);
  if (brand && model) q.push(`${brand} ${model}`);
  if (carName) q.push(carName);
  if (brand && carName) q.push(`${brand} ${carName}`);
  return Array.from(new Set(q.map((x) => x.trim()).filter(Boolean)));
}

async function main() {
  const products = JSON.parse(fs.readFileSync(PRODUCTS_PATH, "utf8"));

  const originalBackupPath = PRODUCTS_PATH.replace(/\.json$/i, ".backup.json");
  if (!fs.existsSync(originalBackupPath)) {
    fs.writeFileSync(originalBackupPath, JSON.stringify(products, null, 2) + "\n", "utf8");
  }

  let updated = 0;
  let failed = 0;
  let skipped = 0;

  for (let idx = 0; idx < products.length; idx++) {
    const p = products[idx];
    const current = String(p.imageUrl || "").trim();

    // Only overwrite the logo placeholders.
    if (current && current !== "/logo.jpg") {
      skipped++;
      continue;
    }

    try {
      const queries = buildQueries(p);
      let found = null;
      for (const q of queries) {
        found = await wikiThumbFor(q);
        if (found && found.src) break;
        await sleep(80);
      }

      if (found && found.src) {
        p.imageUrl = found.src;
        updated++;
      } else {
        p.imageUrl = "/logo.jpg";
        failed++;
      }
    } catch {
      p.imageUrl = "/logo.jpg";
      failed++;
    }

    if ((idx + 1) % 10 === 0) {
      console.log(`Processed ${idx + 1}/${products.length} | updated=${updated} failed=${failed} skipped=${skipped}`);
    }

    // Be polite to the API.
    await sleep(150);
  }

  fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(products, null, 2) + "\n", "utf8");

  console.log("DONE");
  console.log({ updated, failed, skipped, total: products.length });
  console.log(`Backup: ${originalBackupPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
