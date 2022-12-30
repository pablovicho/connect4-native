import React, { useState, useEffect } from "react";
import "./App.css";

import Circle from "./components/Circle";
import SmallCircle from "./components/SmallCircle";
import Winner from "./components/Winner";

import updateMatrix from "./updateMatrix";
import whoWon from "./winCheck/win";
import initialMatrix from "./utils/initialMatrix";
import column from "./utils/column";

//player 1 = 1
//player 2 = 2
//no player = 0

function App() {
  const [player, usePlayer] = useState(1);
  const [matrix, useMatrix] = useState(initialMatrix);
  let [winner, useWinner] = useState(0);

  const Restart = (e) => {
    e.preventDefault();
    useMatrix(initialMatrix);
    usePlayer(1);
    useWinner(0);
  };

  const Update = (i) => {
    const col = column(matrix, i);
    useMatrix(updateMatrix(matrix, col, player, i));
  }

  const CheckWin = () => {
    useWinner(whoWon(matrix));
  }

  useEffect(() => {
    CheckWin()
  }, [matrix]);

  const HandleClick = (e, i) => {
    e.preventDefault();
    Update(i);
    usePlayer((player) => (player === 1 ? 2 : 1));
  };

  return (
    <main>
      
      {winner === 0 ? (
        <>
        <div className="upThingy">
          <div className="playerTurn">
            <h1>Turn:</h1>
            <SmallCircle player={player}/>
          </div>
          </div>
        </>
      ) : (
        <>
        <div className="upThingy">
          <Winner className="winner" winner={winner} />
        </div>
          </>
      )}

      <div className="matrix">
        {winner === 0
          ? matrix.map((row, index) => {
              return row.map((element, i) => {
                return (
                  <div key={`${index},${i}`} onClick={(e) => HandleClick(e, i)}>
                    <Circle player={element}/>
                  </div>
                );
              });
            }).reverse()
          : 
          matrix.map((row, index) => {
            return row.map((element, i) => {
              return (
                <div key={`${index},${i}`}>
                  <Circle player={element}/>
                </div>
              );
            });
          }).reverse()
          }
      </div>
      <div className="downThingy">
      <h1 className="title">Connect4</h1>
      </div>
      <button className="restart" onClick={(e) => Restart(e)}>
            Restart
          </button>
    </main>
  );
}

export default App;
