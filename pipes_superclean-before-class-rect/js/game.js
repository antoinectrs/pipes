class Game {
    constructor() {
    this.gameState = false;
    this.lastPosition;
    this.speedAnimation = 0.05;
    }
    checkPosition(pipeElement) {
        //TARGET X Y en fonction du JSON

        if(pipeElement.x ==pLevel.level1[2][6] && pipeElement.y ==  pLevel.level1[2][7]){
            // console.log("win")
          return true;
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
     let x = lerp(50, mouseX,this.speedAnimation);
     let  y = lerp(50, mouseY,this.speedAnimation);
      ellipse(x, y, 66, 66);
    }
  }