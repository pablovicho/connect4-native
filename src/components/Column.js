import React from 'react';
import { View } from 'react-native';
import Circle from './Circle';

export default function Column(props) {
  const {playerCol} = props;

  return playerCol.map((element, index) => {
    return (
      <View key={index}>
        <Circle player={element} />
      </View>
    );
  }); 
}
