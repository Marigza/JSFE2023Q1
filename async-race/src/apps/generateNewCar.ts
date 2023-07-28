
export class newCar {
  name: string;
  color: string;
  id: number;
  colorCodeLength = 6;
  
  constructor() {
    this.name = this.createName();
    this.color = this.createColor();
    this.id = 0;
  }

  createName() {
    const modelArray = ['mazda', 'lada', 'nissan', 'lamba', 'porshe', 'gazel', 'toyota', 'bmw', 'volga', 'kia'];
    const markArray = ['x1', 'z2', 'c4', 'y6', 'q3', 'f5', 'a6', 's7', 'y8', 'w4'];
    const modelIndex = Math.floor(Math.random() * modelArray.length);
    const markIndex = Math.floor(Math.random() * markArray.length);

    this.name = `${modelArray[modelIndex]}-${markArray[markIndex]}`;

    return this.name;
  }

  createColor() {
    const colorArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const readyColor = [];

    while (readyColor.length < this.colorCodeLength) {
      const colorIndex = Math.floor(Math.random() * colorArray.length);
      readyColor.push(colorArray[colorIndex]);
    }

    return `#${readyColor.join('')}`
  }
}