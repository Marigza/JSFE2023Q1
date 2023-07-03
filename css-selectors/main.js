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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-sizing: border-box;
}

body {
  background-color: antiquewhite;
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  font-size: 12px;
  margin: 0 auto;
  padding: 0;
}

h1, h2 {
  color: brown;
}

h2 {
  text-align: center;
}

.button {
  cursor: pointer;
  height: -moz-fit-content;
  height: fit-content;
  width: -moz-fit-content;
  width: fit-content;
  font-size: 16px;
  background-color: white;
  border: 3px solid rgb(152, 152, 48);
  border-radius: 5px;
  padding: 1vh 3vh;
  transition: 0.3s all linear;
}
.button:hover {
  background-color: rgb(229, 229, 73);
}
.button:active {
  background-color: rgb(152, 152, 48);
}

.button_active {
  background-color: rgb(152, 152, 48);
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5vh;
  margin: 10px;
}

section {
  background-color: white;
  border: 1px solid brown;
  border-radius: 5px;
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
}

.block2 {
  grid-row: span 3;
}

.block3 {
  grid-area: span 2/span 2;
}

.block4 {
  grid-area: span 2/span 2;
}

.block__content {
  margin: 0 2vh;
}

@media (max-width: 650px) {
  .block__content#level {
    margin: 0 0;
  }
}

