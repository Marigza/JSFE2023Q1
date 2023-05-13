//render page

const body = document.querySelector('.body');
const header = document.createElement('header');
const main = document.createElement('main');
const blockWrapper = document.createElement('div');
const blockHeader = document.createElement('div');
const blockContent = document.createElement('div');
const messageGameOver = document.createElement('div');
const messageWinner = document.createElement('div');

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
messageWinner.innerText = 'you win';
//let count = 100;


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

function createMinePlaces() {
  while (arrayOfMinePlaces.length < amountOfMines) {
    let e = Math.floor(Math.random() * amountOfCells);
    if (!arrayOfMinePlaces.includes(e)) {
      arrayOfMinePlaces.push(e)
    }
  }
  return arrayOfMinePlaces;
};
createMinePlaces();  
//console.log(arrayOfMinePlaces);   // example: [31, 15, 46, 54, 91, 16, 29, 52, 87, 67]

let arrayOfCells = Array.from(document.querySelectorAll('.game-block__item'));

//console.log(arrayOfCells)
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
fillCellsByMines();

console.log(arrayDouble);
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
fillCellsByContent();

function colorSelection() {
  for (let i = 0; i < arrayOfCells.length; i++) {
    switch (arrayOfCells[i].innerText) {
      case 'M':
        arrayOfCells[i].style.color = 'black';
        break;
      case '0':
        arrayOfCells[i].style.color = 'white';
        break;
      case '1':
        arrayOfCells[i].style.color = 'green';
        break;
      case '2':
        arrayOfCells[i].style.color = 'yellow';
        break;
      case '3':
        arrayOfCells[i].style.color = 'blue';
        break;
      default: 
        arrayOfCells[i].style.color = 'orange';
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

// click for element

arrayDouble.forEach(array => {
  array.forEach(element => {
    element.addEventListener('click', () => {
      element.classList.remove('hidden');
      console.log()
      choiceBehavior(element);
      countHiddenCells();
    })
  })
})

function choiceBehavior(element) {
  if (element.innerText === 'M') {
    openAllMines();
    throwGameOverMessage();
  } else if (element.innerText === '0') {
    let abs = arrayOfCells.indexOf(element)
    let x = Math.floor(abs / 10);
    let y = abs % 10;
    //console.log(element)
    //console.log('y=', y)
    //console.log('x=', x)
    openSibling(x, y);
  } else {
    console.log('try again')
  }
}

function openAllMines() {
  for (let i = 0; i < arrayOfCells.length; i++){
    if (arrayOfCells[i].classList.contains('mine')) {
      arrayOfCells[i].classList.remove('hidden')
    }
  }
}
function throwGameOverMessage() {
  console.log('game over');
  messageGameOver.classList.add('message_visible');
}

function countHiddenCells() {
  let count = 0;
  for (let i = 0; i < arrayOfCells.length; i++) {
    if (!arrayOfCells[i].classList.contains('hidden')) {
      count++;
    }
  }
  if (count === 90) {
    throwWinMessage()
  }
}

function throwWinMessage() {
  console.log('you win')
  messageWinner.classList.add('message_visible');

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
  }  else if (y === arrayDouble.length - 1) {
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
  if (right !== undefined && right.classList.contains('hidden') ) {
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
  if (left !== undefined && left.classList.contains('hidden')  ) {
    sibling.push(left)
  }
  if (leftTop !== undefined && leftTop.classList.contains('hidden')) {
    sibling.push(leftTop)
  }

  //console.log(sibling)
 
  for (let i = 0; i < sibling.length; i++)  {
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

