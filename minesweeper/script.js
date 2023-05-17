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


  header.classList.add('header');
  main.classList.add('main');
  body.prepend(main);
  body.prepend(header);

  blockWrapper.classList.add('game-block__wrapper');
  blockHeader.classList.add('game-block__header');
  blockContent.classList.add('game-block__content');

  main.append(blockWrapper);
  blockWrapper.append(blockHeader);
  blockWrapper.append(blockContent);

  messageGameOver.classList.add('message');
  messageGameOver.innerText = 'Game over';
  messageWinner.classList.add('message');
  restartGame.classList.add('restart');
  restartGame.innerText = 'ReStart!';
blockHeader.append(restartGame);
let timerID;
  
function getStarted() {
  function createButtons() {
    blockContent.innerHTML = '';
    for (let i = 0; i < 100; i++) {
      let button = `<div class="game-block__item"></div>`;
      blockContent.insertAdjacentHTML('beforeend', button);
    }
  }
  createButtons();

  blockContent.append(messageGameOver);
  blockContent.append(messageWinner);

  //create mines

  let amountOfMines = 10;
  let amountOfCells = 100;
  let arrayOfMinePlaces = [];
  let clicks = 0;
  let time;
  //let timerID;

  activeMines.classList.add('active-mines');
  blockHeader.append(activeMines);
  usedFlags.classList.add('used-flags');
  blockHeader.append(usedFlags);

  gameTime.classList.add('game-time');
  blockHeader.append(gameTime);
  gameTime.innerText = '00:00';

  gameClicks.classList.add('game-clicks');
  blockHeader.append(gameClicks);
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
      gameTime.innerText = time;
      timerID = setTimeout(showTime, 1000);
      return time;
    }
    showTime()   
  } 
  
  let arrayOfCells = Array.from(document.querySelectorAll('.game-block__item'));
  //console.log(arrayOfCells)

  // click for element
  function handlerByClick(element) {
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      clicks++;
      if (clicks === 1) {
        startTimer();
        let elementIndex = arrayOfCells.indexOf(element);
        console.log(elementIndex);
        createMinePlaces(elementIndex);
        fillCellsByMines();
        fillCellsByContent();
        console.log('this is first click');
        console.log(arrayOfMinePlaces);
      }
      choiceBehavior(element);
      countHiddenCells();
      gameClicks.innerText = `clicks = ${clicks}`;
    }
}
  arrayOfCells.forEach(element => {
    element.addEventListener('click', () => handlerByClick(element));
    element.oncontextmenu = function (event) {
      if (element.classList.contains('hidden')) {
        event.preventDefault();
        console.log('print flag');
        element.classList.add('hidden');
        element.classList.toggle('flag');
        element.classList.contains('flag') ? reduceMines() : increaseMines();
        if (element.classList.contains('flag')) {
          element.removeEventListener('click', () => handlerByClick(element))              //TODO не работает отключение 
        }
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
    //console.log(arrayOfCells);
    for (let x = 0; x < 10; x++) {
      arrayDouble[x] = [];
      let chunkOfArr = arrayOfCells.slice((x * 10), (x * 10 + 10));
      arrayDouble[x] = chunkOfArr;
    }
    return arrayDouble;
  }
  //fillCellsByMines();

  //console.log(arrayDouble);
  //console.log(arrayOfCells);

  // fill cells by numbers

  function fillCellsByContent() {
    for (x = 0; x < arrayDouble.length; x++) {
      for (y = 0; y < arrayDouble[x].length; y++) {
        //console.log(arrayDouble[x][y].innerText);
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
  //fillCellsByContent();

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
    });
    //console.log('elements hidden')
  }

  function choiceBehavior(element) {
    if (element.innerText === 'M') {
      openAllMines();
      throwGameOverMessage();
    } else if (element.innerText === '0') {
      let abs = arrayOfCells.indexOf(element)
      let x = Math.floor(abs / 10);
      let y = abs % 10;
      openSibling(x, y);
    } else {
      console.log('good choise!')
    }
  }

  function openAllMines() {
    for (let i = 0; i < arrayOfCells.length; i++) {
      if (arrayOfCells[i].classList.contains('mine')) {
        arrayOfCells[i].classList.remove('hidden');
        arrayOfCells[i].classList.remove('flag');
      }
    }
  }
  function throwGameOverMessage() {
    console.log('game over');
    clearTimeout(timerID);
    messageGameOver.classList.add('message_visible'); //TODO добавить модальное окно чтобы кнпки поля стали неактивны
  }

  function countHiddenCells() {
    let count = 0;
    for (let i = 0; i < arrayOfCells.length; i++) {
      if (!arrayOfCells[i].classList.contains('hidden')) {
        count++;
      }
    }
    if (count === amountOfCells - amountOfMines) {
      throwWinMessage();
      clearTimeout(timerID);
    }
  }

  function throwWinMessage() {
    console.log(`you win for ${clicks} steps and ${time}`)
    messageWinner.classList.add('message_visible'); //TODO добавить модальное окно чтобы кнпки поля стали неактивны
    messageWinner.innerText = `you win for ${clicks} steps and ${time}`;
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

    if (top !== undefined && top.classList.contains('hidden')) {
      sibling.push(top)
    }
    if (topRight !== undefined && topRight.classList.contains('hidden')) {
      sibling.push(topRight)
    }
    if (right !== undefined && right.classList.contains('hidden')) {
      sibling.push(right)
    }
    if (rightDown !== undefined && rightDown.classList.contains('hidden')) {
      sibling.push(rightDown)
    }
    if (down !== undefined && down.classList.contains('hidden')) {
      sibling.push(down)
    }
    if (downLeft !== undefined && downLeft.classList.contains('hidden')) {
      sibling.push(downLeft)
    }
    if (left !== undefined && left.classList.contains('hidden')) {
      sibling.push(left)
    }
    if (leftTop !== undefined && leftTop.classList.contains('hidden')) {
      sibling.push(leftTop)
    }

    //console.log(sibling)

    for (let i = 0; i < sibling.length; i++) {
      sibling[i].classList.remove('hidden');
      if (sibling[i].innerText === '0') {
        let itemAbs = arrayOfCells.indexOf(sibling[i])
        let itemX = Math.floor(itemAbs / 10);
        let itemY = itemAbs % 10;
        //console.log(itemX, itemY)
        openSibling(itemX, itemY)
      }
    }
  }
}

getStarted()

restartGame.addEventListener('click', () => {
  messageGameOver.classList.remove('message_visible');
  messageWinner.classList.remove('message_visible');
  clearTimeout(timerID);
  getStarted()

})
