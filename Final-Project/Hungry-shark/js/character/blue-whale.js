class BlueWhale extends Enemy {
    constructor() {
      super();
      this.spriteWidth = BlueWhaleSpriteWidth;
      this.spriteHeight = BlueWhaleSpriteHeight;
      // this.x = canvas.width + 500;
      this.x =toss() == true ?RandomNumber(-canvas.width, 0 ):RandomNumber(canvas.width,canvas.width + 100);
      this.y = Math.random() * (canvas.height / 3);
      this.radius = 50;
      this.image.src = "images/enemies-damage/blue-whale.png";
      this.image_flipped.src = "images/enemies-damage/blue-whale-flipped.png";
      this.vx = 5;
      // this.speed = Math.random()*0.1+0.1;
      this.health = 100;
      this.maxHealth = this.health;
      this.damage = 1;
    }
    

    draw = () => {
      // ctx.fillStyle = "black";
      // ctx.beginPath();
      // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      // ctx.fill();
      // ctx.closePath();

      //SHOWING HEALTH
      ctx.font = '20px Orbitron';
      ctx.fillStyle = "gold";
      ctx.fillText(Math.floor(this.health),this.x,this.y);  
      //ROTATE
      ctx.save(); 
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      // drawing player fish
      if (mouse.x < this.x) {
      drawCharacter(this.image, "left",BlueWhaleAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth*2,this.spriteHeight*2,10);
      } 
      else if(mouse.x> this.x) {
      drawCharacter(this.image_flipped, "right",BlueWhaleAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth*2,this.spriteHeight*2,10);
      }
      ctx.restore();
    };
  
  
  }