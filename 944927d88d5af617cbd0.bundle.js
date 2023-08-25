/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Current_Weather.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Current_Weather.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Current-Weather.Main-Container {
  grid-column: 1/4;
  grid-row: 3/8;

  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 1fr);

  margin-left: 35px;
  margin-right: 60px;
}

.Current-Weather.Condition-Text {
  font-size: 3.2rem;
  font-weight: 500;

  margin-bottom: 35px;

  grid-column: 1/2;
  grid-row: 2/4;
}

.Current-Weather.Temp {
  font-size: 2.1rem;

  grid-column: 1/2;
  grid-row: 4/5;

  margin-left: 15px;
  margin-top: 10px;
}

.Current-Weather.Feels-Like-Temp {
  font-size: 0.7rem;

  grid-column: 1/2;
  grid-row: 5/6;

  margin-left: 15px;
}

.Current-Weather.Precip {
  font-size: 1.6rem;

  grid-column: 1/2;
  grid-row: 6/7;

  margin-left: 15px;
}

.Current-Weather.Humidity {
  justify-self: flex-end;
  align-self: flex-end;

  grid-column: 2/3;
  grid-row: 2/3;

  padding-bottom: 15px;

  font-size: 1.5rem;
}

.Current-Weather.Visibility {
  justify-self: flex-end;

  grid-column: 2/3;
  grid-row: 3/4;

  font-size: 1.1rem;
}

.Current-Weather.Wind-Direction {
  justify-self: flex-end;
  align-self: flex-end;

  grid-column: 2/3;
  grid-row: 4/5;

  margin-bottom: 5px;
  margin-right: 15px;

  font-size: 0.9rem;
}

.Current-Weather.Wind-Degree {
  justify-self: flex-end;
  align-self: center;

  grid-column: 2/3;
  grid-row: 5/6;

  margin-right: 15px;

  font-size: 0.9rem;
}

