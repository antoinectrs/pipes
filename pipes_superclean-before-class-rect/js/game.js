class Game {
  constructor() {
    this.gameState = false;
    this.lastPosition;
    this.posAnimation = 0;
    this.speedAnimation = 0.03;
    this.setCounter = 0;
    this.win01 = false;

    this.sendPipe = [];
    //mettre un listner du pipe
  }
  checkPosition(pipeElement) {
    //TARGET X Y en fonction du JSON

    // console.log(pipeElement.index);
    console.log(pLevel.level1[player.ID - 1][pipeElement.index][8])
    // PLAYER 1
    if (player.ID == 1) {
      // LEVEL_1
      if (pipeElement.x == pLevel.level1[player.ID - 1][2][6] && pipeElement.y == pLevel.level1[player.ID - 1][2][7] && pLevel.level1[player.ID - 1][pipeElement.index][8]==1) {
        this.win01 = true;

      }
    }
    // PLAYER 2
    if (player.ID == 2) {
      // LEVEL_1
      if (pipeElement.x == pLevel.level1[player.ID - 1][2][6] && pipeElement.y == pLevel.level1[player.ID - 1][2][7] && pLevel.level1[player.ID - 1][pipeElement.index][8]==2) {
        this.win01 = true;
        // console.log(pLevel.level1[player.ID - 1][2][8])
      }
    }

    // switch (mode) {
    //   case 0:
    //     break;
    //   case 1:
    //     scene1();
    //     break;
    // }
  }
  animationWin() {
    let x = lerp(animationGame[this.setCounter].x, animationGame[this.setCounter + 1].x, this.posAnimation);
    let y = lerp(animationGame[this.setCounter].y, animationGame[this.setCounter + 1].y, this.posAnimation);
    push();
    noStroke();
    fill(0)
    ellipse(x, y, grid.cellSize * 0.7);
    pop();
  }
}