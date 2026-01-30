const swapSelect = document.getElementById("swap-select");
const teamCountSelect = document.getElementById("team-count");
const teamListContainer = document.getElementById("team-list");
const startButton = document.getElementById("start-game");
const menuPanel = document.getElementById("menu");
const gamePanel = document.getElementById("game");
const board = document.getElementById("board");
const rollButton = document.getElementById("roll");
const diceResult = document.getElementById("dice-result");
const statusText = document.getElementById("status");
const undoButton = document.getElementById("undo");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");
const turnOverlay = document.getElementById("turn-overlay");
const turnOverlayPanel = document.getElementById("turn-overlay-panel");
const turnCategory = document.getElementById("turn-category");
const turnCategoryIcon = document.getElementById("turn-category-icon");
const turnCategoryLabel = document.getElementById("turn-category-label");
const turnCountdown = document.getElementById("turn-countdown");
const turnWord = document.getElementById("turn-word");
const turnTimer = document.getElementById("turn-timer");
const turnWordTitle = document.getElementById("turn-word-title");
const turnTabooList = document.getElementById("turn-taboo-list");
const turnContinueButton = document.getElementById("turn-continue");
const turnReadyButton = document.getElementById("turn-ready");
const winnerScreen = document.getElementById("winner-screen");
const winnerLabel = document.getElementById("winner-label");
const winnerRestartButton = document.getElementById("winner-restart");
const csvUpload = document.getElementById("csv-upload");
const csvStatus = document.getElementById("csv-status");
const csvInfo = document.getElementById("csv-info");
const csvTooltip = document.getElementById("csv-tooltip");
const themeToggle = document.getElementById("theme-toggle");
const fullscreenToggle = document.getElementById("fullscreen-toggle");
const swapSelectGame = document.getElementById("swap-select-game");
const settingsPanel = document.getElementById("settings-panel");
const openSettingsButton = document.getElementById("open-settings");
const closeSettingsButton = document.getElementById("close-settings");
const applySettingsButton = document.getElementById("apply-settings");
const mainMenuButton = document.getElementById("main-menu");

const CATEGORY_CONFIG = {
  Erklären: { id: "explain", icon: "💬" },
  Zeichnen: { id: "draw", icon: "✏️" },
  Pantomime: { id: "pantomime", icon: "🎭" },
};

const CATEGORY_ICONS = {
  Erklären: "💬",
  Zeichnen: "✏️",
  Pantomime: "🎭",
};

const menuCategoryControls = Object.entries(CATEGORY_CONFIG).map(([category, config]) => ({
  category,
  checkbox: document.getElementById(`category-${config.id}`),
  timeSelect: document.getElementById(`time-${config.id}`),
}));

const gameCategoryControls = Object.entries(CATEGORY_CONFIG).map(([category, config]) => ({
  category,
  checkbox: document.getElementById(`category-${config.id}-game`),
  timeSelect: document.getElementById(`time-${config.id}-game`),
}));

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
  countdownTimer: null,
  remainingTime: 0,
  timeLimit: 60,
  categoryTimes: {
    Erklären: 60,
    Zeichnen: 60,
    Pantomime: 60,
  },
  swapPenalty: 10,
  categories: ["Erklären", "Zeichnen", "Pantomime"],
  cards: [...DEFAULT_DATA],
  history: [],
  phase: "idle",
  gameOver: false,
};

const colors = ["#f97316", "#38bdf8", "#34d399", "#f472b6"];
const TEAM_ICONS = ["🐯", "🐼", "🦊", "🐸", "🐙", "🦁"];
const DEFAULT_TEAM_NAMES = ["Team Nord", "Team Süd", "Team Ost", "Team West"];
const THEME_STORAGE_KEY = "wissivity-theme";

function applyTheme(theme) {
  if (theme === "light") {
    document.body.dataset.theme = "light";
  } else {
    delete document.body.dataset.theme;
  }
  updateThemeToggle(theme === "light");
}

function updateThemeToggle(isLight) {
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.textContent = isLight ? "🌞" : "🎨";
  themeToggle.title = isLight ? "Standarddesign aktivieren" : "Helles Design aktivieren";
}

