# wissivity

Educational Activity game

## Lokaler Start

### Nur Frontend (wie bisher)
Öffne `index.html` direkt im Browser.

### Mit globalem Kartensatz-Speicher (empfohlen)
Starte den integrierten Server, damit eigene Kartensätze über `/api/custom-datasets` zentral gespeichert werden und auf allen Clients verfügbar sind:

```bash
node server.js
```

Danach im Browser öffnen:

- `http://localhost:3000`

Die Daten werden serverseitig in `data/custom-datasets.json` abgelegt.
Falls die API nicht erreichbar ist, nutzt die App automatisch den lokalen Browser-Speicher als Fallback.
