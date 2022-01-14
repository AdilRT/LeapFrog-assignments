class Gems{
    constructor(img,rowName,animation,spriteWidth,spriteHeight){
    this.x = RandomNumber(0,can_world.width);
    this.y = can_world.height-400;
    this.distance;
    this.counted = false;
    this.image = new Image();
    this.image.src = img;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.radius = 50
    this.rowName = rowName; 
    this.animation = animation;
    }
    update(){
        const dx = this.x - player.pos.x;
        const dy = this.y - player.pos.y;
        this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    }
    draw = () => {
      drawCharacter(this.image, this.rowName,this.animation,this.spriteWidth,this.spriteHeight,this.x-50,this.y-100,this.spriteWidth*1.5,this.spriteHeight,10);
    }
}


GemsArray = [];
// HANDLER
function handleGems(){
    if (gameFrame % 1000 == 0) {
      GemsArray.push(new Gems("images/gems/gems.png",'blue',GemsAnimation,GemsSpriteWidth,GemsSpriteHeight));
      GemsArray.push(new Gems("images/gems/shells-1.png",'one',Shells1Animation,Shells1SpriteWidth,Shells1SpriteHeight));
    }
    for (let i = 0; i < GemsArray.length; i++) {
        GemsArray[i].update();
        GemsArray[i].draw();

      //   checking collision
      if (GemsArray[i].distance < GemsArray[i].radius + player.radius) {
        sharkBite.play();
        if (GemsArray[i].counted == false) {
        score+=100;
          GemsArray[i].counted = true;
          GemsArray.splice(i, 1);
      }
      i--;
        }
    }

}
