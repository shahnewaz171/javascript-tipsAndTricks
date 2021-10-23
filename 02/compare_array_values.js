const data1 = [1, 3];
const data2 = [1, 2];

const element = data1.every((v, i) =>  v === data2[i]);
console.log(element);


const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();
console.log(iterator1.next().value);

