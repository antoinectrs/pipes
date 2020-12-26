class Rect {
  constructor(col, cellSize, row) {
    this.col = col,
    this.cellSize = cellSize,
    this.row = row,
    this.isTaken = false
  }
  show(col, row) {
    // console.log(this.col,this.cellSize, this.row);
    rect(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize);
    // return 0;
  }
  checkTake(){
    this.isTaken =  !this.isTaken
   return this.isTaken;
  }
}