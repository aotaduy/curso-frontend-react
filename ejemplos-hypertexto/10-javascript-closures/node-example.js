"use strict";

console.log("=== 10 Closures (Node.js) ===");

function createCounter(label) {
  let count = 0;
  return function increment() {
    count += 1;
    console.log(`${label}: ${count}`);
    return count;
  };
}

const counterA = createCounter("A");
const counterB = createCounter("B");

counterA();
counterA();
counterB();
counterA();
counterB();

console.log("Each closure keeps independent private state.");
