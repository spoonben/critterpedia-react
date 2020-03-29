const fs = require("fs");
const path = require("path");
const { bugs, fish } = require("../src/lists.json");
const { parseMonths } = require("./lib/parse-months");

bugs.forEach((bug) => {
  bug.available = parseMonths(bug.month);
});
fish.forEach((f) => {
  f.available = parseMonths(f.month);
});
fs.writeFileSync(
  path.join(__dirname, "../src/lists.json"),
  JSON.stringify({ bugs, fish }, null, 2)
);
