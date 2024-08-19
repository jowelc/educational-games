"use strict";
exports.id = 994;
exports.ids = [994,455];
exports.modules = {

/***/ 9110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Time": () => (/* binding */ Time),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Time = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  display: block;

  flex-shrink: 0;

  min-width: 40px;
  text-align: right;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Time);


/***/ }),

/***/ 994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => (/* binding */ Timer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Timer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9110);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3547);




const Timer = ({ controller  })=>{
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const updateCurrentVideoTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const timeEl = timerRef.current;
        if (timeEl?.textContent) {
            timeEl.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.formatCurrentVideoTime)(controller?.getPlayingProgress() || 0);
        }
    }, [
        controller
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (controller) {
            controller.subscribe("seeking", async ()=>{
                window.requestAnimationFrame(updateCurrentVideoTime);
            });
        }
    }, [
        controller,
        updateCurrentVideoTime
    ]);
    const runTask = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const task = ()=>{
            updateCurrentVideoTime();
            if (controller?.getPlayingState() === "playing") {
                window.requestAnimationFrame(task);
            }
        };
        window.requestAnimationFrame(task);
    }, [
        controller,
        updateCurrentVideoTime
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (controller) {
            controller.subscribe("playingState", runTask);
        }
    }, [
        controller,
        runTask
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Timer_styles__WEBPACK_IMPORTED_MODULE_2__.Time, {
        ref: timerRef,
        children: "0:00"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);


/***/ }),

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