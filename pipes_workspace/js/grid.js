    // Draw grid
    // var l = 0;
    // strokeWeight(0.3);
    // stroke(1);
    // while (l < this.w || l < height) {
    //   line(0, l, width, l);
    //   line(l, 0, l, height);
    //   l += grid;
    // }
    // end Draw grid


    class Grid {
        constructor() {
            this.w = windowWidth;
            this.h = windowHeight;
            this.l = 0;
            this.strokeW = 0.3;
            this.strokeC = 0;
            this.gridSpace = 100;
            this.gridOffset =  this.gridSpace / 2;
        }
      
      
        showG(){
            strokeWeight(this.strokeW);
            stroke(this.strokeC);
            this.l = 0;
            while (this.l < this.w || this.l < this.h) {
                line(0, this.l, this.w, this.l);
                line(this.l, 0, this.l, this.h);
                this.l += this.gridSpace;
                console.log("test");
              }
          
        }
      
      }