function areSimilar(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    // Find the indices where the arrays differ
    let diffIndices = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diffIndices.push(i);
        }
    }

    // If there are no differences, arrays are similar
    if (diffIndices.length === 0) {
        return true;
    }

    // If there are exactly 2 differences, check if swapping them makes arrays equal
    if (diffIndices.length === 2) {
        const [i, j] = diffIndices;
        return a[i] === b[j] && a[j] === b[i];
    }

    // If there are more than 2 differences, arrays are not similar
    return false;
}

let callF = areSimilar([1, 2, 3], [1, 2, 3]); // true
console.log(callF);

callF = areSimilar([1, 2, 3], [2, 1, 3]); // true
console.log(callF);

callF = areSimilar([1, 2, 2], [2, 1, 1]); // false
console.log(callF);
