import React from 'react';
import './App.css';

export default function Circle (props) {
  const player = props.player
  const color = ['black','white', 'yellow', 'red']
  const style = `
    position:absolute;
    width: 100px;
    height: 100px;
    background: ${color[player]};
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 100%;
    transform: translate(-50%)`
  return (
  <>
  <div style={{style}}>{player}</div>
  </>)
}