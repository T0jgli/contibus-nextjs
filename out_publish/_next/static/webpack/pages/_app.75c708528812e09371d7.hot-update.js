webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/GlobalComponents/Cookie.js":
/*!***********************************************!*\
  !*** ./components/GlobalComponents/Cookie.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _lib_AppSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/AppSlice */ "./lib/AppSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "E:\\tojgleee\\contibusnext\\components\\GlobalComponents\\Cookie.js",
    _this = undefined,
    _s = $RefreshSig$();







var Cookie = function Cookie() {
  _s();

  var language = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_lib_AppSlice__WEBPACK_IMPORTED_MODULE_3__["selectlanguage"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState[0],
      setshow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      ready = _useState2[0],
      setready = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setready(true);

    if (localStorage.getItem("EnableCookies") !== "true") {
      setTimeout(function () {
        setshow(true);
      }, 500);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: ready && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBAlert"], {
      className: show ? "show cookiealert border-0 p-0" : "cookiealert border-0 p-0",
      id: "cookieModal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBContainer"], {
        className: "cookiealert-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBRow"], {
          className: "justify-content-center align-items-center text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: " font-weight-bolder white-text text-center pt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "aria-labelledby": "cookie",
              role: "img",
              children: "\uD83C\uDF6A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 92
            }, _this), language === "en" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" We use cookies to ensure you get the best experience on our website. By browsing this site, you accept the", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                target: "_blank",
                href: "/files/adatvedelmi_nyilatkozat.pdf",
                className: "privacycookietext font-weight-bolder",
                children: " privacy policy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 37
              }, _this), "."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 46
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" Az oldal s\xFCtiket haszn\xE1l a felhaszn\xE1l\xF3i \xE9lm\xE9ny fokoz\xE1sa c\xE9lj\xE1b\xF3l. A weblap tov\xE1bbi b\xF6ng\xE9sz\xE9s\xE9vel elfogadja az", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                target: "_blank",
                href: "/files/adatvedelmi_nyilatkozat.pdf",
                className: "privacycookietext font-weight-bolder",
                children: " adatv\xE9delmi t\xE1j\xE9koztat\xF3t"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 41
              }, _this), "."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 38
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBBtn"], {
            style: {
              color: "black"
            },
            color: "warning",
            size: "md",
            className: "font-weight-bolder roundedbtn acceptcookies d-block",
            onClick: function onClick() {
              setshow(false);
              localStorage.setItem("EnableCookies", "true");
            },
            children: language === "en" ? "I understand" : "Rendben"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }, _this)
  }, void 0, false);
};

