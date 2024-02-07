import React from "react";
import { View, StyleSheet } from "react-native";
import useStore from "../utils/store";

export default function Circle(props) {
  const winner = useStore(state => state.winner);
  const player = props.player;
  const colorClass = ["white", "yellow", "red"];

  return winner === 0 ? (
    <View 
      style={[
        styles.circle, 
        styles[colorClass[player]]
      ]} 
    />
  ) : (
    <View
      style={[
        styles.circle,
        styles[colorClass[player]],
        styles.noAnimate
      ]}
    />
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50, 
    height: 50,
    borderRadius: 25    
  },
  white: {
    backgroundColor: 'white'
  },
  yellow: {
    backgroundColor: 'yellow'
  },
  red: {
    backgroundColor: 'red'
  },
  noAnimate: {
    // disable animations
  }
});
