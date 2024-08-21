"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/colour-game",{

/***/ "./pages/colour-game/index.jsx":
/*!*************************************!*\
  !*** ./pages/colour-game/index.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Title */ \"./pages/colour-game/components/Title.jsx\");\n/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Stats */ \"./pages/colour-game/components/Stats.jsx\");\n/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Cards */ \"./pages/colour-game/components/Cards.jsx\");\n/* harmony import */ var _components_GameOver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/GameOver */ \"./pages/colour-game/components/GameOver.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_AnimatedBg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AnimatedBg */ \"./components/AnimatedBg/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nlet overlayStyle = {\n    visibility: \"hidden\",\n    opacity: \"0%\"\n};\nlet modalStyle = {\n    transform: \"translate(0%, 0%)\"\n};\nfunction App() {\n    _s();\n    const [level, setLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [gameState, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [highestScore, setHighestScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gameState === \"next level\" && setLevel(level + 1);\n        return ()=>{\n            setGameState(\"\");\n        };\n    }, [\n        gameState,\n        level\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (gameState === \"game over\") {\n            overlayStyle = {\n                opacity: \"100%\"\n            };\n            modalStyle = {\n                transform: \"translate(0%, 50%)\"\n            };\n        }\n        return ()=>{\n            overlayStyle = {\n                visibility: \"hidden\",\n                opacity: \"0%\"\n            };\n            modalStyle = {\n                transform: \"translate(0%, 0%)\"\n            };\n        };\n    }, [\n        gameState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        score > highestScore && setHighestScore(score);\n    }, [\n        score,\n        highestScore\n    ]);\n    const resetGame = ()=>{\n        setGameState(\"new game\");\n        setScore(0);\n        setLevel(1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crescendo Learning\"\n                    }, void 0, false, {\n                        fileName: \"/Users/crescendo/Documents/business/educational-games/pages/colour-game/index.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/title.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/crescendo/Documents/business/educational-games/pages/colour-game/index.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/crescendo/Documents/business/educational-games/pages/colour-game/index.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedBg__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/educational-games/pages/colour-game/index.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/crescendo/Documents/business/educational-games/pages/colour-game/index.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Stats__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        level: level,\n                        score: score,\n                        highestScore: highestScore\n                    }, void 0, false, {\n                        fileName: \"/Users/crescendo/Documents/business/educational-games/pages/colour-game/index.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/crescendo/Documents/business/educational-games/pages/colour-game/index.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    level: level,\n                    gameState: gameState,\n                    setGameState: setGameState,\n                    setScore: setScore,\n                    score: score\n                }, void 0, false, {\n                    fileName: \"/Users/crescendo/Documents/business/educational-games/pages/colour-game/index.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/educational-games/pages/colour-game/index.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameOver__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                highestScore: highestScore,\n                overlayStyle: overlayStyle,\n                modalStyle: modalStyle,\n                resetGame: resetGame\n            }, void 0, false, {\n                fileName: \"/Users/crescendo/Documents/business/educational-games/pages/colour-game/index.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"Ppu3Fta4mCWbIO04TXebD30y13A=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb2xvdXItZ2FtZS9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlDO0FBQ007QUFDQTtBQUNBO0FBQ0w7QUFDVztBQUNoQjtBQUN3QjtBQUVyRCxJQUFJUSxlQUFlO0lBQ2pCQyxZQUFZO0lBQ1pDLFNBQVM7QUFDWDtBQUVBLElBQUlDLGFBQWE7SUFDZkMsV0FBVztBQUNiO0FBRUEsU0FBU0MsTUFBTTs7SUFDYixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDZ0IsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDa0IsT0FBT0MsU0FBUyxHQUFHbkIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDb0IsY0FBY0MsZ0JBQWdCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUVqREksZ0RBQVNBLENBQUMsSUFBTTtRQUNkWSxjQUFjLGdCQUFnQkQsU0FBU0QsUUFBUTtRQUUvQyxPQUFPLElBQU07WUFDWEcsYUFBYTtRQUNmO0lBQ0YsR0FBRztRQUFDRDtRQUFXRjtLQUFNO0lBRXJCVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVksY0FBYyxhQUFhO1lBQzdCUixlQUFlO2dCQUNiRSxTQUFTO1lBQ1g7WUFDQUMsYUFBYTtnQkFDWEMsV0FBVztZQUNiO1FBQ0YsQ0FBQztRQUVELE9BQU8sSUFBTTtZQUNYSixlQUFlO2dCQUNiQyxZQUFZO2dCQUNaQyxTQUFTO1lBQ1g7WUFFQUMsYUFBYTtnQkFDWEMsV0FBVztZQUNiO1FBQ0Y7SUFDRixHQUFHO1FBQUNJO0tBQVU7SUFFZFosZ0RBQVNBLENBQUMsSUFBTTtRQUNkYyxRQUFRRSxnQkFBZ0JDLGdCQUFnQkg7SUFDMUMsR0FBRztRQUFDQTtRQUFPRTtLQUFhO0lBRXhCLE1BQU1FLFlBQVksSUFBTTtRQUN0QkwsYUFBYTtRQUNiRSxTQUFTO1FBQ1RKLFNBQVM7SUFDWDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1Qsa0RBQUlBOztrQ0FDSCw4REFBQ2lCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDbkIsOERBQVVBOzs7OzswQkFDWCw4REFBQ29COztrQ0FDQyw4REFBQzFCLHlEQUFLQTs7Ozs7a0NBQ04sOERBQUNDLHlEQUFLQTt3QkFBQ1ksT0FBT0E7d0JBQU9JLE9BQU9BO3dCQUFPRSxjQUFjQTs7Ozs7Ozs7Ozs7OzBCQUVuRCw4REFBQ1E7MEJBQ0MsNEVBQUN6Qix5REFBS0E7b0JBQ0pXLE9BQU9BO29CQUNQRSxXQUFXQTtvQkFDWEMsY0FBY0E7b0JBQ2RFLFVBQVVBO29CQUNWRCxPQUFPQTs7Ozs7Ozs7Ozs7MEJBR1gsOERBQUNiLDREQUFRQTtnQkFDUGUsY0FBY0E7Z0JBQ2RaLGNBQWNBO2dCQUNkRyxZQUFZQTtnQkFDWlcsV0FBV0E7Ozs7Ozs7O0FBSW5CO0dBMUVTVDtLQUFBQTtBQTRFVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb2xvdXItZ2FtZS9pbmRleC5qc3g/MmFhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuL2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBTdGF0cyBmcm9tIFwiLi9jb21wb25lbnRzL1N0YXRzXCI7XG5pbXBvcnQgQ2FyZHMgZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR2FtZU92ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9HYW1lT3ZlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEFuaW1hdGVkQmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQW5pbWF0ZWRCZ1wiO1xuXG5sZXQgb3ZlcmxheVN0eWxlID0ge1xuICB2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxuICBvcGFjaXR5OiBcIjAlXCIsXG59O1xuXG5sZXQgbW9kYWxTdHlsZSA9IHtcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwJSwgMCUpXCIsXG59O1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtnYW1lU3RhdGUsIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2hpZ2hlc3RTY29yZSwgc2V0SGlnaGVzdFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2FtZVN0YXRlID09PSBcIm5leHQgbGV2ZWxcIiAmJiBzZXRMZXZlbChsZXZlbCArIDEpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldEdhbWVTdGF0ZShcIlwiKTtcbiAgICB9O1xuICB9LCBbZ2FtZVN0YXRlLCBsZXZlbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGdhbWVTdGF0ZSA9PT0gXCJnYW1lIG92ZXJcIikge1xuICAgICAgb3ZlcmxheVN0eWxlID0ge1xuICAgICAgICBvcGFjaXR5OiBcIjEwMCVcIixcbiAgICAgIH07XG4gICAgICBtb2RhbFN0eWxlID0ge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDAlLCA1MCUpXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBvdmVybGF5U3R5bGUgPSB7XG4gICAgICAgIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXG4gICAgICAgIG9wYWNpdHk6IFwiMCVcIixcbiAgICAgIH07XG5cbiAgICAgIG1vZGFsU3R5bGUgPSB7XG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMCUsIDAlKVwiLFxuICAgICAgfTtcbiAgICB9O1xuICB9LCBbZ2FtZVN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY29yZSA+IGhpZ2hlc3RTY29yZSAmJiBzZXRIaWdoZXN0U2NvcmUoc2NvcmUpO1xuICB9LCBbc2NvcmUsIGhpZ2hlc3RTY29yZV0pO1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBzZXRHYW1lU3RhdGUoXCJuZXcgZ2FtZVwiKTtcbiAgICBzZXRTY29yZSgwKTtcbiAgICBzZXRMZXZlbCgxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZXNjZW5kbyBMZWFybmluZzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3RpdGxlLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QW5pbWF0ZWRCZyAvPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPFRpdGxlIC8+XG4gICAgICAgIDxTdGF0cyBsZXZlbD17bGV2ZWx9IHNjb3JlPXtzY29yZX0gaGlnaGVzdFNjb3JlPXtoaWdoZXN0U2NvcmV9IC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8Q2FyZHNcbiAgICAgICAgICBsZXZlbD17bGV2ZWx9XG4gICAgICAgICAgZ2FtZVN0YXRlPXtnYW1lU3RhdGV9XG4gICAgICAgICAgc2V0R2FtZVN0YXRlPXtzZXRHYW1lU3RhdGV9XG4gICAgICAgICAgc2V0U2NvcmU9e3NldFNjb3JlfVxuICAgICAgICAgIHNjb3JlPXtzY29yZX1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxHYW1lT3ZlclxuICAgICAgICBoaWdoZXN0U2NvcmU9e2hpZ2hlc3RTY29yZX1cbiAgICAgICAgb3ZlcmxheVN0eWxlPXtvdmVybGF5U3R5bGV9XG4gICAgICAgIG1vZGFsU3R5bGU9e21vZGFsU3R5bGV9XG4gICAgICAgIHJlc2V0R2FtZT17cmVzZXRHYW1lfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVGl0bGUiLCJTdGF0cyIsIkNhcmRzIiwidXNlRWZmZWN0IiwiR2FtZU92ZXIiLCJIZWFkIiwiQW5pbWF0ZWRCZyIsIm92ZXJsYXlTdHlsZSIsInZpc2liaWxpdHkiLCJvcGFjaXR5IiwibW9kYWxTdHlsZSIsInRyYW5zZm9ybSIsIkFwcCIsImxldmVsIiwic2V0TGV2ZWwiLCJnYW1lU3RhdGUiLCJzZXRHYW1lU3RhdGUiLCJzY29yZSIsInNldFNjb3JlIiwiaGlnaGVzdFNjb3JlIiwic2V0SGlnaGVzdFNjb3JlIiwicmVzZXRHYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImhlYWRlciIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/colour-game/index.jsx\n"));

/***/ })

});