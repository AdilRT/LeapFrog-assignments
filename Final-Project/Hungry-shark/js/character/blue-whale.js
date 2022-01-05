class BlueWhale extends Enemy {
    constructor() {
      super();
      this.spriteWidth = 771 / 4;
      this.spriteHeight = 198 / 2;
      this.x = canvas.width + 500;
      this.y = Math.random() * (canvas.height / 3);
      this.radius = 50;
      this.image.src = "images/enemies-damage/blue-whale.png";
      this.image_flipped.src = "images/enemies-damage/blue-whale-flipped.png";
      // this.vx = 5;
      // this.speed = Math.random()*0.1+0.1;
    }
    draw = () => {
      // ctx.fillStyle = "black";
      // ctx.beginPath();
      // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      // ctx.fill();
      // ctx.closePath();
      //ROTATE
      ctx.save(); 
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      // drawing player fish
      if (mouse.x < this.x) {

      decidePlayerState(this.image, "left",BlueWhaleAnimation,this.spriteWidth,this.spriteHeight,-65,-60);

      } 
      else if(mouse.x> this.x) {

      decidePlayerState(this.image_flipped, "right",BlueWhaleAnimation,this.spriteWidth,this.spriteHeight,-65,-60);

      }
      ctx.restore();
    };
  
  
  }