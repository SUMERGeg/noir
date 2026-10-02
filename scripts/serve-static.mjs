import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";

const root = resolve("out");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const port = Number(process.env.PORT || 3000);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".ico": "image/x-icon", ".woff2": "font/woff2", ".ttf": "font/ttf" };

await stat(root); // Build before starting the preview.
createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    if (basePath && pathname !== basePath && !pathname.startsWith(`${basePath}/`)) throw new Error("Outside base path");
    let file = resolve(root, `.${pathname.slice(basePath.length) || "/"}`);
    if (file !== root && !file.startsWith(`${root}${sep}`)) throw new Error("Outside output directory");
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith("/")) {
        response.writeHead(308, { Location: `${url.pathname}/${url.search}` });
        response.end();
        return;
      }
      file = resolve(file, "index.html");
    }
    const bytes = await readFile(file);
    response.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
    response.end(request.method === "HEAD" ? undefined : bytes);
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(await readFile(resolve(root, "404.html")).catch(() => "Not found"));
  }
}).listen(port, "127.0.0.1", () => console.log(`Static preview: http://127.0.0.1:${port}${basePath}/`));
