exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 5616:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);








const shuffle = arr => [...arr].reduceRight((res, _, __, arr) => (res.push(arr.splice(0 | Math.random() * arr.length, 1)[0]), res), []);

const Carousel = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: carids,
    1: setcarids
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setcarids(shuffle(["carr11", "carr22", "carr33"]));
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCarousel, {
      activeItem: 1,
      length: 3,
      showControls: true,
      showIndicators: true,
      className: router.pathname !== "/" ? "carousel carouselup z-depth-1 " : "carousel headerclip z-depth-1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCarouselInner, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCarouselItem, {
          itemId: "1",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBView, {
            id: carids[0],
            className: router.pathname !== "/" ? "h-100 carr" : "carr",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBMask, {
              overlay: "black-light",
              className: "flex-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center white-text mx-5",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
                  triggerOnce: true,
                  direction: "down",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mb-4",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                      className: "font-weight-bold",
                      children: router.locale === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                          className: "d-none d-md-inline",
                          children: "Contibus \u2013 "
                        }), "Specialist Coach Travel"]
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                          className: "d-none d-md-inline",
                          children: "Contibus \u2013 "
                        }), "Az utaz\xE1s szak\xE9rt\u0151i"]
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
                  triggerOnce: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-4 d-block",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                      style: {
                        letterSpacing: "1px"
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        icon: "check",
                        className: "px-2"
                      }), router.locale === "en" ? "We offer culture and experience" : "Kultúrát és élményt adunk", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        icon: "check",
                        className: "px-2"
                      })]
                    })
                  })
                }), router.pathname === "/" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
                    direction: "up",
                    triggerOnce: true,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBBtn, {
                      onClick: () => {},
                      color: "warning",
                      size: "lg",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: "https://www.facebook.com/Contibus-Neoline-432462590213055",
                      className: "font-weight-bold black-text roundedbtn kartya mt-5",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "",
                        children: router.locale === "en" ? "Get in contact with us!" : "Lépjen kapcsolatba velünk!"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        fab: true,
                        icon: "facebook-square",
                        className: "pl-2"
                      })]
                    })
                  })
                }) : null]
              })
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCarouselItem, {
          itemId: "2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBView, {
            id: carids[1],
            className: router.pathname !== "/" ? "h-100 carr" : "carr",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBMask, {
              overlay: "black-light",
              className: "flex-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center white-text mx-5",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
                  triggerOnce: true,
                  direction: "down",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mb-4",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                      className: "font-weight-bold",
                      children: router.locale === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                          className: "d-none d-md-inline",
                          children: "Contibus \u2013 "
                        }), "Specialist Coach Travel"]
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                          className: "d-none d-md-inline",
                          children: "Contibus \u2013 "
                        }), "Az utaz\xE1s szak\xE9rt\u0151i"]
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
                  triggerOnce: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-4 d-block text-center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                      style: {
                        letterSpacing: "1px"
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        icon: "check",
                        className: "px-2 d-md-inline d-none"
                      }), " ", router.locale === "en" ? "Safety" : "Biztonság", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        icon: "check",
                        className: "px-2"
                      }), router.locale === "en" ? "Comfort" : "Kényelem", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        icon: "check",
                        className: "px-2"
                      }), router.locale === "en" ? "Standards" : "Színvonal", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        icon: "check",
                        className: "px-2 d-md-inline d-none"
                      })]
                    })
                  })
                }), router.pathname === "/" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
                    direction: "up",
                    triggerOnce: true,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBBtn, {
                      onClick: () => {},
                      color: "warning",
                      size: "lg",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: "https://www.facebook.com/Contibus-Neoline-432462590213055",
                      className: "font-weight-bold black-text roundedbtn kartya mt-5",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "",
                        children: router.locale === "en" ? "Get in contact with us!" : "Lépjen kapcsolatba velünk!"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        fab: true,
                        icon: "facebook-square",
                        className: "pl-2"
                      })]
                    })
                  })
                }) : null]
              })
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCarouselItem, {
          itemId: "3",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBView, {
            id: carids[2],
            className: router.pathname !== "/" ? "h-100 carr" : "carr",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBMask, {
              overlay: "black-light",
              className: "flex-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center white-text mx-5",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
                  triggerOnce: true,
                  direction: "down",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mb-4",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                      className: "font-weight-bold",
                      children: router.locale === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                          className: "d-none d-md-inline",
                          children: "Contibus \u2013 "
                        }), "Specialist Coach Travel"]
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                          className: "d-none d-md-inline",
                          children: "Contibus \u2013 "
                        }), "Az utaz\xE1s szak\xE9rt\u0151i"]
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
                  triggerOnce: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-4 d-block",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                      style: {
                        letterSpacing: "1px"
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        icon: "check",
                        className: "px-2"
                      }), router.locale === "en" ? "We offer culture and experience" : "Kultúrát és élményt adunk", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        icon: "check",
                        className: "px-2"
                      })]
                    })
                  })
                }), router.pathname === "/" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
                    direction: "up",
                    triggerOnce: true,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBBtn, {
                      onClick: () => {},
                      color: "warning",
                      size: "lg",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: "https://www.facebook.com/Contibus-Neoline-432462590213055",
                      className: "font-weight-bold black-text roundedbtn kartya mt-5",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "",
                        children: router.locale === "en" ? "Get in contact with us!" : "Lépjen kapcsolatba velünk!"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBIcon, {
                        fab: true,
                        icon: "facebook-square",
                        className: "pl-2"
                      })]
                    })
                  })
                }) : null]
              })
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Carousel);

/***/ })

};
;