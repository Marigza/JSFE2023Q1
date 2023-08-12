import { BaseElement } from "./baseElement";
import { Garage, mainBlock } from "./renderGarage";
import { Winners } from "./renderWin";
import { Constants } from "./constants/constants";

export const body = document.querySelector('body');

const header = new BaseElement({ tag: 'header', classlist: Constants.headerClass, content: 'Start Race!!!'}).elem;
const main = new BaseElement({ tag: 'main', classlist: Constants.mainClass, content:''}).elem;
const mainButtons = new BaseElement({ tag: 'div', classlist: Constants.buttonWrapperClass, content: '' }).elem;
const buttonGarage = new BaseElement({ tag: 'div', classlist: Constants.buttonClass, content: 'GARAGE' }).elem;
const buttonWinners = new BaseElement({ tag: 'div', classlist: Constants.buttonClass, content: 'WINNERS' }).elem;
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

