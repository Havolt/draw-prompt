import React from "react";

import "./RequestPrompt.css";

interface RequestPromptProps {
  startTimer: () => void;
}

function RequestPrompt({ startTimer }: RequestPromptProps) {
  return (
    <div className="request-prompt">
      <button className="request-prompt__button" onClick={startTimer}>
        Get Prompt
      </button>
    </div>
  );
}

export default RequestPrompt;
