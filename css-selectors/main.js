/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/svg/done.svg */ "./src/assets/svg/done.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/svg/done-helped.svg */ "./src/assets/svg/done-helped.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/svg/github.svg */ "./src/assets/svg/github.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/svg/rs_school_js.svg */ "./src/assets/svg/rs_school_js.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

body {
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}

.main {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 1vh;
  gap: 1vh;
  margin: 10px;
}

.block1 {
  grid-column: span 4;
  border: 1px solid #000;
}

.block2 {
  grid-row: span 3;
  border: 1px solid #000;
}

.block3 {
  grid-area: span 2/span 2;
  border: 1px solid #000;
}

.block4 {
  grid-area: span 2/span 2;
  border: 1px solid #000;
}

.level__icon {
  display: block;
  width: 24px;
  height: 24px;
}

.level__icon_active {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center no-repeat;
}

.level__icon_activeHelp {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center no-repeat;
}

.block__level {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vh;
  cursor: pointer;
}

.block__level:hover {
  color: rgb(185, 185, 58);
}

.block__level_active {
  color: rgb(152, 152, 48);
}

.win-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  padding: 1vh;
  background-color: rgb(255, 179, 0);
  font-size: 2rem;
  text-align: center;
}

.button {
  cursor: pointer;
  height: -moz-fit-content;
  height: fit-content;
  width: -moz-fit-content;
  width: fit-content;
  border: 1px solid #000;
  padding: 1vh;
}

.table {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vh;
  background-color: rgb(185, 185, 58);
  height: 100px;
  margin: 1vh 3vh;
  padding: 1vh;
}

.table_mistaked {
  animation: 0.2s 4 normal table-change;
}

@keyframes table-change {
  0% {
    background-color: rgb(185, 185, 58);
  }
  50% {
    background-color: rgba(185, 185, 58, 0.2);
  }
  100% {
    background-color: rgb(185, 185, 58);
  }
}
.plate {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50%;
  height: 80px;
  width: 80px;
}

.apple {
  background-color: red;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

.apple__small {
  height: 20px;
  width: 20px;
}

.plate__fancy {
  border: 5px solid skyblue;
}

.pickle {
  background-color: green;
  border-radius: 20px;
  height: 40px;
  width: 20px;
}

.pickle__small {
  height: 20px;
  width: 10px;
}

.bento {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: brown;
  height: 80px;
  width: 80px;
}

.orange {
  background-color: orange;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

.orange__small {
  height: 20px;
  width: 20px;
}

.orange:hover,
.bento:hover,
.pickle:hover,
.apple:hover,
.plate:hover {
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.target {
  animation: 0.5s infinite normal target-elem;
}

.target_answer {
  animation: 0.5s 1 normal target-answer;
}

@keyframes target-elem {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes target-answer {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
.footer__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.4rem;
  border: 1px solid #000;
}
.footer__wrapper > * {
  flex-basis: 20%;
}

.social-link {
  box-sizing: content-box;
  width: 32px;
  height: 32px;
}

.link_gh {
  display: block;
  box-sizing: content-box;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) right no-repeat;
  width: 32px;
  height: 32px;
}

.link_icon_gh {
  display: flex;
  background-color: transparent;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #000;
  width: 100%;
  height: 100%;
}

.link_rss {
  display: block;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) left no-repeat;
  width: 100%;
  height: 100%;
}

.footer__link {
  display: block;
  width: 32px;
  height: 32px;
}

.block__content#css {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2vh;
}

.input_block {
  position: relative;
}

.block__append-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 170px;
  height: 22px;
  background-color: white;
  border: 1px solid #000;
}

.letter {
  animation: 0.1s 0s 1 text normal both running linear;
  display: inline-block;
}

