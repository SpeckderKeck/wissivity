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
const diceOverlay = document.getElementById("dice-overlay");
const diceOverlayValue = document.getElementById("dice-overlay-value");
const statusText = document.getElementById("status");
const undoButton = document.getElementById("undo");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");
const turnOverlay = document.getElementById("turn-overlay");
const turnOverlayPanel = document.getElementById("turn-overlay-panel");
const turnCategory = document.getElementById("turn-category");
const turnCategoryIcon = document.getElementById("turn-category-icon");
const turnCategoryLabel = document.getElementById("turn-category-label");
const turnCountdownCard = document.getElementById("turn-countdown-card");
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
const turnAnswer = document.getElementById("turn-answer");
const turnReadyButton = document.getElementById("turn-ready");
const winnerScreen = document.getElementById("winner-screen");
const winnerLabel = document.getElementById("winner-label");
const winnerRestartButton = document.getElementById("winner-restart");
const csvUpload = document.getElementById("csv-upload");
const csvDatasetNameInput = document.getElementById("csv-dataset-name");
const csvSaveNewButton = document.getElementById("csv-save-new");
const csvOverwriteSelect = document.getElementById("csv-overwrite-select");
const csvOverwriteButton = document.getElementById("csv-overwrite");
const csvStatus = document.getElementById("csv-status");
const csvInfo = document.getElementById("csv-info");
const csvTooltip = document.getElementById("csv-tooltip");
const datasetSelectList = document.getElementById("dataset-select-list");
const datasetAddButton = document.getElementById("dataset-add");
const openCardEditorButton = document.getElementById("open-card-editor");
const cardEditorModal = document.getElementById("card-editor-modal");
const closeCardEditorButton = document.getElementById("close-card-editor");
const cardEditorBody = document.getElementById("card-editor-body");
const cardEditorAddRowButton = document.getElementById("card-editor-add-row");
const cardEditorSaveButton = document.getElementById("card-editor-save");
const cardEditorExportButton = document.getElementById("card-editor-export");
const cardEditorDatasetLabelInput = document.getElementById("card-editor-dataset-label");
const cardEditorSaveNewButton = document.getElementById("card-editor-save-new");
const cardEditorDatasetSelect = document.getElementById("card-editor-dataset-select");
const cardEditorOverwriteButton = document.getElementById("card-editor-overwrite");
const cardEditorDeleteButton = document.getElementById("card-editor-delete");
const cardEditorErrors = document.getElementById("card-editor-errors");
const themeToggle = document.getElementById("theme-toggle");
const themeToggleWrapper = themeToggle?.closest(".theme-switch");
const fullscreenToggle = document.getElementById("fullscreen-toggle");
const qrToggle = document.getElementById("qr-toggle");
const qrModal = document.getElementById("qr-modal");
const qrImage = document.getElementById("qr-image");
const closeQrModalButton = document.getElementById("close-qr-modal");

