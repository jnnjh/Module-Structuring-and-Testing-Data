const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

/* 
ANSWERS:
    Math.random() returns number between 0 and 1.
    Math.floor() rounds down number to the nearest integer.
    PROCESS:
    So Math.random() will give number between 0 and 1, multiply to whatever number this expression  will give: (maximum - minimum + 1)... Then Math.floor() will round down the number and lastly will add 1 at the end.
*/