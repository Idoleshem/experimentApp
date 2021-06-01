import React, { useState } from "react";

import Actions from "../Simulation/Actions";

import HighwaySceneDemo from "./HighwaySceneDemo";

const DemonstrationWindow = () => {
  return (
    <div className="simulation-container">
      <h1>Demonstration Window</h1>

      <HighwaySceneDemo />

      <Actions />
    </div>
  );
};
export default DemonstrationWindow;
