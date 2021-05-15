import React, { useState } from "react";

const Tutorial = ({
  currentInstruction,
  setcurrentInstruction,
  instructions,
}) => {
  const nextHandler = (direction) => {
    if (direction === "skip-forward") {
      setcurrentInstruction(
        instructions[Math.min(currentInstruction.id + 1, 1)]
      );
    }
    if (direction === "skip-back") {
      setcurrentInstruction(
        instructions[Math.max(currentInstruction.id - 1, 0)]
      );
    }
  };

  return (
    <div className="instructions-container">
      <h1>{currentInstruction.name}</h1>
      <h1>{currentInstruction.text}</h1>
      <button className="button" onClick={() => nextHandler("skip-forward")}>
        Next
      </button>
      <button className="button" onClick={() => nextHandler("skip-back")}>
        Back
      </button>
    </div>
  );
};
export default Tutorial;
