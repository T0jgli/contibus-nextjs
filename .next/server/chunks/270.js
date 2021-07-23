exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 8865:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ControlPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6285);
/* harmony import */ var _material_ui_icons_ControlPoint__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ControlPoint__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);








const Datatable = ({
  data,
  imgtoggler,
  setimgtoggler,
  dataid
}) => {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
    className: "tablesor",
    id: data.fields.bus,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
      className: "text-center py-3 pt-lg-5 pb-lg-4 keprow",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        alt: `${data.fields.bus} busz`,
        onClick: () => {
          setimgtoggler({
            toggler: !imgtoggler.toggler,
            slide: dataid - 1
          });
        },
        className: "img img-rounded img-thumbnail z-depth-1 thumbnailkep",
        style: {
          cursor: "pointer"
        },
        src: `https://${data.fields.pictures[0].fields.file.url}?&fm=webp&q=80`
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
      className: "text-lg-left middletd py-lg-5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
        className: "font-weight-bold",
        children: data.fields.bus
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mb-1 mt-2",
        children: locale === "en" ? data.fields.enTitle : data.fields.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "",
        style: {
          maxWidth: "100%"
        },
        children: data.fields.desc
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: "mb-2 mt-2 mb-lg-3 mt-lg-3 d-none d-lg-block"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "d-flex mx-3 justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: `/bus/${data.fields.id.replaceAll(/\s+/g, "-")}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
            title: locale === "en" ? "More" : "Bővebben",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
              className: "morebtn",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ControlPoint__WEBPACK_IMPORTED_MODULE_2___default()), {})
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
      className: "dijaktext",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "m-0 pt-lg-5 mt-lg-3",
        children: `${locale === "en" ? "Km charge:" : "Km díj:"} ${data.fields.kmdij.toLocaleString()} ${"Ft / km"}`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mb-2",
        children: `${locale === "en" ? "Hourly rate:" : "Óradíj:"} ${data.fields.oradij.toLocaleString()} ${locale === "en" ? "Ft / hour" : "Ft / óra"}`
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Datatable);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;