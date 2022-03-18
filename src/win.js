import diagonal from './diagonal'

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
      if (xCounter >= 4) {xWin = true}
      if (yCounter >= 4) {yWin = true}

      if (element === 1) {yCounter = 0;xCounter++;}
      if (element === 2) {xCounter = 0;yCounter++;}
    });

    if (xWin) {win = 1} else if (yWin) {win = 2}
  }

  for (let i = 0; i < matrix.length + 1; i++) {
    //vertical check
    const col = column(i);
    let xCounter = 0;
    let yCounter = 0;
    let xWin = false;
    let yWin = false;

    col.forEach((element) => {
      if (xCounter >= 4) {xWin = true}
      if (yCounter >= 4) {yWin = true}

      if (element === 1) {yCounter = 0;xCounter++}
      if (element === 2) {xCounter = 0;yCounter++}
    })

    if (xWin) {win = 1} else if (yWin) {win = 2}
  }

  //diagonal check!!
  diagonal(matrix,win) === 1 ? win=1 : diagonal(matrix,win) === 2 ? win=2 : win=0

//reverse diagonal

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
        if(matrix[matrix.length-((k+j)+1)][matrix[0].length-k]===1){ 
            yCounter=0;xCounter++}
        if(matrix[matrix.length-((k+j)+1)][matrix[0].length-k]===2){
            xCounter=0;yCounter++}
  }
  if (xWin) {win = 1} else if (yWin) {win = 2}
}
}

  if (win > 0) {console.log(`${win} won!`)}
  return win;

}

export default whoWon
