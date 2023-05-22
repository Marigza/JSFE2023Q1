//render page

const body = document.querySelector('.body');
const header = document.createElement('header');
const main = document.createElement('main');
const blockWrapper = document.createElement('div');
const blockHeader = document.createElement('div');
const blockContent = document.createElement('div');
const messageGameOver = document.createElement('div');
const messageWinner = document.createElement('div');
const restartGame = document.createElement('div');
const activeMines = document.createElement('div');
const usedFlags = document.createElement('div');
const gameTime = document.createElement('div');
const gameClicks = document.createElement('div');
const gameName = document.createElement('div');
const gameMode = document.createElement('div');
const gameModeSizeS = document.createElement('div');
const gameModeSizeM = document.createElement('div');
const gameModeSizeL = document.createElement('div');
const gameModeNumberOfMines = document.createElement('div');
const gameCounter = document.createElement('div');
const blockFooter = document.createElement('div');
const soundCheck = document.createElement('div');
const themeCheck = document.createElement('div');
const results = document.createElement('div');
const resultsBlock = document.createElement('div');
const resultHeader = document.createElement('div');
const resultsItem = document.createElement('div');
const flagSetting = document.createElement('div');
const modalWindow = document.createElement('div');
const modalWindow2 = document.createElement('div');

header.classList.add('header');
main.classList.add('main');
body.prepend(main);
body.prepend(header);

blockWrapper.classList.add('game-block__wrapper');
blockHeader.classList.add('game-block__header');
blockContent.classList.add('game-block__content', 'content_S');
blockFooter.classList.add('game-block__footer');

main.append(blockWrapper);
blockWrapper.append(blockHeader);
blockWrapper.append(blockContent);
blockWrapper.append(blockFooter);
  
messageGameOver.classList.add('message');
messageGameOver.innerText = 'Game over(((\nTry again!';
messageWinner.classList.add('message');
resultsBlock.classList.add('results__block');
modalWindow.classList.add('modal');
modalWindow2.classList.add('modal');

blockHeader.append(gameName);
gameName.classList.add('game-name')
gameName.innerText = "= MINESWEEPER =";
gameMode.classList.add('game-mode');
blockHeader.append(gameMode);
gameModeSizeS.classList.add('game-mode__size', 'size_S', 'game-mode__size_active');
gameModeSizeS.innerText = '10x10'
gameModeSizeM.classList.add('game-mode__size', 'size_M');
gameModeSizeM.innerText = '15x15'
gameModeSizeL.classList.add('game-mode__size', 'size_L');
gameModeSizeL.innerText = '25x25'
gameModeNumberOfMines.classList.add('game-mode__number');
gameModeNumberOfMines.innerHTML = `<span>choose the mine amount:</span><input id='mineAmount' type='text' value='10'><span>Please, click "New Game" to apply</span>`
gameMode.append(gameModeSizeS);
gameMode.append(gameModeSizeM);
gameMode.append(gameModeSizeL);
gameMode.append(gameModeNumberOfMines);

gameCounter.classList.add('game-counters');
blockHeader.append(gameCounter);
restartGame.classList.add('restart');
restartGame.innerText = 'New Game';
gameCounter.append(restartGame);

blockFooter.append(soundCheck);
soundCheck.classList.add('sound__button');
soundCheck.insertAdjacentHTML("beforeend", `<label><input id="soundCheck" type="checkbox">Sound off</label>`);
let soundChecking = document.getElementById('soundCheck');
blockFooter.append(themeCheck);
themeCheck.classList.add('theme__button');
themeCheck.insertAdjacentHTML("beforeend", `<label><input id="themeCheck" type="checkbox">Night</label>`);
let themeChecking = document.getElementById('themeCheck');
blockFooter.append(results);
results.classList.add('results__button');
results.innerText = 'Last Results';
results.addEventListener('click', () => {
  modalWindow2.classList.toggle('modal_active');
  resultsBlock.classList.toggle('results__block_visible');
});

flagSetting.classList.add('flag-setting');
blockFooter.append(flagSetting);
flagSetting.addEventListener('click', () => {
  flagSetting.classList.toggle('flag-setting_active');
  flagSetting.classList.contains('flag-setting_active') ? alert('Now You can MARK mines') : alert('Now You can OPEN field');
});

let timerID;
let gameSize = 10;
let arrayResult = [];

let activeGameSize = document.querySelector('.game-mode__size_active');;

