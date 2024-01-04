import { describe, test, expect } from "vitest";
import matloop from "./index";

const numMatrix = [
  [1, 2, 3],
  [4, 5, 6, 7],
  [8, 9],
  [10, 11, 12, 13],
  [14, 15],
];

const strMatrix = [
  ["Rahul", "Saurav", "Harsh"],
  ["Gaurav", "Prakash"],
  ["Kavi"],
];

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const strList = ["Rahul", "Saurav", "Harsh", "Gaurav", "Prakash", "Kavi"];

describe("matloop", () => {
  test("Loop over a 2 dimensional array", () => {
    let i = 0;
    for (const element of matloop<number>(numMatrix)) {
      expect(element).toBe(numList[i]);
      i += 1;
    }

    let j = 0;
    for (const element of matloop<string>(strMatrix)) {
      expect(element).toBe(strList[j]);
      j += 1;
    }
  });
});
