(() => {
  const databases = (globalThis.CARD_DATABASES = globalThis.CARD_DATABASES || {});
  databases.mk11d = {
    label: "MK11D",
    cards: [
      { category: "Erklären", term: "Bremse", taboo: ["Bremsbacken", "Reifen", "Sattel"] },
      { category: "Erklären", term: "Anlasser", taboo: ["starten", "50-Kabel", "Motor"] },
      { category: "Erklären", term: "Messspitzen", taboo: ["prüfen", "Kabel", "Widerstand"] },
      { category: "Erklären", term: "Radkappen", taboo: ["Reifen", "Abdeckung", "Felge"] },
      {
        category: "Erklären",
        term: "Kennzeichenhalter",
        taboo: ["befestigen", "Front", "Plastik"],
      },
      { category: "Erklären", term: "Scheinwerfer", taboo: ["Licht", "Blinker", "Sicht"] },
      {
        category: "Erklären",
        term: "Batteriesensor",
        taboo: ["Ladespannung", "reguliert", "Bordnetzspannung"],
      },
      { category: "Erklären", term: "Starter", taboo: ["50-Kabel", "Wicklung", "Spannung"] },
      {
        category: "Erklären",
        term: "Bremsbelag",
        taboo: ["Bremsen", "Anhalten", "Bremsbacken"],
      },
      {
        category: "Erklären",
        term: "Rückholfeder",
        taboo: ["Bremsbacken", "zurückholen", "Trommelbremse"],
      },
      {
        category: "Erklären",
        term: "Bremsleitung",
        taboo: ["Hydraulik", "Bremssattel", "entlüften"],
      },
      {
        category: "Erklären",
        term: "Bremskreisaufteilung",
        taboo: ["Vorderachse", "Hinterachse", "diagonal"],
      },
      {
        category: "Erklären",
        term: "Ausgleichsbehälter",
        taboo: ["Bremsflüssigkeit", "entlüften", "Kasten"],
      },
      {
        category: "Erklären",
        term: "Bremskraftverstärker",
        taboo: ["Unterdruck", "Bremse", "Pedal", "Verstärkung"],
      },
      {
        category: "Erklären",
        term: "ABS",
        taboo: ["Bremsen", "Blockieren", "Sicherheit", "Sensor"],
      },
      { category: "Erklären", term: "Rückfahrlicht", taboo: ["Licht", "Schalter", "Gang"] },
      { category: "Erklären", term: "Zündkerze", taboo: ["Zündung", "Keramik", "Schrauben"] },
      { category: "Erklären", term: "Kupplung", taboo: ["Motor", "Getriebe", "trennen", "Pedal"] },
      { category: "Erklären", term: "Getriebe", taboo: ["Gang", "übersetzen", "Kupplung"] },
      {
        category: "Erklären",
        term: "Kurbelwelle",
        taboo: ["Kolben", "Drehbewegung", "Pleuel"],
      },
      {
        category: "Erklären",
        term: "Nockenwelle",
        taboo: ["Ventil", "Steuerzeit", "oben"],
      },
      { category: "Erklären", term: "Zahnriemen", taboo: ["Steuerung", "Ventile", "reißen"] },
      {
        category: "Erklären",
        term: "Keilrippenriemen",
        taboo: ["Nebenaggregate", "Lichtmaschine", "Riemen"],
      },
      { category: "Erklären", term: "Ölfilter", taboo: ["reinigen", "Motoröl", "Schmutz"] },
      {
        category: "Erklären",
        term: "Kraftstoffpumpe",
        taboo: ["Benzin", "Diesel", "fördern"],
      },
      {
        category: "Erklären",
        term: "Einspritzdüse",
        taboo: ["Kraftstoff", "einspritzen", "Zylinder"],
      },
      {
        category: "Erklären",
        term: "Lichtmaschine",
        taboo: ["Strom", "Batterie", "laden"],
      },
      {
        category: "Erklären",
        term: "Generator",
        taboo: ["elektrisch", "Spannung", "Lichtmaschine"],
      },
      { category: "Erklären", term: "Thermostat", taboo: ["Temperatur", "Kühlmittel", "öffnen"] },
      { category: "Erklären", term: "Kühler", taboo: ["Kühlflüssigkeit", "Luft", "Temperatur"] },
      {
        category: "Erklären",
        term: "Lenkgetriebe",
        taboo: ["Räder", "lenken", "Zahnstange"],
      },
      { category: "Erklären", term: "Spurstange", taboo: ["Lenkung", "Rad", "Bewegung"] },
      {
        category: "Erklären",
        term: "Stoßdämpfer",
        taboo: ["Feder", "schwingen", "Fahrwerk"],
      },
      { category: "Erklären", term: "Feder", taboo: ["Fahrwerk", "Dämpfung", "Metall"] },
      {
        category: "Erklären",
        term: "Bremssattel",
        taboo: ["Bremsscheibe", "Kolben", "Bremsbelag"],
      },
      {
        category: "Erklären",
        term: "Bremsscheibe",
        taboo: ["Reibung", "Bremsbelag", "rotieren"],
      },
      { category: "Erklären", term: "Handbremse", taboo: ["Feststellbremse", "Parken", "Hebel"] },
      ...[{
        question: "Wofür steht die Abkürzung ABS?",
        answer: "Antiblockiersystem – verhindert das Blockieren der Räder beim Bremsen.",
      },
      {
        question: "Welche Aufgabe hat der Katalysator?",
        answer: "Reduziert schädliche Abgase durch chemische Umwandlung.",
      },
      {
        question: "Was passiert, wenn der Zahnriemen reißt?",
        answer: "Motorschaden möglich, da Ventile und Kolben kollidieren können.",
      },
      {
        question: "Was ist der Unterschied zwischen Otto- und Dieselmotor?",
        answer: "Ottomotor zündet mit Zündkerzen, Dieselmotor durch Selbstzündung.",
      },
      {
        question: "Wozu dient das Motoröl?",
        answer: "Schmiert, kühlt, reinigt und schützt den Motor vor Verschleiß.",
      },
      {
        question: "Was bedeutet Hubraum?",
        answer: "Gesamtvolumen aller Zylinder eines Motors.",
      },
      {
        question: "Was macht die Lichtmaschine?",
        answer: "Erzeugt Strom für die Bordelektrik und lädt die Batterie.",
      },
      {
        question: "Was ist ein Turbolader?",
        answer: "Verdichtet die Ansaugluft, um die Motorleistung zu erhöhen.",
      },
      {
        question: "Warum darf ein Motor nicht ohne Kühlmittel laufen?",
        answer: "Er überhitzt schnell und kann schweren Motorschaden bekommen.",
      },
      {
        question: "Was ist der Zweck der Kupplung?",
        answer: "Trennt und verbindet Motor und Getriebe beim Anfahren und Schalten.",
      },
      {
        question: "Wie hält man an?",
        answer: "Durch Motorbremse und Betätigen des Bremspedals.",
      },
      {
        question: "Wie funktioniert die Heizung im Auto?",
        answer: "Über die Wärme der Kühlflüssigkeit (Wärmetauscher).",
      },
      {
        question: "Wie viele Fenster hat ein Auto?",
        answer: "6",
      },
      {
        question: "Welches Bauteil sitzt an der Kardanwelle zwischen Getriebe und Differential und sorgt für ruhigen Lauf?",
        answer: "Hardyscheibe.",
      },
      {
        question: "Was ist ein DSG-Getriebe?",
        answer: "Ein Doppelkupplungsgetriebe mit zwei Teilgetrieben und zwei Kupplungen.",
      },
      {
        question: "Was für Zylinderbuchsen gibt es?",
        answer: "Trockene und nasse.",
      },
      {
        question: "Wie hoch ist die Ladespannung?",
        answer: "Ca. 13,8–14,5 V.",
      },
      {
        question: "Welche Bauart ist die häufigste bei der Trommelbremse?",
        answer: "Duo-Servo-Bremse.",
      },
      {
        question: "Wer hat den besten Gürtel auf der Schule?",
        answer: "Herr Steibl.",
      },
      {
        question: "Nenne zwei Aufgaben der Kupplung.",
        answer: "Kraftübertragung vom Motor zum Getriebe; Dämpfen von Drehschwingungen.",
      },
      {
        question: "Welche Aufgabe hat die Kurbelwelle?",
        answer: "Wandelt die Hubbewegung der Kolben in eine Drehbewegung um.",
      },
      {
        question: "Warum ist die Kühlmittelpumpe wichtig?",
        answer: "Sorgt für Zirkulation der Kühlflüssigkeit und verhindert Überhitzung.",
      },
      {
        question: "Was misst ein Kompressionsdruckschreiber?",
        answer: "Den Kompressionsdruck im Zylinder.",
      },
      {
        question: "Welche Aufgabe hat das Schwungrad?",
        answer: "Sorgt für gleichmäßigen Motorlauf.",
      },
      {
        question: "Warum ist der Ölfilter wichtig?",
        answer: "Reinigt das Motoröl von Schmutzpartikeln.",
      },
      {
        question: "Wer gleicht den Belagverschleiß bei der Kupplung aus?",
        answer: "Die Nachstelleinrichtung.",
      },
      {
        question: "Was trennt die Kupplung?",
        answer: "Den Kraftfluss zwischen Motor und Getriebe.",
      },
      {
        question: "Warum zieht Bremsflüssigkeit Wasser an?",
        answer: "Weil sie hygroskopisch ist.",
      },
      {
        question: "Welche Kolben werden häufig in Dieselmotoren verbaut?",
        answer: "Stahlkolben.",
      },
      {
        question: "Mit was prüft man den Reifendruck?",
        answer: "Mit Manometer / Luftprüfer.",
      },
      {
        question: "Wie erkennt das Auto den Luftdruck?",
        answer: "Mit RDKS / TPMS.",
      },
      {
        question: "Mit wie viel Nm werden Zündkerzen nachgezogen?",
        answer: "Ca. 20–25 Nm.",
      },
      {
        question: "Warum gibt es unterschiedliche Bremsflüssigkeiten?",
        answer:
          "Unterschiedliche Siedepunkte, Temperaturbeständigkeit und Einsatzbereiche (DOT-Klassen).",
      },
      ].map(({ question, answer }) => ({
        category: "Quizfrage",
        term: question,
        answer,
        taboo: [],
      })),
    ],
  };
})();
