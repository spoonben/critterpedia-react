import { range } from "./util";

test("Simple range", () => {
  expect(range(1, 3, 5)).toEqual([1, 2, 3]);
});

test("Looped range", () => {
  expect(range(4, 1, 5)).toEqual([4, 5, 1]);
});
