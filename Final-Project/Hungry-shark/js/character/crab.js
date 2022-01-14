class Crab extends Enemy {
  constructor(easyModeObject) {
    super();
    this.spriteWidth = CrabSpriteWidth;
    this.spriteHeight = CrabSpriteHeight;
    this.width = RandomNumber(this.spriteWidth, this.spriteWidth * 1.5);
    this.height = RandomNumber(this.spriteHeight, this.spriteHeight * 1.5);
    this.x = toss() == true ? 0 : can_world.width + this.radius;
    this.y = can_world.height;
    this.radius = CRAB_RADIUS;
    this.image.src = "images/enemies-damage/crab.png";
    this.vx = 1;
    this.distance;
    this.health = easyModeObject.Crab.health;
    this.maxHealth = this.health;
    this.damage = easyModeObject.Crab.damage;
  }
  update = () => {
    const dx = this.x - player.pos.x;
    const dy = this.y - player.pos.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    if (this.x < player.pos.x) this.x += this.vx;
    else if (this.x > player.pos.x) this.x -= this.vx;
  };

  draw = () => {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // drawing player fish
    drawCharacter(
      this.image,
      "left",
      CrabAnimation,
      this.spriteWidth,
      this.spriteHeight,
      this.x - 50,
      this.y - 100,
      this.width,
      this.height,
      100
    );
  };
}
