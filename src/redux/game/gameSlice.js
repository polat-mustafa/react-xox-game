import { createSlice } from "@reduxjs/toolkit";

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
    playersDetail: [
      {
        name: "",
        score: "-",
        symbol: "X",
      },
      {
        name: "",
        score: "-",
        symbol: "O",
      },
    ],
    currentPlayer: "X",
    winnerXOX: "",
    winCombinations,
  },
  reducers: {
    setPlayers: (state, action) => {
      const [player1, player2] = action.payload;
      state.playersDetail[0].name = player1;
      state.playersDetail[1].name = player2;
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
  },
});

export const {
  setPlayers,
  setBoardCurrentPlayer,
  changePlayer,
  winnerReducer,
  resetGame,
} = gameSlice.actions;
export default gameSlice.reducer;
