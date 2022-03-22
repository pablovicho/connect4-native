import React from "react";
import "./App.css";

export default function Circle(props) {
  const player = props.player;
  const colorClass = ["white", "yellow", "red"];

  return (
      <div className={colorClass[player]}></div>
  );
}