@keyframes text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/_body.scss","webpack://./src/style.scss","webpack://./src/style/_gameBlock.scss","webpack://./src/style/_items.scss","webpack://./src/style/_footer.scss","webpack://./src/style/_constants.scss","webpack://./src/style/_textAnimated.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;ACCF;;ADEA;EACE,aAAA;EACA,YAAA;EACA,sBAAA;EACA,SAAA;EACA,UAAA;ACCF;;ADEA;EACE,aAAA;EACA,8BAAA;EACA,YAAA;ACCF;;ADEA;EACE,kBAAA;EACA,aAAA;EACA,qCAAA;EACA,mCAAA;EACA,aAAA;EAAA,QAAA;EACA,YAAA;ACCF;;ADEA;EACE,mBAAA;EACA,sBAAA;ACCF;;ADCA;EACE,gBAAA;EACA,sBAAA;ACEF;;ADAA;EACE,wBAAA;EACA,sBAAA;ACGF;;ADDA;EACE,wBAAA;EACA,sBAAA;ACIF;;AC7CA;EACE,cAAA;EACA,WAAA;EACA,YAAA;ADgDF;;AC7CA;EACE,oEAAA;ADgDF;;AC7CA;EACE,oEAAA;ADgDF;;AC7CA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;EACA,eAAA;ADgDF;;AC7CA;EACE,wBAAA;ADgDF;;AC7CA;EACE,wBAAA;ADgDF;;AC7CA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,kCAAA;EACA,eAAA;EACA,kBAAA;ADgDF;;AC7CA;EACE,eAAA;EACA,wBAAA;EAAA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,sBAAA;EACA,YAAA;ADgDF;;AEhGA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;EACA,mCAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;AFmGF;;AEhGA;EACE,qCAAA;AFmGF;;AEhGA;EACE;IACE,mCAAA;EFmGF;EEhGA;IACE,yCAAA;EFkGF;EE/FA;IACE,mCAAA;EFiGF;AACF;AE9FA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;AFgGF;;AE7FA;EACE,qBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;AFgGF;;AE7FA;EACE,YAAA;EACA,WAAA;AFgGF;;AE7FA;EACE,yBAAA;AFgGF;;AE7FA;EACE,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;AFgGF;;AE7FA;EACE,YAAA;EACA,WAAA;AFgGF;;AE7FA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;AFgGF;;AE7FA;EACE,wBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;AFgGF;;AE9FA;EACE,YAAA;EACA,WAAA;AFiGF;;AE9FA;;;;;EAKE,8CAAA;EACA,eAAA;AFiGF;;AE9FA;EACE,2CAAA;AFiGF;;AE9FA;EACE,sCAAA;AFiGF;;AE9FA;EACE;IACE,mBAAA;IACA,UAAA;EFiGF;EE9FA;IACE,sBAAA;IACA,YAAA;EFgGF;EE5FA;IACE,mBAAA;IACA,UAAA;EF8FF;AACF;AE3FA;EACE;IACE,mBAAA;IACA,UAAA;EF6FF;EE1FA;IACE,mBAAA;IACA,UAAA;EF4FF;AACF;AG7NA;ECDE,aAAA;EACA,eAAA;EACA,8BAAA;EDCA,eAAA;EACA,mBAAA;EACA,sBAAA;AHiOF;AIlOE;EACE,eDHuB;AHuO3B;;AGjOA;EACE,uBAAA;EACA,WAAA;EACA,YAAA;AHoOF;;AGjOA;EACE,cAAA;EACA,uBAAA;EACA,mEAAA;EACA,WAAA;EACA,YAAA;AHoOF;;AGjOA;EACE,aAAA;EACA,6BAAA;EACA,6BAAA;EAAA,qBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;AHoOF;;AGjOA;EACE,cAAA;EACA,kEAAA;EACA,WAAA;EACA,YAAA;AHoOF;;AGjOA;EACE,cAAA;EACA,WAAA;EACA,YAAA;AHoOF;;AK9QA;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,QAAA;ALiRF;;AK9QA;EACE,kBAAA;ALiRF;;AK9QA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,YAAA;EACA,uBAAA;EACA,sBAAA;ALiRF;;AK9QA;EACE,oDAAA;EACA,qBAAA;ALiRF;;AK9QA;EACE;IACE,UAAA;ELiRF;EK9QA;IACE,UAAA;ELgRF;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n}\n\n.main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(2, auto);\n  gap: 1vh;\n  margin: 10px;\n}\n\n.block1 {\n  grid-column: span 4;\n  border: 1px solid #000;\n}\n.block2 {\n  grid-row: span 3;\n  border: 1px solid #000;\n}\n.block3 {\n  grid-area: span 2 / span 2;\n  border: 1px solid #000;\n}\n.block4 {\n  grid-area: span 2 / span 2;\n  border: 1px solid #000;\n}","* {\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n}\n\n.main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(2, auto);\n  gap: 1vh;\n  margin: 10px;\n}\n\n.block1 {\n  grid-column: span 4;\n  border: 1px solid #000;\n}\n\n.block2 {\n  grid-row: span 3;\n  border: 1px solid #000;\n}\n\n.block3 {\n  grid-area: span 2/span 2;\n  border: 1px solid #000;\n}\n\n.block4 {\n  grid-area: span 2/span 2;\n  border: 1px solid #000;\n}\n\n.level__icon {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n\n.level__icon_active {\n  background: url(../src/assets/svg/done.svg) center no-repeat;\n}\n\n.level__icon_activeHelp {\n  background: url(../src/assets/svg/done-helped.svg) center no-repeat;\n}\n\n.block__level {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1vh;\n  cursor: pointer;\n}\n\n.block__level:hover {\n  color: rgb(185, 185, 58);\n}\n\n.block__level_active {\n  color: rgb(152, 152, 48);\n}\n\n.win-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 200px;\n  padding: 1vh;\n  background-color: rgb(255, 179, 0);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.button {\n  cursor: pointer;\n  height: fit-content;\n  width: fit-content;\n  border: 1px solid #000;\n  padding: 1vh;\n}\n\n.table {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1vh;\n  background-color: rgb(185, 185, 58);\n  height: 100px;\n  margin: 1vh 3vh;\n  padding: 1vh;\n}\n\n.table_mistaked {\n  animation: 0.2s 4 normal table-change;\n}\n\n@keyframes table-change {\n  0% {\n    background-color: rgb(185, 185, 58);\n  }\n  50% {\n    background-color: rgba(185, 185, 58, 0.2);\n  }\n  100% {\n    background-color: rgb(185, 185, 58);\n  }\n}\n.plate {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 50%;\n  height: 80px;\n  width: 80px;\n}\n\n.apple {\n  background-color: red;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n\n.apple__small {\n  height: 20px;\n  width: 20px;\n}\n\n.plate__fancy {\n  border: 5px solid skyblue;\n}\n\n.pickle {\n  background-color: green;\n  border-radius: 20px;\n  height: 40px;\n  width: 20px;\n}\n\n.pickle__small {\n  height: 20px;\n  width: 10px;\n}\n\n.bento {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: brown;\n  height: 80px;\n  width: 80px;\n}\n\n.orange {\n  background-color: orange;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n\n.orange__small {\n  height: 20px;\n  width: 20px;\n}\n\n.orange:hover,\n.bento:hover,\n.pickle:hover,\n.apple:hover,\n.plate:hover {\n  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.target {\n  animation: 0.5s infinite normal target-elem;\n}\n\n.target_answer {\n  animation: 0.5s 1 normal target-answer;\n}\n\n@keyframes target-elem {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.95);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes target-answer {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n.footer__wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: 1rem;\n  line-height: 1.4rem;\n  border: 1px solid #000;\n}\n.footer__wrapper > * {\n  flex-basis: 20%;\n}\n\n.social-link {\n  box-sizing: content-box;\n  width: 32px;\n  height: 32px;\n}\n\n.link_gh {\n  display: block;\n  box-sizing: content-box;\n  background: url(../src/assets/svg/github.svg) right no-repeat;\n  width: 32px;\n  height: 32px;\n}\n\n.link_icon_gh {\n  display: flex;\n  background-color: transparent;\n  text-decoration: none;\n  color: #000;\n  width: 100%;\n  height: 100%;\n}\n\n.link_rss {\n  display: block;\n  background: url(../src/assets/svg/rs_school_js.svg) left no-repeat;\n  width: 100%;\n  height: 100%;\n}\n\n.footer__link {\n  display: block;\n  width: 32px;\n  height: 32px;\n}\n\n.block__content#css {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 2vh;\n}\n\n.input_block {\n  position: relative;\n}\n\n.block__append-text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 170px;\n  height: 22px;\n  background-color: white;\n  border: 1px solid #000;\n}\n\n.letter {\n  animation: 0.1s 0s 1 text normal both running linear;\n  display: inline-block;\n}\n\n@keyframes text {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}",".level__icon {\n  display: block;\n  width: 24px;\n  height: 24px;\n  \n}\n.level__icon_active {\n  background: url(../src/assets/svg/done.svg) center no-repeat;\n}\n\n.level__icon_activeHelp {\n  background: url(../src/assets/svg/done-helped.svg) center no-repeat;\n}\n\n.block__level {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1vh;\n  cursor: pointer;\n}\n\n.block__level:hover {\n  color: rgb(185, 185, 58);\n}\n\n.block__level_active {\n  color: rgb(152, 152, 48);\n}\n\n.win-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 200px;\n  padding: 1vh;\n  background-color: rgb(255, 179, 0);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.button {\n  cursor: pointer;\n  height: fit-content;\n  width: fit-content;\n  border: 1px solid #000;\n  padding: 1vh;\n}\n",".table {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1vh;\n  background-color: rgb(185, 185, 58);\n  height: 100px;\n  margin: 1vh 3vh;\n  padding: 1vh;\n}\n\n.table_mistaked {\n  animation: 0.2s 4 normal table-change;\n}\n\n@keyframes table-change {\n  0% {\n    background-color: rgb(185, 185, 58);\n  }\n\n  50% {\n    background-color: rgba(185, 185, 58, 0.2);\n  }\n\n  100% {\n    background-color: rgb(185, 185, 58);\n  }\n}\n\n.plate {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 50%;\n  height: 80px;\n  width: 80px;\n}\n\n.apple {\n  background-color: red;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n\n.apple__small {\n  height: 20px;\n  width: 20px;\n}\n\n.plate__fancy {\n  border: 5px solid skyblue;\n}\n\n.pickle {\n  background-color: green;\n  border-radius: 20px;\n  height: 40px;\n  width: 20px;\n}\n\n.pickle__small {\n  height: 20px;\n  width: 10px;\n}\n\n.bento {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: brown;\n  height: 80px;\n  width: 80px;\n}\n\n.orange {\n  background-color: orange;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n.orange__small {\n  height: 20px;\n  width: 20px;\n}\n\n.orange:hover,\n.bento:hover,\n.pickle:hover,\n.apple:hover,\n.plate:hover {\n  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.target {\n  animation: 0.5s infinite normal target-elem;\n}\n\n.target_answer {\n  animation: 0.5s 1 normal target-answer;\n}\n\n@keyframes target-elem {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  50% {\n    transform: scale(0.95);\n    opacity: 0.7;\n  }\n  \n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes target-answer {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}","\n\n.footer__wrapper {\n  @include columns($width: 20%);\n  font-size: 1.0rem;\n  line-height: 1.4rem;\n  border: 1px solid #000;;\n}\n\n.social-link {\n  box-sizing: content-box;\n  width: 32px;\n  height: 32px;\n}\n\n.link_gh {\n  display: block;\n  box-sizing: content-box;\n  background: url(../src/assets/svg/github.svg) right no-repeat;\n  width: 32px;\n  height: 32px;\n}\n\n.link_icon_gh {\n  display: flex;\n  background-color: transparent;\n  text-decoration: none;\n  color: #000;\n  width: 100%;\n  height: 100%;\n}\n\n.link_rss {\n  display: block;\n  background: url(../src/assets/svg/rs_school_js.svg) left no-repeat;\n  width: 100%;\n  height: 100%;\n}\n\n.footer__link {\n  display: block;\n  width: 32px;\n  height: 32px;\n}","@mixin columns ($width) {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  >* {\n    flex-basis: $width;\n  }\n}\n",".block__content#css {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 2vh;\r\n}\r\n\r\n.input_block {\r\n  position: relative;\r\n}\r\n\r\n.block__append-text {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 170px;\r\n  height: 22px;\r\n  background-color: white;\r\n  border: 1px solid #000;\r\n}\r\n\r\n.letter {\r\n  animation: .1s 0s 1 text normal both running linear;\r\n  display: inline-block;\r\n}\r\n\r\n@keyframes text {\r\n  0% {\r\n    opacity: 0;\r\n    }\r\n  \r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CSS-Selectors</title>\n</head>\n<body>\n  <header class=\"header\">\n    <h1>CSS-Selectors</h1>\n    <div class=\"button\" id=\"reset\">Reset</div>\n    <div class=\"button\" id=\"help\">Help</div>\n  </header>\n  <main class=\"main\">\n    <section class=\"block1\">\n      <h2 class=\"block__header\">Your task</h2>\n      <div class=\"block__content\" id=\"task\">\n        <div class=\"table\">\n          <div class=\"plate\">\n            <div class=\"apple\"></div>\n            <div class=\"apple apple_small\"></div>\n          </div>\n          <div class=\"plate plate_fancy\">\n            <div class=\"pickle pickle__small\"></div>\n          </div>\n          <div class=\"bento\">\n            <div class=\"orange\"></div>\n            <div class=\"orange orange__small\"></div>\n          </div>\n          <div class=\"pickle\"></div>\n        </div>\n      </div>\n    </section>\n    <section class=\"block2\">\n      <h2 class=\"block__header\">Level</h2>\n      <div class=\"block__content\" id=\"level\"></div>\n    </section>\n    <section class=\"block3\">\n      <h2 class=\"block__header\">CSS Editor</h2>\n      <div class=\"block__content\" id=\"css\">\n        <div class=\"input_block\">\n          <input id=\"input\" type=\"text\">\n        </div>\n        <div class=\"button\" id=\"enter\">Enter</div>\n      </div>\n    </section>\n    <section class=\"block4\">\n      <h2 class=\"block__header\">HTML Viewer</h2>\n      <div class=\"block__content\" id=\"html\"></div>\n    </section>\n  </main>\n  <footer><div class=\"wrapper footer__wrapper\">\n    <div class=\"footer__element\">\n      <div ><a target=\"_blank\" href=\"https://github.com/Marigza\" class=\"link_icon_gh\"><span class=\"link_gh\"></span><span>Marigza</span></a></div>\n    </div>\n    <div class=\"footer__element\">Rolling Scopes School 2023</div>\n    <div class=\"footer__element\">\n      <div class=\"link_rss\"><a target=\"_blank\" href=\"https://rs.school/js/\" class=\"link_rss\"></a></div>\n    </div>\n  </div></footer>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/script/render.ts":
/*!******************************!*\
  !*** ./src/script/render.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Table: () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _levels_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels.json */ "./src/script/levels.json");
