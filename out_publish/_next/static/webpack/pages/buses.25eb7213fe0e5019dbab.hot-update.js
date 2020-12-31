webpackHotUpdate_N_E("pages/buses",{

/***/ "./pages/buses.js":
/*!************************!*\
  !*** ./pages/buses.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GlobalComponents_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GlobalComponents/Carousel */ "./components/GlobalComponents/Carousel.js");
/* harmony import */ var _components_BusesComponents_Busesbody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BusesComponents/Busesbody */ "./components/BusesComponents/Busesbody.js");
/* harmony import */ var _components_GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GlobalComponents/Initaltransition */ "./components/GlobalComponents/Initaltransition.js");
/* harmony import */ var _lib_AppSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/AppSlice */ "./lib/AppSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _lib_SetContentFulData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/SetContentFulData */ "./lib/SetContentFulData.js");


var _jsxFileName = "E:\\tojgleee\\contibusnext\\pages\\buses.js",
    _this = undefined,
    _s = $RefreshSig$();











var Buses = function Buses() {
  _s();

  var language = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_lib_AppSlice__WEBPACK_IMPORTED_MODULE_6__["selectlanguage"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_lib_SetContentFulData__WEBPACK_IMPORTED_MODULE_9__["default"])("busesData", "-fields.oradij").then(function (data) {
      dispatch(Object(_lib_AppSlice__WEBPACK_IMPORTED_MODULE_6__["setbusesData"])({
        busesData: data
      }));
    });
    Object(_lib_SetContentFulData__WEBPACK_IMPORTED_MODULE_9__["default"])("muzeumdata", "sys.createdAt").then(function (data) {
      dispatch(Object(_lib_AppSlice__WEBPACK_IMPORTED_MODULE_6__["setmuzeumData"])({
        muzeumData: data
      }));
    });
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].section, {
    initial: "initial",
    animate: "animate",
    variants: _components_GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_5__["pageVariants"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GlobalComponents_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BusesComponents_Busesbody__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: language === "en" ? "Contibus - Our Buses" : "Contibus - Autóbuszaink"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(Buses, "cs0y8vk9/Z+4Iw6Qa8swpZIp0/Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"]];
});

_c = Buses;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Buses);

var _c;