_s(Cookie, "g1nDLvocX/EUBMfRPBYC+4gESAI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Cookie;
/* harmony default export */ __webpack_exports__["default"] = (Cookie);

var _c;

$RefreshReg$(_c, "Cookie");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9iYWxDb21wb25lbnRzL0Nvb2tpZS5qcyJdLCJuYW1lcyI6WyJDb29raWUiLCJsYW5ndWFnZSIsInVzZVNlbGVjdG9yIiwic2VsZWN0bGFuZ3VhZ2UiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRzaG93IiwicmVhZHkiLCJzZXRyZWFkeSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRUaW1lb3V0IiwiY29sb3IiLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQ0MsNERBQUQsQ0FBNUI7O0FBRGlCLGtCQUVPQyxzREFBUSxDQUFDLEtBQUQsQ0FGZjtBQUFBLE1BRVZDLElBRlU7QUFBQSxNQUVKQyxPQUZJOztBQUFBLG1CQUdTRixzREFBUSxDQUFDLEtBQUQsQ0FIakI7QUFBQSxNQUdWRyxLQUhVO0FBQUEsTUFHSEMsUUFIRzs7QUFLakJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxZQUFRLENBQUMsSUFBRCxDQUFSOztBQUNBLFFBQUlFLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixlQUFyQixNQUEwQyxNQUE5QyxFQUFzRDtBQUNsREMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2JOLGVBQU8sQ0FBQyxJQUFELENBQVA7QUFDSCxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7QUFFSixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBU0Esc0JBQ0k7QUFBQSxjQUNLQyxLQUFLLGlCQUNGLHFFQUFDLGlEQUFEO0FBQVUsZUFBUyxFQUFFRixJQUFJLEdBQUksK0JBQUosR0FBd0MsMEJBQWpFO0FBQThGLFFBQUUsRUFBQyxhQUFqRztBQUFBLDZCQUNJLHFFQUFDLHFEQUFEO0FBQWMsaUJBQVMsRUFBQyx1QkFBeEI7QUFBQSwrQkFDSSxxRUFBQywrQ0FBRDtBQUFRLG1CQUFTLEVBQUMsdURBQWxCO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLGlEQUFiO0FBQUEsb0NBQStEO0FBQU0saUNBQWdCLFFBQXRCO0FBQStCLGtCQUFJLEVBQUMsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQS9ELEVBQ0pKLFFBQVEsS0FBSyxJQUFiLGdCQUFxQjtBQUFBLHFKQUNUO0FBQUcsc0JBQU0sRUFBQyxRQUFWO0FBQW1CLG9CQUFJLEVBQUMsb0NBQXhCO0FBQTZELHlCQUFTLEVBQUMsc0NBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBckIsZ0JBRWE7QUFBQSxxTUFFRztBQUFHLHNCQUFNLEVBQUMsUUFBVjtBQUFtQixvQkFBSSxFQUFDLG9DQUF4QjtBQUE2RCx5QkFBUyxFQUFDLHNDQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBUUkscUVBQUMsK0NBQUQ7QUFBUSxpQkFBSyxFQUFFO0FBQUVZLG1CQUFLLEVBQUU7QUFBVCxhQUFmO0FBQW1DLGlCQUFLLEVBQUMsU0FBekM7QUFBbUQsZ0JBQUksRUFBQyxJQUF4RDtBQUE2RCxxQkFBUyxFQUFDLHFEQUF2RTtBQUE2SCxtQkFBTyxFQUFFLG1CQUFNO0FBQ3hJUCxxQkFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBSSwwQkFBWSxDQUFDSSxPQUFiLENBQXFCLGVBQXJCLEVBQXNDLE1BQXRDO0FBQ0gsYUFIRDtBQUFBLHNCQUlLYixRQUFRLEtBQUssSUFBYixHQUFxQixjQUFyQixHQUF3QztBQUo3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlIsbUJBREo7QUF3QkgsQ0F0Q0Q7O0dBQU1ELE07VUFDZUUsdUQ7OztLQURmRixNO0FBd0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc1YzcwODUyODgxMmUwOTM3MWQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBNREJBbGVydCwgTURCUm93LCBNREJDb250YWluZXIsIE1EQkJ0biB9IGZyb20gJ21kYnJlYWN0J1xyXG5pbXBvcnQgeyBzZWxlY3RsYW5ndWFnZSB9IGZyb20gJy4uLy4uL2xpYi9BcHBTbGljZSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBDb29raWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdGxhbmd1YWdlKVxyXG4gICAgY29uc3QgW3Nob3csIHNldHNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbcmVhZHksIHNldHJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0cmVhZHkodHJ1ZSlcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJFbmFibGVDb29raWVzXCIpICE9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldHNob3codHJ1ZSlcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtyZWFkeSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TURCQWxlcnQgY2xhc3NOYW1lPXtzaG93ID8gKFwic2hvdyBjb29raWVhbGVydCBib3JkZXItMCBwLTBcIikgOiAoXCJjb29raWVhbGVydCBib3JkZXItMCBwLTBcIil9IGlkPVwiY29va2llTW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TURCQ29udGFpbmVyIGNsYXNzTmFtZT1cImNvb2tpZWFsZXJ0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCUm93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgZm9udC13ZWlnaHQtYm9sZGVyIHdoaXRlLXRleHQgdGV4dC1jZW50ZXIgcHQtM1wiPjxzcGFuIGFyaWEtbGFiZWxsZWRieT1cImNvb2tpZVwiIHJvbGU9XCJpbWdcIj4mI3gxRjM2QTtcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/ICg8c3Bhbj4gV2UgdXNlIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4gQnkgYnJvd3NpbmcgdGhpcyBzaXRlLCB5b3UgYWNjZXB0IHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL2ZpbGVzL2FkYXR2ZWRlbG1pX255aWxhdGtvemF0LnBkZlwiIGNsYXNzTmFtZT1cInByaXZhY3ljb29raWV0ZXh0IGZvbnQtd2VpZ2h0LWJvbGRlclwiPiBwcml2YWN5IHBvbGljeTwvYT4uPC9zcGFuPikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+IEF6IG9sZGFsIHPDvHRpa2V0IGhhc3puw6FsIGEgZmVsaGFzem7DoWzDs2kgw6lsbcOpbnkgZm9rb3rDoXNhIGPDqWxqw6Fiw7NsLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIHdlYmxhcCB0b3bDoWJiaSBiw7ZuZ8Opc3rDqXPDqXZlbCBlbGZvZ2FkamEgYXpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvZmlsZXMvYWRhdHZlZGVsbWlfbnlpbGF0a296YXQucGRmXCIgY2xhc3NOYW1lPVwicHJpdmFjeWNvb2tpZXRleHQgZm9udC13ZWlnaHQtYm9sZGVyXCI+IGFkYXR2w6lkZWxtaSB0w6Fqw6lrb3p0YXTDs3Q8L2E+LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0gY29sb3I9XCJ3YXJuaW5nXCIgc2l6ZT1cIm1kXCIgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZGVyIHJvdW5kZWRidG4gYWNjZXB0Y29va2llcyBkLWJsb2NrXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHNob3coZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJFbmFibGVDb29raWVzXCIsIFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSBcImVuXCIgPyAoXCJJIHVuZGVyc3RhbmRcIikgOiAoXCJSZW5kYmVuXCIpfTwvTURCQnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQlJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L01EQkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvTURCQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=