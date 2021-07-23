exports.id = 831;
exports.ids = [831];
exports.modules = {

/***/ 6831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6511);
/* harmony import */ var _material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_redux_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3147);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8904);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const initialstate = {
  name: "",
  phone: "",
  email: "",
  uticel: "",
  koltseg: "",
  indulas: "",
  erkezes: "",
  seat: "def",
  selectedbus: null,
  newsletter: false,
  comment: "",
  file: null,
  accept: false,
  loading: false
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
  });
}

const Formoffer = () => {
  var _router$query;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
  const {
    0: state,
    1: setstate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_objectSpread(_objectSpread({}, initialstate), {}, {
    selectedbus: ((_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.selectedbus) || null
  }));
  const {
    0: accepterror,
    1: setaccepterror
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handlesubmit = async e => {
    e.preventDefault();

    if (!state.accept) {
      dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_7__/* .setsnackbar */ .NV)({
        snackbar: {
          open: true,
          type: "error",
          hu: "Kérjük, előbb fogadja el az adatvédelmi szerződést!",
          en: "Please accept the privacy policy first!"
        }
      }));
      setaccepterror(true);
      return;
    }

    if (state.seat === "def") {
      dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_7__/* .setsnackbar */ .NV)({
        snackbar: {
          open: true,
          type: "error",
          hu: "Kérjük válasszon férőhelyet!",
          en: "Please select suitable seats!"
        }
      }));
      return;
    }

    if (new Date(state.indulas).toLocaleDateString() > new Date(state.erkezes).toLocaleDateString()) {
      dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_7__/* .setsnackbar */ .NV)({
        snackbar: {
          open: true,
          type: "error",
          hu: "Tényleg hamarabb akar visszaérkezni, mint elindulni?",
          en: "Do you really want to get back sooner than you leave?"
        }
      }));
      setstate(_objectSpread(_objectSpread({}, state), {}, {
        indulas: "",
        erkezes: ""
      }));
      return;
    }

    setstate(_objectSpread(_objectSpread({}, state), {}, {
      loading: true
    }));
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "POST",
      url: "/api/offer",
      data: state
    }).then(response => {
      if (response.status == 200) {
        setstate(initialstate);
        window.scrollTo(0, 0);
        dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_7__/* .setsnackbar */ .NV)({
          snackbar: {
            open: true,
            type: "success",
            hu: "Sikeresen elküldve! Munkatársunk hamarosan felveszi Önnel a kapcsolatot.",
            en: "Successfully sent! We will contact you shortly."
          }
        }));
      } else {
        window.scrollTo(0, 0);
        dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_7__/* .setsnackbar */ .NV)({
          snackbar: {
            open: true,
            type: "error",
            hu: response.data.error,
            en: response.data.error
          }
        }));
      }
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "/img/3.jpg",
        className: "img-fluid mx-auto d-none logo",
        width: "220px",
        id: "contibus-logo",
        alt: "logo"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "width-75 row mx-auto pt-5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "mb-4 col",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card rounded",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBCardHeader, {
              id: "offerheader",
              className: "elegant-color-dark rounded white-text text-center py-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                className: "mb-0",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                  icon: "caret-down",
                  className: "px-2"
                }), router.locale === "en" ? "BUS OFFER REQUEST" : "AUTÓBUSZ AJÁNLAT KÉRÉS", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
                  className: "px-2",
                  icon: "caret-down"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBCardBody, {
              className: "rounded",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handlesubmit,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                  triggerOnce: true,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-row my-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "form-group position-relative col-lg-6",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "name",
                        children: router.locale === "en" ? "Customer name *" : "Megrendelő neve *"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "name",
                        className: "form-control",
                        required: true,
                        value: state.name,
                        "aria-label": "N\xE9v",
                        onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                          name: e.target.value
                        }))
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "form-group position-relative col-lg-6",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "phone",
                        children: router.locale === "en" ? "Phone number *" : "Telefonszám *"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "num",
                        name: "phone",
                        "aria-label": "Telefon",
                        className: "form-control",
                        value: state.phone,
                        onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                          phone: e.target.value
                        })),
                        required: true
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                  triggerOnce: true,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-row my-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "form-group position-relative col",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "email",
                        children: router.locale === "en" ? "Email address *" : "Email cím *"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "email",
                        name: "email",
                        "aria-label": "Email",
                        className: "form-control",
                        value: state.email,
                        onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                          email: e.target.value
                        })),
                        required: true
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "my-5 elegant-color-dark",
                    style: {
                      opacity: "0.2"
                    }
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                  triggerOnce: true,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-row my-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      lg: "6",
                      className: "form-group position-relative col-lg-6",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "uticel",
                        children: router.locale === "en" ? "Destination *" : "Úticél *"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "uticel",
                        "aria-label": "\xDAtic\xE9l",
                        value: state.uticel,
                        onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                          uticel: e.target.value
                        })),
                        className: "form-control",
                        required: true
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      lg: "6",
                      className: "form-group position-relative col-lg-6",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "km",
                        children: router.locale === "en" ? "Planned budget *" : "Tervezett költségkeret *"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "koltseg",
                        "aria-label": "K\xF6lts\xE9gkeret",
                        value: state.koltseg,
                        onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                          koltseg: e.target.value
                        })),
                        className: "form-control",
                        required: true
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                  triggerOnce: true,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-row my-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "form-group position-relative col",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "indulasdate",
                        children: router.locale === "en" ? "Departure day *" : "Indulás napja *"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "date",
                        name: "indulasdate",
                        "aria-label": "Indul\xE1s napja",
                        min: new Date().toISOString().split("T")[0],
                        className: "form-control",
                        value: state.indulas,
                        onChange: e => {
                          setstate(_objectSpread(_objectSpread({}, state), {}, {
                            indulas: e.target.value
                          }));
                        },
                        required: true
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "form-group position-relative col",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "erkezesdate",
                        children: router.locale === "en" ? "Date of arrival *" : "Érkezés napja *"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "date",
                        name: "erkezesdate",
                        "aria-label": "\xC9rkez\xE9s napja",
                        min: new Date().toISOString().split("T")[0],
                        className: "form-control",
                        value: state.erkezes,
                        onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                          erkezes: e.target.value
                        })),
                        required: true
                      })]
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "my-5 elegant-color-dark",
                    style: {
                      opacity: "0.2"
                    }
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                  triggerOnce: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-row my-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "form-group position-relative col",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "seatsselect",
                        children: router.locale === "en" ? "Seats *" : "Férőhely *"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        className: "form-control",
                        name: "ferohely",
                        "aria-label": "F\xE9r\u0151hely",
                        required: true,
                        value: state.seat,
                        onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                          seat: e.target.value
                        })),
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                          value: "def",
                          children: router.locale === "en" ? "Please select..." : "Kérjük válasszon..."
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "1-8",
                          children: ["1-8 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "9-17",
                          children: ["9-17 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "18-21",
                          children: ["18-21 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "22-28",
                          children: ["22-28 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "29-34",
                          children: ["29-34 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "35-48",
                          children: ["35-48 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "49-51",
                          children: ["49-51 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "52-56",
                          children: ["52-56 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "57-59",
                          children: ["57-59 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "60-68",
                          children: ["60-68 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "69-70",
                          children: ["69-70 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "71-74",
                          children: ["71-74 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "75-78",
                          children: ["75-78 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "79-80",
                          children: ["79-80 ", router.locale === "en" ? "people" : "fő"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                          value: "81-83",
                          children: ["81-83 ", router.locale === "en" ? "people" : "fő"]
                        })]
                      })]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                  triggerOnce: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-row my-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "form-group position-relative col",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "comment",
                        children: router.locale === "en" ? "Short description *" : "Rövid leírás (hány nap, honnan/hova, utazás jellege) *"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        className: "form-control",
                        name: "desc",
                        "aria-label": "Le\xEDr\xE1s",
                        value: state.comment,
                        onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                          comment: e.target.value
                        })),
                        rows: "5",
                        required: true
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "form-text text-muted text-center",
                        children: router.locale === "en" ? "If you find our offer favorable, please order in email. Sending a request for a quote - and the response to it - is not considered an order!" : "Amennyiben ajánlatunkat kedvezőnek találja, írásban kérjük megrendelni. Az ajánlat kérés - és az arra kapott válasz - elküldése nem tekinthető megrendelésnek!"
                      })]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                  triggerOnce: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-row my-4",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.FormGroup, {
                      className: "px-md-3 px-2",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.FormControlLabel, {
                        control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                          color: "primary",
                          style: {
                            color: "black"
                          },
                          checked: state.newsletter,
                          onChange: () => setstate(_objectSpread(_objectSpread({}, state), {}, {
                            newsletter: !state.newsletter
                          }))
                        }),
                        label: router.locale === "en" ? "Subscribe to newsletter" : "Feliratkozás a hírlevélre"
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                  triggerOnce: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-row my-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.FormGroup, {
                      className: "px-md-3 px-2",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.FormControlLabel, {
                        control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                          color: "primary",
                          style: {
                            color: "black"
                          },
                          checked: state.accept,
                          onChange: () => {
                            setstate(_objectSpread(_objectSpread({}, state), {}, {
                              accept: !state.accept
                            }));
                            if (accepterror) setaccepterror(false);
                          }
                        }),
                        label: router.locale === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                          children: ["I accept the", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            href: "/files/adatvedelmi_nyilatkozat.pdf",
                            className: "privacytext font-weight-bolder",
                            children: "privacy policy"
                          }), "!"]
                        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                          children: ["Elfogadom az", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            href: "/files/adatvedelmi_nyilatkozat.pdf",
                            className: "privacytext font-weight-bolder",
                            children: "adatv\xE9delmi t\xE1j\xE9koztat\xF3t"
                          }), "!"]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropUp__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: accepterror ? "visible pr-1" : "invisible pr-1",
                        style: {
                          color: "red"
                        }
                      })]
                    })
                  })
                }), state.selectedbus && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                  triggerOnce: true,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    className: "grey-text flex-center flex-column flex-md-row text-center mb-5 mx-auto",
                    children: [router.locale === "en" ? "Selected bus: " : "Kiválasztott busz: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                      className: "font-weight-bolder pl-2 pt-2 pt-md-0",
                      children: state.selectedbus
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                      title: router.locale === "en" ? "Remove" : "Eltávolítás",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
                        className: "mt-md-0 mt-2",
                        onClick: () => {
                          setstate(_objectSpread(_objectSpread({}, state), {}, {
                            selectedbus: null
                          }));
                        },
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default()), {})
                      })
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
                  direction: "up",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__.MDBBtn, {
                    color: "dark",
                    outline: true,
                    disabled: state.loading,
                    style: {
                      minWidth: "200px"
                    },
                    id: "formsubmitbtn",
                    type: "submit",
                    className: "roundedbtn float-center mx-auto mt-3 mb-3 font-weight-bolder btn-block w-25",
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
                    }) : router.locale === "en" ? "Send »" : "Küldés »"
                  })
                })]
              })
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Formoffer);

/***/ })

};
;