(() => {
  const databases = (globalThis.CARD_DATABASES = globalThis.CARD_DATABASES || {});

  const quizCards = [
  {
    "category": "Quizfrage",
    "term": "Was versteht man unter Empathie?",
    "answer": "Die Fähigkeit, sich in andere hineinzuversetzen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Solidarität?",
    "answer": "Gegenseitige Unterstützung in einer Gemeinschaft.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Zivilcourage?",
    "answer": "Mutiges Eingreifen bei Unrecht im Alltag.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was meint Inklusion?",
    "answer": "Gleichberechtigte Teilhabe aller Menschen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Integration?",
    "answer": "Einbindung von Menschen in eine Gemeinschaft.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Toleranz?",
    "answer": "Andere Meinungen und Lebensweisen zu akzeptieren.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Diskriminierung?",
    "answer": "Benachteiligung wegen bestimmter Merkmale.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Mobbing?",
    "answer": "Wiederholtes Schikanieren einer Person.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Teamfähigkeit?",
    "answer": "Gut mit anderen zusammenarbeiten können.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Kompromissbereitschaft?",
    "answer": "Bereitschaft, aufeinander zuzugehen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Ehrenamt?",
    "answer": "Freiwillige, unbezahlte Arbeit für andere.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was versteht man unter Respekt?",
    "answer": "Achtung gegenüber Menschen und Regeln.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Fairness?",
    "answer": "Gerechtes und korrektes Verhalten.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Verantwortung übernehmen?",
    "answer": "Für eigenes Handeln einstehen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Konfliktlösung?",
    "answer": "Einen Streit konstruktiv beenden.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Gewaltfreie Kommunikation?",
    "answer": "Wertschätzend und ohne Angriffe sprechen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Diversität?",
    "answer": "Vielfalt von Menschen und Perspektiven.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Gleichberechtigung?",
    "answer": "Gleiche Rechte für alle Geschlechter.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Barrierefreiheit?",
    "answer": "Umgebungen ohne Hindernisse zugänglich machen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Partizipation?",
    "answer": "Aktive Mitbestimmung an Entscheidungen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist eine soziale Rolle?",
    "answer": "Erwartetes Verhalten in einer Gruppe.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Vertrauen?",
    "answer": "Sich auf jemanden verlassen können.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Vorurteil?",
    "answer": "Urteil ohne ausreichende Kenntnis.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Stereotyp?",
    "answer": "Vereinfachtes Bild über eine Gruppe.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Selbstwirksamkeit?",
    "answer": "Glaube an die eigene Handlungsfähigkeit.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Medienkompetenz?",
    "answer": "Medien kritisch und sicher nutzen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Datenschutz?",
    "answer": "Schutz persönlicher Informationen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist eine Demokratie?",
    "answer": "Staatsform mit politischer Mitbestimmung.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Meinungsfreiheit?",
    "answer": "Eigene Meinung frei äußern dürfen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Grundrecht?",
    "answer": "Unveräußerliches Recht jedes Menschen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Chancengleichheit?",
    "answer": "Gleiche Startbedingungen für alle.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist soziale Ungleichheit?",
    "answer": "Unterschiede bei Chancen und Ressourcen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Armut?",
    "answer": "Mangel an Geld und Teilhabemöglichkeiten.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Nachhaltigkeit im Alltag?",
    "answer": "Ressourcen schonend und langfristig nutzen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Konsumkritik?",
    "answer": "Kaufverhalten hinterfragen und bewusster entscheiden.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Gemeinwohl?",
    "answer": "Wohl der gesamten Gesellschaft.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist eine Debatte?",
    "answer": "Austausch verschiedener Argumente.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet aktive Zuhören?",
    "answer": "Aufmerksam hören und Rückmeldung geben.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Ich-Botschaft?",
    "answer": "Eigene Gefühle ohne Vorwurf formulieren.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Konfliktprävention?",
    "answer": "Streit möglichst früh vermeiden.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Deeskalation?",
    "answer": "Spannungen gezielt beruhigen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Sozialisation?",
    "answer": "Prägung durch Umfeld und Gesellschaft.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist eine Peergroup?",
    "answer": "Gruppe Gleichaltriger mit Einfluss.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Selbstreflexion?",
    "answer": "Eigenes Verhalten bewusst hinterfragen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Selbstbestimmung?",
    "answer": "Eigene Entscheidungen frei treffen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Hilfsbereitschaft?",
    "answer": "Anderen freiwillig Unterstützung anbieten.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein soziales Netzwerk?",
    "answer": "Verbindungen zwischen Menschen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Kooperation?",
    "answer": "Gemeinsam an einem Ziel arbeiten.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Zuwanderung?",
    "answer": "Einwanderung von Menschen in ein Land.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet gesellschaftlicher Zusammenhalt?",
    "answer": "Gefühl von Verbundenheit in der Gesellschaft.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer malte die Mona Lisa?",
    "answer": "Leonardo da Vinci.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer malte die Sternennacht?",
    "answer": "Vincent van Gogh.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer schuf das Gemälde Guernica?",
    "answer": "Pablo Picasso.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer war ein Hauptvertreter des Impressionismus?",
    "answer": "Claude Monet.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Kunstrichtung mit Formen und Farben ohne Gegenstand?",
    "answer": "Abstrakte Kunst.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man Wandmalerei auf frischem Putz?",
    "answer": "Fresko.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt das bekannte Museum in Paris mit der Mona Lisa?",
    "answer": "Louvre.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist eine Skulptur?",
    "answer": "Ein dreidimensionales Kunstwerk.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Lehre von der Farbenwirkung?",
    "answer": "Farblehre.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man Kunst aus Alltagsgegenständen?",
    "answer": "Objektkunst.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer war eine bekannte mexikanische Malerin mit Selbstporträts?",
    "answer": "Frida Kahlo.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man eine Darstellung des Gesichts?",
    "answer": "Porträt.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Stillleben?",
    "answer": "Gemälde mit unbelebten Gegenständen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Perspektive in der Kunst?",
    "answer": "Räumliche Tiefenwirkung auf einer Fläche.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Kunstrichtung von Salvador Dalí?",
    "answer": "Surrealismus.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer schuf die David-Statue?",
    "answer": "Michelangelo.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Renaissance in der Kunstgeschichte?",
    "answer": "Wiedergeburt antiker Ideen in Europa.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Mosaik?",
    "answer": "Bild aus kleinen Stein- oder Glasstücken.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man gedruckte Kunst mit geschnittener Platte?",
    "answer": "Druckgrafik.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Street Art?",
    "answer": "Kunst im öffentlichen Raum.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der Künstlername von Banksy?",
    "answer": "Nicht eindeutig bekannt.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Triptychon?",
    "answer": "Dreiteiliges Bildwerk.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man das Mischen von Farben auf der Palette?",
    "answer": "Farbmischung.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist der Goldene Schnitt?",
    "answer": "Ein harmonisches Proportionsverhältnis.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Kunstrichtung mit klaren geometrischen Formen um 1920?",
    "answer": "Bauhaus-Stil.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer gründete das Bauhaus?",
    "answer": "Walter Gropius.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man eine schnelle Vorzeichnung?",
    "answer": "Skizze.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist eine Collage?",
    "answer": "Zusammengeklebte Materialien als Bild.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Pop Art?",
    "answer": "Kunst mit Motiven aus Alltag und Massenkultur.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer war ein berühmter Pop-Art-Künstler?",
    "answer": "Andy Warhol.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man Kunst aus Lichtinstallationen?",
    "answer": "Lichtkunst.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Relief?",
    "answer": "Plastische Darstellung auf einer Fläche.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Technik mit Wasserfarben?",
    "answer": "Aquarell.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Technik mit deckenden Farben auf Holz?",
    "answer": "Tempera.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Atelier?",
    "answer": "Arbeitsraum von Künstlerinnen und Künstlern.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man Kunst im Kirchenraum mit buntem Glas?",
    "answer": "Glasmalerei.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer malte Das Mädchen mit dem Perlenohrring?",
    "answer": "Johannes Vermeer.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Minimal Art?",
    "answer": "Kunst mit stark reduzierten Formen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet Expressionismus?",
    "answer": "Betonte Darstellung innerer Gefühle.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Kunstmuseum?",
    "answer": "Ort für Sammlung und Ausstellung von Kunst.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man das Entfernen von Material beim Gestalten?",
    "answer": "Subtraktive Technik.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man das Aufbauen von Material beim Gestalten?",
    "answer": "Additive Technik.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Land Art?",
    "answer": "Kunstwerke in und mit Landschaft.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer schuf den Reichstag als Verhüllungsprojekt?",
    "answer": "Christo und Jeanne-Claude.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Selbstporträt?",
    "answer": "Bildnis der Künstlerperson von sich selbst.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man das bewusste Anordnen von Bildteilen?",
    "answer": "Komposition.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Kontrast in der Kunst?",
    "answer": "Starker Unterschied zwischen Bildelementen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist eine Vernissage?",
    "answer": "Eröffnung einer Kunstausstellung.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was bedeutet kuratieren?",
    "answer": "Eine Ausstellung inhaltlich zusammenstellen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist Kunstkritik?",
    "answer": "Fachliche Beurteilung von Kunstwerken.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt Deutschlands?",
    "answer": "Berlin.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welches Bundesland ist flächenmäßig am größten?",
    "answer": "Bayern.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welches Bundesland hat die meisten Einwohner?",
    "answer": "Nordrhein-Westfalen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Bayern?",
    "answer": "München.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Baden-Württemberg?",
    "answer": "Stuttgart.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Hessen?",
    "answer": "Wiesbaden.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Sachsen?",
    "answer": "Dresden.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Thüringen?",
    "answer": "Erfurt.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Niedersachsen?",
    "answer": "Hannover.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Schleswig-Holstein?",
    "answer": "Kiel.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Mecklenburg-Vorpommern?",
    "answer": "Schwerin.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Brandenburg?",
    "answer": "Potsdam.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Rheinland-Pfalz?",
    "answer": "Mainz.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt des Saarlands?",
    "answer": "Saarbrücken.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Sachsen-Anhalt?",
    "answer": "Magdeburg.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Nordrhein-Westfalen?",
    "answer": "Düsseldorf.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Bremen?",
    "answer": "Bremen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Hamburg?",
    "answer": "Hamburg.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Berlin?",
    "answer": "Berlin.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Hauptstadt von Brandenburgs Nachbarland Polen?",
    "answer": "Warschau.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welcher Fluss fließt durch Köln?",
    "answer": "Der Rhein.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welcher Fluss fließt durch Dresden?",
    "answer": "Die Elbe.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welcher Fluss fließt durch Frankfurt am Main?",
    "answer": "Der Main.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt Deutschlands höchster Berg?",
    "answer": "Die Zugspitze.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "In welchem Bundesland liegt die Zugspitze?",
    "answer": "In Bayern.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt Deutschlands größte Insel?",
    "answer": "Rügen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "In welchem Meer liegt Rügen?",
    "answer": "In der Ostsee.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die große Insel in der Nordsee in Niedersachsen?",
    "answer": "Borkum.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welches Mittelgebirge liegt in Niedersachsen und Sachsen-Anhalt?",
    "answer": "Der Harz.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt das größte deutsche Binnengewässer nach Fläche?",
    "answer": "Der Bodensee.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "An welche drei Länder grenzt der Bodensee?",
    "answer": "Deutschland, Österreich und Schweiz.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt das Gebirge an der Grenze zu Tschechien im Südosten?",
    "answer": "Das Erzgebirge.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Küstenform an Nordsee und Ostsee?",
    "answer": "Küste mit Inseln, Buchten und Stränden.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche zwei Meere grenzen an Deutschland?",
    "answer": "Nordsee und Ostsee.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Bundesländer hat Deutschland?",
    "answer": "16.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Stadt ist als Ruhrgebietsmetropole bekannt?",
    "answer": "Essen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der größte Flughafen Deutschlands?",
    "answer": "Frankfurt am Main.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welcher Fluss bildet teilweise die Grenze zu Polen?",
    "answer": "Die Oder.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die deutsche Hauptstadt vor Berlin (BRD)?",
    "answer": "Bonn.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "In welcher Landschaft liegt der Spreewald?",
    "answer": "In Brandenburg.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die bekannte Felsenlandschaft in Sachsen?",
    "answer": "Sächsische Schweiz.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welches Bundesland grenzt an Dänemark?",
    "answer": "Schleswig-Holstein.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welches Bundesland hat als einziges zwei getrennte Städte als Land?",
    "answer": "Bremen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Großstadt liegt an der Isar?",
    "answer": "München.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Großstadt liegt am Neckar?",
    "answer": "Stuttgart.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Stadt ist für den Kölner Dom bekannt?",
    "answer": "Köln.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Stadt wird auch Hansestadt an der Elbe genannt?",
    "answer": "Hamburg.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Region ist für Wein am Rhein bekannt?",
    "answer": "Rheingau.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der Nationalpark im Südosten Bayerns?",
    "answer": "Nationalpark Berchtesgaden.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der nördlichste Punkt Deutschlands (Insel)?",
    "answer": "Sylt.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Spieler stehen beim Fußball pro Team auf dem Feld?",
    "answer": "11.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie lange dauert ein Fußballspiel regulär?",
    "answer": "90 Minuten.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Ringe hat das olympische Symbol?",
    "answer": "5.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Sportart nutzt einen Schläger und einen Filzball?",
    "answer": "Tennis.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Punkte ist ein Touchdown im American Football wert?",
    "answer": "6 Punkte.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der wichtigste internationale Fußballwettbewerb für Nationalteams?",
    "answer": "FIFA-Weltmeisterschaft.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Spieler hat ein Volleyballteam auf dem Feld?",
    "answer": "6.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die deutsche Fußball-Bundesliga der Männer oberste Liga?",
    "answer": "1. Bundesliga.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Farbe hat die Karte bei einem Platzverweis im Fußball?",
    "answer": "Rot.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Starttechnik im Sprintblock?",
    "answer": "Tiefstart.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie lang ist die Marathonstrecke?",
    "answer": "42,195 Kilometer.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Sportart ist eng mit Michael Jordan verbunden?",
    "answer": "Basketball.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Punkte zählt ein Dreipunktewurf im Basketball?",
    "answer": "3.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der größte Tennisschläger-Wettbewerb auf Rasen in London?",
    "answer": "Wimbledon.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man den Torwart im Handball auch?",
    "answer": "Keeper.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Spieler hat ein Handballteam auf dem Feld?",
    "answer": "7.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die höchste Spielklasse im deutschen Handball der Männer?",
    "answer": "Handball-Bundesliga.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Sportart fährt man auf einer Eisbahn mit Besen?",
    "answer": "Curling.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der Wintersport mit Sprungschanze?",
    "answer": "Skispringen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Sätze braucht man meist zum Sieg im Damen-Tennis Grand Slam?",
    "answer": "2 Gewinnsätze.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man im Boxen einen Sieg vorzeitig durch Kampfunfähigkeit?",
    "answer": "K.o.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Sportart mit Bahnrad und Velodrom?",
    "answer": "Bahnradfahren.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Sportart betreibt man im Becken mit Bahnen?",
    "answer": "Schwimmen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie lang ist eine olympische Schwimmbahn?",
    "answer": "50 Meter.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Versuche hat man im Weitsprung normalerweise?",
    "answer": "6.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Disziplin gehört zum Zehnkampf?",
    "answer": "Stabhochsprung.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man die Rückgabe des Balls beim Tennis?",
    "answer": "Return.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt das große Radrennen in Frankreich?",
    "answer": "Tour de France.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Sportart spielt man mit Puck und Schläger auf Eis?",
    "answer": "Eishockey.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Spieler hat ein Eishockeyteam gleichzeitig auf dem Eis (inklusive Torwart)?",
    "answer": "6.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt das Turnier der besten europäischen Fußballvereine?",
    "answer": "UEFA Champions League.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Nation gewann die Fußball-WM 2014?",
    "answer": "Deutschland.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man den Aufschlag im Volleyball?",
    "answer": "Service.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der Schlag über Kopf im Badminton?",
    "answer": "Clear oder Smash.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man den Start bei Schwimmwettkämpfen?",
    "answer": "Sprungstart.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Löcher hat eine Standard-Golfrunde?",
    "answer": "18.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Kampfsportart aus Japan mit Würfen und Haltegriffen?",
    "answer": "Judo.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Kampfsportart nutzt Tritte und Schläge mit Schutzausrüstung?",
    "answer": "Taekwondo.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der wichtigste Vereinswettbewerb im deutschen Fußball?",
    "answer": "DFB-Pokal.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt das Endspiel im American Football?",
    "answer": "Super Bowl.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man ein Unentschieden im Schachwettkampf?",
    "answer": "Remis.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Sportart spielt Magnus Carlsen professionell?",
    "answer": "Schach.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Spieler hat ein Team beim Beachvolleyball?",
    "answer": "2.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der Schiedsrichterassistent mit Videobildern im Fußball?",
    "answer": "VAR.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Meter ist ein Elfmeterpunkt vom Tor entfernt?",
    "answer": "11 Meter.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Zone im Basketball unter dem Korb oft umgangssprachlich?",
    "answer": "Zone oder Paint.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was misst man beim Hochsprung?",
    "answer": "Die übersprungene Höhe.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Sportart verbindet Laufen, Schießen, Schwimmen, Fechten und Reiten?",
    "answer": "Moderner Fünfkampf.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die deutsche Frauenfußball-Liga auf höchstem Niveau?",
    "answer": "Frauen-Bundesliga.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man die jährliche Sportauszeichnung für Weltklasseleistungen in Deutschland?",
    "answer": "Sportler des Jahres.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "In welchem Jahr begann der Erste Weltkrieg?",
    "answer": "1914.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "In welchem Jahr endete der Erste Weltkrieg?",
    "answer": "1918.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wann begann der Zweite Weltkrieg in Europa?",
    "answer": "1939.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wann endete der Zweite Weltkrieg in Europa?",
    "answer": "1945.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wann fiel die Berliner Mauer?",
    "answer": "1989.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wann wurde Deutschland wiedervereinigt?",
    "answer": "1990.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",
    "answer": "Konrad Adenauer.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer war der erste Bundeskanzler des vereinigten Deutschlands nach 1990?",
    "answer": "Helmut Kohl.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Revolution fand 1789 in Frankreich statt?",
    "answer": "Die Französische Revolution.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer wurde 44 v. Chr. in Rom ermordet?",
    "answer": "Julius Caesar.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt das große Reich Karls des Großen?",
    "answer": "Fränkisches Reich.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wann wurde der Buchdruck mit beweglichen Lettern in Europa verbreitet?",
    "answer": "Im 15. Jahrhundert.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer gilt als Erfinder des modernen Buchdrucks in Europa?",
    "answer": "Johannes Gutenberg.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Zeit der großen Entdeckungsfahrten um 1500?",
    "answer": "Zeitalter der Entdeckungen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer erreichte 1492 Amerika aus europäischer Sicht?",
    "answer": "Christoph Kolumbus.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die religiöse Reformbewegung ab 1517 in Deutschland?",
    "answer": "Reformation.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer veröffentlichte 1517 die 95 Thesen?",
    "answer": "Martin Luther.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Epoche folgte auf das Mittelalter in Europa?",
    "answer": "Die Neuzeit.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der Friedensschluss von 1648 nach dem Dreißigjährigen Krieg?",
    "answer": "Westfälischer Friede.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Stadt war Zentrum der Oktoberrevolution 1917?",
    "answer": "Petrograd (heute Sankt Petersburg).",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie hieß das politische System in Deutschland von 1933 bis 1945?",
    "answer": "NS-Diktatur.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie hieß das Konzentrations- und Vernichtungssystem der NS-Zeit?",
    "answer": "Der Holocaust.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wann wurde die UNO gegründet?",
    "answer": "1945.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie hießen die beiden deutschen Staaten nach 1949?",
    "answer": "BRD und DDR.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wann wurde die DDR gegründet?",
    "answer": "1949.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wann wurde die BRD gegründet?",
    "answer": "1949.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Luftbrücke nach West-Berlin 1948/49?",
    "answer": "Berliner Luftbrücke.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was war der Kalte Krieg?",
    "answer": "Konflikt zwischen Ost und West ohne direkten Großkrieg.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der Vertrag zur europäischen Zusammenarbeit von 1992?",
    "answer": "Maastrichter Vertrag.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche antike Hochkultur baute Pyramiden?",
    "answer": "Das Alte Ägypten.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die antike Demokratie-Stadt in Griechenland?",
    "answer": "Athen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Mauer schützte China historisch vor Angriffen?",
    "answer": "Die Große Mauer.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Epoche mit Königen Ludwig XIV. und Versailles?",
    "answer": "Absolutismus.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was war die Industrialisierung?",
    "answer": "Umstellung auf maschinelle Produktion.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "In welchem Jahrhundert begann die Industrialisierung in England?",
    "answer": "Im 18. Jahrhundert.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der Zusammenschluss deutscher Staaten von 1871?",
    "answer": "Deutsches Kaiserreich.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer war Reichskanzler bei der Reichsgründung 1871?",
    "answer": "Otto von Bismarck.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie hieß die deutsche Demokratie zwischen 1919 und 1933?",
    "answer": "Weimarer Republik.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wann wurde das Grundgesetz der Bundesrepublik verkündet?",
    "answer": "1949.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt das historische Ereignis am 9. November 1938 in Deutschland?",
    "answer": "Novemberpogrome.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was war der Marshallplan?",
    "answer": "US-Aufbauhilfe für Europa nach dem Zweiten Weltkrieg.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Stadt war bis 1990 Hauptstadt der BRD?",
    "answer": "Bonn.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Stadt war Hauptstadt der DDR?",
    "answer": "Ost-Berlin.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt das Militärbündnis des Westens im Kalten Krieg?",
    "answer": "NATO.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie hieß das Militärbündnis des Ostblocks?",
    "answer": "Warschauer Pakt.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt der erste Mensch im All?",
    "answer": "Juri Gagarin.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "In welchem Jahr landeten erstmals Menschen auf dem Mond?",
    "answer": "1969.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wer war der erste Mensch auf dem Mond?",
    "answer": "Neil Armstrong.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die friedliche Protestbewegung in der DDR 1989?",
    "answer": "Friedliche Revolution.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welches Dokument regelt die Grundrechte in Deutschland?",
    "answer": "Das Grundgesetz.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 8 + 2 = ?",
    "answer": "10",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 9 + 4 = ?",
    "answer": "13",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 10 + 6 = ?",
    "answer": "16",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 11 + 8 = ?",
    "answer": "19",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 12 + 10 = ?",
    "answer": "22",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 13 + 12 = ?",
    "answer": "25",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 14 + 14 = ?",
    "answer": "28",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 15 + 16 = ?",
    "answer": "31",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 16 + 18 = ?",
    "answer": "34",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 17 + 20 = ?",
    "answer": "37",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 18 + 22 = ?",
    "answer": "40",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 19 + 24 = ?",
    "answer": "43",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 20 + 26 = ?",
    "answer": "46",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 21 + 28 = ?",
    "answer": "49",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 22 + 30 = ?",
    "answer": "52",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 23 + 32 = ?",
    "answer": "55",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 24 + 34 = ?",
    "answer": "58",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 25 + 36 = ?",
    "answer": "61",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 26 + 38 = ?",
    "answer": "64",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 27 + 40 = ?",
    "answer": "67",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 28 + 42 = ?",
    "answer": "70",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 29 + 44 = ?",
    "answer": "73",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 30 + 46 = ?",
    "answer": "76",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 31 + 48 = ?",
    "answer": "79",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 32 + 50 = ?",
    "answer": "82",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 103 - 12 = ?",
    "answer": "91",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 106 - 13 = ?",
    "answer": "93",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 109 - 14 = ?",
    "answer": "95",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 112 - 15 = ?",
    "answer": "97",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 115 - 16 = ?",
    "answer": "99",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 118 - 17 = ?",
    "answer": "101",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 121 - 18 = ?",
    "answer": "103",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 124 - 19 = ?",
    "answer": "105",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 127 - 20 = ?",
    "answer": "107",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 130 - 21 = ?",
    "answer": "109",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 133 - 22 = ?",
    "answer": "111",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 136 - 23 = ?",
    "answer": "113",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 139 - 24 = ?",
    "answer": "115",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 142 - 25 = ?",
    "answer": "117",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 145 - 26 = ?",
    "answer": "119",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 2 · 5 = ?",
    "answer": "10",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 3 · 6 = ?",
    "answer": "18",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 4 · 7 = ?",
    "answer": "28",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 5 · 8 = ?",
    "answer": "40",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 6 · 9 = ?",
    "answer": "54",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 7 · 10 = ?",
    "answer": "70",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 8 · 11 = ?",
    "answer": "88",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 9 · 12 = ?",
    "answer": "108",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Rechne: 10 · 13 = ?",
    "answer": "130",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Löse: 3x + 5 = 20. Wie groß ist x?",
    "answer": "x = 5.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Wortart ist 'laufen'?",
    "answer": "Verb.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Wortart ist 'schön'?",
    "answer": "Adjektiv.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Wortart ist 'der'?",
    "answer": "Artikel.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Wortart ist 'schnell'?",
    "answer": "Adverb oder Adjektiv je nach Verwendung.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie lautet der Nominativ von 'dem Hund'?",
    "answer": "Der Hund.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie lautet der Akkusativ von 'der Mann'?",
    "answer": "Den Mann.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie lautet der Dativ von 'die Frau'?",
    "answer": "Der Frau.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie lautet der Genitiv von 'das Kind'?",
    "answer": "Des Kindes.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie viele Fälle hat die deutsche Grammatik?",
    "answer": "Vier.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Nenne die vier Fälle auf Deutsch.",
    "answer": "Nominativ, Genitiv, Dativ, Akkusativ.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Grundform eines Verbs?",
    "answer": "Infinitiv.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man die Personalform eines Verbs?",
    "answer": "Konjugierte Form.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist das Präteritum von 'gehen'?",
    "answer": "Ging.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist das Perfekt von 'essen'?",
    "answer": "Hat gegessen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist das Plusquamperfekt von 'sehen'?",
    "answer": "Hatte gesehen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist das Futur I von 'lernen' (ich)?",
    "answer": "Ich werde lernen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie bildet man den Komparativ von 'klein'?",
    "answer": "Kleiner.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie bildet man den Superlativ von 'groß'?",
    "answer": "Am größten.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Subjekt im Satz?",
    "answer": "Der Satzteil, der handelt oder ist.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Prädikat?",
    "answer": "Die Verbform im Satz.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Objekt?",
    "answer": "Ergänzung zum Prädikat.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Satzart endet meist mit einem Fragezeichen?",
    "answer": "Fragesatz.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt ein Satz mit Aufforderung?",
    "answer": "Imperativsatz.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Hauptsatz?",
    "answer": "Ein selbstständiger Satz mit finitem Verb.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Nebensatz?",
    "answer": "Ein abhängiger Satz, oft mit Konjunktion.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Konjunktion leitet oft einen Nebensatz ein?",
    "answer": "Dass (z. B. auch weil, obwohl).",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wo steht das finite Verb im deutschen Hauptsatz meist?",
    "answer": "An zweiter Stelle.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wo steht das finite Verb im Nebensatz meist?",
    "answer": "Am Satzende.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Pronomen?",
    "answer": "Fürwort als Stellvertreter für Nomen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Nenne ein Personalpronomen in der 1. Person Singular.",
    "answer": "Ich.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Nenne das Possessivpronomen zu 'wir'.",
    "answer": "Unser.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Relativpronomen?",
    "answer": "Pronomen zur Einleitung von Relativsätzen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Nenne ein Relativpronomen.",
    "answer": "Der, die, das.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Mehrzahl von 'Haus'?",
    "answer": "Häuser.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie heißt die Mehrzahl von 'Mutter'?",
    "answer": "Mütter.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein zusammengesetztes Nomen?",
    "answer": "Ein Nomen aus mindestens zwei Wörtern.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist eine Präposition?",
    "answer": "Verhältniswort wie in, auf, unter.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Präposition verlangt immer den Dativ: 'mit' oder 'durch'?",
    "answer": "Mit.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welche Präposition verlangt den Akkusativ: 'für' oder 'bei'?",
    "answer": "Für.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist die direkte Rede?",
    "answer": "Wörtliche Wiedergabe mit Anführungszeichen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist die indirekte Rede?",
    "answer": "Wiedergabe einer Aussage in abhängiger Form.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welcher Modus wird in indirekter Rede häufig verwendet?",
    "answer": "Konjunktiv I.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Partizip II von 'schreiben'?",
    "answer": "Geschrieben.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein trennbares Verb?",
    "answer": "Verb mit abtrennbarer Vorsilbe wie aufstehen.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie lautet der Satz mit trennbarem Verb korrekt: 'Ich ... um 7 Uhr auf'?",
    "answer": "Ich stehe um 7 Uhr auf.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist eine Alliteration?",
    "answer": "Gleicher Anfangslaut bei benachbarten Wörtern.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Synonym?",
    "answer": "Bedeutungsähnliches Wort.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Was ist ein Antonym?",
    "answer": "Gegensätzliches Wort.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Wie nennt man die Steigerungsformen der Adjektive insgesamt?",
    "answer": "Komparation.",
    "taboo": []
  },
  {
    "category": "Quizfrage",
    "term": "Welches Satzzeichen steht am Ende eines Aussagesatzes?",
    "answer": "Der Punkt.",
    "taboo": []
  }
];

  databases.gesellschaft_kunst_geo_sport_geschichte_mathe_grammatik = {
    label: "Soziales · Kunst · Deutschland · Sport · Geschichte · Mathe · Grammatik (50er)",
    cards: quizCards,
  };
})();

