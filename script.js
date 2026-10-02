const defaultFlashcards = [
    { italian: "chi", german: "wer", correctCount: 0 },
    { italian: "che cosa / cosa", german: "was", correctCount: 0 },
    { italian: "come", german: "wie", correctCount: 0 },
    { italian: "dove", german: "wo", correctCount: 0 },
    { italian: "perché", german: "warum / weil", correctCount: 0 },
    { italian: "quanto / quanti", german: "wie viel / wie viele", correctCount: 0 },
    { italian: "forse", german: "vielleicht", correctCount: 0 },
    { italian: "magari", german: "vielleicht / hoffentlich", correctCount: 0 },
    { italian: "tutto", german: "alles", correctCount: 0 },
    { italian: "entrambi", german: "beide", correctCount: 0 },
    { italian: "nessuno", german: "niemand", correctCount: 0 },
    { italian: "sempre", german: "immer", correctCount: 0 },
    { italian: "mai", german: "nie", correctCount: 0 },
    { italian: "ancora", german: "noch / wieder", correctCount: 0 },
    { italian: "anche", german: "auch", correctCount: 0 },
    { italian: "insieme", german: "zusammen", correctCount: 0 },
    { italian: "subito", german: "sofort", correctCount: 0 },
    { italian: "spesso", german: "oft", correctCount: 0 },
    { italian: "a volte", german: "manchmal", correctCount: 0 },
    { italian: "prima", german: "vorher", correctCount: 0 },
    { italian: "dopo", german: "danach / nach", correctCount: 0 },
    { italian: "e poi", german: "und dann", correctCount: 0 },
    { italian: "di più", german: "mehr", correctCount: 0 },
    { italian: "cioè", german: "das heißt / ich meine", correctCount: 0 },
    { italian: "ma", german: "aber", correctCount: 0 },
    { italian: "con", german: "mit", correctCount: 0 },
    { italian: "per", german: "für / durch", correctCount: 0 },
    { italian: "su", german: "auf / über", correctCount: 0 },
    { italian: "a", german: "zu / an / in", correctCount: 0 },
    { italian: "in", german: "in", correctCount: 0 },
    { italian: "da", german: "von / bei / seit", correctCount: 0 },
    { italian: "via", german: "weg", correctCount: 0 },

    { italian: "oggi", german: "heute", correctCount: 0 },
    { italian: "ieri", german: "gestern", correctCount: 0 },
    { italian: "domani", german: "morgen", correctCount: 0 },
    { italian: "stasera", german: "heute Abend", correctCount: 0 },
    { italian: "questa mattina", german: "heute Morgen", correctCount: 0 },
    { italian: "mattina", german: "Morgen / Vormittag", correctCount: 0 },
    { italian: "pomeriggio", german: "Nachmittag", correctCount: 0 },
    { italian: "mezzogiorno", german: "Mittag", correctCount: 0 },
    { italian: "giorno", german: "Tag", correctCount: 0 },
    { italian: "anno", german: "Jahr", correctCount: 0 },
    { italian: "anni", german: "Jahre", correctCount: 0 },
    { italian: "fine settimana", german: "Wochenende", correctCount: 0 },
    { italian: "Capodanno", german: "Neujahr", correctCount: 0 },
    { italian: "Natale", german: "Weihnachten", correctCount: 0 },

    { italian: "lunedì", german: "Montag", correctCount: 0 },
    { italian: "martedì", german: "Dienstag", correctCount: 0 },
    { italian: "mercoledì", german: "Mittwoch", correctCount: 0 },
    { italian: "giovedì", german: "Donnerstag", correctCount: 0 },
    { italian: "venerdì", german: "Freitag", correctCount: 0 },
    { italian: "sabato", german: "Samstag", correctCount: 0 },
    { italian: "domenica", german: "Sonntag", correctCount: 0 },

    { italian: "uomo", german: "Mann", correctCount: 0 },
    { italian: "donna", german: "Frau", correctCount: 0 },
    { italian: "bambino", german: "Kind", correctCount: 0 },
    { italian: "sorella", german: "Schwester", correctCount: 0 },
    { italian: "fratello", german: "Bruder", correctCount: 0 },
    { italian: "coinquilina", german: "Mitbewohnerin", correctCount: 0 },
    { italian: "coinquilino", german: "Mitbewohner", correctCount: 0 },
    { italian: "gatto", german: "Katze", correctCount: 0 },
    { italian: "cane", german: "Hund", correctCount: 0 },
    { italian: "cavallo", german: "Pferd", correctCount: 0 },
    { italian: "uccello", german: "Vogel", correctCount: 0 },
    { italian: "scimmia", german: "Affe", correctCount: 0 },
    { italian: "tartaruga", german: "Schildkröte", correctCount: 0 },
    { italian: "panda", german: "Panda", correctCount: 0 },

    { italian: "testa", german: "Kopf", correctCount: 0 },
    { italian: "naso", german: "Nase", correctCount: 0 },
    { italian: "bocca", german: "Mund", correctCount: 0 },
    { italian: "occhi", german: "Augen", correctCount: 0 },
    { italian: "pelle", german: "Haut", correctCount: 0 },
    { italian: "scheletro", german: "Skelett", correctCount: 0 },

    { italian: "cibo", german: "Essen", correctCount: 0 },
    { italian: "soldi", german: "Geld", correctCount: 0 },
    { italian: "argento", german: "Silber", correctCount: 0 },
    { italian: "oro", german: "Gold", correctCount: 0 },
    { italian: "semaforo", german: "Ampel", correctCount: 0 },
    { italian: "università", german: "Universität", correctCount: 0 },
    { italian: "palestra", german: "Fitnessstudio", correctCount: 0 },
    { italian: "spiaggia", german: "Strand", correctCount: 0 },
    { italian: "negozio", german: "Geschäft", correctCount: 0 },
    { italian: "mercato", german: "Markt", correctCount: 0 },
    { italian: "strada", german: "Straße", correctCount: 0 },
    { italian: "bagno", german: "Badezimmer", correctCount: 0 },
    { italian: "porta", german: "Tür", correctCount: 0 },
    { italian: "chiave", german: "Schlüssel", correctCount: 0 },
    { italian: "scarpe", german: "Schuhe", correctCount: 0 },
    { italian: "calzini", german: "Socken", correctCount: 0 },
    { italian: "pantaloni", german: "Hose", correctCount: 0 },
    { italian: "anello", german: "Ring", correctCount: 0 },
    { italian: "collana", german: "Halskette", correctCount: 0 },
    { italian: "penna", german: "Stift", correctCount: 0 },
    { italian: "libro", german: "Buch", correctCount: 0 },
    { italian: "telefono", german: "Telefon", correctCount: 0 },
    { italian: "computer", german: "Computer", correctCount: 0 },
    { italian: "giacca", german: "Jacke", correctCount: 0 },
    { italian: "divano", german: "Sofa", correctCount: 0 },
    { italian: "frigorifero", german: "Kühlschrank", correctCount: 0 },
    { italian: "microonde", german: "Mikrowelle", correctCount: 0 },
    { italian: "affitto", german: "Miete", correctCount: 0 },
    { italian: "arma", german: "Waffe", correctCount: 0 },
    { italian: "luce", german: "Licht", correctCount: 0 },
    { italian: "fuoco", german: "Feuer", correctCount: 0 },
    { italian: "cielo", german: "Himmel", correctCount: 0 },
    { italian: "montagna", german: "Berg", correctCount: 0 },
    { italian: "fiore", german: "Blume", correctCount: 0 },
    { italian: "mela", german: "Apfel", correctCount: 0 },
    { italian: "anguria", german: "Wassermelone", correctCount: 0 },
    { italian: "verdure", german: "Gemüse", correctCount: 0 },
    { italian: "bevanda", german: "Getränk", correctCount: 0 },
    { italian: "carne di maiale", german: "Schweinefleisch", correctCount: 0 },
    { italian: "sorgente termale", german: "heiße Quelle", correctCount: 0 },
    { italian: "viscosa", german: "Viskose", correctCount: 0 },

    { italian: "pensiero", german: "Gedanke", correctCount: 0 },
    { italian: "ricordo", german: "Erinnerung", correctCount: 0 },
    { italian: "sogno", german: "Traum", correctCount: 0 },
    { italian: "desiderio", german: "Wunsch", correctCount: 0 },
    { italian: "speranza", german: "Hoffnung", correctCount: 0 },
    { italian: "gioia", german: "Freude", correctCount: 0 },
    { italian: "tristezza", german: "Traurigkeit", correctCount: 0 },
    { italian: "paura", german: "Angst", correctCount: 0 },
    { italian: "umore", german: "Stimmung", correctCount: 0 },
    { italian: "colpa", german: "Schuld", correctCount: 0 },
    { italian: "ragione", german: "Grund / Recht", correctCount: 0 },
    { italian: "motivo", german: "Grund", correctCount: 0 },
    { italian: "obiettivo", german: "Ziel", correctCount: 0 },
    { italian: "scopo", german: "Zweck / Ziel", correctCount: 0 },
    { italian: "vita", german: "Leben", correctCount: 0 },
    { italian: "possibilità", german: "Möglichkeit", correctCount: 0 },
    { italian: "errore", german: "Fehler", correctCount: 0 },
    { italian: "bisogno", german: "Bedürfnis / Bedarf", correctCount: 0 },
    { italian: "tempo libero", german: "Freizeit", correctCount: 0 },
    { italian: "sapore", german: "Geschmack", correctCount: 0 },
    { italian: "sete", german: "Durst", correctCount: 0 },

    { italian: "essere", german: "sein", correctCount: 0 },
    { italian: "avere", german: "haben", correctCount: 0 },
    { italian: "fare", german: "machen / tun", correctCount: 0 },
    { italian: "andare", german: "gehen / fahren", correctCount: 0 },
    { italian: "andare via", german: "weggehen", correctCount: 0 },
    { italian: "uscire", german: "rausgehen / ausgehen", correctCount: 0 },
    { italian: "venire", german: "kommen", correctCount: 0 },
    { italian: "vedere", german: "sehen", correctCount: 0 },
    { italian: "conoscere", german: "kennen", correctCount: 0 },
    { italian: "sapere", german: "wissen", correctCount: 0 },
    { italian: "capire", german: "verstehen", correctCount: 0 },
    { italian: "pensare", german: "denken", correctCount: 0 },
    { italian: "credere", german: "glauben", correctCount: 0 },
    { italian: "riflettere", german: "nachdenken", correctCount: 0 },
    { italian: "ricordarsi", german: "sich erinnern", correctCount: 0 },
    { italian: "dimenticare", german: "vergessen", correctCount: 0 },
    { italian: "volere", german: "wollen", correctCount: 0 },
    { italian: "potere", german: "können", correctCount: 0 },
    { italian: "dovere", german: "müssen", correctCount: 0 },
    { italian: "piacere", german: "gefallen / mögen", correctCount: 0 },
    { italian: "amare", german: "lieben", correctCount: 0 },
    { italian: "odiare", german: "hassen", correctCount: 0 },
    { italian: "sentire", german: "hören / fühlen", correctCount: 0 },
    { italian: "parlare", german: "sprechen", correctCount: 0 },
    { italian: "leggere", german: "lesen", correctCount: 0 },
    { italian: "imparare", german: "lernen", correctCount: 0 },
    { italian: "studiare", german: "lernen / studieren", correctCount: 0 },
    { italian: "lavorare", german: "arbeiten", correctCount: 0 },
    { italian: "vivere", german: "leben", correctCount: 0 },
    { italian: "incontrare", german: "treffen", correctCount: 0 },
    { italian: "comprare", german: "kaufen", correctCount: 0 },
    { italian: "pagare", german: "bezahlen", correctCount: 0 },
    { italian: "ordinare", german: "bestellen", correctCount: 0 },
    { italian: "mangiare", german: "essen", correctCount: 0 },
    { italian: "bere", german: "trinken", correctCount: 0 },
    { italian: "aprire", german: "öffnen", correctCount: 0 },
    { italian: "chiudere", german: "schließen", correctCount: 0 },
    { italian: "respirare", german: "atmen", correctCount: 0 },
    { italian: "correre", german: "laufen", correctCount: 0 },
    { italian: "camminare", german: "gehen / spazieren", correctCount: 0 },
    { italian: "ballare", german: "tanzen", correctCount: 0 },
    { italian: "disegnare", german: "zeichnen", correctCount: 0 },
    { italian: "dipingere", german: "malen", correctCount: 0 },
    { italian: "tatuare", german: "tätowieren", correctCount: 0 },
    { italian: "provare", german: "versuchen / ausprobieren", correctCount: 0 },
    { italian: "continuare", german: "weitermachen", correctCount: 0 },
    { italian: "dare", german: "geben", correctCount: 0 },
    { italian: "esercitarsi", german: "üben", correctCount: 0 },
    { italian: "rilassarsi", german: "sich entspannen", correctCount: 0 },
    { italian: "rimanere", german: "bleiben", correctCount: 0 },
    { italian: "commettere", german: "begehen", correctCount: 0 },
    { italian: "dormire", german: "schlafen", correctCount: 0 },

    { italian: "parlando", german: "sprechend / indem man spricht", correctCount: 0 },
    { italian: "mangiando", german: "essend / indem man isst", correctCount: 0 },
    { italian: "studiando", german: "lernend / studierend", correctCount: 0 },
    { italian: "leggendo", german: "lesend", correctCount: 0 },
    { italian: "vedendo", german: "sehend", correctCount: 0 },
    { italian: "uscendo", german: "rausgehend / indem man rausgeht", correctCount: 0 },
    { italian: "dormendo", german: "schlafend", correctCount: 0 },

    { italian: "bello", german: "schön", correctCount: 0 },
    { italian: "carino", german: "süß / nett", correctCount: 0 },
    { italian: "grande", german: "groß", correctCount: 0 },
    { italian: "piccolo", german: "klein", correctCount: 0 },
    { italian: "nuovo", german: "neu", correctCount: 0 },
    { italian: "caro", german: "teuer", correctCount: 0 },
    { italian: "economico", german: "günstig", correctCount: 0 },
    { italian: "facile", german: "einfach", correctCount: 0 },
    { italian: "difficile", german: "schwierig", correctCount: 0 },
    { italian: "forte", german: "stark / laut", correctCount: 0 },
    { italian: "lento", german: "langsam", correctCount: 0 },
    { italian: "lentamente", german: "langsam", correctCount: 0 },
    { italian: "veloce", german: "schnell", correctCount: 0 },
    { italian: "piano", german: "leise / langsam", correctCount: 0 },
    { italian: "piano piano", german: "langsam / nach und nach", correctCount: 0 },
    { italian: "rumoroso", german: "laut", correctCount: 0 },
    { italian: "silenzioso", german: "leise / still", correctCount: 0 },
    { italian: "caldo", german: "warm / heiß", correctCount: 0 },
    { italian: "freddo", german: "kalt", correctCount: 0 },
    { italian: "dolce", german: "süß / sanft", correctCount: 0 },
    { italian: "acido", german: "sauer", correctCount: 0 },
    { italian: "amaro", german: "bitter", correctCount: 0 },
    { italian: "piccante", german: "scharf", correctCount: 0 },
    { italian: "cattivo", german: "schlecht / gemein", correctCount: 0 },
    { italian: "malvagio", german: "böse / niederträchtig", correctCount: 0 },
    { italian: "buffo", german: "lustig / komisch", correctCount: 0 },
    { italian: "strano", german: "seltsam", correctCount: 0 },
    { italian: "pazzo", german: "verrückt", correctCount: 0 },
    { italian: "pazzesco", german: "verrückt / unglaublich", correctCount: 0 },
    { italian: "stupido", german: "dumm", correctCount: 0 },
    { italian: "noioso", german: "langweilig", correctCount: 0 },
    { italian: "triste", german: "traurig", correctCount: 0 },
    { italian: "felice", german: "glücklich", correctCount: 0 },
    { italian: "gioioso", german: "fröhlich", correctCount: 0 },
    { italian: "stanco", german: "müde", correctCount: 0 },
    { italian: "occupato", german: "beschäftigt", correctCount: 0 },
    { italian: "libero", german: "frei", correctCount: 0 },
    { italian: "inutile", german: "nutzlos", correctCount: 0 },
    { italian: "rotto", german: "kaputt", correctCount: 0 },
    { italian: "aperto", german: "offen", correctCount: 0 },
    { italian: "vuoto", german: "leer", correctCount: 0 },
    { italian: "scarico", german: "leer / entladen", correctCount: 0 },
    { italian: "sporco", german: "schmutzig", correctCount: 0 },
    { italian: "pulito", german: "sauber", correctCount: 0 },
    { italian: "scuro", german: "dunkel", correctCount: 0 },
    { italian: "troppo", german: "zu / zu viel", correctCount: 0 },
    { italian: "male", german: "schlecht / unwohl", correctCount: 0 },

    { italian: "rosso", german: "rot", correctCount: 0 },
    { italian: "bianco", german: "weiß", correctCount: 0 },
    { italian: "verde", german: "grün", correctCount: 0 },
    { italian: "giallo", german: "gelb", correctCount: 0 },
    { italian: "nero", german: "schwarz", correctCount: 0 },
    { italian: "blu", german: "blau", correctCount: 0 },
    { italian: "arancione", german: "orange", correctCount: 0 }

];


