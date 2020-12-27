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

// GRID RECT VALUE
let rectGrid = [];
let game;
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
  game = new Game();

  //RECT GRID SETUP
  let indexT = 0;
  for (let col1 = 0; col1 < grid.nCols; col1++) {
    for (let row1 = 0; row1 < grid.nRows; row1++) {
      rectGrid.push(new Rect(col1, grid.cellSize, row1));
      indexT++;
    }
  }

  grid.drawGrid();

  //SET UP DOOR PIPE
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[0][3], p_02));
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[1][3], p_02));
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[2][3], p_01));

  //push tarf into targ x y position
  // targ.push(grid.snap(pLevel.level1[0][0], pLevel.level1[0][1]));
  targ.push(grid.snapSetUp(pLevel.level1[0][0], pLevel.level1[0][1]));
  targ.push(grid.snapSetUp(pLevel.level1[1][0], pLevel.level1[1][1]));

  targ.push(grid.snapSetUp(pLevel.level1[2][0], pLevel.level1[2][1]));

  // SETUP RESTRICTION RECT SNAP
  // CHAQUE SHAPE DETECT SON OCCUPATION SUR LES RECTANGLES
  for (let i = 0; i < targ.length; i++) {
    // RECUP LES CORDONNES DU PIPES APPLIQUEE SUR RECT RESPECTIF
    const targP = { x: pLevel.level1[i][0], y: pLevel.level1[i][1] };
    // console.log(targP)
    grid.rectState(rectGrid, targP.y, targP.x)
  }



}
let isDraging = false;
function draw() {
  background(255);

  grid.drawGrid();

  //show grid class
  // strokeWeight(2);
  stroke(0);
  for (let index = 0; index < pipe.length; index++) {
    // SHOW PIPES
    pipe[index].show(targ[index].x, targ[index].y, cellS, cellS * pLevel.level1[index][2]);

    if (pipe[index].pressed(targ[index].x, targ[index].y, cellS, cellS) == false && mouseIsPressed && pLevel.level1[index][3] == "true") {
      isDraging = true;
      pipe[index].isDrag = true;

      // grid.rectState(rectGrid,pipeP.y,pipeP.x);
    }
    // DRAG PIPE
    if (pipe[index].isDrag == true && isDraging == true) {
      targ[index] = pipe[index].drag();

      //DETECT CASE NUMBER
      let pipeP = grid.snap(targ[index].x, targ[index].y).casePosition;
      console.log(pipeP);

      //SHECK RECT
      // indexT =0;
      // for (let col1 = 0; col1 < grid.nCols; col1++) {
      //   for (let row1 = 0; row1 < grid.nRows; row1++) {
      //     // rectGrid.push(new Rect(col1, grid.cellSize, row1));
      //     if(rectGrid[indexT].isTaken == true){
      //      console.log(rectGrid[indexT]);
      //     }
         
      //     console.log();
      //     indexT++;
      //   }
      // }
    

      for (let i = 0; i < targ.length; i++) {
        const targP = { x: pLevel.level1[i][0], y: pLevel.level1[i][1] };
        //  console.log(targP);
      }
      // if(pipeP.x == ){

      // }
      // console.log(pipeP)

      //RECUP 
      game.checkPosition(pipe[index]);
    }
    if (mouseIsPressed == false) {
      if (pipe[index].drag().x == pLevel.level1[2][0] && pipe[index].drag().y == pLevel.level1[3][1]) {
        // console.log("win");
      }
      isDraging = false;
      pipe[index].isDrag = false;
    }
  }
}
function mouseReleased() {
  // console.log("reales")
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cellS = grid.computeGrid();
}