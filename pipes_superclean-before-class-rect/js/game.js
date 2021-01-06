class Game {
  constructor() {
    this.gameState = false;
    this.lastPosition;
    this.speedAnimation = 0.05;
    this.win01 = false;
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
  animationWin(speed) {
    let x = lerp(animationGame[0].x,animationGame[1].x, speed);
    // let x = lerp(animationGame[0].x,animationGame[1].x, this.speedAnimation);
    console.log(x)
    ellipse(x, animationGame[0].y, 110)
    // let y = lerp(50, mouseY, this.speedAnimation);
    //ELLIPSE LERP WIN
    // for (let index = 0; index < animationGame.length; index++) {
    //   fill(255, 0, 0)
    //   ellipse(animationGame[index].x, animationGame[index].y, 110)
    // }
  }
}