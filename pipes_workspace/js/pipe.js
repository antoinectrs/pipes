// let images = [];
let p_01;
let p_02;
let imageNumber = 1;
let insideShape = false;
function preload() {
  // for (let i = 0; i < imageNumber; i++) {
    p_01 = loadImage("pipes_folder/pipes_02_scale.png");
   p_02 = loadImage("pipes_folder/door.png");
  // }
}

class Pipe {
  constructor(x, y, w, h,src) {
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
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
  show(px,py,w,h) {
    imageMode(CENTER);
    // this.image = image(this.src, px, py, w, h);
    this.image = image(this.src, px, py, w, h);
  }

  pressed(px,py,w,h) {
    //slide in rectangle zone
    //** BUG SIZE **
  
    if (
      mouseX > px-px/2 &&
      mouseX < px-px/4 + w &&
      mouseY > py-px/4 &&
      mouseY < py-py/8 + h
    ) {
      insideShape = !insideShape;
      return insideShape;
    }
  }

  // clicked() {
  //   if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
  //     console.log("click");
  //   }
  // }
}
