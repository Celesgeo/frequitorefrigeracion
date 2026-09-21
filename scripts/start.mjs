import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT || 8080);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const indexFile = path.join(root, "index.html");

if (!existsSync(indexFile)) {
  console.error(`No se encontró ${indexFile}. El build no copió dist.`);
  process.exit(1);
}

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0] || "/");
  const candidate = path.normalize(path.join(root, decoded));
  if (!candidate.startsWith(root)) return indexFile;
  if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  if (existsSync(path.join(candidate, "index.html"))) return path.join(candidate, "index.html");
  return indexFile;
}

const server = createServer((req, res) => {
  const filePath = resolveFile(new URL(req.url || "/", "http://127.0.0.1").pathname);
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    "Content-Type": types[ext] || "application/octet-stream",
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
  });
  createReadStream(filePath)
    .on("error", () => {
      if (!res.headersSent) res.writeHead(500);
      res.end();
    })
    .pipe(res);
});

server.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

server.listen(port, () => {
  console.log(`Fresquito listening on port ${port}`);
});
