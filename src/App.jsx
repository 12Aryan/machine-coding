import { useState } from "react";
import Toaster from "./components/toast/Toaster";
import ButtonComponent from "./components/button/ButtonComponent";

const buttons = ["success", "error", "warning", "info"];

const App = () => {
  const [message, setMessage] = useState([]);
  return (
    <div
      style={{
        height: "100dvh",
        width: "100vw",
        position: "relative",
      }}
    >
      <Toaster message={message} setMessage={setMessage} />
      {buttons.map((button, index) => (
        <ButtonComponent
          key={index + button}
          btnName={button}
          setMessage={setMessage}
        />
      ))}
    </div>
  );
};

export default App;
