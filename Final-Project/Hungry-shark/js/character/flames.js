let flamesArray = [];

class Flames {
    constructor(){
        this.x = boss.x;
        this.y = boss.y;
        console.log(boss.x,boss.y);
        this.size = Math.random()*9+3;
        this.speedX = gameSpeed;
        this.speedY = RandomNumber(-1,0.5);
        this.color = 'red';
    }

    update(){
        this.x-=this.speedX;
        this.y+= this.speedY;
    }

    draw(){
        ctx_world.fillStyle = this.color;
        ctx_world.beginPath();
        ctx_world.arc(this.x,this.y,this.size,0,Math.PI*2);
        // ctx.drawImage(bubbleImage,this.x-15,this.y-15,10,10);

        ctx_world.fill();
    }
}

function handleFlames(){
  if (gameFrame % 2 == 0) {
      flamesArray.unshift(new Flames);
  }
    for(i=0;i<flamesArray.length;i++){
        flamesArray[i].update();
        flamesArray[i].draw();
    }
    //remove path particles 
    if(flamesArray.length>50||this.y<0){
        for(let i =0;i<20;i++){
            flamesArray.pop(flamesArray[i]);
        }
    }
}