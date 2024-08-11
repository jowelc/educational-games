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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavigationBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux_actions_actionSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/actionSearch */ \"./redux/actions/actionSearch.tsx\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction NavigationBar() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const cartProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.cartProducts);\n    const [loginEmail, setLoginEmail] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);\n    const [totalQuantity, setTotalQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);\n    const [searchPlayer, setSearchPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const { addSearchPlayer , clearSearch  } = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.bindActionCreators)(_redux_actions_actionSearch__WEBPACK_IMPORTED_MODULE_8__, dispatch);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        setLoginEmail(localStorage.getItem(\"email\"));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        let totalQuantity = 0;\n        cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.forEach((product)=>{\n            totalQuantity = totalQuantity + parseInt(product.quantitySelected);\n        });\n        setTotalQuantity(totalQuantity);\n    }, [\n        cartProducts\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (searchPlayer == \"\") {\n            clearSearch();\n        }\n    }, [\n        searchPlayer\n    ]);\n    const handleSearch = (e)=>{\n        e.preventDefault();\n        addSearchPlayer(searchPlayer);\n    };\n    const logout = (e)=>{\n        e.preventDefault();\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.auth.signOut();\n        localStorage.removeItem(\"email\");\n        localStorage.removeItem(\"userId\");\n        router.push(\"/login\");\n    };\n    const checkUser = (e)=>{\n        e.preventDefault();\n        if (!loginEmail) {\n            router.push(\"/login\");\n        } else {\n            router.push(\"/profile\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Navbar, {\n        bg: \"light\",\n        expand: \"lg\",\n        className: \"bg-black py-sm-2\",\n        id: \"myNavbar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    className: \"navbar-brand order-lg-0 col-md-6 col-lg-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/title.png\",\n                        alt: \"contact\",\n                        width: \"1000\",\n                        height: \"90\"\n                    }, void 0, false, {\n                        fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex nav-btns order-lg-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/cart\",\n                            className: \"btn position-sticky d-flex align-items-center justify-content-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faShoppingCart,\n                                    height: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ms-1\",\n                                    children: [\n                                        \"(\",\n                                        totalQuantity,\n                                        \") \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/profile\",\n                            className: \"btn position-sticky\",\n                            onClick: checkUser,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faMessage,\n                                    height: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"nav-btn-label\",\n                                    children: \" Profile \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        loginEmail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/login\",\n                            className: \"btn position-sticky\",\n                            onClick: logout,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faSignOut,\n                                height: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"searchbar\",\n                    className: \"order-lg-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Form, {\n                        className: \"d-flex\",\n                        onSubmit: handleSearch,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.FormControl, {\n                                type: \"search\",\n                                className: \"w-100\",\n                                placeholder: \"Search By Player's Name\",\n                                \"aria-label\": \"Search\",\n                                value: searchPlayer,\n                                onChange: (e)=>setSearchPlayer(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"nav-btns\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                    className: \"btn position-relative m-0\",\n                                    onClick: handleSearch,\n                                    type: \"button\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faSearch,\n                                        height: 20\n                                    }, void 0, false, {\n                                        fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/crescendo/Documents/business/educational-games/components/NavigationBar.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(NavigationBar, \"h7ZrLfreQrGSDcR2JMylLQMQupY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = NavigationBar;\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNtRCxNQUFLOzRCQUFTRixXQUFVOzRCQUFzQlUsU0FBU2pCO3NDQUMzRCw0RUFBQ3hDLDJFQUFlQTtnQ0FBQ3VELE1BQU1uRCx5RUFBU0E7Z0NBQUVpRCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNaEQsOERBQUNDO29CQUFJTixJQUFHO29CQUFZRCxXQUFVOzhCQUM1Qiw0RUFBQ3hDLGtEQUFJQTt3QkFBQ3dDLFdBQVU7d0JBQVNXLFVBQVVyQjs7MENBQ2pDLDhEQUFDN0IseURBQVdBO2dDQUNWbUQsTUFBSztnQ0FDTFosV0FBVTtnQ0FDVmEsYUFBWTtnQ0FDWkMsY0FBVztnQ0FDWEMsT0FBT3BDO2dDQUNQcUMsVUFBVSxDQUFDekIsSUFBTVgsZ0JBQWdCVyxFQUFFMEIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7MENBRWpELDhEQUFDUjtnQ0FBSVAsV0FBVTswQ0FDYiw0RUFBQzFDLG9EQUFNQTtvQ0FDTDBDLFdBQVU7b0NBQ1ZVLFNBQVNwQjtvQ0FDVHNCLE1BQUs7OENBRUwsNEVBQUMzRCwyRUFBZUE7d0NBQUN1RCxNQUFNcEQsd0VBQVFBO3dDQUFFa0QsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekQsQ0FBQztHQTNHdUJuQzs7UUFDUEwsa0RBQVNBO1FBQ0hGLG9EQUFXQTtRQUlmRCxvREFBV0E7OztLQU5OUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIudHN4P2I3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQge1xuICBmYVNob3BwaW5nQ2FydCxcbiAgZmFNZXNzYWdlLFxuICBmYVNlYXJjaCxcbiAgZmFTaWduT3V0LFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgRm9ybSwgRm9ybUNvbnRyb2wsIE5hdmJhciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25TZWFyY2ggZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uU2VhcmNoXCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uQmFyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgY2FydFByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNhcnRQcm9kdWN0cyk7XG4gIGNvbnN0IFtsb2dpbkVtYWlsLCBzZXRMb2dpbkVtYWlsXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdG90YWxRdWFudGl0eSwgc2V0VG90YWxRdWFudGl0eV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlYXJjaFBsYXllciwgc2V0U2VhcmNoUGxheWVyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGFkZFNlYXJjaFBsYXllciwgY2xlYXJTZWFyY2ggfSA9IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25TZWFyY2gsIGRpc3BhdGNoKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9naW5FbWFpbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSlcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdG90YWxRdWFudGl0eSA9IDA7XG4gICAgY2FydFByb2R1Y3RzPy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICB0b3RhbFF1YW50aXR5ID0gdG90YWxRdWFudGl0eSArIHBhcnNlSW50KHByb2R1Y3QucXVhbnRpdHlTZWxlY3RlZClcbiAgICB9KTtcbiAgICBzZXRUb3RhbFF1YW50aXR5KHRvdGFsUXVhbnRpdHkpXG4gIH0sIFtjYXJ0UHJvZHVjdHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2hQbGF5ZXIgPT0gXCJcIikge1xuICAgICAgY2xlYXJTZWFyY2goKVxuICAgIH1cbiAgfSwgW3NlYXJjaFBsYXllcl0pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFNlYXJjaFBsYXllcihzZWFyY2hQbGF5ZXIpXG4gIH1cblxuICBjb25zdCBsb2dvdXQgPSAoZTogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDsgfSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhdXRoLnNpZ25PdXQoKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZW1haWwnKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySWQnKVxuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrVXNlciA9IChlOiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkOyB9KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbG9naW5FbWFpbCkge1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZScpXG4gICAgfVxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT1cImJnLWJsYWNrIHB5LXNtLTJcIiBpZD1cIm15TmF2YmFyXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgb3JkZXItbGctMCBjb2wtbWQtNiBjb2wtbGctM1wiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi90aXRsZS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiY29udGFjdFwiXG4gICAgICAgICAgICB3aWR0aD1cIjEwMDBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiOTBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBuYXYtYnRucyBvcmRlci1sZy0yXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCIgY2xhc3NOYW1lPVwiYnRuIHBvc2l0aW9uLXN0aWNreSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0NhcnR9IGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtcy0xXCI+KHt0b3RhbFF1YW50aXR5fSkgPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBjbGFzc05hbWU9XCJidG4gcG9zaXRpb24tc3RpY2t5XCIgb25DbGljaz17Y2hlY2tVc2VyfT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNZXNzYWdlfSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWJ0bi1sYWJlbFwiPiBQcm9maWxlIDwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAge2xvZ2luRW1haWwgJiZcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJidG4gcG9zaXRpb24tc3RpY2t5XCIgb25DbGljaz17bG9nb3V0fT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNpZ25PdXR9IGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hiYXJcIiBjbGFzc05hbWU9XCJvcmRlci1sZy0xXCI+XG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4XCIgb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggQnkgUGxheWVyJ3MgTmFtZVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGxheWVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFBsYXllcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYnRuc1wiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHBvc2l0aW9uLXJlbGF0aXZlIG0tMFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFTaG9wcGluZ0NhcnQiLCJmYU1lc3NhZ2UiLCJmYVNlYXJjaCIsImZhU2lnbk91dCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJGb3JtQ29udHJvbCIsIk5hdmJhciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJhdXRoIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhY3Rpb25TZWFyY2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJOYXZpZ2F0aW9uQmFyIiwicm91dGVyIiwiY2FydFByb2R1Y3RzIiwic3RhdGUiLCJsb2dpbkVtYWlsIiwic2V0TG9naW5FbWFpbCIsInRvdGFsUXVhbnRpdHkiLCJzZXRUb3RhbFF1YW50aXR5Iiwic2VhcmNoUGxheWVyIiwic2V0U2VhcmNoUGxheWVyIiwiZGlzcGF0Y2giLCJhZGRTZWFyY2hQbGF5ZXIiLCJjbGVhclNlYXJjaCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmb3JFYWNoIiwicHJvZHVjdCIsInBhcnNlSW50IiwicXVhbnRpdHlTZWxlY3RlZCIsImhhbmRsZVNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ291dCIsInNpZ25PdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImNoZWNrVXNlciIsImJnIiwiZXhwYW5kIiwiY2xhc3NOYW1lIiwiaWQiLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJpY29uIiwic3BhbiIsIm9uQ2xpY2siLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavigationBar.tsx\n"));

/***/ })

});