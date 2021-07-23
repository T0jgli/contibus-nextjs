exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 1587:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);








const Cookie = () => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: show,
    1: setshow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: ready,
    1: setready
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setready(true);

    if (localStorage.getItem("EnableCookies") !== "true") {
      setTimeout(() => {
        setshow(true);
      }, 750);
    }
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ready && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__.MDBAlert, {
      className: show ? "show cookiealert border-0 p-0" : "cookiealert border-0 p-0",
      id: "cookieModal",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "cookiealert-container container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "justify-content-center align-items-center text-center row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: " font-weight-bolder white-text text-center pt-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              "aria-labelledby": "cookie",
              role: "img",
              children: "\uD83C\uDF6A"
            }), locale === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
              children: [" ", "We use cookies to ensure you get the best experience on our website. By browsing this site, you accept the", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                target: "_blank",
                href: "/files/adatvedelmi_nyilatkozat.pdf",
                className: "privacycookietext font-weight-bolder",
                children: [" ", "privacy policy"]
              }), "."]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
              children: [" ", "Az oldal s\xFCtiket haszn\xE1l a felhaszn\xE1l\xF3i \xE9lm\xE9ny fokoz\xE1sa c\xE9lj\xE1b\xF3l. A weblap tov\xE1bbi b\xF6ng\xE9sz\xE9s\xE9vel elfogadja az", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                target: "_blank",
                href: "/files/adatvedelmi_nyilatkozat.pdf",
                className: "privacycookietext font-weight-bolder",
                children: [" ", "adatv\xE9delmi t\xE1j\xE9koztat\xF3t"]
              }), "."]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {
            style: {
              color: "black"
            },
            color: "warning",
            size: "md",
            outline: true,
            className: "font-weight-bolder roundedbtn acceptcookies d-block",
            onClick: () => {
              setshow(false);
              localStorage.setItem("EnableCookies", "true");
            },
            children: locale === "en" ? "I understand" : "Rendben"
          })]
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cookie);

/***/ })

};
;