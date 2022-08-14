import React from "react";
import { Grid } from "@chakra-ui/react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  changePlayer,
  allCoordinants,
  playerName,
} from "../redux/game/gameSlice";

const Body = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.game.board);
  const total = useSelector((state) => state.game.totalCordinants);
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const players = useSelector((state) => state.game.players);
  const playerDetail = useSelector((state) => state.game.playerDetail);

  const changePlayers = () => {
    dispatch(changePlayer());
  };

  console.log(total);
  console.log(players);
  console.log(playerDetail);
  console.log("dasdassss", players[0]);

  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={4}
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="lg"
        overflow="hidden"
      >
        {board.map((row, rowIndex) => {
          return row.map((col, colIndex) => {
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                id={`${rowIndex + 1}${colIndex + 1}`}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid",
                  borderColor: "gray.200",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
                onClick={(e) => {
                  console.log(rowIndex + 1, colIndex + 1);
                  dispatch(allCoordinants([rowIndex + 1, colIndex + 1]));
                  dispatch(playerName(currentPlayer));
                  changePlayers();
                }}
              >
                {currentPlayer === "X" ? "X" : "O"}
              </div>
            );
          });
        })}
      </Grid>
    </>
  );
};

export default Body;
