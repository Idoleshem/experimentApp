const TreesPositions1 = [
  {
    treeId: 1,
    treeAnim: {
      hidden: { x: 0, y: -300, opacity: 0 },
      show: {
        x: 0,
        y: -300,
        opacity: 1,
        transition: { duration: 2, delay: 0.4 },
      },
    },
    active: false,
  },

  {
    treeId: 2,
    treeAnim: {
      hidden: { x: 500, y: -285, opacity: 0 },
      show: {
        x: 500,
        y: -285,
        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
    active: false,
  },
];

export default TreesPositions1;
