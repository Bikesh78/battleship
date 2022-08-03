/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  min-height: 100vh;\n  background-color: #6050d5;\n  color: #bdb6b6;\n}\n\nheader {\n  text-align: center;\n  padding: 25px 0;\n}\n\nh1 {\n  font-size: 60px;\n}\n\nh3 {\n  font-size: 50px;\n}\n\nh4 {\n  font-size: 30px;\n}\n\nh5 {\n  font-size: 20px;\n}\n\n.board-container {\n  padding: 25px 0;\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.boards {\n  text-align: center;\n}\n\n.board,\n.board-1,\n.board-2 {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 350px;\n  height: 350px;\n  border-bottom: solid 1px rgba(14, 69, 78, 0.9098039216);\n}\n\n.board-2 {\n  cursor: pointer;\n}\n\n.board-1.disabled,\n.board-2.disabled {\n  pointer-events: none;\n}\n\n.grid {\n  width: 35px;\n  height: 35px;\n  border: solid 1px rgba(14, 69, 78, 0.9098039216);\n  border-right: none;\n  border-bottom: none;\n}\n.grid:nth-child(10n) {\n  border-right: solid 1px rgba(14, 69, 78, 0.9098039216);\n}\n\n.grid.occupied {\n  background-color: rgba(196, 152, 11, 0.4901960784);\n}\n\n.grid.missed {\n  background-color: #a93f3f;\n  position: relative;\n}\n.grid.missed::after {\n  content: \"x\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n  font-weight: 700;\n  color: #843131;\n}\n\n.grid.hit {\n  background-color: #298538;\n  position: relative;\n}\n.grid.hit::after {\n  content: \"\";\n  display: block;\n  background-color: #1d5e28;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.winner-message {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  visibility: hidden;\n  opacity: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  transition: opacity 0.5s ease-in-out;\n}\n\n.turn-info {\n  text-align: center;\n}\n\n.btn {\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 18px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n\n.btn-main {\n  background-color: #6050d5;\n  color: white;\n}\n.btn-main:hover {\n  background-color: #412fc3;\n}\n\n.btn-secondary {\n  background-color: #412fc3;\n  color: white;\n}\n.btn-secondary:hover {\n  background-color: #33259a;\n}\n\n.initial-message {\n  display: none;\n  justify-content: center;\n  gap: 25px;\n  padding: 25px;\n}\n@media (max-width: 767px) {\n  .initial-message {\n    flex-wrap: wrap;\n  }\n}\n.initial-message li {\n  list-style: none;\n}\n.initial-message .game-instructions {\n  position: absolute;\n  padding: 25px;\n  border-radius: 15px;\n  width: 50%;\n  max-height: 95vh;\n  overflow-y: auto;\n  z-index: 2;\n  background-color: #412fc3;\n  top: -150%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: all 0.5s ease-in-out;\n}\n@media (max-width: 576px) {\n  .initial-message .game-instructions {\n    width: 80%;\n  }\n}\n.initial-message .game-instructions h4 {\n  text-align: center;\n  margin-bottom: 10px;\n}\n@media (max-width: 576px) {\n  .initial-message .game-instructions h4 {\n    font-size: 25px;\n  }\n}\n.initial-message .game-instructions .close-icon {\n  text-align: right;\n  cursor: pointer;\n}\n.initial-message .game-instructions .text-container p {\n  margin-bottom: 10px;\n}\n.initial-message .overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n.initial-message .board,\n.initial-message .ship-container {\n  flex-shrink: 0;\n}\n@media (max-width: 767px) {\n  .initial-message .board {\n    order: 2;\n  }\n}\n\n.initial-message.show-instructions .overlay {\n  visibility: visible;\n  opacity: 1;\n}\n.initial-message.show-instructions .game-instructions {\n  top: 50%;\n}\n\n@media (max-width: 767px) {\n  .ship-container {\n    order: 1;\n  }\n}\n.ship-container .text-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 10px;\n}\n.ship-container .text-container p {\n  font-size: 18px;\n}\n.ship-container .ships {\n  margin-top: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 160px;\n  row-gap: 10px;\n}\n.ship-container .ships .ship {\n  display: flex;\n}\n.ship-container .ships .ship div {\n  width: 35px;\n  height: 35px;\n  border: solid 1px rgba(14, 69, 78, 0.9098039216);\n  background-color: rgba(196, 152, 11, 0.4901960784);\n}\n.ship-container .ships .ship div + div {\n  border-left: none;\n}\n.ship-container .ships .ship.vertical {\n  flex-direction: column;\n  flex-basis: 48%;\n}\n.ship-container .ships .ship.vertical div + div {\n  border-top: none;\n  border-left: solid 1px rgba(14, 69, 78, 0.9098039216);\n}\n\nbody.place-ship .board-container {\n  display: none;\n}\nbody.place-ship .initial-message {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAQA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAPF;;AASA;EACE,iCAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAjBiB;EAkBjB,cAjBW;AAWb;;AAQA;EACE,kBAAA;EACA,eAAA;AALF;;AAOA;EACE,eAAA;AAJF;;AAMA;EACE,eAAA;AAHF;;AAKA;EACE,eAAA;AAFF;;AAIA;EACE,eAAA;AADF;;AAGA;EACE,eAAA;EACA,aAAA;EACA,SAAA;EACA,eAAA;EACA,uBAAA;AAAF;;AAEA;EACE,kBAAA;AACF;;AACA;;;EAGE,mBAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,uDAAA;AAEF;;AAAA;EACE,eAAA;AAGF;;AADA;;EAEE,oBAAA;AAIF;;AAFA;EACE,WAAA;EACA,YAAA;EACA,gDAAA;EACA,kBAAA;EACA,mBAAA;AAKF;AAJE;EACE,sDAAA;AAMJ;;AAHA;EACE,kDAxEW;AA8Eb;;AAJA;EACE,yBA1Ea;EA2Eb,kBAAA;AAOF;AANE;EACE,YAAA;EACA,cAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AAQJ;;AALA;EACE,yBAxFU;EAyFV,kBAAA;AAQF;AAPE;EACE,WAAA;EACA,cAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AASJ;;AANA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,oCAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,oCAAA;AASF;;AAPA;EACE,kBAAA;AAUF;;AARA;EACE,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;AAWF;;AATA;EACE,yBAxIiB;EAyIjB,YAAA;AAYF;AAXE;EACE,yBAAA;AAaJ;;AAVA;EACE,yBA1Ic;EA2Id,YAAA;AAaF;AAZE;EACE,yBAAA;AAcJ;;AAVA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,aAAA;AAaF;AAZE;EALF;IAMI,eAAA;EAeF;AACF;AAdE;EACE,gBAAA;AAgBJ;AAdE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,UAAA;EACA,yBAAA;EACA,UAAA;EACA,SAAA;EACA,gCAAA;EACA,gCAAA;AAgBJ;AAfI;EAbF;IAcI,UAAA;EAkBJ;AACF;AAjBI;EACE,kBAAA;EACA,mBAAA;AAmBN;AAlBM;EAHF;IAII,eAAA;EAqBN;AACF;AAnBI;EACE,iBAAA;EACA,eAAA;AAqBN;AAlBM;EACE,mBAAA;AAoBR;AAhBE;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,kBAAA;EACA,UAAA;EACA,gCAAA;AAkBJ;AAhBE;;EAEE,cAAA;AAkBJ;AAfI;EADF;IAEI,QAAA;EAkBJ;AACF;;AAdE;EACE,mBAAA;EACA,UAAA;AAiBJ;AAfE;EACE,QAAA;AAiBJ;;AAbE;EADF;IAEI,QAAA;EAiBF;AACF;AAhBE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;AAkBJ;AAjBI;EACE,eAAA;AAmBN;AAhBE;EACE,gBAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;AAkBJ;AAjBI;EACE,aAAA;AAmBN;AAlBM;EACE,WAAA;EACA,YAAA;EACA,gDAAA;EACA,kDAAA;AAoBR;AAlBM;EACE,iBAAA;AAoBR;AAjBI;EACE,sBAAA;EACA,eAAA;AAmBN;AAlBM;EACE,gBAAA;EACA,qDAAA;AAoBR;;AAdE;EACE,aAAA;AAiBJ;AAfE;EACE,aAAA;AAiBJ","sourcesContent":["$border-color: #0e454ee8;\n$background-color: #6050d5;\n$text-color: #bdb6b6;\n$ship-color: #c4980b7d;\n$missed-color: #a93f3f;\n$hit-color: #298538;\n$btn-sec-color: #412fc3;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  min-height: 100vh;\n  background-color: $background-color;\n  color: $text-color;\n}\nheader {\n  text-align: center;\n  padding: 25px 0;\n}\nh1 {\n  font-size: 60px;\n}\nh3 {\n  font-size: 50px;\n}\nh4 {\n  font-size: 30px;\n}\nh5 {\n  font-size: 20px;\n}\n.board-container {\n  padding: 25px 0;\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.boards {\n  text-align: center;\n}\n.board,\n.board-1,\n.board-2 {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 350px;\n  height: 350px;\n  border-bottom: solid 1px $border-color;\n}\n.board-2 {\n  cursor: pointer;\n}\n.board-1.disabled,\n.board-2.disabled {\n  pointer-events: none;\n}\n.grid {\n  width: 35px;\n  height: 35px;\n  border: solid 1px $border-color;\n  border-right: none;\n  border-bottom: none;\n  &:nth-child(10n) {\n    border-right: solid 1px $border-color;\n  }\n}\n.grid.occupied {\n  background-color: $ship-color;\n}\n.grid.missed {\n  background-color: $missed-color;\n  position: relative;\n  &::after {\n    content: \"x\";\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 12px;\n    font-weight: 700;\n    color: darken($color: $missed-color, $amount: 10);\n  }\n}\n.grid.hit {\n  background-color: $hit-color;\n  position: relative;\n  &::after {\n    content: \"\";\n    display: block;\n    background-color: darken($color: $hit-color, $amount: 10);\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n.winner-message {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  visibility: hidden;\n  opacity: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  transition: opacity 0.5s ease-in-out;\n}\n.turn-info {\n  text-align: center;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 18px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n.btn-main {\n  background-color: $background-color;\n  color: white;\n  &:hover {\n    background-color: darken($color: $background-color, $amount: 10);\n  }\n}\n.btn-secondary {\n  background-color: $btn-sec-color;\n  color: white;\n  &:hover {\n    background-color: darken($color: $btn-sec-color, $amount: 10);\n  }\n}\n\n.initial-message {\n  display: none;\n  justify-content: center;\n  gap: 25px;\n  padding: 25px;\n  @media (max-width: 767px) {\n    flex-wrap: wrap;\n  }\n  li {\n    list-style: none;\n  }\n  .game-instructions {\n    position: absolute;\n    padding: 25px;\n    border-radius: 15px;\n    width: 50%;\n    max-height: 95vh;\n    overflow-y: auto;\n    z-index: 2;\n    background-color: darken($color: $background-color, $amount: 10);\n    top: -150%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: all 0.5s ease-in-out;\n    @media (max-width: 576px) {\n      width: 80%;\n    }\n    h4 {\n      text-align: center;\n      margin-bottom: 10px;\n      @media (max-width: 576px) {\n        font-size: 25px;\n      }\n    }\n    .close-icon {\n      text-align: right;\n      cursor: pointer;\n    }\n    .text-container {\n      p {\n        margin-bottom: 10px;\n      }\n    }\n  }\n  .overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    visibility: hidden;\n    opacity: 0;\n    transition: all 0.5s ease-in-out;\n  }\n  .board,\n  .ship-container {\n    flex-shrink: 0;\n  }\n  .board {\n    @media (max-width: 767px) {\n      order: 2;\n    }\n  }\n}\n.initial-message.show-instructions {\n  .overlay {\n    visibility: visible;\n    opacity: 1;\n  }\n  .game-instructions {\n    top: 50%;\n  }\n}\n.ship-container {\n  @media (max-width: 767px) {\n    order: 1;\n  }\n  .text-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    row-gap: 10px;\n    p {\n      font-size: 18px;\n    }\n  }\n  .ships {\n    margin-top: 15px;\n    display: flex;\n    flex-wrap: wrap;\n    width: 160px;\n    row-gap: 10px;\n    .ship {\n      display: flex;\n      div {\n        width: 35px;\n        height: 35px;\n        border: solid 1px $border-color;\n        background-color: #c4980b7d;\n      }\n      div + div {\n        border-left: none;\n      }\n    }\n    .ship.vertical {\n      flex-direction: column;\n      flex-basis: 48%;\n      div + div {\n        border-top: none;\n        border-left: solid 1px $border-color;\n      }\n    }\n  }\n}\nbody.place-ship {\n  .board-container {\n    display: none;\n  }\n  .initial-message {\n    display: flex;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/gameBoardFactory.js":
/*!*********************************!*\
  !*** ./src/gameBoardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoardFactory)
/* harmony export */ });
function gameBoardFactory() {
  // create gameBoard Array
  const gameBoard = [];
  const shipList = [];
  const hitCoordinates = [];
  for (let i = 0; i < 100; i++) {
    gameBoard.push("");
  }
  const setShipDirection = (ship, direction) => {
    return (ship.shipDirection = direction);
  };
  const getShipPosition = (shipId) => {
    const shipPosition = [];
    gameBoard.forEach((item, index) => {
      if (item === shipId) {
        shipPosition.push(index);
      }
    });
    return shipPosition;
  };
  function isShipOutOfBound(shipDirection, initialPosition, shipLength) {
    if (shipDirection === "horizontal") {
      // All the rows have same tens values e.g first row: 0 to 9, second row: 10 to 19.
      // Having different tens values means the ship is out of bound
      const lastShipCoordinate = initialPosition + shipLength;
      const initialTensValue = Math.floor(initialPosition / 10);
      const lastTensValue = Math.floor(lastShipCoordinate / 10);
      if (initialTensValue !== lastTensValue) {
        return true;
      } else return false;
    } else if (shipDirection === "vertical") {
      // The coordiantes in gameboard ranges from 0 to 99.
      // So the ship's coordinate should not be greater than 99
      const lastShipCoordinate = initialPosition + (shipLength - 1) * 10;
      if (lastShipCoordinate > 99) {
        return true;
      } else return false;
    }
  }
  function isCellOccupied(shipDirection, initialPosition, shipLength) {
    if (shipDirection === "horizontal") {
      let occupiedCell = 0;
      for (let i = 0; i < shipLength; i++) {
        if (gameBoard[initialPosition + i] !== "") {
          occupiedCell++;
          break;
        }
      }
      if (occupiedCell) {
        return true;
      } else return false;
    } else if (shipDirection === "vertical") {
      let occupiedCell = 0;
      for (let i = 0; i < shipLength; i++) {
        if (gameBoard[initialPosition + 10 * i] !== "") {
          occupiedCell++;
          break;
        }
      }
      if (occupiedCell) {
        return true;
      } else return false;
    }
  }
  function isMoveValid(shipDirection, initialPosition, shipLength) {
    if (isShipOutOfBound(shipDirection, initialPosition, shipLength)) {
      return false;
    }
    if (isCellOccupied(shipDirection, initialPosition, shipLength)) {
      return false;
    }
    return true;
  }
  let isValid = true;
  const isValidPosition = () => {
    return isValid;
  };
  const placeShip = (ship, initialPosition) => {
    if (!ship.shipDirection) {
      setShipDirection(ship, "horizontal");
    }
    const shipLength = ship.length;
    let { shipDirection } = ship;
    if (shipDirection === "horizontal") {
      if (isMoveValid(shipDirection, initialPosition, shipLength)) {
        isValid = true;
        let i = 0;
        while (i < shipLength) {
          gameBoard[initialPosition + i] = ship.id;
          i++;
        }
      } else {
        isValid = false;
        return "Not Valid";
      }
    } else if (shipDirection === "vertical") {
      if (isMoveValid(shipDirection, initialPosition, shipLength)) {
        isValid = true;
        let i = 0;
        while (i < shipLength) {
          gameBoard[initialPosition + 10 * i] = ship.id;
          i++;
        }
      } else {
        isValid = false;
        return "Not Valid";
      }
    }
    return gameBoard;
  };
  let shipIsHit = false;
  const isShipHit = () => {
    return shipIsHit;
  };
  const receiveAttack = (attackCoordinate) => {
    if (gameBoard[attackCoordinate] === "") {
      gameBoard[attackCoordinate] = "Missed";
      shipIsHit = false;
      return "Missed";
    } else {
      const ship = shipList.find(
        (ship) => ship.id === gameBoard[attackCoordinate]
      );
      gameBoard[attackCoordinate] = "Hit";
      shipIsHit = true;
      return ship.hit(attackCoordinate);
    }
  };
  const hasEveryShipSunk = () => {
    return shipList.every((ship) => ship.isSunk());
  };
  return {
    gameBoard,
    shipList,
    hitCoordinates,
    setShipDirection,
    placeShip,
    getShipPosition,
    receiveAttack,
    hasEveryShipSunk,
    isShipHit,
    isValidPosition,
  };
}


