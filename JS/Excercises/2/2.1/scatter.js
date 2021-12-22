var points = [
  { x: 10, y: 20 },
  { x: 40, y: 40 },
  { x: 60, y: 20 },
  { x: 180, y: 50 },
  { x: 290, y: 70 },
  { x: 120, y: 90 },
  { x: 140, y: 120 },
  { x: 180, y: 90 },
  { x: 210, y: 190 },
  { x: 250, y: 160 },
  { x: 250, y: 130 },
  { x: 240, y: 205 },
  { x: 300, y: 195 },
  { x: 280, y: 90 },
];



const container = document.getElementById("container");
container.style.width = "400px";
container.style.height = "300px";
container.style.border = "2px solid green";
container.style.position = "relative";



const plot = (x, y) => {
  const point = document.createElement("div");
  point.style.width = "15px";
  point.style.height = "15px";
  point.style.position = "absolute";
  point.style.top = y + "px";
  point.style.left = x + "px";
  point.style.background = "#47a";
  point.style.borderRadius="20px";
  point.style.background = "blue";

  const handleClick = (event)=>{
    if(event.target.style.background = "blue"){
      event.target.style.background = "red";
    }  
  };
  


  const handleDBClick = (event)=>{
      container.removeChild(event.target);
  }


  point.addEventListener("click",handleClick);

  point.addEventListener("dblclick",handleDBClick);


  container.appendChild(point);

};

for(i=0;i<=points.length-1;i++){
    plot(points[i].x,points[i].y);
}



