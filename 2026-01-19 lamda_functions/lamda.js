// array mit 5 ferldern name alter und gender
const persons = [
  { name: "Alice", age: 30, gender: "f" },
  { name: "Bob", age: 25, gender: "m" },
  { name: "Charlie", age: 35, gender: "m" },
  { name: " Diana", age: 28, gender: "f" },
  { name: "Eve", age: 22, gender: "f" },
];

let alter = persons.sort((a, b) => a.age - b.age);
let gernder_m = persons.filter((_) => _.gender === "m");
let gender_f = persons.filter((_) => _.gender === "f");

console.log("Nach Alter sortiert:", alter);
console.log("Männliche Personen:", gernder_m);
console.log("Weibliche Personen:", gender_f);
