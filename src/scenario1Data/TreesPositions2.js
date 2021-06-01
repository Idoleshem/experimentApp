import CellsLocationMargin from "../generalData/cellsLocationMargin";
const treesCells = [
  {
    treeId: 1,
    start: 8,
    end: 8,
  },
  {
    treeId: 2,
    start: 23,
    end: 23,
  },
  {
    treeId: 3,
    start: 20,
    end: 20,
  },
];

const TreesPositions2 = [
  {
    treeId: "tree",
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
    treeId: "tree",
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
  {
    treeId: "tree",
    name: 1,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[2].start].x,
        y: CellsLocationMargin[treesCells[2].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocationMargin[treesCells[2].end].x,
        y: CellsLocationMargin[treesCells[2].end].y,

        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
];

export default TreesPositions2;
