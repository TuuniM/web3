const createCheatCode = (secretWord) => {
  const keypress = new Array(secretWord.lenght);
  document.addEventListener('keypress', event => {
    keyPresses.shift();
    keyPresses.push(event.key);
    if (keyPresses.join('').toLowerCase() === secretWord) {
      alert("correct word: " + secretWord);
    }
  });

};
createCheatCode('hello');
createCheatCode('moi');

const displayMouseDoubleClickCoordinates = () => {
  const output = document.querySelector('.output');
  document.addEventListener('dblClick', event => {
    console.log('dbl click coords: ', event.clientX, event.clientY);
    output.textContent = `Double clicked at: ${event.clientX}, ${event.clientY}`;
  });
};
displayMouseDoubleClickCoordinates();

const testReactToTouch = () => {
  const target = document.querySelector('.touch');
  target.addEventListener('touchstart', event => {
    console.log('target touched', event);
    output.textContent = `Double touches at: ${event.targetTouches[0].clientX},
    ${event.targetTouches[0].clientY}`;
  });
};
testReactToTouch();

const createStupidTimer = (timeInSecs) => {
  setTimeout(() => {
    console.log('do something!');
  }, timeInSecs * 1000);
};
//createStupidTimer(5);


const createInactivityTimer = (duration) => {
  const output = document.querySelector('.output');
  let timer;
  const resetTimer = event => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      output.textContent = 'Do something!';
      console.log('Do something!');
    }, duration * 1000);
  };
  resetTimer();
  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('touchstart', resetTimer);
};
createInactivityTimer(5);




