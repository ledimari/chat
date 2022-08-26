import React from 'react';
import { useState } from 'react';
import { Wrapper, Input, Button} from "./styled";
import axios from "axios";
import socket from "../socket";

const JoinBlock = ({ onLogin }) => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert("не правильні дані");
    };
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post("/rooms", obj);
    onLogin(obj);
  };
  return (
    <Wrapper>
        <Input 
        type="text" 
        placeholder="ROOM ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}></Input>
        <Input 
        type="text" 
        placeholder="ВАШЕ ІМ'Я"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}></Input>
        <Button disabled={isLoading} onClick={onEnter}>
          {isLoading ? "Вхід" : "Увійти"}
        </Button>
      </Wrapper>
  );
};

export default JoinBlock;