// ----------------------------
// KARTEN LADEN
// ----------------------------

let flashcards;

const savedCards =
    localStorage.getItem("italianFlashcards");

if (savedCards) {

    flashcards = JSON.parse(savedCards);

    defaultFlashcards.forEach(function(defaultCard) {

        const alreadyExists =
            flashcards.some(function(savedCard) {

                return (
                    savedCard.italian.toLowerCase()
                    ===
                    defaultCard.italian.toLowerCase()
                );

            });

        if (!alreadyExists) {

            flashcards.push({
                italian: defaultCard.italian,
                german: defaultCard.german,
                correctCount: 0
            });

        }

    });

    localStorage.setItem(
        "italianFlashcards",
        JSON.stringify(flashcards)
    );

} else {

    flashcards = [...defaultFlashcards];

    localStorage.setItem(
        "italianFlashcards",
        JSON.stringify(flashcards)
    );
}


// ----------------------------
// VARIABLEN
// ----------------------------

let currentCardIndex = 0;

let correctAnswers = 0;
let wrongAnswers = 0;

let answered = false;


// ----------------------------
// HTML ELEMENTE
// ----------------------------

const learnView =
    document.getElementById("learnView");

const addView =
    document.getElementById("addView");

const listView =
    document.getElementById("listView");


