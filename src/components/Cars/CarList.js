import React from "react";
import Car from "./Car";

let CarList = ({ currentPosition, setCurrentPosition, CarsPositions }) => {
  // debugger;
  return (
    <div className="car-List">
      {CarsPositions.map((car) => (
        <Car
          key={car.carId}
          Id={car.carId}
          carAnim={car.carAnim}
          name={car.name}
        />
      ))}
    </div>
  );
};
export default CarList;
