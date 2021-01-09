class Game {
  constructor() {
    this.gameState = false;
    this.lastPosition;
    this.posAnimation = 0;
    this.speedAnimation = 0.03;
    this.setCounter = 0;
    this.win01 = false;
    //mettre un listner du pipe
  }
  checkPosition(pipeElement) {
    //TARGET X Y en fonction du JSON
    if (pipeElement.x == pLevel.level1[2][6] && pipeElement.y == pLevel.level1[2][7]) {
      this.win01 = true;
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
    let x = lerp(animationGame[this.setCounter].x,animationGame[ this.setCounter+1].x, this.posAnimation);
    let y = lerp(animationGame[this.setCounter].y,animationGame[ this.setCounter+1].y, this.posAnimation);
    push();
    noStroke();
    fill(0)
    ellipse(x, y, 180);
    pop();
  }
}