class Piranha extends Enemy {
    constructor() {
      super();
      // this.spriteWidth = PiranhaSpriteWidth;
      // this.spriteHeight = PiranhaSpriteHeight;
      // this.x =toss() == true ?RandomNumber(-canvas.width, 0 ):RandomNumber(canvas.width,canvas.width + 100);
      this.x =RandomNumber(-canvas.width/2, 0 )
      this.y = Math.random() * (canvas.height / 3);
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
      this.health = 100;
      this.maxHealth = this.health;
      this.damage = 0.1;
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
      drawCharacter(this.image_left, "left",PiranhaAnimationLeft,PiranhaLeftSpriteWidth,PiranhaLeftSpriteHeight,-65,-60,PiranhaLeftSpriteWidth*2,PiranhaLeftSpriteHeight*2,10);
      } 
      else if(mouse.x> this.x) {
      drawCharacter(this.image_left_flipped, "left",PiranhaAnimationLeft,PiranhaLeftSpriteWidth,PiranhaLeftSpriteHeight,-65,-60,PiranhaLeftSpriteWidth*2,PiranhaLeftSpriteHeight*2,10);
      }
      ctx.restore();
    };
  
  
  }