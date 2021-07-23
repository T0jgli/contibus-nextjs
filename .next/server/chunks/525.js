exports.id = 525;
exports.ids = [525];
exports.modules = {

/***/ 5525:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5484);
/* harmony import */ var _material_ui_icons_Update__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Update__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Speed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8434);
/* harmony import */ var _material_ui_icons_Speed__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Speed__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9373);
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_AirlineSeatReclineNormal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6680);
/* harmony import */ var _material_ui_icons_AirlineSeatReclineNormal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AirlineSeatReclineNormal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(104);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);














const Fslightboxes = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(() => __webpack_require__.e(/* import() */ 590).then(__webpack_require__.bind(__webpack_require__, 8590)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8590)],
    modules: ["..\\components\\BusesComponents\\OneBusBody.js -> " + "../GlobalComponents/Fslightboxes"]
  }
});

const OneBusBody = ({
  thisbus
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  const {
    0: thispicture,
    1: setthispicture
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: lightbox,
    1: setlightbox
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    toggler: false,
    slide: 1
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: thisbus ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
          children: [thisbus.fields.bus, " - ContiBus"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          property: "og:image",
          content: `https://${thisbus.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          name: "twitter:image",
          content: `https://${thisbus.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          property: "og:url",
          content: `https://contibus.hu/bus/${thisbus.fields.id}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "alternate",
          hrefLang: "en",
          href: `https://contibus.hu/en/bus/${thisbus.fields.id}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "alternate",
          hrefLang: "hu",
          href: `https://contibus.hu/bus/${thisbus.fields.id}`
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "onebus__container w-75 mx-auto my-5 pt-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-sm-right text-center col",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__.Fade, {
              triggerOnce: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: `${thisbus.fields.bus} kép`,
                src: `https://${thisbus.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`,
                style: {
                  cursor: "pointer",
                  borderRadius: "1rem"
                },
                onClick: () => setlightbox({
                  toggler: true,
                  slide: thispicture
                }),
                className: "img img-rounded img-thumbnail buspict"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__.Fade, {
              triggerOnce: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-2 otherpictures mb-5 mb-md-0",
                children: thisbus.fields.pictures.map((pict, i) => {
                  if (i !== thispicture) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    alt: `${thisbus.fields.bus} kép (${i + 1})`,
                    style: {
                      borderRadius: "1rem"
                    },
                    src: `https://${pict.fields.file.url}?&fm=webp&q=80`,
                    onClick: () => setthispicture(i),
                    className: "p-2",
                    width: "100"
                  }, `${thisbus.fields.bus} (${i + 1})`);else return null;
                })
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__.Fade, {
              triggerOnce: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "onebus__detailscontainer",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                  className: "text-center text-lg-left",
                  children: thisbus.fields.bus
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "onebus__oradijcontainer d-flex align-items-center pb-2 mt-5",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Update__WEBPACK_IMPORTED_MODULE_3___default()), {
                    fontSize: "large"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                      className: "grey-text m-0 pl-4",
                      children: ["PER ", router.locale === "en" ? "HOUR" : "ÓRA"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                      className: "grey-text h4 font-weight-bold pt-2 m-0 pl-4",
                      children: [thisbus.fields.oradij.toLocaleString(), " ", router.locale === "en" ? "Ft / hour" : "Ft / óra"]
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                  className: "my-4"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "onebus__kmdijcontainer d-flex align-items-center pt-2 mt-4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Speed__WEBPACK_IMPORTED_MODULE_4___default()), {
                    fontSize: "large"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "grey-text m-0 pl-4",
                      children: "PER KM"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                      className: "grey-text h4 font-weight-bold pt-2 m-0 pl-4",
                      children: [thisbus.fields.kmdij.toLocaleString(), " Ft / km"]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "onebus__kmdijcontainer d-flex align-items-center mt-5 pt-3",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_5___default()), {
                    fontSize: "large"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "grey-text m-0 pl-4",
                      children: router.locale === "en" ? "NUMBER OF SEATS" : "SZÁLLÍTHATÓ SZEMÉLYEK"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                      className: "grey-text font-weight-bold pt-2 m-0 pl-4",
                      children: thisbus.fields.title.split(" ").slice(0, 3).join(" ")
                    })]
                  })]
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__.Fade, {
          triggerOnce: true,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-5 pt-4 mx-auto flex-center row",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "text-center col-lg-8",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "grey-text",
                children: thisbus.fields.desc
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto mt-3 flex-center row",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "text-center col-lg-8",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
                title: router.locale === "en" ? "Seat positions" : "Ülésrend",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                  "aria-label": "seats",
                  onClick: () => window.open(`https:${thisbus.fields.seats.fields.file.url}`, "_blank"),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_AirlineSeatReclineNormal__WEBPACK_IMPORTED_MODULE_7___default()), {})
                })
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "flex-center mt-5 pt-2 mx-auto row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__.Fade, {
            direction: "up",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {
              color: "warning",
              onClick: () => {
                router.push({
                  pathname: "/offer",
                  query: {
                    selectedbus: thisbus.fields.bus.replaceAll(/\s/g, "-")
                  }
                });
              },
              className: "my-1 black-text roundedbtn font-weight-bold",
              children: router.locale === "en" ? "Get an offer" : "Ajánlatot kérek"
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Fslightboxes, {
        name: thisbus.fields.bus,
        data: thisbus.fields.pictures,
        imgtoggler: lightbox,
        setimgtoggler: setlightbox
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      className: "flex-center text-center my-5",
      children: "A keresett aut\xF3busz nem tal\xE1lhat\xF3!"
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (OneBusBody);

/***/ })

};
;