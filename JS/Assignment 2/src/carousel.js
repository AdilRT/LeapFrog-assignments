class Carousel {
  constructor(containerName) {
    
    //grab elements
    this.container = document.querySelector(containerName);
    this.wrapper = this.container.querySelector(".carousel-image-wrapper");

    this.width = window
      .getComputedStyle(this.container)
      .getPropertyValue("width");
    this.height = window
      .getComputedStyle(this.container)
      .getPropertyValue("height");

    //some more variables
    this.imageWidth = 500;
    this.imageCount = this.wrapper.children.length;
    this.currentIndex = 0;
    this.flag = true;

    //call setup functions
    this.configContainerLayout();
    this.configWrapperLayout();
    this.configNavigationButtons();
    this.configIndicator();
  }

  //FUNCTIONS
  configContainerLayout() {
    //relative,height,width,
    this.container.style.width = this.width;
    this.container.style.height = this.height;
    this.container.style.position = "relative";
  }
  configWrapperLayout() {
    //width=no_images*image_width,
    this.wrapper.style.width = `${
      this.wrapper.children.length * this.imageWidth
    }px`;
    this.wrapper.style.height = this.height;
    this.wrapper.style.position = "relative";
  }

  configNavigationButtons() {
    function styleButton(btn) {
      btn.style.position = "absolute";
      btn.style.top = "50%";
    }
    // const handleClick = (event)=>{
    //     // console.log(event.target.id);
    //     var wrapper = document.getElementsByClassName("carousel-image-wrapper");
    //    if(event.target.id==='nextbtn'){

    //    }

    //    else{

    //    }
    // }

    //next button
    this.nextButton = document.createElement("button");
    this.nextButton.innerHTML = "next";
    this.nextButton.id = "nextbtn";
    styleButton(this.nextButton);
    this.nextButton.style.right = 0;

    ///clicks
    let interval;
    let pix = 0;
    const handleNextFunc= ()=>{
      if(!this.flag) return 
      this.flag=false;

      this.currentIndex++;
      interval = setInterval(() => {
        //if last iamge is reached
        if (this.currentIndex >= this.wrapper.children.length) {
          // this.currentIndex=0;
          pix--;
          this.wrapper.style.left = `-${pix}px`;
          if (pix <= 0) {
            
            clearInterval(interval);
            this.flag=true;
            this.currentIndex=0;
           
          }
        } else {
          pix++;
          this.wrapper.style.left = `-${pix}px`;

          if (pix >= this.currentIndex * this.imageWidth) {
            clearInterval(interval);
            this.flag=true;
            pix = this.currentIndex * this.imageWidth;
          }
        }
        
      },1);
    }

    this.nextButton.addEventListener("click",handleNextFunc);
    
    setInterval(() => handleNextFunc(), 3000);

      this.container.appendChild(this.nextButton);
      

    //

    //prev button
    this.prevButton = document.createElement("button");
    this.prevButton.innerHTML = "prev";
    this.prevButton.id = "prevbtn";
    styleButton(this.prevButton);
    ///clicks
    this.prevButton.addEventListener("click", () => {
      if(!this.flag) return 
      this.flag=false;


      this.currentIndex--;
      interval = setInterval(() => {
        if (this.currentIndex < 0) {
          pix++;
          // this.currentIndex = this.imageCount -1;
          this.wrapper.style.left = `-${pix}px`;
          if(pix>=(this.imageCount-1) * parseInt(this.width) ){
            clearInterval(interval);
            this.flag=true;
            this.currentIndex=this.imageCount-1;
          }
        }
        else{
          pix--;
          this.wrapper.style.left = `-${pix}px`;
  
          if (pix <= this.currentIndex * this.imageWidth) {
            clearInterval(interval);
            this.flag=true;
            pix = this.currentIndex * (this.imageWidth - 1);
          }
        }


      }, 1);
    });

    // };
    this.container.appendChild(this.prevButton);
  }
  configIndicator() {
    this.indicators = document.createElement("div");
    this.indicators.className = "indicators";
    this.container.appendChild(this.indicators);

    // style indicator
    this.indicators.style.position = "absolute";
    this.indicators.style.left = "50%";
    this.indicators.style.bottom = "10px";
    this.indicators.style.display = "inline-block";
    this.indicators.style.transform = "translateX(-50%)";

    for (var i = 0; i < this.imageCount; i++) {
      var dots = document.createElement("span");
      dots.style.display = "block";
      dots.style.width = "15px";
      dots.style.height = "15px";
      dots.style.background = "#fff";
      dots.style.display = "inline-block";
      dots.style.margin = "0 2px";
      dots.style.borderRadius = "15px";
      dots.style.cursor = "pointer";
      dots.className = "dot";
      dots.setAttribute("data-id", i); // dot index value

      this.indicators.appendChild(dots);
    }

    this.container.querySelectorAll(".indicators > span").forEach((item) => {
      item.addEventListener('click', () => {
        if(!this.flag) return 
      this.flag=false;

        this.currentIndex = item.getAttribute('data-id')
        let pt2 = -1*  this.currentIndex * parseInt(this.width);
        let pix = parseInt(this.wrapper.style.left || '0')
        let timer = setInterval(() => {
          if(pix > pt2) pix--
          else pix++

          this.wrapper.style.left = pix + 'px'

          if(pix === parseInt(pt2 || '0')) {
            clearInterval(timer);
            this.flag =true;
          }
        }, 0.1);
      })
    });
  }
}

//creating object
const carousel = new Carousel(".carousel-container");
