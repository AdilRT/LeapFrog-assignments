class BrownFish extends Enemy {
    constructor(easyModeObject) {
      super();
      this.spriteWidth = BrownFishSpriteWidth;
      this.spriteHeight = BrownFishSpriteHeight;
      this.x = can_world.width + 500;
      this.y = Math.random() * (can_world.height / 3);
      this.radius = 50;
      this.image.src = "images/enemies-damage/brown-fish.png";
      this.image_flipped.src = "images/enemies-damage/brown-fish-flipped.png";
      // this.vx = 5;
      // this.speed = Math.random()*0.1+0.1;
      this.health = easyModeObject.BrownFish.health;
      this.maxHealth = this.health;
      this.damage = easyModeObject.BrownFish.damage;
    }


    draw = () => {
      ctx_world.fillStyle = "black";
      ctx_world.beginPath();
      ctx_world.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx_world.fill();
      ctx_world.closePath();

      //SHOWING HEALTH
      ctx_world.font = '20px Orbitron';
      ctx_world.fillStyle = "gold";
      ctx_world.fillText(Math.floor(this.health),this.x,this.y-50);  
      //ROTATE
      ctx_world.save(); 
      ctx_world.translate(this.x, this.y);
      ctx_world.rotate(this.angle);
      // drawing player fish
      if (mouse.x < this.x) {
      drawCharacter(this.image, "left",BrownFishAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth*2,this.spriteHeight*2,10);
      } 
      else if(mouse.x> this.x) {
      drawCharacter(this.image_flipped, "right",BrownFishAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth*2,this.spriteHeight*2,10);
      }
     
      ctx_world.restore();
    };
  
  
  }