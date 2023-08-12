import { BaseElement } from "./baseElement";
import { Car } from "./car";
import { Pagination } from "./pagination";
import { Request, Winner } from "./serverRequest";
import { getSvgCar } from "./utils/getSvgCar";
import { Constants } from "./constants/constants";

export const mainBlock = new BaseElement({  tag: 'div', classlist: Constants.mainBlockClass, content: '' }).elem;

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
    this.carView = new BaseElement({ tag: 'div', classlist: Constants.carViewClass, content: '' }).elem;
    this.carViewCheckView = new BaseElement({ tag: 'div', classlist: Constants.carCheckViewClass, content: '' }).elem;
    this.carViewTrack = new BaseElement({ tag: 'div', classlist: Constants.carTrackClass, content: '' }).elem;
    this.carSelectButton = new BaseElement({ tag: 'div', classlist: Constants.buttonClass, content: 'select' }).elem;
    this.carRemoveButton = new BaseElement({ tag: 'div', classlist: Constants.buttonClass, content: 'remove' }).elem;
    this.carNameBlock = new BaseElement({ tag: 'div', classlist: Constants.carNameClass, content: `${this.name}` }).elem;
    this.carMoveStart = new BaseElement({ tag: 'button', classlist: Constants.buttonClass, content: 'start' }).elem;
    this.carMoveStop = new BaseElement({ tag: 'button', classlist: Constants.buttonClass, content: 'stop' }).elem;
    this.activeCar = this.carViewTrack.firstElementChild as HTMLDivElement;
    this.render();
    this.addListners();
  }

  render() {
    const carSVG = getSvgCar(this.color);

    this.carView.append(this.carViewCheckView);
    this.carView.append(this.carViewTrack);
    this.carViewCheckView.append(this.carSelectButton);
    this.carSelectButton.classList.add(Constants.buttonCarViewClass);
    this.carViewCheckView.append(this.carRemoveButton);
    this.carRemoveButton.classList.add(Constants.buttonCarViewClass);
    this.carViewCheckView.append(this.carNameBlock);
    this.carViewCheckView.append(this.carMoveStart);
    this.carMoveStart.classList.add(Constants.buttonCarViewClass);
    this.carViewCheckView.append(this.carMoveStop);
    this.carMoveStop.classList.add(Constants.buttonCarViewClass);
    this.carMoveStop.classList.add(Constants.disabled);
    this.carMoveStop.setAttribute(Constants.disabled, 'true')
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
      this.carMoveStart.classList.add(Constants.disabled);
      this.carMoveStart.setAttribute(Constants.disabled, 'true');
      this.carMoveStop.removeAttribute(Constants.disabled);
      this.carMoveStop.classList.remove(Constants.disabled);
      const result = await request.enginePatch(+this.carView.id, 'started');
      const multiplier = 1000;
      const time = (result.distance / result.velocity) / multiplier;
      this.activeCar.classList.add(Constants.carAnimationClass);
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
        this.activeCar.classList.remove(Constants.carAnimationClass);
        this.carMoveStart.removeAttribute(Constants.disabled);
        this.carMoveStart.classList.remove(Constants.disabled);
        this.carMoveStop.classList.add(Constants.disabled);
        this.carMoveStop.setAttribute(Constants.disabled, 'true');
      }
    } catch {
      console.log('Car with such id was not found in the garage')
    }
  }

  showWinMessage(time: number) {
    const winMessage = new BaseElement({
      tag: 'div',
      classlist: Constants.winMessageClass,
      content: `${this.name} run first by ${time} seconds`
    }).elem;
    const winMessageButton = new BaseElement({ tag: 'button', classlist: Constants.buttonClass, content: 'OK' }).elem;
    const modalWindow = new BaseElement({ tag: 'div', classlist: Constants.modalWindowClass, content: '' }).elem;

    winMessageButton.classList.add(Constants.buttonCarViewClass);
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
  createCarBlock = new BaseElement({ tag: 'div', classlist: Constants.createblockClass, content: '' }).elem;
  garageBlock = new BaseElement({ tag: 'div', classlist: Constants.garageBlockClass, content: '' }).elem;
  createCarButton = new BaseElement({ tag: 'div', classlist: Constants.buttonClass, content: 'create car!' }).elem;
  updateCarButton = new BaseElement({ tag: 'div', classlist: Constants.buttonClass, content: 'update car!' }).elem;
  generateCarsButton = new BaseElement({ tag: 'div', classlist: Constants.buttonClass, content: 'generate too many cars!' }).elem;
  garageBlockContent = new BaseElement({ tag: 'div', classlist: Constants.garageContentClass, content: '' }).elem;
  startRaceButton = new BaseElement({ tag: 'button', classlist: Constants.buttonClass, content: 'Start Race!' }).elem;
  resetRaceButton = new BaseElement({ tag: 'button', classlist: Constants.buttonClass, content: 'Reset Race' }).elem;
  carsPerPage = 7;

  async getCarsOnGarage() {
    const result = await request.getCars();
    const pagination = new Pagination(result.length, this.carsPerPage);

    this.garageBlockHeader = new BaseElement({
      tag: 'div',
      classlist: Constants.garageHeaderClass,
      content: `Garage (${result.length})`
    }).elem;
    this.garageRaceBlock = new BaseElement({ tag: 'div', classlist: Constants.garageRaceClass, content: '' }).elem;
    this.garagePaginationBlock = pagination.createPaginationView();
    this.garageBlock.prepend(this.garagePaginationBlock);
    this.garageBlock.prepend(this.garageRaceBlock);
    this.garageBlock.prepend(this.garageBlockHeader);
    this.garageRaceBlock.append(this.startRaceButton);
    this.garageRaceBlock.append(this.resetRaceButton);
    this.resetRaceButton.setAttribute(Constants.disabled, 'true');
    this.resetRaceButton.classList.add(Constants.disabled);
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
      this.startRaceButton.setAttribute(Constants.disabled, 'true');
      this.startRaceButton.classList.add(Constants.disabled);
      this.resetRaceButton.removeAttribute(Constants.disabled);
      this.resetRaceButton.classList.remove(Constants.disabled);
    });

    this.resetRaceButton.addEventListener('click', () => {
      array.forEach((elem)=>elem.stopMoving());
      this.startRaceButton.removeAttribute(Constants.disabled);
      this.startRaceButton.classList.remove(Constants.disabled);
      this.resetRaceButton.setAttribute(Constants.disabled, 'true');
      this.resetRaceButton.classList.add(Constants.disabled);
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
    this.createCarBlock.classList.remove(Constants.hideClass);
    this.garageBlock.classList.remove(Constants.hideClass);
  }

  appendNewCar(name: string, color: string, id: number) {
    const carTrack = new CarTrackView(name, color);
    this.garageBlockContent.append(carTrack.carView);
    carTrack.carView.setAttribute('id', id.toString());
    return carTrack;
  }

  hideBlock() {
    this.createCarBlock.classList.add(Constants.hideClass);
    this.garageBlock.classList.add(Constants.hideClass);
  }

  showBlock() {
    this.createCarBlock.classList.remove(Constants.hideClass);
    this.garageBlock.classList.remove(Constants.hideClass);
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


