class Grid {
  constructor(gridSpace, gridOffset) {
    this.strokeW = 0.3;
    this.strokeC = 0;

    this.targetCellSize = 0.2;
    this.nCols = 0;
    this.nRows = 0;
    this.cellSize = 0;
    this.pos = { x: 0, y: 0 };
  }
  drawGrid() {
    strokeWeight(this.strokeW);
    stroke(this.strokeC);
    for (let col = 0; col < this.nCols; col++) {
      for (let row = 0; row < this.nRows; row++) {
        rectGrid[row].show(col, row);
        // rect(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize);
      }
    }
  }
  computeGrid() {
    this.cellSize = width * this.targetCellSize;
    this.nCols = 1 / this.targetCellSize;
    this.nRows = ceil(height / this.cellSize);
    let cellS = this.cellSize;
    return cellS
  }
  snap(windowX, windowY) {
    let centerCell = this.cellSize / 2;
    let x = round((windowX - centerCell) / width * this.nCols) * this.cellSize + centerCell;
    let y = round((windowY - centerCell) / height * this.nRows) * this.cellSize + centerCell;
    let totalPixel = (x *this.nRows)/(width-this.cellSize / 2);
    if(x > ((width-this.cellSize / 2)/5)*4 ){
  console.log("full");
    }
    // console.log(x," "+width-this.cellSize / 2+ "   "+totalPixel);
    return { x, y }; // {x: x, y: y}
  }
  // position(){
    
  // }
}
