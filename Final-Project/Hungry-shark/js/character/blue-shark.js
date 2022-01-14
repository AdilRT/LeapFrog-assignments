
class BlueShark extends Enemy {
    constructor(easyModeObject) {
      super();
      this.spriteWidth = BlueSharkSpriteWidth;
      this.spriteHeight = BlueSharkSpriteHeight;
      this.x = RandomSpawn();
      this.y=RARE_ANIMALS_VERTICAL_SPAWN
      this.radius = SHARKS_RADIUS;
      this.image.src = "images/enemies-damage/blue-shark.png";
      this.image_flipped.src = "images/enemies-damage/blue-shark-flipped.png";
      this.vx = SHARKS_XSPEED;
      this.health = easyModeObject.BlueShark.health;
      this.damage = easyModeObject.BlueShark.damage;
// 
      if(difficulty=='easy'){
      }else if(difficulty == 'normal'){
        this.health = normalModeObject.BlueShark.health;
        this.damage = normalModeObject.BlueShark.damage;
      }else if (difficulty == 'hard'){
        this.health = hardModeObject.BlueShark.health;
        this.damage = hardModeObject.BlueShark.damage;
      }
    }


    draw = () => {
      //SHOWING HEALTH
     
      showHealth(this,this.x-30,this.y-40)
      //ROTATE
      ctx_world.save(); 
      ctx_world.translate(this.x, this.y);
      ctx_world.rotate(this.angle);
      // drawing player fish
      if (mouse.x < this.x) {
      drawCharacter(this.image, "left",BlueSharkAnimation,this.spriteWidth,this.spriteHeight,-90,-50,this.spriteWidth*1.5,this.spriteHeight*1.5,STAGGERFRAME10);
      } 
      else if(mouse.x> this.x) {
      drawCharacter(this.image_flipped, "right-to-left",BlueSharkAnimation,this.spriteWidth,this.spriteHeight,-90,-50,this.spriteWidth*1.5,this.spriteHeight*1.5,STAGGERFRAME10);
      }
      ctx_world.restore();
    };
  
  
  }