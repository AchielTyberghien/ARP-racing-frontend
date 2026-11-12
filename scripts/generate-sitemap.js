/**
 * Script to generate sitemap.xml dynamically by fetching event routes from backend API.
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require("fs");
const path = require("path");

const DOMAIN = "https://arpracing.be";
const API_URL = process.env.API_URL || "http://localhost:3000"; // Default to localhost if not set

const staticRoutes = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/portfolio", priority: "0.9", changefreq: "weekly" },
  { path: "/library", priority: "0.9", changefreq: "weekly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/archive", priority: "0.7", changefreq: "monthly" },
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
      { path: "/archive/monaco-2024", priority: "0.8", changefreq: "monthly" },
      { path: "/archive/spa-2024", priority: "0.8", changefreq: "monthly" },
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