/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardFactory */ "./src/gameBoardFactory.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");



function playerFactory(name) {
  const playerGameBoard = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const isAlreadyShot = (position, oppositionGameBoard) => {
    if (oppositionGameBoard.hitCoordinates.includes(position)) {
      return true;
    } else return false;
  };
  let isAttackValid = true;
  const isTurnOver = () => {
    return isAttackValid;
  };
  const attack = (position, oppositionGameBoard) => {
    if (isAlreadyShot(position, oppositionGameBoard)) {
      isAttackValid = false;
      return "Not valid";
    } else {
      isAttackValid = true;
      oppositionGameBoard.hitCoordinates.push(position);
      return oppositionGameBoard.receiveAttack(position);
    }
  };
  const randomAttack = (oppositionGameBoard) => {
    let randomPosition = Math.floor(Math.random() * 100);
    while (isAlreadyShot(randomPosition, oppositionGameBoard)) {
      randomPosition = Math.floor(Math.random() * 100);
    }
    oppositionGameBoard.hitCoordinates.push(randomPosition);
    return oppositionGameBoard.receiveAttack(randomPosition);
  };
  const randomlyPlaceShip = () => {
    // instantiate ships
    const submarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("submarine");
    const carrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("carrier");
    const battleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("battleship");
    const cruiser = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("cruiser");
    const destroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("destroyer");

    playerGameBoard.shipList.push(
      submarine,
      carrier,
      battleship,
      cruiser,
      destroyer
    );

    // loop through each ship and place them in the board
    playerGameBoard.shipList.forEach((ship) => {
      let shipInitialPosition = Math.floor(Math.random() * 100);
      const randomNumber = Math.floor(Math.random() * 2);
      const shipDirection = randomNumber === 0 ? "horizontal" : "vertical";
      playerGameBoard.setShipDirection(ship, shipDirection);
      let i = 0;
      while (i < 1) {
        if (
          playerGameBoard.placeShip(ship, shipInitialPosition) === "Not Valid"
        ) {
          shipInitialPosition = Math.floor(Math.random() * 99);
          if (
            playerGameBoard.placeShip(ship, shipInitialPosition) !== "Not Valid"
          ) {
            break;
          }
        } else {
          i++;
        }
      }
    });
  };
  return {
    name,
    playerGameBoard,
    attack,
    randomAttack,
    randomlyPlaceShip,
    isTurnOver,
  };
}


