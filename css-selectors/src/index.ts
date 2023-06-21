import './index.html';
import './style.scss';
import { Table } from './script/render';

const table = new Table()

table.renderTable();
table.renderLevels();

const buttonEnter = document.querySelector('.button');
buttonEnter?.addEventListener('click', () => {
  table.checkCode();
});

function setLocalStorage() {
  localStorage.setItem('level', String(table.level));
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('level')) {
    table.level = Number(localStorage.getItem('level'));
    return table.level;
  }
}
window.addEventListener('load', () => {
  getLocalStorage;
});