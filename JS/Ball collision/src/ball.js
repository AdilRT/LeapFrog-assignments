const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 500;

class Ball {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.mass =1 ;
  }

  detectWallCollision = () => {
    if (this.x + this.radius > canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx;
      
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }


  };

  resolveCollision = (otherBall) => {
    const xVelocityDiff = this.dx - otherBall.dx;
    const yVelocityDiff = this.dy - otherBall.dy;

    let xDist = otherBall.x - this.x;
    let yDist = otherBall.y - this.y;



      if(xVelocityDiff * xDist + yVelocityDiff * yDist >=0){
        // const u1 = {x:this.dx,y:this.dy};
        // const u2 = {x:otherBall.dx,y:otherBall.dy};
        // const m1 = this.mass;
        // const m2 = this.mass;

        // const v1 = {x:u1.x * (m1-m2)/(m1+m2)+u2.x*2*m2/(m1+m2),y:u1.y}
        // const v2 = {x:u2.x * (m1-m2)/(m1+m2)+u1.x*2*m2/(m1+m2),y:u2.y}

        // this.dx = v1.x;
        // this.dy = v1.y;
        // otherBall.dx = v2.x;
        // otherBall.dy = v2.y;
          
    let collisionVector = { 
        x: this.x - otherBall.x,
        y: this.y - otherBall.y 
      };
      let distance = Math.sqrt(
        getDistance(this.x, this.y, otherBall.x, otherBall.y)
      );
  
      // Unit vector 
      let unitVector = {
        x: collisionVector.x / distance,
        y: collisionVector.y / distance,
      };
  
      let relativeVelocity = {
        x: this.dx - otherBall.dx,
        y: this.dy - otherBall.dy,
      };
      //calc speed
      let speed =
        relativeVelocity.x * unitVector.x + relativeVelocity.y * unitVector.y;
  
      let impulse = (2 * speed) / (this.mass + otherBall.mass);
  
      this.dx -= impulse * otherBall.mass * unitVector.x;
      this.dy -= speed * otherBall.mass * unitVector.y;
      otherBall.dx += speed * this.mass * unitVector.x;
      otherBall.dy += speed * this.mass * unitVector.y;

      }
    

  }
  detectBallCollision = () => {
    this.detectWallCollision();

    for (let i = 0; i < balls.length; i++) {
        //checking with itself
      if (this === balls[i]) continue;

      if (getDistance(this.x, this.y, balls[i].x, balls[i].y) <=
        (this.radius + balls[i].radius) ** 2) {
        this.resolveCollision(balls[i]);
       
      }
    }
  };
  draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };
  move = () => {
    this.detectBallCollision();
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };

  //Ball class end
}
