class Game {
    constructor() {
    this.gameState = false;
    this.lastPosition;
    }
    checkPosition(pipeElement) {
        //TARGET X Y en fonction du JSON

        if(pipeElement.x ==pLevel.level1[2][6] && pipeElement.y ==  pLevel.level1[2][7]){
            console.log("win")
        }
        // switch (mode) {
        //   case 0:
        //     break;
        //   case 1:
        //     scene1();
        //     break;
        // }
    }
  }