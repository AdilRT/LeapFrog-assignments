class Carousel {
  constructor(containerName) {
    //grab elements
    this.container = document.querySelector(containerName);
    console.log("asd");
    this.wrapper = document.getElementsByClassName("carousel-image-wrapper");
    // var wrapper = document.getElementsByClassName("carousel-image-wrapper");
    // wrapper.style.left='300px';
    this.width = window
      .getComputedStyle(this.container)
      .getPropertyValue("width");
    this.height = window
      .getComputedStyle(this.container)
      .getPropertyValue("height");

    // // call setup functions
    this.configContainerLayout();
    this.configWrapperLayout();
    this.configNavigationButtons();
    this.configIndicator();
  }

  configContainerLayout() {
    //relative,height,width,
  }
  configWrapperLayout() {
    //width=no_images*image_width,
  }

  configNavigationButtons() {

    function styleButton(btn){
        btn.style.position = "absolute";
        btn.style.top = '50%';
    }

    const handleClick = (event)=>{
        // console.log(event.target.id);
        var wrapper = document.getElementsByClassName("carousel-image-wrapper");
       if(event.target.id==='nextbtn'){
         
       }    

       else{

       }
    }
   
    
    //next button    
    this.nextButton = document.createElement("button");
    this.nextButton.innerHTML = "next";
    this.nextButton.id = 'nextbtn'; 
    styleButton(this.nextButton);
    this.nextButton.style.right = 0;
    this.container.appendChild(this.nextButton);
    
    this.nextButton.addEventListener("click",handleClick);
    
    //prev button    
    this.prevButton = document.createElement("button");
    
    this.prevButton.innerHTML = "prev";
    this.prevButton.id = 'prevbtn'; 
    styleButton(this.prevButton);    
    this.container.appendChild(this.prevButton);

    this.prevButton.addEventListener("click",handleClick);
  }
  configIndicator() {}

  //styling
}

//
const carousel = new Carousel(".carousel-container");
