let firstNumber, secondNumber, action = null
let decimalClicked = false
const userInput = document.getElementById("userInput");
let validationUserInput = "";
userInput.focus();
userInput?.addEventListener('input', () => {
    const number = +userInput.value
    console.log(number)
    console.log(typeof (number));
    console.log(userInput.value);
    /*  if (typeof number != "number") {
         //not a number
         userInput.value = validationUserInput;
         return
     }
     validationUserInput = userInput.value; */



    /*  if (action == null) {
         firstNumber = +userInput.value
         //console.log(firstNumber);
     } else {
         secondNumber = +userInput.value;
         // console.log(secondNumber);
     } */
})

function clickNumber(number) {
    userInput.value += number;
    console.log(number)
    console.log(typeof (number));

    if (action == null) {
        firstNumber = +userInput.value
        //console.log(firstNumber);
        // currentNumber = firstNumber;

    } else {
        secondNumber = +userInput.value;
        // console.log(secondNumber);
        // currentNumber = secondNumber;
    }

    //console.log(action);
    //console.log(typeof firstNumber);
}

function clickMethod(doIt) {
    firstNumber = Number(userInput.value);
    action = doIt;
    userInput.value = "";
    decimalClicked = false;
    userInput.focus();

    //console.log(action);

    //console.log(firstNumber);
}

function result() {
    let tempResult;

    switch (action) {
        case ('+'):
            tempResult = firstNumber + secondNumber
            break;

        case ('-'):
            tempResult = firstNumber - secondNumber
            break;

        case ('x'):
            tempResult = firstNumber * secondNumber
            break;

        case ('/'):
            tempResult = firstNumber / secondNumber
            break;

        default:
            tempResult = firstNumber;
            break;
    }
    userInput.value = tempResult
    firstNumber = tempResult;
}


function clean() {
    userInput.value = "";
    firstNumber = secondNumber = action = null;
    decimalClicked = false;
}

function deleteLast() {
    userInput.value = userInput.value.slice(0, -1);
}

function clickSign() {
    let currentNumber = Number(userInput.value);
    currentNumber = -currentNumber;

    if (action == null) {
        firstNumber = currentNumber;
    } else {
        secondNumber = currentNumber;
    }

    userInput.value = currentNumber;



    /*     console.log(`currentNumber ${currentNumber}`);
        console.log(`firstNumber ${firstNumber}`); */
}

function clickDecimal() {
    if (!decimalClicked) {
        let currentValue = userInput.value;
        // Добавляем "0.", если текущее значение пустое
        if (currentValue === "") {
            currentValue = "0";
        }
        userInput.value = currentValue + ".";
        decimalClicked = true;
    }
}

