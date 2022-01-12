


//5:put all the above inside animation loop
// ANIMATE
function animate() {
  ctx_vPort.clearRect(0, 0, can_vPort.width, can_vPort.height); /* Clear viewport canvas */
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  handleBackground();
  
  handleBubbles();
  handleAccessories();
  handlePlayer();
  handlePath();
  // if(bossMode==true)handleFlames();
  
  handleEnemies(); 
  handleFood();
  handleGameStatus();
  ctx_vPort.drawImage(can_world, (player.pos.x < 320 || player.pos.x > can_world.width - 320) ? 0 : (player.pos.x + (player.radius / 2) - 320), (player.pos.y < 320 || player.pos.y > can_world.height - 320) ? 0 : (player.pos.y + (player.radius / 2) - 320), 640, 640, 0, 0, 640, 640);
  
  // console.log('player',player.pos.x,player.pos.y);
  gameFrame++;
  if(!gameOver){
    requestAnimationFrame(animate);
  }
}



//calls
const preloader = new PreLoader();
preloader.loadAll();


startBtn.addEventListener('click',function(e){
  select.style.display = 'none';  
  startBtn.style.display='none';
  restartBtn.style.display='none';
  // cave.style.display='none';

  animate();
})

//for responsive clicks
window.addEventListener("resize", function () {
  canvasPosition = canvas.getBoundingClientRect();
});
