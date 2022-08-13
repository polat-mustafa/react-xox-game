import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "xox",
  initialState: {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    coordinantsRow: null,
    coordinantsCol: null,
    winner: null,
    players: {
      x: "X",
      o: "O",
    },
    random: Math.random(),
    currentPlayer: [],
    totalCordinants: [],
  },
  reducers: {
    changePlayer: (state) => {
      state.currentPlayer = state.currentPlayer === "x" ? "o" : "x";
    },
    resetGame: (state) => {
      state.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];
      state.winner = null;
      state.currentPlayer = null;
    },
    selectRow: (state, action) => {
      state.coordinantsRow = action.payload;
    },
    selectCol: (state, action) => {
      state.coordinantsCol = action.payload;
    },
    allCoordinants: (state) => {
        // hata bulunacak
        state.totalCordinants = [ ...state.totalCordinants, state.coordinantsRow, state.coordinantsCol ];
        }


  },
});

export const { selectBoard, changePlayer, resetGame, selectCol, selectRow, allCoordinants } =
  gameSlice.actions;
export default gameSlice.reducer;