.Current-Weather.Wind-Speed {
  justify-self: flex-end;
  align-self: flex-start;

  grid-column: 2/3;
  grid-row: 6/7;

  margin-top: 5px;
  margin-right: 15px;

  font-size: 0.9rem;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/Current_Weather.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;;EAEb,aAAa;;EAEb,qCAAqC;EACrC,kCAAkC;;EAElC,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;;EAEhB,mBAAmB;;EAEnB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,iBAAiB;;EAEjB,gBAAgB;EAChB,aAAa;;EAEb,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;;EAEjB,gBAAgB;EAChB,aAAa;;EAEb,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;;EAEjB,gBAAgB;EAChB,aAAa;;EAEb,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;;EAEpB,gBAAgB;EAChB,aAAa;;EAEb,oBAAoB;;EAEpB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;;EAEtB,gBAAgB;EAChB,aAAa;;EAEb,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;;EAEpB,gBAAgB;EAChB,aAAa;;EAEb,kBAAkB;EAClB,kBAAkB;;EAElB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;;EAElB,gBAAgB;EAChB,aAAa;;EAEb,kBAAkB;;EAElB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;;EAEtB,gBAAgB;EAChB,aAAa;;EAEb,eAAe;EACf,kBAAkB;;EAElB,iBAAiB;AACnB","sourcesContent":[".Current-Weather.Main-Container {\r\n  grid-column: 1/4;\r\n  grid-row: 3/8;\r\n\r\n  display: grid;\r\n\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: repeat(7, 1fr);\r\n\r\n  margin-left: 35px;\r\n  margin-right: 60px;\r\n}\r\n\r\n.Current-Weather.Condition-Text {\r\n  font-size: 3.2rem;\r\n  font-weight: 500;\r\n\r\n  margin-bottom: 35px;\r\n\r\n  grid-column: 1/2;\r\n  grid-row: 2/4;\r\n}\r\n\r\n.Current-Weather.Temp {\r\n  font-size: 2.1rem;\r\n\r\n  grid-column: 1/2;\r\n  grid-row: 4/5;\r\n\r\n  margin-left: 15px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.Current-Weather.Feels-Like-Temp {\r\n  font-size: 0.7rem;\r\n\r\n  grid-column: 1/2;\r\n  grid-row: 5/6;\r\n\r\n  margin-left: 15px;\r\n}\r\n\r\n.Current-Weather.Precip {\r\n  font-size: 1.6rem;\r\n\r\n  grid-column: 1/2;\r\n  grid-row: 6/7;\r\n\r\n  margin-left: 15px;\r\n}\r\n\r\n.Current-Weather.Humidity {\r\n  justify-self: flex-end;\r\n  align-self: flex-end;\r\n\r\n  grid-column: 2/3;\r\n  grid-row: 2/3;\r\n\r\n  padding-bottom: 15px;\r\n\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.Current-Weather.Visibility {\r\n  justify-self: flex-end;\r\n\r\n  grid-column: 2/3;\r\n  grid-row: 3/4;\r\n\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.Current-Weather.Wind-Direction {\r\n  justify-self: flex-end;\r\n  align-self: flex-end;\r\n\r\n  grid-column: 2/3;\r\n  grid-row: 4/5;\r\n\r\n  margin-bottom: 5px;\r\n  margin-right: 15px;\r\n\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.Current-Weather.Wind-Degree {\r\n  justify-self: flex-end;\r\n  align-self: center;\r\n\r\n  grid-column: 2/3;\r\n  grid-row: 5/6;\r\n\r\n  margin-right: 15px;\r\n\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.Current-Weather.Wind-Speed {\r\n  justify-self: flex-end;\r\n  align-self: flex-start;\r\n\r\n  grid-column: 2/3;\r\n  grid-row: 6/7;\r\n\r\n  margin-top: 5px;\r\n  margin-right: 15px;\r\n\r\n  font-size: 0.9rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Forecast.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Forecast.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Forecast.Main-Container {
  grid-column: 1/4;
  grid-row: 8/9;

  display: flex;

  justify-content: center;
  align-items: center;
}

.Forecast-Day.Card-Container {
  width: 150px;
  height: 175px;

  margin: 20px;
  padding: 10px;

  border-radius: 7.5px;

  background-color: rgba(0, 0, 0, 0.6);

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr repeat(5, 2fr);
}

.Forecast-Day.Date {
  font-size: 0.6rem;

  text-decoration: underline;
}

.Forecast-Day.Condition-Image {
  aspect-ratio: 1/1;
  height: 75px;

  justify-self: center;
  align-items: center;

  grid-row: 2/3;
}

.Forecast-Day.Condition-Text {
  font-size: 0.9rem;
  font-weight: 600;

  grid-row: 3/4;
  justify-self: center;
  align-items: center;

  margin-bottom: 7px;
}

.Forecast-Day.Temp-High,
.Forecast-Day.Temp-Low,
.Forecast-Day.Total-Precip {
  font-size: 0.7rem;

  justify-self: center;
  align-items: center;

  margin: 2px;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/Forecast.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;;EAEb,aAAa;;EAEb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,YAAY;EACZ,aAAa;;EAEb,oBAAoB;;EAEpB,oCAAoC;;EAEpC,aAAa;;EAEb,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;;EAEjB,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,YAAY;;EAEZ,oBAAoB;EACpB,mBAAmB;;EAEnB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;;EAEhB,aAAa;EACb,oBAAoB;EACpB,mBAAmB;;EAEnB,kBAAkB;AACpB;;AAEA;;;EAGE,iBAAiB;;EAEjB,oBAAoB;EACpB,mBAAmB;;EAEnB,WAAW;AACb","sourcesContent":[".Forecast.Main-Container {\r\n  grid-column: 1/4;\r\n  grid-row: 8/9;\r\n\r\n  display: flex;\r\n\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.Forecast-Day.Card-Container {\r\n  width: 150px;\r\n  height: 175px;\r\n\r\n  margin: 20px;\r\n  padding: 10px;\r\n\r\n  border-radius: 7.5px;\r\n\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n\r\n  display: grid;\r\n\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 1fr repeat(5, 2fr);\r\n}\r\n\r\n.Forecast-Day.Date {\r\n  font-size: 0.6rem;\r\n\r\n  text-decoration: underline;\r\n}\r\n\r\n.Forecast-Day.Condition-Image {\r\n  aspect-ratio: 1/1;\r\n  height: 75px;\r\n\r\n  justify-self: center;\r\n  align-items: center;\r\n\r\n  grid-row: 2/3;\r\n}\r\n\r\n.Forecast-Day.Condition-Text {\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n\r\n  grid-row: 3/4;\r\n  justify-self: center;\r\n  align-items: center;\r\n\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.Forecast-Day.Temp-High,\r\n.Forecast-Day.Temp-Low,\r\n.Forecast-Day.Total-Precip {\r\n  font-size: 0.7rem;\r\n\r\n  justify-self: center;\r\n  align-items: center;\r\n\r\n  margin: 2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/General_Info.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/General_Info.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.General-Info.Main-Container {
  grid-column: 1/4;
  grid-row: 1/2;

  display: flex;

  justify-content: center;
  align-items: center;

  padding-left: 40px;
}

.General-Info.Location {
  font-size: 2.1rem;

  display: inherit;

  width: 100%;
  height: 100%;

  align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/General_Info.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;;EAEb,aAAa;;EAEb,uBAAuB;EACvB,mBAAmB;;EAEnB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;;EAEjB,gBAAgB;;EAEhB,WAAW;EACX,YAAY;;EAEZ,mBAAmB;AACrB","sourcesContent":[".General-Info.Main-Container {\r\n  grid-column: 1/4;\r\n  grid-row: 1/2;\r\n\r\n  display: flex;\r\n\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  padding-left: 40px;\r\n}\r\n\r\n.General-Info.Location {\r\n  font-size: 2.1rem;\r\n\r\n  display: inherit;\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  align-items: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Main.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Main.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Background.gif */ "./src/assets/Background.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=REM:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-family: "REM", sans-serif;
  color: white;
}

body {
  padding-inline: 30px;

  box-sizing: border-box;

  height: 100vh;
  width: 100vw;

  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.Weather-App.Main-Container {
  width: 100%;
  height: 100%;

  display: grid;

  box-sizing: border-box;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px repeat(8, 1fr);
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/Main.css"],"names":[],"mappings":"AAEA;EACE,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,oBAAoB;;EAEpB,sBAAsB;;EAEtB,aAAa;EACb,YAAY;;EAEZ,yDAAiD;;EAEjD,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,aAAa;;EAEb,sBAAsB;;EAEtB,qCAAqC;EACrC,wCAAwC;AAC1C","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=REM:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\r\n\r\n:root {\r\n  font-family: \"REM\", sans-serif;\r\n  color: white;\r\n}\r\n\r\nbody {\r\n  padding-inline: 30px;\r\n\r\n  box-sizing: border-box;\r\n\r\n  height: 100vh;\r\n  width: 100vw;\r\n\r\n  background-image: url(\"../assets/Background.gif\");\r\n\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.Weather-App.Main-Container {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: grid;\r\n\r\n  box-sizing: border-box;\r\n\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: 100px repeat(8, 1fr);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Reset.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Reset.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/Reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/UI.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/UI.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.User-Interface-Containers.Main-Container {
  grid-column: 2/3;
  grid-row: 7/8;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  box-sizing: border-box;
}

.Search-Bar-Input.Weather-Location {
  width: 300px;
  height: 30px;

  padding: 3px;

  margin-bottom: 10px;

  border-radius: 10px;
  border: none;

  background-color: white;
  color: white;

  font-size: 1rem;
  font-weight: 500;

  transition: background-color 0.2s ease;
}

.Search-Bar-Input.Weather-Location:focus {
  outline: 1.5px solid white;

  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: none;

  transition: background-color 0.2s ease;
}

.User-Interface-Containers.Button-Container {
  display: inherit;

  align-items: center;
}

.User-Interface-Buttons {
  margin-inline: 5px;

  height: 30px;

  font-weight: 600;

  border-radius: 10px;
  border: none;

  background-color: rgba(0, 0, 0, 0.75);
  color: white;

  transition: background-color 0.2s ease;
}

.User-Interface-Buttons:hover {
  cursor: pointer;

  outline: none;
  background-color: white;

  color: rgb(65, 65, 65);
}
`, "",{"version":3,"sources":["webpack://./src/stylesheets/UI.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;;EAEb,WAAW;EACX,YAAY;;EAEZ,aAAa;EACb,sBAAsB;;EAEtB,uBAAuB;EACvB,mBAAmB;;EAEnB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;;EAEZ,YAAY;;EAEZ,mBAAmB;;EAEnB,mBAAmB;EACnB,YAAY;;EAEZ,uBAAuB;EACvB,YAAY;;EAEZ,eAAe;EACf,gBAAgB;;EAEhB,sCAAsC;AACxC;;AAEA;EACE,0BAA0B;;EAE1B,oCAAoC;EACpC,gBAAgB;;EAEhB,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;;EAEhB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,YAAY;;EAEZ,gBAAgB;;EAEhB,mBAAmB;EACnB,YAAY;;EAEZ,qCAAqC;EACrC,YAAY;;EAEZ,sCAAsC;AACxC;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,uBAAuB;;EAEvB,sBAAsB;AACxB","sourcesContent":[".User-Interface-Containers.Main-Container {\r\n  grid-column: 2/3;\r\n  grid-row: 7/8;\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  box-sizing: border-box;\r\n}\r\n\r\n.Search-Bar-Input.Weather-Location {\r\n  width: 300px;\r\n  height: 30px;\r\n\r\n  padding: 3px;\r\n\r\n  margin-bottom: 10px;\r\n\r\n  border-radius: 10px;\r\n  border: none;\r\n\r\n  background-color: white;\r\n  color: white;\r\n\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n\r\n  transition: background-color 0.2s ease;\r\n}\r\n\r\n.Search-Bar-Input.Weather-Location:focus {\r\n  outline: 1.5px solid white;\r\n\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  box-shadow: none;\r\n\r\n  transition: background-color 0.2s ease;\r\n}\r\n\r\n.User-Interface-Containers.Button-Container {\r\n  display: inherit;\r\n\r\n  align-items: center;\r\n}\r\n\r\n.User-Interface-Buttons {\r\n  margin-inline: 5px;\r\n\r\n  height: 30px;\r\n\r\n  font-weight: 600;\r\n\r\n  border-radius: 10px;\r\n  border: none;\r\n\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n  color: white;\r\n\r\n  transition: background-color 0.2s ease;\r\n}\r\n\r\n.User-Interface-Buttons:hover {\r\n  cursor: pointer;\r\n\r\n  outline: none;\r\n  background-color: white;\r\n\r\n  color: rgb(65, 65, 65);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/stylesheets/Current_Weather.css":
/*!*********************************************!*\
  !*** ./src/stylesheets/Current_Weather.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Current_Weather_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Current_Weather.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Current_Weather.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Current_Weather_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Current_Weather_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Current_Weather_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Current_Weather_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/Forecast.css":
/*!**************************************!*\
  !*** ./src/stylesheets/Forecast.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Forecast_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Forecast.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Forecast.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/General_Info.css":
/*!******************************************!*\
  !*** ./src/stylesheets/General_Info.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_General_Info_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./General_Info.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/General_Info.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_General_Info_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_General_Info_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_General_Info_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_General_Info_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/Main.css":
/*!**********************************!*\
  !*** ./src/stylesheets/Main.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Main.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/Reset.css":
/*!***********************************!*\
  !*** ./src/stylesheets/Reset.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/Reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/UI.css":
/*!********************************!*\
  !*** ./src/stylesheets/UI.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_UI_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./UI.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/UI.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_UI_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_UI_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_UI_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_UI_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/Level-0/Api-Interfaces.js":
/*!***********************************************!*\
  !*** ./src/modules/Level-0/Api-Interfaces.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherApi: () => (/* binding */ WeatherApi)
/* harmony export */ });
//API INTERFACES THAT EXTEND FROM THE TEMPLATE SHOULD ALWAYS RETURN THE FETCH PROMISE FOR THEIR APIS
//THIS WAY THE API INTERACTION CAN BE MODULARIZED AND WHOEVER USES THE API INSTANCE CAN CONFIGURE THEIR OWN
//FUNCTIONALITY RELATING TO THE API REQUEST PROMISE. ALL THESE CLASSES DO IS PROVIDE A STRAIGHT FORWARD
//WAY TO MAKE FETCH REQUESTS TO SPECIFIC APIS, THATS IT.

class ApiInterface {
  //the purpose of this class is to act as a generic template that specific api
  //interfacing classes can extend to and create their specific functionalities with
  //using the general fetch methods within this template

  //--------------------STATE-AND-CONFIG-DATA----------------------//

  defaultOptions = {
    get: {
      method: "get",
    },
    post: {
      method: "post",
      //part of sending data to the server
      headers: {
        "Content-Type": "application/json",
      },
      body: null, //should be JSON data
    },
    put: {
      method: "put",
      //part of sending data to the server
      headers: {
        "Content-Type": "application/json",
      },
      body: null, //should be JSON data
    },
    delete: {
      method: "delete",
    },
  };

  //-----------------------HELPER-METHODS---------------------------//

  addPayload(options, payload) {
    const convertedPayload = this.convertPayloadToJSON(payload);
    options.body = convertedPayload;

    return options;
  }

  convertPayloadToJSON(payload) {
    const convertedPayload = JSON.stringify(payload);
    return convertedPayload;
  }

  processResponseAsJSON = async (response) => {
    const processedResponse = await response.json();
    return processedResponse;
  };

  //------------------------API-INTERACTION--------------------------/

  requestMethods = {
    get: async (url, options = this.defaultOptions.get) => {
      try {
        const resp = await fetch(url, options); //await a response first

        //if the request was successful
        if (resp.ok === true) {
          const parsedData = await this.processResponseAsJSON(resp);
          return parsedData;
        } else {
          //if the request failed for some reason
          throw new Error(
            `GET Request to the desired api failed, target api is '${this.configData.apiName}', '${resp.status}: ${resp.statusText}'`
          );
        }
      } catch (error) {
        console.error(error, error.stack);
      }
    },
    post: async (url, options = this.defaultOptions.post, payload) => {
      try {
        const finalOptions = this.addPayload(options, payload);

        const resp = await fetch(url, finalOptions);
        //if the request was successful
        if (resp.ok === true) {
          const parsedData = await this.processResponseAsJSON(resp);
          return parsedData;
        } else {
          //if the request failed for some reason
          throw new Error(
            `POST Request to the desired api failed, target api is '${this.configData.apiName}', '${resp.status}: ${resp.statusText}'`
          );
        }
      } catch (error) {
        console.error(error, error.stack);
      }
    },
    put: async (url, options = this.defaultOptions.put, payload) => {
      try {
        const finalOptions = this.addPayload(options, payload);

        const resp = await fetch(url, finalOptions);
        //if the request was successful
        if (resp.ok === true) {
          const parsedData = await this.processResponseAsJSON(resp);
          return parsedData;
        } else {
          //if the request failed for some reason
          throw new Error(
            `PUT Request to the desired api failed, target api is '${this.configData.apiName}', '${resp.status}: ${resp.statusText}'`
          );
        }
      } catch (error) {
        console.error(error, error.stack);
      }
    },
    delete: async (url, options = this.defaultOptions.delete) => {
      try {
        const resp = await fetch(url, options); //await a response first

        //if the request was successful
        if (resp.ok === true) {
          const parsedData = await this.processResponseAsJSON(resp);
          return parsedData;
        } else {
          //if the request failed for some reason
          throw new Error(
            `DELETE Request to the desired api failed, target api is '${this.configData.apiName}', '${resp.status}: ${resp.statusText}'`
          );
        }
      } catch (error) {
        console.error(error, error.stack);
      }
    },
  };
}

class WeatherApi extends ApiInterface {
  constructor(apiKey) {
    super(); //call parent constructor

    this.#argValidator("constructor", { apiKey });

    //define the configuration for the weather api instance
    this.configData.apiName = "WeatherApi";
    this.configData.apiKey = apiKey;
  }

  //---------------------STATE-AND-CONFIG-DATA------------------//

  //the base template string, at which to add parameters, they are concatenated at the end of the string
  configData = {
    apiName: null,
    apiKey: null,
  };

  #urlTemplate = `http://api.weatherapi.com/v1/`;

  #endPoints = {
    current: `current.json?`,
    forecast: `forecast.json?`,
  };

  //---------------------ARGUMENT-VALIDATION--------------------//

  #argValidationData = {
    constructor: {
      apiKey: { type: "string" },
    },
    getCurrentWeather: {
      loc: { type: "string" },
    },
    getForecast: {
      loc: { type: "string" },
      days: { type: "number", posOrNeg: "positive" },
    },
  };

  //holds methods that actually do the validation of a specific supplied argument on one of its properties
  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
           received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
            needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
           received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
    posOrNeg: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (correctInstance === "positive") {
        if (suppliedArg !== Math.abs(suppliedArg)) {
          throw new Error(`Argument '${argName}' for method '${methodOrigin}' failed integer validation,
          received '${suppliedArg}' which is negative, but it needs to be positive`);
        }
      } else if (correctInstance === "negative") {
        if (suppliedArg === Math.abs(suppliedArg)) {
          throw new Error(`Argument '${argName}' for method '${methodOrigin}' failed integer validation,
          received '${suppliedArg}' which is positive, but it needs to be negative`);
        }
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
         corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //------------------------HELPER-METHODS-----------------------//

  #urlParams = {
    key: () => {
      return `key=${this.configData.apiKey}`;
    },
    location: (location) => {
      return `&q=${location}`;
    },
    numOfDays: (numOfDays) => {
      return `&days=${numOfDays}`;
    },
    airQuality: (boolean) => {
      let yesOrNo;

      if (boolean) {
        yesOrNo = "yes";
      } else {
        yesOrNo = "no";
      }
      return `&aqi=${yesOrNo}`;
    },
    weatherAlerts: (boolean) => {
      let yesOrNo;

      if (boolean) {
        yesOrNo = "yes";
      } else {
        yesOrNo = "no";
      }
      return `&alerts=${yesOrNo}`;
    },
  };

  //------------------------API-INTERFACE------------------------//

  //location method is the method to use to retrieve current weather data. Example: IP, city, etc.
  //location value is the corresponding value, so say the corresponding IP, or city, etc.
  getCurrentWeather(loc) {
    try {
      //validate input
      this.#argValidator("getCurrentWeather", { loc });

      //get the base url and the parameter string constructors
      const baseUrl = this.#urlTemplate,
        { key, location, airQuality, weatherAlerts } = this.#urlParams,
        { get } = this.requestMethods;

      //build the necessary parameters
      const endPointString = this.#endPoints.current,
        keyString = key(),
        locString = location(loc),
        airQualityString = airQuality(false),
        weatherAlertsString = weatherAlerts(false);

      //concat into the final url string
      const finalUrl =
        baseUrl +
        endPointString +
        keyString +
        locString +
        airQualityString +
        weatherAlertsString;

      //make a get request that returns a promise instance
      const requestPromise = get(finalUrl);

      return requestPromise;
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  getForecast(loc, days) {
    try {
      //validate input
      this.#argValidator("getForecast", { loc, days });

      //get the base url and the parameter string constructors
      const baseUrl = this.#urlTemplate,
        { key, location, numOfDays, airQuality, weatherAlerts } =
          this.#urlParams,
        { get } = this.requestMethods;

      //build the necessary parameters
      const endPointString = this.#endPoints.forecast,
        keyString = key(),
        locString = location(loc),
        numOfDaysString = numOfDays(days),
        airQualityString = airQuality(false),
        weatherAlertsString = weatherAlerts(false);

      //concat into the final url string
      const finalUrl =
        baseUrl +
        endPointString +
        keyString +
        locString +
        numOfDaysString +
        airQualityString +
        weatherAlertsString;

      //make a get request that returns a promise instance
      const requestPromise = get(finalUrl);

      return requestPromise;
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}


/***/ }),

/***/ "./src/modules/Level-0/Element-Ref-Manager.js":
/*!****************************************************!*\
  !*** ./src/modules/Level-0/Element-Ref-Manager.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementRefManager: () => (/* binding */ ElementRefManager)
/* harmony export */ });
class ElementRefManager {
  //acts as a means of managing all element references supplied to the class instance
  //highly reuseable as it can be applied to pretty much any front end feature

  #cache = new Map();

  //will be what actually manipulates the cache based on the instructions given, also returns any errors that it comes across when doing so
  #cacheManipulator(methodType, key, value) {
    const errors = [];

    if (typeof key === "string") {
      switch (methodType) {
        case "set":
          if (value instanceof Element) {
            this.#cache.set(key, value);
          } else {
            errors.push(
              new TypeError(
                `Supplied value to be stored within the element cache manager is not an element, received '${value}' as the value corresponding to the supplied key '${key}'`
              )
            );
          }
          break;
        case "get":
          const reference = this.#cache.get(key);
          return reference;
        case "delete":
          this.#cache.delete(key);
          break;
        default:
          errors.push(
            new SyntaxError(
              `Supplied 'methodType' argument value does not match any of the valid methods available to enact on the cache within '${this.constructor.name}', received '${methodType}' as the supplied method type`
            )
          );
      }
    } else {
      errors.push(
        new TypeError(
          `Supplied 'key' argument value is an incorrect data type, must be a string, received '${key}'`
        )
      );
    }

    this.#throwFoundErrors(errors);
  }

  //for throwing multiple errors found within an operation, so
  //that a try/catch can potentially handle multiple errors as opposed to say only one error at a time if needed
  #throwFoundErrors(errorArr) {
    if (errorArr.length > 0) {
      throw errorArr;
    }
  }

  //APIs for adding, removing, or retrieving stored element refs
  addRef(key, value) {
    try {
      this.#cacheManipulator("set", key, value);
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  deleteRef(key) {
    try {
      this.#cacheManipulator("delete", key);
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  retrieveRef(key) {
    try {
      return this.#cacheManipulator("get", key);
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  size() {
    return this.#cache.size;
  }
}


/***/ }),

/***/ "./src/modules/Level-1/Current-Location-Query.js":
/*!*******************************************************!*\
  !*** ./src/modules/Level-1/Current-Location-Query.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentLocationQuery: () => (/* binding */ CurrentLocationQuery)
/* harmony export */ });
//a way to ask for the current location, and then make an api request using said
//current location, then emit the data from the api request. This can be configured
//for any use case that may require using the users current location to get data
class CurrentLocationQuery {
  constructor(apiInstance, mediatorMethod) {
    try {
      this.#argValidator("constructor", { apiInstance, mediatorMethod }); //validate the args

      //save the args to the state, they will be used upon current location querying
      this.#helperClasses.apiInstance = apiInstance;

      this.#configData.mediatorMethod = mediatorMethod;
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //------------------ARGUMENT-VALIDATION-----------------------//

  #argValidationData = {
    constructor: {
      apiInstance: {
        instanceof: Object,
      },
      mediatorMethod: {
        type: "function",
      },
    },
    subscribe: {
      subName: {
        type: "string",
      },
      entryPointMethod: {
        type: "function",
      },
    },
    unsubscribe: {
      subName: {
        type: "string",
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                 needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
              corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //------------------STATE-AND-CONFIG-DATA---------------------//

  #configData = {
    mediatorMethod: null,
  };

  #stateData = {
    requestInProgress: false,
  };

  #helperClasses = {
    apiInstance: null,
  };

  //----------------------HELPER-METHODS------------------------//

  //make an api request utilizing the api instance and mediator method
  #makeApiRequest(lon, lat) {
    const { mediatorMethod } = this.#configData,
      { apiInstance } = this.#helperClasses,
      responsePromise = mediatorMethod(lon, lat, apiInstance);
    //faciliate the api request using the mediator method, this method will return the promise made by the api instance

    return responsePromise;
  }

  #extractCoords(locationData) {
    //should be an object returned from geolocation api full of location data, access the coordinates it has
    const { longitude, latitude } = locationData.coords;

    return { longitude, latitude }; //return both of these values in an obj
  }

  //request the current location of the user
  #requestCurrentLocation() {
    if (navigator.geolocation) {
      //create a promise for the current position data,
      //not going to facilitate any functionality relating to the outcome of said promise,
      //just returning a promise instance
      const positionPromise = new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );

      return positionPromise;
    } else {
      console.warn(
        `Browser does not support the geolocation api, failed to fetch current location`
      );
    }
  }

  //---------------------FETCH-DATA-PUB-SUB---------------------//

  //will be supplied to the SearchBar Functionality class subscription, so that the controller can emit
  //data from successful api requests
  #emitCurrentLocationWeatherData(apiData) {
    const numOfSubscribers = Object.keys(this.#subscribers).length;

    if (numOfSubscribers > 0) {
      for (let subscriber in this.#subscribers) {
        this.#subscribers[subscriber](apiData);
      }
    }
  }

  //list of subscribers with their corresponding methods to execute when a successful api request goes through
  #subscribers = {};

  subscribe(subName, entryPointMethod) {
    try {
      this.#argValidator("subscribe", { subName, entryPointMethod });

      if (!this.#subscribers.hasOwnProperty(subName)) {
        this.#subscribers[subName] = entryPointMethod;
      } else {
        throw new ReferenceError(
          `Failed to add a subscriber to the weather app search bar publisher, as the
             subscriber seems to already exist, received '${subName}' as the subscriber being added`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  unsubscribe(subName) {
    try {
      this.#argValidator("unsubscribe", { subName });

      if (this.#subscribers.hasOwnProperty(subName)) {
        delete this.#subscribers[subName];
      } else {
        throw new ReferenceError(
          `Failed to remove a subscriber from the weather app search bar publisher, as the
             subscriber attempting to be removed does not exist, received '${subName}' as the subscriber being removed`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //----------------------------APIs----------------------------//

  //api to ask the user for their location, and then use the location data to
  //make and api request
  requestCurrentLocation() {
    try {
      //check if a request is in progress or not
      if (!this.#stateData.requestInProgress) {
        this.#stateData.requestInProgress = true; //commence the request process

        const locationPromise = this.#requestCurrentLocation(), //this will activate the pop up that asks the user to give their current location
          classScope = this;

        locationPromise
          .then((locationData) => {
            const coords = this.#extractCoords(locationData); //grab the coords from the geolocation response
            return coords;
          })
          .then((coords) => {
            const { longitude, latitude } = coords,
              responsePromise = this.#makeApiRequest.bind(classScope)(
                longitude,
                latitude
              );
            //make an api request with these coordinates to the supplied api instance, should return a promise for said api request
            //need to bind the scope as well so the scope within the method execution doesn't point to the promise object

            return responsePromise; //return the promise instance
          })
          .then((responseData) => {
            this.#emitCurrentLocationWeatherData.bind(classScope)(responseData);
            //when the response is successful, emit the data to the subscribers,
            //need to bind the scope as well so the scope within the method execution doesn't point to the promise object
          })
          .catch((error) => {
            //if the user denied current location use
            if ((error.code = error.PERMISSION_DENIED)) {
              console.warn(
                `User declined to share location, corresponding api request cancelled`
              );
            } else {
              //if an actual error occurred
              console.error(error, error.stack);
            }
          })
          .finally(() => {
            this.#stateData.requestInProgress = false; //reset the state, the request is complete regardless if it succeeded or failed
          });
      } else {
        console.warn(
          `Attempting to make a current location query while another is still in progress`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}


/***/ }),

/***/ "./src/modules/Level-1/Search-Bar-Constructor.js":
/*!*******************************************************!*\
  !*** ./src/modules/Level-1/Search-Bar-Constructor.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchBarConstructor: () => (/* binding */ SearchBarConstructor)
/* harmony export */ });
/* harmony import */ var _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Level-0/Element-Ref-Manager */ "./src/modules/Level-0/Element-Ref-Manager.js");
 //requires this class reference for its argument validation

class SearchBarConstructor {
  constructor(argsObj) {
    try {
      this.#argValidator("constructor", argsObj);

      //reference the properties within the supplied argsObj
      const { uniqueIdentifier, elementReferenceManager, dynamicOptionsOn } =
        argsObj;

      //config data to determine some characteristics of the constructed search bar
      this.#configData.uniqueIdentifier = uniqueIdentifier;
      this.#configData.dynamicOptionsOn = dynamicOptionsOn;

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //class instance to store each individual element reference

      this.#completeSearchBar = this.#createSearchBarFrag(); //create the entire search bar fragment and save it to the state
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //--------------------ARGUMENT-VALIDATION-------------------------//

  #argValidationData = {
    //method
    constructor: {
      //args
      uniqueIdentifier: {
        //properties
        type: "string",
      },
      elementReferenceManager: { instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager },
      dynamicOptionsOn: { type: "boolean" },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
             received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
              needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
             received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
           corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //---------------------STATE-AND-CONFIG-DATA---------------------//

  #configData = {
    uniqueIdentifier: null, //used to distinguish instances, as well as make the search bar unique on the DOM
    dynamicOptionsOn: null, //decides whether to append a datalist and configure the input with it as well
  };

  #helperClasses = {
    elementReferenceManager: null, //used to store references instead of spam querying
  };

  #completeSearchBar = null;

  //--------------------ELEMENT-REFERENCE-CACHING-------------------//

  #storeElementRef(identifier, element) {
    this.#helperClasses.elementReferenceManager.addRef(identifier, element);
  }

  //----------------------ELEMENT-CONSTRUCTION----------------------//

  #elementConstructors = {
    form: () => {
      const formElement = document.createElement("form"),
        { uniqueIdentifier } = this.#configData;

      //define classes
      formElement.classList.add("Search-Bar-Form");
      formElement.classList.add(uniqueIdentifier);

      //define attributes
      formElement.setAttribute("novalidate", ""); //part of implementing the search bar functionality manually

      //store reference
      this.#storeElementRef("Search-Bar-Form", formElement);

      return formElement;
    },
    input: () => {
      const inputElement = document.createElement("input"),
        { uniqueIdentifier, dynamicOptionsOn } = this.#configData;

      //define classes
      inputElement.classList.add("Search-Bar-Input");
      inputElement.classList.add(uniqueIdentifier);

      //define attributes
      if (dynamicOptionsOn) {
        //if this search bar will feature dynamic options in some capacity
        //add the necessary attribute to link the data list to the input
        inputElement.setAttribute(
          "list",
          `Search-Bar-Data-List-${uniqueIdentifier}`
        );
      }

      //store reference
      this.#storeElementRef("Search-Bar-Input", inputElement);

      return inputElement;
    },
    dataList: () => {
      const dataListElement = document.createElement("datalist"),
        { uniqueIdentifier } = this.#configData;

      //define classes
      dataListElement.classList.add("Search-Bar-Data-List");
      dataListElement.classList.add(uniqueIdentifier);

      //define attributes
      dataListElement.setAttribute(
        "id",
        `Search-Bar-Data-List-${uniqueIdentifier}`
      ); //should match the list attribute value on the corresponding input field

      //store reference
      this.#storeElementRef("Search-Bar-Data-List", dataListElement);

      return dataListElement;
    },
  };

  //----------------------SEARCH-BAR-ASSEMBLY-----------------------//

  #createSearchBarFrag() {
    const { dynamicOptionsOn } = this.#configData;

    //create base search bar
    const formElement = this.#elementConstructors.form(),
      inputElement = this.#elementConstructors.input();

    formElement.append(inputElement);

    if (dynamicOptionsOn) {
      //transform search bar into one with a data list for dynamic options
      const dataListElement = this.#elementConstructors.dataList();

      formElement.append(dataListElement);

      return formElement; //return data list search bar
    } else {
      return formElement; //return base search bar
    }
  }

  //------------------------------APIs------------------------------//

  returnSearchBarFragment() {
    return this.#completeSearchBar;
    //return the complete search bar that was constructed and save to state upon the class instance being made
  }
}


/***/ }),

/***/ "./src/modules/Level-1/Search-Bar-Functionality.js":
/*!*********************************************************!*\
  !*** ./src/modules/Level-1/Search-Bar-Functionality.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchBarFunctionality: () => (/* binding */ SearchBarFunctionality)
/* harmony export */ });
class SearchBarFunctionality {
  constructor(argsObj) {
    try {
      this.#argValidator("constructor", argsObj);

      //apply args to state and config
      const { searchBarForm, searchBarInput } = argsObj;

      //save some important references to state
      this.#elementReferences.searchBarForm = searchBarForm;
      this.#elementReferences.searchBarInput = searchBarInput;
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //------------------ARGUMENT-VALIDATION-----------------------//

  #argValidationData = {
    //methods
    constructor: {
      //args
      searchBarForm: {
        instanceof: Element,
      },
      searchBarInput: {
        instanceof: Element,
      },
    },
    subscribe: {
      subName: {
        type: "string",
      },
      entryPointMethod: {
        type: "function",
      },
    },
    unsubscribe: {
      subName: {
        type: "string",
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
             received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
              needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
             received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
           corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //------------------STATE-AND-CONFIG-DATA----------------------//

  #stateData = {
    functionalityActive: false,
  };

  #elementReferences = {
    searchBarForm: null,
    searchBarInput: null,
  };

  //-------------------EVENT-LISTENERS---------------------------//

  #submitFunc = (event) => {
    event.preventDefault(); //prevent regular form submit behavior

    const searchBarInputElement = this.#elementReferences.searchBarInput;

    this.#emitSearchBarText(searchBarInputElement.value);
  };

  #addEventListeners() {
    this.#elementReferences.searchBarForm.addEventListener(
      "submit",
      this.#submitFunc
    ); //use the unique as the event listener callback
  }

  #removeEventListeners() {
    this.#elementReferences.searchBarForm.removeEventListener(
      "submit",
      this.#submitFunc
    ); //use it to remove the submit event listener
  }

  //--------------------INPUT-VALUE-PUB-SUB-----------------------//

  #emitSearchBarText = async (input) => {
    const numOfSubscribers = Object.keys(this.#subscribers).length;

    //check for subscribers
    if (numOfSubscribers > 0) {
      for (let subscriber in this.#subscribers) {
        this.#subscribers[subscriber](input);
      }
    }
  }; //emits the search bar input to all of the present subscribers

  #subscribers = {};

  subscribe(subName, entryPointMethod) {
    try {
      this.#argValidator("subscribe", { subName, entryPointMethod });

      if (!this.#subscribers.hasOwnProperty(subName)) {
        this.#subscribers[subName] = entryPointMethod;
      } else {
        throw new ReferenceError(`Failed to add a subscriber to the search bar functionality publisher, as the
          subscriber seems to already exist, received '${subName}' as the subscriber being added`);
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  unsubscribe(subName) {
    try {
      this.#argValidator("unsubscribe", { subName });

      if (this.#subscribers.hasOwnProperty(subName)) {
        delete this.#subscribers[subName];
      } else {
        throw new ReferenceError(`Failed to remove a subscriber from the search bar functionality publisher, as the
          subscriber attempting to be removed does not exist, received '${subName}' as the subscriber being removed`);
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //-------------------------APIs--------------------------------//

  //activate or deactivate the functionality of the search bar instance

  activate() {
    try {
      if (!this.#stateData.functionalityActive) {
        this.#addEventListeners(); //append the event listeners to the target form element

        this.#stateData.functionalityActive = true;
      } else {
        throw new Error(
          `Failed to activate the functionality on a specific search bar instance, it appears to already be on`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  deactivate() {
    try {
      if (this.#stateData.functionalityActive) {
        this.#removeEventListeners(); //remove the event listeners from the target form element

        this.#stateData.functionalityActive = false;
      } else {
        throw new Error(
          `Failed to deactivate the functionality on a specific search bar instance, it appears to already be off`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}


/***/ }),

/***/ "./src/modules/Level-1/Weather-Data-DOM-Updating.js":
/*!**********************************************************!*\
  !*** ./src/modules/Level-1/Weather-Data-DOM-Updating.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplyCurrentWeatherData: () => (/* binding */ ApplyCurrentWeatherData),
/* harmony export */   ApplyForecastData: () => (/* binding */ ApplyForecastData),
/* harmony export */   ApplyGeneralInfoData: () => (/* binding */ ApplyGeneralInfoData)
/* harmony export */ });
/* harmony import */ var _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Level-0/Element-Ref-Manager */ "./src/modules/Level-0/Element-Ref-Manager.js");
 //DEPENDENCY FOR THESE CLASSES TO USE ARG VALIDATION

class ApplyGeneralInfoData {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager }); //validate args

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //add helper class to state

      this.#retrieveElementReferences(); //retrieve the necessary references
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //-------------ARGUMENT-VALIDATION---------------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
    applyData: {
      data: {
        type: "object",
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                 received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                  needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                 received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
               corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //------------STATE-AND-CONFIG-DATA--------------//

  #helperClasses = {
    elementReferenceManager: null,
  };

  #retrievedElementReferences = {
    location: null,
  };

  //---------------HELPER-METHODS------------------//

  #retrieveElementReferences() {
    const { elementReferenceManager } = this.#helperClasses,
      locationElementRef = elementReferenceManager.retrieveRef(
        `General-Info-Location`
      );

    this.#retrievedElementReferences.location = locationElementRef;
  }

  #applyDataToElementReference = {
    location: (data) => {
      const locationName = data.name,
        locationCountry = data.country; //pull the references from the received data

      const completeLocationString = `${locationName}, ${locationCountry}`, //make a complete string to display on the DOM
        { location } = this.#retrievedElementReferences; //pull the references to the element being altered

      location.textContent = completeLocationString; //apply the data as text within the element
    },
  };

  //-------------------APIs------------------------//

  applyData(data) {
    try {
      this.#argValidator("applyData", { data }); //validate args

      const { location } = this.#applyDataToElementReference; //get the various helper methods that use the incoming data

      location(data); //apply the data to the corresponding methods that update the DOM
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}

class ApplyCurrentWeatherData {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager });

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //store the supplied reference manager instance into state

      this.#retrieveElementReferences(); //retrieve the required references from the ref manager
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //-------------ARGUMENT-VALIDATION---------------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
    applyData: {
      data: { type: "object" },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                 received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                  needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                 received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
               corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //------------STATE-AND-CONFIG-DATA--------------//

  #helperClasses = {
    elementReferenceManager: null,
  };

  #retrievedElementReferences = {
    conditionText: null,
    temp: null,
    feelsLikeTemp: null,
    precip: null,
    humidity: null,
    visibility: null,
    windDegree: null,
    windDirection: null,
    windSpeed: null,
  };

  //---------------HELPER-METHODS------------------//

  #retrieveElementReferences() {
    const { elementReferenceManager } = this.#helperClasses;

    this.#retrievedElementReferences = {
      conditionText: elementReferenceManager.retrieveRef(
        `Current-Weather-Condition-Text`
      ),
      temp: elementReferenceManager.retrieveRef(`Current-Weather-Temp`),
      feelsLikeTemp: elementReferenceManager.retrieveRef(
        `Current-Weather-Feels-Like-Temp`
      ),
      precip: elementReferenceManager.retrieveRef(`Current-Weather-Precip`),
      humidity: elementReferenceManager.retrieveRef(`Current-Weather-Humidity`),
      visibility: elementReferenceManager.retrieveRef(
        `Current-Weather-Visibility`
      ),
      windDegree: elementReferenceManager.retrieveRef(
        `Current-Weather-Wind-Degree`
      ),
      windDirection: elementReferenceManager.retrieveRef(
        `Current-Weather-Wind-Direction`
      ),
      windSpeed: elementReferenceManager.retrieveRef(
        `Current-Weather-Wind-Speed`
      ),
    };
  }

  #applyDataToElementReferences(data) {
    for (let dataMethod in this.#dataApplyingMethods) {
      this.#dataApplyingMethods[dataMethod](data);
    }
  }

  #dataApplyingMethods = {
    conditionText: (data) => {
      const { conditionText } = data;

      this.#retrievedElementReferences.conditionText.textContent =
        conditionText;
    },
    temp: (data) => {
      const { temp } = data;

      this.#retrievedElementReferences.temp.textContent = `${temp}`;
    },
    feelsLike: (data) => {
      const { feelsLike } = data;

      this.#retrievedElementReferences.feelsLikeTemp.textContent = `Feels Like ${feelsLike}`;
    },
    precip: (data) => {
      const { precip } = data;

      this.#retrievedElementReferences.precip.textContent = `Precipitation - ${precip}`;
    },
    humidity: (data) => {
      const { humidity } = data;

      this.#retrievedElementReferences.humidity.textContent = `Humidity - ${humidity}`;
    },
    visibility: (data) => {
      const { visibility } = data;

      this.#retrievedElementReferences.visibility.textContent = `Visibility - ${visibility}`;
    },
    windSpeed: (data) => {
      const { windSpeed } = data;

      this.#retrievedElementReferences.windSpeed.textContent = `Wind Speed - ${windSpeed}`;
    },
    windDir: (data) => {
      const { windDir } = data;

      this.#retrievedElementReferences.windDirection.textContent = `Wind Direction - ${windDir}`;
    },
    windDegree: (data) => {
      const { windDegree } = data;

      this.#retrievedElementReferences.windDegree.textContent = `Wind Direction (deg) - ${windDegree}`;
    },
  };

  //-------------------APIs------------------------//

  applyData(data) {
    try {
      this.#argValidator("applyData", { data }); //validate args

      this.#applyDataToElementReferences(data); //begin applying the received data to the corresponding elements
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}

class ApplyForecastData {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager });

      this.#helperClasses.elementReferenceManager = elementReferenceManager;
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //-------------ARGUMENT-VALIDATION---------------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
    applyData: {
      data: { type: "object" },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                 received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                  needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                 received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
               corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //------------STATE-AND-CONFIG-DATA--------------//

  #helperClasses = {
    elementReferenceManager: null,
  };

  #retrievedElementRefs = {};

  #stateData = {
    numOfForecastDays: null,
  };

  //---------INITIALIZE-ELEMENT-REFS-CACHE---------//

  #initRetrievedElementRefsStruct(numOfDays) {
    for (let i = 1; i <= numOfDays; i++) {
      this.#retrievedElementRefs[`Day-${i}`] = {};
    }
  }

  //---------------HELPER-METHODS------------------//

  //gets the necessary element references for the
  //current weather portion of the web page
  #retrieveElementRefs() {
    for (let dayString in this.#retrievedElementRefs) {
      this.#retrieveElementRefsByDay(dayString);
    }
  }

  #retrieveElementRefsByDay(dayString) {
    const { elementReferenceManager } = this.#helperClasses,
      forecastDayObj = this.#retrievedElementRefs[dayString];

    //define all of the necessary element references corresponding to the day
    //they represent in each corresponding retrievedelementref key value pair
    forecastDayObj["container"] = elementReferenceManager.retrieveRef(
      `Forecast-Day-Card-Container-${dayString}`
    );

    forecastDayObj["date"] = elementReferenceManager.retrieveRef(
      `Forecast-Day-Date-${dayString}`
    );

    forecastDayObj["conditionText"] = elementReferenceManager.retrieveRef(
      `Forecast-Day-Condition-Text-${dayString}`
    );

    forecastDayObj["conditionImage"] = elementReferenceManager.retrieveRef(
      `Forecast-Day-Condition-Image-${dayString}`
    );

    forecastDayObj["tempHigh"] = elementReferenceManager.retrieveRef(
      `Forecast-Day-Temp-High-${dayString}`
    );

    forecastDayObj["tempLow"] = elementReferenceManager.retrieveRef(
      `Forecast-Day-Temp-Low-${dayString}`
    );

    forecastDayObj["totalPrecip"] = elementReferenceManager.retrieveRef(
      `Forecast-Day-Total-Precip-${dayString}`
    );
  }

  #updateElements(data) {
    for (let i = 0; i < data.length; i++) {
      //retrieve the forecast element references based on the target day
      const elementRefs = this.#retrievedElementRefs[`Day-${i + 1}`];

      //define properties on the corresponding element
      //references retrieved corresponding to the data array
      elementRefs.date.textContent = data[i].date;

      elementRefs.conditionText.textContent = data[i].conditionText;

      elementRefs.conditionImage.src = data[i].conditionImage;

      elementRefs.tempHigh.textContent = `High ${data[i].maxTemp}`;

      elementRefs.tempLow.textContent = `Low ${data[i].minTemp}`;

      elementRefs.totalPrecip.textContent = `Precip ${data[i].totalPrecip}`;
    }
  }

  //-------------------APIs------------------------//

  applyData(data) {
    try {
      this.#argValidator("applyData", { data });

      //only initialize and retrieve if the number of forecast days changes
      if (data.length !== this.#stateData.numOfForecastDays) {
        this.#initRetrievedElementRefsStruct(data.length);

        this.#retrieveElementRefs();

        this.#stateData.numOfForecastDays = data.length;
      }

      this.#updateElements(data); //apply the data to the elements
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}


/***/ }),

