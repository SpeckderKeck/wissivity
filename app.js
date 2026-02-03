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
const csvStatus = document.getElementById("csv-status");
const csvInfo = document.getElementById("csv-info");
const csvTooltip = document.getElementById("csv-tooltip");
const datasetSelect = document.getElementById("dataset-select");
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

const CATEGORY_CONFIG = {
  Erklären: { id: "explain", iconPath: "assets/icons/explain.svg", fallbackIcon: "💬" },
  Zeichnen: { id: "draw", iconPath: "assets/icons/draw.svg", fallbackIcon: "✏️" },
  Pantomime: { id: "pantomime", iconPath: "assets/icons/pantomime.svg", fallbackIcon: "🎭" },
  Quizfrage: { id: "quiz", iconPath: "assets/icons/quiz.svg", fallbackIcon: "❓" },
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

const PRESET_DATASETS = {
  allgemein: {
    label: "Allgemeinwissen",
    cards: [
      { category: "Erklären", term: "Photosynthese", taboo: ["Pflanzen", "Licht", "Sauerstoff"] },
      { category: "Erklären", term: "Gravitation", taboo: ["Anziehung", "Masse", "Erde"] },
      { category: "Erklären", term: "Demokratie", taboo: ["Wahlen", "Volk", "Parlament"] },
      { category: "Erklären", term: "Inflation", taboo: ["Preise", "Geld", "Wirtschaft"] },
      { category: "Erklären", term: "Evolution", taboo: ["Arten", "Darwin", "Anpassung"] },
      { category: "Erklären", term: "DNA", taboo: ["Gene", "Erbgut", "Doppelhelix"] },
      { category: "Erklären", term: "Klimawandel", taboo: ["CO2", "Temperatur", "Umwelt"] },
      { category: "Erklären", term: "Globalisierung", taboo: ["Handel", "Welt", "Vernetzung"] },
      { category: "Erklären", term: "Algorithmus", taboo: ["Schritte", "Programm", "Computer"] },
      { category: "Erklären", term: "Energieerhaltung", taboo: ["Physik", "Energie", "Gesetz"] },
      { category: "Erklären", term: "Mikroskop", taboo: ["Vergrößerung", "Linse", "Zellen"] },
      { category: "Erklären", term: "Vulkanausbruch", taboo: ["Lava", "Berg", "Eruption"] },
      { category: "Erklären", term: "Recycling", taboo: ["Müll", "Wiederverwertung", "Abfall"] },
      { category: "Erklären", term: "Impfstoff", taboo: ["Krankheit", "Schutz", "Spritze"] },
      { category: "Erklären", term: "Zeitzone", taboo: ["Uhrzeit", "Region", "Zeitverschiebung"] },
      { category: "Erklären", term: "Ozonloch", taboo: ["Atmosphäre", "UV", "Schutz"] },
      { category: "Erklären", term: "Barometer", taboo: ["Luftdruck", "Wetter", "Gerät"] },
      { category: "Erklären", term: "Archäologie", taboo: ["Ausgrabung", "Geschichte", "Artefakte"] },
      { category: "Erklären", term: "Renaissance", taboo: ["Kunst", "Wiedergeburt", "Europa"] },
      { category: "Erklären", term: "Magnetismus", taboo: ["Anziehung", "Nordpol", "Metall"] },
      { category: "Erklären", term: "Internet", taboo: ["Netzwerk", "Computer", "online"] },
      { category: "Erklären", term: "Teleskop", taboo: ["Sterne", "Fernrohr", "Astronomie"] },
      { category: "Erklären", term: "Bakterien", taboo: ["Mikroben", "Krankheit", "Zellen"] },
      { category: "Erklären", term: "Statistik", taboo: ["Daten", "Auswertung", "Durchschnitt"] },
      { category: "Erklären", term: "Philosophie", taboo: ["Denken", "Fragen", "Weisheit"] },
      { category: "Erklären", term: "Atom", taboo: ["Kern", "Elektronen", "Physik"] },
      { category: "Erklären", term: "Antibiotikum", taboo: ["Bakterien", "Medizin", "Resistenz"] },
      { category: "Erklären", term: "Gletscherschmelze", taboo: ["Eis", "Erwärmung", "Meeresspiegel"] },
      { category: "Erklären", term: "Nachhaltigkeit", taboo: ["Ressourcen", "Umwelt", "Zukunft"] },
      { category: "Erklären", term: "Stromkreis", taboo: ["Elektrizität", "Leitung", "Schalter"] },
      { category: "Erklären", term: "Wahrscheinlichkeit", taboo: ["Chance", "Würfel", "Mathematik"] },
      { category: "Erklären", term: "Relativitätstheorie", taboo: ["Einstein", "Zeit", "Raum"] },
      { category: "Erklären", term: "Solarenergie", taboo: ["Sonne", "Strom", "Panel"] },
      { category: "Erklären", term: "Windkraft", taboo: ["Rotor", "Strom", "Wind"] },
      { category: "Erklären", term: "Meeresspiegel", taboo: ["Ozean", "Anstieg", "Küste"] },
      { category: "Erklären", term: "Hormone", taboo: ["Körper", "Drüsen", "Botenstoff"] },
      { category: "Erklären", term: "Blutkreislauf", taboo: ["Herz", "Arterien", "Blut"] },
      { category: "Erklären", term: "Nährstoffe", taboo: ["Vitamine", "Mineralien", "Ernährung"] },
      { category: "Erklären", term: "Literatur", taboo: ["Buch", "Autor", "Lesen"] },
      { category: "Erklären", term: "Orchester", taboo: ["Musik", "Instrumente", "Dirigent"] },
      { category: "Erklären", term: "Mondphasen", taboo: ["Neumond", "Vollmond", "Erde"] },
      { category: "Erklären", term: "Optische Täuschung", taboo: ["Sehen", "Bild", "Gehirn"] },
      { category: "Erklären", term: "Stadtplan", taboo: ["Karte", "Stadt", "Navigation"] },
      { category: "Erklären", term: "Wirtschaftskreislauf", taboo: ["Haushalte", "Unternehmen", "Geld"] },
      { category: "Erklären", term: "Röntgenstrahlen", taboo: ["Medizin", "Durchleuchtung", "Strahlung"] },
      { category: "Erklären", term: "Schallwellen", taboo: ["Ton", "Luft", "Frequenz"] },
      { category: "Erklären", term: "Wasseraufbereitung", taboo: ["Filter", "Trinkwasser", "Reinigung"] },
      { category: "Erklären", term: "Datenschutz", taboo: ["Privatsphäre", "Information", "Rechte"] },
      { category: "Erklären", term: "Medienkompetenz", taboo: ["Internet", "Quellen", "Prüfen"] },
      { category: "Erklären", term: "Sprachfamilie", taboo: ["Sprache", "Verwandt", "Indogermanisch"] },
      ...[
        "Baum",
        "Haus",
        "Katze",
        "Hund",
        "Fahrrad",
        "Uhr",
        "Buch",
        "Apfel",
        "Sonne",
        "Mond",
        "Berg",
        "Fluss",
        "Brücke",
        "Stuhl",
        "Tisch",
        "Blume",
        "Auto",
        "Zug",
        "Flugzeug",
        "Schiff",
        "Schlüssel",
        "Brille",
        "Regenschirm",
        "Fußball",
        "Gitarre",
        "Kamera",
        "Telefon",
        "Computer",
        "Tasse",
        "Löffel",
        "Schere",
        "Rucksack",
        "Ballon",
        "Fisch",
        "Vogel",
        "Elefant",
        "Schmetterling",
        "Pinguin",
        "Schloss",
        "Wolke",
        "Stern",
        "Schneemann",
        "Kerze",
        "Lampe",
        "Nase",
        "Herz",
        "Hand",
        "Schuh",
        "Zelt",
        "Leuchtturm",
      ].map((term) => ({ category: "Zeichnen", term, taboo: [] })),
      ...[
        "Zähne putzen",
        "Kaffee trinken",
        "Telefonieren",
        "Tanzen",
        "Schlafen",
        "Lesen",
        "Schwimmen",
        "Joggen",
        "Malen",
        "Singen",
        "Klatschen",
        "Lachen",
        "Weinen",
        "Kochen",
        "Backen",
        "Staubsaugen",
        "Fenster putzen",
        "Schuhe binden",
        "Pflanzen gießen",
        "Gähnen",
        "Niesen",
        "Husten",
        "Fahrrad fahren",
        "Auto fahren",
        "Treppen steigen",
        "Koffer packen",
        "Foto machen",
        "Haare kämmen",
        "Schminken",
        "Rasieren",
        "Winken",
        "Applaudieren",
        "Schneefegen",
        "Garten jäten",
        "Ball werfen",
        "Ball fangen",
        "Computer tippen",
        "Brief schreiben",
        "Brief einwerfen",
        "Einkaufen",
        "Zelt aufbauen",
        "Feuer machen",
        "Geschenk auspacken",
        "Pfeifen",
        "Angeln",
        "Spazieren gehen",
        "Yoga machen",
        "Meditieren",
        "Kuchen schneiden",
        "Hände waschen",
      ].map((term) => ({ category: "Pantomime", term, taboo: [] })),
      ...[
        { question: "Wie heißt die Hauptstadt von Deutschland?", answer: "Berlin" },
        { question: "Welcher Ozean ist der größte?", answer: "Pazifik" },
        { question: "Wie viele Beine hat eine Spinne?", answer: "8" },
        { question: "Wer schrieb „Faust“?", answer: "Johann Wolfgang von Goethe" },
        { question: "Welches Gas entsteht bei der Photosynthese?", answer: "Sauerstoff" },
        { question: "Wie viele Tage hat ein Schaltjahr?", answer: "366" },
        { question: "Welche Farbe ergibt Blau und Gelb gemischt?", answer: "Grün" },
        { question: "Wie heißt der höchste Berg der Erde?", answer: "Mount Everest" },
        { question: "Wie nennt man ein Viereck mit gleich langen Seiten?", answer: "Quadrat" },
        { question: "Welches Säugetier legt Eier?", answer: "Schnabeltier" },
        { question: "Wer malte die Mona Lisa?", answer: "Leonardo da Vinci" },
        { question: "Wie heißt die Hauptstadt von Spanien?", answer: "Madrid" },
        { question: "Welche Einheit hat die elektrische Spannung?", answer: "Volt" },
        { question: "Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?", answer: "11" },
        { question: "Welcher Planet heißt der Rote Planet?", answer: "Mars" },
        { question: "Wie heißt der längste Fluss der Welt?", answer: "Nil" },
        { question: "Wie viele Kontinente gibt es?", answer: "7" },
        { question: "Welche Sprache spricht man in Brasilien?", answer: "Portugiesisch" },
        { question: "Was ist das chemische Symbol für Wasser?", answer: "H2O" },
        { question: "Wie viele Stunden hat ein Tag?", answer: "24" },
        { question: "Wie heißt das größte Säugetier?", answer: "Blauwal" },
        { question: "Welche Jahreszeit kommt nach dem Herbst?", answer: "Winter" },
        { question: "Welches Instrument hat 88 Tasten?", answer: "Klavier" },
        { question: "Wie nennt man die Wissenschaft vom Wetter?", answer: "Meteorologie" },
        { question: "In welchem Land steht das Kolosseum?", answer: "Italien" },
        { question: "Wie heißt die Hauptstadt von Japan?", answer: "Tokio" },
        { question: "Welches Metall ist bei Raumtemperatur flüssig?", answer: "Quecksilber" },
        { question: "Welches Symbol steht für Gold?", answer: "Au" },
        { question: "Wie viele Zähne hat ein Erwachsener meist?", answer: "32" },
        { question: "Welches Organ pumpt das Blut?", answer: "Herz" },
        { question: "Welche Farbe hat Chlorophyll?", answer: "Grün" },
        { question: "Welcher Planet ist der größte im Sonnensystem?", answer: "Jupiter" },
        { question: "Welche Währung hat die Schweiz?", answer: "Schweizer Franken" },
        { question: "Wer erfand das Telefon?", answer: "Alexander Graham Bell" },
        { question: "Wie heißt die Hauptstadt von Kanada?", answer: "Ottawa" },
        { question: "Wie heißt die Hauptstadt von Ägypten?", answer: "Kairo" },
        { question: "Wie heißt die kleinste Primzahl?", answer: "2" },
        { question: "Wie viele Minuten hat eine Stunde?", answer: "60" },
        { question: "Welcher Kontinent ist der kleinste?", answer: "Australien" },
        { question: "Wie nennt man gefrorenes Wasser?", answer: "Eis" },
        { question: "Was ist die chemische Formel von Kochsalz?", answer: "NaCl" },
        { question: "Wie viele Farben hat ein Regenbogen?", answer: "7" },
        { question: "Welches Tier ist das Wappentier der USA?", answer: "Weißkopfseeadler" },
        { question: "Wie heißt die Hauptstadt von Schweden?", answer: "Stockholm" },
        { question: "Wie heißt die Hauptstadt von Österreich?", answer: "Wien" },
        { question: "Wie viele Seiten hat ein Würfel?", answer: "6" },
        { question: "Welches Gas atmen wir ein?", answer: "Sauerstoff" },
        { question: "Wer erfand die Glühbirne (bekannt)?", answer: "Thomas Edison" },
        { question: "Wie nennt man die Entfernung zwischen zwei Punkten?", answer: "Strecke" },
        { question: "Wie heißt das schnellste Landtier?", answer: "Gepard" },
      ].map(({ question, answer }) => ({
        category: "Quizfrage",
        term: question,
        answer,
        taboo: [],
      })),
    ],
  },
  kfz: {
    label: "KFZ",
    cards: [
      { category: "Erklären", term: "Anlasser", taboo: ["Starten", "Motor", "Elektro"] },
      { category: "Erklären", term: "Lichtmaschine", taboo: ["Strom", "Batterie", "Laden"] },
      { category: "Erklären", term: "Zylinderkopf", taboo: ["Motor", "Ventile", "Brennraum"] },
      { category: "Erklären", term: "Katalysator", taboo: ["Abgase", "Reinigung", "Umwelt"] },
      { category: "Erklären", term: "Einspritzdüse", taboo: ["Kraftstoff", "Spritzen", "Motor"] },
      { category: "Erklären", term: "Turbolader", taboo: ["Luftdruck", "Leistung", "Abgas"] },
      { category: "Erklären", term: "Kühler", taboo: ["Temperatur", "Wasser", "Kühlmittel"] },
      { category: "Erklären", term: "Ölfilter", taboo: ["Schmierung", "Motor", "Öl"] },
      { category: "Erklären", term: "Servolenkung", taboo: ["Lenken", "Hydraulik", "Unterstützung"] },
      { category: "Erklären", term: "ABS", taboo: ["Bremsen", "Blockieren", "Sicherheit"] },
      { category: "Erklären", term: "ESP", taboo: ["Stabilität", "Schleudern", "Elektronik"] },
      { category: "Erklären", term: "Kupplung", taboo: ["Pedal", "Trennen", "Getriebe"] },
      { category: "Erklären", term: "Schaltgetriebe", taboo: ["Gänge", "Schalten", "Übersetzung"] },
      { category: "Erklären", term: "Differential", taboo: ["Achse", "Kurven", "Antrieb"] },
      { category: "Erklären", term: "Bremssattel", taboo: ["Bremsbelag", "Scheibe", "Hydraulik"] },
      { category: "Erklären", term: "Stoßdämpfer", taboo: ["Fahrwerk", "Federung", "Dämpfen"] },
      { category: "Erklären", term: "Zündspule", taboo: ["Zündkerze", "Spannung", "Funk"] },
      { category: "Erklären", term: "Luftfilter", taboo: ["Ansaugen", "Schmutz", "Motor"] },
      { category: "Erklären", term: "Kraftstoffpumpe", taboo: ["Benzin", "Druck", "Tank"] },
      { category: "Erklären", term: "Nockenwelle", taboo: ["Ventile", "Motor", "Steuerung"] },
      { category: "Erklären", term: "Kurbelwelle", taboo: ["Kolben", "Drehung", "Motor"] },
      { category: "Erklären", term: "Drosselklappe", taboo: ["Luft", "Gas", "Ansaugung"] },
      { category: "Erklären", term: "Partikelfilter", taboo: ["Diesel", "Ruß", "Abgase"] },
      { category: "Erklären", term: "Keilrippenriemen", taboo: ["Antrieb", "Aggregate", "Riemen"] },
      { category: "Erklären", term: "Querlenker", taboo: ["Fahrwerk", "Radaufhängung", "Achse"] },
      { category: "Erklären", term: "Radlager", taboo: ["Rad", "Reibung", "Drehung"] },
      { category: "Erklären", term: "Zündkerze", taboo: ["Funke", "Verbrennung", "Zylinder"] },
      { category: "Erklären", term: "Zahnriemen", taboo: ["Steuerung", "Motor", "Wechsel"] },
      { category: "Erklären", term: "Auspuffkrümmer", taboo: ["Abgas", "Motor", "Rohr"] },
      { category: "Erklären", term: "Lambdasonde", taboo: ["Abgas", "Sauerstoff", "Sensor"] },
      { category: "Erklären", term: "Kühlerlüfter", taboo: ["Temperatur", "Motor", "Luft"] },
      { category: "Erklären", term: "Motoröl", taboo: ["Schmierung", "Wechsel", "Öl"] },
      { category: "Erklären", term: "Lenkgetriebe", taboo: ["Lenkung", "Zahnstange", "Steuerung"] },
      { category: "Erklären", term: "Achsmanschette", taboo: ["Gelenk", "Fett", "Antriebswelle"] },
      { category: "Erklären", term: "Bremsflüssigkeit", taboo: ["Hydraulik", "Wechsel", "Pedal"] },
      { category: "Erklären", term: "Handbremse", taboo: ["Parken", "Hebel", "Seilzug"] },
      { category: "Erklären", term: "Reifendruck", taboo: ["Luft", "Bar", "Kontrolle"] },
      { category: "Erklären", term: "Felge", taboo: ["Rad", "Metall", "Reifen"] },
      { category: "Erklären", term: "Airbag", taboo: ["Sicherheit", "Aufprall", "Innenraum"] },
      { category: "Erklären", term: "Bordcomputer", taboo: ["Anzeige", "Verbrauch", "Elektronik"] },
      { category: "Erklären", term: "Tempomat", taboo: ["Geschwindigkeit", "Automatik", "Reisen"] },
      { category: "Erklären", term: "Start-Stopp-System", taboo: ["Ampel", "Motor", "Automatik"] },
      { category: "Erklären", term: "AdBlue", taboo: ["Diesel", "Abgas", "Zusatz"] },
      { category: "Erklären", term: "Steuerkette", taboo: ["Motor", "Steuerung", "Kette"] },
      { category: "Erklären", term: "Zündschloss", taboo: ["Schlüssel", "Starten", "Lenkrad"] },
      { category: "Erklären", term: "Radnabe", taboo: ["Rad", "Lager", "Achse"] },
      { category: "Erklären", term: "Spurvermessung", taboo: ["Sturz", "Toe", "Reifen"] },
      { category: "Erklären", term: "Thermostat", taboo: ["Temperatur", "Regelung", "Kühlmittel"] },
      { category: "Erklären", term: "Klimakompressor", taboo: ["Klimaanlage", "Kälte", "Antrieb"] },
      { category: "Erklären", term: "Tankdeckel", taboo: ["Tanken", "Schließen", "Kraftstoff"] },
      ...[
        "Auto",
        "Reifen",
        "Lenkrad",
        "Motor",
        "Auspuff",
        "Autobahn",
        "Verkehrszeichen",
        "Werkstatt",
        "Wagenheber",
        "Radschlüssel",
        "Bremsscheibe",
        "Kupplung",
        "Getriebe",
        "Autositz",
        "Sicherheitsgurt",
        "Seitenspiegel",
        "Scheibenwischer",
        "Scheinwerfer",
        "Rücklicht",
        "Motorhaube",
        "Kofferraum",
        "Tankstelle",
        "Ölkanne",
        "Tacho",
        "Autobatterie",
        "Anhänger",
        "Fahrradträger",
        "Felge",
        "Zündkerze",
        "Luftfilter",
        "Stoßdämpfer",
        "Feder",
        "Schalthebel",
        "Pedale",
        "Kennzeichen",
        "Hupe",
        "Autoradio",
        "Navigationsgerät",
        "Lüftungsgitter",
        "Klimaanlage",
        "Handbremse",
        "Dachgepäckträger",
        "Winterreifen",
        "Schraubenschlüssel",
        "Werkbank",
        "Blinklicht",
        "Heckscheibe",
        "Türgriff",
        "Kraftstoffpistole",
        "Motorölkanister",
      ].map((term) => ({ category: "Zeichnen", term, taboo: [] })),
      ...[
        "Auto starten",
        "Gang einlegen",
        "Kupplung treten",
        "Bremsen",
        "Beschleunigen",
        "Einparken",
        "Rückwärts fahren",
        "Blinken",
        "Lenken",
        "Tanken",
        "Tankdeckel öffnen",
        "Reifen wechseln",
        "Wagenheber ansetzen",
        "Radmuttern lösen",
        "Reifen aufpumpen",
        "Reifendruck prüfen",
        "Ölstand prüfen",
        "Motorhaube öffnen",
        "Scheibenwischer einschalten",
        "Scheibenwischer wechseln",
        "Scheibenwasser nachfüllen",
        "Auto waschen",
        "Fahrzeug polieren",
        "Scheiben enteisen",
        "Fenster herunterkurbeln",
        "Sicherheitsgurt anlegen",
        "Kindersitz befestigen",
        "Warnblinker einschalten",
        "Pannendreieck aufstellen",
        "Warnweste anziehen",
        "Starthilfe geben",
        "Auto schieben",
        "Abschleppen",
        "Anhänger ankuppeln",
        "Navi einstellen",
        "Radio bedienen",
        "Lautstärke drehen",
        "Sitz einstellen",
        "Spiegel einstellen",
        "Motor abwürgen",
        "Motor im Leerlauf lassen",
        "Kupplung kommen lassen",
        "Handbremse ziehen",
        "Handbremse lösen",
        "Reifenprofil messen",
        "Scheinwerfer einstellen",
        "Kofferraum beladen",
        "Tür zuschlagen",
        "Aussteigen",
        "Frostschutz nachfüllen",
      ].map((term) => ({ category: "Pantomime", term, taboo: [] })),
      ...[
        { question: "Wofür steht ABS?", answer: "Antiblockiersystem" },
        { question: "Wofür steht ESP?", answer: "Elektronisches Stabilitätsprogramm" },
        { question: "Welche Farbe hat die Kontrollleuchte für Fernlicht?", answer: "Blau" },
        { question: "Wie groß ist die gesetzliche Mindestprofiltiefe?", answer: "1,6 mm" },
        { question: "Wie heißt die regelmäßige Fahrzeugprüfung in Deutschland?", answer: "Hauptuntersuchung" },
        { question: "Wofür steht RDKS?", answer: "Reifendruckkontrollsystem" },
        { question: "Wie heißt der Kraftstoff für Dieselmotoren?", answer: "Diesel" },
        { question: "Welche Aufgabe hat der Katalysator?", answer: "Abgase reinigen" },
        { question: "Wie nennt man den Stromspeicher im Auto?", answer: "Batterie" },
        { question: "Was misst der Tacho?", answer: "Geschwindigkeit" },
        { question: "Wofür ist der Airbag da?", answer: "Insassenschutz" },
        { question: "Welche Pedale hat ein Schaltwagen?", answer: "Kupplung, Bremse, Gas" },
        { question: "Wie nennt man das Licht bei Nebel?", answer: "Nebelscheinwerfer" },
        { question: "Wie heißt die Flüssigkeit für die Scheibenwaschanlage?", answer: "Wischwasser" },
        { question: "Was zeigt die Temperaturanzeige an?", answer: "Motortemperatur" },
        { question: "Wie nennt man den Laderaum hinten?", answer: "Kofferraum" },
        { question: "Was macht die Lichtmaschine?", answer: "Strom erzeugen" },
        { question: "Wie heißt die Anzeige für die Drehzahl?", answer: "Drehzahlmesser" },
        { question: "Wie nennt man die Frontscheibe?", answer: "Windschutzscheibe" },
        { question: "Wofür steht TÜV?", answer: "Technischer Überwachungsverein" },
        { question: "Wie nennt man die Welle zu den Rädern?", answer: "Antriebswelle" },
        { question: "Welche Aufgabe hat der Zahnriemen?", answer: "Ventilsteuerung" },
        { question: "Welches Bauteil zündet das Gemisch?", answer: "Zündkerze" },
        { question: "Wie nennt man den Hebel für Richtungsanzeiger?", answer: "Blinkerhebel" },
        { question: "Wie heißt die Scheibe hinten?", answer: "Heckscheibe" },
        { question: "Wie nennt man die Prüfung der Abgase?", answer: "Abgasuntersuchung" },
        { question: "Welche Flüssigkeit hat die Servolenkung?", answer: "Hydrauliköl" },
        { question: "Was bedeutet km/h?", answer: "Kilometer pro Stunde" },
        { question: "Wie heißt der Behälter für Kraftstoff?", answer: "Tank" },
        { question: "Welches Licht nutzt man bei Rückwärtsfahrt?", answer: "Rückfahrscheinwerfer" },
        { question: "Wie nennt man den Hebel der Handbremse?", answer: "Handbremshebel" },
        { question: "Wie nennt man die Fußbremse?", answer: "Bremspedal" },
        { question: "Wofür ist der Spoiler da?", answer: "Luftanpressdruck" },
        { question: "Wie heißt das System zum schnellen Motorstart?", answer: "Start-Stopp-System" },
        { question: "Welche Reifen nutzt man im Winter?", answer: "Winterreifen" },
        { question: "Wozu dient der Ölwechsel?", answer: "Schmierung erhalten" },
        { question: "Wie heißt das Getriebe ohne Kupplungspedal?", answer: "Automatikgetriebe" },
        { question: "Wie nennt man die Anzeige für Tankinhalt?", answer: "Tankanzeige" },
        { question: "Wofür steht PS?", answer: "Pferdestärke" },
        { question: "Welche Einheit hat der Reifendruck?", answer: "Bar" },
        { question: "Wie nennt man das System für Navigation?", answer: "Navigationssystem" },
        { question: "Wie heißt die Lampe fürs Bremsen?", answer: "Bremslicht" },
        { question: "Was ist die Funktion des Kühlers?", answer: "Motortemperatur senken" },
        { question: "Wie nennt man die Scheibe an der Seite?", answer: "Seitenscheibe" },
        { question: "Was ist der Zweck des ABS?", answer: "Blockieren verhindern" },
        { question: "Wie heißt die Taste für Warnblinker?", answer: "Warnblinkschalter" },
        { question: "Wofür dient die Anhängerkupplung?", answer: "Anhänger ziehen" },
        { question: "Wie heißt die Flüssigkeit im Kühlsystem?", answer: "Kühlmittel" },
        { question: "Wie nennt man die Abdeckung über dem Motor?", answer: "Motorhaube" },
        { question: "Wie nennt man das Bauteil, das Abgase leitet?", answer: "Auspuff" },
      ].map(({ question, answer }) => ({
        category: "Quizfrage",
        term: question,
        answer,
        taboo: [],
      })),
    ],
  },
  geographie: {
    label: "Geographie",
    cards: [
      { category: "Erklären", term: "Äquator", taboo: ["0°", "Breitengrad", "Erde"] },
      { category: "Erklären", term: "Kontinent", taboo: ["Landmasse", "Erde", "Groß"] },
      { category: "Erklären", term: "Klima", taboo: ["Durchschnitt", "Wetter", "Temperatur"] },
      { category: "Erklären", term: "Wetterfront", taboo: ["Luftmassen", "Regen", "Wind"] },
      { category: "Erklären", term: "Breitengrad", taboo: ["Nord", "Süd", "Koordinate"] },
      { category: "Erklären", term: "Längengrad", taboo: ["Ost", "West", "Koordinate"] },
      { category: "Erklären", term: "Zeitzone", taboo: ["Uhrzeit", "Meridian", "Region"] },
      { category: "Erklären", term: "Delta", taboo: ["Fluss", "Mündung", "Sedimente"] },
      { category: "Erklären", term: "Gletscher", taboo: ["Eis", "Berge", "Schmelze"] },
      { category: "Erklären", term: "Fjord", taboo: ["Küste", "Meer", "Tal"] },
      { category: "Erklären", term: "Vulkan", taboo: ["Lava", "Ausbruch", "Krater"] },
      { category: "Erklären", term: "Tsunami", taboo: ["Riesenwelle", "Erdbeben", "Meer"] },
      { category: "Erklären", term: "Monsun", taboo: ["Regenzeit", "Wind", "Asien"] },
      { category: "Erklären", term: "Passatwind", taboo: ["Wind", "Äquator", "Beständig"] },
      { category: "Erklären", term: "Wüste", taboo: ["Trocken", "Sand", "Kaum Regen"] },
      { category: "Erklären", term: "Oase", taboo: ["Wasser", "Wüste", "Quelle"] },
      { category: "Erklären", term: "Tundra", taboo: ["Kälte", "Permafrost", "Moos"] },
      { category: "Erklären", term: "Taiga", taboo: ["Nadelwald", "Boreal", "Kanada"] },
      { category: "Erklären", term: "Regenwald", taboo: ["Tropen", "Feucht", "Bäume"] },
      { category: "Erklären", term: "Savanne", taboo: ["Grasland", "Tropen", "Akazien"] },
      { category: "Erklären", term: "Gebirge", taboo: ["Berge", "Erhebung", "Kette"] },
      { category: "Erklären", term: "Plateau", taboo: ["Hochfläche", "Ebene", "Höhe"] },
      { category: "Erklären", term: "Insel", taboo: ["Land", "Meer", "Umlauf"] },
      { category: "Erklären", term: "Archipel", taboo: ["Inselgruppe", "Meer", "Inseln"] },
      { category: "Erklären", term: "Halbinsel", taboo: ["Land", "Meer", "Schmal"] },
      { category: "Erklären", term: "Bucht", taboo: ["Küste", "Meer", "Einbuchtung"] },
      { category: "Erklären", term: "Golfstrom", taboo: ["Strömung", "Atlantik", "Warm"] },
      { category: "Erklären", term: "Plattentektonik", taboo: ["Erdplatten", "Bewegung", "Erdbeben"] },
      { category: "Erklären", term: "Erosion", taboo: ["Abtragung", "Wasser", "Wind"] },
      { category: "Erklären", term: "Sediment", taboo: ["Ablagerung", "Material", "Fluss"] },
      { category: "Erklären", term: "Küstenlinie", taboo: ["Ufer", "Meer", "Verlauf"] },
      { category: "Erklären", term: "Landkarte", taboo: ["Karte", "Maßstab", "Orientierung"] },
      { category: "Erklären", term: "Kompass", taboo: ["Norden", "Magnet", "Orientierung"] },
      { category: "Erklären", term: "Maßstab", taboo: ["Verhältnis", "Karte", "Entfernung"] },
      { category: "Erklären", term: "Höhenlinie", taboo: ["Topografie", "Karte", "Contour"] },
      { category: "Erklären", term: "Einzugsgebiet", taboo: ["Flussgebiet", "Wasser", "Abfluss"] },
      { category: "Erklären", term: "Wasserscheide", taboo: ["Trennung", "Flüsse", "Bergkamm"] },
      { category: "Erklären", term: "Grundwasser", taboo: ["Untergrund", "Wasser", "Brunnen"] },
      { category: "Erklären", term: "Stausee", taboo: ["Damm", "Wasser", "Speicher"] },
      { category: "Erklären", term: "Geysir", taboo: ["Heiß", "Fontäne", "Geothermie"] },
      { category: "Erklären", term: "Karst", taboo: ["Kalk", "Höhlen", "Lösung"] },
      { category: "Erklären", term: "Mündung", taboo: ["Fluss", "Meer", "Ende"] },
      { category: "Erklären", term: "Quelle", taboo: ["Ursprung", "Fluss", "Wasser"] },
      { category: "Erklären", term: "Riff", taboo: ["Korallen", "Meer", "Fische"] },
      { category: "Erklären", term: "Lagune", taboo: ["Küste", "Flachwasser", "Insel"] },
      { category: "Erklären", term: "Kliff", taboo: ["Steilküste", "Felsen", "Meer"] },
      { category: "Erklären", term: "Tal", taboo: ["Fluss", "Senke", "Berge"] },
      { category: "Erklären", term: "Gipfel", taboo: ["Berg", "Spitze", "Höhe"] },
      { category: "Erklären", term: "Sund", taboo: ["Meerenge", "Meer", "Land"] },
      { category: "Erklären", term: "Strand", taboo: ["Sand", "Küste", "Meer"] },
      ...[
        "Globus",
        "Landkarte",
        "Kompass",
        "Berg",
        "Fluss",
        "See",
        "Meer",
        "Insel",
        "Halbinsel",
        "Vulkan",
        "Wasserfall",
        "Strand",
        "Wüste",
        "Wald",
        "Regenwald",
        "Savanne",
        "Gletscher",
        "Fjord",
        "Delta",
        "Leuchtturm",
        "Brücke",
        "Hafen",
        "Segelboot",
        "Bergkette",
        "Tal",
        "Ebene",
        "Hochebene",
        "Klippe",
        "Bucht",
        "Lagune",
        "Riff",
        "Geysir",
        "Höhle",
        "Düne",
        "Oase",
        "Windrose",
        "Gebirgspass",
        "Flussmündung",
        "Küstenlinie",
        "Nationalpark",
        "Stadt",
        "Dorf",
        "Bahnlinie",
        "Straße",
        "Satellitenbild",
        "Wetterkarte",
        "Polarkreis",
        "Äquator",
        "Nordpol",
        "Südpol",
      ].map((term) => ({ category: "Zeichnen", term, taboo: [] })),
      ...[
        "Berg steigen",
        "Wandern",
        "Karte lesen",
        "Kompass nutzen",
        "Zelt aufbauen",
        "Koffer packen",
        "Flugzeug starten",
        "Flugzeug landen",
        "Zug fahren",
        "Schiff steuern",
        "Segel setzen",
        "Surfen",
        "Schwimmen",
        "Tauchen",
        "Sonnenbaden",
        "Sandburg bauen",
        "Schneemann bauen",
        "Skifahren",
        "Rodeln",
        "Gletscher überqueren",
        "Wüste durchqueren",
        "Oase suchen",
        "Regenwald erkunden",
        "Vögel beobachten",
        "Landschaft fotografieren",
        "Fernglas benutzen",
        "Fluss überqueren",
        "Brücke überqueren",
        "Kanu paddeln",
        "Angeln am See",
        "Leuchtturm besichtigen",
        "Karte falten",
        "Rucksack aufsetzen",
        "Picknick machen",
        "Lagerfeuer machen",
        "Sterne beobachten",
        "Nordlicht bestaunen",
        "Heißluftballon fahren",
        "Seilbahn fahren",
        "Bergbahn benutzen",
        "Felsen klettern",
        "Höhle erkunden",
        "Geocaching suchen",
        "Orientierungslauf machen",
        "Grenzkontrolle passieren",
        "Pass stempeln",
        "Ticket kaufen",
        "Hotel einchecken",
        "Sonnenaufgang anschauen",
        "Sonnenuntergang anschauen",
      ].map((term) => ({ category: "Pantomime", term, taboo: [] })),
      ...[
        { question: "Wie heißt die Hauptstadt von Italien?", answer: "Rom" },
        { question: "Wie heißt die Hauptstadt von Norwegen?", answer: "Oslo" },
        { question: "Welcher Fluss fließt durch Paris?", answer: "Seine" },
        { question: "Wie heißt die größte Insel der Welt?", answer: "Grönland" },
        { question: "Wie heißt der längste Fluss Europas?", answer: "Wolga" },
        { question: "Wie heißt der höchste Berg Europas?", answer: "Elbrus" },
        { question: "Auf welchem Kontinent liegt Indien?", answer: "Asien" },
        { question: "Wie heißt die große Wüste in Afrika?", answer: "Sahara" },
        { question: "Welche Meerenge trennt Europa und Afrika?", answer: "Straße von Gibraltar" },
        { question: "Wie heißt die Hauptstadt von Australien?", answer: "Canberra" },
        { question: "Wie heißt das Gebirge in Südamerika?", answer: "Anden" },
        { question: "Welcher Ozean liegt zwischen Afrika und Australien?", answer: "Indischer Ozean" },
        { question: "Wie heißt der größte See Afrikas?", answer: "Victoriasee" },
        { question: "Wie heißt die Hauptstadt von Polen?", answer: "Warschau" },
        { question: "Welches Land hat die meisten Einwohner?", answer: "China" },
        { question: "Wie nennt man die Linie bei 0° Länge?", answer: "Nullmeridian" },
        { question: "Wie viele Breitengrade gibt es?", answer: "180" },
        { question: "Wie heißt der längste Fluss der Welt?", answer: "Nil" },
        { question: "Wie heißt die Hauptstadt von Griechenland?", answer: "Athen" },
        { question: "Welches Land hat die Form eines Stiefels?", answer: "Italien" },
        { question: "Wie heißt der höchste Berg Afrikas?", answer: "Kilimandscharo" },
        { question: "Wie heißt die Hauptstadt von Kanada?", answer: "Ottawa" },
        { question: "Welcher Fluss fließt durch London?", answer: "Themse" },
        { question: "Wie heißt die größte Wüste der Welt?", answer: "Antarktis" },
        { question: "Welche Insel gehört zu Indonesien?", answer: "Bali" },
        { question: "Wie heißt die Hauptstadt von Brasilien?", answer: "Brasília" },
        { question: "Welches Land hat die längste Küste?", answer: "Kanada" },
        { question: "Wie nennt man Erdkunde?", answer: "Geographie" },
        { question: "Wie heißt der größte Ozean?", answer: "Pazifik" },
        { question: "Welches Meer liegt zwischen Italien und dem Balkan?", answer: "Adriatisches Meer" },
        { question: "Wie heißt die Hauptstadt von Spanien?", answer: "Madrid" },
        { question: "Welcher Fluss fließt durch Kairo?", answer: "Nil" },
        { question: "Wie heißt der Kontinent am Südpol?", answer: "Antarktis" },
        { question: "Wie heißt das Gebirge zwischen Europa und Asien?", answer: "Ural" },
        { question: "Wie heißt die Hauptstadt von Portugal?", answer: "Lissabon" },
        { question: "Welches Land liegt nördlich von Deutschland?", answer: "Dänemark" },
        { question: "Welcher Kontinent ist der südlichste?", answer: "Antarktika" },
        { question: "Wie heißt der Vulkan nahe Neapel?", answer: "Vesuv" },
        { question: "Wie heißt die Hauptstadt von Schweden?", answer: "Stockholm" },
        { question: "Wie heißt der größte See Europas?", answer: "Ladogasee" },
        { question: "Welche Stadt liegt auf zwei Kontinenten?", answer: "Istanbul" },
        { question: "Welcher Fluss fließt durch Wien?", answer: "Donau" },
        { question: "Wie heißt das größte Korallenriff der Erde?", answer: "Great Barrier Reef" },
        { question: "Wie heißt die Hauptstadt von Argentinien?", answer: "Buenos Aires" },
        { question: "Welches Land besteht aus zwei Hauptinseln?", answer: "Neuseeland" },
        { question: "Wie heißt die Gebirgskette in Nordafrika?", answer: "Atlas" },
        { question: "Wie heißt die Wüste in China und der Mongolei?", answer: "Gobi" },
        { question: "Wie heißt der höchste Berg der Welt?", answer: "Mount Everest" },
        { question: "Welcher Kontinent hat die meisten Länder?", answer: "Afrika" },
        { question: "Wie nennt man den nördlichsten Pol der Erde?", answer: "Nordpol" },
      ].map(({ question, answer }) => ({
        category: "Quizfrage",
        term: question,
        answer,
        taboo: [],
      })),
    ],
  },
};
const DEFAULT_DATASET_KEY = "allgemein";
const DEFAULT_DATA = PRESET_DATASETS[DEFAULT_DATASET_KEY].cards;

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
  { label: "Indigo", value: "#6366f1" },
  { label: "Bernstein", value: "#f59e0b" },
  { label: "Koralle", value: "#fb7185" },
  { label: "Moos", value: "#22c55e" },
];
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

