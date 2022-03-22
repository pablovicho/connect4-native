import React, { useState } from "react";
import "./App.css";
import Column from "./Column";
import updateMatrix from "./updateMatrix";
import whoWon from "./win";
import Circle from "./Circle";

//player 1 = 1
//player 2 = 2
//no player = 0

function App() {
  const [player, usePlayer] = useState(1);
  const initialMatrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  const [rowCol, useRowCol] = useState(initialMatrix);
  let [winner, useWinner] = useState(0);

  function column(i) {
    return rowCol.map(function (value) {
      return value[i];
    });
  }

  const Winner = () => {
    const colorClass = ["none", "player1", "player2"];
    return winner > 0 ? (
      <div style={{marginLeft:'195px'}}>
        <h1 className={colorClass[winner]}>Player {winner} wins!</h1>
      </div>
    ) : null;
  };

  const HandleClick = (e, i) => {
    e.preventDefault();
    const col = column(i);
    useRowCol(updateMatrix(rowCol, col, player, i));
    usePlayer((player) => (player === 1 ? 2 : 1));
    useWinner(whoWon(rowCol));
  };

  return (
    <main>
      {winner===0 ? (
        <div  style={{ display: "flex", flexDirection: "row", marginLeft:'30px' }}>
        <h1>Turn:</h1>
        <Circle player={player} />
        <h1 style={{marginLeft:'90px', fontSize:'2rem'}}>Connect4!</h1>
        </div>)
        :
        <Winner className="winner" />
      }
        
      <div className="board" style={{ display: "flex", flexDirection: "row" }}>
        {rowCol.map((col, index) => {
          return (
            <div className="col" key={index}>
              <div onClick={(e) => HandleClick(e, index)}>
                <Column playerCol={column(index).reverse()} />
              </div>
            </div>
          );
        })}

        {/* this .map only iterates row times, not col times, so it misses the last column: */}

        <div className="col">
          <div onClick={(e) => HandleClick(e, 6)}>
            <Column playerCol={column(6).reverse()} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
