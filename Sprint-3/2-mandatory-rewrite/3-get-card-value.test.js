const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
    }
);

// Case 2: Handle Number Cards (2-10):
test("should return numeric value corresponding to the rank for Five of Hearts", () => {
    const fiveOfHearts = getCardValue("5♥");
    expect(fiveOfHearts).toEqual(5);
    }
);

// Case 3: Handle Face Cards (J, Q, K):
test("should return the value 10 for Queen of Diamonds", () => {
    const queenOfDiamonds = getCardValue("Q♦");
    expect(queenOfDiamonds).toEqual(10);
    }
);

// Case 4: Handle Ace (A):
test("should return the value 11 for Ace of Clubs", () => {
    const aceOfClubs = getCardValue("A♣");
    expect(aceOfClubs).toEqual(11);
    }
);

// Case 5: Handle Invalid Cards:
test("should return invalid for Ace of Pepe", () => {
    const aceOfPepe = getCardValue("Ap");
    expect(aceOfPepe).toEqual("Invalid card rank.");
    }
);
