class Boss{
    constructor() {
      this.spriteWidth = BossSpriteWidth;
      this.spriteHeight = BossSpriteHeight;
      this.x = can_world.width/2;
    //   this.x =toss() == true ?RandomNumber(-can_world.width, 0 ):RandomNumber(can_world.width,can_world.width + 100);
    //   this.y = Math.random() * (can_world.height / 3);
    this.y=can_world.height/2;
      this.radius = BOSS_RADIUS;
      this.image = new Image();
      this.image_flipped = new Image();
      this.image.src = "images/boss/sea-dragon-left.png";
      this.image_flipped.src = "images/boss/sea-dragon-right.png";
      this.health = BOSS_HEALTH;
      this.damage = BOSS_DAMAGE;
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
        sharkBite.play();
        if(this.health<=0){
          gameOver = true;
          bossDefeated = true;
          overPage();
        }
        if(bossActive == true) {
          player.health-= this.damage;
          bossActive = false;
          setTimeout(()=>{
            bossActive =true;
          },BOSS_PASSIVE_TIME)
        }
        if(damageDoneOnce == false) {
          this.health -= player.damage;  
            damageDoneOnce = true;
            //invincible timeperiod
            setTimeout(()=>{
              damageDoneOnce =false ;
            },BOSS_INVICIBILITY_PERIOD)
          }  
        if (this.counted == false) {
          score++;
          this.counted = true;
        }
          i--;
        }
    }
    

    draw = () => {
      //SHOWING HEALTH
      showHealth(this,this.x-40,this.y-50);
      //ROTATE
      // ctx_world.save(); 
      if (mouse.x<this.x && bossDefeated == false) {
      drawCharacter(this.image, "right",BossAnimation,this.spriteWidth,this.spriteHeight,this.x-200,this.y-200,this.spriteWidth*3,this.spriteHeight*3,STAGGERFRAME10);
      } 
      else if(this.x<mouse.x && bossDefeated == false) {
      drawCharacter(this.image_flipped, "right",BossAnimation,this.spriteWidth,this.spriteHeight,this.x-200,this.y-200,this.spriteWidth*3,this.spriteHeight*3,STAGGERFRAME10);
      }
      // ctx_world.restore();
    };
  
  
  }
  const boss = new Boss();
