function getCardValue(card) {
    let rank = card.slice(0, -1);
    let suits = card.slice(-1);
    
    if(rank === "A" && ["♠", "♥", "♦", "♣"].includes(suits)) return 11;
    else if(
            (rank === "10" ||
             rank === "J" ||
             rank === "Q" ||
             rank === "K")
             && ["♠", "♥", "♦", "♣"].includes(suits)) return 10;
    else if(["2", "3", "4", "5", "6", "7", "8", "9"].includes(rank) &&
            ["♠", "♥", "♦", "♣"].includes(suits)) return Number(rank);
    else return "Invalid card rank.";
}
module.exports = getCardValue;