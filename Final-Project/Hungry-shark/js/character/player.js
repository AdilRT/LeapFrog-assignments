//3:create Player
class Player {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = 60;
    this.angle = 0; //use it rotate the character//always face where you move
    //coords of currently displayed frame of spritesheet
    this.frameX = 0;
    this.frameY = 0;
    this.frame = 0;
    this.collision = false;
    // this.spriteWidth = 194; //633/10;//spritesheet/noofimage in 1 row
    // this.spriteHeight = 95; //183/6
    this.health = PLAYER_HEALTH;
    this.maxHealth = this.health;
    this.damage = 1;

  }
  //update Player position ot the cursor
  update = () => {
    const dx = this.x - mouse.x; //diff between pointer and player
    const dy = this.y - mouse.y;
    let theta = Math.atan2(dy, dx);
    this.angle = theta;
    if (mouse.x != this.x) {
      this.x -= dx / 30; //no worriesof + - dx
    }
    if (mouse.y != this.y) {
      this.y -= dy / 30;
      handlePath();
    }
    
  };
  /**
   * DRAW
   */
  draw = () => {
    //draw player path
    // if (mouse.click) {
    //   ctx.lineWidth = 0.2;
    //   ctx.beginPath();
    //   ctx.moveTo(this.x, this.y);
    //   ctx.lineTo(mouse.x, mouse.y);
    //   ctx.stroke();
    // }

    //DRAW PLAYER HITBOX
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.closePath();


    //ROTATING the Shark
    ctx.save(); //saing current canvas settings
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    // drawing player fish
    if (mouse.x <= this.x && !this.collision) {
      drawCharacter(
        playerImage,
        "left",
        spriteAnimation,
        PlayerspriteWidth,
        PlayerspriteHeight,
        -60,
        -50,
        PlayerspriteWidth,
        PlayerspriteHeight,
        10
      );
    } else if (mouse.x > this.x && !this.collision) {
      drawCharacter(
        playerImageFlipped,
        "right-to-left",
        spriteAnimation,
        PlayerspriteWidth,
        PlayerspriteHeight,
        -60,
        -50,
        PlayerspriteWidth,
        PlayerspriteHeight,
        10
      );
    } else if (mouse.x <= this.x && this.collision) {
      drawCharacter(
        playerImageBite,
        "left-bite",
        SharkBiteAnimation,
        SharkBiteSpriteWidth,
        SharkBiteSpriteHeight,
        -60,
        -50,
        SharkBiteSpriteWidth,
        SharkBiteSpriteHeight,
        10
      );
      // this.collision = false;
    } else if (mouse.x > this.x && this.collision) {
      drawCharacter(
        playerImageBiteFlipped,
        "right-bite",
        SharkBiteAnimation,
        SharkBiteSpriteWidth,
        SharkBiteSpriteHeight,
        -60,
        -50,
        SharkBiteSpriteWidth,
        SharkBiteSpriteHeight,
        10
      );
      // this.collision = false;
    }

    //restores all translate nad rotate calls back to the state when save was called
    ctx.restore(); //this ways only player will get translated and rotated and other elelments remains the same
  };

  //end of Player class
}
//drawCharacter
function drawCharacter(
  img,
  playerState,
  animation,
  spriteWidth,
  spriteHeight,
  imgPosX,
  imgPosY,
  imgWidth,
  imgHeight,
  staggerFrame
) {
  let position =
    Math.floor(gameFrame / staggerFrame) % animation[playerState].loc.length;
  let frameX = position * spriteWidth;
  let frameY = animation[playerState].loc[position].y;
  ctx.drawImage(
    img,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    imgPosX,
    imgPosY,
    imgWidth,
    imgHeight
  );
}

//playerHandler
function handlePlayer() {
  if(player.health<=0 ) {
    gameOver=true;
    overPage();
  }
  player.update();
  player.draw();
  checkScore();
  if(bossMode == false){
    if(RectCircleCollision()){
      parallex = true;
      bossMode = true;
      bossPage();
      console.log("after collision",parallex);
    }
  }
  
}

const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false,
};

// EVENT LISTENERS for player movement
canvas.addEventListener("mousedown", (event) => {
  mouse.click = true;
  mouse.x = event.x - canvasPosition.left;
  mouse.y = event.y - canvasPosition.top;
});
canvas.addEventListener("mouseup", (event) => {
  mouse.click = false; //false bhayo hane chai line draw hudaina
});

//creating IMAGE
// const playerLeft = new Image();
// playerLeft.src = "images/player/player-left.png";

// const playerRight = new Image();
// playerRight.src = "images/player/player-left-flipped.png";

// CREATING OBJECT
const player = new Player();
