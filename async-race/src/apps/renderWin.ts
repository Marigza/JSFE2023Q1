import { BaseElement } from "./baseElement";
import { Pagination } from "./pagination";
import { mainBlock } from "./renderGarage";
import { Request, Winner } from "./serverRequest";
import { getSvgCar } from "./utils/getSvgCar";
import { Constants } from "./constants/constants";

const request = new Request();

export class Winners {
  winnerBlock = new BaseElement({ tag: 'div', classlist: Constants.winnerBlockClass, content: '' }).elem;
  winnerTable = new BaseElement({ tag: 'table', classlist: Constants.winnerTableClass, content: '' }).elem;
  tableHead = new BaseElement({ tag: 'thead', classlist: Constants.tableHeadClass, content: '' }).elem;
  tableBody = new BaseElement({ tag: 'tbody', classlist: Constants.tableBodyClass, content: '' }).elem;
  tableRow = new BaseElement({ tag: 'tr', classlist: Constants.tableRowClass, content: '' }).elem;

  render() {
    mainBlock.prepend(this.winnerBlock);
  }
  
  async renderTable() {
    const winsNumber = new BaseElement({ tag: 'td', classlist: Constants.tableCellClass, content: '' }).elem;
    const spanWins = new BaseElement({ tag: 'span', classlist: Constants.spanTextClass, content: 'Wins number' }).elem;
    const spanWinsIcon = new BaseElement({ tag: 'span', classlist: Constants.spanIconClass, content: '' }).elem;
    const bestTime = new BaseElement({ tag: 'td', classlist: Constants.tableCellClass, content: '' }).elem;
    const spanTime = new BaseElement({ tag: 'span', classlist: Constants.spanTextClass, content: 'Best time in seconds' }).elem;
    const spanTimeIcon = new BaseElement({ tag: 'span', classlist: Constants.spanIconClass, content: '' }).elem;
    const winnersCount = (await this.getWinners()).length;
    const currentPage = 1;
    const pagination = new Pagination(winnersCount, 10);
    const winnerPaginationBlock = pagination.createPaginationView();
    const winnerCountBlock = new BaseElement({
      tag: 'div',
      classlist: Constants.countWinBlockClass,
      content: `total winners = ${winnersCount}`
    }).elem;

    this.winnerBlock.innerHTML = '';
    this.winnerBlock.append(this.winnerTable);
    this.winnerTable.append(this.tableHead);
    this.tableHead.innerHTML = '';
    this.winnerTable.append(this.tableBody);
    this.tableBody.innerHTML = '';
    this.tableHead.append(this.tableRow);
    this.tableRow.innerHTML = '';
    this.tableRow.append(new BaseElement({ tag: 'td', classlist: Constants.tableCellClass, content: 'N' }).elem);
    this.tableRow.append(new BaseElement({ tag: 'td', classlist: Constants.tableCellClass, content: 'Image of the car' }).elem);
    this.tableRow.append(new BaseElement({ tag: 'td', classlist: Constants.tableCellClass, content: 'Name of the car' }).elem);
    winsNumber.classList.add(Constants.tableCellButtonClass);
    winsNumber.append(spanWins);
    winsNumber.append(spanWinsIcon);
    this.tableRow.append(winsNumber);
    bestTime.classList.add(Constants.tableCellButtonClass);
    bestTime.append(spanTime);
    bestTime.append(spanTimeIcon);
    this.tableRow.append(bestTime);
    this.winnerBlock.prepend(winnerPaginationBlock);
    this.getWinnersPerPage(currentPage);
    this.winnerBlock.prepend(winnerCountBlock);
    this.activateSorting(winsNumber, currentPage, 'wins');
    this.activateSorting(bestTime, currentPage, 'time');
  }

  async getWinners() {
    const response: Winner[] = await request.getWinners();

    return response;
  }

  async getWinnersPerPage(page: number) {
    const response: Winner[] = await request.getWinnersPerPage(page);

    this.fillWinnersTable(response);
  }

  activateSorting(button: HTMLElement, currentPage: number, sortParam: 'wins' |'time') {
    let isASC = true;

    button.addEventListener('click', () => {
      isASC = !isASC;
      isASC ? this.sortWinners(sortParam, 'ASC', currentPage) : this.sortWinners(sortParam, 'DESC', currentPage);
    });
  }

  async sortWinners(sortedBy: 'id' | 'wins' | 'time', order: 'ASC' | 'DESC', page: number) {
    const response: Winner[] = await request.sortWinners(sortedBy, order, page);

    this.fillWinnersTable(response);
    return response;
  }

  async fillWinnersTable(response: Winner[]) {
    this.tableBody.innerHTML = '';

    for (let i = 0; i < response.length; i++){
      const car = await request.getCar(response[i].id);
      this.renderRow(response[i], i + 1, car.color, car.name);
    }

    return response;
  }

  renderRow(car: Winner, number: number, color: string, name: string) {
    const newRow = new BaseElement({ tag: 'tr', classlist: Constants.tableRowClass, content: '' }).elem;
    const carImage = new BaseElement({ tag: 'td', classlist: Constants.tableCellClass, content: '' }).elem;

    this.tableBody.append(newRow);
    newRow.append(new BaseElement({ tag: 'td', classlist: Constants.tableCellClass, content: `${number}` }).elem);
    newRow.append(carImage);
    newRow.append(new BaseElement({ tag: 'td', classlist: Constants.tableCellClass, content: `${name}` }).elem);
    newRow.append(new BaseElement({ tag: 'td', classlist: Constants.tableCellClass, content: `${car.wins}` }).elem);
    newRow.append(new BaseElement({ tag: 'td', classlist: Constants.tableCellClass, content: `${car.time}` }).elem);

    carImage.innerHTML = getSvgCar(color);
  }

  hideBlock() {
    this.winnerBlock.classList.add(Constants.hideClass);
  }

  showBlock() {
    this.winnerBlock.classList.remove(Constants.hideClass);
    this.renderTable();
  }
}