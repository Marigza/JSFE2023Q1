import levels from './levels.json';
import { TextAnimation } from './textAnimation';

export class Table {
  level = Number(localStorage.getItem('level')) || 0;
  length = levels.length;
  input = '';
  isHelped = false;
  divMessage = document.createElement('div');
  renderTable() {
    if (this.level <= 10) {
      const task = document.getElementById('task');
      const divTask = document.createElement('div');
      divTask.classList.add('task__header');
      const divCode = document.createElement('div');
      const table = document.querySelector('.table');
      const html = document.getElementById('html');
      if (html !== null) {
        html.innerHTML = '';
      }
      if (task !== null) {
        task.innerHTML = '';
        divTask.innerText = levels[this.level].todo;
        task.prepend(divTask);
      }
      if (table !== null) {
        table.innerHTML = '';
        table.innerHTML = levels[this.level].layout;
        task?.append(table);
      }
      divCode.innerText = levels[this.level].html;
      html?.prepend(divCode);
    }
  }
  renderLevels() {
    const levelBlock = document.getElementById('level');
    if (levelBlock !== null) {
      levelBlock.innerHTML = '';
      for (let i = 0; i < this.length; i++) {
        const levelItem = document.createElement('div');
        levelItem.classList.add('block__level');
        levelItem.innerHTML = `<span class="level__icon" id="${levels[i].level}"></span><span>${levels[i].level}</span>`;
        levelBlock.append(levelItem);
      }
    }
    this.lightningLevel();
    this.choiseLevel();
  }
  checkCode() {
    this.input = (document.getElementById('input') as HTMLInputElement).value;
    this.input === levels[this.level].expectedCSS ? this.markDoneLevel() : this.showMistake();
  }
  protected markDoneLevel() {
    this.animateCorrectAnswer();
    const checkedLevel = document.getElementById(levels[this.level].level);
    if (this.isHelped) {
      checkedLevel?.classList.add('level__icon_activeHelp')
    } else {
      checkedLevel?.classList.add('level__icon_active')
    }
    setTimeout(() => {
      this.setLevel();
      this.isHelped = false;
    }, 500);
  }
  protected animateCorrectAnswer() {
    const targetElems = Array.from(document.querySelectorAll('.target'));
    targetElems.forEach((elem) => {
      (elem as HTMLElement).classList.add('target_answer');
      elem?.addEventListener('animationend', () => {
        elem.classList.remove('target_answer');
      })
    });
  }

  protected showMistake() {
    const table = document.querySelector('.table');
    table?.classList.add('table_mistaked');
    table?.addEventListener('animationend', () => table?.classList.remove('table_mistaked'))
  }
  protected showWinMessage() {
    const main = document.querySelector('.main');
    this.divMessage.classList.add('win-message');
    this.divMessage.textContent = "You finish learning css-selectors. Congratulations!"
    main?.append(this.divMessage);
    this.level = 0;
  }
  protected removeWinMessage() {
    this.divMessage.remove();
  }
  setLevel() {
    if (this.level === 10) {
      this.showWinMessage();
    } else {
      this.level++;
      this.lightningLevel();
      (document.getElementById('input') as HTMLInputElement).value = '';
      this.renderTable();
    }
  }
  lightningLevel() {
    const allLevels = Array.from(document.querySelectorAll('.block__level'));
    allLevels.forEach((elem) => elem.classList.remove('block__level_active'));
    if (this.level <= 10) {
      const activeLevel = document.getElementById(levels[this.level].level)?.parentElement;
      // console.log(activeLevel);
      activeLevel?.classList.add('block__level_active');
    }
  }
  choiseLevel() {
    const allLevels = Array.from(document.querySelectorAll('.block__level'));
    allLevels.forEach(elem => elem.addEventListener('click', () => {
      const active = elem.firstElementChild?.id;
      // console.log(active);
      const levelArr = levels.map(elem => elem.level);
      if (active !== undefined) {
        //console.log(levelArr);
        //console.log(levelArr.indexOf(active));
        this.level = levelArr.indexOf(active) - 1;
        this.setLevel();
      }
     })
    )
  }
  resetProgress() {
    this.level = 0;
    (document.getElementById('input') as HTMLInputElement).value = '';
    this.renderTable();
    this.renderLevels();
    this.removeWinMessage();
  }
  showAnswer() {
    const text = new TextAnimation(levels[this.level].expectedCSS);
    text.renderBlock();
    (document.getElementById('input') as HTMLInputElement).value = levels[this.level].expectedCSS;
    this.isHelped = true;
  }

}
 