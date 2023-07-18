import { NewElement } from "./createElement";
import { newCar } from "./generateNewCar";
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
  }
}

export class Garage {
  garageBlockHeader!: HTMLElement;
  createCarBlock = new NewElement('div', 'create-block', '').elem;
  garageBlock = new NewElement('div', 'garage-block', '').elem;
  createCarButton = new NewElement('div', 'button', 'create car!').elem;
  updateCarButton = new NewElement('div', 'button', 'update car!').elem;
  garageBlockContent = new NewElement('div', 'garage-block_content', '').elem;

  async getCarsOnGarage() {
    const result = await request.getCars();
    console.log(result);
    this.garageBlockHeader = new NewElement('div', 'garage-block_header', `Garage (${result.length})`).elem;
    this.garageBlock.prepend(this.garageBlockHeader);
    for (const item of result) {
      this.appendNewCar(item.name, item.color);
    }
  }

  render() {
    mainBlock.append(this.createCarBlock);
    mainBlock.append(this.garageBlock);
    this.createCarBlock.append(this.createCarButton);
    this.createCarBlock.append(this.updateCarButton);
    this.getCarsOnGarage();
    this.garageBlock.append(this.garageBlockContent);
    this.createCarBlock.classList.remove('hide');
    this.garageBlock.classList.remove('hide');
  }

  appendNewCar(name: string, color: string) {
    const carTrack = new carTrackView(name, color);
    this.garageBlockContent.append(carTrack.carView);
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
      // TODO здесь происходит дерганье элементов. Подумать как это убрать
      this.getCarsOnGarage();
      this.showNewCarOnGarage();
    }) 
  }

  async showNewCarOnGarage() {
    const result = await request.createCar(new newCar);
    console.log(result);
    this.appendNewCar(result.name, result.color);
    return result;
  }
}


