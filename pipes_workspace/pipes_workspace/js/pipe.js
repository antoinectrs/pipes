// let images = [];
let svg_01;
let imageNumber = 1;
function preload() {
  for (let i = 0; i < imageNumber; i++) {
    svg_01 = loadImage("pipes_folder/pipes_01.svg");
  }
}

class Pipe {
  constructor(x,y,w,h) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.offsetX = 0;
    this.offsetY = 0;
    this.image;
    this.src = svg_01;

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
  show() {
    imageMode(CORNER);
    // ellipse(this.x,this.y,50);
    
    this.image = image(this.src, this.x, this.y,this.w,this.h);
  }

  pressed(gridSpace, gridOffset) {
      //slide in rectangle zone
      //** BUG SIZE **
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
    
    //BEGIN TO SNAP
    // this.x = snap(mouseX,gridSpace, gridOffset);
    // this.y = snap(mouseY,gridSpace, gridOffset);
    // this.px = snap(pmouseX);
    // this.py = snap(pmouseY,gridSpace, gridOffset);
  }

  released(x,y,gridOffset) {
    this.x = x-gridOffset;
    this.y = y-gridOffset;
    // Quit dragging
    this.dragging = false;
  }

  snap(op,gridSpace, gridOffset) {
    
    // subtract offset (to center lines)
    // divide by grid to get row/column
    // round to snap to the closest one
    this.cell = Math.round((op - gridOffset) / gridSpace);
    // multiply back to grid scale
    // add offset to center
    console.log(this.cell)

    return this.cell * gridSpace + gridOffset;

  }
}
