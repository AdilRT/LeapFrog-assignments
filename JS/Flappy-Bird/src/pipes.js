const pipesArray = [];

class Pipes {
  constructor() {
    this.topPipeHeight = getRandomNumber(TOP_MIN_HEIGHT, canvas.height / 2);
    this.bottomPipeHeight = canvas.height - (this.topPipeHeight + PIPE_GAP);
    this.width = PIPE_WIDTH;
    this.x = canvas.width;
    this.color = "red";
    this.pipeCounted = false;
  }

  draw() {
    ctx.fillStyle = this.color;
    // ctx.fillRect(this.x,0,this.width,this.topPipeHeight);
    // ctx.fillRect(this.x,canvas.height-this.bottomPipeHeight  ,this.width,this.bottomPipeHeight);

    ctx.drawImage(
      flappySprite,
      98,
      383,
      28,
      176,
      this.x,
      0,
      this.width,
      this.topPipeHeight
    );
    ctx.drawImage(
      flappySprite,
      36,
      383,
      28,
      176,
      this.x,
      canvas.height - this.bottomPipeHeight,
      this.width,
      this.bottomPipeHeight
    );
  }

  update() {
    this.x -= gameSpeed;
    if (this.pipeCounted == false && bird.x > this.x) {
      score.value++;
      score.best = Math.max(score.value, score.best);
      localStorage.setItem("best", score.best);
      this.pipeCounted = true;
    }

    this.draw();
  }
  //
}
function handlePipes() {
  if (frameCount % 100 === 0) {
    pipesArray.unshift(new Pipes());
  }

  for (i = 0; i < pipesArray.length; i++) {
    pipesArray[i].update();
  }
  if (pipesArray.length > 100) {
    pipesArray.pop();
  }
}
