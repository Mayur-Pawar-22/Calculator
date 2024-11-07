let display = document.getElementById("display");
let currentInput = ""; 
let previousInput = "";
let operator = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (display.innerText === "0" || shouldResetDisplay) {
        display.innerText = number;
        shouldResetDisplay = false;
    } else {
        display.innerText += number;
    }
}

function appendOperator(op) {
    if (operator !== null) calculateResult();

    previousInput = display.innerText;
    operator = op;
    shouldResetDisplay = true;
}

function clearDisplay() {
    display.innerText = "0";
    currentInput = "";
    previousInput = "";
    operator = null;
    shouldResetDisplay = false;
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculateResult() {
    if (operator === null || shouldResetDisplay) return;

    currentInput = display.innerText;
    const leftOperand = parseFloat(previousInput);
    const rightOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case "+":
            result = leftOperand + rightOperand;
            break;
        case "-":
            result = leftOperand - rightOperand;
            break;
        case "*":
            result = leftOperand * rightOperand;
            break;
        case "/":
            result = rightOperand !== 0 ? leftOperand / rightOperand : "Error";
            break;
        default:
            return;
    }

    display.innerText = result;
    previousInput = result;
    operator = null;
    shouldResetDisplay = true;
}
