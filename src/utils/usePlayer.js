import React from "react";

export const usePlayerHook = (initialState) => {
    const [players, setPlayers] = React.useState(initialState);
    const playerRef = React.useRef(players);  
    // put [players, setPlayers] into the useCallback's dependencies array
    // these values never change so the calllback is not going to be ever re-created
    const toggle = React.useCallback(
      () => setPlayers(playerRef.current === 1 ? 2 : 1),
      [playerRef, setPlayers],
    );
    // keep the value in playerRef actual
    // when isToggled changes, playerRef is updated accordingly
    React.useEffect(
      () => {
        playerRef.current = players;
      },
      [players],
    );
  
    return [players, toggle];
  }