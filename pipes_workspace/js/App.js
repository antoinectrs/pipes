// CODE JS
console.log("hello, pipes begin");
// constructor() {
// this.canvas = document.createElement("canvas");
// document.body.appendChild(this.canvas);

//ctxx
// this.ctx = this.canvas.createCanvas(200, 200);
// this.canvas.width = this.w = window.innerWidth;
// this.canvas.height = this.h = window.innerHeight;

// this.setup();
// }

let pipe = [];
let shape1;
let pipeNumber = 1;
let pipeElement;
function setup() {
  let width = windowWidth;
  let height = windowHeight;
  var canvas = createCanvas(width, height);

  // canvas.parent('canvasForHTML');
  // this.button = new Button(this.w / 2, this.h / 2, 50, 50, this.ctx);
  //FB
  //listener
  // DATABASE.ref("COLOR_CHANGE").on("value", (snapshot) => {
  //   if (!this.appHasStarted) {
  //     this.button.changeColor(snapshot.val());
  //     this.draw();
  //     this.appHasStarted = true;
  //   } else {
  //     const value = snapshot.val();
  //     this.button.changeColor(value);
  //   }
  // });

  // this.draw();
  pipeElement = new Pipe(windowWidth / 2, windowHeight / 2, 100, 300);
  pipe.push(pipeElement);
  shape1 = new Draggable(200, 100, 50, 150);
}

function draw() {
  background(244, 0, 0);
  for (let index = 0; index < pipeNumber; index++) {
    pipe[index].update();
    pipe[index].show();
    console.log(pipeNumber)
  }


  shape1.update();
  shape1.show();

  // this.ctx.clearRect(0, 0, this.w, this.h);
  // this.button.show();
  // console.log("draw");
  // requestAnimationFrame(this.draw.bind(this));
}

function mousePressed() {
  for (let index = 0; index < pipeNumber; index++) {
  pipe[index].pressed();
  }
  shape1.pressed();
}

function mouseReleased() {
  for (let index = 0; index < pipeNumber; index++) {
  pipe[index].released();
  }
  shape1.released();

  pipeElement = new Pipe(windowWidth / 2, windowHeight / 2, 100, 300);
  pipe.push(pipeElement);

  pipeNumber++;
}

// window.onload = () => {
//   new App();
// };