function handleTeamListClick(event) {
  const colorToggle = event.target.closest("[data-team-color-toggle]");
  if (colorToggle) {
    const picker = colorToggle.closest(".team-picker");
    if (picker) {
      toggleTeamPicker(picker, colorToggle);
    }
    return;
  }
  const iconToggle = event.target.closest("[data-team-icon-toggle]");
  if (iconToggle) {
    const picker = iconToggle.closest(".team-picker");
    if (picker) {
      toggleTeamPicker(picker, iconToggle);
    }
    return;
  }
  const colorOption = event.target.closest("[data-team-color-option]");
  if (colorOption) {
    const picker = colorOption.closest(".team-picker");
    const value = colorOption.dataset.colorValue;
    if (picker && value) {
      updatePickerSelection(picker, value, "color");
      closeAllTeamPickers();
    }
    return;
  }
  const iconOption = event.target.closest("[data-team-icon-option]");
  if (iconOption) {
    const picker = iconOption.closest(".team-picker");
    const value = iconOption.dataset.iconValue;
    if (picker && value) {
      updatePickerSelection(picker, value, "icon");
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
        cell.classList.add("start");
        const icon = document.createElement("span");
        icon.className = "cell-icon";
        icon.textContent = "🚩";
        const label = document.createElement("span");
        label.className = "cell-label";
        label.textContent = "Start";
        cell.append(icon, label);
      } else if (index === total - 1) {
        cell.classList.add("goal");
        const icon = document.createElement("span");
        icon.className = "cell-icon";
        icon.textContent = "🏁";
        const label = document.createElement("span");
        label.className = "cell-label";
        label.textContent = "Ziel";
        cell.append(icon, label);
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
          applyCategoryIcon(icon, category, { allowFallback: true });
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
        finishTurn(false, true);
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
    turnWordTitle.textContent = "Keine Quizfrage";
    turnTabooList.innerHTML = "";
    turnAnswer?.classList.add("hidden");
    if (turnAnswer) {
      turnAnswer.textContent = "";
    }
    return;
  }
  turnWordTitle.textContent = card.term;
  turnTabooList.innerHTML = "";
  if (turnAnswer) {
    turnAnswer.textContent = "";
    turnAnswer.classList.add("hidden");
  }
}

function setQuizAnswerCard(card) {
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
  showDiceOverlay(roll);
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
        hideDiceOverlay();
        showWinner(formatTeamLabel(state.currentTeam));
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
  state.currentCard = null;
  state.quizPhase = null;
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
    if (category === "Quizfrage") {
      const [answer] = taboos;
      cards.push({
        category,
        term,
        answer: answer || "",
        taboo: [],
      });
      return;
    }
    cards.push({
      category,
      term,
      taboo: taboos.filter(Boolean),
    });
  });
  return cards;
}

function cloneCards(cards) {
  return cards.map((card) => ({
    ...card,
    taboo: Array.isArray(card.taboo) ? [...card.taboo] : [],
  }));
}

function applyPresetDataset(datasetKey) {
  const dataset = PRESET_DATASETS[datasetKey];
  if (!dataset) return;
  state.cards = cloneCards(dataset.cards);
  csvStatus.textContent = `${dataset.label}: ${state.cards.length} Karten.`;
  if (csvUpload) {
    csvUpload.value = "";
  }
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
    setTurnButtons({ showCorrect: true, showWrong: true, showSwap: true, showContinue: true });
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
    finishTurn(false, true);
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
  if (datasetSelect) {
    datasetSelect.value = DEFAULT_DATASET_KEY;
  }
  applyPresetDataset(DEFAULT_DATASET_KEY);
}

window.addEventListener("resize", positionTokens);
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

startButton.addEventListener("click", handleStartGame);
rollButton.addEventListener("click", handleRoll);
undoButton.addEventListener("click", handleUndo);
csvUpload.addEventListener("change", handleCsvUpload);
datasetSelect?.addEventListener("change", (event) => {
  applyPresetDataset(event.target.value);
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
