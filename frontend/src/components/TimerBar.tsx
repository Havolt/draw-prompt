import React, { useState, useEffect } from "react";

import "./TimerBar.css";

interface TimerBarProps {
  remainingTime: number;
  initialTime: number;
}

function TimerBar({ remainingTime, initialTime }: TimerBarProps) {
  const [timerPercent, setTimerPercent] = useState(0);

  useEffect(() => {
    setTimerPercent(() => (remainingTime / initialTime) * 100);
  }, [remainingTime, initialTime]); // Only re-run the effect if count changes

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
