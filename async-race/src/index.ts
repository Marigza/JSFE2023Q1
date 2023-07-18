import './index.html';
import './styles.scss';

import { body } from './apps/render';

console.log(body);

// DELETE тестовое поле для работы

const svg = document.querySelector('.svg-car');

svg?.addEventListener('click', () => {
  svg?.setAttribute('fill', '#00ffff');
});

// конец тестового поля
