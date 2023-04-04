import React, { useState } from "react";

import TimerBar from "./TimerBar";
import RequestPrompt from "./RequestPrompt";

function Main() {
  const [remainingTime, setRemainingTime] = useState(0);

  const startTimer = () => {
    setRemainingTime(180);

    // setInterval(() => {
    //   setRemainingTime((prevState, ))
    // }, 1000);
  };

  return (
    <div>
      <RequestPrompt startTimer={startTimer} />
      <TimerBar remainingTime={remainingTime} />
    </div>
  );
}

export default Main;
