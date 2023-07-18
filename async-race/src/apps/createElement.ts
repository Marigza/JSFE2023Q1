export class NewElement {
  elem: HTMLElement;
  
  constructor(tag: string, classlist: string, content: string) {
    this.elem = document.createElement(tag);
    this.createElem(classlist, content)
  }

  createElem(classlist: string, content: string) {
    this.elem.classList.add(classlist);
    this.elem.innerText = content;
  }
}
