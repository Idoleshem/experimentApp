import React, { useState } from "react";
import Highway from "../Highway/highway";
import CarList from "../Cars/CarList";
import TreeList from "../Trees/TreeList";
import AllPositions from "../../demonstrationData/AllPositionsDemo";
import AllTreesDemo from "../../demonstrationData/AllTreesDemo";
const AI_decision = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "Same lane",
  "Increase",
  "Decrease",
  "Decrease",
  "Right lane",
  "left lane",
  "left lane",
];
const HighwaySceneDemo = () => {
  const nextHandler = (direction) => {
    if (direction === "Next") {
      setCurrentPositionDemo(
        Math.min(AllPositions.length - 1, currentPositionDemo + 1),
      );

      console.log(currentPositionDemo);
      //instructions[Math.min(currentInstruction.id + 1, 1)],
    }
    if (direction === "Back") {
      setCurrentPositionDemo(Math.max(0, currentPositionDemo - 1));

      console.log(currentPositionDemo);
      //instructions[Math.max(currentInstruction.id - 1, 0)],
    }
  };
  const CarsPositionsAccordingToLevel = (currentPosition) => {
    return AllPositions[currentPosition];
  };
  const TreesPositionsAccordingToLevel = (currentPositionDemo) => {
    return AllTreesDemo[2];
  };

  const [currentPositionDemo, setCurrentPositionDemo] = useState(0);

  return (
    <div className="simulation">
      <h2>Trial number: {currentPositionDemo} </h2>

      <div className="highway-container">
        <Highway />

        <CarList
          currentPosition={currentPositionDemo}
          setCurrentPosition={setCurrentPositionDemo}
          CarsPositions={CarsPositionsAccordingToLevel(currentPositionDemo)}
        />
        <TreeList
          TreesPositions={TreesPositionsAccordingToLevel(currentPositionDemo)}
        />
      </div>
      <div className="progressButtons">
        <button className="button" onClick={() => nextHandler("Back")}>
          Back
        </button>
        <button className="button" onClick={() => nextHandler("Next")}>
          Next
        </button>
        <b> The AI's decision: {AI_decision[currentPositionDemo]} </b>
        <br />
      </div>
    </div>
  );
};
export default HighwaySceneDemo;
