import React, { useState, useEffect } from "react";

import TimerBar from "./TimerBar";
import RequestPrompt from "./RequestPrompt";

function Main() {
  const initialTime = 60;
  const [remainingTime, setRemainingTime] = useState(0);

  const startTimer = () => {
    setRemainingTime(initialTime);
  };

  const countdown = () => {
    setRemainingTime((prevState) => {
      if (prevState !== 0) {
        return prevState - 1;
      }
      return 0;
    });
  };

  useEffect(() => {
    if (remainingTime !== 0) {
      setTimeout(countdown, 1000);
    }
  }, [remainingTime]);

  return (
    <div>
      <RequestPrompt startTimer={startTimer} />
      <TimerBar remainingTime={remainingTime} initialTime={initialTime} />
    </div>
  );
}

export default Main;
