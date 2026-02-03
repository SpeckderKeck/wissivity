const swapSelect = document.getElementById("swap-select");
const teamCountInput = document.getElementById("team-count");
const teamCountDecrease = document.getElementById("team-count-decrease");
const teamCountIncrease = document.getElementById("team-count-increase");
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
const turnPenalty = document.getElementById("turn-penalty");
const turnWordTitle = document.getElementById("turn-word-title");
const turnTabooList = document.getElementById("turn-taboo-list");
const turnCorrectButton = document.getElementById("turn-correct");
const turnWrongButton = document.getElementById("turn-wrong");
const turnSwapButton = document.getElementById("turn-swap");
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
const themeToggleWrapper = themeToggle?.closest(".theme-switch");
const fullscreenToggle = document.getElementById("fullscreen-toggle");
const swapSelectGame = document.getElementById("swap-select-game");
const boardSizeSelect = document.getElementById("board-size-select");
const boardSizeSelectGame = document.getElementById("board-size-select-game");
const settingsPanel = document.getElementById("settings-panel");
const openSettingsButton = document.getElementById("open-settings");
const closeSettingsButton = document.getElementById("close-settings");
const applySettingsButton = document.getElementById("apply-settings");
const mainMenuButton = document.getElementById("main-menu");
const boardSizeInputs = document.querySelectorAll('input[name="board-size"]');
const teamStatusList = document.getElementById("team-status-list");

const CATEGORY_CONFIG = {
  Erklären: { id: "explain", iconPath: "assets/icons/explain.svg", fallbackIcon: "💬" },
  Zeichnen: { id: "draw", iconPath: "assets/icons/draw.svg", fallbackIcon: "✏️" },
  Pantomime: { id: "pantomime", iconPath: "assets/icons/pantomime.svg", fallbackIcon: "🎭" },
};

const CATEGORY_VISUALS = {
  Erklären: {
    color: "#ff6b6b",
    iconColor: "#8d1f1f",
  },
  Zeichnen: {
    color: "#4cc9f0",
    iconColor: "#0b567a",
  },
  Pantomime: {
    color: "#ffd93d",
    iconColor: "#8a5b00",
  },
};

function getCategoryIconPath(category) {
  return CATEGORY_CONFIG[category]?.iconPath ?? "";
}

function getCategoryFallbackIcon(category) {
  return CATEGORY_CONFIG[category]?.fallbackIcon ?? "?";
}

function applyCategoryIcon(element, category, { allowFallback = false } = {}) {
  const iconPath = getCategoryIconPath(category);
  const visuals = CATEGORY_VISUALS[category];
  element.classList.remove("icon-fallback");
  element.style.setProperty("--icon-color", visuals?.iconColor ?? "#3b3b3b");
  if (iconPath) {
    element.textContent = "";
    element.style.setProperty("--icon-url", `url("${iconPath}")`);
    return;
  }
  element.style.removeProperty("--icon-url");
  if (allowFallback) {
    element.classList.add("icon-fallback");
    element.textContent = getCategoryFallbackIcon(category);
  }
}

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
  boardSize: "normal",
  boardDimensions: { rows: 5, cols: 6, total: 30 },
  pendingRoll: null,
  pendingCategory: null,
  timer: null,
  countdownTimer: null,
  turnStartPositions: null,
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
  boardCategories: [],
  phase: "idle",
  gameOver: false,
  pendingReturn: null,
};

const TEAM_COLORS = [
  { label: "Orange", value: "#f97316" },
  { label: "Blau", value: "#38bdf8" },
  { label: "Grün", value: "#34d399" },
  { label: "Pink", value: "#f472b6" },
  { label: "Rot", value: "#ef4444" },
  { label: "Gelb", value: "#facc15" },
  { label: "Lila", value: "#8b5cf6" },
  { label: "Türkis", value: "#14b8a6" },
  { label: "Cyan", value: "#22d3ee" },
  { label: "Limette", value: "#84cc16" },
  { label: "Beere", value: "#f43f5e" },
  { label: "Schiefer", value: "#64748b" },
];
const TEAM_ICONS = ["🐯", "🐼", "🦊", "🐸", "🐙", "🦁", "🐧", "🐨", "🐶", "🐱", "🦉", "🦄"];
const DEFAULT_TEAM_NAMES = ["Team A", "Team B", "Team C", "Team D"];
const THEME_STORAGE_KEY = "wissivity-theme";
const BOARD_CONFIGS = {
  short: { rows: 4, cols: 6, total: 24 },
  normal: { rows: 5, cols: 6, total: 30 },
  long: { rows: 6, cols: 7, total: 42 },
};

