// Draw grid
// var l = 0;
// strokeWeight(0.3);
// stroke(1);
// while (l < this.w || l < height) {
//   line(0, l, width, l);
//   line(l, 0, l, height);
//   l += grid;
// }
// end Draw grid
class Grid {
  constructor(gridSpace,gridOffset) {
    this.w = windowWidth;
    this.h = windowHeight;
    this.l = 0;
    this.strokeW = 0.3;
    this.strokeC = 0;
    this.gridSpace = gridSpace;
    this.gridOffset = gridOffset;
  }

  showG() {
    strokeWeight(this.strokeW);
    stroke(this.strokeC);

    //KEEP L RESET TO 0 too continue grid
    this.l = 0;
    while (this.l < this.w || this.l < this.h) {
      line(0, this.l, this.w, this.l);
      line(this.l, 0, this.l, this.h);
      this.l += this.gridSpace;
    }
  }
}
