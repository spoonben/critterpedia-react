import { range, parseMonths } from "./parse-months";

test("Simple range", () => {
  expect(range(1, 3, 5)).toEqual([1, 2, 3]);
});

test("Looped range", () => {
  console.log("LOOPED RANGE", range(4, 1, 5));
  expect(range(4, 1, 5)).toEqual([4, 5, 1]);
});

test("Parse months that differ across hemispheres", () => {
  expect(parseMonths("Year-round (Northern and Southern)")).toEqual({
    northern: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    southern: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  });
});

test("Parse months that differ across hemispheres", () => {
  expect(
    parseMonths("September-June (Northern) / March-December (Southern)")
  ).toEqual({
    northern: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
    southern: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  });
});
