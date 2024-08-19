"use strict";
(() => {
var exports = {};
exports.id = 450;
exports.ids = [450];
exports.modules = {

/***/ 7125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateCurrentTimeByCursorPosition": () => (/* binding */ calculateCurrentTimeByCursorPosition),
/* harmony export */   "calculateCursorPosition": () => (/* binding */ calculateCursorPosition),
/* harmony export */   "calculateCursorPositionInPercents": () => (/* binding */ calculateCursorPositionInPercents),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calculateCursorPosition = (rectangleController, x)=>{
    const offsetLeft = rectangleController.getLeftOffset();
    return x - offsetLeft;
};
const calculateCursorPositionInPercents = (rectangleController, x)=>{
    const widthInPercents = 100 / rectangleController.getWidth();
    return widthInPercents * calculateCursorPosition(rectangleController, x);
};
const calculateCurrentTimeByCursorPosition = (rectangleController, x, duration)=>{
    const normalizedPercent = calculateCursorPositionInPercents(rectangleController, x) / 100;
    return Math.min(duration * normalizedPercent, duration);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateCursorPosition);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7125));
module.exports = __webpack_exports__;

})();