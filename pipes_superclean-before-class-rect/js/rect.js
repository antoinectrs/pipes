class Rect {
  constructor(col, cellSize, row) {
    this.col = col,
    this.cellSize = cellSize,
    this.row = row,
    this.isTaken = false
  }
  show() {
    // console.log(this.col,this.cellSize, this.row);
    rect(this.col * this.cellSize, this.row * this.cellSize, this.cellSize, this.cellSize);
    // return 0;
  }
}