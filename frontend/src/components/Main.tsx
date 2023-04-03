import React, { useState } from "react";

import TimerBar from "./TimerBar";
import RequestPrompt from "./RequestPrompt";

function Main() {
  const [remainingTime, setRemainingTime] = useState(0);

  return (
    <div>
      <RequestPrompt />
      <TimerBar remainingTime={remainingTime} />
    </div>
  );
}

export default Main;
