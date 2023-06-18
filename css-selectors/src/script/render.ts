import levels from './levels.json';


export class Table {
  level;
  constructor(level: number) {
    this.level = level;
  }
  renderTable() {
    const task = document.getElementById('task');
    const divTask = document.createElement('div');
    const divCode = document.createElement('div');
    const table = document.querySelector('.table');
    const html = document.getElementById('html');
    if (task !== null) {
      divTask.innerText = levels[this.level].todo;
    }
    task?.prepend(divTask);
    if (table !== null) {
      table.innerHTML = '';
      table.innerHTML = levels[this.level].layout;
    }
    divCode.innerText = levels[this.level].html;
    html?.prepend(divCode);
  }
  checkCode() {
    const input = (document.getElementById('input') as HTMLInputElement).value;
    input === levels[this.level].expectedCSS ? alert('bingo)))'): alert('try again(((');
  }
}
 