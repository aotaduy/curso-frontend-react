"use strict";

console.log("=== 12 Async/Await (Node.js) ===");

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function runFlow() {
  try {
    console.log("Start...");
    const user = await delay(300, { id: 1, name: "Ana" });
    console.log("User:", user);

    const posts = await delay(400, ["post-1", "post-2"]);
    console.log("Posts:", posts);

    console.log("Finished successfully");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

runFlow();
