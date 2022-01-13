


//5:put all the above inside animation loop
// ANIMATE
function animate() {
  console.log(difficulty);
  ctx_vPort.clearRect(0, 0, can_vPort.width, can_vPort.height); /* Clear viewport canvas */
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // console.log(player.collision);
  handleBackground();
  handleBubbles();
  handleAccessories();
  handlePlayer();
  handlePath();
  // if(bossMode==true)handleFlames();
  handleEnemies(); 
  handleFood();
  showTimer();  
  if(gameOver == false){
    handleGameStatus();
    timer = timer++; 
  }

  handleGems();
  //decrease shark after certain time
  // if(gameFrame%500==0)player.health--;
      //show boss activeness
      if(bossMode==true){
        if(bossActive==true){
          ctx.fillStyle = "red";
          ctx.font = "30px Orbitron";
          ctx.drawImage(fireSign,canvas.width-250, canvas.height-60,50,50)
          ctx.fillText("Vulnerable",canvas.width-200,canvas.height-10);
        }
        else if(bossActive==false){
          ctx.fillStyle = "green";
          ctx.font = "30px Orbitron";
          ctx.fillText("Passive",canvas.width-100,canvas.height-10);
        }
      }



  // ctx_vPort.drawImage(
  //   can_world, 
  //   (player.pos.x < 320 || player.pos.x > can_world.width - 320) ? 0 : (player.pos.x + (player.radius / 2) - 320), 
  //   (player.pos.y < 320 || player.pos.y > can_world.height - 320) ? 0 : (player.pos.y + (player.radius / 2) - 320), 
  //   640, 
  //   640, 
  //   0,
  //   0, 
  //   640, 
  //   640);
  if (player.pos.x < 320) {
    x = 0
  } else if (player.pos.x+51 > can_world.width - 320) {
    x = 3200
  } else {
    x = (player.pos.x + player.radius - 320);
  }

  if (player.pos.y < 320) {
    y = 0
  } else if (player.pos.y +51> can_world.height - 320) {
    y = 3200
  } else {
    y = (player.pos.y + player.radius - 320);
  }

  ctx_vPort.drawImage(can_world, x, y, 640, 640, 0, 0, 640, 640);
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
  startBtn.style.display='none';
  restartBtn.style.display='none';
  easyBtn.style.display = 'none';
  normalBtn.style.display = 'none';
  hardBtn.style.display = 'none';
  // select.style.display = 'none';  
  // cave.style.display='none';


  animate();
})


//for responsive clicks
window.addEventListener("resize", function () {
  canvasPosition = canvas.getBoundingClientRect();
});
