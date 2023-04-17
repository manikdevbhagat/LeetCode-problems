var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let set = new Set();
    for (let j = 0; j < 9; j++) {
      if (set.has(board[i][j]) && board[i][j] !== ".") {
        return false;
      } else {
        set.add(board[i][j]);
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    let set = new Set();
    for (let j = 0; j < 9; j++) {
      if (set.has(board[j][i]) && board[j][i] !== ".") {
        return false;
      } else {
        set.add(board[j][i]);
      }
    }
  }
  let i = 0,
    j = 0,
    x = 0,
    y = 0;

  while (x < 9) {
    let set = new Set();

    while (i < 3) {
      if (set.has(board[i + x][j + y]) && board[i + x][j + y] !== ".") {
        return false;
      } else {
        set.add(board[i + x][j + y]);
      }
      j++;
      if (j > 2) {
        j = 0;
        i++;
      }
    }

    i = 0;
    j = 0;
    y = y + 3;
    if (y > 8) {
      y = 0;
      x = x + 3;
    }
  }

  return true;
};

var board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku(board));
