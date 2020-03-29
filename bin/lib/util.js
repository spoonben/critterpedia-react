const range = (start, end, cycleSize) => {
  if (end < start) return range(start, cycleSize + end, cycleSize);

  return new Array(end - start + 1)
    .fill()
    .map((_, i) => ((start + i - 1) % cycleSize) + 1);
};

const flatten = (arrs) => [].concat(...arrs);
const uniq = (arr) => [...new Set(arr)];

module.exports = {
  range,
  flatten,
  uniq,
};
