import React, { useState } from "react";
// Import styles
import "./styles/app.scss";
import scenario from "./data/scenario";
import Nav from "./Nav";
import Login from "./components/Login";
//import LoginNew from "./components/LoginNew";
import Tutorial from "./components/Tutorial/Tutorial";
import instructionsData2 from "./data/instructionsData2";
import Demographic from "./components/Demographic";
import SimulationWindow from "./components/Simulation/SimulationWindow";
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
          path="/Tutorial"
          render={(props) => (
            <Tutorial
              {...props}
              currentInstruction={currentInstruction}
              setcurrentInstruction={setcurrentInstruction}
              instructions={instructions}
            />
          )}
        />
        <Route
          path="/Simulation"
          render={(props) => (
            <SimulationWindow
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
