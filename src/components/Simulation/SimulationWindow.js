import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Diagram from "./Diagram";
import Score from "./Score";
import Actions from "./Actions";
import AI from "./AI";
import Chart from "./chart";

import HighwayScene from "./HighwayScene";

const SimulationWindow = () => {
  return (
    <div className="simulation-container">
      <h1>Simulation Window</h1>

      <HighwayScene />

      <Actions />
    </div>
  );
};
export default SimulationWindow;
