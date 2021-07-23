(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8966:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5477);



const Spinner = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "m-5 pt-5",
    style: {
      display: "grid",
      placeItems: "center",
      height: "100%"
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      style: {
        color: "grey"
      },
      size: 60
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Spinner);

/***/ }),

/***/ 1418:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./lib/redux/reducers.js
var reducers = __webpack_require__(3147);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "mdbreact"
var external_mdbreact_ = __webpack_require__(2436);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(9831);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./lib/helpers/CookieHelper.js
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}
;// CONCATENATED MODULE: external "@material-ui/icons/Menu"
var Menu_namespaceObject = require("@material-ui/icons/Menu");;
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(8777);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowRight"
var ArrowRight_namespaceObject = require("@material-ui/icons/ArrowRight");;
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/ArrowDropDown"
var ArrowDropDown_namespaceObject = require("@material-ui/icons/ArrowDropDown");;
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown_namespaceObject);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/GlobalComponents/Navbar.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Calendar = dynamic_default()(() => __webpack_require__.e(/* import() */ 143).then(__webpack_require__.t.bind(__webpack_require__, 8143, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8143)],
    modules: ["..\\components\\GlobalComponents\\Navbar.js -> " + "./Calendar"]
  }
});
const menuitems = [{
  href: "/",
  title: {
    hu: "Kezdőlap",
    en: "Home"
  }
}, {
  href: "/offer",
  title: {
    hu: "Ajánlatkérés",
    en: "Offer request"
  }
}, {
  href: "/buses",
  title: {
    hu: "Autóbuszok",
    en: "Our Buses"
  }
}, {
  href: "/trucks",
  title: {
    hu: "Teherautók",
    en: "Our Trucks"
  }
}];