/* harmony import */ var _textAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textAnimation */ "./src/script/textAnimation.ts");


class Table {
    constructor() {
        this.level = Number(localStorage.getItem('level')) || 0;
        this.length = _levels_json__WEBPACK_IMPORTED_MODULE_0__.length;
        this.input = '';
        this.countOfPassLevel = 0;
        this.isHelped = false;
    }
    renderTable() {
        if (this.level <= 10) {
            const task = document.getElementById('task');
            const divTask = document.createElement('div');
            const divCode = document.createElement('div');
            const table = document.querySelector('.table');
            const html = document.getElementById('html');
            if (html !== null) {
                html.innerHTML = '';
            }
            if (task !== null) {
                task.innerHTML = '';
                divTask.innerText = _levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].todo;
                task.prepend(divTask);
            }
            if (table !== null) {
                table.innerHTML = '';
                table.innerHTML = _levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].layout;
                task === null || task === void 0 ? void 0 : task.append(table);
            }
            divCode.innerText = _levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].html;
            html === null || html === void 0 ? void 0 : html.prepend(divCode);
        }
    }
    renderLevels() {
        const levelBlock = document.getElementById('level');
        if (levelBlock !== null) {
            levelBlock.innerHTML = '';
            for (let i = 0; i < this.length; i++) {
                const levelItem = document.createElement('div');
                levelItem.classList.add('block__level');
                levelItem.innerHTML = `<span class="level__icon" id="${_levels_json__WEBPACK_IMPORTED_MODULE_0__[i].level}"></span><span>${_levels_json__WEBPACK_IMPORTED_MODULE_0__[i].level}</span>`;
                levelBlock.append(levelItem);
            }
        }
        this.lightningLevel();
        this.choiseLevel();
    }
    checkCode() {
        this.input = document.getElementById('input').value;
        this.input === _levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].expectedCSS ? this.markDoneLevel() : this.showMistake();
    }
    markDoneLevel() {
        this.animateCorrectAnswer();
        this.countOfPassLevel++;
        const checkedLevel = document.getElementById(_levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].level);
        if (this.isHelped) {
            checkedLevel === null || checkedLevel === void 0 ? void 0 : checkedLevel.classList.add('level__icon_activeHelp');
        }
        else {
            checkedLevel === null || checkedLevel === void 0 ? void 0 : checkedLevel.classList.add('level__icon_active');
        }
        setTimeout(() => {
            this.setLevel();
            this.isHelped = false;
        }, 500);
    }
    animateCorrectAnswer() {
        const targetElems = Array.from(document.querySelectorAll('.target'));
        targetElems.forEach((elem) => {
            elem.classList.add('target_answer');
            elem === null || elem === void 0 ? void 0 : elem.addEventListener('animationend', () => {
                elem.classList.remove('target_answer');
            });
        });
    }
    showMistake() {
        const table = document.querySelector('.table');
        table === null || table === void 0 ? void 0 : table.classList.add('table_mistaked');
        table === null || table === void 0 ? void 0 : table.addEventListener('animationend', () => table === null || table === void 0 ? void 0 : table.classList.remove('table_mistaked'));
    }
    showWinMessage() {
        const main = document.querySelector('.main');
        const divMessage = document.createElement('div');
        divMessage.classList.add('win-message');
        divMessage.textContent = "You finish learning css-selectors. Congratulations!";
        main === null || main === void 0 ? void 0 : main.append(divMessage);
        this.level = 0;
    }
    setLevel() {
        if (this.countOfPassLevel === 11) {
            this.showWinMessage();
        }
        else {
            this.level++;
            this.lightningLevel();
            document.getElementById('input').value = '';
            this.renderTable();
        }
    }
    lightningLevel() {
        var _a;
        const allLevels = Array.from(document.querySelectorAll('.block__level'));
        allLevels.forEach((elem) => elem.classList.remove('block__level_active'));
        if (this.level <= 10) {
            const activeLevel = (_a = document.getElementById(_levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].level)) === null || _a === void 0 ? void 0 : _a.parentElement;
            // console.log(activeLevel);
            activeLevel === null || activeLevel === void 0 ? void 0 : activeLevel.classList.add('block__level_active');
        }
    }
    choiseLevel() {
        const allLevels = Array.from(document.querySelectorAll('.block__level'));
        allLevels.forEach(elem => elem.addEventListener('click', () => {
            var _a;
            const active = (_a = elem.firstElementChild) === null || _a === void 0 ? void 0 : _a.id;
            // console.log(active);
            const levelArr = _levels_json__WEBPACK_IMPORTED_MODULE_0__.map(elem => elem.level);
            if (active !== undefined) {
                //console.log(levelArr);
                //console.log(levelArr.indexOf(active));
                this.level = levelArr.indexOf(active) - 1;
                this.setLevel();
            }
        }));
    }
    resetProgress() {
        this.level = 0;
        this.countOfPassLevel = 0;
        document.getElementById('input').value = '';
        this.renderTable();
        this.renderLevels();
    }
    showAnswer() {
        const text = new _textAnimation__WEBPACK_IMPORTED_MODULE_1__.TextAnimation(_levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].expectedCSS);
        text.renderBlock();
        document.getElementById('input').value = _levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].expectedCSS;
        this.isHelped = true;
    }
}


