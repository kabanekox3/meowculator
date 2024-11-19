// calculation functions

function add (num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract (num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply (num1, num2) {
    return Number(num1) * Number(num2);
}

function divide (num1, num2) {
    return Number(num1) / Number(num2);
}

// perform an operation

function operate (num1, operator, num2) {
    if (operator == "+") {
        return  add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}

// display button outputs in calculator display

let display = document.querySelector(".result-container");

let button1 = document.querySelector(".one");
button1.addEventListener("click", () => {
    display.textContent = display.textContent + "1";
})

let button2 = document.querySelector(".two");
button2.addEventListener("click", () => {
    display.textContent = display.textContent + "2";
})

let button3 = document.querySelector(".three");
button3.addEventListener("click", () => {
    display.textContent = display.textContent + "3";
})

let button4 = document.querySelector(".four");
button4.addEventListener("click", () => {
    display.textContent = display.textContent + "4";
})

let button5 = document.querySelector(".five");
button5.addEventListener("click", () => {
    display.textContent = display.textContent + "5";
})

let button6 = document.querySelector(".six");
button6.addEventListener("click", () => {
    display.textContent = display.textContent + "6";
})

let button7 = document.querySelector(".seven");
button7.addEventListener("click", () => {
    display.textContent += "8";
})

let button8 = document.querySelector(".eight");
button8.addEventListener("click", () => {
    display.textContent = display.textContent + "8";
})

let button9 = document.querySelector(".nine");
button9.addEventListener("click", () => {
    display.textContent = display.textContent + "9";
})

let button0 = document.querySelector(".zero");
button0.addEventListener("click", () => {
    display.textContent = display.textContent + "0";
})

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "";
})

let addition = document.querySelector(".add");
addition.addEventListener("click", () => {
    display.textContent = display.textContent + "+";
})

let subtraction = document.querySelector(".subtract");
subtraction.addEventListener("click", () => {
    display.textContent = display.textContent + "-";
})

let multiplication = document.querySelector(".multiply");
multiplication.addEventListener("click", () => {
    display.textContent = display.textContent + "*";
})

let division = document.querySelector(".divide");
division.addEventListener("click", () => {
    display.textContent = display.textContent + "/";
})

let evaluate = document.querySelector(".evaluate");
evaluate.addEventListener("click", () => {

    let toEvaluate = display.textContent.split("");
    let evaluationLength = toEvaluate.length;
    let currentEvaluation = 0;
    console.log(toEvaluate, evaluationLength)

    for (let i = 0; i <= evaluationLength; i += 2) {
        currentEvaluation = operate(toEvaluate[i], toEvaluate[i+1], toEvaluate[i+2]);
        toEvaluate[i+2] = currentEvaluation;
        console.log(toEvaluate)
    }

    display.textContent = toEvaluate[evaluationLength - 1]
})