"use strict";

console.log("=== 13 JSON Como intercambio de datos (Node.js) ===");

const raw = '{"name":"Lucia","age":21,"active":true}';
const obj = JSON.parse(raw);

console.log("Input JSON string:");
console.log(raw);
console.log("\nParsed object:");
console.log(obj);

const data = {
  course: "Web Frontend",
  topics: ["HTML", "CSS", "JS"],
  year: 2026,
};

const serialized = JSON.stringify(data, null, 2);

console.log("\nObjeto de entrada:");
console.log(data);
console.log("\JSON Serializado:");
console.log(serialized);

console.log("\n=== JSON limitaciones ===");

const withSpecialTypes = {
  title: "Limitations demo",
  createdAt: new Date("2026-03-16T10:00:00Z"),
  notDefined: undefined,
  calculate: function () {
    return 2 + 2;
  },
  notANumber: NaN,
  infinite: Infinity,
  map: new Map([["a", 1]]),
  set: new Set([1, 2, 3]),
};

console.log("\Caso 1: Objeto con tipos no nativos");
console.log(JSON.stringify(withSpecialTypes, null, 2));

console.log("\nCase 2: Arreglo con valores no soportados");
console.log(JSON.stringify([1, undefined, function () {}, Symbol("x")]));

console.log("\nCase 3: BigInt da error");
try {
  console.log(JSON.stringify({ id: 1n }));
} catch (error) {
  console.log("Error:", error.message);
}

console.log("\nCase 4: referencias circulares dan error");
const circular = { name: "root" };
circular.self = circular;
try {
  console.log(JSON.stringify(circular));
} catch (error) {
  console.log("Error:", error.message);
}
