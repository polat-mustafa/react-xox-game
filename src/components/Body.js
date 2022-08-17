import React, { useEffect } from "react";
import { Grid } from "@chakra-ui/react";

import Board from "./Board";
// REDUX
import { useSelector } from "react-redux";

const Body = () => {
  const board = useSelector((state) => state.game.board);
  const winnerXOX = useSelector((state) => state.game.winnerXOX);

  useEffect(() => {
    if (winnerXOX === "X") {
      alert(`${JSON.parse(localStorage.getItem("players"))[0].name} wins!`);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else if (winnerXOX === "O") {
      alert(`${JSON.parse(localStorage.getItem("players"))[1].name} wins!`);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [winnerXOX]);

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {board.map((item, index) => {
          return <Board key={index} item={item} index={index} />;
        })}
      </Grid>
    </>
  );
};

export default Body;
