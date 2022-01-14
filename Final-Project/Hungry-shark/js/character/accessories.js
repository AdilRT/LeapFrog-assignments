class Accessories {
  constructor(img, type) {
    this.x = RandomNumber(0, can_world.width);
    this.y = 0;
    this.radius = 10;
    this.speed = RandomNumber(1, 4);
    // this.width = 124;
    // this.height = 256;
    this.image = new Image();
    this.image.src = img;
    this.distance;
    this.counted = false;
    this.type = type;
  }

  update() {
    const dx = this.x - player.pos.x;
    const dy = this.y - player.pos.y;
    this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    this.y += this.speed;
  }
  draw() {
    ctx_world.drawImage(
      this.image,
      this.x,
      this.y,
      this.radius * 2.5,
      this.radius * 4
    );
  }
}

pillsArray = [];
// HANDLER
function handleAccessories() {
  if (bossMode == true) {
    if (gameFrame % 500 == 0) {
      pillsArray.push(
        new Accessories("images/gems/green_pill.png", "healType")
      );
      pillsArray.push(new Accessories("images/gems/power.png", "powerType"));
    }
    for (let i = 0; i < pillsArray.length; i++) {
      pillsArray[i].update();
      pillsArray[i].draw();

      if (pillsArray[i].y > can_world.height - pillsArray[i].radius) {
        pillsArray.splice(i, 1);
        i--;
      }
      //   checking collision
      else if (pillsArray[i].distance < pillsArray[i].radius + player.radius) {
        sharkBite.play();
        if (pillsArray[i].counted == false) {
          if (pillsArray[i].type == "healType") {
            player.health = 100;
            healing.play();
          }
          if (pillsArray[i].type == "powerType") {
            player.damage = 8;
            power_up.play();
          }
          pillsArray[i].counted = true;
          pillsArray.splice(i, 1);
        }
        i--;
      }
    }
  }
}
