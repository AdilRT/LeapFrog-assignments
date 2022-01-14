let damageDoneOnce = false;
let gotdamageDoneOnce = false;

class Enemy {
  constructor() {
    this.counted = false;
    this.image = new Image();
    this.image_flipped = new Image();
    this.angle = 0;
    this.roam = false;
  }
  update = () => {
    // this.x -= this.vx;
    const dx = this.x - player.pos.x;
    const dy = this.y - player.pos.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    let theta = Math.atan2(dy, dx);
    this.angle = theta;

    if (!this.roam) {
      // go directly to player.pos to attack
      if (player.pos.x != this.x) {
        this.x -= dx / 50;
      }
      if (player.pos.y != this.y) {
        this.y -= dy / 50;
      }
      // this.roam = true;
    }
    if (this.roam) {
      //roam around
      if (this.x < player.pos.x) this.x -= this.vx;
      else if (this.x > player.pos.x) this.x += this.vx;
      // this.y += this.vx;
      if (
        this.x >= can_world.width ||
        this.x < -can_world.width / 2 ||
        this.y > can_world.height
      ) {
        this.roam = false;
      }
    }
  };
}

//HANDLER:draw and update
let enemyArray = [];
function handleEnemies() {
  if (difficulty == "easy") easyMode(easyModeObject);
  if (difficulty == "normal") normalMode(normalModeObject);
  if (difficulty == "hard") hardMode(hardModeObject);

  for (let i = 0; i < enemyArray.length; i++) {
    enemyArray[i].update();
    enemyArray[i].draw();

    //fix this
    if (enemyArray[i].y < 0 - enemyArray[i].radius) {
      enemyArray.splice(i, 1);
      i--;
    }
    //   checking collision
    else if (enemyArray[i].distance < enemyArray[i].radius + player.radius) {
      player.collision = true;
      // SHOW TEXT
      ctx.font = "30px Odibee Sans";
      ctx.fillText("SCORE: " + score, 10, 30);
      ctx.fillStyle = "green";
      sharkBite2.play();

      // enemy invinciblilty
      if (damageDoneOnce == false) {
        enemyArray[i].health -= player.damage;
        damageDoneOnce = true;
        //invincible time period
        setTimeout(() => {
          damageDoneOnce = false;
        }, 500);
      }
      if (gotdamageDoneOnce == false) {
        player.health -= enemyArray[i].damage;
        gotdamageDoneOnce = true;
        setTimeout(() => {
          gotdamageDoneOnce = false;
        }, 5000);
      }
      //roam
      enemyArray[i].roam = true;

      if (enemyArray[i].counted == false && enemyArray[i].health <= 0) {
        score += 50;
        player.health += 5;
        enemyArray[i].counted = true;
        enemyArray.splice(i, 1);
      }
      i--;
    }

    if (player.collision == true) {
      handleBlood();
    }
  }
}
