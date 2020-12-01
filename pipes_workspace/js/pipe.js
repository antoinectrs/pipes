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

    // this.x = windowWidth/2;
    // this.y = windowHeight/2;
    // this.w = 100;
    // this.h = 300;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.offsetX = 0;
    this.offsetY = 0;
    this.image;
    this.src = svg_01;
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
  show() {
    imageMode(CENTER);
    // this.image = image(this.src, this.x, this.y,100,300);
    this.image = image(this.src, this.x, this.y,this.w,this.h);
  }

  pressed() {
  
    // Did I click on the rectangle?
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
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
  // image(svg_01, width/2, height/2);
}
