use std::io::{self, Write};

fn split_input_to_tuple(input: &str) -> (usize, usize) {
    let mut split = input.trim().split(",");
    if split.clone().count() != 2 {
        panic!("Please enter two numbers separated by a comma");
    }
    let row: usize = split
        .next()
        .unwrap()
        .parse()
        .expect("Please enter a valid first number");
    let column: usize = split
        .next()
        .unwrap()
        .parse()
        .expect("Please enter a valid second number");
    (row, column)
}

pub fn get_array_size() -> (usize, usize) {
    print!("Enter the size of the board (row,column) :");
    io::stdout().flush().unwrap();
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");
    let (row, column) = split_input_to_tuple(&input);
    (row, column)
}

pub fn get_mine_location() -> Vec<(usize, usize)> {
    print!("Enter the number of mines: ");
    io::stdout().flush().unwrap();

    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");
    let number_of_mines: usize = input.trim().parse().expect("Please enter a valid number");
    let mut mines = Vec::new();
    for idx in 0..number_of_mines {
        print!("Enter the {} location of the mine (row,column) :", idx + 1);
        io::stdout().flush().unwrap();
        let mut input = String::new();
        io::stdin()
            .read_line(&mut input)
            .expect("Failed to read line");
        let (row, column) = split_input_to_tuple(&input);
        mines.push((row, column));
    }
    mines
}

#[cfg(test)]
mod tests {
    use super::*;

    // test split input to tuple
    #[test]
    fn test_split_input_to_tuple() {
        let input = "1,2"; // test a normal input
        let (row, column) = split_input_to_tuple(input);
        assert_eq!(row, 1);
        assert_eq!(column, 2);
    }
    // test a input with more than two numbers
    #[test]
    #[should_panic]
    fn test_split_input_to_tuple_panic() {
        let input = "1,2,3"; // test a input with more than two numbers
        let (row, column) = split_input_to_tuple(input);
        assert_eq!(row, 1);
        assert_eq!(column, 2);
    }
    // test a input with less than two numbers
    #[test]
    #[should_panic]
    fn test_split_input_to_tuple_panic2() {
        let input = "1"; // test a input with less than two numbers
        let (row, column) = split_input_to_tuple(input);
        assert_eq!(row, 1);
        assert_eq!(column, 2);
    }
}
