function countChar(stringOfCharacters, findCharacter)
{
    let strCount = 0;
    for(let i = 0; i < stringOfCharacters.length; i++){
        if(stringOfCharacters[i] === findCharacter) {
            strCount += 1;
        } else return 0;
    }
    return strCount;
}

module.exports = countChar;