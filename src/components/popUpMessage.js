import useStore from "../utils/store";


export function PopUpMessage () {
  const colorClass = ["white", "#fdca40", "#df2935"];

  const resetPlayer = useStore((state) => state.resetPlayer)
  const resetWinner = useStore((state) => state.resetWinner)
  const resetMatrix = useStore((state) => state.resetMatrix)
  const player1Win = useStore((state) => state.player1Win)
  const player2Win = useStore((state) => state.player2Win)
  const winner = useStore((state) => state.winner)

  if(winner === 0) return null;

  const Restart = (e) => {
    e.preventDefault();
    if(winner === 1) player1Win();
    if(winner === 2) player2Win();
    resetMatrix();
    resetPlayer();
    resetWinner();
  };

  return (
    <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 3px 16px rgba(0,0,0,0.5)', textAlign: 'center'}}>
        <h2 style={{fontSize: '1.2rem', marginBottom: '10px', padding: '10px', borderRadius: '8px', backgroundColor: colorClass[winner]}}>
          Player {winner} wins!
        </h2>
        <button
          style={{backgroundColor: '#3f51b5', color: 'white', border: 0, borderRadius: '5px', padding: '10px 20px', fontWeight: 'bold'}}
          onClick={(e) => Restart(e)}
        > Restart
        </button>
      </div>
    </div>
  )
};
