const { range, uniq, flatten } = require("./util");

// There's some inconsistency in the data around how AM/PM is formatted.
const timeRegExp = /(\d+) (a\.?m\.?|p\.?m\.?)/;
const timeToNum = (timeStr) => {
  if (!timeStr.match(timeRegExp))
    throw new Error(`Invalid time string: ${timeStr}`);

  const [hourStr, amPm] = timeRegExp.exec(timeStr).slice(1);
  const hour = parseInt(hourStr, 10);
  return amPm[0] === "a" ? hour : hour + 12;
};
exports.timeToNum = timeToNum;

// 4 a.m. - 8 a.m., 4 p.m. - 7 p.m.
const parseTime = (rawStr) => {
  if (!rawStr) return [];
  const rangeStrs = rawStr.split(", ");
  const numRanges = rangeStrs.map((rangeStr) => {
    if (rangeStr === "All day") return range(1, 24, 24);
    const [start, end] = rangeStr.split(" - ").map(timeToNum);
    return range(start, end, 24);
  });
  return uniq(flatten(numRanges)).sort((a, b) => a - b);
};
exports.parseTime = parseTime;
