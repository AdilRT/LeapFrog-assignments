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

        // this.x = player.pos2.x;
        // this.y = player.pos2.y;
        console.log(this.x,this.y);
        this.width = 80;
        this.height =80;
        this.speedY = 0.1;
        // this.image = new Image();
        // this.image.src = 'images/blood-ss.png';
    }

    update(){
        this.y-=this.speedY;
        if(this.y<player.pos2.y-50)this.y = player.pos2.y;

    }

    draw(){
        // ctx.drawImage(blood1,this.x-15,this.y-15,100,100)
      drawPlayer(blood1, "small",BloodAnimation,BloodSpriteWidth,BloodSpriteWidth,this.x-15,this.y, this.width, this.height,30);

    }
}

const blood = new Blood();

function handleBlood(){
    blood.update();
    blood.draw();
    // if (gameFrame % 30 == 0) {
    //     pathArray.unshift(new Path);
    // }
    //   for(i=0;i<pathArray.length;i++){
    //       pathArray[i].update();
    //       pathArray[i].draw();
    //   }
    //   //remove path particles 
    //   if(pathArray.length>5||this.y<0){
    //       for(let i =0;i<1;i++){
    //           pathArray.pop(pathArray[i]);
    //       }
    //   }
  }