let digit = [3, [6, 8], 12, [5, 80]];

const convertSingleArray = digit.flat();    // we can convert multiple child arrays to a single array using flat() method
console.log(convertSingleArray);

// For multi level array 
let digit2 = [3, [6, 8, [9, 12, [23, 45]]], 12, [5, 80]];

console.log(digit2.flat(Infinity));