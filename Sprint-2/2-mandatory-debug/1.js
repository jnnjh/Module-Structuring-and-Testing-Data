// Predict and explain first...
//  =============> write your prediction here
// ANSWER: The function sum() will not return anything as you put a semicolon after return. WHen you log it in the console in line 10, the function will return undefined.

// ---Original Code--- 
/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> write your explanation here
// ANSWER: It again returned undefined. It is because we returned nothing. The a+b after the return will not be run by the computer because when we return we are ending the function immediately.

// Finally, correct the code to fix the problem
//  =============> write your new code here
// ---New Code---
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);