exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 7734:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8966);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







const Muzeum = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/* import() */ 602).then(__webpack_require__.bind(__webpack_require__, 8602)), {
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8602)],
    modules: ["..\\components\\BusesComponents\\Busesbody.js -> " + "./Muzeum"]
  }
});
const Table = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/* import() */ 903).then(__webpack_require__.bind(__webpack_require__, 2903)), {
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2903)],
    modules: ["..\\components\\BusesComponents\\Busesbody.js -> " + "./Table"]
  }
});



const Busesbody = () => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const {
    0: showMuzeum,
    1: setshowMuzeum
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: tablazat,
    1: settablazat
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( false ? 0 : false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: "/img/3.jpg",
      className: "img-fluid mx-auto d-none logo",
      width: "220px",
      id: "contibus-logo",
      alt: "logo"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "text-center py-4 main mb-5 busesothers",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
          triggerOnce: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
              className: "py-3",
              children: locale === "en" ? "Other informations:" : "Egyéb tudnivalók:"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "font-weight-bolder",
              children: locale === "en" ? "Domestic passenger transport is subject to 27% VAT, international passenger transport is subject to 0% VAT. A minimum of 250 km per day, a minimum of 4 hours must be paid for hourly billing." : "Belföldi személyszállítást 27% ÁFA terheli, nemzetközi személyszállítást 0%-os. Napi minimum 250 km, óradíjas elszámolásnál minimum 4 óra fizetendő."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
              children: [locale === "en" ? "In addition to the indicated kilometer or hourly rate, VAT, tolls, crossing fees, city tickets, parking and a daily fee for drivers must be paid." : "A feltüntetett kilóméterdíjon, vagy óradíjon felül áfát, autópályadíjakat, átkelő díjakat, városbelépőket, parkolásokat, és a gépkocsivezetők részére napidíjat kell fizetni.", locale === "en" ? " The accommodation of the driver(s) is provided by the customer, the amount of the daily fee varies by road types." : " Gépkocsivezető(-k) szállásáról a megrendelő gondoskodik, a napidíj összege úttípusonként változik.", locale === "en" ? " The drivers should rest 9 hours or more." : " A gépkocsivezetők napi pihenőideje semmilyen körülmények között sem lehet kevesebb kilenc egymást követő óránál.", locale === "en" ? " We provide preliminary information on tolls, ferry costs and parking." : " Autópályadíjakról, kompköltségekről, parkolásról előzetes tájékoztatást adunk."]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "font-weight-bolder m-0 p-0",
              children: locale === "en" ? "In case of regular order we provide a discount!" : "Rendszeres megrendelés esetén kedvezményt biztosítunk!"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              children: locale === "en" ? "Orders can be placed in person at our office, by letter, fax, e-mail or phone." : "Megrendeléseket személyesen irodánkban, levélben, faxon, e-mailben fogadunk vagy ügyeleti telefonszámunkon várjuk hívását."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              children: locale === "en" ? "For objects and values forgotten on the bus during the trips we do not take responsibility. We keep the found stuffs for 1 month." : "Az utazások alatt az autóbuszon felejtett tárgyakért, értékekért felelősséget nem tudunk vállalni. A talált tárgyakat irodánk 1 hónapig őrzi."
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "text-center my-5 mx-auto px-lg-0 ",
      id: "buses-container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: "w-25 mt-5"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
        triggerOnce: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {
          color: "dark",
          outline: true,
          onClick: () => setshowMuzeum(!showMuzeum),
          className: "my-1 roundedbtn muzeumbtn",
          children: showMuzeum ? locale === "en" ? "« Current buses" : "« Jelenlegi autóbuszaink" : locale === "en" ? "Autobus museum »" : "Autóbusz múzeumunk »"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: "w-25 mb-3"
      }), showMuzeum ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Muzeum, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Table, {
        tablazat: tablazat,
        settablazat: settablazat
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Busesbody);

/***/ })

};
;