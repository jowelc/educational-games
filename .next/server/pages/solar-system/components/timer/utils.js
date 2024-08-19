"use strict";
(() => {
var exports = {};
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 3547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "formatCurrentVideoTime": () => (/* binding */ formatCurrentVideoTime)
/* harmony export */ });
const formatCurrentVideoTime = (seconds)=>{
    if (!seconds) {
        return "0:00";
    }
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    const minutesLabel = min >= 1 ? min : 0;
    const secondsLabel = sec < 10 ? `0${sec}` : sec;
    return `${minutesLabel}:${secondsLabel}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatCurrentVideoTime);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3547));
module.exports = __webpack_exports__;

})();