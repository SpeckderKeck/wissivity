(() => {
  const databases = (globalThis.CARD_DATABASES = globalThis.CARD_DATABASES || {});
  databases.mk11d = {
    label: "MK11D",
    cards: [
      {
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
  };
})();
