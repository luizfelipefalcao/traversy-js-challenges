function removeDuplicates(arr) {
    // with Set for loop
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) newArr.push(arr[i])
    }
    // return newArr;

    // with Set built-in method
    return Array.from(new Set(arr));

}

module.exports = removeDuplicates;
