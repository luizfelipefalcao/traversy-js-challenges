function countOccurrences(word, char) {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === char) { count++ }
    }
    return count;
}

module.exports = countOccurrences;
