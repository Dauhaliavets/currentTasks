const getBattleshipCount = board => {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            if (board[i][j] === '.') continue;
            if (i > 0 && board[i - 1][j] === 'X') continue;
            if (j > 0 && board[i][j - 1] === 'X') continue;

            count++;
        }
    }
    return count;
}

const board2 = [
    ['X', '.', '.', 'X'],
    ['.', '.', '.', 'X'],
    ['.', '.', '.', 'X'],
]

const board3 = [
    ['X', '.', '.', 'X', '.', 'X', '.', 'X'],
    ['.', '.', '.', 'X', '.', 'X', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['X', 'X', 'X', 'X', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', 'X', 'X', '.'],
    ['.', '.', 'X', '.', 'X', '.', '.', '.']
]
const board4 = [
    ['.', '.', 'X', '.'],
    ['.', 'X', '.', 'X'],
    ['.', 'X', '.', 'X'],
]

console.log(getBattleshipCount(board2));
console.log(getBattleshipCount(board3));
console.log(getBattleshipCount(board4));