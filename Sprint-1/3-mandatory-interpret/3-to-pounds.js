const penceString = "399p"; // initializes a string variable with the value "399p"
// console.log(penceString);

const penceStringWithoutTrailingP = penceString.substring( // initializes a string with the value of when we extract a substring from penceString
  0,                                                       // substring starts with index zero
  penceString.length - 1                                   // and ends with the length of penceString minus 1
);                                                         // This whole expression is just to extract the string without the p(pence sign).
// console.log(penceStringWithoutTrailingP);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // initializes a string with the value of when we pad penceStringWithoutTrailingP with "0" until it reaches the given length(3). It ensures that the string is at least 3 characters long and pads the start with zero if needed.
const pounds = paddedPenceNumberString.substring( // initializes a string with the value of when we extract a substring from paddedPenceNumberString
  0,                                              // substring starts with index zero
  paddedPenceNumberString.length - 2              // and ends with the length of paddedPenceNumberString minus 2.
);                                                // This whole expression extracts everything except the last 2 digits coz those are the pence.
// console.log(paddedPenceNumberString);           

const pence = paddedPenceNumberString             // initializes a string with value equal to the result when we get the substring of the last 2 digits of paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)  // gets the last two digits
  .padEnd(2, "0");                                // ensures there are always two pence digits

console.log(`£${pounds}.${pence}`);               // Logs the final formatted price string.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
