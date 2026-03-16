"use strict";

console.log("=== 11 Prom,esas (Node.js) ===");

function fakeRequest(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ status: 200, data: ["A", "B", "C"] });
      } else {
        reject(new Error("Simulated network error"));
      }
    }, 500);
  });
}

console.log("State: pending...");
fakeRequest(true)
  .then((res) => {
    console.log("Step 1 fulfilled:", res);
    return res.data.map((item) => item.toLowerCase());
  })
  .then((items) => {
    console.log("Step 2 transformed:", items);
    return new Promise((resolve) => {
      setTimeout(() => resolve(items.length), 250);
    });
  })
  .then((count) => {
    console.log("Step 3 contador promesas encadenadas:", count);
    if (count < 4) {
      throw new Error("Error generated in chain to demonstrate shared catch");
    }
    return count;
  })
  .then((count) => {
    console.log("Step 4 no corrre si el paso anterior dio error:", count);
  })
  .catch((err) => {
    console.log("catch compartido:", err.message);
  })
  .finally(() => {
    console.log("Cadena finalizada.");
  });
