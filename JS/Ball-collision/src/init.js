balls = [];

function initialize(ballsCount){
    for(let i =0; i<ballsCount;i++){
        let radius = RandomNumber(5, 20);
        let x = RandomNumber(radius, canvas.width - radius);
        let y = RandomNumber(radius, canvas.height - radius);
        let dx = RandomNumber(0, 6);
        let dy = RandomNumber(0, 6);

        let color = RandomColor() ;

    // Detect collision and modify center
    // if collision is detected while spawning
    if (i !== 0) {
        for (let j = 0; j < i; j++) {
          //getting distance between 2 points
          let d = getDistance(x, y, balls[j].x, balls[j].y);
          //since getdistance is squared// if(collision ==true)
          if (d <= (radius + balls[j].radius) ** 2) {
            x = RandomNumber(radius, canvas.width - radius);
            y = RandomNumber(radius, canvas.height - radius);
            j = -1;
          }
        }
      }

    let ball = new Ball(x, y, radius, dx, dy, color);
    balls.push(ball);
    }
//end:init
}   
// ANIMATION LOOP 
function animate() {
    requestAnimationFrame(animate); //instead of setInterval
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    balls.forEach((ball) => ball.move());
  }

  //calls
initialize(10);
animate();