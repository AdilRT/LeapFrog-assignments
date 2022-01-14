class Piranha extends Enemy {
    constructor(easyModeObject) {
      super();
      
      this.x =RandomSpawn()
      this.y = Math.random() * (can_world.height / 3);
      this.radius = 50;
      this.image_left = new Image();
      this.image_left.src = "images/enemies-damage/piranha-left.png";
      this.image_left_flipped = new Image();
      this.image_left_flipped.src = "images/enemies-damage/piranha-left-flipped.png";
      this.image_bite = new Image();
      this.image_bite.src = "images/enemies-damage/piranha-bite.png";
      this.image_turn = new Image();
      this.image_turn.src = "images/enemies-damage/piranha-turn-around.png";
      this.image_hurt = new Image();
      this.image_hurt.src = "images/enemies-damage/piranha-hurt.png";
      // this.image_left_flipped.src = "images/enemies-damage/piranha-dying.png";
      this.vx = 5;
      // this.speed = Math.random()*0.1+0.1;
      this.health = easyModeObject.Piranha.health;
      this.maxHealth = this.health;
      this.damage = easyModeObject.Piranha.damage;
    }
    

    draw = () => {
 

      //SHOWING HEALTH
      ctx_world.font = '20px Orbitron';
      ctx_world.fillStyle = "gold";
      ctx_world.fillText(Math.floor(this.health),this.x-50,this.y-50);  
      //ROTATE
      ctx_world.save(); 
      ctx_world.translate(this.x, this.y);
      ctx_world.rotate(this.angle);
      // drawing player fish
      if (mouse.x < this.x) {
      drawCharacter(this.image_left, "left",PiranhaAnimationLeft,PiranhaLeftSpriteWidth,PiranhaLeftSpriteHeight,-65,-60,PiranhaLeftSpriteWidth*2,PiranhaLeftSpriteHeight*2,10);
      } 
      else if(mouse.x> this.x) {
      drawCharacter(this.image_left_flipped, "left",PiranhaAnimationLeft,PiranhaLeftSpriteWidth,PiranhaLeftSpriteHeight,-65,-60,PiranhaLeftSpriteWidth*2,PiranhaLeftSpriteHeight*2,10);
      }
      ctx_world.restore();
    };
  
  
  }