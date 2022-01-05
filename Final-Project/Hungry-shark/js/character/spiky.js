

class SpikyFish extends Enemy {
  constructor() {
    super();
    this.spriteWidth = 304 / 6;
    this.spriteHeight = 182 / 3;
    this.x = canvas.width + 500;
    this.y = Math.random() * (canvas.height / 3);
    this.radius = 50;
    this.image.src = "images/enemies-damage/spiky-fish.png";
    this.image_flipped.src = "images/enemies-damage/spiky-fish.png";
    // this.vx = 5;
    // this.speed = Math.random()*0.1+0.1;
  }
}