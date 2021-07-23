exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 3147:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mN": function() { return /* binding */ setbusesData; },
/* harmony export */   "tS": function() { return /* binding */ setmuzeumData; },
/* harmony export */   "zp": function() { return /* binding */ settrucksData; },
/* harmony export */   "NV": function() { return /* binding */ setsnackbar; },
/* harmony export */   "m5": function() { return /* binding */ appReducer; }
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2744);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  busesData: [],
  muzeumData: [],
  trucksData: [],
  snackbar: {}
};
const setbusesData = payload => ({
  type: "INITBUSESDATA",
  busesData: payload
});
const setmuzeumData = payload => ({
  type: "INITMUZEUMDATA",
  muzeumData: payload
});
const settrucksData = payload => ({
  type: "INITTRUCKSDATA",
  trucksData: payload
});
const setsnackbar = payload => ({
  type: "SETSNACKBAR",
  payload
});
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case "INITBUSESDATA":
      return _objectSpread(_objectSpread({}, state), {}, {
        busesData: action.busesData
      });

    case "INITMUZEUMDATA":
      return _objectSpread(_objectSpread({}, state), {}, {
        muzeumData: action.muzeumData
      });

    case "INITTRUCKSDATA":
      return _objectSpread(_objectSpread({}, state), {}, {
        trucksData: action.trucksData
      });

    case "SETSNACKBAR":
      return _objectSpread(_objectSpread({}, state), {}, {
        snackbar: action.payload.snackbar
      });

    default:
      return state;
  }
};

/***/ })

};
;