mod mineboard;
use mineboard::{
    generate_mine_board, generate_mine_board_with_numbers, minesweeper_board_to_string,
};

mod get_array_setup;
use get_array_setup::{get_array_size, get_mine_location};

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
