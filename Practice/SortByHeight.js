function sortByHeight(arr) {
    // Step 1: Extract the elements that are not -1
    let heights = arr.filter(value => value !== -1);

    // Step 2: Sort the extracted elements
    heights.sort((a, b) => a - b);

    // Step 3: Reinsert the sorted elements back into their positions
    let sortedIndex = 0;
    return arr.map(value => {
        if (value === -1) {
            return value; // Keep -1 in its original position
        } else {
            return heights[sortedIndex++]; // Replace with the next sorted element
        }
    });
}

// Example usage:
let callF = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
console.log(callF); // Output: [-1, 150, 160, 170, -1, -1, 180, 190]
