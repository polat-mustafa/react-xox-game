import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { setPlayers } from "../redux/game/gameSlice";

const Header = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const { player1, player2 } = values;
    dispatch(setPlayers([player1, player2]));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
          width: "400px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e8e8e8",
          margin: "0 auto",
          marginBottom: "20px",
          textAlign: "center",
          alignContent: "center",
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
          style={{
            marginBottom: "10px",
            marginTop: "10px",
          }}
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
          style={{ marginTop: "10px" }}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="text" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Header;
