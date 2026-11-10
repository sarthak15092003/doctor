import fs from "node:fs";
import path from "node:path";
import http from "node:http";

const distDir = path.resolve(process.cwd(), "dist");
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 1. Copy client build assets from .output/public
const srcPublic = path.resolve(process.cwd(), ".output", "public");
if (fs.existsSync(srcPublic)) {
  fs.cpSync(srcPublic, distDir, { recursive: true });
}

// 2. Copy public directory assets if missing
const pubDir = path.resolve(process.cwd(), "public");
if (fs.existsSync(pubDir)) {
  fs.cpSync(pubDir, distDir, { recursive: true });
}

// 3. Include server bundle
const srcServer = path.resolve(process.cwd(), ".output", "server");
if (fs.existsSync(srcServer)) {
  fs.cpSync(srcServer, path.resolve(distDir, "server"), { recursive: true });
}

// 4. Add .htaccess for Apache / cPanel / Shared Hosting
const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`;
fs.writeFileSync(path.resolve(distDir, ".htaccess"), htaccess, "utf8");

// 5. Fetch prerendered HTML from local dev server if available
const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/services": "services.html",
  "/contact": "contact.html",
  "/blog": "blog.html",
  "/appointment": "appointment.html",
};

async function exportPages() {
  for (const [route, file] of Object.entries(routes)) {
    try {
      const res = await fetch(`http://localhost:8080${route}`);
      if (res.ok) {
        const html = await res.text();
        fs.writeFileSync(path.resolve(distDir, file), html, "utf8");
        if (route !== "/") {
          const folder = path.resolve(distDir, route.replace(/^\//, ""));
          fs.mkdirSync(folder, { recursive: true });
          fs.writeFileSync(path.resolve(folder, "index.html"), html, "utf8");
        }
        console.log(`Exported ${route} -> ${file}`);
      }
    } catch {
      // dev server might not be active, fallback silently
    }
  }
  console.log("Ready in dist/");
}

await exportPages();

