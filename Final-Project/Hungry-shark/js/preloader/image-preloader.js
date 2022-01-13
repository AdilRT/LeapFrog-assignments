
function PreLoader(){
    this.loadedImages = 0;
    this.images = [
      // backgrounds
        'images/bg/waves.png',
        'images/bg/background.jpg',
        'images/bg/logo-1.png',
        'images/bg/background1.png',
        'images/boss/cave_entrance.svg',
        'images/bg/background2.png',
        // accessories
        'images/gems/green_pill.png',
        'images/gems/power.png',
        'images/bubbles/bubble_pop_under_water_01.png',
        // boss modes
        'images/boss/fire.png',
        // player
        'images/blood-ss.png',
        // characters
        "images/enemies-damage/blue-shark.png",
        "images/enemies-damage/blue-shark-flipped.png",
        "images/enemies-damage/blue-whale.png",
        "images/enemies-damage/blue-whale-flipped.png",
        "images/boss/sea-dragon-left.png",
        "images/boss/sea-dragon-right.png",
        "images/enemies-damage/brown-fish.png",
        "images/enemies-damage/brown-fish-flipped.png",
        "images/enemies-damage/crab.png",
        "images/enemies-damage/crab.png",
        // food
        "images/enemies-no-damage/red_fish_right.png",
        "images/enemies-no-damage/blue-swim.png",
        "images/enemies-no-damage/pink-swim.png",
        "images/enemies-no-damage/yellow-swim.png",
        "images/gems/gems.png",
        "images/gems/shells-1.png",
        "images/enemies-no-damage/gold-fish-left.png",
        "images/enemies-no-damage/gold-fish-left-flipped.png",
        "images/enemies-damage/green-shark.png",
        "images/enemies-damage/green-shark-flipped.png",
        "images/enemies-damage/jelly-fish.png",
        "images/enemies-damage/jelly-fish-flipped.png",
        "images/enemies-damage/piranha-left.png",
        "images/enemies-damage/piranha-left-flipped.png",
        "images/enemies-damage/piranha-bite.png",
        "images/enemies-damage/piranha-turn-around.png",
        "images/enemies-damage/piranha-hurt.png",
        "images/enemies-damage/spiky-fish.png",
        "images/enemies-damage/spiky-fish.png",
        'images/player/shark-ss-transparent.png',
        'images/player/flipped.png',
        'images/player/shark-biting.png',
        'images/player/shark-biting-flipped.png',

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