/***/ }),

/***/ "./src/script/textAnimation.ts":
/*!*************************************!*\
  !*** ./src/script/textAnimation.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextAnimation: () => (/* binding */ TextAnimation)
/* harmony export */ });
class TextAnimation {
    constructor(text) {
        this.divblock = document.createElement('div');
        this.parentBlock = document.querySelector('.input_block');
        this.text = text;
    }
    renderBlock() {
        this.divblock.classList.add('block__append-text');
        this.parentBlock.appendChild(this.divblock);
        this.showText();
        //this.divblock.addEventListener('animationend', ()=>this.hideblock());
        setTimeout(() => this.hideblock(), 2000);
    }
    showText() {
        const textArr = this.text.split('');
        for (let i = 0; i < textArr.length; i++) {
            const letter = document.createElement('span');
            letter.classList.add('letter');
            letter.textContent = textArr[i];
            if (letter.textContent.match(/\s/)) {
                letter.style.margin = 'auto 3px';
            }
            letter.style.animationDelay = (i / 10) + 's';
            this.divblock.appendChild(letter);
        }
    }
    hideblock() {
        var _a;
        (_a = this.divblock) === null || _a === void 0 ? void 0 : _a.remove();
    }
}


/***/ }),

/***/ "./src/assets/svg/done-helped.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/done-helped.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a01c355a6338e08c9011.svg";

