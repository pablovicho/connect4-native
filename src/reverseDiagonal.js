  //diagonal check!!
  function reverseDiagonal(matrix) {
    let win = 0
    for (let j = 0; j < matrix.length; j++) { //the horizontal axis
      
      let xCounter = 0;
      let yCounter = 0;
      let xWin = false;
      let yWin = false;
    
      for (let k = 0; k < matrix.length + 2; k++) { //the vertical axis
        if (xCounter >= 4) {xWin = true}
        if (yCounter >= 4) {yWin = true}
        let horizontal = k
        let vertical = j-k
  
        if (k + 1 < matrix.length && j-k>=0) {
            if(matrix[horizontal][vertical]===1){
                yCounter=0;xCounter++}
            if(matrix[horizontal][vertical]===2){
                xCounter=0;yCounter++}
            if (matrix[horizontal][vertical] === 0) {
                xCounter = 0;yCounter = 0}
                
        }
      }
      if(xWin) win = 1
      if(yWin) win = 2
  }
  return win
  }
  
  export default reverseDiagonal