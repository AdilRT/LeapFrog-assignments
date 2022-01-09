class JellyFish extends Enemy {
    constructor() {
      super();
      this.spriteWidth = JellyFishSpriteWidth;
      this.spriteHeight = JellyFishSpriteHeight;
      this.x = RandomNumber(0,canvas.width)
      // this.y = RandomNumber(canvas.height,canvas.height +50);
      this.y = Math.random() * canvas.height+100;
      this.radius = 65;
      this.image.src = "images/enemies-damage/jelly-fish.png";
      this.image_flipped.src = "images/enemies-damage/jelly-fish-flipped.png";
      this.vy = 1;
      this.distance;
      // this.speed = Math.random()*0.1+0.1;
      this.health = 100;
      this.maxHealth = this.health;
      this.damage = 0.5;
    }
    update=()=> {
        this.y -= this.vy;
          const dx = this.x - player.x;
          const dy = this.y - player.y;
          this.distance = Math.sqrt(dx ** 2 + dy ** 2);

          // this.x = Math.sin(this.angle * Math.PI/180)
          // this.y = Math.cos(this.angle * Math.PI/180)
          // this.angle +=0.2;
      }

    draw = () => {
      // ctx.fillStyle = "black";
      // ctx.beginPath();
      // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      // ctx.fill();
      // ctx.closePath();

      // drawing player fish
      drawCharacter(this.image, "blue",JellyFishAnimation,this.spriteWidth,this.spriteHeight,this.x-25,this.y-70,this.spriteWidth,this.spriteHeight,10);
      drawCharacter(this.image, "green",JellyFishAnimation,this.spriteWidth,this.spriteHeight,this.x-50-25,this.y+20-70,this.spriteWidth,this.spriteHeight,10);
      drawCharacter(this.image, "pink",JellyFishAnimation,this.spriteWidth,this.spriteHeight,this.x+50-25,this.y+20-70,this.spriteWidth,this.spriteHeight,10);
      // ctx.drawImage(this.image,this.spriteWidth,this.spriteHeight,this.radius,this.radius);
     
    };
  
  
  }