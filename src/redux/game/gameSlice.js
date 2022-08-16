import { createSlice } from "@reduxjs/toolkit";

const players = [];
const playerScore = [];

const playersDetail = [
  {
    name: players[0],
    score: playerScore[0],
    symbol: "X",
  },
  {
    name: players[1],
    score: playerScore[1],
    symbol: "O",
  },
];

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const gameSlice = createSlice({
  name: "game",
  initialState: {
    board: Array(9).fill("-"),
    players,
    playersDetail,
    playerScore,
    currentPlayer: "X",
    winnerXOX: "",
    winCombinations,
  },
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
    setBoardCurrentPlayer: (state, action) => {
      state.board = action.payload;
    },
    changePlayer: (state) => {
      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },
    winnerReducer: (state, action) => {
      state.winnerXOX = action.payload;
    },
    playerScoreReducer: (state, action) => {
      state.playerScore = action.payload;
    },
  },
});

export const {
  setPlayers,
  setBoardCurrentPlayer,
  changePlayer,
  winnerReducer,
} = gameSlice.actions;
export default gameSlice.reducer;
