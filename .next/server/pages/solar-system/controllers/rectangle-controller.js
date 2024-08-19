"use strict";
(() => {
var exports = {};
exports.id = 583;
exports.ids = [583];
exports.modules = {

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6104));
module.exports = __webpack_exports__;

})();