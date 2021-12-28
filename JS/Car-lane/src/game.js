//setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 600;
ctx.globalCompositeOperation='source-over';


let speed = 10
let playerCarPositionX= canvas.width/2-25;
let playerCarPositionY= canvas.height - 80;
let playerCarWidth = 50;
let playerCarHeight = 80;

let possibleObstaclePosition = [((canvas.width/3)-(playerCarWidth/2)),((canvas.width/3)*2-(playerCarWidth/2)),((canvas.width/3)*3-(playerCarWidth/2))];


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
        ctx.drawImage(player,playerCarPositionX,playerCarPositionY,playerCarWidth,playerCarHeight);
        // ctx.globalCompositeOperation='destination-over';
    }
}
drawLane();
drawPlayer();

//draw obstacle

class Obstacle{
    constructor(){
        this.x = getRandomPosition(possibleObstaclePosition);
        console.log(this.x);
        this.y = getRandomNumber(-150,-800);
        this.speed = 10;
    }

    drawObstacle(){
        const obstacle = new Image();
        obstacle.src = 'images/player.png';

        obstacle.onload=()=>{
            let y=0;
            let moveObstacle = () =>{
                ctx.drawImage(obstacle,this.x,this.y,50,50);
                y += speed;
                // console.log(y);
    
            if(y>=canvas.height) y=0;
            //recursively call moveRoad hence infinite loop
            requestAnimationFrame(moveObstacle);
                
            }
            moveObstacle();


        }

    }
}

const obstacle1 = new Obstacle();
obstacle1.drawObstacle();