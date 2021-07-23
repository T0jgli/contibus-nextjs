(function() {
var exports = {};
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 4183:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_trucks; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/GlobalComponents/Carousel.js
var Carousel = __webpack_require__(5616);
// EXTERNAL MODULE: ./components/GlobalComponents/Initaltransition.js
var Initaltransition = __webpack_require__(555);
// EXTERNAL MODULE: external "mdbreact"
var external_mdbreact_ = __webpack_require__(2436);
// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__(104);
// EXTERNAL MODULE: ./components/BusesComponents/Carddeck.js
var Carddeck = __webpack_require__(9543);
;// CONCATENATED MODULE: ./components/TrucksComponents/TrucksBody.js










const TrucksBody = () => {
  const trucksData = (0,external_react_redux_.useSelector)(state => state.app.trucksData);
  const {
    locale
  } = (0,router_.useRouter)();
  let idd = 0;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-center py-4 main mb-5 busesothers",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: "py-3",
          children: locale === "en" ? "In 2021, we have expanded our activities with freight transport!" : "2021-ben bővítettük tevékenységünket teherszállítással!"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: locale === "en" ? "We currently have 4 vehicles. Our vehicles have a total weight of 12,15,18,18 tonna. We are waiting for our future customers!" : "Jelenleg 4 db járművel rendelkezünk. Gépjárműveink 12,15,18,18 össztömegűek. Várjuk leendő megrendelőinket!"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://www.facebook.com/Neoline-ContiTrans-101101795149788",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_mdbreact_.MDBIcon, {
            fab: true,
            icon: "facebook-square",
            size: "2x",
            className: "",
            style: {
              cursor: "pointer"
            }
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
      direction: "down",
      triggerOnce: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-center text-muted my-4",
        id: "buses-text",
        children: locale === "en" ? "Our trucks" : "Teherautóink"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-center my-5 mx-auto px-lg-0",
      id: "trucks-container",
      children: trucksData === null || trucksData === void 0 ? void 0 : trucksData.map((item, index, array) => {
        if ((index + 1) % 2 !== 0) {
          idd++;
          return /*#__PURE__*/jsx_runtime_.jsx(Carddeck.default, {
            idd: idd,
            itemid: index + 1,
            item: item,
            nextitemid: index + 2,
            nextitem: array[index + 1],
            what: "Trucks"
          }, index);
        } else {
          return null;
        }
      })
    })]
  });
};

/* harmony default export */ var TrucksComponents_TrucksBody = (TrucksBody);
// EXTERNAL MODULE: ./lib/redux/reducers.js
var reducers = __webpack_require__(3147);
// EXTERNAL MODULE: ./lib/SetContentFulData.js
var SetContentFulData = __webpack_require__(3899);
;// CONCATENATED MODULE: ./pages/trucks.js














const trucks = ({
  trucksData
}) => {
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    dispatch((0,reducers/* settrucksData */.zp)(trucksData));
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.section, {
      initial: "initial",
      animate: "animate",
      variants: Initaltransition/* pageVariants */.wz,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Carousel/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(TrucksComponents_TrucksBody, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: router.locale === "en" ? "Our Trucks - ContiBus - Specialist Coach Travel" : "Teherautóink - ContiBus - Az utazás szakértői"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "https://contibus.hu/img/3.jpg"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: "https://contibus.hu/img/3.jpg"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: "https://contibus.hu"
      })]
    })]
  });
};

async function getServerSideProps() {
  const trucksData = await (0,SetContentFulData/* default */.Z)("trucks", "sys.createdAt");
  return {
    props: {
      trucksData: trucksData || null
    }
  };
}
/* harmony default export */ var pages_trucks = (trucks);

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
var __webpack_exports__ = __webpack_require__.X(0, [477,555,616,147,899,543], function() { return __webpack_exec__(4183); });
module.exports = __webpack_exports__;

})();