/***/ }),

/***/ "./src/assets/svg/done.svg":
/*!*********************************!*\
  !*** ./src/assets/svg/done.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e812218750439d9825e.svg";

/***/ }),

/***/ "./src/assets/svg/github.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/github.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17d470706dbe8d3993e9.svg";

/***/ }),

/***/ "./src/assets/svg/rs_school_js.svg":
/*!*****************************************!*\
  !*** ./src/assets/svg/rs_school_js.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad178c0df28bc133be34.svg";

/***/ }),

/***/ "./src/script/levels.json":
/*!********************************!*\
  !*** ./src/script/levels.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"level":"level-1","todo":"select plates","layout":"<div class=\'plate target\'></div><div class=\'plate target\'></div>","expectedCSS":"plate","html":"<div class=\'table\'>\\n<plate></plate>\\n<plate></plate>\\n</div>"},{"level":"level-2","todo":"select bento","layout":"<div class=\'plate\'></div><div class=\'plate\'></div><div class=\'bento target\'></div>","expectedCSS":"bento","html":"<div class=\'table\'>\\n<plate></plate>\\n<plate></plate>\\n<bento></bento>\\n</div>"},{"level":"level-3","todo":"select fancy plate","layout":"<div class=\'plate\'></div><div class=\'plate\'></div><div class=\'plate plate__fancy target\'></div>","expectedCSS":"plate#fancy","html":"<div class=\'table\'>\\n<plate></plate>\\n<plate></plate>\\n<plate id=\'fancy\'></plate>\\n</div>"},{"level":"level-4","todo":"select apple on bento","layout":"<div class=\'plate\'><div class=\'apple\'></div></div><div class=\'apple\'></div><div class=\'plate\'></div><div class=\'bento\'><div class=\'apple target\'></div></div>","expectedCSS":"bento apple","html":"<div class=\'table\'>\\n<plate>\\n<apple></apple>\\n</plate>\\n<apple></apple>\\n<plate></plate>\\n<bento>\\n<apple></apple>\\n</bento>\\n</div>"},{"level":"level-5","todo":"Select the pickle on the fancy plate","layout":"<div class=\'plate\'></div><div class=\'plate\'><div class=\'pickle\'></div></div><div class=\'plate plate__fancy\'><div class=\'pickle target\'></div></div>","expectedCSS":"plate#fancy pickle","html":"<div class=\'table\'>\\n<plate></plate>\\n<plate>\\n<pickle></pickle>\\n</plate>\\n<plate id=\'fancy\'>\\n<pickle></pickle>\\n</plate>\\n</div>"},{"level":"level-6","todo":"Select the small apples","layout":"<div class=\'apple\'></div><div class=\'plate\'><div class=\'apple apple__small target\'></div></div><div class=\'apple\'></div><div class=\'apple apple__small target\'></div>","expectedCSS":"apple.small","html":"<div class=\'table\'>\\n<apple></apple>\\n<plate>\\n<apple class=\'small\'></apple>\\n</plate>\\n<apple></apple>\\n<apple class=\'small\'></apple>\\n</div>"},{"level":"level-7","todo":"Select the small oranges on plate","layout":"<div class=\'bento\'><div class=\'orange\'></div></div><div class=\'plate\'><div class=\'orange orange__small target\'></div></div><div class=\'plate\'><div class=\'orange orange__small target\'></div></div><div class=\'bento\'><div class=\'orange orange__small\'></div></div><div class=\'plate\'><div class=\'apple apple__small\'></div></div>","expectedCSS":"plate orange.small","html":"<div class=\'table\'>\\n<bento>\\n<orange></orange>\\n</bento>\\n<plate>\\n<orange class=\'small\'></orange>\\n</plate>\\n<plate>\\n<orange class=\'small\'></orange>\\n</plate>\\n<bento>\\n<orange class=\'small\'></orange>\\n</bento>\\n<plate>\\n<apple class=\'small\'></apple>\\n</plate>\\n</div>"},{"level":"level-8","todo":"Select all the plates and bentos","layout":"<div class=\'apple\'></div><div class=\'plate target\'><div class=\'apple\'></div></div><div class=\'bento target\'></div><div class=\'bento target\'></div>","expectedCSS":"plate, bento","html":"<div class=\'table\'>\\n<apple></apple>\\n<plate>\\n<apple></apple>\\n</plate>\\n<bento></bento>\\n<bento></bento>\\n</div>"},{"level":"level-9","todo":"Select all the things","layout":"<div class=\'orange target\'></div><div class=\'plate target\'><div class=\'pickle target\'></div></div><div class=\'bento target\'></div><div class=\'bento target\'><div class=\'orange target\'></div></div>","expectedCSS":"*","html":"<div class=\'table\'>\\n<orange></orange>\\n<plate>\\n<pickle></pickle>\\n</plate>\\n<bento></bento>\\n<bento>\\n<orange></orange>\\n</bento>\\n</div>"},{"level":"level-10","todo":"Select everything on a plate","layout":"<div class=\'orange\'></div><div class=\'plate\'><div class=\'pickle target\'></div></div><div class=\'bento\'><div class=\'pickle\'></div></div><div class=\'plate\'><div class=\'orange target\'></div></div>","expectedCSS":"plate *","html":"<div class=\'table\'>\\n<orange></orange>\\n<plate>\\n<pickle></pickle>\\n</plate>\\n<bento>\\n<pickle></pickle>\\n</bento>\\n<plate>\\n<orange></orange>\\n</plate>\\n</div>"},{"level":"level-11","todo":"Select the 3rd plate","layout":"<div class=\'plate\'></div><div class=\'plate plate__fancy\'></div><div class=\'plate target\'></div><div class=\'plate\'></div>","expectedCSS":":nth-child(3)","html":"<div class=\'table\'>\\n<plate></plate>\\n<plate class=\'fancy\'></plate>\\n<plate></plate>\\n<plate></plate>\\n</div>"}]');

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _script_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/render */ "./src/script/render.ts");



const table = new _script_render__WEBPACK_IMPORTED_MODULE_2__.Table();
const buttonReset = document.getElementById('reset');
const buttonHelp = document.getElementById('help');
buttonReset === null || buttonReset === void 0 ? void 0 : buttonReset.addEventListener('click', () => table.resetProgress());
buttonHelp === null || buttonHelp === void 0 ? void 0 : buttonHelp.addEventListener('click', () => table.showAnswer());
console.log(buttonHelp);
table.renderTable();
table.renderLevels();
const buttonEnter = document.getElementById('enter');
buttonEnter === null || buttonEnter === void 0 ? void 0 : buttonEnter.addEventListener('click', () => {
    table.checkCode();
});
document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        table.checkCode();
    }
});
function setLocalStorage() {
    if (table.level <= 10) {
        localStorage.setItem('level', String(table.level));
    }
    else {
        localStorage.setItem('level', '0');
    }
}
window.addEventListener('beforeunload', setLocalStorage);
function getLocalStorage() {
    if (localStorage.getItem('level')) {
        //table.level = Number(localStorage.getItem('level'));
        return table.level;
    }
}
window.addEventListener('load', () => {
    getLocalStorage;
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map