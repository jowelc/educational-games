(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,78];
exports.modules = {

/***/ 7830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: ./node_modules/react-loading-skeleton/dist/skeleton.css
var skeleton = __webpack_require__(6593);
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-promise"
const external_redux_promise_namespaceObject = require("redux-promise");
var external_redux_promise_default = /*#__PURE__*/__webpack_require__.n(external_redux_promise_namespaceObject);
;// CONCATENATED MODULE: external "redux-promise-middleware"
const external_redux_promise_middleware_namespaceObject = require("redux-promise-middleware");
var external_redux_promise_middleware_default = /*#__PURE__*/__webpack_require__.n(external_redux_promise_middleware_namespaceObject);
;// CONCATENATED MODULE: external "redux-logger"
const external_redux_logger_namespaceObject = require("redux-logger");
var external_redux_logger_default = /*#__PURE__*/__webpack_require__.n(external_redux_logger_namespaceObject);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./redux/reducers/cartReducer.tsx
const initialState = [];
const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            let updatedProductList = [];
            const checkIfProductExist = ()=>{
                var productExist = false;
                state.forEach((product)=>{
                    if (product.productName === action.payload.productName) {
                        productExist = true;
                    }
                });
                return productExist;
            };
            if (checkIfProductExist()) {
                state.forEach((product)=>{
                    if (product.productName === action.payload.productName) {
                        updatedProductList.push({
                            ...product,
                            quantitySelected: product.quantity == product.quantitySelected ? product.quantity : product.quantitySelected + 1
                        });
                    } else {
                        updatedProductList.push(product);
                    }
                });
                return updatedProductList;
            } else {
                return [
                    {
                        ...action.payload,
                        quantitySelected: 1
                    },
                    ...state
                ];
            }
        case "UPDATE_CART":
            return action.payload;
        case "DELETE_PRODUCT_CART":
            return [
                ...state
            ].filter((product)=>product.id !== action.payload);
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
};
/* harmony default export */ const reducers_cartReducer = (cartReducer);

;// CONCATENATED MODULE: ./redux/reducers/searchReducer.tsx
const searchReducer_initialState = "";
const searchReducer = (state = searchReducer_initialState, action)=>{
    switch(action.type){
        case "SEARCH_PLAYER":
            return action.payload;
        case "CLEAR_SEARCH":
            return "";
        default:
            return state;
    }
};
/* harmony default export */ const reducers_searchReducer = (searchReducer);

;// CONCATENATED MODULE: ./redux/store.tsx






// Reducers


const makeStore = ()=>(0,toolkit_.configureStore)({
        reducer: {
            cartProducts: reducers_cartReducer,
            searchPlayer: reducers_searchReducer
        },
        middleware: [
            (external_redux_thunk_default()),
            (external_redux_promise_middleware_default()),
            (external_redux_promise_default()),
            (external_redux_logger_default())
        ]
    });
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);

;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 6593:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7830));
module.exports = __webpack_exports__;

})();