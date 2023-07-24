import { NewElement } from "./createElement";
import { mainBlock } from "./renderGarage";
import { Request, Winner } from "./serverRequest";

const request = new Request();

export class Winners {
  winnerBlock = new NewElement('div', 'winner-block', '').elem;
  winnerTable = new NewElement('table', 'winner-table', '').elem;
  tableHead= new NewElement('thead', 'thead', '').elem;
  tableBody= new NewElement('tbody', 'tbody', '').elem;
  tableRow= new NewElement('tr', 'tr', '').elem;

  render() {
    mainBlock.prepend(this.winnerBlock);
  }
  
  renderTable() {
    this.winnerBlock.innerHTML = '';
    this.winnerBlock.append(this.winnerTable);
    this.winnerTable.append(this.tableHead);
    this.tableHead.innerHTML = '';
    this.winnerTable.append(this.tableBody);
    this.tableBody.innerHTML = '';
    this.tableHead.append(this.tableRow);
    this.tableRow.innerHTML = '';
    this.tableRow.append(new NewElement('td', 'td', 'N').elem);
    this.tableRow.append(new NewElement('td', 'td', 'Image of the car').elem);
    this.tableRow.append(new NewElement('td', 'td', 'Name of the car').elem);
    const winsNumber = new NewElement('td', 'td', '').elem;
    winsNumber.classList.add('td_button');
    const spanWins = new NewElement('span', 'span_text', 'Wins number').elem;
    const spanWinsIcon = new NewElement('span', 'span-icon', '').elem;
    winsNumber.append(spanWins);
    winsNumber.append(spanWinsIcon);
    this.tableRow.append(winsNumber);
    const bestTime = new NewElement('td', 'td', '').elem;
    bestTime.classList.add('td_button');
    const spanTime = new NewElement('span', 'span_text', 'Best time in seconds').elem;
    const spanTimeIcon = new NewElement('span', 'span-icon', '').elem;
    bestTime.append(spanTime);
    bestTime.append(spanTimeIcon);
    this.tableRow.append(bestTime);
    this.getWinners();
    let isASCwins = true;
    winsNumber.addEventListener('click', () => {
      console.log('sort by wins');
      isASCwins = !isASCwins;
      !isASCwins ? this.sortWinners('wins', 'ASC') : this.sortWinners('wins', 'DESC');
    });
    let isASCtime = true;
    bestTime.addEventListener('click', () => {
      console.log('sort by time');
      isASCtime = !isASCtime;
      !isASCtime ? this.sortWinners('time', 'ASC') : this.sortWinners('time', 'DESC');
    });
  }

  async getWinners() {
    const response: Winner[] = await request.getWinners();
    console.log(response);
    this.fillWinnersTable(response);
  }

  async sortWinners(sortedBy: 'id'|'wins'|'time', order: 'ASC'|'DESC') {
    const response: Winner[] = await request.sortWinners(sortedBy, order);
    this.fillWinnersTable(response);
  }

  async fillWinnersTable(response: Winner[]) {
    this.tableBody.innerHTML = '';
    for (let i = 0; i < response.length; i++){
      console.log(response[i].id);
      const car = await request.getCar(response[i].id);
      this.renderRow(response[i], i + 1, car.color, car.name);
    }
    return response;
  }

  renderRow(car: Winner, number: number, color: string, name: string) {
    const newRow = new NewElement('tr', 'tr', '').elem;
    this.tableBody.append(newRow);
    newRow.append(new NewElement('td', 'td', `${number}`).elem);
    const carImage = new NewElement('td', 'td', '').elem;
    newRow.append(carImage);
    newRow.append(new NewElement('td', 'td', `${name}`).elem);
    newRow.append(new NewElement('td', 'td', `${car.wins}`).elem);
    newRow.append(new NewElement('td', 'td', `${car.time}`).elem);
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