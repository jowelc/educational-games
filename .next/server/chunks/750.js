"use strict";
exports.id = 750;
exports.ids = [750,450,944,583];
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

/***/ 2750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Progress": () => (/* binding */ Progress),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_common_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5522);
/* harmony import */ var _controllers_rectangle_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6104);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7125);
/* harmony import */ var _Progress_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8033);
/* harmony import */ var _controllers_gesture_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7149);







const gesturesController = new _controllers_gesture_controller__WEBPACK_IMPORTED_MODULE_4__.GesturesController();
const Progress = ({ controller  })=>{
    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const placeholderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const framePreviewRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [rectangleController, setRectangleController] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (placeholderRef.current) {
            setRectangleController(new _controllers_rectangle_controller__WEBPACK_IMPORTED_MODULE_5__.RectangleController(placeholderRef.current));
        }
    }, []);
    const updateProgressBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const progressEl = progressRef.current;
        if (progressEl) {
            const videoProgress = controller?.getPlayingProgress() || 0;
            const duration = controller?.getDuration();
            if (duration) {
                progressEl.style.width = `${100 / duration * videoProgress}%`;
            }
        }
    }, [
        controller
    ]);
    const runTask = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const task = ()=>{
            if (controller?.getPlayingState() === "playing") {
                updateProgressBar();
                window.requestAnimationFrame(task);
            }
        };
        window.requestAnimationFrame(task);
    }, [
        controller,
        updateProgressBar
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (controller) {
            controller.subscribe("playingState", runTask);
        }
    }, [
        controller,
        runTask
    ]);
    const seek = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((x)=>{
        if (rectangleController && controller) {
            const seekingValue = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.calculateCurrentTimeByCursorPosition)(rectangleController, x, controller.getDuration());
            controller.seek(seekingValue);
            if (controller.getPlayingState() !== "playing") {
                window.requestAnimationFrame(updateProgressBar);
            }
        }
    }, [
        controller,
        rectangleController,
        updateProgressBar
    ]);
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        if (!gesturesController.getTouchStarted()) {
            seek(event.clientX);
        }
    }, [
        seek
    ]);
    const renderFramePreview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((x)=>{
        const framePreviewElement = framePreviewRef.current;
        const updatePosition = ()=>{
            if (rectangleController && framePreviewElement) {
                const cursorPosition = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.calculateCursorPosition)(rectangleController, x);
                const currentTime = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.calculateCurrentTimeByCursorPosition)(rectangleController, x, framePreviewElement.duration || 0);
                const leftPadding = rectangleController.getLeftPadding();
                framePreviewElement.currentTime = currentTime;
                framePreviewElement.style.left = `${cursorPosition - 50 + leftPadding}px`;
            }
        };
        window.requestAnimationFrame(updatePosition);
    }, [
        rectangleController
    ]);
    const handleMouseMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        if (!gesturesController.getTouchStarted()) {
            renderFramePreview(event.clientX);
        }
    }, [
        renderFramePreview
    ]);
    const setFramePreviewVisible = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const framePreviewElement = framePreviewRef.current;
        if (framePreviewElement) {
            framePreviewRef.current.style.visibility = "initial";
        }
    }, []);
    const hideFramePreview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const framePreviewElement = framePreviewRef.current;
        if (framePreviewElement) {
            framePreviewRef.current.style.visibility = "hidden";
        }
    }, []);
    const handleTouchMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            const x = touch.clientX;
            gesturesController.setLastFingerPosition(x);
            renderFramePreview(x);
        }
    }, [
        renderFramePreview
    ]);
    const handleTouchStart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        gesturesController.touch();
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            const x = touch.clientX;
            gesturesController.setLastFingerPosition(x);
        }
        setFramePreviewVisible();
    }, [
        setFramePreviewVisible
    ]);
    const handleTouchEnd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        gesturesController.touchEnd();
        seek(gesturesController.getLastFingerPosition());
        hideFramePreview();
    }, [
        hideFramePreview,
        seek
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_common_styles__WEBPACK_IMPORTED_MODULE_2__.StripValueWrapper, {
        onMouseMove: handleMouseMove,
        onClick: handleClick,
        onMouseEnter: setFramePreviewVisible,
        onMouseLeave: hideFramePreview,
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onTouchCancel: handleTouchEnd,
        onTouchMove: handleTouchMove,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_common_styles__WEBPACK_IMPORTED_MODULE_2__.StripValue, {
                ref: progressRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_common_styles__WEBPACK_IMPORTED_MODULE_2__.StripValuePlaceholder, {
                ref: placeholderRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Progress_styles__WEBPACK_IMPORTED_MODULE_3__.FramePreview, {
                preload: "metadata",
                src: controller?.getVideoSrc(),
                ref: framePreviewRef
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Progress);


/***/ }),

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


/***/ })

};
;