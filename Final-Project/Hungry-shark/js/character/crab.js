class Crab extends Enemy {
    constructor() {
      super();
      this.spriteWidth = CrabSpriteWidth;
      this.spriteHeight = CrabSpriteHeight;
      this.width = RandomNumber(this.spriteWidth,this.spriteWidth*1.5)
      this.height = RandomNumber(this.spriteHeight,this.spriteHeight*1.5)
      // this.x = can_world.width/2
      this.x =toss() == true ?0:can_world.width + this.radius;
// this.y = RandomNumber(can_worldas.height,can_world.height +50);
      this.y = can_world.height;
      this.radius = 50;
      this.image.src = "images/enemies-damage/crab.png";
      this.image_flipped.src = "images/enemies-damage/crab.png";
      this.vx = 1;
      this.distance;
      // this.speed = Math.random()*0.1+0.1;
      this.health = 100;
      this.maxHealth = this.health;
      this.damage = 0.5;
    }
    update=()=> {
      const dx = this.x - player.pos.x;
      const dy = this.y - player.pos.y;
      this.distance = Math.sqrt(dx ** 2 + dy ** 2);
      // this.x+=this.vx;
      if(this.x<player.pos.x) this.x += this.vx;
      else if(this.x>player.pos.x)this.x -= this.vx;
      }

    draw = () => {
      // ctx.fillStyle = "black";
      // ctx.beginPath();
      // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      // ctx.fill();
      // ctx.closePath();

      // drawing player fish
      drawCharacter(this.image, "left",CrabAnimation,this.spriteWidth,this.spriteHeight,this.x-50,this.y-100, this.width, this.height,100);
    //   drawCharacter(this.image, "right",CrabAnimation,this.spriteWidth,this.spriteHeight,this.x-50-25,this.y-80,this.spriteWidth,this.spriteHeight,100);
    //   drawCharacter(this.image, "left",CrabAnimation,this.spriteWidth,this.spriteHeight,this.x+50-25,this.y-80,this.spriteWidth,this.spriteHeight,100);
      // ctx.drawImage(this.image,this.spriteWidth,this.spriteHeight,this.radius,this.radius);
     
    };
  
  
  }