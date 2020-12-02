console.log("hello, pipes begin");
// constructor() {
// this.canvas = document.createElement("canvas");
// document.body.appendChild(this.canvas);
//ctxx
// this.ctx = this.canvas.createCanvas(200, 200);
// this.canvas.width = this.w = window.innerWidth;
// this.canvas.height = this.h = window.innerHeight;
// this.setup();
// }

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
  

  // canvas.parent('canvasForHTML');
  // this.button = new Button(this.w / 2, this.h / 2, 50, 50, this.ctx);
  //FB
  //listener
  // DATABASE.ref("COLOR_CHANGE").on("value", (snapshot) => {
  //   if (!this.appHasStarted) {
  //     this.button.changeColor(snapshot.val());
  //     this.draw();
  //     this.appHasStarted = true;
  //   } else {
  //     const value = snapshot.val();
  //     this.button.changeColor(value);
  //   }
  // });

  //new grid class
  grid = new Grid(gridSpace);
  pipe = new Pipe(windowWidth / 2, windowHeight / 2, 100, 300);
  // pipe.push(pipeElement);
}

function draw() {
  background(255, 20);

  //show grid class
  strokeWeight(2);
  stroke(0);
  grid.showG();

  //loop draw pipe
  // for (let index = 0; index < pipeNumber; index++) {
  //   pipe[index].update();
  //   pipe[index].show();
  //   // console.log(pipeNumber)
  // }
  pipe.update();
  pipe.show();
if(mouseIsPressed){

  let x=  pipe.snap(mouseX,gridSpace, gridOffset);
  let y=  pipe.snap(mouseY,gridSpace, gridOffset);
  document.getElementById("svgLayout").style.left = x+"px";
  document.getElementById("svgLayout").style.top = y+"px";

  pipe.pressed(x,y);
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
  let x=  pipe.snap(mouseX,gridSpace, gridOffset);
  let y=  pipe.snap(mouseY,gridSpace, gridOffset);
  pipe.released(x,y,gridOffset);
  
 // pipeElement = new Pipe(windowWidth / 2, windowHeight / 2, 100, 300);
  // pipe.push(pipeElement);
  // pipeNumber++;
}
