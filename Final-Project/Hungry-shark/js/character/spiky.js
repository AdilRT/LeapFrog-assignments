

class SpikyFish extends Enemy {
  constructor() {
    super();
    this.spriteWidth =SpikyFishSpriteWidth;
    this.spriteHeight = SpikyFishSpriteHeight;
    // this.x = Math.random()* canvas.width;
    this.x =toss() == true ?RandomNumber(-canvas.width, 0 ):RandomNumber(canvas.width,canvas.width + 100);
    this.y = Math.random() * canvas.height;
    this.radius = 35;
    this.image.src = "images/enemies-damage/spiky-fish.png";
    this.image_flipped.src = "images/enemies-damage/spiky-fish.png";
    this.vx = 1;
    // this.speed = Math.random()*0.1+0.1;
    this.health = 100;
    this.maxHealth = this.health;
    this.damage = 0.5;
  }
  update = ()=>{
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    let theta = Math.atan2(dy, dx);
    this.angle = theta;
    //roam around freely
    this.x -= this.vx;
    
    
  }

  draw = () => {
          ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    // drawing player fish
    if (mouse.x < this.x) {
    drawCharacter(this.image, "left",SpikyFishAnimation,this.spriteWidth,this.spriteHeight,this.x-50,this.y-60,this.spriteWidth*2,this.spriteHeight*2,50);
    } 
    else if(mouse.x> this.x) {
    drawCharacter(this.image_flipped, "right",SpikyFishAnimation,this.spriteWidth,this.spriteHeight,this.x-50,this.y-60,this.spriteWidth*2,this.spriteHeight*2,50);
    }
    
  };
}