const learnViewButton =
    document.getElementById("learnViewButton");

const addViewButton =
    document.getElementById("addViewButton");

const listViewButton =
    document.getElementById("listViewButton");


const question =
    document.getElementById("question");

const answerInput =
    document.getElementById("answerInput");

const feedback =
    document.getElementById("feedback");

const cardProgress =
    document.getElementById("cardProgress");


const checkButton =
    document.getElementById("checkButton");

const nextButton =
    document.getElementById("nextButton");

const shuffleButton =
    document.getElementById("shuffleButton");


const direction =
    document.getElementById("direction");


const correctScore =
    document.getElementById("correctScore");

const wrongScore =
    document.getElementById("wrongScore");


const activeCards =
    document.getElementById("activeCards");

const learnedCards =
    document.getElementById("learnedCards");


const newItalian =
    document.getElementById("newItalian");

const newGerman =
    document.getElementById("newGerman");

const addCardButton =
    document.getElementById("addCardButton");

const addMessage =
    document.getElementById("addMessage");


const cardList =
    document.getElementById("cardList");

const exportButton =
    document.getElementById("exportButton");

const importFile =
    document.getElementById("importFile");

// ----------------------------
// SPEICHERN
// ----------------------------

function saveCards() {

    localStorage.setItem(
        "italianFlashcards",
        JSON.stringify(flashcards)
    );

}


