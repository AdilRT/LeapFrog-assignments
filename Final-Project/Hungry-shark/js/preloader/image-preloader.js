
function PreLoader(){
    this.loadedImages = 0;
    this.images = [
        'images/bg/waves.png',
        'images/bubbles/bubble_pop_under_water_01',
    ];
  this.audioLoader = new AudioLoader();

    this.loadAll = function(){
        for (let i = 0; i < this.images.length; i++){
            let img = new Image;
            img.src = this.images[i];
            img.onload = () => {
              this.loadedImages++;
              if (this.loadedImages == this.images.length - 1) {
                this.audioLoader.loadAudioFiles();
              }
            }
        }


    }




}





