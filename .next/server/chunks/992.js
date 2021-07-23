exports.id = 992;
exports.ids = [992];
exports.modules = {

/***/ 8992:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9831);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Modals = ({
  modalsopen,
  setmodalsopen
}) => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBModal, {
      cascading: true,
      modalStyle: modalsopen === null || modalsopen === void 0 ? void 0 : modalsopen.style,
      isOpen: modalsopen === null || modalsopen === void 0 ? void 0 : modalsopen.open,
      toggle: () => {
        setmodalsopen(_objectSpread(_objectSpread({}, modalsopen), {}, {
          open: false
        }));
        react_ga__WEBPACK_IMPORTED_MODULE_2___default().pageview(window.location.pathname);
      },
      size: "lg",
      className: "rounded",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBModalHeader, {
        className: "rounded",
        titleClass: "heading lead font-weight-bolder",
        toggle: () => {
          setmodalsopen(_objectSpread(_objectSpread({}, modalsopen), {}, {
            open: false
          }));
          react_ga__WEBPACK_IMPORTED_MODULE_2___default().pageview(window.location.pathname);
        },
        children: locale === "en" ? modalsopen === null || modalsopen === void 0 ? void 0 : modalsopen.title.en : modalsopen === null || modalsopen === void 0 ? void 0 : modalsopen.title.hu
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBModalBody, {
        className: "p-0",
        children: modalsopen === null || modalsopen === void 0 ? void 0 : modalsopen.details
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCard, {
        className: "rounded",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCardFooter, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBBtn, {
            color: modalsopen === null || modalsopen === void 0 ? void 0 : modalsopen.style,
            outline: true,
            className: "float-right roundedbtn",
            onClick: () => {
              setmodalsopen(_objectSpread(_objectSpread({}, modalsopen), {}, {
                open: false
              }));
              react_ga__WEBPACK_IMPORTED_MODULE_2___default().pageview(window.location.pathname);
            },
            children: locale === "en" ? "Close" : "Bezárás"
          })
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Modals);

/***/ })

};
;