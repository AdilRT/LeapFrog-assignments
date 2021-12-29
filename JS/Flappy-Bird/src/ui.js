///STATES


//Get Ready Message
const getReady={
    sX:356,
    sY:91,
    w:110,
    h:31,
    x:canvas.width/2-110,
    y:80,
    draw:function() {
        if(state.current == state.getReady){
            ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);

        }
    }
}
const tap={
    sX:356,
    sY:122,
    w:65,
    h:62,
    x:canvas.width/2 - 65,
    y:150,
    draw:function() {
        if(state.current == state.getReady){
        ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);
        }
    }
}
const startButton={
    sX:430,
    sY:166,
    w:44,
    h:18 ,
    x:canvas.width/2 - 55,
    y:300,
    draw:function() {
        if(state.current == state.getReady){
        ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);
        }
    }
}
const restartButton={
    sX:430,
    sY:166,
    w:44,
    h:18 ,
    x:canvas.width/2 - 55,
    y:300,
    draw:function() {
        if(state.current == state.over){
        ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);
        }
    }
}

//game Over message
const gameOver={
    sX:460,
    sY:91,
    w:110,
    h:31,
    x:canvas.width/2 - 110,
    y:80,
    draw:function() {
        if(state.current == state.over){
            ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);
        // ctx.drawImage(flappySprite,430,.166,44,18,canvas.width/2 - 55,300,this.w*2,this.h*2);
              
        }
        // ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);

    }
}

const scoreBoard={
    sX:39,
    sY:315,
    w:130,
    h:62,
    x:canvas.width/2-123,
    y:150,
    draw:function() {
        if(state.current == state.over){
        ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);
        // ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y+90,this.w*2,this.h*2);
        
    }
    // ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
     
    }
}