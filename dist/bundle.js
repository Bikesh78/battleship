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

/***/ "./src/gameBoardFactory.ts":
/*!*********************************!*\
  !*** ./src/gameBoardFactory.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
            }
            else
                return false;
        }
        else if (shipDirection === "vertical") {
            // The coordiantes in gameboard ranges from 0 to 99.
            // So the ship's coordinate should not be greater than 99
            const lastShipCoordinate = initialPosition + (shipLength - 1) * 10;
            if (lastShipCoordinate > 99) {
                return true;
            }
            else
                return false;
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
            }
            else
                return false;
        }
        else if (shipDirection === "vertical") {
            let occupiedCell = 0;
            for (let i = 0; i < shipLength; i++) {
                if (gameBoard[initialPosition + 10 * i] !== "") {
                    occupiedCell++;
                    break;
                }
            }
            if (occupiedCell) {
                return true;
            }
            else
                return false;
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
            }
            else {
                isValid = false;
                return "Not Valid";
            }
        }
        else if (shipDirection === "vertical") {
            if (isMoveValid(shipDirection, initialPosition, shipLength)) {
                isValid = true;
                let i = 0;
                while (i < shipLength) {
                    gameBoard[initialPosition + 10 * i] = ship.id;
                    i++;
                }
            }
            else {
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
        }
        else {
            const ship = shipList.find((ship) => ship.id === gameBoard[attackCoordinate]);
            gameBoard[attackCoordinate] = "Hit";
            shipIsHit = true;
            if (ship) {
                return ship.hit(attackCoordinate);
            }
        }
        return "Missed";
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
exports["default"] = gameBoardFactory;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const playerFactory_1 = __importDefault(__webpack_require__(/*! ./playerFactory */ "./src/playerFactory.ts"));
const shipFactory_1 = __importDefault(__webpack_require__(/*! ./shipFactory */ "./src/shipFactory.ts"));
const renderGameBoard_1 = __importDefault(__webpack_require__(/*! ./renderGameBoard */ "./src/renderGameBoard.ts"));
__webpack_require__(/*! ../src/style.scss */ "./src/style.scss");
let hasGameStarted = false;
const body = document.querySelector("body");
const playerA = (0, playerFactory_1.default)("player A");
const submarine = (0, shipFactory_1.default)("submarine");
const carrier = (0, shipFactory_1.default)("carrier");
const battleship = (0, shipFactory_1.default)("battleship");
const cruiser = (0, shipFactory_1.default)("cruiser");
const destroyer = (0, shipFactory_1.default)("destroyer");
const boardOne = document.querySelector(".board-1");
const { playerGameBoard } = playerA;
const { gameBoard } = playerGameBoard;
const pcPlayer = (0, playerFactory_1.default)("PC Player");
const boardTwo = document.querySelector(".board-2");
const pcPlayerGameBoard = pcPlayer.playerGameBoard;
const pcGameBoard = pcPlayerGameBoard.gameBoard;
const winnerMessage = document.querySelector(".winner-message");
const winnerMessageText = winnerMessage === null || winnerMessage === void 0 ? void 0 : winnerMessage.querySelector(".winner-message-text");
const playAgainBtn = winnerMessage.querySelector(".btn-main");
const turnInfo = document.querySelector(".turn-info");
playerGameBoard.shipList.push(submarine, carrier, battleship, cruiser, destroyer);
function isGameOver(oppositionGameBoard, player) {
    if (oppositionGameBoard.hasEveryShipSunk()) {
        winnerMessage.style.cssText = "opacity:1;visibility:visible";
        playAgainBtn === null || playAgainBtn === void 0 ? void 0 : playAgainBtn.addEventListener("click", () => window.location.reload());
        if (player.name === "player A")
            winnerMessageText.textContent = `You Won The Game.`;
    }
    else if (player.name === "PC Player") {
        winnerMessageText.textContent = `The Compute Won The Game.`;
    }
}
function startGame() {
    (0, renderGameBoard_1.default)(boardOne, gameBoard);
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
            (0, renderGameBoard_1.default)(boardOne, gameBoard);
            isGameOver(playerGameBoard, pcPlayer);
            if (!playerGameBoard.isShipHit()) {
                turnCount = 0;
                turnInfo.textContent = "Your Turn";
                boardTwo.classList.remove("disabled");
                boardOne.classList.add("disabled");
            }
            else {
                loopRandomAttack();
            }
        }, 800);
    }
    if (turnCount === 0) {
        boardTwo.addEventListener("click", (e) => {
            let { isTurnOver } = playerA;
            playerA.attack(Number(e.target.id), pcPlayerGameBoard);
            (0, renderGameBoard_1.default)(boardTwo, pcGameBoard, true);
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
(0, renderGameBoard_1.default)(boardOne, gameBoard);
pcPlayer.randomlyPlaceShip();
(0, renderGameBoard_1.default)(boardTwo, pcGameBoard, true);
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
    (0, renderGameBoard_1.default)(board, gameBoard);
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
            let rotatedShip = playerGameBoard.shipList.filter((ship) => ship.id == e.target.className);
            if (ship.className === "vertical") {
                playerGameBoard.setShipDirection(rotatedShip[0], "horizontal");
            }
            else {
                playerGameBoard.setShipDirection(rotatedShip[0], "vertical");
            }
        });
    });
    draggableShipList.forEach((ship) => {
        ship.addEventListener("mousedown", (e) => {
            draggedShip = playerGameBoard.shipList.filter((ship) => ship.id === e.target.className);
        });
    });
    document.addEventListener("dragenter", (e) => {
        e.preventDefault();
    });
    document.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    document.addEventListener("drop", (e) => {
        var _a;
        e.preventDefault();
        dragCount = 0;
        if (e.target.className.includes("grid")) {
            let ships = initialMessage.querySelector(".ships");
            let shipToBeRemoved = initialMessage.querySelector(`.${draggedShip && draggedShip[0].id}`);
            if (draggedShip) {
                playerGameBoard.placeShip(draggedShip[0], Number(e.target.id));
            }
            if (playerGameBoard.isValidPosition()) {
                (_a = shipToBeRemoved === null || shipToBeRemoved === void 0 ? void 0 : shipToBeRemoved.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            }
            draggedShip = null;
            (0, renderGameBoard_1.default)(board, gameBoard);
            if (!(ships === null || ships === void 0 ? void 0 : ships.firstElementChild)) {
                body.classList.remove("place-ship");
                hasGameStarted = true;
                startGame();
            }
        }
    });
    instructionBtn.addEventListener("click", () => initialMessage.classList.add("show-instructions"));
    overlay.addEventListener("click", () => initialMessage.classList.remove("show-instructions"));
    closeIcon.addEventListener("click", () => {
        initialMessage.classList.remove("show-instructions");
    });
}


