exports.id = 641;
exports.ids = [641];
exports.modules = {

/***/ 5641:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ GlobalComponents_Footer; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "mdbreact"
var external_mdbreact_ = __webpack_require__(2436);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./lib/redux/reducers.js
var reducers = __webpack_require__(3147);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "@material-ui/icons/ArrowLeft"
var ArrowLeft_ = __webpack_require__(7325);
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(9831);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/GlobalComponents/Lostitems.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const initialState = {
  name: "",
  date: "",
  bus: "",
  desc: "",
  phone: "",
  email: "",
  comment: "",
  newsletterlost: false,
  file: null,
  loading: false
};

const Lostitems = ({
  elveszett,
  setelveszett
}) => {
  const {
    locale
  } = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: state,
    1: setstate
  } = (0,external_react_.useState)(initialState);
  const {
    0: accept,
    1: setaccept
  } = (0,external_react_.useState)(false);
  const {
    0: accepterror,
    1: setaccepterror
  } = (0,external_react_.useState)(false);

  const handlesubmit = e => {
    e.preventDefault();

    if (!accept) {
      dispatch((0,reducers/* setsnackbar */.NV)({
        snackbar: {
          open: true,
          type: "error",
          hu: "El kell fogadnia az adatvédelmi szerződést!",
          en: "You need to accept the privacy policy!"
        }
      }));
      setaccepterror(true);
      return;
    }

    setstate(_objectSpread(_objectSpread({}, state), {}, {
      loading: true
    }));
    external_axios_default()({
      method: "POST",
      url: "/api/lostitems",
      data: state
    }).then(response => {
      setstate(initialState);
      setelveszett(!elveszett);
      external_react_ga_default().pageview(window.location.pathname);
      window.scrollTo(0, 0);

      if (response.status == 200) {
        dispatch((0,reducers/* setsnackbar */.NV)({
          snackbar: {
            open: true,
            type: "success",
            hu: "Sikeresen elküldve! Munkatársunk hamarosan felveszi Önnel a kapcsolatot.",
            en: "Successfully sent! We will contact you shortly."
          }
        }));
      } else {
        dispatch((0,reducers/* setsnackbar */.NV)({
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

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_mdbreact_.MDBModal, {
      cascading: true,
      className: "rounded",
      fade: true,
      modalStyle: "warning",
      isOpen: elveszett,
      toggle: () => {
        setelveszett(!elveszett);
        external_react_ga_default().pageview(window.location.pathname);
      },
      size: "lg",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBModalHeader, {
        className: "rounded",
        titleClass: "heading lead font-weight-bolder",
        toggle: () => {
          setelveszett(!elveszett);
          external_react_ga_default().pageview(window.location.pathname);
        },
        children: locale === "en" ? "Lost items" : "Elvesztett tárgyak"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBModalBody, {
        className: "p-0",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_mdbreact_.MDBCard, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBCardHeader, {
            className: "text-small text-muted text-center",
            children: locale === "en" ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: ["Our office is not responsible for items forgotten on the bus.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "However, we assure you that we will do our best to ensure that the item will be returned to you.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "You can pick up the found items at our office at a pre-arranged time.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "These objects are stored for 3 months."]
            }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: ["Az aut\xF3buszon felejtett t\xE1rgyak\xE9rt irod\xE1nk felel\u0151ss\xE9get nem v\xE1llal.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Biztos\xEDtjuk arr\xF3l azonban, hogy mindent megtesz\xFCnk annak \xE9rdek\xE9ben, hogy ha az aut\xF3buszon felejtette akkor visszaker\xFCl \xD6nh\xF6z.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "A megtal\xE1lt t\xE1rgyakat irod\xE1nkban el\u0151re egyeztetett id\u0151pontban veheti \xE1t.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "A megtal\xE1lt t\xE1rgyakat 3 h\xF3napig \u0151rizz\xFCk."]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBCardBody, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              onSubmit: handlesubmit,
              className: "mx-2",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "form-row my-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBInput, {
                    label: locale === "en" ? "Name *" : "Utas neve *",
                    icon: "user",
                    name: "name",
                    value: state.name,
                    onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                      name: e.target.value
                    })),
                    required: true
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBInput, {
                    label: locale === "en" ? "Date of travel *" : "Utazás dátuma *",
                    icon: "calendar-week",
                    name: "date",
                    value: state.date,
                    onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                      date: e.target.value
                    })),
                    required: true
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row my-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBInput, {
                    label: locale === "en" ? "Which bus did you travel on? *" : "Melyik autóbusszal utazott? *",
                    value: state.bus,
                    name: "bus",
                    onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                      bus: e.target.value
                    })),
                    icon: "bus",
                    required: true
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row my-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBInput, {
                    label: locale === "en" ? "Description of the lost item *" : "Az elveszett tárgy leírása *",
                    value: state.desc,
                    name: "desc",
                    onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                      desc: e.target.value
                    })),
                    icon: "briefcase",
                    required: true
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "form-row my-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBInput, {
                    label: locale === "en" ? "Phone number" : "Telefonszám",
                    type: "tel",
                    name: "phone",
                    value: state.phone,
                    onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                      phone: e.target.value
                    })),
                    icon: "phone-alt"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBInput, {
                    label: locale === "en" ? "Email address *" : "Email cím *",
                    type: "email",
                    name: "email",
                    value: state.email,
                    onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                      email: e.target.value
                    })),
                    icon: "envelope",
                    required: true
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row my-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBInput, {
                    label: locale === "en" ? "Comment" : "Egyéb közlendő",
                    type: "textarea",
                    name: "comment",
                    value: state.comment,
                    onChange: e => setstate(_objectSpread(_objectSpread({}, state), {}, {
                      comment: e.target.value
                    })),
                    rows: "4",
                    icon: "comment"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row my-2",
                children: /*#__PURE__*/jsx_runtime_.jsx(core_.FormGroup, {
                  className: "px-md-3 px-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx(core_.FormControlLabel, {
                    control: /*#__PURE__*/jsx_runtime_.jsx(core_.Checkbox, {
                      color: "primary",
                      style: {
                        color: "black"
                      },
                      checked: state.newsletterlost,
                      onChange: () => setstate(_objectSpread(_objectSpread({}, state), {}, {
                        newsletterlost: !state.newsletterlost
                      }))
                    }),
                    label: locale === "en" ? "Subscribe to newsletter" : "Feliratkozás a hírlevélre"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-row my-2",
                children: /*#__PURE__*/jsx_runtime_.jsx(core_.FormGroup, {
                  className: "px-md-3 px-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx(core_.FormControlLabel, {
                    control: /*#__PURE__*/jsx_runtime_.jsx(core_.Checkbox, {
                      color: "primary",
                      style: {
                        color: "black"
                      },
                      checked: accept,
                      onChange: () => setaccept(!accept)
                    }),
                    label: locale === "en" ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                      children: ["I accept the", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                        target: "_blank",
                        href: "/files/adatvedelmi_nyilatkozat.pdf",
                        className: "privacytext font-weight-bolder",
                        children: "privacy policy"
                      }), "!", /*#__PURE__*/jsx_runtime_.jsx((ArrowLeft_default()), {
                        className: accepterror ? "visible" : "invisible",
                        style: {
                          color: "red"
                        }
                      })]
                    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                      children: ["Elfogadom az", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                        target: "_blank",
                        href: "/files/adatvedelmi_nyilatkozat.pdf",
                        className: "privacytext font-weight-bolder",
                        children: "adatv\xE9delmi t\xE1j\xE9koztat\xF3t"
                      }), "!", /*#__PURE__*/jsx_runtime_.jsx((ArrowLeft_default()), {
                        className: accepterror ? "visible" : "invisible",
                        style: {
                          color: "red"
                        }
                      })]
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBBtn, {
                color: "warning",
                type: "submit",
                disabled: state.loading,
                className: "float-center black-text roundedbtn mx-auto d-block mt-3 mb-3 font-weight-bolder",
                children: state.loading ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "d-flex p-0 m-0 justify-content-center animated zoomIn",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "spinner-border p-0 m-0",
                    role: "status",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "sr-only",
                      children: "Loading..."
                    })
                  })
                }) : locale === "en" ? "Send" : "Küldés"
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBCard, {
        className: "rounded",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBCardFooter, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBBtn, {
            color: "warning",
            outline: true,
            className: "float-right roundedbtn closetext",
            onClick: () => {
              setelveszett(!elveszett);
              external_react_ga_default().pageview(window.location.pathname);
            },
            children: locale === "en" ? "Close" : "Bezárás"
          })
        })
      })]
    })
  });
};

