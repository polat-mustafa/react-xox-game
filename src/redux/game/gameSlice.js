import { createSlice } from "@reduxjs/toolkit";

const player = {
  name: "",
  score: 0,
};

const players = [
  {
    name: "Mustafa",
    score: 0,
  },
  {
    name: "Polat",
    score: 0,
  },
];

const playerDetail = {
  player1: players[0],
  player2: players[1],
};


const gameSlice = createSlice({
  name: "xox",
  initialState: {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    player,
    playerDetail,
    players,
    totalCordinants: [],
  },
  reducers: {
    changePlayer: (state, action) => {
      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },
    resetGame: (state) => {
      state.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];
      state.totalCordinants = [];
    },
    allCoordinants: (state, action) => {
      state.totalCordinants.push(action.payload);
    },
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
    playerName: (state, action) => {
      state.playerDetail[action.payload].name = state.currentPlayer;
    }

  },
});

export const { selectBoard, changePlayer, resetGame, allCoordinants, setPlayers, playerName } =
  gameSlice.actions;
export default gameSlice.reducer;