/***/ "./src/modules/Level-1/Weather-Data-Filtering.js":
/*!*******************************************************!*\
  !*** ./src/modules/Level-1/Weather-Data-Filtering.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentWeatherDataFilter: () => (/* binding */ CurrentWeatherDataFilter),
/* harmony export */   ForecastDataFilter: () => (/* binding */ ForecastDataFilter),
/* harmony export */   GeneralInfoDataFilter: () => (/* binding */ GeneralInfoDataFilter)
/* harmony export */ });
class GeneralInfoDataFilter {
  //----------ARGUMENT-VALIDATION----------//

  #argValidationData = {
    filterData: {
      data: {
        type: "object",
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                 received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                  needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                 received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
               corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //-------------DATA-FILTERING------------//

  #createFilteredDataSet(data) {
    const locationData = data.location,
      filteredDataSet = {
        name: locationData.name,
        country: locationData.country,
      };

    return filteredDataSet;
  }

  //------------------APIs-----------------//

  //will take the data and the unit rules to commence a filtering process
  filterData(data) {
    try {
      this.#argValidator(`filterData`, { data }); //validate args

      const filteredDataSet = this.#createFilteredDataSet(data); //get a filtered data set using the supplied data

      return filteredDataSet; //returned said data set
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}

class CurrentWeatherDataFilter {
  //-----------ARGUMENT-VALIDATION---------//

  #argValidationData = {
    filterData: {
      data: {
        type: "object",
      },
      unitRules: {
        type: "object",
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                 received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                  needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                 received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
               corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //---------STATE-AND-CONFIG-DATA---------//

  #unitRules = null;

  //------------APPLY-UNIT-RULES-----------//

  #applyUnitRules(unitRules) {
    this.#unitRules = unitRules;
  }

  //-------------DATA-FILTERING------------//

  #createFilteredDataSet(data) {
    const { temp, windSpeed, precip, feelsLike, visibility } =
        this.#dataFilteringMethods,
      currentWeatherData = data.current;

    //create a new data set with filtered data
    const filteredDataSet = {
      conditionText: currentWeatherData.condition.text,
      temp: temp(currentWeatherData),
      feelsLike: feelsLike(currentWeatherData),
      precip: precip(currentWeatherData),
      humidity: `${currentWeatherData.humidity}%`,
      visibility: visibility(currentWeatherData),
      windSpeed: windSpeed(currentWeatherData),
      windDir: `${currentWeatherData.wind_dir}`,
      windDegree: `${currentWeatherData.wind_degree}deg`,
    };

    return filteredDataSet;
  }

  #dataFilteringMethods = {
    temp: (data) => {
      const { temperature } = this.#unitRules;

      if (temperature === "metric") {
        return `${data.temp_c} C`;
      } else if (temperature === "customary") {
        return `${data.temp_f} F`;
      }
    },
    windSpeed: (data) => {
      const { distance } = this.#unitRules;

      if (distance === "metric") {
        return `${data.wind_kph} kph`;
      } else if (distance === "customary") {
        return `${data.wind_mph} mph`;
      }
    },
    precip: (data) => {
      const { measurement } = this.#unitRules;

      if (measurement === "metric") {
        return `${data.precip_mm} mm`;
      } else if (measurement === "customary") {
        return `${data.precip_in} in`;
      }
    },
    feelsLike: (data) => {
      const { temperature } = this.#unitRules;

      if (temperature === "metric") {
        return `${data.feelslike_c} C`;
      } else if (temperature === "customary") {
        return `${data.feelslike_f} F`;
      }
    },
    visibility: (data) => {
      const { distance } = this.#unitRules;

      if (distance === "metric") {
        return `${data.vis_km} km`;
      } else if (distance === "customary") {
        return `${data.vis_miles} mi`;
      }
    },
  };

  //------------------APIs-----------------//

  filterData(data, unitRules) {
    try {
      this.#argValidator("filterData", { data, unitRules }); //validate args

      this.#applyUnitRules(unitRules); //apply the unit filtering rules to the state

      const filteredDataSet = this.#createFilteredDataSet(data); //make a filtered data set

      return filteredDataSet;
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}

class ForecastDataFilter {
  //-----------ARGUMENT-VALIDATION---------//
  #argValidationData = {
    filterData: {
      data: {
        type: "object",
      },
      unitRules: {
        type: "object",
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                 received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                  needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                 received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
               corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //----------STATE-AND-CONFIG-DATA--------//

  #unitRules = null;

  //------------APPLY-UNIT-RULES-----------//

  #applyUnitRules(unitRules) {
    this.#unitRules = unitRules;
  }

  //-------------DATA-FILTERING------------//

  #createFilteredDataSet(data) {
    const forecastDataArr = data.forecast.forecastday,
      filteredForecastDataArr = [];

    for (let forecastDay of forecastDataArr) {
      const filteredDay = this.#filterByDay(forecastDay);

      filteredForecastDataArr.push(filteredDay);
    }

    return filteredForecastDataArr;
  }

  #filterByDay(singleDayData) {
    const dayDataObj = singleDayData.day,
      dayDate = singleDayData.date; //define the received data sets

    const { maxTemp, minTemp, totalPrecip } = this.#dataFilteringMethods; //reference the filtering methods

    const filteredDayData = {
      date: dayDate,
      conditionText: dayDataObj.condition.text,
      conditionImage: dayDataObj.condition.icon,
      maxTemp: maxTemp(dayDataObj),
      minTemp: minTemp(dayDataObj),
      totalPrecip: totalPrecip(dayDataObj),
    };

    return filteredDayData;
  }

  #dataFilteringMethods = {
    maxTemp: (dayDataObj) => {
      const { temperature } = this.#unitRules;
      let maxTempValue;

      if (temperature === "metric") {
        maxTempValue = `${dayDataObj.maxtemp_c} C`;
      } else if (temperature === "customary") {
        maxTempValue = `${dayDataObj.maxtemp_f} F`;
      }

      return maxTempValue;
    },
    minTemp: (dayDataObj) => {
      const { temperature } = this.#unitRules;
      let minTempValue;

      if (temperature === "metric") {
        minTempValue = `${dayDataObj.mintemp_c} C`;
      } else if (temperature === "customary") {
        minTempValue = `${dayDataObj.mintemp_f} F`;
      }

      return minTempValue;
    },
    totalPrecip: (dayDataObj) => {
      const { measurement } = this.#unitRules;
      let totalPrecip;

      if (measurement === "metric") {
        totalPrecip = `${dayDataObj.totalprecip_mm} mm`;
      } else if (measurement === "customary") {
        totalPrecip = `${dayDataObj.totalprecip_in} in`;
      }

      return totalPrecip;
    },
  };

  //------------------APIs-----------------//

  filterData(data, unitRules) {
    try {
      this.#argValidator("filterData", { data, unitRules }); //validate args

      this.#applyUnitRules(unitRules); //apply the unit filtering rules to the state

      const filteredDataSet = this.#createFilteredDataSet(data); //make a filtered data set

      return filteredDataSet;
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}


/***/ }),

/***/ "./src/modules/Level-2/Weather-App-Constructor.js":
/*!********************************************************!*\
  !*** ./src/modules/Level-2/Weather-App-Constructor.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherAppConstructor: () => (/* binding */ WeatherAppConstructor)
/* harmony export */ });
/* harmony import */ var _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Level-0/Element-Ref-Manager */ "./src/modules/Level-0/Element-Ref-Manager.js");
 //dependency for various argument validation

