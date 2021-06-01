import React, { useState } from "react";
import Highway from "../Highway/highway";
import CarList from "../Cars/CarList";
import TreeList from "../Trees/TreeList";
import AllPositions from "../../scenario2Data/AllPositions";
import AllTrees from "../../scenario2Data/AllTrees";
const AI_decision = [
  "Increase",
  "Right lane",
  "left",
  "Increase",
  "Increase",
  "left",
  "Decrease",
  "",
];
const HighwaySceneS2 = () => {
  const nextHandler = (direction) => {
    if (direction === "Next") {
      setCurrentPositionS2(
        Math.min(AllPositions.length - 1, currentPositionS2 + 1),
      );

      console.log(currentPositionS2);
      //instructions[Math.min(currentInstruction.id + 1, 1)],
    }
    if (direction === "Back") {
      setCurrentPositionS2(Math.max(0, currentPositionS2 - 1));

      console.log(currentPositionS2);
      //instructions[Math.max(currentInstruction.id - 1, 0)],
    }
  };
  const CarsPositionsAccordingToLevel = (currentPositionS2) => {
    return AllPositions[currentPositionS2];
  };
  const TreesPositionsAccordingToLevel = (currentPositionS2) => {
    return AllTrees[3];
  };

  const [currentPositionS2, setCurrentPositionS2] = useState(0);

  return (
    <div className="simulation">
      <h2>Trial number: {currentPositionS2} </h2>

      <div className="highway-container">
        <Highway />

        <CarList
          currentPosition={currentPositionS2}
          setCurrentPosition={setCurrentPositionS2}
          CarsPositions={CarsPositionsAccordingToLevel(currentPositionS2)}
        />
        <TreeList
          TreesPositions={TreesPositionsAccordingToLevel(currentPositionS2)}
        />
      </div>
      <div className="progressButtons">
        <button className="button" onClick={() => nextHandler("Back")}>
          Back
        </button>
        <button className="button" onClick={() => nextHandler("Next")}>
          Next
        </button>

        <b> The AI's decision: {AI_decision[currentPositionS2]} </b>
        <br />
      </div>
    </div>
  );
};
export default HighwaySceneS2;
