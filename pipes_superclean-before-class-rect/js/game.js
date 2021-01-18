class Game {
  constructor() {
    this.gameState = false;
    this.lastPosition;
    this.posAnimation = 0;
    this.speedAnimation = 0.03;
    this.setCounter = 0;
    this.win01 = false;

    this.sendPipe = [];
    this.keepPipePosition = [];
    //mettre un listner du pipe
  }
  checkPosition(pipeElement) {
    //TARGET X Y en fonction du JSON
 
    // PLAYER 1
    if (player.ID == 1) {
      // LEVEL_1
      if (pipeElement.x == pLevel.level1[player.ID - 1][2][6] && pipeElement.y == pLevel.level1[player.ID - 1][2][7] && pLevel.level1[player.ID - 1][pipeElement.index][8]==1) {
        this.win01 = true;
        player.playerState = true;
      }
      // CHECK ONLY ON SHAPE
      // else if (pipeElement.x == pLevel.level2[player.ID - 1][4][6] && pipeElement.y == pLevel.level2[player.ID - 1][4][7] && pLevel.level2[player.ID - 1][pipeElement.index][8]==2) {
      // else if (pipeElement.x == pLevel.level2[player.ID - 1][4][6] && pipeElement.y == pLevel.level2[player.ID - 1][4][7] ) {
      else if (player.winGeneral==1) {
        if(pipeElement.x == pLevel.level2[player.ID - 1][2][6] && pipeElement.y == pLevel.level2[player.ID - 1][2][7] ){
          console.log("in1")
        }
        // console.log(player.winGeneral)
        if(pipeElement.x == pLevel.level2[player.ID - 1][4][6] && pipeElement.y == pLevel.level2[player.ID - 1][4][7] && pLevel.level2[player.ID - 1][pipeElement.index][8]==2){
          this.keepPipePosition.push(pLevel.level2[player.ID - 1][pipeElement.index][8]);
          console.log("in2")
        }else{
        
        }
        // else if(pipeElement.x == pLevel.level2[player.ID - 1][4][6] && pipeElement.y == pLevel.level2[player.ID - 1][4][7] && pLevel.level1[player.ID - 1][pipeElement.index][8]==2){
        //   this.keepPipePosition.push(pLevel.level1[player.ID - 1][pipeElement.index][8] );
        // }
      //   let idPipe= pLevel.level1[player.ID - 1][pipeElement.index][8];
      //   switch (idPipe) {
      //     case 1:
      //       this.keepPipePosition.push({idPipe:idPipe,goodPlace:true});
      //       break;
      //     case 2:
      //       this.keepPipePosition.push({idPipe:idPipe,goodPlace:true});
      //       break;
      //     default:
      //       //  
      //   }
      console.log(pLevel.level2[player.ID - 1][pipeElement.index]);
      //  console.log(this.keepPipePosition);
      }
    }
    // PLAYER 2
    if (player.ID == 2) {
      // LEVEL_1
      if (pipeElement.x == pLevel.level1[player.ID - 1][2][6] && pipeElement.y == pLevel.level1[player.ID - 1][2][7] && pLevel.level1[player.ID - 1][pipeElement.index][8]==2) {
        this.win01 = true;
        player.playerState = true;
      }
    } 
    // console.log( player.playerState)

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
  fade(){
    let element = document.getElementById("defaultCanvas0");
    element.classList.add("fade-inTest");
  }
}