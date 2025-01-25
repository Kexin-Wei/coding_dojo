mod mineboard;
use mineboard::{
    generate_mine_board, generate_mine_board_with_numbers, minesweeper_board_to_string,
};

mod get_array_setup;
use get_array_setup::{get_array_size, get_mine_location};

fn generate_number_mine_board(
    rows: usize,
    cols: usize,
    mines: &Vec<(usize, usize)>,
) -> Vec<Vec<char>> {
    let mine_board = generate_mine_board(rows, cols, mines);
    generate_mine_board_with_numbers(&mine_board)
}

fn main() {
    let board = get_array_size();
    let rows = board.0;
    let cols = board.1;
    println!("Board size: {}x{}", rows, cols);

    let mines = get_mine_location();

    let mines_board = generate_mine_board(rows, cols, &mines);
    println!(
        "The minesweeper board is created: \n{}",
        minesweeper_board_to_string(&mines_board)
    );

    let number_board = generate_mine_board_with_numbers(&mines_board);
    println!(
        "The minesweeper board with numbers is created: \n{}",
        minesweeper_board_to_string(&number_board)
    )
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_generate_mine_board() {
        let rows = 4;
        let cols = 4;
        let mines = vec![(0, 0), (2, 3), (1, 2)];
        let board = generate_number_mine_board(rows, cols, &mines);
        println!("{}", minesweeper_board_to_string(&board));
        assert_eq!(
            minesweeper_board_to_string(&board),
            "*211\n12*2\n.12*\n..11\n"
        );
    }
}
