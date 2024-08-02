import { sum } from "../Sum"

test("Sum function should calculate the sum of twonumbers", () => {
  const result = sum(3, 4);

  // the below line is know as Assertion
  expect(result).toBe(7);
})