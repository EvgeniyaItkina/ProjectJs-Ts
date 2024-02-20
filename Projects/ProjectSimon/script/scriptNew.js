document.getElementById('red').addEventListener('click', playerClick.bind(null, 0));
document.getElementById('green').addEventListener('click', playerClick.bind(null, 1));
document.getElementById('yellow').addEventListener('click', playerClick.bind(null, 2));
document.getElementById('blue').addEventListener('click', playerClick.bind(null, 3));
const gameOver = document.getElementById("gameOver")
const message = document.getElementById("message")

const gameColors = ["red", "green", "yellow", "blue"];
const highlightColors = ["lightcoral", "lightgreen", "lightyellow", "lightblue"];
const soundEffects = [
    new Audio("https://www.fesliyanstudios.com/play-mp3/387"),
    new Audio("https://www.fesliyanstudios.com/play-mp3/387"),
    new Audio("https://www.fesliyanstudios.com/play-mp3/387"),
    new Audio("https://www.fesliyanstudios.com/play-mp3/387")
];

const images = [
    './image/gameOver1.jpg',
    './image/gameOver2.jpg',
    './image/gameOver3.jpg',
    './image/gameOver4.jpg',
    './image/gameOver5.jpg',
    './image/gameOver6.jpg',
    './image/gameOver7.jpg',
    './image/gameOver8.jpg',
    './image/gameOver9.jpg',
    './image/gameOver10.jpg'
];

let currentSequenceIndex = 0;
let currentRound = 0;
let computerSequence = [];

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function computerTurn() {
    currentSequenceIndex = 0;
    currentRound++;
    document.getElementById("score").innerHTML = `Round: ${currentRound}`;
    let colorIndex = Math.floor(Math.random() * 4);
    computerSequence.push(gameColors[colorIndex]);

    console.log(computerSequence);
    for (let i = 0; i < computerSequence.length; i++) {
        let currColor = computerSequence[i];
        let colorIndex = gameColors.indexOf(currColor);
        await sleep(500);
        soundEffects[colorIndex].play();
        let el = document.getElementById(currColor);
        el.style.backgroundColor = highlightColors[colorIndex];

        await sleep(500);
        el.style.backgroundColor = gameColors[colorIndex];
        console.log(gameColors[colorIndex]);
    }
    await sleep(1000);
}

async function playerClick(colorIndex) {
    soundEffects[colorIndex].play();
    let currColor = gameColors[colorIndex];
    let el = document.getElementById(currColor);
    el.style.backgroundColor = highlightColors[colorIndex];

    await sleep(500);
    el.style.backgroundColor = gameColors[colorIndex];
    if (gameColors[colorIndex] != computerSequence[currentSequenceIndex]) {
        endGame();
        return;
    }

    if (currentSequenceIndex == computerSequence.length - 1) {
        computerTurn();
        return;
    }

    currentSequenceIndex++;
}

function endGame() {
    gameOver.style.display = "flex";

    // Выбор случайного индекса из массива images
    const randomIndex = Math.floor(Math.random() * images.length);

    // Получение случайного URL изображения из массива
    const randomImage = images[randomIndex];

    // Установка случайного изображения для элемента img внутри div#gameOver
    document.querySelector("#gameOver img").src = randomImage;

    message.innerHTML = `Result is ${currentRound}. <br> Try again <br>`;

    computerSequence = [];
    currentRound = 0;
}

document.getElementById("btnStart").addEventListener('click', startNewGame);

function startNewGame() {
    gameOver.style.display = "none"
    computerSequence = [];
    currentRound = 0;
    computerTurn();
}

document.getElementById("closeButton").addEventListener("click", function () {
    gameOver.style.display = "none";
});