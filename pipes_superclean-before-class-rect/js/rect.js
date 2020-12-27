class Rect {
  constructor(col, cellSize, row) {
    this.col = col,
    this.cellSize = cellSize,
    this.row = row,
    this.isTaken = false
  }
  show(col, row) {
    rect(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize);
    // return 0;
  }
  take(){

    this.isTaken = true;
   return this.isTaken;
  }
}