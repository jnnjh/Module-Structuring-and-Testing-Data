const movieLength = -8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// ANSWER: 6 variable declarations.

// b) How many function calls are there?
// ANSWER: Just 1 function calls.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// ANSWER: it represents the remainder which is the remaining seconds after dividing movieLength to 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// ANSWER: it just want to get the whole minutes of the movie which can be achieved by subtracting the remainingSeconds to the movieLength and dividing it by 60. It will give minutes without remainders.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// ANSWER: It represents the total movie length in Hours, Minutes and Seconds so probably movieLengthHMS can be a better name.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// ANSWER: It will work only for any integer values but not others as we need to use math operations in it.
