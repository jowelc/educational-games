"use strict";
exports.id = 137;
exports.ids = [137];
exports.modules = {

/***/ 8137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Player_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3041);
/* harmony import */ var _controllers_video_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8451);
/* harmony import */ var _progress_Progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var _timer_Timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(994);
/* harmony import */ var _volume_Volume__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2615);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9774);
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3556);
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([screenfull__WEBPACK_IMPORTED_MODULE_6__]);
screenfull__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Player = ({ src  })=>{
    const [element, setElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [controller, setController] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [playingState, setPlayingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("paused");
    const [isFullscreen, setIsFullscreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [wasFirstPlayed, setWasFirstPlayed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (screenfull__WEBPACK_IMPORTED_MODULE_6__["default"].isEnabled) {
            screenfull__WEBPACK_IMPORTED_MODULE_6__["default"].on("change", ()=>{
                setIsFullscreen(screenfull__WEBPACK_IMPORTED_MODULE_6__["default"].isFullscreen);
            });
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (element) {
            const newVideoController = new _controllers_video_controller__WEBPACK_IMPORTED_MODULE_8__.VideoController(element);
            setController(newVideoController);
            setWasFirstPlayed(false);
            return ()=>{
                newVideoController.dispose();
            };
        }
        return ()=>{};
    }, [
        element,
        src
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (controller) {
            controller.subscribe("playingState", async ()=>{
                setPlayingState(controller.getPlayingState());
            });
            controller.subscribe("seeking", async ()=>setPlayingState(controller.getPlayingState()));
        }
    }, [
        controller
    ]);
    const handlePlay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        controller?.play();
    }, [
        controller
    ]);
    const handlePause = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        controller?.pause();
    }, [
        controller
    ]);
    const handlePlayAgain = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        controller?.replay();
    }, [
        controller
    ]);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleToggleFullscreen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (screenfull__WEBPACK_IMPORTED_MODULE_6__["default"].isEnabled) {
            if (containerRef.current) {
                screenfull__WEBPACK_IMPORTED_MODULE_6__["default"].toggle(containerRef.current);
            }
        } else {
            if (element && element?.webkitSupportsPresentationMode("fullscreen")) {
                element?.webkitSetPresentationMode("fullscreen");
            }
        }
    }, [
        element
    ]);
    const handleContainerClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (controller?.getPlayingState() === "paused") {
            setWasFirstPlayed(true);
            controller?.play();
        }
        if (controller?.getPlayingState() === "playing") {
            controller?.pause();
        }
    }, [
        controller
    ]);
    const handleControllsClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        event.stopPropagation();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Player_styles__WEBPACK_IMPORTED_MODULE_2__.StyledContainer, {
        onClick: handleContainerClick,
        ref: containerRef,
        children: [
            !wasFirstPlayed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player_styles__WEBPACK_IMPORTED_MODULE_2__.FirstPlayOverlay, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player_styles__WEBPACK_IMPORTED_MODULE_2__.FirstPlayButton, {
                    children: "Click to Play"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player_styles__WEBPACK_IMPORTED_MODULE_2__.StyledPlayer, {
                playsInline: true,
                muted: true,
                preload: "metadata",
                ref: setElement,
                src: src
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Player_styles__WEBPACK_IMPORTED_MODULE_2__.StyledControls, {
                isIOS: mobile_device_detect__WEBPACK_IMPORTED_MODULE_7__.isIOS,
                onClick: handleControllsClick,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            playingState === "paused" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player_styles__WEBPACK_IMPORTED_MODULE_2__.PlayPauseButton, {
                                onClick: handlePlay,
                                children: "play"
                            }),
                            playingState === "playing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player_styles__WEBPACK_IMPORTED_MODULE_2__.PlayPauseButton, {
                                onClick: handlePause,
                                children: "pause"
                            }),
                            playingState === "ended" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player_styles__WEBPACK_IMPORTED_MODULE_2__.PlayPauseButton, {
                                onClick: handlePlayAgain,
                                children: "replay"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Player_styles__WEBPACK_IMPORTED_MODULE_2__.ProgressAndTimerContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_progress_Progress__WEBPACK_IMPORTED_MODULE_3__.Progress, {
                                controller: controller
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_timer_Timer__WEBPACK_IMPORTED_MODULE_4__.Timer, {
                                controller: controller
                            })
                        ]
                    }),
                    !mobile_device_detect__WEBPACK_IMPORTED_MODULE_7__.isIOS && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_volume_Volume__WEBPACK_IMPORTED_MODULE_5__.Volume, {
                        controller: controller
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player_styles__WEBPACK_IMPORTED_MODULE_2__.FullscreenButton, {
                        onClick: handleToggleFullscreen,
                        children: isFullscreen ? "]  [" : "[  ]"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;