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
let tick = 0;
let canShoot = false;


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
        tick++;
        if (tick === 300) {
            tick = 0;
            canShoot = true;    

          }
          if (gamePaused) return;
        //recursively call moveRoad hence infinite loop
        requestAnimationFrame(moveRoad);//handles transition isntead of setInterval
        // drawPlayer();
        }
        moveRoad();
        
    }
}


//draw player

function drawPlayer () {
    let player = new Image();
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
    constructor(y){
        this.x = getRandomPosition(possibleObstaclePosition);
        this.y = y;
        this.speed = speed;
    }

    drawObstacle(){
        var obstacle = new Image();
        obstacle.src = 'images/enemy.png';

        obstacle.onload =()=>{
            let moveObstacle = () =>{
                ctx.drawImage(obstacle,this.x,this.y,playerCarWidth,playerCarHeight);
                this.y += speed;
    
            if(this.y>=canvas.height){
                this.y=-800;
                this.x = getRandomPosition(possibleObstaclePosition);
                score+=1;
                if (speed <5100) {
                    speed += 1;
                    this.speed = speed / 2;
                  }
                // _('.score').innerText = score; 
            } 

            
 
            this.detectCollision(obstacle);
        if (isShooting) this.isShot();

            if (gamePaused) return;
            //recursively call moveRoad hence infinite loop
            requestAnimationFrame(moveObstacle);
                
            }
            moveObstacle();
        }
    }
    detectCollision = (obstacle)=>{
        if(this.x === playerCarPositionX && (playerCarPositionY-this.y)<10){
          let audio = new Audio('audio/car-crash.mp3');
          audio.play(); 
 
            gameOver();   
            gamePaused =true;
            tick = 0;
            canShoot = false;
            return;
        }
    }
    isShot = () => {
        if (this.x + 70 === bulletPositionX && bulletPositionY - this.y <= 179) {
          bulletPositionX = playerCarPositionX + 70;
          bulletPositionY = canvas.height - (179 + 30);
          isShooting = false;
    
          this.y = -(canvas.height - this.y) - 400;
          this.x = getRandomPosition(possibleObstaclePosition);
        }
      };


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
      if (event.code === 'Space' && canShoot) {
        tick = 0;
        isShooting = true;
        bulletPositionX = playerCarPositionX + 70;
        bulletPositionY = canvas.height - (179 + 30);
        drawBullet();
        canShoot = false;
        console.log(tick);

      }
      const laneMapValue = laneMap[index];

    playerCarPositionX= laneMapValue;

})

// draw bullets

let isShooting = false;
let bulletPositionX = playerCarPositionX;
let bulletPositionY = canvas.height - playerCarHeight;



function drawBullet() {
    const bullet = new Image();
    bullet.src = 'images/bullet.png';
  
    bullet.onload = () => {
      function Bullet() {
        ctx.drawImage(bullet, bulletPositionX, bulletPositionY);
        if (!isShooting) return;
        
        //if missed target
        if (bulletPositionY === -bullet.height) {
          // bulletPositionX = playerCarPositionX + 70;
          // bulletPositionY = canvas.height - (179 + 30);
          isShooting = false;
          canShoot = false;
        }

        bulletPositionY = bulletPositionY - 5;
  
        requestAnimationFrame(Bullet);
      }
  
      Bullet();
    };
  }




