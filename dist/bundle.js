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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  min-width: 100vh;\n  background-color: #6050d5;\n  color: #bdb6b6;\n}\n\nheader {\n  text-align: center;\n  padding: 25px 0;\n}\n\nh1 {\n  font-size: 60px;\n}\n\nh3 {\n  font-size: 50px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\n.board-container {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.boards {\n  text-align: center;\n}\n\n.board,\n.board-1,\n.board-2 {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 350px;\n  height: 350px;\n  border-bottom: solid 1px rgba(14, 69, 78, 0.9098039216);\n}\n\n.board-2 {\n  cursor: pointer;\n}\n\n.board-1.disabled,\n.board-2.disabled {\n  pointer-events: none;\n}\n\n.grid {\n  width: 35px;\n  height: 35px;\n  border: solid 1px rgba(14, 69, 78, 0.9098039216);\n  border-right: none;\n  border-bottom: none;\n}\n.grid:nth-child(10n) {\n  border-right: solid 1px rgba(14, 69, 78, 0.9098039216);\n}\n\n.grid.occupied {\n  background-color: rgba(196, 152, 11, 0.4901960784);\n}\n\n.grid.missed {\n  background-color: #a93f3f;\n  position: relative;\n}\n.grid.missed::after {\n  content: \"x\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n  font-weight: 700;\n  color: #843131;\n}\n\n.grid.hit {\n  background-color: #298538;\n  position: relative;\n}\n.grid.hit::after {\n  content: \"\";\n  display: block;\n  background-color: #1d5e28;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.winner-message {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  visibility: hidden;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  animation: pop-up 0.5s ease;\n}\n\n@keyframes pop-up {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  1% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.initial-message {\n  display: none;\n  justify-content: center;\n  gap: 25px;\n  padding: 25px;\n}\n@media (max-width: 767px) {\n  .initial-message {\n    flex-wrap: wrap;\n  }\n}\n.initial-message .board,\n.initial-message .ship-container {\n  flex-shrink: 0;\n}\n@media (max-width: 767px) {\n  .initial-message .board {\n    order: 2;\n  }\n}\n\n@media (max-width: 767px) {\n  .ship-container {\n    order: 1;\n  }\n}\n.ship-container .ships {\n  margin-top: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 160px;\n  row-gap: 10px;\n}\n.ship-container .ships .ship {\n  display: flex;\n}\n.ship-container .ships .ship div {\n  width: 35px;\n  height: 35px;\n  border: solid 1px rgba(14, 69, 78, 0.9098039216);\n  background-color: rgba(196, 152, 11, 0.4901960784);\n}\n.ship-container .ships .ship div + div {\n  border-left: none;\n}\n.ship-container .ships .ship.vertical {\n  flex-direction: column;\n  flex-basis: 48%;\n}\n.ship-container .ships .ship.vertical div + div {\n  border-top: none;\n  border-left: solid 1px rgba(14, 69, 78, 0.9098039216);\n}\n\nbody.place-ship .board-container {\n  display: none;\n}\nbody.place-ship .initial-message {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAOA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AANF;;AAQA;EACE,iCAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,yBAhBiB;EAiBjB,cAhBW;AAWb;;AAOA;EACE,kBAAA;EACA,eAAA;AAJF;;AAMA;EACE,eAAA;AAHF;;AAKA;EACE,eAAA;AAFF;;AAIA;EACE,eAAA;AADF;;AAGA;EACE,aAAA;EACA,SAAA;EACA,eAAA;EACA,uBAAA;AAAF;;AAEA;EACE,kBAAA;AACF;;AACA;;;EAGE,mBAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,uDAAA;AAEF;;AAAA;EACE,eAAA;AAGF;;AADA;;EAEE,oBAAA;AAIF;;AADA;EACE,WAAA;EACA,YAAA;EACA,gDAAA;EACA,kBAAA;EACA,mBAAA;AAIF;AAHE;EACE,sDAAA;AAKJ;;AAFA;EACE,kDApEW;AAyEb;;AAHA;EACE,yBAtEa;EAuEb,kBAAA;AAMF;AALE;EACE,YAAA;EACA,cAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AAOJ;;AAJA;EACE,yBApFU;EAqFV,kBAAA;AAOF;AANE;EACE,WAAA;EACA,cAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAQJ;;AALA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,oCAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gCAAA;EACA,2BAAA;AAQF;;AANA;EACE;IACE,mBAAA;IACA,UAAA;EASF;EAPA;IACE,mBAAA;IACA,UAAA;EASF;AACF;AAPA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,aAAA;AASF;AARE;EALF;IAMI,eAAA;EAWF;AACF;AAVE;;EAEE,cAAA;AAYJ;AATI;EADF;IAEI,QAAA;EAYJ;AACF;;AARE;EADF;IAEI,QAAA;EAYF;AACF;AAXE;EACE,gBAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;AAaJ;AAZI;EACE,aAAA;AAcN;AAbM;EACE,WAAA;EACA,YAAA;EACA,gDAAA;EACA,kDAAA;AAeR;AAbM;EACE,iBAAA;AAeR;AAZI;EACE,sBAAA;EACA,eAAA;AAcN;AAbM;EACE,gBAAA;EACA,qDAAA;AAeR;;AARE;EACE,aAAA;AAWJ;AATE;EACE,aAAA;AAWJ","sourcesContent":["$border-color: #0e454ee8;\n$background-color: #6050d5;\n$text-color: #bdb6b6;\n$ship-color: #c4980b7d;\n$missed-color: #a93f3f;\n$hit-color: #298538;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  min-width: 100vh;\n  background-color: $background-color;\n  color: $text-color;\n}\nheader {\n  text-align: center;\n  padding: 25px 0;\n}\nh1 {\n  font-size: 60px;\n}\nh3 {\n  font-size: 50px;\n}\nh4 {\n  font-size: 20px;\n}\n.board-container {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.boards {\n  text-align: center;\n}\n.board,\n.board-1,\n.board-2 {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 350px;\n  height: 350px;\n  border-bottom: solid 1px $border-color;\n}\n.board-2 {\n  cursor: pointer;\n}\n.board-1.disabled,\n.board-2.disabled {\n  pointer-events: none;\n  // filter: opacity(0.5);\n}\n.grid {\n  width: 35px;\n  height: 35px;\n  border: solid 1px $border-color;\n  border-right: none;\n  border-bottom: none;\n  &:nth-child(10n) {\n    border-right: solid 1px $border-color;\n  }\n}\n.grid.occupied {\n  background-color: $ship-color;\n}\n.grid.missed {\n  background-color: $missed-color;\n  position: relative;\n  &::after {\n    content: \"x\";\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 12px;\n    font-weight: 700;\n    color: darken($color: $missed-color, $amount: 10);\n  }\n}\n.grid.hit {\n  background-color: $hit-color;\n  position: relative;\n  &::after {\n    content: \"\";\n    display: block;\n    background-color: darken($color: $hit-color, $amount: 10);\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n.winner-message {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  visibility: hidden;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  animation: pop-up 0.5s ease;\n}\n@keyframes pop-up {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  1% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.initial-message {\n  display: none;\n  justify-content: center;\n  gap: 25px;\n  padding: 25px;\n  @media (max-width: 767px) {\n    flex-wrap: wrap;\n  }\n  .board,\n  .ship-container {\n    flex-shrink: 0;\n  }\n  .board {\n    @media (max-width: 767px) {\n      order: 2;\n    }\n  }\n}\n.ship-container {\n  @media (max-width: 767px) {\n    order: 1;\n  }\n  .ships {\n    margin-top: 15px;\n    display: flex;\n    flex-wrap: wrap;\n    width: 160px;\n    row-gap: 10px;\n    .ship {\n      display: flex;\n      div {\n        width: 35px;\n        height: 35px;\n        border: solid 1px $border-color;\n        background-color: #c4980b7d;\n      }\n      div + div {\n        border-left: none;\n      }\n    }\n    .ship.vertical {\n      flex-direction: column;\n      flex-basis: 48%;\n      div + div {\n        border-top: none;\n        border-left: solid 1px $border-color;\n      }\n    }\n  }\n}\nbody.place-ship {\n  // overflow: hidden;\n  .board-container {\n    display: none;\n  }\n  .initial-message {\n    display: flex;\n  }\n}\n"],"sourceRoot":""}]);
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
  // let shipDirection = "";
  const setShipDirection = (ship, direction) => {
    // console.log(ship);
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
  // const shipCoordinates = [];
  const placeShip = (ship, initialPosition) => {
    // const ship = shipList.filter((item) => item.id == shipId);
    // console.log("place ship", ship);
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
      // console.log("ship", ship);
      gameBoard[attackCoordinate] = "Hit";
      shipIsHit = true;
      return ship.hit(attackCoordinate);
    }
  };
  const hasEveryShipSunk = () => {
    /* console.log(gameBoard);
    console.log(shipList);
    console.log(gameBoard); */
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
    // console.log(oppositionGameBoard.hitCoordinates);
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
      // console.log("item", position);
      // return
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
    // console.log("ddd", oppositionGameBoard);
    return oppositionGameBoard.receiveAttack(randomPosition);
  };
  const randomlyPlaceShip = () => {
    // instantiate ships
    const submarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("submarine");
    const carrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("carrier");
    const battleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("battleship");
    const cruiser = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("cruiser");
    const destroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])("destroyer");
    // let { shipList } = playerGameBoard;

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
  /*  const setShipDirection = (direction) => {
    if (!direction) {
      return (shipDirection = "horizontal");
    } else {
      return (shipDirection = direction);
    }
  }; */
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
  // shipList.push({ id, length, hit, isSunk, hitPositions });
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
    // console.log(player);
    winnerMessage.style.visibility = "visible";
    if (player.name === "player A")
      winnerMessageText.textContent = `You Won The Game.`;
  } else if (player.name === "PC Player") {
    winnerMessageText.textContent = `The Compute Won The Game.`;
  }
}
function startGame() {
  (0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(boardOne, gameBoard);

  // player turn controller
  let turnCount = 0;

  // delay rendering of board if pc successfully attacks a ship
  function loopRandomAttack() {
    boardOne.classList.remove("disabled");
    boardTwo.classList.add("disabled");
    setTimeout(() => {
      pcPlayer.randomAttack(playerGameBoard);
      (0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(boardOne, gameBoard);
      isGameOver(playerGameBoard, pcPlayer);
      if (!playerGameBoard.isShipHit()) {
        console.log("inside second if statement");
        turnCount = 0;
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
  body.classList.add("place-ship");

  (0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(board, gameBoard);

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
        console.log(rotatedShip);
      }
    });
  });

  document.addEventListener("dragenter", (e) => {
    e.preventDefault();
    if (dragCount === 0) {
      draggedShip = playerGameBoard.shipList.filter(
        (ship) => ship.id === e.fromElement.className
      );
      console.log("enter", e.fromElement.className);
      dragCount++;
    }
  });
  document.addEventListener("dragover", (e) => {
    e.preventDefault();
    // console.log("drag end", e);
  });
  document.addEventListener("drop", (e) => {
    e.preventDefault();
    // console.log("drop", e);
    dragCount = 0;
    if (e.target.className.includes("grid")) {
      let ships = initialMessage.querySelector(".ships");
      let shipToBeRemoved = initialMessage.querySelector(
        `.${draggedShip[0].id}`
      );
      playerGameBoard.placeShip(draggedShip[0], Number(e.target.id));
      // console.log(draggedShip);
      shipToBeRemoved.parentElement.remove();
      (0,_renderGameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])(board, gameBoard);
      if (!ships.firstElementChild) {
        body.classList.remove("place-ship");
        hasGameStarted = true;
        startGame();
      }
    }
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNERBQWU7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBZTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0EsTUFBTSw0REFBZTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSw0REFBZTs7QUFFZjtBQUNBLDREQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw0REFBZTs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQWU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVCb2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlckdhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWluLXdpZHRoOiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDUwZDU7XFxuICBjb2xvcjogI2JkYjZiNjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI1cHggMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQsXFxuLmJvYXJkLTEsXFxuLmJvYXJkLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMTQsIDY5LCA3OCwgMC45MDk4MDM5MjE2KTtcXG59XFxuXFxuLmJvYXJkLTIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9hcmQtMS5kaXNhYmxlZCxcXG4uYm9hcmQtMi5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDE0LCA2OSwgNzgsIDAuOTA5ODAzOTIxNik7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4uZ3JpZDpudGgtY2hpbGQoMTBuKSB7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDE0LCA2OSwgNzgsIDAuOTA5ODAzOTIxNik7XFxufVxcblxcbi5ncmlkLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk2LCAxNTIsIDExLCAwLjQ5MDE5NjA3ODQpO1xcbn1cXG5cXG4uZ3JpZC5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E5M2YzZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmdyaWQubWlzc2VkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwieFxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM4NDMxMzE7XFxufVxcblxcbi5ncmlkLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4NTM4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZ3JpZC5oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ1ZTI4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLndpbm5lci1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IHBvcC11cCAwLjVzIGVhc2U7XFxufVxcblxcbkBrZXlmcmFtZXMgcG9wLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDElIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmluaXRpYWwtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5pbml0aWFsLW1lc3NhZ2Uge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcbi5pbml0aWFsLW1lc3NhZ2UgLmJvYXJkLFxcbi5pbml0aWFsLW1lc3NhZ2UgLnNoaXAtY29udGFpbmVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5pbml0aWFsLW1lc3NhZ2UgLmJvYXJkIHtcXG4gICAgb3JkZXI6IDI7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnNoaXAtY29udGFpbmVyIHtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxufVxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcHMge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMTYwcHg7XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG4uc2hpcC1jb250YWluZXIgLnNoaXBzIC5zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcHMgLnNoaXAgZGl2IHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgxNCwgNjksIDc4LCAwLjkwOTgwMzkyMTYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTYsIDE1MiwgMTEsIDAuNDkwMTk2MDc4NCk7XFxufVxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcHMgLnNoaXAgZGl2ICsgZGl2IHtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG4uc2hpcC1jb250YWluZXIgLnNoaXBzIC5zaGlwLnZlcnRpY2FsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LWJhc2lzOiA0OCU7XFxufVxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcHMgLnNoaXAudmVydGljYWwgZGl2ICsgZGl2IHtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMTQsIDY5LCA3OCwgMC45MDk4MDM5MjE2KTtcXG59XFxuXFxuYm9keS5wbGFjZS1zaGlwIC5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuYm9keS5wbGFjZS1zaGlwIC5pbml0aWFsLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBTkY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBaEJpQjtFQWlCakIsY0FoQlc7QUFXYjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7OztFQUdFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVEQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBREE7O0VBRUUsb0JBQUE7QUFJRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSUY7QUFIRTtFQUNFLHNEQUFBO0FBS0o7O0FBRkE7RUFDRSxrREFwRVc7QUF5RWI7O0FBSEE7RUFDRSx5QkF0RWE7RUF1RWIsa0JBQUE7QUFNRjtBQUxFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBT0o7O0FBSkE7RUFDRSx5QkFwRlU7RUFxRlYsa0JBQUE7QUFPRjtBQU5FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFRSjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7QUFRRjs7QUFOQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBU0Y7RUFQQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQVNGO0FBQ0Y7QUFQQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBU0Y7QUFSRTtFQUxGO0lBTUksZUFBQTtFQVdGO0FBQ0Y7QUFWRTs7RUFFRSxjQUFBO0FBWUo7QUFUSTtFQURGO0lBRUksUUFBQTtFQVlKO0FBQ0Y7O0FBUkU7RUFERjtJQUVJLFFBQUE7RUFZRjtBQUNGO0FBWEU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFhSjtBQVpJO0VBQ0UsYUFBQTtBQWNOO0FBYk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0RBQUE7QUFlUjtBQWJNO0VBQ0UsaUJBQUE7QUFlUjtBQVpJO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FBY047QUFiTTtFQUNFLGdCQUFBO0VBQ0EscURBQUE7QUFlUjs7QUFSRTtFQUNFLGFBQUE7QUFXSjtBQVRFO0VBQ0UsYUFBQTtBQVdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRib3JkZXItY29sb3I6ICMwZTQ1NGVlODtcXG4kYmFja2dyb3VuZC1jb2xvcjogIzYwNTBkNTtcXG4kdGV4dC1jb2xvcjogI2JkYjZiNjtcXG4kc2hpcC1jb2xvcjogI2M0OTgwYjdkO1xcbiRtaXNzZWQtY29sb3I6ICNhOTNmM2Y7XFxuJGhpdC1jb2xvcjogIzI5ODUzODtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtaW4td2lkdGg6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XFxuICBjb2xvcjogJHRleHQtY29sb3I7XFxufVxcbmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNXB4IDA7XFxufVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5oNCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYm9hcmRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvYXJkLFxcbi5ib2FyZC0xLFxcbi5ib2FyZC0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkYm9yZGVyLWNvbG9yO1xcbn1cXG4uYm9hcmQtMiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib2FyZC0xLmRpc2FibGVkLFxcbi5ib2FyZC0yLmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLy8gZmlsdGVyOiBvcGFjaXR5KDAuNSk7XFxufVxcbi5ncmlkIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggJGJvcmRlci1jb2xvcjtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAmOm50aC1jaGlsZCgxMG4pIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGJvcmRlci1jb2xvcjtcXG4gIH1cXG59XFxuLmdyaWQub2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNoaXAtY29sb3I7XFxufVxcbi5ncmlkLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWlzc2VkLWNvbG9yO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwieFxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yOiAkbWlzc2VkLWNvbG9yLCAkYW1vdW50OiAxMCk7XFxuICB9XFxufVxcbi5ncmlkLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGl0LWNvbG9yO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICRoaXQtY29sb3IsICRhbW91bnQ6IDEwKTtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIH1cXG59XFxuLndpbm5lci1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IHBvcC11cCAwLjVzIGVhc2U7XFxufVxcbkBrZXlmcmFtZXMgcG9wLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDElIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmluaXRpYWwtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG4gIC5ib2FyZCxcXG4gIC5zaGlwLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgfVxcbiAgLmJvYXJkIHtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgICAgb3JkZXI6IDI7XFxuICAgIH1cXG4gIH1cXG59XFxuLnNoaXAtY29udGFpbmVyIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG4gIC5zaGlwcyB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICAuc2hpcCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBkaXYge1xcbiAgICAgICAgd2lkdGg6IDM1cHg7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkYm9yZGVyLWNvbG9yO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M0OTgwYjdkO1xcbiAgICAgIH1cXG4gICAgICBkaXYgKyBkaXYge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5zaGlwLnZlcnRpY2FsIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGZsZXgtYmFzaXM6IDQ4JTtcXG4gICAgICBkaXYgKyBkaXYge1xcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGJvcmRlci1jb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuYm9keS5wbGFjZS1zaGlwIHtcXG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XFxuICAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5pbml0aWFsLW1lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lQm9hcmRGYWN0b3J5KCkge1xuICAvLyBjcmVhdGUgZ2FtZUJvYXJkIEFycmF5XG4gIGNvbnN0IGdhbWVCb2FyZCA9IFtdO1xuICBjb25zdCBzaGlwTGlzdCA9IFtdO1xuICBjb25zdCBoaXRDb29yZGluYXRlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgZ2FtZUJvYXJkLnB1c2goXCJcIik7XG4gIH1cbiAgLy8gbGV0IHNoaXBEaXJlY3Rpb24gPSBcIlwiO1xuICBjb25zdCBzZXRTaGlwRGlyZWN0aW9uID0gKHNoaXAsIGRpcmVjdGlvbikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXApO1xuICAgIHJldHVybiAoc2hpcC5zaGlwRGlyZWN0aW9uID0gZGlyZWN0aW9uKTtcbiAgfTtcbiAgY29uc3QgZ2V0U2hpcFBvc2l0aW9uID0gKHNoaXBJZCkgPT4ge1xuICAgIGNvbnN0IHNoaXBQb3NpdGlvbiA9IFtdO1xuICAgIGdhbWVCb2FyZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0gPT09IHNoaXBJZCkge1xuICAgICAgICBzaGlwUG9zaXRpb24ucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNoaXBQb3NpdGlvbjtcbiAgfTtcbiAgZnVuY3Rpb24gaXNTaGlwT3V0T2ZCb3VuZChzaGlwRGlyZWN0aW9uLCBpbml0aWFsUG9zaXRpb24sIHNoaXBMZW5ndGgpIHtcbiAgICBpZiAoc2hpcERpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIC8vIEFsbCB0aGUgcm93cyBoYXZlIHNhbWUgdGVucyB2YWx1ZXMgZS5nIGZpcnN0IHJvdzogMCB0byA5LCBzZWNvbmQgcm93OiAxMCB0byAxOS5cbiAgICAgIC8vIEhhdmluZyBkaWZmZXJlbnQgdGVucyB2YWx1ZXMgbWVhbnMgdGhlIHNoaXAgaXMgb3V0IG9mIGJvdW5kXG4gICAgICBjb25zdCBsYXN0U2hpcENvb3JkaW5hdGUgPSBpbml0aWFsUG9zaXRpb24gKyBzaGlwTGVuZ3RoO1xuICAgICAgY29uc3QgaW5pdGlhbFRlbnNWYWx1ZSA9IE1hdGguZmxvb3IoaW5pdGlhbFBvc2l0aW9uIC8gMTApO1xuICAgICAgY29uc3QgbGFzdFRlbnNWYWx1ZSA9IE1hdGguZmxvb3IobGFzdFNoaXBDb29yZGluYXRlIC8gMTApO1xuICAgICAgaWYgKGluaXRpYWxUZW5zVmFsdWUgIT09IGxhc3RUZW5zVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAvLyBUaGUgY29vcmRpYW50ZXMgaW4gZ2FtZWJvYXJkIHJhbmdlcyBmcm9tIDAgdG8gOTkuXG4gICAgICAvLyBTbyB0aGUgc2hpcCdzIGNvb3JkaW5hdGUgc2hvdWxkIG5vdCBiZSBncmVhdGVyIHRoYW4gOTlcbiAgICAgIGNvbnN0IGxhc3RTaGlwQ29vcmRpbmF0ZSA9IGluaXRpYWxQb3NpdGlvbiArIChzaGlwTGVuZ3RoIC0gMSkgKiAxMDtcbiAgICAgIGlmIChsYXN0U2hpcENvb3JkaW5hdGUgPiA5OSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlzQ2VsbE9jY3VwaWVkKHNoaXBEaXJlY3Rpb24sIGluaXRpYWxQb3NpdGlvbiwgc2hpcExlbmd0aCkge1xuICAgIGlmIChzaGlwRGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgbGV0IG9jY3VwaWVkQ2VsbCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ2FtZUJvYXJkW2luaXRpYWxQb3NpdGlvbiArIGldICE9PSBcIlwiKSB7XG4gICAgICAgICAgb2NjdXBpZWRDZWxsKys7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvY2N1cGllZENlbGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBsZXQgb2NjdXBpZWRDZWxsID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChnYW1lQm9hcmRbaW5pdGlhbFBvc2l0aW9uICsgMTAgKiBpXSAhPT0gXCJcIikge1xuICAgICAgICAgIG9jY3VwaWVkQ2VsbCsrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob2NjdXBpZWRDZWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNNb3ZlVmFsaWQoc2hpcERpcmVjdGlvbiwgaW5pdGlhbFBvc2l0aW9uLCBzaGlwTGVuZ3RoKSB7XG4gICAgaWYgKGlzU2hpcE91dE9mQm91bmQoc2hpcERpcmVjdGlvbiwgaW5pdGlhbFBvc2l0aW9uLCBzaGlwTGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNDZWxsT2NjdXBpZWQoc2hpcERpcmVjdGlvbiwgaW5pdGlhbFBvc2l0aW9uLCBzaGlwTGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gIGNvbnN0IGlzVmFsaWRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfTtcbiAgLy8gY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBpbml0aWFsUG9zaXRpb24pID0+IHtcbiAgICAvLyBjb25zdCBzaGlwID0gc2hpcExpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09IHNoaXBJZCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJwbGFjZSBzaGlwXCIsIHNoaXApO1xuICAgIGlmICghc2hpcC5zaGlwRGlyZWN0aW9uKSB7XG4gICAgICBzZXRTaGlwRGlyZWN0aW9uKHNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcbiAgICB9XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICAgIGxldCB7IHNoaXBEaXJlY3Rpb24gfSA9IHNoaXA7XG4gICAgaWYgKHNoaXBEaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoaXNNb3ZlVmFsaWQoc2hpcERpcmVjdGlvbiwgaW5pdGlhbFBvc2l0aW9uLCBzaGlwTGVuZ3RoKSkge1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgICBnYW1lQm9hcmRbaW5pdGlhbFBvc2l0aW9uICsgaV0gPSBzaGlwLmlkO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gXCJOb3QgVmFsaWRcIjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKGlzTW92ZVZhbGlkKHNoaXBEaXJlY3Rpb24sIGluaXRpYWxQb3NpdGlvbiwgc2hpcExlbmd0aCkpIHtcbiAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgZ2FtZUJvYXJkW2luaXRpYWxQb3NpdGlvbiArIDEwICogaV0gPSBzaGlwLmlkO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gXCJOb3QgVmFsaWRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdhbWVCb2FyZDtcbiAgfTtcbiAgbGV0IHNoaXBJc0hpdCA9IGZhbHNlO1xuICBjb25zdCBpc1NoaXBIaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBJc0hpdDtcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdHRhY2tDb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKGdhbWVCb2FyZFthdHRhY2tDb29yZGluYXRlXSA9PT0gXCJcIikge1xuICAgICAgZ2FtZUJvYXJkW2F0dGFja0Nvb3JkaW5hdGVdID0gXCJNaXNzZWRcIjtcbiAgICAgIHNoaXBJc0hpdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIFwiTWlzc2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwTGlzdC5maW5kKFxuICAgICAgICAoc2hpcCkgPT4gc2hpcC5pZCA9PT0gZ2FtZUJvYXJkW2F0dGFja0Nvb3JkaW5hdGVdXG4gICAgICApO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJzaGlwXCIsIHNoaXApO1xuICAgICAgZ2FtZUJvYXJkW2F0dGFja0Nvb3JkaW5hdGVdID0gXCJIaXRcIjtcbiAgICAgIHNoaXBJc0hpdCA9IHRydWU7XG4gICAgICByZXR1cm4gc2hpcC5oaXQoYXR0YWNrQ29vcmRpbmF0ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYXNFdmVyeVNoaXBTdW5rID0gKCkgPT4ge1xuICAgIC8qIGNvbnNvbGUubG9nKGdhbWVCb2FyZCk7XG4gICAgY29uc29sZS5sb2coc2hpcExpc3QpO1xuICAgIGNvbnNvbGUubG9nKGdhbWVCb2FyZCk7ICovXG4gICAgcmV0dXJuIHNoaXBMaXN0LmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnYW1lQm9hcmQsXG4gICAgc2hpcExpc3QsXG4gICAgaGl0Q29vcmRpbmF0ZXMsXG4gICAgc2V0U2hpcERpcmVjdGlvbixcbiAgICBwbGFjZVNoaXAsXG4gICAgZ2V0U2hpcFBvc2l0aW9uLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaGFzRXZlcnlTaGlwU3VuayxcbiAgICBpc1NoaXBIaXQsXG4gICAgaXNWYWxpZFBvc2l0aW9uLFxuICB9O1xufVxuIiwiaW1wb3J0IGdhbWVCb2FyZEZhY3RvcnkgZnJvbSBcIi4vZ2FtZUJvYXJkRmFjdG9yeVwiO1xuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXllckZhY3RvcnkobmFtZSkge1xuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gIGNvbnN0IGlzQWxyZWFkeVNob3QgPSAocG9zaXRpb24sIG9wcG9zaXRpb25HYW1lQm9hcmQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhvcHBvc2l0aW9uR2FtZUJvYXJkLmhpdENvb3JkaW5hdGVzKTtcbiAgICBpZiAob3Bwb3NpdGlvbkdhbWVCb2FyZC5oaXRDb29yZGluYXRlcy5pbmNsdWRlcyhwb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGxldCBpc0F0dGFja1ZhbGlkID0gdHJ1ZTtcbiAgY29uc3QgaXNUdXJuT3ZlciA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNBdHRhY2tWYWxpZDtcbiAgfTtcbiAgY29uc3QgYXR0YWNrID0gKHBvc2l0aW9uLCBvcHBvc2l0aW9uR2FtZUJvYXJkKSA9PiB7XG4gICAgaWYgKGlzQWxyZWFkeVNob3QocG9zaXRpb24sIG9wcG9zaXRpb25HYW1lQm9hcmQpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIml0ZW1cIiwgcG9zaXRpb24pO1xuICAgICAgLy8gcmV0dXJuXG4gICAgICBpc0F0dGFja1ZhbGlkID0gZmFsc2U7XG4gICAgICByZXR1cm4gXCJOb3QgdmFsaWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNBdHRhY2tWYWxpZCA9IHRydWU7XG4gICAgICBvcHBvc2l0aW9uR2FtZUJvYXJkLmhpdENvb3JkaW5hdGVzLnB1c2gocG9zaXRpb24pO1xuICAgICAgcmV0dXJuIG9wcG9zaXRpb25HYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gICAgfVxuICB9O1xuICBjb25zdCByYW5kb21BdHRhY2sgPSAob3Bwb3NpdGlvbkdhbWVCb2FyZCkgPT4ge1xuICAgIGxldCByYW5kb21Qb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgd2hpbGUgKGlzQWxyZWFkeVNob3QocmFuZG9tUG9zaXRpb24sIG9wcG9zaXRpb25HYW1lQm9hcmQpKSB7XG4gICAgICByYW5kb21Qb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgfVxuICAgIG9wcG9zaXRpb25HYW1lQm9hcmQuaGl0Q29vcmRpbmF0ZXMucHVzaChyYW5kb21Qb3NpdGlvbik7XG4gICAgLy8gY29uc29sZS5sb2coXCJkZGRcIiwgb3Bwb3NpdGlvbkdhbWVCb2FyZCk7XG4gICAgcmV0dXJuIG9wcG9zaXRpb25HYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21Qb3NpdGlvbik7XG4gIH07XG4gIGNvbnN0IHJhbmRvbWx5UGxhY2VTaGlwID0gKCkgPT4ge1xuICAgIC8vIGluc3RhbnRpYXRlIHNoaXBzXG4gICAgY29uc3Qgc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoXCJzdWJtYXJpbmVcIik7XG4gICAgY29uc3QgY2FycmllciA9IHNoaXBGYWN0b3J5KFwiY2FycmllclwiKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoXCJiYXR0bGVzaGlwXCIpO1xuICAgIGNvbnN0IGNydWlzZXIgPSBzaGlwRmFjdG9yeShcImNydWlzZXJcIik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoXCJkZXN0cm95ZXJcIik7XG4gICAgLy8gbGV0IHsgc2hpcExpc3QgfSA9IHBsYXllckdhbWVCb2FyZDtcblxuICAgIHBsYXllckdhbWVCb2FyZC5zaGlwTGlzdC5wdXNoKFxuICAgICAgc3VibWFyaW5lLFxuICAgICAgY2FycmllcixcbiAgICAgIGJhdHRsZXNoaXAsXG4gICAgICBjcnVpc2VyLFxuICAgICAgZGVzdHJveWVyXG4gICAgKTtcblxuICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIHNoaXAgYW5kIHBsYWNlIHRoZW0gaW4gdGhlIGJvYXJkXG4gICAgcGxheWVyR2FtZUJvYXJkLnNoaXBMaXN0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGxldCBzaGlwSW5pdGlhbFBvc2l0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgY29uc3Qgc2hpcERpcmVjdGlvbiA9IHJhbmRvbU51bWJlciA9PT0gMCA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuICAgICAgcGxheWVyR2FtZUJvYXJkLnNldFNoaXBEaXJlY3Rpb24oc2hpcCwgc2hpcERpcmVjdGlvbik7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IDEpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcCwgc2hpcEluaXRpYWxQb3NpdGlvbikgPT09IFwiTm90IFZhbGlkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcEluaXRpYWxQb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5KTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKHNoaXAsIHNoaXBJbml0aWFsUG9zaXRpb24pICE9PSBcIk5vdCBWYWxpZFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBwbGF5ZXJHYW1lQm9hcmQsXG4gICAgYXR0YWNrLFxuICAgIHJhbmRvbUF0dGFjayxcbiAgICByYW5kb21seVBsYWNlU2hpcCxcbiAgICBpc1R1cm5PdmVyLFxuICB9O1xufVxuIiwiY29uc3QgcmVuZGVyR2FtZUJvYXJkID0gKHBhcmVudEVsZW1lbnQsIGdhbWVCb2FyZCwgaGlkZUdyaWQpID0+IHtcbiAgLy9yZW1vdmUgYWxyZWFkeSByZW5kZXJlZCBlbGVtZW50c1xuICB3aGlsZSAocGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIHBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgZ2FtZUJvYXJkLmZvckVhY2goKGdyaWQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZ3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKGdyaWQgPT09IFwiTWlzc2VkXCIpIHtcbiAgICAgIGdyaWREaXYuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICB9IGVsc2UgaWYgKGdyaWQgPT09IFwiSGl0XCIpIHtcbiAgICAgIGdyaWREaXYuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9IGVsc2UgaWYgKGdyaWQgIT09IFwiXCIgJiYgaGlkZUdyaWQgIT09IHRydWUpIHtcbiAgICAgIGdyaWREaXYuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkXCIpO1xuICAgIH1cbiAgICBncmlkRGl2LmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgIGdyaWREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5kZXgpO1xuXG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChncmlkRGl2KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYW1lQm9hcmQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwRmFjdG9yeShuYW1lKSB7XG4gIGxldCBsZW5ndGg7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgXCJjYXJyaWVyXCI6XG4gICAgICBsZW5ndGggPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJhdHRsZXNoaXBcIjpcbiAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY3J1aXNlclwiOlxuICAgICAgbGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdWJtYXJpbmVcIjpcbiAgICAgIGxlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGVzdHJveWVyXCI6XG4gICAgICBsZW5ndGggPSAyO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpZCA9IG5hbWU7XG4gIGNvbnN0IGhpdFBvc2l0aW9ucyA9IFtdO1xuICBsZXQgc2hpcERpcmVjdGlvbiA9IFwiXCI7XG4gIC8qICBjb25zdCBzZXRTaGlwRGlyZWN0aW9uID0gKGRpcmVjdGlvbikgPT4ge1xuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gKHNoaXBEaXJlY3Rpb24gPSBcImhvcml6b250YWxcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoc2hpcERpcmVjdGlvbiA9IGRpcmVjdGlvbik7XG4gICAgfVxuICB9OyAqL1xuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICBoaXRQb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgcmV0dXJuIGhpdFBvc2l0aW9uc1toaXRQb3NpdGlvbnMubGVuZ3RoIC0gMV07XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRQb3NpdGlvbnMubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvLyBzaGlwTGlzdC5wdXNoKHsgaWQsIGxlbmd0aCwgaGl0LCBpc1N1bmssIGhpdFBvc2l0aW9ucyB9KTtcbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBsZW5ndGgsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBzaGlwRGlyZWN0aW9uLFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHBsYXllckZhY3RvcnkgZnJvbSBcIi4vcGxheWVyRmFjdG9yeVwiO1xuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5pbXBvcnQgcmVuZGVyR2FtZUJvYXJkIGZyb20gXCIuL3JlbmRlckdhbWVCb2FyZFwiO1xuaW1wb3J0IFwiLi4vc3JjL3N0eWxlLnNjc3NcIjtcblxubGV0IGhhc0dhbWVTdGFydGVkID0gZmFsc2U7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IHBsYXllckEgPSBwbGF5ZXJGYWN0b3J5KFwicGxheWVyIEFcIik7XG5jb25zdCBzdWJtYXJpbmUgPSBzaGlwRmFjdG9yeShcInN1Ym1hcmluZVwiKTtcbmNvbnN0IGNhcnJpZXIgPSBzaGlwRmFjdG9yeShcImNhcnJpZXJcIik7XG5jb25zdCBiYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoXCJiYXR0bGVzaGlwXCIpO1xuY29uc3QgY3J1aXNlciA9IHNoaXBGYWN0b3J5KFwiY3J1aXNlclwiKTtcbmNvbnN0IGRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KFwiZGVzdHJveWVyXCIpO1xuY29uc3QgYm9hcmRPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTFcIik7XG5jb25zdCB7IHBsYXllckdhbWVCb2FyZCB9ID0gcGxheWVyQTtcbmNvbnN0IHsgZ2FtZUJvYXJkIH0gPSBwbGF5ZXJHYW1lQm9hcmQ7XG5cbmNvbnN0IHBjUGxheWVyID0gcGxheWVyRmFjdG9yeShcIlBDIFBsYXllclwiKTtcbmNvbnN0IGJvYXJkVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC0yXCIpO1xuY29uc3QgcGNQbGF5ZXJHYW1lQm9hcmQgPSBwY1BsYXllci5wbGF5ZXJHYW1lQm9hcmQ7XG5jb25zdCBwY0dhbWVCb2FyZCA9IHBjUGxheWVyR2FtZUJvYXJkLmdhbWVCb2FyZDtcblxuY29uc3Qgd2lubmVyTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLW1lc3NhZ2VcIik7XG5jb25zdCB3aW5uZXJNZXNzYWdlVGV4dCA9IHdpbm5lck1lc3NhZ2UucXVlcnlTZWxlY3RvcihcIi53aW5uZXItbWVzc2FnZS10ZXh0XCIpO1xubGV0IGRyYWdDb3VudCA9IDA7XG5sZXQgZHJhZ2dlZFNoaXAgPSBudWxsO1xuXG5wbGF5ZXJHYW1lQm9hcmQuc2hpcExpc3QucHVzaChcbiAgc3VibWFyaW5lLFxuICBjYXJyaWVyLFxuICBiYXR0bGVzaGlwLFxuICBjcnVpc2VyLFxuICBkZXN0cm95ZXJcbik7XG5cbmZ1bmN0aW9uIGlzR2FtZU92ZXIob3Bwb3NpdGlvbkdhbWVCb2FyZCwgcGxheWVyKSB7XG4gIGlmIChvcHBvc2l0aW9uR2FtZUJvYXJkLmhhc0V2ZXJ5U2hpcFN1bmsoKSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcik7XG4gICAgd2lubmVyTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgaWYgKHBsYXllci5uYW1lID09PSBcInBsYXllciBBXCIpXG4gICAgICB3aW5uZXJNZXNzYWdlVGV4dC50ZXh0Q29udGVudCA9IGBZb3UgV29uIFRoZSBHYW1lLmA7XG4gIH0gZWxzZSBpZiAocGxheWVyLm5hbWUgPT09IFwiUEMgUGxheWVyXCIpIHtcbiAgICB3aW5uZXJNZXNzYWdlVGV4dC50ZXh0Q29udGVudCA9IGBUaGUgQ29tcHV0ZSBXb24gVGhlIEdhbWUuYDtcbiAgfVxufVxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICByZW5kZXJHYW1lQm9hcmQoYm9hcmRPbmUsIGdhbWVCb2FyZCk7XG5cbiAgLy8gcGxheWVyIHR1cm4gY29udHJvbGxlclxuICBsZXQgdHVybkNvdW50ID0gMDtcblxuICAvLyBkZWxheSByZW5kZXJpbmcgb2YgYm9hcmQgaWYgcGMgc3VjY2Vzc2Z1bGx5IGF0dGFja3MgYSBzaGlwXG4gIGZ1bmN0aW9uIGxvb3BSYW5kb21BdHRhY2soKSB7XG4gICAgYm9hcmRPbmUuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgIGJvYXJkVHdvLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBjUGxheWVyLnJhbmRvbUF0dGFjayhwbGF5ZXJHYW1lQm9hcmQpO1xuICAgICAgcmVuZGVyR2FtZUJvYXJkKGJvYXJkT25lLCBnYW1lQm9hcmQpO1xuICAgICAgaXNHYW1lT3ZlcihwbGF5ZXJHYW1lQm9hcmQsIHBjUGxheWVyKTtcbiAgICAgIGlmICghcGxheWVyR2FtZUJvYXJkLmlzU2hpcEhpdCgpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHNlY29uZCBpZiBzdGF0ZW1lbnRcIik7XG4gICAgICAgIHR1cm5Db3VudCA9IDA7XG4gICAgICAgIGJvYXJkVHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgYm9hcmRPbmUuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9vcFJhbmRvbUF0dGFjaygpO1xuICAgICAgfVxuICAgIH0sIDgwMCk7XG4gIH1cblxuICBpZiAodHVybkNvdW50ID09PSAwKSB7XG4gICAgYm9hcmRUd28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBsZXQgeyBpc1R1cm5PdmVyIH0gPSBwbGF5ZXJBO1xuICAgICAgcGxheWVyQS5hdHRhY2soZS50YXJnZXQuaWQsIHBjUGxheWVyR2FtZUJvYXJkKTtcbiAgICAgIHJlbmRlckdhbWVCb2FyZChib2FyZFR3bywgcGNHYW1lQm9hcmQsIHRydWUpO1xuICAgICAgaXNHYW1lT3ZlcihwY1BsYXllckdhbWVCb2FyZCwgcGxheWVyQSk7XG4gICAgICBib2FyZE9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG5cbiAgICAgIC8vaWYgcGxheWVyIG1pc3NlcywgaXQncyB0aGUgb3RoZXIgcGxheWVyJ3MgdHVyblxuICAgICAgaWYgKGlzVHVybk92ZXIoKSAmJiAhcGNQbGF5ZXJHYW1lQm9hcmQuaXNTaGlwSGl0KCkpIHtcbiAgICAgICAgdHVybkNvdW50ID0gMTtcbiAgICAgICAgYm9hcmRPbmUuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuXG4gICAgICAgIGxvb3BSYW5kb21BdHRhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5yZW5kZXJHYW1lQm9hcmQoYm9hcmRPbmUsIGdhbWVCb2FyZCk7XG5cbnBjUGxheWVyLnJhbmRvbWx5UGxhY2VTaGlwKCk7XG5yZW5kZXJHYW1lQm9hcmQoYm9hcmRUd28sIHBjR2FtZUJvYXJkLCB0cnVlKTtcblxuaWYgKCFoYXNHYW1lU3RhcnRlZCkge1xuICBjb25zdCBpbml0aWFsTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5pdGlhbC1tZXNzYWdlXCIpO1xuICBjb25zdCBib2FyZCA9IGluaXRpYWxNZXNzYWdlLnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIik7XG4gIGNvbnN0IHNoaXBzID0gaW5pdGlhbE1lc3NhZ2UucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQoXCJwbGFjZS1zaGlwXCIpO1xuXG4gIHJlbmRlckdhbWVCb2FyZChib2FyZCwgZ2FtZUJvYXJkKTtcblxuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgIGxldCByb3RhdGVkU2hpcCA9IHBsYXllckdhbWVCb2FyZC5zaGlwTGlzdC5maWx0ZXIoXG4gICAgICAgIChzaGlwKSA9PiBzaGlwLmlkID09IGUudGFyZ2V0LmNsYXNzTmFtZVxuICAgICAgKTtcbiAgICAgIGlmIChzaGlwLmNsYXNzTmFtZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIHBsYXllckdhbWVCb2FyZC5zZXRTaGlwRGlyZWN0aW9uKHJvdGF0ZWRTaGlwWzBdLCBcImhvcml6b250YWxcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuc2V0U2hpcERpcmVjdGlvbihyb3RhdGVkU2hpcFswXSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocm90YXRlZFNoaXApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChkcmFnQ291bnQgPT09IDApIHtcbiAgICAgIGRyYWdnZWRTaGlwID0gcGxheWVyR2FtZUJvYXJkLnNoaXBMaXN0LmZpbHRlcihcbiAgICAgICAgKHNoaXApID0+IHNoaXAuaWQgPT09IGUuZnJvbUVsZW1lbnQuY2xhc3NOYW1lXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXCJlbnRlclwiLCBlLmZyb21FbGVtZW50LmNsYXNzTmFtZSk7XG4gICAgICBkcmFnQ291bnQrKztcbiAgICB9XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJkcmFnIGVuZFwiLCBlKTtcbiAgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZHJvcFwiLCBlKTtcbiAgICBkcmFnQ291bnQgPSAwO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoXCJncmlkXCIpKSB7XG4gICAgICBsZXQgc2hpcHMgPSBpbml0aWFsTWVzc2FnZS5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzXCIpO1xuICAgICAgbGV0IHNoaXBUb0JlUmVtb3ZlZCA9IGluaXRpYWxNZXNzYWdlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuJHtkcmFnZ2VkU2hpcFswXS5pZH1gXG4gICAgICApO1xuICAgICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChkcmFnZ2VkU2hpcFswXSwgTnVtYmVyKGUudGFyZ2V0LmlkKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkcmFnZ2VkU2hpcCk7XG4gICAgICBzaGlwVG9CZVJlbW92ZWQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIHJlbmRlckdhbWVCb2FyZChib2FyZCwgZ2FtZUJvYXJkKTtcbiAgICAgIGlmICghc2hpcHMuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2Utc2hpcFwiKTtcbiAgICAgICAgaGFzR2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9