class GeneralInfoConstructor {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager }); //validate args

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //save helper class instance

      this.#createGeneralInfoElement(); //create the entire general info fragment
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //------------------ARGUMENT-VALIDATION-----------------------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                       received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                        needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                       received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
                     corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //---------------------CLASS-AND-CONFIG-DATA--------------------//

  #generalIdentifiers = {
    general: `General-Info`,
  };

  #helperClasses = {
    elementReferenceManager: null,
  };

  #generalInfoElement = null;

  //-------------------ELEMENT-REFERENCE-CACHING------------------//

  #storeElementRef(identifier, element) {
    this.#helperClasses.elementReferenceManager.addRef(identifier, element);
  }

  //------------------------HELPER-METHODS------------------------//

  #createGeneralInfoElement() {
    const { main } = this.#containerElementConstructors,
      { location } = this.#generalInfoElementConstructors;

    //create all of the necessary elements to create the general info fragment
    const mainContainerElement = main(),
      childElements = {
        location: location(),
      };

    //append the child elements to the container
    for (let element in childElements) {
      mainContainerElement.append(childElements[element]);
    }

    this.#generalInfoElement = mainContainerElement; //save completely constructed and assembled general info element to state
  }

  //----------------------ELEMENT-CONSTRUCTORS--------------------//

  #containerElementConstructors = {
    main: () => {
      const mainContainerElement = document.createElement("div"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Main-Container`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      mainContainerElement.classList.add(generalIdentifier);
      mainContainerElement.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, mainContainerElement); //General-Info-Main-Container

      return mainContainerElement;
    },
  };

  #generalInfoElementConstructors = {
    location: () => {
      const locationElement = document.createElement("h3"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Location`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      locationElement.classList.add(generalIdentifier);
      locationElement.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, locationElement); //General-Info-Location

      return locationElement;
    },
  };

  //-----------------------------APIs-----------------------------//

  returnGeneralInfoFragment() {
    try {
      return this.#generalInfoElement;
    } catch (error) {
      console.error(error, error.stack);
    }
  }
} // constructs the portion of the app that holds the general information, such as location and current time

class CurrentWeatherConstuctor {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager }); //validate args

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //save helper class instance

      this.#createCurrentWeatherFragment(); //create the entire fragment, and save the product to state
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //------------------ARGUMENT-VALIDATION-----------------------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                       received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                        needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                       received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
                     corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //----------------------STATE-AND-CONFIG-DATA-----------------------//

  #generalIdentifiers = {
    general: `Current-Weather`,
  };

  #helperClasses = {
    elementReferenceManager: null,
  };

  #currentWeatherElement = null;

  //-------------------------ELEMENT-CACHING--------------------------//

  #storeElementRef(identifier, element) {
    this.#helperClasses.elementReferenceManager.addRef(identifier, element);
  }

  //--------------------------HELPER-METHODS--------------------------//

  #createCurrentWeatherFragment() {
    const { main } = this.#containerConstructors,
      {
        conditionText,
        temp,
        tempFeelsLike,
        precip,
        humidity,
        visibility,
        windDegree,
        windDirection,
        windSpeed,
      } = this.#currentWeatherElementConstructors,
      mainContainerElement = main(); //create the main container to append the various child elements to

    //define the order to create and append the corresponding elements within the
    //main container
    const createAndAppendOrder = [
      conditionText,
      temp,
      tempFeelsLike,
      precip,
      humidity,
      visibility,
      windDirection,
      windDegree,
      windSpeed,
    ];

    //create and append each imported method that represents a specific data display element,
    //follows the order of the defined array
    createAndAppendOrder.forEach((method) => {
      const element = method();
      mainContainerElement.append(element);
    });

    this.#currentWeatherElement = mainContainerElement; //save the complete current weather fragment to state
  }

  //------------------------ELEMENT-CONSTRUCTORS----------------------//

  #containerConstructors = {
    main: () => {
      const currentWeatherContainerElement = document.createElement("div"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Main-Container`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      currentWeatherContainerElement.classList.add(generalIdentifier);
      currentWeatherContainerElement.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, currentWeatherContainerElement);

      return currentWeatherContainerElement;
    },
  };

  #currentWeatherElementConstructors = {
    conditionText: () => {
      const conditionTextField = document.createElement("h1"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Condition-Text`,
        combinedIdentifier = generalIdentifier + "-" + specificIdentifier;

      conditionTextField.classList.add(generalIdentifier);
      conditionTextField.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, conditionTextField); //Current-Weather-Condition-Text

      return conditionTextField;
    }, //will say a phrase like 'partly cloudly' or 'sunny' etc to represent the weather
    temp: () => {
      const tempTextField = document.createElement("h1"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Temp`,
        combinedIdentifier = generalIdentifier + "-" + specificIdentifier;

      tempTextField.classList.add(generalIdentifier);
      tempTextField.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, tempTextField); //Current-Weather-Temp

      return tempTextField;
    }, //actual temp
    tempFeelsLike: () => {
      const feelsLikeTempTextField = document.createElement("h2"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Feels-Like-Temp`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      feelsLikeTempTextField.classList.add(generalIdentifier);
      feelsLikeTempTextField.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, feelsLikeTempTextField); //Current-Weather-Feels-Like-Temp

      return feelsLikeTempTextField;
    }, //what it feels like
    precip: () => {
      const precipTextField = document.createElement("h2"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Precip`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      precipTextField.classList.add(generalIdentifier);
      precipTextField.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, precipTextField); //Current-Weather-Precip

      return precipTextField;
    }, //amount of precipitation
    humidity: () => {
      const humidityTextField = document.createElement("h2"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Humidity`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      humidityTextField.classList.add(generalIdentifier);
      humidityTextField.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, humidityTextField); //Current-Weather-Humidity

      return humidityTextField;
    }, //how humid the air is
    visibility: () => {
      const visibilityTextField = document.createElement("h3"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Visibility`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      visibilityTextField.classList.add(generalIdentifier);
      visibilityTextField.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, visibilityTextField); //Current-Weather-Visibility

      return visibilityTextField;
    }, //length of visibility through the sky
    windDegree: () => {
      const windDegreeTextField = document.createElement("h3"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Wind-Degree`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      windDegreeTextField.classList.add(generalIdentifier);
      windDegreeTextField.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, windDegreeTextField); //Current-Weather-Wind-Degree

      return windDegreeTextField;
    }, //wind direction in degrees
    windDirection: () => {
      const windDirectionTextField = document.createElement("h3"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Wind-Direction`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      windDirectionTextField.classList.add(generalIdentifier);
      windDirectionTextField.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, windDirectionTextField); //Current-Weather-Wind-Direction

      return windDirectionTextField;
    }, //wind direction in compass units
    windSpeed: () => {
      const windSpeedTextField = document.createElement("h3"),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Wind-Speed`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      windSpeedTextField.classList.add(generalIdentifier);
      windSpeedTextField.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, windSpeedTextField); //Current-Weather-Wind-Speed

      return windSpeedTextField;
    }, //how fast the wind is moving
  };

  //---------------------------APIs------------------------//

  returnCurrentWeatherFragment() {
    try {
      return this.#currentWeatherElement;
    } catch (error) {
      console.error(error, error.stack);
    }
  }
} // constructs the portion of the app that holds the current weather information based on location

