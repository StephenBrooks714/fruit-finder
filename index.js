function showResult(limit){
    for (i = 1; i <= limit; i++) {
  
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        } else if(i % 3 === 0) {
            console.log("Fizz");
        } else if(i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
  
      }
  }
  showResult(20)


// javascript calculator

const operator = prompt('Enter operator ( either +, -, * or / ): ');


const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);