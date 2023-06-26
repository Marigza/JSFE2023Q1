import levels from './levels.json';


export class Table {
  level = Number(localStorage.getItem('level')) || 0;
  length = levels.length;
  input = '';
  renderTable() {
    if (this.level <= 10) {
      const task = document.getElementById('task');
      const divTask = document.createElement('div');
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
  }
  checkCode() {
    this.input = (document.getElementById('input') as HTMLInputElement).value;
    this.input === levels[this.level].expectedCSS ? this.markDoneLevel() : this.showMistake();
    console.log(this.input)
  }
  protected markDoneLevel() {
    const checkedLevel = document.getElementById(levels[this.level].level);
    checkedLevel?.classList.add('level__icon_active');
    this.setLevel();
  }
  protected showMistake() {
    const table = document.querySelector('.table');
    table?.classList.add('table_mistaked');
    table?.addEventListener('animationend', () => table?.classList.remove('table_mistaked'))
  }
  protected showWinMessage() {
    const main = document.querySelector('.main');
    const divMessage = document.createElement('div');
    divMessage.classList.add('win-message');
    divMessage.textContent = "You finish learning css-selectors. Congratulations!"
    main?.append(divMessage);
    this.level = 0;
  }
  setLevel() {
    if (this.level === this.length - 1) {
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
      console.log(activeLevel);
      activeLevel?.classList.add('block__level_active');
    }
    
  }
}
 