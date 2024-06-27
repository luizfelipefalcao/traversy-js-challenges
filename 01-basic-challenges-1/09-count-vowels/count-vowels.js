function countVowels(str) {
    const newStr = str.toLowerCase();
    let count = 0
    const vowels = 'aeiou'
    for (let i = 0; i < newStr.length; i++) {
        if (vowels.includes(newStr[i])) count++;
    }
    return count;
}

module.exports = countVowels;
