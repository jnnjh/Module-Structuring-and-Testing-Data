// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// ANSWER: In lines 13, 14, and 15, the function will have the same value(3).

// ---Original Code---
/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// Now run the code and compare the output to your prediction
// =============> write the output here
/*
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
*/

// Explain why the output is the way it is
// =============> write your explanation here
// ANSWER: The value will always be the same because the function doesn't have any parameter to pass the argument. Even though in the examples, we put an argument in the function, only the num that is declared outside the function will be used.

// Finally, correct the code to fix the problem
// =============> write your new code here
// ---New Code---
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
