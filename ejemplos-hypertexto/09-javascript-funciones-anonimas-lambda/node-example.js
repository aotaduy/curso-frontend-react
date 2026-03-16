"use strict";

console.log("=== 09 Funciones anonimas y lambdas(Node.js) ===");

const nums = [1, 2, 3, 4, 5];

const doublesWithAnonymous = nums.map(function (n) {
  return n * 2;
});

const doublesWithLambda = nums.map((n) => n * 2);
const oddsWithLambda = nums.filter((n) => n % 2 !== 0);

const greet = (name) => `Hello ${name}`;

console.log("original:", nums);
console.log("anonymous map:", doublesWithAnonymous);
console.log("lambda map:", doublesWithLambda);
console.log("lambda filter (odd):", oddsWithLambda);
console.log(greet("UTN"));
