let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// ANSWER. Lines 4, 5 and 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// ANSWER: Error in  line 5. This is happening because we miss a comma between the two arguments. ("," ""). To fix this, we should add the missing comma like this. (",", "")

// c) Identify all the lines that are variable reassignment statements
// ANSWER: Lines 4 and 5.

// d) Identify all the lines that are variable declarations
// ANSWER: Lines 1, 2. 7 and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* ANSWER: carPrice.replaceAll(",","") -> This replaces all comma to no character but it's still a string
           Number(carPrice.replaceAll(",","")) -> Converts the value of string to an integer.
*/