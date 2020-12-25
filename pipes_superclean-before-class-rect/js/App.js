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
  for (let col = 0; col < grid.nCols; col++) {
    for (let row = 0; row < grid.nRows; row++) {
      rectGrid.push(new Rect(col, grid.cellSize, row));
    }
  }
  console.log(rectGrid.length)

  grid.drawGrid();
 
  //SET UP DOOR PIPE
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[0][3], p_02,));
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[1][3], p_02,));
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[2][3], p_01,));


  //push tarf into targ x y position
  targ.push(grid.snap(pLevel.level1[0][0], pLevel.level1[0][1]));
  targ.push(grid.snap(pLevel.level1[1][0], pLevel.level1[1][1]));

  targ.push(grid.snap(pLevel.level1[2][0], pLevel.level1[2][1]));
}
let isDraging = false;
function draw() {
  background(255);
  grid.drawGrid();

  //show grid class
  strokeWeight(2);
  stroke(0);
  // let dragElement;
  for (let index = 0; index < pipe.length; index++) {
    // SHOW PIPES
    pipe[index].show(targ[index].x, targ[index].y, cellS, cellS* pLevel.level1[index][2]);

    if (pipe[index].pressed(targ[index].x, targ[index].y, cellS, cellS) == false && mouseIsPressed) {
      isDraging = true;
      pipe[index].isDrag = true;
     
    }
    // DRAG PIPE
    if (pipe[index].isDrag == true && isDraging == true) {
      targ[index] = pipe[index].drag();

      //RECUP 
      game.checkPosition(pipe[index]);
      console.log(pipe[index].drag().pixelPosition)
    }
    if (mouseIsPressed == false) {
    // console.log(pipe[index].drag()) ;
    if(pipe[index].drag().x == pLevel.level1[3][0] && pipe[index].drag().y == pLevel.level1[3][1]){
      // console.log("win");
    }
       console.log();
      isDraging = false;
      pipe[index].isDrag = false;
    }

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cellS = grid.computeGrid();
}