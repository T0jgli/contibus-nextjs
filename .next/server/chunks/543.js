exports.id = 543;
exports.ids = [543];
exports.modules = {

/***/ 9543:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);




const Cardbodys = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.all(/* import() */[__webpack_require__.e(664), __webpack_require__.e(656)]).then(__webpack_require__.bind(__webpack_require__, 4974)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4974)],
    modules: ["..\\components\\BusesComponents\\Carddeck.js -> " + "./Cardbodys"]
  }
});

const Carddeck = ({
  idd,
  item,
  nextitem,
  nextnextitem,
  what,
  length,
  itemid
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: what === "Table" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: itemid === length ? itemid % 3 === 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card-deck mt-lg-4 mt-2 pt-lg-3 pt-2",
        id: what !== "Table" ? "deckmuzeum" + idd : "deck" + idd,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {
          item: item,
          what: what
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {})]
      }) : itemid % 3 === 2( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card-deck mt-lg-4 mt-2 pt-lg-3 pt-2",
        id: what !== "Table" ? "deckmuzeum" + idd : "deck" + idd,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {
          item: item,
          what: what
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {
          item: nextitem,
          what: what
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {})]
      })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card-deck mt-lg-4 mt-2 pt-lg-3 pt-2",
        id: what !== "Table" ? "deckmuzeum" + idd : "deck" + idd,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {
          item: item,
          what: what
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {
          item: nextitem,
          what: what
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {
          item: nextnextitem,
          what: what
        })]
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "card-deck mt-lg-4 mt-2 pt-lg-3 pt-2",
      id: what !== "Table" ? "deckmuzeum" + idd : "deck" + idd,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {
        item: item,
        what: what
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Cardbodys, {
        item: nextitem,
        what: what
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Carddeck);

/***/ })

};
;