function applyTheme(theme) {
  if (theme === "light") {
    document.body.dataset.theme = "light";
  } else {
    delete document.body.dataset.theme;
  }
  updateThemeToggle(theme === "light");
}

function updateThemeToggle(isLight) {
  themeToggle.checked = isLight;
  themeToggle.setAttribute("aria-checked", String(isLight));
  if (themeToggleWrapper) {
    themeToggleWrapper.title = isLight ? "Dunkles Design aktivieren" : "Helles Design aktivieren";
  }
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
    const defaultColor = TEAM_COLORS[i % TEAM_COLORS.length].value;
    const defaultName = DEFAULT_TEAM_NAMES[i] ?? `Team ${i + 1}`;
    const colorOptions = TEAM_COLORS.map(
      (color) => `
        <button
          type="button"
          class="picker-option picker-option--color ${
            color.value === defaultColor ? "is-selected" : ""
          }"
          data-team-color-option
          data-color-value="${color.value}"
          aria-label="${color.label}"
          style="--swatch-color: ${color.value};"
        ></button>
      `
    ).join("");
    const iconOptions = TEAM_ICONS.map(
      (icon) => `
        <button
          type="button"
          class="picker-option picker-option--icon ${icon === defaultIcon ? "is-selected" : ""}"
          data-team-icon-option
          data-icon-value="${icon}"
          aria-label="Icon ${icon}"
        >${icon}</button>
      `
    ).join("");
    const row = document.createElement("div");
    row.className = "team-row";
    row.innerHTML = `
      <div class="team-row-fields">
        <label class="field">
          <input type="text" data-team-name value="${defaultName}" aria-label="Teamname" />
        </label>
        <div class="team-picker" data-picker="color">
          <input type="hidden" data-team-color value="${defaultColor}" />
          <button
            type="button"
            class="picker-button picker-button--color"
            data-team-color-toggle
            aria-label="Teamfarbe wählen"
            aria-expanded="false"
            style="background: ${defaultColor};"
          ></button>
          <div class="picker-panel" role="listbox" aria-label="Teamfarbe auswählen">
            ${colorOptions}
          </div>
        </div>
        <div class="team-picker" data-picker="icon">
          <input type="hidden" data-team-icon value="${defaultIcon}" />
          <button
            type="button"
            class="picker-button picker-button--icon"
            data-team-icon-toggle
            aria-label="Teamicon wählen"
            aria-expanded="false"
          >${defaultIcon}</button>
          <div class="picker-panel" role="listbox" aria-label="Teamicon auswählen">
            ${iconOptions}
          </div>
        </div>
      </div>
    `;
    teamListContainer.appendChild(row);
  }
}

function clampTeamCount(value) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return 2;
  return Math.min(4, Math.max(2, parsed));
}

function syncTeamCountControls(value) {
  const clamped = clampTeamCount(value);
  teamCountInput.value = clamped;
  teamCountDecrease.disabled = clamped <= 2;
  teamCountIncrease.disabled = clamped >= 4;
  renderTeams(clamped);
}

function getSelectedBoardSize(source) {
  if (!source) return "normal";
  if (source instanceof HTMLSelectElement) {
    return source.value || "normal";
  }
  const selected = [...source].find((input) => input.checked);
  return selected?.value ?? "normal";
}

function applyBoardSize(size) {
  const config = BOARD_CONFIGS[size] ?? BOARD_CONFIGS.normal;
  state.boardSize = size;
  state.boardDimensions = { rows: config.rows, cols: config.cols, total: config.total };
  state.positions = state.positions.map((pos) => Math.min(pos, config.total - 1));
  buildBoard();
  positionTokens();
}

function syncBoardSizeControls(size) {
  boardSizeInputs.forEach((input) => {
    input.checked = input.value === size;
  });
  if (boardSizeSelectGame) {
    boardSizeSelectGame.value = size;
  }
  if (boardSizeSelect) {
    boardSizeSelect.value = size;
  }
}