class ForecastConstructor {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager }); //validate args

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //store helper class instance

      this.#createForecastFragment(); //create the entire fragment and store it into the state
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //------------------ARGUMENT-VALIDATION-----------------------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                       received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                        needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                       received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
                     corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //--------------------STATE-AND-CONFIG-DATA---------------------//

  #generalIdentifiers = {
    dayCardElements: `Forecast-Day`,
    generalElements: `Forecast`,
  };

  #helperClasses = {
    elementReferenceManager: null,
  };

  #forecastElement = null;

  //----------------------ELEMENT-CACHING-------------------------//

  #storeElementRef(identifier, element) {
    this.#helperClasses.elementReferenceManager.addRef(identifier, element);
  }

  //-----------------------HELPER-METHODS-------------------------//

  #createForecastFragment() {
    //create the main container that will hold all of the day cards
    const { mainContainer } = this.#containerConstructors,
      mainContainerElement = mainContainer();

    for (let i = 0; i < 3; i++) {
      const dayCard = this.#createDayCard(`Day-${i+1}`); //create a day card corresponding to the day, this way each created day card element has something unique attached to them

      mainContainerElement.append(dayCard);
    }

    this.#forecastElement = mainContainerElement; //set the completely assembled forecast element to the state
  } //will construct and assemble all of the necessary cards and containers to create the entire fragment

  #createDayCard(dayNumString) {
    const {
        dayDate,
        conditionText,
        conditionImage,
        tempHigh,
        tempLow,
        totalPrecip,
      } = this.#dayCardElementConstructors,
      { dayCardContainer } = this.#containerConstructors;

    //create all of the necessary elements that make up a single day card
    const dayCardContainerElement = dayCardContainer(dayNumString),
      dayCardChildElements = {
        date: dayDate(dayNumString),
        conditionText: conditionText(dayNumString),
        conditionImage: conditionImage(dayNumString),
        tempHigh: tempHigh(dayNumString),
        tempLow: tempLow(dayNumString),
        totalPrecip: totalPrecip(dayNumString),
      }; //all of the child elements of the day card container, will be appended in this order

    //append the child elements to the container
    for (let element in dayCardChildElements) {
      dayCardContainerElement.append(dayCardChildElements[element]);
    }

    return dayCardContainerElement; //return the assembled day card template
  } //will construct and assemble individual day cards

  //---------------------ELEMENT-CONSTRUCTORS---------------------//

  #containerConstructors = {
    mainContainer: () => {
      const mainContainerElement = document.createElement("div"),
        generalIdentifier = this.#generalIdentifiers.generalElements,
        specificIdentifier = `Main-Container`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      mainContainerElement.classList.add(generalIdentifier);
      mainContainerElement.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, mainContainerElement); //Forecast-Main-Container

      return mainContainerElement;
    }, //the container that contains the entire forecast, including the day containers
    dayCardContainer: (dayNumString) => {
      const dayContainerElement = document.createElement("div"),
        generalIdentifier = this.#generalIdentifiers.dayCardElements,
        specificIdentifier = `Card-Container`,
        combinedIdentifier =
          generalIdentifier + `-` + specificIdentifier + `-` + dayNumString;

      dayContainerElement.classList.add(generalIdentifier);
      dayContainerElement.classList.add(specificIdentifier);
      dayContainerElement.classList.add(dayNumString);

      this.#storeElementRef(combinedIdentifier, dayContainerElement); //Forecast-Day-Card-Container-Day-${number}

      return dayContainerElement;
    }, //will represent a single way within the forecast
  };

  #dayCardElementConstructors = {
    dayDate: (dayNumString) => {
      const dayDateTextElement = document.createElement("p"),
        generalIdentifier = this.#generalIdentifiers.dayCardElements,
        specificIdentifier = `Date`,
        combinedIdentifier =
          generalIdentifier + `-` + specificIdentifier + `-` + dayNumString;

      dayDateTextElement.classList.add(generalIdentifier);
      dayDateTextElement.classList.add(specificIdentifier);
      dayDateTextElement.classList.add(dayNumString);

      this.#storeElementRef(combinedIdentifier, dayDateTextElement); //Forecast-Day-Date-Day-${number}

      return dayDateTextElement;
    },
    conditionText: (dayNumString) => {
      const conditionTextElement = document.createElement("p"),
        generalIdentifier = this.#generalIdentifiers.dayCardElements,
        specificIdentifier = `Condition-Text`,
        combinedIdentifier =
          generalIdentifier + `-` + specificIdentifier + `-` + dayNumString;

      conditionTextElement.classList.add(generalIdentifier);
      conditionTextElement.classList.add(specificIdentifier);
      conditionTextElement.classList.add(dayNumString);

      this.#storeElementRef(combinedIdentifier, conditionTextElement); //Forecast-Day-Condition-Text-Day-${number}

      return conditionTextElement;
    }, //will say a phrase like 'partly cloudly' or 'sunny' etc to represent the weather for a given day
    conditionImage: (dayNumString) => {
      const conditionImageElement = document.createElement("img"),
        generalIdentifier = this.#generalIdentifiers.dayCardElements,
        specificIdentifier = `Condition-Image`,
        combinedIdentifier =
          generalIdentifier + `-` + specificIdentifier + `-` + dayNumString;

      conditionImageElement.classList.add(generalIdentifier);
      conditionImageElement.classList.add(specificIdentifier);
      conditionImageElement.classList.add(dayNumString);

      this.#storeElementRef(combinedIdentifier, conditionImageElement); //Forecast-Day-Condition-Image-Day-${number}

      return conditionImageElement;
    }, //holds an image that will match the condition text phrase within a corresponding day container
    tempHigh: (dayNumString) => {
      const tempHighElement = document.createElement("p"),
        generalIdentifier = this.#generalIdentifiers.dayCardElements,
        specificIdentifier = `Temp-High`,
        combinedIdentifier =
          generalIdentifier + `-` + specificIdentifier + `-` + dayNumString;

      tempHighElement.classList.add(generalIdentifier);
      tempHighElement.classList.add(specificIdentifier);
      tempHighElement.classList.add(dayNumString);

      this.#storeElementRef(combinedIdentifier, tempHighElement); //Forecast-Day-Temp-High-Day-${number}

      return tempHighElement;
    }, //the predicted high temp for a given forecast day
    tempLow: (dayNumString) => {
      const tempLowElement = document.createElement("p"),
        generalIdentifier = this.#generalIdentifiers.dayCardElements,
        specificIdentifier = `Temp-Low`,
        combinedIdentifier =
          generalIdentifier + `-` + specificIdentifier + `-` + dayNumString;

      tempLowElement.classList.add(generalIdentifier);
      tempLowElement.classList.add(specificIdentifier);
      tempLowElement.classList.add(dayNumString);

      this.#storeElementRef(combinedIdentifier, tempLowElement); //Forecast-Day-Temp-Low-Day-${number}

      return tempLowElement;
    }, //the predicted low temp for a given forecast day
    totalPrecip: (dayNumString) => {
      const totalPrecipElement = document.createElement("p"),
        generalIdentifier = this.#generalIdentifiers.dayCardElements,
        specificIdentifier = `Total-Precip`,
        combinedIdentifier =
          generalIdentifier + `-` + specificIdentifier + `-` + dayNumString;

      totalPrecipElement.classList.add(generalIdentifier);
      totalPrecipElement.classList.add(specificIdentifier);
      totalPrecipElement.classList.add(dayNumString);

      this.#storeElementRef(combinedIdentifier, totalPrecipElement); //Forecast-Day-Total-Precip-Day-${number}

      return totalPrecipElement;
    }, //the predicted amount of precipitation for a given forecast day
  };

  //----------------------------APIs------------------------------//

  returnForecastFragment() {
    try {
      return this.#forecastElement;
    } catch (error) {
      console.error(error, error.stack);
    }
  }
} // constructs the portion of the app that holds the forecast based on the location

class UserInterfaceConstructor {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager }); //validate the args

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //store the helper class instance to the state

      this.#createUserInterfaceFragment(); //create the entire fragment, which its saved to the state
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //------------------ARGUMENT-VALIDATION-----------------------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                   received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                    needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                   received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
                 corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //------------------STATE-AND-CONFIG-DATA----------------------//

  #helperClasses = {
    elementReferenceManager: null,
  };

  #generalIdentifiers = {
    buttons: `User-Interface-Buttons`,
    containers: `User-Interface-Containers`,
  };

  #userInterfaceElement = null;

  //------------------ELEMENT-REFERENCE-CACHING-----------------//

  #storeElementRef(identifier, element) {
    this.#helperClasses.elementReferenceManager.addRef(identifier, element);
  }

  //---------------------HELPER-METHODS--------------------------//

  //orchestrates the entire creation of the user interface fragment
  #createUserInterfaceFragment() {
    const { main } = this.#containers,
      { toggleButtons } = this.#sectionConstructors;

    const userInterfaceContainer = main(), //create the main container, as well as the constructed section for toggle buttons
      toggleButtonsSection = toggleButtons();

    userInterfaceContainer.append(toggleButtonsSection);

    this.#userInterfaceElement = userInterfaceContainer; //save the completely assembled user interface fragment to state
  }

  //-------------------ELEMENT-CONSTRUCTORS----------------------//

  #sectionConstructors = {
    toggleButtons: () => {
      const { button } = this.#containers,
        { toggleTempUnit, toggleDistanceUnit, toggleMeasurementUnit } =
          this.#buttons;

      const buttonContainer = button(),
        buttonElements = {
          toggleTempUnit: toggleTempUnit(),
          toggleDistanceUnit: toggleDistanceUnit(),
          toggleMeasurementUnit: toggleMeasurementUnit(),
        }; //create the container and all of the individual buttons

      //append all of the buttons to the container
      for (let button in buttonElements) {
        buttonContainer.append(buttonElements[button]);
      }

      return buttonContainer; //return the assembled button container
    },
  };

  #containers = {
    main: () => {
      const mainContainer = document.createElement("div"),
        generalIdentifier = this.#generalIdentifiers.containers,
        specificIdentifier = `Main-Container`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      mainContainer.classList.add(generalIdentifier);
      mainContainer.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, mainContainer); //User-Interface-Containers-Main-Container

      return mainContainer;
    },
    button: () => {
      const buttonContainer = document.createElement("div"),
        generalIdentifier = this.#generalIdentifiers.containers,
        specificIdentifier = `Button-Container`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      buttonContainer.classList.add(generalIdentifier);
      buttonContainer.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, buttonContainer); //User-Interface-Containers-Button-Container

      return buttonContainer;
    },
  };

  #buttons = {
    toggleTempUnit: () => {
      const tempToggleButton = document.createElement("button"),
        generalIdentifier = this.#generalIdentifiers.buttons,
        specificIdentifier = `Temp-Toggle`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      tempToggleButton.classList.add(generalIdentifier);
      tempToggleButton.classList.add(specificIdentifier);

      tempToggleButton.textContent = "Temperature";

      this.#storeElementRef(combinedIdentifier, tempToggleButton); //User-Interface-Buttons-Temp-Toggle

      return tempToggleButton;
    }, //F or C
    toggleDistanceUnit: () => {
      const distanceToggleButton = document.createElement("button"),
        generalIdentifier = this.#generalIdentifiers.buttons,
        specificIdentifier = `Distance-Toggle`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      distanceToggleButton.classList.add(generalIdentifier);
      distanceToggleButton.classList.add(specificIdentifier);

      distanceToggleButton.textContent = "Distance";

      this.#storeElementRef(combinedIdentifier, distanceToggleButton); //User-Interface-Buttons-Distance-Toggle

      return distanceToggleButton;
    }, //km or mi
    toggleMeasurementUnit: () => {
      const measurementToggleButton = document.createElement("button"),
        generalIdentifier = this.#generalIdentifiers.buttons,
        specificIdentifier = `Measurement-Toggle`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      measurementToggleButton.classList.add(generalIdentifier);
      measurementToggleButton.classList.add(specificIdentifier);

      measurementToggleButton.textContent = "Measurement";

      this.#storeElementRef(combinedIdentifier, measurementToggleButton); //User-Interface-Buttons-Measurement-Toggle

      return measurementToggleButton;
    }, //mm or in
  };

  //------------------------APIs----------------------------//

  returnUserInterfaceFragment() {
    try {
      return this.#userInterfaceElement; //return the entire user interface fragment completely constructed and assembled
    } catch (error) {
      console.error(error, error.stack);
    }
  }
} // constructs the portion of the app that holds the user interface, such as the location search bar, and the unit toggle buttons

