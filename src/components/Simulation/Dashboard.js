import React from "react";

const Dashboard = ({ currentStatus, currentDecision }) => {
  // console.log(currentStatus);
  console.log("the decision is", currentDecision);

  // let currentParameters = currentStatus.currentStatus;
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <h1>"parameter 1: "</h1>
      <h1>"parameter 2: "</h1>
    </div>
  );
};
export default Dashboard;
