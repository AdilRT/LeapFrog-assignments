//setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 510;
canvas.height = 600;

//game constants
let speed = 10
let playerCarWidth = 80; 
let playerCarHeight = 120;
let playerCarPositionX= (canvas.width/2)-(playerCarWidth/2);
let playerCarPositionY= canvas.height - playerCarHeight;
let possibleObstaclePosition = [45,215,385];
let score =0;
let gamePaused = true;


//draw lane
function drawLane(){
    const road = new Image();
    road.src = 'images/road.png';

    road.onload = () => { 
        let y=0;
        let moveRoad = ()=>{
            ctx.drawImage(road,0,y-canvas.height,canvas.width,canvas.height*2);
            y += speed;
        if(y>=canvas.height) y=0;
        //recursively call moveRoad hence infinite loop
        requestAnimationFrame(moveRoad);//handles transition isntead of setInterval
        drawPlayer();
        }
        moveRoad();
        
    }
}


//draw player

function drawPlayer () {
    const player = new Image();
    player.src = 'images/player.png';

    player.onload=()=>{
        let drawCar= ()=>{
            ctx.drawImage(player,playerCarPositionX,playerCarPositionY,playerCarWidth,playerCarHeight);
            if (gamePaused) return;
            requestAnimationFrame(drawCar);
            
        }
        drawCar();
        // ctx.globalCompositeOperation='destination-over';
    }
}


//draw obstacle

class Obstacle{
    constructor(){
        this.x = getRandomPosition(possibleObstaclePosition);
        this.y = 0;
        this.speed = 4;
    }

    drawObstacle(){
        const obstacle = new Image();
        obstacle.src = 'images/player.png';

        obstacle.onload =()=>{
            let moveObstacle = () =>{
                ctx.drawImage(obstacle,this.x,this.y,playerCarWidth,playerCarHeight);
                this.y += 10;
                // console.log(y);
    
            if(this.y>=canvas.height){
                this.y=-800;
                this.x = getRandomPosition(possibleObstaclePosition);
                score+=1;
                // _('.score').innerText = score;

            } 
            
            this.detectCollision();
            if (gamePaused) return;
            //recursively call moveRoad hence infinite loop
            requestAnimationFrame(moveObstacle);
                
            }
            moveObstacle();
        }
    }
    detectCollision = ()=>{
        if(this.x === playerCarPositionX && (playerCarPositionY-this.y)<10){
            gameOver();   
            gamePaused =true;
            console.log('boom');
        }
    }


}

const laneMap = {
    0: 45,
    1:215,
    2:385
};
const laneCount =3;
let index = 1;

document.addEventListener("keydown",(event)=>{
    if (event.code === "ArrowLeft") {
        index--;
        if (index < 0) index = 0;
      } else if (event.code === "ArrowRight") {
        index++;
        if (index > laneCount - 1) index = laneCount - 1;
      }
      const laneMapValue = laneMap[index];

    playerCarPositionX= laneMapValue;

})
//score
const displayScore=(score)=>{
    ctx.font = "30px Arial";
    ctx.fillText(score, 10, 50);
    // requestAnimationFrame(displayScore)
    // ctx.globalCompositeOperation='source-over';
}


//gameover:state management



