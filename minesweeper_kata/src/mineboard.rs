pub fn minesweeper_board_to_string(board: &Vec<Vec<char>>) -> String {
    let mut result = String::new();

    for row in board {
        for cell in row {
            result.push(*cell);
        }
        result.push('\n');
    }
    result
}

pub fn generate_mine_board(
    rows: usize,
    cols: usize,
    mines: &Vec<(usize, usize)>,
) -> Vec<Vec<char>> {
    let mut board = vec![vec!['.'; cols as usize]; rows as usize];
    for (row, col) in mines {
        if row >= &rows || col >= &cols {
            continue;
        }
        board[*row as usize][*col as usize] = '*';
    }
    board
}

fn count_adjacent_mines(board: &Vec<Vec<char>>, row: usize, col: usize) -> usize {
    let rows = board.len();
    let cols = board[0].len();

    let mut count = 0;
    for i in row.saturating_sub(1)..=(row + 1).min(rows - 1) {
        for j in col.saturating_sub(1)..=(col + 1).min(cols - 1) {
            if i < board.len() && j < board[0].len() && board[i][j] == '*' {
                count += 1;
            }
        }
    }
    count
}

pub fn generate_mine_board_with_numbers(mines_board: &Vec<Vec<char>>) -> Vec<Vec<char>> {
    let rows = mines_board.len();
    let cols = mines_board[0].len();
    let mut number_board = mines_board.clone();
    for row in 0..rows {
        for col in 0..cols {
            if mines_board[row][col] != '*' {
                let _count = count_adjacent_mines(&mines_board, row, col) as u32;
                if _count == 0 {
                    continue;
                }
                number_board[row][col] = char::from_digit(_count, 10).unwrap();
            }
        }
    }
    number_board
}

#[cfg(test)]
mod tests {
    use super::*;

    // test single element
    #[test]
    fn test_single_element() {
        let board = vec![vec!['*']];
        let result = minesweeper_board_to_string(&board);
        assert_eq!(result, "*\n");
    }

    // test a 2x2 board
    #[test]
    fn test_2x2_board() {
        let board = vec![vec!['*', '1'], vec!['1', '1']];
        let result = minesweeper_board_to_string(&board);
        assert_eq!(result, "*1\n11\n");
    }
    // test a 3x3 board
    #[test]
    fn test_3x3_board() {
        let board = vec![
            vec!['*', '1', '0'],
            vec!['1', '2', '1'],
            vec!['0', '1', '*'],
        ];
        let result = minesweeper_board_to_string(&board);
        assert_eq!(result, "*10\n121\n01*\n");
    }

    // generate a board
    #[test]
    fn test_generate_board() {
        let mines = vec![(0, 0), (1, 1)];
        let board = generate_mine_board(2, 2, &mines);
        let result = minesweeper_board_to_string(&board);
        assert_eq!(result, "*.\n.*\n");
    }

    // test a 3x3 board with 1 mine
    #[test]
    fn test_3x3_board_with_1_mine() {
        let mines = vec![(0, 0)];
        let board = generate_mine_board(3, 3, &mines);
        let result = minesweeper_board_to_string(&board);
        assert_eq!(result, "*..\n...\n...\n");
        let result = count_adjacent_mines(&board, 1, 1);
        assert_eq!(result, 1);
    }

    // test a 3x3 board with 3 mines
    #[test]
    fn test_3x3_board_with_3_mines() {
        let mines = vec![(0, 0), (1, 0), (2, 2)];
        let board = generate_mine_board(3, 3, &mines);
        let result = minesweeper_board_to_string(&board);
        assert_eq!(result, "*..\n*..\n..*\n");

        let result = count_adjacent_mines(&board, 1, 1);
        assert_eq!(result, 3);
    }

    // test generate board with number from mines_board
    #[test]
    fn test_generate_board_with_number_from_mines_board() {
        let mines = vec![(0, 0), (1, 0), (2, 2)];
        let board = generate_mine_board(3, 3, &mines);
        assert_eq!(minesweeper_board_to_string(&board), "*..\n*..\n..*\n");
        let number_board = generate_mine_board_with_numbers(&board);
        assert_eq!(
            minesweeper_board_to_string(&number_board),
            "*20\n*31\n12*\n"
        );
    }
}
