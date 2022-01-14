class Blood{
    constructor(){
        if(player.pos2.x<320||player.pos2.x>can_world.width-320 ){
            this.x = player.pos.x+100;
        }
        else{
            this.x= player.pos2.x;
        }
        if(player.pos2.y<320||player.pos2.y>can_world.width-320 ){
            this.y = player.pos.y;
        }else{
            this.y= player.pos2.y;
        }
        this.width = 80;
        this.height =80;
        this.speedY = 0.1;
    }

    update(){
        this.y-=this.speedY;
        if(this.y<player.pos2.y-50)this.y = player.pos2.y;

    }

    draw(){
        // ctx.drawImage(blood1,this.x-15,this.y-15,100,100)
      drawPlayer(blood1, "small",BloodAnimation,BloodSpriteWidth,BloodSpriteWidth,this.x-15,this.y, this.width, this.height,STAGGERFRAME30);

    }
}

const blood = new Blood();

function handleBlood(){
    blood.update();
    blood.draw();
  }