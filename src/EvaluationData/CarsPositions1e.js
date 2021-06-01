import CellsLocation from "../generalData/CellsLocation";
const carsCells = [
  {
    carId: 0,
    start: 26,
    end: 28,
  },
  {
    carId: 1,
    start: 29,
    end: 31,
  },
  {
    carId: 2,
    start: 52,
    end: 53,
  },
  {
    carId: 3,
    start: 28,
    end: 9,
  },
];

const CarsPositions1e = [
  {
    carId: "car0",
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
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },

  {
    carId: "car1",
    name: 1,
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
  {
    carId: "car2",
    name: 2,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[2].start].x,
        y: CellsLocation[carsCells[2].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[2].end].x,
        y: CellsLocation[carsCells[2].end].y,
        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },

  {
    carId: "car3",
    name: 3,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[3].start].x,
        y: CellsLocation[carsCells[3].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[3].end].x,
        y: CellsLocation[carsCells[3].end].y,

        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
];

export default CarsPositions1e;
