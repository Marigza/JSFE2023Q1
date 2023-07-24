/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>async-race</title>\r\n</head>\r\n<body>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/apps/createElement.ts":
/*!***********************************!*\
  !*** ./src/apps/createElement.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewElement: () => (/* binding */ NewElement)
/* harmony export */ });
class NewElement {
    constructor(tag, classlist, content) {
        this.elem = document.createElement(tag);
        this.createElem(classlist, content);
    }
    createElem(classlist, content) {
        this.elem.classList.add(classlist);
        this.elem.innerText = content;
    }
}


/***/ }),

/***/ "./src/apps/generateNewCar.ts":
/*!************************************!*\
  !*** ./src/apps/generateNewCar.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newCar: () => (/* binding */ newCar)
/* harmony export */ });
class newCar {
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
        while (readyColor.length <= 5) {
            const colorIndex = Math.floor(Math.random() * colorArray.length);
            readyColor.push(colorArray[colorIndex]);
        }
        return `#${readyColor.join('')}`;
    }
}


/***/ }),

/***/ "./src/apps/pagination.ts":
/*!********************************!*\
  !*** ./src/apps/pagination.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pagination: () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/apps/createElement.ts");

class Pagination {
    constructor(itemsCount, countPerPage) {
        this.currentPage = 1;
        this.prevButton = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'button', 'prev').elem;
        this.nextButton = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'button', 'next').elem;
        this.pageBlock = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'page__block', '').elem;
        this.showNextBind = this.showNextPage.bind(this);
        this.showPrevBind = this.showPrevPage.bind(this);
        this.countPerPage = countPerPage;
        this.itemsCount = itemsCount;
        this.pages = Math.ceil(this.itemsCount / this.countPerPage);
        this.addListners();
    }
    createPaginationView() {
        this.nextButton.classList.add('button_pagination-view');
        this.prevButton.classList.add('button_pagination-view');
        this.prevButton.classList.add('disabled');
        if (this.pages === 1) {
            this.nextButton.classList.add('disabled');
        }
        const paginationBlock = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'pagination__block', '').elem;
        paginationBlock.append(this.pageBlock);
        this.changePageNumber();
        paginationBlock.append(this.prevButton);
        paginationBlock.append(this.nextButton);
        return paginationBlock;
    }
    changePageNumber() {
        this.pageBlock.innerText = `page(${this.currentPage} from ${this.pages})`;
    }
    showNextPage() {
        if (this.pages > 1) {
            this.currentPage++;
            this.changePageNumber();
            this.prevButton.classList.remove('disabled');
            this.prevButton.addEventListener('click', this.showPrevBind);
            if (this.currentPage >= this.pages) {
                this.nextButton.classList.add('disabled');
                this.nextButton.removeEventListener('click', this.showNextBind);
            }
            return this.currentPage;
        }
    }
    showPrevPage() {
        if (this.pages > 1) {
            this.currentPage--;
            this.changePageNumber();
            this.nextButton.classList.remove('disabled');
            this.nextButton.addEventListener('click', this.showNextBind);
            if (this.currentPage <= 1) {
                this.prevButton.classList.add('disabled');
                this.prevButton.removeEventListener('click', this.showPrevBind);
            }
            return this.currentPage;
        }
    }
    addListners() {
        this.nextButton.addEventListener('click', this.showNextBind);
        this.prevButton.addEventListener('click', this.showPrevBind);
    }
}


/***/ }),

/***/ "./src/apps/render.ts":
/*!****************************!*\
  !*** ./src/apps/render.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: () => (/* binding */ body)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/apps/createElement.ts");
/* harmony import */ var _renderGarage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGarage */ "./src/apps/renderGarage.ts");
/* harmony import */ var _renderWin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderWin */ "./src/apps/renderWin.ts");



const body = document.querySelector('body');
const header = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('header', 'header', 'Start Race!!!').elem;
const main = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('main', 'main', '').elem;
const mainButtons = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'buttons_wrapper', '').elem;
const buttonGarage = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'button', 'GARAGE').elem;
const buttonWinners = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'button', 'WINNERS').elem;
const garage = new _renderGarage__WEBPACK_IMPORTED_MODULE_1__.Garage();
const winners = new _renderWin__WEBPACK_IMPORTED_MODULE_2__.Winners();
garage.render();
winners.render();
winners.hideBlock();
garage.addListners();
body === null || body === void 0 ? void 0 : body.append(header);
body === null || body === void 0 ? void 0 : body.append(main);
main.prepend(mainButtons);
mainButtons === null || mainButtons === void 0 ? void 0 : mainButtons.append(buttonGarage);
mainButtons === null || mainButtons === void 0 ? void 0 : mainButtons.append(buttonWinners);
main === null || main === void 0 ? void 0 : main.append(_renderGarage__WEBPACK_IMPORTED_MODULE_1__.mainBlock);
buttonGarage.addEventListener('click', () => {
    winners.hideBlock();
    garage.showBlock();
});
buttonWinners.addEventListener('click', () => {
    garage.hideBlock();
    winners.showBlock();
});


