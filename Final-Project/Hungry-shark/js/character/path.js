let pathArray = [];

class Path {
    constructor(){
        this.x = player.x;
        this.y = player.y;
        this.size = Math.random()*7+3;
        this.speedX = gameSpeed;
        this.speedY = RandomNumber(-1,1);
        this.color = 'red';
    }

    update(){
        this.x-=this.speedX;
        this.y+= this.speedY;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        
        ctx.drawImage(bubbleImage,this.x-15,this.y-15,10,10);

        ctx.fill();
    }
}

function handlePath(){
  if (gameFrame % 50 == 0) {
      pathArray.unshift(new Path);
  }
    for(i=0;i<pathArray.length;i++){
        pathArray[i].update();
        pathArray[i].draw();
    }
    //remove path particles 
    if(pathArray.length>100||this.y<0){
        for(let i =0;i<20;i++){
            pathArray.pop(pathArray[i]);
        }
    }
}