function openQrModal() {
  if (!qrModal || !qrImage) return;
  const pageUrl = window.location.href;
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=${encodeURIComponent(pageUrl)}`;
  qrModal.classList.remove("hidden");
}

function closeQrModal() {
  if (!qrModal) return;
  qrModal.classList.add("hidden");
}

if (qrToggle) {
  qrToggle.addEventListener("click", openQrModal);
}

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

function setStatusMessage(message, { pulseDice = false } = {}) {
  if (statusText) {
    statusText.textContent = message;
  }
  rollButton?.classList.toggle("dice--pulse", pulseDice);
}

function showDiceOverlay(roll) {
  if (!diceOverlay || !diceOverlayValue) return;
  diceOverlayValue.textContent = roll;
  diceOverlay.classList.remove("active");
  void diceOverlay.offsetWidth;
  diceOverlay.classList.add("active");
}

function hideDiceOverlay() {
  if (!diceOverlay) return;
  diceOverlay.classList.remove("active");
}

function setPanelState(panel, isActive) {
  if (!panel) return;
  panel.classList.toggle("panel--active", isActive);
  panel.toggleAttribute("hidden", !isActive);
  panel.setAttribute("aria-hidden", String(!isActive));
}

function showMenuPanel() {
  setPanelState(menuPanel, true);
  setPanelState(gamePanel, false);
  document.body.classList.remove("game-active");
}

function showGamePanel() {
  setPanelState(menuPanel, false);
  setPanelState(gamePanel, true);
  document.body.classList.add("game-active");
}

const CATEGORY_CONFIG = {
  Erklären: { id: "explain", iconPath: "erklaeren.svg", fallbackIcon: "💬" },
  Zeichnen: { id: "draw", iconPath: "zeichnen_1.svg", fallbackIcon: "✏️" },
  Pantomime: { id: "pantomime", iconPath: "pantomime_1.svg", fallbackIcon: "🎭" },
  Quizfrage: { id: "quiz", iconPath: "assets/icons/quiz.svg", fallbackIcon: "?" },
};

const CATEGORY_VISUALS = {
  Erklären: {
    color: "#5bc8ac",
    iconColor: "#2f7c67",
  },
  Zeichnen: {
    color: "#f16d9e",
    iconColor: "#9a2f5d",
  },
  Pantomime: {
    color: "#e6d72a",
    iconColor: "#7a6d00",
  },
  Quizfrage: {
    color: "#38bdf8",
    iconColor: "#0ea5e9",
  },
};

const ALLOWED_CARD_CATEGORIES = ["Erklären", "Zeichnen", "Pantomime", "Quizfrage"];

function getCategoryIconPath(category) {
  return CATEGORY_CONFIG[category]?.iconPath ?? "";
}

function getCategoryFallbackIcon(category) {
  return CATEGORY_CONFIG[category]?.fallbackIcon ?? "?";
}

function applyCategoryIcon(element, category, { allowFallback = false } = {}) {
  const iconPath = getCategoryIconPath(category);
  const visuals = CATEGORY_VISUALS[category];
  const categoryId = CATEGORY_CONFIG[category]?.id ?? "unknown";
  Object.values(CATEGORY_CONFIG).forEach((config) => {
    element.classList.remove(`category-icon--${config.id}`);
  });
  element.classList.add(`category-icon--${categoryId}`);
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

const PRESET_DATASETS = globalThis.CARD_DATABASES ?? {};
const DEFAULT_DATASET_KEY = "allgemein";
const DEFAULT_DATA = PRESET_DATASETS[DEFAULT_DATASET_KEY]?.cards ?? [];
const MAX_DATASET_SELECTIONS = 5;
const CUSTOM_DATASETS_STORAGE_KEY = "wissivity.customDatasets";
const CUSTOM_DATASETS_API_ENDPOINT = "/api/custom-datasets";
const REMOVED_PRESET_DATASET_KEYS = new Set(["umformen"]);
const REMOVED_CUSTOM_DATASET_LABELS = new Set(["umformen"]);

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
    Quizfrage: 60,
  },
  swapPenalty: 10,
  categories: ["Erklären", "Zeichnen", "Pantomime", "Quizfrage"],
  cards: [...DEFAULT_DATA],
  history: [],
  boardCategories: [],
  phase: "idle",
  gameOver: false,
  pendingReturn: null,
  currentCard: null,
  quizPhase: null,
  masterQuiz: false,
  selectedDatasets: [],
  customDatasets: {},
  uploadedCsvCards: [],
  datasetStorageMode: "local",
};

const TEAM_ICONS = [
  "🐯",
  "🐼",
  "🦊",
  "🐸",
  "🐙",
  "🦁",
  "🐧",
  "🐨",
  "🐶",
  "🐱",
  "🦉",
  "🦄",
  "🦋",
  "🐢",
  "🐰",
  "🦓",
];
const DEFAULT_TEAM_NAMES = ["Team A", "Team B", "Team C", "Team D"];
const THEME_STORAGE_KEY = "wissivity-theme";
const BOARD_CONFIGS = {
  short: { rows: 4, cols: 6, total: 24 },
  normal: { rows: 5, cols: 6, total: 30 },
  long: { rows: 6, cols: 7, total: 42 },
};

function toCustomDatasetKey(id) {
  return `custom:${id}`;
}

function fromCustomDatasetKey(key) {
  if (!key?.startsWith("custom:")) return null;
  return key.slice(7);
}

function normalizeStoredCustomDataset(rawDataset) {
  if (!rawDataset || typeof rawDataset !== "object") return null;
  const id = typeof rawDataset.id === "string" ? rawDataset.id.trim() : "";
  const label = typeof rawDataset.label === "string" ? rawDataset.label.trim() : "";
  if (!id || !label) return null;
  if (REMOVED_CUSTOM_DATASET_LABELS.has(label.toLocaleLowerCase("de"))) return null;
  const cards = Array.isArray(rawDataset.cards)
    ? rawDataset.cards.map((card) => normalizeCardInput(card)).filter((card) => card.term)
    : [];

  return {
    id,
    label,
    cards,
    createdAt: rawDataset.createdAt || new Date().toISOString(),
    updatedAt: rawDataset.updatedAt || new Date().toISOString(),
  };
}

function readCustomDatasetsFromStorage() {
  try {
    const raw = localStorage.getItem(CUSTOM_DATASETS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return {};
    return parsed.reduce((accumulator, rawDataset) => {
      const dataset = normalizeStoredCustomDataset(rawDataset);
      if (dataset) {
        accumulator[dataset.id] = dataset;
      }
      return accumulator;
    }, {});
  } catch {
    return {};
  }
}

async function readCustomDatasetsFromApi() {
  try {
    const response = await fetch(CUSTOM_DATASETS_API_ENDPOINT, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }

    const parsed = await response.json();
    if (!Array.isArray(parsed)) {
      return null;
    }

    return parsed.reduce((accumulator, rawDataset) => {
      const dataset = normalizeStoredCustomDataset(rawDataset);
      if (dataset) {
        accumulator[dataset.id] = dataset;
      }
      return accumulator;
    }, {});
  } catch {
    return null;
  }
}

async function persistCustomDatasets() {
  const datasets = Object.values(state.customDatasets)
    .map((dataset) => normalizeStoredCustomDataset(dataset))
    .filter(Boolean)
    .sort((a, b) => String(a.label).localeCompare(String(b.label), "de"));

  if (state.datasetStorageMode === "remote") {
    try {
      const response = await fetch(CUSTOM_DATASETS_API_ENDPOINT, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(datasets),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      localStorage.setItem(CUSTOM_DATASETS_STORAGE_KEY, JSON.stringify(datasets));
      return { ok: true, mode: "remote" };
    } catch {
      state.datasetStorageMode = "local";
      localStorage.setItem(CUSTOM_DATASETS_STORAGE_KEY, JSON.stringify(datasets));
      return { ok: false, mode: "local", message: "Server nicht erreichbar, lokal gespeichert." };
    }
  }

  localStorage.setItem(CUSTOM_DATASETS_STORAGE_KEY, JSON.stringify(datasets));
  return { ok: true, mode: "local" };
}

async function loadCustomDatasets() {
  const remoteDatasets = await readCustomDatasetsFromApi();
  if (remoteDatasets) {
    state.datasetStorageMode = "remote";
    return remoteDatasets;
  }

  state.datasetStorageMode = "local";
  return readCustomDatasetsFromStorage();
}

function getAllDatasetEntries() {
  const presetEntries = Object.entries(PRESET_DATASETS)
    .filter(([key]) => !REMOVED_PRESET_DATASET_KEYS.has(key))
    .map(([key, dataset]) => ({
      key,
      label: dataset.label,
      cards: dataset.cards,
      isCustom: false,
    }));
  const customEntries = Object.values(state.customDatasets).map((dataset) => ({
    key: toCustomDatasetKey(dataset.id),
    label: `${dataset.label} (Eigen)`,
    cards: dataset.cards,
    isCustom: true,
    id: dataset.id,
  }));
  return [...presetEntries, ...customEntries];
}

function getDatasetEntryByKey(key) {
  if (REMOVED_PRESET_DATASET_KEYS.has(key)) {
    return null;
  }
  if (PRESET_DATASETS[key]) {
    const dataset = PRESET_DATASETS[key];
    return { key, label: dataset.label, cards: dataset.cards, isCustom: false };
  }
  const customId = fromCustomDatasetKey(key);
  if (!customId) return null;
  const dataset = state.customDatasets[customId];
  if (!dataset) return null;
  return {
    key,
    label: `${dataset.label} (Eigen)`,
    cards: dataset.cards,
    isCustom: true,
    id: dataset.id,
  };
}

function refreshDatasetSelections() {
  setupDatasetSelects();
  applySelectedDatasets();
}

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
    const defaultName = DEFAULT_TEAM_NAMES[i] ?? `Team ${i + 1}`;
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

function updatePickerSelection(picker, value) {
  const hiddenInput = picker.querySelector("[data-team-icon]");
  const toggleButton = picker.querySelector("[data-team-icon-toggle]");
  const options = picker.querySelectorAll("[data-team-icon-option]");
  options.forEach((option) => option.classList.remove("is-selected"));
  const selectedOption = picker.querySelector(`[data-icon-value="${value}"]`);
  if (selectedOption) {
    selectedOption.classList.add("is-selected");
  }
  if (hiddenInput) {
    hiddenInput.value = value;
  }
  if (toggleButton) {
    toggleButton.textContent = value;
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

function handleTeamListClick(event) {
  const iconToggle = event.target.closest("[data-team-icon-toggle]");
  if (iconToggle) {
    const picker = iconToggle.closest(".team-picker");
    if (picker) {
      toggleTeamPicker(picker, iconToggle);
    }
    return;
  }
  const iconOption = event.target.closest("[data-team-icon-option]");
  if (iconOption) {
    const picker = iconOption.closest(".team-picker");
    const value = iconOption.dataset.iconValue;
    if (picker && value) {
      updatePickerSelection(picker, value);
      closeAllTeamPickers();
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
    }
    rowIndices.forEach((index) => {
      const cell = document.createElement("div");
      cell.className = `board-cell path alt-${index % 4}`;
      const card = document.createElement("div");
      card.className = "category-card";
      if (index === 0) {
        cell.classList.add("start");
        card.style.setProperty("--card-color", "#d9f7ea");
        const icon = document.createElement("span");
        icon.className = "category-icon icon-fallback";
        icon.textContent = "🚩";
        card.append(icon);
        cell.append(card);
      } else if (index === total - 1) {
        cell.classList.add("goal");
        card.style.setProperty("--card-color", "#ffe4c7");
        const icon = document.createElement("span");
        icon.className = "category-icon icon-fallback";
        icon.textContent = "🏁";
        card.append(icon);
        cell.append(card);
      } else {
        const category = assignments[index];
        if (category) {
          const visuals = CATEGORY_VISUALS[category];
          card.style.setProperty("--card-color", visuals?.color ?? "#ffffff");
          const icon = document.createElement("span");
          icon.className = "category-icon";
          icon.setAttribute("aria-hidden", "true");
          applyCategoryIcon(icon, category, { allowFallback: true });
          card.appendChild(icon);
          cell.append(card);
          cell.dataset.category = category;
          cell.classList.add("has-category");
        }
      }
      cell.dataset.index = index;
      board.appendChild(cell);
      cells[index] = cell;
    });
  }
  renderBoardPath();
  existingTokens.forEach((token) => board.appendChild(token));
  return cells;
}

function renderBoardPath() {
  if (!board) return;
  board.querySelector(".board-path")?.remove();
  const totalCells = state.boardDimensions.total;
  if (totalCells < 2) return;

  const cells = [];
  for (let index = 0; index < totalCells; index += 1) {
    const cell = board.querySelector(`.board-cell[data-index="${index}"]`);
    if (!cell) continue;
    const card = cell.querySelector(".category-card");
    const reference = card ?? cell;
    cells.push({
      centerX: cell.offsetLeft + cell.offsetWidth / 2,
      centerY: cell.offsetTop + cell.offsetHeight / 2,
      width: reference.offsetWidth,
      height: reference.offsetHeight
    });
  }

  if (cells.length < 2) return;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("board-path");
  svg.setAttribute("viewBox", `0 0 ${board.clientWidth} ${board.clientHeight}`);
  svg.setAttribute("preserveAspectRatio", "none");
  svg.setAttribute("aria-hidden", "true");

  for (let index = 0; index < cells.length - 1; index += 1) {
    const from = cells[index];
    const to = cells[index + 1];
    const dx = to.centerX - from.centerX;
    const dy = to.centerY - from.centerY;
    const distance = Math.hypot(dx, dy);
    if (distance < 1) continue;

    const dirX = dx / distance;
    const dirY = dy / distance;
    const perpX = -dirY;
    const perpY = dirX;
    const arrowLength = Math.min(from.width / 3, Math.max(distance - from.width / 2 - to.width / 2 - 4, 12));
    const arrowWidth = from.height * 0.75;
    const midpointX = (from.centerX + to.centerX) / 2;
    const midpointY = (from.centerY + to.centerY) / 2;
    const tipX = midpointX + dirX * (arrowLength / 2);
    const tipY = midpointY + dirY * (arrowLength / 2);
    const baseX = tipX - dirX * arrowLength;
    const baseY = tipY - dirY * arrowLength;
    const leftX = baseX + perpX * (arrowWidth / 2);
    const leftY = baseY + perpY * (arrowWidth / 2);
    const rightX = baseX - perpX * (arrowWidth / 2);
    const rightY = baseY - perpY * (arrowWidth / 2);

    const arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    arrow.classList.add("board-arrow");
    arrow.setAttribute(
      "points",
      `${tipX.toFixed(2)},${tipY.toFixed(2)} ${leftX.toFixed(2)},${leftY.toFixed(2)} ${rightX.toFixed(2)},${rightY.toFixed(2)}`
    );
    svg.appendChild(arrow);
  }

  board.appendChild(svg);
}

function createTokens(teamData) {
  board.querySelectorAll(".token").forEach((token) => token.remove());
  const teams = teamData.map((team) => ({ ...team }));
  state.positions = teams.map(() => 0);
  state.teams = teams;
  teams.forEach((team, index) => {
    const token = document.createElement("div");
    token.className = "token";
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
    const label = document.createElement("span");
    label.textContent = formatTeamLabel(index);
    info.append(label);
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

function startTimer({ onTimeout } = {}) {
  clearInterval(state.timer);
  state.timer = null;
  state.remainingTime = state.timeLimit;
  updateTimerDisplay(state.remainingTime);
  state.timer = setInterval(() => {
    state.remainingTime -= 1;
    updateTimerDisplay(state.remainingTime);
    if (state.remainingTime <= 0) {
      clearInterval(state.timer);
      if (typeof onTimeout === "function") {
        onTimeout();
      } else {
        finishTurn(false, true, { returnToPrevious: true });
      }
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
  turnWord?.classList.remove("is-quiz-question");
  if (!card) {
    turnWordTitle.textContent = "Keine Karte";
    turnTabooList.innerHTML = "";
    turnAnswer?.classList.add("hidden");
    if (turnAnswer) {
      turnAnswer.textContent = "";
    }
    return;
  }
  turnWordTitle.textContent = card.term;
  turnTabooList.innerHTML = "";
  turnAnswer?.classList.add("hidden");
  if (turnAnswer) {
    turnAnswer.textContent = "";
  }
  if (card.category === "Erklären") {
    card.taboo.forEach((taboo) => {
      const li = document.createElement("li");
      li.textContent = taboo;
      turnTabooList.appendChild(li);
    });
  }
}

function setQuizQuestionCard(card) {
  if (!card) {
    turnWord?.classList.remove("is-quiz-question");
    turnWordTitle.textContent = "Keine Quizfrage";
    turnTabooList.innerHTML = "";
    turnAnswer?.classList.add("hidden");
    if (turnAnswer) {
      turnAnswer.textContent = "";
    }
    return;
  }
  turnWord?.classList.add("is-quiz-question");
  turnWordTitle.textContent = card.term;
  turnTabooList.innerHTML = "";
  if (turnAnswer) {
    turnAnswer.textContent = "";
    turnAnswer.classList.add("hidden");
  }
}

function setQuizAnswerCard(card) {
  turnWord?.classList.remove("is-quiz-question");
  if (!card) {
    turnWordTitle.textContent = "Antwort";
    turnTabooList.innerHTML = "";
    if (turnAnswer) {
      turnAnswer.textContent = "Antwort fehlt.";
      turnAnswer.classList.remove("hidden");
    }
    return;
  }
  turnWordTitle.textContent = card.term;
  turnTabooList.innerHTML = "";
  if (turnAnswer) {
    const answerText = card.answer ? `Antwort: ${card.answer}` : "Antwort fehlt.";
    turnAnswer.textContent = answerText;
    turnAnswer.classList.remove("hidden");
  }
}

function setTurnButtons({ showCorrect = true, showWrong = true, showSwap = true, showContinue = true } = {}) {
  turnCorrectButton?.classList.toggle("hidden", !showCorrect);
  turnWrongButton?.classList.toggle("hidden", !showWrong);
  turnSwapButton?.classList.toggle("hidden", !showSwap);
  turnContinueButton?.classList.toggle("hidden", !showContinue);
}

function setCategoryLabel(label, category = label) {
  turnCategoryLabel.textContent = label;
  applyCategoryIcon(turnCategoryIcon, category, { allowFallback: true });
}

function setCategory(category) {
  setCategoryLabel(category, category);
}

function handleRoll() {
  if (state.pendingRoll !== null || state.timer || state.phase !== "idle" || state.gameOver) {
    return;
  }
  const roll = Math.floor(Math.random() * 6) + 1;
  state.pendingRoll = roll;
  showDiceOverlay(roll);
  setStatusMessage(`${formatTeamLabel(state.currentTeam)} würfelt ${roll}.`);
  const previousPositions = [...state.positions];
  state.history.push({
    positions: previousPositions,
    team: state.currentTeam,
  });
  state.turnStartPositions = previousPositions;
  setTimeout(() => {
    moveToken(roll).then(() => {
      if (state.positions[state.currentTeam] >= state.boardDimensions.total - 1) {
        hideDiceOverlay();
        state.masterQuiz = true;
        state.pendingCategory = "Quizfrage";
        setCategoryLabel("Masterquizfrage", "Quizfrage");
        showTurnOverlay();
        return;
      }
      setTimeout(() => {
        const landingIndex = state.positions[state.currentTeam];
        const category = state.boardCategories[landingIndex] ?? state.categories[0];
        state.pendingCategory = category;
        setCategory(category);
        hideDiceOverlay();
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
  const wasMasterQuiz = state.masterQuiz;
  state.masterQuiz = false;
  if (returnToPrevious) {
    const targetPosition = state.turnStartPositions?.[teamIndex] ?? state.positions[teamIndex];
    state.pendingReturn = { teamIndex, targetPosition };
  }
  state.turnStartPositions = null;
  const animationText = isCorrect ? "✅" : "⏭️ Weiter";
  showOverlay(animationText, 900);
  hideTurnOverlay();
  state.pendingRoll = null;
  state.pendingCategory = null;
  state.currentCard = null;
  state.quizPhase = null;
  if (wasMasterQuiz && isCorrect) {
    showWinner(formatTeamLabel(teamIndex));
    return;
  }
  setStatusMessage(`${formatTeamLabel(state.currentTeam)} beendet den Zug.`);
  state.currentTeam = (state.currentTeam + 1) % state.teams.length;
  setStatusMessage(`Nächstes: ${formatTeamLabel(state.currentTeam)} würfelt.`, { pulseDice: true });
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
  setStatusMessage(`Zug zurück: ${formatTeamLabel(state.currentTeam)} ist dran.`, { pulseDice: true });
  renderTeamStatus();
}

function handleStartGame() {
  const selectedDatasetKeys = readSelectedDatasetKeys();
  if (selectedDatasetKeys.length === 0) {
    alert("Bitte mindestens einen Kartensatz wählen.");
    return;
  }
  applySelectedDatasets();

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
    const name = nameInput?.value.trim() || `Team ${index + 1}`;
    const icon = iconSelect?.value || TEAM_ICONS[0];
    return { name, icon };
  });
  createTokens(teams);
  showGamePanel();
  requestAnimationFrame(() => {
    renderBoardPath();
    positionTokens();
  });
  state.currentTeam = 0;
  state.pendingRoll = null;
  state.pendingCategory = null;
  state.gameOver = false;
  state.phase = "idle";
  winnerScreen.classList.add("hidden");
  turnOverlay.classList.add("hidden");
  turnOverlay.classList.remove("active", "expanded", "category");
  setStatusMessage(`Nächstes: ${formatTeamLabel(state.currentTeam)} würfelt.`, { pulseDice: true });
}

function normalizeCardInput(rawRow = {}) {
  const category = String(rawRow.category ?? "").trim();
  const term = String(rawRow.term ?? "").trim();

  if (category === "Quizfrage") {
    const answer = String(rawRow.answer ?? rawRow.taboo?.[0] ?? "").trim();
    return {
      category,
      term,
      answer,
      taboo: [],
    };
  }

  const tabooCandidates = Array.isArray(rawRow.taboo)
    ? rawRow.taboo
    : [rawRow.answer, rawRow.tabu2, rawRow.tabu3, rawRow.tabu4];

  return {
    category,
    term,
    taboo: tabooCandidates.map((entry) => String(entry ?? "").trim()).filter(Boolean),
  };
}

function parseCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  return lines.map((line) => {
    const parts = line.split(";");
    const [category = "", term = "", ...rest] = parts;
    return {
      category,
      term,
      answer: rest[0] ?? "",
      taboo: rest,
    };
  });
}

function cloneCards(cards) {
  return cards.map((card) => ({
    ...card,
    taboo: Array.isArray(card.taboo) ? [...card.taboo] : [],
  }));
}

let cardEditorRowCounter = 0;

function validateEditorCards(rows) {
  const cards = [];
  const errors = [];

  rows.forEach((rawRow, index) => {
    const normalized = normalizeCardInput(rawRow);
    const rowErrors = [];

    if (!normalized.category) {
      rowErrors.push("Kategorie ist erforderlich");
    } else if (!ALLOWED_CARD_CATEGORIES.includes(normalized.category)) {
      rowErrors.push(`Ungültige Kategorie "${normalized.category}"`);
    }

    if (!normalized.term) {
      rowErrors.push("Begriff/Frage ist erforderlich");
    }

    if (normalized.category === "Quizfrage" && !normalized.answer) {
      rowErrors.push("Antwort ist für Quizfrage erforderlich");
    }

    if (rowErrors.length > 0) {
      errors.push({ row: index + 1, messages: rowErrors });
      return;
    }

    cards.push(normalized);
  });

  return { cards, errors };
}

function collectRawCardsFromEditor() {
  if (!cardEditorBody) return [];
  return [...cardEditorBody.querySelectorAll("tr[data-row-id]")].map((row) => ({
    category: row.querySelector('[data-field="category"]')?.value ?? "",
    term: row.querySelector('[data-field="term"]')?.value ?? "",
    answer: row.querySelector('[data-field="answer"]')?.value ?? "",
    tabu2: row.querySelector('[data-field="tabu2"]')?.value ?? "",
    tabu3: row.querySelector('[data-field="tabu3"]')?.value ?? "",
    tabu4: row.querySelector('[data-field="tabu4"]')?.value ?? "",
  }));
}

function renderEditorValidationErrors(errors) {
  if (cardEditorSaveButton) {
    cardEditorSaveButton.disabled = errors.length > 0;
  }
  if (!cardEditorErrors) return;

  if (errors.length === 0) {
    cardEditorErrors.innerHTML = "";
    cardEditorErrors.classList.add("hidden");
    return;
  }

  const errorList = errors.map((error) => `<li>Zeile ${error.row}: ${error.messages.join(", ")}</li>`).join("");
  cardEditorErrors.innerHTML = `<ul>${errorList}</ul>`;
  cardEditorErrors.classList.remove("hidden");
}

function updateEditorValidationState() {
  const { cards, errors } = validateEditorCards(collectRawCardsFromEditor());
  renderEditorValidationErrors(errors);
  return { cards, errors };
}

function createCategorySelect(selectedCategory = "Erklären") {
  const select = document.createElement("select");
  select.dataset.field = "category";
  ALLOWED_CARD_CATEGORIES.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    if (category === selectedCategory) {
      option.selected = true;
    }
    select.append(option);
  });
  return select;
}

function createEditorInput(field, value = "") {
  const input = document.createElement("input");
  input.type = "text";
  input.dataset.field = field;
  input.value = value;
  return input;
}

function createEditorRow(card = {}) {
  const rowId = `card-row-${cardEditorRowCounter++}`;
  const row = document.createElement("tr");
  row.dataset.rowId = rowId;

  const category = ALLOWED_CARD_CATEGORIES.includes(card.category) ? card.category : "Erklären";
  const taboos = Array.isArray(card.taboo) ? card.taboo : [];
  const answerOrTabu = category === "Quizfrage" ? card.answer ?? "" : taboos[0] ?? "";

  const columns = [
    createCategorySelect(category),
    createEditorInput("term", card.term ?? ""),
    createEditorInput("answer", answerOrTabu),
    createEditorInput("tabu2", taboos[1] ?? ""),
    createEditorInput("tabu3", taboos[2] ?? ""),
    createEditorInput("tabu4", taboos[3] ?? ""),
  ];

  columns.forEach((element) => {
    const cell = document.createElement("td");
    cell.append(element);
    row.append(cell);
  });

  const actionCell = document.createElement("td");
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "ghost card-editor-remove";
  removeButton.textContent = "Entfernen";
  removeButton.addEventListener("click", () => removeEditorRow(rowId));
  actionCell.append(removeButton);
  row.append(actionCell);

  return row;
}

function renderCardEditorRows(cards) {
  if (!cardEditorBody) return;
  cardEditorBody.innerHTML = "";
  const normalizedCards = cards.length > 0 ? cards : [{ category: "Erklären", term: "", taboo: [] }];
  normalizedCards.forEach((card) => {
    cardEditorBody.append(createEditorRow(card));
  });
}

function addEditorRow() {
  if (!cardEditorBody) return;
  cardEditorBody.append(createEditorRow({ category: "Erklären", term: "", taboo: [] }));
  updateEditorValidationState();
}

function removeEditorRow(rowId) {
  if (!cardEditorBody) return;
  const row = cardEditorBody.querySelector(`[data-row-id="${rowId}"]`);
  row?.remove();
  if (!cardEditorBody.querySelector("tr[data-row-id]")) {
    addEditorRow();
    return;
  }
  updateEditorValidationState();
}

function openCardEditor() {
  if (!cardEditorModal) return;
  renderCardEditorRows(cloneCards(state.cards));
  updateEditorValidationState();
  refreshEditorCustomDatasetSelect(cardEditorDatasetSelect?.value ?? "");
  cardEditorModal.classList.remove("hidden");
}

function closeCardEditor() {
  if (!cardEditorModal) return;
  cardEditorModal.classList.add("hidden");
  renderEditorValidationErrors([]);
}

function saveCardEditor() {
  const { cards, errors } = updateEditorValidationState();
  if (errors.length > 0) {
    csvStatus.textContent = "Editor enthält ungültige Zeilen.";
    return;
  }
  state.cards = cards;
  csvStatus.textContent = `Editor: ${cards.length} Karten.`;
  closeCardEditor();
}

function refreshEditorCustomDatasetSelect(selectedId = "") {
  if (!cardEditorDatasetSelect) return;
  populateCustomDatasetSelect(cardEditorDatasetSelect, {
    selectedId,
    placeholder: "Eigenen Kartensatz auswählen",
  });
}

function populateCustomDatasetSelect(selectElement, { selectedId = "", placeholder = "Kartensatz auswählen" } = {}) {
  if (!selectElement) return;
  selectElement.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = placeholder;
  selectElement.append(placeholderOption);

  Object.values(state.customDatasets)
    .sort((a, b) => a.label.localeCompare(b.label, "de"))
    .forEach((dataset) => {
      const option = document.createElement("option");
      option.value = dataset.id;
      option.textContent = dataset.label;
      selectElement.append(option);
    });

  selectElement.value = state.customDatasets[selectedId] ? selectedId : "";
}

function deriveDatasetLabelFromFilename(filename = "") {
  const trimmed = String(filename ?? "").trim();
  if (!trimmed) return "";
  return trimmed.replace(/\.[^/.]+$/, "").trim();
}

function updateCsvDatasetActionState() {
  const hasUploadedCards = state.uploadedCsvCards.length > 0;
  if (csvSaveNewButton) {
    csvSaveNewButton.disabled = !hasUploadedCards;
  }
  if (csvOverwriteButton) {
    const canOverwrite = hasUploadedCards && Boolean(csvOverwriteSelect?.value && state.customDatasets[csvOverwriteSelect.value]);
    csvOverwriteButton.disabled = !canOverwrite;
  }
}

function refreshCsvDatasetOverwriteSelect(selectedId = "") {
  populateCustomDatasetSelect(csvOverwriteSelect, {
    selectedId,
    placeholder: "Bestehenden eigenen Kartensatz auswählen",
  });
  updateCsvDatasetActionState();
}

async function saveCardsAsCustomDataset({ cards, label, existingId = "" }) {
  const normalizedLabel = String(label ?? "").trim();
  if (!normalizedLabel) {
    return { ok: false, message: "Bitte einen Namen für den Kartensatz eingeben." };
  }

  const normalizedCards = cloneCards(cards).map((card) => normalizeCardInput(card)).filter((card) => card.term);
  if (normalizedCards.length === 0) {
    return { ok: false, message: "Kartensatz ist leer oder ungültig." };
  }

  const now = new Date().toISOString();
  const existingDataset = existingId ? state.customDatasets[existingId] : null;
  const datasetId = existingDataset?.id ?? createCustomDatasetId();
  const wasOverwrite = Boolean(existingDataset);

  state.customDatasets[datasetId] = {
    id: datasetId,
    label: normalizedLabel,
    cards: normalizedCards,
    createdAt: existingDataset?.createdAt ?? now,
    updatedAt: now,
  };

  const persistenceResult = await persistCustomDatasets();
  state.selectedDatasets = [toCustomDatasetKey(datasetId)];
  refreshEditorCustomDatasetSelect(datasetId);
  refreshCsvDatasetOverwriteSelect(datasetId);
  refreshDatasetSelections();

  return {
    ok: true,
    datasetId,
    label: normalizedLabel,
    count: normalizedCards.length,
    wasOverwrite,
    persistenceResult,
  };
}

function createCustomDatasetId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }
  return `dataset-${Date.now()}-${Math.round(Math.random() * 100000)}`;
}

async function saveEditorAsNewDataset() {
  const { cards, errors } = updateEditorValidationState();
  if (errors.length > 0) {
    csvStatus.textContent = "Editor enthält ungültige Zeilen.";
    return;
  }

  const label = cardEditorDatasetLabelInput?.value?.trim();
  if (!label) {
    csvStatus.textContent = "Bitte einen Namen für den neuen Kartensatz eingeben.";
    return;
  }

  const result = await saveCardsAsCustomDataset({ cards, label });
  if (!result.ok) {
    csvStatus.textContent = result.message;
    return;
  }

  if (cardEditorDatasetLabelInput) {
    cardEditorDatasetLabelInput.value = result.label;
  }
  if (result.persistenceResult.mode === "remote") {
    csvStatus.textContent = `Kartensatz global gespeichert: ${result.label} (${result.count} Karten).`;
  } else {
    csvStatus.textContent = `Eigener Kartensatz lokal gespeichert: ${result.label} (${result.count} Karten).`;
  }
}

async function overwriteSelectedCustomDataset() {
  const { cards, errors } = updateEditorValidationState();
  if (errors.length > 0) {
    csvStatus.textContent = "Editor enthält ungültige Zeilen.";
    return;
  }

  const selectedId = cardEditorDatasetSelect?.value ?? "";
  const existingDataset = state.customDatasets[selectedId];
  if (!existingDataset) {
    csvStatus.textContent = "Bitte zuerst einen vorhandenen eigenen Kartensatz auswählen.";
    return;
  }

  const nextLabel = cardEditorDatasetLabelInput?.value?.trim() || existingDataset.label;
  const result = await saveCardsAsCustomDataset({ cards, label: nextLabel, existingId: selectedId });
  if (!result.ok) {
    csvStatus.textContent = result.message;
    return;
  }

  if (cardEditorDatasetLabelInput) {
    cardEditorDatasetLabelInput.value = nextLabel;
  }
  if (result.persistenceResult.mode === "remote") {
    csvStatus.textContent = `Kartensatz global überschrieben: ${nextLabel} (${result.count} Karten).`;
  } else {
    csvStatus.textContent = `Kartensatz lokal überschrieben: ${nextLabel} (${result.count} Karten).`;
  }
}

async function deleteSelectedCustomDataset() {
  const selectedId = cardEditorDatasetSelect?.value ?? "";
  const dataset = state.customDatasets[selectedId];
  if (!dataset) {
    csvStatus.textContent = "Bitte zuerst einen eigenen Kartensatz auswählen.";
    return;
  }

  const shouldDelete = window.confirm(`Kartensatz „${dataset.label}“ wirklich löschen?`);
  if (!shouldDelete) {
    return;
  }

  delete state.customDatasets[selectedId];
  const persistenceResult = await persistCustomDatasets();
  refreshEditorCustomDatasetSelect("");
  refreshCsvDatasetOverwriteSelect("");
  if (cardEditorDatasetLabelInput) {
    cardEditorDatasetLabelInput.value = "";
  }
  refreshDatasetSelections();
  csvStatus.textContent =
    persistenceResult.mode === "remote"
      ? `Kartensatz global gelöscht: ${dataset.label}.`
      : `Kartensatz lokal gelöscht: ${dataset.label}.`;
}

function escapeCsvValue(value) {
  const normalized = String(value ?? "").replace(/\r?\n/g, " ").trim();
  if (/[;"\n]/.test(normalized)) {
    return `"${normalized.replaceAll('"', '""')}"`;
  }
  return normalized;
}

