import React, { useState } from "react";

function TimerBar() {
  const [remainingTime, setRemainingTime] = useState(0);

  return (
    <div className="timer-bar">
      <div className="timer-bar__time">{remainingTime}</div>
      <div className="timer-bar__progress" />
    </div>
  );
}

export default TimerBar;
