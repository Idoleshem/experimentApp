import React from "react";
import tree1 from "./tree1.png";
import { motion } from "framer-motion";

const Tree = ({ treeAnim }) => {
  return (
    <div className="tree">
      <motion.img
        variants={treeAnim}
        src={tree1}
        initial="hidden"
        animate="show"
      />
    </div>
  );
};
export default Tree;
