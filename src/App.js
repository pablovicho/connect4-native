import React, { useEffect } from "react";
import useStore from "./utils/store";

import "./App.css";

import Circle from "./components/Circle";
import SmallCircle from "./components/SmallCircle";
import { PopUpMessage } from "./winCheck/popUpMessage";
import column from "./utils/column";

//player 1 = 1
//player 2 = 2
//no player = 0

function App() {
  const player = useStore((state) => state.player)
  const matrix = useStore((state) => state.matrix)
  const changePlayer = useStore((state) => state.changePlayer)
  const resetPlayer = useStore((state) => state.resetPlayer)
  const resetWinner = useStore((state) => state.resetWinner)
  const checkWinner = useStore((state) => state.checkWinner)
  const resetMatrix = useStore((state) => state.resetMatrix)
  const updateMatrix = useStore((state) => state.matrixUpdater)
  const player1Win = useStore((state) => state.player1Win)
  const player2Win = useStore((state) => state.player2Win)
  const winner = useStore((state) => state.winner)
  const player1 = useStore((state) => state.player1)
  const player2 = useStore((state) => state.player2)

  const Restart = (e) => {
    e.preventDefault();
    if(winner === 1) player1Win();
    if(winner === 2) player2Win();
    resetMatrix();
    resetPlayer();
    resetWinner();
  };

  useEffect(() => {
    checkWinner();
  }, [matrix]);

  const HandleClick = (e, i) => {
    e.preventDefault();
    const col = column(matrix, i);
    updateMatrix(col, player, i)
    changePlayer();
  };

  return (
    <main>
      <div className="upThingy" style={{display: 'flex', flexDirection: 'row'}}>
        <div className="playerTurn">
          <h1>Turn:</h1>
          <SmallCircle style={{marginRight: '10px'}}/>
        </div>
        <div style={{backgroundColor: '#43bccd', borderRadius: '0 13px 13px 0'}}>
          <h3 style={{marginBottom: '0px', marginLeft: '10px', marginRight: '10px'}}>Player 1: {player1}</h3>
          <h3 style={{marginTop: '0px', marginLeft: '10px', marginRight: '10px'}}>Player 2: {player2}</h3>
        </div>
      </div>

      {winner > 0 && 
      <button onClick={(e) => Restart(e)}>
      <PopUpMessage />
      </button>}

      <div className="matrix">
        {matrix
              .map((row, index) => {
                return row.map((element, i) => {
                  return (
                    <div
                      key={`${index},${i}`}
                      onClick={(e) => HandleClick(e, i)}
                    >
                      <Circle player={element} />
                    </div>
                  );
                });
              })
              .reverse()}

      </div>
      <div className="downThingy">
        <h1 className="title">Connect4</h1>
      </div>
      <button className="restart" onClick={(e) => Restart(e)}>
        Restart
      </button>

      <div className="contact">
        <a href="https://github.com/pablovicho/connect4">
          <img
            className="logo"
            alt="github"
            src="github.png"
            style={{ height: "45px" }}
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/pablovicho/">
          <img className="logo" alt="linkedin" src="linkedin.png"></img>
        </a>
      </div>
    </main>
  );
}

export default App;
