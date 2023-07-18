import { NewElement } from "./createElement";
import { mainBlock } from "./renderGarage";

export class Winners {
  winnerBlock = new NewElement('div', 'winner-block', 'Here will be list of winners...').elem;

  render() {
    mainBlock.prepend(this.winnerBlock);
  }

  hideBlock() {
    this.winnerBlock.classList.add('hide');
  }

  showBlock() {
    this.winnerBlock.classList.remove('hide');
  }
}