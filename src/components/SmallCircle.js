import useStore from "../utils/store";
import { View, StyleSheet } from "react-native";

const SmallCircle = () => {
  const player = useStore((state) => state.player)
    const colorClass = ["smallWhite", "smallYellow", "smallRed"];
    return <View className={colorClass[player]}></View>;
  };

export default SmallCircle;