let data = [null,  "1", undefined, false, "2", "", "3", 0];

const truthyValues = data.filter(Boolean);

console.log(truthyValues);