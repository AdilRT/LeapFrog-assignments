class Boss extends Enemy {
    constructor() {
      super();
      this.spriteWidth = BossSpriteWidth;
      this.spriteHeight = BossSpriteHeight;
      this.x = canvas.width/2;
    //   this.x =toss() == true ?RandomNumber(-canvas.width, 0 ):RandomNumber(canvas.width,canvas.width + 100);
    //   this.y = Math.random() * (canvas.height / 3);
    this.y=canvas.height/2;
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
        this.x = canvas.width/2*Math.sin(this.angle * Math.PI/90)+canvas.width/2;
        this.y = canvas.height/2*Math.cos(this.angle * Math.PI/270)+canvas.height/2;
        // this.x-= this.vx;
        // this.y += 3*Math.sin(this.angle)
        
        this.angle +=0.5;

        // if(this.x+this.radius<0) this.x = canvas.width;

    }
    

    draw = () => {
    //   ctx.fillStyle = "black";
    //   ctx.beginPath();
    //   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    //   ctx.fill();
    //   ctx.closePath();

      //SHOWING HEALTH
      ctx.font = '20px Orbitron';
      ctx.fillStyle = "gold";
      ctx.fillText(Math.floor(this.health),this.x,this.y);  
      //ROTATE
      ctx.save(); 
    //   ctx.translate(this.x, this.y);
    //   ctx.rotate(this.angle);
      // drawing player fish
      if (mouse.x<this.x) {
      drawCharacter(this.image, "right",BossAnimation,this.spriteWidth,this.spriteHeight,this.x-200,this.y-200,this.spriteWidth*3,this.spriteHeight*3,10);
      } 
      else if(this.x<mouse.x    ) {
      drawCharacter(this.image_flipped, "right",BossAnimation,this.spriteWidth,this.spriteHeight,this.x-200,this.y-200,this.spriteWidth*3,this.spriteHeight*3,10);
      }
      ctx.restore();
    };
  
  
  }-200
  const boss = new Boss();
