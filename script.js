const display = document.querySelector('#display');


const numButtons = document.querySelectorAll('button.num');
const operatorButtons = document.querySelectorAll('.operator-buttons button');
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals');

let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let enterNewNum = true;




function evaluate() {
    if (operator === "+") {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === '/') {
        result = Math.round((num1 / num2) * 10000) / 10000;
    } else if (operator = 'x') {
        result = Math.round((num1 * num2) * 10000) / 10000;
    }
}



numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (enterNewNum) {
            display.textContent = '';
            display.textContent = display.textContent + button.textContent;
            enterNewNum = false;
        } else {
            display.textContent = display.textContent + button.textContent; 
        }
        })
        
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (num1 != '') {
            num2 = display.textContent;
            evaluate();
            display.textContent = result;
            num1 = display.textContent;
            operator = button.textContent;
            enterNewNum = true;
            
        } else {
            num1 = display.textContent;
            operator = button.textContent;
            display.textContent = '';
            enterNewNum = true;
        }

        
    })
})

equalsBtn.addEventListener('click' , () => {
    num2 = display.textContent;
    evaluate();
    num1 = ''
    num2 = ''
    display.textContent = result;
    enterNewNum = true;
})

clearBtn.addEventListener('click' , () => {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    display.textContent = '';
})


