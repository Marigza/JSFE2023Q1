import { BaseElement } from "./baseElement";
import { Constants } from "./constants/constants";

export class Pagination {
  countPerPage: number;
  pages: number;
  itemsCount: number;
  currentPage = 1;
  minPagesCount = 1;
  prevButton = new BaseElement({ tag: 'div', classlist: Constants.buttonClass, content: 'prev' }).elem;
  nextButton = new BaseElement({ tag: 'div', classlist: Constants.buttonClass, content: 'next' }).elem;
  pageBlock = new BaseElement({ tag: 'div', classlist: Constants.pageBlockClass, content: '' }).elem;
  showNextBind = this.showNextPage.bind(this);
  showPrevBind = this.showPrevPage.bind(this);

  constructor(itemsCount: number, countPerPage: number) {
    this.countPerPage = countPerPage;
    this.itemsCount = itemsCount;
    this.pages = Math.ceil(this.itemsCount / this.countPerPage);
    this.addListners();
  }
  
  createPaginationView() {
    this.nextButton.classList.add(Constants.buttonPaginationClass);
    this.prevButton.classList.add(Constants.buttonPaginationClass);
    this.prevButton.classList.add(Constants.disabled);

    if (this.pages === this.minPagesCount) {
      this.nextButton.classList.add(Constants.disabled);
    }
  
    const paginationBlock = new BaseElement({ tag: 'div', classlist: Constants.paginationBlockClass, content: '' }).elem;

    paginationBlock.append(this.pageBlock);
    this.changePageNumber();
    paginationBlock.append(this.prevButton);
    paginationBlock.append(this.nextButton);

    return paginationBlock;
  }

  changePageNumber() {
    this.pageBlock.innerText = `page(${this.currentPage} from ${this.pages})`
  }

  showNextPage() {
    if (this.pages > this.minPagesCount) {
      this.currentPage++;
      this.changePageNumber();
      this.prevButton.classList.remove(Constants.disabled);
      this.prevButton.addEventListener('click', this.showPrevBind);

      if (this.currentPage >= this.pages) {
        this.nextButton.classList.add(Constants.disabled);
        this.nextButton.removeEventListener('click', this.showNextBind);
      }

      return this.currentPage;
    }
  }

  showPrevPage() {
    if (this.pages > this.minPagesCount) {
      this.currentPage--;
      this.changePageNumber();
      this.nextButton.classList.remove(Constants.disabled);
      this.nextButton.addEventListener('click', this.showNextBind);

      if (this.currentPage <= this.minPagesCount) {
        this.prevButton.classList.add(Constants.disabled);
        this.prevButton.removeEventListener('click', this.showPrevBind);
      }
      
      return this.currentPage;
    }
  }

  addListners() {
    this.nextButton.addEventListener('click', this.showNextBind)
    this.prevButton.addEventListener('click', this.showPrevBind);
  }
}