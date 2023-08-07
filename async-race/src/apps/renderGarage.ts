import { BaseElement } from "./baseElement";
import { Car } from "./car";
import { Pagination } from "./pagination";
import { Request, Winner } from "./serverRequest";

export const mainBlock = new BaseElement({  tag: 'div', classlist: 'main-block', content: '' }).elem;

const request = new Request();

let isWinner = false;

class CarTrackView{
  name: string;
  color: string;
  carView: HTMLElement; 
  carViewCheckView: HTMLElement; 
  carViewTrack: HTMLElement; 
  carSelectButton: HTMLElement; 
  carRemoveButton: HTMLElement; 
  carNameBlock: HTMLElement; 
  carMoveStart: HTMLElement;
  carMoveStop: HTMLElement;
  activeCar: HTMLDivElement;
  
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
    this.carView = new BaseElement({ tag: 'div', classlist: 'car-view', content: '' }).elem;
    this.carViewCheckView = new BaseElement({ tag: 'div', classlist: 'car-view__check-view', content: '' }).elem;
    this.carViewTrack = new BaseElement({ tag: 'div', classlist: 'car-view__track', content: '' }).elem;
    this.carSelectButton = new BaseElement({ tag: 'div', classlist: 'button', content: 'select' }).elem;
    this.carRemoveButton = new BaseElement({ tag: 'div', classlist: 'button', content: 'remove' }).elem;
    this.carNameBlock = new BaseElement({ tag: 'div', classlist: 'car-name__block', content: `${this.name}` }).elem;
    this.carMoveStart = new BaseElement({ tag: 'button', classlist: 'button', content: 'start' }).elem;
    this.carMoveStop = new BaseElement({ tag: 'button', classlist: 'button', content: 'stop' }).elem;
    this.activeCar = this.carViewTrack.firstElementChild as HTMLDivElement;
    this.render();
    this.addListners();
  }

  render() {
    this.carView.append(this.carViewCheckView);
    this.carView.append(this.carViewTrack);
    this.carViewCheckView.append(this.carSelectButton);
    this.carSelectButton.classList.add('button_car-view');
    this.carViewCheckView.append(this.carRemoveButton);
    this.carRemoveButton.classList.add('button_car-view');
    this.carViewCheckView.append(this.carNameBlock);
    this.carViewCheckView.append(this.carMoveStart);
    this.carMoveStart.classList.add('button_car-view');
    this.carViewCheckView.append(this.carMoveStop);
    this.carMoveStop.classList.add('button_car-view');
    this.carMoveStop.classList.add('disabled');
    this.carMoveStop.setAttribute('disabled', 'true')
    
    const carSVG = `<svg class="svg-car" fill="${this.color}" xmlns="http://www.w3.org/2000/svg" id="mdi-car-sports" viewBox="0 0 24 24"><path d="M12,8.5H7L4,11H3C1.89,11 1,11.89 1,13V16H3.17C3.6,17.2 4.73,18 6,18C7.27,18 8.4,17.2 8.82,16H15.17C15.6,17.2 16.73,18 18,18C19.27,18 20.4,17.2 20.82,16H23V15C23,13.89 21.97,13.53 21,13L12,8.5M5.25,12L7.5,10H11.5L15.5,12H5.25M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" /></svg>`;
    this.carViewTrack.innerHTML = `<div>${carSVG}</div>`;
    this.activeCar = this.carViewTrack.firstElementChild as HTMLDivElement;
  }

  async deleteCarFromGarage(id: number) {
    await request.deleteCar(id);
    const winners: Winner[] = await request.getWinners();
    const winID = winners.map(item => item.id);

    if (winID.includes(id)) {
      await request.deleteWinner(id);
    }
  }

  async getVelocity() {
    try {

      this.carMoveStart.classList.add('disabled');
      this.carMoveStart.setAttribute('disabled', 'true');
      this.carMoveStop.removeAttribute('disabled');
      this.carMoveStop.classList.remove('disabled');
      const result = await request.enginePatch(+this.carView.id, 'started');
      const multiplier = 1000;
      const time = (result.distance / result.velocity) / multiplier;
      this.activeCar.classList.add('car__animation');
      this.activeCar.style.animationPlayState = 'running';
      this.activeCar.style.animationDuration = `${time.toString()}s`;
      this.getDriveRequest();

      this.activeCar.addEventListener('animationend', () => {
        this.stopMoving();
        
        if (isWinner === false) {
          isWinner = true;
          const timeRound = Math.round(time * multiplier) / multiplier;
          this.showWinMessage(timeRound);
          this.writeWinnerToRecords(timeRound);
        }
      });

      return this.activeCar;

    } catch {

      console.log('Car with such id was not found in the garage')
    }
  }

  async getDriveRequest() {
    try {

      const isDrive = await request.enginePatch(+this.carView.id, 'drive');
      return isDrive;

    } catch {

      this.activeCar.style.animationPlayState = 'paused';
      console.log('check engine!!!')
    }
  }

  async stopMoving() {
    try {

      const result = await request.enginePatch(+this.carView.id, 'stopped');

      if (result.velocity === 0) {
        this.activeCar.classList.remove('car__animation');
        this.carMoveStart.removeAttribute('disabled');
        this.carMoveStart.classList.remove('disabled');
        this.carMoveStop.classList.add('disabled');
        this.carMoveStop.setAttribute('disabled', 'true');
      }

    } catch {

      console.log('Car with such id was not found in the garage')
    }
  }

  showWinMessage(time: number) {
    const winMessage = new BaseElement({ tag: 'div', classlist: 'win-message__block', content: `${this.name} run first by ${time} seconds` }).elem;
    const winMessageButton = new BaseElement({ tag: 'button', classlist: 'button', content: 'OK' }).elem;
    const modalWindow = new BaseElement({ tag: 'div', classlist: 'modal_window', content: '' }).elem;

    winMessageButton.classList.add('button_car-view');
    mainBlock?.append(modalWindow);
    mainBlock?.append(winMessage);
    winMessage.append(winMessageButton);

    winMessageButton.addEventListener('click', () => {
      modalWindow.remove();
      winMessage.remove();
    })
  }

  async writeWinnerToRecords(time: number) {
    const winnersArray: Winner[] = await request.getWinners();

    if (winnersArray.some(el => el.id === +this.carView.id)) {
      const winnerAgainIndex = winnersArray.findIndex(el => el.id === +this.carView.id);
      winnersArray[winnerAgainIndex].wins++;

      if (winnersArray[winnerAgainIndex].time > time) {
        winnersArray[winnerAgainIndex].time = time;
      }

      request.updateWinner(winnersArray[winnerAgainIndex]);

    } else {
      
      request.createWinner({id: +this.carView.id, wins: 1, time: time});
    }
  }

  addListners() {
    this.carMoveStart.addEventListener('click', () => {
      isWinner = true;
      this.getVelocity()
    });

    this.carMoveStop.addEventListener('click', () => this.stopMoving());

    this.carRemoveButton.addEventListener('click', () => {
      this.deleteCarFromGarage(+this.carView.id);
      this.carView.remove();
    })
  }
}

