function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    else if (numerator > denominator) return false;
    else if (Math.abs(numerator) < Math.abs(denominator)) return true;
    else if (numerator === denominator) return false;
}

module.exports = isProperFraction;