//
console.log([] + []);

//
console.log({} + []);

//
function myFunction() {
    return 'Bangladesh'
}
const string =  myFunction `hello`;
console.log(string);


// 
const myFunction =  (...arguments) => {
    console.log([].slice.call(arguments));
    return [].slice.call(arguments).sort();
}

console.log(myFunction(2, 1, 4, 5));

