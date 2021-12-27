ants = [];

function initialize(antsCount){
  var img = new Image();
  img.src = 'images/ant2.png';
    
    for(let i =0; i<antsCount;i++){
        let radius = RandomNumber(5, 10);
        let x = RandomNumber(radius, canvas.width - radius);
        let y = RandomNumber(radius, canvas.height - radius);
        let dx = RandomNumber(-2, 0 );
        let dy = RandomNumber(-2, 0);

        // let color = RandomColor() ;

    // Detect collision and modify center
    // if collision is detected while spawning
    if (i !== 0) {
        for (let j = 0; j < i; j++) {
          //getting distance between 2 points
          let d = getDistance(x, y, ants[j].x, ants[j].y);
          //since getdistance is squared// if(collision ==true)
          if (d <= (radius + ants[j].radius) ** 2) {
            x = RandomNumber(radius, canvas.width - radius);
            y = RandomNumber(radius, canvas.height - radius);
            j = -1;
          }
        }
      }

    let ant = new Ant(x, y,radius,dx, dy,img);
    ants.push(ant);
    }
//end:init
}   
// ANIMATION LOOP 
function animate() {
    requestAnimationFrame(animate); //instead of setInterval
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    ants.forEach((ant) => ant.move());
  }

  //calls
initialize(10);
animate();