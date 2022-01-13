let pathArray = [];

class Path {
    constructor(){
        this.x = player.pos2.x;
        this.y = player.pos2.y;
        this.size = Math.random()*7+3;
        this.speedX = RandomNumber(-2,1.5);
        this.speedY = RandomNumber(-2,1);
        this.color = 'red';
        this.angle=0;
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
  if (gameFrame % 30 == 0) {
      pathArray.unshift(new Path);
  }
    for(i=0;i<pathArray.length;i++){
        pathArray[i].update();
        pathArray[i].draw();
    }
    //remove path particles 
    if(pathArray.length>5||this.y<0){
        for(let i =0;i<1;i++){
            pathArray.pop(pathArray[i]);
        }
    }
}