import { Car } from "./car";

export interface Winner {
  id: number,
  wins: number,
  time: number
}

enum method {
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
  patch = 'PATCH'
}

const ServerURL = 'http://127.0.0.1:3000';
const garageURL = '/garage';
const winnerURL = '/winners';
const engineURL = '/engine';
const carsOnPage = 7;
const winnersOnPage = 10;

export class Request {

  async getCars() {
    const response = await fetch(`${ServerURL}${garageURL}`);
    const cars = await response.json();
    return cars;
  }

  async getCurrentCars(page: number) {
    const response = await fetch(`${ServerURL}${garageURL}?_limit=${carsOnPage}&_page=${page}`);
    const cars = await response.json();
    return cars;
  }
  
  async getCar(id: number) {
    const response = await fetch(`${ServerURL}${garageURL}/${id}`);
    const choiseCar = await response.json();
    return choiseCar;
  }

  async createCar(createdCar: Car) {
    const response = await fetch(`${ServerURL}${garageURL}`, {
      method: method.post,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createdCar)
    })
    const result = await response.json();
    return result;
  }

  async updateCar(car: Car) {
    const response = await fetch(`${ServerURL}${garageURL}/${car.id}`, {
      method: method.put,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    const result = await response.json();
    return result;
  }

  async deleteCar(id: number) {
    const response = await fetch(`${ServerURL}${garageURL}/${id}`, {
      method: method.delete,
    })
    return response;
  }

  async deleteWinner(id: number) {
    const response = await fetch(`${ServerURL}${winnerURL}/${id}`, {
      method: method.delete,
    })
    return response;
  }

  async enginePatch(id: number, status: 'started' | 'stopped' | 'drive') {
    const response = await fetch(`${ServerURL}${engineURL}?id=${id}&status=${status}`, {
      method: method.patch,
    })
    const result = await response.json();
    return result;
  }

  async createWinner(winner: Winner) {
    const response = await fetch(`${ServerURL}${winnerURL}`, {
      method: method.post,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(winner)
    })
    const result = await response.json();
    return result;
  }

  async getWinners() {
    const response = await fetch(`${ServerURL}${winnerURL}`);
    const winners = await response.json();
    return winners;
  }

  async getWinnersPerPage(number: number) {
    const response = await fetch(`${ServerURL}${winnerURL}?_limit=${winnersOnPage}&_page=${number}`);
    const winners = await response.json();
    return winners;
  }

  async sortWinners(sortedBy: 'id' | 'wins' | 'time', order: 'ASC' | 'DESC', number: number) {
    const response = await fetch(`${ServerURL}${winnerURL}?_limit=${winnersOnPage}&_page=${number}&_sort=${sortedBy}&_order=${order}`);
    const winners = await response.json();
    return winners;
  }

  async updateWinner(winner: Winner) {
    const response = await fetch(`${ServerURL}${winnerURL}/${winner.id}`, {
      method: method.put,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(winner)
    })
    const result = await response.json();
    return result;
  }
}