.task__header {
  font-size: 16px;
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
  font-size: 16px;
  cursor: pointer;
}
@media (max-width: 650px) {
  .block__level {
    font-size: 12px;
  }
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

.table {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vh;
  background-color: rgb(185, 185, 58);
  height: 100px;
  margin: 1vh;
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
@media (max-width: 650px) {
  .plate {
    height: 60px;
    width: 60px;
  }
}

.apple {
  background-color: red;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
@media (max-width: 650px) {
  .apple {
    height: 30px;
    width: 30px;
  }
}

.apple__small {
  height: 20px;
  width: 20px;
}
@media (max-width: 650px) {
  .apple__small {
    height: 15px;
    width: 15px;
  }
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
@media (max-width: 650px) {
  .pickle {
    height: 30px;
    width: 15px;
  }
}

.pickle__small {
  height: 20px;
  width: 10px;
}
@media (max-width: 650px) {
  .pickle__small {
    height: 15px;
    width: 8px;
  }
}

.bento {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: brown;
  height: 80px;
  width: 80px;
}
@media (max-width: 650px) {
  .bento {
    height: 60px;
    width: 60px;
  }
}

.orange {
  background-color: orange;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
@media (max-width: 650px) {
  .orange {
    height: 30px;
    width: 30px;
  }
}

.orange__small {
  height: 20px;
  width: 20px;
}
@media (max-width: 650px) {
  .orange__small {
    height: 15px;
    width: 15px;
  }
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
footer {
  margin: 10px;
  background-color: white;
}

.footer__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  line-height: 1.4rem;
  padding: 10px;
  border: 1px solid brown;
  border-radius: 5px;
}
.footer__wrapper > * {
  flex-basis: 20%;
}

.footer__element {
  text-align: center;
  min-height: 45px;
  width: 100%;
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
  justify-content: center;
  align-items: center;
  background-color: transparent;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #000;
  width: 100%;
  height: 100%;
  transition: 0.3s all linear;
}
.link_icon_gh:hover {
  color: rgb(152, 152, 48);
  transform: scale(1.2);
}

.link_rss_icon {
  display: block;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) left no-repeat;
  width: 100%;
  min-height: 45px;
  transition: 0.3s all linear;
  cursor: pointer;
}
.link_rss_icon:hover {
  transform: scale(1.2);
}

.link_rss {
  display: block;
  height: 45px;
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

input {
  max-width: 150px;
}

.block__append-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
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
}`, "",{"version":3,"sources":["webpack://./src/style/_body.scss","webpack://./src/style.scss","webpack://./src/style/_button.scss","webpack://./src/style/_header.scss","webpack://./src/style/_main.scss","webpack://./src/style/_gameBlock.scss","webpack://./src/style/_gameItems.scss","webpack://./src/style/_footer.scss","webpack://./src/style/_constants.scss","webpack://./src/style/_blockAnimationText.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: antiquewhite;\n  display: flex;\n  max-width: 1000px;\n  flex-direction: column;\n  font-size: 12px;\n  margin: 0 auto;\n  padding: 0;\n}\n\nh1, h2 {\n  color: brown;\n}\n\nh2 {\n  text-align: center;\n}\n\n","* {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: antiquewhite;\n  display: flex;\n  max-width: 1000px;\n  flex-direction: column;\n  font-size: 12px;\n  margin: 0 auto;\n  padding: 0;\n}\n\nh1, h2 {\n  color: brown;\n}\n\nh2 {\n  text-align: center;\n}\n\n.button {\n  cursor: pointer;\n  height: fit-content;\n  width: fit-content;\n  font-size: 16px;\n  background-color: white;\n  border: 3px solid rgb(152, 152, 48);\n  border-radius: 5px;\n  padding: 1vh 3vh;\n  transition: 0.3s all linear;\n}\n.button:hover {\n  background-color: rgb(229, 229, 73);\n}\n.button:active {\n  background-color: rgb(152, 152, 48);\n}\n\n.button_active {\n  background-color: rgb(152, 152, 48);\n}\n\n.header {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 5vh;\n  margin: 10px;\n}\n\nsection {\n  background-color: white;\n  border: 1px solid brown;\n  border-radius: 5px;\n}\n\n.main {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(2, auto);\n  gap: 1vh;\n  margin: 10px;\n}\n\n.block1 {\n  grid-column: span 4;\n}\n\n.block2 {\n  grid-row: span 3;\n}\n\n.block3 {\n  grid-area: span 2/span 2;\n}\n\n.block4 {\n  grid-area: span 2/span 2;\n}\n\n.block__content {\n  margin: 0 2vh;\n}\n\n@media (max-width: 650px) {\n  .block__content#level {\n    margin: 0 0;\n  }\n}\n\n.task__header {\n  font-size: 16px;\n}\n\n.level__icon {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n\n.level__icon_active {\n  background: url(../src/assets/svg/done.svg) center no-repeat;\n}\n\n.level__icon_activeHelp {\n  background: url(../src/assets/svg/done-helped.svg) center no-repeat;\n}\n\n.block__level {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1vh;\n  font-size: 16px;\n  cursor: pointer;\n}\n@media (max-width: 650px) {\n  .block__level {\n    font-size: 12px;\n  }\n}\n\n.block__level:hover {\n  color: rgb(185, 185, 58);\n}\n\n.block__level_active {\n  color: rgb(152, 152, 48);\n}\n\n.win-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 200px;\n  padding: 1vh;\n  background-color: rgb(255, 179, 0);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.table {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1vh;\n  background-color: rgb(185, 185, 58);\n  height: 100px;\n  margin: 1vh;\n  padding: 1vh;\n}\n\n.table_mistaked {\n  animation: 0.2s 4 normal table-change;\n}\n\n@keyframes table-change {\n  0% {\n    background-color: rgb(185, 185, 58);\n  }\n  50% {\n    background-color: rgba(185, 185, 58, 0.2);\n  }\n  100% {\n    background-color: rgb(185, 185, 58);\n  }\n}\n.plate {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 50%;\n  height: 80px;\n  width: 80px;\n}\n@media (max-width: 650px) {\n  .plate {\n    height: 60px;\n    width: 60px;\n  }\n}\n\n.apple {\n  background-color: red;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n@media (max-width: 650px) {\n  .apple {\n    height: 30px;\n    width: 30px;\n  }\n}\n\n.apple__small {\n  height: 20px;\n  width: 20px;\n}\n@media (max-width: 650px) {\n  .apple__small {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n.plate__fancy {\n  border: 5px solid skyblue;\n}\n\n.pickle {\n  background-color: green;\n  border-radius: 20px;\n  height: 40px;\n  width: 20px;\n}\n@media (max-width: 650px) {\n  .pickle {\n    height: 30px;\n    width: 15px;\n  }\n}\n\n.pickle__small {\n  height: 20px;\n  width: 10px;\n}\n@media (max-width: 650px) {\n  .pickle__small {\n    height: 15px;\n    width: 8px;\n  }\n}\n\n.bento {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: brown;\n  height: 80px;\n  width: 80px;\n}\n@media (max-width: 650px) {\n  .bento {\n    height: 60px;\n    width: 60px;\n  }\n}\n\n.orange {\n  background-color: orange;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n@media (max-width: 650px) {\n  .orange {\n    height: 30px;\n    width: 30px;\n  }\n}\n\n.orange__small {\n  height: 20px;\n  width: 20px;\n}\n@media (max-width: 650px) {\n  .orange__small {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n.orange:hover,\n.bento:hover,\n.pickle:hover,\n.apple:hover,\n.plate:hover {\n  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.target {\n  animation: 0.5s infinite normal target-elem;\n}\n\n.target_answer {\n  animation: 0.5s 1 normal target-answer;\n}\n\n@keyframes target-elem {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.95);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes target-answer {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\nfooter {\n  margin: 10px;\n  background-color: white;\n}\n\n.footer__wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1rem;\n  line-height: 1.4rem;\n  padding: 10px;\n  border: 1px solid brown;\n  border-radius: 5px;\n}\n.footer__wrapper > * {\n  flex-basis: 20%;\n}\n\n.footer__element {\n  text-align: center;\n  min-height: 45px;\n  width: 100%;\n}\n\n.link_gh {\n  display: block;\n  box-sizing: content-box;\n  background: url(../src/assets/svg/github.svg) right no-repeat;\n  width: 32px;\n  height: 32px;\n}\n\n.link_icon_gh {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  text-decoration: none;\n  color: #000;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s all linear;\n}\n.link_icon_gh:hover {\n  color: rgb(152, 152, 48);\n  transform: scale(1.2);\n}\n\n.link_rss_icon {\n  display: block;\n  background: url(../src/assets/svg/rs_school_js.svg) left no-repeat;\n  width: 100%;\n  min-height: 45px;\n  transition: 0.3s all linear;\n  cursor: pointer;\n}\n.link_rss_icon:hover {\n  transform: scale(1.2);\n}\n\n.link_rss {\n  display: block;\n  height: 45px;\n}\n\n.block__content#css {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 2vh;\n}\n\n.input_block {\n  position: relative;\n}\n\ninput {\n  max-width: 150px;\n}\n\n.block__append-text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 150px;\n  height: 22px;\n  background-color: white;\n  border: 1px solid #000;\n}\n\n.letter {\n  animation: 0.1s 0s 1 text normal both running linear;\n  display: inline-block;\n}\n\n@keyframes text {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}",".button {\r\n  cursor: pointer;\r\n  height: fit-content;\r\n  width: fit-content;\r\n  font-size: 16px;\r\n  background-color: white;\r\n  border: 3px solid rgb(152, 152, 48);\r\n  border-radius: 5px;\r\n  padding: 1vh 3vh;\r\n  transition: 0.3s all linear;\r\n\r\n  &:hover {\r\n    background-color: rgb(229, 229, 73);\r\n  }\r\n\r\n  &:active {\r\n    background-color: rgb(152, 152, 48);\r\n  }\r\n}\r\n\r\n.button_active {\r\n  background-color: rgb(152, 152, 48);\r\n}",".header {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 5vh;\r\n  margin: 10px;\r\n}","section {\r\n  background-color: white;\r\n  border: 1px solid brown;\r\n  border-radius: 5px;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  grid-template-rows: repeat(2, auto);\r\n  gap: 1vh;\r\n  margin: 10px;\r\n}\r\n\r\n.block1 {\r\n  grid-column: span 4;\r\n}\r\n\r\n.block2 {\r\n  grid-row: span 3;\r\n}\r\n\r\n.block3 {\r\n  grid-area: span 2 / span 2;\r\n}\r\n\r\n.block4 {\r\n  grid-area: span 2 / span 2;\r\n}",".block__content {\n  margin: 0 2vh;\n}\n\n.block__content#level {\n  @media(max-width: 650px) {\n      margin: 0 0;\n    }\n}\n\n.task__header {\n  font-size: 16px;\n}\n\n.level__icon {\n  display: block;\n  width: 24px;\n  height: 24px;\n  \n}\n.level__icon_active {\n  background: url(../src/assets/svg/done.svg) center no-repeat;\n}\n\n.level__icon_activeHelp {\n  background: url(../src/assets/svg/done-helped.svg) center no-repeat;\n}\n\n.block__level {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1vh;\n  font-size: 16px;\n  cursor: pointer;\n  @media(max-width: 650px) {\n    font-size: 12px;\n  }\n}\n\n.block__level:hover {\n  color: rgb(185, 185, 58);\n}\n\n.block__level_active {\n  color: rgb(152, 152, 48);\n}\n\n.win-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 200px;\n  padding: 1vh;\n  background-color: rgb(255, 179, 0);\n  font-size: 2rem;\n  text-align: center;\n}\n\n",".table {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1vh;\n  background-color: rgb(185, 185, 58);\n  height: 100px;\n  margin: 1vh;\n  padding: 1vh;\n}\n\n.table_mistaked {\n  animation: 0.2s 4 normal table-change;\n}\n\n@keyframes table-change {\n  0% {\n    background-color: rgb(185, 185, 58);\n  }\n\n  50% {\n    background-color: rgba(185, 185, 58, 0.2);\n  }\n\n  100% {\n    background-color: rgb(185, 185, 58);\n  }\n}\n\n.plate {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 50%;\n  height: 80px;\n  width: 80px;\n  @media(max-width: 650px) {\n      height: 60px;\n      width: 60px;\n    }\n}\n\n.apple {\n  background-color: red;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  @media(max-width: 650px) {\n      height: 30px;\n      width: 30px;\n    }\n}\n\n.apple__small {\n  height: 20px;\n  width: 20px;\n  @media(max-width: 650px) {\n      height: 15px;\n      width: 15px;\n    }\n}\n\n.plate__fancy {\n  border: 5px solid skyblue;\n}\n\n.pickle {\n  background-color: green;\n  border-radius: 20px;\n  height: 40px;\n  width: 20px;\n  @media(max-width: 650px) {\n      height: 30px;\n      width: 15px;\n    }\n}\n\n.pickle__small {\n  height: 20px;\n  width: 10px;\n  @media(max-width: 650px) {\n      height: 15px;\n      width: 8px;\n    }\n}\n\n.bento {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: brown;\n  height: 80px;\n  width: 80px;\n  @media(max-width: 650px){\n    height: 60px;\n    width: 60px;\n  }\n}\n\n.orange {\n  background-color: orange;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  @media(max-width: 650px) {\n      height: 30px;\n      width: 30px;\n    }\n}\n.orange__small {\n  height: 20px;\n  width: 20px;\n  @media(max-width: 650px) {\n      height: 15px;\n      width: 15px;\n    }\n}\n\n.orange:hover,\n.bento:hover,\n.pickle:hover,\n.apple:hover,\n.plate:hover {\n  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.target {\n  animation: 0.5s infinite normal target-elem;\n}\n\n.target_answer {\n  animation: 0.5s 1 normal target-answer;\n}\n\n@keyframes target-elem {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  50% {\n    transform: scale(0.95);\n    opacity: 0.7;\n  }\n  \n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes target-answer {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}","\nfooter {\n  margin: 10px;\n  background-color: white;\n}\n\n.footer__wrapper {\n  @include columns($width: 20%);\n  align-items: center;\n  font-size: 1.0rem;\n  line-height: 1.4rem;\n  padding: 10px;\n  border: 1px solid brown;\n  border-radius: 5px;\n}\n\n.footer__element {\n  text-align: center;\n  min-height: 45px;\n  width: 100%;\n}\n\n.link_gh {\n  display: block;\n  box-sizing: content-box;\n  background: url(../src/assets/svg/github.svg) right no-repeat;\n  width: 32px;\n  height: 32px;\n}\n\n.link_icon_gh {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  text-decoration: none;\n  color: #000;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s all linear;\n  &:hover {\n    color: rgb(152, 152, 48);\n    transform: scale(1.2);\n  }\n}\n\n.link_rss_icon {\n  display: block;\n  background: url(../src/assets/svg/rs_school_js.svg) left no-repeat;\n  width: 100%;\n  min-height: 45px;\n  transition: 0.3s all linear;\n  cursor: pointer;\n  &:hover{\n    transform: scale(1.2);\n  }\n}\n\n.link_rss {\n  display: block;\n  height: 45px;\n}\n","@mixin columns ($width) {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  >* {\n    flex-basis: $width;\n  }\n}\n",".block__content#css {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 2vh;\n}\n\n.input_block {\n  position: relative;\n}\n\ninput {\n  max-width: 150px;\n}\n\n.block__append-text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 150px;\n  height: 22px;\n  background-color: white;\n  border: 1px solid #000;\n}\n\n.letter {\n  animation: .1s 0s 1 text normal both running linear;\n  display: inline-block;\n}\n\n@keyframes text {\n  0% {\n    opacity: 0;\n    }\n  \n  100% {\n    opacity: 1;\n  }\n}"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CSS-Selectors</title>\n</head>\n<body>\n  <header class=\"header\">\n    <h1>CSS-Selectors</h1>\n    <div class=\"button\" id=\"reset\">Reset</div>\n    <div class=\"button\" id=\"help\">Help</div>\n  </header>\n  <main class=\"main\">\n    <section class=\"block1\">\n      <h2 class=\"block__header\">Your task</h2>\n      <div class=\"block__content\" id=\"task\">\n        <div class=\"table\"></div>\n      </div>\n    </section>\n    <section class=\"block2\">\n      <h2 class=\"block__header\">Level</h2>\n      <div class=\"block__content\" id=\"level\"></div>\n    </section>\n    <section class=\"block3\">\n      <h2 class=\"block__header\">CSS Editor</h2>\n      <div class=\"block__content\" id=\"css\">\n        <div class=\"input_block\">\n          <input id=\"input\" type=\"text\">\n        </div>\n        <div class=\"button\" id=\"enter\">Enter</div>\n      </div>\n    </section>\n    <section class=\"block4\">\n      <h2 class=\"block__header\">HTML Viewer</h2>\n      <div class=\"block__content\" id=\"html\"></div>\n    </section>\n  </main>\n  <footer>\n    <div class=\"wrapper footer__wrapper\">\n      <div class=\"footer__element\">\n        <div>\n          <a target=\"_blank\" href=\"https://github.com/Marigza\" class=\"link_icon_gh\">\n            <span class=\"link_gh\"></span>\n            <span>Marigza</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"footer__element\">Rolling Scopes School 2023</div>\n      <div class=\"footer__element\">\n        <div class=\"link_rss_icon\">\n          <a target=\"_blank\" href=\"https://rs.school/js/\" class=\"link_rss\"></a>\n        </div>\n      </div>\n    </div>\n  </footer>\n</body>\n</html>";
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

/***/ "./src/apps/table.ts":
/*!***************************!*\
  !*** ./src/apps/table.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Table: () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _levels_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels.json */ "./src/apps/levels.json");
/* harmony import */ var _textAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textAnimation */ "./src/apps/textAnimation.ts");


class Table {
    constructor() {
        this.level = Number(localStorage.getItem('level')) || 0;
        this.length = _levels_json__WEBPACK_IMPORTED_MODULE_0__.length;
        this.input = '';
        this.isHelped = false;
        this.divMessage = document.createElement('div');
    }
    renderTable() {
        if (this.level <= 10) {
            const task = document.getElementById('task');
            const divTask = document.createElement('div');
            divTask.classList.add('task__header');
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
        this.divMessage.classList.add('win-message');
        this.divMessage.textContent = "You finish learning css-selectors. Congratulations!";
        main === null || main === void 0 ? void 0 : main.append(this.divMessage);
        this.level = 0;
    }
    removeWinMessage() {
        this.divMessage.remove();
    }
    setLevel() {
        if (this.level === 10) {
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
            activeLevel === null || activeLevel === void 0 ? void 0 : activeLevel.classList.add('block__level_active');
        }
    }
    choiseLevel() {
        const allLevels = Array.from(document.querySelectorAll('.block__level'));
        allLevels.forEach(elem => elem.addEventListener('click', () => {
            var _a;
            const active = (_a = elem.firstElementChild) === null || _a === void 0 ? void 0 : _a.id;
            const levelArr = _levels_json__WEBPACK_IMPORTED_MODULE_0__.map(elem => elem.level);
            if (active !== undefined) {
                this.level = levelArr.indexOf(active) - 1;
                this.setLevel();
            }
        }));
    }
    resetProgress() {
        this.level = 0;
        document.getElementById('input').value = '';
        this.renderTable();
        this.renderLevels();
        this.removeWinMessage();
    }
    showAnswer() {
        const text = new _textAnimation__WEBPACK_IMPORTED_MODULE_1__.TextAnimation(_levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].expectedCSS);
        text.renderBlock();
        document.getElementById('input').value = _levels_json__WEBPACK_IMPORTED_MODULE_0__[this.level].expectedCSS;
        this.isHelped = true;
    }
}


/***/ }),

/***/ "./src/apps/textAnimation.ts":
/*!***********************************!*\
  !*** ./src/apps/textAnimation.ts ***!
  \***********************************/
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
        setTimeout(() => this.hideblock(), 2000);
    }
    // https://ru.stackoverflow.com/questions/1431728/
    showText() {
        const textArr = this.text.split('');
        for (let i = 0; i < textArr.length; i++) {
            const letter = document.createElement('span');
            const delay = `${i / 10}s`;
            letter.classList.add('letter');
            letter.textContent = textArr[i];
            if (letter.textContent.match(/\s/)) {
                letter.style.margin = 'auto 3px';
            }
            letter.style.animationDelay = delay;
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

/***/ "./src/apps/levels.json":
/*!******************************!*\
  !*** ./src/apps/levels.json ***!
  \******************************/
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
/* harmony import */ var _apps_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps/table */ "./src/apps/table.ts");



const table = new _apps_table__WEBPACK_IMPORTED_MODULE_2__.Table();
const buttonReset = document.getElementById('reset');
const buttonHelp = document.getElementById('help');
const buttonEnter = document.getElementById('enter');
buttonReset === null || buttonReset === void 0 ? void 0 : buttonReset.addEventListener('click', () => table.resetProgress());
buttonHelp === null || buttonHelp === void 0 ? void 0 : buttonHelp.addEventListener('click', () => table.showAnswer());
table.renderTable();
table.renderLevels();
buttonEnter === null || buttonEnter === void 0 ? void 0 : buttonEnter.addEventListener('click', () => {
    table.checkCode();
});
document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        table.checkCode();
        buttonEnter === null || buttonEnter === void 0 ? void 0 : buttonEnter.classList.add('button_active');
        setTimeout(() => buttonEnter === null || buttonEnter === void 0 ? void 0 : buttonEnter.classList.remove('button_active'), 300);
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