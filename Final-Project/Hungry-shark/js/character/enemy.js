enemyTypes = ['worm','ghost'];

class Enemy {
  constructor() {
    this.counted = false;
    this.image = new Image();
    this.image_flipped = new Image();

  }
  update = () => {
    this.x-=this.vx; 
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    let theta = Math.atan2(dy, dx);
    this.angle = theta;

    //go directly to player to attack
    if (player.x != this.x) {
      this.x -= dx / 100; //no worriesof + - dx
    }
    if (player.y != this.y) {
      this.y -= dy / 100;
    }
    
  };
  draw = () => {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.drawImage(this.image,0,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.spriteWidth,this.spriteHeight);
  };
}

// const blueWhale = new Image();
// blueWhale.src = 'images/enemies-damage/blue-whale.png';



class Worm extends Enemy{
    constructor(){
        super();
        this.spriteWidth = 771/4;
        this.spriteHeight = 198/2;
        this.x = canvas.width + 500;
        this.y = Math.random()* (canvas.height/3);
        this.radius = 50;
        this.image.src= 'images/enemies-damage/blue-whale.png';
        this.image_flipped.src= 'images/enemies-damage/blue-whale-flipped.png';
        this.vx = 5;
        // this.speed = Math.random()*0.1+0.1;
    }
}

class Ghost extends Enemy{
    constructor(){
        super();
        this.spriteWidth = 304/6;
        this.spriteHeight = 182/3;
        this.x = canvas.width + 500;
        this.y = Math.random()* (canvas.height/3);
        this.radius = 50;
        this.image.src= 'images/enemies-damage/spiky-fish.png';
        this.image_flipped.src= 'images/enemies-damage/spiky-fish.png';
        this.vx = 5;
        // this.speed = Math.random()*0.1+0.1;
    }
}

//HANDLER
const enemyArray = [];
function handleEnemies() {
  if (gameFrame % 100 == 0) {
    const randomEnemy = this.enemyTypes[Math.floor(Math.random()*enemyTypes.length)]
    if(randomEnemy=='worm')enemyArray.push(new Worm());
    // if(randomEnemy=='ghost')enemyArray.push(new Ghost());
    //to show lower sharks on top sort
    enemyArray.sort(function(a,b){
        return a.y-b.y;
    })
    // console.log('eneArr',enemyArray.length);
}

//spawn rarely
if (gameFrame % 500 == 0) {
    const randomEnemy = this.enemyTypes[Math.floor(Math.random()*enemyTypes.length)]
    if(randomEnemy=='ghost')enemyArray.push(new Ghost());
    //to show lower sharks on top sort
    enemyArray.sort(function(a,b){
        return a.y-b.y;
    })
    // console.log('eneArr',enemyArray.length);
}


  for (let i = 0; i < enemyArray.length; i++) {
    enemyArray[i].update();
    enemyArray[i].draw();

    //fix this
    if (enemyArray[i].y < 0 - enemyArray[i].radius) {
      enemyArray.splice(i, 1);
      i--; //destroying objects
    }
    //   checking collision
    else if (enemyArray[i].distance < enemyArray[i].radius + player.radius) {
      console.log("collided");
      if (enemyArray[i].counted == false) {
        // if(enemyArray[i].sound == 'sound1'){
        //     bubblePop1.play();
        // }
        score++;
        enemyArray[i].counted = true;
        enemyArray.splice(i, 1);
        i--;
      }
    }
  }
}

