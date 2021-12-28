//setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 510;
canvas.height = 600;

let speed = 10

let playerCarWidth = 80; 
let playerCarHeight = 120;
let playerCarPositionX= (canvas.width/2)-(playerCarWidth/2);
let playerCarPositionY= canvas.height - playerCarHeight;

let possibleObstaclePosition = [45,215,385];
// let possibleObstaclePosition = [80,220,300]

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
        let a= ()=>{
            ctx.drawImage(player,playerCarPositionX,playerCarPositionY,playerCarWidth,playerCarHeight);

        }
        // ctx.globalCompositeOperation='destination-over';
        requestAnimationFrame(a);
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
                this.y=-400;
                this.x = getRandomPosition(possibleObstaclePosition);

            } 
            //recursively call moveRoad hence infinite loop
            requestAnimationFrame(moveObstacle);
                
            }
            moveObstacle();
        }
    }
}
drawLane();
drawPlayer();
const obstacle1 = new Obstacle();
obstacle1.drawObstacle();
