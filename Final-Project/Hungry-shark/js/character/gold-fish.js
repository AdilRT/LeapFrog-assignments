class GoldFish extends Food{
constructor(){
    super();
    this.x =toss() == true ?RandomNumber(-can_world.width, 0 ):RandomNumber(can_world.width,can_world.width + 100);
    this.y = RandomNumber(30,can_world.width/2);
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
    this.angle = 10;
    // this.Xdifference = Xdifference;
    // this.Ydifference = Ydifference;
}

update(){
    super.update();
    this.x-= this.vx;
    this.y+= Math.sin(this.angle);
    this.angle+=0.2;
  

}

draw = () => {
    ctx_world.fillStyle = "black";
    ctx_world.beginPath();
    ctx_world.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx_world.fill();
    ctx_world.closePath();

    //SHOWING HEALTH
    ctx_world.font = '20px Orbitron';
    ctx_world.fillStyle = "gold";
    ctx_world.fillText(Math.floor(this.health),this.x,this.y);  
    //ROTATE
    ctx_world.save(); 
    ctx_world.translate(this.x, this.y);
    // drawing player fish
    // if (mouse.x < this.x) {
    // drawCharacter(this.image, "left",GoldFishAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth/2,this.spriteHeight/2,10);
    // } 
    // else if(mouse.x> this.x) {
    // drawCharacter(this.image_flipped, "left",BlueWhaleAnimation,this.spriteWidth,this.spriteHeight,-65,-60,this.spriteWidth/2,this.spriteHeight/2,10);
    // }
    drawCharacter(this.image, "left",GoldFishAnimation,this.spriteWidth,this.spriteHeight,-25,-25,this.spriteWidth/2,this.spriteHeight/2,10);
    
    ctx_world.restore();
  };


}