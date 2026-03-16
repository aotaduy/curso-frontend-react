"use strict";

console.log("=== 07 JavaScript Good Parts (Node.js) ===");

console.log("\n1) Loose typing");
let dynamicValue = 42;
console.log("dynamicValue:", dynamicValue, "type:", typeof dynamicValue);
dynamicValue = "now I am a string";
console.log("dynamicValue:", dynamicValue, "type:", typeof dynamicValue);

console.log("\n2) Objetos dinamicos y literales");
const student = {
  name: "Ana",
  age: 21,
  greet() {
    return `Hola yo soy, ${this.name}`;
  },
};
student.city = "Cordoba";
console.log(student.greet(), "ciuDAD:", student.city);

console.log("\n3) Funciones de orden superior");
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function (n) {
  return n * 2;
});
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Numeros:", numbers);
console.log("Dobles:", doubles);
console.log("Pares:", evens);
console.log("Suma:", sum);

console.log("\n4) Lambda (arrow) functions");
const square = (x) => x * x;
const add = (a, b) => a + b;
console.log("square(6):", square(6));
console.log("add(3, 7):", add(3, 7));

console.log("\n5) Closures");
function createCounter(label) {
  let count = 0;
  return function () {
    count += 1;
    console.log(`${label}: ${count}`);
    return count;
  };
}
const counterA = createCounter("A");
counterA();
counterA();

console.log("\n6) Herencia de prototipos");
const personProto = {
  introduce() {
    return `I am ${this.name}`;
  },
};
const dev = Object.create(personProto);
dev.name = "Lucia";
dev.stack = "JavaScript";
console.log(dev.introduce(), "stack:", dev.stack);