const Navbar = () => {
  const router = (0,router_.useRouter)();
  const {
    0: calendaropen,
    1: setcalendaropen
  } = (0,external_react_.useState)(false);
  const {
    0: langtoast,
    1: setlangtoast
  } = (0,external_react_.useState)(false);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: navbarbg,
    1: setnavbarbg
  } = (0,external_react_.useState)(false);
  const {
    0: menu,
    1: setmenu
  } = (0,external_react_.useState)({
    open: false,
    ref: null,
    placement: null
  });
  (0,external_react_.useEffect)(() => {
    if (true) {
      const navbarScroll = () => {
        if (window.scrollY >= 75) {
          setnavbarbg(true);
        } else {
          setnavbarbg(false);
        }
      };

      window.addEventListener("scroll", navbarScroll);
      return () => window.removeEventListener("scroll", navbarScroll);
    }
  }, []);
  (0,external_react_.useEffect)(() => {
    if (window.innerWidth < 992) {
      setIsOpen(false);
    }
  }, [router.pathname, router.locale]);

  const switchLanguage = lan => {
    if (router.pathname.includes("bus/")) {
      router.push({
        pathname: "/bus/[bus]",
        query: {
          bus: window.location.pathname.split("/").slice(-1)[0]
        }
      }, "/bus/[bus]", {
        locale: lan,
        scroll: false
      });
    } else if (router.pathname.includes("truck/")) {
      router.push({
        pathname: "/truck/[truck]",
        query: {
          truck: window.location.pathname.split("/").slice(-1)[0]
        }
      }, "/truck/[truck]", {
        locale: lan,
        scroll: false
      });
    } else {
      router.push(router.pathname, router.pathname, {
        locale: lan,
        scroll: false
      });
    }

    setCookie("NEXT_LOCALE", lan, 365);
    if (router.locale !== lan) setlangtoast(true);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: `${navbarbg ? "topnav" : ""} animated fadeInDown`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "navbar__container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "navbar__logo",
          onClick: () => window.location.reload(false),
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBIcon, {
            icon: "bus"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "ContiBUS"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `navbar__mobileicon`,
          onClick: () => {
            setIsOpen(true);
          },
          children: /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {
            className: `${isOpen ? "navbar__mobileicon__open" : ""}`,
            fontSize: "large"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "navbar__menu",
          children: [menuitems.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: `${navbarbg ? "topnav__li" : ""}`,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: item.href,
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `${item.title.en === "Home" ? router.pathname === "/" || "" ? "active" : "" : item.title.en === "Offer request" ? router.pathname === "/offer" ? "active" : "" : item.title.en === "Our Buses" ? router.pathname.includes("bus") ? "active" : "" : item.title.en === "Our Trucks" ? router.pathname.includes("truck") ? "active" : "" : ""} navbar__link`,
                children: router.locale === "en" ? item.title.en : item.title.hu
              })
            })
          }, item.href + "navbar")), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: `${navbarbg ? "topnav__li" : ""}`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              onClick: e => setmenu({
                ref: e.currentTarget,
                open: !menu.open,
                placement: "right-start"
              }),
              className: `${menu.open ? "menuopened" : ""} navbar__link`,
              children: [router.locale === "en" ? "Travels" : "Utazásaink", " ", /*#__PURE__*/jsx_runtime_.jsx((ArrowRight_default()), {})]
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "navbar__btn",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "http://kalandozastravel.hu/cgi-bin/view2021",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBIcon, {
              icon: "calendar-check",
              className: "pr-1"
            }), router.locale === "en" ? "Ticket Order" : "Jegyfoglalás"]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "navbar__language",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          width: "30px",
          src: "/img/svgs/hu.svg",
          className: router.locale === "hu" ? "flag activelanguage" : "flag notactivelang",
          id: "huicon",
          onClick: () => {
            switchLanguage("hu");
          },
          alt: "V\xE1lt\xE1s magyar nyelvre z\xE1szl\xF3"
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          width: "30px",
          src: "/img/svgs/uk.svg",
          className: router.locale === "en" ? "flag ml-2 activelanguage" : "flag ml-2 notactivelang",
          id: "engicon",
          onClick: () => {
            switchLanguage("en");
          },
          alt: "V\xE1lt\xE1s angol nyelvre z\xE1szl\xF3"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
      className: `${isOpen ? "open" : "closed"}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "sidebar__icon",
        children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
          fontSize: "large",
          onClick: () => {
            setIsOpen(!isOpen);
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          style: {
            listStyleType: "none",
            padding: "0",
            margin: "0"
          },
          children: [menuitems.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: item.href,
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `${item.title.en === "Home" ? router.pathname === "/" ? "active" : router.pathname === "" ? "active" : "" : item.title.en === "Offer request" ? router.pathname === "/offer" ? "active" : "" : item.title.en === "Our Buses" ? router.pathname.includes("bus") ? "active" : "" : item.title.en === "Our Trucks" ? router.pathname.includes("truck") ? "active" : "" : ""} sidebar__link`,
                children: router.locale === "en" ? item.title.en : item.title.hu
              })
            })
          }, item.href + "sidebar")), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "sidebar__link",
              className: `${menu.open ? "menuopened" : ""} sidebar__link`,
              onClick: e => setmenu({
                ref: e.currentTarget,
                open: !menu.open,
                placement: "bottom"
              }),
              children: [router.locale === "en" ? "Travels" : "Utazásaink", " ", /*#__PURE__*/jsx_runtime_.jsx((ArrowDropDown_default()), {})]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "sidebar__language",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            width: "30px",
            src: "/img/svgs/hu.svg",
            className: router.locale === "hu" ? "flag activelanguage" : "flag notactivelang",
            id: "huicon",
            onClick: () => {
              switchLanguage("hu");
            },
            alt: "V\xE1lt\xE1s magyar nyelvre z\xE1szl\xF3 (mobil n\xE9zet)"
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            width: "30px",
            src: "/img/svgs/uk.svg",
            className: router.locale === "en" ? "flag ml-2 activelanguage" : "flag ml-2 notactivelang",
            id: "engicon",
            onClick: () => {
              switchLanguage("en");
            },
            alt: "V\xE1lt\xE1s angol nyelvre z\xE1szl\xF3 (mobil n\xE9zet)"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "sidebar__btn",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "http://kalandozastravel.hu/cgi-bin/view2021",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBIcon, {
              icon: "calendar-check",
              className: "pr-1"
            }), router.locale === "en" ? "Ticket Order" : "Jegyfoglalás"]
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.Popper, {
      className: "mt-3",
      style: {
        zIndex: "1000"
      },
      open: menu.open,
      anchorEl: menu.ref,
      role: undefined,
      transition: true,
      placement: menu.placement,
      children: ({
        TransitionProps
      }) => /*#__PURE__*/jsx_runtime_.jsx(core_.Slide, _objectSpread(_objectSpread({
        timeout: 500
      }, TransitionProps), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Paper, {
          style: {
            borderRadius: "20px",
            backgroundColor: "#f5f5f5"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.ClickAwayListener, {
            onClickAway: () => setmenu(_objectSpread(_objectSpread({}, menu), {}, {
              open: false
            })),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.MenuList, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Divider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.MenuItem, {
                className: "font-weight-bolder",
                onClick: () => {
                  window.open("https://www.facebook.com/Neoline-Kalandoz%C3%A1s-Utaz%C3%A1si-Iroda-184037444980315/events", "_blank");
                },
                rel: "noopener noreferrer",
                children: [router.locale === "en" ? "Facebook events" : "Facebook események", " \xBB"]
              })]
            })
          })
        })
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.Snackbar, {
      autoHideDuration: 3000,
      open: langtoast,
      onClose: (event, reason) => {
        if (reason === "clickaway") {
          return;
        }

        setlangtoast(false);
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.SnackbarContent, {
        className: "rounded",
        message: router.locale === "en" ? "Language set" : "Nyelv sikeresen beállítva"
      })
    }), " "]
  });
};

/* harmony default export */ var GlobalComponents_Navbar = (Navbar);
// EXTERNAL MODULE: ./lib/SetContentFulData.js
var SetContentFulData = __webpack_require__(3899);
// EXTERNAL MODULE: ./components/GlobalComponents/Spinner.js
var Spinner = __webpack_require__(8966);
// EXTERNAL MODULE: ./components/GlobalComponents/Initaltransition.js
var Initaltransition = __webpack_require__(555);
;// CONCATENATED MODULE: ./components/DefaultLayout.js













const Footer = dynamic_default()(() => __webpack_require__.e(/* import() */ 641).then(__webpack_require__.bind(__webpack_require__, 5641)), {
  loading: () => /*#__PURE__*/jsx_runtime_.jsx(Spinner/* default */.Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5641)],
    modules: ["..\\components\\DefaultLayout.js -> " + "./GlobalComponents/Footer"]
  }
});
const Scrolltopbutton = dynamic_default()(() => __webpack_require__.e(/* import() */ 499).then(__webpack_require__.bind(__webpack_require__, 499)), {
  loading: () => /*#__PURE__*/jsx_runtime_.jsx(Spinner/* default */.Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(499)],
    modules: ["..\\components\\DefaultLayout.js -> " + "./GlobalComponents/Scrolltopbutton"]
  }
});
const Cookie = dynamic_default()(() => __webpack_require__.e(/* import() */ 587).then(__webpack_require__.bind(__webpack_require__, 1587)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1587)],
    modules: ["..\\components\\DefaultLayout.js -> " + "./GlobalComponents/Cookie"]
  }
});
const Snackbars = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(13), __webpack_require__.e(853), __webpack_require__.e(600)]).then(__webpack_require__.bind(__webpack_require__, 7600)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7600)],
    modules: ["..\\components\\DefaultLayout.js -> " + "./GlobalComponents/Snackbars"]
  }
});

const DefaultLayout = ({
  children
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    pathname
  } = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    external_react_ga_default().pageview(window.location.pathname);
  }, [pathname]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalComponents_Navbar, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Cookie, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "d-none d-md-block",
      children: /*#__PURE__*/jsx_runtime_.jsx(Scrolltopbutton, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Initaltransition/* default */.ZP, {}), /*#__PURE__*/jsx_runtime_.jsx(Snackbars, {})]
  });
};

/* harmony default export */ var components_DefaultLayout = (DefaultLayout);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(2744);
;// CONCATENATED MODULE: ./lib/redux/store.js



const reducer = (0,external_redux_namespaceObject.combineReducers)({
  app: reducers/* appReducer */.m5
});
const store = () => (0,external_redux_namespaceObject.createStore)(reducer);
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(store);
;// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









if (true) external_react_ga_default().initialize("UA-177271904-2");else {}

const _app = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(components_DefaultLayout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
  });
};

/* harmony default export */ var pages_app = (wrapper.withRedux(_app));

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 7325:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ArrowLeft");;

/***/ }),

/***/ 8777:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Close");;

/***/ }),

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 9137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 2958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 3536:
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ 4869:
/***/ (function(module) {

"use strict";
module.exports = require("contentful");;

/***/ }),

/***/ 762:
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ 2436:
/***/ (function(module) {

"use strict";
module.exports = require("mdbreact");;

/***/ }),

/***/ 2744:
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9639:
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 104:
/***/ (function(module) {

"use strict";
module.exports = require("react-awesome-reveal");;

/***/ }),

/***/ 2268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ 9831:
/***/ (function(module) {

"use strict";
module.exports = require("react-ga");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 7013:
/***/ (function(module) {

"use strict";
module.exports = require("react-scroll-up");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [477,664,555,147,899], function() { return __webpack_exec__(1418); });
module.exports = __webpack_exports__;

})();