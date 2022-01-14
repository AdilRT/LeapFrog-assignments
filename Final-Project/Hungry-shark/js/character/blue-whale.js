class BlueWhale extends Enemy {
    constructor(easyModeObject) {
      super();
      this.spriteWidth = BlueWhaleSpriteWidth;
      this.spriteHeight = BlueWhaleSpriteHeight;
      this.x = RandomSpawn();
      this.y = RARE_ANIMALS_VERTICAL_SPAWN;
      this.radius = WHALE_RADIUS;
      this.image.src = "images/enemies-damage/blue-whale.png";
      this.image_flipped.src = "images/enemies-damage/blue-whale-flipped.png";
      this.health = easyModeObject.BlueWhale.health;
      this.damage = easyModeObject.BlueWhale.damage;
    }


    draw = () => {
      //SHOWING HEALTH
      showHealth(this,this.x-50,this.y-20);
      
      //ROTATE
      ctx_world.save(); 
      ctx_world.translate(this.x, this.y);
      ctx_world.rotate(this.angle);
      // drawing player fish
      if (mouse.x < this.x) {
      drawCharacter(this.image, "left",BlueWhaleAnimation,this.spriteWidth,this.spriteHeight,-65,-100,this.spriteWidth*2,this.spriteHeight*2,STAGGERFRAME10);
      } 
      else if(mouse.x> this.x) {
      drawCharacter(this.image_flipped, "right",BlueWhaleAnimation,this.spriteWidth,this.spriteHeight,-65,-100,this.spriteWidth*2,this.spriteHeight*2,STAGGERFRAME10);
      }
      ctx_world.restore();
    };
  
  
  }