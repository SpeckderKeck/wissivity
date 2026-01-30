const timeSelect = document.getElementById("time-select");
const swapSelect = document.getElementById("swap-select");
const teamCountSelect = document.getElementById("team-count");
const teamColorsContainer = document.getElementById("team-colors");
const startButton = document.getElementById("start-game");
const menuPanel = document.getElementById("menu");
const gamePanel = document.getElementById("game");
const board = document.getElementById("board");
const rollButton = document.getElementById("roll");
const diceResult = document.getElementById("dice-result");
const statusText = document.getElementById("status");
const categoryCard = document.getElementById("category-card");
const categoryIcon = document.getElementById("category-icon");
const categoryLabel = document.getElementById("category-label");
const flipCategoryButton = document.getElementById("flip-category");
const wordCard = document.getElementById("word-card");
const wordTitle = document.getElementById("word-title");
const tabooList = document.getElementById("taboo-list");
const timerEl = document.getElementById("timer");
const correctButton = document.getElementById("correct");
const wrongButton = document.getElementById("wrong");
const swapButton = document.getElementById("swap");
const undoButton = document.getElementById("undo");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");
const csvUpload = document.getElementById("csv-upload");
const csvStatus = document.getElementById("csv-status");
const csvInfo = document.getElementById("csv-info");
const csvTooltip = document.getElementById("csv-tooltip");
const cardStack = document.querySelector(".card-stack");
const fullscreenToggle = document.getElementById("fullscreen-toggle");

const CATEGORY_ICONS = {
  Erklären: "💬",
  Zeichnen: "✏️",
  Pantomime: "🎭",
};

