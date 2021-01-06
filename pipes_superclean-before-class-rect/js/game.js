class Game {
    constructor() {
    this.gameState = false;
    this.lastPosition;
    }
    checkPosition(pipeElement) {
        // console.log(pipeElement.drag().casePosition)
        // console.log(pLevel.level1[0][2])
      let target =  pipeElement.drag().casePosition
        if(target.x == pLevel.level1[0][2] && target.y == pLevel.level1[0][2]){
            console.log("win")
        }
    }
    
  }