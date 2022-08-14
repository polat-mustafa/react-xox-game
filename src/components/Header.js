import { Button, Form, Input } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlayers } from "../redux/game/gameSlice";

const Header = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.game.players);

  const onFinish = (values) => {
    const { player1, player2 } = values;
    dispatch(setPlayers([player1, player2]));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(players);
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
          <Input />
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
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Header;
