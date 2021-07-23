exports.id = 919;
exports.ids = [919];
exports.modules = {

/***/ 7919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8777);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_redux_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3147);
/* harmony import */ var _material_ui_icons_LineWeight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9142);
/* harmony import */ var _material_ui_icons_LineWeight__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LineWeight__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1084);
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_13__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Fslightboxes = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(() => __webpack_require__.e(/* import() */ 590).then(__webpack_require__.bind(__webpack_require__, 8590)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8590)],
    modules: ["..\\components\\TrucksComponents\\OneTruckBody.js -> " + "../GlobalComponents/Fslightboxes"]
  }
});





const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  loading: false
};

const OneTruckBody = ({
  thistruck
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    0: state,
    1: setstate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
  const {
    0: order,
    1: setorder
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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

  const handlesubmit = e => {
    e.preventDefault();
    setstate(_objectSpread(_objectSpread({}, state), {}, {
      loading: true
    }));
    axios__WEBPACK_IMPORTED_MODULE_10___default()({
      method: "POST",
      url: "/api/truckoffer",
      data: _objectSpread(_objectSpread({}, state), {}, {
        truck: _objectSpread({}, thistruck.fields)
      })
    }).then(response => {
      setstate(initialState);
      setorder(false);

      if (response.status == 200) {
        dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_11__/* .setsnackbar */ .NV)({
          snackbar: {
            open: true,
            type: "success",
            hu: "Sikeresen elküldve! Munkatársunk hamarosan felveszi Önnel a kapcsolatot.",
            en: "Successfully sent! We will contact you shortly."
          }
        }));
      } else {
        dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_11__/* .setsnackbar */ .NV)({
          snackbar: {
            open: true,
            type: "success",
            hu: response.data.error,
            en: response.data.error
          }
        }));
      }
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: thistruck ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
          children: [thistruck.fields.truck, " - ContiBus"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          property: "og:image",
          content: `https://${thistruck.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          name: "twitter:image",
          content: `https://${thistruck.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          property: "og:url",
          content: `https://contibus.hu/truck/${thistruck.fields.id}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "alternate",
          hrefLang: "en",
          href: `https://contibus.hu/en/truck/${thistruck.fields.id}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "alternate",
          hrefLang: "hu",
          href: `https://contibus.hu/truck/${thistruck.fields.id}`
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "onebus__container w-75 mx-auto my-5 pt-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-sm-right col text-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
              triggerOnce: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: `${thistruck.fields.truck} kép`,
                src: `https://${thistruck.fields.pictures[thispicture].fields.file.url}?&fm=webp&q=80`,
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
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
              triggerOnce: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-2 otherpictures mb-5 mb-md-0",
                children: thistruck.fields.pictures.map((pict, i) => {
                  if (i !== thispicture) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    alt: `${thistruck.fields.truck} kép (${i + 1})`,
                    style: {
                      borderRadius: "1rem"
                    },
                    src: `https://${pict.fields.file.url}?&fm=webp&q=80`,
                    onClick: () => setthispicture(i),
                    className: "p-2",
                    width: "100"
                  }, `${thistruck.fields.truck} (${i + 1})`);else return null;
                })
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
              triggerOnce: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "onebus__detailscontainer",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                  className: "text-center text-lg-left",
                  children: thistruck.fields.truck
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "onebus__kmdijcontainer d-flex align-items-center pt-2 mt-4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_LineWeight__WEBPACK_IMPORTED_MODULE_12___default()), {
                    fontSize: "large"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "grey-text m-0 pl-4",
                      children: router.locale === "en" ? "WEIGHT" : "ÖSSZSÚLY"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                      className: "grey-text h4 font-weight-bold pt-2 m-0 pl-4",
                      children: [thistruck.fields.weight.toLocaleString(), " tonna"]
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                  className: "my-4"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "onebus__kmdijcontainer d-flex align-items-center pt-2 mt-4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_13___default()), {
                    fontSize: "large"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "grey-text m-0 pl-4",
                      children: router.locale === "en" ? "ENVIRONMENTAL CLASSIFICATION" : "KÖRNYEZETVÉDELMI BESOROLÁS"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                      className: "grey-text h4 font-weight-bold pt-2 m-0 pl-4",
                      children: thistruck.fields.eurotype
                    })]
                  })]
                })]
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
          triggerOnce: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-5 pt-4 mx-auto row flex-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "text-center col-lg-8",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "grey-text",
                children: thistruck.fields.desc
              })
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "flex-center row mt-5 pt-2 mx-auto",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
            direction: "up",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
              color: "warning",
              onClick: () => setorder(true),
              className: "my-1 black-text roundedbtn font-weight-bold",
              children: router.locale === "en" ? "Get an offer" : "Ajánlatot kérek"
            })
          })
        }), order && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "flex-center mt-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
            title: router.locale === "en" ? "Close" : "Bezárás",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
              onClick: () => setorder(false),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default()), {})
            })
          })
        }), order && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Fade, {
          in: order,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handlesubmit,
            style: {
              margin: "auto",
              maxWidth: "700px",
              boxShadow: "0 1px 3px rgb(0 0 0 / 20%)"
            },
            className: "rounded p-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "row",
              style: {
                marginTop: "12px"
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBInput, {
                  required: true,
                  value: state.name,
                  onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                    name: e.target.value
                  })),
                  label: router.locale === "en" ? "Name *" : "Név *",
                  name: "Name",
                  type: "text"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                md: "6",
                className: "col-md-6",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBInput, {
                  required: true,
                  value: state.email,
                  onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                    email: e.target.value
                  })),
                  label: router.locale === "en" ? "Email address *" : "Email cím *",
                  name: "Email",
                  type: "email"
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBInput, {
                  rows: "7",
                  required: true,
                  value: state.message,
                  onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                    message: e.target.value
                  })),
                  label: router.locale === "en" ? "Message *" : "Üzenet *",
                  name: "Message",
                  type: "textarea"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "text-center",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                    enterDelay: 500,
                    title: router.locale === "en" ? "Send" : "Küldés",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                      type: "submit",
                      style: {
                        border: "none"
                      },
                      className: "btn-lg warning-color roundedbtn truckofferbtn white-text mr-0 text-center",
                      children: state.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex p-0 m-0 justify-content-center animated zoomIn",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                          className: "spinner-border p-0 m-0",
                          role: "status",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Loading..."
                          })
                        })
                      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                        far: true,
                        icon: "paper-plane"
                      })
                    })
                  })
                })]
              })
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Fslightboxes, {
        name: thistruck.fields.truck,
        data: thistruck.fields.pictures,
        imgtoggler: lightbox,
        setimgtoggler: setlightbox
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      className: "flex-center text-center my-5",
      children: "A keresett teheraut\xF3 nem tal\xE1lhat\xF3!"
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (OneTruckBody);

/***/ })

};
;