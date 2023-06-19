import useStore from "../utils/store";

export function PopUpMessage () {
  const winner = useStore((state) => state.winner)
  if(winner === 0) return null;
  // function closePopup() {
  //   document
  //     .querySelector('div[style*="background-color: rgba(0,0,0,0.5);"]')
  //     .remove();
  // }

  const colorClass = ["white", "#fdca40", "#df2935"];

  return (
    <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 3px 16px rgba(0,0,0,0.5)', textAlign: 'center'}}>
        <h2 style={{fontSize: '1.2rem', marginBottom: '10px', padding: '10px', borderRadius: '8px', backgroundColor: colorClass[winner]}}>
          Player {winner} wins!
        </h2>
        <button
          style={{backgroundColor: '#3f51b5', color: 'white', border: 0, borderRadius: '5px', padding: '10px 20px', fontWeight: 'bold'}}
          // onclick={closePopup()}
        > Restart
        </button>
      </div>
    </div>
  )
};
