class Boss{
    constructor() {
      this.spriteWidth = BossSpriteWidth;
      this.spriteHeight = BossSpriteHeight;
      this.x = can_world.width/2;
    //   this.x =toss() == true ?RandomNumber(-can_world.width, 0 ):RandomNumber(can_world.width,can_world.width + 100);
    //   this.y = Math.random() * (can_world.height / 3);
    this.y=can_world.height/2;
      this.radius = 100;
      this.image = new Image();
      this.image_flipped = new Image();
      this.image.src = "images/boss/sea-dragon-left.png";
      this.image_flipped.src = "images/boss/sea-dragon-right.png";
      this.vx = 5;
      // this.speed = Math.random()*0.1+0.1;
      this.health = 100;
      this.damage = 1;
      this.angle = 0;
      this.counted = false;

    }

    update =()=>{
        const dx = this.x - player.pos.x;
        const dy = this.y - player.pos.y;
        this.distance = Math.sqrt(dx ** 2 + dy ** 2);
        this.x = can_world.width/3*Math.sin(this.angle * Math.PI/90)+can_world.width/2;
        this.y = can_world.height/3*Math.cos(this.angle * Math.PI/270)+can_world.height/2;
        this.angle +=0.1;

                
            //   checking collision
      if (this.distance < this.radius + player.radius) {
        player.collision = true;
        // console.log('player health',player.health);
        // console.log('enemy health',i,this.health);
        sharkBite.play();
  
        if(bossActive == true) {
          player.health-= this.damage;
          bossActive = false;
          setTimeout(()=>{
            bossActive =true;
          },RandomNumber(3000,5000))
        }
        if(damageDoneOnce == false) {
          this.health -= player.damage;  
            damageDoneOnce = true;
            //invincible timeperiod
            setTimeout(()=>{
              damageDoneOnce =false ;
            },1000)
          }  
        if (this.counted == false) {
          score++;
          this.counted = true;
        }
          i--;
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
      ctx_world.fillText(Math.floor(this.health),this.x,this.y-50);  
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
  
  
  }
  const boss = new Boss();
