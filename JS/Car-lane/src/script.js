function init() {
  drawLane();
  drawPlayer();

  const obstacle1 = new Obstacle();
  obstacle1.drawObstacle();
}
//states

function gameOver() {
  _(".start-screen").style.display = "none";
//   _("#canvas1").style.display = "none";
  _(".game-over-screen").style.display = "flex";
  _(".score").innerText = score;
}
_("#start").addEventListener("click", () => {
  gamePaused = false;
  _(".start-screen").style.display = "none";
  // _('#canvas1').style.display = 'block';
  // _('.game-over-screen').style.display = 'none';
  init();
});

_("#replay").addEventListener("click", () => {
  gamePaused = false;
  speed = 10;
  score = 0;
  playerCarPositionX = canvas.width / 2 - playerCarWidth / 2;
  _(".game-score h4").innerText = score;
  _(".start-screen").style.display = "none";
  _("#canvas1").style.display = "block";
  _(".game-over-screen").style.display = "none";
  init();
  console.log(123);
});
