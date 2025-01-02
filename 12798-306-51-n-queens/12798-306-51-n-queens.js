/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
  const results = [];
  

  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }

  function backtrack(row, board) {
    if (row === n) {
      results.push(board.map((row) => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = 'Q';

        backtrack(row + 1, board);

        board[row][col] = '.';
      }
    }
  }

  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  
  backtrack(0, board);
  
  return results;



};