
function PreLoader(){
    this.loadedImages = 0;
    this.images = [
        'images/bg/waves.png',
        'images/bg/background.jpg',
        'images/bg/logo-1.png',
        'images/bg/background1.png',
        'images/bubbles/bubble_pop_under_water_01.png',
        'images/boss/cave_entrance.svg',
        'images/bg/background2.png',
        'images/gems/green_pill.png',
        'images/gems/power.png',
    ];
  this.audioLoader = new AudioLoader();

    this.loadAll = function(){
        for (let i = 0; i < this.images.length; i++){
            let img = new Image;
            img.src = this.images[i];
            img.onload = () => {
              this.loadedImages++;
              if (this.loadedImages == this.images.length - 1) {
                // console.log('reached pre-loader');
                this.audioLoader.loadAudioFiles();
              }
            }
        }


    }




}





