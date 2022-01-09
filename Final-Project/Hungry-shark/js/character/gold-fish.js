class GoldFish extends Food{
constructor(Xdifference,Ydifference){
    super();
    this.spriteWidth = GoldFishSpriteWidth;
    this.spriteHeight = GoldFishSpriteHeight;
    // this.x = canvas.width + 500;
    // this.x =toss() == true?RandomNumber(-canvas.width, 0 ):RandomNumber(canvas.width,canvas.width + 100);
    // this.y = Math.random() * (canvas.height / 3);
    this.radius = 20;
    this.image.src = "images/enemies-no-damage/gold-fish-left.png";
    this.image_flipped.src = "images/enemies-no-damage/gold-fish-left-flipped.png";
    this.vx = 5;
    // this.speed = Math.random()*0.1+0.1;
    this.health = 2;
    this.maxHealth = this.health;
    this.angle = 0;
    this.Xdifference = Xdifference;
    this.Ydifference = Ydifference;
}

update = () =>{
  // 1: 
    this.x-= this.vx;
    this.y+= Math.sin(this.angle);
    this.angle+=0.2;
  

}

draw = () => {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    //SHOWING HEALTH
    ctx.font = '20px Orbitron';
    ctx.fillStyle = "gold";
    ctx.fillText(Math.floor(this.health),this.x,this.y);  
    //ROTATE
    ctx.save(); 
    ctx.translate(this.x, this.y);
    // drawing player fish
    // if (mouse.x < this.x) {
    // drawCharacter(this.image, "left",GoldFishAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth/2,this.spriteHeight/2,10);
    // } 
    // else if(mouse.x> this.x) {
    // drawCharacter(this.image_flipped, "left",BlueWhaleAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth/2,this.spriteHeight/2,10);
    // }
    drawCharacter(this.image, "left",GoldFishAnimation,this.spriteWidth,this.spriteHeight,-25,-25,this.spriteWidth/2,this.spriteHeight/2,10);
    
    ctx.restore();
  };


}