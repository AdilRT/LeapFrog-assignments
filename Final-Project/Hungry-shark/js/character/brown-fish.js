class BrownFish extends Enemy {
    constructor() {
      super();
      this.spriteWidth = BrownFishSpriteWidth;
      this.spriteHeight = BrownFishSpriteHeight;
      this.x = canvas.width + 500;
      this.y = Math.random() * (canvas.height / 3);
      this.radius = 50;
      this.image.src = "images/enemies-damage/brown-fish.png";
      this.image_flipped.src = "images/enemies-damage/brown-fish.png";
      // this.vx = 5;
      // this.speed = Math.random()*0.1+0.1;
    }

    draw = () => {
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
      //ROTATE
      ctx.save(); 
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      // drawing player fish
      if (mouse.x < this.x) {
      drawCharacter(this.image, "left",BrownFishAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth*2,this.spriteHeight*2,10);
      } 
      else if(mouse.x> this.x) {
      drawCharacter(this.image_flipped, "right",BrownFishAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth*2,this.spriteHeight*2,10);
      }
      ctx.restore();
    };
  
  
  }