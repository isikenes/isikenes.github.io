const grid = $("#grid-container");
let count = 1;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const gridItem = document.createElement('div');
        gridItem.textContent = count.toString();
        gridItem.classList.add("grid-item");
        gridItem.addEventListener("click", handleClick);
        grid.append(gridItem);
        count++;
    }
}

const zahlen = [
    "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn",
    "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn", "zwanzig",
    "einundzwanzig", "zweiundzwanzig", "dreiundzwanzig", "vierundzwanzig", "fünfundzwanzig", "sechsundzwanzig", "siebenundzwanzig", "achtundzwanzig", "neunundzwanzig", "dreißig",
    "einunddreißig", "zweiunddreißig", "dreiunddreißig", "vierunddreißig", "fünfunddreißig", "sechsunddreißig", "siebenunddreißig", "achtunddreißig", "neununddreißig", "vierzig",
    "einundvierzig", "zweiundvierzig", "dreiundvierzig", "vierundvierzig", "fünfundvierzig", "sechsundvierzig", "siebenundvierzig", "achtundvierzig", "neunundvierzig", "fünfzig",
    "einundfünfzig", "zweiundfünfzig", "dreiundfünfzig", "vierundfünfzig", "fünfundfünfzig", "sechsundfünfzig", "siebenundfünfzig", "achtundfünfzig", "neunundfünfzig", "sechzig",
    "einundsechzig", "zweiundsechzig", "dreiundsechzig", "vierundsechzig", "fünfundsechzig", "sechsundsechzig", "siebenundsechzig", "achtundsechzig", "neunundsechzig", "siebzig",
    "einundsiebzig", "zweiundsiebzig", "dreiundsiebzig", "vierundsiebzig", "fünfundsiebzig", "sechsundsiebzig", "siebenundsiebzig", "achtundsiebzig", "neunundsiebzig", "achtzig",
    "einundachtzig", "zweiundachtzig", "dreiundachtzig", "vierundachtzig", "fünfundachtzig", "sechsundachtzig", "siebenundachtzig", "achtundachtzig", "neunundachtzig", "neunzig",
    "einundneunzig", "zweiundneunzig", "dreiundneunzig", "vierundneunzig", "fünfundneunzig", "sechsundneunzig", "siebenundneunzig", "achtundneunzig", "neunundneunzig", "hundert"
];

const puzzles = [
    [3, 4, 5, 6, 7, 8, 12, 19, 21, 31, 41, 51, 61, 71, 30, 40, 50, 60, 70, 80, 82, 89, 93, 94, 95, 96, 97, 98, 34, 37, 63, 68, 74, 75, 76, 77],
    [7,8,16,24,25,26,27,33,38,42,49,52,59,62,69,72,79,83,88,94,95,96,97],
    [4,5,6,7,8,13,19,22,27,28,29,31,36,41,45,51,55,61,66,72,77,78,79,83,89,94,95,96,97,98],
    [13,14,17,18,22,25,26,29,31,40,41,50,51,60,62,69,73,78,84,87,95,96]
];

let puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
let randomZahl;

function updateNumber() {
    if (puzzle.length === 0) {
        $(".grid-item").each(function () {
            var backgroundColor = $(this).css("background-color");
            $(this).css("color", backgroundColor);
        });
        $("#num").text("Wunderbar!");
        return;
    }
    let randomIndex = Math.floor(Math.random() * puzzle.length);

    randomZahl = puzzle[randomIndex];
    puzzle.splice(randomIndex, 1);
    $("#num").text(zahlen[randomZahl - 1]);
    console.log(randomZahl);
}
updateNumber();

function handleClick(event) {
    let clickedNum = event.target.textContent;
    if (clickedNum == randomZahl) {
        $(event.target).css("background-color", "black");
        updateNumber();
    }
}

