class Player {
  constructor(ID) {
    this.ID = ID;
  }
//   show() {
//     this.ctx.fillStyle = this.color;
//     this.ctx.fillRect(this.x, this.y, this.w, this.h);
  // }

  send() {
    SEND_MESSAGE("COLOR_CHANGE", {
//       color: `rgb(${Math.round(Math.random() * 255)},0,${Math.round(
//         Math.random() * 255
//       )})`,
      id: this.ID,
    });
  }

//   changeColor(data) {
//     if (this.ID != data.id) {
//       this.color = data.color;
//     }
//   }
}
