function reverseString(str) {
    // with loop method
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.unshift(str[i]);
    }
    return arr.join('');

    // with built-in method
    // return str.split('').reverse().join('');
}

module.exports = reverseString;
