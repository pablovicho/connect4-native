function win(matrix) {
const Column=(matrix,x)=>{matrix.map((value)=>{ return value[x]})}
let win = 0

for(let i = 0; i>matrix.length;i++){
    const column = Column(i)
    const row = matrix(i)
    let xCounter, yCounter = 0
    let xWin, yWin = false

    column.forEach((element)=>{
        if(xCounter>=4){xWin=true} 
        if(yCounter>=4){yCounter=true}
        
        if(element===1){yCounter=0;xCounter++} 
        if(element===2){xCounter=0;yCounter++}
    })

    row.forEach((element)=>{
        if(xCounter>=4){xWin=true} 
        else if(yCounter>=4){yCounter=true}

        if(element===1){yCounter=0;xCounter++} 
        if(element===2){xCounter=0;yCounter++}
    })

    for(let j=0; j<row.length; j++){ //diagonally!!
        for(let k=0;k<row.length;k++){
            if(xCounter>=4){xWin=true}
            else if(yCounter>=4){yCounter=true}

            if(matrix[k+j][k+i]===1){yCounter=0;xCounter++}
            if(matrix[k+j][k+i]===2){xCounter=0;yCounter++}

            if(matrix[row.length-(k+j)][row.length-(k+i)]===1){ //reverse diagonal
                yCounter=0;xCounter++}
            if(matrix[row.length-(k+j)][row.length-(k+i)]===2){
                xCounter=0;yCounter++}
    }
    }
    if(xWin) {win=1} else if(yWin){win=2}
}
return win
}

export default win