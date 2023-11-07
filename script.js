const display = document.querySelector('#display');


const numButtons = document.querySelectorAll('button.num');
const operatorButtons = document.querySelectorAll('.operator-buttons button');
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals');

let num1;
let num2;
let operator;
let result;


function evaluate() {
    if (operator === "+") {
        result = parseInt(num1) + parseInt(num2)
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === '/') {
        result = num1/num2;
    } else if (operator = 'x') {
        result = num1 * num2;
    }
}



numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = display.textContent + button.textContent;
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        num1 = display.textContent;
        operator = button.textContent;
        display.textContent = '';
    })
})

equalsBtn.addEventListener('click' , () => {
    num2 = display.textContent;
    evaluate();
    num1 = ''
    num2 = ''
    display.textContent = result;
})

clearBtn.addEventListener('click' , () => {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    display.textContent = '';
})


