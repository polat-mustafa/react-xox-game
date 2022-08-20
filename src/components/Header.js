import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayers } from "../redux/game/gameSlice";
import PlayerBoard from "./PlayerBoard";

const Header = () => {
  const dispatch = useDispatch();
  const playersDetail = useSelector((state) => state.game.playersDetail);

  const onFinish = (values) => {
    const { player1, player2 } = values;
    dispatch(setPlayers([player1, player2]));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const resetLocalStorage = () => {
    localStorage.setItem(
      "players",
      JSON.stringify([
        { name: "Player1", score: "-", symbol: "X" },
        { name: "Player2", score: "-", symbol: "O" },
      ])
    );
    window.location.reload();
  };

  useEffect(() => {
    if (playersDetail[0].name !== "" && playersDetail[1].name !== "") {
      localStorage.setItem("players", JSON.stringify(playersDetail));
      window.location.reload();
    }
  }, [playersDetail]);

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "0 auto",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          height: "100%",
          backgroundColor: "lightslategrey",
          padding: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          border: "1px solid #ccc",
          borderBottom: "none",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <Form.Item
          label="Player 1"
          name="player1"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            style={{
              borderRadius: "10px",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Player 2"
          name="player2"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            style={{
              borderRadius: "10px",
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              marginLeft: "10px",
              borderRadius: "10px",
            }}
          >
            Submit
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            onClick={resetLocalStorage}
            style={{
              marginLeft: "10px",
              borderRadius: "10px",
            }}
          >
            Reset Players
          </Button>
        </Form.Item>
      </Form>
      <PlayerBoard />
    </>
  );
};

export default Header;
