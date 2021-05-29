const length = 4.3; //160
const height = 2.15; //76
const rows = 3;
const columns = 22;

var screenWidth = window.screen.width;
console.log(screenWidth);
var percentage = screenWidth / 100; // 0.92%
var CellsLocation = {};
console.log(percentage);
let k = 0;
for (var i = 0; i < rows; i++) {
  for (var j = 0; j < columns; j++) {
    CellsLocation[k] = {
      cellNum: k,
      x: j * length * percentage,
      y: i * height * percentage,
    };

    k = k + 1;
  }
}

export default CellsLocation;
