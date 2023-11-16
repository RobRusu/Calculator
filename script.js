function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

function operate(num1, num2, operator){
  return operator === '+' ? add(num1, num2) : operator === '-' ? subtract(num1, num2) : operator === '*' ? multiply(num1, num2) : divide(num1, num2);
}

function numberLength(number){
  let numberToString = number.toString();
  let index = numberToString.indexOf('.') + 1;
  let length = numberToString.length - index;
  return length;
};

let number1 = '';
let number2 = '';
let operator = 0;

let result = 0;
const previousDisplay = document.querySelector('.previousResult');
const display = document.querySelector('.currentResult');
display.textContent = result;

const btn = document.querySelectorAll('.display');
btn.forEach((button) => {
  button.addEventListener('click', () =>{
    if (!operator){
      number1 = number1 + button.textContent;
      display.textContent = number1;
    } else {
      display.textContent = '';
      number2 = number2 + button.textContent;
      display.textContent = number2;
    }
  })
})


const symbols = document.querySelectorAll('.operator');
symbols.forEach((symbol) => {
  symbol.addEventListener('click', () =>{
    if (!operator){
    operator = symbol.textContent;
    previousDisplay.textContent = number1 + ' ' + operator;
    } else {
      number1 = operate(Number(number1), Number(number2), operator)
      number2 = '';
      display.textContent = number1;
      operator = symbol.textContent;
      previousDisplay.textContent = number1 + ' ' + operator;
    }
  })
})


const equal = document.querySelector('.equal');
equal.addEventListener('click', () =>{
  if(number1 === '' || number2 === ''){
    display.textContent = 0;
    previousDisplay.textContent = 0 + ' ' + '='
  }else {
    if (number2 === '0' & operator === '/'){
      display.textContent = 'nope';
      previousDisplay.textContent = number1 + ' ' + operator + ' ' + number2 + ' ' + '=';
    } else{
        result = operate(Number(number1), Number(number2), operator);
        let lengthOfNumber = numberLength(result);
        if (lengthOfNumber > 10) {
          display.textContent = result.toFixed(10);
          previousDisplay.textContent = number1 + ' ' + operator + ' ' + number2 + ' ' + '=';
        } else if (lengthOfNumber > 0){
          display.textContent = result;
          previousDisplay.textContent = number1 + ' ' + operator + ' ' + number2 + ' ' + '=';
        }
      }
    }
  });
  

const clear = document.querySelector('.clear');
clear.addEventListener('click', () =>{
  display.textContent = 0;
  previousDisplay.textContent = '';
  number1 = '';
  number2 = '';
  operator = 0;
})


const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
  if (display.textContent === '0'){
    display.textContent = display.textContent.concat('.')
  } else{
  switch (display.textContent.includes('.')){
    case true:
      break;
    case false:
      if (!operator){
        number1 = number1 + dot.textContent;
        display.textContent = number1;
      } else {
        display.textContent = '';
        number2 = number2 + dot.textContent;
        display.textContent = number2;
      }
      break;
    }
  }
});


