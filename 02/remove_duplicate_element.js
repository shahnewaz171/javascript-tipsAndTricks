// remove duplicate elements from an array
const data = [1, 3, 4, 4, 3, 5, 7, 5];

const result = [...new Set(data)]
console.log(result);