function getRandomPosition(arr) {
    let randomIndex = Math.floor(arr.length * Math.random());
    return arr[randomIndex];
  }
  function getRandomNumber(min, max) {
    while (true) {
      let randomNum = Math.floor(Math.random() * (max - min) + min);
      if (randomNum !== 0) return randomNum;
    }
  }

  function _(selector) {
    return document.querySelector(selector);
  }

  function __(selector) {
    return document.querySelectorAll(selector);
  }