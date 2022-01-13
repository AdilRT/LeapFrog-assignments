
class BlueShark extends Enemy {
    constructor(easyModeObject) {
      super();
      this.spriteWidth = BlueSharkSpriteWidth;
      this.spriteHeight = BlueSharkSpriteHeight;
      // this.x = canvas.width + 500;
      
      this.x =toss() == true ?RandomNumber(-can_world.width, 0 ):RandomNumber(can_world.width,can_world.width + 100);
      this.y = Math.random() * (can_world.height / 3);
      this.radius = 100;
      this.image.src = "images/enemies-damage/blue-shark.png";
      this.image_flipped.src = "images/enemies-damage/blue-shark-flipped.png";
      this.vx = 5;
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
      ctx_world.fillStyle = "black";
      ctx_world.beginPath();
      ctx_world.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx_world.fill();
      ctx_world.closePath();

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
      drawCharacter(this.image, "left",BlueSharkAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth*2,this.spriteHeight*2,10);
      } 
      else if(mouse.x> this.x) {
      drawCharacter(this.image_flipped, "right-to-left",BlueSharkAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth*2,this.spriteHeight*2,10);
      }
      ctx_world.restore();
    };
  
  
  }