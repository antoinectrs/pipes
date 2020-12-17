console.log("hello, pipes begin");
//PIPE GLOBAL VALUE
let pipe = [];
let shape1;
let pipeNumber = 2;
let pipeElement;

//GRID GLOBAL VALUE
let gridSpace = 100;
let gridOffset = gridSpace / 2;
let cellS;
let targ;
//SET UP
function setup() {
  let width = windowWidth;
  let height = windowHeight;
  let canvas = createCanvas(width, height);

  //new grid class
  grid = new Grid(gridSpace);
  cellS = grid.computeGrid();

  grid.drawGrid();
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * 3, p_01));
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS, p_02));
  targ = grid.snap(47, 331);
}

function draw() {
  background(255, 20);
  grid.drawGrid();
  //show grid class
  strokeWeight(2);
  stroke(0);
  //loop draw pipe
  // for (let index = 0; index < pipeNumber; index++) {
  //   pipe[index].update();
  // }

  // pipe.update();
  // pipe[0].show(targ.x, targ.y, cellS, cellS*3);
  pipe[1].show(targ.x, targ.y, cellS, cellS);

  for (let index = 0; index < pipe.length; index++) {
    let inside = pipe[index].pressed(targ.x, targ.y, cellS, cellS);
    let isDraging = false;
    if (inside == false && mouseIsPressed) {
      isDraging= true;
      // console.log(pipe[index].pressed(targ.x, targ.y, cellS, cellS));
    }else if (mouseIsPressed && isDraging) {
      targ = grid.snap(mouseX, mouseY);
    }
    
  }
}

function mousePressed() {
  //Reset grid.snap xy
  // targ = grid.snap(mouseX, mouseY);

  // for (let index = 0; index < pipe.length; index++) {
  // let inside =  pipe[index].pressed(targ.x, targ.y, cellS, cellS);
  // console.log(pipe[index].pressed(targ.x, targ.y, cellS, cellS));
  // }
  // let x=  pipe.snap(mouseX,gridSpace, gridOffset);
  // let y=  pipe.snap(mouseY,gridSpace, gridOffset);
  // pipe.pressed(x,y);
}

function mouseReleased() {

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cellS = grid.computeGrid();
}