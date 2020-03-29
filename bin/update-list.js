const fs = require("fs");
const path = require("path");
const { bugs, fish } = require("../src/lists.json");
const { parseMonths } = require("./lib/parse-months");
const { parseTime } = require("./lib/parse-time");

bugs.forEach((bug) => {
  bug.available = parseMonths(bug.month);
  bug.available.hours = parseTime(bug.time);
});
fish.forEach((f) => {
  f.available = parseMonths(f.month);
  f.available.hours = parseTime(f.time);
});
fs.writeFileSync(
  path.join(__dirname, "../src/lists.json"),
  JSON.stringify({ bugs, fish }, null, 2)
);
