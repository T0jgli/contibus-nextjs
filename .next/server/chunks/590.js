exports.id = 590;
exports.ids = [590];
exports.modules = {

/***/ 8590:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6302);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);





const Fslightboxes = ({
  imgtoggler,
  setimgtoggler,
  data,
  name,
  gallery
}) => {
  const {
    0: imgs,
    1: setimgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (gallery) {
      setimgs(data);
    } else if (name) {
      if (data.length > 0) setimgs(data.map(pict => `https://${pict.fields.file.url}?&fm=webp&q=80`));
    } else {
      setimgs(data && Array.from({
        length: data.length
      }, (_, i) => {
        return `http:${data[i].fields.pictures[0].fields.file.url}?&fm=webp&q=80`;
      }));
    }
  }, [data, name]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgtoggler.toggler && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default()), {
      mainSrc: imgs[imgtoggler.slide],
      nextSrc: imgs[(imgtoggler.slide + 1) % data.length],
      prevSrc: imgs[(imgtoggler.slide + data.length - 1) % data.length],
      onCloseRequest: () => {
        setimgtoggler({
          toggler: false,
          slide: 0
        });
      },
      onMovePrevRequest: () => setimgtoggler({
        toggler: imgtoggler.toggler,
        slide: (imgtoggler.slide + data.length - 1) % data.length
      }),
      onMoveNextRequest: () => setimgtoggler({
        toggler: imgtoggler.toggler,
        slide: (imgtoggler.slide + 1) % data.length
      }),
      imageCaption: !gallery && imgtoggler.slide + 1 + "/" + data.length,
      imageTitle: !gallery && !Boolean(name) ? data[imgtoggler.slide].fields.bus : name
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Fslightboxes);

/***/ })

};
;