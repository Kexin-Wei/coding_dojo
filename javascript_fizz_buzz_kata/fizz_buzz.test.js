import { expect, test } from "vitest";
import {
  divide_by_3,
  divide_by_5,
  replace_number_by_fizz_buzz,
  generate_a_list,
    fizz_buzz,
} from "./fizz_buzz.js";

test("divisible by 3", () => {
  expect(divide_by_3(3)).toBe(true);
  expect(divide_by_3(6)).toBe(true);
  expect(divide_by_3(396)).toBe(true);
});

test("not divisible by 3", () => {
  expect(divide_by_3(1)).toBe(false);
  expect(divide_by_3(2)).toBe(false);
  expect(divide_by_3(397)).toBe(false);
});

test("divisible by 5", () => {
  expect(divide_by_5(5)).toBe(true);
  expect(divide_by_5(10)).toBe(true);
  expect(divide_by_5(400)).toBe(true);
});

test("not divisible by 5", () => {
  expect(divide_by_5(1)).toBe(false);
  expect(divide_by_5(2)).toBe(false);
  expect(divide_by_5(401)).toBe(false);
});

test("replace number by fizz buzz", () => {
  expect(replace_number_by_fizz_buzz(3)).toBe("Fizz");
  expect(replace_number_by_fizz_buzz(5)).toBe("Buzz");
  expect(replace_number_by_fizz_buzz(15)).toBe("FizzBuzz");
  expect(replace_number_by_fizz_buzz(1)).toBe("1");
});

test("generate a list of n numbers", () => {
  expect(generate_a_list(0)).toEqual([]);
  expect(generate_a_list(1)).toEqual(["1"]);
  expect(generate_a_list(3)).toEqual(["1", "2", "3"]);
  expect(generate_a_list(5)).toEqual(["1", "2", "3", "4", "5"]);
});

test("fizz buzz", () => {
    expect(fizz_buzz(15)).toEqual([
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
    ]);
  expect(fizz_buzz(5)).toEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
  ]);
});
