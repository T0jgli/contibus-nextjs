(function() {
var exports = {};
exports.id = 507;
exports.ids = [507];
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

/***/ 6876:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8966);
/* harmony import */ var _components_GlobalComponents_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5616);
/* harmony import */ var _components_GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(555);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_redux_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3147);
/* harmony import */ var _lib_SetContentFulData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3899);





const Busesbody = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 734).then(__webpack_require__.bind(__webpack_require__, 7734)), {
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7734)],
    modules: ["buses.js -> " + "../components/BusesComponents/Busesbody"]
  }
});









const Buses = ({
  busesData,
  muzeumData
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_10__/* .setbusesData */ .mN)(busesData));
    dispatch((0,_lib_redux_reducers__WEBPACK_IMPORTED_MODULE_10__/* .setmuzeumData */ .tS)(muzeumData));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.section, {
    initial: "initial",
    animate: "animate",
    variants: _components_GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_5__/* .pageVariants */ .wz,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GlobalComponents_Carousel__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Busesbody, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: router.locale === "en" ? "Our Buses - ContiBus - Specialist Coach Travel" : "Autóbuszaink - ContiBus - Az utazás szakértői"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:image",
        content: "https://contibus.hu/img/3.jpg"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:image",
        content: "https://contibus.hu/img/3.jpg"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:url",
        content: "https://contibus.hu/buses"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "alternate",
        hrefLang: "en",
        href: "https://contibus.hu/en/buses"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "alternate",
        hrefLang: "hu",
        href: "https://contibus.hu/buses"
      })]
    })]
  });
};

async function getServerSideProps() {
  const busesData = await (0,_lib_SetContentFulData__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)("busesData", "-fields.oradij");
  const muzeumData = await (0,_lib_SetContentFulData__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)("muzeumdata", "sys.createdAt");
  return {
    props: {
      busesData: busesData || null,
      muzeumData: muzeumData || null
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Buses);

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 6285:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ControlPoint");;

/***/ }),

/***/ 8348:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/TableChart");;

/***/ }),

/***/ 7620:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ViewAgenda");;

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

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ 6302:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [477,555,616,147,899], function() { return __webpack_exec__(6876); });
module.exports = __webpack_exports__;

})();