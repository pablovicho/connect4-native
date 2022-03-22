  //diagonal check!!
  function diagonal(matrix) {
  for (let j = 0; j < matrix.length; j++) {
    //the horizontal axis
    let xCounter = 0;
    let yCounter = 0;
    let xWin = false;
    let yWin = false;

    for (let k = 0; k < matrix.length + 1; k++) {
      //the vertical axis
      if (xCounter >= 4) {xWin = true}
      if (yCounter >= 4) {yWin = true} 

      if (k + j < matrix.length) {
        if (matrix[k][k + j] === 1) {yCounter = 0;xCounter++}
        if (matrix[k][k + j] === 2) {xCounter = 0;yCounter++}
        if (matrix[k][k + j] === 0) {xCounter = 0;yCounter = 0}
      }
    }
    if (xWin) {return 1} else if (yWin) {return 2}
}
}

export default diagonal