//swapping Values
let array = [1, 3, 5, 8, 10];

//we can swap two or more elements using temp variable
let temp = array[0];
array[0] = array[4];
array[4] = temp;

console.log(array);

// another way using destructuring
let array2 = [1, 3, 5, 8, 10];
[array2[0], array2[4]] = [array2[4], array2[0]];

console.log(array2);