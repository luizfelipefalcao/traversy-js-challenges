function findMaxNumber(arr) {
    // Solution with sort()
    // const result = arr.sort((a, b) => a - b).reverse()
    // return result[0];

    // Solution with for loop
    let result = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > result) { result = arr[i] }
    }
    return result;
}

module.exports = findMaxNumber;
