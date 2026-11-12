import { environment } from "../src/environments/environment.ts";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://arpracing.be";
// Use API_URL from environment or GitHub secret, with duckdns fallback
// In GitHub Actions workflow, this should be set from: ${{ secrets.API_URL }}
const API_URL =
  process.env.API_URL ||
  process.env.API_URL_PROD ||
  environment.apiUrl ||
  "https://arpracing.duckdns.org/api/api/";

const staticRoutes = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/portfolio", priority: "0.9", changefreq: "weekly" },
  { path: "/library", priority: "0.9", changefreq: "weekly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
];

async function generateSitemap() {
  const currentDate = new Date().toISOString();
  let dynamicRoutes = [];

  try {
    // Fetch dynamic event folders from the backend API
    const response = await fetch(`${API_URL}/library`);

    if (response.ok) {
      const json = await response.json();
      if (json.data) {
        const eventNames = Object.keys(json.data);
        dynamicRoutes = eventNames.map((name) => ({
          path: `/archive/${encodeURIComponent(name)}`,
          priority: "0.8",
          changefreq: "monthly",
        }));
      }
    }
  } catch (err) {
    console.warn(
      "Could not fetch dynamic events from backend API, continuing with static routes:",
      err.message,
    );
    // Fallback to hardcoded event names if API call fails
    dynamicRoutes = [
      { path: "/archive", priority: "0.8", changefreq: "monthly" },
    ];
  }

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const xmlUrls = allRoutes
    .map(
      (r) => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
    )
    .join("\n");

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Generated automatically by generate-sitemap.js -->
${xmlUrls}
</urlset>`;

  const outputPath = path.join(__dirname, "../public/sitemap.xml");
  fs.writeFileSync(outputPath, sitemapXml, "utf8");
  console.log(
    `Successfully generated sitemap.xml with ${allRoutes.length} routes at ${outputPath}`,
  );
}

generateSitemap();