/***/ }),

/***/ "./src/playerFactory.ts":
/*!******************************!*\
  !*** ./src/playerFactory.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const gameBoardFactory_1 = __importDefault(__webpack_require__(/*! ./gameBoardFactory */ "./src/gameBoardFactory.ts"));
const shipFactory_1 = __importDefault(__webpack_require__(/*! ./shipFactory */ "./src/shipFactory.ts"));
function playerFactory(name) {
    const playerGameBoard = (0, gameBoardFactory_1.default)();
    const isAlreadyShot = (position, oppositionGameBoard) => {
        if (oppositionGameBoard.hitCoordinates.includes(position)) {
            return true;
        }
        else
            return false;
    };
    let isAttackValid = true;
    const isTurnOver = () => {
        return isAttackValid;
    };
    const attack = (position, oppositionGameBoard) => {
        if (isAlreadyShot(position, oppositionGameBoard)) {
            isAttackValid = false;
            return "Not valid";
        }
        else {
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
        const submarine = (0, shipFactory_1.default)("submarine");
        const carrier = (0, shipFactory_1.default)("carrier");
        const battleship = (0, shipFactory_1.default)("battleship");
        const cruiser = (0, shipFactory_1.default)("cruiser");
        const destroyer = (0, shipFactory_1.default)("destroyer");
        playerGameBoard.shipList.push(submarine, carrier, battleship, cruiser, destroyer);
        // loop through each ship and place them in the board
        playerGameBoard.shipList.forEach((ship) => {
            let shipInitialPosition = Math.floor(Math.random() * 100);
            const randomNumber = Math.floor(Math.random() * 2);
            const shipDirection = randomNumber === 0 ? "horizontal" : "vertical";
            playerGameBoard.setShipDirection(ship, shipDirection);
            let i = 0;
            while (i < 1) {
                if (playerGameBoard.placeShip(ship, shipInitialPosition) === "Not Valid") {
                    shipInitialPosition = Math.floor(Math.random() * 99);
                    if (playerGameBoard.placeShip(ship, shipInitialPosition) !== "Not Valid") {
                        break;
                    }
                }
                else {
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
exports["default"] = playerFactory;


/***/ }),

/***/ "./src/renderGameBoard.ts":
/*!********************************!*\
  !*** ./src/renderGameBoard.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const renderGameBoard = (parentElement, gameBoard, hideGrid) => {
    //remove already rendered elements
    while (parentElement.firstElementChild) {
        parentElement.firstElementChild.remove();
    }
    gameBoard.forEach((grid, index) => {
        const gridDiv = document.createElement("div");
        if (grid === "Missed") {
            gridDiv.classList.add("missed");
        }
        else if (grid === "Hit") {
            gridDiv.classList.add("hit");
        }
        else if (grid !== "" && hideGrid !== true) {
            gridDiv.classList.add("occupied");
        }
        gridDiv.classList.add("grid");
        gridDiv.setAttribute("id", `${index}`);
        parentElement.appendChild(gridDiv);
    });
};
exports["default"] = renderGameBoard;


/***/ }),

/***/ "./src/shipFactory.ts":
/*!****************************!*\
  !*** ./src/shipFactory.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
            throw Error("Ship name is not defined");
    }
    const id = name;
    const hitPositions = [];
    let shipDirection = "horizontal";
    const hit = (position) => {
        hitPositions.push(position);
        return hitPositions[hitPositions.length - 1];
    };
    const isSunk = () => {
        if (hitPositions.length === length) {
            return true;
        }
        else {
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
exports["default"] = shipFactory;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map