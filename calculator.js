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

let decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    display.textContent = display.textContent + "."
})

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "";
})

let round = document.querySelector(".round");
round.addEventListener("click", () => {
    display.textContent = Math.round(display.textContent);
})

let negate = document.querySelector(".negate");
negate.addEventListener("click", () => {
    let currentDisplay = display.textContent;
    currentDisplay = currentDisplay.split(" ");
    if (Number(currentDisplay[0]) < 0 && currentDisplay.length == 1) {
        currentDisplay[0] = String(0 - Number(currentDisplay[0]));
        currentDisplay.join(" ")
        display.textContent = currentDisplay;
    }
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

let power = document.querySelector(".power");
power.addEventListener("click", () => {
    display.textContent = display.textContent + " ^ ";
})

let openBracket = document.querySelector(".open-bracket");
openBracket.addEventListener("click", () => {
    display.textContent = display.textContent + " ( "
})

let closeBracket = document.querySelector(".close-bracket");
closeBracket.addEventListener("click", () => {
    display.textContent = display.textContent + " ) "
})

let del = document.querySelector(".del");
del.addEventListener("click", () => {
    disp = display.textContent.split("");
    disp.pop();
    disp = disp.join("");
    display.textContent = disp;
})

let evaluate = document.querySelector(".evaluate");
evaluate.addEventListener("click", () => {
    let toEvaluate = display.textContent;
    translateInput(toEvaluate);
})

function translateInput () {
    
    let input = display.textContent;
    input = input.split(" ")
    console.log(input);

    for (let i = 0; i < input.length; i++) {
        if (isNumber(input[i]) ==  true) {
            input[i] = Number(input[i])
        } else if (input[i] == "")  {
            input.splice(i, 1);
        }
    }

    let value = stepwiseEvaluateInput(input);
    display.textContent = value;
}

function isNumber (n) {
    let reg = /^\d+$/;
    return reg.test(n);
}

function stepwiseEvaluateInput (input) {
    // search for each of operator by precidence and evaluate

    let loopLength = input.length;
    let i = 0
    while(loopLength > 1 && i < 100) {

        for (let i = 0; i < loopLength-1; i++) {
            if (input[i] + input[i+1] == ")(") {
                input.splice(i+1, 0, "*");
            } else if (input[i] == "(" && isNumber(input[i-1]) == true) {
                input.splice(i, 0, "*")
            }
            if (input[i] + input[i+1] == "+-" || input[i] + input[i+1] == "-+") {
                input.splice(i+1, 0, 0);
            }
            if (input[i] + input[i+1] == "--") {
                input.splice(i, 2, "+");
            }
            if (input[i] == "(" && input[i+1] == "-") {
                input.splice(i+1, 0, 0);
            }
        }

        while (input.indexOf("(") != -1) {
            console.log(input, input.lastIndexOf("("), input.indexOf(")", input.lastIndexOf("(",)), input.lastIndexOf("("), input.slice(input.lastIndexOf("(") +1, input.indexOf(")")))
            let open = input.lastIndexOf("(");
            let close = input.indexOf(")", open);
            let newInput = input.slice(open + 1, close);
            let newInputLength = newInput.length;
            let evaluated = stepwiseEvaluateInput(newInput);
            console.log(evaluated)
            input.splice(open, newInputLength + 2, evaluated);
            console.log(input)
            loopLength = input.length;
        }

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
        i++
        //console.log(input)
    }

    return Number(input);
}

