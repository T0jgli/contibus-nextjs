webpackHotUpdate_N_E("pages/buses",{

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
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = array[i];
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

  var carids = ["carr11", "carr22", "carr33"].sort(function () {
    return Math.random() - 0.5;
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
                          lineNumber: 43,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 43,
                        columnNumber: 50
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Az utaz\xE1s szak\xE9rt\u0151i"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 44,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 50
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
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
                        lineNumber: 50,
                        columnNumber: 49
                      }, _this), language === "en" ? "We offer culture and experience" : "Kultúrát és élményt adunk", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
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
                        lineNumber: 65,
                        columnNumber: 116
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 45
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
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
                          lineNumber: 84,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 50
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Az utaz\xE1s szak\xE9rt\u0151i"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 85,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 50
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
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
                        lineNumber: 91,
                        columnNumber: 49
                      }, _this), " ", language === "en" ? "Safety" : "Biztonság", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 49
                      }, _this), language === "en" ? "Comfort" : "Kényelem", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 49
                      }, _this), language === "en" ? "Standards" : "Színvonal", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2 d-md-inline d-none"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 94,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
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
                        lineNumber: 109,
                        columnNumber: 116
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 45
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
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
                          lineNumber: 129,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 50
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["Contibus", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "d-none d-md-inline",
                          children: " \u2013 Az utaz\xE1s szak\xE9rt\u0151i"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 130,
                          columnNumber: 64
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 130,
                        columnNumber: 50
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
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
                        lineNumber: 136,
                        columnNumber: 49
                      }, _this), language === "en" ? "We offer culture and experience" : "Kultúrát és élményt adunk", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
                        icon: "check",
                        className: "px-2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
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
                        lineNumber: 152,
                        columnNumber: 116
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 45
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Contactform__WEBPACK_IMPORTED_MODULE_5__["default"], {
      contactform: contactform,
      setcontactform: setcontactform
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9iYWxDb21wb25lbnRzL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbInNodWZmbGVhcnJheSIsImFycmF5IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJrIiwiQ2Fyb3VzZWwiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImxhbmd1YWdlIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RsYW5ndWFnZSIsInVzZVN0YXRlIiwiY29udGFjdGZvcm0iLCJzZXRjb250YWN0Zm9ybSIsImNhcmlkcyIsInNvcnQiLCJsZXR0ZXJTcGFjaW5nIiwiUmVhY3RHQSIsIm1vZGFsdmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUMxQixPQUFLQyxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQXhCLEVBQTJCRCxDQUFDLEdBQUcsQ0FBL0IsRUFBa0NBLENBQUMsRUFBbkMsRUFBdUM7QUFDbkNFLEtBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkwsQ0FBM0IsQ0FBSjtBQUNBTSxLQUFDLEdBQUdQLEtBQUssQ0FBQ0MsQ0FBRCxDQUFUO0FBQ0FELFNBQUssQ0FBQ0MsQ0FBRCxDQUFMLEdBQVdELEtBQUssQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBSCxTQUFLLENBQUNHLENBQUQsQ0FBTCxHQUFXSSxDQUFYO0FBQ0g7O0FBQ0QsU0FBT1AsS0FBUDtBQUNIOztBQUVELElBQU1RLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxtQkFDRUMsNkRBQVMsRUFEWDtBQUFBLE1BQ1hDLFFBRFcsY0FDWEEsUUFEVzs7QUFFbkIsTUFBTUMsUUFBUSxHQUFHQywr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O0FBQXFCLCtCQUFXLE1BQWhDO0FBQUEsMkNBRUkscUVBQUMsK0NBQUQ7QUFBUSw2QkFBTyxFQUFFLG1CQUFNO0FBQ25CTSxzQ0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNBSSx3RUFBTyxDQUFDQyxTQUFSLENBQWtCLGNBQWxCO0FBRUgsdUJBSkQ7QUFLSSwyQkFBSyxFQUFDLFNBTFY7QUFLb0IsMEJBQUksRUFBQyxJQUx6QjtBQU1JLCtCQUFTLEVBQUMsb0RBTmQ7QUFBQSw2Q0FNbUU7QUFDM0QsaUNBQVMsRUFBQyxFQURpRDtBQUFBLGtDQUM3Q1YsUUFBUSxLQUFLLElBQWIsR0FBcUIseUJBQXJCLEdBQW1EO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5uRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGlDQURILEdBZ0JJLElBakNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBMklJLHFFQUFDLG9EQUFEO0FBQWEsaUJBQVcsRUFBRUksV0FBMUI7QUFBdUMsb0JBQWMsRUFBRUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNJSjtBQUFBLGtCQURKO0FBZ0pILENBckpEOztHQUFNUixRO1VBQ21CQyxxRCxFQUNKRyx1RDs7O0tBRmZKLFE7QUF1SlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1c2VzLjgwMjg5YTBmOTE1MDdiMGViYWFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IE1EQkNhcm91c2VsLCBNREJNYXNrLCBNREJDYXJvdXNlbElubmVyLCBNREJDYXJvdXNlbEl0ZW0sIE1EQlZpZXcsIE1EQkljb24sIE1EQkJ0biB9IGZyb20gXCJtZGJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RsYW5ndWFnZSB9IGZyb20gJy4uLy4uL2xpYi9BcHBTbGljZSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IENvbnRhY3Rmb3JtIGZyb20gJy4vQ29udGFjdGZvcm0nO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSdcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gJ3JlYWN0LWF3ZXNvbWUtcmV2ZWFsJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZWFycmF5IChhcnJheSkge1xyXG4gICAgZm9yIChpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKVxyXG4gICAgICAgIGsgPSBhcnJheVtpXVxyXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal1cclxuICAgICAgICBhcnJheVtqXSA9IGtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheVxyXG59XHJcblxyXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB1c2VTZWxlY3RvcihzZWxlY3RsYW5ndWFnZSlcclxuICAgIGNvbnN0IFtjb250YWN0Zm9ybSwgc2V0Y29udGFjdGZvcm1dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBjYXJpZHMgPSBbXCJjYXJyMTFcIiwgXCJjYXJyMjJcIiwgXCJjYXJyMzNcIl0uc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1EQkNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtPXsxfVxyXG4gICAgICAgICAgICAgICAgbGVuZ3RoPXszfVxyXG4gICAgICAgICAgICAgICAgc2hvd0NvbnRyb2xzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc2hvd0luZGljYXRvcnM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhdGhuYW1lICE9PSBcIi9cIiA/IFwiY2Fyb3VzZWwgY2Fyb3VzZWx1cCB6LWRlcHRoLTEgXCIgOiBcImNhcm91c2VsIGhlYWRlcmNsaXAgei1kZXB0aC0xXCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNREJDYXJvdXNlbElubmVyIGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1EQkNhcm91c2VsSXRlbSBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtXCIgaXRlbUlkPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCVmlldyBpZD17Y2FyaWRzWzBdfSBjbGFzc05hbWU9e3BhdGhuYW1lICE9PSBcIi9cIiA/IFwiaC0xMDAgY2FyclwiIDogXCJjYXJyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQk1hc2sgb3ZlcmxheT1cImJsYWNrLWxpZ2h0XCIgY2xhc3NOYW1lPVwiZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHdoaXRlLXRleHQgbXgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSB0cmlnZ2VyT25jZSBkaXJlY3Rpb249XCJkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntsYW5ndWFnZSA9PT0gXCJlblwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuPkNvbnRpYnVzPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lXCI+IOKAkyBTcGVjaWFsaXN0IENvYWNoIFRyYXZlbDwvc3Bhbj48L3NwYW4+KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3Bhbj5Db250aWJ1czxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZVwiPiDigJMgQXogdXRhesOhcyBzemFrw6lydMWRaTwvc3Bhbj48L3NwYW4+KX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IGQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBsZXR0ZXJTcGFjaW5nOiBcIjFweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwiY2hlY2tcIiBjbGFzc05hbWU9XCJweC0yXCIgLz57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/IChcIldlIG9mZmVyIGN1bHR1cmUgYW5kIGV4cGVyaWVuY2VcIikgOiAoXCJLdWx0w7pyw6F0IMOpcyDDqWxtw6lueXQgYWR1bmtcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJY29uIGljb249XCJjaGVja1wiIGNsYXNzTmFtZT1cInB4LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF0aG5hbWUgPT09IFwiL1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBkaXJlY3Rpb249XCJ1cFwiIHRyaWdnZXJPbmNlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRjb250YWN0Zm9ybSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0R0EubW9kYWx2aWV3KCcvY29udGFjdGZvcm0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIiBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBibGFjay10ZXh0IHJvdW5kZWRidG4ga2FydHlhIG10LTVcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiPntsYW5ndWFnZSA9PT0gXCJlblwiID8gKFwiR2V0IGluIGNvbnRhY3Qgd2l0aCB1cyFcIikgOiAoXCJMw6lwamVuIGthcGNzb2xhdGJhIHZlbMO8bmshXCIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJCdG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTWFzaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTURCQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNREJDYXJvdXNlbEl0ZW0gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIGl0ZW1JZD1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQlZpZXcgaWQ9e2Nhcmlkc1sxXX0gY2xhc3NOYW1lPXtwYXRobmFtZSAhPT0gXCIvXCIgPyBcImgtMTAwIGNhcnJcIiA6IFwiY2FyclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJNYXNrIG92ZXJsYXk9XCJibGFjay1saWdodFwiIGNsYXNzTmFtZT1cImZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3aGl0ZS10ZXh0IG14LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgdHJpZ2dlck9uY2UgZGlyZWN0aW9uPVwiZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57bGFuZ3VhZ2UgPT09IFwiZW5cIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8c3Bhbj5Db250aWJ1czxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZVwiPiDigJMgU3BlY2lhbGlzdCBDb2FjaCBUcmF2ZWw8L3NwYW4+PC9zcGFuPikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+Q29udGlidXM8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmVcIj4g4oCTIEF6IHV0YXrDoXMgc3pha8OpcnTFkWk8L3NwYW4+PC9zcGFuPil9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCBkLWJsb2NrIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbGV0dGVyU3BhY2luZzogXCIxcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkljb24gaWNvbj1cImNoZWNrXCIgY2xhc3NOYW1lPVwicHgtMiBkLW1kLWlubGluZSBkLW5vbmVcIiAvPiB7bGFuZ3VhZ2UgPT09IFwiZW5cIiA/IChcIlNhZmV0eVwiKSA6IChcIkJpenRvbnPDoWdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJY29uIGljb249XCJjaGVja1wiIGNsYXNzTmFtZT1cInB4LTJcIiAvPntsYW5ndWFnZSA9PT0gXCJlblwiID8gKFwiQ29tZm9ydFwiKSA6IChcIkvDqW55ZWxlbVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkljb24gaWNvbj1cImNoZWNrXCIgY2xhc3NOYW1lPVwicHgtMlwiIC8+e2xhbmd1YWdlID09PSBcImVuXCIgPyAoXCJTdGFuZGFyZHNcIikgOiAoXCJTesOtbnZvbmFsXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwiY2hlY2tcIiBjbGFzc05hbWU9XCJweC0yIGQtbWQtaW5saW5lIGQtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF0aG5hbWUgPT09IFwiL1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBkaXJlY3Rpb249XCJ1cFwiIHRyaWdnZXJPbmNlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRjb250YWN0Zm9ybSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0R0EubW9kYWx2aWV3KCcvY29udGFjdGZvcm0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIiBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBibGFjay10ZXh0IHJvdW5kZWRidG4ga2FydHlhIG10LTVcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiPntsYW5ndWFnZSA9PT0gXCJlblwiID8gKFwiR2V0IGluIGNvbnRhY3Qgd2l0aCB1cyFcIikgOiAoXCJMw6lwamVuIGthcGNzb2xhdGJhIHZlbMO8bmshXCIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJCdG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTWFzaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCVmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L01EQkNhcm91c2VsSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TURCQ2Fyb3VzZWxJdGVtIGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW1cIiBpdGVtSWQ9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJWaWV3IGlkPXtjYXJpZHNbMl19IGNsYXNzTmFtZT17cGF0aG5hbWUgIT09IFwiL1wiID8gXCJoLTEwMCBjYXJyXCIgOiBcImNhcnJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCTWFzayBvdmVybGF5PVwiYmxhY2stbGlnaHRcIiBjbGFzc05hbWU9XCJmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgd2hpdGUtdGV4dCBteC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIHRyaWdnZXJPbmNlIGRpcmVjdGlvbj1cImRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2xhbmd1YWdlID09PSBcImVuXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+Q29udGlidXM8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmVcIj4g4oCTIFNwZWNpYWxpc3QgQ29hY2ggVHJhdmVsPC9zcGFuPjwvc3Bhbj4pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuPkNvbnRpYnVzPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lXCI+IOKAkyBBeiB1dGF6w6FzIHN6YWvDqXJ0xZFpPC9zcGFuPjwvc3Bhbj4pfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGxldHRlclNwYWNpbmc6IFwiMXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJY29uIGljb249XCJjaGVja1wiIGNsYXNzTmFtZT1cInB4LTJcIiAvPntsYW5ndWFnZSA9PT0gXCJlblwiID8gKFwiV2Ugb2ZmZXIgY3VsdHVyZSBhbmQgZXhwZXJpZW5jZVwiKSA6IChcIkt1bHTDunLDoXQgw6lzIMOpbG3DqW55dCBhZHVua1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkljb24gaWNvbj1cImNoZWNrXCIgY2xhc3NOYW1lPVwicHgtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF0aG5hbWUgPT09IFwiL1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBkaXJlY3Rpb249XCJ1cFwiIHRyaWdnZXJPbmNlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0biBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRjb250YWN0Zm9ybSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0R0EubW9kYWx2aWV3KCcvY29udGFjdGZvcm0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIiBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBibGFjay10ZXh0IHJvdW5kZWRidG4ga2FydHlhIG10LTVcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiPntsYW5ndWFnZSA9PT0gXCJlblwiID8gKFwiR2V0IGluIGNvbnRhY3Qgd2l0aCB1cyFcIikgOiAoXCJMw6lwamVuIGthcGNzb2xhdGJhIHZlbMO8bmshXCIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJCdG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCTWFzaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NREJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTURCQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9NREJDYXJvdXNlbElubmVyPlxyXG4gICAgICAgICAgICA8L01EQkNhcm91c2VsPlxyXG4gICAgICAgICAgICA8Q29udGFjdGZvcm0gY29udGFjdGZvcm09e2NvbnRhY3Rmb3JtfSBzZXRjb250YWN0Zm9ybT17c2V0Y29udGFjdGZvcm19IC8+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9