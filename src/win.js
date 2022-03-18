function whoWon(matrix) {
    function column(i){return matrix.map(value => {return value[i]})}
    let win = 0

for(let i = 0; i<matrix.length;i++){ //horizontal check
    const row = matrix[i]
    let xCounter = 0
    let yCounter = 0
    let xWin = false
    let yWin = false

    row.forEach((element)=>{
        if(xCounter>=4){xWin=true}
        if(yCounter>=4){yWin=true}

        if(element===1){yCounter=0;xCounter++} 
        if(element===2){xCounter=0;yCounter++}
    })
    if(xWin) {win=1} else if(yWin){win=2}
}

for(let i = 0; i<matrix.length+1;i++){ //vertical check
    const col = column(i)
    let xCounter = 0
    let yCounter = 0
    let xWin = false
    let yWin = false

    col.forEach((element)=>{
        if(xCounter>=4){xWin=true}
        if(yCounter>=4){yWin=true}

        if(element===1){yCounter=0;xCounter++} 
        if(element===2){xCounter=0;yCounter++} 
    })
    if(xWin) {win=1} else if(yWin){win=2}
}

//diagonal check!!
for(let j=0; j<matrix.length; j++){ //the horizontal axis
    let xCounter = 0
    let yCounter = 0
    let xWin = false
    let yWin = false
    let i = 0

    for(let k=0;k<matrix.length+1;k++){ //the vertical axis
        if(xCounter>=4){xWin=true}
        else if(yCounter>=4){yCounter=true}

        if(matrix[k+i][k]===1){yCounter=0;xCounter++}
        if(matrix[k+i][k]===2){xCounter=0;yCounter++}

        // if(matrix[matrix.length-(k+j)][matrix.length-(k+i)+1]===1){ //reverse diagonal
        //     yCounter=0;xCounter++}
        // if(matrix[matrix.length-(k+j)][matrix.length-(k+i)+1]===2){
        //     xCounter=0;yCounter++}
        i++
}
if(xWin) {win=1} else if(yWin){win=2}
i++
}

if(win>0){console.log(`${win} won!`)}
return win
}

export default whoWon