$RefreshReg$(_c, "Buses");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVzZXMuanMiXSwibmFtZXMiOlsiQnVzZXMiLCJsYW5ndWFnZSIsInVzZVNlbGVjdG9yIiwic2VsZWN0bGFuZ3VhZ2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiU2V0Q29udGVudEZ1bERhdGEiLCJ0aGVuIiwiZGF0YSIsInNldGJ1c2VzRGF0YSIsImJ1c2VzRGF0YSIsInNldG11emV1bURhdGEiLCJtdXpldW1EYXRhIiwicGFnZVZhcmlhbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxDQUFDQyw0REFBRCxDQUE1QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDBFQUFpQixDQUFDLFdBQUQsRUFBYyxnQkFBZCxDQUFqQixDQUFpREMsSUFBakQsQ0FBc0QsVUFBQUMsSUFBSSxFQUFJO0FBQzVETCxjQUFRLENBQUNNLGtFQUFZLENBQUM7QUFDcEJDLGlCQUFTLEVBQUVGO0FBRFMsT0FBRCxDQUFiLENBQVI7QUFHRCxLQUpEO0FBTUFGLDBFQUFpQixDQUFDLFlBQUQsRUFBZSxlQUFmLENBQWpCLENBQWlEQyxJQUFqRCxDQUFzRCxVQUFBQyxJQUFJLEVBQUk7QUFDNURMLGNBQVEsQ0FBQ1EsbUVBQWEsQ0FBQztBQUNyQkMsa0JBQVUsRUFBRUo7QUFEUyxPQUFELENBQWQsQ0FBUjtBQUdELEtBSkQ7QUFLRCxHQVpRLEVBWU4sQ0FBQ0wsUUFBRCxDQVpNLENBQVQ7QUFlQSxzQkFDRSxxRUFBQyxvREFBRCxDQUFRLE9BQVI7QUFBZ0IsV0FBTyxFQUFDLFNBQXhCO0FBQ0UsV0FBTyxFQUFDLFNBRFY7QUFFRSxZQUFRLEVBQUVVLDBGQUZaO0FBQUEsNEJBR0UscUVBQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUscUVBQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFRYixRQUFRLEtBQUssSUFBYixHQUFxQixzQkFBckIsR0FBZ0Q7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBN0JEOztHQUFNRCxLO1VBQ2FFLHVELEVBQ0FHLHVEOzs7S0FGYkwsSzs7QUErQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1c2VzLjI1ZWI3MjEzZmUwZTUwMTlkYmFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL0dsb2JhbENvbXBvbmVudHMvQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgQnVzZXNib2R5IGZyb20gXCIuLi9jb21wb25lbnRzL0J1c2VzQ29tcG9uZW50cy9CdXNlc2JvZHlcIlxyXG5pbXBvcnQgeyBwYWdlVmFyaWFudHMgfSBmcm9tICcuLi9jb21wb25lbnRzL0dsb2JhbENvbXBvbmVudHMvSW5pdGFsdHJhbnNpdGlvbic7XHJcblxyXG5pbXBvcnQgeyBzZWxlY3RsYW5ndWFnZSwgc2V0YnVzZXNEYXRhLCBzZXRtdXpldW1EYXRhIH0gZnJvbSAnLi4vbGliL0FwcFNsaWNlJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBTZXRDb250ZW50RnVsRGF0YSBmcm9tICcuLi9saWIvU2V0Q29udGVudEZ1bERhdGEnO1xyXG5cclxuY29uc3QgQnVzZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RsYW5ndWFnZSlcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgU2V0Q29udGVudEZ1bERhdGEoXCJidXNlc0RhdGFcIiwgXCItZmllbGRzLm9yYWRpalwiKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRidXNlc0RhdGEoe1xyXG4gICAgICAgIGJ1c2VzRGF0YTogZGF0YVxyXG4gICAgICB9KSlcclxuICAgIH0pXHJcblxyXG4gICAgU2V0Q29udGVudEZ1bERhdGEoXCJtdXpldW1kYXRhXCIsIFwic3lzLmNyZWF0ZWRBdFwiKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRtdXpldW1EYXRhKHtcclxuICAgICAgICBtdXpldW1EYXRhOiBkYXRhXHJcbiAgICAgIH0pKVxyXG4gICAgfSlcclxuICB9LCBbZGlzcGF0Y2hdKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uc2VjdGlvbiBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcclxuICAgICAgdmFyaWFudHM9e3BhZ2VWYXJpYW50c30+XHJcbiAgICAgIDxDYXJvdXNlbCAvPlxyXG4gICAgICA8QnVzZXNib2R5IC8+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/IChcIkNvbnRpYnVzIC0gT3VyIEJ1c2VzXCIpIDogKFwiQ29udGlidXMgLSBBdXTDs2J1c3phaW5rXCIpfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgIDwvbW90aW9uLnNlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXNlc1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyAoY29udGV4dCkge1xyXG4gIFNldENvbnRlbnRGdWxEYXRhKFwiYnVzZXNEYXRhXCIsIFwiLWZpZWxkcy5vcmFkaWpcIikudGhlbihkYXRhID0+IHtcclxuICAgIGRpc3BhdGNoKHNldGJ1c2VzRGF0YSh7XHJcbiAgICAgIGJ1c2VzRGF0YTogZGF0YVxyXG4gICAgfSkpXHJcbiAgfSlcclxuXHJcbiAgU2V0Q29udGVudEZ1bERhdGEoXCJtdXpldW1kYXRhXCIsIFwic3lzLmNyZWF0ZWRBdFwiKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0bXV6ZXVtRGF0YSh7XHJcbiAgICAgIG11emV1bURhdGE6IGRhdGFcclxuICAgIH0pKVxyXG4gIH0pXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=