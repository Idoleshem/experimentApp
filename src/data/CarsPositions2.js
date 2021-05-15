import CellsLocation from "./CellsLocation";
const carsCells = [
  {
    carId: 1,
    start: 2,
    end: 5,
  },
  {
    carId: 2,
    start: 3,
    end: 7,
  },
];

const CarsPositions1 = [
  {
    carId: 1,
    name: "car",
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[0].start].x,
        y: CellsLocation[carsCells[0].start].y,
        opacity: 1,
      },
      show: {
        x: CellsLocation[carsCells[0].end].x,
        y: CellsLocation[carsCells[0].end].y,
        opacity: 1,
        transition: { duration: 2, delay: 0.4 },
      },
    },
  },

  {
    carId: 2,
    name: "car",
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[1].start].x,
        y: CellsLocation[carsCells[1].start].y,
        opacity: 1,
      },
      show: {
        x: CellsLocation[carsCells[1].end].x,
        y: CellsLocation[carsCells[1].end].y,
        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
];

export default CarsPositions1;
