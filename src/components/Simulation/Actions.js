import React from "react";
import { Button } from "react-bootstrap";
import calculateState from "../../Functions/calculateState";

const Actions = ({
  currentState,
  setCurrentState,
  currentDecision,
  setCurrentDecision,
}) => {
  const actionHandler = (actionNum) => {
    setCurrentDecision(actionNum);
    console.log("current decision", currentDecision);
    setCurrentState(calculateState(currentState, currentDecision));
  };

  return (
    <div className="actions-control">
      <Button
        variant="Action 1"
        className="button"
        onClick={() => actionHandler("1")}
      >
        Increase
      </Button>{" "}
      <Button
        variant="Action 2"
        className="button"
        onClick={() => actionHandler("2")}
      >
        Decrease
      </Button>{" "}
      <Button
        variant="Action 3"
        className="button"
        onClick={() => actionHandler("3")}
      >
        Left lane
      </Button>{" "}
      <Button
        variant="Action 4"
        className="button"
        onClick={() => actionHandler("4")}
      >
        Same lane
      </Button>{" "}
      <Button
        variant="Action 5"
        className="button"
        onClick={() => actionHandler("5")}
      >
        Right lane
      </Button>{" "}
    </div>
  );
};
export default Actions;
