import './index.html';
import './style.scss';
import { Table } from './apps/table';

const table = new Table();

const buttonReset = document.getElementById('reset');
const buttonHelp = document.getElementById('help');
const buttonEnter = document.getElementById('enter');

buttonReset?.addEventListener('click', () => table.resetProgress());
buttonHelp?.addEventListener('click', () => table.showAnswer());

table.renderTable();
table.renderLevels();

buttonEnter?.addEventListener('click', () => {
  table.checkCode();
});

document.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    table.checkCode();
    buttonEnter?.classList.add('button_active');
    
    setTimeout(() => buttonEnter?.classList.remove('button_active'), 300);
  }
});

function setLocalStorage() {
  if (table.level <= 10) {
    localStorage.setItem('level', String(table.level));
  } else {
    localStorage.setItem('level', '0');
  }
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('level')) {
    return table.level;
  }
}

window.addEventListener('load', () => {
  getLocalStorage;
});
