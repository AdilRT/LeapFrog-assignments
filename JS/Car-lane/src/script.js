let highScore = +localStorage.getItem('highScore') || 0;
_('.high-score span').innerText = highScore;

function init() {
  drawLane();
  drawPlayer();

  const obstacle1 = new Obstacle();
  obstacle1.drawObstacle();
}
//states

function gameOver() {
  //   _(".start-screen").style.display = "none";
  _("#canvas1").style.display = "none";
  _(".game-over-screen").style.display = "block";
  __('.game-over-screen strong').forEach((element) => {
    element.innerText = score;
  });
//   _(".score").innerText = score;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', score);
    _('.new-highscore').style.display = 'block';
    _('.current-score').style.display = 'none';
  } else _('.current-score').style.display = 'block';

  
  
}
_("#start").addEventListener("click", () => {
  gamePaused = false;
  _(".start-screen").style.display = "none";
  // _('#canvas1').style.display = 'block';
  // _('.game-over-screen').style.display = 'none';
  init();
});