function populateTimeSelect(selectEl, defaultValue = 60) {
  for (let i = 10; i <= 120; i += 10) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${i}s`;
    if (i === defaultValue) option.selected = true;
    selectEl.appendChild(option);
  }
}

function getSelectedCategories(controls) {
  return controls.filter((control) => control.checkbox.checked).map((control) => control.category);
}

function readCategoryTimes(controls) {
  return controls.reduce((times, control) => {
    times[control.category] = Number.parseInt(control.timeSelect.value, 10);
    return times;
  }, {});
}

function syncCategoryControls(controls, selectedCategories, categoryTimes) {
  controls.forEach((control) => {
    control.checkbox.checked = selectedCategories.includes(control.category);
    if (categoryTimes[control.category]) {
      control.timeSelect.value = categoryTimes[control.category];
    }
  });
}

function renderTeams(count) {
  teamListContainer.innerHTML = "";
  for (let i = 0; i < count; i += 1) {
    const defaultIcon = TEAM_ICONS[i % TEAM_ICONS.length];
    const defaultName = DEFAULT_TEAM_NAMES[i] ?? `Team ${i + 1}`;
    const row = document.createElement("div");
    row.className = "team-row";
    row.innerHTML = `
      <div class="team-row-header">Team ${i + 1}</div>
      <label class="field">
        Teamname
        <input type="text" data-team-name value="${defaultName}" />
      </label>
      <label class="field">
        Icon
        <select data-team-icon>
          ${TEAM_ICONS.map(
            (icon) =>
              `<option value="${icon}" ${icon === defaultIcon ? "selected" : ""}>${icon}</option>`
          ).join("")}
        </select>
      </label>
    `;
    teamListContainer.appendChild(row);
  }
}

function buildBoard(categories = state.categories) {
  const existingTokens = [...board.querySelectorAll(".token")];
  board.innerHTML = "";
  const cells = [];
  const icons = categories.map((category) => CATEGORY_ICONS[category]).filter(Boolean);
  if (icons.length === 0) {
    icons.push("❓");
  }
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
  existingTokens.forEach((token) => board.appendChild(token));
  return cells;
}

function createTokens(teamData) {
  board.querySelectorAll(".token").forEach((token) => token.remove());
  const teams = teamData.map((team, index) => ({
    ...team,
    color: colors[index % colors.length],
  }));
  state.positions = teams.map(() => 0);
  state.teams = teams;
  teams.forEach((team, index) => {
    const token = document.createElement("div");
    token.className = "token";
    token.style.background = team.color;
    token.dataset.team = index;
    board.appendChild(token);
  });
  positionTokens();
}

function formatTeamLabel(teamIndex) {
  const team = state.teams[teamIndex];
  if (!team) return "Team";
  if (!team.icon) return team.name;
  return `${team.icon} ${team.name}`.trim();
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
  turnTimer.textContent = `${value}s`;
}

function startTimer() {
  clearInterval(state.timer);
  state.timer = null;
  state.remainingTime = state.timeLimit;
  updateTimerDisplay(state.remainingTime);
  state.timer = setInterval(() => {
    state.remainingTime -= 1;
    updateTimerDisplay(state.remainingTime);
    if (state.remainingTime <= 0) {
      clearInterval(state.timer);
      finishTurn(false, true);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timer);
  clearInterval(state.countdownTimer);
  state.timer = null;
  state.countdownTimer = null;
}

function getCardByCategory(category) {
  const pool = state.cards.filter((card) => card.category === category);
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function setWordCard(card) {
  if (!card) {
    turnWordTitle.textContent = "Keine Karte";
    turnTabooList.innerHTML = "";
    return;
  }
  turnWordTitle.textContent = card.term;
  turnTabooList.innerHTML = "";
  if (card.category === "Erklären") {
    card.taboo.forEach((taboo) => {
      const li = document.createElement("li");
      li.textContent = taboo;
      turnTabooList.appendChild(li);
    });
  }
}

function setCategory(category) {
  turnCategoryLabel.textContent = category;
  turnCategoryIcon.textContent = CATEGORY_ICONS[category] || "?";
}

function handleRoll() {
  if (state.pendingRoll !== null || state.timer || state.phase !== "idle" || state.gameOver) {
    return;
  }
  const roll = Math.floor(Math.random() * 6) + 1;
  state.pendingRoll = roll;
  diceResult.textContent = roll;
  showOverlay("🎲");
  statusText.textContent = `${formatTeamLabel(state.currentTeam)} würfelt ${roll}.`;
  const previousPositions = [...state.positions];
  state.history.push({
    positions: previousPositions,
    team: state.currentTeam,
  });
  const available = state.categories;
  const category = available[Math.floor(Math.random() * available.length)];
  state.pendingCategory = category;
  setTimeout(() => {
    moveToken(roll).then(() => {
      if (state.positions[state.currentTeam] >= 35) {
        showWinner(formatTeamLabel(state.currentTeam));
        return;
      }
      setTimeout(() => {
        setCategory(category);
        showTurnOverlay();
      }, 2000);
    });
  }, 600);
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

function finishTurn(isCorrect, timedOut = false) {
  if (state.pendingRoll === null) return;
  stopTimer();
  const animationText = timedOut ? "⏱️ Timeout" : isCorrect ? "✅" : "⏭️ Weiter";
  showOverlay(animationText, 900);
  hideTurnOverlay();
  state.pendingRoll = null;
  state.pendingCategory = null;
  statusText.textContent = `${formatTeamLabel(state.currentTeam)} beendet den Zug.`;
  state.currentTeam = (state.currentTeam + 1) % state.teams.length;
  statusText.textContent = `Nächstes: ${formatTeamLabel(state.currentTeam)} würfelt.`;
}

function handleUndo() {
  const last = state.history.pop();
  if (!last) return;
  state.positions = last.positions;
  state.currentTeam = last.team;
  positionTokens();
  statusText.textContent = `Zug zurück: ${formatTeamLabel(state.currentTeam)} ist dran.`;
}

function handleStartGame() {
  const selectedCategories = getSelectedCategories(menuCategoryControls);
  if (selectedCategories.length === 0) {
    alert("Bitte mindestens eine Kategorie wählen.");
    return;
  }
  state.categories = selectedCategories;
  state.categoryTimes = readCategoryTimes(menuCategoryControls);
  state.timeLimit = state.categoryTimes[selectedCategories[0]] ?? 60;
  state.swapPenalty = Number.parseInt(swapSelect.value, 10);
  buildBoard(state.categories);
  const teams = [...teamListContainer.querySelectorAll(".team-row")].map((row, index) => {
    const nameInput = row.querySelector("[data-team-name]");
    const iconSelect = row.querySelector("[data-team-icon]");
    const name = nameInput?.value.trim() || `Team ${index + 1}`;
    const icon = iconSelect?.value || TEAM_ICONS[0];
    return { name, icon };
  });
  createTokens(teams);
  menuPanel.classList.remove("panel--active");
  gamePanel.classList.add("panel--active");
  document.body.classList.add("game-active");
  positionTokens();
  state.currentTeam = 0;
  state.pendingRoll = null;
  state.pendingCategory = null;
  state.gameOver = false;
  state.phase = "idle";
  winnerScreen.classList.add("hidden");
  turnOverlay.classList.add("hidden");
  turnOverlay.classList.remove("active", "expanded", "category");
  statusText.textContent = `Nächstes: ${formatTeamLabel(state.currentTeam)} würfelt.`;
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

function syncSettingsPanel() {
  swapSelectGame.value = swapSelect.value;
  syncCategoryControls(gameCategoryControls, state.categories, state.categoryTimes);
}

function applySettingsFromPanel() {
  const selectedCategories = getSelectedCategories(gameCategoryControls);
  if (selectedCategories.length === 0) {
    alert("Bitte mindestens eine Kategorie wählen.");
    return;
  }
  state.categories = selectedCategories;
  state.categoryTimes = readCategoryTimes(gameCategoryControls);
  state.timeLimit = state.categoryTimes[selectedCategories[0]] ?? 60;
  state.swapPenalty = Number.parseInt(swapSelectGame.value, 10);
  swapSelect.value = swapSelectGame.value;
  syncCategoryControls(menuCategoryControls, state.categories, state.categoryTimes);
  if (!state.timer) {
    updateTimerDisplay(state.timeLimit);
  }
  buildBoard(state.categories);
  positionTokens();
  settingsPanel.classList.add("hidden");
}

function handleOpenSettings() {
  syncSettingsPanel();
  settingsPanel.classList.remove("hidden");
}

function handleCloseSettings() {
  settingsPanel.classList.add("hidden");
}

function handleMainMenu() {
  stopTimer();
  hideTurnOverlay();
  menuPanel.classList.add("panel--active");
  gamePanel.classList.remove("panel--active");
  document.body.classList.remove("game-active");
}

function setOverlayStartFromCell() {
  const currentIndex = state.positions[state.currentTeam];
  const cell = board.querySelector(`.board-cell[data-index="${currentIndex}"]`);
  if (!cell) return;
  const rect = cell.getBoundingClientRect();
  turnOverlayPanel.style.setProperty("--panel-width", `${rect.width}px`);
  turnOverlayPanel.style.setProperty("--panel-height", `${rect.height}px`);
  turnOverlayPanel.style.setProperty("--panel-x", `${rect.left}px`);
  turnOverlayPanel.style.setProperty("--panel-y", `${rect.top}px`);
}

function setOverlayCategorySize() {
  const width = Math.round(window.innerWidth / 3);
  const height = Math.round(window.innerHeight / 3);
  const x = Math.round(window.innerWidth / 2 - width / 2);
  const y = Math.round(window.innerHeight / 2 - height / 2);
  turnOverlayPanel.style.setProperty("--panel-category-width", `${width}px`);
  turnOverlayPanel.style.setProperty("--panel-category-height", `${height}px`);
  turnOverlayPanel.style.setProperty("--panel-category-x", `${x}px`);
  turnOverlayPanel.style.setProperty("--panel-category-y", `${y}px`);
}

function showTurnOverlay() {
  state.phase = "ready";
  setOverlayStartFromCell();
  setOverlayCategorySize();
  turnCategory.classList.remove("hidden");
  turnWord.classList.add("hidden");
  turnCountdown.classList.add("hidden");
  turnReadyButton.classList.remove("hidden");
  turnReadyButton.disabled = false;
  turnOverlay.classList.remove("hidden");
  turnOverlay.classList.add("active");
  requestAnimationFrame(() => {
    turnOverlay.classList.add("category");
  });
}

function hideTurnOverlay() {
  turnOverlay.classList.remove("expanded");
  turnOverlay.classList.remove("category");
  turnOverlay.classList.remove("active");
  setTimeout(() => {
    turnOverlay.classList.add("hidden");
  }, 700);
  state.phase = "idle";
}

function startCountdown() {
  clearInterval(state.countdownTimer);
  state.countdownTimer = null;
  let countdown = 3;
  turnCountdown.textContent = `${countdown}`;
  turnCountdown.classList.remove("hidden");
  turnReadyButton.classList.add("hidden");
  state.phase = "countdown";
  state.countdownTimer = setInterval(() => {
    countdown -= 1;
    if (countdown <= 0) {
      clearInterval(state.countdownTimer);
      state.countdownTimer = null;
      showWordCard();
      return;
    }
    turnCountdown.textContent = `${countdown}`;
  }, 1000);
}

function showWordCard() {
  turnCategory.classList.add("hidden");
  turnWord.classList.remove("hidden");
  turnOverlay.classList.remove("category");
  turnOverlay.classList.add("expanded");
  state.phase = "word";
  const card = getCardByCategory(state.pendingCategory);
  setWordCard(card);
  state.timeLimit = state.categoryTimes[state.pendingCategory] ?? 60;
  if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
  startTimer();
}

function showWinner(teamName) {
  state.gameOver = true;
  state.phase = "winner";
  state.pendingRoll = null;
  state.pendingCategory = null;
  winnerLabel.textContent = `${teamName} hat gewonnen!`;
  winnerScreen.classList.remove("hidden");
}

function handleWinnerRestart() {
  winnerScreen.classList.add("hidden");
  handleMainMenu();
}

function setup() {
  menuCategoryControls.forEach((control) => populateTimeSelect(control.timeSelect, 60));
  gameCategoryControls.forEach((control) => populateTimeSelect(control.timeSelect, 60));
  renderTeams(Number.parseInt(teamCountSelect.value, 10));
  buildBoard(state.categories);
  positionTokens();
  updateTimerDisplay(state.timeLimit);
  updateFullscreenState();
  syncSettingsPanel();
}

window.addEventListener("resize", positionTokens);
teamCountSelect.addEventListener("change", (event) => {
  renderTeams(Number.parseInt(event.target.value, 10));
});

startButton.addEventListener("click", handleStartGame);
rollButton.addEventListener("click", handleRoll);
undoButton.addEventListener("click", handleUndo);
csvUpload.addEventListener("change", handleCsvUpload);
openSettingsButton.addEventListener("click", handleOpenSettings);
closeSettingsButton.addEventListener("click", handleCloseSettings);
applySettingsButton.addEventListener("click", applySettingsFromPanel);
mainMenuButton.addEventListener("click", handleMainMenu);
turnContinueButton.addEventListener("click", () => finishTurn(false));
turnReadyButton.addEventListener("click", () => {
  if (state.phase !== "ready") return;
  turnReadyButton.disabled = true;
  startCountdown();
});
winnerRestartButton.addEventListener("click", handleWinnerRestart);

csvInfo.addEventListener("click", () => {
  const isHidden = csvTooltip.getAttribute("aria-hidden") === "true";
  csvTooltip.setAttribute("aria-hidden", isHidden ? "false" : "true");
});

themeToggle.addEventListener("click", () => {
  const isLight = document.body.dataset.theme === "light";
  const nextTheme = isLight ? "default" : "light";
  if (nextTheme === "light") {
    localStorage.setItem(THEME_STORAGE_KEY, "light");
  } else {
    localStorage.removeItem(THEME_STORAGE_KEY);
  }
  applyTheme(nextTheme);
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

const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
applyTheme(storedTheme === "light" ? "light" : "default");
setup();
