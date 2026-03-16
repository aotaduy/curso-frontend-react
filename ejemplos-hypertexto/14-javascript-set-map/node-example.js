"use strict";

console.log("=== 14 Set y Map (Node.js) ===");

const emails = ["a@utn.edu", "b@utn.edu", "a@utn.edu", "c@utn.edu"];
const uniqueEmails = [...new Set(emails)];
console.log("Unique emails with Set:", uniqueEmails);

const scores = new Map();
scores.set("Ana", 9);
scores.set("Luis", 7);
scores.set("Ana", 10);

console.log("Map size:", scores.size);
console.log("Score Ana:", scores.get("Ana"));

for (const [name, score] of scores.entries()) {
  console.log(`${name} => ${score}`);
}
