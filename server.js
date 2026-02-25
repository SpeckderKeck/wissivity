const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const HOST = "0.0.0.0";
const PORT = Number.parseInt(process.env.PORT ?? "4173", 10);
const ROOT_DIR = __dirname;
const DB_FILE = path.join(ROOT_DIR, "data", "custom_datasets_db.json");

const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

async function ensureDbFile() {
  await fsp.mkdir(path.dirname(DB_FILE), { recursive: true });
  try {
    await fsp.access(DB_FILE, fs.constants.F_OK);
  } catch {
    await fsp.writeFile(DB_FILE, "[]\n", "utf-8");
  }
}

async function readGlobalDatasets() {
  await ensureDbFile();
  const content = await fsp.readFile(DB_FILE, "utf-8");
  const parsed = JSON.parse(content || "[]");
  return Array.isArray(parsed) ? parsed : [];
}

async function writeGlobalDatasets(datasets) {
  await ensureDbFile();
  await fsp.writeFile(DB_FILE, `${JSON.stringify(datasets, null, 2)}\n`, "utf-8");
}

async function handleApi(req, res, pathname) {
  if (pathname !== "/api/custom-datasets") {
    sendJson(res, 404, { error: "Not Found" });
    return true;
  }

  if (req.method === "GET") {
    const datasets = await readGlobalDatasets();
    sendJson(res, 200, datasets);
    return true;
  }

  if (req.method === "PUT") {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const rawBody = Buffer.concat(chunks).toString("utf-8");
    let parsed;
    try {
      parsed = JSON.parse(rawBody || "[]");
    } catch {
      sendJson(res, 400, { error: "Ungültiges JSON" });
      return true;
    }

    if (!Array.isArray(parsed)) {
      sendJson(res, 400, { error: "Payload muss ein Array sein" });
      return true;
    }

    await writeGlobalDatasets(parsed);
    sendJson(res, 200, { ok: true, count: parsed.length });
    return true;
  }

  sendJson(res, 405, { error: "Method Not Allowed" });
  return true;
}

async function serveStatic(req, res, pathname) {
  const cleanPath = pathname === "/" ? "/index.html" : pathname;
  const resolvedPath = path.normalize(path.join(ROOT_DIR, decodeURIComponent(cleanPath)));

  if (!resolvedPath.startsWith(ROOT_DIR)) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  try {
    const stats = await fsp.stat(resolvedPath);
    if (stats.isDirectory()) {
      const indexPath = path.join(resolvedPath, "index.html");
      const content = await fsp.readFile(indexPath);
      res.writeHead(200, { "Content-Type": CONTENT_TYPES[".html"] });
      res.end(content);
      return;
    }

    const ext = path.extname(resolvedPath).toLowerCase();
    const contentType = CONTENT_TYPES[ext] ?? "application/octet-stream";
    const content = await fsp.readFile(resolvedPath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  } catch {
    sendJson(res, 404, { error: "Not Found" });
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || `localhost:${PORT}`}`);
    const pathname = url.pathname;

    if (pathname.startsWith("/api/")) {
      await handleApi(req, res, pathname);
      return;
    }

    await serveStatic(req, res, pathname);
  } catch (error) {
    sendJson(res, 500, { error: "Serverfehler", details: String(error?.message || error) });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Wissivity läuft auf http://${HOST}:${PORT}`);
});
