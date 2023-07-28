import { NewElement } from "./createElement";
import { Garage, mainBlock } from "./renderGarage";
import { Winners } from "./renderWin";

export const body = document.querySelector('body');

const header = new NewElement({ tag: 'header', classlist: 'header', content: 'Start Race!!!'}).elem;
const main = new NewElement({ tag: 'main', classlist: 'main', content:''}).elem;
const mainButtons = new NewElement({ tag: 'div', classlist: 'buttons_wrapper', content: '' }).elem;
const buttonGarage = new NewElement({ tag: 'div', classlist: 'button', content: 'GARAGE' }).elem;
const buttonWinners = new NewElement({ tag: 'div', classlist: 'button', content: 'WINNERS' }).elem;
const garage = new Garage();
const winners = new Winners();

garage.render();
winners.render();
winners.hideBlock();
garage.addListners();

body?.append(header);
body?.append(main);
main.prepend(mainButtons);
mainButtons?.append(buttonGarage);
mainButtons?.append(buttonWinners);
main?.append(mainBlock);

buttonGarage.addEventListener('click', () => {
  winners.hideBlock();
  garage.showBlock();
})

buttonWinners.addEventListener('click', () => {
  garage.hideBlock();
  winners.showBlock();
})

