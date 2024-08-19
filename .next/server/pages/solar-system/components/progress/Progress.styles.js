"use strict";
(() => {
var exports = {};
exports.id = 595;
exports.ids = [595,849,509];
exports.modules = {

/***/ 8033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FramePreview": () => (/* binding */ FramePreview),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FramePreview = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().video)`
  width: 100px;
  position: absolute;
  bottom: 24px;

  background-color: lightgray;

  border: 1px solid lightgray;
  box-sizing: border-box;

  left: 0;

  display: block;

  overflow: hidden;
  border-radius: 4px;

  visibility: hidden;

  padding: 0;
  margin: 0;

`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FramePreview);


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
var __webpack_exports__ = (__webpack_exec__(8033));
module.exports = __webpack_exports__;

})();