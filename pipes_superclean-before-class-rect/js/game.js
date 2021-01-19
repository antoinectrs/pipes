class Game {
  constructor() {
    this.gameState = false;
    this.lastPosition;
    this.posAnimation = 0;
    this.speedAnimation = 0.03;
    this.setCounter = 0;
    this.win01 = false;
    this.win02 = false;

    this.sendPipe = [];
    this.keepPipePositionLevel2 = { pipeWin1: false, pipeWin2: false };
    //mettre un listner du pipe
  }
  checkPosition(pipeElement) {
    //TARGET X Y en fonction du JSON
    // PLAYER 1
    if (player.ID == 1) {
      // LEVEL_1
      if (player.winGeneral == 0) {
        if (pipeElement.x == pLevel.level1[player.ID - 1][2][6] && pipeElement.y == pLevel.level1[player.ID - 1][2][7] && pLevel.level1[player.ID - 1][pipeElement.index][8] == 1) {
          this.win01 = true;
          player.playerState = true;
        }
      } else if (player.winGeneral == 1) {
        if (pipeElement.x == pLevel.level2[player.ID - 1][2][6] && pipeElement.y == pLevel.level2[player.ID - 1][2][7]) {
          this.keepPipePositionLevel2.pipeWin1 = true;
        }
        // else {
        //   this.keepPipePositionLevel2.pipeWin1 = false;
        // }
        if (pipeElement.x == pLevel.level2[player.ID - 1][4][6] && pipeElement.y == pLevel.level2[player.ID - 1][4][7] && pLevel.level2[player.ID - 1][pipeElement.index][8] == 2) {
          this.keepPipePositionLevel2.pipeWin2 = true;
        }
        // else {
        //   this.keepPipePositionLevel2.pipeWin2 = false;
        // }
        console.log(this.keepPipePositionLevel2);
        if(this.keepPipePositionLevel2.pipeWin1==true && this.keepPipePositionLevel2.pipeWin2==true){
          console.log("WWWWIN")
          this.win02 = true;
          player.playerState = true;
        }
      }
    }
    // PLAYER 2
    if (player.ID == 2) {
      // LEVEL_1
      // let direction = 0;
      if (player.winGeneral == 0) {
        if (pipeElement.x == pLevel.level1[player.ID - 1][2][6] && pipeElement.y == pLevel.level1[player.ID - 1][2][7] && pLevel.level1[player.ID - 1][pipeElement.index][8] == 2) {
          this.win01 = true;
          player.playerState = true;
        }
      } else if (player.winGeneral == 1) {
        if (pipeElement.x == pLevel.level2[player.ID - 1][3][6] && pipeElement.y == pLevel.level2[player.ID - 1][3][7] && pLevel.level2[player.ID - 1][pipeElement.index][8] == 1) {
          this.keepPipePositionLevel2.pipeWin1 = true;
          // if (this.keepPipePositionLevel2.pipeWin2 == true) {
          //   console.log("win1")
          // }
          // direction = 1;
        }
        // else{
        //   // this.keepPipePositionLevel2.pipeWin1 = false;
        // }
        
        if (pipeElement.x == pLevel.level2[player.ID - 1][5][6] && pipeElement.y == pLevel.level2[player.ID - 1][5][7] && pLevel.level2[player.ID - 1][pipeElement.index][8] == 2) {
          this.keepPipePositionLevel2.pipeWin2 = true;
          // if (this.keepPipePositionLevel2.pipeWin1 == true) {
          // }
          // direction = 2;
        }
        // else{
        //   // this.keepPipePositionLevel2.pipeWin2 = false;
        // }

        // if (direction==1 &&  this.keepPipePositionLevel2.pipeWin2 == true) {
        //   console.log("DEBUG1")
        // }else if(direction==2 &&  this.keepPipePositionLevel2.pipeWin1 == true){
        //   console.log("DEBUG2");
        // }
        // if (direction==1 &&  this.keepPipePositionLevel2.pipeWin1 == true) {
        //   console.log("FALSE")
        // }
 
        // console.log(direction)
        console.log(this.keepPipePositionLevel2);
        //SEND IF WIN
        if(this.keepPipePositionLevel2.pipeWin1==true && this.keepPipePositionLevel2.pipeWin2==true){
          console.log("WWWWIN")
          this.win02 = true;
          player.playerState = true;
        }
      }
    }
  }
  animationWin(level) {
    console.log(animationGame)
    let x = lerp(animationGame[level][this.setCounter].x, animationGame[level][this.setCounter + 1].x, this.posAnimation);
    let y = lerp(animationGame[level][this.setCounter].y, animationGame[level][this.setCounter + 1].y, this.posAnimation);
    push();
    noStroke();
    fill(0)
    ellipse(x, y, grid.cellSize * 0.7);
    pop();
  }
  fade() {
    let element = document.getElementById("defaultCanvas0");
    element.classList.add("fade-inTest");
  }
}