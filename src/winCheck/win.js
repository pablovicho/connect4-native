import diagonal from "./diagonal";
import reverseDiagonal from "./reverseDiagonal";
import horizontal from "./horizontal";
import vertical from "./vertical";

function whoWon(matrix) {
  if (
    horizontal(matrix) === 1 ||
    vertical(matrix) === 1 ||
    diagonal(matrix) === 1 ||
    reverseDiagonal(matrix) === 1
  ) {
    console.log(`player 1 won!`);
    return 1;
  }

  if (
    horizontal(matrix) === 2 ||
    vertical(matrix) === 2 ||
    diagonal(matrix) === 2 ||
    reverseDiagonal(matrix) === 2
  ) {
    console.log(`player 2 won!`);
    return 2;
  }

  return 0;
}

export default whoWon;
