"use strict";
exports.id = 539;
exports.ids = [539];
exports.modules = {

/***/ 8539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cards)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Card({ hexCode , name , handleClick  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card",
        "data-color": hexCode,
        onClick: handleClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "color",
                style: {
                    backgroundColor: hexCode
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "color-text",
                style: {
                    color: hexCode
                },
                children: name
            })
        ]
    });
}
const randomBetween = (min, max)=>min + Math.floor(Math.random() * (max - min + 1));
const shuffleArray = (arr)=>{
    let j, x, i;
    for(i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
};
function Cards({ level , gameState , setGameState , setScore , score  }) {
    const [colorsArray, setColorsArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const generateColorsArray = async (level)=>{
        let newColors = [];
        let previousRGBs = [];
        for(let i = 0; i < level + 3; i++){
            let r = randomBetween(0, 254);
            let g = randomBetween(0, 254);
            let b = randomBetween(0, 254);
            let rgb = `${r},${g},${b}`;
            while(previousRGBs.includes(rgb)){
                r = randomBetween(0, 254);
                g = randomBetween(0, 254);
                b = randomBetween(0, 254);
                rgb = `${r},${g},${b}`;
            }
            previousRGBs.push(rgb);
            const response = await fetch(`https://www.thecolorapi.com/id?rgb=${r},${g},${b}`);
            const data = await response.json();
            newColors = [
                ...newColors,
                {
                    hex: data.hex.value,
                    name: data.name.value,
                    isClicked: false
                }
            ];
        }
        setColorsArray(newColors);
    };
    const handleCardClick = (e)=>{
        const hexCode = e.currentTarget.dataset.color;
        const array = [
            ...colorsArray
        ];
        array.map((color)=>{
            if (color.hex === hexCode) {
                if (color.isClicked) {
                    setGameState("game over");
                } else {
                    color.isClicked = true;
                    setScore(score + 1);
                }
            }
        });
        setColorsArray(shuffleArray(array));
        checkIfAllAreClicked() && setGameState("next level");
    };
    const checkIfAllAreClicked = ()=>{
        for(let i = 0; i < colorsArray.length; i++){
            if (!colorsArray[i].isClicked) {
                return false;
            }
        }
        return true;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        generateColorsArray(level);
    }, [
        level
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        gameState === "new game" && generateColorsArray(level);
        return ()=>{
            setGameState("");
        };
    }, [
        gameState,
        level,
        setGameState
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "colour-cards",
        children: colorsArray.map((color)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                hexCode: color.hex,
                name: color.name,
                handleClick: handleCardClick
            }, color.hex);
        })
    });
}


/***/ })

};
;