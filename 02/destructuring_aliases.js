const person = {
    name: "Shahnewaz",
    age: 24,
    designation: "Web Developer"
}

const { name: main, designation: position } = person; //destructuring aliases

console.log(main, position);