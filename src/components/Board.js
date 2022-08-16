import React, { useEffect } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  changePlayer,
  setBoardCurrentPlayer,
  winnerReducer,
} from "../redux/game/gameSlice";

const Board = ({ item, index }) => {
  const board = useSelector((state) => state.game.board);
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const winCombinations = useSelector((state) => state.game.winCombinations);
  const dispatch = useDispatch();

  const onClick = () => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    dispatch(setBoardCurrentPlayer(newBoard));
    dispatch(changePlayer());
  };


  /*   useEffect(() => {
    if (
      (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
      (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
      (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
      (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
      (board[2] === "X" && board[4] === "X" && board[6] === "X") ||
      (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
      (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
      (board[2] === "X" && board[5] === "X" && board[8] === "X")
    ) {
      return dispatch(winnerReducer("X"));
    } else if (
      (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
      (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
      (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
      (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
      (board[2] === "O" && board[4] === "O" && board[6] === "O") ||
      (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
      (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
      (board[2] === "O" && board[5] === "O" && board[8] === "O")
    ) {
      return dispatch(winnerReducer("O"));
    }
  }, [board]); */

  useEffect(() => {
    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];
      if (board[a] === "X" && board[b] === "X" && board[c] === "X") {
        return dispatch(winnerReducer("X"));
      } else if (board[a] === "O" && board[b] === "O" && board[c] === "O") {
        return dispatch(winnerReducer("O"));
      }
    }
  }, [board]);

  return (
    <>
      <div
        key={index}
        onClick={onClick}
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          fontWeight: "bold",
          color: "black",
          cursor: "pointer",
          textAlign: "center",
          fontFamily: "Arial",
          fontStyle: "italic",
          backgroundColor: item === "X" ? "#f5f5f5" : item === "O" ? "#f5f5f5" : "",
          marginLeft: "100px",
        }}
      >
        {item}
      </div>
    </>
  );
};
export default Board;
