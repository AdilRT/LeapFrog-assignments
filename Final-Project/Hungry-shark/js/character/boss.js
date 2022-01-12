class Boss extends Enemy {
    constructor() {
      super();
      this.spriteWidth = BossSpriteWidth;
      this.spriteHeight = BossSpriteHeight;
      this.x = can_world.width/2;
    //   this.x =toss() == true ?RandomNumber(-can_world.width, 0 ):RandomNumber(can_world.width,can_world.width + 100);
    //   this.y = Math.random() * (can_world.height / 3);
    this.y=can_world.height/2;
      this.radius = 100;
      this.image.src = "images/boss/sea-dragon-left.png";
      this.image_flipped.src = "images/boss/sea-dragon-right.png";
      this.vx = 5;
      // this.speed = Math.random()*0.1+0.1;
      this.health = 100;
      this.maxHealth = this.health;
      this.damage = 1;
      this.angle = 0;
    }

    update =()=>{
        // this.x -= this.vx;
        this.x = can_world.width/3*Math.sin(this.angle * Math.PI/90)+can_world.width/2;
        this.y = can_world.height/3*Math.cos(this.angle * Math.PI/270)+can_world.height/2;
        // this.x-= this.vx;
        // this.y += 3*Math.sin(this.angle)
        
        this.angle +=0.1;

        // if(this.x+this.radius<0) this.x = can_world.width;

    }
    

    draw = () => {
    //   ctx_world.fillStyle = "black";
    //   ctx_world.beginPath();
    //   ctx_world.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    //   ctx_world.fill();
    //   ctx_world.closePath();

      //SHOWING HEALTH
      ctx_world.font = '20px Orbitron';
      ctx_world.fillStyle = "gold";
      ctx_world.fillText(Math.floor(this.health),this.x,this.y);  
      //ROTATE
      ctx_world.save(); 
    //   ctx_world.translate(this.x, this.y);
    //   ctx_world.rotate(this.angle);
      // drawing player fish
      if (mouse.x<this.x) {
      drawCharacter(this.image, "right",BossAnimation,this.spriteWidth,this.spriteHeight,this.x-200,this.y-200,this.spriteWidth*3,this.spriteHeight*3,10);
      } 
      else if(this.x<mouse.x) {
      drawCharacter(this.image_flipped, "right",BossAnimation,this.spriteWidth,this.spriteHeight,this.x-200,this.y-200,this.spriteWidth*3,this.spriteHeight*3,10);
      }
      ctx_world.restore();
    };
  
  
  }-200
  const boss = new Boss();
