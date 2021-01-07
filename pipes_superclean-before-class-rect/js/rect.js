class Rect {
  constructor(col, cellSize, row) {
    this.col = col,
    this.cellSize = cellSize,
    this.row = row,
    this.isTaken = false
    this.color = 255;
  }
  show(col, row) {
    fill(this.color);
    // noFill();
    rect(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize);
  }
  take(){
    this.isTaken = true;
   return this.isTaken;
  }
}