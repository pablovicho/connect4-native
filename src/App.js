import React, {useState} from 'react';
import './App.css';
import Column from './Column';
import updateMatrix from './updateMatrix';
import whoWon from './win'

//player 1 = 1
//player 2 = 2
//no player = 0

function App() {
  const [player, usePlayer] = useState(1)
  const initialMatrix=[[0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0]]
  const [rowCol, useRowCol] = useState(initialMatrix)

  function column(i){
    return rowCol.map(function(value) { return value[i]})
  }

  const HandleClick =(e,i)=> {
    e.preventDefault()
    const col=column(i)
    useRowCol(updateMatrix(rowCol,col,player,i));
    usePlayer(player=>player === 1 ? 2 : 1)
    whoWon(rowCol)
  }

  return (
    <main>
    <h1>Turn: {player}</h1>
    <div style={{display:'flex', flexDirection:'row'}}>

    {rowCol.map((col, index)=>{
      return <div className="col" key={index}>
            <button onClick={(e)=>HandleClick(e,index)}>
                <Column playerCol={column(index).reverse()} i={index}/> 
            </button>
      </div>
    })}

    {/* this .map only iterates row times, not col times, so it misses the last column: */}

    <div className="col">
            <button onClick={(e)=>HandleClick(e,6)}>
                <Column playerCol={column(6).reverse()} i={6}/> 
            </button>
      </div>

      </div>
    </main>
  );
}

export default App;