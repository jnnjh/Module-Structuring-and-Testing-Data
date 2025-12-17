// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

/*
ANSWER: cityOfBirth was called before declaring and assigning value to it.
        To fix this, declare and assign the variable first before calling it.

        const cityOfBirth = "Bolton";
        console.log(`I was born in ${cityOfBirth}`);

        Like so.
*/