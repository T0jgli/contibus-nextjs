(function() {
var exports = {};
exports.id = 500;
exports.ids = [500];
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

/***/ 4477:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(555);
/* harmony import */ var _components_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8966);
/* harmony import */ var _components_GlobalComponents_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5616);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(104);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_SetContentFulData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3899);







const OneTruckBody = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.all(/* import() */[__webpack_require__.e(147), __webpack_require__.e(919)]).then(__webpack_require__.bind(__webpack_require__, 7919)), {
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GlobalComponents_Spinner__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7919)],
    modules: ["truck\\[truck].js -> " + "../../components/TrucksComponents/OneTruckBody"]
  }
});





const OneBus = ({
  truckData
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {
    initial: "initial",
    animate: "animate",
    variants: _components_GlobalComponents_Initaltransition__WEBPACK_IMPORTED_MODULE_3__/* .pageVariants */ .wz,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GlobalComponents_Carousel__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: "/img/3.jpg",
      className: "img-fluid mx-auto d-none logo",
      width: "220px",
      id: "contibus-logo",
      alt: "logo"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_7__.Fade, {
      triggerOnce: true,
      direction: "up",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex-center mt-5 mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_6__.MDBBtn, {
          id: "back-button",
          color: "warning",
          onClick: () => {
            router.back();
          },
          className: "my-1 black-text roundedbtn font-weight-bolder",
          children: ["\xAB ", router.locale === "en" ? "Back" : "Vissza"]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OneTruckBody, {
      thistruck: truckData
    })]
  });
};

async function getServerSideProps(context) {
  const truckData = await (0,_lib_SetContentFulData__WEBPACK_IMPORTED_MODULE_9__/* .setOneContentfulData */ .R)("trucks", context.query.truck);
  return {
    props: {
      truckData: truckData ? truckData[0] : null
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (OneBus);

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 8777:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Close");;

/***/ }),

/***/ 1084:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Eco");;

/***/ }),

/***/ 9142:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/LineWeight");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [477,555,616,899], function() { return __webpack_exec__(4477); });
module.exports = __webpack_exports__;

})();