/* harmony default export */ var GlobalComponents_Lostitems = (Lostitems);
// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__(104);
;// CONCATENATED MODULE: ./components/GlobalComponents/Footer.js










const Footer = () => {
  const {
    0: elveszett,
    1: setelveszett
  } = (0,external_react_.useState)(false);
  const {
    locale
  } = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_mdbreact_.MDBFooter, {
      color: "elegant-color-dark",
      className: "font-small z-depth-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
        triggerOnce: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "text-center container text-md-left pt-4",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "pt-4 row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "mx-auto col-md-5 col-lg-6 col-xl-5 mb-1",
              id: "map-div",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "p-0 map-container",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "map",
                  children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
                    title: "Google Maps Iframe",
                    src: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcZcmwULcQUcRbO4wF14ieDg&key=" + "AIzaSyAxz-bKPvunFWDKyfhGGOB0qZNjtHm4exA",
                    frameBorder: "0"
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-md-3 col-lg-2 col-xl-2 mx-auto mb-1",
              id: "footer-links",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                className: "text-uppercase font-weight-bold",
                children: locale === "en" ? "Others" : "Egyéb"
              }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
                className: "warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto",
                style: {
                  width: "60px"
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  onClick: () => {
                    setelveszett(!elveszett);
                    external_react_ga_default().modalview("/lostitems");
                  },
                  children: locale === "en" ? "Lost items" : "Elvesztett tárgyak"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/files/utazasi-szerzodes-2020.pdf",
                  target: "_blank",
                  children: locale === "en" ? "Terms and Conditions" : "Szerződési feltételek"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/files/megrendelolap.docx",
                  children: locale === "en" ? "Order form" : "Megrendelőlap"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: locale === "en" ? "Baggage regulations" : "Poggyász szabályzat"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mx-auto col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-xl-1",
              id: "footer-contact",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                className: "text-uppercase font-weight-bold",
                children: locale === "en" ? "Contact" : "Kapcsolat"
              }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
                className: "warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto",
                style: {
                  width: "60px"
                }
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBIcon, {
                  icon: "home",
                  className: "mr-3"
                }), "1088 Budapest, Szentkir\xE1lyi utca 5", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  style: {
                    opacity: "0.8"
                  },
                  className: "ml-lg-4",
                  children: locale === "en" ? " (HQ)" : " (székhely)"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBIcon, {
                  icon: "envelope",
                  className: "mr-3"
                }), "contibus@contibus.hu"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBIcon, {
                  icon: "phone",
                  className: "mr-3"
                }), "+36 30 934-9319"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBIcon, {
                  icon: "print",
                  className: "mr-3"
                }), "338-2422"]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mx-auto d-flex my-4 row",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mx-auto col text-center",
              id: "footer-opening",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                className: "text-uppercase font-weight-bold",
                children: locale === "en" ? "Our Office" : "Irodánk"
              }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
                className: "warning-color accent-2 mb-4 mt-0 d-inline-block mx-auto",
                style: {
                  width: "60px"
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "pb-2",
                children: "1075 Budapest, S\xEDp utca 4."
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [locale === "en" ? "From Monday to Friday" : "Hétfőtől Péntekig", ":", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "font-weight-bolder",
                  children: "9:00 - 17:00"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [locale === "en" ? "Saturday, Sunday: " : "Szombat, vasárnap: ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "font-weight-bolder",
                  children: [locale === "en" ? "Closed" : "Zárva", " "]
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer-copyright text-center py-3",
        children: ["\xA9 ", new Date().getFullYear(), " Copyright:", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-light",
            children: "Contibus "
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "white-text",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fas fa-times"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            style: {
              opacity: "0.75"
            },
            href: "https://www.instagram.com/kovalikadam/",
            rel: "noopener noreferrer",
            target: "_blank",
            children: [" ", "tojglee"]
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_Lostitems, {
      elveszett: elveszett,
      setelveszett: setelveszett
    })]
  });
};

/* harmony default export */ var GlobalComponents_Footer = (Footer);

/***/ })

};
;