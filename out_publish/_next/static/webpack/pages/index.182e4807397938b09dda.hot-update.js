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









var carids = ["carr11", "carr22", "carr33"];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var Carousel = function Carousel() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])(),
      pathname = _useRouter.pathname;

  var language = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_lib_AppSlice__WEBPACK_IMPORTED_MODULE_3__["selectlanguage"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      contactform = _useState[0],
      setcontactform = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    carids.sort(function () {
      return Math.random() - 0.5;
    });
  }, []);
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
                          lineNumber: 46,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 50
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Az utaz\xE1s szak\xE9rt\u0151i"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 47,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 50
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
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
                        lineNumber: 53,
                        columnNumber: 49
                      }, _this), language === "en" ? "We offer culture and experience" : "Kultúrát és élményt adunk", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
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
                        lineNumber: 68,
                        columnNumber: 116
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 45
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
                          lineNumber: 87,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 50
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Az utaz\xE1s szak\xE9rt\u0151i"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 50
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
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
                        lineNumber: 94,
                        columnNumber: 49
                      }, _this), " ", language === "en" ? "Safety" : "Biztonság", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 49
                      }, _this), language === "en" ? "Comfort" : "Kényelem", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 49
                      }, _this), language === "en" ? "Standards" : "Színvonal", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2 d-md-inline d-none"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
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
                        lineNumber: 112,
                        columnNumber: 116
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 45
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
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
                          lineNumber: 132,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 132,
                        columnNumber: 50
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Az utaz\xE1s szak\xE9rt\u0151i"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 133,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 50
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
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
                        lineNumber: 139,
                        columnNumber: 49
                      }, _this), language === "en" ? "We offer culture and experience" : "Kultúrát és élményt adunk", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
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
                        lineNumber: 155,
                        columnNumber: 116
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 45
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Contactform__WEBPACK_IMPORTED_MODULE_5__["default"], {
      contactform: contactform,
      setcontactform: setcontactform
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Carousel, "YjJw3n6tsUVjBcR7rY3o2tlckZM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9iYWxDb21wb25lbnRzL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbImNhcmlkcyIsInNodWZmbGVBcnJheSIsImFycmF5IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiQ2Fyb3VzZWwiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImxhbmd1YWdlIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RsYW5ndWFnZSIsInVzZVN0YXRlIiwiY29udGFjdGZvcm0iLCJzZXRjb250YWN0Zm9ybSIsInVzZUVmZmVjdCIsInNvcnQiLCJsZXR0ZXJTcGFjaW5nIiwiUmVhY3RHQSIsIm1vZGFsdmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFFBQXJCLENBQWY7O0FBRUEsU0FBU0MsWUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDMUIsT0FBSyxJQUFJQyxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQTVCLEVBQStCRCxDQUFDLEdBQUcsQ0FBbkMsRUFBc0NBLENBQUMsRUFBdkMsRUFBMkM7QUFDdkMsUUFBSUUsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCTCxDQUFDLEdBQUcsQ0FBckIsQ0FBWCxDQUFSO0FBQ0EsUUFBSU0sSUFBSSxHQUFHUCxLQUFLLENBQUNDLENBQUQsQ0FBaEI7QUFDQUQsU0FBSyxDQUFDQyxDQUFELENBQUwsR0FBV0QsS0FBSyxDQUFDRyxDQUFELENBQWhCO0FBQ0FILFNBQUssQ0FBQ0csQ0FBRCxDQUFMLEdBQVdJLElBQVg7QUFDSDtBQUNKOztBQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFX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QTtBQUFBLHlCQVJKLEVBaUJLRCxRQUFRLEtBQUssR0FBYixnQkFDRztBQUFBLHlDQUNJLHFFQUFDLHlEQUFEO0FBQU0sNkJBQVMsRUFBQyxJQUFoQjtBQUFxQiwrQkFBVyxNQUFoQztBQUFBLDJDQUVJLHFFQUFDLCtDQUFEO0FBQVEsNkJBQU8sRUFBRSxtQkFBTTtBQUNuQk0sc0NBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUksd0VBQU8sQ0FBQ0MsU0FBUixDQUFrQixjQUFsQjtBQUVILHVCQUpEO0FBS0ksMkJBQUssRUFBQyxTQUxWO0FBS29CLDBCQUFJLEVBQUMsSUFMekI7QUFNSSwrQkFBUyxFQUFDLG9EQU5kO0FBQUEsNkNBTW1FO0FBQzNELGlDQUFTLEVBQUMsRUFEaUQ7QUFBQSxrQ0FDN0NWLFFBQVEsS0FBSyxJQUFiLEdBQXFCLHlCQUFyQixHQUFtRDtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFObkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixpQ0FESCxHQWdCSSxJQWpDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQTJJSSxxRUFBQyxvREFBRDtBQUFhLGlCQUFXLEVBQUVJLFdBQTFCO0FBQXVDLG9CQUFjLEVBQUVDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzSUo7QUFBQSxrQkFESjtBQWdKSCxDQXZKRDs7R0FBTVIsUTtVQUNtQkMscUQsRUFDSkcsdUQ7OztLQUZmSixRO0FBeUpTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xODJlNDgwNzM5NzkzOGIwOWRkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IE1EQkNhcm91c2VsLCBNREJNYXNrLCBNREJDYXJvdXNlbElubmVyLCBNREJDYXJvdXNlbEl0ZW0sIE1EQlZpZXcsIE1EQkljb24sIE1EQkJ0biB9IGZyb20gXCJtZGJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RsYW5ndWFnZSB9IGZyb20gJy4uLy4uL2xpYi9BcHBTbGljZSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IENvbnRhY3Rmb3JtIGZyb20gJy4vQ29udGFjdGZvcm0nO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSdcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gJ3JlYWN0LWF3ZXNvbWUtcmV2ZWFsJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgY2FyaWRzID0gW1wiY2FycjExXCIsIFwiY2FycjIyXCIsIFwiY2FycjMzXCJdO1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5IChhcnJheSkge1xyXG4gICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgIGxldCB0ZW1wID0gYXJyYXlbaV07XHJcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcclxuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IENhcm91c2VsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZVNlbGVjdG9yKHNlbGVjdGxhbmd1YWdlKVxyXG4gICAgY29uc3QgW2NvbnRhY3Rmb3JtLCBzZXRjb250YWN0Zm9ybV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2FyaWRzLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSlcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TURCQ2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW09ezF9XHJcbiAgICAgICAgICAgICAgICBsZW5ndGg9ezN9XHJcbiAgICAgICAgICAgICAgICBzaG93Q29udHJvbHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzaG93SW5kaWNhdG9ycz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cGF0aG5hbWUgIT09IFwiL1wiID8gXCJjYXJvdXNlbCBjYXJvdXNlbHVwIHotZGVwdGgtMSBcIiA6IFwiY2Fyb3VzZWwgaGVhZGVyY2xpcCB6LWRlcHRoLTFcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1EQkNhcm91c2VsSW5uZXIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TURCQ2Fyb3VzZWxJdGVtIGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW1cIiBpdGVtSWQ9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJWaWV3IGlkPXtjYXJpZHNbMF19IGNsYXNzTmFtZT17cGF0aG5hbWUgIT09IFwiL1wiID8gXCJoLTEwMCBjYXJyXCIgOiBcImNhcnJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTWFzayBvdmVybGF5PVwiYmxhY2stbGlnaHRcIiBjbGFzc05hbWU9XCJmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgd2hpdGUtdGV4dCBteC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIHRyaWdnZXJPbmNlIGRpcmVjdGlvbj1cImRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2xhbmd1YWdlID09PSBcImVuXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+Q29udGlidXM8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmVcIj4g4oCTIFNwZWNpYWxpc3QgQ29hY2ggVHJhdmVsPC9zcGFuPjwvc3Bhbj4pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuPkNvbnRpYnVzPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lXCI+IOKAkyBBeiB1dGF6w6FzIHN6YWvDqXJ0xZFpPC9zcGFuPjwvc3Bhbj4pfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGxldHRlclNwYWNpbmc6IFwiMXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJY29uIGljb249XCJjaGVja1wiIGNsYXNzTmFtZT1cInB4LTJcIiAvPntsYW5ndWFnZSA9PT0gXCJlblwiID8gKFwiV2Ugb2ZmZXIgY3VsdHVyZSBhbmQgZXhwZXJpZW5jZVwiKSA6IChcIkt1bHTDunLDoXQgw6lzIMOpbG3DqW55dCBhZHVua1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkljb24gaWNvbj1cImNoZWNrXCIgY2xhc3NOYW1lPVwicHgtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXRobmFtZSA9PT0gXCIvXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGRpcmVjdGlvbj1cInVwXCIgdHJpZ2dlck9uY2U+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGNvbnRhY3Rmb3JtKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RHQS5tb2RhbHZpZXcoJy9jb250YWN0Zm9ybScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGJsYWNrLXRleHQgcm91bmRlZGJ0biBrYXJ0eWEgbXQtNVwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCI+e2xhbmd1YWdlID09PSBcImVuXCIgPyAoXCJHZXQgaW4gY29udGFjdCB3aXRoIHVzIVwiKSA6IChcIkzDqXBqZW4ga2FwY3NvbGF0YmEgdmVsw7xuayFcIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAobnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNYXNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQlZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NREJDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1EQkNhcm91c2VsSXRlbSBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtXCIgaXRlbUlkPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCVmlldyBpZD17Y2FyaWRzWzFdfSBjbGFzc05hbWU9e3BhdGhuYW1lICE9PSBcIi9cIiA/IFwiaC0xMDAgY2FyclwiIDogXCJjYXJyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1hc2sgb3ZlcmxheT1cImJsYWNrLWxpZ2h0XCIgY2xhc3NOYW1lPVwiZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHdoaXRlLXRleHQgbXgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSB0cmlnZ2VyT25jZSBkaXJlY3Rpb249XCJkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntsYW5ndWFnZSA9PT0gXCJlblwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuPkNvbnRpYnVzPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lXCI+IOKAkyBTcGVjaWFsaXN0IENvYWNoIFRyYXZlbDwvc3Bhbj48L3NwYW4+KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3Bhbj5Db250aWJ1czxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZVwiPiDigJMgQXogdXRhesOhcyBzemFrw6lydMWRaTwvc3Bhbj48L3NwYW4+KX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IGQtYmxvY2sgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBsZXR0ZXJTcGFjaW5nOiBcIjFweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwiY2hlY2tcIiBjbGFzc05hbWU9XCJweC0yIGQtbWQtaW5saW5lIGQtbm9uZVwiIC8+IHtsYW5ndWFnZSA9PT0gXCJlblwiID8gKFwiU2FmZXR5XCIpIDogKFwiQml6dG9uc8OhZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkljb24gaWNvbj1cImNoZWNrXCIgY2xhc3NOYW1lPVwicHgtMlwiIC8+e2xhbmd1YWdlID09PSBcImVuXCIgPyAoXCJDb21mb3J0XCIpIDogKFwiS8OpbnllbGVtXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwiY2hlY2tcIiBjbGFzc05hbWU9XCJweC0yXCIgLz57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/IChcIlN0YW5kYXJkc1wiKSA6IChcIlN6w61udm9uYWxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJY29uIGljb249XCJjaGVja1wiIGNsYXNzTmFtZT1cInB4LTIgZC1tZC1pbmxpbmUgZC1ub25lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXRobmFtZSA9PT0gXCIvXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGRpcmVjdGlvbj1cInVwXCIgdHJpZ2dlck9uY2U+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGNvbnRhY3Rmb3JtKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RHQS5tb2RhbHZpZXcoJy9jb250YWN0Zm9ybScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGJsYWNrLXRleHQgcm91bmRlZGJ0biBrYXJ0eWEgbXQtNVwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCI+e2xhbmd1YWdlID09PSBcImVuXCIgPyAoXCJHZXQgaW4gY29udGFjdCB3aXRoIHVzIVwiKSA6IChcIkzDqXBqZW4ga2FwY3NvbGF0YmEgdmVsw7xuayFcIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAobnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNYXNrPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTURCQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNREJDYXJvdXNlbEl0ZW0gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIGl0ZW1JZD1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlZpZXcgaWQ9e2Nhcmlkc1syXX0gY2xhc3NOYW1lPXtwYXRobmFtZSAhPT0gXCIvXCIgPyBcImgtMTAwIGNhcnJcIiA6IFwiY2FyclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNYXNrIG92ZXJsYXk9XCJibGFjay1saWdodFwiIGNsYXNzTmFtZT1cImZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3aGl0ZS10ZXh0IG14LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgdHJpZ2dlck9uY2UgZGlyZWN0aW9uPVwiZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3Bhbj5Db250aWJ1czxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZVwiPiDigJMgU3BlY2lhbGlzdCBDb2FjaCBUcmF2ZWw8L3NwYW4+PC9zcGFuPikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+Q29udGlidXM8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmVcIj4g4oCTIEF6IHV0YXrDoXMgc3pha8OpcnTFkWk8L3NwYW4+PC9zcGFuPil9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCBkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbGV0dGVyU3BhY2luZzogXCIxcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkljb24gaWNvbj1cImNoZWNrXCIgY2xhc3NOYW1lPVwicHgtMlwiIC8+e2xhbmd1YWdlID09PSBcImVuXCIgPyAoXCJXZSBvZmZlciBjdWx0dXJlIGFuZCBleHBlcmllbmNlXCIpIDogKFwiS3VsdMO6csOhdCDDqXMgw6lsbcOpbnl0IGFkdW5rXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwiY2hlY2tcIiBjbGFzc05hbWU9XCJweC0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXRobmFtZSA9PT0gXCIvXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGRpcmVjdGlvbj1cInVwXCIgdHJpZ2dlck9uY2U+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGNvbnRhY3Rmb3JtKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RHQS5tb2RhbHZpZXcoJy9jb250YWN0Zm9ybScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGJsYWNrLXRleHQgcm91bmRlZGJ0biBrYXJ0eWEgbXQtNVwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCI+e2xhbmd1YWdlID09PSBcImVuXCIgPyAoXCJHZXQgaW4gY29udGFjdCB3aXRoIHVzIVwiKSA6IChcIkzDqXBqZW4ga2FwY3NvbGF0YmEgdmVsw7xuayFcIil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAobnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJNYXNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01EQlZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NREJDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L01EQkNhcm91c2VsSW5uZXI+XHJcbiAgICAgICAgICAgIDwvTURCQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDxDb250YWN0Zm9ybSBjb250YWN0Zm9ybT17Y29udGFjdGZvcm19IHNldGNvbnRhY3Rmb3JtPXtzZXRjb250YWN0Zm9ybX0gLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=