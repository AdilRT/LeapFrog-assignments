

//GLobal var
let spaceBarPressed = false;
let angle = 0; //to move bird slightly up and down when idle 
let frameCount = 0;//stroes frameCount during animation loop for adding periodic triggers like enemy,powerups etc every 500 frames
// let score = 0;
let gameSpeed = 2;

//Game State
const state = {
    current:0,
    getReady:0,
    game:1,
    over:2,
}
canvas.addEventListener('click',function(e){
    switch(state.current){
        case state.getReady:
            state.current = state.game;
            break;
        case state.game:
            bird.flap();
            break;
        case state.over:
            state.current = state.getReady;
            break;
    }
})

//SCORE
const score = {
    best: parseInt(localStorage.getItem("best"))||0,
    value:0,
    draw: function(){
        ctx.font = "25px Teko"; //import
        ctx.fillStyle = 'white';
        ctx.strokeStyle = (this.value, (30/100)*canvas.width ,canvas.height/2);
        
        if(state.current == state.game){
            ctx.fillText(this.value, (30/100)*canvas.width ,canvas.height/2);
            ctx.strokeText(this.value, (30/100)*canvas.width ,canvas.height/2);
        }
        else if(state.current == state.over){
            //your score
            ctx.fillText(this.value,257 ,canvas.height/3-27);
            ctx.strokeText(this.value,257,canvas.height/3-27);
            //high score
            ctx.fillText(this.best, 257,canvas.height/2-67);
            ctx.strokeText(this.best, 257,canvas.height/2-67);
        }

    }
}



//LOOP
function animate(){
    //to lcear canvas between every frames of animation // so draw again
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(state.current == state.getReady){
        ctx.drawImage(background,0,0,canvas.width,canvas.height)
        draw(); 
        
    }
    if(state.current == state.game){
        handleBackground();
        handlePipes();
        handleBird();
            //score fonts
        ctx.fillStyle = 'white';
        ctx.font = 'Flappy Bird';
        ctx.fillText(score.value,canvas.width/2,70);

        }
    detectCollision();
    if(detectCollision()==true)return;//freeze
    // if(true)return;
    requestAnimationFrame(animate);//render animation loop by recursion
    angle+=0.2;
    frameCount++;

}

//draw continuous background
const Background = {
    bg1x: 0,
    bg2x:canvas.width,
    y:0,//for both image
    width: canvas.width,
    height: canvas.height
}

function handleBackground(){
    if(Background.bg1x<= -Background.width+ gameSpeed){
        Background.bg1x = Background.width;
    }
    else{
        Background.bg1x -= gameSpeed;
    }  
    if(Background.bg2x <= -Background.width + gameSpeed){
        Background.bg2x = Background.width
        // console.log('b2reached');
    } else{
        Background.bg2x -= gameSpeed;
    }
    ctx.drawImage(background,Background.bg1x,Background.y,Background.width,Background.height);
    ctx.drawImage(background,Background.bg2x,Background.y,Background.width,Background.height);
}


// EVENT HANDLERS
//event object contains info about the event//e.code
addEventListener('keydown',(e)=>{
    if(e.code === 'Space'){
        spaceBarPressed = true;
        // birdPositionY++;//now update this 
    }
})
addEventListener('keyup',(e)=>{
    if(e.code === 'Space'){
        spaceBarPressed = false;
        bird.spriteCoordX = 1;
    }
})

//COLLISION
function detectCollision(){
    for(let i=0; i < pipesArray.length;i++){
        if(bird.x<pipesArray[i].x + pipesArray[i].width && 
            bird.x + bird.width > pipesArray[i].x &&
            ((bird.y <0 +pipesArray[i].topPipeHeight && bird.y + bird.height > 0) || 
                (bird.y>canvas.height - pipesArray[i].bottomPipeHeight && 
                    bird.y + bird.height < canvas.height))){
                //detected
                ctx.drawImage(crash,bird.x,bird.y,50,50);
                state.current = state.over; 
                gameOver.draw();
                scoreBoard.draw();
                score.draw();
                restartButton.draw();
                console.log(state.current);//2
                return true;

            } 
    }
     
}

// ///STATES


// //Get Ready Message
// const getReady={
//     sX:356,
//     sY:91,
//     w:110,
//     h:31,
//     x:canvas.width/2-110,
//     y:80,
//     draw:function() {
//         if(state.current == state.getReady){
//             ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);

//         }
//     }
// }
// const tap={
//     sX:356,
//     sY:122,
//     w:65,
//     h:62,
//     x:canvas.width/2 - 65,
//     y:150,
//     draw:function() {
//         if(state.current == state.getReady){
//         ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);
//         }
//     }
// }
// const startButton={
//     sX:430,
//     sY:166,
//     w:44,
//     h:18 ,
//     x:canvas.width/2 - 55,
//     y:300,
//     draw:function() {
//         if(state.current == state.getReady){
//         ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);
//         }
//     }
// }

// //game Over message
// const gameOver={
//     sX:460,
//     sY:91,
//     w:110,
//     h:31,
//     x:canvas.width/2 - 110,
//     y:80,
//     draw:function() {
//         if(state.current == state.over){
//             ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);
//              startButton.draw(); 
//         }
//         // ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);

//     }
// }

// const scoreBoard={
//     sX:39,
//     sY:315,
//     w:130,
//     h:62,
//     x:canvas.width/2-123,
//     y:150,
//     draw:function() {
//         if(state.current == state.over){
//         ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w*2,this.h*2);
//         // ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y+90,this.w*2,this.h*2);
        
//     }
//     // ctx.drawImage(flappySprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
     
//     }
// }


function draw(){
    console.log(123123);
    getReady.draw();
    tap.draw();
    startButton.draw();
    gameOver.draw();
    scoreBoard.draw();
    score.draw();
    
}



animate();


