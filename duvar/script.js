// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuTrh9mbEMGN0cAmUjZJnYE17HyCAGq8w",
  authDomain: "duvar-f397a.firebaseapp.com",
  projectId: "duvar-f397a",
  storageBucket: "duvar-f397a.appspot.com",
  messagingSenderId: "1036982340929",
  appId: "1:1036982340929:web:c13ecd075e2fc4c66c65c0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const cellLength = 10;
const hover = document.getElementById("hover");
var cellX;
var cellY;

function handleCanvasClick(e) {
  if (e.button !== 0) {
    return;
  }

  const canvasRect = canvas.getBoundingClientRect();
  const x = e.clientX - canvasRect.left;
  const y = e.clientY - canvasRect.top;
  cellX = Math.floor(x / cellLength);
  cellY = Math.floor(y / cellLength);

  const roundX = Math.floor(x / 10) * 10;
  const roundY = Math.floor(y / 10) * 10;

  hover.style.left = `${roundX - 1}px`;
  hover.style.top = `${roundY - 1}px`;

}

var chosenColor = "#0d6efd";
const colorDivs = document.querySelectorAll(".color");
colorDivs.forEach(element => {
  element.addEventListener("click", () => {
    colorDivs.forEach(elem => {
      elem.classList.remove("active");
    });
    element.classList.add("active");
    chosenColor = window.getComputedStyle(element).backgroundColor;
  })
});

function fillCell(x, y, colorOfCell) {
  const startX = x * cellLength;
  const startY = y * cellLength;

  context.fillStyle = colorOfCell;
  context.fillRect(startX, startY, cellLength, cellLength);
}

canvas.addEventListener("mousedown", handleCanvasClick);

const cooldownBtn = document.getElementById("cd-btn");
const cooldown = document.getElementById("cooldown");
var cdInterval;

function setColor() {
  fillCell(cellX, cellY, chosenColor);
  sendData();

  cooldownBtn.disabled = true;
  cooldown.style.visibility = "visible";
  let sec = 5;
  cooldown.innerText = sec + "s";

  cdInterval = setInterval(() => {
    sec--;
    if (sec >= 0) {
      cooldown.innerText = sec + "s";
    } else {
      clearInterval(cdInterval);
      cooldownBtn.disabled = false;
      cooldown.style.visibility = "hidden";
    }
  }, 1000);
}
window.setColor = setColor;

function sendData() {
  push(ref(db, "dots"), {
    x: cellX,
    y: cellY,
    color: chosenColor
  });
}

const reference = ref(db,'dots');
onValue(reference,(data)=>{
  var dotsData=data.val();
  var keys=Object.keys(dotsData);
  for (let i = 0; i < keys.length; i++) {
    var k=keys[i];
    fillCell(dotsData[k].x, dotsData[k].y, dotsData[k].color);
  }
})

