

class SpikyFish extends Enemy {
  constructor(easyModeObject) {
    super();
    this.spriteWidth =SpikyFishSpriteWidth;
    this.spriteHeight = SpikyFishSpriteHeight;
    this.x =toss() == true ?RandomNumber(-can_world.width, 0 ):RandomNumber(can_world.width,can_world.width + 100);
    this.y = Math.random() * can_world.height;
    this.radius = 35;
    this.image.src = "images/enemies-damage/spiky-fish.png";
    this.image_flipped.src = "images/enemies-damage/spiky-fish.png";
    this.vx = 1;
    this.health = easyModeObject.Spiky.health;
    this.maxHealth = this.health;
    this.damage = easyModeObject.Spiky.damage;
  }
  update = ()=>{
    const dx = this.x - player.pos.x;
    const dy = this.y - player.pos.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    let theta = Math.atan2(dy, dx);
    this.angle = theta;
    //roam around freely
    this.x -= this.vx;
    
    
  }

  draw = () => {
         
    // drawing player fish
    if (mouse.x < this.x) {
    drawCharacter(this.image, "left",SpikyFishAnimation,this.spriteWidth,this.spriteHeight,this.x-95,this.y-115,this.spriteWidth*2,this.spriteHeight*2,50);
    } 
    else if(mouse.x> this.x) {
    drawCharacter(this.image_flipped, "right",SpikyFishAnimation,this.spriteWidth,this.spriteHeight,this.x-95,this.y-115,this.spriteWidth*2,this.spriteHeight*2,50);
    }
    
  };
}