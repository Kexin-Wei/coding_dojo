import { expect, test } from "vitest";
import {
  divide_by_3,
  divide_by_5,
  generate_a_list,
  replace_number_by_fizz_buzz,
  fizz_buzz,
} from "./fizz_buzz.js";

test.each([
  [3, true],
  [6, true],
  [396, true],
])("%i divisible by 3", (input, expected) => {
  expect(divide_by_3(input)).toBe(expected);
});

test.each([
  [1, false],
  [2, false],
  [397, false],
])("%i not divisible by 3", (input, expected) => {
  expect(divide_by_3(input)).toBe(expected);
});

test.each([
  [5, true],
  [10, true],
  [400, true],
])("%i divisible by 5", (input, expected) => {
  expect(divide_by_5(input)).toBe(expected);
});

test.each([
  [1, false],
  [2, false],
  [401, false],
])("%i not divisible by 5", (input, expected) => {
  expect(divide_by_5(input)).toBe(expected);
});

test.each([
  [3, "Fizz"],
  [5, "Buzz"],
  [15, "FizzBuzz"],
  [1, "1"],
])("replace %i by fizz buzz", (input, expected) => {
  expect(replace_number_by_fizz_buzz(input)).toBe(expected);
});

test.each([
  [0, []],
  [1, ["1"]],
  [3, ["1", "2", "3"]],
  [5, ["1", "2", "3", "4", "5"]],
])("generate a list of %i numbers", (input, expected) => {
  expect(generate_a_list(input)).toEqual(expected);
});

test.each([
  [5, ["1", "2", "Fizz", "4", "Buzz"]],
  [
    15,
    [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ],
  ],
])("fizz buzz with %i", (input, expected) => {
  expect(fizz_buzz(input)).toEqual(expected);
});
