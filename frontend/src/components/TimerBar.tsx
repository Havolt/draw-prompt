import React, { useState } from "react";

import "./TimerBar.css";

function TimerBar() {
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerPercent, setTimerPercent] = useState(0);

  return (
    <div className="timer-bar">
      <div className="timer-bar__time">{remainingTime}</div>
      <div className="timer-bar__progress">
        <div
          className="timer-bar__progress-fill"
          style={{ width: `${timerPercent}%` }}
        />
      </div>
    </div>
  );
}

export default TimerBar;
