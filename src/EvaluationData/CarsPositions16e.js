import CellsLocation from "../generalData/CellsLocation";
const carsCells = [
  {
    carId: 0,
    start: 44,
    end: 45,
  },
  {
    carId: 1,
    start: 23,
    end: 25,
  },
  {
    carId: 2,
    start: 26,
    end: 28,
  },
  {
    carId: 3,
    start: 29,
    end: 32,
  },
  {
    carId: 4,
    start: 48,
    end: 49,
  },
  {
    carId: 5,
    start: 50,
    end: 51,
  },
  {
    carId: 6,
    start: 52,
    end: 53,
  },
  {
    carId: 7,
    start: 24,
    end: 5,
  },
];

const CarsPositions16e = [
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
    name: 1,
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
    name: 2,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[5].start].x,
        y: CellsLocation[carsCells[5].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[5].end].x,
        y: CellsLocation[carsCells[5].end].y,

        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    carId: "car6",
    name: 2,
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

export default CarsPositions16e;
