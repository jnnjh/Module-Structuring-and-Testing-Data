function getOrdinalNumber(num) {
    let lastNum = num.toString().slice(-1);
    let lastTwoNum = num.toString().slice(-2);
    if(lastNum === "1" && lastTwoNum !== "11") {
        return num + "st";
    } else if(lastNum == 2) {
        return num + "nd";
    } else if(lastNum == 3) {
        return num + "rd";
    } else {
        return num + "th";
    }
}

module.exports = getOrdinalNumber;