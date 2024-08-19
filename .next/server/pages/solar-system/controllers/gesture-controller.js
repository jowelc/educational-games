"use strict";
(() => {
var exports = {};
exports.id = 944;
exports.ids = [944];
exports.modules = {

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7149));
module.exports = __webpack_exports__;

})();