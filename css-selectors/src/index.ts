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


