function AudioLoader() {
  this.loadedAudios = 0;
  this.audios = [
    "audio/player/bite2.wav",
    "audio/bubbles/bubble-pop.wav",
    "audio/bg/underwater.mp3",
    "audio/player/death.wav",
    "audio/player/healing.wav",
    "audio/player/power-up.wav",
    "audio/shark/shark.wav",
    "audio/shark/piranha.wav",
    "audio/bossMode/bossMode.wav",
  ];

  this.loadAudioFiles = function (start) {
    let audio = new Audio();
    for (var i = 0; i < this.audios.length; i++) {
      audio.src = this.audios[i];
      audio.addEventListener("canplay", () => {
        this.loadedAudios++;
        if (this.loadedAudios == this.audios.length) {
          startPage();
        }
      });
    }
  };
}
