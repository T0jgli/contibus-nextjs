exports.id = 600;
exports.ids = [600];
exports.modules = {

/***/ 7600:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1240);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1690);
/* harmony import */ var _lib_redux_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3147);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Snackbars = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const snackbaropen = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.app.snackbar);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    open: snackbaropen === null || snackbaropen === void 0 ? void 0 : snackbaropen.open,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration: 3500,
    onClose: (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_1__/* .setsnackbar */ .NV)({
        snackbar: _objectSpread(_objectSpread({}, snackbaropen), {}, {
          open: false
        })
      }));
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      elevation: 5,
      variant: "filled",
      onClose: (event, reason) => {
        if (reason === "clickaway") {
          return;
        }

        dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_1__/* .setsnackbar */ .NV)({
          snackbar: _objectSpread(_objectSpread({}, snackbaropen), {}, {
            open: false
          })
        }));
      },
      severity: snackbaropen === null || snackbaropen === void 0 ? void 0 : snackbaropen.type,
      className: "rounded",
      children: locale === "en" ? snackbaropen === null || snackbaropen === void 0 ? void 0 : snackbaropen.en : snackbaropen === null || snackbaropen === void 0 ? void 0 : snackbaropen.hu
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Snackbars);

/***/ })

};
;