import React, { useState } from "react";
import Highway from "../Highway/highway";
import CarList from "../Cars/CarList";
import TreeList from "../Trees/TreeList";
import AllPositions from "../../scenario1Data/AllPositions";
import AllTrees from "../../scenario1Data/AllTrees";
const AI_decision = [
  "Right lane",
  "Increase",
  "Increase",
  "left",
  "Right",
  "Decrease",
  "Decrease",
  "Increase",
  "Left lane",
  "Increase",
  "Increase",
];
const HighwayScene = () => {
  const nextHandler = (direction) => {
    if (direction === "Next") {
      setCurrentPosition(
        Math.min(AllPositions.length - 1, currentPosition + 1),
      );

      console.log(currentPosition);
      //instructions[Math.min(currentInstruction.id + 1, 1)],
    }
    if (direction === "Back") {
      setCurrentPosition(Math.max(0, currentPosition - 1));

      console.log(currentPosition);
      //instructions[Math.max(currentInstruction.id - 1, 0)],
    }
  };
  const CarsPositionsAccordingToLevel = (currentPosition) => {
    return AllPositions[currentPosition];
  };
  const TreesPositionsAccordingToLevel = (currentPosition) => {
    return AllTrees[0];
  };

  const [currentPosition, setCurrentPosition] = useState(0);

  return (
    <div className="simulation">
      <h2>Trial number: {currentPosition} </h2>

      <div className="highway-container">
        <Highway />

        <CarList
          currentPosition={currentPosition}
          setCurrentPosition={setCurrentPosition}
          CarsPositions={CarsPositionsAccordingToLevel(currentPosition)}
        />
        <TreeList
          TreesPositions={TreesPositionsAccordingToLevel(currentPosition)}
        />
      </div>
      <div className="progressButtons">
        <button className="button" onClick={() => nextHandler("Back")}>
          Back
        </button>
        <button className="button" onClick={() => nextHandler("Next")}>
          Next
        </button>

        <b> The AI's decision: {AI_decision[currentPosition]} </b>
        <br />
      </div>
    </div>
  );
};
export default HighwayScene;
