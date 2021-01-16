class Rect {
  constructor(col, cellSize, row, src) {
    this.col = col,
    this.cellSize = cellSize,
    this.row = row,
    this.isTaken = false
    this.color = 255;
    this.src = src;
    // this.cross;
  }
  show(col, row) {
    fill(this.color);
    // noFill();
    noStroke();
    rect(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize);

    // imageMode(CORNER);
    this.cross = image(this.src, col * this.cellSize-this.cellSize/8, row * this.cellSize-this.cellSize/8,this.cellSize/4,this.cellSize/4);
  }
  take(){
    this.isTaken = true;
   return this.isTaken;
  }
}