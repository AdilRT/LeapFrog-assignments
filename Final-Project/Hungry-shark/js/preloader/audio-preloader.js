
function AudioLoader(){
    this.loadedAudios = 0;
    this.audios = [
      'audio/player/shark-bite.mp3',
      'audio/bubbles/bubble-pop.wav',
      'audio/bg/underwater.mp3',

      ];

      this.loadAudioFiles = function (start) {
        // console.log('audio loder reached');
        let audio = new Audio();
        for (var i = 0; i < this.audios.length; i++) {
          audio.src = this.audios[i];
          audio.addEventListener("canplay", () => {
            this.loadedAudios++;
            if (this.loadedAudios == this.audios.length) {
              // console.log('all audio loaded');
              // console.log('go to startpage');
              startPage();
            }
          });
        }
      }
}