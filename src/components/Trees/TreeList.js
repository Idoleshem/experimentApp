import React from "react";
import Tree from "./tree";

let TreeList = ({ TreesPositions }) => {
  // debugger;
  return (
    <div className="car-List">
      {TreesPositions.map((tree) => (
        <Tree key={tree.treeId} treeAnim={tree.treeAnim} />
      ))}
    </div>
  );
};
export default TreeList;
