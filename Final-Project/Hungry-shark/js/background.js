//for waves
let BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height / 4,
};

let BG2 = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

function handleBackground() {


  /**
   * PARALLAX
   */
  // console.log('handleBg',parallex);
  //draw underwater: game bg
  if(!parallex) {
    // ctx.drawImage(bg_game,0,0, canvas.width, canvas.height);
    ctx.drawImage(bg_game,0,0,canvas.width,canvas.height);
}  
  if(parallex){
    // reset();
    BG2.x1 -= parallexSpeed;
    if (BG2.x1 < -BG2.width) BG2.x2 = 0;
    BG2.x2 -= parallexSpeed;
    // if (BG2.x2 < -BG2.width) BG2.x2 = BG2.width;
    ctx.drawImage(bg_game, BG2.x1, BG2.y, BG2.width, BG2.height);
    ctx.drawImage(bg_boss, BG2.x2, BG2.y, BG2.width, BG2.height);
    bossPage();
    ctx.fillStyle = "gold";
    ctx.font = "50px Orbitron";
    ctx.fillText("TIME TO FACE THE SEA MONSTER", 300, 200);
  }
  // WAVES
  BG.x1 -= gameSpeed;
  if (BG.x1 < -BG.width) BG.x1 = BG.width;
  BG.x2 -= gameSpeed;
  if (BG.x2 < -BG.width) BG.x2 = BG.width;
  ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);


  handleGameStatus();
}








