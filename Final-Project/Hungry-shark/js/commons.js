//
function spriteHandler(statesArr, spriteWidth, spriteHeight, spriteAnimation) {
  statesArr.forEach((state, index) => {
    let frames = {
      loc: [],
    };
    for (let j = 0; j < state.frames; j++) {
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight;
      frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimation[state.name] = frames;
  });
}

//RANDOM NUMBER GEN
function RandomNumber(min, max) {
  while (true) {
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    if (randomNum !== 0) return randomNum;
  }
}

function handleGameStatus() {
  //show score
  ctx.fillStyle = "black";
  ctx.font = "30px Orbitron";
  ctx.fillText("score: " + score, 10, 50);
  ctx.fillText("Health: " + Math.floor(player.health), 300, 50);
}

//  GAME PAGES

//START PAGE
function startPage() {
  console.log("reached startpage");
  ctx.fillStyle = "black";
  ctx.font = "100px Orbitron";
  ctx.drawImage(bg_startPage, 0, 0, canvas.clientWidth, canvas.height);
  ctx.drawImage(logo, canvas.width / 3, 10, 500, 300);
  startBtn.style.display = "block";
  restartBtn.style.display = "none";
  gameOver = false;
  reset();


}
let highScore = +localStorage.getItem("highScore") || 0;

// GAMEOVER PAGE
function overPage() {
  if (gameOver) {
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", score);
      ctx.fillText("Congrats! New Highscore", 300, 300);
    }
    ctx.fillStyle = "gold";
    ctx.font = "100px Orbitron";
    ctx.fillText("GAME OVER", 500, 200);
    ctx.font = "50px Orbitron";
    ctx.fillText("high-score: " + highScore, 900, 50);

    // if clicked reset the settings
    restartBtn.style.display = "block";
    restartBtn.addEventListener("click", function (e) {
      startPage();
    });
  }
  // console.log(highScore);
}

function reset(){
  //reset playerPos,enemiesArray,score,player health
  player.x = canvas.width/2;
  player.y = canvas.height/2;
  enemyArray = []
  score = 0;
  player.health = 10;
}
