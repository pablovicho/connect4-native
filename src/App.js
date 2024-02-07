import useStore from "./utils/store";
import { StyleSheet, View, Text } from 'react-native';

import "./App.css";

import { PopUpMessage } from "./components/popUpMessage";
import Restart from "./components/Restart";
import Contact from "./components/Contact";
import Matrix from "./components/Matrix";
import PlayerTurn from "./components/PlayerTurn";

//player 1 = 1
//player 2 = 2
//no player = 0

function App() {
  const winner = useStore((state) => state.winner);

  return (
    <View style={styles.container}>
    
      {winner > 0 && <PopUpMessage />}

      <Matrix />

      <View style={styles.header}>
        <Text style={styles.title}>Connect 4</Text>
      </View>

      <View style={styles.footer}>
        <Restart />
        <Contact />
      </View>

      <PlayerTurn />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center' 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    backgroundColor: "#CDFCF6"
  },
  code: {
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
  },
  main: {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    marginTop: "0px"
  }
});

export default App;
