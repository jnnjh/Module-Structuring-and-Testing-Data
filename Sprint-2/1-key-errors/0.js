// Predict and explain first...
//  =============> write your prediction here
// ANSWER: There will be an error because str has been declared twice. As a parameter and inside the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// ---Original Code---
/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

capitalise("hello");
*/

// =============> write your explanation here
/*
ANSWER: SyntaxError: Identifier 'str' has already been declared
        This means that str has already been declared as a parameter but it has also been initialized inside the function.
*/

// =============> write your new code here
// ---New Code---
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));

