import React, {useState} from 'react';
import './App.css';
import Column from './Column';
import toggleItem from './updateMatrix';

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
    useRowCol(toggleItem(col,player));
    usePlayer(player=>player === 1 ? 2 : 1)
    // console.log(rowCol)
  }

  return (
    <main>
    <h1>Turn: {player}</h1>
    <div style={{display:'flex', flexDirection:'row'}}>
      <div className="col">
            <button onClick={(e)=>HandleClick(e,0)}>
                <Column playerCol={column(0)} i={0}/> 
            </button>
      </div>
      <div className="col">
            <button onClick={(e)=>HandleClick(e,1)}>
                <Column playerCol={column(1)} i={1}/>
              </button>
      </div>
      <div className="col">
            <button onClick={(e)=>HandleClick(e,2)}>
                <Column playerCol={column(2)} i={2}/> 
            </button>
      </div>
      <div className="col">
            <button onClick={(e)=>HandleClick(e,3)}>
                <Column playerCol={column(3)} i={3}/> 
            </button>
      </div>
      <div className="col">
            <button onClick={(e)=>HandleClick(e,4)}>
                <Column playerCol={column(4)} i={4}/> 
            </button>
      </div>
      <div className="col">
            <button onClick={(e)=>HandleClick(e,5)}>
                <Column playerCol={column(5)} i={5}/> 
            </button>
      </div>
      <div className="col">
            <button onClick={(e)=>HandleClick(e,6)}>
                <Column playerCol={column(6)} i={6}/> 
            </button>
      </div>
      </div>
    </main>
  );
}

export default App;