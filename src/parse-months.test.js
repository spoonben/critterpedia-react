import { parseMonths } from "./parse-months";

test("It works", () => {
  expect(
    parseMonths("September-June (Northern) / March-December (Southern)")
  ).toBe({
    northern: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
    southern: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  });
});
