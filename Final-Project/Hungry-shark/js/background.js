//for waves
let BG = {
  x1: 0,
  x2: can_world.width,
  y: 0,
  width: can_world.width,
  height: can_world.height / 4,
};

let BG2 = {
  x1: 0,
  x2: can_world.width,
  y: 0,
  width: can_world.width,
  height: can_world.height,
};

function handleBackground() {
  /**
   * PARALLAX
   */
  //draw underwater: game bg
  if(!parallex) {
    ctx_world.drawImage(bg_game,0, 0, can_world.width,can_world.height,);
}  
  if(parallex){
    BG2.x1 -= parallexSpeed;
    if (BG2.x1 < -BG2.width) BG2.x2 = 0;
    BG2.x2 -= parallexSpeed;
    ctx_world.drawImage(bg_game, BG2.x1, BG2.y, BG2.width, BG2.height);
    ctx_world.drawImage(bg_boss, BG2.x2, BG2.y, BG2.width, BG2.height);
    bossPage();
    ctx.fillStyle = "gold";
    ctx.font = "50px Odibee Sans";
    ctx.fillText("TIME TO FACE THE SEA MONSTER", 300, 200);
  }
  // WAVES
  BG.x1 -= WAVE_SPEED;
  if (BG.x1 < -BG.width) BG.x1 = BG.width;
  BG.x2 -= WAVE_SPEED;
  if (BG.x2 < -BG.width) BG.x2 = BG.width;
  ctx_world.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
  ctx_world.drawImage(background, BG.x2, BG.y, BG.width, BG.height);


}








