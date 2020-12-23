console.log("test");
//PIPE GLOBAL VALUE
let pipe = [];
let shape1;
let pipeNumber = 2;
let pipeElement;

//GRID GLOBAL VALUE
let gridSpace = 100;
let gridOffset = gridSpace / 2;
let cellS;
let targ = [];
let p_01;
let p_02;
function preload() {
  // for (let i = 0; i < imageNumber; i++) {
  p_01 = loadImage("pipes_folder/pipes_02_scale.png");
  p_02 = loadImage("pipes_folder/door.png");
  pLevel = loadJSON("./js/position.json")
  // }
}
function setup() {
  let width = windowWidth;
  let height = windowHeight;
  let canvas = createCanvas(width, height);

  //new grid class
  grid = new Grid(gridSpace);
  cellS = grid.computeGrid();

  grid.drawGrid();
  // pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * 3, p_01));

  //SET UP DOOR PIPE
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS, p_02));
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS, p_02));

  //push tarf into targ x y position
  targ.push(grid.snap(pLevel.level1[0][0], pLevel.level1[0][1]));
  targ.push(grid.snap(pLevel.level1[1][0], pLevel.level1[1][1]));
}
let isDraging = false;
function draw() {
  background(255, 20);
  grid.drawGrid();

  //show grid class
  strokeWeight(2);
  stroke(0);



  //loop bug

  for (let index = 0; index < pipe.length; index++) {
    // console.log(pipe.length);
    // SHOW DOORS PIPES
    pipe[index].show(targ[index].x, targ[index].y, cellS, cellS);
    let inside = pipe[index].pressed(targ[index].x, targ[index].y, cellS, cellS);
    if (inside == false && mouseIsPressed) {
      isDraging = true;
    }
    if (isDraging == true) {
      targ[index] = grid.snap(mouseX, mouseY);
    }
    if (mouseIsPressed == false) {
      isDraging = false;
    }
  }
  // index = 0;
 
 

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cellS = grid.computeGrid();
}