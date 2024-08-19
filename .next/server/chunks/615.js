"use strict";
exports.id = 615;
exports.ids = [615];
exports.modules = {

/***/ 2615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Volume": () => (/* binding */ Volume),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Volume_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6686);
/* harmony import */ var _styles_common_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5522);
/* harmony import */ var _controllers_rectangle_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6104);
/* harmony import */ var _progress_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7125);
/* harmony import */ var _controllers_gesture_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7149);







const gesturesController = new _controllers_gesture_controller__WEBPACK_IMPORTED_MODULE_4__.GesturesController();
const Volume = ({ controller  })=>{
    const [rectController, setRectController] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const volumeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const placeHolderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (placeHolderRef.current) {
            setRectController(new _controllers_rectangle_controller__WEBPACK_IMPORTED_MODULE_5__.RectangleController(placeHolderRef.current));
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (volumeRef.current && controller) {
            volumeRef.current.style.width = `${controller.getVolume()}%`;
        }
    }, [
        controller
    ]);
    const updateVolume = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((x)=>{
        if (rectController && controller) {
            const volume = (0,_progress_utils__WEBPACK_IMPORTED_MODULE_6__.calculateCursorPositionInPercents)(rectController, x);
            controller.updateVolume(volume);
            const update = ()=>{
                if (volumeRef.current) {
                    volumeRef.current.style.width = `${Math.max(volume, 0)}%`;
                }
            };
            window.requestAnimationFrame(update);
        }
    }, [
        controller,
        rectController
    ]);
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        if (!gesturesController.getTouchStarted()) {
            updateVolume(event.clientX);
        }
    }, [
        updateVolume
    ]);
    const handleTouchMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            const x = touch.clientX;
            updateVolume(x);
        }
    }, [
        updateVolume
    ]);
    const handleTouchStart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            const x = touch.clientX;
            updateVolume(x);
        }
        gesturesController.touch();
    }, [
        updateVolume
    ]);
    const handleTouchEnd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        gesturesController.touchEnd();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Volume_styles__WEBPACK_IMPORTED_MODULE_2__.StyledStripValueWrapper, {
        onClick: handleClick,
        onTouchMove: handleTouchMove,
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onTouchCancel: handleTouchEnd,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Volume_styles__WEBPACK_IMPORTED_MODULE_2__.StyledStripeValue, {
                ref: volumeRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_common_styles__WEBPACK_IMPORTED_MODULE_3__.StripValuePlaceholder, {
                ref: placeHolderRef
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Volume);


/***/ })

};
;