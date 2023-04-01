import React from "react";

import "./RequestPrompt.css";

function RequestPrompt() {
  const requestHandler = () => {
    console.log("pressed");
  };

  return (
    <div className="request-prompt">
      <button className="request-prompt__button" onClick={requestHandler}>
        Get Prompt
      </button>
    </div>
  );
}

export default RequestPrompt;
