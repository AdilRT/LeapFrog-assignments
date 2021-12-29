
class Bird{
    constructor(){
        this.x = 150;
        this.y =200;
        this.velocityY = 0; 
        // this.spriteSheetWidth = 633;
        // this.spriteSheetHeight = 619;
        this.width = 30;
        this.height=30;
        this.weight =1;//to pull down
        // this.spriteCoordX = [39,70,100]
        this.spriteCoordX = 1;
    }
    //calc position && speed for each frame 
    update(){
        //lower frame collision
        if(this.y>=canvas.height-this.height) {
            this.y = canvas.height-this.height;
            this.velocityY = 0;
            //gameover
            console.log(state.current);
            // state.current= state.over;
            // gameOver.draw();
            // scoreBoard.draw();
            // score.draw();

        }
        else{
            //fall
            this.velocityY += this.weight;//
            this.velocityY*=0.9;//to fall abit slow
            this.y += this.velocityY;
        }
        //upper frame collision
        if(this.y<=0+this.height){
            this.y=0+this.height  ;
            this.velocityY=0;  
            //gameover
        }
        if(spaceBarPressed){
            this.flap();            
        }
        this.draw();
    }
    
    draw(){
        // ctx.fillRect(this.x,this.y,this.width,this.height);
        // ctx.fillStyle = 'red';
        ctx.drawImage(flappySprite,this.spriteCoordX*this.width,567,this.width,this.height,this.x-25,this.y,this.width*2,this.height*2)
    }
    flap(){
        this.velocityY -=2;
        if(this.spriteCoordX>=3) this.spriteCoordX=0;
        else if(frameCount%5===0) this.spriteCoordX++;
        // ctx.drawImage(flappySprite,70,567,this.width,this.height,this.x,this.y,this.width*2,this.height*2)
    
    }  
    
    //end class    
}
function handleBird(){
    bird.update();
}
const bird = new Bird();
