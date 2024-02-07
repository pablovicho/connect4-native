import SmallCircle from "./SmallCircle"
import useStore from "../utils/store"
import { View, StyleSheet } from "react-native"

function PlayerTurn () {
    const player1 = useStore((state) => state.player1)
    const player2 = useStore((state) => state.player2)
    return(
        <View className="upThingy" style={{display: 'flex', flexDirection: 'row'}}>
        <div className="playerTurn">
          <h1>Turn:</h1>
          <SmallCircle style={{marginRight: '10px'}}/>
        </div>
        <div style={{backgroundColor: '#43bccd', borderRadius: '0 13px 13px 0'}}>
          <h3 style={{marginBottom: '0px', marginLeft: '10px', marginRight: '10px'}}>Player 1: {player1}</h3>
          <h3 style={{marginTop: '0px', marginLeft: '10px', marginRight: '10px'}}>Player 2: {player2}</h3>
        </div>
      </View>
    )
}

const styles = StyleSheet.create({});

export default PlayerTurn