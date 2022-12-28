import Circle from "./Circle";

const Matrix = (matrix, winner, HandleClick) => {
  return <div className="matrix">
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

}

export default Matrix