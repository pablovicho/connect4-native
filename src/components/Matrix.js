import Circle from "./Circle";
import useStore from "../utils/store";
import column from "../utils/column";

const Matrix = () => {
  const winner = useStore((state) => state.winner)
  const matrix = useStore((state) => state.matrix)
  const player = useStore((state) => state.player)
  const updateMatrix = useStore.matrixUpdater

  const Update = (e, i) => {
    e.preventDefault();
    const col = column(matrix, i);
    updateMatrix(matrix, col, player, i);
  };
  
  return <div className="matrix">
  {winner === 0
    ? matrix.map((row, index) => {
        return row.map((element, i) => {
          return (
            <div key={`${index},${i}`} onClick={(e) => Update(e, i)}>
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

}

export default Matrix