import { NewElement } from "./createElement";
import { Garage, mainBlock } from "./renderGarage";
import { Winners } from "./renderWin";

export const body = document.querySelector('body');

const header = new NewElement('header', 'header', 'Start Race!!!').elem;
const main = new NewElement('main', 'main', '').elem;
const mainButtons = new NewElement('div', 'buttons_wrapper', '').elem;

const buttonGarage = new NewElement('div', 'button', 'GARAGE').elem;
const buttonWinners = new NewElement('div', 'button', 'WINNERS').elem;

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

