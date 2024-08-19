"use strict";
(() => {
var exports = {};
exports.id = 887;
exports.ids = [887,659,78,849,450,364,944,509,583];
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


/***/ }),

/***/ 7149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GesturesController": () => (/* binding */ GesturesController),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GesturesController {
    touchStarted = false;
    lastFingerPositionX = 0;
    timeoutId = 0;
    touch() {
        window.clearTimeout(this.timeoutId);
        this.touchStarted = true;
    }
    touchEnd() {
        this.timeoutId = window.setTimeout(()=>{
            this.touchStarted = false;
        }, 300);
    }
    getTouchStarted() {
        return this.touchStarted;
    }
    setLastFingerPosition(x) {
        this.lastFingerPositionX = x;
    }
    getLastFingerPosition() {
        return this.lastFingerPositionX;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GesturesController);


/***/ }),

/***/ 6104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RectangleController": () => (/* binding */ RectangleController),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class RectangleController {
    width = 0;
    left = 0;
    leftPadding = 0;
    constructor(element){
        this.element = element;
        this.boundUpdate = this.update.bind(this);
        window.addEventListener("resize", this.boundUpdate);
        this.boundUpdate();
    }
    getWidth() {
        return this.width;
    }
    getLeftOffset() {
        return this.left;
    }
    getLeftPadding() {
        return this.leftPadding;
    }
    dispose() {
        window.removeEventListener("resize", this.boundUpdate);
    }
    update() {
        const domRect = this.element.getBoundingClientRect();
        this.leftPadding = this.element.offsetLeft;
        this.width = domRect.width;
        this.left = domRect.left;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RectangleController);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,615], () => (__webpack_exec__(2615)));
module.exports = __webpack_exports__;

})();