/***/ }),

/***/ "./src/renderGameBoard.js":
/*!********************************!*\
  !*** ./src/renderGameBoard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderGameBoard = (parentElement, gameBoard, hideGrid) => {
  //remove already rendered elements
  while (parentElement.firstElementChild) {
    parentElement.firstElementChild.remove();
  }
  gameBoard.forEach((grid, index) => {
    const gridDiv = document.createElement("div");
    if (grid === "Missed") {
      gridDiv.classList.add("missed");
    } else if (grid === "Hit") {
      gridDiv.classList.add("hit");
    } else if (grid !== "" && hideGrid !== true) {
      gridDiv.classList.add("occupied");
    }
    gridDiv.classList.add("grid");
    gridDiv.setAttribute("id", index);

    parentElement.appendChild(gridDiv);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGameBoard);


/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipFactory)
/* harmony export */ });
function shipFactory(name) {
  let length;
  switch (name) {
    case "carrier":
      length = 5;
      break;
    case "battleship":
      length = 4;
      break;
    case "cruiser":
      length = 3;
      break;
    case "submarine":
      length = 3;
      break;
    case "destroyer":
      length = 2;
      break;
    default:
      return;
  }
  const id = name;
  const hitPositions = [];
  let shipDirection = "";
  const hit = (position) => {
    hitPositions.push(position);
    return hitPositions[hitPositions.length - 1];
  };

  const isSunk = () => {
    if (hitPositions.length === length) {
      return true;
    } else {
      return false;
    }
  };
  return {
    id,
    length,
    hit,
    isSunk,
    shipDirection,
  };
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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory */ "./src/playerFactory.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
/* harmony import */ var _renderGameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGameBoard */ "./src/renderGameBoard.js");
/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/style.scss */ "./src/style.scss");





let hasGameStarted = false;
const body = document.querySelector("body");

const playerA = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("player A");
const submarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("submarine");
const carrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("carrier");
const battleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("battleship");
const cruiser = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("cruiser");
const destroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("destroyer");
const boardOne = document.querySelector(".board-1");
const { playerGameBoard } = playerA;
const { gameBoard } = playerGameBoard;

const pcPlayer = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("PC Player");
const boardTwo = document.querySelector(".board-2");
const pcPlayerGameBoard = pcPlayer.playerGameBoard;
const pcGameBoard = pcPlayerGameBoard.gameBoard;

const winnerMessage = document.querySelector(".winner-message");
const winnerMessageText = winnerMessage.querySelector(".winner-message-text");
const playAgainBtn = winnerMessage.querySelector(".btn-main");
const turnInfo = document.querySelector(".turn-info");
let dragCount = 0;
let draggedShip = null;

