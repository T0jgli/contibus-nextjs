exports.id = 32;
exports.ids = [32];
exports.modules = {

/***/ 6032:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6511);
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8966);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9831);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);







const Rating = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/* import() */ 984).then(__webpack_require__.t.bind(__webpack_require__, 5984, 23)), {
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5984)],
    modules: ["..\\components\\HomeComponents\\Cards.js -> " + "./Rating"]
  }
});
const Modals = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/* import() */ 992).then(__webpack_require__.bind(__webpack_require__, 8992)), {
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8992)],
    modules: ["..\\components\\HomeComponents\\Cards.js -> " + "./Modals"]
  }
});
const Contact = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.all(/* import() */[__webpack_require__.e(147), __webpack_require__.e(642)]).then(__webpack_require__.bind(__webpack_require__, 1642)), {
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1642)],
    modules: ["..\\components\\HomeComponents\\Cards.js -> " + "./Contact"]
  }
});




const Cards = () => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    0: modalsopen,
    1: setmodalsopen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    open: false,
    style: null,
    title: {
      en: null,
      hu: null
    },
    details: null
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "pt-5 z-depth-1",
      style: {
        backgroundColor: "#f0f0f0"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "services__container flex-center flex-column",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "services__wrapper",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
            triggerOnce: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              onClick: () => window.open("/files/artablazat.docx", "_parent", "download"),
              className: "services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "view mb-3 rounded",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: "icon",
                  src: "/img/svgs/pricetable.svg",
                  alt: "\xC1rt\xE1bl\xE1zat k\xE1rtya k\xE9p"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-center w-100 d-block mb-3 arrowdropup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_2___default()), {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                children: locale === "en" ? "Price table" : "Ártáblázat"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
            triggerOnce: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              onClick: async () => {
                react_ga__WEBPACK_IMPORTED_MODULE_6___default().modalview("/drivingtime");
                const {
                  Vezetesiidocontent
                } = await __webpack_require__.e(/* import() */ 546).then(__webpack_require__.bind(__webpack_require__, 3546));
                setmodalsopen({
                  open: true,
                  style: "info",
                  title: {
                    en: "Driving time",
                    hu: "Vezetési idő"
                  },
                  details: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Vezetesiidocontent, {})
                });
              },
              className: "services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "view mb-3 rounded",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: "icon",
                  src: "/img/svgs/time.svg",
                  alt: "Vezet\xE9siid\u0151 k\xE1rtya k\xE9p"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-center w-100 d-block mb-3 arrowdropup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_2___default()), {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                children: locale === "en" ? "Driving time" : "Vezetési idő"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
            triggerOnce: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              onClick: async () => {
                react_ga__WEBPACK_IMPORTED_MODULE_6___default().modalview("/joboffers");
                const {
                  Allasajanlatcontent
                } = await __webpack_require__.e(/* import() */ 546).then(__webpack_require__.bind(__webpack_require__, 3546));
                setmodalsopen({
                  open: true,
                  style: "success",
                  title: {
                    en: "Current job offers",
                    hu: "Aktuális állásajánlataink"
                  },
                  details: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Allasajanlatcontent, {})
                });
              },
              className: "services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "view mb-3 rounded",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: "icon",
                  src: "/img/svgs/job.svg",
                  alt: "\xC1ll\xE1saj\xE1nlat k\xE1rtya k\xE9p"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-center w-100 d-block mb-3 arrowdropup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_2___default()), {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                children: locale === "en" ? "Job offer" : "Állásajánlataink"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
            triggerOnce: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              onClick: async () => {
                react_ga__WEBPACK_IMPORTED_MODULE_6___default().modalview("/gls");
                const {
                  Glscontent
                } = await __webpack_require__.e(/* import() */ 546).then(__webpack_require__.bind(__webpack_require__, 3546));
                setmodalsopen({
                  open: true,
                  style: "warning",
                  title: {
                    en: "GLS ParcelShop",
                    hu: "GLS Csomagpont"
                  },
                  details: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Glscontent, {})
                });
              },
              className: "services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "view mb-3 rounded",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: "icon",
                  src: "/img/svgs/package.svg",
                  alt: "GLS k\xE9p"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: "icon__edit",
                  src: "/img/svgs/gls.svg",
                  alt: "GLS k\xE1rtya k\xE9p"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-center w-100 d-block mb-3 arrowdropup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_2___default()), {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                children: locale === "en" ? "GLS parcelshop" : "GLS csomagpont"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
            triggerOnce: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              onClick: async () => {
                react_ga__WEBPACK_IMPORTED_MODULE_6___default().modalview("/luggagestore");
                const {
                  Csomagmegorzescontent
                } = await __webpack_require__.e(/* import() */ 546).then(__webpack_require__.bind(__webpack_require__, 3546));
                setmodalsopen({
                  open: true,
                  style: "success",
                  title: {
                    en: "Luggage store",
                    hu: "Csomagmegőrzés"
                  },
                  details: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Csomagmegorzescontent, {})
                });
              },
              className: "services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "view mb-3 rounded",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: "icon",
                  src: "/img/svgs/suitcase.svg",
                  alt: "Csomagmeg\u0151rz\xE9s k\xE1rtya k\xE9p"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-center w-100 d-block mb-3 arrowdropup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_2___default()), {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                children: locale === "en" ? "Luggage store" : "Csomagmegőrzés"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
            triggerOnce: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              onClick: async () => {
                react_ga__WEBPACK_IMPORTED_MODULE_6___default().modalview("/dpd");
                const {
                  Dpdcontent
                } = await __webpack_require__.e(/* import() */ 546).then(__webpack_require__.bind(__webpack_require__, 3546));
                setmodalsopen({
                  open: true,
                  style: "danger",
                  title: {
                    en: "DPD ParcelShop",
                    hu: "DPD Csomagpont"
                  },
                  details: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dpdcontent, {})
                });
              },
              className: "services__card rounded d-flex align-items-center flex-column justify-content-start p-0 mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "view mb-3 rounded",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: "icon",
                  src: "/img/svgs/package.svg",
                  alt: "DPD k\xE9p"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: "icon__edit",
                  src: "/img/svgs/dpd.svg",
                  alt: "DPD k\xE1rtya k\xE9p"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-center w-100 d-block mb-3 arrowdropup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_2___default()), {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                children: locale === "en" ? "DPD parcelshop" : "DPD csomagpont"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: "w-50 mx-auto my-5"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Contact, {})]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Modals, {
      modalsopen: modalsopen,
      setmodalsopen: setmodalsopen
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ })

};
;