import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PlayerBoard = () => {
  const localStoragePlayers = JSON.parse(localStorage.getItem("players"));
  const winnerXOX = useSelector((state) => state.game.winnerXOX);

  const [p1, setP1] = React.useState(
    localStoragePlayers
      ? localStoragePlayers[0].score
      : { name: "Player1", score: "-", symbol: "X" }
  );
  const [p2, setP2] = React.useState(
    localStoragePlayers
      ? localStoragePlayers[1].score
      : { name: "Player2", score: "-", symbol: "O" }
  );

  useEffect(() => {
    if (winnerXOX === "X") {
      setP1(p1 + 1);
      localStorage.setItem(
        "players",
        JSON.stringify([
          { name: localStoragePlayers[0].name, score: p1 + "$", symbol: "X" },
          { name: localStoragePlayers[1].name, score: p2, symbol: "O" },
        ])
      );
    } else if (winnerXOX === "O") {
      setP2(p2 + 1);
      localStorage.setItem(
        "players",
        JSON.stringify([
          { name: localStoragePlayers[0].name, score: p1, symbol: "X" },
          { name: localStoragePlayers[1].name, score: p2 + "$", symbol: "O" },
        ])
      );
    }
  }, [winnerXOX]);

  console.log(p1);

  return (
    <>
      {localStorage.getItem("players") ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            backgroundColor: "lightgray",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            border: "1px solid #ccc",
            borderBottom: "none",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            marginBottom: "20px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flexWrap: "wrap",
              width: "40%",
              height: "100%",
              backgroundColor: "lightgray",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              border: "1px solid #ccc",
              borderBottom: "none",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              marginBottom: "10px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
              marginRight: "20px",
            }}
          >
            <div>
              {localStoragePlayers[0].name === "" ? (
                <div> Player 1</div>
              ) : (
                <div>
                  {localStoragePlayers[0].name} :{" "}
                  {localStoragePlayers[0].symbol}
                </div>
              )}
            </div>
            <div>
              Score:{" "}
              {localStoragePlayers[0].score === "" ? (
                <div>0</div>
              ) : (
                localStoragePlayers[0].score
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flexWrap: "wrap",
              width: "40%",
              height: "100%",
              backgroundColor: "lightgray",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              border: "1px solid #ccc",
              borderBottom: "none",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              marginBottom: "10px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            <div>
              {localStoragePlayers[1].name === "" ? (
                <div> Player 2</div>
              ) : (
                <div>
                  {localStoragePlayers[1].name} :{" "}
                  {localStoragePlayers[1].symbol}
                </div>
              )}
            </div>
            <div>
              Score:{" "}
              {localStoragePlayers[1].score === "" ? (
                <div>0</div>
              ) : (
                localStoragePlayers[1].score
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PlayerBoard;
