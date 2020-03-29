const range = (start, end, cycleSize) => {
  if (end < start) return range(start, cycleSize + end, cycleSize);

  return new Array(end - start + 1)
    .fill()
    .map((_, i) => ((start + i - 1) % cycleSize) + 1);
};
exports.range = range;

const monthToNum = (month) => {
  switch (month) {
    case "January":
      return 1;
    case "February":
      return 2;
    case "March":
      return 3;
    case "April":
      return 4;
    case "May":
      return 5;
    case "June":
      return 6;
    case "July":
      return 7;
    case "August":
      return 8;
    case "September":
      return 9;
    case "October":
      return 10;
    case "November":
      return 11;
    case "December":
      return 12;
    default:
      throw new Error(`Invalid month: ${month}`);
  }
};

const flatten = (arrs) => [].concat(...arrs);
const uniq = (arr) => [...new Set(arr)];

const strRangesToNumRange = (rawStr) => {
  const strRanges = rawStr.split(", ");
  const numRanges = strRanges.map((strRange) => {
    const months = strRange.split("-").map(monthToNum);

    return months.length === 1 ? [months[0]] : range(months[0], months[1], 12);
  });
  return uniq(flatten(numRanges)).sort((a, b) => a - b);
};

const getHemiStrsRegExp = /(.+) \(Northern\) \/ (.+) \(Southern\)/;
const parseMonths = (monthStr) => {
  if (monthStr === "Year-round (Northern and Southern)") {
    return {
      northern: range(1, 12, 12),
      southern: range(1, 12, 12),
    };
  }

  if (!monthStr.match(getHemiStrsRegExp)) {
    throw new Error(`Bad month str ${monthStr}`);
  }
  const [northStr, southStr] = getHemiStrsRegExp.exec(monthStr).slice(1);

  return {
    northern: strRangesToNumRange(northStr),
    southern: strRangesToNumRange(southStr),
  };
};
exports.parseMonths = parseMonths;