// ----------------------------
// AKTIVE KARTEN
// ----------------------------

function getActiveCards() {

    return flashcards.filter(
        card => card.correctCount < 3
    );

}


// ----------------------------
// STATISTIK
// ----------------------------

function updateStatistics() {

    const active =
        getActiveCards();

    const learned =
        flashcards.filter(
            card => card.correctCount >= 3
        );

    activeCards.textContent =
        active.length;

    learnedCards.textContent =
        learned.length;

}


// ----------------------------
// KARTE ZEIGEN
// ----------------------------

function showCard() {

    const active =
        getActiveCards();

    updateStatistics();

    if (active.length === 0) {

        question.textContent =
            "Alle Karten gelernt! 🎉";

        answerInput.style.display =
            "none";

        checkButton.style.display =
            "none";

        nextButton.style.display =
            "none";

        cardProgress.textContent =
            "";

        return;
    }


    answerInput.style.display =
        "block";

    checkButton.style.display =
        "inline-block";

    nextButton.style.display =
        "inline-block";


    if (
        currentCardIndex >=
        active.length
    ) {

        currentCardIndex = 0;

    }


    answered = false;

    feedback.textContent = "";
    feedback.className = "";

    answerInput.value = "";


    const card =
        active[currentCardIndex];


    if (
        direction.value ===
        "it-de"
    ) {

        question.textContent =
            card.italian;

    } else {

        question.textContent =
            card.german;

    }


    cardProgress.textContent =
        "Diese Karte: "
        + card.correctCount
        + " / 3 richtig";


    answerInput.focus();

}


