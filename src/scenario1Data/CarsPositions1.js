import CellsLocation from "../generalData/CellsLocation";
const carsCells = [
  {
    carId: 0,
    start: 22,
    end: 45,
  },
  {
    carId: 1,
    start: 25,
    end: 27,
  },
  {
    carId: 2,
    start: 3,
    end: 5,
  },
  {
    carId: 3,
    start: 31,
    end: 33,
  },
  {
    carId: 4,
    start: 37,
    end: 39,
  },
  {
    carId: 5,
    start: 50,
    end: 50,
  },
  {
    carId: 6,
    start: 56,
    end: 56,
  },
  {
    carId: 7,
    start: 61,
    end: 61,
  },
];

const CarsPositions1 = [
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
    name: 1,
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
    name: 2,
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

export default CarsPositions1;
