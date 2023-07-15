import './index.html';
import './style.scss';
import { Table } from './apps/table';
import { setLocalStorage } from './apps/utils';
import { getLocalStorage } from './apps/utils';

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

window.addEventListener('beforeunload', () => setLocalStorage(table.level));
window.addEventListener('load', () => getLocalStorage(table.level));
