import Circle from "./Circle";
import useStore from "../utils/store";
import column from "../utils/column";

const Matrix = () => {
  const winner = useStore((state) => state.winner);
  const matrix = useStore((state) => state.matrix);
  const player = useStore((state) => state.player);
  const updateMatrix = useStore((state) => state.matrixUpdater);
  const changePlayer = useStore((state) => state.changePlayer);
  const checkWinner = useStore((state) => state.checkWinner);

  const HandleClick = (e, i) => {
    e.preventDefault();
    const col = column(matrix, i);
    updateMatrix(col, player, i);
    checkWinner();
    changePlayer();
  };

  return (
    <div className="matrix">
      {matrix
        .map((row, index) => {
          return row.map((element, i) => {
            return winner === 0 ? (
              <div key={`${index},${i}`} onClick={(e) => HandleClick(e, i)}>
                <Circle player={element} />
              </div>
            ) : (
              <div key={`${index},${i}`}>
                <Circle player={element} />
              </div>
            );
          });
        })
        .reverse()}
    </div>
  );
};

export default Matrix;
