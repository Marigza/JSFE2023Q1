import { NewElement } from "./createElement";
import { Garage, mainBlock } from "./renderGarage";
import { Winners } from "./renderWin";

export const body = document.querySelector('body');

const header = new NewElement('header', 'header', 'Start Race!!!').elem;
const main = new NewElement('main', 'main', '').elem;
const footer = new NewElement('footer', 'footer', 'I\'m footer )))').elem;
const buttonGarage = new NewElement('div', 'button', 'GARAGE').elem;
const buttonWinners = new NewElement('div', 'button', 'WINNERS').elem;

const garage = new Garage();
const winners = new Winners();
garage.render();
garage.addListners();

body?.append(header);
body?.append(main);
body?.append(footer);
main?.append(buttonGarage);
main?.append(buttonWinners);
main?.append(mainBlock);

buttonGarage.addEventListener('click', () => {
  console.log('I\'m garage');
  winners.hideBlock();
  garage.showBlock();
})
buttonWinners.addEventListener('click', () => {
  console.log('I\'m winners');
  garage.hideBlock();
  winners.showBlock();
})