// ----------------------------
// ANTWORT PRÜFEN
// ----------------------------

function checkAnswer() {

    if (answered) {
        return;
    }


    const userAnswer =
        answerInput
            .value
            .trim()
            .toLowerCase();


    if (userAnswer === "") {
        return;
    }


    const active =
        getActiveCards();

    const card =
        active[currentCardIndex];


    let correctAnswer;


    if (
        direction.value ===
        "it-de"
    ) {

        correctAnswer =
            card.german;

    } else {

        correctAnswer =
            card.italian;

    }


    if (
        userAnswer ===
        correctAnswer.toLowerCase()
    ) {

        card.correctCount++;

        correctAnswers++;

        correctScore.textContent =
            correctAnswers;


        if (
            card.correctCount >= 3
        ) {

            feedback.textContent =
                "✓ Richtig! Karte gelernt und aussortiert.";

        } else {

            feedback.textContent =
                "✓ Richtig!";

        }

        feedback.className =
            "correct";


    } else {

        wrongAnswers++;

        wrongScore.textContent =
            wrongAnswers;

        feedback.textContent =
            "✗ Falsch. Richtig wäre: "
            + correctAnswer;

        feedback.className =
            "wrong";

    }


    cardProgress.textContent =
        "Diese Karte: "
        + card.correctCount
        + " / 3 richtig";


    saveCards();

    updateStatistics();

    answered = true;

}