let arrayGameSizes = [gameModeSizeS, gameModeSizeM, gameModeSizeL];
arrayGameSizes.forEach(size => size.addEventListener('click', () => {
  arrayGameSizes.forEach(elem => elem.classList.remove('game-mode__size_active'));
  size.classList.add('game-mode__size_active')
  activeGameSize = size;
  reSize();
  clearTimeout(timerID);
  getStarted();
}))

function reSize() {
  if (activeGameSize.classList.contains('size_S')) {
    gameSize = 10;
    blockContent.classList.remove('content_M');
    blockContent.classList.remove('content_L');
    blockContent.classList.add('content_S');
  } else if (activeGameSize.classList.contains('size_M')) {
    gameSize = 15;
    blockContent.classList.remove('content_S');
    blockContent.classList.remove('content_L');
    blockContent.classList.add('content_M');
  } else if (activeGameSize.classList.contains('size_L')) {
    gameSize = 25;
    blockContent.classList.remove('content_S');
    blockContent.classList.remove('content_M');
    blockContent.classList.add('content_L');
  }
}
  
function getStarted() {
  modalWindow.classList.remove('modal_active');
  modalWindow2.classList.remove('modal_active');
  messageGameOver.classList.remove('message_visible');
  messageWinner.classList.remove('message_visible');
  resultsBlock.classList.remove('results__block_visible');
  clearTimeout(timerID);
  reSize();
  let amountOfMines = 10;
  let num = document.getElementById('mineAmount').value;
  if ((num < 10 || num > 99) || isNaN(num)) {
    alert('Enter number 10 - 99')
    document.getElementById('mineAmount').value = 10;
    amountOfMines = 10;
  } else {
    amountOfMines = num;
  }
  let amountOfCells = gameSize * gameSize;
  let arrayOfMinePlaces = [];
  let clicks = 0;
  let time; 

  function createButtons() {
    blockContent.innerHTML = '';
    for (let i = 0; i < amountOfCells; i++) {
      let button = `<div class="game-block__item"></div>`;
      blockContent.insertAdjacentHTML('beforeend', button);
    }
  }
  createButtons();

  blockContent.append(messageGameOver);
  blockContent.append(messageWinner);
  blockContent.append(resultsBlock);
  blockContent.append(modalWindow);
  blockContent.append(modalWindow2);
  resultsBlock.append(resultHeader);
  resultHeader.classList.add('results__header')
  resultHeader.innerText = 'Last Results';
  resultsBlock.append(resultsItem);
  resultsItem.classList.add('results__item');

  function fillResultsTable() {
    resultsItem.innerHTML = '';
    for (let elem of arrayResult) {
      let item = `<div class="result__item">${elem}</div>`;
      resultsItem.insertAdjacentHTML('beforeend', item);
    }
  }

  function getLocalStorage() {
    if (localStorage.getItem('lastResult')) {
      arrayResult = (localStorage.getItem('lastResult')).split(',');
      fillResultsTable()
    } else {
      arrayResult = [];
    }
  }
  window.addEventListener('load', getLocalStorage);

  function pushArrayResult(clicks, time) {
    arrayResult.push(`${clicks} clicks by ${time}`);
    if (arrayResult.length > 10) {
      arrayResult.shift();
    }
    fillResultsTable();
  }

  function setLocalStorage() {
    localStorage.setItem('lastResult', arrayResult);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  //create mines

  activeMines.classList.add('active-mines');
  gameCounter.append(activeMines);

  usedFlags.classList.add('used-flags');
  gameCounter.append(usedFlags);

  gameTime.classList.add('game-time');
  gameCounter.append(gameTime);
  gameTime.innerText = 'time = 00:00';

  gameClicks.classList.add('game-clicks');
  gameCounter.append(gameClicks);
  gameClicks.innerText = `clicks = ${clicks}`;

  let restOfMines = amountOfMines;
  activeMines.innerText = `rest of mines = ${restOfMines}`;
  usedFlags.innerText = `used flags = ${amountOfMines - restOfMines}`;

  function reduceMines() {
    restOfMines--;
    activeMines.innerText = `rest of mines = ${restOfMines}`;
    usedFlags.innerText = `used flags = ${amountOfMines - restOfMines}`;
    if (restOfMines < 0) {
      activeMines.innerText = 'check mines plases!';
      usedFlags.innerText = 'flags is over'
    }
    return restOfMines;
  }
  function increaseMines() {
    restOfMines++;
    activeMines.innerText = `rest of mines = ${restOfMines}`;
    usedFlags.innerText = `used flags = ${amountOfMines - restOfMines}`;
    if (restOfMines < 0) {
      activeMines.innerText = 'check mines plases!';
      usedFlags.innerText = 'flags is over'
    }
    return restOfMines;
  }

  function startTimer() {
    let startTime = new Date()
    function showTime() {
      const currentTime = new Date();
      let timeOfGame = currentTime - startTime  //ms
      let seconds = Math.round(timeOfGame / 1000);
      if (seconds < 10) {
        time = `00:0${seconds}`
      } else if (seconds >= 10 && seconds < 60) {
        time = `00:${seconds}`
      } else if (seconds >= 60 && seconds < 600) {
        if (seconds % 60 < 10) {
          time = `0${Math.floor(seconds / 60)}:0${seconds % 60}`
        } else {
          time = `0${Math.floor(seconds / 60)}:${seconds % 60}`
        }
      } else {
        if (seconds % 60 < 10) {
          time = `${Math.floor(seconds / 60)}:0${seconds % 60}`
        } else {
          time = `${Math.floor(seconds / 60)}:${seconds % 60}`
        }
      }
      gameTime.innerText = `time = ${time}`;
      timerID = setTimeout(showTime, 1000);
      return time;
    }
    showTime()   
  } 
  
  let arrayOfCells = Array.from(document.querySelectorAll('.game-block__item'));

  // click for element

  function handlerByClick(element) {
    if (element.classList.contains('hidden') && !element.classList.contains('flag')) {
      element.classList.remove('hidden');
      element.classList.remove('hidden_night');
      clicks++;
      if (clicks === 1) {
        startTimer();
        let elementIndex = arrayOfCells.indexOf(element);
        createMinePlaces(elementIndex);
        fillCellsByMines();
        fillCellsByContent();
      }
      choiceBehavior(element);
      countHiddenCells();
      gameClicks.innerText = `clicks = ${clicks}`;
    }
  }

  function markCells(element) {
    element.classList.add('hidden');
    element.classList.toggle('flag');
    if (themeChecking.checked === true) {
      element.classList.add('hidden_night');
      element.classList.contains('flag') ? element.classList.add('flag_night') : element.classList.remove('flag_night');
    }
    
    playSound('assets/sounds/flag.mp3');
    element.classList.contains('flag') ? reduceMines() : increaseMines();
  }

  arrayOfCells.forEach(element => {
    element.addEventListener('click', () => {
      if (flagSetting.classList.contains('flag-setting_active') && element.classList.contains('hidden')) {
        markCells(element);
      } else {
        handlerByClick(element);
      }
    });
    element.oncontextmenu = function (event) {
      if (element.classList.contains('hidden')) {
        event.preventDefault();
        markCells(element);
      }
      };
  })
  
  function createMinePlaces(elementIndex) {
    while (arrayOfMinePlaces.length < amountOfMines) {
      let e = Math.floor(Math.random() * amountOfCells);
      if (!arrayOfMinePlaces.includes(e) && e !== elementIndex) {
        arrayOfMinePlaces.push(e)
      }
    }
    return arrayOfMinePlaces;
  };
 
  let arrayDouble = [];
  function fillCellsByMines() {
    for (let i = 0; i < arrayOfCells.length; i++) {
      if (arrayOfMinePlaces.includes(i)) {
        arrayOfCells[i].innerText = 'M';
        arrayOfCells[i].classList.add('mine');
      } else {
        arrayOfCells[i].innerText = ''
      }
    }
    for (let x = 0; x < gameSize; x++) {
      arrayDouble[x] = [];
      let chunkOfArr = arrayOfCells.slice((x * gameSize), (x * gameSize + gameSize));
      arrayDouble[x] = chunkOfArr;
    }
    return arrayDouble;
  }

  // fill cells by numbers

  function fillCellsByContent() {
    for (x = 0; x < arrayDouble.length; x++) {
      for (y = 0; y < arrayDouble[x].length; y++) {
        let sibling;
        if (x === 0 && y === 0) {
          sibling = [arrayDouble[x][y + 1], arrayDouble[x + 1][y], arrayDouble[x + 1][y + 1]]
        } else if (x === arrayDouble.length - 1 && y === arrayDouble[x].length - 1) {
          sibling = [arrayDouble[x][y - 1], arrayDouble[x - 1][y], arrayDouble[x - 1][y - 1]]
        } else if (x === 0 && y === arrayDouble[x].length - 1) {
          sibling = [arrayDouble[x][y - 1], arrayDouble[x + 1][y], arrayDouble[x + 1][y - 1]]
        } else if (x === arrayDouble.length - 1 && y === 0) {
          sibling = [arrayDouble[x][y + 1], arrayDouble[x - 1][y], arrayDouble[x - 1][y + 1]]
        } else if (x === 0) {
          sibling = [arrayDouble[x][y - 1], arrayDouble[x][y + 1], arrayDouble[x + 1][y + 1], arrayDouble[x + 1][y], arrayDouble[x + 1][y - 1]]
        } else if (x === arrayDouble.length - 1) {
          sibling = [arrayDouble[x][y + 1], arrayDouble[x][y - 1], arrayDouble[x - 1][y - 1], arrayDouble[x - 1][y], arrayDouble[x - 1][y + 1]]
        } else if (y === 0) {
          sibling = [arrayDouble[x - 1][y], arrayDouble[x + 1][y], arrayDouble[x - 1][y + 1], arrayDouble[x][y + 1], arrayDouble[x + 1][y + 1]]
        } else if (y === arrayDouble[x].length - 1) {
          sibling = [arrayDouble[x - 1][y], arrayDouble[x + 1][y], arrayDouble[x - 1][y - 1], arrayDouble[x][y - 1], arrayDouble[x + 1][y - 1]]
        } else {
          sibling = [arrayDouble[x + 1][y], arrayDouble[x + 1][y + 1], arrayDouble[x][y + 1], arrayDouble[x + 1][y - 1], arrayDouble[x - 1][y], arrayDouble[x - 1][y - 1], arrayDouble[x][y - 1], arrayDouble[x - 1][y + 1]]
        }

        if (arrayDouble[x][y].innerText !== 'M') {
          let siblingMatch = sibling.filter(item => item.classList.contains('mine'));
          arrayDouble[x][y].innerText = siblingMatch.length;
        }
        colorSelection();
      }
    }
  };

  function colorSelection() {
    for (let i = 0; i < arrayOfCells.length; i++) {
        switch (arrayOfCells[i].innerText) {
          case 'M':
            arrayOfCells[i].style.color = 'black';
            break;
          case '0':
            arrayOfCells[i].style.color = 'transparent';
            break;
          case '1':
            arrayOfCells[i].style.color = 'white';
            break;
          case '2':
            arrayOfCells[i].style.color = 'yellow';
            break;
          case '3':
            arrayOfCells[i].style.color = 'blue';
            break;
          case '4':
            arrayOfCells[i].style.color = 'chartreuse';
            break;
          case '5':
            arrayOfCells[i].style.color = 'violet';
            break;
          case '6':
            arrayOfCells[i].style.color = 'orange';
            break;
          case '7':
            arrayOfCells[i].style.color = 'red';
            break;
          default:
            arrayOfCells[i].style.color = 'black';
            break;
        }
    }
  };

  addClassHidden(arrayOfCells);


  function addClassHidden(array) {
    array.forEach(element => {
      element.classList.add('hidden');
      if (themeChecking.checked === true) {
        element.classList.add('hidden_night');
      }
    });
  }

  function choiceBehavior(element) {
    if (element.innerText === 'M') {
      openAllMines();
      throwGameOverMessage();
      playSound('assets/sounds/fail.mp3');
    } else if (element.innerText === '0') {
      playSound('assets/sounds/click.mp3');
      let abs = arrayOfCells.indexOf(element)
      let x = Math.floor(abs / gameSize);
      let y = abs % gameSize;
      openSibling(x, y);
    } else {
      playSound('assets/sounds/click.mp3');
    }
  }

  function openAllMines() {
    for (let i = 0; i < arrayOfCells.length; i++) {
      if (arrayOfCells[i].classList.contains('mine')) {
        arrayOfCells[i].classList.remove('hidden');
        arrayOfCells[i].classList.remove('hidden_night');
        arrayOfCells[i].classList.remove('flag');
        arrayOfCells[i].classList.remove('flag_night');
      }
    }
  }
  function throwGameOverMessage() {
    clearTimeout(timerID);
    modalWindow.classList.add('modal_active');
    messageGameOver.classList.add('message_visible');
  }

  function countHiddenCells() {
    let count = 0;
    for (let i = 0; i < arrayOfCells.length; i++) {
      if (!arrayOfCells[i].classList.contains('hidden')) {
        count++;
      }
    }
    if (count === amountOfCells - amountOfMines && !messageGameOver.classList.contains('message_visible')) {
      throwWinMessage();
      playSound('assets/sounds/winner.mp3')
      clearTimeout(timerID);
    }
  }

  function throwWinMessage() {
    modalWindow.classList.add('modal_active');
    messageWinner.classList.add('message_visible'); 
    messageWinner.innerText = `Hooray! You found all mines in ${time} seconds and ${clicks} moves!`;
    pushArrayResult(clicks, time);
  }
  
  function openSibling(x, y) {
    let sibling = [];
    let top, topRight, right, rightDown, down, downLeft, left, leftTop;

    if (x === 0) {
      right = arrayDouble[x][y + 1] || undefined;
      rightDown = arrayDouble[x + 1][y + 1] || undefined;
      down = arrayDouble[x + 1][y] || undefined;
      downLeft = arrayDouble[x + 1][y - 1] || undefined;
      left = arrayDouble[x][y - 1] || undefined;
    } else if (x === arrayDouble.length - 1) {
      top = arrayDouble[x - 1][y] || undefined;
      topRight = arrayDouble[x - 1][y + 1] || undefined;
      right = arrayDouble[x][y + 1] || undefined;
      left = arrayDouble[x][y - 1] || undefined;
      leftTop = arrayDouble[x - 1][y - 1] || undefined;
    }
    else if (y === 0) {
      top = arrayDouble[x - 1][y] || undefined;
      topRight = arrayDouble[x - 1][y + 1] || undefined;
      right = arrayDouble[x][y + 1] || undefined;
      rightDown = arrayDouble[x + 1][y + 1] || undefined;
      down = arrayDouble[x + 1][y] || undefined;
    } else if (y === arrayDouble.length - 1) {
      top = arrayDouble[x - 1][y] || undefined;
      down = arrayDouble[x + 1][y] || undefined;
      downLeft = arrayDouble[x + 1][y - 1] || undefined;
      left = arrayDouble[x][y - 1] || undefined;
      leftTop = arrayDouble[x - 1][y - 1] || undefined;
    } else {
      top = arrayDouble[x - 1][y] || undefined;
      topRight = arrayDouble[x - 1][y + 1] || undefined;
      right = arrayDouble[x][y + 1] || undefined;
      rightDown = arrayDouble[x + 1][y + 1] || undefined;
      down = arrayDouble[x + 1][y] || undefined;
      downLeft = arrayDouble[x + 1][y - 1] || undefined;
      left = arrayDouble[x][y - 1] || undefined;
      leftTop = arrayDouble[x - 1][y - 1] || undefined;
    }

    if (top !== undefined && top.classList.contains('hidden') && !top.classList.contains('flag')) {
      sibling.push(top)
    }
    if (topRight !== undefined && topRight.classList.contains('hidden') && !topRight.classList.contains('flag')) {
      sibling.push(topRight)
    }
    if (right !== undefined && right.classList.contains('hidden') && !right.classList.contains('flag')) {
      sibling.push(right)
    }
    if (rightDown !== undefined && rightDown.classList.contains('hidden') && !rightDown.classList.contains('flag')) {
      sibling.push(rightDown)
    }
    if (down !== undefined && down.classList.contains('hidden') && !down.classList.contains('flag')) {
      sibling.push(down)
    }
    if (downLeft !== undefined && downLeft.classList.contains('hidden') && !downLeft.classList.contains('flag')) {
      sibling.push(downLeft)
    }
    if (left !== undefined && left.classList.contains('hidden') && !left.classList.contains('flag')) {
      sibling.push(left)
    }
    if (leftTop !== undefined && leftTop.classList.contains('hidden') && !leftTop.classList.contains('flag')) {
      sibling.push(leftTop)
    }

    for (let i = 0; i < sibling.length; i++) {
      sibling[i].classList.remove('hidden');
      sibling[i].classList.remove('hidden_night');
      if (sibling[i].innerText === '0') {
        let itemAbs = arrayOfCells.indexOf(sibling[i])
        let itemX = Math.floor(itemAbs / gameSize);
        let itemY = itemAbs % gameSize;
        openSibling(itemX, itemY)
      }
    }
  }

  const audio = new Audio();
  function playSound(src) {
    audio.src = src;
    if (soundChecking.checked === false) {
      let playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          
        })
          .catch(error => {
            
          });
      }
    }
  }
}

getStarted()

restartGame.addEventListener('click', () => {
  reSize();
  getStarted();
})