function closeAllTeamPickers() {
  teamListContainer.querySelectorAll(".team-picker.open").forEach((picker) => {
    picker.classList.remove("open");
    const toggle = picker.querySelector(".picker-button");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function updatePickerSelection(picker, value, type) {
  const hiddenInput = picker.querySelector(type === "color" ? "[data-team-color]" : "[data-team-icon]");
  const toggleButton = picker.querySelector(
    type === "color" ? "[data-team-color-toggle]" : "[data-team-icon-toggle]"
  );
  const options = picker.querySelectorAll(
    type === "color" ? "[data-team-color-option]" : "[data-team-icon-option]"
  );
  options.forEach((option) => option.classList.remove("is-selected"));
  const selectedOption = picker.querySelector(
    type === "color" ? `[data-color-value="${value}"]` : `[data-icon-value="${value}"]`
  );
  if (selectedOption) {
    selectedOption.classList.add("is-selected");
  }
  if (hiddenInput) {
    hiddenInput.value = value;
  }
  if (toggleButton) {
    if (type === "color") {
      toggleButton.style.background = value;
    } else {
      toggleButton.textContent = value;
    }
  }
}

function toggleTeamPicker(picker, toggleButton) {
  const isOpen = picker.classList.contains("open");
  closeAllTeamPickers();
  if (!isOpen) {
    picker.classList.add("open");
    if (toggleButton) {
      toggleButton.setAttribute("aria-expanded", "true");
    }
  }
}

function buildBoard(categories = state.categories) {
  const existingTokens = [...board.querySelectorAll(".token")];
  board.innerHTML = "";
  const cells = [];
  const { rows, cols, total } = state.boardDimensions;
  board.style.setProperty("--board-cols", cols);
  board.style.setProperty("--board-rows", rows);
  const pathPositions = Array.from({ length: total });
  const assignments = [];
  for (let index = 0; index < total; index += 1) {
    if (index === 0 || index === total - 1) {
      assignments[index] = null;
    } else if (categories.length > 0) {
      assignments[index] = categories[(index - 1) % categories.length];
    } else {
      assignments[index] = null;
    }
  }
  state.boardCategories = assignments;
  for (let row = 0; row < rows; row += 1) {
    const rowIndices = [];
    for (let col = 0; col < cols; col += 1) {
      const index = row % 2 === 0 ? row * cols + col : row * cols + (cols - 1 - col);
      rowIndices.push(index);
      pathPositions[index] = { row, col };
    }
    rowIndices.forEach((index) => {
      const cell = document.createElement("div");
      cell.className = `board-cell path alt-${index % 4}`;
      if (index === 0) {
        cell.textContent = "Start";
        cell.classList.add("start");
      } else if (index === total - 1) {
        cell.textContent = "Ziel";
        cell.classList.add("goal");
      } else {
        const number = document.createElement("span");
        number.className = "cell-number";
        number.textContent = `${index + 1}`;
        const category = assignments[index];
        if (category) {
          const visuals = CATEGORY_VISUALS[category];
          const card = document.createElement("div");
          card.className = "category-card";
          card.style.setProperty("--card-color", visuals?.color ?? "#ffffff");
          const icon = document.createElement("span");
          icon.className = "category-icon";
          icon.setAttribute("aria-hidden", "true");
          applyCategoryIcon(icon, category);
          card.appendChild(icon);
          cell.append(number, card);
          cell.dataset.category = category;
          cell.classList.add("has-category");
        } else {
          cell.append(number);
        }
      }
      cell.dataset.index = index;
      const connector = document.createElement("div");
      connector.className = "path-connector";
      const current = pathPositions[index];
      const neighbors = [];
      if (index > 0) neighbors.push(pathPositions[index - 1]);
      if (index < total - 1) neighbors.push(pathPositions[index + 1]);
      neighbors.forEach((neighbor) => {
        if (!neighbor || !current) return;
        const rowDiff = neighbor.row - current.row;
        const colDiff = neighbor.col - current.col;
        const segment = document.createElement("span");
        segment.className = "path-connector-segment";
        if (rowDiff === -1) segment.classList.add("up");
        if (rowDiff === 1) segment.classList.add("down");
        if (colDiff === -1) segment.classList.add("left");
        if (colDiff === 1) segment.classList.add("right");
        connector.appendChild(segment);
      });
      cell.appendChild(connector);
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
    color: team.color || TEAM_COLORS[index % TEAM_COLORS.length].value,
  }));
  state.positions = teams.map(() => 0);
  state.teams = teams;
  teams.forEach((team, index) => {
    const token = document.createElement("div");
    token.className = "token";
    token.style.background = team.color;
    token.dataset.team = index;
    token.dataset.icon = team.icon;
    const tokenIcon = document.createElement("span");
    tokenIcon.className = "token-icon";
    tokenIcon.textContent = team.icon;
    token.appendChild(tokenIcon);
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

function renderTeamStatus() {
  if (!teamStatusList) return;
  teamStatusList.innerHTML = "";
  state.teams.forEach((team, index) => {
    const item = document.createElement("div");
    item.className = "team-status-item";
    if (index === state.currentTeam && !state.gameOver) {
      item.classList.add("is-active");
    }
    const info = document.createElement("div");
    info.className = "team-status-info";
    const swatch = document.createElement("span");
    swatch.className = "team-status-swatch";
    swatch.style.background = team.color;
    const label = document.createElement("span");
    label.textContent = formatTeamLabel(index);
    info.append(swatch, label);
    const position = document.createElement("div");
    position.className = "team-status-position";
    position.textContent = `Feld ${state.positions[index] + 1}`;
    item.append(info, position);
    teamStatusList.appendChild(item);
  });
}

function positionTokens() {
  state.positions.forEach((pos, index) => {
    const cell = board.querySelector(`.board-cell[data-index="${pos}"]`);
    if (!cell) return;
    const rect = cell.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();
    const token = board.querySelector(`.token[data-team="${index}"]`);
    if (!token) return;
    const quadrantX = index % 2 === 0 ? 0.28 : 0.72;
    const quadrantY = index < 2 ? 0.28 : 0.72;
    token.style.left = `${rect.left - boardRect.left + rect.width * quadrantX}px`;
    token.style.top = `${rect.top - boardRect.top + rect.height * quadrantY}px`;
  });
  renderTeamStatus();
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

function showPenaltyToast(penalty) {
  if (!turnPenalty) return;
  turnPenalty.textContent = `-${penalty}s Strafzeit`;
  turnPenalty.classList.remove("show");
  void turnPenalty.offsetWidth;
  turnPenalty.classList.add("show");
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
  applyCategoryIcon(turnCategoryIcon, category, { allowFallback: true });
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
  state.turnStartPositions = previousPositions;
  setTimeout(() => {
    moveToken(roll).then(() => {
      if (state.positions[state.currentTeam] >= state.boardDimensions.total - 1) {
        showWinner(formatTeamLabel(state.currentTeam));
        return;
      }
      setTimeout(() => {
        const landingIndex = state.positions[state.currentTeam];
        const category = state.boardCategories[landingIndex] ?? state.categories[0];
        state.pendingCategory = category;
        setCategory(category);
        showTurnOverlay();
      }, 2000);
    });
  }, 600);
}

function moveToken(steps, teamIndex = state.currentTeam) {
  return new Promise((resolve) => {
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
        Math.min(state.boardDimensions.total - 1, state.positions[teamIndex] + direction)
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

function finishTurn(isCorrect, timedOut = false, { returnToPrevious = false } = {}) {
  if (state.pendingRoll === null) return;
  stopTimer();
  const teamIndex = state.currentTeam;
  if (returnToPrevious) {
    const targetPosition = state.turnStartPositions?.[teamIndex] ?? state.positions[teamIndex];
    state.pendingReturn = { teamIndex, targetPosition };
  }
  state.turnStartPositions = null;
  const animationText = timedOut ? "⏱️ Timeout" : isCorrect ? "✅" : "⏭️ Weiter";
  showOverlay(animationText, 900);
  hideTurnOverlay();
  state.pendingRoll = null;
  state.pendingCategory = null;
  statusText.textContent = `${formatTeamLabel(state.currentTeam)} beendet den Zug.`;
  state.currentTeam = (state.currentTeam + 1) % state.teams.length;
  statusText.textContent = `Nächstes: ${formatTeamLabel(state.currentTeam)} würfelt.`;
  renderTeamStatus();
  if (returnToPrevious) {
    setTimeout(() => {
      if (state.pendingReturn?.teamIndex !== teamIndex) return;
      const targetPosition = state.pendingReturn.targetPosition ?? state.positions[teamIndex];
      state.pendingReturn = null;
      const stepsBack = state.positions[teamIndex] - targetPosition;
      if (stepsBack > 0) {
        moveToken(-stepsBack, teamIndex);
      }
    }, 750);
  }
}

function handleUndo() {
  const last = state.history.pop();
  if (!last) return;
  state.positions = last.positions;
  state.currentTeam = last.team;
  positionTokens();
  statusText.textContent = `Zug zurück: ${formatTeamLabel(state.currentTeam)} ist dran.`;
  renderTeamStatus();
}

function handleStartGame() {
  const selectedCategories = getSelectedCategories(menuCategoryControls);
  if (selectedCategories.length === 0) {
    alert("Bitte mindestens eine Kategorie wählen.");
    return;
  }
  const selectedBoardSize = getSelectedBoardSize(boardSizeSelect ?? boardSizeInputs);
  syncBoardSizeControls(selectedBoardSize);
  state.categories = selectedCategories;
  state.categoryTimes = readCategoryTimes(menuCategoryControls);
  state.timeLimit = state.categoryTimes[selectedCategories[0]] ?? 60;
  state.swapPenalty = Number.parseInt(swapSelect.value, 10);
  applyBoardSize(selectedBoardSize);
  const teams = [...teamListContainer.querySelectorAll(".team-row")].map((row, index) => {
    const nameInput = row.querySelector("[data-team-name]");
    const iconSelect = row.querySelector("[data-team-icon]");
    const colorSelect = row.querySelector("[data-team-color]");
    const name = nameInput?.value.trim() || `Team ${index + 1}`;
    const icon = iconSelect?.value || TEAM_ICONS[0];
    const color = colorSelect?.value || TEAM_COLORS[0].value;
    return { name, icon, color };
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
  syncBoardSizeControls(state.boardSize);
}

function applySettingsFromPanel() {
  const selectedCategories = getSelectedCategories(gameCategoryControls);
  if (selectedCategories.length === 0) {
    alert("Bitte mindestens eine Kategorie wählen.");
    return;
  }
  const selectedBoardSize = getSelectedBoardSize(boardSizeSelectGame);
  syncBoardSizeControls(selectedBoardSize);
  state.categories = selectedCategories;
  state.categoryTimes = readCategoryTimes(gameCategoryControls);
  state.timeLimit = state.categoryTimes[selectedCategories[0]] ?? 60;
  state.swapPenalty = Number.parseInt(swapSelectGame.value, 10);
  swapSelect.value = swapSelectGame.value;
  syncCategoryControls(menuCategoryControls, state.categories, state.categoryTimes);
  applyBoardSize(selectedBoardSize);
  if (!state.timer) {
    updateTimerDisplay(state.timeLimit);
  }
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
  startTimer();
}

function applySwapPenalty() {
  const penalty = state.swapPenalty;
  if (!Number.isFinite(penalty) || penalty <= 0) return;
  state.remainingTime = Math.max(0, state.remainingTime - penalty);
  updateTimerDisplay(state.remainingTime);
  showPenaltyToast(penalty);
  if (state.remainingTime <= 0) {
    finishTurn(false, true);
  }
}

function handleSwapCard() {
  if (state.phase !== "word") return;
  const card = getCardByCategory(state.pendingCategory);
  setWordCard(card);
  applySwapPenalty();
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
  syncTeamCountControls(teamCountInput.value);
  const selectedBoardSize = getSelectedBoardSize(boardSizeSelect ?? boardSizeInputs);
  syncBoardSizeControls(selectedBoardSize);
  applyBoardSize(selectedBoardSize);
  positionTokens();
  updateTimerDisplay(state.timeLimit);
  updateFullscreenState();
  syncSettingsPanel();
}

window.addEventListener("resize", positionTokens);
teamCountInput.addEventListener("change", (event) => {
  syncTeamCountControls(event.target.value);
});
teamCountDecrease.addEventListener("click", () => {
  syncTeamCountControls(Number.parseInt(teamCountInput.value, 10) - 1);
});
teamCountIncrease.addEventListener("click", () => {
  syncTeamCountControls(Number.parseInt(teamCountInput.value, 10) + 1);
});
boardSizeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const selectedBoardSize = getSelectedBoardSize(boardSizeInputs);
    syncBoardSizeControls(selectedBoardSize);
    applyBoardSize(selectedBoardSize);
  });
});
boardSizeSelect?.addEventListener("change", () => {
  const selectedBoardSize = getSelectedBoardSize(boardSizeSelect);
  syncBoardSizeControls(selectedBoardSize);
  applyBoardSize(selectedBoardSize);
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
turnCorrectButton?.addEventListener("click", () => {
  if (state.phase !== "word") return;
  finishTurn(true);
});
turnWrongButton?.addEventListener("click", () => {
  if (state.phase !== "word") return;
  finishTurn(false, false, { returnToPrevious: true });
});
turnSwapButton?.addEventListener("click", handleSwapCard);
turnReadyButton.addEventListener("click", () => {
  if (state.phase !== "ready") return;
  turnReadyButton.disabled = true;
  startCountdown();
});
winnerRestartButton.addEventListener("click", handleWinnerRestart);

turnPenalty?.addEventListener("animationend", () => {
  turnPenalty.classList.remove("show");
});

csvInfo.addEventListener("click", () => {
  const isHidden = csvTooltip.getAttribute("aria-hidden") === "true";
  csvTooltip.setAttribute("aria-hidden", isHidden ? "false" : "true");
});

themeToggle.addEventListener("change", (event) => {
  const isLight = event.target.checked;
  if (isLight) {
    localStorage.setItem(THEME_STORAGE_KEY, "light");
  } else {
    localStorage.removeItem(THEME_STORAGE_KEY);
  }
  applyTheme(isLight ? "light" : "default");
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
