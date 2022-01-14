//3:create Player
class Player {
  constructor() {
    /* Position of sprite in world */
    this.pos = {
      x: can_world.width / 2,
      y: can_world.height / 2,
    };
    this.pos2 = {
      /* Sprite's position in player canvas */ x: canvas.width / 2,
      y: canvas.height / 2,
    };
    this.radius = 60;
    this.angle = 0; //use it rotate the character//always face where you move
    //coords of currently displayed frame of spritesheet
    this.frameX = 0;
    this.frameY = 0;
    this.frame = 0;
    this.collision = false;

    this.health = PLAYER_HEALTH;
    this.damage = 5;
  }

  update = () => {
    const dx = this.pos.x - mouse.x;
    const dy = this.pos.y - mouse.y;
    let theta = Math.atan2(dy, dx);
    this.angle = theta;
    const ppos = this.pos;
    const ppos2 = this.pos2;
    if (mouse.x != ppos.x || mouse.y != ppos.y) {
      if (mouse.x != ppos.x) {
        const dx = this.pos.x - mouse.x;
        this.pos.x -= dx / 30;
        if (gameOver == false) underwater.play();
        if (this.pos.x > can_world.width - this.radius) {
          this.pos.x = can_world.width - this.radius;
        }
      }
      if (mouse.y != ppos.y) {
        const dy = this.pos.y - mouse.y;
        this.pos.y -= dy / 30;
        if (this.pos.y > can_world.height - this.radius) {
          this.pos.y = can_world.height - this.radius;
        }
      }
    }
  };
  /**
   * DRAW
   */

  draw = () => {
    if (this.pos.x < 320) {
      this.pos2.x = this.pos.x;
    } else if (this.pos.x > can_world.width - 320) {
      this.pos2.x = 640 - (can_world.width - this.pos.x);
    } else {
      this.pos2.x = canvas.width / 2;
    }

    if (this.pos.y < 320) {
      this.pos2.y = this.pos.y;
    } else if (this.pos.y > can_world.height - 320) {
      this.pos2.y = 640 - (can_world.height - this.pos.y);
    } else {
      this.pos2.y = canvas.height / 2;
    }

    //DRAW PLAYER HITBOX
    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    ); /* Clear the whole player canvas (a canvas used to draw the character only */

    //ROTATING the Shark
    ctx.save(); //saing current canvas settings
    ctx.translate(this.pos2.x, this.pos2.y);
    ctx.rotate(this.angle);

    // drawing player fish
    if (mouse.x <= this.pos.x && !this.collision) {
      drawPlayer(
        playerImage,
        "left",
        spriteAnimation,
        PlayerspriteWidth,
        PlayerspriteHeight,
        -70,
        -40,
        PlayerspriteWidth,
        PlayerspriteHeight,
        10
      );
    } else if (mouse.x > this.pos.x && !this.collision) {
      drawPlayer(
        playerImageFlipped,
        "right-to-left",
        spriteAnimation,
        PlayerspriteWidth,
        PlayerspriteHeight,
        -70,
        -40,
        PlayerspriteWidth,
        PlayerspriteHeight,
        10
      );
    } else if (mouse.x <= this.pos.x && this.collision) {
      drawPlayer(
        playerImageBite,
        "left-bite",
        SharkBiteAnimation,
        SharkBiteSpriteWidth,
        SharkBiteSpriteHeight,
        -70,
        -40,
        SharkBiteSpriteWidth,
        SharkBiteSpriteHeight,
        10
      );

      setTimeout(() => {
        this.collision = false;
      }, 3000);
    } else if (mouse.x > this.pos.x && this.collision) {
      drawPlayer(
        playerImageBiteFlipped,
        "right-bite",
        SharkBiteAnimation,
        SharkBiteSpriteWidth,
        SharkBiteSpriteHeight,
        -70,
        -40,
        SharkBiteSpriteWidth,
        SharkBiteSpriteHeight,
        10
      );
      setTimeout(() => {
        this.collision = false;
      }, 2000);
    }

    //restores all translate nad rotate calls back to the state when save was called
    ctx.restore(); //this ways only player will get translated and rotated and other elelments remains the same
  };

  //end of Player class
}
//drawPlayer
function drawPlayer(
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
  player.update();
  player.draw();
  checkScore();
  if (player.health <= 0) {
    underwater.pause();
    deadSound.play();
    gameOver = true;
    overPage();
  }
}

// CREATING OBJECT
const player = new Player();

const mouse = {
  x: 1920,
  y: 1920,
  click: false,
};

// EVENT LISTENERS for player movement
canvas.addEventListener("mousemove", (e) => {
  const ppos = player.pos;
  const ppos2 = player.pos2;
  let dx = 0,
    dy = 0;
  let newX = ppos.x;
  let newY = ppos.y;
  if (Math.abs(e.x - ppos2.x) > 16 || Math.abs(e.y - ppos2.y) > 16) {
    if (Math.abs(e.x - ppos2.x) > 16) {
      dx = e.x - ppos2.x;
      newX = ppos.x - -dx;
      newX =
        newX < 0
          ? 0
          : newX > can_world.width - 16
          ? can_world.width - 16
          : newX;
    }
    if (Math.abs(e.y - ppos2.y) > 16) {
      dy = e.y - ppos2.y;
      newY = ppos.y - -dy;
      newY =
        newY < 0
          ? 0
          : newY > can_world.height - 16
          ? can_world.height - 16
          : newY;
    }
    mouse.click = true;
    mouse.x = newX;
    mouse.y = newY;
  }
});

window.addEventListener("resize", function () {
  canvasPosition = can_world.getBoundingClientRect();
});
