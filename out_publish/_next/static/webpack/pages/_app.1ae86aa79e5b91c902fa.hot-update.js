webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/DefaultLayout.js":
/*!*************************************!*\
  !*** ./components/DefaultLayout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_AppSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/AppSlice */ "./lib/AppSlice.js");
/* harmony import */ var _GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalComponents/Initaltransition */ "./components/GlobalComponents/Initaltransition.js");
/* harmony import */ var _GlobalComponents_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GlobalComponents/Navbar */ "./components/GlobalComponents/Navbar.js");
/* harmony import */ var _GlobalComponents_Snackbars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GlobalComponents/Snackbars */ "./components/GlobalComponents/Snackbars.js");
/* harmony import */ var _GlobalComponents_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GlobalComponents/Footer */ "./components/GlobalComponents/Footer.js");
/* harmony import */ var _GlobalComponents_Scrolltopbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GlobalComponents/Scrolltopbutton */ "./components/GlobalComponents/Scrolltopbutton.js");
/* harmony import */ var _GlobalComponents_Cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GlobalComponents/Cookie */ "./components/GlobalComponents/Cookie.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _lib_SetContentFulData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/SetContentFulData */ "./lib/SetContentFulData.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");



var _jsxFileName = "E:\\tojgleee\\contibusnext\\components\\DefaultLayout.js",
    _this = undefined,
    _s = $RefreshSig$();
















var DefaultLayout = function DefaultLayout(_ref) {
  _s();

  var children = _ref.children;
  var language = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_lib_AppSlice__WEBPACK_IMPORTED_MODULE_3__["selectlanguage"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.document.documentElement.lang = language;
  }, [language]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    react_ga__WEBPACK_IMPORTED_MODULE_13__["default"].pageview(window.location.pathname);
  }, [router.pathname]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GlobalComponents_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_10__["AnimatePresence"], {
      exitBeforeEnter: true,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GlobalComponents_Cookie__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GlobalComponents_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-none d-md-block",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GlobalComponents_Scrolltopbutton__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GlobalComponents_Snackbars__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(DefaultLayout, "XON0YV5I4Sv8uEput4ZqZJTmno4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"]];
});

_c = DefaultLayout;
/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

var _c;

$RefreshReg$(_c, "DefaultLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWZhdWx0TGF5b3V0LmpzIl0sIm5hbWVzIjpbIkRlZmF1bHRMYXlvdXQiLCJjaGlsZHJlbiIsImxhbmd1YWdlIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RsYW5ndWFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJSZWFjdEdBIiwicGFnZXZpZXciLCJsb2NhdGlvbiIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNwQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUNDLDREQUFELENBQTVCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsZUFBaEIsQ0FBZ0NDLElBQWhDLEdBQXVDWCxRQUF2QztBQUNILEdBRlEsRUFFTixDQUFDQSxRQUFELENBRk0sQ0FBVDtBQUlBTyx5REFBUyxDQUFDLFlBQU07QUFDWksscURBQU8sQ0FBQ0MsUUFBUixDQUFpQkwsTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxRQUFqQztBQUNILEdBRlEsRUFFTixDQUFDVixNQUFNLENBQUNVLFFBQVIsQ0FGTSxDQUFUO0FBSUEsc0JBQ0k7QUFBQSw0QkFFSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSSxxRUFBQyw4REFBRDtBQUFpQixxQkFBZSxNQUFoQztBQUFBLGdCQUNLaEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFNSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFPSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosZUFRSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUNJLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkosZUFXSSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFBQSxrQkFESjtBQWVILENBNUJEOztHQUFNRCxhO1VBQ2VHLHVELEVBQ0FHLHVELEVBQ0ZFLHNEOzs7S0FIYlIsYTtBQThCU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xYWU4NmFhNzllNWI5MWM5MDJmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2VsZWN0bGFuZ3VhZ2UsIHNldGJ1c2VzRGF0YSwgc2V0bXV6ZXVtRGF0YSB9IGZyb20gJy4uL2xpYi9BcHBTbGljZSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCBJbml0aWFsVHJhbnNpdGlvbiBmcm9tICcuL0dsb2JhbENvbXBvbmVudHMvSW5pdGFsdHJhbnNpdGlvbic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9HbG9iYWxDb21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IFNuYWNrYmFycyBmcm9tICcuL0dsb2JhbENvbXBvbmVudHMvU25hY2tiYXJzJ1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0dsb2JhbENvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgU2Nyb2xsdG9wYnV0dG9uIGZyb20gJy4vR2xvYmFsQ29tcG9uZW50cy9TY3JvbGx0b3BidXR0b24nO1xyXG5pbXBvcnQgQ29va2llIGZyb20gJy4vR2xvYmFsQ29tcG9uZW50cy9Db29raWUnO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IFNldENvbnRlbnRGdWxEYXRhIGZyb20gJy4uL2xpYi9TZXRDb250ZW50RnVsRGF0YSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnXHJcblxyXG5jb25zdCBEZWZhdWx0TGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RsYW5ndWFnZSlcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxhbmd1YWdlXHJcbiAgICB9LCBbbGFuZ3VhZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICB9LCBbcm91dGVyLnBhdGhuYW1lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiB7dHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkluaXRhbFRyYW5zaXRpb25cIikgIT09IFwiZmFsc2VcIiAmJiAoPEluaXRpYWxUcmFuc2l0aW9uIC8+KX0gKi99XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgICAgICA8Q29va2llIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPFNjcm9sbHRvcGJ1dHRvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNuYWNrYmFycyAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGF5b3V0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=