export class Garage {
  garageBlockHeader!: HTMLElement;
  garageRaceBlock!: HTMLElement;
  garagePaginationBlock!: HTMLElement;
  createCarBlock = new BaseElement({ tag: 'div', classlist: 'create-block', content: '' }).elem;
  garageBlock = new BaseElement({ tag: 'div', classlist: 'garage-block', content: '' }).elem;
  createCarButton = new BaseElement({ tag: 'div', classlist: 'button', content: 'create car!' }).elem;
  updateCarButton = new BaseElement({ tag: 'div', classlist: 'button', content: 'update car!' }).elem;
  generateCarsButton = new BaseElement({ tag: 'div', classlist: 'button', content: 'generate too many cars!' }).elem;
  garageBlockContent = new BaseElement({ tag: 'div', classlist: 'garage-block_content', content: '' }).elem;
  startRaceButton = new BaseElement({ tag: 'button', classlist: 'button', content: 'Start Race!' }).elem;
  resetRaceButton = new BaseElement({ tag: 'button', classlist: 'button', content: 'Reset Race' }).elem;
  carsPerPage = 7;

  async getCarsOnGarage() {
    const result = await request.getCars();
    const pagination = new Pagination(result.length, this.carsPerPage);

    this.garageBlockHeader = new BaseElement({ tag: 'div', classlist: 'garage-block_header', content: `Garage (${result.length})` }).elem;
    this.garageRaceBlock = new BaseElement({ tag: 'div', classlist: 'garage__race-block', content: '' }).elem;
    this.garagePaginationBlock = pagination.createPaginationView();
    this.garageBlock.prepend(this.garagePaginationBlock);
    this.garageBlock.prepend(this.garageRaceBlock);
    this.garageBlock.prepend(this.garageBlockHeader);
    this.garageRaceBlock.append(this.startRaceButton);
    this.garageRaceBlock.append(this.resetRaceButton);
    this.resetRaceButton.setAttribute('disabled', 'true');
    this.resetRaceButton.classList.add('disabled');
    let chunkedResult = await this.getCurrentPage(pagination.currentPage);
    this.showCarsOnCurrentPage(chunkedResult);

    pagination.nextButton.addEventListener('click', async () => {
      chunkedResult = await this.getCurrentPage(pagination.currentPage);
      this.showCarsOnCurrentPage(chunkedResult);
    })

    pagination.prevButton.addEventListener('click', async () => {
      chunkedResult = await this.getCurrentPage(pagination.currentPage);
      this.showCarsOnCurrentPage(chunkedResult)
    })
  }

