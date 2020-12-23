// let images = [];

let imageNumber = 1;
let insideShape = false;

class Pipe {
  constructor(x, y, w, h, src) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.offsetX = 0;
    this.offsetY = 0;
    this.image;
    this.src = src;

    //SNAP
    this.px;
    this.py;

    //interaction element
    this.isDrag = false;
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
  show(px, py, w, h) {
    imageMode(CENTER);
    // this.image = image(this.src, px, py, w, h);
    this.image = image(this.src, px, py, w, h);


  }

  pressed(px, py, w, h) {
    //slide in rectangle zone
    if (
      mouseX > px - w / 2 &&
      mouseX < px + w / 2 &&
      mouseY > py - h / 2 &&
      mouseY < py + h / 2
    ) {
      insideShape = !insideShape;
      // return insideShape;
      return insideShape;
    }
  }
  drag() {
    this.dragElement = grid.snap(mouseX, mouseY);
    return this.dragElement
  }
  // clicked() {
  //   if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
  //     console.log("click");
  //   }
  // }
}
