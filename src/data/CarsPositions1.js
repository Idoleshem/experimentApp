import CellsLocation from "./CellsLocation";
const carsCells = [
  {
    carId: 1,
    start: 0,
    end: 8,
  },
  {
    carId: 2,
    start: 12,
    end: 10,
  },
];

const CarsPositions1 = [
  {
    carId: "car1",
    name: 0,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[0].start].x,
        y: CellsLocation[carsCells[0].start].y,
        opacity: 0,
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
    carId: "car2",
    name: 3,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[1].start].x,
        y: CellsLocation[carsCells[1].start].y,
        opacity: 0,
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