/***/ }),

/***/ "./src/apps/renderGarage.ts":
/*!**********************************!*\
  !*** ./src/apps/renderGarage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Garage: () => (/* binding */ Garage),
/* harmony export */   mainBlock: () => (/* binding */ mainBlock)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/apps/createElement.ts");
/* harmony import */ var _generateNewCar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateNewCar */ "./src/apps/generateNewCar.ts");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination */ "./src/apps/pagination.ts");
/* harmony import */ var _serverRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serverRequest */ "./src/apps/serverRequest.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const mainBlock = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'main-block', '').elem;
const request = new _serverRequest__WEBPACK_IMPORTED_MODULE_3__.Request();
let isWinner = false;
class carTrackView {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.carView = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'car-view', '').elem;
        this.carViewCheckView = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'car-view__check-view', '').elem;
        this.carViewTrack = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'car-view__track', '').elem;
        this.carSelectButton = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'button', 'select').elem;
        this.carRemoveButton = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'button', 'remove').elem;
        this.carNameBlock = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'car-name__block', `${this.name}`).elem;
        this.carMoveStart = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('button', 'button', 'start').elem;
        this.carMoveStop = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('button', 'button', 'stop').elem;
        this.activeCar = this.carViewTrack.firstElementChild;
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
        this.carMoveStop.setAttribute('disabled', 'true');
        const carSVG = `<svg class="svg-car" fill="${this.color}" xmlns="http://www.w3.org/2000/svg" id="mdi-car-sports" viewBox="0 0 24 24"><path d="M12,8.5H7L4,11H3C1.89,11 1,11.89 1,13V16H3.17C3.6,17.2 4.73,18 6,18C7.27,18 8.4,17.2 8.82,16H15.17C15.6,17.2 16.73,18 18,18C19.27,18 20.4,17.2 20.82,16H23V15C23,13.89 21.97,13.53 21,13L12,8.5M5.25,12L7.5,10H11.5L15.5,12H5.25M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" /></svg>`;
        this.carViewTrack.innerHTML = `<div>${carSVG}</div>`;
        this.activeCar = this.carViewTrack.firstElementChild;
    }
    deleteCarFromGarage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteCar = yield request.deleteCar(id);
            const deleteWin = yield request.deleteWinner(id);
            const deleted = `${deleteCar}, ${deleteWin}`;
            return deleted;
        });
    }
    getVelocity() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.carMoveStart.classList.add('disabled');
                this.carMoveStart.setAttribute('disabled', 'true');
                this.carMoveStop.removeAttribute('disabled');
                this.carMoveStop.classList.remove('disabled');
                const result = yield request.enginePatch(+this.carView.id, 'started');
                const time = (result.distance / result.velocity) / 1000;
                this.activeCar.classList.add('car__animation');
                this.activeCar.style.animationPlayState = 'running';
                this.activeCar.style.animationDuration = `${time.toString()}s`;
                this.getDriveRequest();
                this.activeCar.addEventListener('animationend', () => {
                    this.stopMoving();
                    if (isWinner === false) {
                        isWinner = true;
                        const timeRound = Math.round(time * 1000) / 1000;
                        this.showWinMessage(timeRound);
                        this.writeWinnerToRecords(timeRound);
                    }
                });
                return this.activeCar;
            }
            catch (_a) {
                console.log('Car with such id was not found in the garage');
            }
        });
    }
    getDriveRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isDrive = yield request.enginePatch(+this.carView.id, 'drive');
                return isDrive;
            }
            catch (_a) {
                this.activeCar.style.animationPlayState = 'paused';
                console.log('check engine!!!');
            }
        });
    }
    stopMoving() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield request.enginePatch(+this.carView.id, 'stopped');
                if (result.velocity === 0) {
                    this.activeCar.classList.remove('car__animation');
                    this.carMoveStart.removeAttribute('disabled');
                    this.carMoveStart.classList.remove('disabled');
                    this.carMoveStop.classList.add('disabled');
                    this.carMoveStop.setAttribute('disabled', 'true');
                }
            }
            catch (_a) {
                console.log('Car with such id was not found in the garage');
            }
        });
    }
    showWinMessage(time) {
        const winMessage = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'win-message__block', `${this.name} run first by ${time} seconds`).elem;
        const winMessageButton = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('button', 'button', 'OK').elem;
        const modalWindow = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'modal_window', '').elem;
        winMessageButton.classList.add('button_car-view');
        mainBlock === null || mainBlock === void 0 ? void 0 : mainBlock.append(modalWindow);
        mainBlock === null || mainBlock === void 0 ? void 0 : mainBlock.append(winMessage);
        winMessage.append(winMessageButton);
        winMessageButton.addEventListener('click', () => {
            modalWindow.remove();
            winMessage.remove();
        });
    }
    writeWinnerToRecords(time) {
        return __awaiter(this, void 0, void 0, function* () {
            const winnersArray = yield request.getWinners();
            if (winnersArray.some(el => el.id === +this.carView.id)) {
                const winnerAgainIndex = winnersArray.findIndex(el => el.id === +this.carView.id);
                winnersArray[winnerAgainIndex].wins++;
                if (winnersArray[winnerAgainIndex].time > time) {
                    winnersArray[winnerAgainIndex].time = time;
                }
                request.updateWinner(winnersArray[winnerAgainIndex]);
            }
            else {
                request.createWinner({ id: +this.carView.id, wins: 1, time: time });
            }
        });
    }
    addListners() {
        this.carMoveStart.addEventListener('click', () => {
            isWinner = true;
            this.getVelocity();
        });
        this.carMoveStop.addEventListener('click', () => this.stopMoving());
        this.carRemoveButton.addEventListener('click', () => {
            this.deleteCarFromGarage(+this.carView.id);
            this.carView.remove();
        });
    }
}
class Garage {
    constructor() {
        this.createCarBlock = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'create-block', '').elem;
        this.garageBlock = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'garage-block', '').elem;
        this.createCarButton = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'button', 'create car!').elem;
        this.updateCarButton = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'button', 'update car!').elem;
        this.generateCarsButton = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'button', 'generate too many cars!').elem;
        this.garageBlockContent = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'garage-block_content', '').elem;
        this.startRaceButton = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('button', 'button', 'Start Race!').elem;
        this.resetRaceButton = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('button', 'button', 'Reset Race').elem;
        this.carsPerPage = 7;
    }
    getCarsOnGarage() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield request.getCars();
            const pagination = new _pagination__WEBPACK_IMPORTED_MODULE_2__.Pagination(result.length, this.carsPerPage);
            this.garageBlockHeader = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'garage-block_header', `Garage (${result.length})`).elem;
            this.garageRaceBlock = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'garage__race-block', '').elem;
            this.garagePaginationBlock = pagination.createPaginationView();
            this.garageBlock.prepend(this.garagePaginationBlock);
            this.garageBlock.prepend(this.garageRaceBlock);
            this.garageBlock.prepend(this.garageBlockHeader);
            this.garageRaceBlock.append(this.startRaceButton);
            this.garageRaceBlock.append(this.resetRaceButton);
            this.resetRaceButton.setAttribute('disabled', 'true');
            this.resetRaceButton.classList.add('disabled');
            let chunkedResult = yield this.getCurrentPage(pagination.currentPage);
            this.showCarsOnCurrentPage(chunkedResult);
            pagination.nextButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                chunkedResult = yield this.getCurrentPage(pagination.currentPage);
                this.showCarsOnCurrentPage(chunkedResult);
            }));
            pagination.prevButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                chunkedResult = yield this.getCurrentPage(pagination.currentPage);
                this.showCarsOnCurrentPage(chunkedResult);
            }));
        });
    }
    getCurrentPage(number) {
        return __awaiter(this, void 0, void 0, function* () {
            const chunkedResult = yield request.getCurrentCars(number);
            return chunkedResult;
        });
    }
    getChunkResult(arr, chunkSize, cache = []) {
        const tmp = [...arr];
        if (chunkSize <= 0)
            return cache;
        while (tmp.length)
            cache.push(tmp.splice(0, chunkSize));
        return cache;
    }
    showCarsOnCurrentPage(array) {
        this.garageBlockContent.innerText = '';
        const currentArray = [];
        for (const item of array) {
            const raceCar = this.appendNewCar(item.name, item.color, item.id);
            currentArray.push(raceCar);
        }
        this.addListnersForRace(currentArray);
        return currentArray;
    }
    addListnersForRace(array) {
        this.startRaceButton.addEventListener('click', () => {
            isWinner = false;
            array.forEach((item) => item.getVelocity());
            this.startRaceButton.setAttribute('disabled', 'true');
            this.startRaceButton.classList.add('disabled');
            this.resetRaceButton.removeAttribute('disabled');
            this.resetRaceButton.classList.remove('disabled');
        });
        this.resetRaceButton.addEventListener('click', () => {
            array.forEach((elem) => elem.stopMoving());
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
    appendNewCar(name, color, id) {
        const carTrack = new carTrackView(name, color);
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
        });
        this.generateCarsButton.addEventListener('click', () => {
            this.garageBlockHeader.remove();
            this.garagePaginationBlock.remove();
            this.garageBlockContent.innerHTML = '';
            this.generateCars();
        });
    }
    showNewCarOnGarage() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield request.createCar(new _generateNewCar__WEBPACK_IMPORTED_MODULE_1__.newCar);
            return result;
        });
    }
    generateCars() {
        return __awaiter(this, void 0, void 0, function* () {
            alert('Please, wait some moments...');
            for (let i = 0; i < 100; i++) {
                yield this.showNewCarOnGarage();
            }
            this.getCarsOnGarage();
        });
    }
}


