class JellyFish extends Enemy {
    constructor(easyModeObject) {
      super();
      this.spriteWidth = JellyFishSpriteWidth;
      this.spriteHeight = JellyFishSpriteHeight;
      this.x = RandomNumber(0,can_world.width)
      this.y = Math.random() * can_world.height+100;
      this.radius = 65;
      this.image.src = "images/enemies-damage/jelly-fish.png";
      this.image_flipped.src = "images/enemies-damage/jelly-fish-flipped.png";
      this.vy = 1;
      this.distance;
      // this.speed = Math.random()*0.1+0.1;
        this.health = easyModeObject.JellyFish.health;
        this.damage = easyModeObject.JellyFish.damage;

    }
    update=()=> {
        this.y -= this.vy;
          const dx = this.x - player.pos.x;
          const dy = this.y - player.pos.y;
          this.distance = Math.sqrt(dx ** 2 + dy ** 2);

         
      }

    draw = () => {

      // drawing player fish
      drawCharacter(this.image, "blue",JellyFishAnimation,this.spriteWidth,this.spriteHeight,this.x-25,this.y-70,this.spriteWidth,this.spriteHeight,10);
      drawCharacter(this.image, "green",JellyFishAnimation,this.spriteWidth,this.spriteHeight,this.x-50-25,this.y+20-70,this.spriteWidth,this.spriteHeight,10);
      drawCharacter(this.image, "pink",JellyFishAnimation,this.spriteWidth,this.spriteHeight,this.x+50-25,this.y+20-70,this.spriteWidth,this.spriteHeight,10);
     
    };
  
  
  }