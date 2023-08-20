const mainBar = document.getElementById("main-bar");
window.addEventListener('scroll', () => {
    let height = document.body.scrollHeight - window.innerHeight;
    let scrollPos = document.documentElement.scrollTop;
    let width = (scrollPos / height) * 100;
    mainBar.style.width = `${width}%`;
});

function clockize(string) {
    if (string <= 9) {
        return "0" + string;
    } else {
        return "" + string;
    }
}

var digits = document.querySelectorAll(".digit");
function clock() {
    var date = new Date();
    var str = clockize(date.getHours()) + "p" + clockize(date.getMinutes()) + "p" + clockize(date.getSeconds());
    for (var i = 0; i < digits.length; i++) {
        digits[i].src = 'img/' + str[i] + '.png';
    }
    setTimeout(clock, 1000);
}
clock();

function refreshColor() {
    var list = document.querySelectorAll(".colorbox");
    var list2 = document.querySelectorAll(".colortext");
    for (var i = 0; i < list.length; i++) {
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        var color = 'rgb(' + r + ',' + g + ',' + b + ')';
        list[i].style.backgroundColor = color;
        list2[i].textContent = rgb2hex(color);
    }
}
refreshColor();

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}


function copyColor(x) {
    var text = document.querySelectorAll(".colortext")[x].textContent;
    navigator.clipboard.writeText(text);
}

document.getElementById('calc-form').addEventListener('submit', function (event) {
    event.preventDefault();
});

function append(symbol) {
    if (document.getElementById('result').value == 'Error') {
        document.getElementById('result').value = '';
    }
    document.getElementById('result').value += symbol;
}

function calculate() {
    var result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}

var calc = document.getElementById("calc");
var calcButtons = document.querySelectorAll(".neon");

function calcColor() {
    var color = `hsla(${~~(360 * Math.random())}, 72%,  72%, 1)`;
    calc.style.borderColor = color;
    calc.style.boxShadow = `0 0 20px ${color}`;
    for (var i = 0; i < calcButtons.length; i++) {
        calcButtons[i].style.borderColor = color;
        calcButtons[i].style.boxShadow = `0 0 8px ${color}`;
    }

    setTimeout(calcColor, 2000);
}
calcColor();

const xoxText = document.getElementById("xox-text");
let isPlaying = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winnings = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const cells = document.querySelectorAll(".xox-cell");
cells.forEach(cell => cell.addEventListener('click', handleXOXClick));

function handleXOXClick(e) {
    const clickedCell = e.target;
    const clickedIndex = parseInt(clickedCell.getAttribute("data-cell-index"));

    if (gameState[clickedIndex] !== "" || !isPlaying)
        return;

    gameState[clickedIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

    checkWin();
    if (isPlaying)
        aiPlays();

}

function checkWin() {
    for (let i = 0; i < winnings.length; i++) {
        let win = winnings[i];
        if (gameState[win[0]] === currentPlayer && gameState[win[0]] === gameState[win[1]] && gameState[win[1]] === gameState[win[2]]) {
            xoxText.style.visibility = "visible";
            xoxText.innerText = currentPlayer + " won!";

            cells[win[0]].style.backgroundColor = "#7efff5";
            cells[win[1]].style.backgroundColor = "#7efff5";
            cells[win[2]].style.backgroundColor = "#7efff5";
            isPlaying = false;
            return;
        }
    }

    if (!gameState.includes("")) {
        xoxText.style.visibility = "visible";
        xoxText.innerText = "Draw!";

        isPlaying = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function aiPlays() {
    var cellRank = [3, 2, 3, 2, 4, 2, 3, 2, 3];

    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] !== "") {
            cellRank[i] -= 99;
        }
    }

    for (let i = 0; i < winnings.length; i++) {
        var a = winnings[i][0];
        var b = winnings[i][1];
        var c = winnings[i][2];

        if (gameState[a] === gameState[b] && gameState[a] !== "" && gameState[c] === "") {
            cellRank[c] += 10;
        }
        if (gameState[a] === gameState[c] && gameState[a] !== "" && gameState[b] === "") {
            cellRank[b] += 10;
        }
        if (gameState[b] === gameState[c] && gameState[b] !== "" && gameState[a] === "") {
            cellRank[a] += 10;
        }

        var bestCell = -1;
        var highest = -999;

        for (var j = 0; j < gameState.length; j++) {
            if (cellRank[j] > highest) {
                highest = cellRank[j];
                bestCell = j;
            }
        }

    }

    gameState[bestCell] = "O";
    cells[bestCell].innerHTML = "O";

    checkWin();
}

function restartXOX() {
    isPlaying = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    xoxText.style.visibility = "hidden";
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.style.backgroundColor = "";
    });
}

//Wordle
const wordleWords = ["which", "their", "there", "would", "other", "these", "about", "first", "could", "after", "those", "where", "being", "under", "great", "state", "world", "three", "while", "found", "might", "still", "right", "place", "every", "power", "since", "never", "order", "water", "small", "shall", "large", "point", "again", "often", "among", "house", "woman", "group", "think", "human", "later", "until", "whole", "early", "above", "study", "table", "court", "death", "level"];
var randomWord = wordleWords[(Math.round(Math.random() * wordleWords.length)) - 1].toUpperCase();
const wordleInput = document.getElementById("wordle-input");
const wordleBoxes = document.querySelectorAll(".wordle-box");
var wordleGuess = 0;
const wordleText = document.getElementById("wordle-text");

function checkWord() {
    if (wordleInput.value.length !== 5) {
        return;
    }
    let word = wordleInput.value.toUpperCase();
    for (let i = 0; i < 5; i++) {
        wordleBoxes[i + wordleGuess * 5].innerHTML = word[i];
        if (word[i] === randomWord[i]) {
            wordleBoxes[i + wordleGuess * 5].style.backgroundColor = "#2ed573";
        } else if (randomWord.includes(word[i])) {
            wordleBoxes[i + wordleGuess * 5].style.backgroundColor = "#eccc68";
        }
    }
    wordleGuess++;
    wordleInput.value = "";
    if (randomWord === word) {
        document.getElementById("wordle-checker-div").style.display = "none";
        document.getElementById("wordle-restart").style.display = "block";
    } else if (wordleGuess == 6) {
        document.getElementById("wordle-checker-div").style.display = "none";
        wordleText.style.display = "block";
        wordleText.innerText = randomWord;
        document.getElementById("wordle-restart").style.display = "block";
    }
}

function restartWordle() {
    wordleBoxes.forEach(box => {
        box.style.backgroundColor = "";
        box.innerHTML = "";
    })
    wordleGuess = 0;
    randomWord = wordleWords[Math.round(Math.random() * wordleWords.length)].toUpperCase();
    document.getElementById("wordle-checker-div").style.display = "block";
    wordleText.style.display = "none";
    document.getElementById("wordle-restart").style.display = "none";
}

//TO-DO LIST
const newToDo = document.getElementById("todo-input");
const todos = document.querySelector(".todos");
todos.innerHTML = localStorage.getItem("todos");

function addNewToDo() {
    const liHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${newToDo.value}</span>
    <i class="fa-regular fa-trash-can delete-todo"></i></li>`
    todos.innerHTML += liHTML;
    localStorage.setItem("todos", todos.innerHTML);
    addToDoDeletion();
    newToDo.value = "";
}

function addToDoDeletion() {
    document.querySelectorAll(".delete-todo").forEach(del => {
        del.addEventListener("click", e => {
            del.parentElement.remove();
            localStorage.setItem("todos", todos.innerHTML);
        })
    });
}
addToDoDeletion();