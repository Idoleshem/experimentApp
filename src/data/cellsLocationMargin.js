const length = 8.2; //160
const height = 7.5 * 3; //76
const rows = 2;
const columns = 7;

var screenWidth = window.screen.width;
console.log(screenWidth);
var percentage = screenWidth / 100; // 0.92%
var CellsLocationMargin = {};
console.log(percentage);
let k = 0;
for (var i = 0; i < rows; i++) {
  for (var j = 0; j < columns; j++) {
    CellsLocationMargin[k] = {
      cellNum: k,
      x: j * length * percentage,
      y: i * height * percentage,
    };

    k = k + 1;
  }
}

export default CellsLocationMargin;
