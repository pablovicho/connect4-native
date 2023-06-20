import useStore from "../utils/store";

function Restart() {
  const resetPlayer = useStore((state) => state.resetPlayer);
  const resetWinner = useStore((state) => state.resetWinner);
  const resetMatrix = useStore((state) => state.resetMatrix);
  const player1Win = useStore((state) => state.player1Win);
  const player2Win = useStore((state) => state.player2Win);
  const winner = useStore((state) => state.winner);
  const resetScore = useStore((state) => state.resetScore)

  const Restart = (e) => {
    e.preventDefault();
    if (winner === 1) player1Win();
    if (winner === 2) player2Win();
    resetMatrix();
    resetPlayer();
    resetWinner();
  };

  return (
    <main style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <button className="restart" onClick={(e) => Restart(e)}>
        Restart
      </button>
      <button onClick={() => resetScore()}
      style={{  backgroundColor: '#023047',
        borderRadius: '7px',
        padding: '5px',
        color: '#fdf2f2',
        fontSize: '18px',
      marginLeft: '20px'}}
      >
        Reset Score
      </button>
    </main>
  );
}

export default Restart;
