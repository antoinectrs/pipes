// let images = [];

let imageNumber = 1;
let insideShape = false;

class Pipe {
  constructor(x, y, w, h, src, shape, rot,winPosition) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shape = shape;
    this.offsetX = 0;
    this.offsetY = 0;
    this.image;
    this.src = src;
    //ROTATION PIPE
    this.rot = rot;
    //SNAP
    this.px;
    this.py;
    //interaction element
    this.isDrag = false;
    this.winPosition = winPosition;

    //SHARE PIPE
    this.onSharePipe = true;
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
  show(px, py, w, h) {
    push();
    translate(px, py);
    angleMode(DEGREES);
    rotate(this.rot);
    imageMode(CENTER);
    // this.image = image(this.src, px, py, w, h);
    this.image = image(this.src, 0,0, w, h);
    pop();
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
  drag(x, y) {
    this.dragElement = grid.snap(x, y);
    return this.dragElement
  }
  // clicked() {
  //   if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
  //     console.log("click");
  //   }
  // }
}
