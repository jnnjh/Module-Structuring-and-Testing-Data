// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// ANSWER: There will be an error because we are logging decimalNumber in the console which is only declared inside the function. Also, decimalNumber is again declared twice inside the function(as a parameter and initialized with const.).

// Try playing computer with the example to work out what is going on

// ---Original Code---
/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> write your explanation here
/*
ANSWER: The first thing that i saw is that we are logging decimalNumber outside of the function. We cannot do this because of it is not initialized or declared outside of the function then an error will occur.
Second is the double declaration of decimalNumber. We can only declare a variable once. If we want to change the value, we just have to reassign a new value to it.
*/

// Finally, correct the code to fix the problem
// =============> write your new code here
// ---New Code---
function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
const decimalNumber = 0.5; // We just have to declare decimalNumber outside of the function
console.log(decimalNumber);
console.log(convertToPercentage());

