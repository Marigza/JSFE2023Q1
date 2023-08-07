interface newElem {
  tag: string;
  classlist: string;
  content: string;
}

export class BaseElement {
  elem: HTMLElement;
  
  constructor(element: newElem) {
    this.elem = document.createElement(element.tag);
    this.createElem(element.classlist, element.content)
  }

  createElem(classlist: string, content: string) {
    this.elem.classList.add(classlist);
    this.elem.innerText = content;
  }
}
