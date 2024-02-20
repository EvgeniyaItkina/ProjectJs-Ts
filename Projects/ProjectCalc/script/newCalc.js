const userInput = document.getElementById("userInput");
let firstNumber, action, checkNumber, resultComputed = false;
function clickNumber(inputNewElement) {
    if (resultComputed) {
        resultComputed = false;
        userInput.value = "";
    }
    userInput.value += inputNewElement;

    if (isNaN(Number(userInput.value))) {
        userInput.value = checkNumber
    } else {
        checkNumber = userInput.value
    }
}

function clickMethod(sign) {
    if (action) {
        result()
    } else {
        firstNumber = userInput.value;
    }
    action = sign;
    userInput.value = "";
}

function clickSign() {
    let num1 = Number(userInput.value)
    userInput.value = num1 * (-1)
}

function clean() {
    userInput.value = "";
    firstNumber = ""
    action = null;
}

function deleteLast() {
    userInput.value = userInput.value.slice(0, -1);
}
function result() {
    if (!firstNumber) return
    let tempResult;
    let num1 = Number(firstNumber);
    let num2 = Number(userInput.value);
    switch (action) {
        case ('+'):
            tempResult = num1 + num2
            break;

        case ('-'):
            tempResult = num1 - num2
            break;

        case ('x'):
            tempResult = num1 * num2
            break;

        case ('/'):
            if (num2 == 0) {
                tempResult = "NaN"
            } else {

                tempResult = num1 / num2
            }
            break;

        default:
            tempResult = num1;
            break;
    }
    userInput.value = tempResult
    firstNumber = tempResult;
    action = ""
    resultComputed = true;
}