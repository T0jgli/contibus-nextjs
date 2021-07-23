exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 3546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vezetesiidocontent": function() { return /* binding */ Vezetesiidocontent; },
/* harmony export */   "Allasajanlatcontent": function() { return /* binding */ Allasajanlatcontent; },
/* harmony export */   "Csomagmegorzescontent": function() { return /* binding */ Csomagmegorzescontent; },
/* harmony export */   "Glscontent": function() { return /* binding */ Glscontent; },
/* harmony export */   "Dpdcontent": function() { return /* binding */ Dpdcontent; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




const Vezetesiidocontent = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "p-3 row",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "./img/vezetesiido.jpg",
        rel: "noopener noreferrer",
        target: "_blank",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: "./img/vezetesiido.jpg",
          alt: "Vezet\xE9siid\u0151 r\xE9szletek",
          className: "p-1 img-fluid float-center mx-auto d-block"
        })
      })
    })
  });
};
const Allasajanlatcontent = () => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCard, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCardBody, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: locale === "en" ? "/img/allas_eng.jpg" : "/img/allas_k.png",
        alt: "\xC1ll\xE1saj\xE1nlat logo",
        className: "p-3 img-fluid float-center mx-auto d-block w-50"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-center font-weight-bolder",
        children: locale === "en" ? "Position to be filled:" : "Betöltendő pozíció:"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mb-0 pb-0",
        children: locale === "en" ? "Driver" : "Gépkocsivezető"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mb-0 pb-0 mt-1 pt-1",
        children: locale === "en" ? "Requirements:" : "Feltételek:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "Category D, Category E license" : "D kategóriás, E kategóriás jogosítvány"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "PÁV II aptitude exam" : "PÁV II alkalmassági vizsga"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "Digital card" : "Digitális kártya"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "pb-0 mb-0",
        children: locale === "en" ? "Our expectations" : "Elvárásaink:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "politeness" : "udvariasság"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "cultured look" : "ápolt, kulturált megjelenés"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "pb-0 mb-0",
        children: locale === "en" ? "Advantage but not condition:" : "Előny, de nem feltétel:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "experience" : "tapasztalat"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "knowledge of a foreign locale" : "idegen nyelv ismerete"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "car mechanic ability" : "autószerelői képesség"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "pb-0 mb-0",
        children: locale === "en" ? "What we offer:" : "Amit kínálunk:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "secure workplace" : "biztos munkahely"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "basic salary + daily allowance + cafeteria" : "alapbér + napidíj + cafeteria"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "teamwork" : "csapatmunka"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: locale === "en" ? "discounted travel options" : "kedvezményes utazási lehetőségek"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "pt-4",
        children: locale === "en" ? "We are also waiting for applications from entrants or with reduced working capacity!" : "Pályakezdők és csökkent munkaképességűek jelentkezését is várjuk!"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: locale === "en" ? "We can also offer part time job. Retirees are also welcome to apply." : "Részmunkaidőben is tudunk foglalkoztatni. Nyugdíjasok jelentkezését is várjuk!"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: locale === "en" ? "Seasonal work is also possible during special tourist periods (mostly weekends)." : "Kiemelt idegenforgalmi időszakokban szezonális munkára is van lehetőség (elsősorban hétvégék)."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "font-weight-bold",
        children: [locale === "en" ? "We are waiting for your CVs: " : "Várjuk az önéletrajzokat: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: "mailto:#",
          children: "contibus@contibus.hu"
        })]
      })]
    })
  });
};
const Csomagmegorzescontent = () => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "d-block row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-center font-weight-bold mt-3",
        children: locale === "en" ? "Monday to Friday" : "Hétfőtől - Péntekig"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "d-block text-center",
        children: locale === "en" ? "8:30 AM - 5:00 PM" : "8:30 - 17:00"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: "flex-center",
        style: {
          width: "30%"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBTable, {
        hover: true,
        className: "text-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBTableHead, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
              className: "w-50",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: "font-weight-bolder m-0 p-0",
                children: locale === "en" ? "Price" : "Ár"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
              className: "w-50",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: "m-0 p-0 font-weight-bolder",
                children: locale === "en" ? "Time of the day" : "Napszak"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBTableBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: "m-0 p-0",
                children: "1 Euro"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              className: "",
              children: "/"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              children: locale === "en" ? "Hour" : "Óra"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: "m-0 p-0",
                children: "5 Euro"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              className: "",
              children: "/"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              children: locale === "en" ? "Full day" : "Teljes nap"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: "m-0 p-0",
                children: "5 Euro"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              className: "",
              children: "/"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              children: locale === "en" ? "Night" : "Éjszaka"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: "m-0 p-0",
                children: "10 Euro"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              className: "",
              children: "/"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
              children: locale === "en" ? "Weekend" : "Hétvége"
            })]
          })]
        })]
      })]
    })
  });
};
const Glscontent = () => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCard, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCardHeader, {
          className: "text-center text-small text-muted",
          children: [locale === "en" ? "Our office, located in the city center, is also operating as a GLS parcel point since 2018, where we can receive and send parcels." : "Belvárosi központban elhelyezkedő irodánk 2020-tól GLS csomagpontként is működik ahol csomagokat tudunk átvenni illetve kiadni.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "mb-0 mt-1",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://www.google.com/maps/place/Budapest,+S%C3%ADp+u.+4,+1075+Magyarorsz%C3%A1g/@47.495689,19.062411,15z/data=!4m5!3m4!1s0x4741dc42c1269771:0x3878225e1730ee6c!8m2!3d47.4956894!4d19.0624112?hl=hu-HU",
              id: "",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                  color: "rgba(0, 0, 0, 0.85)"
                },
                children: "1075 Budapest, S\xEDp utca 4."
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCardBody, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "flex-center col",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "https://gls-group.eu/HU/hu/home",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "float-center mx-auto d-block mb-3",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: "",
                  src: locale === "en" ? "/img/gls_eng.jpg" : "/img/glscsomagpont.png",
                  alt: "GLS logo"
                })
              })
            })
          })
        })]
      })
    })
  });
};
const Dpdcontent = () => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCard, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCardHeader, {
          className: "text-center text-small text-muted",
          children: [locale === "en" ? "Our office, located in the city center, is also operating as a DPD parcel point since 2020, where we can receive and send parcels." : "Belvárosi központban elhelyezkedő irodánk 2020-tól DPD csomagpontként is működik ahol csomagokat tudunk átvenni illetve kiadni.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "mb-0 mt-1",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://www.google.com/maps/place/Budapest,+S%C3%ADp+u.+4,+1075+Magyarorsz%C3%A1g/@47.495689,19.062411,15z/data=!4m5!3m4!1s0x4741dc42c1269771:0x3878225e1730ee6c!8m2!3d47.4956894!4d19.0624112?hl=hu-HU",
              id: "",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                  color: "rgba(0, 0, 0, 0.85)"
                },
                children: "1075 Budapest, S\xEDp utca 4."
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBCardBody, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "flex-center col",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "https://www.dpd.com/hu/hu/pickup-csomagpont/csomagpont-kereso/",
                rel: "noopener noreferrer",
                target: "_blank",
                className: "float-center mx-auto d-block mb-3",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  className: "",
                  src: locale === "en" ? "/img/dpd_eng.png" : "/img/dpd-csomagpont.png",
                  alt: "DPD logo"
                })
              })
            })
          })
        })]
      })
    })
  });
};

/***/ })

};
;