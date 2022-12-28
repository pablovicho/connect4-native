import React from "react";
import "./../App";

export default function Circle(props) {
  const player = props.player;
  const colorClass = ["white", "yellow", "red"];

  return (
      <div className= {`circle ${colorClass[player]}`}></div>
  );
}
