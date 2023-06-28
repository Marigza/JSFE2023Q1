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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/svg/github.svg */ "./src/assets/svg/github.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/svg/rs_school_js.svg */ "./src/assets/svg/rs_school_js.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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

.block__level {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vh;
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
  animation: 0.2s 4 normal table-change;
}

@keyframes target {
  0% {
    height: 100%;
    width: 100%;
  }
  50% {
    height: 90%;
    width: 110%;
  }
  100% {
    height: 100%;
    width: 100%;
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
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) right no-repeat;
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
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) left no-repeat;
  width: 100%;
  height: 100%;
}

.footer__link {
  display: block;
  width: 32px;
  height: 32px;
}`, "",{"version":3,"sources":["webpack://./src/style/_body.scss","webpack://./src/style.scss","webpack://./src/style/_gameBlock.scss","webpack://./src/style/_items.scss","webpack://./src/style/_footer.scss","webpack://./src/style/_constants.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;ACCF;;ADEA;EACE,aAAA;EACA,YAAA;EACA,sBAAA;EACA,SAAA;EACA,UAAA;ACCF;;ADEA;EACE,kBAAA;EACA,aAAA;EACA,qCAAA;EACA,mCAAA;EACA,aAAA;EAAA,QAAA;EACA,YAAA;ACCF;;ADEA;EACE,mBAAA;EACA,sBAAA;ACCF;;ADCA;EACE,gBAAA;EACA,sBAAA;ACEF;;ADAA;EACE,wBAAA;EACA,sBAAA;ACGF;;ADDA;EACE,wBAAA;EACA,sBAAA;ACIF;;ACvCA;EACE,cAAA;EACA,WAAA;EACA,YAAA;AD0CF;;ACvCA;EACE,oEAAA;AD0CF;;ACvCA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;AD0CF;;ACvCA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,kCAAA;EACA,eAAA;EACA,kBAAA;AD0CF;;ACvCA;EACE,eAAA;AD0CF;;AEzEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;EACA,mCAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;AF4EF;;AEzEA;EACE,qCAAA;AF4EF;;AEzEA;EACE;IACE,mCAAA;EF4EF;EEzEA;IACE,yCAAA;EF2EF;EExEA;IACE,mCAAA;EF0EF;AACF;AEvEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;AFyEF;;AEtEA;EACE,qBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;AFyEF;;AEtEA;EACE,YAAA;EACA,WAAA;AFyEF;;AEtEA;EACE,yBAAA;AFyEF;;AEtEA;EACE,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;AFyEF;;AEtEA;EACE,YAAA;EACA,WAAA;AFyEF;;AEtEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;AFyEF;;AEtEA;EACE,wBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;AFyEF;;AEvEA;EACE,YAAA;EACA,WAAA;AF0EF;;AEvEA;;;;;EAKE,8CAAA;EACA,eAAA;AF0EF;;AEvEA;EACE,qCAAA;AF0EF;;AEvEA;EACE;IACE,YAAA;IACA,WAAA;EF0EF;EEvEA;IACE,WAAA;IACA,WAAA;EFyEF;EEtEA;IACE,YAAA;IACA,WAAA;EFwEF;AACF;AGxLA;ECDE,aAAA;EACA,eAAA;EACA,8BAAA;EDCA,eAAA;EACA,mBAAA;EACA,sBAAA;AH4LF;AI7LE;EACE,eDHuB;AHkM3B;;AG5LA;EACE,uBAAA;EACA,WAAA;EACA,YAAA;AH+LF;;AG5LA;EACE,cAAA;EACA,uBAAA;EACA,mEAAA;EACA,WAAA;EACA,YAAA;AH+LF;;AG5LA;EACE,aAAA;EACA,6BAAA;EACA,6BAAA;EAAA,qBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;AH+LF;;AG5LA;EACE,cAAA;EACA,kEAAA;EACA,WAAA;EACA,YAAA;AH+LF;;AG5LA;EACE,cAAA;EACA,WAAA;EACA,YAAA;AH+LF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  grid-template-rows: repeat(2, auto);\r\n  gap: 1vh;\r\n  margin: 10px;\r\n}\r\n\r\n.block1 {\r\n  grid-column: span 4;\r\n  border: 1px solid #000;\r\n}\r\n.block2 {\r\n  grid-row: span 3;\r\n  border: 1px solid #000;\r\n}\r\n.block3 {\r\n  grid-area: span 2 / span 2;\r\n  border: 1px solid #000;\r\n}\r\n.block4 {\r\n  grid-area: span 2 / span 2;\r\n  border: 1px solid #000;\r\n}","* {\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n}\n\n.main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(2, auto);\n  gap: 1vh;\n  margin: 10px;\n}\n\n.block1 {\n  grid-column: span 4;\n  border: 1px solid #000;\n}\n\n.block2 {\n  grid-row: span 3;\n  border: 1px solid #000;\n}\n\n.block3 {\n  grid-area: span 2/span 2;\n  border: 1px solid #000;\n}\n\n.block4 {\n  grid-area: span 2/span 2;\n  border: 1px solid #000;\n}\n\n.level__icon {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n\n.level__icon_active {\n  background: url(../src/assets/svg/done.svg) center no-repeat;\n}\n\n.block__level {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1vh;\n}\n\n.win-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 200px;\n  padding: 1vh;\n  background-color: rgb(255, 179, 0);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.button {\n  cursor: pointer;\n}\n\n.table {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1vh;\n  background-color: rgb(185, 185, 58);\n  height: 100px;\n  margin: 1vh 3vh;\n  padding: 1vh;\n}\n\n.table_mistaked {\n  animation: 0.2s 4 normal table-change;\n}\n\n@keyframes table-change {\n  0% {\n    background-color: rgb(185, 185, 58);\n  }\n  50% {\n    background-color: rgba(185, 185, 58, 0.2);\n  }\n  100% {\n    background-color: rgb(185, 185, 58);\n  }\n}\n.plate {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 50%;\n  height: 80px;\n  width: 80px;\n}\n\n.apple {\n  background-color: red;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n\n.apple__small {\n  height: 20px;\n  width: 20px;\n}\n\n.plate__fancy {\n  border: 5px solid skyblue;\n}\n\n.pickle {\n  background-color: green;\n  border-radius: 20px;\n  height: 40px;\n  width: 20px;\n}\n\n.pickle__small {\n  height: 20px;\n  width: 10px;\n}\n\n.bento {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: brown;\n  height: 80px;\n  width: 80px;\n}\n\n.orange {\n  background-color: orange;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n\n.orange__small {\n  height: 20px;\n  width: 20px;\n}\n\n.orange:hover,\n.bento:hover,\n.pickle:hover,\n.apple:hover,\n.plate:hover {\n  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.target {\n  animation: 0.2s 4 normal table-change;\n}\n\n@keyframes target {\n  0% {\n    height: 100%;\n    width: 100%;\n  }\n  50% {\n    height: 90%;\n    width: 110%;\n  }\n  100% {\n    height: 100%;\n    width: 100%;\n  }\n}\n.footer__wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: 1rem;\n  line-height: 1.4rem;\n  border: 1px solid #000;\n}\n.footer__wrapper > * {\n  flex-basis: 20%;\n}\n\n.social-link {\n  box-sizing: content-box;\n  width: 32px;\n  height: 32px;\n}\n\n.link_gh {\n  display: block;\n  box-sizing: content-box;\n  background: url(../src/assets/svg/github.svg) right no-repeat;\n  width: 32px;\n  height: 32px;\n}\n\n.link_icon_gh {\n  display: flex;\n  background-color: transparent;\n  text-decoration: none;\n  color: #000;\n  width: 100%;\n  height: 100%;\n}\n\n.link_rss {\n  display: block;\n  background: url(../src/assets/svg/rs_school_js.svg) left no-repeat;\n  width: 100%;\n  height: 100%;\n}\n\n.footer__link {\n  display: block;\n  width: 32px;\n  height: 32px;\n}",".level__icon {\r\n  display: block;\r\n  width: 24px;\r\n  height: 24px;\r\n  \r\n}\r\n.level__icon_active {\r\n  background: url(../src/assets/svg/done.svg) center no-repeat;\r\n}\r\n\r\n.block__level {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1vh;\r\n}\r\n\r\n.win-message {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 300px;\r\n  height: 200px;\r\n  padding: 1vh;\r\n  background-color: rgb(255, 179, 0);\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n}",".table {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1vh;\r\n  background-color: rgb(185, 185, 58);\r\n  height: 100px;\r\n  margin: 1vh 3vh;\r\n  padding: 1vh;\r\n}\r\n\r\n.table_mistaked {\r\n  animation: 0.2s 4 normal table-change;\r\n}\r\n\r\n@keyframes table-change {\r\n  0% {\r\n    background-color: rgb(185, 185, 58);\r\n  }\r\n\r\n  50% {\r\n    background-color: rgba(185, 185, 58, 0.2);\r\n  }\r\n\r\n  100% {\r\n    background-color: rgb(185, 185, 58);\r\n  }\r\n}\r\n\r\n.plate {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #ffffff;\r\n  border-radius: 50%;\r\n  height: 80px;\r\n  width: 80px;\r\n}\r\n\r\n.apple {\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n.apple__small {\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.plate__fancy {\r\n  border: 5px solid skyblue;\r\n}\r\n\r\n.pickle {\r\n  background-color: green;\r\n  border-radius: 20px;\r\n  height: 40px;\r\n  width: 20px;\r\n}\r\n\r\n.pickle__small {\r\n  height: 20px;\r\n  width: 10px;\r\n}\r\n\r\n.bento {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: brown;\r\n  height: 80px;\r\n  width: 80px;\r\n}\r\n\r\n.orange {\r\n  background-color: orange;\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n.orange__small {\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.orange:hover,\r\n.bento:hover,\r\n.pickle:hover,\r\n.apple:hover,\r\n.plate:hover {\r\n  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.5);\r\n  cursor: pointer;\r\n}\r\n\r\n.target {\r\n  animation: 0.2s 4 normal table-change;\r\n}\r\n\r\n@keyframes target {\r\n  0% {\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n  50% {\r\n    height: 90%;\r\n    width: 110%;\r\n  }\r\n\r\n  100% {\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n}","\r\n\r\n.footer__wrapper {\r\n  @include columns($width: 20%);\r\n  font-size: 1.0rem;\r\n  line-height: 1.4rem;\r\n  border: 1px solid #000;;\r\n}\r\n\r\n.social-link {\r\n  box-sizing: content-box;\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.link_gh {\r\n  display: block;\r\n  box-sizing: content-box;\r\n  background: url(../src/assets/svg/github.svg) right no-repeat;\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.link_icon_gh {\r\n  display: flex;\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n  color: #000;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.link_rss {\r\n  display: block;\r\n  background: url(../src/assets/svg/rs_school_js.svg) left no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.footer__link {\r\n  display: block;\r\n  width: 32px;\r\n  height: 32px;\r\n}","@mixin columns ($width) {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n\r\n  >* {\r\n    flex-basis: $width;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CSS-Selectors</title>\n</head>\n<body>\n  <header><h1>CSS-Selectors</h1></header>\n  <main class=\"main\">\n    <section class=\"block1\">\n      <h2 class=\"block__header\">Your task</h2>\n      <div class=\"block__content\" id=\"task\">\n        <div class=\"table\">\n          <div class=\"plate\">\n            <div class=\"apple\"></div>\n            <div class=\"apple apple_small\"></div>\n          </div>\n          <div class=\"plate plate_fancy\">\n            <div class=\"pickle pickle__small\"></div>\n          </div>\n          <div class=\"bento\">\n            <div class=\"orange\"></div>\n            <div class=\"orange orange__small\"></div>\n          </div>\n          <div class=\"pickle\"></div>\n        </div>\n      </div>\n    </section>\n    <section class=\"block2\">\n      <h2 class=\"block__header\">Level</h2>\n      <div class=\"block__content\" id=\"level\"></div>\n    </section>\n    <section class=\"block3\">\n      <h2 class=\"block__header\">CSS Editor</h2>\n      <div class=\"block__content\" id=\"css\">\n        <input id=\"input\" type=\"text\">\n        <button class=\"button\">Enter</button>\n      </div>\n    </section>\n    <section class=\"block4\">\n      <h2 class=\"block__header\">HTML Viewer</h2>\n      <div class=\"block__content\" id=\"html\"></div>\n    </section>\n  </main>\n  <footer><div class=\"wrapper footer__wrapper\">\n    <div class=\"footer__element\">\n      <div ><a target=\"_blank\" href=\"https://github.com/Marigza\" class=\"link_icon_gh\"><span class=\"link_gh\"></span><span>Marigza</span></a></div>\n    </div>\n    <div class=\"footer__element\">Rolling Scopes School 2023</div>\n    <div class=\"footer__element\">\n      <div class=\"link_rss\"><a target=\"_blank\" href=\"https://rs.school/js/\" class=\"link_rss\"></a></div>\n    </div>\n  </div></footer>\n</body>\n</html>";
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

class Table {
    constructor() {
        this.level = 0;
        this.length = _levels_json__WEBPACK_IMPORTED_MODULE_0__.length;
        this.input = '';
    }
    renderTable() {
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
    }
    checkCode() {
        this.input = document.getElementById('input').value;
        this.input === _levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].expectedCSS ? this.markDoneLevel() : this.showMistake();
        console.log(this.input);
    }
    markDoneLevel() {
        const checkedLevel = document.getElementById(_levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].level);
        checkedLevel === null || checkedLevel === void 0 ? void 0 : checkedLevel.classList.add('level__icon_active');
        this.setLevel();
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
    }
    setLevel() {
        this.level++;
        document.getElementById('input').value = '';
        if (this.level >= this.length) {
            this.showWinMessage();
        }
        else {
            this.renderTable();
        }
    }
}


/***/ }),

/***/ "./src/assets/svg/done.svg":
/*!*********************************!*\
  !*** ./src/assets/svg/done.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aec6fd6c8a9686ce92dc.svg";

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

module.exports = JSON.parse('[{"level":"level-1","todo":"select plates","layout":"<div class=\'plate\'></div><div class=\'plate\'></div>","expectedCSS":"plate","html":"<div class=\'table\'>\\n<plate></plate>\\n<plate></plate>\\n</div>"},{"level":"level-2","todo":"select bento","layout":"<div class=\'plate\'></div><div class=\'plate\'></div><div class=\'bento\'></div>","expectedCSS":"bento","html":"<div class=\'table\'>\\n<plate></plate>\\n<plate></plate>\\n<bento></bento>\\n</div>"},{"level":"level-3","todo":"select fancy plate","layout":"<div class=\'plate\'></div><div class=\'plate\'></div><div class=\'plate plate__fancy\'></div>","expectedCSS":"plate#fancy","html":"<div class=\'table\'>\\n<plate></plate>\\n<plate></plate>\\n<plate id=\'fancy\'></plate>\\n</div>"},{"level":"level-4","todo":"select apple on bento","layout":"<div class=\'plate\'><div class=\'apple\'></div></div><div class=\'apple\'></div><div class=\'plate\'></div><div class=\'bento\'><div class=\'apple\'></div></div>","expectedCSS":"bento apple","html":"<div class=\'table\'>\\n<plate>\\n<apple></apple>\\n</plate>\\n<apple></apple>\\n<plate></plate>\\n<bento>\\n<apple></apple>\\n</bento>\\n</div>"},{"level":"level-5","todo":"Select the pickle on the fancy plate","layout":"<div class=\'plate\'></div><div class=\'plate\'><div class=\'pickle\'></div></div><div class=\'plate plate__fancy\'><div class=\'pickle\'></div></div>","expectedCSS":"plate#fancy pickle","html":"<div class=\'table\'>\\n<plate></plate>\\n<plate>\\n<pickle></pickle>\\n</plate>\\n<plate id=\'fancy\'>\\n<pickle></pickle>\\n</plate>\\n</div>"},{"level":"level-6","todo":"Select the small apples","layout":"<div class=\'apple\'></div><div class=\'plate\'><div class=\'apple apple__small\'></div></div><div class=\'apple\'></div><div class=\'apple apple__small\'></div>","expectedCSS":"apple.small","html":"<div class=\'table\'>\\n<apple></apple>\\n<plate>\\n<apple class=\'small\'></apple>\\n</plate>\\n<apple></apple>\\n<apple class=\'small\'></apple>\\n</div>"},{"level":"level-7","todo":"Select the small oranges on plate","layout":"<div class=\'bento\'><div class=\'orange\'></div></div><div class=\'plate\'><div class=\'orange orange__small\'></div></div><div class=\'plate\'><div class=\'orange orange__small\'></div></div><div class=\'bento\'><div class=\'orange orange__small\'></div></div><div class=\'plate\'><div class=\'apple apple__small\'></div></div>","expectedCSS":"plate orange.small","html":"<div class=\'table\'>\\n<bento>\\n<orange></orange>\\n</bento>\\n<plate>\\n<orange class=\'small\'></orange>\\n</plate>\\n<plate>\\n<orange class=\'small\'></orange>\\n</plate>\\n<bento>\\n<orange class=\'small\'></orange>\\n</bento>\\n<plate>\\n<apple class=\'small\'></apple>\\n</plate>\\n</div>"},{"level":"level-8","todo":"Select all the plates and bentos","layout":"<div class=\'apple\'></div><div class=\'plate\'><div class=\'apple\'></div></div><div class=\'bento\'></div><div class=\'bento\'></div>","expectedCSS":"plate, bento","html":"<div class=\'table\'>\\n<apple></apple>\\n<plate>\\n<apple></apple>\\n</plate>\\n<bento></bento>\\n<bento></bento>\\n</div>"},{"level":"level-9","todo":"Select all the things","layout":"<div class=\'orange\'></div><div class=\'plate\'><div class=\'pickle\'></div></div><div class=\'bento\'></div><div class=\'bento\'><div class=\'orange\'></div></div>","expectedCSS":"*","html":"<div class=\'table\'>\\n<orange></orange>\\n<plate>\\n<pickle></pickle>\\n</plate>\\n<bento></bento>\\n<bento>\\n<orange></orange>\\n</bento>\\n</div>"},{"level":"level-10","todo":"Select everything on a plate","layout":"<div class=\'orange\'></div><div class=\'plate\'><div class=\'pickle\'></div></div><div class=\'bento\'><div class=\'pickle\'></div></div><div class=\'plate\'><div class=\'orange\'></div></div>","expectedCSS":"plate *","html":"<div class=\'table\'>\\n<orange></orange>\\n<plate>\\n<pickle></pickle>\\n</plate>\\n<bento>\\n<pickle></pickle>\\n</bento>\\n<plate>\\n<orange></orange>\\n</plate>\\n</div>"},{"level":"level-11","todo":"Select the 3rd plate","layout":"<div class=\'plate\'></div><div class=\'plate plate__fancy\'></div><div class=\'plate\'></div><div class=\'plate\'></div>","expectedCSS":":nth-child(3)","html":"<div class=\'table\'>\\n<plate></plate>\\n<plate class=\'fancy\'></plate>\\n<plate></plate>\\n<plate></plate>\\n</div>"}]');

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
table.renderTable();
table.renderLevels();
const buttonEnter = document.querySelector('.button');
buttonEnter === null || buttonEnter === void 0 ? void 0 : buttonEnter.addEventListener('click', () => {
    table.checkCode();
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map