playerGameBoard.shipList.push(
  submarine,
  carrier,
  battleship,
  cruiser,
  destroyer
);
function isGameOver(oppositionGameBoard, player) {
  if (oppositionGameBoard.hasEveryShipSunk()) {
    winnerMessage.style.cssText = "opacity:1;visibility:visible";
    playAgainBtn.addEventListener("click", () => window.location.reload());
    if (player.name === "player A")
      winnerMessageText.textContent = `You Won The Game.`;
  } else if (player.name === "PC Player") {
    winnerMessageText.textContent = `The Compute Won The Game.`;
  }
}
function startGame() {
  (0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(boardOne, gameBoard);
  turnInfo.textContent = "Your Turn";

  // player turn controller
  let turnCount = 0;

  // delay rendering of board if pc successfully attacks a ship
  function loopRandomAttack() {
    boardOne.classList.remove("disabled");
    boardTwo.classList.add("disabled");
    turnInfo.textContent = "Computer's Turn";
    setTimeout(() => {
      pcPlayer.randomAttack(playerGameBoard);
      (0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(boardOne, gameBoard);
      isGameOver(playerGameBoard, pcPlayer);
      if (!playerGameBoard.isShipHit()) {
        turnCount = 0;
        turnInfo.textContent = "Your Turn";
        boardTwo.classList.remove("disabled");
        boardOne.classList.add("disabled");
      } else {
        loopRandomAttack();
      }
    }, 800);
  }

  if (turnCount === 0) {
    boardTwo.addEventListener("click", (e) => {
      let { isTurnOver } = playerA;
      playerA.attack(e.target.id, pcPlayerGameBoard);
      (0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(boardTwo, pcGameBoard, true);
      isGameOver(pcPlayerGameBoard, playerA);
      boardOne.classList.add("disabled");

      //if player misses, it's the other player's turn
      if (isTurnOver() && !pcPlayerGameBoard.isShipHit()) {
        turnCount = 1;
        boardOne.classList.remove("disabled");

        loopRandomAttack();
      }
    });
  }
}

(0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(boardOne, gameBoard);
pcPlayer.randomlyPlaceShip();
(0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(boardTwo, pcGameBoard, true);

if (!hasGameStarted) {
  const initialMessage = document.querySelector(".initial-message");
  const board = initialMessage.querySelector(".board");
  const ships = initialMessage.querySelectorAll(".ship");
  const randomButton = initialMessage.querySelector(".btn-secondary");
  const instructionBtn = document.querySelector(".instruction-button");
  const overlay = initialMessage.querySelector(".overlay");
  const closeIcon = initialMessage.querySelector(".close-icon");
  const draggableShipList = document.querySelectorAll(".ship");
  let draggedShip = null;
  body.classList.add("place-ship");

  (0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(board, gameBoard);

  randomButton.addEventListener("click", () => {
    playerGameBoard.shipList = [];
    playerA.randomlyPlaceShip();
    body.classList.remove("place-ship");
    hasGameStarted = true;
    startGame();
  });
  ships.forEach((ship) => {
    ship.addEventListener("click", (e) => {
      e.stopPropagation();
      ship.classList.toggle("vertical");
      let rotatedShip = playerGameBoard.shipList.filter(
        (ship) => ship.id == e.target.className
      );
      if (ship.className === "vertical") {
        playerGameBoard.setShipDirection(rotatedShip[0], "horizontal");
      } else {
        playerGameBoard.setShipDirection(rotatedShip[0], "vertical");
      }
    });
  });

  draggableShipList.forEach((ship) => {
    ship.addEventListener("mousedown", (e) => {
      draggedShip = playerGameBoard.shipList.filter(
        (ship) => ship.id === e.target.className
      );
    });
  });

  document.addEventListener("dragenter", (e) => {
    e.preventDefault();
  });
  document.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  document.addEventListener("drop", (e) => {
    e.preventDefault();
    dragCount = 0;
    if (e.target.className.includes("grid")) {
      let ships = initialMessage.querySelector(".ships");
      let shipToBeRemoved = initialMessage.querySelector(
        `.${draggedShip[0].id}`
      );
      playerGameBoard.placeShip(draggedShip[0], Number(e.target.id));
      if (playerGameBoard.isValidPosition()) {
        shipToBeRemoved.parentElement.remove();
      }
      draggedShip = null;
      (0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(board, gameBoard);
      if (!ships.firstElementChild) {
        body.classList.remove("place-ship");
        hasGameStarted = true;
        startGame();
      }
    }
  });
  instructionBtn.addEventListener("click", () =>
    initialMessage.classList.add("show-instructions")
  );
  overlay.addEventListener("click", () =>
    initialMessage.classList.remove("show-instructions")
  );
  closeIcon.addEventListener("click", () => {
    initialMessage.classList.remove("show-instructions");
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLGFBQWEsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssYUFBYSxZQUFZLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0s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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQWU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZUJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyR2FtZUJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDUwZDU7XFxuICBjb2xvcjogI2JkYjZiNjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI1cHggMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuaDUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDI1cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCxcXG4uYm9hcmQtMSxcXG4uYm9hcmQtMiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgxNCwgNjksIDc4LCAwLjkwOTgwMzkyMTYpO1xcbn1cXG5cXG4uYm9hcmQtMiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib2FyZC0xLmRpc2FibGVkLFxcbi5ib2FyZC0yLmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTQsIDY5LCA3OCwgMC45MDk4MDM5MjE2KTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5ncmlkOm50aC1jaGlsZCgxMG4pIHtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMTQsIDY5LCA3OCwgMC45MDk4MDM5MjE2KTtcXG59XFxuXFxuLmdyaWQub2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTYsIDE1MiwgMTEsIDAuNDkwMTk2MDc4NCk7XFxufVxcblxcbi5ncmlkLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTkzZjNmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZ3JpZC5taXNzZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJ4XFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzg0MzEzMTtcXG59XFxuXFxuLmdyaWQuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTg1Mzg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ncmlkLmhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDVlMjg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4ud2lubmVyLW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnR1cm4taW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDUwZDU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5idG4tbWFpbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEyZmMzO1xcbn1cXG5cXG4uYnRuLXNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEyZmMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMyNTlhO1xcbn1cXG5cXG4uaW5pdGlhbC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjVweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmluaXRpYWwtbWVzc2FnZSB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuLmluaXRpYWwtbWVzc2FnZSBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uaW5pdGlhbC1tZXNzYWdlIC5nYW1lLWluc3RydWN0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtaGVpZ2h0OiA5NXZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEyZmMzO1xcbiAgdG9wOiAtMTUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLmluaXRpYWwtbWVzc2FnZSAuZ2FtZS1pbnN0cnVjdGlvbnMge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbn1cXG4uaW5pdGlhbC1tZXNzYWdlIC5nYW1lLWluc3RydWN0aW9ucyBoNCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIC5pbml0aWFsLW1lc3NhZ2UgLmdhbWUtaW5zdHJ1Y3Rpb25zIGg0IHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgfVxcbn1cXG4uaW5pdGlhbC1tZXNzYWdlIC5nYW1lLWluc3RydWN0aW9ucyAuY2xvc2UtaWNvbiB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmluaXRpYWwtbWVzc2FnZSAuZ2FtZS1pbnN0cnVjdGlvbnMgLnRleHQtY29udGFpbmVyIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmluaXRpYWwtbWVzc2FnZSAub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5pbml0aWFsLW1lc3NhZ2UgLmJvYXJkLFxcbi5pbml0aWFsLW1lc3NhZ2UgLnNoaXAtY29udGFpbmVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5pbml0aWFsLW1lc3NhZ2UgLmJvYXJkIHtcXG4gICAgb3JkZXI6IDI7XFxuICB9XFxufVxcblxcbi5pbml0aWFsLW1lc3NhZ2Uuc2hvdy1pbnN0cnVjdGlvbnMgLm92ZXJsYXkge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5pbml0aWFsLW1lc3NhZ2Uuc2hvdy1pbnN0cnVjdGlvbnMgLmdhbWUtaW5zdHJ1Y3Rpb25zIHtcXG4gIHRvcDogNTAlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5zaGlwLWNvbnRhaW5lciB7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cXG4uc2hpcC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG4uc2hpcC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIHAge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uc2hpcC1jb250YWluZXIgLnNoaXBzIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuLnNoaXAtY29udGFpbmVyIC5zaGlwcyAuc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc2hpcC1jb250YWluZXIgLnNoaXBzIC5zaGlwIGRpdiB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTQsIDY5LCA3OCwgMC45MDk4MDM5MjE2KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk2LCAxNTIsIDExLCAwLjQ5MDE5NjA3ODQpO1xcbn1cXG4uc2hpcC1jb250YWluZXIgLnNoaXBzIC5zaGlwIGRpdiArIGRpdiB7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuLnNoaXAtY29udGFpbmVyIC5zaGlwcyAuc2hpcC52ZXJ0aWNhbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1iYXNpczogNDglO1xcbn1cXG4uc2hpcC1jb250YWluZXIgLnNoaXBzIC5zaGlwLnZlcnRpY2FsIGRpdiArIGRpdiB7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDE0LCA2OSwgNzgsIDAuOTA5ODAzOTIxNik7XFxufVxcblxcbmJvZHkucGxhY2Utc2hpcCAuYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmJvZHkucGxhY2Utc2hpcCAuaW5pdGlhbC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQVBGOztBQVNBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQWpCaUI7RUFrQmpCLGNBakJXO0FBV2I7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFPQTtFQUNFLGVBQUE7QUFKRjs7QUFNQTtFQUNFLGVBQUE7QUFIRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTs7O0VBR0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdURBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTs7RUFFRSxvQkFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFLRjtBQUpFO0VBQ0Usc0RBQUE7QUFNSjs7QUFIQTtFQUNFLGtEQXhFVztBQThFYjs7QUFKQTtFQUNFLHlCQTFFYTtFQTJFYixrQkFBQTtBQU9GO0FBTkU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFRSjs7QUFMQTtFQUNFLHlCQXhGVTtFQXlGVixrQkFBQTtBQVFGO0FBUEU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQVNKOztBQU5BO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0FBU0Y7O0FBUEE7RUFDRSxrQkFBQTtBQVVGOztBQVJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFXRjs7QUFUQTtFQUNFLHlCQXhJaUI7RUF5SWpCLFlBQUE7QUFZRjtBQVhFO0VBQ0UseUJBQUE7QUFhSjs7QUFWQTtFQUNFLHlCQTFJYztFQTJJZCxZQUFBO0FBYUY7QUFaRTtFQUNFLHlCQUFBO0FBY0o7O0FBVkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQWFGO0FBWkU7RUFMRjtJQU1JLGVBQUE7RUFlRjtBQUNGO0FBZEU7RUFDRSxnQkFBQTtBQWdCSjtBQWRFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtBQWdCSjtBQWZJO0VBYkY7SUFjSSxVQUFBO0VBa0JKO0FBQ0Y7QUFqQkk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBbUJOO0FBbEJNO0VBSEY7SUFJSSxlQUFBO0VBcUJOO0FBQ0Y7QUFuQkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFxQk47QUFsQk07RUFDRSxtQkFBQTtBQW9CUjtBQWhCRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQWtCSjtBQWhCRTs7RUFFRSxjQUFBO0FBa0JKO0FBZkk7RUFERjtJQUVJLFFBQUE7RUFrQko7QUFDRjs7QUFkRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQWlCSjtBQWZFO0VBQ0UsUUFBQTtBQWlCSjs7QUFiRTtFQURGO0lBRUksUUFBQTtFQWlCRjtBQUNGO0FBaEJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBa0JKO0FBakJJO0VBQ0UsZUFBQTtBQW1CTjtBQWhCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWtCSjtBQWpCSTtFQUNFLGFBQUE7QUFtQk47QUFsQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0RBQUE7QUFvQlI7QUFsQk07RUFDRSxpQkFBQTtBQW9CUjtBQWpCSTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQW1CTjtBQWxCTTtFQUNFLGdCQUFBO0VBQ0EscURBQUE7QUFvQlI7O0FBZEU7RUFDRSxhQUFBO0FBaUJKO0FBZkU7RUFDRSxhQUFBO0FBaUJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRib3JkZXItY29sb3I6ICMwZTQ1NGVlODtcXG4kYmFja2dyb3VuZC1jb2xvcjogIzYwNTBkNTtcXG4kdGV4dC1jb2xvcjogI2JkYjZiNjtcXG4kc2hpcC1jb2xvcjogI2M0OTgwYjdkO1xcbiRtaXNzZWQtY29sb3I6ICNhOTNmM2Y7XFxuJGhpdC1jb2xvcjogIzI5ODUzODtcXG4kYnRuLXNlYy1jb2xvcjogIzQxMmZjMztcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcbn1cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweCAwO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDYwcHg7XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuaDQge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5oNSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMjVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYm9hcmRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvYXJkLFxcbi5ib2FyZC0xLFxcbi5ib2FyZC0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkYm9yZGVyLWNvbG9yO1xcbn1cXG4uYm9hcmQtMiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib2FyZC0xLmRpc2FibGVkLFxcbi5ib2FyZC0yLmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZ3JpZCB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICRib3JkZXItY29sb3I7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgJjpudGgtY2hpbGQoMTBuKSB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRib3JkZXItY29sb3I7XFxuICB9XFxufVxcbi5ncmlkLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzaGlwLWNvbG9yO1xcbn1cXG4uZ3JpZC5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1pc3NlZC1jb2xvcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICY6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcInhcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogJG1pc3NlZC1jb2xvciwgJGFtb3VudDogMTApO1xcbiAgfVxcbn1cXG4uZ3JpZC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhpdC1jb2xvcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICY6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAkaGl0LWNvbG9yLCAkYW1vdW50OiAxMCk7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB9XFxufVxcbi53aW5uZXItbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4udHVybi1pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJ0biB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnRuLW1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XFxuICBjb2xvcjogd2hpdGU7XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogJGJhY2tncm91bmQtY29sb3IsICRhbW91bnQ6IDEwKTtcXG4gIH1cXG59XFxuLmJ0bi1zZWNvbmRhcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1zZWMtY29sb3I7XFxuICBjb2xvcjogd2hpdGU7XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogJGJ0bi1zZWMtY29sb3IsICRhbW91bnQ6IDEwKTtcXG4gIH1cXG59XFxuXFxuLmluaXRpYWwtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG4gIGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG4gIC5nYW1lLWluc3RydWN0aW9ucyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogOTV2aDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogJGJhY2tncm91bmQtY29sb3IsICRhbW91bnQ6IDEwKTtcXG4gICAgdG9wOiAtMTUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG4gICAgaDQge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuY2xvc2UtaWNvbiB7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC50ZXh0LWNvbnRhaW5lciB7XFxuICAgICAgcCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgfVxcbiAgLmJvYXJkLFxcbiAgLnNoaXAtY29udGFpbmVyIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICB9XFxuICAuYm9hcmQge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgICBvcmRlcjogMjtcXG4gICAgfVxcbiAgfVxcbn1cXG4uaW5pdGlhbC1tZXNzYWdlLnNob3ctaW5zdHJ1Y3Rpb25zIHtcXG4gIC5vdmVybGF5IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIC5nYW1lLWluc3RydWN0aW9ucyB7XFxuICAgIHRvcDogNTAlO1xcbiAgfVxcbn1cXG4uc2hpcC1jb250YWluZXIge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbiAgLnRleHQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgfVxcbiAgLnNoaXBzIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIC5zaGlwIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGRpdiB7XFxuICAgICAgICB3aWR0aDogMzVweDtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICRib3JkZXItY29sb3I7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQ5ODBiN2Q7XFxuICAgICAgfVxcbiAgICAgIGRpdiArIGRpdiB7XFxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLnNoaXAudmVydGljYWwge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZmxleC1iYXNpczogNDglO1xcbiAgICAgIGRpdiArIGRpdiB7XFxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkYm9yZGVyLWNvbG9yO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5ib2R5LnBsYWNlLXNoaXAge1xcbiAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuaW5pdGlhbC1tZXNzYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUJvYXJkRmFjdG9yeSgpIHtcbiAgLy8gY3JlYXRlIGdhbWVCb2FyZCBBcnJheVxuICBjb25zdCBnYW1lQm9hcmQgPSBbXTtcbiAgY29uc3Qgc2hpcExpc3QgPSBbXTtcbiAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGdhbWVCb2FyZC5wdXNoKFwiXCIpO1xuICB9XG4gIGNvbnN0IHNldFNoaXBEaXJlY3Rpb24gPSAoc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIChzaGlwLnNoaXBEaXJlY3Rpb24gPSBkaXJlY3Rpb24pO1xuICB9O1xuICBjb25zdCBnZXRTaGlwUG9zaXRpb24gPSAoc2hpcElkKSA9PiB7XG4gICAgY29uc3Qgc2hpcFBvc2l0aW9uID0gW107XG4gICAgZ2FtZUJvYXJkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbSA9PT0gc2hpcElkKSB7XG4gICAgICAgIHNoaXBQb3NpdGlvbi5wdXNoKGluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2hpcFBvc2l0aW9uO1xuICB9O1xuICBmdW5jdGlvbiBpc1NoaXBPdXRPZkJvdW5kKHNoaXBEaXJlY3Rpb24sIGluaXRpYWxQb3NpdGlvbiwgc2hpcExlbmd0aCkge1xuICAgIGlmIChzaGlwRGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgLy8gQWxsIHRoZSByb3dzIGhhdmUgc2FtZSB0ZW5zIHZhbHVlcyBlLmcgZmlyc3Qgcm93OiAwIHRvIDksIHNlY29uZCByb3c6IDEwIHRvIDE5LlxuICAgICAgLy8gSGF2aW5nIGRpZmZlcmVudCB0ZW5zIHZhbHVlcyBtZWFucyB0aGUgc2hpcCBpcyBvdXQgb2YgYm91bmRcbiAgICAgIGNvbnN0IGxhc3RTaGlwQ29vcmRpbmF0ZSA9IGluaXRpYWxQb3NpdGlvbiArIHNoaXBMZW5ndGg7XG4gICAgICBjb25zdCBpbml0aWFsVGVuc1ZhbHVlID0gTWF0aC5mbG9vcihpbml0aWFsUG9zaXRpb24gLyAxMCk7XG4gICAgICBjb25zdCBsYXN0VGVuc1ZhbHVlID0gTWF0aC5mbG9vcihsYXN0U2hpcENvb3JkaW5hdGUgLyAxMCk7XG4gICAgICBpZiAoaW5pdGlhbFRlbnNWYWx1ZSAhPT0gbGFzdFRlbnNWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIC8vIFRoZSBjb29yZGlhbnRlcyBpbiBnYW1lYm9hcmQgcmFuZ2VzIGZyb20gMCB0byA5OS5cbiAgICAgIC8vIFNvIHRoZSBzaGlwJ3MgY29vcmRpbmF0ZSBzaG91bGQgbm90IGJlIGdyZWF0ZXIgdGhhbiA5OVxuICAgICAgY29uc3QgbGFzdFNoaXBDb29yZGluYXRlID0gaW5pdGlhbFBvc2l0aW9uICsgKHNoaXBMZW5ndGggLSAxKSAqIDEwO1xuICAgICAgaWYgKGxhc3RTaGlwQ29vcmRpbmF0ZSA+IDk5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNDZWxsT2NjdXBpZWQoc2hpcERpcmVjdGlvbiwgaW5pdGlhbFBvc2l0aW9uLCBzaGlwTGVuZ3RoKSB7XG4gICAgaWYgKHNoaXBEaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBsZXQgb2NjdXBpZWRDZWxsID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChnYW1lQm9hcmRbaW5pdGlhbFBvc2l0aW9uICsgaV0gIT09IFwiXCIpIHtcbiAgICAgICAgICBvY2N1cGllZENlbGwrKztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9jY3VwaWVkQ2VsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCBvY2N1cGllZENlbGwgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGdhbWVCb2FyZFtpbml0aWFsUG9zaXRpb24gKyAxMCAqIGldICE9PSBcIlwiKSB7XG4gICAgICAgICAgb2NjdXBpZWRDZWxsKys7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvY2N1cGllZENlbGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc01vdmVWYWxpZChzaGlwRGlyZWN0aW9uLCBpbml0aWFsUG9zaXRpb24sIHNoaXBMZW5ndGgpIHtcbiAgICBpZiAoaXNTaGlwT3V0T2ZCb3VuZChzaGlwRGlyZWN0aW9uLCBpbml0aWFsUG9zaXRpb24sIHNoaXBMZW5ndGgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0NlbGxPY2N1cGllZChzaGlwRGlyZWN0aW9uLCBpbml0aWFsUG9zaXRpb24sIHNoaXBMZW5ndGgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgY29uc3QgaXNWYWxpZFBvc2l0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgaW5pdGlhbFBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKCFzaGlwLnNoaXBEaXJlY3Rpb24pIHtcbiAgICAgIHNldFNoaXBEaXJlY3Rpb24oc2hpcCwgXCJob3Jpem9udGFsXCIpO1xuICAgIH1cbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgbGV0IHsgc2hpcERpcmVjdGlvbiB9ID0gc2hpcDtcbiAgICBpZiAoc2hpcERpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChpc01vdmVWYWxpZChzaGlwRGlyZWN0aW9uLCBpbml0aWFsUG9zaXRpb24sIHNoaXBMZW5ndGgpKSB7XG4gICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgc2hpcExlbmd0aCkge1xuICAgICAgICAgIGdhbWVCb2FyZFtpbml0aWFsUG9zaXRpb24gKyBpXSA9IHNoaXAuaWQ7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBcIk5vdCBWYWxpZFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoaXNNb3ZlVmFsaWQoc2hpcERpcmVjdGlvbiwgaW5pdGlhbFBvc2l0aW9uLCBzaGlwTGVuZ3RoKSkge1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgICBnYW1lQm9hcmRbaW5pdGlhbFBvc2l0aW9uICsgMTAgKiBpXSA9IHNoaXAuaWQ7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBcIk5vdCBWYWxpZFwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICB9O1xuICBsZXQgc2hpcElzSGl0ID0gZmFsc2U7XG4gIGNvbnN0IGlzU2hpcEhpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcElzSGl0O1xuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGF0dGFja0Nvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAoZ2FtZUJvYXJkW2F0dGFja0Nvb3JkaW5hdGVdID09PSBcIlwiKSB7XG4gICAgICBnYW1lQm9hcmRbYXR0YWNrQ29vcmRpbmF0ZV0gPSBcIk1pc3NlZFwiO1xuICAgICAgc2hpcElzSGl0ID0gZmFsc2U7XG4gICAgICByZXR1cm4gXCJNaXNzZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBMaXN0LmZpbmQoXG4gICAgICAgIChzaGlwKSA9PiBzaGlwLmlkID09PSBnYW1lQm9hcmRbYXR0YWNrQ29vcmRpbmF0ZV1cbiAgICAgICk7XG4gICAgICBnYW1lQm9hcmRbYXR0YWNrQ29vcmRpbmF0ZV0gPSBcIkhpdFwiO1xuICAgICAgc2hpcElzSGl0ID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzaGlwLmhpdChhdHRhY2tDb29yZGluYXRlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhc0V2ZXJ5U2hpcFN1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBMaXN0LmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnYW1lQm9hcmQsXG4gICAgc2hpcExpc3QsXG4gICAgaGl0Q29vcmRpbmF0ZXMsXG4gICAgc2V0U2hpcERpcmVjdGlvbixcbiAgICBwbGFjZVNoaXAsXG4gICAgZ2V0U2hpcFBvc2l0aW9uLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaGFzRXZlcnlTaGlwU3VuayxcbiAgICBpc1NoaXBIaXQsXG4gICAgaXNWYWxpZFBvc2l0aW9uLFxuICB9O1xufVxuIiwiaW1wb3J0IGdhbWVCb2FyZEZhY3RvcnkgZnJvbSBcIi4vZ2FtZUJvYXJkRmFjdG9yeVwiO1xuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXllckZhY3RvcnkobmFtZSkge1xuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gIGNvbnN0IGlzQWxyZWFkeVNob3QgPSAocG9zaXRpb24sIG9wcG9zaXRpb25HYW1lQm9hcmQpID0+IHtcbiAgICBpZiAob3Bwb3NpdGlvbkdhbWVCb2FyZC5oaXRDb29yZGluYXRlcy5pbmNsdWRlcyhwb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGxldCBpc0F0dGFja1ZhbGlkID0gdHJ1ZTtcbiAgY29uc3QgaXNUdXJuT3ZlciA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNBdHRhY2tWYWxpZDtcbiAgfTtcbiAgY29uc3QgYXR0YWNrID0gKHBvc2l0aW9uLCBvcHBvc2l0aW9uR2FtZUJvYXJkKSA9PiB7XG4gICAgaWYgKGlzQWxyZWFkeVNob3QocG9zaXRpb24sIG9wcG9zaXRpb25HYW1lQm9hcmQpKSB7XG4gICAgICBpc0F0dGFja1ZhbGlkID0gZmFsc2U7XG4gICAgICByZXR1cm4gXCJOb3QgdmFsaWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNBdHRhY2tWYWxpZCA9IHRydWU7XG4gICAgICBvcHBvc2l0aW9uR2FtZUJvYXJkLmhpdENvb3JkaW5hdGVzLnB1c2gocG9zaXRpb24pO1xuICAgICAgcmV0dXJuIG9wcG9zaXRpb25HYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gICAgfVxuICB9O1xuICBjb25zdCByYW5kb21BdHRhY2sgPSAob3Bwb3NpdGlvbkdhbWVCb2FyZCkgPT4ge1xuICAgIGxldCByYW5kb21Qb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgd2hpbGUgKGlzQWxyZWFkeVNob3QocmFuZG9tUG9zaXRpb24sIG9wcG9zaXRpb25HYW1lQm9hcmQpKSB7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgfVxuICAgIG9wcG9zaXRpb25HYW1lQm9hcmQuaGl0Q29vcmRpbmF0ZXMucHVzaChyYW5kb21Qb3NpdGlvbik7XG4gICAgcmV0dXJuIG9wcG9zaXRpb25HYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG4gIH07XG4gIGNvbnN0IHJhbmRvbWx5UGxhY2VTaGlwID0gKCkgPT4ge1xuICAgIC8vIGluc3RhbnRpYXRlIHNoaXBzXG4gICAgY29uc3Qgc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoXCJzdWJtYXJpbmVcIik7XG4gICAgY29uc3QgY2FycmllciA9IHNoaXBGYWN0b3J5KFwiY2FycmllclwiKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoXCJiYXR0bGVzaGlwXCIpO1xuICAgIGNvbnN0IGNydWlzZXIgPSBzaGlwRmFjdG9yeShcImNydWlzZXJcIik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoXCJkZXN0cm95ZXJcIik7XG5cbiAgICBwbGF5ZXJHYW1lQm9hcmQuc2hpcExpc3QucHVzaChcbiAgICAgIHN1Ym1hcmluZSxcbiAgICAgIGNhcnJpZXIsXG4gICAgICBiYXR0bGVzaGlwLFxuICAgICAgY3J1aXNlcixcbiAgICAgIGRlc3Ryb3llclxuICAgICk7XG5cbiAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBzaGlwIGFuZCBwbGFjZSB0aGVtIGluIHRoZSBib2FyZFxuICAgIHBsYXllckdhbWVCb2FyZC5zaGlwTGlzdC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBsZXQgc2hpcEluaXRpYWxQb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGNvbnN0IHNoaXBEaXJlY3Rpb24gPSByYW5kb21OdW1iZXIgPT09IDAgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcbiAgICAgIHBsYXllckdhbWVCb2FyZC5zZXRTaGlwRGlyZWN0aW9uKHNoaXAsIHNoaXBEaXJlY3Rpb24pO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCAxKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAsIHNoaXBJbml0aWFsUG9zaXRpb24pID09PSBcIk5vdCBWYWxpZFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXBJbml0aWFsUG9zaXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwLCBzaGlwSW5pdGlhbFBvc2l0aW9uKSAhPT0gXCJOb3QgVmFsaWRcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgcGxheWVyR2FtZUJvYXJkLFxuICAgIGF0dGFjayxcbiAgICByYW5kb21BdHRhY2ssXG4gICAgcmFuZG9tbHlQbGFjZVNoaXAsXG4gICAgaXNUdXJuT3ZlcixcbiAgfTtcbn1cbiIsImNvbnN0IHJlbmRlckdhbWVCb2FyZCA9IChwYXJlbnRFbGVtZW50LCBnYW1lQm9hcmQsIGhpZGVHcmlkKSA9PiB7XG4gIC8vcmVtb3ZlIGFscmVhZHkgcmVuZGVyZWQgZWxlbWVudHNcbiAgd2hpbGUgKHBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBwYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIGdhbWVCb2FyZC5mb3JFYWNoKChncmlkLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmIChncmlkID09PSBcIk1pc3NlZFwiKSB7XG4gICAgICBncmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgfSBlbHNlIGlmIChncmlkID09PSBcIkhpdFwiKSB7XG4gICAgICBncmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgfSBlbHNlIGlmIChncmlkICE9PSBcIlwiICYmIGhpZGVHcmlkICE9PSB0cnVlKSB7XG4gICAgICBncmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZFwiKTtcbiAgICB9XG4gICAgZ3JpZERpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICBncmlkRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGluZGV4KTtcblxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ3JpZERpdik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2FtZUJvYXJkO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcEZhY3RvcnkobmFtZSkge1xuICBsZXQgbGVuZ3RoO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlIFwiY2FycmllclwiOlxuICAgICAgbGVuZ3RoID0gNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJiYXR0bGVzaGlwXCI6XG4gICAgICBsZW5ndGggPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNydWlzZXJcIjpcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3VibWFyaW5lXCI6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRlc3Ryb3llclwiOlxuICAgICAgbGVuZ3RoID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaWQgPSBuYW1lO1xuICBjb25zdCBoaXRQb3NpdGlvbnMgPSBbXTtcbiAgbGV0IHNoaXBEaXJlY3Rpb24gPSBcIlwiO1xuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICBoaXRQb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgcmV0dXJuIGhpdFBvc2l0aW9uc1toaXRQb3NpdGlvbnMubGVuZ3RoIC0gMV07XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRQb3NpdGlvbnMubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGxlbmd0aCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIHNoaXBEaXJlY3Rpb24sXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGxheWVyRmFjdG9yeSBmcm9tIFwiLi9wbGF5ZXJGYWN0b3J5XCI7XG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcbmltcG9ydCByZW5kZXJHYW1lQm9hcmQgZnJvbSBcIi4vcmVuZGVyR2FtZUJvYXJkXCI7XG5pbXBvcnQgXCIuLi9zcmMvc3R5bGUuc2Nzc1wiO1xuXG5sZXQgaGFzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuY29uc3QgcGxheWVyQSA9IHBsYXllckZhY3RvcnkoXCJwbGF5ZXIgQVwiKTtcbmNvbnN0IHN1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KFwic3VibWFyaW5lXCIpO1xuY29uc3QgY2FycmllciA9IHNoaXBGYWN0b3J5KFwiY2FycmllclwiKTtcbmNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeShcImJhdHRsZXNoaXBcIik7XG5jb25zdCBjcnVpc2VyID0gc2hpcEZhY3RvcnkoXCJjcnVpc2VyXCIpO1xuY29uc3QgZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoXCJkZXN0cm95ZXJcIik7XG5jb25zdCBib2FyZE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtMVwiKTtcbmNvbnN0IHsgcGxheWVyR2FtZUJvYXJkIH0gPSBwbGF5ZXJBO1xuY29uc3QgeyBnYW1lQm9hcmQgfSA9IHBsYXllckdhbWVCb2FyZDtcblxuY29uc3QgcGNQbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KFwiUEMgUGxheWVyXCIpO1xuY29uc3QgYm9hcmRUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTJcIik7XG5jb25zdCBwY1BsYXllckdhbWVCb2FyZCA9IHBjUGxheWVyLnBsYXllckdhbWVCb2FyZDtcbmNvbnN0IHBjR2FtZUJvYXJkID0gcGNQbGF5ZXJHYW1lQm9hcmQuZ2FtZUJvYXJkO1xuXG5jb25zdCB3aW5uZXJNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXItbWVzc2FnZVwiKTtcbmNvbnN0IHdpbm5lck1lc3NhZ2VUZXh0ID0gd2lubmVyTWVzc2FnZS5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1tZXNzYWdlLXRleHRcIik7XG5jb25zdCBwbGF5QWdhaW5CdG4gPSB3aW5uZXJNZXNzYWdlLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW1haW5cIik7XG5jb25zdCB0dXJuSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVybi1pbmZvXCIpO1xubGV0IGRyYWdDb3VudCA9IDA7XG5sZXQgZHJhZ2dlZFNoaXAgPSBudWxsO1xuXG5wbGF5ZXJHYW1lQm9hcmQuc2hpcExpc3QucHVzaChcbiAgc3VibWFyaW5lLFxuICBjYXJyaWVyLFxuICBiYXR0bGVzaGlwLFxuICBjcnVpc2VyLFxuICBkZXN0cm95ZXJcbik7XG5mdW5jdGlvbiBpc0dhbWVPdmVyKG9wcG9zaXRpb25HYW1lQm9hcmQsIHBsYXllcikge1xuICBpZiAob3Bwb3NpdGlvbkdhbWVCb2FyZC5oYXNFdmVyeVNoaXBTdW5rKCkpIHtcbiAgICB3aW5uZXJNZXNzYWdlLnN0eWxlLmNzc1RleHQgPSBcIm9wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGVcIjtcbiAgICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgaWYgKHBsYXllci5uYW1lID09PSBcInBsYXllciBBXCIpXG4gICAgICB3aW5uZXJNZXNzYWdlVGV4dC50ZXh0Q29udGVudCA9IGBZb3UgV29uIFRoZSBHYW1lLmA7XG4gIH0gZWxzZSBpZiAocGxheWVyLm5hbWUgPT09IFwiUEMgUGxheWVyXCIpIHtcbiAgICB3aW5uZXJNZXNzYWdlVGV4dC50ZXh0Q29udGVudCA9IGBUaGUgQ29tcHV0ZSBXb24gVGhlIEdhbWUuYDtcbiAgfVxufVxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICByZW5kZXJHYW1lQm9hcmQoYm9hcmRPbmUsIGdhbWVCb2FyZCk7XG4gIHR1cm5JbmZvLnRleHRDb250ZW50ID0gXCJZb3VyIFR1cm5cIjtcblxuICAvLyBwbGF5ZXIgdHVybiBjb250cm9sbGVyXG4gIGxldCB0dXJuQ291bnQgPSAwO1xuXG4gIC8vIGRlbGF5IHJlbmRlcmluZyBvZiBib2FyZCBpZiBwYyBzdWNjZXNzZnVsbHkgYXR0YWNrcyBhIHNoaXBcbiAgZnVuY3Rpb24gbG9vcFJhbmRvbUF0dGFjaygpIHtcbiAgICBib2FyZE9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgYm9hcmRUd28uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIHR1cm5JbmZvLnRleHRDb250ZW50ID0gXCJDb21wdXRlcidzIFR1cm5cIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBjUGxheWVyLnJhbmRvbUF0dGFjayhwbGF5ZXJHYW1lQm9hcmQpO1xuICAgICAgcmVuZGVyR2FtZUJvYXJkKGJvYXJkT25lLCBnYW1lQm9hcmQpO1xuICAgICAgaXNHYW1lT3ZlcihwbGF5ZXJHYW1lQm9hcmQsIHBjUGxheWVyKTtcbiAgICAgIGlmICghcGxheWVyR2FtZUJvYXJkLmlzU2hpcEhpdCgpKSB7XG4gICAgICAgIHR1cm5Db3VudCA9IDA7XG4gICAgICAgIHR1cm5JbmZvLnRleHRDb250ZW50ID0gXCJZb3VyIFR1cm5cIjtcbiAgICAgICAgYm9hcmRUd28uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgICBib2FyZE9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb29wUmFuZG9tQXR0YWNrKCk7XG4gICAgICB9XG4gICAgfSwgODAwKTtcbiAgfVxuXG4gIGlmICh0dXJuQ291bnQgPT09IDApIHtcbiAgICBib2FyZFR3by5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGxldCB7IGlzVHVybk92ZXIgfSA9IHBsYXllckE7XG4gICAgICBwbGF5ZXJBLmF0dGFjayhlLnRhcmdldC5pZCwgcGNQbGF5ZXJHYW1lQm9hcmQpO1xuICAgICAgcmVuZGVyR2FtZUJvYXJkKGJvYXJkVHdvLCBwY0dhbWVCb2FyZCwgdHJ1ZSk7XG4gICAgICBpc0dhbWVPdmVyKHBjUGxheWVyR2FtZUJvYXJkLCBwbGF5ZXJBKTtcbiAgICAgIGJvYXJkT25lLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcblxuICAgICAgLy9pZiBwbGF5ZXIgbWlzc2VzLCBpdCdzIHRoZSBvdGhlciBwbGF5ZXIncyB0dXJuXG4gICAgICBpZiAoaXNUdXJuT3ZlcigpICYmICFwY1BsYXllckdhbWVCb2FyZC5pc1NoaXBIaXQoKSkge1xuICAgICAgICB0dXJuQ291bnQgPSAxO1xuICAgICAgICBib2FyZE9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG5cbiAgICAgICAgbG9vcFJhbmRvbUF0dGFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbnJlbmRlckdhbWVCb2FyZChib2FyZE9uZSwgZ2FtZUJvYXJkKTtcbnBjUGxheWVyLnJhbmRvbWx5UGxhY2VTaGlwKCk7XG5yZW5kZXJHYW1lQm9hcmQoYm9hcmRUd28sIHBjR2FtZUJvYXJkLCB0cnVlKTtcblxuaWYgKCFoYXNHYW1lU3RhcnRlZCkge1xuICBjb25zdCBpbml0aWFsTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5pdGlhbC1tZXNzYWdlXCIpO1xuICBjb25zdCBib2FyZCA9IGluaXRpYWxNZXNzYWdlLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIik7XG4gIGNvbnN0IHNoaXBzID0gaW5pdGlhbE1lc3NhZ2UucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICBjb25zdCByYW5kb21CdXR0b24gPSBpbml0aWFsTWVzc2FnZS5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zZWNvbmRhcnlcIik7XG4gIGNvbnN0IGluc3RydWN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbi1idXR0b25cIik7XG4gIGNvbnN0IG92ZXJsYXkgPSBpbml0aWFsTWVzc2FnZS5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gIGNvbnN0IGNsb3NlSWNvbiA9IGluaXRpYWxNZXNzYWdlLnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtaWNvblwiKTtcbiAgY29uc3QgZHJhZ2dhYmxlU2hpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gIGxldCBkcmFnZ2VkU2hpcCA9IG51bGw7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZChcInBsYWNlLXNoaXBcIik7XG5cbiAgcmVuZGVyR2FtZUJvYXJkKGJvYXJkLCBnYW1lQm9hcmQpO1xuXG4gIHJhbmRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYXllckdhbWVCb2FyZC5zaGlwTGlzdCA9IFtdO1xuICAgIHBsYXllckEucmFuZG9tbHlQbGFjZVNoaXAoKTtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJwbGFjZS1zaGlwXCIpO1xuICAgIGhhc0dhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICBzdGFydEdhbWUoKTtcbiAgfSk7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIpO1xuICAgICAgbGV0IHJvdGF0ZWRTaGlwID0gcGxheWVyR2FtZUJvYXJkLnNoaXBMaXN0LmZpbHRlcihcbiAgICAgICAgKHNoaXApID0+IHNoaXAuaWQgPT0gZS50YXJnZXQuY2xhc3NOYW1lXG4gICAgICApO1xuICAgICAgaWYgKHNoaXAuY2xhc3NOYW1lID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgcGxheWVyR2FtZUJvYXJkLnNldFNoaXBEaXJlY3Rpb24ocm90YXRlZFNoaXBbMF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllckdhbWVCb2FyZC5zZXRTaGlwRGlyZWN0aW9uKHJvdGF0ZWRTaGlwWzBdLCBcInZlcnRpY2FsXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBkcmFnZ2FibGVTaGlwTGlzdC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG4gICAgICBkcmFnZ2VkU2hpcCA9IHBsYXllckdhbWVCb2FyZC5zaGlwTGlzdC5maWx0ZXIoXG4gICAgICAgIChzaGlwKSA9PiBzaGlwLmlkID09PSBlLnRhcmdldC5jbGFzc05hbWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkcmFnQ291bnQgPSAwO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoXCJncmlkXCIpKSB7XG4gICAgICBsZXQgc2hpcHMgPSBpbml0aWFsTWVzc2FnZS5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzXCIpO1xuICAgICAgbGV0IHNoaXBUb0JlUmVtb3ZlZCA9IGluaXRpYWxNZXNzYWdlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuJHtkcmFnZ2VkU2hpcFswXS5pZH1gXG4gICAgICApO1xuICAgICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChkcmFnZ2VkU2hpcFswXSwgTnVtYmVyKGUudGFyZ2V0LmlkKSk7XG4gICAgICBpZiAocGxheWVyR2FtZUJvYXJkLmlzVmFsaWRQb3NpdGlvbigpKSB7XG4gICAgICAgIHNoaXBUb0JlUmVtb3ZlZC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgZHJhZ2dlZFNoaXAgPSBudWxsO1xuICAgICAgcmVuZGVyR2FtZUJvYXJkKGJvYXJkLCBnYW1lQm9hcmQpO1xuICAgICAgaWYgKCFzaGlwcy5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJwbGFjZS1zaGlwXCIpO1xuICAgICAgICBoYXNHYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGluc3RydWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIGluaXRpYWxNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJzaG93LWluc3RydWN0aW9uc1wiKVxuICApO1xuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIGluaXRpYWxNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWluc3RydWN0aW9uc1wiKVxuICApO1xuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpbml0aWFsTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1pbnN0cnVjdGlvbnNcIik7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9