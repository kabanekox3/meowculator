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
    display.textContent = display.textContent + "7";
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
    display.textContent = display.textContent + " + ";
})

let subtraction = document.querySelector(".subtract");
subtraction.addEventListener("click", () => {
    display.textContent = display.textContent + " - ";
})

let multiplication = document.querySelector(".multiply");
multiplication.addEventListener("click", () => {
    display.textContent = display.textContent + " * ";
})

let division = document.querySelector(".divide");
division.addEventListener("click", () => {
    display.textContent = display.textContent + " / ";
})

let evaluate = document.querySelector(".evaluate");

// new functions
 
evaluate.addEventListener("click", () => {
    let toEvaluate = display.textContent;
    translateInput(toEvaluate);
})

function translateInput () {
    
    let input = display.textContent;
    input = input.split(" ")
    console.log(input);

    // convert each number to a number instead of string
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            input[i] = Number(input[i])
        }
    }

    //let value = stepwiseEvaluateInput(input);
    //display.textContent = value;
}

function stepwiseEvaluateInput (input) {
    // search for each of operator by precidence and evaluate

    let loopLength = input.length;

    while(loopLength > 1) {

        for (let i = 0; i < loopLength; i++) {
            if (input[i] == "^") {
                let evaluated = input[i-1] ** input[i+1];
                input.splice(i-1, 3, evaluated);
                loopLength = input.length;
            }
        }

        for (let i = 0; i < loopLength; i++) {
            if (input[i] == "*") {
                let evaluated = input[i-1] * input[i+1];
                input.splice(i-1, 3, evaluated);
                loopLength = input.length;
            } else if (input[i] == "/") {
                let evaluated = input[i-1] / input[i+1];
                input.splice(i-1, 3, evaluated);
                loopLength = input.length;
            }
        }

        for (let i = 0; i < loopLength; i++) {
            if (input[i] == "+") {
                let evaluated = input[i-1] + input[i+1];
                input.splice(i-1, 3, evaluated);
                loopLength = input.length;
                console.log(input)
            } else if (input[i] == "-") {
                let evaluated = input[i-1] - input[i+1];
                input.splice(i-1, 3, evaluated);
                loopLength = input.length;
            }
        }
        console.log(input)
    }

    return Number(input);
}
