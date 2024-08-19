"use strict";
(() => {
var exports = {};
exports.id = 879;
exports.ids = [879,849,509];
exports.modules = {

/***/ 6172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "GitHubLink": () => (/* binding */ GitHubLink),
/* harmony export */   "GitHubLinkWrapper": () => (/* binding */ GitHubLinkWrapper),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    padding: 32px;
    padding-top: 0;

    box-sizing: border-box;

    @media (max-width: 640px) {
        padding: 4px 4px;
    }

`;
const GitHubLink = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
    font-size: inherit;
`;
const GitHubLinkWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    font-size: 40px;

    padding: 32px 0;

    @media (max-width: 640px) {
        font-size: 20px;
        padding: 16px 0;
    }
`;
const Title = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
    font-size: 40px;

    @media (max-width: 640px) {
        font-size: 25px;
        margin-bottom: 16px;
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6172));
module.exports = __webpack_exports__;

})();