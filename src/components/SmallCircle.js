const SmallCircle = ({player}) => {
    const colorClass = ["smallWhite", "smallYellow", "smallRed"];
    return <div className={colorClass[player]}></div>;
  };

export default SmallCircle;