function exportEditorCardsAsCsv() {
  const { cards, errors } = updateEditorValidationState();
  if (errors.length > 0) {
    csvStatus.textContent = "Export nicht möglich: Editor enthält ungültige Zeilen.";
    return;
  }

  const lines = cards.map((card) => {
    const taboos = Array.isArray(card.taboo) ? [...card.taboo] : [];
    const firstTabooOrAnswer = card.category === "Quizfrage" ? card.answer ?? "" : taboos[0] ?? "";
    const values = [card.category, card.term, firstTabooOrAnswer, taboos[1] ?? "", taboos[2] ?? "", taboos[3] ?? ""];
    return values.map(escapeCsvValue).join(";");
  });

  const csvContent = `\uFEFF${lines.join("\n")}`;
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  const filenameBase = cardEditorDatasetLabelInput?.value?.trim() || "wissivity-kartensatz";
  link.download = `${filenameBase.replace(/\s+/g, "-").toLowerCase()}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  csvStatus.textContent = `CSV exportiert: ${cards.length} Karten.`;
}

function createDatasetSelect(currentKey = "") {
  const select = document.createElement("select");
  select.className = "dataset-select";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = "Kartensatz wählen";
  select.append(placeholderOption);

  getAllDatasetEntries().forEach(({ key, label }) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = label;
    select.append(option);
  });

  if (getDatasetEntryByKey(currentKey)) {
    select.value = currentKey;
  } else {
    select.value = "";
  }

  return select;
}

function updateDatasetAddButtonVisibility() {
  if (!datasetAddButton || !datasetSelectList) return;
  const hasCapacity = datasetSelectList.querySelectorAll("select").length < MAX_DATASET_SELECTIONS;
  const allSelected = [...datasetSelectList.querySelectorAll("select")].every((select) => getDatasetEntryByKey(select.value));
  const canAdd = hasCapacity && allSelected;
  datasetAddButton.disabled = !canAdd;
  datasetAddButton.style.display = canAdd ? "inline-grid" : "none";
}

function readSelectedDatasetKeys() {
  if (!datasetSelectList) {
    return [DEFAULT_DATASET_KEY];
  }

  const keys = [...datasetSelectList.querySelectorAll("select")]
    .map((select) => select.value)
    .filter((key) => getDatasetEntryByKey(key));

  return keys;
}

function applySelectedDatasets() {
  const selectedKeys = readSelectedDatasetKeys();
  state.selectedDatasets = [...selectedKeys];

  const mergedCards = selectedKeys.flatMap((key) => {
    const datasetEntry = getDatasetEntryByKey(key);
    return datasetEntry ? cloneCards(datasetEntry.cards) : [];
  });

  state.cards = mergedCards;

  if (selectedKeys.length === 0) {
    csvStatus.textContent = "Bitte mindestens einen Kartensatz wählen.";
  } else {
    const labels = selectedKeys
      .map((key) => getDatasetEntryByKey(key)?.label)
      .filter(Boolean)
      .join(" + ");
    csvStatus.textContent = `${labels}: ${state.cards.length} Karten.`;
  }

  if (csvUpload) {
    csvUpload.value = "";
  }
}

function addDatasetSelect(initialKey = "") {
  if (!datasetSelectList) {
    return;
  }

  const currentCount = datasetSelectList.querySelectorAll("select").length;
  if (currentCount >= MAX_DATASET_SELECTIONS) {
    return;
  }

  const select = createDatasetSelect(initialKey);
  select.addEventListener("change", () => {
    applySelectedDatasets();
    updateDatasetAddButtonVisibility();
  });
  datasetSelectList.append(select);
  applySelectedDatasets();
  updateDatasetAddButtonVisibility();
}

function setupDatasetSelects() {
  if (!datasetSelectList) return;
  datasetSelectList.innerHTML = "";

  if (state.selectedDatasets.length === 0) {
    addDatasetSelect("");
    return;
  }

  state.selectedDatasets.forEach((key) => {
    addDatasetSelect(key);
  });

  updateDatasetAddButtonVisibility();
}

function handleCsvUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const labelFromFilename = deriveDatasetLabelFromFilename(file.name);
  if (csvDatasetNameInput && labelFromFilename) {
    csvDatasetNameInput.value = labelFromFilename;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const parsedRows = parseCsv(reader.result);
    const { cards, errors } = validateEditorCards(parsedRows);

    if (cards.length > 0 && errors.length === 0) {
      state.cards = cards;
      state.uploadedCsvCards = cards;
      updateCsvDatasetActionState();
      csvStatus.textContent = `CSV geladen: ${cards.length} Karten.`;
      return;
    }

    if (errors.length > 0) {
      state.uploadedCsvCards = [];
      updateCsvDatasetActionState();
      const firstError = errors[0];
      csvStatus.textContent = `CSV ungültig (Zeile ${firstError.row}: ${firstError.messages.join(", ")}).`;
      return;
    }

    state.uploadedCsvCards = [];
    updateCsvDatasetActionState();
    csvStatus.textContent = "CSV leer oder ungültig.";
  };
  reader.readAsText(file, "utf-8");
}

async function saveUploadedCsvAsNewDataset() {
  const label = csvDatasetNameInput?.value?.trim() || "";
  const result = await saveCardsAsCustomDataset({ cards: state.uploadedCsvCards, label });
  if (!result.ok) {
    csvStatus.textContent = result.message;
    return;
  }
  refreshCsvDatasetOverwriteSelect(result.datasetId);
  csvStatus.textContent =
    result.persistenceResult.mode === "remote"
      ? `CSV global gespeichert: ${result.label} (${result.count} Karten).`
      : `CSV lokal gespeichert: ${result.label} (${result.count} Karten).`;
}

async function overwriteDatasetWithUploadedCsv() {
  const selectedId = csvOverwriteSelect?.value ?? "";
  const existingDataset = state.customDatasets[selectedId];
  if (!existingDataset) {
    csvStatus.textContent = "Bitte zuerst einen vorhandenen eigenen Kartensatz auswählen.";
    return;
  }

  const label = csvDatasetNameInput?.value?.trim() || existingDataset.label;
  const result = await saveCardsAsCustomDataset({ cards: state.uploadedCsvCards, label, existingId: selectedId });
  if (!result.ok) {
    csvStatus.textContent = result.message;
    return;
  }

  if (csvDatasetNameInput) {
    csvDatasetNameInput.value = result.label;
  }
  refreshCsvDatasetOverwriteSelect(result.datasetId);
  csvStatus.textContent =
    result.persistenceResult.mode === "remote"
      ? `Datensatz global überschrieben: ${result.label} (${result.count} Karten).`
      : `Datensatz lokal überschrieben: ${result.label} (${result.count} Karten).`;
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
  showMenuPanel();
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
  const width = Math.min(680, Math.max(360, Math.round(window.innerWidth * 0.45)));
  const height = Math.min(560, Math.max(420, Math.round(window.innerHeight * 0.5)));
  const x = Math.round(window.innerWidth / 2 - width / 2);
  const y = Math.round(window.innerHeight / 2 - height / 2);
  turnOverlayPanel.style.setProperty("--panel-category-width", `${width}px`);
  turnOverlayPanel.style.setProperty("--panel-category-height", `${height}px`);
  turnOverlayPanel.style.setProperty("--panel-category-x", `${x}px`);
  turnOverlayPanel.style.setProperty("--panel-category-y", `${y}px`);
}

function showTurnOverlay() {
  state.phase = "ready";
  document.body.classList.remove("card-view-active");
  setOverlayStartFromCell();
  setOverlayCategorySize();
  turnCategory.classList.remove("hidden");
  turnCountdownCard.classList.add("hidden");
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
  document.body.classList.remove("card-view-active");
  turnOverlay.classList.remove("expanded");
  turnOverlay.classList.remove("category");
  turnOverlay.classList.remove("active");
  requestAnimationFrame(() => {
    renderBoardPath();
    positionTokens();
  });
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
  turnCategory.classList.add("hidden");
  turnCountdownCard.classList.remove("hidden");
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
  document.body.classList.add("card-view-active");
  turnCategory.classList.add("hidden");
  turnCountdownCard.classList.add("hidden");
  turnWord.classList.remove("hidden");
  turnOverlay.classList.remove("category");
  turnOverlay.classList.add("expanded");
  state.phase = "word";
  const card = getCardByCategory(state.pendingCategory);
  state.currentCard = card;
  state.timeLimit = state.categoryTimes[state.pendingCategory] ?? 60;
  if (state.pendingCategory === "Quizfrage") {
    state.quizPhase = "question";
    setQuizQuestionCard(card);
    setTurnButtons({ showCorrect: false, showWrong: false, showSwap: true, showContinue: true });
    startTimer({
      onTimeout: () => finishTurn(false, true, { returnToPrevious: true }),
    });
  } else {
    state.quizPhase = null;
    setWordCard(card);
    setTurnButtons({ showCorrect: true, showWrong: true, showSwap: true, showContinue: false });
    startTimer();
  }
}

function applySwapPenalty() {
  const penalty = state.swapPenalty;
  if (!Number.isFinite(penalty) || penalty <= 0) return;
  state.remainingTime = Math.max(0, state.remainingTime - penalty);
  updateTimerDisplay(state.remainingTime);
  showPenaltyToast(penalty);
  if (state.remainingTime <= 0) {
    finishTurn(false, true, { returnToPrevious: true });
  }
}

function handleSwapCard() {
  if (state.phase !== "word") return;
  if (state.quizPhase === "answer") return;
  const card = getCardByCategory(state.pendingCategory);
  state.currentCard = card;
  if (state.pendingCategory === "Quizfrage") {
    setQuizQuestionCard(card);
  } else {
    setWordCard(card);
  }
  applySwapPenalty();
}

function showWinner(teamName) {
  state.gameOver = true;
  state.phase = "winner";
  state.pendingRoll = null;
  state.pendingCategory = null;
  winnerLabel.textContent = `${teamName} gewinnt`;
  if (winnerRestartButton) {
    winnerRestartButton.textContent = "Neues Spiel";
  }
  winnerScreen.classList.remove("hidden");
}

function handleWinnerRestart() {
  winnerScreen.classList.add("hidden");
  handleMainMenu();
}

async function setup() {
  state.customDatasets = await loadCustomDatasets();
  menuCategoryControls.forEach((control) => populateTimeSelect(control.timeSelect, 60));
  gameCategoryControls.forEach((control) => populateTimeSelect(control.timeSelect, 60));
  syncTeamCountControls(teamCountInput.value);
  const selectedBoardSize = getSelectedBoardSize(boardSizeSelect ?? boardSizeInputs);
  syncBoardSizeControls(selectedBoardSize);
  applyBoardSize(selectedBoardSize);
  renderBoardPath();
  positionTokens();
  updateTimerDisplay(state.timeLimit);
  updateFullscreenState();
  syncSettingsPanel();
  setupDatasetSelects();
  refreshCsvDatasetOverwriteSelect("");
  applySelectedDatasets();
  updateCsvDatasetActionState();
  if (csvStatus) {
    csvStatus.textContent =
      state.datasetStorageMode === "remote"
        ? "Globale Kartensatzspeicherung aktiv."
        : "Server nicht erreichbar – Kartensätze werden lokal gespeichert.";
  }
}

window.addEventListener("resize", () => {
  renderBoardPath();
  positionTokens();
});
teamListContainer.addEventListener("click", handleTeamListClick);
document.addEventListener("click", (event) => {
  if (!teamListContainer.contains(event.target)) {
    closeAllTeamPickers();
  }
});
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

showMenuPanel();

startButton.addEventListener("click", handleStartGame);
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (qrModal && !qrModal.classList.contains("hidden")) {
    closeQrModal();
    return;
  }
  if (cardEditorModal && !cardEditorModal.classList.contains("hidden")) {
    closeCardEditor();
  }
});
rollButton.addEventListener("click", handleRoll);
undoButton.addEventListener("click", handleUndo);
csvUpload.addEventListener("change", handleCsvUpload);
csvSaveNewButton?.addEventListener("click", saveUploadedCsvAsNewDataset);
csvOverwriteButton?.addEventListener("click", overwriteDatasetWithUploadedCsv);
csvOverwriteSelect?.addEventListener("change", updateCsvDatasetActionState);
openCardEditorButton?.addEventListener("click", openCardEditor);
closeCardEditorButton?.addEventListener("click", closeCardEditor);
cardEditorAddRowButton?.addEventListener("click", addEditorRow);
cardEditorSaveButton?.addEventListener("click", saveCardEditor);
cardEditorExportButton?.addEventListener("click", exportEditorCardsAsCsv);
cardEditorSaveNewButton?.addEventListener("click", saveEditorAsNewDataset);
cardEditorOverwriteButton?.addEventListener("click", overwriteSelectedCustomDataset);
cardEditorDeleteButton?.addEventListener("click", deleteSelectedCustomDataset);
cardEditorDatasetSelect?.addEventListener("change", () => {
  const selectedId = cardEditorDatasetSelect.value;
  const dataset = state.customDatasets[selectedId];
  if (cardEditorDatasetLabelInput) {
    cardEditorDatasetLabelInput.value = dataset?.label ?? "";
  }
});
cardEditorBody?.addEventListener("input", updateEditorValidationState);
cardEditorBody?.addEventListener("change", updateEditorValidationState);
cardEditorModal?.addEventListener("click", (event) => {
  if (event.target === cardEditorModal) {
    closeCardEditor();
  }
});
closeQrModalButton?.addEventListener("click", closeQrModal);
qrModal?.addEventListener("click", (event) => {
  if (event.target === qrModal) {
    closeQrModal();
  }
});
datasetAddButton?.addEventListener("click", () => {
  addDatasetSelect("");
});
openSettingsButton.addEventListener("click", handleOpenSettings);
closeSettingsButton.addEventListener("click", handleCloseSettings);
applySettingsButton.addEventListener("click", applySettingsFromPanel);
mainMenuButton.addEventListener("click", handleMainMenu);
turnContinueButton.addEventListener("click", () => {
  if (state.phase !== "word") return;
  if (state.pendingCategory === "Quizfrage" && state.quizPhase === "question") {
    stopTimer();
    state.quizPhase = "answer";
    setQuizAnswerCard(state.currentCard);
    setTurnButtons({ showCorrect: true, showWrong: true, showSwap: false, showContinue: false });
    return;
  }
  finishTurn(false);
});
turnCorrectButton?.addEventListener("click", () => {
  if (state.phase !== "word") return;
  if (state.pendingCategory === "Quizfrage" && state.quizPhase !== "answer") return;
  finishTurn(true);
});
turnWrongButton?.addEventListener("click", () => {
  if (state.phase !== "word") return;
  if (state.pendingCategory === "Quizfrage" && state.quizPhase !== "answer") return;
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
    localStorage.removeItem(THEME_STORAGE_KEY);
  } else {
    localStorage.setItem(THEME_STORAGE_KEY, "dark");
  }
  applyTheme(isLight ? "light" : "dark");
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
  renderBoardPath();
  positionTokens();
});

const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
applyTheme(storedTheme === "dark" ? "dark" : "light");
setup();
