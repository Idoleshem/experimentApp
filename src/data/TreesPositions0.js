import CellsLocationMargin from "./cellsLocationMargin";
const treesCells = [
  {
    treeId: 1,
    start: 0,
    end: 0,
  },
  {
    carId: 2,
    start: 7,
    end: 7,
  },
];

const TreesPositions0 = [
  {
    carId: "tree",
    name: 0,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[0].start].x,
        y: CellsLocationMargin[treesCells[0].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocationMargin[treesCells[0].end].x,
        y: CellsLocationMargin[treesCells[0].end].y,
        opacity: 1,
        transition: { duration: 2, delay: 0.4 },
      },
    },
  },

  {
    carId: "tree",
    name: 1,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[1].start].x,
        y: CellsLocationMargin[treesCells[1].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocationMargin[treesCells[1].end].x,
        y: CellsLocationMargin[treesCells[1].end].y,

        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
];

export default TreesPositions0;