const DEFAULT_DATA = [
  { category: "Erklären", term: "Korrosion", taboo: ["Rost", "Metall", "Oxidation"] },
  { category: "Erklären", term: "Zündkerze", taboo: ["Motor", "Funk", "Verbrennung"] },
  { category: "Erklären", term: "Lagerschaden", taboo: ["Kugeln", "Welle", "Reibung"] },
  { category: "Erklären", term: "Hydraulik", taboo: ["Öl", "Druck", "Zylinder"] },
  { category: "Erklären", term: "Kupplung", taboo: ["Pedal", "Trennung", "Getriebe"] },
  { category: "Erklären", term: "Getriebeöl", taboo: ["Schmierung", "Viskosität", "Ölwechsel"] },
  { category: "Erklären", term: "Drehmoment", taboo: ["Kraft", "Hebel", "Newtonmeter"] },
  { category: "Erklären", term: "Rostschutz", taboo: ["Lack", "Zink", "Beschichtung"] },
  { category: "Erklären", term: "Bremsbelag", taboo: ["Scheibe", "Reibung", "Verschleiß"] },
  { category: "Erklären", term: "Schaltgabel", taboo: ["Gang", "Getriebe", "Führung"] },
  { category: "Erklären", term: "Zahnrad", taboo: ["Zähne", "Übersetzung", "Getriebe"] },
  { category: "Erklären", term: "Dichtung", taboo: ["Abdichten", "Öl", "Leck"] },
  { category: "Erklären", term: "Lagerfett", taboo: ["Schmierung", "Kugellager", "Temperatur"] },
  { category: "Erklären", term: "Federstahl", taboo: ["Elastisch", "Härte", "Stahl"] },
  { category: "Erklären", term: "Kondenswasser", taboo: ["Feuchtigkeit", "Luft", "Tropfen"] },
  { category: "Erklären", term: "Werkstoffprüfung", taboo: ["Härte", "Zugtest", "Prüfung"] },
  { category: "Erklären", term: "Wellenabdichtung", taboo: ["Simmerring", "Öl", "Leckage"] },
  { category: "Erklären", term: "Einstelllehre", taboo: ["Messen", "Spalt", "Prüfen"] },
  { category: "Erklären", term: "Schmierintervall", taboo: ["Wartung", "Zeit", "Öl"] },
  { category: "Erklären", term: "Lackierung", taboo: ["Farbe", "Schicht", "Korrosionsschutz"] },
  { category: "Erklären", term: "Ventilspiel", taboo: ["Motor", "Einstellung", "Toleranz"] },
  { category: "Erklären", term: "Batteriesäure", taboo: ["Elektrolyt", "Akku", "Säure"] },
  { category: "Erklären", term: "Keilriemen", taboo: ["Antrieb", "Riemen", "Spannung"] },
  { category: "Erklären", term: "Schutzleiter", taboo: ["Strom", "Sicherheit", "Gelb-Grün"] },
  { category: "Erklären", term: "Prüfprotokoll", taboo: ["Dokument", "Messwerte", "Kontrolle"] },
  { category: "Erklären", term: "Instandhaltung", taboo: ["Wartung", "Reparatur", "Plan"] },
  { category: "Erklären", term: "Lagerluft", taboo: ["Toleranz", "Spiel", "Wälzlager"] },
  { category: "Erklären", term: "Verschleiß", taboo: ["Abnutzung", "Material", "Lebensdauer"] },
  { category: "Erklären", term: "Stoßdämpfer", taboo: ["Federung", "Fahrwerk", "Dämpfung"] },
  { category: "Erklären", term: "Kraftstofffilter", taboo: ["Benzin", "Diesel", "Sauber"] },
  { category: "Erklären", term: "Metallsäge", taboo: ["Sägen", "Blatt", "Trennen"] },
  { category: "Erklären", term: "Mikrometer", taboo: ["Messen", "Fein", "Schraube"] },
  { category: "Zeichnen", term: "Getriebe", taboo: [] },
  { category: "Zeichnen", term: "Schraubenschlüssel", taboo: [] },
  { category: "Zeichnen", term: "Werkbank", taboo: [] },
  { category: "Zeichnen", term: "Schweißgerät", taboo: [] },
  { category: "Zeichnen", term: "Bremsscheibe", taboo: [] },
  { category: "Zeichnen", term: "Zahnradpaar", taboo: [] },
  { category: "Zeichnen", term: "Werkzeugkoffer", taboo: [] },
  { category: "Zeichnen", term: "Schutzbrille", taboo: [] },
  { category: "Zeichnen", term: "Förderband", taboo: [] },
  { category: "Zeichnen", term: "Bohrmaschine", taboo: [] },
  { category: "Zeichnen", term: "Drehbank", taboo: [] },
  { category: "Zeichnen", term: "Lenkrad", taboo: [] },
  { category: "Zeichnen", term: "Hebebühne", taboo: [] },
  { category: "Zeichnen", term: "Arbeitslampe", taboo: [] },
  { category: "Zeichnen", term: "Schraube", taboo: [] },
  { category: "Zeichnen", term: "Lüfterrad", taboo: [] },
  { category: "Zeichnen", term: "Sicherungskasten", taboo: [] },
  { category: "Zeichnen", term: "Druckluftschlauch", taboo: [] },
  { category: "Zeichnen", term: "Messschieber", taboo: [] },
  { category: "Zeichnen", term: "Werkstatthocker", taboo: [] },
  { category: "Zeichnen", term: "Ventilator", taboo: [] },
  { category: "Zeichnen", term: "Achse", taboo: [] },
  { category: "Pantomime", term: "Reifen wechseln", taboo: [] },
  { category: "Pantomime", term: "Ölstand prüfen", taboo: [] },
  { category: "Pantomime", term: "Ketten spannen", taboo: [] },
  { category: "Pantomime", term: "Schraube eindrehen", taboo: [] },
  { category: "Pantomime", term: "Schweißen", taboo: [] },
  { category: "Pantomime", term: "Hebebühne bedienen", taboo: [] },
  { category: "Pantomime", term: "Schutzbrille aufsetzen", taboo: [] },
  { category: "Pantomime", term: "Bremsen prüfen", taboo: [] },
  { category: "Pantomime", term: "Werkbank aufräumen", taboo: [] },
  { category: "Pantomime", term: "Kabel verbinden", taboo: [] },
  { category: "Pantomime", term: "Filter wechseln", taboo: [] },
  { category: "Pantomime", term: "Schrauben sortieren", taboo: [] },
  { category: "Pantomime", term: "Dichtung einsetzen", taboo: [] },
  { category: "Pantomime", term: "Messung durchführen", taboo: [] },
  { category: "Pantomime", term: "Rad auswuchten", taboo: [] },
  { category: "Pantomime", term: "Pumpe entlüften", taboo: [] },
  { category: "Pantomime", term: "Riemen spannen", taboo: [] },
  { category: "Pantomime", term: "Lager einfetten", taboo: [] },
  { category: "Pantomime", term: "Betriebsanleitung lesen", taboo: [] },
  { category: "Pantomime", term: "Werkstück schleifen", taboo: [] },
  { category: "Pantomime", term: "Korrosion abschleifen", taboo: [] },
  { category: "Pantomime", term: "Schutzhaube montieren", taboo: [] },
];

