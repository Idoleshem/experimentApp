import React, { useState } from "react";

import Actions from "../Simulation/Actions";

import HighwaySceneEvaluation from "./HighwaySceneEvaluation";

const EvaluationWindow = () => {
  return (
    <div className="simulation-container">
      <h1>Evaluation Window</h1>

      <HighwaySceneEvaluation />
      <Actions />
    </div>
  );
};
export default EvaluationWindow;
