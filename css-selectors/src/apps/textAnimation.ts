export class TextAnimation {
  text: string;
  divblock = document.createElement('div') as HTMLDivElement;
  parentBlock = document.querySelector('.input_block') as HTMLDivElement;

  constructor (text: string) {
    this.text = text;
  }

  renderBlock(){
    this.divblock.classList.add('block__append-text');
    this.parentBlock.appendChild(this.divblock);
    this.showText();

    setTimeout(() => this.hideblock(), 2000);
  }

  // https://ru.stackoverflow.com/questions/1431728/
  showText() {                                                  
    const textArr = this.text.split('');

    for (let i = 0; i < textArr.length; i++) {
      const letter = document.createElement('span');
      const delay =`${i / 10}s`;
      letter.classList.add('letter');
      letter.textContent = textArr[i];

      if(letter.textContent.match(/\s/)) {
        letter.style.margin = 'auto 3px'
      }

      letter.style.animationDelay = delay;
      this.divblock.appendChild(letter);
    }
  }

  hideblock() {
    this.divblock?.remove();
  }
}
