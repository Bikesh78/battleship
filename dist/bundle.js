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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  min-height: 100vh;\n  background-color: #6050d5;\n  color: #bdb6b6;\n}\n\nheader {\n  text-align: center;\n  padding: 25px 0;\n}\n\nh1 {\n  font-size: 60px;\n}\n\nh3 {\n  font-size: 50px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\n.board-container {\n  padding: 25px 0;\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.boards {\n  text-align: center;\n}\n\n.board,\n.board-1,\n.board-2 {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 350px;\n  height: 350px;\n  border-bottom: solid 1px rgba(14, 69, 78, 0.9098039216);\n}\n\n.board-2 {\n  cursor: pointer;\n}\n\n.board-1.disabled,\n.board-2.disabled {\n  pointer-events: none;\n}\n\n.grid {\n  width: 35px;\n  height: 35px;\n  border: solid 1px rgba(14, 69, 78, 0.9098039216);\n  border-right: none;\n  border-bottom: none;\n}\n.grid:nth-child(10n) {\n  border-right: solid 1px rgba(14, 69, 78, 0.9098039216);\n}\n\n.grid.occupied {\n  background-color: rgba(196, 152, 11, 0.4901960784);\n}\n\n.grid.missed {\n  background-color: #a93f3f;\n  position: relative;\n}\n.grid.missed::after {\n  content: \"x\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n  font-weight: 700;\n  color: #843131;\n}\n\n.grid.hit {\n  background-color: #298538;\n  position: relative;\n}\n.grid.hit::after {\n  content: \"\";\n  display: block;\n  background-color: #1d5e28;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.winner-message {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  visibility: hidden;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  animation: pop-up 0.5s ease;\n}\n\n@keyframes pop-up {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  1% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.initial-message {\n  display: none;\n  justify-content: center;\n  gap: 25px;\n  padding: 25px;\n}\n@media (max-width: 767px) {\n  .initial-message {\n    flex-wrap: wrap;\n  }\n}\n.initial-message .board,\n.initial-message .ship-container {\n  flex-shrink: 0;\n}\n@media (max-width: 767px) {\n  .initial-message .board {\n    order: 2;\n  }\n}\n\n@media (max-width: 767px) {\n  .ship-container {\n    order: 1;\n  }\n}\n.ship-container .ships {\n  margin-top: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 160px;\n  row-gap: 10px;\n}\n.ship-container .ships .ship {\n  display: flex;\n}\n.ship-container .ships .ship div {\n  width: 35px;\n  height: 35px;\n  border: solid 1px rgba(14, 69, 78, 0.9098039216);\n  background-color: rgba(196, 152, 11, 0.4901960784);\n}\n.ship-container .ships .ship div + div {\n  border-left: none;\n}\n.ship-container .ships .ship.vertical {\n  flex-direction: column;\n  flex-basis: 48%;\n}\n.ship-container .ships .ship.vertical div + div {\n  border-top: none;\n  border-left: solid 1px rgba(14, 69, 78, 0.9098039216);\n}\n\nbody.place-ship .board-container {\n  display: none;\n}\nbody.place-ship .initial-message {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAOA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AANF;;AAQA;EACE,iCAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAhBiB;EAiBjB,cAhBW;AAWb;;AAOA;EACE,kBAAA;EACA,eAAA;AAJF;;AAMA;EACE,eAAA;AAHF;;AAKA;EACE,eAAA;AAFF;;AAIA;EACE,eAAA;AADF;;AAGA;EACE,eAAA;EACA,aAAA;EACA,SAAA;EACA,eAAA;EACA,uBAAA;AAAF;;AAEA;EACE,kBAAA;AACF;;AACA;;;EAGE,mBAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,uDAAA;AAEF;;AAAA;EACE,eAAA;AAGF;;AADA;;EAEE,oBAAA;AAIF;;AADA;EACE,WAAA;EACA,YAAA;EACA,gDAAA;EACA,kBAAA;EACA,mBAAA;AAIF;AAHE;EACE,sDAAA;AAKJ;;AAFA;EACE,kDArEW;AA0Eb;;AAHA;EACE,yBAvEa;EAwEb,kBAAA;AAMF;AALE;EACE,YAAA;EACA,cAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AAOJ;;AAJA;EACE,yBArFU;EAsFV,kBAAA;AAOF;AANE;EACE,WAAA;EACA,cAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAQJ;;AALA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,oCAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gCAAA;EACA,2BAAA;AAQF;;AANA;EACE;IACE,mBAAA;IACA,UAAA;EASF;EAPA;IACE,mBAAA;IACA,UAAA;EASF;AACF;AAPA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,aAAA;AASF;AARE;EALF;IAMI,eAAA;EAWF;AACF;AAVE;;EAEE,cAAA;AAYJ;AATI;EADF;IAEI,QAAA;EAYJ;AACF;;AARE;EADF;IAEI,QAAA;EAYF;AACF;AAXE;EACE,gBAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;AAaJ;AAZI;EACE,aAAA;AAcN;AAbM;EACE,WAAA;EACA,YAAA;EACA,gDAAA;EACA,kDAAA;AAeR;AAbM;EACE,iBAAA;AAeR;AAZI;EACE,sBAAA;EACA,eAAA;AAcN;AAbM;EACE,gBAAA;EACA,qDAAA;AAeR;;AARE;EACE,aAAA;AAWJ;AATE;EACE,aAAA;AAWJ","sourcesContent":["$border-color: #0e454ee8;\n$background-color: #6050d5;\n$text-color: #bdb6b6;\n$ship-color: #c4980b7d;\n$missed-color: #a93f3f;\n$hit-color: #298538;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  min-height: 100vh;\n  background-color: $background-color;\n  color: $text-color;\n}\nheader {\n  text-align: center;\n  padding: 25px 0;\n}\nh1 {\n  font-size: 60px;\n}\nh3 {\n  font-size: 50px;\n}\nh4 {\n  font-size: 20px;\n}\n.board-container {\n  padding: 25px 0;\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.boards {\n  text-align: center;\n}\n.board,\n.board-1,\n.board-2 {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 350px;\n  height: 350px;\n  border-bottom: solid 1px $border-color;\n}\n.board-2 {\n  cursor: pointer;\n}\n.board-1.disabled,\n.board-2.disabled {\n  pointer-events: none;\n  // filter: opacity(0.5);\n}\n.grid {\n  width: 35px;\n  height: 35px;\n  border: solid 1px $border-color;\n  border-right: none;\n  border-bottom: none;\n  &:nth-child(10n) {\n    border-right: solid 1px $border-color;\n  }\n}\n.grid.occupied {\n  background-color: $ship-color;\n}\n.grid.missed {\n  background-color: $missed-color;\n  position: relative;\n  &::after {\n    content: \"x\";\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 12px;\n    font-weight: 700;\n    color: darken($color: $missed-color, $amount: 10);\n  }\n}\n.grid.hit {\n  background-color: $hit-color;\n  position: relative;\n  &::after {\n    content: \"\";\n    display: block;\n    background-color: darken($color: $hit-color, $amount: 10);\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n.winner-message {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  visibility: hidden;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  animation: pop-up 0.5s ease;\n}\n@keyframes pop-up {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  1% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.initial-message {\n  display: none;\n  justify-content: center;\n  gap: 25px;\n  padding: 25px;\n  @media (max-width: 767px) {\n    flex-wrap: wrap;\n  }\n  .board,\n  .ship-container {\n    flex-shrink: 0;\n  }\n  .board {\n    @media (max-width: 767px) {\n      order: 2;\n    }\n  }\n}\n.ship-container {\n  @media (max-width: 767px) {\n    order: 1;\n  }\n  .ships {\n    margin-top: 15px;\n    display: flex;\n    flex-wrap: wrap;\n    width: 160px;\n    row-gap: 10px;\n    .ship {\n      display: flex;\n      div {\n        width: 35px;\n        height: 35px;\n        border: solid 1px $border-color;\n        background-color: #c4980b7d;\n      }\n      div + div {\n        border-left: none;\n      }\n    }\n    .ship.vertical {\n      flex-direction: column;\n      flex-basis: 48%;\n      div + div {\n        border-top: none;\n        border-left: solid 1px $border-color;\n      }\n    }\n  }\n}\nbody.place-ship {\n  // overflow: hidden;\n  .board-container {\n    display: none;\n  }\n  .initial-message {\n    display: flex;\n  }\n}\n"],"sourceRoot":""}]);
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
  const draggableShipList = document.querySelectorAll(".ship");
  let draggedShip = null;
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
        // console.log(rotatedShip);
      }
    });
  });

  draggableShipList.forEach((ship) => {
    // console.log(ship.firstElementChild);
    ship.addEventListener("mousedown", (e) => {
      draggedShip = playerGameBoard.shipList.filter(
        (ship) => ship.id === e.target.className
      );
    });
  });

  document.addEventListener("dragenter", (e) => {
    e.preventDefault();
    // if (dragCount === 0) {
    //   console.log("enter", e);
    //   if (e.fromElement !== null) {
    //     draggedShip = playerGameBoard.shipList.filter(
    //       (ship) => ship.id === e.fromElement.className
    //     );
    //     dragCount++;
    //   }
    // }
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
      draggedShip = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFlOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQWU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBLE1BQU0sNERBQWU7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsNERBQWU7O0FBRWY7QUFDQSw0REFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDREQUFlOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBZTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZUJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyR2FtZUJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDUwZDU7XFxuICBjb2xvcjogI2JkYjZiNjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI1cHggMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQsXFxuLmJvYXJkLTEsXFxuLmJvYXJkLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMTQsIDY5LCA3OCwgMC45MDk4MDM5MjE2KTtcXG59XFxuXFxuLmJvYXJkLTIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9hcmQtMS5kaXNhYmxlZCxcXG4uYm9hcmQtMi5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDE0LCA2OSwgNzgsIDAuOTA5ODAzOTIxNik7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4uZ3JpZDpudGgtY2hpbGQoMTBuKSB7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDE0LCA2OSwgNzgsIDAuOTA5ODAzOTIxNik7XFxufVxcblxcbi5ncmlkLm9jY3VwaWVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk2LCAxNTIsIDExLCAwLjQ5MDE5NjA3ODQpO1xcbn1cXG5cXG4uZ3JpZC5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E5M2YzZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmdyaWQubWlzc2VkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwieFxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM4NDMxMzE7XFxufVxcblxcbi5ncmlkLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4NTM4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZ3JpZC5oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ1ZTI4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLndpbm5lci1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IHBvcC11cCAwLjVzIGVhc2U7XFxufVxcblxcbkBrZXlmcmFtZXMgcG9wLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDElIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmluaXRpYWwtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5pbml0aWFsLW1lc3NhZ2Uge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcbi5pbml0aWFsLW1lc3NhZ2UgLmJvYXJkLFxcbi5pbml0aWFsLW1lc3NhZ2UgLnNoaXAtY29udGFpbmVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5pbml0aWFsLW1lc3NhZ2UgLmJvYXJkIHtcXG4gICAgb3JkZXI6IDI7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnNoaXAtY29udGFpbmVyIHtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxufVxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcHMge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMTYwcHg7XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG4uc2hpcC1jb250YWluZXIgLnNoaXBzIC5zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcHMgLnNoaXAgZGl2IHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgxNCwgNjksIDc4LCAwLjkwOTgwMzkyMTYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTYsIDE1MiwgMTEsIDAuNDkwMTk2MDc4NCk7XFxufVxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcHMgLnNoaXAgZGl2ICsgZGl2IHtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG4uc2hpcC1jb250YWluZXIgLnNoaXBzIC5zaGlwLnZlcnRpY2FsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LWJhc2lzOiA0OCU7XFxufVxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcHMgLnNoaXAudmVydGljYWwgZGl2ICsgZGl2IHtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMTQsIDY5LCA3OCwgMC45MDk4MDM5MjE2KTtcXG59XFxuXFxuYm9keS5wbGFjZS1zaGlwIC5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuYm9keS5wbGFjZS1zaGlwIC5pbml0aWFsLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBTkY7O0FBUUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBaEJpQjtFQWlCakIsY0FoQlc7QUFXYjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBOzs7RUFHRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1REFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBOztFQUVFLG9CQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUlGO0FBSEU7RUFDRSxzREFBQTtBQUtKOztBQUZBO0VBQ0Usa0RBckVXO0FBMEViOztBQUhBO0VBQ0UseUJBdkVhO0VBd0ViLGtCQUFBO0FBTUY7QUFMRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUpBO0VBQ0UseUJBckZVO0VBc0ZWLGtCQUFBO0FBT0Y7QUFORTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBUUo7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0FBUUY7O0FBTkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQVNGO0VBUEE7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUFTRjtBQUNGO0FBUEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQVNGO0FBUkU7RUFMRjtJQU1JLGVBQUE7RUFXRjtBQUNGO0FBVkU7O0VBRUUsY0FBQTtBQVlKO0FBVEk7RUFERjtJQUVJLFFBQUE7RUFZSjtBQUNGOztBQVJFO0VBREY7SUFFSSxRQUFBO0VBWUY7QUFDRjtBQVhFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBYUo7QUFaSTtFQUNFLGFBQUE7QUFjTjtBQWJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLGtEQUFBO0FBZVI7QUFiTTtFQUNFLGlCQUFBO0FBZVI7QUFaSTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQWNOO0FBYk07RUFDRSxnQkFBQTtFQUNBLHFEQUFBO0FBZVI7O0FBUkU7RUFDRSxhQUFBO0FBV0o7QUFURTtFQUNFLGFBQUE7QUFXSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYm9yZGVyLWNvbG9yOiAjMGU0NTRlZTg7XFxuJGJhY2tncm91bmQtY29sb3I6ICM2MDUwZDU7XFxuJHRleHQtY29sb3I6ICNiZGI2YjY7XFxuJHNoaXAtY29sb3I6ICNjNDk4MGI3ZDtcXG4kbWlzc2VkLWNvbG9yOiAjYTkzZjNmO1xcbiRoaXQtY29sb3I6ICMyOTg1Mzg7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcXG59XFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI1cHggMDtcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5oMyB7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5ib2FyZHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9hcmQsXFxuLmJvYXJkLTEsXFxuLmJvYXJkLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRib3JkZXItY29sb3I7XFxufVxcbi5ib2FyZC0yIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJvYXJkLTEuZGlzYWJsZWQsXFxuLmJvYXJkLTIuZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAvLyBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcXG59XFxuLmdyaWQge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCAkYm9yZGVyLWNvbG9yO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICY6bnRoLWNoaWxkKDEwbikge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkYm9yZGVyLWNvbG9yO1xcbiAgfVxcbn1cXG4uZ3JpZC5vY2N1cGllZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hpcC1jb2xvcjtcXG59XFxuLmdyaWQubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtaXNzZWQtY29sb3I7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAmOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJ4XFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IGRhcmtlbigkY29sb3I6ICRtaXNzZWQtY29sb3IsICRhbW91bnQ6IDEwKTtcXG4gIH1cXG59XFxuLmdyaWQuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRoaXQtY29sb3I7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAmOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogJGhpdC1jb2xvciwgJGFtb3VudDogMTApO1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgfVxcbn1cXG4ud2lubmVyLW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogcG9wLXVwIDAuNXMgZWFzZTtcXG59XFxuQGtleWZyYW1lcyBwb3AtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uaW5pdGlhbC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjVweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgLmJvYXJkLFxcbiAgLnNoaXAtY29udGFpbmVyIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICB9XFxuICAuYm9hcmQge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgICBvcmRlcjogMjtcXG4gICAgfVxcbiAgfVxcbn1cXG4uc2hpcC1jb250YWluZXIge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbiAgLnNoaXBzIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIC5zaGlwIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGRpdiB7XFxuICAgICAgICB3aWR0aDogMzVweDtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICRib3JkZXItY29sb3I7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQ5ODBiN2Q7XFxuICAgICAgfVxcbiAgICAgIGRpdiArIGRpdiB7XFxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLnNoaXAudmVydGljYWwge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZmxleC1iYXNpczogNDglO1xcbiAgICAgIGRpdiArIGRpdiB7XFxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkYm9yZGVyLWNvbG9yO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5ib2R5LnBsYWNlLXNoaXAge1xcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmluaXRpYWwtbWVzc2FnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVCb2FyZEZhY3RvcnkoKSB7XG4gIC8vIGNyZWF0ZSBnYW1lQm9hcmQgQXJyYXlcbiAgY29uc3QgZ2FtZUJvYXJkID0gW107XG4gIGNvbnN0IHNoaXBMaXN0ID0gW107XG4gIGNvbnN0IGhpdENvb3JkaW5hdGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBnYW1lQm9hcmQucHVzaChcIlwiKTtcbiAgfVxuICAvLyBsZXQgc2hpcERpcmVjdGlvbiA9IFwiXCI7XG4gIGNvbnN0IHNldFNoaXBEaXJlY3Rpb24gPSAoc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coc2hpcCk7XG4gICAgcmV0dXJuIChzaGlwLnNoaXBEaXJlY3Rpb24gPSBkaXJlY3Rpb24pO1xuICB9O1xuICBjb25zdCBnZXRTaGlwUG9zaXRpb24gPSAoc2hpcElkKSA9PiB7XG4gICAgY29uc3Qgc2hpcFBvc2l0aW9uID0gW107XG4gICAgZ2FtZUJvYXJkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbSA9PT0gc2hpcElkKSB7XG4gICAgICAgIHNoaXBQb3NpdGlvbi5wdXNoKGluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2hpcFBvc2l0aW9uO1xuICB9O1xuICBmdW5jdGlvbiBpc1NoaXBPdXRPZkJvdW5kKHNoaXBEaXJlY3Rpb24sIGluaXRpYWxQb3NpdGlvbiwgc2hpcExlbmd0aCkge1xuICAgIGlmIChzaGlwRGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgLy8gQWxsIHRoZSByb3dzIGhhdmUgc2FtZSB0ZW5zIHZhbHVlcyBlLmcgZmlyc3Qgcm93OiAwIHRvIDksIHNlY29uZCByb3c6IDEwIHRvIDE5LlxuICAgICAgLy8gSGF2aW5nIGRpZmZlcmVudCB0ZW5zIHZhbHVlcyBtZWFucyB0aGUgc2hpcCBpcyBvdXQgb2YgYm91bmRcbiAgICAgIGNvbnN0IGxhc3RTaGlwQ29vcmRpbmF0ZSA9IGluaXRpYWxQb3NpdGlvbiArIHNoaXBMZW5ndGg7XG4gICAgICBjb25zdCBpbml0aWFsVGVuc1ZhbHVlID0gTWF0aC5mbG9vcihpbml0aWFsUG9zaXRpb24gLyAxMCk7XG4gICAgICBjb25zdCBsYXN0VGVuc1ZhbHVlID0gTWF0aC5mbG9vcihsYXN0U2hpcENvb3JkaW5hdGUgLyAxMCk7XG4gICAgICBpZiAoaW5pdGlhbFRlbnNWYWx1ZSAhPT0gbGFzdFRlbnNWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIC8vIFRoZSBjb29yZGlhbnRlcyBpbiBnYW1lYm9hcmQgcmFuZ2VzIGZyb20gMCB0byA5OS5cbiAgICAgIC8vIFNvIHRoZSBzaGlwJ3MgY29vcmRpbmF0ZSBzaG91bGQgbm90IGJlIGdyZWF0ZXIgdGhhbiA5OVxuICAgICAgY29uc3QgbGFzdFNoaXBDb29yZGluYXRlID0gaW5pdGlhbFBvc2l0aW9uICsgKHNoaXBMZW5ndGggLSAxKSAqIDEwO1xuICAgICAgaWYgKGxhc3RTaGlwQ29vcmRpbmF0ZSA+IDk5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNDZWxsT2NjdXBpZWQoc2hpcERpcmVjdGlvbiwgaW5pdGlhbFBvc2l0aW9uLCBzaGlwTGVuZ3RoKSB7XG4gICAgaWYgKHNoaXBEaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBsZXQgb2NjdXBpZWRDZWxsID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChnYW1lQm9hcmRbaW5pdGlhbFBvc2l0aW9uICsgaV0gIT09IFwiXCIpIHtcbiAgICAgICAgICBvY2N1cGllZENlbGwrKztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9jY3VwaWVkQ2VsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCBvY2N1cGllZENlbGwgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGdhbWVCb2FyZFtpbml0aWFsUG9zaXRpb24gKyAxMCAqIGldICE9PSBcIlwiKSB7XG4gICAgICAgICAgb2NjdXBpZWRDZWxsKys7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvY2N1cGllZENlbGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc01vdmVWYWxpZChzaGlwRGlyZWN0aW9uLCBpbml0aWFsUG9zaXRpb24sIHNoaXBMZW5ndGgpIHtcbiAgICBpZiAoaXNTaGlwT3V0T2ZCb3VuZChzaGlwRGlyZWN0aW9uLCBpbml0aWFsUG9zaXRpb24sIHNoaXBMZW5ndGgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0NlbGxPY2N1cGllZChzaGlwRGlyZWN0aW9uLCBpbml0aWFsUG9zaXRpb24sIHNoaXBMZW5ndGgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgY29uc3QgaXNWYWxpZFBvc2l0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9O1xuICAvLyBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGluaXRpYWxQb3NpdGlvbikgPT4ge1xuICAgIC8vIGNvbnN0IHNoaXAgPSBzaGlwTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT0gc2hpcElkKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInBsYWNlIHNoaXBcIiwgc2hpcCk7XG4gICAgaWYgKCFzaGlwLnNoaXBEaXJlY3Rpb24pIHtcbiAgICAgIHNldFNoaXBEaXJlY3Rpb24oc2hpcCwgXCJob3Jpem9udGFsXCIpO1xuICAgIH1cbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgbGV0IHsgc2hpcERpcmVjdGlvbiB9ID0gc2hpcDtcbiAgICBpZiAoc2hpcERpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChpc01vdmVWYWxpZChzaGlwRGlyZWN0aW9uLCBpbml0aWFsUG9zaXRpb24sIHNoaXBMZW5ndGgpKSB7XG4gICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgc2hpcExlbmd0aCkge1xuICAgICAgICAgIGdhbWVCb2FyZFtpbml0aWFsUG9zaXRpb24gKyBpXSA9IHNoaXAuaWQ7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBcIk5vdCBWYWxpZFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoaXNNb3ZlVmFsaWQoc2hpcERpcmVjdGlvbiwgaW5pdGlhbFBvc2l0aW9uLCBzaGlwTGVuZ3RoKSkge1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgICBnYW1lQm9hcmRbaW5pdGlhbFBvc2l0aW9uICsgMTAgKiBpXSA9IHNoaXAuaWQ7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBcIk5vdCBWYWxpZFwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2FtZUJvYXJkO1xuICB9O1xuICBsZXQgc2hpcElzSGl0ID0gZmFsc2U7XG4gIGNvbnN0IGlzU2hpcEhpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcElzSGl0O1xuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGF0dGFja0Nvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAoZ2FtZUJvYXJkW2F0dGFja0Nvb3JkaW5hdGVdID09PSBcIlwiKSB7XG4gICAgICBnYW1lQm9hcmRbYXR0YWNrQ29vcmRpbmF0ZV0gPSBcIk1pc3NlZFwiO1xuICAgICAgc2hpcElzSGl0ID0gZmFsc2U7XG4gICAgICByZXR1cm4gXCJNaXNzZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBMaXN0LmZpbmQoXG4gICAgICAgIChzaGlwKSA9PiBzaGlwLmlkID09PSBnYW1lQm9hcmRbYXR0YWNrQ29vcmRpbmF0ZV1cbiAgICAgICk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNoaXBcIiwgc2hpcCk7XG4gICAgICBnYW1lQm9hcmRbYXR0YWNrQ29vcmRpbmF0ZV0gPSBcIkhpdFwiO1xuICAgICAgc2hpcElzSGl0ID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzaGlwLmhpdChhdHRhY2tDb29yZGluYXRlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhc0V2ZXJ5U2hpcFN1bmsgPSAoKSA9PiB7XG4gICAgLyogY29uc29sZS5sb2coZ2FtZUJvYXJkKTtcbiAgICBjb25zb2xlLmxvZyhzaGlwTGlzdCk7XG4gICAgY29uc29sZS5sb2coZ2FtZUJvYXJkKTsgKi9cbiAgICByZXR1cm4gc2hpcExpc3QuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdhbWVCb2FyZCxcbiAgICBzaGlwTGlzdCxcbiAgICBoaXRDb29yZGluYXRlcyxcbiAgICBzZXRTaGlwRGlyZWN0aW9uLFxuICAgIHBsYWNlU2hpcCxcbiAgICBnZXRTaGlwUG9zaXRpb24sXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBoYXNFdmVyeVNoaXBTdW5rLFxuICAgIGlzU2hpcEhpdCxcbiAgICBpc1ZhbGlkUG9zaXRpb24sXG4gIH07XG59XG4iLCJpbXBvcnQgZ2FtZUJvYXJkRmFjdG9yeSBmcm9tIFwiLi9nYW1lQm9hcmRGYWN0b3J5XCI7XG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheWVyRmFjdG9yeShuYW1lKSB7XG4gIGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgY29uc3QgaXNBbHJlYWR5U2hvdCA9IChwb3NpdGlvbiwgb3Bwb3NpdGlvbkdhbWVCb2FyZCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKG9wcG9zaXRpb25HYW1lQm9hcmQuaGl0Q29vcmRpbmF0ZXMpO1xuICAgIGlmIChvcHBvc2l0aW9uR2FtZUJvYXJkLmhpdENvb3JkaW5hdGVzLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgbGV0IGlzQXR0YWNrVmFsaWQgPSB0cnVlO1xuICBjb25zdCBpc1R1cm5PdmVyID0gKCkgPT4ge1xuICAgIHJldHVybiBpc0F0dGFja1ZhbGlkO1xuICB9O1xuICBjb25zdCBhdHRhY2sgPSAocG9zaXRpb24sIG9wcG9zaXRpb25HYW1lQm9hcmQpID0+IHtcbiAgICBpZiAoaXNBbHJlYWR5U2hvdChwb3NpdGlvbiwgb3Bwb3NpdGlvbkdhbWVCb2FyZCkpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRlbVwiLCBwb3NpdGlvbik7XG4gICAgICAvLyByZXR1cm5cbiAgICAgIGlzQXR0YWNrVmFsaWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBcIk5vdCB2YWxpZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0F0dGFja1ZhbGlkID0gdHJ1ZTtcbiAgICAgIG9wcG9zaXRpb25HYW1lQm9hcmQuaGl0Q29vcmRpbmF0ZXMucHVzaChwb3NpdGlvbik7XG4gICAgICByZXR1cm4gb3Bwb3NpdGlvbkdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IChvcHBvc2l0aW9uR2FtZUJvYXJkKSA9PiB7XG4gICAgbGV0IHJhbmRvbVBvc2l0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB3aGlsZSAoaXNBbHJlYWR5U2hvdChyYW5kb21Qb3NpdGlvbiwgb3Bwb3NpdGlvbkdhbWVCb2FyZCkpIHtcbiAgICAgIHJhbmRvbVBvc2l0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICB9XG4gICAgb3Bwb3NpdGlvbkdhbWVCb2FyZC5oaXRDb29yZGluYXRlcy5wdXNoKHJhbmRvbVBvc2l0aW9uKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRkZFwiLCBvcHBvc2l0aW9uR2FtZUJvYXJkKTtcbiAgICByZXR1cm4gb3Bwb3NpdGlvbkdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVBvc2l0aW9uKTtcbiAgfTtcbiAgY29uc3QgcmFuZG9tbHlQbGFjZVNoaXAgPSAoKSA9PiB7XG4gICAgLy8gaW5zdGFudGlhdGUgc2hpcHNcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwRmFjdG9yeShcInN1Ym1hcmluZVwiKTtcbiAgICBjb25zdCBjYXJyaWVyID0gc2hpcEZhY3RvcnkoXCJjYXJyaWVyXCIpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeShcImJhdHRsZXNoaXBcIik7XG4gICAgY29uc3QgY3J1aXNlciA9IHNoaXBGYWN0b3J5KFwiY3J1aXNlclwiKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwRmFjdG9yeShcImRlc3Ryb3llclwiKTtcbiAgICAvLyBsZXQgeyBzaGlwTGlzdCB9ID0gcGxheWVyR2FtZUJvYXJkO1xuXG4gICAgcGxheWVyR2FtZUJvYXJkLnNoaXBMaXN0LnB1c2goXG4gICAgICBzdWJtYXJpbmUsXG4gICAgICBjYXJyaWVyLFxuICAgICAgYmF0dGxlc2hpcCxcbiAgICAgIGNydWlzZXIsXG4gICAgICBkZXN0cm95ZXJcbiAgICApO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggc2hpcCBhbmQgcGxhY2UgdGhlbSBpbiB0aGUgYm9hcmRcbiAgICBwbGF5ZXJHYW1lQm9hcmQuc2hpcExpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbGV0IHNoaXBJbml0aWFsUG9zaXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBjb25zdCBzaGlwRGlyZWN0aW9uID0gcmFuZG9tTnVtYmVyID09PSAwID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG4gICAgICBwbGF5ZXJHYW1lQm9hcmQuc2V0U2hpcERpcmVjdGlvbihzaGlwLCBzaGlwRGlyZWN0aW9uKTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgMSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwLCBzaGlwSW5pdGlhbFBvc2l0aW9uKSA9PT0gXCJOb3QgVmFsaWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwSW5pdGlhbFBvc2l0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTkpO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcCwgc2hpcEluaXRpYWxQb3NpdGlvbikgIT09IFwiTm90IFZhbGlkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHBsYXllckdhbWVCb2FyZCxcbiAgICBhdHRhY2ssXG4gICAgcmFuZG9tQXR0YWNrLFxuICAgIHJhbmRvbWx5UGxhY2VTaGlwLFxuICAgIGlzVHVybk92ZXIsXG4gIH07XG59XG4iLCJjb25zdCByZW5kZXJHYW1lQm9hcmQgPSAocGFyZW50RWxlbWVudCwgZ2FtZUJvYXJkLCBoaWRlR3JpZCkgPT4ge1xuICAvL3JlbW92ZSBhbHJlYWR5IHJlbmRlcmVkIGVsZW1lbnRzXG4gIHdoaWxlIChwYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgcGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfVxuICBnYW1lQm9hcmQuZm9yRWFjaCgoZ3JpZCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBncmlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpZiAoZ3JpZCA9PT0gXCJNaXNzZWRcIikge1xuICAgICAgZ3JpZERpdi5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAgIH0gZWxzZSBpZiAoZ3JpZCA9PT0gXCJIaXRcIikge1xuICAgICAgZ3JpZERpdi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIH0gZWxzZSBpZiAoZ3JpZCAhPT0gXCJcIiAmJiBoaWRlR3JpZCAhPT0gdHJ1ZSkge1xuICAgICAgZ3JpZERpdi5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWRcIik7XG4gICAgfVxuICAgIGdyaWREaXYuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gICAgZ3JpZERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbmRleCk7XG5cbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGdyaWREaXYpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhbWVCb2FyZDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXBGYWN0b3J5KG5hbWUpIHtcbiAgbGV0IGxlbmd0aDtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSBcImNhcnJpZXJcIjpcbiAgICAgIGxlbmd0aCA9IDU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYmF0dGxlc2hpcFwiOlxuICAgICAgbGVuZ3RoID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjcnVpc2VyXCI6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN1Ym1hcmluZVwiOlxuICAgICAgbGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkZXN0cm95ZXJcIjpcbiAgICAgIGxlbmd0aCA9IDI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGlkID0gbmFtZTtcbiAgY29uc3QgaGl0UG9zaXRpb25zID0gW107XG4gIGxldCBzaGlwRGlyZWN0aW9uID0gXCJcIjtcbiAgLyogIGNvbnN0IHNldFNoaXBEaXJlY3Rpb24gPSAoZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiAoc2hpcERpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChzaGlwRGlyZWN0aW9uID0gZGlyZWN0aW9uKTtcbiAgICB9XG4gIH07ICovXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIGhpdFBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICByZXR1cm4gaGl0UG9zaXRpb25zW2hpdFBvc2l0aW9ucy5sZW5ndGggLSAxXTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdFBvc2l0aW9ucy5sZW5ndGggPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8vIHNoaXBMaXN0LnB1c2goeyBpZCwgbGVuZ3RoLCBoaXQsIGlzU3VuaywgaGl0UG9zaXRpb25zIH0pO1xuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGxlbmd0aCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIHNoaXBEaXJlY3Rpb24sXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGxheWVyRmFjdG9yeSBmcm9tIFwiLi9wbGF5ZXJGYWN0b3J5XCI7XG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcbmltcG9ydCByZW5kZXJHYW1lQm9hcmQgZnJvbSBcIi4vcmVuZGVyR2FtZUJvYXJkXCI7XG5pbXBvcnQgXCIuLi9zcmMvc3R5bGUuc2Nzc1wiO1xuXG5sZXQgaGFzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuY29uc3QgcGxheWVyQSA9IHBsYXllckZhY3RvcnkoXCJwbGF5ZXIgQVwiKTtcbmNvbnN0IHN1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KFwic3VibWFyaW5lXCIpO1xuY29uc3QgY2FycmllciA9IHNoaXBGYWN0b3J5KFwiY2FycmllclwiKTtcbmNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeShcImJhdHRsZXNoaXBcIik7XG5jb25zdCBjcnVpc2VyID0gc2hpcEZhY3RvcnkoXCJjcnVpc2VyXCIpO1xuY29uc3QgZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoXCJkZXN0cm95ZXJcIik7XG5jb25zdCBib2FyZE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtMVwiKTtcbmNvbnN0IHsgcGxheWVyR2FtZUJvYXJkIH0gPSBwbGF5ZXJBO1xuY29uc3QgeyBnYW1lQm9hcmQgfSA9IHBsYXllckdhbWVCb2FyZDtcblxuY29uc3QgcGNQbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KFwiUEMgUGxheWVyXCIpO1xuY29uc3QgYm9hcmRUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTJcIik7XG5jb25zdCBwY1BsYXllckdhbWVCb2FyZCA9IHBjUGxheWVyLnBsYXllckdhbWVCb2FyZDtcbmNvbnN0IHBjR2FtZUJvYXJkID0gcGNQbGF5ZXJHYW1lQm9hcmQuZ2FtZUJvYXJkO1xuXG5jb25zdCB3aW5uZXJNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXItbWVzc2FnZVwiKTtcbmNvbnN0IHdpbm5lck1lc3NhZ2VUZXh0ID0gd2lubmVyTWVzc2FnZS5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1tZXNzYWdlLXRleHRcIik7XG5sZXQgZHJhZ0NvdW50ID0gMDtcbmxldCBkcmFnZ2VkU2hpcCA9IG51bGw7XG5cbnBsYXllckdhbWVCb2FyZC5zaGlwTGlzdC5wdXNoKFxuICBzdWJtYXJpbmUsXG4gIGNhcnJpZXIsXG4gIGJhdHRsZXNoaXAsXG4gIGNydWlzZXIsXG4gIGRlc3Ryb3llclxuKTtcblxuZnVuY3Rpb24gaXNHYW1lT3ZlcihvcHBvc2l0aW9uR2FtZUJvYXJkLCBwbGF5ZXIpIHtcbiAgaWYgKG9wcG9zaXRpb25HYW1lQm9hcmQuaGFzRXZlcnlTaGlwU3VuaygpKSB7XG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyKTtcbiAgICB3aW5uZXJNZXNzYWdlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICBpZiAocGxheWVyLm5hbWUgPT09IFwicGxheWVyIEFcIilcbiAgICAgIHdpbm5lck1lc3NhZ2VUZXh0LnRleHRDb250ZW50ID0gYFlvdSBXb24gVGhlIEdhbWUuYDtcbiAgfSBlbHNlIGlmIChwbGF5ZXIubmFtZSA9PT0gXCJQQyBQbGF5ZXJcIikge1xuICAgIHdpbm5lck1lc3NhZ2VUZXh0LnRleHRDb250ZW50ID0gYFRoZSBDb21wdXRlIFdvbiBUaGUgR2FtZS5gO1xuICB9XG59XG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIHJlbmRlckdhbWVCb2FyZChib2FyZE9uZSwgZ2FtZUJvYXJkKTtcblxuICAvLyBwbGF5ZXIgdHVybiBjb250cm9sbGVyXG4gIGxldCB0dXJuQ291bnQgPSAwO1xuXG4gIC8vIGRlbGF5IHJlbmRlcmluZyBvZiBib2FyZCBpZiBwYyBzdWNjZXNzZnVsbHkgYXR0YWNrcyBhIHNoaXBcbiAgZnVuY3Rpb24gbG9vcFJhbmRvbUF0dGFjaygpIHtcbiAgICBib2FyZE9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgYm9hcmRUd28uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGNQbGF5ZXIucmFuZG9tQXR0YWNrKHBsYXllckdhbWVCb2FyZCk7XG4gICAgICByZW5kZXJHYW1lQm9hcmQoYm9hcmRPbmUsIGdhbWVCb2FyZCk7XG4gICAgICBpc0dhbWVPdmVyKHBsYXllckdhbWVCb2FyZCwgcGNQbGF5ZXIpO1xuICAgICAgaWYgKCFwbGF5ZXJHYW1lQm9hcmQuaXNTaGlwSGl0KCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgc2Vjb25kIGlmIHN0YXRlbWVudFwiKTtcbiAgICAgICAgdHVybkNvdW50ID0gMDtcbiAgICAgICAgYm9hcmRUd28uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgICBib2FyZE9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb29wUmFuZG9tQXR0YWNrKCk7XG4gICAgICB9XG4gICAgfSwgODAwKTtcbiAgfVxuXG4gIGlmICh0dXJuQ291bnQgPT09IDApIHtcbiAgICBib2FyZFR3by5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGxldCB7IGlzVHVybk92ZXIgfSA9IHBsYXllckE7XG4gICAgICBwbGF5ZXJBLmF0dGFjayhlLnRhcmdldC5pZCwgcGNQbGF5ZXJHYW1lQm9hcmQpO1xuICAgICAgcmVuZGVyR2FtZUJvYXJkKGJvYXJkVHdvLCBwY0dhbWVCb2FyZCwgdHJ1ZSk7XG4gICAgICBpc0dhbWVPdmVyKHBjUGxheWVyR2FtZUJvYXJkLCBwbGF5ZXJBKTtcbiAgICAgIGJvYXJkT25lLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcblxuICAgICAgLy9pZiBwbGF5ZXIgbWlzc2VzLCBpdCdzIHRoZSBvdGhlciBwbGF5ZXIncyB0dXJuXG4gICAgICBpZiAoaXNUdXJuT3ZlcigpICYmICFwY1BsYXllckdhbWVCb2FyZC5pc1NoaXBIaXQoKSkge1xuICAgICAgICB0dXJuQ291bnQgPSAxO1xuICAgICAgICBib2FyZE9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG5cbiAgICAgICAgbG9vcFJhbmRvbUF0dGFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbnJlbmRlckdhbWVCb2FyZChib2FyZE9uZSwgZ2FtZUJvYXJkKTtcblxucGNQbGF5ZXIucmFuZG9tbHlQbGFjZVNoaXAoKTtcbnJlbmRlckdhbWVCb2FyZChib2FyZFR3bywgcGNHYW1lQm9hcmQsIHRydWUpO1xuXG5pZiAoIWhhc0dhbWVTdGFydGVkKSB7XG4gIGNvbnN0IGluaXRpYWxNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbml0aWFsLW1lc3NhZ2VcIik7XG4gIGNvbnN0IGJvYXJkID0gaW5pdGlhbE1lc3NhZ2UucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcbiAgY29uc3Qgc2hpcHMgPSBpbml0aWFsTWVzc2FnZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gIGNvbnN0IGRyYWdnYWJsZVNoaXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICBsZXQgZHJhZ2dlZFNoaXAgPSBudWxsO1xuICBib2R5LmNsYXNzTGlzdC5hZGQoXCJwbGFjZS1zaGlwXCIpO1xuXG4gIHJlbmRlckdhbWVCb2FyZChib2FyZCwgZ2FtZUJvYXJkKTtcblxuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgIGxldCByb3RhdGVkU2hpcCA9IHBsYXllckdhbWVCb2FyZC5zaGlwTGlzdC5maWx0ZXIoXG4gICAgICAgIChzaGlwKSA9PiBzaGlwLmlkID09IGUudGFyZ2V0LmNsYXNzTmFtZVxuICAgICAgKTtcbiAgICAgIGlmIChzaGlwLmNsYXNzTmFtZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIHBsYXllckdhbWVCb2FyZC5zZXRTaGlwRGlyZWN0aW9uKHJvdGF0ZWRTaGlwWzBdLCBcImhvcml6b250YWxcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuc2V0U2hpcERpcmVjdGlvbihyb3RhdGVkU2hpcFswXSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocm90YXRlZFNoaXApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBkcmFnZ2FibGVTaGlwTGlzdC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coc2hpcC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG4gICAgICBkcmFnZ2VkU2hpcCA9IHBsYXllckdhbWVCb2FyZC5zaGlwTGlzdC5maWx0ZXIoXG4gICAgICAgIChzaGlwKSA9PiBzaGlwLmlkID09PSBlLnRhcmdldC5jbGFzc05hbWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gaWYgKGRyYWdDb3VudCA9PT0gMCkge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJlbnRlclwiLCBlKTtcbiAgICAvLyAgIGlmIChlLmZyb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgLy8gICAgIGRyYWdnZWRTaGlwID0gcGxheWVyR2FtZUJvYXJkLnNoaXBMaXN0LmZpbHRlcihcbiAgICAvLyAgICAgICAoc2hpcCkgPT4gc2hpcC5pZCA9PT0gZS5mcm9tRWxlbWVudC5jbGFzc05hbWVcbiAgICAvLyAgICAgKTtcbiAgICAvLyAgICAgZHJhZ0NvdW50Kys7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZHJhZyBlbmRcIiwgZSk7XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRyb3BcIiwgZSk7XG4gICAgZHJhZ0NvdW50ID0gMDtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiZ3JpZFwiKSkge1xuICAgICAgbGV0IHNoaXBzID0gaW5pdGlhbE1lc3NhZ2UucXVlcnlTZWxlY3RvcihcIi5zaGlwc1wiKTtcbiAgICAgIGxldCBzaGlwVG9CZVJlbW92ZWQgPSBpbml0aWFsTWVzc2FnZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLiR7ZHJhZ2dlZFNoaXBbMF0uaWR9YFxuICAgICAgKTtcbiAgICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoZHJhZ2dlZFNoaXBbMF0sIE51bWJlcihlLnRhcmdldC5pZCkpO1xuICAgICAgLy8gY29uc29sZS5sb2coZHJhZ2dlZFNoaXApO1xuICAgICAgZHJhZ2dlZFNoaXAgPSBudWxsO1xuICAgICAgc2hpcFRvQmVSZW1vdmVkLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICByZW5kZXJHYW1lQm9hcmQoYm9hcmQsIGdhbWVCb2FyZCk7XG4gICAgICBpZiAoIXNoaXBzLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInBsYWNlLXNoaXBcIik7XG4gICAgICAgIGhhc0dhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==