"use strict";

console.log("=== 15 DOM-like manipulation (Node.js) ===");
console.log("Node.js has no browser DOM. This script shows an equivalent model in plain objects.");

function createNode(tag, attrs = {}, children = [], text = "") {
  return { tag, attrs, children, text };
}

const root = createNode("div", { id: "app" }, [
  createNode("h1", {}, [], "JavaScript DOM in memory"),
  createNode("ul", { id: "list" }, [
    createNode("li", {}, [], "Item 1"),
    createNode("li", {}, [], "Item 2"),
  ]),
]);

function findById(node, id) {
  if (node.attrs && node.attrs.id === id) return node;
  for (const child of node.children) {
    const found = findById(child, id);
    if (found) return found;
  }
  return null;
}

const list = findById(root, "list");
list.children.push(createNode("li", {}, [], "Item 3"));
list.attrs.class = "highlight";

console.log("Updated structure:");
console.dir(root, { depth: null });
