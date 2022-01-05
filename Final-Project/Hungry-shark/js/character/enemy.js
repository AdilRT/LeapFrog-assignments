enemyTypes = ["BlueWhale", "spiky"];

class Enemy {
  constructor() {
    this.counted = false;
    this.image = new Image();
    this.image_flipped = new Image();
    this.angle = 0;
  }
  update = () => {
    // this.x -= this.vx;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    let theta = Math.atan2(dy, dx);
    this.angle = theta;

    //go directly to player to attack
    if (player.x != this.x) {
      this.x -= dx / 50; //no worriesof + - dx
    }
    if (player.y != this.y) {
      this.y -= dy / 50;
    }
  };
 

  // draw = () => {
  //   ctx.fillStyle = "black";
  //   ctx.beginPath();
  //   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  //   ctx.fill();
  //   ctx.closePath();

  //   ctx.drawImage(
  //     this.image,
  //     0,
  //     0,
  //     this.spriteWidth,
  //     this.spriteHeight,
  //     this.x,
  //     this.y,
  //     this.spriteWidth,
  //     this.spriteHeight
  //   );
  // };
}



//HANDLER
const enemyArray = [];
function handleEnemies() {
  if (gameFrame % 100 == 0) {
    const randomEnemy =
      this.enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
    if (randomEnemy == "BlueWhale") enemyArray.push(new BlueWhale());
    // if(randomEnemy=='spiky')enemyArray.push(new SpikyFish());
    enemyArray.sort(function (a, b) {
      return a.y - b.y;
    });
  }
  //spawn rarely
  // if (gameFrame % 100 == 0) {
  //   const randomEnemy =
  //     this.enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
  //   if (randomEnemy == "spiky") enemyArray.push(new SpikyFish());
  //   enemyArray.sort(function (a, b) {
  //     return a.y - b.y;
  //   });
  //   // console.log('eneArr',enemyArray.length);
  // }

  for (let i = 0; i < enemyArray.length; i++) {
    enemyArray[i].update();
    enemyArray[i].draw();

    //fix this
    if (enemyArray[i].y < 0 - enemyArray[i].radius) {
      enemyArray.splice(i, 1);
      i--; //destroying objects
    }
    //   checking collision
    else if (enemyArray[i].distance < enemyArray[i].radius + player.radius) {
      console.log("collided");
      if (enemyArray[i].counted == false) {
            sharkBite.play();
        score++;
        enemyArray[i].counted = true;
        enemyArray.splice(i, 1);
        i--;
      }
    }
  }
}
