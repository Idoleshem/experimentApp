import CellsLocation from "../generalData/CellsLocation";
const carsCells = [
  {
    carId: 0,
    start: 31,
    end: 35,
  },
  {
    carId: 1,
    start: 11,
    end: 13,
  },
  {
    carId: 2,
    start: 36,
    end: 38,
  },
  {
    carId: 3,
    start: 52,
    end: 52,
  },
  {
    carId: 4,
    start: 62,
    end: 62,
  },
  {
    carId: 5,
    start: 20,
    end: 43,
  },
  {
    carId: 6,
    start: 39,
    end: 64,
  },
  {
    carId: 7,
    start: 58,
    end: 39,
  },
];

const CarsPositions5s2 = [
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
    name: 1,
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
    name: 2,
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
  {
    carId: "car4",
    name: 2,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[4].start].x,
        y: CellsLocation[carsCells[4].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[4].end].x,
        y: CellsLocation[carsCells[4].end].y,
        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },

  {
    carId: "car5",
    name: 3,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[5].start].x,
        y: CellsLocation[carsCells[5].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[5].end].x,
        y: CellsLocation[carsCells[5].end].y,

        opacity: 0,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    carId: "car6",
    name: 3,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[6].start].x,
        y: CellsLocation[carsCells[6].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[6].end].x,
        y: CellsLocation[carsCells[6].end].y,
        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },

  {
    carId: "car7",
    name: 3,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[7].start].x,
        y: CellsLocation[carsCells[7].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[7].end].x,
        y: CellsLocation[carsCells[7].end].y,

        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
];

export default CarsPositions5s2;
