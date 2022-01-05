
function AudioLoader(){
    this.loadedAudios = 0;
    this.audios = [

      ];

      this.loadAudioFiles = function (start) {
        let audio = new Audio();
        for (var i = 0; i < this.audios.length; i++) {
          audio.src = this.audios[i];
          audio.addEventListener("canplay", () => {
            this.loadedAudios++;

          });
        }
      }
}