import * as challenge from "./js11";

test("should return correct string", () => {
  expect(challenge.greet()).toBe("Hello, nice to meet you");
});

test("should return addition", () => {
  expect(challenge.sumTwoNumbers(4, 5)).toBe(9);
});

test("should return correct string", () => {
  expect(challenge.checkLarger(4, 5)).toBe(`5 is bigger than 4`);
  expect(challenge.checkLarger(6, 3)).toBe(`6 is bigger than 3`);
  expect(challenge.checkLarger(2, 2)).toBe("Both numbers are equal");
});

test("Sould filter names", () => {
  expect(challenge.filterByLength(["Cristiana", "Daniela"])).toBe(
    "Sorry, no valid names supplied"
  );
  expect(challenge.filterByLength(["Cristiana", "Daniela", "Pedro"])).toEqual([
    "Pedro",
  ]);
  expect(challenge.filterByLength(["Ana", "João", "Pedro"])).toEqual([
    "Ana",
    "João",
    "Pedro",
  ]);
});

test("should reduced number", () => {
  expect(challenge.reduceNumbers([400, 90, 200], 100)).toEqual([255, 0, 100]);
});
