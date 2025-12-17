
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// ANSWER: there is a number instead of a parameter name in the function and num variable is not declared.

// ---Original Code---
/*
function square(3) {
    return num * num;
}
*/

// =============> write the error message here
// ANSWER: SyntaxError: Unexpected number

// =============> explain this error message here
// ANSWER: There cannot put a value when you declare a function. It can only have parameter names which you'll pass the value when calling the function.

// Finally, correct the code to fix the problem

// =============> write your new code here
// ---NEW CODE---
function square(num) {
    return num * num;
}
console.log(square(5));
