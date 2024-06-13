import React from "react";
import Circle from "./Circle";

import useWindowSize from "react-use/lib/useWindowSize";
// import Confetti from "react-confetti";

const App = () => {
  // const { cWidth, cHeight } = useWindowSize();

  return (
    <div
      className="App"
      style={{ backgroundColor: "rgb(22, 21, 21)", color: "#fff" }}
    >
      {/* <Confetti width={cWidth} height={cHeight} tweenDuration={5000} /> */}

      <Circle />
    </div>
  );
};

export default App;
