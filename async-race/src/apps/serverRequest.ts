import { newCar } from "./generateNewCar";

//console.log(new newCar);

export interface Winner {
  id: number,
  wins: number,
  time: number
}

export class Request {

  async getCars() {
  const response = await fetch('http://127.0.0.1:3000/garage');
    const cars = await response.json();
    console.log(cars.length);
  return cars;
  }
  
  async getCar(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`);
    const choiseCar = await response.json();
    console.log(choiseCar);
    return choiseCar;
  }

  async createCar(createdCar: newCar) {
    const response = await fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createdCar)
    })
    const result = await response.json();
    console.log(result);
    return result;
  }

  async updateCar(car: newCar) {
    const response = await fetch(`http://127.0.0.1:3000/garage/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    const result = await response.json();
    console.log(result)
    return result;
  }

  async deleteCar(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'DELETE',
    })
    return response;
  }

  async enginePatch(id: number, status='started'||'stopped'||'drive') {
    const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
      method: 'PATCH',
    })
    const result = await response.json();
    console.log(result)
    return result;
  }

  async createWinner(winner: Winner) {
    const response = await fetch('http://127.0.0.1:3000/winners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(winner)
    })
    const result = await response.json();
    console.log(result);
    return result;
  }

  async getWinners() {
    const response = await fetch('http://127.0.0.1:3000/winners');
    const winners = await response.json();
    return winners;
  }

  async sortWinners(sortedBy: 'id'|'wins'|'time', order: 'ASC'|'DESC') {
    const response = await fetch(`http://127.0.0.1:3000/winners?_sort=${sortedBy}&_order=${order}`);
    const winners = await response.json();
    return winners;
  }

  async updateWinner(winner: Winner) {
    const response = await fetch(`http://127.0.0.1:3000/winners/${winner.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(winner)
    })
    const result = await response.json();
    console.log(result)
    return result;
  }

}


