const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 500;

class Ant {
  constructor(x, y, dx, dy, img, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.img = img;
    // this.color = color;
    this.mass = 1;
  }

  detectWallCollision = () => {
    if (this.x + this.radius > canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }
  };

  resolveCollision = (otherAnt) => {
    const xVelocityDiff = this.dx - otherAnt.dx;
    const yVelocityDiff = this.dy - otherAnt.dy;

    let xDist = otherAnt.x - this.x;
    let yDist = otherAnt.y - this.y;

    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
      // const u1 = {x:this.dx,y:this.dy};
      // const u2 = {x:otherAnt.dx,y:otherAnt.dy};
      // const m1 = this.mass;
      // const m2 = this.mass;

      // const v1 = {x:u1.x * (m1-m2)/(m1+m2)+u2.x*2*m2/(m1+m2),y:u1.y}
      // const v2 = {x:u2.x * (m1-m2)/(m1+m2)+u1.x*2*m2/(m1+m2),y:u2.y}

      // this.dx = v1.x;
      // this.dy = v1.y;
      // otherAnt.dx = v2.x;
      // otherAnt.dy = v2.y;

      let collisionVector = {
        x: this.x - otherAnt.x,
        y: this.y - otherAnt.y,
      };
      let distance = Math.sqrt(
        getDistance(this.x, this.y, otherAnt.x, otherAnt.y)
      );

      // Unit vector
      let unitVector = {
        x: collisionVector.x / distance,
        y: collisionVector.y / distance,
      };

      let relativeVelocity = {
        x: this.dx - otherAnt.dx,
        y: this.dy - otherAnt.dy,
      };
      //calc speed
      let speed =
        relativeVelocity.x * unitVector.x + relativeVelocity.y * unitVector.y;

      let impulse = (2 * speed) / (this.mass + otherAnt.mass);

      this.dx -= impulse * otherAnt.mass * unitVector.x;
      this.dy -= speed * otherAnt.mass * unitVector.y;
      otherAnt.dx += speed * this.mass * unitVector.x;
      otherAnt.dy += speed * this.mass * unitVector.y;
    }
  };
  detectBallCollision = () => {
    for (let i = 0; i < ants.length; i++) {
      //checking with itself
      if (this === ants[i]) continue;

      if (
        getDistance(this.x, this.y, ants[i].x, ants[i].y) <=
        (this.radius + ants[i].radius) ** 2
      ) {
        this.resolveCollision(ants[i]);
      }
    }
  };
  draw = () => {
    ctx.beginPath();
    ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius);

    ctx.closePath();
  };
  move = () => {
    this.detectBallCollision();
    this.detectWallCollision();
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };

  //Ball class end
}
