function RandomNumber(min, max) {
    while (true) {
      let randomNum = Math.floor(Math.random() * (max - min) + min);
      if (randomNum !== 0) return randomNum;
    }
  }

  
function getDistance(x1, y1, x2, y2) {
    return (x2 - x1) ** 2 + (y2 - y1) ** 2;
  }

  function RandomColor(){

    colors=[
        'red','blue','black','purple','cyan','pink','orange'
    ];
      return colors[RandomNumber(0,colors.length-1)];
  }