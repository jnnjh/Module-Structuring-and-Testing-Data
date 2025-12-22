function repeat(str, count) {
    if(count === 1) return str;
    else if(count === 0) return "";
    else if(count < 0) return "Invalid repeat count: must be 0 or greater.";
    else return str.repeat(count);
}

module.exports = repeat;