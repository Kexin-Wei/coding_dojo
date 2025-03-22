export function divide_by_3(num) {
    return num % 3 === 0;
}

export function divide_by_5(num) {
    return num % 5 === 0;
}

export function replace_number_by_fizz_buzz(num) {
    if (divide_by_3(num) && divide_by_5(num)) {
        return "FizzBuzz";
    }
    if (divide_by_3(num)) {
        return "Fizz";
    }
    if (divide_by_5(num)) {
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
