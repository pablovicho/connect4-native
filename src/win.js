import diagonal from './diagonal'
import reverseDiagonal from './reverseDiagonal';

function whoWon(matrix) {
  function column(i) {
    return matrix.map((value) => {
      return value[i];
    });
  }
  let win = 0;

  for (let i = 0; i < matrix.length; i++) {
    //horizontal check
    const row = matrix[i];
    let xCounter = 0;
    let yCounter = 0;
    let xWin = false;
    let yWin = false;
    row.forEach((element) => {
      if (element === 1) {yCounter = 0;xCounter++;}
      if (element === 2) {xCounter = 0;yCounter++;}
      if (element === 0) {xCounter=0; yCounter=0}
      if (xCounter >= 4) {xWin = true}
      if (yCounter >= 4) {yWin = true}
    });

    if (xWin) {win = 1} else if (yWin) {win = 2}
    if (win > 0) {console.log(`${win} won!`)}
  }

  for (let i = 0; i < matrix.length + 1; i++) {
    //vertical check
    const col = column(i);
    let xCounter = 0;
    let yCounter = 0;
    let xWin = false;
    let yWin = false;

    col.forEach((element) => {
      if (element === 1) {yCounter = 0;xCounter++}
      if (element === 2) {xCounter = 0;yCounter++}
      if (element === 0) {xCounter=0; yCounter=0}
      if (xCounter >= 4) {xWin = true}
      if (yCounter >= 4) {yWin = true}
    })

    if (xWin) {win = 1} else if (yWin) {win = 2}
    if (win > 0) {console.log(`${win} won!`)}
  }

  //diagonal check!!
  diagonal(matrix) === 1 ? win=1 : diagonal(matrix,win) === 2 ? win=2 : win=0
  if (win > 0) {console.log(`${win} won!`)}

  //reverse diagonal
  reverseDiagonal(matrix) === 1 ? win=1 : reverseDiagonal(matrix,win) === 2 ? win=2 : win=0

  if (win > 0) {console.log(`${win} won!`)}
  return win;

}

export default whoWon
