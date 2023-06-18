import './index.html';
import './style.scss';
import { Table } from './script/render';

const table = new Table(0)

table.renderTable();

const butttonEnter = document.querySelector('.button');
butttonEnter?.addEventListener('click', () => table.checkCode());