class WeatherAppConstructor {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager }); //validate the args

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //save the element reference manager instance

      this.#createWeatherAppFragment(); //create the entire weather app web page fragment, in which its stored in state for later retrieval
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //------------------ARGUMENT-VALIDATION-----------------------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                 received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                  needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                 received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
               corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //------------------STATE-AND-CONFIG-DATA-----------------//

  #generalIdentifiers = {
    general: `Weather-App`,
  };

  #fragments = {
    generalInfo: null,
    currentWeather: null,
    userInterface: null,
    forecast: null,
  };

  //holds the entirely constructed and assembled weather app essentially,
  //will be returned by the api of this class
  #completeWeatherAppElement = null;

  //cache to store element references within, in which the functionality class will use the
  //same reference manager instance to apply functionality to
  #helperClasses = {
    elementReferenceManager: null,
  };

  //----------------ELEMENT-REFERENCE-CACHING---------------//

  #storeElementRef(identifier, element) {
    this.#helperClasses.elementReferenceManager.addRef(identifier, element);
  }

  //------------------CREATE-ENTIRE-WEB-PAGE----------------//

  #createWeatherAppFragment() {
    this.#createSubFragments(); //create all of the necessary sub fragmentsd

    const { main } = this.#containers,
      mainContainerElement = main();

    //fetch all of the previously created fragments from state
    const { generalInfo, currentWeather, userInterface, forecast } =
      this.#fragments;

    //append them to the main container in this order
    [generalInfo, currentWeather, userInterface, forecast].forEach((fragment) =>
      mainContainerElement.append(fragment)
    );

    this.#completeWeatherAppElement = mainContainerElement; //store the completely constructed and assembled weather app page to state
  }

  //will orchestrate the entire creation of the weather app page
  #createSubFragments() {
    const { generalInfo, currentWeather, userInterface, forecast } =
      this.#fragmentCreation; //get all of the necessary fragment creation methods

    //create each fragment and store it in state
    [generalInfo, currentWeather, userInterface, forecast].forEach((method) => {
      method();
    });
  }

  //-------------------ELEMENT-CONSTRUCTORS-----------------//

  #containers = {
    main: () => {
      const weatherAppContainer = document.createElement(`div`),
        generalIdentifier = this.#generalIdentifiers.general,
        specificIdentifier = `Main-Container`,
        combinedIdentifier = generalIdentifier + `-` + specificIdentifier;

      weatherAppContainer.classList.add(generalIdentifier);
      weatherAppContainer.classList.add(specificIdentifier);

      this.#storeElementRef(combinedIdentifier, weatherAppContainer); //Weather-App-Main-Container

      return weatherAppContainer;
    },
  };

  //--------------------FRAGMENT-CREATION-------------------//

  //methods to create fragments of the weather app
  //page, in which they will all be supplied the same
  //element reference manager instance, so every
  //single element made will be on the same cache.
  //these methods will use the helper classes to
  //facilitate the creation
  #fragmentCreation = {
    generalInfo: () => {
      const { elementReferenceManager } = this.#helperClasses,
        generalInfoConstructorInstance = new GeneralInfoConstructor(
          elementReferenceManager
        ); // make the corresponding fragment construtor instance, supply it the reference manager instance that was supplied before

      this.#fragments.generalInfo =
        generalInfoConstructorInstance.returnGeneralInfoFragment(); //return the fragment and store it in the controller state
    },
    currentWeather: () => {
      const { elementReferenceManager } = this.#helperClasses,
        currentWeatherConstructorInstance = new CurrentWeatherConstuctor(
          elementReferenceManager
        );

      this.#fragments.currentWeather =
        currentWeatherConstructorInstance.returnCurrentWeatherFragment();
    },
    userInterface: () => {
      const { elementReferenceManager } = this.#helperClasses,
        userInterfaceConstructorInstance = new UserInterfaceConstructor(
          elementReferenceManager
        );

      this.#fragments.userInterface =
        userInterfaceConstructorInstance.returnUserInterfaceFragment();
    },
    forecast: () => {
      const { elementReferenceManager } = this.#helperClasses,
        forecastConstructorInstance = new ForecastConstructor(
          elementReferenceManager
        );

      this.#fragments.forecast =
        forecastConstructorInstance.returnForecastFragment();
    },
  };

  //--------------------------APIs--------------------------//

  returnWeatherAppFragment() {
    try {
      return this.#completeWeatherAppElement;
    } catch (error) {
      console.error(error, error.stack);
    }
  } //will return the entire weather app fragment that was created
} //uses the helper classes in order to combined all of the made fragments to create an entire web page for the weather app


/***/ }),

/***/ "./src/modules/Level-2/Weather-App-Functionality.js":
/*!**********************************************************!*\
  !*** ./src/modules/Level-2/Weather-App-Functionality.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherAppFunctionality: () => (/* binding */ WeatherAppFunctionality)
/* harmony export */ });
/* harmony import */ var _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Level-0/Element-Ref-Manager */ "./src/modules/Level-0/Element-Ref-Manager.js");
/* harmony import */ var _Level_1_Weather_Data_Filtering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Level-1/Weather-Data-Filtering */ "./src/modules/Level-1/Weather-Data-Filtering.js");
/* harmony import */ var _Level_1_Weather_Data_DOM_Updating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Level-1/Weather-Data-DOM-Updating */ "./src/modules/Level-1/Weather-Data-DOM-Updating.js");






//controls the user interface portion of the web app,
//so that the supplied buttons will toggle the units being used for existing
//data sets
class UserInterfaceFunctionality {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager });

      this.#helperClasses.elementReferenceManager = elementReferenceManager;

      this.#getElementRefs();

      this.#addFunctionalityToButtons();
    } catch (error) {
      console.error(error, error.stack);
    }
  }
  //--------------ARGUMENT-VALIDATION------------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
    subscribe: {
      subName: {
        type: "string",
      },
      entryPointMethod: {
        type: "function",
      },
    },
    unsubscribe: {
      subName: {
        type: "string",
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
               received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
               received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
             corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //------------STATE-AND-CONFIG-DATA------------//

  #elementReferences = {
    unitToggleButtonContainer: null,
    toggleDistance: null,
    toggleMeasurement: null,
    toggleTemperature: null,
  };

  #helperClasses = {
    elementReferenceManager: null,
  };

  #stateData = {
    eventListenersOn: false,
  };

  //----------------HELPER-METHODS---------------//

  #getElementRefs() {
    const { elementReferenceManager } = this.#helperClasses;

    this.#elementReferences.unitToggleButtonContainer =
      elementReferenceManager.retrieveRef(
        `User-Interface-Containers-Button-Container`
      ); // get ref for the container for the buttons

    this.#elementReferences.toggleDistance =
      elementReferenceManager.retrieveRef(
        `User-Interface-Buttons-Distance-Toggle`
      ); // get ref for the distance unit toggle button

    this.#elementReferences.toggleMeasurement =
      elementReferenceManager.retrieveRef(
        `User-Interface-Buttons-Measurement-Toggle`
      ); // get ref for the measurement unit toggle button

    this.#elementReferences.toggleTemperature =
      elementReferenceManager.retrieveRef(`User-Interface-Buttons-Temp-Toggle`);
    // get ref for the temperature unit toggle button
  }

  #addFunctionalityToButtons() {
    this.#addEventListeners();
    //the functionality is mainly through appending the event listener with the
    //associated functionality supplied as the callback, atleast this way this provides an
    //easy way to add additional functionality in the future
  }

  //---------EVENT-LISTENER-INITIALIZATION-------//

  #addEventListeners() {
    if (!this.#stateData.eventListenersOn) {
      const { unitToggleButtonContainer } = this.#elementReferences; //get the ref for the button container

      unitToggleButtonContainer.addEventListener("click", (e) => {
        this.#clickFunctionality(e);
      }); //append the event listener to said container

      this.#stateData.eventListenersOn = true; //change the class state to reflect the event listener being initialized
    } else {
      throw new ReferenceError(
        `Failed to add event listeners, as they appear to already be initialized`
      );
    }
  } //initializes the event listeners needed to the corresponding element, that being the button container on the UI

  //---------EVENT-LISTENER-FUNCTIONALITY--------//

  #clickFunctionality(event) {
    const buttonClicked = this.#determineButtonClicked(event); //find out which button was clicked, and return a string representing it

    this.#emitButtonClicked(buttonClicked); //emit the returned string
  } //supplied to the created event listener

  #determineButtonClicked(event) {
    const { toggleDistance, toggleMeasurement, toggleTemperature } =
      this.#elementReferences;

    switch (event.target) {
      case toggleDistance:
        return `Toggle Distance Unit`;
      case toggleMeasurement:
        return `Toggle Measurement Unit`;
      case toggleTemperature:
        return `Toggle Temperature Unit`;
    }
  } //will be used within click functionality

  //------------BUTTON-CLICKED-PUB-SUB-----------//

  #emitButtonClicked(buttonClicked) {
    const numOfSubscribers = Object.keys(this.#subscribers).length;

    if (numOfSubscribers > 0) {
      for (let subscriber in this.#subscribers) {
        this.#subscribers[subscriber](buttonClicked);
      }
    }
  }

  #subscribers = {};

  subscribe(subName, entryPointMethod) {
    try {
      this.#argValidator("subscribe", { subName, entryPointMethod });

      if (!this.#subscribers.hasOwnProperty(subName)) {
        this.#subscribers[subName] = entryPointMethod;
      } else {
        throw new ReferenceError(
          `Failed to add a subscriber to the weather app user interface publisher, as the
           subscriber seems to already exist, received '${subName}' as the subscriber being added`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  unsubscribe(subName) {
    try {
      this.#argValidator("unsubscribe", { subName });

      if (this.#subscribers.hasOwnProperty(subName)) {
        delete this.#subscribers[subName];
      } else {
        throw new ReferenceError(
          `Failed to remove a subscriber from the weather app user interface publisher, as the
           subscriber attempting to be removed does not exist, received '${subName}' as the subscriber being removed`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}

//receives data, filters it, and packages the right data to be
//sent to the right helper class to render
class WeatherDataManager {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager }); //validate args

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //store the ref manager instance to state

      this.#initHelperClasses(); //create unique instances of the helper classes being used, particularly the data application helpers
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //------------ARGUMENT-VALIDATION-----------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
    unitButtonEntryPoint: {
      buttonClicked: {
        type: "string",
      },
    },
    weatherDataEntryPoint: {
      data: {
        type: "object",
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
               received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
               received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
             corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //----------STATE-AND-CONFIG-DATA-----------//

  #helperClasses = {
    elementReferenceManager: null,
    applyForecastData: null,
    applyCurrentWeatherData: null,
    applyGeneralInfoData: null,
    generalInfoDataFilter: null,
    currentWeatherDataFilter: null,
    forecastDataFilter: null,
  };

  #selectedUnits = {
    distance: "metric",
    temperature: "metric",
    measurement: "metric",
  };

  #currentWeatherData = null;

  //--------------HELPER-METHODS--------------//

  #initHelperClasses() {
    this.#initApplyDataHelperClasses();
    this.#initDataFilterHelperClasses();
  }

  #initApplyDataHelperClasses() {
    //init the data application classes with the supplied
    //element reference manager as the dependencies
    this.#helperClasses.applyForecastData = new _Level_1_Weather_Data_DOM_Updating__WEBPACK_IMPORTED_MODULE_2__.ApplyForecastData(
      this.#helperClasses.elementReferenceManager
    );

    this.#helperClasses.applyCurrentWeatherData = new _Level_1_Weather_Data_DOM_Updating__WEBPACK_IMPORTED_MODULE_2__.ApplyCurrentWeatherData(
      this.#helperClasses.elementReferenceManager
    );

    this.#helperClasses.applyGeneralInfoData = new _Level_1_Weather_Data_DOM_Updating__WEBPACK_IMPORTED_MODULE_2__.ApplyGeneralInfoData(
      this.#helperClasses.elementReferenceManager
    );
  }

  #initDataFilterHelperClasses() {
    //init the classes that will take a data set and filter it out
    //and return a final data set based on the supplied unit rules
    this.#helperClasses.generalInfoDataFilter = new _Level_1_Weather_Data_Filtering__WEBPACK_IMPORTED_MODULE_1__.GeneralInfoDataFilter();

    this.#helperClasses.currentWeatherDataFilter =
      new _Level_1_Weather_Data_Filtering__WEBPACK_IMPORTED_MODULE_1__.CurrentWeatherDataFilter();

    this.#helperClasses.forecastDataFilter = new _Level_1_Weather_Data_Filtering__WEBPACK_IMPORTED_MODULE_1__.ForecastDataFilter();
  }

  #storeReceivedDataToState(data) {
    this.#currentWeatherData = data;
  }

  //defines whether to use inbound weather data,
  //or to use already stored data essentially
  #processWeatherData(useInboundData, data) {
    let filteredDataSet = null;

    if (useInboundData) {
      this.#storeReceivedDataToState(data); //store the data in state first

      filteredDataSet = this.#filterInboundData(data);
    } else {
      filteredDataSet = this.#filterExistingData();
    }

    this.#emitDataToHelpers(filteredDataSet);
  }

  //------FILTERED-WEATHER-DATA-EMISSION-------//

  #emitDataToHelpers(data) {
    const { generalInfo, currentWeather, forecast } =
      this.#emitDataToHelpersMethods;

    generalInfo(data.generalInfo);
    currentWeather(data.currentWeather);
    forecast(data.forecast);
  }

  #emitDataToHelpersMethods = {
    generalInfo: (data) => {
      const { applyGeneralInfoData } = this.#helperClasses;

      applyGeneralInfoData.applyData(data);
    },
    currentWeather: (data) => {
      const { applyCurrentWeatherData } = this.#helperClasses;

      applyCurrentWeatherData.applyData(data);
    },
    forecast: (data) => {
      const { applyForecastData } = this.#helperClasses;

      applyForecastData.applyData(data);
    },
  };

  //----------WEATHER-DATA-FILTERING-----------//

  //the filtering will use rules from the
  //state to decide what to filter for
  #filterInboundData(data) {
    const { generalInfo, currentWeather, forecast } =
      this.#sectionDataFiltering;

    const filteredDataSet = {
      generalInfo: generalInfo(data),
      currentWeather: currentWeather(data),
      forecast: forecast(data),
    };

    return filteredDataSet;
  }

  #filterExistingData() {
    const { generalInfo, currentWeather, forecast } =
        this.#sectionDataFiltering,
      data = this.#currentWeatherData;

    const filteredDataSet = {
      generalInfo: generalInfo(data),
      currentWeather: currentWeather(data),
      forecast: forecast(data),
    };

    return filteredDataSet;
  }

  //will use the data filtering methods to choose the right
  //data to use corresponding to the section
  #sectionDataFiltering = {
    generalInfo: (data) => {
      const { generalInfoDataFilter } = this.#helperClasses,
        filteredData = generalInfoDataFilter.filterData(data); //doesn't use the units rule

      return filteredData;
    },
    currentWeather: (data) => {
      const { currentWeatherDataFilter } = this.#helperClasses,
        filteredData = currentWeatherDataFilter.filterData(
          data,
          this.#selectedUnits
        );

      return filteredData;
    },
    forecast: (data) => {
      const { forecastDataFilter } = this.#helperClasses,
        filteredData = forecastDataFilter.filterData(data, this.#selectedUnits);

      return filteredData;
    },
  };

  //---------------UNIT-TOGGLING--------------//

  #toggleUnit(buttonClicked) {
    const { distance, temperature, measurement } = this.#unitTogglers;

    switch (buttonClicked) {
      case `Toggle Distance Unit`:
        distance();
        break;
      case `Toggle Temperature Unit`:
        temperature();
        break;
      case `Toggle Measurement Unit`:
        measurement();
        break;
      default:
        throw new ReferenceError(
          `Failed to toggle a specific unit, the received button clicked was not recognized, received ${buttonClicked}`
        );
    }
  }

  //methods to toggle the value of the various units within
  //state, so that the correct data is display on the DOM
  #unitTogglers = {
    distance: () => {
      if (this.#selectedUnits.distance === "metric") {
        this.#selectedUnits.distance = "customary";
      } else if (this.#selectedUnits.distance === "customary") {
        this.#selectedUnits.distance = "metric";
      }
    },
    temperature: () => {
      if (this.#selectedUnits.temperature === "metric") {
        this.#selectedUnits.temperature = "customary";
      } else if (this.#selectedUnits.temperature === "customary") {
        this.#selectedUnits.temperature = "metric";
      }
    },
    measurement: () => {
      if (this.#selectedUnits.measurement === "metric") {
        this.#selectedUnits.measurement = "customary";
      } else if (this.#selectedUnits.measurement === "customary") {
        this.#selectedUnits.measurement = "metric";
      }
    },
  };

  //-------------------APIs-------------------//

  unitButtonEntryPoint(buttonClicked) {
    try {
      this.#argValidator("unitButtonEntryPoint", { buttonClicked });

      this.#toggleUnit(buttonClicked); //activate the unit toggling based on the received command

      this.#processWeatherData(false); //process weather data, but with the data that is already stored internally
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  weatherDataEntryPoint(data) {
    try {
      this.#argValidator("weatherDataEntryPoint", { data });

      this.#processWeatherData(true, data); //process weather data, but with the data that was supplied from the entry point
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}

//will hold data that represents the most up to date
class WeatherAppFunctionality {
  constructor(elementReferenceManager) {
    try {
      this.#argValidator("constructor", { elementReferenceManager }); //validate args

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //store the element reference instance to state

      this.#initStateAndConfig(); //create the class instances

      this.#linkWeatherDataManagerToPublisher(); //link the emit weather data to helpers class instance to the UI Functionality publisher

      this.activate(); //activate the functionality right off the bat
    } catch (error) {
      console.error(error, error.stack);
    }
  }
  //------------------ARGUMENT-VALIDATION-----------------------//

  #argValidationData = {
    constructor: {
      elementReferenceManager: {
        instanceof: _Level_0_Element_Ref_Manager__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager,
      },
    },
    weatherDataReceiver: {
      data: {
        type: "object",
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
               received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
               received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
             corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //---------------------STATE-AND-CONFIG-DATA------------------//

  #helperClasses = {
    weatherDataManager: null,
    userInterfaceFunctionality: null,
  };

  #functionalityActive = false;

  //------------------------HELPER-METHODS----------------------//

  #initStateAndConfig() {
    this.#helperClasses.weatherDataManager = new WeatherDataManager(
      this.#helperClasses.elementReferenceManager
    ); //make the emit class instance

    this.#helperClasses.userInterfaceFunctionality =
      new UserInterfaceFunctionality(
        this.#helperClasses.elementReferenceManager
      ); //make the user interface functionality class instance
  }
  //main entrypoint method that will commence initializing the state of
  //this class instance

  #linkWeatherDataManagerToPublisher() {
    const { weatherDataManager, userInterfaceFunctionality } =
      this.#helperClasses; //get the required helper class instances

    userInterfaceFunctionality.subscribe(
      "WeatherDataManager",
      weatherDataManager.unitButtonEntryPoint.bind(weatherDataManager)
    ); //have one helper class instance to subscribe to another
    //class instance publisher, make sure to bind the supplied api to the class origin
  }

  #emitInboundDataToDependencies(data) {
    if (this.#functionalityActive) {
      const { weatherDataManager } = this.#helperClasses;

      weatherDataManager.weatherDataEntryPoint(data);
    }
  }

  //----------------------------APIs----------------------------//

  //will be the entry point to receive weather data from both the search bar
  //and the current location query portions of the app
  weatherDataReceiver(data) {
    try {
      this.#argValidator("weatherDataReceiver", { data }); //validate the inputs

      this.#emitInboundDataToDependencies(data);
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //activate the weather app functionality
  activate() {
    try {
      if (!this.#functionalityActive) {
        this.#functionalityActive = true;
      } else {
        throw new Error(
          `Failed to activate the weather app functionality, as it appears to already be on`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //deactivate the weather app functionality
  deactivate() {
    try {
      if (!this.#functionalityActive) {
        this.#functionalityActive = false;
      } else {
        throw new Error(
          `Failed to deactivate the weather app functionality, as it appears to already be off`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}


/***/ }),

/***/ "./src/modules/Level-2/Weather-Current-Location.js":
/*!*********************************************************!*\
  !*** ./src/modules/Level-2/Weather-Current-Location.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentLocationWeather: () => (/* binding */ CurrentLocationWeather)
/* harmony export */ });
/* harmony import */ var _Level_0_Api_Interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Level-0/Api-Interfaces */ "./src/modules/Level-0/Api-Interfaces.js");
/* harmony import */ var _Level_1_Current_Location_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Level-1/Current-Location-Query */ "./src/modules/Level-1/Current-Location-Query.js");



class CurrentLocationWeather {
  constructor(apiKey) {
    try {
      this.#argValidator("constructor", { apiKey }); //validate the args

      this.#configData.apiKey = apiKey; //save the api key for the specific end point to state

      this.#initHelperClasses(); //initialize the various helper classes

      this.#linkToCurrentLocationPublisher(); //makes this class instance subscribe to the current location query helper class publisher instance
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //-----------ARGUMENT-VALIDATION------------//

  #argValidationData = {
    constructor: {
      apiKey: {
        type: "string",
      },
    },
    subscribeToApiData: {
      subName: {
        type: "string",
      },
      entryPointMethod: {
        type: "function",
      },
    },
    unsubscribeFromApiData: {
      subName: {
        type: "string",
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
                       received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                        needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
                       received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
                     corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //-----------STATE-AND-CONFIG-DATA-----------//

  #configData = {
    apiKey: null,
    numOfForecastDays: 7,
  };

  #helperClasses = {
    currentLocationQuery: null,
    weatherApi: null,
  };

  #mediatorMethod = (lon, lat, weatherApiInstance) => {
    const locationCoords = `${lat},${lon}`,
      weatherDataPromise = weatherApiInstance.getForecast(
        locationCoords,
        this.#configData.numOfForecastDays
      );

    //a promise that returns a data set representing a 7 day forecast for the supplied
    //location using coordinates

    return weatherDataPromise;
  };

  //---------------HELPER-CLASSES--------------//

  #initHelperClasses() {
    this.#helperClasses.weatherApi = new _Level_0_Api_Interfaces__WEBPACK_IMPORTED_MODULE_0__.WeatherApi(this.#configData.apiKey); //make a new weather api interface class instance

    this.#helperClasses.currentLocationQuery = new _Level_1_Current_Location_Query__WEBPACK_IMPORTED_MODULE_1__.CurrentLocationQuery(
      this.#helperClasses.weatherApi,
      this.#mediatorMethod
    ); //create a new current location query class instance supplying the weather api instance with a mediator method to return
  }

  #linkToCurrentLocationPublisher() {
    const { currentLocationQuery } = this.#helperClasses,
      classScope = this;

    currentLocationQuery.subscribe(
      "currentLocationWeatherData",
      this.#weatherDataPublisher.bind(classScope)
    );
  }

  //------------WEATHER-DATA-PUB-SUB-----------//

  #weatherDataPublisher(data) {
    const numOfSubscribers = Object.keys(this.#subscribers).length;

    //check for subscribers
    if (numOfSubscribers > 0) {
      for (let subscriber in this.#subscribers) {
        this.#subscribers[subscriber](data);
      }
    }
  }

  #subscribers = {};

  subscribeToApiData(subName, entryPointMethod) {
    try {
      this.#argValidator("subscribeToApiData", { subName, entryPointMethod });

      if (!this.#subscribers.hasOwnProperty(subName)) {
        this.#subscribers[subName] = entryPointMethod;
      } else {
        throw new ReferenceError(`Failed to add a subscriber to the search bar functionality publisher, as the
          subscriber seems to already exist, received '${subName}' as the subscriber being added`);
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  unsubscribeFromApiData(subName) {
    try {
      this.#argValidator("unsubscribeToApiData", { subName });

      if (this.#subscribers.hasOwnProperty(subName)) {
        delete this.#subscribers[subName];
      } else {
        throw new ReferenceError(`Failed to remove a subscriber from the search bar functionality publisher, as the
          subscriber attempting to be removed does not exist, received '${subName}' as the subscriber being removed`);
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //-------------------APIs---------------------//

  requestCurrentLocation() {
    try {
      const { currentLocationQuery } = this.#helperClasses;

      currentLocationQuery.requestCurrentLocation();
      //expose an api to request the current location of the user
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}


/***/ }),

/***/ "./src/modules/Level-2/Weather-Location-Search-Bar.js":
/*!************************************************************!*\
  !*** ./src/modules/Level-2/Weather-Location-Search-Bar.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherLocationSearchBar: () => (/* binding */ WeatherLocationSearchBar)
/* harmony export */ });
/* harmony import */ var _Level_0_Element_Ref_Manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Level-0/Element-Ref-Manager.js */ "./src/modules/Level-0/Element-Ref-Manager.js");
/* harmony import */ var _Level_0_Api_Interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Level-0/Api-Interfaces.js */ "./src/modules/Level-0/Api-Interfaces.js");
/* harmony import */ var _Level_1_Search_Bar_Functionality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Level-1/Search-Bar-Functionality.js */ "./src/modules/Level-1/Search-Bar-Functionality.js");
/* harmony import */ var _Level_1_Search_Bar_Constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Level-1/Search-Bar-Constructor.js */ "./src/modules/Level-1/Search-Bar-Constructor.js");





