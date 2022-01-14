class BrownFish extends Enemy {
    constructor(easyModeObject) {
      super();
      this.spriteWidth = BrownFishSpriteWidth;
      this.spriteHeight = BrownFishSpriteHeight;
      this.x = RandomSpawn();
      this.y = RandomNumber(0,can_world.height / 3);
      this.radius = BROWN_FISH_RADIUS;
      this.image.src = "images/enemies-damage/brown-fish.png";
      this.image_flipped.src = "images/enemies-damage/brown-fish-flipped.png";
      this.health = easyModeObject.BrownFish.health;
      this.damage = easyModeObject.BrownFish.damage;
    }


    draw = () => {
      //SHOWING HEALTH
      ctx_world.font = '20px Orbitron';
      ctx_world.fillStyle = "gold";
      ctx_world.fillText(Math.floor(this.health),this.x,this.y-30);  
      //ROTATE
      ctx_world.save(); 
      ctx_world.translate(this.x, this.y);
      ctx_world.rotate(this.angle);
      // drawing player fish
      if (mouse.x < this.x) {
      drawCharacter(this.image, "left",BrownFishAnimation,this.spriteWidth,this.spriteHeight,-65,-30,this.spriteWidth,this.spriteHeight,STAGGERFRAME10);
      } 
      else if(mouse.x> this.x) {
      drawCharacter(this.image_flipped, "right",BrownFishAnimation,this.spriteWidth,this.spriteHeight,-65,-30,this.spriteWidth,this.spriteHeight,STAGGERFRAME10);
      }
     
      ctx_world.restore();
    };
  
  
  }