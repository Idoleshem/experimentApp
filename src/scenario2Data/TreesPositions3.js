import CellsLocationMargin from "../generalData/cellsLocationMargin";
const treesCells = [
  {
    treeId: 1,
    start: 10,
    end: 10,
  },
  {
    treeId: 2,
    start: 34,
    end: 34,
  },
  {
    treeId: 3,
    start: 19,
    end: 19,
  },
];

const TreesPositions3 = [
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

export default TreesPositions3;
