console.log("hello, pipes begin");
//PIPE GLOBAL VALUE
let pipe;
let shape1;
// let pipeNumber = 1;
let pipeElement;

//GRID GLOBAL VALUE
let gridSpace = 100;
let gridOffset = gridSpace / 2;

//SET UP
function setup() {
  let width = windowWidth;
  let height = windowHeight;
  let canvas = createCanvas(width, height);

  //new grid class
  grid = new Grid(gridSpace);
  let cellS = grid.computeGrid();

  grid.drawGrid();
  pipe = new Pipe(windowWidth / 2, windowHeight / 2, cellS, cellS*3);
  // pipe.push(pipeElement);
}

function draw() {
  background(255, 20);
  grid.drawGrid();
  //show grid class
  strokeWeight(2);
  stroke(0);

  let targ = grid.snap(mouseX, mouseY);

  //loop draw pipe
  // for (let index = 0; index < pipeNumber; index++) {
  //   pipe[index].update();
  //   pipe[index].show();
  //   // console.log(pipeNumber)
  // }
  pipe.update();
  pipe.show(targ.x, targ.y);
if(mouseIsPressed){

  // let x=  pipe.snap(mouseX,gridSpace, gridOffset);
  // let y=  pipe.snap(mouseY,gridSpace, gridOffset);
  // document.getElementById("svgLayout").style.left = x+"px";
  // document.getElementById("svgLayout").style.top = y+"px";

  // pipe.pressed(x,y);
}
  // this.button.show();
}

function mousePressed() {
  // for (let index = 0; index < pipeNumber; index++) {
  //   pipe[index].pressed(gridSpace, gridOffset);
  // }
  // let x=  pipe.snap(mouseX,gridSpace, gridOffset);
  // let y=  pipe.snap(mouseY,gridSpace, gridOffset);

  // pipe.pressed(x,y);
}

function mouseReleased() {
  // for (let index = 0; index < pipeNumber; index++) {
  //   pipe[index].released();
  // }
  // let x=  pipe.snap(mouseX,gridSpace, gridOffset);
  // let y=  pipe.snap(mouseY,gridSpace, gridOffset);
  // pipe.released(x,y,gridOffset);
  
 // pipeElement = new Pipe(windowWidth / 2, windowHeight / 2, 100, 300);
  // pipe.push(pipeElement);
  // pipeNumber++;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  grid.computeGrid();
  
}