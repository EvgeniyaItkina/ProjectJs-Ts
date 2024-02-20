let arrRound = [];
let gameCounter; // Game Counter
let userCounter;


//function (a)
//Resets the game and ready to play
//This does not start the game youe need to press a button to start the game
function initGame() {
    // console.clear();
    gameCounter = userCounter = 0;
    arrRound = []
    console.log(`Initiation game...`);
}

//function (b)
function playRound() {
    //1. Create step and add as a last element to the array
    const newStep = createStep();
    arrRound.push(newStep);
    console.log(newStep);

    //Deteremine that computerws turn is finished, and wait for user input
    //??

    userTurn();



}

function userTurn() {
    // Get input from user (קלט)
    const inputUser = prompt('Please enter your guess')

    //Compare input with
    if (+inputUser === arrRound[0]) {
        console.log('You guessed correctly');
        initGame()
        //gameCounter++
    } else {
        console.log('You lose, game over');
        initGame()
    }
}

//function (c)
//create random num from 1 to 4 
//returnt the result and/or the color!!!! - CREATE
function createStep() {
    const step = Math.floor(Math.random() * 4) + 1;
    let color;

    switch (step) {
        case 1:
            color = 'red';
            break;
        case 2:
            color = 'green';
            break;
        case 3:
            color = 'yellow';
            break;
        case 4:
            color = 'blue';
            break;
    }
    return color;
}

initGame()
document.getElementById('btnStart').addEventListener('click', playRound)