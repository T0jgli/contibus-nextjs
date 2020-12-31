webpackHotUpdate_N_E("pages/buses",{

/***/ "./pages/buses.js":
/*!************************!*\
  !*** ./pages/buses.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVzZXMuanMiXSwibmFtZXMiOlsiQnVzZXMiLCJsYW5ndWFnZSIsInVzZVNlbGVjdG9yIiwic2VsZWN0bGFuZ3VhZ2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiU2V0Q29udGVudEZ1bERhdGEiLCJ0aGVuIiwiZGF0YSIsInNldGJ1c2VzRGF0YSIsImJ1c2VzRGF0YSIsInNldG11emV1bURhdGEiLCJtdXpldW1EYXRhIiwicGFnZVZhcmlhbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUNDLDREQUFELENBQTVCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsMEVBQWlCLENBQUMsV0FBRCxFQUFjLGdCQUFkLENBQWpCLENBQWlEQyxJQUFqRCxDQUFzRCxVQUFBQyxJQUFJLEVBQUk7QUFDNURMLGNBQVEsQ0FBQ00sa0VBQVksQ0FBQztBQUNwQkMsaUJBQVMsRUFBRUY7QUFEUyxPQUFELENBQWIsQ0FBUjtBQUdELEtBSkQ7QUFNQUYsMEVBQWlCLENBQUMsWUFBRCxFQUFlLGVBQWYsQ0FBakIsQ0FBaURDLElBQWpELENBQXNELFVBQUFDLElBQUksRUFBSTtBQUM1REwsY0FBUSxDQUFDUSxtRUFBYSxDQUFDO0FBQ3JCQyxrQkFBVSxFQUFFSjtBQURTLE9BQUQsQ0FBZCxDQUFSO0FBR0QsS0FKRDtBQUtELEdBWlEsRUFZTixDQUFDTCxRQUFELENBWk0sQ0FBVDtBQWVBLHNCQUNFLHFFQUFDLG9EQUFELENBQVEsT0FBUjtBQUFnQixXQUFPLEVBQUMsU0FBeEI7QUFDRSxXQUFPLEVBQUMsU0FEVjtBQUVFLFlBQVEsRUFBRVUsMEZBRlo7QUFBQSw0QkFHRSxxRUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSxxRUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQVFiLFFBQVEsS0FBSyxJQUFiLEdBQXFCLHNCQUFyQixHQUFnRDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0E3QkQ7O0dBQU1ELEs7VUFDYUUsdUQsRUFDQUcsdUQ7OztLQUZiTCxLO0FBK0JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idXNlcy5lNzhiN2Y5Y2M4N2NiNGRkOTFlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9HbG9iYWxDb21wb25lbnRzL0Nhcm91c2VsJztcclxuaW1wb3J0IEJ1c2VzYm9keSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXNlc0NvbXBvbmVudHMvQnVzZXNib2R5XCJcclxuaW1wb3J0IHsgcGFnZVZhcmlhbnRzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9HbG9iYWxDb21wb25lbnRzL0luaXRhbHRyYW5zaXRpb24nO1xyXG5cclxuaW1wb3J0IHsgc2VsZWN0bGFuZ3VhZ2UsIHNldGJ1c2VzRGF0YSwgc2V0bXV6ZXVtRGF0YSB9IGZyb20gJy4uL2xpYi9BcHBTbGljZSdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgU2V0Q29udGVudEZ1bERhdGEgZnJvbSAnLi4vbGliL1NldENvbnRlbnRGdWxEYXRhJztcclxuXHJcbmNvbnN0IEJ1c2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxhbmd1YWdlID0gdXNlU2VsZWN0b3Ioc2VsZWN0bGFuZ3VhZ2UpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFNldENvbnRlbnRGdWxEYXRhKFwiYnVzZXNEYXRhXCIsIFwiLWZpZWxkcy5vcmFkaWpcIikudGhlbihkYXRhID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2V0YnVzZXNEYXRhKHtcclxuICAgICAgICBidXNlc0RhdGE6IGRhdGFcclxuICAgICAgfSkpXHJcbiAgICB9KVxyXG5cclxuICAgIFNldENvbnRlbnRGdWxEYXRhKFwibXV6ZXVtZGF0YVwiLCBcInN5cy5jcmVhdGVkQXRcIikudGhlbihkYXRhID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2V0bXV6ZXVtRGF0YSh7XHJcbiAgICAgICAgbXV6ZXVtRGF0YTogZGF0YVxyXG4gICAgICB9KSlcclxuICAgIH0pXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLnNlY3Rpb24gaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXHJcbiAgICAgIHZhcmlhbnRzPXtwYWdlVmFyaWFudHN9PlxyXG4gICAgICA8Q2Fyb3VzZWwgLz5cclxuICAgICAgPEJ1c2VzYm9keSAvPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2xhbmd1YWdlID09PSBcImVuXCIgPyAoXCJDb250aWJ1cyAtIE91ciBCdXNlc1wiKSA6IChcIkNvbnRpYnVzIC0gQXV0w7NidXN6YWlua1wiKX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICA8L21vdGlvbi5zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVzZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==