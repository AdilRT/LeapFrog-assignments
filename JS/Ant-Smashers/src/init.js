ants = [];

function initialize(antsCount) {
  for (let i = 0; i < antsCount; i++) {
    let radius = RandomNumber(0, 20);
    let x = RandomNumber(radius, canvas.width - radius);
    let y = RandomNumber(radius, canvas.height - radius);
    let dx = RandomNumber(0, 2);
    let dy = RandomNumber(0, 2);

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
    //ant image
    let img = new Image();
    img.src = "images/ant2.png";
    let ant = new Ant(x, y, dx, dy, img, radius);
    ants.push(ant);

    //
    const destroy = (ant) => {
      const updatedAnts = ants.filter((items, index) => ant !== index);
      ants = updatedAnts;
    };

    canvas.addEventListener("click", (event) => {
      let x = event.x;
      let y = event.y;

      x -= canvas.offsetLeft;
      y -= canvas.offsetTop;

      for (let i = 0; i < ants.length; i++) {
        if (getDistance(x, y, ants[i].x, ants[i].y) <= ants[i].radius ** 2) {
          let audio = new Audio('audio/bruh.mp3');
          audio.play();
          destroy(i);

        }
      }
    });
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
initialize(35);
animate();