const state = {
  teams: [],
  currentTeam: 0,
  positions: [],
  pendingRoll: null,
  pendingCategory: null,
  timer: null,
  remainingTime: 0,
  timeLimit: 60,
  swapPenalty: 10,
  categories: ["Erklären", "Zeichnen", "Pantomime"],
  cards: [...DEFAULT_DATA],
  history: [],
};

const colors = ["#f97316", "#38bdf8", "#34d399", "#f472b6"];

function populateTimeSelect() {
  for (let i = 10; i <= 120; i += 10) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${i}s`;
    if (i === 60) option.selected = true;
    timeSelect.appendChild(option);
  }
}

function renderTeamColors(count) {
  teamColorsContainer.innerHTML = "";
  for (let i = 0; i < count; i += 1) {
    const wrapper = document.createElement("label");
    wrapper.className = "color-choice";
    wrapper.innerHTML = `
      <span>Team ${i + 1}</span>
      <input type="color" value="${colors[i % colors.length]}" />
    `;
    teamColorsContainer.appendChild(wrapper);
  }
}

function buildBoard() {
  board.innerHTML = "";
  const cells = [];
  const icons = ["💬", "✏️", "🎭"];
  for (let row = 0; row < 6; row += 1) {
    const rowIndices = [];
    for (let col = 0; col < 6; col += 1) {
      const index = row % 2 === 0 ? row * 6 + col : row * 6 + (5 - col);
      rowIndices.push(index);
    }
    rowIndices.forEach((index, colIndex) => {
      const cell = document.createElement("div");
      cell.className = `board-cell path alt-${index % 4}`;
      if (index === 0) {
        cell.textContent = "🏁";
      } else if (index === 35) {
        cell.textContent = "🏆";
      } else {
        cell.textContent = icons[(index + colIndex) % icons.length];
      }
      cell.dataset.index = index;
      board.appendChild(cell);
      cells[index] = cell;
    });
  }
  return cells;
}

function createTokens(colorsList) {
  board.querySelectorAll(".token").forEach((token) => token.remove());
  state.positions = colorsList.map(() => 0);
  state.teams = colorsList.map((color, index) => ({
    color,
    name: `Team ${index + 1}`,
  }));
  colorsList.forEach((color, index) => {
    const token = document.createElement("div");
    token.className = "token";
    token.style.background = color;
    token.dataset.team = index;
    board.appendChild(token);
  });
  positionTokens();
}

function positionTokens() {
  const cells = [...board.querySelectorAll(".board-cell")];
  state.positions.forEach((pos, index) => {
    const cell = cells[pos];
    if (!cell) return;
    const rect = cell.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();
    const token = board.querySelector(`.token[data-team="${index}"]`);
    if (!token) return;
    token.style.left = `${rect.left - boardRect.left + rect.width / 2}px`;
    token.style.top = `${rect.top - boardRect.top + rect.height / 2}px`;
  });
}

function showOverlay(content, duration = 800) {
  overlayContent.textContent = content;
  overlay.classList.remove("hidden");
  setTimeout(() => overlay.classList.add("hidden"), duration);
}

function updateTimerDisplay(value) {
  timerEl.textContent = `${value}s`;
}

function startTimer() {
  clearInterval(state.timer);
  state.remainingTime = state.timeLimit;
  updateTimerDisplay(state.remainingTime);
  state.timer = setInterval(() => {
    state.remainingTime -= 1;
    updateTimerDisplay(state.remainingTime);
    if (state.remainingTime <= 0) {
      clearInterval(state.timer);
      handleAnswer(false, true);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timer);
}

function getCardByCategory(category) {
  const pool = state.cards.filter((card) => card.category === category);
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function setWordCard(card) {
  if (!card) {
    wordTitle.textContent = "Keine Karte";
    tabooList.innerHTML = "";
    tabooList.className = "";
    return;
  }
  wordTitle.textContent = card.term;
  tabooList.innerHTML = "";
  tabooList.className = "";
  if (card.category === "Erklären") {
    cardStack.style.setProperty("--card-height", "320px");
    card.taboo.forEach((taboo) => {
      const li = document.createElement("li");
      li.textContent = taboo;
      tabooList.appendChild(li);
    });
    const tabooCount = card.taboo.length;
    if (tabooCount >= 5) {
      tabooList.classList.add("taboo-size-5");
    } else if (tabooCount === 4) {
      tabooList.classList.add("taboo-size-4");
    } else if (tabooCount === 3) {
      tabooList.classList.add("taboo-size-3");
    }
  } else {
    cardStack.style.setProperty("--card-height", "260px");
  }
}

function setCategory(category) {
  categoryLabel.textContent = category;
  categoryIcon.textContent = CATEGORY_ICONS[category] || "?";
  if (category === "Erklären") {
    cardStack.style.setProperty("--card-height", "320px");
  } else {
    cardStack.style.setProperty("--card-height", "260px");
  }
}

function handleRoll() {
  if (state.pendingRoll !== null || state.timer) return;
  const roll = Math.floor(Math.random() * 6) + 1;
  state.pendingRoll = roll;
  diceResult.textContent = roll;
  showOverlay("🎲");
  statusText.textContent = `${state.teams[state.currentTeam].name} würfelt ${roll}.`;
  const available = state.categories;
  const category = available[Math.floor(Math.random() * available.length)];
  state.pendingCategory = category;
  setTimeout(() => {
    setCategory(category);
    categoryCard.classList.add("flipped");
  }, 1000);
}

function moveToken(steps) {
  return new Promise((resolve) => {
    const teamIndex = state.currentTeam;
    const token = board.querySelector(`.token[data-team="${teamIndex}"]`);
    let remaining = Math.abs(steps);
    const direction = steps >= 0 ? 1 : -1;
    const moveStep = () => {
      if (remaining === 0) {
        token.classList.remove("moving");
        resolve();
        return;
      }
      token.classList.add("moving");
      state.positions[teamIndex] = Math.max(
        0,
        Math.min(35, state.positions[teamIndex] + direction)
      );
      positionTokens();
      remaining -= 1;
      setTimeout(moveStep, 250);
    };
    moveStep();
  });
}

function computeMultiplier() {
  const ratio = state.remainingTime / state.timeLimit;
  if (ratio > 2 / 3) return 2;
  if (ratio > 1 / 3) return 1;
  return 0.5;
}

function handleAnswer(isCorrect, timedOut = false) {
  if (state.pendingRoll === null) return;
  stopTimer();
  const roll = state.pendingRoll;
  const multiplier = isCorrect ? computeMultiplier() : 1;
  const adjustedSteps = Math.ceil(roll * multiplier);
  const steps = isCorrect ? adjustedSteps : -roll;
  const animationText = isCorrect
    ? `x${multiplier}`
    : timedOut
    ? "⏱️ Timeout"
    : "↩️ Zurück";
  showOverlay(animationText, 900);
  const previousPositions = [...state.positions];
  state.history.push({
    positions: previousPositions,
    team: state.currentTeam,
  });
  categoryCard.classList.remove("flipped");
  moveToken(steps).then(() => {
    state.pendingRoll = null;
    state.pendingCategory = null;
    statusText.textContent = `${state.teams[state.currentTeam].name} beendet den Zug.`;
    state.currentTeam = (state.currentTeam + 1) % state.teams.length;
    statusText.textContent = `Nächstes: ${state.teams[state.currentTeam].name} würfelt.`;
  });
}

function handleSwap() {
  state.remainingTime = Math.max(0, state.remainingTime - state.swapPenalty);
  updateTimerDisplay(state.remainingTime);
  showOverlay(`-${state.swapPenalty}s`, 600);
  if (state.pendingCategory) {
    const card = getCardByCategory(state.pendingCategory);
    setWordCard(card);
  }
}

function handleUndo() {
  const last = state.history.pop();
  if (!last) return;
  state.positions = last.positions;
  state.currentTeam = last.team;
  positionTokens();
  statusText.textContent = `Zug zurück: ${state.teams[state.currentTeam].name} ist dran.`;
}

function handleStartGame() {
  const selectedCategories = [...document.querySelectorAll(".chip input:checked")].map(
    (input) => input.value
  );
  if (selectedCategories.length === 0) {
    alert("Bitte mindestens eine Kategorie wählen.");
    return;
  }
  state.categories = selectedCategories;
  state.timeLimit = Number.parseInt(timeSelect.value, 10);
  state.swapPenalty = Number.parseInt(swapSelect.value, 10);
  const colorsList = [...teamColorsContainer.querySelectorAll("input")].map(
    (input) => input.value
  );
  createTokens(colorsList);
  menuPanel.classList.remove("panel--active");
  gamePanel.classList.add("panel--active");
  positionTokens();
  statusText.textContent = `Nächstes: ${state.teams[state.currentTeam].name} würfelt.`;
}

function handleFlipCategory() {
  categoryCard.classList.toggle("flipped");
  const card = getCardByCategory(state.pendingCategory);
  setWordCard(card);
  startTimer();
}

function parseCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const cards = [];
  lines.forEach((line) => {
    const parts = line.split(";").map((part) => part.trim());
    const [category, term, ...taboos] = parts;
    if (!category || !term) return;
    cards.push({
      category,
      term,
      taboo: taboos.filter(Boolean),
    });
  });
  return cards;
}

function handleCsvUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const cards = parseCsv(reader.result);
    if (cards.length > 0) {
      state.cards = cards;
      csvStatus.textContent = `CSV geladen: ${cards.length} Karten.`;
    } else {
      csvStatus.textContent = "CSV leer oder ungültig.";
    }
  };
  reader.readAsText(file, "utf-8");
}

function setup() {
  populateTimeSelect();
  renderTeamColors(Number.parseInt(teamCountSelect.value, 10));
  buildBoard();
  positionTokens();
  updateTimerDisplay(state.timeLimit);
  updateFullscreenState();
}

window.addEventListener("resize", positionTokens);
teamCountSelect.addEventListener("change", (event) => {
  renderTeamColors(Number.parseInt(event.target.value, 10));
});

startButton.addEventListener("click", handleStartGame);
rollButton.addEventListener("click", handleRoll);
flipCategoryButton.addEventListener("click", handleFlipCategory);
correctButton.addEventListener("click", () => handleAnswer(true));
wrongButton.addEventListener("click", () => handleAnswer(false));
swapButton.addEventListener("click", handleSwap);
undoButton.addEventListener("click", handleUndo);
csvUpload.addEventListener("change", handleCsvUpload);

csvInfo.addEventListener("click", () => {
  const isHidden = csvTooltip.getAttribute("aria-hidden") === "true";
  csvTooltip.setAttribute("aria-hidden", isHidden ? "false" : "true");
});

function updateFullscreenState() {
  const isFullscreen = Boolean(document.fullscreenElement);
  document.body.classList.toggle("fullscreen", isFullscreen);
  fullscreenToggle.setAttribute("aria-pressed", String(isFullscreen));
  fullscreenToggle.textContent = isFullscreen ? "🗗" : "⛶";
  fullscreenToggle.title = isFullscreen ? "Vollbildmodus verlassen" : "Vollbildmodus";
}

fullscreenToggle.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});

document.addEventListener("fullscreenchange", () => {
  updateFullscreenState();
  positionTokens();
});

setup();
