import { BaseElement } from "./baseElement";

export class Pagination {
  countPerPage: number;
  pages: number;
  itemsCount: number;
  currentPage = 1;
  minPagesCount = 1;
  prevButton = new BaseElement({ tag: 'div', classlist: 'button', content: 'prev' }).elem;
  nextButton = new BaseElement({ tag: 'div', classlist: 'button', content: 'next' }).elem;
  pageBlock = new BaseElement({ tag: 'div', classlist: 'page__block', content: '' }).elem;
  showNextBind = this.showNextPage.bind(this);
  showPrevBind = this.showPrevPage.bind(this);

  constructor(itemsCount: number, countPerPage: number) {
    this.countPerPage = countPerPage;
    this.itemsCount = itemsCount;
    this.pages = Math.ceil(this.itemsCount / this.countPerPage);
    this.addListners();
  }
  
  createPaginationView() {
    this.nextButton.classList.add('button_pagination-view');
    this.prevButton.classList.add('button_pagination-view');
    this.prevButton.classList.add('disabled');

    if (this.pages === this.minPagesCount) {
      this.nextButton.classList.add('disabled');
    }
  
    const paginationBlock = new BaseElement({ tag: 'div', classlist: 'pagination__block', content: '' }).elem;

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
      this.prevButton.classList.remove('disabled');
      this.prevButton.addEventListener('click', this.showPrevBind);

      if (this.currentPage >= this.pages) {
        this.nextButton.classList.add('disabled');
        this.nextButton.removeEventListener('click', this.showNextBind);
      }

      return this.currentPage;
    }
  }

  showPrevPage() {
    if (this.pages > this.minPagesCount) {
      this.currentPage--;
      this.changePageNumber();
      this.nextButton.classList.remove('disabled');
      this.nextButton.addEventListener('click', this.showNextBind);

      if (this.currentPage <= this.minPagesCount) {
        this.prevButton.classList.add('disabled');
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