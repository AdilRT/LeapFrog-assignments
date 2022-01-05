//4:handle bubbles & score
//BUBBLE IMAGE
const bubbleImage = new Image();
bubbleImage.src = 'images/bubbles/bubble_pop_under_water_01.png';

class Bubble {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 100;
      this.radius = 10;
      this.speed = Math.random() * 5 + 1;
      this.distance;
      this.counted = false;
      this.sound = Math.random() <= 0.5 ? "sound1" : "sound2";
    }
  
    update() {
      this.y -= this.speed;
      const dx = this.x - player.x;
      const dy = this.y - player.y;
      this.distance = Math.sqrt(dx ** 2 + dy ** 2);
    }
  
    draw() {
      // ctx.fillStyle = "blue";
      // ctx.beginPath();
      // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      // ctx.fill();
      // ctx.closePath();
      // ctx.stroke();
      ctx.drawImage(bubbleImage,this.x-15,this.y-15,this.radius*2,this.radius*2.5);
    }
    //endofBubbles
  }
  //SOUND
  // const bubblePop1 = document.createElement('audio');
  // bubblePop1.src = 'audio/Plog.ogg';
  
const bubblesArray = [];
  // HANDLER
  function handleBubbles() {
    if (gameFrame % 500 == 0) {
      bubblesArray.push(new Bubble());
      // console.log('bubsarr',bubblesArray.length);
    }
  
    for (let i = 0; i < bubblesArray.length; i++) {    
      bubblesArray[i].update();
      bubblesArray[i].draw();
      
      if (bubblesArray[i].y < 0 - bubblesArray[i].radius) {
          bubblesArray.splice(i, 1);
          i--; //destroying objects
        }
        //to avoid adding scores of the bubbles poped after the top edge//this was causing due to two splice in in one loop
                //checking collision
        else if (bubblesArray[i].distance < bubblesArray[i].radius + player.radius) {
            console.log("collided");
            bubblePop.play();
            if (bubblesArray[i].counted == false) {
              // if(bubblesArray[i].sound == 'sound1'){
              // bubblePop1.play();
              // }
            


              score++;
              bubblesArray[i].counted = true;
              bubblesArray.splice(i, 1);
              i--
            }
          }
        
    }

  }