// ----------------------------
// NÄCHSTE KARTE
// ----------------------------

function nextCard() {

    currentCardIndex++;

    showCard();

}


// ----------------------------
// MISCHEN
// ----------------------------

function shuffleCards() {

    for (
        let i =
            flashcards.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random()
                * (i + 1)
            );


        [
            flashcards[i],
            flashcards[randomIndex]
        ]
        =
        [
            flashcards[randomIndex],
            flashcards[i]
        ];

    }


    currentCardIndex = 0;

    saveCards();

    showCard();

}


// ----------------------------
// KARTE HINZUFÜGEN
// ----------------------------

function addCard() {

    const italian =
        newItalian.value.trim();

    const german =
        newGerman.value.trim();


    if (
        italian === ""
        ||
        german === ""
    ) {

        addMessage.textContent =
            "Bitte beide Felder ausfüllen.";

        return;
    }


    const newCard = {

        italian: italian,

        german: german,

        correctCount: 0

    };


    flashcards.push(newCard);

    saveCards();


    newItalian.value = "";
    newGerman.value = "";


    addMessage.textContent =
        "Karte wurde hinzugefügt.";

    updateStatistics();

}


// ----------------------------
// LISTE ANZEIGEN
// ----------------------------

function renderCardList() {

    cardList.innerHTML = "";


    flashcards.forEach(
        function(card) {

            const item =
                document.createElement("div");

            item.className =
                "listItem";


            const words =
                document.createElement("div");

            words.className =
                "words";

            words.textContent =
                card.italian
                + " → "
                + card.german;


            const status =
                document.createElement("div");

            status.className =
                "status";


            if (
                card.correctCount >= 3
            ) {

                status.textContent =
                    "✓ Gelernt";

                status.classList.add(
                    "learned"
                );

            } else {

                status.textContent =
                    card.correctCount
                    + " / 3 richtig";

            }


            item.appendChild(words);
            item.appendChild(status);

            cardList.appendChild(item);

        }
    );

}


