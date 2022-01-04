
// Globals
let score = 0;
let gameFrame = 0; //eg.spawn new bubles every 100 frames
ctx.font = "50px Georgia";
let gameSpeed = 1;
//2:Mouse Interactivity:
let canvasPosition = canvas.getBoundingClientRect();

//5:put all the above inside animation loop
// ANIMATE
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleBackground();
  // handleBubbles();
  handlePlayer();
  handleEnemies();
  //show score
  ctx.fillStyle = "black";
  ctx.fillText("score:" + score, 10, 50);
  //
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", function () {
  canvasPosition = canvas.getBoundingClientRect();
});
