class RedFish extends Food {
  constructor(img,dir) {
    super();
    this.x =toss() == true ?0:can_world.width;
    this.y = RandomNumber(0, can_world.height);
    // this.x=can_world.width/2;
    // this.y = can_world.height/2;
    this.radius = 35;
    this.image.src = img;
    this.vx = 3;
    this.health = 2;
    this.maxHealth = this.health;
    this.angle = 0;
    this.frame = 0;
    let frameX = 0;
    let frameY = 0;
    this.spriteWidth = RedFishSpriteWidth;
    this.spriteHeight = RedFishSpriteHeight;
    this.dir = dir;
  }

  update() {
    super.update();
    if(this.dir == 'RightToLeft')this.x += this.vx;
    else if(this.dir == 'LeftToRight')this.x -= this.vx;
    this.y += Math.sin(this.angle);
    this.angle += 0.2;

    if (gameFrame % 5 == 0) {
      this.frame++;
      if (this.frame >= 12) this.frame = 0;
      if (this.frame == 3 || this.frame == 7 || this.frame == 11) {
        this.frameX = 0;
      } else {
        this.frameX++;
      }
      if (this.frame < 3) this.frameY = 0;
      else if (this.frame < 7) this.frameY = 1;
      else if (this.frame < 11) this.frameY = 2;
      else this.frameY = 0;
    }
  }

  draw = () => {
    ctx_world.fillStyle = "black";
    ctx_world.beginPath();
    ctx_world.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx_world.fill();
    ctx_world.closePath();

    //SHOWING HEALTH
    ctx_world.font = "10px Orbitron";
    ctx_world.fillStyle = "gold";
    ctx_world.fillText(Math.floor(this.health), this.x, this.y-40);
    // drawing player fish
    // if (mouse.x < this.x) {
    // drawCharacter(this.image, "left",GoldFishAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth/2,this.spriteHeight/2,10);
    // }
    // else if(mouse.x> this.x) {
    // drawCharacter(this.image_flipped, "left",BlueWhaleAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth/2,this.spriteHeight/2,10);
    // }
    ctx_world.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.x-40,
      this.y-30,
      this.spriteWidth / 6,
      this.spriteHeight / 6
    );
  };
}
