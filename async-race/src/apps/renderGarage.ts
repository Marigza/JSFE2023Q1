import { NewElement } from "./createElement";
import { newCar } from "./generateNewCar";
import { Pagination } from "./pagination";
import { Request } from "./serverRequest";

export const mainBlock = new NewElement('div', 'main-block', '').elem;

const request = new Request();
// console.log(request.getCar(3)); //promise!!!
// console.log(request.createCar(new newCar)); //promise!!!

class carTrackView{
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
  
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
    this.carView = new NewElement('div', 'car-view', '').elem;
    this.carViewCheckView = new NewElement('div', 'car-view__check-view', '').elem;
    this.carViewTrack = new NewElement('div', 'car-view__track', '').elem;
    this.carSelectButton = new NewElement('div', 'button', 'select').elem;
    this.carRemoveButton = new NewElement('div', 'button', 'remove').elem;
    this.carNameBlock = new NewElement('div', 'car-name__block', `${this.name}`).elem;
    this.carMoveStart = new NewElement('div', 'button', 'start').elem;
    this.carMoveStop = new NewElement('div', 'button', 'stop').elem;
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

    const carSVG = `<svg class="svg-car" fill="${this.color}" xmlns="http://www.w3.org/2000/svg" id="mdi-car-sports" viewBox="0 0 24 24"><path d="M12,8.5H7L4,11H3C1.89,11 1,11.89 1,13V16H3.17C3.6,17.2 4.73,18 6,18C7.27,18 8.4,17.2 8.82,16H15.17C15.6,17.2 16.73,18 18,18C19.27,18 20.4,17.2 20.82,16H23V15C23,13.89 21.97,13.53 21,13L12,8.5M5.25,12L7.5,10H11.5L15.5,12H5.25M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" /></svg>`;
    this.carViewTrack.innerHTML = carSVG;
  }

  async deleteCarFromGarage(id: number) {
    const result = await request.deleteCar(id);
    return result;
  }

  addListners() {
    const velocity = '3s'
    const activeCar = this.carViewTrack.firstElementChild as HTMLDivElement;
    
    this.carMoveStart.addEventListener('click', () => {
      console.log('move car...');
      activeCar.classList.add('car__animation');
      activeCar.style.animationDuration = velocity;
      activeCar.addEventListener('animationend', () => {
        activeCar.classList.remove('car__animation');
      })
    })

    this.carMoveStop.addEventListener('click', () => {
      console.log('stop car...');
      activeCar?.classList.remove('car__animation');
    })

    this.carRemoveButton.addEventListener('click', () => {
      this.deleteCarFromGarage(+this.carView.id);
      this.carView.remove();
      //TODO обновить общее количество машин в гараже и страниц с машинами...
    })
  }
}

export class Garage {
  garageBlockHeader!: HTMLElement;
  garagePaginationBlock!: HTMLElement;
  createCarBlock = new NewElement('div', 'create-block', '').elem;
  garageBlock = new NewElement('div', 'garage-block', '').elem;
  createCarButton = new NewElement('div', 'button', 'create car!').elem;
  updateCarButton = new NewElement('div', 'button', 'update car!').elem;
  generateCarsButton = new NewElement('div', 'button', 'generate too many cars!').elem;
  garageBlockContent = new NewElement('div', 'garage-block_content', '').elem;
  carsPerPage = 7;

  async getCarsOnGarage() {
    const result = await request.getCars();
    const pagination = new Pagination(result.length, this.carsPerPage);
    // console.log(result);
    console.log(Math.ceil(result.length / this.carsPerPage));
    this.garageBlockHeader = new NewElement('div', 'garage-block_header', `Garage (${result.length})`).elem;
    this.garagePaginationBlock = pagination.createPaginationView();
    this.garageBlock.prepend(this.garagePaginationBlock);
    this.garageBlock.prepend(this.garageBlockHeader);
    console.log(pagination.currentPage);
    const chunkedResult = this.getChunkResult(result, this.carsPerPage);
    this.showCarsOnCurrentPage(chunkedResult, 1);
    pagination.nextButton.addEventListener('click', () => this.showCarsOnCurrentPage(chunkedResult, pagination.currentPage))
    pagination.prevButton.addEventListener('click', () => this.showCarsOnCurrentPage(chunkedResult, pagination.currentPage))
  }

  getChunkResult(arr: newCar[], chunkSize: number, cache: newCar[][] = []) {
    const tmp = [...arr];
    if (chunkSize <= 0) return cache;
    while (tmp.length) cache.push(tmp.splice(0, chunkSize));
    // console.log(cache);
    return cache;
  }

  showCarsOnCurrentPage(array: newCar[][], page: number) {
    this.garageBlockContent.innerText = '';
    for (const item of array[page - 1]) {
      console.log(item.id);
      this.appendNewCar(item.name, item.color, item.id);
    }
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
    const carTrack = new carTrackView(name, color);
    this.garageBlockContent.append(carTrack.carView);
    carTrack.carView.setAttribute('id', id.toString())
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
      // TODO здесь происходит дерганье элементов. Подумать как это убрать
      this.showNewCarOnGarage();
      this.getCarsOnGarage();
    })
    
    this.generateCarsButton.addEventListener('click', () => {
      this.garageBlockHeader.remove();
      this.garagePaginationBlock.remove();
      this.garageBlockContent.innerHTML = '';
      // TODO здесь происходит дерганье элементов. Подумать как это убрать
      // TODO долго генерируются машинки. в это время пустое поле игры...
      this.generateCars();
    })
  }

  async showNewCarOnGarage() {
    const result = await request.createCar(new newCar);
    // console.log(result.id);
    // this.appendNewCar(result.name, result.color);
    return result;
  }

  async generateCars() {
    alert('Please, wait some moments...');
    for (let i = 0; i < 100; i++) {
      await this.showNewCarOnGarage();
    }
    this.getCarsOnGarage();
  }
}


