class Carousel {
    constructor(containerSelector, input) {

       
        this.containerName = containerSelector;
        this.container = document.querySelector(containerSelector);
        this.wrapper = this.container.querySelector('.carousel-image-wrapper');
        this.width = window.getComputedStyle(this.container).getPropertyValue('width');
        this.height = window.getComputedStyle(this.container).getPropertyValue('height');
        this.transitionTime = input.transitionTime;
        this.delayTime = input.delayTime;
    
        this.index = 0;
        this.images = this.wrapper.getElementsByTagName('img');
        this.imageCount = this.wrapper.children.length;
        this.rightButton;
        this.leftButton;
        this.radios;
        this.radio = [];
        this.configContainerLayout();
        this.configWrapperLayout();
        this.configNavigationButtons();
        this.configIndicator();
        this.styleIndicator();
        this.configAutoSlide();

    }

    configContainerLayout = () => {
        this.container.style.overflow = 'hidden';
        this.container.style.position = 'relative';
    }

    configWrapperLayout = () => {
        this.wrapper.style.minWidth = "5000vw"; 
        this.wrapper.style.height = this.height;
        this.wrapper.style.position = 'absolute';
        for (let i=0; i<this.images.length; i++) {
            this.images[i].style.width = this.width;
            this.images[i].style.height = this.height;
            this.images[i].style.float = 'left';
        }
    }

    configNavigationButtons = () => {
        const styleButton = (button) => {
            button.style.position = 'absolute';
            button.style.top = parseFloat(this.height)/2 - 32 + 'px'; 
            button.style.fontSize = '50px';
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.backgroundColor = 'rgba(0,0,0,0)'; 
            button.addEventListener('mouseover', () => {
                button.style.cursor = 'pointer';
            });
            button.addEventListener('mouseout', () => {
                button.style.cursor = 'none';
            });
        }

        // right button
        this.rightButton = document.createElement('button');
        this.rightButton.innerHTML = '>>';
        this.rightButton.style.right = 1 + 'px';
        this.rightButton.addEventListener('click', () => this.next());
        styleButton(this.rightButton);
        this.container.appendChild(this.rightButton);

        // left button
        this.leftButton = document.createElement('button');
        this.leftButton.innerHTML = '<<';
        this.leftButton.style.left =1 + 'px';
        this.leftButton.addEventListener('click', () => this.previous());
        styleButton(this.leftButton);
        this.container.appendChild(this.leftButton);
    }

    configAutoSlide = () => {
        this.autoSlideInterval = setInterval(() => {
            if (this.index < this.images.length - 1)
                this.index++;
            else
                this.index = 0;
            this.move();
        }, (this.delayTime + this.transitionTime) * 1000);
    }

    move = () => {
        this.wrapper.animate([{ left: - this.index * parseFloat(this.width) + 'px'}], 
        { duration: this.transitionTime*1000,iterations: 1,fill: 'forwards'});
        this.radio[this.index].checked = true;

        //reset 
        clearInterval(this.autoSlideInterval);
        this.configAutoSlide();
    }
    next = function() {if (this.index < this.images.length - 1) {this.index++;
           this.move();
       }
       else {
           this.index = 0;
           this.move();
       }
   }
    previous = function(){if (this.index > 0) {
        this.index--;
        this.move();
    }
    else {
        this.index = this.images.length-1;
        this.move();
    }
}

    styleIndicator = function() {
        this.radios.style.position = 'absolute';
        this.radios.style.left = (parseFloat(this.width)/2) - (this.images.length*15/2) + 'px'; 
        this.radios.style.bottom = '0px';
    }

    configIndicator = function() {
        this.radios = document.createElement('div');
        this.styleIndicator();

        for (let i=0; i<this.images.length; i++) {
            const radioBtn = document.createElement('input');
            radioBtn.type = 'radio';
            radioBtn.name = 'radio' + this.containerName;
            radioBtn.style.margin = '0px 3px';
            radioBtn.value = i; 
            radioBtn.addEventListener('mouseover', () => radioBtn.style.cursor = 'pointer');

            radioBtn.addEventListener('click', () => {
                let prevIndex = this.index;
                this.index = parseInt(radioBtn.value);

                if (prevIndex == this.index)
                    return; 
                else {
                    this.move();
                }
            });
            this.radio.push(radioBtn);
            this.radios.appendChild(radioBtn);        }
        this.radio[0].checked = true;
        this.container.appendChild(this.radios);
    } 
    

}

const carousel1 = new Carousel('.container-1', {transitionTime: 0.8, delayTime: 5});
const carousel2 = new Carousel('.container-2', {transitionTime: 2, delayTime: 5});