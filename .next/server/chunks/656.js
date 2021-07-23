exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 4974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2436);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);








const Cardbodys = ({
  item,
  what
}) => {
  const {
    0: click,
    1: setclick
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: item ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_2__.MDBCard, {
      className: "rounded my-4 my-lg-0 kartya muzeumbusz",
      onClick: () => {
        setclick(!click);
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: what === "Muzeum" ? `https:${item.fields.picture.fields.file.url}?&fm=webp&q=80` : what === "Table" ? `https:${item.fields.pictures[0].fields.file.url}?&fm=webp&q=80` : what === "Trucks" ? `https:${item.fields.pictures[0].fields.file.url}?&fm=webp&q=80` : null,
        alt: `${item.fields.bus || item.fields.truck} ${what === "Muzeum" ? "Múzeum" : what === "Trucks" ? "Teherautó" : "Busz"}`,
        className: "img-fluid rounded"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_2__.MDBCardBody, {
        className: click ? "rounded text-center muzeumcardbody d-md-block" : "close text-center muzeumcardbody d-md-block",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
          className: "card-title font-weight-bold pb-2 bustitle",
          children: item.fields.bus || item.fields.truck
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: `card-text mt-3 ${what === "Table" && "d-lg-inline d-sm-none"}`,
          children: locale === "en" ? item.fields.enTitle : item.fields.title
        }), what === "Muzeum" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "card-text d-sm-none d-md-inline",
          children: item.fields.desc
        }) : what === "Trucks" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "card-text d-sm-none d-md-inline",
            children: item.fields.desc
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "card-text font-weight-bolder",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: `/truck/${item.fields.id}`,
              passHref: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {
                  color: "warning",
                  className: "roundedbtn black-text mt-5 mt-sm-3 mx-auto mt-lg-5 muzeumbtn",
                  children: [locale === "en" ? "More " : "Bővebben ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "d-sm-none d-md-inline",
                    children: "\xBB"
                  })]
                })
              })
            })
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "card-text font-weight-bolder",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: `/bus/${item.fields.id}`,
            passHref: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(mdbreact__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {
                color: "warning",
                className: "roundedbtn black-text mt-5 mt-sm-3 mx-auto mt-lg-5 muzeumbtn",
                children: [locale === "en" ? "More " : "Bővebben ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  className: "d-sm-none d-md-inline",
                  children: "\xBB"
                })]
              })
            })
          })
        })]
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__.MDBCard, {
      className: "invisible"
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cardbodys);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;