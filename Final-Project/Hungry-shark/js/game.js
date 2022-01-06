
// Globals vars
let score = 0;
let gameFrame = 0; //eg.spawn new bubles every 100 frames
ctx.font = "50px Georgia";
let gameSpeed = 1;
let canvasPosition = canvas.getBoundingClientRect();

//5:put all the above inside animation loop
// ANIMATE
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleBackground();
  handleBubbles();
  handlePlayer();
  handleEnemies();

  gameFrame++;
  if(!gameOver){
    requestAnimationFrame(animate);
  }
}

//calls
const preloader = new PreLoader();
// if(start)
animate();

//for responsive clicks
window.addEventListener("resize", function () {
  canvasPosition = canvas.getBoundingClientRect();
});
