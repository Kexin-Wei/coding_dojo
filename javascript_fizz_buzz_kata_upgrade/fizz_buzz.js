export function divide_by_3(num) {
    return num % 3 === 0;
}

export function divide_by_5(num) {
    return num % 5 === 0;
}

export function has_3(num) {
    return num.toString().includes("3");
}

export function has_5(num) {
    return num.toString().includes("5");
}

export function should_be_fizz(num) {
    return divide_by_3(num) || has_3(num);
}

export function should_be_buzz(num) {
    return divide_by_5(num) || has_5(num);
}

export function replace_number_by_fizz_buzz(num) {
    if (should_be_fizz(num) && should_be_buzz(num)) {
        return "FizzBuzz";
    }
    if (should_be_fizz(num)) {
        return "Fizz";
    }
    if (should_be_buzz(num)) {
        return "Buzz";
    }
    return num.toString();
}

export function generate_a_list(n) {
    return Array.from({ length: n }, (_, i) => (i+1).toString());
}

export function fizz_buzz(n) {
    return Array.from({ length: n }, (_, i) => replace_number_by_fizz_buzz(i+1));
}
