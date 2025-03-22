import { expect, test } from "vitest";
import {
  divide_by_3,
  divide_by_5,
  has_3,
  has_5,
  should_be_fizz,
  should_be_buzz,
  replace_number_by_fizz_buzz,
  generate_a_list,
  fizz_buzz,
} from "./fizz_buzz.js";

// test divide_by_3
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

// test divide_by_5
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

// test has_3
test.each([
  [3, true],
  [13, true],
  [23, true],
])("%i has 3", (input, expected) => {
  expect(has_3(input)).toBe(expected);
});

test.each([
  [2, false],
  [11, false],
  [22, false],
])("%i does not have 3", (input, expected) => {
  expect(has_3(input)).toBe(expected);
});

// test has_5
test.each([
  [5, true],
  [51, true],
  [515, true],
])("%i has 5", (input, expected) => {
  expect(has_5(input)).toBe(expected);
});

test.each([
  [2, false],
  [11, false],
  [22, false],
])("%i does not have 5", (input, expected) => {
  expect(has_5(input)).toBe(expected);
});

// test should_be_fizz
test.each([
  [3, true],
  [13, true],
  [31, true],
])("% should be fizz", (input, expected) => {
  expect(should_be_fizz(input)).toBe(expected);
});

test.each([
  [2, false],
  [11, false],
  [22, false],
])("%i should not be fizz", (input, expected) => {
  expect(should_be_fizz(input)).toBe(expected);
});

// test should_be_buzz
test.each([
  [5, true],
  [51, true],
  [55, true],
])("%i should be buzz", (input, expected) => {
  expect(should_be_buzz(input)).toBe(expected);
});

test.each([
  [2, false],
  [11, false],
  [22, false],
])("%i should not be buzz", (input, expected) => {
  expect(should_be_buzz(input)).toBe(expected);
});


// test replace_number_by_fizz_buzz
test.each([
  [3, "Fizz"],
  [5, "Buzz"],
  [53, "FizzBuzz"],
  [1, "1"],
])("replace %i by fizz buzz", (input, expected) => {
  expect(replace_number_by_fizz_buzz(input)).toBe(expected);
});

// test generate_a_list
test.each([
  [0, []],
  [1, ["1"]],
  [3, ["1", "2", "3"]],
  [5, ["1", "2", "3", "4", "5"]],
])("generate a list of %i numbers", (input, expected) => {
  expect(generate_a_list(input)).toEqual(expected);
});

// test fizz_buzz
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
      "Fizz",
      "14",
      "FizzBuzz",
    ],
  ],
])("fizz buzz with %i", (input, expected) => {
  expect(fizz_buzz(input)).toEqual(expected);
});
