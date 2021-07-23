exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 8602:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8966);
/* harmony import */ var _GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(555);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);









const Carddeck = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/* import() */ 543).then(__webpack_require__.bind(__webpack_require__, 9543)), {
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9543)],
    modules: ["..\\components\\BusesComponents\\Muzeum.js -> " + "./Carddeck"]
  }
});

const Muzeum = () => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const muzeumdata = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.app.muzeumData);
  let idd = 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
    id: "muzeum-cards",
    initial: "initial",
    animate: "animate",
    variants: _GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_6__/* .muzeumAnimation */ .Vc,
    exit: "exit",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
      triggerOnce: true,
      direction: "down",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        className: "text-center text-muted my-4",
        id: "buses-text",
        children: locale === "en" ? "Our museum" : "Múzeumunk"
      })
    }), muzeumdata === null || muzeumdata === void 0 ? void 0 : muzeumdata.map((item, index, array) => {
      if ((index + 1) % 2 !== 0) {
        idd++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Carddeck, {
          idd: idd,
          itemid: index + 1,
          item: item,
          nextitemid: index + 2,
          nextitem: array[index + 1],
          what: "Muzeum"
        }, index);
      } else {
        return null;
      }
    })]
  }, "muzeum");
};

/* harmony default export */ __webpack_exports__["default"] = (Muzeum);

/***/ })

};
;