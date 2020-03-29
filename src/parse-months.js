export const range = (start, end, cycleSize) => {
  if (end < start) return range(start, cycleSize + end, cycleSize);

  return new Array(end - start + 1)
    .fill()
    .map((_, i) => ((start + i - 1) % cycleSize) + 1);
};

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
  }
};

const parseRegExp = /(\w+)-(\w+) \(Northern\) \/ (\w+)-(\w+) \(Southern\)/;
export const parseMonths = (monthStr) => {
  if (monthStr === "Year-round (Northern and Southern)") {
    return {
      northern: range(1, 12, 12),
      southern: range(1, 12, 12),
    };
  }
  const [startNorth, endNorth, startSouth, endSouth] = parseRegExp
    .exec(monthStr)
    .slice(1)
    .map(monthToNum);

  return {
    northern: range(startNorth, endNorth, 12),
    southern: range(startSouth, endSouth, 12),
  };
};