// ----------------------------
// SEITEN WECHSELN
// ----------------------------

function showView(view) {

    learnView.classList.add(
        "hidden"
    );

    addView.classList.add(
        "hidden"
    );

    listView.classList.add(
        "hidden"
    );


    if (view === "learn") {

        learnView.classList.remove(
            "hidden"
        );

        showCard();

    }


    if (view === "add") {

        addView.classList.remove(
            "hidden"
        );

        newItalian.focus();

    }


    if (view === "list") {

        listView.classList.remove(
            "hidden"
        );

        renderCardList();

    }

}


// ----------------------------
// BUTTONS
// ----------------------------

learnViewButton.addEventListener(
    "click",
    function() {

        showView("learn");

    }
);


addViewButton.addEventListener(
    "click",
    function() {

        showView("add");

    }
);


listViewButton.addEventListener(
    "click",
    function() {

        showView("list");

    }
);


checkButton.addEventListener(
    "click",
    checkAnswer
);


nextButton.addEventListener(
    "click",
    nextCard
);


shuffleButton.addEventListener(
    "click",
    shuffleCards
);


addCardButton.addEventListener(
    "click",
    addCard
);


direction.addEventListener(
    "change",
    showCard
);


// ----------------------------
// ENTER-TASTE
// ----------------------------

answerInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Enter"
        ) {

            if (answered) {

                nextCard();

            } else {

                checkAnswer();

            }

        }

    }
);


// ----------------------------
// START
// ----------------------------

updateStatistics();

showCard();

function exportProgress() {

    const data =
        JSON.stringify(
            flashcards,
            null,
            2
        );

    const blob =
        new Blob(
            [data],
            {
                type: "application/json"
            }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "italienisch-karteikarten-backup.json";

    link.click();

    URL.revokeObjectURL(url);
}
function exportProgress() {

    const data =
        JSON.stringify(
            flashcards,
            null,
            2
        );

    const blob =
        new Blob(
            [data],
            {
                type: "application/json"
            }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "italienisch-karteikarten-backup.json";

    link.click();

    URL.revokeObjectURL(url);
}


// IMPORT

function importProgress(event) {

    const file =
        event.target.files[0];

    if (!file) {
        return;
    }

    const reader =
        new FileReader();

    reader.onload =
        function() {

            try {

                const importedCards =
                    JSON.parse(
                        reader.result
                    );

                if (
                    !Array.isArray(
                        importedCards
                    )
                ) {

                    alert(
                        "Ungültige Datei."
                    );

                    return;
                }

                flashcards =
                    importedCards;

                saveCards();

                currentCardIndex = 0;

                updateStatistics();

                renderCardList();

                showCard();

                alert(
                    "Import erfolgreich."
                );

            } catch (error) {

                alert(
                    "Die Datei konnte nicht gelesen werden."
                );

            }

        };

    reader.readAsText(file);
}
exportButton.addEventListener(
    "click",
    exportProgress
);

importFile.addEventListener(
    "change",
    importProgress
);