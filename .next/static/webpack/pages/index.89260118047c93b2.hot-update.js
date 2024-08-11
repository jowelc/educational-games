"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NavigationBar.tsx":
/*!**************************************!*\
  !*** ./components/NavigationBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavigationBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux_actions_actionSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/actionSearch */ \"./redux/actions/actionSearch.tsx\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction NavigationBar() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const cartProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.cartProducts);\n    const [loginEmail, setLoginEmail] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);\n    const [totalQuantity, setTotalQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);\n    const [searchPlayer, setSearchPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const { addSearchPlayer , clearSearch  } = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.bindActionCreators)(_redux_actions_actionSearch__WEBPACK_IMPORTED_MODULE_8__, dispatch);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        setLoginEmail(localStorage.getItem(\"email\"));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        let totalQuantity = 0;\n        cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.forEach((product)=>{\n            totalQuantity = totalQuantity + parseInt(product.quantitySelected);\n        });\n        setTotalQuantity(totalQuantity);\n    }, [\n        cartProducts\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (searchPlayer == \"\") {\n            clearSearch();\n        }\n    }, [\n        searchPlayer\n    ]);\n    const handleSearch = (e)=>{\n        e.preventDefault();\n        addSearchPlayer(searchPlayer);\n    };\n    const logout = (e)=>{\n        e.preventDefault();\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.auth.signOut();\n        localStorage.removeItem(\"email\");\n        localStorage.removeItem(\"userId\");\n        router.push(\"/login\");\n    };\n    const checkUser = (e)=>{\n        e.preventDefault();\n        if (!loginEmail) {\n            router.push(\"/login\");\n        } else {\n            router.push(\"/profile\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Navbar, {\n        bg: \"light\",\n        expand: \"lg\",\n        className: \"bg-black py-sm-2\",\n        id: \"myNavbar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    className: \"navbar-brand order-lg-0 col-md-6 col-lg-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/title.png\",\n                        alt: \"contact\",\n                        width: \"1000\",\n                        height: \"90\"\n                    }, void 0, false, {\n                        fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex nav-btns order-lg-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/cart\",\n                            className: \"btn position-sticky d-flex align-items-center justify-content-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: fa,\n                                height: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/profile\",\n                            className: \"btn position-sticky\",\n                            onClick: checkUser,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faMessage,\n                                    height: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"nav-btn-label\",\n                                    children: \" Profile \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        loginEmail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/login\",\n                            className: \"btn position-sticky\",\n                            onClick: logout,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faSignOut,\n                                height: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"searchbar\",\n                    className: \"order-lg-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Form, {\n                        className: \"d-flex\",\n                        onSubmit: handleSearch,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.FormControl, {\n                                type: \"search\",\n                                className: \"w-100\",\n                                placeholder: \"Search By Player's Name\",\n                                \"aria-label\": \"Search\",\n                                value: searchPlayer,\n                                onChange: (e)=>setSearchPlayer(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"nav-btns\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                    className: \"btn position-relative m-0\",\n                                    onClick: handleSearch,\n                                    type: \"button\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faSearch,\n                                        height: 20\n                                    }, void 0, false, {\n                                        fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(NavigationBar, \"h7ZrLfreQrGSDcR2JMylLQMQupY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = NavigationBar;\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0QsTUFBTW5ELHlFQUFTQTtnQ0FBRWlELFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU1oRCw4REFBQ0M7b0JBQUlOLElBQUc7b0JBQVlELFdBQVU7OEJBQzVCLDRFQUFDeEMsa0RBQUlBO3dCQUFDd0MsV0FBVTt3QkFBU1ksVUFBVXRCOzswQ0FDakMsOERBQUM3Qix5REFBV0E7Z0NBQ1ZvRCxNQUFLO2dDQUNMYixXQUFVO2dDQUNWYyxhQUFZO2dDQUNaQyxjQUFXO2dDQUNYQyxPQUFPckM7Z0NBQ1BzQyxVQUFVLENBQUMxQixJQUFNWCxnQkFBZ0JXLEVBQUUyQixNQUFNLENBQUNGLEtBQUs7Ozs7OzswQ0FFakQsOERBQUNUO2dDQUFJUCxXQUFVOzBDQUNiLDRFQUFDMUMsb0RBQU1BO29DQUNMMEMsV0FBVTtvQ0FDVlUsU0FBU3BCO29DQUNUdUIsTUFBSzs4Q0FFTCw0RUFBQzNELDJFQUFlQTt3Q0FBQ3NELE1BQU1wRCx3RUFBUUE7d0NBQUVrRCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6RCxDQUFDO0dBMUd1Qm5DOztRQUNQTCxrREFBU0E7UUFDSEYsb0RBQVdBO1FBSWZELG9EQUFXQTs7O0tBTk5RIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci50c3g/YjdmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7XG4gIGZhTWVzc2FnZSxcbiAgZmFTZWFyY2gsXG4gIGZhU2lnbk91dCxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEZvcm0sIEZvcm1Db250cm9sLCBOYXZiYXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgYWN0aW9uU2VhcmNoIGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2FjdGlvblNlYXJjaFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbkJhcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGNhcnRQcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jYXJ0UHJvZHVjdHMpO1xuICBjb25zdCBbbG9naW5FbWFpbCwgc2V0TG9naW5FbWFpbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RvdGFsUXVhbnRpdHksIHNldFRvdGFsUXVhbnRpdHldID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzZWFyY2hQbGF5ZXIsIHNldFNlYXJjaFBsYXllcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBhZGRTZWFyY2hQbGF5ZXIsIGNsZWFyU2VhcmNoIH0gPSBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uU2VhcmNoLCBkaXNwYXRjaCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvZ2luRW1haWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRvdGFsUXVhbnRpdHkgPSAwO1xuICAgIGNhcnRQcm9kdWN0cz8uZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgdG90YWxRdWFudGl0eSA9IHRvdGFsUXVhbnRpdHkgKyBwYXJzZUludChwcm9kdWN0LnF1YW50aXR5U2VsZWN0ZWQpXG4gICAgfSk7XG4gICAgc2V0VG90YWxRdWFudGl0eSh0b3RhbFF1YW50aXR5KVxuICB9LCBbY2FydFByb2R1Y3RzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoUGxheWVyID09IFwiXCIpIHtcbiAgICAgIGNsZWFyU2VhcmNoKClcbiAgICB9XG4gIH0sIFtzZWFyY2hQbGF5ZXJdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRTZWFyY2hQbGF5ZXIoc2VhcmNoUGxheWVyKVxuICB9XG5cbiAgY29uc3QgbG9nb3V0ID0gKGU6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7IH0pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXV0aC5zaWduT3V0KCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2VtYWlsJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJylcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgfTtcblxuICBjb25zdCBjaGVja1VzZXIgPSAoZTogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDsgfSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWxvZ2luRW1haWwpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKVxuICAgIH1cbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJiZy1ibGFjayBweS1zbS0yXCIgaWQ9XCJteU5hdmJhclwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIG9yZGVyLWxnLTAgY29sLW1kLTYgY29sLWxnLTNcIlxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvdGl0bGUucG5nXCJcbiAgICAgICAgICAgIGFsdD1cImNvbnRhY3RcIlxuICAgICAgICAgICAgd2lkdGg9XCIxMDAwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjkwXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbmF2LWJ0bnMgb3JkZXItbGctMlwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiIGNsYXNzTmFtZT1cImJ0biBwb3NpdGlvbi1zdGlja3kgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhfSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBjbGFzc05hbWU9XCJidG4gcG9zaXRpb24tc3RpY2t5XCIgb25DbGljaz17Y2hlY2tVc2VyfT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNZXNzYWdlfSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWJ0bi1sYWJlbFwiPiBQcm9maWxlIDwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAge2xvZ2luRW1haWwgJiZcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJidG4gcG9zaXRpb24tc3RpY2t5XCIgb25DbGljaz17bG9nb3V0fT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNpZ25PdXR9IGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hiYXJcIiBjbGFzc05hbWU9XCJvcmRlci1sZy0xXCI+XG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4XCIgb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggQnkgUGxheWVyJ3MgTmFtZVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGxheWVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFBsYXllcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYnRuc1wiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHBvc2l0aW9uLXJlbGF0aXZlIG0tMFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFNZXNzYWdlIiwiZmFTZWFyY2giLCJmYVNpZ25PdXQiLCJCdXR0b24iLCJDb250YWluZXIiLCJGb3JtIiwiRm9ybUNvbnRyb2wiLCJOYXZiYXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiYXV0aCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYWN0aW9uU2VhcmNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiTmF2aWdhdGlvbkJhciIsInJvdXRlciIsImNhcnRQcm9kdWN0cyIsInN0YXRlIiwibG9naW5FbWFpbCIsInNldExvZ2luRW1haWwiLCJ0b3RhbFF1YW50aXR5Iiwic2V0VG90YWxRdWFudGl0eSIsInNlYXJjaFBsYXllciIsInNldFNlYXJjaFBsYXllciIsImRpc3BhdGNoIiwiYWRkU2VhcmNoUGxheWVyIiwiY2xlYXJTZWFyY2giLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZm9yRWFjaCIsInByb2R1Y3QiLCJwYXJzZUludCIsInF1YW50aXR5U2VsZWN0ZWQiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2dvdXQiLCJzaWduT3V0IiwicmVtb3ZlSXRlbSIsInB1c2giLCJjaGVja1VzZXIiLCJiZyIsImV4cGFuZCIsImNsYXNzTmFtZSIsImlkIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGl2IiwiaWNvbiIsImZhIiwib25DbGljayIsInNwYW4iLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavigationBar.tsx\n"));

/***/ })

});