const { timeToNum, parseTime } = require("./parse-time");

test("Multiple time ranges", () => {
  expect(parseTime("4 a.m. - 8 a.m., 4 p.m. - 7 p.m.")).toEqual([
    4,
    5,
    6,
    7,
    8,
    16,
    17,
    18,
    19,
  ]);
});

test("timeToNum: AM hour", () => {
  expect(timeToNum("4 a.m.")).toEqual(4);
});
test("timeToNum: PM hour", () => {
  expect(timeToNum("10 p.m.")).toEqual(22);
});
