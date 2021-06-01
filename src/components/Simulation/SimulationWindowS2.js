import React, { useState } from "react";
import Actions from "./Actions";
import AI from "./AI";
import Chart from "./chart";

import HighwaySceneS2 from "./HighwaySceneS2";

const SimulationWindowS2 = () => {
  return (
    <div className="simulation-container">
      <h1>Simulation Window 2</h1>

      <HighwaySceneS2 />

      <Actions />
    </div>
  );
};
export default SimulationWindowS2;
