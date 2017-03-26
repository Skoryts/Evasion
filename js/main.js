var Game = {
  ctx: document.getElementsByTagName("canvas")[0].getContext("2d"),
  start: function (argument) {
    setInterval(function () {
      Game.clear();
      Player.update();
    }, 20)
  },
  clear: function() {
    this.ctx.clearRect(0, 0, 1000, 800);
  }
} 

function Component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function(){
    Game.ctx.fillStyle = color;
    Game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 65) Player.x -= 30;
  if (e.keyCode == 68) Player.x += 30;
})
window.addEventListener("mousemove", function (e) {
  Player.x = e.pageX;
})

Game.start();
var Player = new Component(30, 30, "#00FF00", 485, 700);