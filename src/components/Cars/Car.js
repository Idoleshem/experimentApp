import React from "react";
import car1 from "./car1.png";
import car2 from "./car2.png";
import car3 from "./car3.png";
import car4 from "./car4.png";
import { motion } from "framer-motion";

const Car = ({ carAnim, name, Id }) => {
  const carNames = [car1, car2, car3, car4];
  return (
    <div className="car">
      <motion.img
        id={Id}
        variants={carAnim}
        src={carNames[name]}
        initial="hidden"
        animate="show"
      />
    </div>
  );
};
export default Car;
