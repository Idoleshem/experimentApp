import React, { useState } from "react";
// Import styles
import "./styles/app.scss";
import scenario from "./scenario1Data/scenario";
import Nav from "./Nav";
import Login from "./components/Login";

import DemonstrationWindow from "./components/Demonstration/DemonstrationWindow";
import instructionsData2 from "./scenario1Data/instructionsData2";
import Demographic from "./components/Demographic";
import SimulationWindow from "./components/Simulation/SimulationWindow";
import SimulationWindow2 from "./components/Simulation/SimulationWindowS2";
import EvaluationWindow from "./components/Evaluation/EvaluationWindow";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const name = "participant 1";

function App() {
  const [decisionPoints, setDecisionPoints] = useState(scenario());
  const [currentDecisionPoint, setCurrentDecisionPoint] = useState(
    decisionPoints[0],
  );

  const [instructions, setInstructions] = useState(instructionsData2());

  const [currentInstruction, setcurrentInstruction] = useState(instructions[0]);

  return (
    <div>
      <Nav />

      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Demographic" component={Demographic} />

        <Route
          path="/Demonstration"
          render={(props) => (
            <DemonstrationWindow
              {...props}
              currentDecisionPoint={currentDecisionPoint}
            />
          )}
        />
        <Route
          path="/Scenario 1"
          render={(props) => (
            <SimulationWindow
              {...props}
              currentDecisionPoint={currentDecisionPoint}
            />
          )}
        />
        <Route
          path="/Scenario 2"
          render={(props) => (
            <SimulationWindow2
              {...props}
              currentDecisionPoint={currentDecisionPoint}
            />
          )}
        />
        <Route
          path="/Evaluation"
          render={(props) => (
            <EvaluationWindow
              {...props}
              currentDecisionPoint={currentDecisionPoint}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
//<Route path="/Tutorial" component={Tutorial} />
//<Route path="/Simulation" component={SimulationWindow} />
//<button onClick={() => setProgress(progress + 1)}>increase</button>
