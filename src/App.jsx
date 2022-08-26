import { useReducer } from "react";
import { Wrapper } from "./styled";
import JoinBlock from "./components/JoinBlock";
import reducer from "./reducer";
import socket from "./socket";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  });

  const onLogin = (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
  };

  console.log(state);


  return (
    <Wrapper>
      {!state.isAuth && <JoinBlock onLogin={onLogin} />}
    </Wrapper>
  );
}

export default App;