/***/ }),

/***/ "./src/apps/renderWin.ts":
/*!*******************************!*\
  !*** ./src/apps/renderWin.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Winners: () => (/* binding */ Winners)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/apps/createElement.ts");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination */ "./src/apps/pagination.ts");
/* harmony import */ var _renderGarage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGarage */ "./src/apps/renderGarage.ts");
/* harmony import */ var _serverRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serverRequest */ "./src/apps/serverRequest.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const request = new _serverRequest__WEBPACK_IMPORTED_MODULE_3__.Request();
class Winners {
    constructor() {
        this.winnerBlock = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'winner-block', '').elem;
        this.winnerTable = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('table', 'winner-table', '').elem;
        this.tableHead = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('thead', 'thead', '').elem;
        this.tableBody = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('tbody', 'tbody', '').elem;
        this.tableRow = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('tr', 'tr', '').elem;
    }
    render() {
        _renderGarage__WEBPACK_IMPORTED_MODULE_2__.mainBlock.prepend(this.winnerBlock);
    }
    renderTable() {
        return __awaiter(this, void 0, void 0, function* () {
            this.winnerBlock.innerHTML = '';
            this.winnerBlock.append(this.winnerTable);
            this.winnerTable.append(this.tableHead);
            this.tableHead.innerHTML = '';
            this.winnerTable.append(this.tableBody);
            this.tableBody.innerHTML = '';
            this.tableHead.append(this.tableRow);
            this.tableRow.innerHTML = '';
            this.tableRow.append(new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('td', 'td', 'N').elem);
            this.tableRow.append(new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('td', 'td', 'Image of the car').elem);
            this.tableRow.append(new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('td', 'td', 'Name of the car').elem);
            const winsNumber = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('td', 'td', '').elem;
            winsNumber.classList.add('td_button');
            const spanWins = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('span', 'span_text', 'Wins number').elem;
            const spanWinsIcon = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('span', 'span-icon', '').elem;
            winsNumber.append(spanWins);
            winsNumber.append(spanWinsIcon);
            this.tableRow.append(winsNumber);
            const bestTime = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('td', 'td', '').elem;
            bestTime.classList.add('td_button');
            const spanTime = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('span', 'span_text', 'Best time in seconds').elem;
            const spanTimeIcon = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('span', 'span-icon', '').elem;
            bestTime.append(spanTime);
            bestTime.append(spanTimeIcon);
            this.tableRow.append(bestTime);
            const winnersCount = (yield this.getWinners()).length;
            //const pageCount = Math.ceil(winnersCount / 10);
            const currentPage = 1;
            const pagination = new _pagination__WEBPACK_IMPORTED_MODULE_1__.Pagination(winnersCount, 10);
            const winnerPaginationBlock = pagination.createPaginationView();
            this.winnerBlock.prepend(winnerPaginationBlock);
            // this.changePage(currentPage, pageCount);
            this.getWinnersPerPage(currentPage);
            const winnerCountBlock = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('div', 'winner-count_block', `total winners = ${winnersCount}`).elem;
            this.winnerBlock.prepend(winnerCountBlock);
            let isASCwins = true;
            winsNumber.addEventListener('click', () => {
                isASCwins = !isASCwins;
                !isASCwins ? this.sortWinners('wins', 'ASC', currentPage) : this.sortWinners('wins', 'DESC', currentPage);
            });
            let isASCtime = true;
            bestTime.addEventListener('click', () => {
                isASCtime = !isASCtime;
                !isASCtime ? this.sortWinners('time', 'ASC', currentPage) : this.sortWinners('time', 'DESC', currentPage);
            });
        });
    }
    getWinners() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request.getWinners();
            return response;
        });
    }
    getWinnersPerPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request.getWinnersPerPage(page);
            this.fillWinnersTable(response);
        });
    }
    sortWinners(sortedBy, order, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request.sortWinners(sortedBy, order, page);
            this.fillWinnersTable(response);
            return response;
        });
    }
    fillWinnersTable(response) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tableBody.innerHTML = '';
            for (let i = 0; i < response.length; i++) {
                const car = yield request.getCar(response[i].id);
                this.renderRow(response[i], i + 1, car.color, car.name);
            }
            return response;
        });
    }
    renderRow(car, number, color, name) {
        const newRow = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('tr', 'tr', '').elem;
        this.tableBody.append(newRow);
        newRow.append(new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('td', 'td', `${number}`).elem);
        const carImage = new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('td', 'td', '').elem;
        newRow.append(carImage);
        newRow.append(new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('td', 'td', `${name}`).elem);
        newRow.append(new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('td', 'td', `${car.wins}`).elem);
        newRow.append(new _createElement__WEBPACK_IMPORTED_MODULE_0__.NewElement('td', 'td', `${car.time}`).elem);
        carImage.innerHTML = `<svg class="svg-car" fill="${color}" xmlns="http://www.w3.org/2000/svg" id="mdi-car-sports" viewBox="0 0 24 24"><path d="M12,8.5H7L4,11H3C1.89,11 1,11.89 1,13V16H3.17C3.6,17.2 4.73,18 6,18C7.27,18 8.4,17.2 8.82,16H15.17C15.6,17.2 16.73,18 18,18C19.27,18 20.4,17.2 20.82,16H23V15C23,13.89 21.97,13.53 21,13L12,8.5M5.25,12L7.5,10H11.5L15.5,12H5.25M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z" /></svg>`;
    }
    hideBlock() {
        this.winnerBlock.classList.add('hide');
    }
    showBlock() {
        this.winnerBlock.classList.remove('hide');
        this.renderTable();
    }
}