//CREATES THE ENTIRE SEARCH BAR FEATURE INCLUDING THE FUNCTIONALITY UPON CLASS INSTANCE
//TAKES A UNIQUE IDENTIFIER AND AN API KEY SPECIFICALLY FOR 'weatherApi' FOR ITS CONSTRUCTOR ARGS

//USES THE IMPORTED HELPER CLASSES IN ORDER TO MAKE A UNIQUE FEATURE IMPLEMENTATION, SPECIFICALLY FOR SEARCHING
//FOR WEATHER DATA BASED ON THE SUPPLIED LOCATION

//OFFERS A PUB SUB SUBSCRIPTION SO THAT ONE CAN ACCESS THE DATA RETRIEVED FROM THE SEARCH QUERY API
//REQUEST. SUBSCRIBE TO THIS CLASS TO DO SO FOR WEATHER DATA BASED ON THE LOCATION SUPPLIED

//will use the location emitted from the search bar functionality helper class in order to make an api request to the
//weather api in the FindWeatherDataForLocation helper class
class FindWeatherDataForLocation {
  constructor(searchBarFunctionalityInstance, apiKey) {
    try {
      this.#argValidator("constructor", {
        searchBarFunctionalityInstance,
        apiKey,
      }); //validate inbound args

      //save the helper class dependency to state
      this.#helperClasses.searchBarFunctionality =
        searchBarFunctionalityInstance;

      //make a new weather api interface instance in order to
      //communicate with the api
      this.#initWeatherApiInstance(apiKey);

      //have this class subscribe to the supplied helper class
      //since the helper class emits input data that will be used
      //to make weather api requests
      this.#subscribeToSearchBarFunctionalityPublisher();
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //--------------ARGUMENT-VALIDATION----------------//

