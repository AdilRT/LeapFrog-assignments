


//5:put all the above inside animation loop
// ANIMATE
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleBackground();
  handleBubbles();
  handleAccessories();
  handlePlayer();
  handleEnemies();
  // handleFood();
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
  // cave.style.display='none';

  animate();
})

//for responsive clicks
window.addEventListener("resize", function () {
  canvasPosition = canvas.getBoundingClientRect();
});
