
class GreenShark extends Enemy {
    constructor(easyModeObject) {
      super();
      this.spriteWidth = GreenSharkSpriteWidth;
      this.spriteHeight = GreenSharkSpriteHeight;
      this.x =toss() == true ?RandomNumber(-can_world.width, 0 ):RandomNumber(can_world.width,can_world.width + 100);
      this.y = Math.random() * (can_world.height / 3);
      this.radius = 100;
      this.image.src = "images/enemies-damage/green-shark.png";
      this.image_flipped.src = "images/enemies-damage/green-shark-flipped.png";
      this.vx = 5;
      this.health = easyModeObject.GreenShark.health;
      this.maxHealth = this.health;
      this.damage = easyModeObject.GreenShark.damage;
    }


    draw = () => {
      //SHOWING HEALTH
      ctx_world.font = '20px Orbitron';
      ctx_world.fillStyle = "gold";
      ctx_world.fillText(Math.floor(this.health),this.x,this.y);  
      //ROTATE
      ctx_world.save(); 
      ctx_world.translate(this.x, this.y);
      ctx_world.rotate(this.angle);
      // drawing player fish
      if (mouse.x < this.x) {
      drawCharacter(this.image, "left",GreenSharkAnimation,this.spriteWidth,this.spriteHeight,-10,-60,this.spriteWidth*2,this.spriteHeight*2,10);
      } 
      else if(mouse.x> this.x) {
      drawCharacter(this.image_flipped, "right-to-left",GreenSharkAnimation,this.spriteWidth,this.spriteHeight,-100,-60,this.spriteWidth*2,this.spriteHeight*2,10);
      }
      ctx_world.restore();
    };
  
  
  }