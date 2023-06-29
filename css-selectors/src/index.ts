import './index.html';
import './style.scss';
import { Table } from './script/render';

const table = new Table();

const buttonReset = document.getElementById('reset');
const buttonHelp = document.getElementById('help');

buttonReset?.addEventListener('click', () => table.resetProgress());
buttonHelp?.addEventListener('click', () => table.showAnswer());

console.log(buttonHelp);

table.renderTable();
table.renderLevels();

const buttonEnter = document.getElementById('enter');
buttonEnter?.addEventListener('click', () => {
  table.checkCode();
});
document.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    table.checkCode();
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
    //table.level = Number(localStorage.getItem('level'));
    return table.level;
  }
}
window.addEventListener('load', () => {
  getLocalStorage;
});

