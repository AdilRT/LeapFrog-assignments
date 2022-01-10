
class Accessories{
    constructor(img,type){
        this.x = RandomNumber(0,canvas.width);
        this.y=0;
        this.radius = 10;
        this.speed = RandomNumber(1,4);
        // this.width = 124;
        // this.height = 256;
        this.image = new Image();
        this.image.src = img;
        this.distance;
        this.counted = false;
        this.type = type;
    }

    update(){
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx ** 2 + dy ** 2);
        this.y+=this.speed;
    }
    draw(){
      ctx.drawImage(this.image,this.x,this.y,this.radius*2.5,this.radius*4);

    }

}

pillsArray = [];
// HANDLER
function handleAccessories(){
  if(bossMode == true){
    if (gameFrame % 500 == 0) {
      pillsArray.push(new Accessories("images/gems/green_pill.png",'healType'));
      pillsArray.push(new Accessories("images/gems/power.png",'powerType'));
    }
    for (let i = 0; i < pillsArray.length; i++) {
        pillsArray[i].update();
        pillsArray[i].draw();
  
  
      //fix this
      if (pillsArray[i].y>canvas.height - pillsArray[i].radius) {
        pillsArray.splice(i, 1);
        i--; //destroying objects
      }
      //   checking collision
      else if (pillsArray[i].distance < pillsArray[i].radius + player.radius) {
      //   player.collision = true;
        // console.log('collided');
        sharkBite.play();
        if (pillsArray[i].counted == false) {
            if(pillsArray[i].type == 'healType') player.health=200;
            if(pillsArray[i].type == 'powerType') player.damage=2;
          pillsArray[i].counted = true;
          pillsArray.splice(i, 1);
      }
      i--;
        }
    }
  }

}

