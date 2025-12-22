const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });

// Case 2: Identify the ordinal number for 11
// When the number is 11,
// Then the function should return "11th"
test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    });

// Case 3: Identify the ordinal number for 5007
// When the number is 5007,
// Then the function should return "5007th"
test("should return '5007th' for 5007", () => {
    expect(getOrdinalNumber(5007)).toEqual("5007th");
    });

// Case 4: Identify the ordinal number for 22
// When the number is 22,
// Then the function should return "22nd"
test("should return '22nd' for 22", () => {
    expect(getOrdinalNumber(22)).toEqual("22nd");
    });

// Case 5: Identify the ordinal number for 53
// When the number is 53,
// Then the function should return "53rd"
test("should return '53rd' for 53", () => {
    expect(getOrdinalNumber(53)).toEqual("53rd");
    });