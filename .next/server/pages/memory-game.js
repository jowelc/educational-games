"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330,659,78,925];
exports.modules = {

/***/ 5596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Card(props) {
    function handleChoice() {
        if (!props.disabled) props.handleChoice(props.card);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "memory-card",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: props.flipped ? "flipped" : "",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: `front ${props.card.matched ? "matched" : ""}`,
                    src: props.card.src,
                    alt: "memory-card front"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "back",
                    src: "/images/card_back.png",
                    alt: "card back",
                    onClick: ()=>handleChoice()
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 5369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ memory_game)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/memory-game/components/Card/Card.jsx
var Card = __webpack_require__(5596);
;// CONCATENATED MODULE: external "next/link.js"
const link_js_namespaceObject = require("next/link.js");
var link_js_default = /*#__PURE__*/__webpack_require__.n(link_js_namespaceObject);
;// CONCATENATED MODULE: external "next/head.js"
const head_js_namespaceObject = require("next/head.js");
var head_js_default = /*#__PURE__*/__webpack_require__.n(head_js_namespaceObject);
;// CONCATENATED MODULE: ./pages/memory-game/index.jsx





const initialCards = [
    {
        src: "/images/bulbasaur.png",
        matched: false
    },
    {
        src: "/images/butterfree.png",
        matched: false
    },
    {
        src: "/images/charmander.png",
        matched: false
    },
    {
        src: "/images/pidgeotto.png",
        matched: false
    },
    {
        src: "/images/pikachu.png",
        matched: false
    },
    {
        src: "/images/squirtle.png",
        matched: false
    }
];
function App() {
    const [cards, setCards] = (0,external_react_.useState)([]);
    const [turn, setTurn] = (0,external_react_.useState)(0);
    const [choiceOne, setChoiceOne] = (0,external_react_.useState)(null);
    const [choiceTwo, setChoiceTwo] = (0,external_react_.useState)(null);
    const [disabled, setDisabled] = (0,external_react_.useState)(true);
    const [startFlip, setStartFlip] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setStartFlip(false);
        }, 1000);
        shuffleCards();
    }, []);
    function shuffleCards() {
        //setCards(null)
        const shuffledCards = [
            ...initialCards,
            ...initialCards
        ].sort(()=>Math.random() - 0.5).map((card)=>({
                ...card,
                id: Math.random()
            }));
        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurn(0);
        setDisabled(false);
        setStartFlip(true);
        setTimeout(()=>{
            setStartFlip(false);
        }, 1000);
    }
    function handleChoice(card) {
        choiceOne ? choiceOne.id !== card.id && setChoiceTwo(card) : setChoiceOne(card);
    }
    function resetTurn() {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurn((prevTurn)=>prevTurn + 1);
        setDisabled(false);
    }
    (0,external_react_.useEffect)(()=>{
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setCards((prevCards)=>{
                    return prevCards.map((card)=>{
                        if (card.src === choiceOne.src) {
                            return {
                                ...card,
                                matched: true
                            };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurn();
            } else {
                setTimeout(()=>{
                    resetTurn();
                }, 1000);
            }
        }
    }, [
        choiceOne,
        choiceTwo
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "memory-container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_js_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Crescendo Learning"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/title.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_js_default()), {
                            rel: "icon",
                            href: "/",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: shuffleCards,
                        children: "New Game"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid",
                children: cards.map((card)=>/*#__PURE__*/ jsx_runtime_.jsx(Card["default"], {
                        card: card,
                        handleChoice: handleChoice,
                        flipped: card === choiceOne || card === choiceTwo || card.matched || startFlip,
                        disabled: disabled,
                        matched: card.matched
                    }, card.id))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "paragraph",
                children: [
                    "Turns: ",
                    turn
                ]
            })
        ]
    });
}
/* harmony default export */ const memory_game = (App);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5369));
module.exports = __webpack_exports__;

})();