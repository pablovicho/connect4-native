import { View, StyleSheet } from "react-native";

const Winner = ({winner}) => {
    const colorClass = ["none", "player1", "player2"];
    return winner > 0 ? (
      <View>
        <h1 className={colorClass[winner]}>Player {winner} wins!</h1>
      </View>
    ) : null;
  };

  const styles = StyleSheet.create({});

  export default Winner;