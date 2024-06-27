function isPalindrome(str) {
    const onlyCharacters = str.replace(/[^a-z0-9]/g, '').toLowerCase()
    const newStr = [];

    // with for loop method
    for (let i = 0; i < onlyCharacters.length; i++) {
        newStr.unshift(onlyCharacters[i])
    }
    return newStr.join('') === onlyCharacters;

    // with built-in method
    // return onlyCharacters.split('').reverse().join('') === onlyCharacters
}

module.exports = isPalindrome;
