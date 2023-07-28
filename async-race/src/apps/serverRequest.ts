import { newCar } from "./generateNewCar";

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

export class Request {

  async getCars() {
  const response = await fetch('http://127.0.0.1:3000/garage');
    const cars = await response.json();
  return cars;
  }

  async getCurrentCars(page: number) {
    const response = await fetch(`http://127.0.0.1:3000/garage?_limit=7&_page=${page}`);
    const cars = await response.json();
  return cars;
  }
  
  async getCar(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`);
    const choiseCar = await response.json();
    return choiseCar;
  }

  async createCar(createdCar: newCar) {
    const response = await fetch('http://127.0.0.1:3000/garage', {
      method: method.post,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createdCar)
    })
    const result = await response.json();
    return result;
  }

  async updateCar(car: newCar) {
    const response = await fetch(`http://127.0.0.1:3000/garage/${car.id}`, {
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
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: method.delete,
    })
    return response;
  }

  async deleteWinner(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: method.delete,
    })
    return response;
  }

  async enginePatch(id: number, status='started'||'stopped'||'drive') {
    const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
      method: method.patch,
    })
    const result = await response.json();
    return result;
  }

  async createWinner(winner: Winner) {
    const response = await fetch('http://127.0.0.1:3000/winners', {
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
    const response = await fetch('http://127.0.0.1:3000/winners');
    const winners = await response.json();
    return winners;
  }

  async getWinnersPerPage(number: number) {
    const response = await fetch(`http://127.0.0.1:3000/winners?_limit=10&_page=${number}`);
    const winners = await response.json();
    return winners;
  }

  async sortWinners(sortedBy: 'id' | 'wins' | 'time', order: 'ASC' | 'DESC', number: number) {
    const response = await fetch(`http://127.0.0.1:3000/winners?_limit=10&_page=${number}&_sort=${sortedBy}&_order=${order}`);
    const winners = await response.json();
    return winners;
  }

  async updateWinner(winner: Winner) {
    const response = await fetch(`http://127.0.0.1:3000/winners/${winner.id}`, {
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


