
// class BigShark extends Enemy {
//     constructor() {
//       super();
//     //   this.spriteWidth = BlueWhaleSpriteWidth;
//     //   this.spriteHeight = BlueWhaleSpriteHeight;
//       this.x = canvas.width + 500;
//       this.y = Math.random() * (canvas.height / 3);
//       this.radius = 50;
//       this.image.src = "images/enemies-damage/6.png";
//       this.image_flipped.src = "images/enemies-damage/6.png";
//       this.vx = 5;
//       // this.speed = Math.random()*0.1+0.1;
//       this.health = 100;
//       this.maxHealth = this.health;
//     }
    

//     draw = () => {
//       // ctx.fillStyle = "black";
//       // ctx.beginPath();
//       // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//       // ctx.fill();
//       // ctx.closePath();
//       //showing health
//       ctx_world.font = '20px Orbitron';
//       ctx_world.fillText(Math.floor(this.health),this.x,this.y);
//       //ROTATE
//       ctx_world.save(); 
//       ctx_world.translate(this.x, this.y);
//       ctx_world.rotate(this.angle);
//       // drawing player fish
//       if (mouse.x < this.x) {
//           ctx_world.drawImage(this.image,this.x,this.y)
//       } 
//       else if(mouse.x> this.x) {
//         ctx_world.drawImage(this.image,this.x,this.y)

//       }
//       ctx.restore();
//     };
  
  
//   }