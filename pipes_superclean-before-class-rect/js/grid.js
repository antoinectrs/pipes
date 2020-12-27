class Grid {
  constructor(gridSpace, gridOffset) {
    this.strokeW = 0.3;
    this.strokeC = 0;

    this.targetCellSize = 0.2;
    this.nCols = 0;
    this.nRows = 0;
    this.cellSize = 0;
    this.pos = { x: 0, y: 0 };
  }
  drawGrid() {
    strokeWeight(this.strokeW);
    stroke(this.strokeC);
    let indexR = 0;
    for (let col = 0; col < this.nCols; col++) {
      for (let row = 0; row < this.nRows; row++) {
        if(rectGrid[indexR].isTaken == true){
          rectGrid[indexR].color = 20;
        }
        rectGrid[indexR].show(col, row);
        // rectGrid[col].show(col, row);
        // console.log( rectGrid[col]);
        indexR++;
      }
    }
  }
  computeGrid() {
    this.cellSize = width * this.targetCellSize;
    this.nCols = 1 / this.targetCellSize;
    this.nRows = ceil(height / this.cellSize);
    let cellS = this.cellSize;
    return cellS
  }
  snap(windowX, windowY) {
    let centerCell = this.cellSize / 2;
    let x = round((windowX - centerCell) / width * this.nCols) * this.cellSize + centerCell;
    let y = round((windowY - centerCell) / height * this.nRows) * this.cellSize + centerCell;

    // CALCUL ON CASE
    // let uniqueCase = (width-(this.cellSize / 2))/this.nRows;
    const totalW = width - this.cellSize / 2;
    const totalH = height - this.cellSize / 2;

    // -1 pour ajuster sur la grille a partir de 0
    let casePosition = { x: round((x * this.nCols) / totalW)-1, y: round((y * this.nRows) / totalH)-1 };
    // let pixelPosition =  {x:round((casePosition.x*totalW)/this.nCols), y:round((casePosition.y*totalH)/this.nRows)};
    // let pixelPosition =  {x:round((2*totalW)/this.nCols), y:round((2*totalH)/this.nRows)};
    // console.log(x, " ",pixelPosition);
    return { x, y, casePosition}; // {x: x, y: y}
  }
  snapSetUp(initX, initY) {
    initX++;
    initY++;

    let centerCell = this.cellSize / 2;
    const totalW = width - this.cellSize / 2;
    const totalH = height - this.cellSize / 2;
    let x = round((initX * totalW) / this.nCols);
    let y = round((initY * totalH) / this.nRows);

    
    console.log(initX,initY)
    x = round((x - centerCell) / width * this.nCols) * this.cellSize + centerCell;
    y = round((y - centerCell) / height * this.nRows) * this.cellSize + centerCell;

    return { x, y };
  }

  rectState(rectGrid, pipePy, pipePx) {
    let indexR = 0;
    // console.log( pipePx);
    // CHECK TOUTE LES COLONNES ET LINES
    for (let col1 = 0; col1 < this.nCols; col1++) {
      let checkCol = false;
      if (rectGrid[indexR].col == pipePx) {
        checkCol = true;
        // let o = rectGrid[indexR].take();
      }
      for (let row1 = 0; row1 < this.nRows; row1++) {
       let checkRow = false;
        if (rectGrid[indexR].row == pipePy) {
          checkRow=true;
          // console.log(rectGrid[indexR], pipePx);
        }
        if(checkRow && checkCol){
         rectGrid[indexR].take();  
         console.log(rectGrid[indexR])
        }
        indexR++;
      }
    }
    return
  }
}
