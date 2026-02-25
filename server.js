const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const HOST = '0.0.0.0';
const PORT = Number.parseInt(process.env.PORT || '3000', 10);
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');
const DATA_FILE = path.join(DATA_DIR, 'custom-datasets.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
}

function sendJson(res, status, payload) {
  setCorsHeaders(res);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(payload));
}

function isDatasetPayload(payload) {
  return Array.isArray(payload);
}

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, '[]\n', 'utf8');
  }
}

async function readDatasets() {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, 'utf8');
  const parsed = JSON.parse(raw || '[]');
  if (!Array.isArray(parsed)) return [];
  return parsed;
}

async function writeDatasets(datasets) {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, `${JSON.stringify(datasets, null, 2)}\n`, 'utf8');
}

async function handleApi(req, res) {
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res);
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'GET') {
    const datasets = await readDatasets();
    return sendJson(res, 200, datasets);
  }

  if (req.method === 'PUT') {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString('utf8');
    let parsed;
    try {
      parsed = body ? JSON.parse(body) : [];
    } catch {
      return sendJson(res, 400, { error: 'invalid_json' });
    }

    if (!isDatasetPayload(parsed)) {
      return sendJson(res, 400, { error: 'invalid_payload' });
    }

    await writeDatasets(parsed);
    return sendJson(res, 200, { ok: true, count: parsed.length });
  }

  return sendJson(res, 405, { error: 'method_not_allowed' });
}

async function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const requestPath = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
  const filePath = path.join(ROOT_DIR, requestPath);
  const normalizedPath = path.normalize(filePath);

  if (!normalizedPath.startsWith(ROOT_DIR)) {
    setCorsHeaders(res);
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const stat = await fs.stat(normalizedPath);
    if (stat.isDirectory()) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const ext = path.extname(normalizedPath).toLowerCase();
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
    const content = await fs.readFile(normalizedPath);
    setCorsHeaders(res);
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(content);
  } catch {
    setCorsHeaders(res);
    res.writeHead(404);
    res.end('Not found');
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (url.pathname === '/api/custom-datasets') {
      await handleApi(req, res);
      return;
    }

    await serveStatic(req, res);
  } catch (error) {
    console.error(error);
    sendJson(res, 500, { error: 'server_error' });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Wissivity server running at http://${HOST}:${PORT}`);
});
