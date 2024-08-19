"use strict";
exports.id = 41;
exports.ids = [41];
exports.modules = {

/***/ 3041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstPlayButton": () => (/* binding */ FirstPlayButton),
/* harmony export */   "FirstPlayOverlay": () => (/* binding */ FirstPlayOverlay),
/* harmony export */   "FullscreenButton": () => (/* binding */ FullscreenButton),
/* harmony export */   "PlayPauseButton": () => (/* binding */ PlayPauseButton),
/* harmony export */   "ProgressAndTimerContainer": () => (/* binding */ ProgressAndTimerContainer),
/* harmony export */   "StyledContainer": () => (/* binding */ StyledContainer),
/* harmony export */   "StyledControls": () => (/* binding */ StyledControls),
/* harmony export */   "StyledPlayer": () => (/* binding */ StyledPlayer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledPlayer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().video)`
  width: 100%;
  background-color: black;
`;
const StyledContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;

  max-width: fit-content;

  max-width: 1000px;
`;
const StyledControls = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: absolute;
  bottom: 0;

  width: 100%;

  color: white;

  display: grid;

  grid-template-columns: ${({ isIOS  })=>isIOS ? "min-content 8fr 40px" : "min-content 8fr 1fr 40px"};
  grid-column-gap: 10px;

  padding: 12px;

  box-sizing: border-box;
  z-index: 5;

  @media (max-width: 640px) {
    grid-template-columns: ${({ isIOS  })=>isIOS ? "min-content 8fr 40px" : "min-content 8fr 60px 40px"};
    grid-column-gap: 4px;
  }
`;
const PlayPauseButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border-radius: 4px;
  border: 0;
  padding: 4px 8px;

  box-sizing: border-box;

  color: white;

  min-width: 50px;

  background-color: rgba(64, 64, 64, 0.7);

  cursor: pointer;

  min-height: 28px;

  @media (max-width: 640px) {
    padding: 4px 2px;
  }
`;
const ProgressAndTimerContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;

  background-color: rgba(64, 64, 64, 0.7);

  padding: 4px 8px;
  padding-left: 0;

  border-radius: 4px;
`;
const FullscreenButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PlayPauseButton)`
  padding: 0;
  min-width: initial;
`;
const FirstPlayOverlay = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;

  background-color: black;

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 50px;

  cursor: pointer;
`;
const FirstPlayButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  font-size: 50px;
  background-color: white;
  outline: 0;
  color: black;
  padding: 12px 16px;

  border-radius: 2px;

  cursor: pointer;

  border: none;

  @media (max-width: 640px) {
    padding: 8px 12px;

    font-size: 20px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledPlayer);


/***/ })

};
;