  async getCurrentPage(number: number) {
    const chunkedResult = await request.getCurrentCars(number);
    return chunkedResult;
  }

  getChunkResult(arr: Car[], chunkSize: number, cache: Car[][] = []) {
    const tmp = [...arr];

    if (chunkSize <= 0) return cache;

    while (tmp.length) cache.push(tmp.splice(0, chunkSize));

    return cache;
  }

  showCarsOnCurrentPage(array: Car[]) {
    this.garageBlockContent.innerText = '';
    const currentArray = [];

    for (const item of array) {
      const raceCar = this.appendNewCar(item.name, item.color, item.id);
      currentArray.push(raceCar);
    }

    this.addListnersForRace(currentArray);
    return currentArray;
  }

  addListnersForRace(array: CarTrackView[]) {
    this.startRaceButton.addEventListener('click', () => {
      isWinner = false;
      array.forEach((item)=> item.getVelocity());
      this.startRaceButton.setAttribute('disabled', 'true');
      this.startRaceButton.classList.add('disabled');
      this.resetRaceButton.removeAttribute('disabled');
      this.resetRaceButton.classList.remove('disabled');
    });

    this.resetRaceButton.addEventListener('click', () => {
      array.forEach((elem)=>elem.stopMoving());
      this.startRaceButton.removeAttribute('disabled');
      this.startRaceButton.classList.remove('disabled');
      this.resetRaceButton.setAttribute('disabled', 'true');
      this.resetRaceButton.classList.add('disabled');
      isWinner = false;
    });
  }

  render() {
    mainBlock.append(this.createCarBlock);
    mainBlock.append(this.garageBlock);
    this.createCarBlock.append(this.createCarButton);
    this.createCarBlock.append(this.updateCarButton);
    this.createCarBlock.append(this.generateCarsButton);
    this.getCarsOnGarage();
    this.garageBlock.append(this.garageBlockContent);
    this.createCarBlock.classList.remove('hide');
    this.garageBlock.classList.remove('hide');
  }

  appendNewCar(name: string, color: string, id: number) {
    const carTrack = new CarTrackView(name, color);
    this.garageBlockContent.append(carTrack.carView);
    carTrack.carView.setAttribute('id', id.toString());
    return carTrack;
  }

  hideBlock() {
    this.createCarBlock.classList.add('hide');
    this.garageBlock.classList.add('hide');
  }

  showBlock() {
    this.createCarBlock.classList.remove('hide');
    this.garageBlock.classList.remove('hide');
  }

  addListners() {
    this.createCarButton.addEventListener('click', () => {
      this.garageBlockHeader.remove();
      this.garagePaginationBlock.remove();
      this.garageBlockContent.innerHTML = '';
      this.showNewCarOnGarage();
      this.getCarsOnGarage();
    })
    
    this.generateCarsButton.addEventListener('click', () => {
      this.garageBlockHeader.remove();
      this.garagePaginationBlock.remove();
      this.garageBlockContent.innerHTML = '';
      this.generateCars();
    })
  }

  async showNewCarOnGarage() {
    const result = await request.createCar(new Car);
    return result;
  }

  async generateCars() {
    const numberOfGeneratedCars = 100;

    alert('Please, wait some moments...');
    

    for (let i = 0; i < numberOfGeneratedCars; i++) {
      await this.showNewCarOnGarage();
    }

    this.getCarsOnGarage();
  }
}


