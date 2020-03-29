import { parseMonths } from "./parse-months";
import { range } from "./util";

test("Simple range", () => {
  expect(range(1, 3, 5)).toEqual([1, 2, 3]);
});

test("Looped range", () => {
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
    northern: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12],
    southern: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  });
});