  #argValidationData = {
    constructor: {
      searchBarFunctionalityInstance: {
        instanceof: _Level_1_Search_Bar_Functionality_js__WEBPACK_IMPORTED_MODULE_2__.SearchBarFunctionality,
      },
      apiKey: {
        type: "string",
      },
    },
    subscribe: {
      subName: {
        type: "string",
      },
      entryPointMethod: {
        type: "function",
      },
    },
    unsubscribe: {
      subName: {
        type: "string",
      },
    },
  };

  //holds methods that actually do the validation of a specific supplied argument on one of its properties
  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
           received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
            needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
           received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
         corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //-------------STATE-AND-CONFIG-DATA---------------//

  #helperClasses = {
    searchBarFunctionality: null,
    weatherApi: null,
  };

  #numOfForecastDays = 7;

  #requestInProgress = false;

  //---------------HELPER-METHODS--------------------//

  #initWeatherApiInstance(apiKey) {
    this.#helperClasses.weatherApi = new _Level_0_Api_Interfaces_js__WEBPACK_IMPORTED_MODULE_1__.WeatherApi(apiKey);
  }

  #subscribeToSearchBarFunctionalityPublisher() {
    const { searchBarFunctionality } = this.#helperClasses,
      classScope = this;

    searchBarFunctionality.subscribe(
      "WeatherApiRequest",
      this.#makeApiRequest.bind(classScope)
    );
    //the supplied subscriber method executes an api request to the weather
    //api using the input data. Also the method has to be binded to this class
    //since the method came from this class scope but will be executed within the functionality
    //manager helper scope
  }

  #makeApiRequest(inputValue) {
    //wont make another request until the previous is done
    if (!this.#requestInProgress) {
      this.#requestInProgress = true;

      const { weatherApi } = this.#helperClasses;

      //return a promise for the weather api forecast data using the
      //methods on the helper class instance
      const weatherDataPromise = weatherApi.getForecast(
          inputValue, //the location
          this.#numOfForecastDays
        ),
        classScope = this;

      //when the promise sucessfully resolves, the retrieved data
      //is emitted to the subscribers of this class. Have to bind the scope
      //to this class since the scope points to the promise object otherwise
      weatherDataPromise
        .then((data) => {
          this.#emitRetrievedWeatherData.bind(classScope)(data);
        })
        .catch((error) => {
          console.error(error, error.stack);
        })
        .finally(() => {
          this.#requestInProgress = false;
        });
      //no matter what happens the request is over,
      //so reset the state to allow another to be made
    }
  }

  //--------------FETCH-DATA-PUB-SUB-----------------//

  #emitRetrievedWeatherData(weatherData) {
    const numOfSubscribers = Object.keys(this.#subscribers).length;

    if (numOfSubscribers > 0) {
      for (let subscriber in this.#subscribers) {
        this.#subscribers[subscriber](weatherData);
      }
    }
  }

  #subscribers = {};

  subscribe(subName, entryPointMethod) {
    try {
      this.#argValidator("subscribe", { subName, entryPointMethod });

      if (!this.#subscribers.hasOwnProperty(subName)) {
        this.#subscribers[subName] = entryPointMethod;
      } else {
        throw new ReferenceError(
          `Failed to add a subscriber to the search bar weather data publisher, as the
           subscriber seems to already exist, received '${subName}' as the subscriber being added`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }
  unsubscribe(subName) {
    try {
      this.#argValidator("unsubscribe", { subName });

      if (this.#subscribers.hasOwnProperty(subName)) {
        delete this.#subscribers[subName];
      } else {
        throw new ReferenceError(
          `Failed to remove a subscriber from the search bar weather data publisher search bar publisher, as the
           subscriber attempting to be removed does not exist, received '${subName}' as the subscriber being removed`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}

class WeatherLocationSearchBar {
  //facilitate the building of the entire search bar,
  constructor(uniqueIdentifier, apiKey) {
    this.#argValidator("constructor", { uniqueIdentifier, apiKey }); //validate constructor args

    //save the args to the class state
    this.#apiKey = apiKey;
    this.#uniqueIdentifier = uniqueIdentifier;

    this.#initHelperClassInstances(); //init all of the helper class instances which they will already be supplied with the correct dependencies
    this.#buildSearchBar(); //builds the search bar and saves it to the state

    this.#subscribeToHelperPublishers(); //initializes the necessary subscriptions of the helper classes, both the search bar input values, and the api request values
    this.activateFunctionality(); //turn on the functionality of the search bar after everything else
  }

  //------------------ARGUMENT-VALIDATION-------------------------//

  #argValidationData = {
    //method
    constructor: {
      //args
      uniqueIdentifier: {
        //properties of arg
        type: "string",
      },
      apiKey: {
        type: "string",
      },
    },
    subscribe: {
      subName: {
        type: "string",
      },
      entryPointMethod: {
        type: "function",
      },
    },
    unsubscribe: {
      subName: {
        type: "string",
      },
    },
    append: {
      parentElement: {
        instanceof: Element,
      },
    },
    mediatorMethod: {
      input: {
        type: "string",
      },
      apiInstance: {
        instanceof: _Level_0_Api_Interfaces_js__WEBPACK_IMPORTED_MODULE_1__.WeatherApi,
      },
    },
  };

  //holds methods that actually do the validation of a specific supplied argument on one of its properties
  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
           received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
            needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
           received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
         corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //------------------STATE-AND-CONFIG-DATA-----------------------//

  #helperClassInstances = {
    elementReferenceManager: null,
    searchBarConstructor: null,
    searchBarFunctionality: null,
    findWeatherDataForLocation: null,
  };

  //--DEPENDENCY
  #apiKey = null; //my api key to use the weatherapi endpoint

  #uniqueIdentifier = null;

  #functionalityOn = false;

  #completeSearchBarElement = null;

  //------------------CONSTRUCTOR-HELPER-METHODS-------------------//

  #buildSearchBar() {
    //build the complete search bar
    const { searchBarConstructor } = this.#helperClassInstances,
      completeSearchBarElement = searchBarConstructor.returnSearchBarFragment();

    //save the complete search bar to state
    this.#completeSearchBarElement = completeSearchBarElement;
  }

  #initHelperClassInstances() {
    const {
      elementReferenceManager,
      searchBarConstructor,
      searchBarFunctionality,
      findWeatherDataForLocation,
    } = this.#initMethods;

    //inits all of the helper class instances in the correct order,
    //some of these helpers use other helpers as dependencies
    elementReferenceManager();
    searchBarConstructor();
    searchBarFunctionality();
    findWeatherDataForLocation();
  }

  #subscribeToHelperPublishers() {
    const { subscribeToApiData, subscribeToSearchBarInputValues } =
      this.#initMethods;

    //initializes the various subscriptions to the helper classes, so that
    //this controller class can act as an interface to emit the received data
    //from these helper classes
    subscribeToSearchBarInputValues();
    subscribeToApiData();
  }

  #initMethods = {
    elementReferenceManager: () => {
      this.#helperClassInstances.elementReferenceManager =
        new _Level_0_Element_Ref_Manager_js__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager();
    },
    searchBarConstructor: () => {
      //init the search bar constructor, which requires the element ref manager instance as a dependency
      this.#helperClassInstances.searchBarConstructor =
        new _Level_1_Search_Bar_Constructor_js__WEBPACK_IMPORTED_MODULE_3__.SearchBarConstructor({
          elementReferenceManager:
            this.#helperClassInstances.elementReferenceManager,
          uniqueIdentifier: this.#uniqueIdentifier,
          dynamicOptionsOn: false,
          //all this means is to add a datalist element when applicable
        });
    },
    searchBarFunctionality: () => {
      //fetch the element references for the specific search bar instance
      const searchBarFormRef =
          this.#helperClassInstances.elementReferenceManager.retrieveRef(
            "Search-Bar-Form"
          ),
        searchBarInputRef =
          this.#helperClassInstances.elementReferenceManager.retrieveRef(
            "Search-Bar-Input"
          );

      //init the search bar functionality class, which requires references to the search bar input and the form element that it exists within,
      //as well as the api instance being used and the mediator method to connect the search bar functionality to the api instance
      this.#helperClassInstances.searchBarFunctionality =
        new _Level_1_Search_Bar_Functionality_js__WEBPACK_IMPORTED_MODULE_2__.SearchBarFunctionality({
          searchBarForm: searchBarFormRef,
          searchBarInput: searchBarInputRef,
        });
    },
    findWeatherDataForLocation: () => {
      this.#helperClassInstances.findWeatherDataForLocation =
        new FindWeatherDataForLocation(
          this.#helperClassInstances.searchBarFunctionality,
          this.#apiKey
        ); //should automatically subscribe to the search bar functionality class in order to make api requests with the location
    },
    subscribeToApiData: () => {
      const { findWeatherDataForLocation } = this.#helperClassInstances,
        classScope = this;

      findWeatherDataForLocation.subscribe(
        "WeatherLocationSearchBarController",
        this.#apiDataPublisherEntryPoint.bind(classScope)
      );
      //since this method is from the controller class scope, need to
      //bind the scope when its executed within the helper class
    },
    subscribeToSearchBarInputValues: () => {
      const { searchBarFunctionality } = this.#helperClassInstances,
        classScope = this;

      searchBarFunctionality.subscribe(
        "WeatherLocationSearchBarController",
        this.#searchBarInputPublisherEntryPoint.bind(classScope)
      );
      //since this method is from the controller class scope, need to
      //bind the scope when its executed within the helper class
    },
  };

  //----------------SEARCH-BAR-INPUT-PUB-SUB---------------------//

  //will be supplied to the SearchBar Functionality class subscription, so that the controller can emit
  //the search bar input value on search queries
  #searchBarInputPublisherEntryPoint(searchBarInput) {
    const numOfSubscribers = Object.keys(
      this.#searchBarInputSubscribers
    ).length;

    if (numOfSubscribers > 0) {
      for (let subscriber in this.#searchBarInputSubscribers) {
        this.#searchBarInputSubscribers[subscriber](searchBarInput);
      }
    }
  }

  #searchBarInputSubscribers = {};

  subscribeToSearchBarInput(subName, entryPointMethod) {
    try {
      this.#argValidator("subscribe", { subName, entryPointMethod });

      if (!this.#searchBarInputSubscribers.hasOwnProperty(subName)) {
        this.#searchBarInputSubscribers[subName] = entryPointMethod;
      } else {
        throw new ReferenceError(
          `Failed to add a subscriber to the search bar input value publisher, as the
           subscriber seems to already exist, received '${subName}' as the subscriber being added`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  } //

  unsubscribeToSearchBarInput(subName) {
    try {
      this.#argValidator("unsubscribe", { subName });

      if (this.#searchBarInputSubscribers.hasOwnProperty(subName)) {
        delete this.#searchBarInputSubscribers[subName];
      } else {
        throw new ReferenceError(
          `Failed to remove a subscriber from the search bar input value publisher search bar publisher, as the
           subscriber attempting to be removed does not exist, received '${subName}' as the subscriber being removed`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  } //

  //--------------------API-DATA-PUB-SUB-------------------------//

  //will be supplied to the Find Weather Data For Location subscription, so that the controller can emit
  //data from successful api requests
  #apiDataPublisherEntryPoint(apiData) {
    const numOfSubscribers = Object.keys(this.#apiDataSubscribers).length;

    if (numOfSubscribers > 0) {
      for (let subscriber in this.#apiDataSubscribers) {
        this.#apiDataSubscribers[subscriber](apiData);
      }
    }
  }

  //list of subscribers for the weather api data received based on the location supplied
  //with their corresponding methods to execute when a successful api request goes through
  #apiDataSubscribers = {};

  subscribeToApiData(subName, entryPointMethod) {
    try {
      this.#argValidator("subscribe", { subName, entryPointMethod });

      if (!this.#apiDataSubscribers.hasOwnProperty(subName)) {
        this.#apiDataSubscribers[subName] = entryPointMethod;
      } else {
        throw new ReferenceError(
          `Failed to add a subscriber to the Weather API data publisher, as the
           subscriber seems to already exist, received '${subName}' as the subscriber being added`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  unsubscribeFromApiData(subName) {
    try {
      this.#argValidator("unsubscribe", { subName });

      if (this.#apiDataSubscribers.hasOwnProperty(subName)) {
        delete this.#apiDataSubscribers[subName];
      } else {
        throw new ReferenceError(
          `Failed to remove a subscriber from the Weather API data publisher search bar publisher, as the
           subscriber attempting to be removed does not exist, received '${subName}' as the subscriber being removed`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //--------------------------MAIN-APIs------------------------------//

  //tools activate or deactivate the functionality behind the search bar instance
  activateFunctionality() {
    try {
      if (!this.#functionalityOn) {
        const { searchBarFunctionality } = this.#helperClassInstances;

        searchBarFunctionality.activate();

        this.#functionalityOn = true;
      } else {
        throw new Error(
          `Failed to toggle the weather app search bar on, as it appears to already be on`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  deactivateFunctionality() {
    try {
      if (this.#functionalityOn) {
        const { searchBarFunctionality } = this.#helperClassInstances;

        searchBarFunctionality.deactivate();

        this.#functionalityOn = false;
      } else {
        throw new Error(
          `Failed to toggle the weather app search bar off, as it appears to already be off`
        );
      }
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //append the complete search bar element after it has been made completely
  returnFragment() {
    try {
      return this.#completeSearchBarElement;
    } catch (error) {
      console.error(error, error.stack);
    }
  }
}


/***/ }),

/***/ "./src/modules/Level-3/Weather.js":
/*!****************************************!*\
  !*** ./src/modules/Level-3/Weather.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherApp: () => (/* binding */ WeatherApp)
/* harmony export */ });
/* harmony import */ var _Level_0_Element_Ref_Manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Level-0/Element-Ref-Manager.js */ "./src/modules/Level-0/Element-Ref-Manager.js");
/* harmony import */ var _Level_2_Weather_Location_Search_Bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Level-2/Weather-Location-Search-Bar.js */ "./src/modules/Level-2/Weather-Location-Search-Bar.js");
/* harmony import */ var _Level_2_Weather_App_Constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Level-2/Weather-App-Constructor.js */ "./src/modules/Level-2/Weather-App-Constructor.js");
/* harmony import */ var _Level_2_Weather_App_Functionality_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Level-2/Weather-App-Functionality.js */ "./src/modules/Level-2/Weather-App-Functionality.js");
/* harmony import */ var _Level_2_Weather_Current_Location_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Level-2/Weather-Current-Location.js */ "./src/modules/Level-2/Weather-Current-Location.js");
//general dependencies


//specific implementation for this app specifically






//orchestrates all of these sub classes together in order to form the entire weather app
//will inject dependencies where they are needed etc. Will provide a way to customize
//some features with the weather app
class WeatherApp {
  constructor() {
    try {
      this.#initHelperClasses(); //initialize the helper class instances that make up the entire weather app

      this.#appendSearchBarFeatureToUI();
      //appends the search bar feature to the main weather app element fragment, since the search
      //bar is completely independent in nature

      this.#linkObserverToWeatherDataPublishers();
      //links the functionality helper class to any publishers that will emit
      //weather data for said helper to use and render on the DOM, this includes the search bar
      //and the current location weather helper classes

      this.#retrieveWeatherAppFragment();
      //retrieves the complete weather app from the constructor helper after everything else is initialized
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //------------ARGUMENT-VALIDATION-------------//

  #argValidationData = {
    append: {
      parentElement: {
        instanceof: Element,
      },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
               received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
                needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
               received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
             corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //-----------STATE-AND-CONFIG-DATA------------//

  #helperClasses = {
    elementReferenceManager: null,
    weatherAppConstructor: null,
    weatherAppFunctionality: null,
    weatherLocationSearchBar: null,
    currentLocationWeather: null,
  };

  #weatherAppFragment = null;

  #configData = {
    apiKey: `1ea79c090dd94fe586942809232508`,
    searchBarUniqueIdentifier: `Weather-Location`,
  };

  //---------------HELPER-METHODS---------------//

  #initHelperClasses() {
    //create the helper classes in this order, so that the element references stored upon
    //element creation can be transfered from the constructor helper to the functionality helper
    this.#helperClasses.elementReferenceManager = new _Level_0_Element_Ref_Manager_js__WEBPACK_IMPORTED_MODULE_0__.ElementRefManager();

    this.#helperClasses.weatherAppConstructor = new _Level_2_Weather_App_Constructor_js__WEBPACK_IMPORTED_MODULE_2__.WeatherAppConstructor(
      this.#helperClasses.elementReferenceManager
    );
    //uses the ref manager as a dependency, so that all created elements are immediately stored in the cache

    this.#helperClasses.weatherAppFunctionality = new _Level_2_Weather_App_Functionality_js__WEBPACK_IMPORTED_MODULE_3__.WeatherAppFunctionality(
      this.#helperClasses.elementReferenceManager
    );
    //uses the same ref manager with all of the necessary elements already stored within it in order
    //to facilitate functionality to existing elements

    //a completely separate feature in nature, outside of the functionality helper, in fact
    //the functionality helper will subscribe to this class in order to receive weather data
    //based on locations that are searched
    this.#helperClasses.weatherLocationSearchBar = new _Level_2_Weather_Location_Search_Bar_js__WEBPACK_IMPORTED_MODULE_1__.WeatherLocationSearchBar(
      this.#configData.searchBarUniqueIdentifier,
      this.#configData.apiKey
    );
    //need a unique identifier since the search bar is an independent feature in nature
    //also needs an api key to connect with the weather api

    //a module that takes the current location of the user, and then makes a weather api request
    //using their location
    this.#helperClasses.currentLocationWeather = new _Level_2_Weather_Current_Location_js__WEBPACK_IMPORTED_MODULE_4__.CurrentLocationWeather(
      this.#configData.apiKey
    );
  }

  #appendSearchBarFeatureToUI() {
    const { elementReferenceManager, weatherLocationSearchBar } =
      this.#helperClasses; //reference the appropriate helper classes to do so.

    const containerForUI = elementReferenceManager.retrieveRef(
        `User-Interface-Containers-Main-Container`
      ),
      firstChild = containerForUI.firstChild;
    //retrieve the UI main container reference, and save its first child as a reference

    const searchBarFrag = weatherLocationSearchBar.returnFragment();
    //get the complete search bar fragment

    containerForUI.insertBefore(searchBarFrag, firstChild);
    //using the previously saved first child, insert the search bar
    //before it so that the search bar is now the first child of the UI container
  }

  #linkObserverToWeatherDataPublishers() {
    const {
      weatherLocationSearchBar,
      weatherAppFunctionality,
      currentLocationWeather,
    } = this.#helperClasses;

    //link the weather app functionality helper to the search bar and the current location query module, so that
    //it can receive weather data that is emitted by either the search bar or current location query,
    //have to make sure to bind the supplied method to the functionality
    //helper instance
    weatherLocationSearchBar.subscribeToApiData(
      "Observer",
      weatherAppFunctionality.weatherDataReceiver.bind(weatherAppFunctionality)
    );

    currentLocationWeather.subscribeToApiData(
      "Observer",
      weatherAppFunctionality.weatherDataReceiver.bind(weatherAppFunctionality)
    );
  }

  #retrieveWeatherAppFragment() {
    const { weatherAppConstructor } = this.#helperClasses;

    this.#weatherAppFragment = weatherAppConstructor.returnWeatherAppFragment();
  }

  //--------------------APIs--------------------//

  append(parentElement) {
    try {
      this.#argValidator("append", { parentElement });

      parentElement.append(this.#weatherAppFragment);
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  useUserLocation() {
    const { currentLocationWeather } = this.#helperClasses;

    currentLocationWeather.requestCurrentLocation();
  }
}


/***/ }),

/***/ "./src/assets/Background.gif":
/*!***********************************!*\
  !*** ./src/assets/Background.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da42a5f2226532c0de0f.gif";

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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Level_3_Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Level-3/Weather */ "./src/modules/Level-3/Weather.js");
/* harmony import */ var _stylesheets_Reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/Reset.css */ "./src/stylesheets/Reset.css");
/* harmony import */ var _stylesheets_Main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets/Main.css */ "./src/stylesheets/Main.css");
/* harmony import */ var _stylesheets_General_Info_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stylesheets/General_Info.css */ "./src/stylesheets/General_Info.css");
/* harmony import */ var _stylesheets_Current_Weather_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stylesheets/Current_Weather.css */ "./src/stylesheets/Current_Weather.css");
/* harmony import */ var _stylesheets_UI_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylesheets/UI.css */ "./src/stylesheets/UI.css");
/* harmony import */ var _stylesheets_Forecast_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stylesheets/Forecast.css */ "./src/stylesheets/Forecast.css");










(() => {
  const weatherApp = new _modules_Level_3_Weather__WEBPACK_IMPORTED_MODULE_0__.WeatherApp();

  weatherApp.append(document.body); //append the app fragment

  weatherApp.useUserLocation(); //request the user location for weather data
})();

})();

/******/ })()
;
//# sourceMappingURL=944927d88d5af617cbd0.bundle.js.map
