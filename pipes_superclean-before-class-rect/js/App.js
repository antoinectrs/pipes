//PIPE GLOBAL VALUE
let pipe = [];
let shape1;
let pipeNumber = 2;
let pipeElement;
let pipeP;

//GRID GLOBAL VALUE
let gridSpace = 100;
let gridOffset = gridSpace / 2;
let cellS;
let targ = [];
let p_01;
let p_02;
let p_03;

// GRID RECT VALUE
let rectGrid = [];

//PLAYER TAB
let player = [];
//ANIMATION GAME ARRAY
let animationGame = [];

//PLAYER
function preload() {
  // for (let i = 0; i < imageNumber; i++) {
  p_01 = loadImage("pipes_folder/pipes_02_scale.png");
  p_02 = loadImage("pipes_folder/door.png");
  p_03 = loadImage("pipes_folder/pipes_03_scale.png");
  pLevel = loadJSON("./js/position.json")

  p_big_01 = loadImage("pipes_folder/pipes01.png");
  p_big_02 = loadImage("pipes_folder/pipes02.png");
  // }
}
function setup() {
  let width = windowWidth;
  let height = windowHeight;
  let canvas = createCanvas(width, height);

  //LISTENER FIREBASE
  DATABASE.ref("player_1/position").on("value", (snap) => {
    const position = snap.val()
    console.log(position)
  });
  SEND_MESSAGE("player_1/position", {
    color: "notOccuped",
    id: Math.random() * 10,
  });

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

  let checkID = window.location.href.split('/').pop();
  if (checkID == "#01") // This doesn't work, any suggestions?
  {
    player.push(new Player(checkID))
    console.log(player[0].ID);
  } else if (checkID == "#02") {
    alert("your player is #02");
  }
  grid.drawGrid();
  //SET UP DOOR PIPE
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[0][3], p_02, pLevel.level1[0][4], pLevel.level1[0][5]));
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[1][3], p_02, pLevel.level1[1][4], pLevel.level1[1][5]));
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[2][3], p_big_01, pLevel.level1[2][4], pLevel.level1[2][5], pLevel.level1[2][6], pLevel.level1[2][7]));
  pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[2][3], p_big_02, pLevel.level1[3][4], pLevel.level1[3][5], pLevel.level1[3][6], pLevel.level1[3][7]));
  // pipe.push(new Pipe(width / 2, height / 2, cellS, cellS * pLevel.level1[3][3], p_03, pLevel.level1[3][4], pLevel.level1[3][5]));

  //SET UP ANIMATION GAME
  // FAIRE AUTRE LOOP SI PAS LE MEME NOMBRE DE TRACER POUR LES AUTRES NIVEAUX
  for (let index = 0; index < pLevel.level1animation.length; index++) {
    animationGame.push(grid.snapSetUp(pLevel.level1animation[index][1], pLevel.level1animation[index][0]))

  }
  // console.log(animationGame);

  //push tarf into targ x y position
  // targ.push(grid.snap(pLevel.level1[0][0], pLevel.level1[0][1]));
  for (let i = 0; i < pipe.length; i++) {
    // bug define shape 2 in grid
    // if((pLevel.level1[i][2])%2 == 0 ){
    //   console.log(pipe[i])
    // }
    targ.push(grid.snapSetUp(pLevel.level1[i][0], pLevel.level1[i][1]));
  }
  // SETUP RESTRICTION RECT SNAP
  // CHAQUE SHAPE DETECT SON OCCUPATION SUR LES RECTANGLES
  for (let i = 0; i < targ.length; i++) {
    // RECUP LES CORDONNES DU PIPES APPLIQUEE SUR RECT RESPECTIF
    const targP = { x: pLevel.level1[i][0], y: pLevel.level1[i][1] };

    //ASSIGN STATUT FULL TO RECT
    if (grid.rectState(rectGrid, targP.y, targP.x).statut == true) {
      rectGrid[grid.rectState(rectGrid, targP.y, targP.x).ind].take();
    }
  }
}
let isDraging = false;
function draw() {
  if (game.win01 == false) {
    background(255);
  }
  grid.drawGrid();
  //show grid class
  // strokeWeight(2);

  // FAIRE UN SWITCH POUR LES PROCHAIN NIVEAU
  if (game.win01 == true) {
    game.animationWin();
    if (game.posAnimation < 1) {
      game.posAnimation += game.speedAnimation;
    } else if (game.setCounter < pLevel.level1animation.length - 2) {
      game.setCounter++;
      game.posAnimation = 0;
    } else {
      game.win01 = !game.win01;
    }
  }
  // console.log( pLevel.level1animation.length)

  stroke(0);
  for (let index = 0; index < pipe.length; index++) {
    // SHOW PIPES
    //LISTER DU PIPE MODIFIER snapshot
    if (pipe[index].pipeIsUsed == true) {
      alert("FIRST PIPES VOLER")
    }
    pipe[index].show(targ[index].x, targ[index].y, cellS, cellS * pLevel.level1[index][2]);
    if (pipe[index].pressed(targ[index].x, targ[index].y, cellS, cellS) == false && mouseIsPressed && pLevel.level1[index][3] == "true") {
      isDraging = true;
      pipe[index].isDrag = true;
      targ[index] = pipe[index].drag(mouseX, mouseY);
      game.lastPosition = { x: targ[index].x, y: targ[index].y, index: index };
    }
    // DRAG PIPE
    if (pipe[index].isDrag == true && isDraging == true) {
      pipeP = grid.snap(targ[index].x, targ[index].y).casePosition;
      //DETECT IF IN SHARE PIPE
      if (pipeP.y < 5) {
        pipe[index].rot = 0;
      } else {
        pipe[index].rot = 90;
      }
      // console.log(pipeP.y)
      //DRAG NO LIMIT
      targ[index] = pipe[index].drag(mouseX, mouseY);
      //REDRAG WITH LIMIT
      // console.log(pipe[index].shape[0],pipe[index].shape[1])
      for (let i = 0; i < pipe[index].shape.length; i++) {
        let cx = (pipeP.x) - (pipe[index].shape[0]);
        if (grid.calculLimit(rectGrid, targ[game.lastPosition.index].casePosition, pipeP.x, pipeP.y) == true) {
          targ[game.lastPosition.index] = pipe[game.lastPosition.index].drag(game.lastPosition.x, game.lastPosition.y);
          // console.log(pipeP.x)
        }
      }
      for (let i = 0; i < targ.length; i++) {
        const targP = { x: pLevel.level1[i][0], y: pLevel.level1[i][1] };
      }
      //RECUP 
    }
    if (mouseIsPressed == false) {
      // if (pipe[index].drag().x == pLevel.level1[2][0] && pipe[index].drag().y == pLevel.level1[3][1]) {
      //   // console.log("win");
      // }
      isDraging = false;
      pipe[index].isDrag = false;
    }
  }
}
function mouseReleased() {
  
  //CHECK IS WIN
  // for (let i = 0; i < targ.length; i++) {
  // console.log(game.checkPosition(pipeP));
  if (game.checkPosition(pipeP)) {
    game.animationWin();
  }
  // }
  if (grid.calculLimit(rectGrid, targ[game.lastPosition.index].casePosition, pipeP.x, pipeP.y) == true) {
    targ[game.lastPosition.index] = pipe[game.lastPosition.index].drag(game.lastPosition.x, game.lastPosition.y);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cellS = grid.computeGrid();
}
//METTRE LE LISTENER SNAPCHOT