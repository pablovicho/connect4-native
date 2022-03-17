const updateMatrix = (matrix, column, value, i) => {
  let flagged = false

  const updateCol = (element) => { //this changes only the first element that is a 0
    if(flagged === false) {
    if (element === 0) {
        flagged=true
        return value
    } else {return element}
  } else {return element}
  }

  const updated = column.map((element)=>{return updateCol(element)})

  const newMatrix = matrix
  
    for(let j = 0; j<matrix.length; j++){
      for(let k = 0; k<matrix.length+1; k++){
        if(k===i){
          newMatrix[j][k]=updated[j]
        }
      } 
    }
  return newMatrix
}

  export default updateMatrix