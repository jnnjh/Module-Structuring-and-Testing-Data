// Predict and explain first...

// =============> write your prediction here
// ANSWER: The function will not return anything.

// ---Original Code---
/*
function multiply(a, b) {
  console.log(a * b);
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
// ANSWER: The function indeed didn't return anything that's why the value of the function multiply(a, b) is undefined. We should refactor line 7 to return something instead of only logging it to the console.

// Finally, correct the code to fix the problem
//  =============> write your new code here
// ---NEW CODE---
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
