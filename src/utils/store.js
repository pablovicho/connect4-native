import { create } from 'zustand'
import initialMatrix from './initialMatrix'
import updateMatrix from './updateMatrix'
import whoWon from '../winCheck/win'

const useStore = create((set) => ({

  matrix: initialMatrix,
  player: 1,
  winner: 0,
  player1: 0,
  player2: 0,
  matrixUpdater: (col, value, row) => set((state) => ({matrix: updateMatrix(state.matrix, col, value, row)})),
  resetMatrix: () => set({matrix: initialMatrix}),
  resetPlayer: () => set({player: 1}),
  resetScore: () => set({player1: 0, player2: 0}),
  changePlayer: () => set((state) => ({player: state.player === 1 ? 2 : 1})),
  checkWinner: () => set((state) => ({winner: whoWon(state.matrix)})),
  resetWinner: () => set({winner: 0}),
  player1Win: () => set((state) => ({player1: state.player1 + 1})),
  player2Win: () => set((state) => ({player2: state.player2 + 1}))
}))

export default useStore