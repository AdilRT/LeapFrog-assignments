enemyTypes = ['BlueWhale', "Spiky",'JellyFish','Crab','Piranha'];
//brownfish,green shark,diff sizes crabs

class Enemy {
  constructor() {
    this.counted = false;
    this.image = new Image();
    this.image_flipped = new Image();
    this.angle = 0;
    // this.health = 55;
    // this.maxHealth = this.health;
    this.roam = false;
  }
  update = () => {
    // this.x -= this.vx;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    let theta = Math.atan2(dy, dx);
    this.angle = theta;

    if(!this.roam){
          // go directly to player to attack
    if (player.x != this.x) {
      this.x -= dx / 50; //no worriesof + - dx
    }
    if (player.y != this.y) {
      this.y -= dy / 50;
    }
    // this.roam = true;
    }
    if(this.roam){
      //roam around
      if(this.x<player.x) this.x -= this.vx;
      else if(this.x>player.x)this.x += this.vx;
      // this.y += this.vx;
      if(this.x >= canvas.width||this.x< - canvas.width/2 || this.y >canvas.height){
        this.roam = false;
      }
    }
  };
  // draw = () => {
  //   ctx.fillStyle = "black";
  //   ctx.beginPath();
  //   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  //   ctx.fill();
  //   ctx.closePath();
  // };
}

//HANDLER:draw and update
let enemyArray = [];
function handleEnemies() {
  const randomEnemy = this.enemyTypes[Math.floor(Math.random() * enemyTypes.length)];

  // spawn freq
  if (gameFrame % 50 == 0) {
    if(randomEnemy=='JellyFish')enemyArray.push(new JellyFish());
    // if(randomEnemy=='BrownFish')enemyArray.push(new BrownFish());
    if (randomEnemy == "Crab") enemyArray.push(new Crab());
    enemyArray.sort(function (a, b) {
      return a.y - b.y;
    });
  }
  //spawn moderate
  if (gameFrame % 500 == 0) {
    if (randomEnemy == "BlueWhale") enemyArray.push(new BlueWhale());
    if (randomEnemy == "Spiky") enemyArray.push(new SpikyFish());

  }
  // spawn rarely
  if (gameFrame % 1000 == 0) {
    const randomEnemy = this.enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
    if (randomEnemy == "Piranha") enemyArray.push(new Piranha());

    enemyArray.sort(function (a, b) {
      return a.y - b.y;
    });
  }
    

  for (let i = 0; i < enemyArray.length; i++) {
    enemyArray[i].update();
    enemyArray[i].draw();

    //fix this
    if (enemyArray[i].y < 0 - enemyArray[i].radius || enemyArray[i].health<=0) {
      enemyArray.splice(i, 1);
      score+=50;
      i--; //destroying objects
    }
    //   checking collision
    else if (enemyArray[i].distance < enemyArray[i].radius + player.radius) {
      player.collision = true;
      // console.log('collided');
      // console.log('player health',player.health);
      // console.log('enemy health',i,enemyArray[i].health);
      sharkBite.play();
      player.health-= enemyArray[i].damage;
      enemyArray[i].health -= player.damage  ;
      // enemyArray[i].x=player.x+500;
      enemyArray[i].roam = true;

      if (enemyArray[i].counted == false) {
        score++;
        enemyArray[i].counted = true;
      }
        i--;
      }
  }
}
