webpackHotUpdate_N_E("pages/index",{

/***/ "./components/GlobalComponents/Carousel.js":
/*!*************************************************!*\
  !*** ./components/GlobalComponents/Carousel.js ***!
  \*************************************************/
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
/* harmony import */ var _Contactform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contactform */ "./components/GlobalComponents/Contactform.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-awesome-reveal */ "./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "E:\\tojgleee\\contibusnext\\components\\GlobalComponents\\Carousel.js",
    _this = undefined,
    _s = $RefreshSig$();










function shufflearray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var k = array[i];
    array[i] = array[j];
    array[j] = k;
  }

  return array;
}

var Carousel = function Carousel() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])(),
      pathname = _useRouter.pathname;

  var language = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_lib_AppSlice__WEBPACK_IMPORTED_MODULE_3__["selectlanguage"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      contactform = _useState[0],
      setcontactform = _useState[1];

  var caridsss = shufflearray(["carr11", "carr22", "carr33"]);
  var carids = ["carr11", "carr22", "carr33"].sort(function () {
    return 0.5 - Math.random();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCarousel"], {
      activeItem: 1,
      length: 3,
      showControls: true,
      showIndicators: true,
      className: pathname !== "/" ? "carousel carouselup z-depth-1 " : "carousel headerclip z-depth-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCarouselInner"], {
        className: "carousel-inner",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCarouselItem"], {
          className: "carousel-item",
          itemId: "1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBView"], {
            id: carids[0],
            className: pathname !== "/" ? "h-100 carr" : "carr",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBMask"], {
              overlay: "black-light",
              className: "flex-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-center white-text mx-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__["Fade"], {
                  triggerOnce: true,
                  direction: "down",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "mb-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      className: "font-weight-bold",
                      children: language === "en" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Specialist Coach Travel"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 44,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 50
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Az utaz\xE1s szak\xE9rt\u0151i"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 45,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 45,
                        columnNumber: 50
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__["Fade"], {
                  triggerOnce: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "mb-4 d-block",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      style: {
                        letterSpacing: "1px"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 49
                      }, _this), language === "en" ? "We offer culture and experience" : "Kultúrát és élményt adunk", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 37
                }, _this), pathname === "/" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__["Fade"], {
                    direction: "up",
                    triggerOnce: true,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBBtn"], {
                      onClick: function onClick() {
                        setcontactform(true);
                        react_ga__WEBPACK_IMPORTED_MODULE_6__["default"].modalview('/contactform');
                      },
                      color: "warning",
                      size: "lg",
                      className: "font-weight-bold black-text roundedbtn kartya mt-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "",
                        children: language === "en" ? "Get in contact with us!" : "Lépjen kapcsolatba velünk!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 116
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 45
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCarouselItem"], {
          className: "carousel-item",
          itemId: "2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBView"], {
            id: carids[1],
            className: pathname !== "/" ? "h-100 carr" : "carr",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBMask"], {
              overlay: "black-light",
              className: "flex-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-center white-text mx-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__["Fade"], {
                  triggerOnce: true,
                  direction: "down",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "mb-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      className: "font-weight-bold",
                      children: language === "en" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Specialist Coach Travel"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 85,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 50
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Az utaz\xE1s szak\xE9rt\u0151i"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 86,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 50
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__["Fade"], {
                  triggerOnce: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "mb-4 d-block text-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      style: {
                        letterSpacing: "1px"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2 d-md-inline d-none"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 49
                      }, _this), " ", language === "en" ? "Safety" : "Biztonság", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 49
                      }, _this), language === "en" ? "Comfort" : "Kényelem", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 94,
                        columnNumber: 49
                      }, _this), language === "en" ? "Standards" : "Színvonal", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2 d-md-inline d-none"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 37
                }, _this), pathname === "/" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__["Fade"], {
                    direction: "up",
                    triggerOnce: true,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBBtn"], {
                      onClick: function onClick() {
                        setcontactform(true);
                        react_ga__WEBPACK_IMPORTED_MODULE_6__["default"].modalview('/contactform');
                      },
                      color: "warning",
                      size: "lg",
                      className: "font-weight-bold black-text roundedbtn kartya mt-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "",
                        children: language === "en" ? "Get in contact with us!" : "Lépjen kapcsolatba velünk!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 116
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 45
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCarouselItem"], {
          className: "carousel-item",
          itemId: "3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBView"], {
            id: carids[2],
            className: pathname !== "/" ? "h-100 carr" : "carr",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBMask"], {
              overlay: "black-light",
              className: "flex-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-center white-text mx-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__["Fade"], {
                  triggerOnce: true,
                  direction: "down",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "mb-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      className: "font-weight-bold",
                      children: language === "en" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Specialist Coach Travel"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 130,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 130,
                        columnNumber: 50
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Az utaz\xE1s szak\xE9rt\u0151i"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 131,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 50
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__["Fade"], {
                  triggerOnce: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "mb-4 d-block",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      style: {
                        letterSpacing: "1px"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 49
                      }, _this), language === "en" ? "We offer culture and experience" : "Kultúrát és élményt adunk", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 37
                }, _this), pathname === "/" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__["Fade"], {
                    direction: "up",
                    triggerOnce: true,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBBtn"], {
                      onClick: function onClick() {
                        setcontactform(true);
                        react_ga__WEBPACK_IMPORTED_MODULE_6__["default"].modalview('/contactform');
                      },
                      color: "warning",
                      size: "lg",
                      className: "font-weight-bold black-text roundedbtn kartya mt-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "",
                        children: language === "en" ? "Get in contact with us!" : "Lépjen kapcsolatba velünk!"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 116
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 45
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Contactform__WEBPACK_IMPORTED_MODULE_5__["default"], {
      contactform: contactform,
      setcontactform: setcontactform
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Carousel, "54xiOL9I8emobZJJwmeir44xnsY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Carousel;
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

var _c;

$RefreshReg$(_c, "Carousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9iYWxDb21wb25lbnRzL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbInNodWZmbGVhcnJheSIsImFycmF5IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJrIiwiQ2Fyb3VzZWwiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImxhbmd1YWdlIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RsYW5ndWFnZSIsInVzZVN0YXRlIiwiY29udGFjdGZvcm0iLCJzZXRjb250YWN0Zm9ybSIsImNhcmlkc3NzIiwiY2FyaWRzIiwic29ydCIsImxldHRlclNwYWNpbmciLCJSZWFjdEdBIiwibW9kYWx2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzFCLE9BQUssSUFBSUMsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sR0FBZSxDQUE1QixFQUErQkQsQ0FBQyxHQUFHLENBQW5DLEVBQXNDQSxDQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLFFBQUlFLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkwsQ0FBM0IsQ0FBUjtBQUNBLFFBQUlNLENBQUMsR0FBR1AsS0FBSyxDQUFDQyxDQUFELENBQWI7QUFDQUQsU0FBSyxDQUFDQyxDQUFELENBQUwsR0FBV0QsS0FBSyxDQUFDRyxDQUFELENBQWhCO0FBQ0FILFNBQUssQ0FBQ0csQ0FBRCxDQUFMLEdBQVdJLENBQVg7QUFDSDs7QUFDRCxTQUFPUCxLQUFQO0FBQ0g7O0FBRUQsSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLG1CQUNFQyw2REFBUyxFQURYO0FBQUEsTUFDWEMsUUFEVyxjQUNYQSxRQURX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REo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSSixFQWlCS0QsUUFBUSxLQUFLLEdBQWIsZ0JBQ0c7QUFBQSx5Q0FDSSxxRUFBQyx5REFBRDtBQUFNLDZCQUFTLEVBQUMsSUFBaEI7QUFBcUIsK0JBQVcsTUFBaEM7QUFBQSwyQ0FFSSxxRUFBQywrQ0FBRDtBQUFRLDZCQUFPLEVBQUUsbUJBQU07QUFDbkJNLHNDQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FLLHdFQUFPLENBQUNDLFNBQVIsQ0FBa0IsY0FBbEI7QUFFSCx1QkFKRDtBQUtJLDJCQUFLLEVBQUMsU0FMVjtBQUtvQiwwQkFBSSxFQUFDLElBTHpCO0FBTUksK0JBQVMsRUFBQyxvREFOZDtBQUFBLDZDQU1tRTtBQUMzRCxpQ0FBUyxFQUFDLEVBRGlEO0FBQUEsa0NBQzdDWCxRQUFRLEtBQUssSUFBYixHQUFxQix5QkFBckIsR0FBbUQ7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTm5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosaUNBREgsR0FnQkksSUFqQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUEySUkscUVBQUMsb0RBQUQ7QUFBYSxpQkFBVyxFQUFFSSxXQUExQjtBQUF1QyxvQkFBYyxFQUFFQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0lKO0FBQUEsa0JBREo7QUFnSkgsQ0F0SkQ7O0dBQU1SLFE7VUFDbUJDLHFELEVBQ0pHLHVEOzs7S0FGZkosUTtBQXdKU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzBlOTdhOWM5YTY4YjRmMjlkNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgTURCQ2Fyb3VzZWwsIE1EQk1hc2ssIE1EQkNhcm91c2VsSW5uZXIsIE1EQkNhcm91c2VsSXRlbSwgTURCVmlldywgTURCSWNvbiwgTURCQnRuIH0gZnJvbSBcIm1kYnJlYWN0XCI7XHJcbmltcG9ydCB7IHNlbGVjdGxhbmd1YWdlIH0gZnJvbSAnLi4vLi4vbGliL0FwcFNsaWNlJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgQ29udGFjdGZvcm0gZnJvbSAnLi9Db250YWN0Zm9ybSc7XHJcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJ1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlYXJyYXkgKGFycmF5KSB7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSlcclxuICAgICAgICBsZXQgayA9IGFycmF5W2ldXHJcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXVxyXG4gICAgICAgIGFycmF5W2pdID0ga1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5XHJcbn1cclxuXHJcbmNvbnN0IENhcm91c2VsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdGxhbmd1YWdlKVxyXG4gICAgY29uc3QgW2NvbnRhY3Rmb3JtLCBzZXRjb250YWN0Zm9ybV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGNhcmlkc3NzID0gc2h1ZmZsZWFycmF5KFtcImNhcnIxMVwiLCBcImNhcnIyMlwiLCBcImNhcnIzM1wiXSlcclxuICAgIGNvbnN0IGNhcmlkcyA9IFtcImNhcnIxMVwiLCBcImNhcnIyMlwiLCBcImNhcnIzM1wiXS5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNREJDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbT17MX1cclxuICAgICAgICAgICAgICAgIGxlbmd0aD17M31cclxuICAgICAgICAgICAgICAgIHNob3dDb250cm9scz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNob3dJbmRpY2F0b3JzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYXRobmFtZSAhPT0gXCIvXCIgPyBcImNhcm91c2VsIGNhcm91c2VsdXAgei1kZXB0aC0xIFwiIDogXCJjYXJvdXNlbCBoZWFkZXJjbGlwIHotZGVwdGgtMVwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TURCQ2Fyb3VzZWxJbm5lciBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNREJDYXJvdXNlbEl0ZW0gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIGl0ZW1JZD1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlZpZXcgaWQ9e2Nhcmlkc1swXX0gY2xhc3NOYW1lPXtwYXRobmFtZSAhPT0gXCIvXCIgPyBcImgtMTAwIGNhcnJcIiA6IFwiY2FyclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNYXNrIG92ZXJsYXk9XCJibGFjay1saWdodFwiIGNsYXNzTmFtZT1cImZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3aGl0ZS10ZXh0IG14LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgdHJpZ2dlck9uY2UgZGlyZWN0aW9uPVwiZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3Bhbj5Db250aWJ1czxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZVwiPiDigJMgU3BlY2lhbGlzdCBDb2FjaCBUcmF2ZWw8L3NwYW4+PC9zcGFuPikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+Q29udGlidXM8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmVcIj4g4oCTIEF6IHV0YXrDoXMgc3pha8OpcnTFkWk8L3NwYW4+PC9zcGFuPil9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCBkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbGV0dGVyU3BhY2luZzogXCIxcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkljb24gaWNvbj1cImNoZWNrXCIgY2xhc3NOYW1lPVwicHgtMlwiIC8+e2xhbmd1YWdlID09PSBcImVuXCIgPyAoXCJXZSBvZmZlciBjdWx0dXJlIGFuZCBleHBlcmllbmNlXCIpIDogKFwiS3VsdMO6csOhdCDDqXMgw6lsbcOpbnl0IGFkdW5rXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwiY2hlY2tcIiBjbGFzc05hbWU9XCJweC0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhdGhuYW1lID09PSBcIi9cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGlyZWN0aW9uPVwidXBcIiB0cmlnZ2VyT25jZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y29udGFjdGZvcm0odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdEdBLm1vZGFsdmlldygnL2NvbnRhY3Rmb3JtJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCIgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYmxhY2stdGV4dCByb3VuZGVkYnRuIGthcnR5YSBtdC01XCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIj57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/IChcIkdldCBpbiBjb250YWN0IHdpdGggdXMhXCIpIDogKFwiTMOpcGplbiBrYXBjc29sYXRiYSB2ZWzDvG5rIVwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1hc2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCVmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L01EQkNhcm91c2VsSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TURCQ2Fyb3VzZWxJdGVtIGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW1cIiBpdGVtSWQ9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJWaWV3IGlkPXtjYXJpZHNbMV19IGNsYXNzTmFtZT17cGF0aG5hbWUgIT09IFwiL1wiID8gXCJoLTEwMCBjYXJyXCIgOiBcImNhcnJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTWFzayBvdmVybGF5PVwiYmxhY2stbGlnaHRcIiBjbGFzc05hbWU9XCJmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgd2hpdGUtdGV4dCBteC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIHRyaWdnZXJPbmNlIGRpcmVjdGlvbj1cImRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2xhbmd1YWdlID09PSBcImVuXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+Q29udGlidXM8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmVcIj4g4oCTIFNwZWNpYWxpc3QgQ29hY2ggVHJhdmVsPC9zcGFuPjwvc3Bhbj4pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuPkNvbnRpYnVzPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lXCI+IOKAkyBBeiB1dGF6w6FzIHN6YWvDqXJ0xZFpPC9zcGFuPjwvc3Bhbj4pfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgZC1ibG9jayB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGxldHRlclNwYWNpbmc6IFwiMXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJY29uIGljb249XCJjaGVja1wiIGNsYXNzTmFtZT1cInB4LTIgZC1tZC1pbmxpbmUgZC1ub25lXCIgLz4ge2xhbmd1YWdlID09PSBcImVuXCIgPyAoXCJTYWZldHlcIikgOiAoXCJCaXp0b25zw6FnXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwiY2hlY2tcIiBjbGFzc05hbWU9XCJweC0yXCIgLz57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/IChcIkNvbWZvcnRcIikgOiAoXCJLw6lueWVsZW1cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJY29uIGljb249XCJjaGVja1wiIGNsYXNzTmFtZT1cInB4LTJcIiAvPntsYW5ndWFnZSA9PT0gXCJlblwiID8gKFwiU3RhbmRhcmRzXCIpIDogKFwiU3rDrW52b25hbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkljb24gaWNvbj1cImNoZWNrXCIgY2xhc3NOYW1lPVwicHgtMiBkLW1kLWlubGluZSBkLW5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhdGhuYW1lID09PSBcIi9cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGlyZWN0aW9uPVwidXBcIiB0cmlnZ2VyT25jZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y29udGFjdGZvcm0odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdEdBLm1vZGFsdmlldygnL2NvbnRhY3Rmb3JtJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCIgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYmxhY2stdGV4dCByb3VuZGVkYnRuIGthcnR5YSBtdC01XCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIj57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/IChcIkdldCBpbiBjb250YWN0IHdpdGggdXMhXCIpIDogKFwiTMOpcGplbiBrYXBjc29sYXRiYSB2ZWzDvG5rIVwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1hc2s+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQlZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NREJDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1EQkNhcm91c2VsSXRlbSBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtXCIgaXRlbUlkPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCVmlldyBpZD17Y2FyaWRzWzJdfSBjbGFzc05hbWU9e3BhdGhuYW1lICE9PSBcIi9cIiA/IFwiaC0xMDAgY2FyclwiIDogXCJjYXJyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1hc2sgb3ZlcmxheT1cImJsYWNrLWxpZ2h0XCIgY2xhc3NOYW1lPVwiZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHdoaXRlLXRleHQgbXgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSB0cmlnZ2VyT25jZSBkaXJlY3Rpb249XCJkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntsYW5ndWFnZSA9PT0gXCJlblwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuPkNvbnRpYnVzPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lXCI+IOKAkyBTcGVjaWFsaXN0IENvYWNoIFRyYXZlbDwvc3Bhbj48L3NwYW4+KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3Bhbj5Db250aWJ1czxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZVwiPiDigJMgQXogdXRhesOhcyBzemFrw6lydMWRaTwvc3Bhbj48L3NwYW4+KX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IGQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBsZXR0ZXJTcGFjaW5nOiBcIjFweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwiY2hlY2tcIiBjbGFzc05hbWU9XCJweC0yXCIgLz57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/IChcIldlIG9mZmVyIGN1bHR1cmUgYW5kIGV4cGVyaWVuY2VcIikgOiAoXCJLdWx0w7pyw6F0IMOpcyDDqWxtw6lueXQgYWR1bmtcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJY29uIGljb249XCJjaGVja1wiIGNsYXNzTmFtZT1cInB4LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhdGhuYW1lID09PSBcIi9cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGlyZWN0aW9uPVwidXBcIiB0cmlnZ2VyT25jZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y29udGFjdGZvcm0odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdEdBLm1vZGFsdmlldygnL2NvbnRhY3Rmb3JtJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCIgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYmxhY2stdGV4dCByb3VuZGVkYnRuIGthcnR5YSBtdC01XCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIj57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/IChcIkdldCBpbiBjb250YWN0IHdpdGggdXMhXCIpIDogKFwiTMOpcGplbiBrYXBjc29sYXRiYSB2ZWzDvG5rIVwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQk1hc2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCVmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L01EQkNhcm91c2VsSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTURCQ2Fyb3VzZWxJbm5lcj5cclxuICAgICAgICAgICAgPC9NREJDYXJvdXNlbD5cclxuICAgICAgICAgICAgPENvbnRhY3Rmb3JtIGNvbnRhY3Rmb3JtPXtjb250YWN0Zm9ybX0gc2V0Y29udGFjdGZvcm09e3NldGNvbnRhY3Rmb3JtfSAvPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==