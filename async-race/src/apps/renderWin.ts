import { NewElement } from "./createElement";
import { Pagination } from "./pagination";
import { mainBlock } from "./renderGarage";
import { Request, Winner } from "./serverRequest";

const request = new Request();

export class Winners {
  winnerBlock = new NewElement({ tag: 'div', classlist: 'winner-block', content: '' }).elem;
  winnerTable = new NewElement({ tag: 'table', classlist: 'winner-table', content: '' }).elem;
  tableHead = new NewElement({ tag: 'thead', classlist: 'thead', content: '' }).elem;
  tableBody = new NewElement({ tag: 'tbody', classlist: 'tbody', content: '' }).elem;
  tableRow = new NewElement({ tag: 'tr', classlist: 'tr', content: '' }).elem;

  render() {
    mainBlock.prepend(this.winnerBlock);
  }
  
  async renderTable() {
    const winsNumber = new NewElement({ tag: 'td', classlist: 'td', content: '' }).elem;
    const spanWins = new NewElement({ tag: 'span', classlist: 'span_text', content: 'Wins number' }).elem;
    const spanWinsIcon = new NewElement({ tag: 'span', classlist: 'span-icon', content: '' }).elem;
    const bestTime = new NewElement({ tag: 'td', classlist: 'td', content: '' }).elem;
    const spanTime = new NewElement({ tag: 'span', classlist: 'span_text', content: 'Best time in seconds' }).elem;
    const spanTimeIcon = new NewElement({ tag: 'span', classlist: 'span-icon', content: '' }).elem;
    const winnersCount = (await this.getWinners()).length;
    const currentPage = 1;
    const pagination = new Pagination(winnersCount, 10);
    const winnerPaginationBlock = pagination.createPaginationView();
    const winnerCountBlock = new NewElement({ tag: 'div', classlist: 'winner-count_block', content: `total winners = ${winnersCount}` }).elem;

    this.winnerBlock.innerHTML = '';
    this.winnerBlock.append(this.winnerTable);
    this.winnerTable.append(this.tableHead);
    this.tableHead.innerHTML = '';
    this.winnerTable.append(this.tableBody);
    this.tableBody.innerHTML = '';
    this.tableHead.append(this.tableRow);
    this.tableRow.innerHTML = '';
    this.tableRow.append(new NewElement({ tag: 'td', classlist: 'td', content: 'N' }).elem);
    this.tableRow.append(new NewElement({ tag: 'td', classlist: 'td', content: 'Image of the car' }).elem);
    this.tableRow.append(new NewElement({ tag: 'td', classlist: 'td', content: 'Name of the car' }).elem);
    winsNumber.classList.add('td_button');
    winsNumber.append(spanWins);
    winsNumber.append(spanWinsIcon);
    this.tableRow.append(winsNumber);
    bestTime.classList.add('td_button');
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
    const newRow = new NewElement({ tag: 'tr', classlist: 'tr', content: '' }).elem;
    const carImage = new NewElement({ tag: 'td', classlist: 'td', content: '' }).elem;

    this.tableBody.append(newRow);
    newRow.append(new NewElement({ tag: 'td', classlist: 'td', content: `${number}` }).elem);
    newRow.append(carImage);
    newRow.append(new NewElement({ tag: 'td', classlist: 'td', content: `${name}` }).elem);
    newRow.append(new NewElement({ tag: 'td', classlist: 'td', content: `${car.wins}` }).elem);
    newRow.append(new NewElement({ tag: 'td', classlist: 'td', content: `${car.time}` }).elem);
    carImage.innerHTML = `<svg class="svg-car" fill="${color}" xmlns="http://www.w3.org/2000/svg" id="mdi-car-sports" viewBox="0 0 24 24"><path d="M12,8.5H7L4,11H3C1.89,11 1,11.89 1,13V16H3.17C3.6,17.2 4.73,18 6,18C7.27,18 8.4,17.2 8.82,16H15.17C15.6,17.2 16.73,18 18,18C19.27,18 20.4,17.2 20.82,16H23V15C23,13.89 21.97,13.53 21,13L12,8.5M5.25,12L7.5,10H11.5L15.5,12H5.25M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" /></svg>`
  }

  hideBlock() {
    this.winnerBlock.classList.add('hide');
  }

  showBlock() {
    this.winnerBlock.classList.remove('hide');
    this.renderTable();
  }
}