/***/ }),

/***/ "./src/apps/serverRequest.ts":
/*!***********************************!*\
  !*** ./src/apps/serverRequest.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Request: () => (/* binding */ Request)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Request {
    getCars() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://127.0.0.1:3000/garage');
            const cars = yield response.json();
            return cars;
        });
    }
    getCurrentCars(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://127.0.0.1:3000/garage?_limit=7&_page=${page}`);
            const cars = yield response.json();
            return cars;
        });
    }
    getCar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://127.0.0.1:3000/garage/${id}`);
            const choiseCar = yield response.json();
            return choiseCar;
        });
    }
    createCar(createdCar) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://127.0.0.1:3000/garage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(createdCar)
            });
            const result = yield response.json();
            return result;
        });
    }
    updateCar(car) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://127.0.0.1:3000/garage/${car.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            });
            const result = yield response.json();
            return result;
        });
    }
    deleteCar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://127.0.0.1:3000/garage/${id}`, {
                method: 'DELETE',
            });
            return response;
        });
    }
    deleteWinner(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://127.0.0.1:3000/winners/${id}`, {
                method: 'DELETE',
            });
            return response;
        });
    }
    enginePatch(id, status = 'started' || 0 || 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
                method: 'PATCH',
            });
            const result = yield response.json();
            return result;
        });
    }
    createWinner(winner) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://127.0.0.1:3000/winners', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(winner)
            });
            const result = yield response.json();
            return result;
        });
    }
    getWinners() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://127.0.0.1:3000/winners');
            const winners = yield response.json();
            return winners;
        });
    }
    getWinnersPerPage(number) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://127.0.0.1:3000/winners?_limit=10&_page=${number}`);
            const winners = yield response.json();
            return winners;
        });
    }
    sortWinners(sortedBy, order, number) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://127.0.0.1:3000/winners?_limit=10&_page=${number}&_sort=${sortedBy}&_order=${order}`);
            const winners = yield response.json();
            return winners;
        });
    }
    updateWinner(winner) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://127.0.0.1:3000/winners/${winner.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(winner)
            });
            const result = yield response.json();
            return result;
        });
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _apps_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps/render */ "./src/apps/render.ts");



_apps_render__WEBPACK_IMPORTED_MODULE_2__.body === null || _apps_render__WEBPACK_IMPORTED_MODULE_2__.body === void 0 ? void 0 : _apps_render__WEBPACK_IMPORTED_MODULE_2__.body.classList.add('body');

})();

/******/ })()
;
//# sourceMappingURL=bundle.01083239680df7d189fe.js.map