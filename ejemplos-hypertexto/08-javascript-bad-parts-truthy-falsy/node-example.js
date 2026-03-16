"use strict";

console.log("=== 08 Bad Parts: Verdadero y falso (Node.js) ===");

const values = [
  ["false", false],
  ["0", 0],
  ["-0", -0],
  ["0n", 0n],
  ['""', ""],
  ["null", null],
  ["undefined", undefined],
  ["NaN", NaN],
  ['"0"', "0"],
  ["[]", []],
  ["{}", {}],
  ['"hello"', "hello"],
  ["42", 42],
];

const rows = values.map(([label, value]) => ({
  value: label,
  booleanValue: Boolean(value),
  type: typeof value,
}));

console.table(rows);

console.log("\nProblemas con la igualdad ==:");
console.log("5 == '5' =>", 5 == "5");
console.log("5 === '5' =>", 5 === "5");
console.log("[] == false =>", [] == false);
console.log("[] === false =>", [] === false);

