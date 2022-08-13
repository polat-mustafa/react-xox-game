import React, {useEffect} from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { changePlayer, resetGame, selectCol, selectRow, allCoordinants } from "../redux/game/gameSlice";

const Body = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.game.board);
  const col = useSelector((state) => state.game.coordinantsCol);
  const row = useSelector((state) => state.game.coordinantsRow);
  const total = useSelector((state) => state.game.totalCordinants);

  //  iyileştirilecek ve isimlendirmeler değişecek
  useEffect(() => {
    dispatch(allCoordinants());
  } ,[col, row]);

  console.log(board);
  console.log(col);
  console.log(row);
  console.log(total);

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          onClick={() => {
            dispatch(selectRow(rowIndex));
          } }
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
          }
          
        }
        >
          s
          {row.map((col, colIndex) => (
            <div
              key={colIndex}
              onClick={() => {
                dispatch(selectCol(colIndex));
                dispatch(changePlayer());
              }}
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "50px",
                fontWeight: "bold",
                color: "white",
                backgroundColor:
                  col === null ? "transparent" : col === "x" ? "red" : "blue",
              }}
            >
              d{col}
            </div>
          ))}
        </div>
      ))}
      <button onClick={() => dispatch(changePlayer())}>Change Player</button>
      <button onClick={() => dispatch(resetGame())}>Reset Game</button>
    </div>
  );
};

export default Body;
